import { ContactFormData, ValidationError } from '@/types';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation functions
export const validateContactForm = (data: ContactFormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push({
      field: 'name',
      message: 'Name must be at least 2 characters long'
    });
  }

  // Email validation
  if (!data.email || !EMAIL_REGEX.test(data.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address'
    });
  }

  // Company validation
  if (!data.company || data.company.trim().length < 2) {
    errors.push({
      field: 'company',
      message: 'Company name must be at least 2 characters long'
    });
  }

  // Country validation
  if (!data.country || data.country.trim().length === 0) {
    errors.push({
      field: 'country',
      message: 'Please select a country'
    });
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.push({
      field: 'message',
      message: 'Message must be at least 10 characters long'
    });
  }

  return errors;
};

// Individual field validators for real-time validation
export const validateField = (field: keyof ContactFormData, value: string): string | null => {
  switch (field) {
    case 'name':
      return value.trim().length < 2 ? 'Name must be at least 2 characters long' : null;
    
    case 'email':
      return !EMAIL_REGEX.test(value) ? 'Please enter a valid email address' : null;
    
    case 'company':
      return value.trim().length < 2 ? 'Company name must be at least 2 characters long' : null;
    
    case 'country':
      return value.trim().length === 0 ? 'Please select a country' : null;
    
    case 'message':
      return value.trim().length < 10 ? 'Message must be at least 10 characters long' : null;
    
    default:
      return null;
  }
};

// Form data sanitization
export const sanitizeFormData = (data: ContactFormData): ContactFormData => {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    company: data.company.trim(),
    country: data.country.trim(),
    message: data.message.trim()
  };
};