import { Resend } from 'resend';
import { ContactFormData } from '@/types';

// Initialize Resend only when needed to avoid build-time errors
let resend: Resend | null = null;

function getResendInstance(): Resend {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend!;
}

// Email template interface
export interface EmailData extends ContactFormData {
  ip?: string;
  userAgent?: string;
  timestamp: string;
}

// Create HTML email template
function createEmailTemplate(data: EmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Enquiry | AOA Foods</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f8f9fa;
    }
    .container {
      background: #ffffff;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #0F2A44 0%, #1E40AF 100%);
      color: white;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 25px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }
    .section {
      margin-bottom: 25px;
    }
    .section h2 {
      color: #0F2A44;
      font-size: 18px;
      margin-bottom: 15px;
      padding-bottom: 8px;
      border-bottom: 2px solid #e9ecef;
    }
    .field {
      margin-bottom: 15px;
    }
    .field-label {
      font-weight: 600;
      color: #0F2A44;
      display: inline-block;
      min-width: 100px;
      margin-right: 10px;
    }
    .field-value {
      color: #495057;
      word-wrap: break-word;
    }
    .message-box {
      background-color: #f8f9fa;
      border-left: 4px solid #1E40AF;
      padding: 15px;
      border-radius: 0 6px 6px 0;
      font-style: italic;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e9ecef;
      font-size: 14px;
      color: #6c757d;
      text-align: center;
    }
    .metadata {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 6px;
      font-size: 13px;
      color: #6c757d;
    }
    @media (max-width: 600px) {
      body { padding: 10px; }
      .container { padding: 20px; }
      .header { padding: 20px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🌍 New Website Enquiry</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">AOA Foods Contact Form Submission</p>
    </div>

    <div class="section">
      <h2>📋 Contact Details</h2>
      <div class="field">
        <span class="field-label">Name:</span>
        <span class="field-value">${data.name}</span>
      </div>
      <div class="field">
        <span class="field-label">Email:</span>
        <span class="field-value"><a href="mailto:${data.email}" style="color: #1E40AF;">${data.email}</a></span>
      </div>
      ${data.phone ? `
      <div class="field">
        <span class="field-label">Phone:</span>
        <span class="field-value"><a href="tel:${data.phone}" style="color: #1E40AF;">${data.phone}</a></span>
      </div>
      ` : ''}
      <div class="field">
        <span class="field-label">Company:</span>
        <span class="field-value">${data.company}</span>
      </div>
      <div class="field">
        <span class="field-label">Country:</span>
        <span class="field-value">${data.country}</span>
      </div>
      ${data.subject ? `
      <div class="field">
        <span class="field-label">Subject:</span>
        <span class="field-value">${data.subject}</span>
      </div>
      ` : ''}
    </div>

    <div class="section">
      <h2>💬 Message</h2>
      <div class="message-box">
        ${data.message.replace(/\n/g, '<br>')}
      </div>
    </div>

    <div class="section">
      <h2>🔍 Submission Details</h2>
      <div class="metadata">
        <div class="field">
          <span class="field-label">Submitted At:</span>
          <span class="field-value">${data.timestamp}</span>
        </div>
        ${data.ip ? `
        <div class="field">
          <span class="field-label">IP Address:</span>
          <span class="field-value">${data.ip}</span>
        </div>
        ` : ''}
        ${data.userAgent ? `
        <div class="field">
          <span class="field-label">User Agent:</span>
          <span class="field-value" style="font-size: 11px;">${data.userAgent}</span>
        </div>
        ` : ''}
      </div>
    </div>

    <div class="footer">
      <p><strong>AOA Foods Private Limited</strong></p>
      <p>This email was automatically generated from the contact form on www.aoafoods.com</p>
      <p style="margin-top: 15px;">
        <a href="https://www.aoafoods.com" style="color: #1E40AF;">🌐 Visit Website</a> | 
        <a href="mailto:${data.email}" style="color: #1E40AF;">📧 Reply to Customer</a>
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

// Create plain text version
function createPlainTextTemplate(data: EmailData): string {
  return `
NEW WEBSITE ENQUIRY | AOA FOODS
================================

New enquiry received from: ${data.name}

CONTACT DETAILS:
Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
Company: ${data.company}
Country: ${data.country}
${data.subject ? `Subject: ${data.subject}` : ''}

MESSAGE:
${data.message}

SUBMISSION DETAILS:
Submitted At: ${data.timestamp}
${data.ip ? `IP Address: ${data.ip}` : ''}
${data.userAgent ? `User Agent: ${data.userAgent}` : ''}

---
This email was automatically generated from the contact form on www.aoafoods.com
AOA Foods Private Limited
  `;
}

// Send contact form email
export async function sendContactEmail(
  formData: ContactFormData,
  metadata: {
    ip?: string;
    userAgent?: string;
  } = {}
): Promise<{ success: boolean; message: string; error?: any }> {

  const isDevelopment = process.env.NODE_ENV === 'development';

  // Enhanced logging for email service
  function logEmailError(stage: string, error: any, context?: any) {
    const timestamp = new Date().toISOString();
    console.error(`[EMAIL_SERVICE_ERROR] ${stage}:`, {
      timestamp,
      stage,
      environment: process.env.NODE_ENV,
      customerEmail: formData.email,
      customerName: formData.name,
      context,
      error: {
        message: error?.message,
        code: error?.code,
        statusCode: error?.statusCode,
        name: error?.name
      }
    });

    if (isDevelopment && error?.stack) {
      console.error(`[EMAIL_SERVICE_ERROR] ${stage} - Stack:`, error.stack);
    }

    // Log complete Resend error details
    if (error && typeof error === 'object') {
      console.error(`[EMAIL_SERVICE_ERROR] ${stage} - Complete Error:`, JSON.stringify(error, null, 2));
    }
  }

  // Validate required environment variables
  if (!process.env.RESEND_API_KEY) {
    const configError = new Error('RESEND_API_KEY environment variable is not configured');
    logEmailError('CONFIG_VALIDATION', configError);

    return {
      success: false,
      message: isDevelopment
        ? 'Email service configuration error: Missing RESEND_API_KEY'
        : 'Email service is not properly configured.',
      error: 'Missing RESEND_API_KEY'
    };
  }

  if (!process.env.CONTACT_EMAIL) {
    const configError = new Error('CONTACT_EMAIL environment variable is not configured');
    logEmailError('CONFIG_VALIDATION', configError);

    return {
      success: false,
      message: isDevelopment
        ? 'Email service configuration error: Missing CONTACT_EMAIL'
        : 'Email service is not properly configured.',
      error: 'Missing CONTACT_EMAIL'
    };
  }

  try {
    // Prepare email data with metadata
    let emailData: EmailData;
    try {
      emailData = {
        ...formData,
        ...metadata,
        timestamp: new Intl.DateTimeFormat('en-IN', {
          dateStyle: 'full',
          timeStyle: 'long',
          timeZone: 'Asia/Kolkata'
        }).format(new Date())
      };
    } catch (timestampError) {
      logEmailError('TIMESTAMP_GENERATION', timestampError, { formData, metadata });

      // Fallback timestamp
      emailData = {
        ...formData,
        ...metadata,
        timestamp: new Date().toISOString()
      };
    }

    // Create email templates
    let htmlTemplate: string;
    let textTemplate: string;

    try {
      htmlTemplate = createEmailTemplate(emailData);
      textTemplate = createPlainTextTemplate(emailData);
    } catch (templateError) {
      logEmailError('TEMPLATE_GENERATION', templateError, { emailData });

      return {
        success: false,
        message: isDevelopment
          ? `Email template generation failed: ${templateError instanceof Error ? templateError.message : 'Unknown template error'}`
          : 'Failed to prepare email. Please try again.',
        error: templateError
      };
    }

    // Get Resend instance
    let resendInstance: Resend;
    try {
      resendInstance = getResendInstance();
      if (!resendInstance) {
        throw new Error('Failed to initialize Resend instance');
      }
    } catch (initError) {
      logEmailError('RESEND_INITIALIZATION', initError);

      return {
        success: false,
        message: isDevelopment
          ? `Resend initialization failed: ${initError instanceof Error ? initError.message : 'Unknown init error'}`
          : 'Email service initialization failed. Please try again.',
        error: initError
      };
    }

    // Send email using Resend
    console.log(`[EMAIL_SERVICE] Attempting to send email to ${process.env.CONTACT_EMAIL} from ${formData.name} (${formData.email})`);

    let result;
    try {
      result = await resendInstance.emails.send({
        from: 'AOA Foods <noreply@aoafoods.com>', // This will be updated when domain is verified
        to: [process.env.CONTACT_EMAIL],
        replyTo: formData.email, // Allow direct reply to customer
        subject: `New Website Enquiry | AOA Foods - ${formData.name}`,
        html: htmlTemplate,
        text: textTemplate,
        tags: [
          { name: 'type', value: 'contact-form' },
          { name: 'source', value: 'website' },
          { name: 'country', value: formData.country.toLowerCase().replace(/\s+/g, '-') }
        ]
      });
    } catch (sendError) {
      logEmailError('EMAIL_SEND_REQUEST', sendError, {
        recipientEmail: process.env.CONTACT_EMAIL,
        senderEmail: formData.email,
        subject: `New Website Enquiry | AOA Foods - ${formData.name}`
      });

      return {
        success: false,
        message: isDevelopment
          ? `Email send request failed: ${sendError instanceof Error ? sendError.message : 'Unknown send error'}`
          : 'Failed to send email. Please try again.',
        error: sendError
      };
    }

    // Check for API errors in the response
    if (result.error) {
      logEmailError('RESEND_API_RESPONSE_ERROR', result.error, {
        recipientEmail: process.env.CONTACT_EMAIL,
        senderEmail: formData.email,
        resultData: result.data
      });

      return {
        success: false,
        message: isDevelopment
          ? `Resend API error: ${result.error.message || JSON.stringify(result.error)}`
          : 'Failed to send email. Please try again.',
        error: result.error
      };
    }

    // Log successful email sending
    console.log(`[EMAIL_SERVICE_SUCCESS] Email sent successfully:`, {
      timestamp: new Date().toISOString(),
      emailId: result.data?.id,
      recipient: process.env.CONTACT_EMAIL,
      customerName: formData.name,
      customerEmail: formData.email,
      customerCountry: formData.country
    });

    return {
      success: true,
      message: 'Thank you for contacting AOA Foods. Our team will get back to you shortly.'
    };

  } catch (error) {
    logEmailError('UNEXPECTED_EMAIL_ERROR', error, {
      formData: {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        country: formData.country,
        messageLength: formData.message?.length || 0
      },
      metadata
    });

    return {
      success: false,
      message: isDevelopment
        ? `Unexpected email service error: ${error instanceof Error ? error.message : 'Unknown error'}`
        : 'An unexpected error occurred. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Enhanced test email configuration with detailed error reporting
export async function testEmailConfiguration(): Promise<{
  success: boolean;
  message: string;
  details?: any;
}> {
  const isDevelopment = process.env.NODE_ENV === 'development';

  console.log('[EMAIL_TEST] Starting email configuration test...');

  if (!process.env.RESEND_API_KEY) {
    const error = 'RESEND_API_KEY environment variable is not set';
    console.error('[EMAIL_TEST_ERROR] Configuration:', error);

    return {
      success: false,
      message: error,
      details: { missingVar: 'RESEND_API_KEY' }
    };
  }

  if (!process.env.CONTACT_EMAIL) {
    const error = 'CONTACT_EMAIL environment variable is not set';
    console.error('[EMAIL_TEST_ERROR] Configuration:', error);

    return {
      success: false,
      message: error,
      details: { missingVar: 'CONTACT_EMAIL' }
    };
  }

  try {
    console.log(`[EMAIL_TEST] Testing connection to Resend API...`);
    console.log(`[EMAIL_TEST] Target email: ${process.env.CONTACT_EMAIL}`);

    const resendInstance = getResendInstance();
    const testResult = await resendInstance.emails.send({
      from: 'AOA Foods <noreply@aoafoods.com>',
      to: [process.env.CONTACT_EMAIL],
      subject: 'Email Configuration Test - AOA Foods',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #0F2A44;">✅ Email Configuration Test</h2>
          <p>This is a test email to verify your AOA Foods contact form email configuration.</p>
          <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Test Details:</strong></p>
            <ul>
              <li>Environment: ${process.env.NODE_ENV || 'unknown'}</li>
              <li>Timestamp: ${new Date().toISOString()}</li>
              <li>Recipient: ${process.env.CONTACT_EMAIL}</li>
            </ul>
          </div>
          <p>If you received this email, your configuration is working correctly!</p>
        </div>
      `,
      text: `
EMAIL CONFIGURATION TEST - AOA FOODS
====================================

This is a test email to verify your AOA Foods contact form email configuration.

Test Details:
- Environment: ${process.env.NODE_ENV || 'unknown'}
- Timestamp: ${new Date().toISOString()}
- Recipient: ${process.env.CONTACT_EMAIL}

If you received this email, your configuration is working correctly!
      `,
      tags: [
        { name: 'type', value: 'configuration-test' },
        { name: 'source', value: 'api-test' }
      ]
    });

    if (testResult.error) {
      console.error('[EMAIL_TEST_ERROR] Resend API returned error:', testResult.error);

      return {
        success: false,
        message: isDevelopment
          ? `Configuration test failed: ${testResult.error.message || JSON.stringify(testResult.error)}`
          : 'Email configuration test failed',
        details: {
          error: testResult.error,
          apiResponse: testResult
        }
      };
    }

    console.log('[EMAIL_TEST_SUCCESS] Test email sent successfully:', {
      emailId: testResult.data?.id,
      recipient: process.env.CONTACT_EMAIL
    });

    return {
      success: true,
      message: 'Email configuration test successful! Check your inbox.',
      details: {
        emailId: testResult.data?.id,
        recipient: process.env.CONTACT_EMAIL,
        timestamp: new Date().toISOString()
      }
    };

  } catch (error) {
    console.error('[EMAIL_TEST_ERROR] Unexpected error during test:', error);

    if (isDevelopment && error instanceof Error && error.stack) {
      console.error('[EMAIL_TEST_ERROR] Stack trace:', error.stack);
    }

    return {
      success: false,
      message: isDevelopment
        ? `Configuration test error: ${error instanceof Error ? error.message : 'Unknown error'}`
        : 'Email configuration test failed',
      details: {
        error: error instanceof Error ? {
          message: error.message,
          name: error.name,
          stack: isDevelopment ? error.stack : undefined
        } : error
      }
    };
  }
}