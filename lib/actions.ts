'use server';

import { ContactFormData } from '@/types';
import { validateContactForm, sanitizeFormData } from '@/lib/validations';

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 3600000); // 1 hour

function getRateLimitKey(ip: string): string {
  return `contact_form_${ip}`;
}

function isRateLimited(ip: string): boolean {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 3; // Max 3 submissions per 15 minutes

  const current = rateLimitStore.get(key);
  
  if (!current || now > current.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (current.count >= maxRequests) {
    return true;
  }

  current.count++;
  return false;
}

function detectSpam(message: string): boolean {
  const spamKeywords = [
    'viagra', 'casino', 'lottery', 'winner', 'congratulations', 
    'click here', 'free money', 'make money fast', 'work from home',
    'guaranteed', 'no risk', 'limited time', 'act now'
  ];
  
  const messageText = message.toLowerCase();
  return spamKeywords.some(keyword => messageText.includes(keyword));
}

export async function submitContactForm(formData: ContactFormData, honeypot?: string) {
    try {
        // Get client IP (in production, use proper IP detection from headers)
        const ip = '127.0.0.1'; // Placeholder - in production, get from request headers
        
        // Rate limiting check
        if (isRateLimited(ip)) {
            return {
                success: false,
                message: 'Too many submissions. Please try again in 15 minutes.',
            };
        }

        // Honeypot check (silent fail for bots)
        if (honeypot && honeypot.trim() !== '') {
            return {
                success: false,
                message: 'Invalid submission.',
            };
        }

        // Sanitize the form data
        const sanitizedData = sanitizeFormData(formData);

        // Validate the form data
        const validationErrors = validateContactForm(sanitizedData);

        if (validationErrors.length > 0) {
            return {
                success: false,
                message: 'Please correct the errors in the form.',
                errors: validationErrors
            };
        }

        // Spam content detection
        if (detectSpam(sanitizedData.message)) {
            return {
                success: false,
                message: 'Message contains inappropriate content.',
            };
        }

        // Additional validation for message length
        if (sanitizedData.message.length < 10) {
            return {
                success: false,
                message: 'Message must be at least 10 characters long.',
            };
        }

        if (sanitizedData.message.length > 1000) {
            return {
                success: false,
                message: 'Message must be less than 1000 characters.',
            };
        }

        // In a real application, you would:
        // 1. Save to database
        // 2. Send email notification
        // 3. Integrate with CRM
        // 4. Send confirmation email to user

        // For now, we'll simulate the process
        console.log('Contact form submission:', {
            name: sanitizedData.name,
            email: sanitizedData.email,
            company: sanitizedData.company,
            country: sanitizedData.country,
            message: sanitizedData.message,
            timestamp: new Date().toISOString(),
            ip: ip
        });

        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // TODO: Implement actual email sending and database storage
        // Example integrations:
        // - Send email using Resend, SendGrid, or Nodemailer
        // - Save to database (PostgreSQL, MongoDB, etc.)
        // - Send to CRM (HubSpot, Salesforce, etc.)
        // - Send confirmation email to user

        return {
            success: true,
            message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
            data: {
                submittedAt: new Date().toISOString(),
                referenceId: `AOA-${Date.now()}`
            }
        };

    } catch (error) {
        console.error('Contact form submission error:', error);

        return {
            success: false,
            message: 'An unexpected error occurred. Please try again or contact us directly.',
            error: process.env.NODE_ENV === 'development' ? error : undefined
        };
    }
}

// Helper function for future email integration
export async function sendContactNotification(data: ContactFormData) {
    // TODO: Implement email sending logic
    // This could use services like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP

    const emailContent = {
        to: process.env.CONTACT_EMAIL || 'info@aoa-trade.com',
        subject: `New Contact Form Submission from ${data.name}`,
        html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Country:</strong> ${data.country}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
    `
    };

    console.log('Email notification would be sent:', emailContent);

    // Return success for now
    return { success: true };
}

// Helper function for future confirmation email
export async function sendConfirmationEmail(data: ContactFormData) {
    // TODO: Implement confirmation email to user
    const confirmationContent = {
        to: data.email,
        subject: 'Thank you for contacting AOA - We\'ll be in touch soon!',
        html: `
      <h2>Thank you for your inquiry, ${data.name}!</h2>
      <p>We've received your message and will get back to you within 24 hours.</p>
      <p><strong>Your message:</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p>Best regards,<br>AOA Import & Export Team</p>
      <p>Email: info@aoa-trade.com<br>Phone: +91 98765 43210</p>
    `
    };

    console.log('Confirmation email would be sent:', confirmationContent);

    // Return success for now
    return { success: true };
}