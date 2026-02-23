import { Service, Market, NavItem } from '@/types';

// Navigation menu items
export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Business Segments',
    href: '/business-segments',
    children: [
      { label: 'Premium Halaal Meat', href: '/business-segments/halaal-meat' },
      { label: 'Basmati Rice', href: '/business-segments/basmati-rice' },
      { label: 'Fruits & Vegetables', href: '/business-segments/fruits-vegetables' },
      { label: 'Pulses & Cereals', href: '/business-segments/pulses-cereals' },
      { label: 'Animal Feed', href: '/business-segments/animal-feed' },
      { label: 'Bulk Commodities', href: '/business-segments/bulk-commodities' },
    ]
  },
  { label: 'International Markets', href: '/markets' },
  { label: 'Contact Us', href: '/contact' },
];

// Services data
export const services: Service[] = [
  {
    id: 'import-services',
    title: 'Import Services',
    description: 'Comprehensive import solutions including global sourcing, compliance management, and customs coordination for seamless international procurement.',
    icon: '/icons/import.svg',
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
    countries: ['China', 'Singapore', 'Thailand', 'Vietnam', 'Hong Kong', 'Malaysia', 'Indonesia', 'Kazakhstan'],
    description: 'Strong partnerships across Asian markets with deep understanding of regional trade regulations and business practices.'
  },
  {
    region: 'Middle East & North Africa',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Jordan', 'Turkey', 'Iran', 'Iraq', 'Egypt', 'Lebanon', 'Algeria'],
    description: 'Established network in Middle Eastern and North African markets facilitating trade in various sectors including oil & gas, construction, and consumer goods.'
  },
  {
    region: 'Europe & Caucasus',
    countries: ['Germany', 'United Kingdom', 'France', 'Italy', 'Netherlands', 'Spain', 'Belgium', 'Poland', 'Armenia', 'Georgia'],
    description: 'Comprehensive European market coverage with expertise in EU regulations, standards, and compliance requirements, extending to Caucasus region.'
  },
  {
    region: 'Africa',
    countries: ['South Africa', 'Nigeria', 'Kenya', 'Morocco', 'Ghana', 'Tanzania', 'Ethiopia', 'Angola', 'Congo', 'Gabon', 'Equatorial Guinea', 'Ivory Coast'],
    description: 'Growing presence in African markets with focus on infrastructure development, mining, and agricultural trade opportunities across diverse economies.'
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
    title: 'IEC Registered',
    description: 'Importer Exporter Code (ABECA1554F) registered with Directorate General of Foreign Trade (DGFT) for legitimate international trade operations.',
    icon: '/icons/msme.svg'
  },
  {
    title: 'GST Compliant',
    description: 'GST Registration (07ABECA1554F1ZZ) ensuring full tax compliance and transparent business operations in India.',
    icon: '/icons/compliance.svg'
  },
  {
    title: 'Global Network',
    description: 'Extensive international network spanning Asia, Middle East, Europe, and Africa for comprehensive food trade solutions.',
    icon: '/icons/network.svg'
  },
  {
    title: 'Food Export Expertise',
    description: 'Specialized knowledge in food and agri products export with complete regulatory compliance and quality assurance.',
    icon: '/icons/expertise.svg'
  }
];

// Contact information
export const contactInfo = {
  email: 'Aoafoods.ind@gmail.com',
  phone: '+91 99714 09567',
  address: {
    street: 'A-19, Lane 1, Johri Farm',
    area: 'Noor Nagar Extension, Jamia Nagar',
    city: 'New Delhi',
    state: 'Delhi',
    country: 'India',
    pincode: '110025'
  },
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Closed'
  }
};

// Company Legal Information
export const companyInfo = {
  legalName: 'AOA FOODS PRIVATE LIMITED',
  tradeName: 'AOA FOODS PRIVATE LIMITED',
  businessType: 'Private Limited Company',
  natureOfBusiness: 'Importer & Exporter (Food & Agri Products)',
  registrations: {
    iec: 'ABECA1554F',
    gstin: '07ABECA1554F1ZZ',
    gstType: 'Regular',
    gstDate: '17/12/2025',
    iecDate: '08/01/2026'
  },
  authorizedSignatory: {
    names: ['Masood Ul Hasan Rizvi', 'Saifur Rehman Khan'],
    designation: 'Authorized Signatory'
  },
  authority: 'Directorate General of Foreign Trade (DGFT)',
  countryOfRegistration: 'India',
  status: 'Active',
  verified: 'Yes (System Generated Certificate)'
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