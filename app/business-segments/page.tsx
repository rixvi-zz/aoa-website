import type { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
    title: 'Business Segments - Premium Halaal Export Solutions | AOA FOODS',
    description: 'Explore AOA Foods comprehensive business segments including Halaal meat exports, Basmati rice, pulses, animal feed, and bulk commodities. APEDA registered with global reach.',
    keywords: ['Business segments', 'Halaal meat export', 'Basmati rice export', 'Food export segments', 'APEDA registered exporter', 'Premium food exports'],
    openGraph: {
        title: 'Business Segments - Premium Halaal Export Solutions | AOA FOODS',
        description: 'Comprehensive food export segments from APEDA registered AOA Foods - Halaal meat, rice, pulses, animal feed & commodities.',
        images: ['/images/business-segments-og.svg'],
    },
};

export default function BusinessSegmentsPage() {
    return (
        <div className="min-h-screen">
            {/* 1. Hero Header Section */}
            <section className="bg-gradient-to-br from-[#1E3A5F] via-[#4A90E2] to-[#1E3A5F] text-white py-16 sm:py-20 lg:py-32 relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
                {/* Hero Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/buisnessseg.png"
                        alt="AOA Foods Business Segments Overview - Comprehensive Food Export Solutions"
                        fill
                        priority={true}
                        quality={85}
                        sizes="100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
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
                            APEDA Registered | Comprehensive Food & Agri Export Segments
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
                            Business <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Segments</span>
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-2 sm:mb-4 px-4">
                            Premium Halaal Export Solutions
                        </p>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
                            AOA FOODS PRIVATE LIMITED specializes in premium Halaal food exports with comprehensive
                            business segments covering meat, rice, pulses, animal feed, and bulk commodities for global markets.
                        </p>

                        {/* Large CTAs */}
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <CTAButton
                                href="/contact"
                                variant="secondary"
                                size="lg"
                                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-12 py-5 text-xl rounded-lg shadow-xl"
                            >
                                Request Export Quote
                            </CTAButton>
                            <CTAButton
                                href="/contact"
                                variant="outline"
                                size="lg"
                                className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] font-bold px-12 py-5 text-xl rounded-lg"
                            >
                                View All Products
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Core Focus Section: Halaal Meat Exports */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center bg-[#2E7D32] text-white px-8 py-4 rounded-full text-sm font-bold mb-8">
                            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            OUR CORE EXPERTISE
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                            Premium Halaal Meat Exports
                        </h2>
                        <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-4">
                            Certified, Compliant, and Trusted Globally
                        </p>
                        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                            Our primary business focus with complete religious compliance and quality assurance
                        </p>
                    </div>

                    {/* Image: Large hero image of premium meat processing facility */}
                    <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/main1.png"
                            alt="Premium Halaal Meat Processing Facility - State-of-the-art facility with complete Halaal compliance"
                            width={1200}
                            height={400}
                            className="w-full h-96 object-cover"
                            priority
                        />
                    </div>

                    {/* Sub-categories with visuals */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-[#2E7D32] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Fresh Halaal Meat</h4>
                            <p className="text-gray-600 text-center text-sm leading-relaxed">Premium cuts with complete Halaal certification and religious compliance</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-[#1E3A5F] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Processed Products</h4>
                            <p className="text-gray-600 text-center text-sm leading-relaxed">Value-added meat preparations with specialized processing</p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                            <div className="w-20 h-20 bg-[#2E7D32] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">Specialty Cuts</h4>
                            <p className="text-gray-600 text-center text-sm leading-relaxed">Custom cuts tailored for specific international market requirements</p>
                        </div>
                    </div>

                    {/* Core Focus CTA */}
                    <div className="text-center mt-16">
                        <CTAButton
                            href="/business-segments/halaal-meat"
                            variant="primary"
                            size="lg"
                            className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold px-10 py-4 text-lg rounded-lg"
                        >
                            Explore Halaal Meat Exports
                        </CTAButton>
                    </div>
                </div>
            </section>

            {/* 3. Secondary Segments: Basmati Rice, Pulses, Cereals */}
            <section className="py-20 lg:py-28 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                            Secondary Export Segments
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive portfolio of premium food and agricultural products
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Basmati Rice */}
                        <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="text-center mb-8">
                                <div className="w-24 h-24 bg-gradient-to-br from-[#4A90E2] to-[#1E3A5F] rounded-3xl flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Premium Basmati Rice</h3>
                            </div>

                            {/* Image Placeholder */}
                            <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-48 rounded-2xl mb-6 flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-sm font-medium">Premium Basmati Rice Fields</p>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-6 text-center">
                                High-quality Basmati rice varieties sourced from the finest regions of India with
                                proper aging, quality testing, and international packaging standards.
                            </p>

                            <ul className="space-y-3 text-sm text-gray-600 mb-8">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-[#2E7D32] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Traditional Basmati varieties
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-[#2E7D32] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Aged premium rice
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-[#2E7D32] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Custom packaging solutions
                                </li>
                            </ul>

                            <div className="text-center">
                                <CTAButton
                                    href="/business-segments/basmati-rice"
                                    variant="outline"
                                    className="border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white px-8 py-3"
                                >
                                    Learn More
                                </CTAButton>
                            </div>
                        </div>

                        {/* Pulses & Cereals */}
                        <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="text-center mb-8">
                                <div className="w-24 h-24 bg-gradient-to-br from-[#2E7D32] to-[#4A90E2] rounded-3xl flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Pulses & Cereals</h3>
                            </div>

                            {/* Image Placeholder */}
                            <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-48 rounded-2xl mb-6 flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-sm font-medium">Premium Pulses & Cereals</p>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-6 text-center">
                                Comprehensive range of pulses, lentils, and cereal products with rigorous quality
                                control and proper storage facilities ensuring freshness and nutritional value.
                            </p>

                            <ul className="space-y-3 text-sm text-gray-600 mb-8">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-[#2E7D32] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Various pulse varieties
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-[#2E7D32] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Premium lentil products
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-[#2E7D32] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Specialty legumes
                                </li>
                            </ul>

                            <div className="text-center">
                                <CTAButton
                                    href="/business-segments/pulses-cereals"
                                    variant="outline"
                                    className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white px-8 py-3"
                                >
                                    Learn More
                                </CTAButton>
                            </div>
                        </div>

                        {/* Fruits & Vegetables */}
                        <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="text-center mb-8">
                                <div className="w-24 h-24 bg-gradient-to-br from-[#2E7D32] to-[#4A90E2] rounded-3xl flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Fresh Fruits & Vegetables</h3>
                            </div>

                            {/* Image Placeholder */}
                            <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-48 rounded-2xl mb-6 flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-sm font-medium">Fresh Fruits & Vegetables</p>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-6 text-center">
                                Premium fresh fruits and vegetables including pomegranate, chilli, onion, and grapes
                                with quality assurance and reliable delivery to international markets.
                            </p>

                            <ul className="space-y-3 text-sm text-gray-600 mb-8">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-[#2E7D32] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Premium pomegranate
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-[#2E7D32] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Fresh chilli & onion
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-[#2E7D32] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Quality grapes & more
                                </li>
                            </ul>

                            <div className="text-center">
                                <CTAButton
                                    href="/business-segments/fruits-vegetables"
                                    variant="outline"
                                    className="border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32] hover:text-white px-8 py-3"
                                >
                                    Learn More
                                </CTAButton>
                            </div>
                        </div>

                        {/* Other Segments Combined */}
                        <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="text-center mb-8">
                                <div className="w-24 h-24 bg-gradient-to-br from-[#1E3A5F] to-[#2E7D32] rounded-3xl flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Specialized Products</h3>
                            </div>

                            {/* Image Placeholder */}
                            <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-48 rounded-2xl mb-6 flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-sm font-medium">Specialized Export Products</p>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-6 text-center">
                                Diverse range of animal feed and bulk agricultural commodities
                                with specialized handling and quality assurance.
                            </p>

                            <ul className="space-y-3 text-sm text-gray-600 mb-8">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-[#2E7D32] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Animal feed & nutrition
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-[#2E7D32] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Bulk agri commodities
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-[#2E7D32] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Specialty processing
                                </li>
                            </ul>

                            <div className="text-center">
                                <CTAButton
                                    href="/business-segments"
                                    variant="outline"
                                    className="border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white px-8 py-3"
                                >
                                    Explore All
                                </CTAButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA Section */}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1E3A5F] via-[#4A90E2] to-[#2E7D32] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white to-transparent rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white to-transparent rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                            Ready to Partner with AOA Foods?
                        </h2>
                        <p className="text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-6">
                            Join hundreds of satisfied global partners who trust AOA Foods for their export requirements
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mb-16">
                            Whether you&apos;re looking for premium Halaal meat, quality Basmati rice, nutritious pulses,
                            or bulk commodities, AOA Foods delivers with complete compliance, quality assurance, and reliable service.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
                            <CTAButton
                                href="/contact"
                                variant="secondary"
                                size="lg"
                                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-12 py-5 text-xl rounded-lg shadow-xl"
                            >
                                Get Export Quote Today
                            </CTAButton>
                            <CTAButton
                                href="/about"
                                variant="outline"
                                size="lg"
                                className="border-2 border-white text-white hover:bg-white hover:text-[#1E3A5F] font-bold px-12 py-5 text-xl rounded-lg"
                            >
                                Schedule Consultation
                            </CTAButton>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 max-w-3xl mx-auto">
                            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center justify-center md:justify-start">
                                    <svg className="w-6 h-6 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-lg">aoafoodsind@gmail.com</span>
                                </div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <svg className="w-6 h-6 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                    </svg>
                                    <span className="text-lg">+91 99714 09567</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}