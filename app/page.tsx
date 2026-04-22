import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import PremiumProcess from '@/components/PremiumProcess';
import IndustriesServed from '@/components/IndustriesServed';
import WhyChooseAOA from '@/components/WhyChooseAOA';

// Enable ISR with 1 hour revalidation
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'AOA Foods - Halaal Certified | Premium Halaal Meat & Food Export Excellence India',
  description: 'AOA Foods (Halaal Certified) - APEDA certified premium food export company specializing in Halaal meat export, organic Basmati rice, and authentic agricultural commodities. IEC & GST registered for global trade excellence from Delhi, India.',
  keywords: [
    'AOA Foods Halaal Certified India',
    'Premium Halaal meat exporter APEDA certified',
    'Organic Basmati rice export company Delhi',
    'Halaal certified agricultural commodities exporter',
    'APEDA registered premium food export business',
    'IEC GST certified halaal food trading',
    'Halaal certified organic spices pulses exporter India',
    'Premium Halaal certified meat products export',
    'AOA Foods Delhi halaal certified agriculture',
    'Halaal certified food export solutions global markets'
  ],
  openGraph: {
    title: 'AOA Foods - Premium Food Export Solutions for Global Markets',
    description: 'MSME and APEDA registered food export company in India providing comprehensive global food trade solutions for international business partnerships.',
    images: ['/images/home-og.svg'],
  },
  alternates: {
    canonical: 'https://www.aoafoods.com',
    languages: {
      'en-IN': 'https://www.aoafoods.com',
      'en-US': 'https://www.aoafoods.com',
      'en': 'https://www.aoafoods.com',
    },
  },
};

export default function Home() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "AOA Foods - Premium Food Export Solutions for Global Markets",
            "description": "MSME and APEDA registered food export company in India providing comprehensive global food trade solutions for international business partnerships.",
            "url": "https://www.aoafoods.com",
            "mainEntity": {
              "@type": "Organization",
              "name": "AOA Foods",
              "description": "MSME and APEDA registered food export company in India",
              "url": "https://www.aoafoods.com",
              "logo": "https://www.aoafoods.com/images/mainlogo.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Delhi",
                "addressLocality": "New Delhi"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "business",
                "email": "info@aoafoods.com",
                "availableLanguage": ["English", "Hindi"]
              },
              "areaServed": [
                { "@type": "Country", "name": "India" },
                { "@type": "Continent", "name": "Asia" },
                { "@type": "Continent", "name": "Europe" },
                { "@type": "Continent", "name": "Africa" }
              ],
              "serviceType": [
                "Food Export Services",
                "APEDA Compliance",
                "Global Food Sourcing",
                "Food Logistics Support"
              ],
              "certification": [
                "MSME Registered",
                "APEDA Registered Exporter"
              ]
            }
          })
        }}
      />
      <Hero />
      <ServicesGrid />
      <PremiumProcess />
      <IndustriesServed />
      <WhyChooseAOA />
    </>
  );
}
