import type { Metadata } from 'next';
import Image from 'next/image';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
    title: 'Fresh Fruits & Vegetables Export - AOA FOODS PRIVATE LIMITED',
    description: 'AOA Foods exports premium fresh fruits and vegetables including pomegranate, chilli, onion, and grapes with quality assurance for global markets.',
    keywords: ['Fruits export', 'Vegetables export', 'Pomegranate export', 'Chilli export', 'Onion export', 'Grapes export'],
    openGraph: {
        title: 'Fresh Fruits & Vegetables Export - AOA FOODS PRIVATE LIMITED',
        description: 'Premium fresh fruits and vegetables with quality assurance and reliable delivery.',
        images: ['/images/fruits-vegetables-og.svg'],
    },
};

export default function FruitsVegetablesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#2E7D32] via-[#4A90E2] to-[#2E7D32] text-white py-20 lg:py-32 relative overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/fresh-vegetables-fruit-market-stall.jpg"
                        alt="Fresh Fruits and Vegetables - Premium Export Quality"
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
                            Fresh & Premium Quality
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                            Fresh Fruits & <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Vegetables Export</span>
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-12">
                            AOA Foods provides premium fresh fruits and vegetables for global markets with quality assurance and reliable delivery.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton
                                href="/contact"
                                variant="secondary"
                                size="lg"
                                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-8 py-4 text-lg"
                            >
                                Request Produce Quote
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

            {/* Featured Products Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Premium Fruits & Vegetables We Provide
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            AOA Foods specializes in exporting high-quality fresh produce with emphasis on our signature products.
                        </p>
                    </div>

                    {/* Featured Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {/* Pomegranate - Featured */}
                        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 shadow-lg border-2 border-red-200 relative overflow-hidden">
                            <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                FEATURED
                            </div>
                            <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Premium Pomegranate</h4>
                            <p className="text-gray-600 text-sm mb-4">
                                High-quality pomegranates with rich antioxidants and exceptional taste.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Fresh & juicy varieties</li>
                                <li>• Export quality grading</li>
                                <li>• Proper cold storage</li>
                            </ul>
                        </div>

                        {/* Chilli - Featured */}
                        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border-2 border-orange-200 relative overflow-hidden">
                            <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                FEATURED
                            </div>
                            <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Premium Chilli</h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Fresh and dried chilli varieties with authentic heat and flavor.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Red & green varieties</li>
                                <li>• Fresh & dried forms</li>
                                <li>• Consistent heat levels</li>
                            </ul>
                        </div>

                        {/* Onion - Featured */}
                        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 shadow-lg border-2 border-yellow-200 relative overflow-hidden">
                            <div className="absolute top-2 right-2 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                FEATURED
                            </div>
                            <div className="w-16 h-16 bg-yellow-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Premium Onion</h4>
                            <p className="text-gray-600 text-sm mb-4">
                                High-quality onions with excellent storage life and consistent quality.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Red & white varieties</li>
                                <li>• Long storage life</li>
                                <li>• Uniform sizing</li>
                            </ul>
                        </div>

                        {/* Grapes - Featured */}
                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 shadow-lg border-2 border-purple-200 relative overflow-hidden">
                            <div className="absolute top-2 right-2 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                FEATURED
                            </div>
                            <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Premium Grapes</h4>
                            <p className="text-gray-600 text-sm mb-4">
                                Fresh, sweet grapes with excellent quality and natural sweetness.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Green & red varieties</li>
                                <li>• Fresh & juicy texture</li>
                                <li>• Export grade quality</li>
                            </ul>
                        </div>
                    </div>

                    {/* Other Products Section */}
                    <div className="bg-gray-50 rounded-3xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Other Fresh Produce We Supply</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Other Fruits */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="w-12 h-12 bg-[#2E7D32] rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-3">Other Fruits</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Apples</li>
                                    <li>• Bananas</li>
                                    <li>• Mangoes</li>
                                    <li>• Citrus fruits</li>
                                </ul>
                            </div>

                            {/* Other Vegetables */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="w-12 h-12 bg-[#4A90E2] rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-3">Other Vegetables</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Potatoes</li>
                                    <li>• Tomatoes</li>
                                    <li>• Garlic</li>
                                    <li>• Ginger</li>
                                </ul>
                            </div>

                            {/* Processed Products */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="w-12 h-12 bg-[#1E3A5F] rounded-xl flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-3">Processed Forms</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>• Dried fruits</li>
                                    <li>• Frozen vegetables</li>
                                    <li>• Dehydrated products</li>
                                    <li>• Pickled items</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2E7D32] via-[#4A90E2] to-[#1E3A5F] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Get Fresh Produce Products
                        </h2>
                        <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
                            Contact AOA Foods for premium fresh fruits and vegetables including our specialty pomegranate, chilli, onion, and grapes with reliable delivery to international markets.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <CTAButton
                                href="/contact"
                                variant="secondary"
                                size="lg"
                                className="bg-white text-[#1E3A5F] hover:bg-gray-100 font-bold px-8 py-4 text-lg"
                            >
                                Get Fresh Produce Quote
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