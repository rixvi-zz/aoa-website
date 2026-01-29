import type { Metadata } from 'next';
import Image from 'next/image';
import { services } from '@/lib/data';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Import Export Services - Global Trade Solutions by AOA',
  description: 'Comprehensive import export services including global sourcing, logistics support, trade documentation, and B2B partnerships. MSME-registered company serving international markets.',
  keywords: ['Import services India', 'Export services India', 'Global sourcing', 'Trade documentation', 'Logistics support', 'B2B partnerships', 'International trade services'],
  openGraph: {
    title: 'Import Export Services - Global Trade Solutions by AOA',
    description: 'Comprehensive import export services including global sourcing, logistics support, trade documentation, and B2B partnerships.',
    images: ['/images/services-og.svg'],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Import Export Services",
            "description": "Comprehensive import export services including global sourcing, logistics support, trade documentation, and B2B partnerships",
            "provider": {
              "@type": "Organization",
              "name": "AOA Import Export",
              "url": "https://aoa-trade.com"
            },
            "serviceType": [
              "Import Services",
              "Export Services",
              "Global Sourcing",
              "Logistics Support",
              "Trade Documentation",
              "B2B Partnerships"
            ],
            "areaServed": [
              { "@type": "Country", "name": "India" },
              { "@type": "Continent", "name": "Asia" },
              { "@type": "Continent", "name": "Europe" },
              { "@type": "Continent", "name": "Africa" }
            ]
          })
        }}
      />
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive <span className="text-white">Trade Solutions</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From import and export services to global sourcing and logistics support,
            we provide end-to-end solutions for your international trade needs.
          </p>
          <div className="inline-flex items-center bg-[#4A90E2] text-white px-6 py-3 rounded-full text-sm font-semibold">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            MSME Registered & Government Certified
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions designed to meet the diverse needs of businesses
              looking to expand their global footprint
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mr-4">
                      <Image
                        src={service.icon}
                        alt={`${service.title} icon`}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-[#4A90E2] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <CTAButton href="/contact" variant="primary" size="md">
                    Get Started with {service.title}
                  </CTAButton>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#1E3A5F] to-[#4A90E2] rounded-2xl p-8 h-80 flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt={`${service.title} illustration`}
                        width={120}
                        height={120}
                        className="w-30 h-30 opacity-20"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#1E3A5F]">100%</div>
                        <div className="text-xs text-gray-600">Compliant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Documentation & Compliance */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Trade Documentation & Compliance
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Navigate complex international trade regulations with confidence. Our comprehensive
                documentation and compliance services ensure your shipments meet all regulatory
                requirements across different countries and regions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Export-Import Documentation</h4>
                    <p className="text-gray-600 text-sm">Complete preparation of all required trade documents</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#4A90E2] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Regulatory Compliance</h4>
                    <p className="text-gray-600 text-sm">Ensuring adherence to international trade laws and regulations</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#4A90E2] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Customs Clearance Support</h4>
                    <p className="text-gray-600 text-sm">Smooth customs processing and clearance assistance</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[#4A90E2] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">Certificate Management</h4>
                    <p className="text-gray-600 text-sm">Handling of origin certificates, quality certifications, and permits</p>
                  </div>
                </div>
              </div>

              <CTAButton href="/contact" variant="primary" size="lg">
                Ensure Compliance Today
              </CTAButton>
            </div>

            <div className="relative">
              <div className="bg-[#1E3A5F] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Compliance Statistics</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span>Documentation Accuracy</span>
                    <span className="text-white font-bold">100%</span>
                  </div>
                  <div className="w-full bg-[#4A90E2] rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-full"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>On-time Clearance</span>
                    <span className="text-white font-bold">98%</span>
                  </div>
                  <div className="w-full bg-[#4A90E2] rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-[98%]"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Regulatory Compliance</span>
                    <span className="text-white font-bold">100%</span>
                  </div>
                  <div className="w-full bg-[#4A90E2] rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Trade Partnerships */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              B2B Trade Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build lasting international business relationships through our extensive
              network of verified partners and strategic alliances
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/icons/network.svg"
                  alt="Partner Network icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Partner Network
              </h3>
              <p className="text-gray-600 mb-4">
                Access our verified network of international suppliers, buyers, and distributors
                across multiple industries and regions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Verified business credentials</li>
                <li>• Industry-specific matching</li>
                <li>• Due diligence support</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/icons/compliance.svg"
                  alt="Contract Management icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contract Management
              </h3>
              <p className="text-gray-600 mb-4">
                Professional assistance in negotiating, drafting, and managing international
                trade contracts and agreements.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Contract negotiation</li>
                <li>• Legal compliance review</li>
                <li>• Risk assessment</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/icons/expertise.svg"
                  alt="Market Entry Support icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Market Entry Support
              </h3>
              <p className="text-gray-600 mb-4">
                Strategic guidance and practical support for entering new international
                markets with confidence and compliance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Market research & analysis</li>
                <li>• Regulatory guidance</li>
                <li>• Local partnership facilitation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#1E3A5F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your International Trade?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our MSME-registered expertise and comprehensive service portfolio
            drive your global business success. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="secondary" size="lg">
              Request a Quote
            </CTAButton>
            <CTAButton href="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1E3A5F]">
              Learn About Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}