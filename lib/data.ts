import { Service, Market, NavItem } from '@/types';

// Navigation menu items
export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'International Markets', href: '/markets' },
  { label: 'Contact Us', href: '/contact' },
];

// Services data
export const services: Service[] = [
  {
    id: 'import-services',
    title: 'Import Services',
    description: 'Comprehensive import solutions including global sourcing, compliance management, and customs coordination for seamless international procurement.',
    icon: '/images/image.png',
    features: [
      'Global sourcing and supplier identification',
      'Import compliance and documentation',
      'Customs clearance coordination',
      'Quality assurance and inspection',
      'Logistics and supply chain management'
    ]
  },
  {
    id: 'export-services',
    title: 'Export Services',
    description: 'End-to-end export services helping Indian manufacturers and suppliers reach global markets with complete regulatory compliance.',
    icon: '/icons/export.svg',
    features: [
      'Export market research and analysis',
      'International buyer connections',
      'Export documentation and compliance',
      'Shipping and logistics coordination',
      'Trade finance assistance'
    ]
  },
  {
    id: 'global-sourcing',
    title: 'Global Sourcing',
    description: 'Strategic sourcing solutions connecting businesses with reliable international suppliers while ensuring quality and cost-effectiveness.',
    icon: '/icons/sourcing.svg',
    features: [
      'Supplier identification and verification',
      'Price negotiation and contract management',
      'Quality control and inspection services',
      'Supply chain risk management',
      'Vendor relationship management'
    ]
  },
  {
    id: 'logistics-support',
    title: 'Logistics & Supply Chain',
    description: 'Comprehensive logistics support ensuring efficient movement of goods from origin to destination with full tracking and transparency.',
    icon: '/icons/logistics.svg',
    features: [
      'International freight forwarding',
      'Warehousing and distribution',
      'Supply chain optimization',
      'Cargo insurance and risk management',
      'Real-time shipment tracking'
    ]
  }
];

// International markets data
export const markets: Market[] = [
  {
    region: 'Asia',
    countries: ['China', 'Japan', 'South Korea', 'Singapore', 'Thailand', 'Vietnam', 'Malaysia', 'Indonesia'],
    description: 'Strong partnerships across Asian markets with deep understanding of regional trade regulations and business practices.'
  },
  {
    region: 'Middle East',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Jordan', 'Turkey'],
    description: 'Established network in Middle Eastern markets facilitating trade in various sectors including oil & gas, construction, and consumer goods.'
  },
  {
    region: 'Europe',
    countries: ['Germany', 'United Kingdom', 'France', 'Italy', 'Netherlands', 'Spain', 'Belgium', 'Poland'],
    description: 'Comprehensive European market coverage with expertise in EU regulations, standards, and compliance requirements.'
  },
  {
    region: 'Africa',
    countries: ['South Africa', 'Nigeria', 'Kenya', 'Egypt', 'Morocco', 'Ghana', 'Tanzania', 'Ethiopia'],
    description: 'Growing presence in African markets with focus on infrastructure development, mining, and agricultural trade opportunities.'
  }
];

// Company core values
export const coreValues = [
  {
    title: 'Integrity',
    description: 'Maintaining the highest standards of honesty and transparency in all business dealings.',
    icon: '/icons/integrity.svg'
  },
  {
    title: 'Quality',
    description: 'Ensuring excellence in service delivery and maintaining strict quality control standards.',
    icon: '/icons/quality.svg'
  },
  {
    title: 'Compliance',
    description: 'Adhering to all international trade regulations and maintaining full regulatory compliance.',
    icon: '/icons/compliance.svg'
  },
  {
    title: 'Reliability',
    description: 'Delivering consistent, dependable service that our partners can count on.',
    icon: '/icons/reliability.svg'
  }
];

// Why Choose AOA differentiators
export const differentiators = [
  {
    title: 'MSME Registered',
    description: 'Government-recognized MSME registration ensuring credibility and access to special trade benefits.',
    icon: '/icons/msme.svg'
  },
  {
    title: 'APEDA Registered Exporter',
    description: 'Agricultural and Processed Food Products Export Development Authority certification for food trade compliance.',
    icon: '/icons/compliance.svg'
  },
  {
    title: 'Global Network',
    description: 'Extensive international network spanning Asia, Middle East, Europe, and Africa.',
    icon: '/icons/network.svg'
  },
  {
    title: 'Export Compliance',
    description: 'Deep knowledge of international trade regulations and food export compliance requirements.',
    icon: '/icons/expertise.svg'
  }
];

// Contact information
export const contactInfo = {
  email: 'info@aoa-trade.com',
  phone: '+91 98765 43210',
  address: {
    street: '123 Business District',
    city: 'Delhi',
    state: 'Delhi',
    country: 'India',
    pincode: '400001'
  },
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Closed'
  }
};

// SEO Keywords
export const seoKeywords = [
  'Import export company in India',
  'MSME import export business',
  'International trade company',
  'Global sourcing services',
  'Import services India',
  'Export services India',
  'International logistics',
  'Trade compliance services',
  'B2B trade partnerships',
  'Global supply chain management'
];