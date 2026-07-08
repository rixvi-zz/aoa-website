// Contact Form Data Types
export interface ContactFormData {
  name: string;        // required, min 2 chars
  email: string;       // required, valid email format
  phone?: string;      // optional
  company: string;     // required, min 2 chars
  subject?: string;    // optional
  country: string;     // required
  message: string;     // required, min 10 chars
}

export interface FormState {
  data: ContactFormData;
  errors: Partial<ContactFormData>;
  isSubmitting: boolean;
  isSubmitted: boolean;
}

// Service Data Model
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Market Data Model
export interface Market {
  region: string;
  countries: string[];
  description: string;
}

// Page Metadata Types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph: {
    title: string;
    description: string;
    images: string[];
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
    images: string[];
  };
}

// Schema Markup Types
export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  description: string;
  address: {
    "@type": "PostalAddress";
    addressCountry: string;
  };
  contactPoint: {
    "@type": "ContactPoint";
    contactType: string;
  };
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: NavItem[]; // For dropdown menus
}

// CTA Button Types
export interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  className?: string;
  trackingName?: string;
  trackingLocation?: string;
}

// Form Validation Error Types
export interface ValidationError {
  field: keyof ContactFormData;
  message: string;
}

// API Response Types
export interface ContactFormResponse {
  success: boolean;
  message: string;
  errors?: ValidationError[];
}