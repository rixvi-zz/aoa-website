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
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white to-transparent rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#1E3A5F] to-transparent rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/30">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Nutritious & Premium Quality
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
              Pulses & <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Cereals Export</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
              Comprehensive range of pulses, lentils, and cereal products with rigorous quality 
              control and proper storage facilities ensuring freshness and nutritional value for global markets.
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

      {/* Product Categories Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#2E7D32] text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              PRODUCT CATEGORIES
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Premium Pulses & Cereals
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              High-quality legumes and cereals sourced from the best agricultural regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Categories Image */}
            <div className="md:col-span-2 lg:col-span-3 mb-12">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/legumes-beans-assortment-different-bowls.jpg"
                  alt="Legumes and Beans Assortment in Different Bowls - Premium Pulses & Cereals Collection"
                  width={1600}
                  height={800}
                  className="w-full h-80 md:h-96 lg:h-[32rem] xl:h-[36rem] object-cover"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
            
            {/* Pulses */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#2E7D32] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Premium Pulses</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                High-protein legumes including chickpeas, black gram, green gram, 
                and pigeon peas with excellent nutritional value.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Chickpeas (Kabuli & Desi)</li>
                <li>• Black Gram (Urad Dal)</li>
                <li>• Green Gram (Moong Dal)</li>
                <li>• Pigeon Peas (Toor Dal)</li>
                <li>• Red Kidney Beans</li>
              </ul>
            </div>

            {/* Lentils */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#4A90E2] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quality Lentils</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Premium lentil varieties with high protein content and excellent 
                cooking properties for international culinary applications.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Red Lentils (Masoor Dal)</li>
                <li>• Yellow Lentils</li>
                <li>• Black Lentils</li>
                <li>• Split Lentils</li>
                <li>• Whole Lentils</li>
              </ul>
            </div>

            {/* Cereals */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Cereal Grains</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nutritious cereal grains including wheat, barley, millet, and 
                specialty grains for diverse international market requirements.
              </p>
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

      {/* Nutritional Benefits Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Nutritional Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rich in protein, fiber, and essential nutrients for healthy global nutrition
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Health Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">High Protein Content</strong>
                    <p className="text-gray-600">20-25% protein content in most pulse varieties</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Rich in Fiber</strong>
                    <p className="text-gray-600">Excellent source of dietary fiber for digestive health</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Essential Minerals</strong>
                    <p className="text-gray-600">Iron, potassium, magnesium, and folate content</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#2E7D32] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong className="text-gray-900">Low Glycemic Index</strong>
                    <p className="text-gray-600">Suitable for diabetic and health-conscious consumers</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#2E7D32] to-[#4A90E2] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Nutritional Values</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">20-25%</div>
                  <div className="text-white/80 text-sm">Protein Content</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">15-20%</div>
                  <div className="text-white/80 text-sm">Fiber Content</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">60-65%</div>
                  <div className="text-white/80 text-sm">Carbohydrates</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">1-3%</div>
                  <div className="text-white/80 text-sm">Fat Content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Storage Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Quality Control & Storage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced storage facilities and quality control ensuring freshness and nutritional value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Testing</h3>
              <p className="text-gray-600">Comprehensive testing for purity, moisture, and nutritional content</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proper Storage</h3>
              <p className="text-gray-600">Climate-controlled warehouses preventing pest infestation and moisture</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cleaning & Sorting</h3>
              <p className="text-gray-600">Advanced cleaning and sorting machinery for uniform quality</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Export Packaging</h3>
              <p className="text-gray-600">Food-grade packaging materials suitable for international shipping</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2E7D32] via-[#4A90E2] to-[#1E3A5F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Export Premium Pulses & Cereals?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
              Partner with AOA Foods for premium pulses and cereals exports with complete quality assurance, 
              proper storage, and reliable delivery to international markets.
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