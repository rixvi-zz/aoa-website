// Core application constants
export const SITE_CONFIG = {
  name: 'AOA',
  fullName: 'AOA Import Export',
  description: 'MSME-registered import and export company in India providing comprehensive global trade solutions',
  url: 'https://www.aoafoods.com',
  email: 'info@aoafoods.com',
  phone: '+91 98765 43210',
} as const;

export const COMPANY_INFO = {
  msme: {
    registered: true,
    registrationNumber: 'MSME-REG-2024-001',
  },
  address: {
    street: '123 Business District',
    city: 'Mumbai',
    state: 'Maharashtra',
    postalCode: '400001',
    country: 'India',
  },
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Closed',
  },
  stats: {
    continentsServed: 4,
    countriesReached: 30,
    complianceRate: 100,
    yearsExperience: 5,
  },
} as const;

export const SEO_KEYWORDS = [
  'Import export company in India',
  'MSME import export business',
  'International trade company',
  'Global sourcing services',
  'Import services India',
  'Export services India',
  'International logistics',
  'Trade compliance services',
  'B2B trade partnerships',
  'Global supply chain management',
] as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'International Markets', href: '/markets' },
  { label: 'Contact Us', href: '/contact' },
] as const;