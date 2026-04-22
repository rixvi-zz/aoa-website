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

// Services data - Enhanced with premium positioning
export const services: Service[] = [
  {
    id: 'halaal-meat-export',
    title: 'Premium Halaal Meat Export',
    description: 'APEDA certified Halaal meat export services with complete Islamic compliance, cold chain management, and international quality standards for Middle East, Asia, and European markets.',
    icon: '/icons/halaal.svg',
    features: [
      'APEDA registered Halaal meat exporter',
      'Islamic compliance and certification management',
      'Cold chain logistics and temperature control',
      'International quality standards (HACCP, ISO)',
      'Middle East and Asian market expertise',
      'Complete documentation and customs clearance'
    ]
  },
  {
    id: 'basmati-rice-export',
    title: 'Premium Basmati Rice Export',
    description: 'Authentic Indian Basmati rice export with complete grain quality assurance, aging verification, and premium packaging for discerning international markets.',
    icon: '/icons/rice.svg',
    features: [
      'Authentic aged Basmati rice varieties',
      'Quality testing and grain analysis',
      'Premium packaging and branding options',
      'Export documentation and compliance',
      'International market distribution',
      'Bulk and retail packaging solutions'
    ]
  },
  {
    id: 'organic-commodities',
    title: 'Organic Agricultural Commodities',
    description: 'Certified organic spices, pulses, cereals, and agricultural products with complete traceability, organic certification, and sustainable sourcing practices.',
    icon: '/icons/organic.svg',
    features: [
      'Certified organic product sourcing',
      'Complete farm-to-fork traceability',
      'International organic standards compliance',
      'Sustainable agriculture partnerships',
      'Quality testing and contamination screening',
      'Custom packaging and private labeling'
    ]
  },
  {
    id: 'trade-compliance',
    title: 'International Trade Compliance',
    description: 'Comprehensive trade compliance services ensuring seamless international transactions with complete regulatory adherence and risk management.',
    icon: '/icons/compliance.svg',
    features: [
      'IEC and GST registration compliance',
      'APEDA export documentation',
      'International trade regulations',
      'Customs clearance and logistics',
      'Trade finance and payment solutions',
      'Risk management and insurance'
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
  email: 'aoafoodsind@gmail.com',
  phone: '+91 99714 09567',
  address: {
    street: '84 MAIN ROAD ZAKIR NAGAR',
    area: 'Okhla',
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

// SEO Keywords - Long-tail strategy for AOA Foods differentiation
export const seoKeywords = [
  // Primary Brand Keywords
  'AOA Foods India halaal certified',
  'AOA Foods Delhi premium food exporter',
  'Halaal Certified AOA Foods',
  
  // Halaal Meat Export (High-value niche)
  'Premium Halaal meat exporter India APEDA certified',
  'Halaal beef mutton export company Delhi',
  'APEDA registered Halaal meat export services',
  'Islamic compliant meat products exporter India',
  'Halaal meat export Middle East Asia Europe',
  
  // Basmati Rice Export (Competitive advantage)
  'Premium aged Basmati rice exporter India',
  'Authentic Indian Basmati rice export company',
  'APEDA certified Basmati rice export Delhi',
  'Premium Basmati rice international markets',
  
  // Organic Agricultural Products
  'Certified organic spices pulses exporter India',
  'Organic agricultural commodities export company',
  'Sustainable organic food products exporter',
  'Farm to fork organic food export services',
  
  // Compliance & Certification (Trust factors)
  'IEC GST registered food export company Delhi',
  'APEDA certified food exporter New Delhi',
  'Government registered food export business India',
  'Compliant food export services India',
  
  // Geographic & Market Specific
  'Food export company Zakir Nagar Delhi',
  'Delhi based premium food exporter',
  'North India food export services',
  'Indian food products international markets',
  
  // Service-specific Long-tail
  'Cold chain Halaal meat export services',
  'Organic certification food export compliance',
  'International food trade documentation services',
  'Premium food packaging export solutions'
];