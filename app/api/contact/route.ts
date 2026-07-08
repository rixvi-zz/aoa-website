import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/types';
import { validateField, sanitizeFormData } from '@/lib/validations';
import { sendContactEmail } from '@/lib/email';
import { checkRateLimit, getClientId, getRateLimitHeaders, detectSpam } from '@/lib/rate-limit';

// Security headers for all responses
const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
};

// Helper to determine if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development';

// Check if we're using Resend in testing mode
const isResendTestMode = !process.env.RESEND_DOMAIN_VERIFIED;

// Get appropriate contact email based on Resend configuration
function getContactEmail(): string {
  const configuredEmail = process.env.CONTACT_EMAIL;
  
  // If Resend is in testing mode and email doesn't match the registered email,
  // fall back to the registered email to prevent 500 errors
  if (isResendTestMode && configuredEmail && !configuredEmail.includes('rizvinajeeb1@gmail.com')) {
    console.warn('[CONTACT_API] Using fallback email for Resend testing mode');
    return 'rizvinajeeb1@gmail.com'; // Fallback to registered email
  }
  
  return configuredEmail || 'rizvinajeeb1@gmail.com';
}

// Enhanced error logging utility
function logError(type: string, message: string, error?: any, context?: any) {
  const timestamp = new Date().toISOString();
  const logData = {
    timestamp,
    type,
    message,
    environment: process.env.NODE_ENV,
    ...context
  };

  console.error(`[CONTACT_API_ERROR] ${type}:`, logData);

  if (error) {
    console.error(`[CONTACT_API_ERROR] ${type} - Error Details:`, error);

    // Log stack trace in development
    if (isDevelopment && error.stack) {
      console.error(`[CONTACT_API_ERROR] ${type} - Stack:`, error.stack);
    }
  }
}

// Helper to create error response with environment-specific details
function createErrorResponse(
  type: string,
  userMessage: string,
  statusCode: number,
  headers: Record<string, string> = {},
  error?: any,
  context?: any
): NextResponse {
  const response: any = {
    success: false,
    message: userMessage,
    code: type,
    timestamp: new Date().toISOString()
  };

  // Include detailed error information in development
  if (isDevelopment && error) {
    response.development = {
      error: error.message || error,
      stack: error.stack,
      context
    };
  }

  return NextResponse.json(response, {
    status: statusCode,
    headers: { ...securityHeaders, ...headers }
  });
}

export async function POST(request: NextRequest) {
  let clientId = 'unknown';
  let userAgent = 'unknown';
  let ip = 'unknown';

  try {
    // Get client information for rate limiting and logging
    clientId = getClientId(request);
    userAgent = request.headers.get('user-agent') || 'Unknown';
    ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      clientId;

    const requestContext = { clientId, userAgent, ip };

    // Check rate limiting
    const rateLimitResult = checkRateLimit(clientId);

    if (!rateLimitResult.allowed) {
      logError('RATE_LIMIT_EXCEEDED', `Client exceeded rate limit`, null, {
        ...requestContext,
        remaining: rateLimitResult.remaining,
        resetTime: rateLimitResult.resetTime
      });

      return createErrorResponse(
        'RATE_LIMITED',
        rateLimitResult.message || 'Too many requests. Please try again later.',
        429,
        {
          ...getRateLimitHeaders(rateLimitResult),
          'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString()
        }
      );
    }

    // Parse form data with error handling
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch (parseError) {
      logError('FORM_PARSE_ERROR', 'Failed to parse form data', parseError, requestContext);

      return createErrorResponse(
        'PARSE_ERROR',
        isDevelopment
          ? 'Failed to parse form data: ' + (parseError as Error).message
          : 'Invalid form data. Please try again.',
        400,
        {},
        parseError,
        requestContext
      );
    }

    // Check honeypot field for basic bot detection
    const honeypot = formData.get('website') as string;
    if (honeypot && honeypot.trim().length > 0) {
      logError('HONEYPOT_TRIGGERED', 'Bot detected via honeypot field', null, {
        ...requestContext,
        honeypotValue: honeypot
      });

      // Return success to not reveal to bots that we detected them
      return NextResponse.json(
        { success: true, message: 'Thank you for your message!' },
        { headers: securityHeaders }
      );
    }

    // Extract and validate form data
    const data: ContactFormData = {
      name: (formData.get('name') as string) || '',
      email: (formData.get('email') as string) || '',
      phone: (formData.get('phone') as string) || undefined,
      company: (formData.get('company') as string) || '',
      subject: (formData.get('subject') as string) || undefined,
      country: (formData.get('country') as string) || '',
      message: (formData.get('message') as string) || ''
    };

    // Remove empty optional fields
    if (data.phone === '') data.phone = undefined;
    if (data.subject === '') data.subject = undefined;

    // Sanitize form data to prevent XSS and injection attacks
    let sanitizedData: ContactFormData;
    try {
      sanitizedData = sanitizeFormData(data);
    } catch (sanitizeError) {
      logError('SANITIZATION_ERROR', 'Failed to sanitize form data', sanitizeError, {
        ...requestContext,
        formDataKeys: Object.keys(data)
      });

      return createErrorResponse(
        'SANITIZATION_ERROR',
        isDevelopment
          ? 'Data sanitization failed: ' + (sanitizeError as Error).message
          : 'Invalid form data. Please try again.',
        400,
        {},
        sanitizeError,
        requestContext
      );
    }

    // Validate all required fields
    const errors: Partial<ContactFormData> = {};
    const requiredFields: (keyof ContactFormData)[] = ['name', 'email', 'company', 'country', 'message'];

    for (const field of requiredFields) {
      const error = validateField(field, sanitizedData[field] || '');
      if (error) {
        errors[field] = error;
      }
    }

    // Validate optional fields if they have values
    if (sanitizedData.phone) {
      const phoneError = validateField('phone', sanitizedData.phone);
      if (phoneError) {
        errors.phone = phoneError;
      }
    }

    if (sanitizedData.subject) {
      const subjectError = validateField('subject', sanitizedData.subject);
      if (subjectError) {
        errors.subject = subjectError;
      }
    }

    // If there are validation errors, log and return them
    if (Object.keys(errors).length > 0) {
      logError('VALIDATION_ERROR', 'Form validation failed', null, {
        ...requestContext,
        validationErrors: errors,
        fieldCount: Object.keys(errors).length
      });

      const response: any = {
        success: false,
        message: 'Please correct the errors in your form.',
        errors,
        code: 'VALIDATION_ERROR',
        timestamp: new Date().toISOString()
      };

      // Add debug info in development
      if (isDevelopment) {
        response.development = {
          context: requestContext,
          sanitizedData: {
            ...sanitizedData,
            message: sanitizedData.message.substring(0, 100) + '...' // Truncate for logs
          }
        };
      }

      return NextResponse.json(response, {
        status: 400,
        headers: {
          ...securityHeaders,
          ...getRateLimitHeaders(rateLimitResult)
        }
      });
    }

    // Advanced spam detection
    let spamCheck;
    try {
      spamCheck = detectSpam({
        name: sanitizedData.name,
        email: sanitizedData.email,
        message: sanitizedData.message,
        company: sanitizedData.company,
        honeypot: honeypot
      });
    } catch (spamError) {
      logError('SPAM_DETECTION_ERROR', 'Spam detection failed', spamError, requestContext);

      // Continue processing if spam detection fails
      spamCheck = { isSpam: false, score: 0 };
    }

    if (spamCheck.isSpam) {
      logError('SPAM_DETECTED', `Spam detected in form submission`, null, {
        ...requestContext,
        spamScore: spamCheck.score,
        spamReason: spamCheck.reason,
        customerEmail: sanitizedData.email,
        customerName: sanitizedData.name
      });

      // For high-confidence spam, return an error
      if (spamCheck.score >= 75) {
        return createErrorResponse(
          'SPAM_DETECTED',
          'Your message appears to be spam. Please contact us directly if this is an error.',
          400
        );
      }

      // For lower-confidence spam, silently flag but still process
      console.warn(`[CONTACT_API] Potential spam (score: ${spamCheck.score}) from ${clientId}, processing anyway`);
    }

    // Attempt to send email
    let emailResult;
    try {
      emailResult = await sendContactEmail(sanitizedData, {
        ip: ip,
        userAgent: userAgent
      });
    } catch (emailError) {
      logError('EMAIL_SERVICE_ERROR', 'Email service threw exception', emailError, {
        ...requestContext,
        customerEmail: sanitizedData.email,
        customerName: sanitizedData.name,
        customerCountry: sanitizedData.country
      });

      return createErrorResponse(
        'EMAIL_ERROR',
        isDevelopment
          ? 'Email service error: ' + (emailError as Error).message
          : 'We encountered an issue sending your message. Please try again or contact us directly.',
        500,
        getRateLimitHeaders(rateLimitResult),
        emailError,
        requestContext
      );
    }

    if (!emailResult.success) {
      logError('EMAIL_SENDING_FAILED', 'Email sending returned failure', emailResult.error, {
        ...requestContext,
        customerEmail: sanitizedData.email,
        customerName: sanitizedData.name,
        customerCountry: sanitizedData.country,
        emailResultMessage: emailResult.message
      });

      return createErrorResponse(
        'EMAIL_ERROR',
        isDevelopment
          ? `Email sending failed: ${emailResult.message}${emailResult.error ? ' - ' + emailResult.error : ''}`
          : 'We encountered an issue sending your message. Please try again or contact us directly.',
        500,
        getRateLimitHeaders(rateLimitResult),
        emailResult.error,
        requestContext
      );
    }

    // Log successful submission (without sensitive data)
    console.log(`[CONTACT_API_SUCCESS] Form submitted successfully`, {
      timestamp: new Date().toISOString(),
      customerName: sanitizedData.name,
      customerEmail: sanitizedData.email,
      customerCountry: sanitizedData.country,
      clientId,
      spamScore: spamCheck.score
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: emailResult.message,
        timestamp: new Date().toISOString()
      },
      {
        headers: {
          ...securityHeaders,
          ...getRateLimitHeaders(rateLimitResult)
        }
      }
    );

  } catch (error) {
    // Log unexpected exceptions with full context
    logError('UNEXPECTED_ERROR', 'Unhandled exception in contact API', error, {
      clientId,
      userAgent,
      ip,
      url: request.url,
      method: request.method,
      headers: isDevelopment ? Object.fromEntries(request.headers.entries()) : undefined
    });

    return createErrorResponse(
      'INTERNAL_ERROR',
      isDevelopment
        ? 'Internal server error: ' + (error as Error).message
        : 'An unexpected error occurred. Please try again later.',
      500,
      {},
      error,
      { clientId, userAgent, ip }
    );
  }
}

// Handle OPTIONS request for CORS (if needed)
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      ...securityHeaders,
      'Allow': 'POST, OPTIONS'
    }
  });
}