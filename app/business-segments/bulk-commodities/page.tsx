import type { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Bulk Agricultural Commodities Export - AOA FOODS PRIVATE LIMITED',
  description: 'AOA Foods exports large-scale agricultural commodity including grains, seeds, and raw materials for industrial and commercial applications worldwide.',
  keywords: ['Bulk commodities export', 'Agricultural commodities', 'Grain export', 'Seeds export', 'Raw materials export'],
  openGraph: {
    title: 'Bulk Agricultural Commodities Export - AOA FOODS PRIVATE LIMITED',
    description: 'Large-scale agricultural commodities with efficient logistics and quality assurance.',
    images: ['/images/bulk-commodities-og.svg'],
  },
};

export default function BulkCommoditiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2E7D32] to-[#1E3A5F] text-white py-16 sm:py-20 lg:py-32 relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/spices-market-morocco.jpg"
            alt="Spices Market Morocco - Bulk Agricultural Commodities & Storage Facilities"
            fill
            className="object-cover object-center"
            priority={true}
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/30">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Bulk Agricultural Products
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              Bulk Agricultural <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Commodities Export</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
              AOA Foods provides large-scale agricultural commodities including grains, seeds, and raw materials for industrial and commercial applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <CTAButton 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                Request Bulk Quote
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
              Bulk Commodities We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              AOA Foods supplies comprehensive range of bulk agricultural products for industrial and commercial use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cereal Grains */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#2E7D32] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Cereal Grains</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Wheat (various grades)</li>
                <li>• Corn/Maize</li>
                <li>• Barley</li>
                <li>• Oats</li>
                <li>• Rye</li>
              </ul>
            </div>

            {/* Oil Seeds */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Oil Seeds</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Sunflower seeds</li>
                <li>• Sesame seeds</li>
                <li>• Mustard seeds</li>
                <li>• Groundnuts/Peanuts</li>
                <li>• Safflower seeds</li>
              </ul>
            </div>

            {/* Spices & Herbs */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Spices & Herbs</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Turmeric powder</li>
                <li>• Coriander seeds</li>
                <li>• Cumin seeds</li>
                <li>• Red chili powder</li>
                <li>• Fenugreek seeds</li>
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
              Get Bulk Commodities Products
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              Contact AOA Foods for large-scale agricultural commodities with reliable delivery to international markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CTAButton 
                href="/contact" 
                variant="secondary" 
                size="lg"
                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-8 py-4 text-lg"
              >
                Get Bulk Commodities Quote
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