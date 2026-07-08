import { ContactFormData, ValidationError } from '@/types';
import DOMPurify from 'isomorphic-dompurify';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone number regex (international format)
const PHONE_REGEX = /^[\+]?[1-9][\d]{0,15}$/;

// Validation functions
export const validateContactForm = (data: ContactFormData): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push({
      field: 'name',
      message: 'Name must be at least 2 characters long'
    });
  } else if (data.name.trim().length > 100) {
    errors.push({
      field: 'name',
      message: 'Name must be less than 100 characters'
    });
  }

  // Email validation
  if (!data.email || !EMAIL_REGEX.test(data.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address'
    });
  } else if (data.email.length > 254) {
    errors.push({
      field: 'email',
      message: 'Email address is too long'
    });
  }

  // Phone validation (optional)
  if (data.phone && data.phone.trim().length > 0) {
    const cleanPhone = data.phone.replace(/[\s\-\(\)]/g, '');
    if (!PHONE_REGEX.test(cleanPhone)) {
      errors.push({
        field: 'phone',
        message: 'Please enter a valid phone number'
      });
    } else if (cleanPhone.length > 16) {
      errors.push({
        field: 'phone',
        message: 'Phone number is too long'
      });
    }
  }

  // Company validation
  if (!data.company || data.company.trim().length < 2) {
    errors.push({
      field: 'company',
      message: 'Company name must be at least 2 characters long'
    });
  } else if (data.company.trim().length > 200) {
    errors.push({
      field: 'company',
      message: 'Company name must be less than 200 characters'
    });
  }

  // Subject validation (optional)
  if (data.subject && data.subject.trim().length > 0) {
    if (data.subject.trim().length < 3) {
      errors.push({
        field: 'subject',
        message: 'Subject must be at least 3 characters long'
      });
    } else if (data.subject.trim().length > 200) {
      errors.push({
        field: 'subject',
        message: 'Subject must be less than 200 characters'
      });
    }
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
  } else if (data.message.trim().length > 5000) {
    errors.push({
      field: 'message',
      message: 'Message must be less than 5000 characters'
    });
  }

  return errors;
};

// Individual field validators for real-time validation
export const validateField = (field: keyof ContactFormData, value: string | undefined): string | null => {
  if (!value) {
    // Handle required fields
    if (['name', 'email', 'company', 'country', 'message'].includes(field)) {
      switch (field) {
        case 'name':
          return 'Name is required';
        case 'email':
          return 'Email is required';
        case 'company':
          return 'Company name is required';
        case 'country':
          return 'Please select a country';
        case 'message':
          return 'Message is required';
        default:
          return 'This field is required';
      }
    }
    // Optional fields can be empty
    return null;
  }
  
  const trimmedValue = value.trim();
  
  switch (field) {
    case 'name':
      if (trimmedValue.length < 2) {
        return 'Name must be at least 2 characters long';
      }
      if (trimmedValue.length > 100) {
        return 'Name must be less than 100 characters';
      }
      return null;
    
    case 'email':
      if (!EMAIL_REGEX.test(value)) {
        return 'Please enter a valid email address';
      }
      if (value.length > 254) {
        return 'Email address is too long';
      }
      return null;
    
    case 'phone':
      if (!value || trimmedValue.length === 0) {
        return null; // Phone is optional
      }
      const cleanPhone = value.replace(/[\s\-\(\)]/g, '');
      if (!PHONE_REGEX.test(cleanPhone)) {
        return 'Please enter a valid phone number';
      }
      if (cleanPhone.length > 16) {
        return 'Phone number is too long';
      }
      return null;
    
    case 'company':
      if (trimmedValue.length < 2) {
        return 'Company name must be at least 2 characters long';
      }
      if (trimmedValue.length > 200) {
        return 'Company name must be less than 200 characters';
      }
      return null;
    
    case 'subject':
      if (!value || trimmedValue.length === 0) {
        return null; // Subject is optional
      }
      if (trimmedValue.length < 3) {
        return 'Subject must be at least 3 characters long';
      }
      if (trimmedValue.length > 200) {
        return 'Subject must be less than 200 characters';
      }
      return null;
    
    case 'country':
      if (trimmedValue.length === 0) {
        return 'Please select a country';
      }
      return null;
    
    case 'message':
      if (trimmedValue.length < 10) {
        return 'Message must be at least 10 characters long';
      }
      if (trimmedValue.length > 5000) {
        return 'Message must be less than 5000 characters';
      }
      return null;
    
    default:
      return null;
  }
};

// Form data sanitization
export const sanitizeFormData = (data: ContactFormData): ContactFormData => {
  return {
    name: DOMPurify.sanitize(data.name.trim(), { ALLOWED_TAGS: [] }),
    email: DOMPurify.sanitize(data.email.trim().toLowerCase(), { ALLOWED_TAGS: [] }),
    phone: data.phone ? DOMPurify.sanitize(data.phone.trim(), { ALLOWED_TAGS: [] }) : undefined,
    company: DOMPurify.sanitize(data.company.trim(), { ALLOWED_TAGS: [] }),
    subject: data.subject ? DOMPurify.sanitize(data.subject.trim(), { ALLOWED_TAGS: [] }) : undefined,
    country: DOMPurify.sanitize(data.country.trim(), { ALLOWED_TAGS: [] }),
    message: DOMPurify.sanitize(data.message.trim(), { ALLOWED_TAGS: [] })
  };
};