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
  
  // Validate required environment variables
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return {
      success: false,
      message: 'Email service is not properly configured.',
      error: 'Missing RESEND_API_KEY'
    };
  }

  if (!process.env.CONTACT_EMAIL) {
    console.error('CONTACT_EMAIL is not configured');
    return {
      success: false,
      message: 'Email service is not properly configured.',
      error: 'Missing CONTACT_EMAIL'
    };
  }

  try {
    // Prepare email data with metadata
    const emailData: EmailData = {
      ...formData,
      ...metadata,
      timestamp: new Intl.DateTimeFormat('en-IN', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: 'Asia/Kolkata'
      }).format(new Date())
    };

    // Send email using Resend
    const resendInstance = getResendInstance();
    const result = await resendInstance.emails.send({
      from: 'AOA Foods <noreply@aoafoods.com>', // This will be updated when domain is verified
      to: [process.env.CONTACT_EMAIL],
      replyTo: formData.email, // Allow direct reply to customer
      subject: `New Website Enquiry | AOA Foods - ${formData.name}`,
      html: createEmailTemplate(emailData),
      text: createPlainTextTemplate(emailData),
      tags: [
        { name: 'type', value: 'contact-form' },
        { name: 'source', value: 'website' },
        { name: 'country', value: formData.country.toLowerCase().replace(/\s+/g, '-') }
      ]
    });

    if (result.error) {
      console.error('Resend API error:', result.error);
      return {
        success: false,
        message: 'Failed to send email. Please try again.',
        error: result.error
      };
    }

    console.log('Email sent successfully:', result.data?.id);
    
    return {
      success: true,
      message: 'Thank you for contacting AOA Foods. Our team will get back to you shortly.'
    };

  } catch (error) {
    console.error('Email service error:', error);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Test email configuration (for development)
export async function testEmailConfiguration(): Promise<{
  success: boolean;
  message: string;
  details?: any;
}> {
  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      message: 'RESEND_API_KEY environment variable is not set'
    };
  }

  if (!process.env.CONTACT_EMAIL) {
    return {
      success: false,
      message: 'CONTACT_EMAIL environment variable is not set'
    };
  }

  try {
    // Test with a minimal email
    const resendInstance = getResendInstance();
    const testResult = await resendInstance.emails.send({
      from: 'AOA Foods <noreply@aoafoods.com>',
      to: [process.env.CONTACT_EMAIL],
      subject: 'Email Configuration Test - AOA Foods',
      html: '<p>This is a test email to verify email configuration.</p>',
      text: 'This is a test email to verify email configuration.'
    });

    return {
      success: !testResult.error,
      message: testResult.error 
        ? `Configuration test failed: ${testResult.error.message}`
        : 'Email configuration is working correctly',
      details: testResult
    };

  } catch (error) {
    return {
      success: false,
      message: `Configuration test error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      details: error
    };
  }
}