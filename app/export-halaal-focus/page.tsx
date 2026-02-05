import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Premium Halaal Meat Export - AOA FOODS PRIVATE LIMITED',
  description: 'AOA Foods specializes in premium Halaal export solutions including meat, rice, pulses, and animal feed with comprehensive compliance, certification, and quality assurance for international markets.',
  keywords: ['Halaal export solutions', 'Halaal meat export', 'Premium Halaal exports', 'Halaal compliance', 'Certified Halaal exporter'],
  openGraph: {
    title: 'Premium Halaal Meat Export - AOA FOODS PRIVATE LIMITED',
    description: 'Specialized in premium Halaal export solutions with full compliance and certification support.',
    images: ['/images/halaal-export-og.svg'],
  },
};

export default function ExportHalaalFocusPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#4A90E2] to-[#1E3A5F] text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white to-transparent rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#2E7D32] to-transparent rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/30">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Export-Oriented & Halaal Certified
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              Halaal <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Export Solutions</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              AOA Foods delivers premium Halaal export specializing in meat, rice, pulses, and animal feed
              with complete compliance, certification, and quality assurance for international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Export Orientation Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Export-Oriented Business Model
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  AOA FOODS PRIVATE LIMITED operates with a primary focus on export markets,
                  specializing in connecting Indian food producers with international buyers.
                  Our export-first approach ensures that every aspect of our operations is
                  optimized for international trade compliance and market requirements.
                </p>
                <p>
                  We facilitate seamless export operations across
                  multiple continents, with particular strength in Asian and Middle Eastern markets.
                </p>
                <p>
                  Our export-oriented infrastructure includes dedicated compliance teams,
                  international logistics partnerships, and specialized documentation processes
                  that ensure smooth customs clearance and delivery to global destinations.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#1E3A5F] to-[#4A90E2] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Export Statistics</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">85%</div>
                    <div className="text-white/80 text-sm">Export Focus</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">25+</div>
                    <div className="text-white/80 text-sm">Export Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-white/80 text-sm">APEDA Compliant</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <div className="text-white/80 text-sm">Export Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Halaal Export Solutions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Premium Halaal Export Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Halaal-certified export services with specialized focus on meat exports, plus rice, pulses, animal feed, and cereals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#2E7D32]">
              <div className="w-16 h-16 bg-[#2E7D32] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Halaal Meat Exports</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our primary specialization - premium Halaal-certified meat exports with complete
                religious compliance and authenticity for Muslim markets worldwide.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Fresh and frozen meat products</li>
                <li>• Complete Halaal certification</li>
                <li>• Cold chain management</li>
                <li>• Religious compliance verification</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Rice & Grains</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                High-quality Basmati rice, cereals, and grain exports with
                complete quality assurance and international standards compliance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Premium Basmati rice varieties</li>
                <li>• Cereals and grain products</li>
                <li>• Quality testing and certification</li>
                <li>• Proper packaging and storage</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pulses & Animal Feed</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Comprehensive range of pulses, lentils, animal feed products,
                and bulk commodities with specialized handling and export expertise.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Various pulses and lentils</li>
                <li>• Animal feed and nutrition</li>
                <li>• Bulk agricultural commodities</li>
                <li>• Quality assurance systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Documentation */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compliance-Driven Export Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Documentation-focused processes ensuring seamless customs clearance and regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Export Documentation</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Halaal Certificates</strong>
                    <p className="text-gray-600">Authentic Halaal certification from recognized Islamic authorities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Health Certificates</strong>
                    <p className="text-gray-600">Veterinary health certificates ensuring meat safety standards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">APEDA Documentation</strong>
                    <p className="text-gray-600">Complete APEDA compliance and export documentation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Customs Documentation</strong>
                    <p className="text-gray-600">Complete customs clearance documentation for destination countries</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#1E3A5F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Export Halaal Products?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with AOA Foods for premium Halaal export solutions including meat, rice, pulses,
            and animal feed with complete compliance, certification, and quality assurance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="secondary" size="lg">
              Get Export Quote
            </CTAButton>
            <CTAButton href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}