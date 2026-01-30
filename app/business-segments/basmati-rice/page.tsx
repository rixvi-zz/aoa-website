import type { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
    title: 'Premium Basmati Rice Export - AOA FOODS PRIVATE LIMITED',
    description: 'AOA Foods exports premium Basmati rice varieties sourced from the finest regions of India with proper aging, quality testing, and international packaging standards.',
    keywords: ['Basmati rice export', 'Premium Basmati rice', 'Indian rice export', 'Quality Basmati varieties', 'Rice export India'],
    openGraph: {
        title: 'Premium Basmati Rice Export - AOA FOODS PRIVATE LIMITED',
        description: 'High-quality Basmati rice varieties with complete quality assurance and international standards.',
        images: ['/images/basmati-rice-og.svg'],
    },
};

export default function BasmatiRicePage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#4A90E2] via-[#1E3A5F] to-[#4A90E2] text-white py-20 lg:py-32 relative overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/rice-flakes-rice-noodles-rice-bread-rice-top-view.jpg"
                        alt="Premium Basmati Rice Fields & Processing - AOA Foods"
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white to-transparent rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#2E7D32] to-transparent rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/30">
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            Premium Quality & Export Excellence
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                            Premium <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Basmati Rice Export</span>
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
                            High-quality Basmati rice varieties sourced from the finest regions of India with
                            proper aging, quality testing, and international packaging standards for global markets.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton
                                href="/contact"
                                variant="secondary"
                                size="lg"
                                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-8 py-4 text-lg"
                            >
                                Request Rice Quote
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

            {/* Rice Varieties Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-[#4A90E2] text-white px-6 py-3 rounded-full text-sm font-bold mb-6">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            PREMIUM VARIETIES
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Basmati Rice Excellence
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            Authentic Indian Basmati with superior aroma, texture, and grain length
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Rice Varieties Image */}
                        <div className="md:col-span-2 lg:col-span-3 mb-12">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src="/images/overhead-view-four-different-types-organic-rice-grains.jpg"
                                    alt="Overhead View of Four Different Types of Organic Rice Grains - Premium Basmati Varieties"
                                    width={1600}
                                    height={800}
                                    className="w-full h-80 md:h-96 lg:h-[32rem] xl:h-[36rem] object-cover"
                                    quality={100}
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-[#4A90E2] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Traditional Basmati 1121</h4>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Extra-long grain Basmati with exceptional aroma and fluffy texture.
                                Perfect for premium international markets.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Grain length: 8.30mm+</li>
                                <li>• Aged for 2+ years</li>
                                <li>• Premium export quality</li>
                                <li>• Excellent cooking properties</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-[#2E7D32] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Pusa Basmati</h4>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                High-yielding variety with excellent cooking quality and distinctive
                                Basmati aroma. Ideal for bulk export orders.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Consistent quality</li>
                                <li>• Good elongation ratio</li>
                                <li>• Cost-effective option</li>
                                <li>• Reliable supply chain</li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Organic Basmati</h4>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Certified organic Basmati rice grown without chemicals.
                                Premium option for health-conscious international markets.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>• Organic certified</li>
                                <li>• Chemical-free cultivation</li>
                                <li>• Premium market positioning</li>
                                <li>• Sustainable farming</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Assurance Section */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Quality Assurance & Processing
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Rigorous quality control from sourcing to packaging ensuring international standards
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Processing Excellence</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-[#4A90E2] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <strong className="text-gray-900">Proper Aging Process</strong>
                                        <p className="text-gray-600">Minimum 2-year aging for enhanced aroma and cooking quality</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-[#4A90E2] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <strong className="text-gray-900">Advanced Milling Technology</strong>
                                        <p className="text-gray-600">State-of-the-art milling ensuring minimal breakage and uniform quality</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-[#4A90E2] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <strong className="text-gray-900">Quality Testing Laboratory</strong>
                                        <p className="text-gray-600">Comprehensive testing for moisture, purity, and grain characteristics</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-[#4A90E2] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <strong className="text-gray-900">Hygienic Packaging</strong>
                                        <p className="text-gray-600">Food-grade packaging materials with proper sealing and labeling</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-[#4A90E2] to-[#1E3A5F] rounded-3xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Quality Parameters</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <div className="text-3xl font-bold mb-2">≤12%</div>
                                    <div className="text-white/80 text-sm">Moisture Content</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">≥95%</div>
                                    <div className="text-white/80 text-sm">Purity Level</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">8.3mm+</div>
                                    <div className="text-white/80 text-sm">Grain Length</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold mb-2">≤5%</div>
                                    <div className="text-white/80 text-sm">Broken Grains</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packaging & Export Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Packaging & Export Solutions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Customized packaging options designed for international shipping and market requirements
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Bulk Packaging</h3>
                            <p className="text-gray-600">25kg, 50kg PP bags for wholesale and institutional buyers</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#2E7D32] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Retail Packaging</h3>
                            <p className="text-gray-600">1kg, 5kg, 10kg consumer packs with attractive branding</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#1E3A5F] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Branding</h3>
                            <p className="text-gray-600">Private label options with buyer's brand and specifications</p>
                        </div>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-[#4A90E2] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Export Compliance</h3>
                            <p className="text-gray-600">Complete documentation and certification for international trade</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-[#4A90E2] via-[#1E3A5F] to-[#2E7D32] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Ready to Export Premium Basmati Rice?
                        </h2>
                        <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
                            Partner with AOA Foods for premium Basmati rice exports with complete quality assurance,
                            proper aging, and reliable delivery to international markets.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <CTAButton
                                href="/contact"
                                variant="secondary"
                                size="lg"
                                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-8 py-4 text-lg"
                            >
                                Get Basmati Rice Quote
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