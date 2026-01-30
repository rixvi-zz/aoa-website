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
            className="object-cover object-center"
            priority={true}
            quality={85}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white to-transparent rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#4A90E2] to-transparent rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/30">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Nutritious & Balanced Formulations
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              Animal Feed & <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Nutrition Export</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
              High-quality animal feed and nutrition products designed for livestock and poultry industries
              with balanced nutritional formulations ensuring optimal animal health and productivity.
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

      {/* Feed Categories Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#2E7D32] text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              FEED CATEGORIES
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Animal Nutrition
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Specialized feed formulations for different livestock and poultry requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cattle Feed */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#2E7D32] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Cattle Feed</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nutritionally balanced cattle feed for dairy cows, beef cattle,
                and calves with optimal protein and energy content.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Dairy cattle concentrate</li>
                <li>• Beef cattle feed</li>
                <li>• Calf starter feed</li>
                <li>• Mineral supplements</li>
                <li>• Protein-rich formulations</li>
              </ul>
            </div>

            {/* Poultry Feed */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Poultry Feed</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Specialized poultry feed for broilers, layers, and breeding birds
                with precise nutritional balance for optimal growth and production.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Broiler starter & finisher</li>
                <li>• Layer feed</li>
                <li>• Breeder feed</li>
                <li>• Chick crumbles</li>
                <li>• Vitamin & mineral premix</li>
              </ul>
            </div>

            {/* Aquaculture Feed */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Aquaculture Feed</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                High-quality fish and shrimp feed with optimal protein content
                and digestibility for aquaculture operations.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Fish feed pellets</li>
                <li>• Shrimp feed</li>
                <li>• Floating & sinking feed</li>
                <li>• Starter & grower feed</li>
                <li>• Specialized formulations</li>
              </ul>
            </div>

            {/* Sheep & Goat Feed */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#2E7D32] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Sheep & Goat Feed</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nutritious feed for sheep and goats with balanced minerals
                and vitamins for healthy growth and reproduction.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Sheep concentrate</li>
                <li>• Goat feed pellets</li>
                <li>• Breeding supplements</li>
                <li>• Mineral blocks</li>
                <li>• Lactation feed</li>
              </ul>
            </div>

            {/* Pet Food */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Pet Food</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Premium pet food for dogs and cats with high-quality ingredients
                and balanced nutrition for companion animals.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Dog food (dry & wet)</li>
                <li>• Cat food varieties</li>
                <li>• Puppy & kitten food</li>
                <li>• Senior pet formulations</li>
                <li>• Specialty diets</li>
              </ul>
            </div>

            {/* Feed Additives */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Feed Additives</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Specialized feed additives including vitamins, minerals, probiotics,
                and enzymes for enhanced animal health and performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Vitamin premixes</li>
                <li>• Mineral supplements</li>
                <li>• Probiotics</li>
                <li>• Digestive enzymes</li>
                <li>• Growth promoters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Benefits Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nutritional Excellence & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scientifically formulated feeds for optimal animal health, growth, and productivity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Feed Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Enhanced Growth Rate</strong>
                    <p className="text-gray-600">Optimized protein and energy ratios for faster, healthier growth</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Improved Feed Conversion</strong>
                    <p className="text-gray-600">Better feed efficiency reducing overall feeding costs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Disease Resistance</strong>
                    <p className="text-gray-600">Immune system support through balanced nutrition and supplements</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Reproductive Performance</strong>
                    <p className="text-gray-600">Enhanced fertility and breeding success rates</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#2E7D32] to-[#1E3A5F] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Feed Specifications</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">18-24%</div>
                  <div className="text-white/80 text-sm">Protein Content</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">2800-3200</div>
                  <div className="text-white/80 text-sm">ME (kcal/kg)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3-8%</div>
                  <div className="text-white/80 text-sm">Fat Content</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">≤12%</div>
                  <div className="text-white/80 text-sm">Moisture</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Manufacturing Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Manufacturing & Quality Control
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art manufacturing facilities with strict quality control measures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Raw Materials</h3>
              <p className="text-gray-600">Sourcing premium ingredients from certified suppliers with quality testing</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Processing</h3>
              <p className="text-gray-600">Modern pelleting and mixing technology ensuring uniform nutrient distribution</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Laboratory Testing</h3>
              <p className="text-gray-600">Comprehensive testing for nutritional content, safety, and quality parameters</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Export Packaging</h3>
              <p className="text-gray-600">Moisture-proof packaging suitable for international shipping and storage</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#1E3A5F] via-[#2E7D32] to-[#4A90E2] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Export Premium Animal Feed?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              Partner with AOA Foods for high-quality animal feed and nutrition products with balanced formulations,
              quality assurance, and reliable delivery to international markets.
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