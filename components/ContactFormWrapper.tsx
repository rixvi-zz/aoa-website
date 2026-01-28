'use client';

import { useState } from 'react';
import { ContactFormData, FormState } from '@/types';
import { validateField, sanitizeFormData } from '@/lib/validations';
import { cn } from '@/lib/utils';

export default function ContactFormWrapper() {
  const [formState, setFormState] = useState<FormState>({
    data: {
      name: '',
      email: '',
      company: '',
      country: '',
      message: ''
    },
    errors: {},
    isSubmitting: false,
    isSubmitted: false
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Handle input changes with real-time validation
  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: {
        ...prev.errors,
        [field]: validateField(field, value)
      }
    }));
  };

  // Handle form submission with server action
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get honeypot value
    const formElement = e.target as HTMLFormElement;
    const honeypot = (formElement.querySelector('input[name="website"]') as HTMLInputElement)?.value || '';
    
    // If honeypot is filled, silently fail (bot detection)
    if (honeypot) {
      setSubmitStatus({ type: 'success', message: 'Thank you for your message!' });
      return;
    }
    
    // Sanitize form data
    const sanitizedData = sanitizeFormData(formState.data);
    
    // Validate all fields
    const errors: Partial<ContactFormData> = {};
    Object.keys(sanitizedData).forEach(key => {
      const field = key as keyof ContactFormData;
      const error = validateField(field, sanitizedData[field]);
      if (error) {
        errors[field] = error;
      }
    });

    // If there are validation errors, update state and return
    if (Object.keys(errors).length > 0) {
      setFormState(prev => ({ ...prev, errors }));
      return;
    }

    // Set submitting state
    setFormState(prev => ({ ...prev, isSubmitting: true }));
    setSubmitStatus({ type: null, message: '' });

    try {
      // Create FormData for server action
      const formData = new FormData();
      formData.append('name', sanitizedData.name);
      formData.append('email', sanitizedData.email);
      formData.append('company', sanitizedData.company);
      formData.append('country', sanitizedData.country);
      formData.append('message', sanitizedData.message);
      formData.append('website', honeypot); // honeypot field

      // Submit to server action
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      
      if (result.success) {
        // Track successful form submission
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form Success',
          });
        }
        
        setSubmitStatus({ type: 'success', message: result.message });
        setFormState(prev => ({
          ...prev,
          isSubmitted: true,
          isSubmitting: false,
          data: { name: '', email: '', company: '', country: '', message: '' },
          errors: {}
        }));
      } else {
        // Track failed form submission
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form Error',
          });
        }
        
        setSubmitStatus({ type: 'error', message: result.message });
        setFormState(prev => ({ ...prev, isSubmitting: false }));
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'An unexpected error occurred. Please try again.' 
      });
      setFormState(prev => ({ ...prev, isSubmitting: false }));
    }
  };

  const countries = [
    'Select Country',
    'United States', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain',
    'China', 'Japan', 'South Korea', 'Singapore', 'Thailand', 'Malaysia',
    'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Turkey',
    'South Africa', 'Nigeria', 'Kenya', 'Egypt', 'Morocco',
    'Australia', 'Canada', 'Brazil', 'Mexico', 'Other'
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-[#0F2A44] mb-2">
          Request a Quote
        </h3>
        <p className="text-[#0F2A44]">
          Get in touch with our trade experts for personalized solutions
        </p>
      </div>

      {/* Success/Error Messages */}
      {submitStatus.type && (
        <div className={cn(
          'mb-6 p-4 rounded-lg border-2',
          submitStatus.type === 'success' 
            ? 'bg-white border-[#0F2A44] text-[#0F2A44]'
            : 'bg-white border-black text-black'
        )}>
          <div className="flex items-center">
            {submitStatus.type === 'success' ? (
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            )}
            {submitStatus.message}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users but visible to bots */}
        <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
          <label htmlFor="website">Website (leave blank)</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#0F2A44] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={formState.data.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={cn(
              'w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#0F2A44] focus:border-[#0F2A44] transition-colors text-[#0F2A44]',
              formState.errors.name 
                ? 'border-black bg-white' 
                : 'border-[#0F2A44] hover:border-black bg-white'
            )}
            placeholder="Enter your full name"
            disabled={formState.isSubmitting}
          />
          {formState.errors.name && (
            <p className="mt-1 text-sm text-black font-medium">{formState.errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#0F2A44] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formState.data.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={cn(
              'w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#0F2A44] focus:border-[#0F2A44] transition-colors text-[#0F2A44]',
              formState.errors.email 
                ? 'border-black bg-white' 
                : 'border-[#0F2A44] hover:border-black bg-white'
            )}
            placeholder="Enter your email address"
            disabled={formState.isSubmitting}
          />
          {formState.errors.email && (
            <p className="mt-1 text-sm text-black font-medium">{formState.errors.email}</p>
          )}
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[#0F2A44] mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            value={formState.data.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className={cn(
              'w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#0F2A44] focus:border-[#0F2A44] transition-colors text-[#0F2A44]',
              formState.errors.company 
                ? 'border-black bg-white' 
                : 'border-[#0F2A44] hover:border-black bg-white'
            )}
            placeholder="Enter your company name"
            disabled={formState.isSubmitting}
          />
          {formState.errors.company && (
            <p className="mt-1 text-sm text-black font-medium">{formState.errors.company}</p>
          )}
        </div>

        {/* Country Field */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-[#0F2A44] mb-2">
            Country *
          </label>
          <select
            id="country"
            value={formState.data.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            className={cn(
              'w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#0F2A44] focus:border-[#0F2A44] transition-colors text-[#0F2A44]',
              formState.errors.country 
                ? 'border-black bg-white' 
                : 'border-[#0F2A44] hover:border-black bg-white'
            )}
            disabled={formState.isSubmitting}
          >
            {countries.map((country) => (
              <option key={country} value={country === 'Select Country' ? '' : country}>
                {country}
              </option>
            ))}
          </select>
          {formState.errors.country && (
            <p className="mt-1 text-sm text-black font-medium">{formState.errors.country}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#0F2A44] mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            value={formState.data.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className={cn(
              'w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#0F2A44] focus:border-[#0F2A44] transition-colors resize-vertical text-[#0F2A44]',
              formState.errors.message 
                ? 'border-black bg-white' 
                : 'border-[#0F2A44] hover:border-black bg-white'
            )}
            placeholder="Tell us about your import/export requirements, target markets, or any specific questions you have..."
            disabled={formState.isSubmitting}
          />
          {formState.errors.message && (
            <p className="mt-1 text-sm text-black font-medium">{formState.errors.message}</p>
          )}
          <p className="mt-1 text-sm text-[#0F2A44]">
            Minimum 10 characters required
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className={cn(
            'w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200',
            formState.isSubmitting
              ? 'bg-[#1E40AF] text-white cursor-not-allowed opacity-75'
              : 'bg-[#1E40AF] text-white hover:bg-[#1E3A8A] focus:ring-2 focus:ring-[#1E40AF] focus:ring-offset-2 shadow-lg hover:shadow-xl'
          )}
        >
          {formState.isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </div>
          ) : (
            'Send Message'
          )}
        </button>

        {/* Privacy Notice */}
        <p className="text-xs text-[#0F2A44] text-center">
          By submitting this form, you agree to our privacy policy. 
          We'll use your information to respond to your inquiry and may contact you about our services.
        </p>
      </form>
    </div>
  );
}