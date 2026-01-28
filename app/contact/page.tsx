import type { Metadata } from 'next';
import { contactInfo } from '@/lib/data';
import ContactFormWrapper from '@/components/ContactFormWrapper';

export const metadata: Metadata = {
  title: 'Contact Us - AOA Import & Export Solutions',
  description: 'Get in touch with AOA for your import and export requirements. Our MSME-registered team provides reliable international trade solutions across Asia, Middle East, Europe, and Africa.',
  keywords: ['Contact AOA', 'Import export inquiry', 'International trade contact', 'MSME trade services', 'Global sourcing contact'],
  openGraph: {
    title: 'Contact Us - AOA Import & Export Solutions',
    description: 'Get in touch with AOA for your import and export requirements. Our MSME-registered team provides reliable international trade solutions.',
    images: ['/images/contact-og.svg'],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us - AOA Import & Export Solutions",
            "description": "Get in touch with AOA for your import and export requirements. MSME-registered team provides reliable international trade solutions",
            "url": "https://aoa-trade.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "AOA Import Export",
              "url": "https://aoa-trade.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "business",
                "email": "info@aoa-trade.com",
                "telephone": "+91 98765 43210",
                "availableLanguage": ["English", "Hindi"],
                "hoursAvailable": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "09:00",
                    "closes": "18:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification", 
                    "dayOfWeek": "Saturday",
                    "opens": "09:00",
                    "closes": "14:00"
                  }
                ]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Business District",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400001",
                "addressCountry": "IN"
              }
            }
          })
        }}
      />
      {/* Hero Section */}
      <section className="bg-[#0F2A44] text-white py-24 lg:py-32 relative overflow-hidden">
        {/* Background overlay for better contrast */}
        <div className="absolute inset-0 bg-[#0F2A44]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white">
              Get in <span className="text-white">Touch</span>
            </h1>
            <p className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Ready to expand your business globally? Our MSME-registered trade experts 
              are here to help you navigate international markets with confidence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl font-bold text-white mb-3">24/7</div>
                <div className="text-gray-200 font-semibold text-lg">Support Available</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl font-bold text-white mb-3">&lt;24h</div>
                <div className="text-gray-200 font-semibold text-lg">Response Time</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="text-4xl font-bold text-white mb-3">MSME</div>
                <div className="text-gray-200 font-semibold text-lg">Certified Partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 lg:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactFormWrapper />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Business Information */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Business Information
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#0F2A44] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-[#0F2A44] hover:text-[#1E40AF] transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#0F2A44] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-[#0F2A44] hover:text-[#1E40AF] transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#0F2A44] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Address</h4>
                      <div className="text-gray-600">
                        <p>{contactInfo.address.street}</p>
                        <p>{contactInfo.address.city}, {contactInfo.address.state}</p>
                        <p>{contactInfo.address.country} - {contactInfo.address.pincode}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Business Hours
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Monday - Friday</span>
                    <span className="text-gray-600">{contactInfo.businessHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-gray-600">{contactInfo.businessHours.saturday}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-gray-600">{contactInfo.businessHours.sunday}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#1E40AF]/10 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> For urgent matters outside business hours, 
                    please send an email and we'll respond as soon as possible.
                  </p>
                </div>
              </div>

              {/* MSME Certification */}
              <div className="bg-[#0F2A44] rounded-2xl shadow-xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#1E40AF] rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">MSME Certified</h3>
                </div>
                <p className="text-blue-100 mb-4">
                  AOA is a government-recognized MSME (Micro, Small & Medium Enterprise) 
                  registered company, ensuring credibility and access to special trade benefits.
                </p>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-sm text-blue-200">
                    Our MSME registration provides additional trust and reliability 
                    for your international trade partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How quickly can you respond to my inquiry?
              </h3>
              <p className="text-gray-600">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What information should I include in my inquiry?
              </h3>
              <p className="text-gray-600">
                Please include details about your products, target markets, volume requirements, 
                and timeline. The more specific information you provide, the better we can assist you.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you provide free consultations?
              </h3>
              <p className="text-gray-600">
                Yes, we offer free initial consultations to understand your requirements 
                and explain how our services can help your business grow internationally.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What makes AOA different from other trade companies?
              </h3>
              <p className="text-gray-600">
                As an MSME-registered company, we offer government-backed credibility, 
                personalized service, and deep expertise in international trade regulations 
                across multiple continents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}