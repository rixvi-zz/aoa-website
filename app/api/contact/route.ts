import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/types';
import { validateField, sanitizeFormData } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Check honeypot field
    const honeypot = formData.get('website') as string;
    if (honeypot) {
      // Silent fail for bots
      return NextResponse.json({ success: true, message: 'Thank you for your message!' });
    }

    // Extract form data
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      country: formData.get('country') as string,
      message: formData.get('message') as string,
    };

    // Sanitize form data
    const sanitizedData = sanitizeFormData(data);

    // Validate all fields
    const errors: Partial<ContactFormData> = {};
    Object.keys(sanitizedData).forEach(key => {
      const field = key as keyof ContactFormData;
      const error = validateField(field, sanitizedData[field]);
      if (error) {
        errors[field] = error;
      }
    });

    // If there are validation errors, return them
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ 
        success: false, 
        message: 'Please correct the errors in your form.',
        errors 
      }, { status: 400 });
    }

    // Here you would typically send the email or save to database
    // For now, we'll just log it and return success
    console.log('Contact form submission:', sanitizedData);

    // TODO: Implement email sending logic here
    // Example with Resend, SendGrid, or other email service:
    /*
    await sendEmail({
      to: 'info@aoafoods.com',
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Company:</strong> ${sanitizedData.company}</p>
        <p><strong>Country:</strong> ${sanitizedData.country}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message}</p>
      `
    });
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you within 24 hours.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'An unexpected error occurred. Please try again.' 
    }, { status: 500 });
  }
}