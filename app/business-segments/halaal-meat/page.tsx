import type { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Premium Halaal Meat Export - AOA FOODS PRIVATE LIMITED',
  description: 'AOA Foods specializes in premium Halaal meat exports with complete religious compliance, quality assurance, and cold chain management for Muslim markets worldwide.',
  keywords: ['Halaal meat export', 'Premium Halaal meat', 'Halaal compliance', 'Certified Halaal exporter', 'Muslim market meat export'],
  openGraph: {
    title: 'Premium Halaal Meat Export - AOA FOODS PRIVATE LIMITED',
    description: 'Specialized in premium Halaal meat exports with full compliance and certification support.',
    images: ['/images/halaal-meat-og.svg'],
  },
};

export default function HalaalMeatPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#4A90E2] to-[#1E3A5F] text-white py-20 lg:py-32 relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/halal-meat.jpg"
            alt="Premium Halaal Meat Processing Facility - AOA Foods"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white to-transparent rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#2E7D32] to-transparent rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              Premium <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Halaal Meat Export</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              AOA Foods delivers premium Halaal-certified meat exports with complete religious compliance,
              quality assurance, and cold chain management for Muslim markets worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-8 py-4 text-lg"
              >
                Request Halaal Meat Quote
              </CTAButton>
              <CTAButton
                href="/business-segments"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#1E3A5F] font-bold px-8 py-4 text-lg"
              >
                View All Segments
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#2E7D32] text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              OUR CORE EXPERTISE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Halaal Meat Export Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Complete religious compliance, quality assurance, and cold chain management
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                As our primary business focus, AOA Foods delivers premium Halaal-certified meat exports
                with complete religious compliance, quality assurance, and cold chain management. Our meat
                export division maintains the highest standards of Halaal certification, ensuring authenticity
                and trust for Muslim markets worldwide.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Fresh Halaal Meat</h4>
                  <p className="text-gray-600 text-sm">Premium cuts with complete certification</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-[#4A90E2] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Frozen Products</h4>
                  <p className="text-gray-600 text-sm">Temperature-controlled processing</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-[#1E3A5F] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Processed Products</h4>
                  <p className="text-gray-600 text-sm">Value-added preparations</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Specialty Cuts</h4>
                  <p className="text-gray-600 text-sm">Custom cuts for specific markets</p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Product Image */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/fresh-lamb-tenderloin-fillet-meat-raw-loin-mutton-white-background-top-view-428360662.jpg"
                  alt="Fresh Halaal Lamb Tenderloin Fillet - Premium Raw Meat Display"
                  width={800}
                  height={600}
                  className="w-full h-80 lg:h-96 object-cover"
                  quality={90}
                  priority
                />
              </div>
              <div className="bg-gradient-to-br from-[#2E7D32] to-[#4A90E2] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Halaal Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Complete religious compliance</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Certified by Islamic authorities</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Advanced cold chain management</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Global market expertise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Product Range Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#1E3A5F] text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              PREMIUM PRODUCT RANGE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Premium Halaal Meat Export List
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of certified Halaal meat products for international markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Fresh Products */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#2E7D32] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Fresh Chilled Products</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#2E7D32] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fresh Chilled Sheep</h4>
                    <p className="text-gray-600 text-sm">Premium quality sheep meat with complete Halaal certification</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#2E7D32] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fresh Chilled Buffalo Leg / Shoulder Meat</h4>
                    <p className="text-gray-600 text-sm">High-quality buffalo cuts with optimal freshness and flavor</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#2E7D32] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fresh Vacuum-Packed Boneless Buffalo</h4>
                    <p className="text-gray-600 text-sm">Vacuum-sealed boneless buffalo meat for extended freshness</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Frozen Products */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#4A90E2] rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Frozen Products</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Frozen Sheep Meat</h4>
                    <p className="text-gray-600 text-sm">Premium frozen sheep meat with advanced cold chain management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Frozen Boneless Buffalo</h4>
                    <p className="text-gray-600 text-sm">High-quality boneless buffalo meat processed and frozen to perfection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#4A90E2] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Frozen Offals</h4>
                    <p className="text-gray-600 text-sm">Specialized organ meat products with complete Halaal compliance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Quality Assurance Note */}
          <div className="mt-12 bg-gradient-to-r from-[#1E3A5F] to-[#4A90E2] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Quality Assurance Guarantee</h3>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              All our premium Halaal meat products undergo rigorous quality testing, maintain complete cold chain integrity,
              and come with authentic Halaal certification from recognized Islamic authorities.
            </p>
          </div>
        </div>
      </section>

      {/* Halaal Compliance & Certification */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Halaal Compliance & Certification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete religious compliance with authentic certification from recognized Islamic authorities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {/* Certification Process Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/images/halaal-certification-process.jpg"
                  alt="Halaal Certification Process & Islamic Slaughter - AOA Foods"
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                  quality={85}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Certification Process</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Islamic Slaughter Methods</strong>
                    <p className="text-gray-600">Strict adherence to Islamic slaughter requirements and procedures</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Authorized Certification Bodies</strong>
                    <p className="text-gray-600">Certification from recognized Islamic authorities and Halaal boards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Supply Chain Verification</strong>
                    <p className="text-gray-600">Complete traceability and verification of Halaal compliance throughout supply chain</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Documentation & Tracking</strong>
                    <p className="text-gray-600">Comprehensive documentation and batch tracking for full transparency</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Target Markets</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-semibold text-gray-900">Middle East</span>
                  <span className="text-[#2E7D32] font-bold">Primary Focus</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-semibold text-gray-900">Southeast Asia</span>
                  <span className="text-[#4A90E2] font-bold">Growing Market</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-semibold text-gray-900">Africa</span>
                  <span className="text-[#1E3A5F] font-bold">Emerging Market</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-semibold text-gray-900">Europe</span>
                  <span className="text-gray-600 font-bold">Expanding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance & Cold Chain */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Quality Assurance & Cold Chain Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced temperature-controlled logistics ensuring product integrity from source to destination
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cold Chain Management Image */}
            <div className="md:col-span-2 lg:col-span-3 mb-8">
              <Image
                src="/images/freepik__frozen-meat-in-bulk-with-labeling-of-aoa-foods-in-__9495.png"
                alt="Cold Chain Storage & Logistics Solutions for Meat Processing - AOA Foods"
                width={1200}
                height={500}
                className="w-full h-80 md:h-96 lg:h-[28rem] object-cover rounded-xl shadow-2xl"
                quality={90}
              />
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Temperature Control</h3>
              <p className="text-gray-600">Continuous temperature monitoring throughout the supply chain</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rapid Processing</h3>
              <p className="text-gray-600">Quick processing and packaging to maintain freshness and quality</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Testing</h3>
              <p className="text-gray-600">Rigorous quality testing and inspection at every stage</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure Packaging</h3>
              <p className="text-gray-600">Specialized packaging designed for international shipping</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Traceability</h3>
              <p className="text-gray-600">Complete batch tracking and traceability systems</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Timely Delivery</h3>
              <p className="text-gray-600">Efficient logistics ensuring on-time delivery to global markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#1E3A5F] via-[#4A90E2] to-[#2E7D32] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white to-transparent rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white to-transparent rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Export Premium Halaal Meat?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              Partner with AOA Foods for premium Halaal meat exports with complete religious compliance,
              quality assurance, and reliable delivery to Muslim markets worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <CTAButton
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-8 py-4 text-lg"
              >
                Get Halaal Meat Quote
              </CTAButton>
              <CTAButton
                href="/business-segments"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#1E3A5F] font-bold px-8 py-4 text-lg"
              >
                View All Business Segments
              </CTAButton>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>ahmarabyadtrading@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 99714 09567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}