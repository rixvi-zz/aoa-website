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

export async function POST(request: NextRequest) {
  try {
    // Get client information for rate limiting and logging
    const clientId = getClientId(request);
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               clientId;

    // Check rate limiting
    const rateLimitResult = checkRateLimit(clientId);
    
    if (!rateLimitResult.allowed) {
      console.warn(`Rate limit exceeded for client: ${clientId}`);
      
      return NextResponse.json(
        { 
          success: false, 
          message: rateLimitResult.message || 'Too many requests. Please try again later.',
          code: 'RATE_LIMITED'
        }, 
        { 
          status: 429,
          headers: {
            ...securityHeaders,
            ...getRateLimitHeaders(rateLimitResult),
            'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString()
          }
        }
      );
    }

    // Parse form data
    const formData = await request.formData();
    
    // Check honeypot field for basic bot detection
    const honeypot = formData.get('website') as string;
    if (honeypot && honeypot.trim().length > 0) {
      console.warn(`Honeypot triggered by client: ${clientId}`);
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
    const sanitizedData = sanitizeFormData(data);

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

    // If there are validation errors, return them
    if (Object.keys(errors).length > 0) {
      console.warn(`Validation errors for client ${clientId}:`, errors);
      
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please correct the errors in your form.',
          errors,
          code: 'VALIDATION_ERROR'
        }, 
        { 
          status: 400,
          headers: {
            ...securityHeaders,
            ...getRateLimitHeaders(rateLimitResult)
          }
        }
      );
    }

    // Advanced spam detection
    const spamCheck = detectSpam({
      name: sanitizedData.name,
      email: sanitizedData.email,
      message: sanitizedData.message,
      company: sanitizedData.company,
      honeypot: honeypot
    });

    if (spamCheck.isSpam) {
      console.warn(`Spam detected for client ${clientId}: ${spamCheck.reason} (score: ${spamCheck.score})`);
      
      // For high-confidence spam, return an error
      if (spamCheck.score >= 75) {
        return NextResponse.json(
          { 
            success: false, 
            message: 'Your message appears to be spam. Please contact us directly if this is an error.',
            code: 'SPAM_DETECTED'
          }, 
          { 
            status: 400,
            headers: securityHeaders
          }
        );
      }
      
      // For lower-confidence spam, silently flag but still process
      console.warn(`Potential spam (score: ${spamCheck.score}) from ${clientId}, but processing anyway`);
    }

    // Attempt to send email
    const emailResult = await sendContactEmail(sanitizedData, {
      ip: ip,
      userAgent: userAgent
    });

    if (!emailResult.success) {
      console.error(`Email sending failed for client ${clientId}:`, emailResult.error);
      
      return NextResponse.json(
        { 
          success: false, 
          message: 'We encountered an issue sending your message. Please try again or contact us directly.',
          code: 'EMAIL_ERROR'
        }, 
        { 
          status: 500,
          headers: {
            ...securityHeaders,
            ...getRateLimitHeaders(rateLimitResult)
          }
        }
      );
    }

    // Log successful submission (without sensitive data)
    console.log(`Successful contact form submission from ${sanitizedData.name} (${sanitizedData.email}) - ${sanitizedData.country}`);

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: emailResult.message
      },
      { 
        headers: {
          ...securityHeaders,
          ...getRateLimitHeaders(rateLimitResult)
        }
      }
    );

  } catch (error) {
    console.error('Contact form API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred. Please try again later.',
        code: 'INTERNAL_ERROR'
      }, 
      { 
        status: 500,
        headers: securityHeaders
      }
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