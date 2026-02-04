import type { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Animal Feed & Nutrition Export - AOA FOODS PRIVATE LIMITED',
  description: 'AOA Foods exports high-quality animal feed and nutrition products designed for livestock and poultry industries with balanced nutritional formulations.',
  keywords: ['Animal feed export', 'Livestock feed', 'Poultry feed', 'Cattle feed', 'Animal nutrition export'],
  openGraph: {
    title: 'Animal Feed & Nutrition Export - AOA FOODS PRIVATE LIMITED',
    description: 'Premium animal feed and nutrition products with balanced formulations for livestock health.',
    images: ['/images/animal-feed-og.svg'],
  },
};

export default function AnimalFeedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2E7D32] to-[#1E3A5F] text-white py-16 sm:py-20 lg:py-32 relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/agriculture-food-production-concept-with-tractor-machine-silos-irrigation-system.jpg"
            alt="Agriculture Food Production with Tractor, Silos & Irrigation - Animal Feed Production"
            fill
            priority={true}
            quality={85}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/30">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Quality Animal Feed
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              Animal Feed & <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Nutrition Export</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
              AOA Foods provides high-quality animal feed and nutrition products for livestock and poultry industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <CTAButton
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                Request Feed Quote
              </CTAButton>
              <CTAButton
                href="/business-segments"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#1E3A5F] font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
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
              Animal Feed Products We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              AOA Foods supplies a comprehensive range of animal feed products for various livestock and poultry needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cattle Feed */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#2E7D32] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Cattle Feed</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Dairy cattle concentrate</li>
                <li>• Beef cattle feed</li>
                <li>• Calf starter feed</li>
                <li>• Mineral supplements</li>
              </ul>
            </div>

            {/* Poultry Feed */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Poultry Feed</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Broiler starter & finisher</li>
                <li>• Layer feed</li>
                <li>• Breeder feed</li>
                <li>• Chick crumbles</li>
              </ul>
            </div>

            {/* Aquaculture Feed */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Aquaculture Feed</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Fish feed pellets</li>
                <li>• Shrimp feed</li>
                <li>• Floating & sinking feed</li>
                <li>• Starter & grower feed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#1E3A5F] via-[#2E7D32] to-[#4A90E2] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get Animal Feed Products
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              Contact AOA Foods for high-quality animal feed products with reliable delivery to international markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-8 py-4 text-lg"
              >
                Get Animal Feed Quote
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