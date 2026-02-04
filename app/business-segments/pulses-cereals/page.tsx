import type { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Pulses & Cereals Export - AOA FOODS PRIVATE LIMITED',
  description: 'AOA Foods exports comprehensive range of pulses, lentils, and cereal products with rigorous quality control ensuring freshness and nutritional value for global markets.',
  keywords: ['Pulses export', 'Cereals export', 'Lentils export', 'Indian pulses', 'Quality cereals export'],
  openGraph: {
    title: 'Pulses & Cereals Export - AOA FOODS PRIVATE LIMITED',
    description: 'Premium pulses and cereals with complete quality assurance and nutritional value.',
    images: ['/images/pulses-cereals-og.svg'],
  },
};

export default function PulsesCerealsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2E7D32] via-[#4A90E2] to-[#2E7D32] text-white py-20 lg:py-32 relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/superfoods-seeds-grains-vegan-vegetarian-eating-clean-eating.jpg"
            alt="Superfoods Seeds and Grains - Premium Pulses & Cereals Collection"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/30">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Quality Pulses & Cereals
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              Pulses & <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Cereals Export</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              AOA Foods provides comprehensive range of pulses, lentils, and cereal products for global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-8 py-4 text-lg"
              >
                Request Pulses Quote
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

      {/* Products We Provide Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pulses & Cereals We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              AOA Foods supplies high-quality pulses and cereals sourced from the best agricultural regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pulses */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#2E7D32] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Premium Pulses</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Chickpeas (Kabuli & Desi)</li>
                <li>• Black Gram (Urad Dal)</li>
                <li>• Green Gram (Moong Dal)</li>
                <li>• Pigeon Peas (Toor Dal)</li>
                <li>• Red Kidney Beans</li>
              </ul>
            </div>

            {/* Lentils */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quality Lentils</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Red Lentils (Masoor Dal)</li>
                <li>• Yellow Lentils</li>
                <li>• Black Lentils</li>
                <li>• Split Lentils</li>
                <li>• Whole Lentils</li>
              </ul>
            </div>

            {/* Cereals */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Cereal Grains</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Wheat varieties</li>
                <li>• Pearl Millet (Bajra)</li>
                <li>• Finger Millet (Ragi)</li>
                <li>• Sorghum (Jowar)</li>
                <li>• Barley</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2E7D32] via-[#4A90E2] to-[#1E3A5F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get Pulses & Cereals Products
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              Contact AOA Foods for premium pulses and cereals with reliable delivery to international markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-8 py-4 text-lg"
              >
                Get Pulses & Cereals Quote
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
          </div>
        </div>
      </section>
    </div>
  );
}