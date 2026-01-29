// Content configuration for scalability and future CMS integration

export const siteConfig = {
  name: 'AOA FOODS PRIVATE LIMITED',
  description: 'IEC and GST registered food import and export company in India providing comprehensive global food & agri products trade solutions',
  url: 'https://aoa-foods.com',
  email: 'ahmarabyadtrading@gmail.com',
  phone: '+91 99714 09567',
  address: {
    street: 'A-19, 4th Floor, Gali No. 1, Johri Farm',
    area: 'Noor Nagar Extension, Jamia Nagar',
    city: 'New Delhi',
    state: 'Delhi',
    postalCode: '110025',
    country: 'India',
  },
  social: {
    linkedin: 'https://linkedin.com/company/aoa-foods-private-limited',
    twitter: 'https://twitter.com/aoa_foods',
  },
  registrations: {
    iec: 'ABECA1554F',
    gstin: '07ABECA1554F1ZZ',
    gstType: 'Regular',
    gstDate: '17/12/2025',
    iecDate: '08/01/2026',
    authority: 'Directorate General of Foreign Trade (DGFT)',
    status: 'Active',
    verified: 'Yes (System Generated Certificate)'
  },
};

export const servicesConfig = [
  {
    id: 'import-services',
    title: 'Import Services',
    description: 'Comprehensive import solutions for businesses looking to source products globally',
    icon: 'import',
    features: [
      'Global supplier network access',
      'Quality assurance and inspection',
      'Documentation and compliance support',
      'Customs clearance facilitation',
      'Risk management and insurance',
    ],
    markets: ['Asia', 'Europe', 'Americas'],
    enabled: true,
  },
  {
    id: 'export-services',
    title: 'Export Services',
    description: 'End-to-end export solutions to help you reach international markets',
    icon: 'export',
    features: [
      'Market research and analysis',
      'Buyer identification and verification',
      'Export documentation support',
      'Logistics coordination',
      'Payment terms negotiation',
    ],
    markets: ['Middle East', 'Africa', 'Asia'],
    enabled: true,
  },
  {
    id: 'global-sourcing',
    title: 'Global Sourcing',
    description: 'Strategic sourcing solutions to optimize your supply chain',
    icon: 'sourcing',
    features: [
      'Supplier evaluation and selection',
      'Cost optimization strategies',
      'Supply chain risk management',
      'Quality control systems',
      'Vendor relationship management',
    ],
    markets: ['Global'],
    enabled: true,
  },
  {
    id: 'logistics-support',
    title: 'Logistics Support',
    description: 'Complete logistics and supply chain management services',
    icon: 'logistics',
    features: [
      'Freight forwarding services',
      'Warehousing and distribution',
      'Insurance and risk coverage',
      'Real-time tracking and monitoring',
      'Last-mile delivery coordination',
    ],
    markets: ['Global'],
    enabled: true,
  },
];

export const marketsConfig = [
  {
    id: 'asia',
    name: 'Asia',
    description: 'Strong presence in Asian markets with established partnerships across major economies',
    countries: ['China', 'Singapore', 'Thailand', 'Vietnam', 'Hong Kong', 'Malaysia', 'Indonesia'],
    specializations: ['Electronics & Technology', 'Textiles & Apparel', 'Machinery & Equipment', 'Automotive Parts'],
    stats: {
      partnerships: '50+',
      experience: '5+ years',
      volume: '$10M+',
    },
    enabled: true,
  },
  {
    id: 'middle-east',
    name: 'Middle East',
    description: 'Comprehensive coverage across Middle Eastern markets with focus on energy and infrastructure',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain', 'Iran', 'Iraq'],
    specializations: ['Oil & Gas Equipment', 'Construction Materials', 'Food Products', 'Medical Devices'],
    stats: {
      partnerships: '30+',
      experience: '4+ years',
      volume: '$8M+',
    },
    enabled: true,
  },
  {
    id: 'europe',
    name: 'Europe',
    description: 'Growing network in European markets with emphasis on quality and compliance',
    countries: ['Germany', 'United Kingdom', 'France', 'Netherlands', 'Italy', 'Spain'],
    specializations: ['Automotive Components', 'Pharmaceuticals', 'Chemicals', 'Precision Instruments'],
    stats: {
      partnerships: '25+',
      experience: '3+ years',
      volume: '$6M+',
    },
    enabled: true,
  },
  {
    id: 'africa',
    name: 'Africa',
    description: 'Emerging opportunities in African markets with focus on infrastructure development',
    countries: ['South Africa', 'Nigeria', 'Kenya', 'Egypt', 'Morocco', 'Ghana'],
    specializations: ['Mining Equipment', 'Agricultural Products', 'Infrastructure Materials', 'Consumer Goods'],
    stats: {
      partnerships: '20+',
      experience: '2+ years',
      volume: '$4M+',
    },
    enabled: true,
  },
];

export const companyStats = {
  continentsServed: 4,
  countriesReached: 25,
  complianceRate: 100,
  supportAvailability: '24/7',
  registrationStatus: 'IEC & GST Registered',
  yearsExperience: 5,
  totalVolume: '$28M+',
  authority: 'DGFT Verified',
};

export const differentiators = [
  {
    id: 'iec-registration',
    title: 'IEC Registration',
    description: 'Importer Exporter Code (ABECA1554F) registered with Directorate General of Foreign Trade (DGFT) ensuring legitimate international trade operations',
    icon: 'iec',
    benefits: ['Government backing', 'Regulatory compliance', 'Trust and credibility'],
  },
  {
    id: 'gst-compliance',
    title: 'GST Compliance',
    description: 'GST Registration (07ABECA1554F1ZZ) ensuring full tax compliance and transparent business operations in India',
    icon: 'gst',
    benefits: ['Tax compliance', 'Transparent operations', 'Legal assurance'],
  },
  {
    id: 'global-network',
    title: 'Global Network',
    description: 'Extensive network of trusted partners and suppliers across 4 continents and 25+ countries specializing in food & agri products',
    icon: 'network',
    benefits: ['Wide market reach', 'Diverse supplier base', 'Risk distribution'],
  },
  {
    id: 'food-expertise',
    title: 'Food Export Expertise',
    description: 'Specialized knowledge in food and agri products export with complete regulatory compliance and quality assurance',
    icon: 'expertise',
    benefits: ['Industry expertise', 'Quality assurance', 'Regulatory knowledge'],
  },
];

export const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Rajesh Kumar',
    company: 'TechnoTrade Solutions',
    country: 'India',
    message: 'AOA helped us establish reliable supply chains across Asia. Their MSME registration gave us confidence in their credibility.',
    rating: 5,
    enabled: true,
  },
  {
    id: 'testimonial-2',
    name: 'Sarah Johnson',
    company: 'Global Manufacturing Inc.',
    country: 'USA',
    message: 'Excellent service for our Middle East expansion. Professional handling of all documentation and compliance requirements.',
    rating: 5,
    enabled: true,
  },
];

// SEO Keywords by category
export const seoKeywords = {
  primary: [
    'Import export company in India',
    'MSME import export business',
    'International trade company',
    'Global sourcing services',
  ],
  secondary: [
    'Import services India',
    'Export services India',
    'B2B international trade',
    'Global supply chain management',
    'International business partnerships',
  ],
  location: [
    'Mumbai import export',
    'Maharashtra trade company',
    'India international trade',
  ],
  service: [
    'Custom clearance services',
    'Trade documentation support',
    'International logistics',
    'Global procurement services',
  ],
};

// Navigation configuration
export const navigationConfig = [
  { label: 'Home', href: '/', enabled: true },
  { label: 'About', href: '/about', enabled: true },
  { label: 'Services', href: '/services', enabled: true },
  { label: 'Markets', href: '/markets', enabled: true },
  { label: 'Contact', href: '/contact', enabled: true },
];

// Footer configuration
export const footerConfig = {
  sections: [
    {
      title: 'Quick Links',
      links: navigationConfig.filter(item => item.enabled),
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy', enabled: true },
        { label: 'Terms of Service', href: '/terms', enabled: true },
        { label: 'Disclaimer', href: '/disclaimer', enabled: true },
      ],
    },
  ],
};