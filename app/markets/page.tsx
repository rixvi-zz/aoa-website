import type { Metadata } from 'next';
import { markets } from '@/lib/data';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
    title: 'International Markets - Global Trade Presence by AOA',
    description: 'AOA serves international markets across Asia, Middle East, Europe, and Africa. Explore our global trade presence and partnership opportunities in key regions.',
    keywords: ['International markets', 'Asia trade', 'Middle East trade', 'Europe trade', 'Africa trade', 'Global partnerships', 'International business'],
    openGraph: {
        title: 'International Markets - Global Trade Presence by AOA',
        description: 'AOA serves international markets across Asia, Middle East, Europe, and Africa. Explore our global trade presence and partnership opportunities.',
        images: ['/images/markets-og.svg'],
    },
};

export default function MarketsPage() {
    return (
        <div className="min-h-screen">
            {/* Structured Data for Markets Page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "International Markets - Global Trade Presence by AOA",
                        "description": "AOA serves international markets across Asia, Middle East, Europe, and Africa with comprehensive trade solutions",
                        "url": "https://aoa-trade.com/markets",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "AOA Import Export",
                            "url": "https://aoa-trade.com",
                            "areaServed": [
                                {
                                    "@type": "Place",
                                    "name": "Asia",
                                    "containsPlace": [
                                        { "@type": "Country", "name": "China" },
                                        { "@type": "Country", "name": "Japan" },
                                        { "@type": "Country", "name": "Singapore" },
                                        { "@type": "Country", "name": "Thailand" }
                                    ]
                                },
                                {
                                    "@type": "Place",
                                    "name": "Middle East",
                                    "containsPlace": [
                                        { "@type": "Country", "name": "UAE" },
                                        { "@type": "Country", "name": "Saudi Arabia" },
                                        { "@type": "Country", "name": "Qatar" }
                                    ]
                                },
                                {
                                    "@type": "Place",
                                    "name": "Europe",
                                    "containsPlace": [
                                        { "@type": "Country", "name": "Germany" },
                                        { "@type": "Country", "name": "United Kingdom" },
                                        { "@type": "Country", "name": "France" }
                                    ]
                                },
                                {
                                    "@type": "Place",
                                    "name": "Africa",
                                    "containsPlace": [
                                        { "@type": "Country", "name": "South Africa" },
                                        { "@type": "Country", "name": "Nigeria" },
                                        { "@type": "Country", "name": "Kenya" }
                                    ]
                                }
                            ]
                        }
                    })
                }}
            />
            {/* Hero Section */}
            <section className="bg-[#0F2A44] text-white py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                                Global Market <span className="text-white">Presence</span>
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                Our extensive international network spans across four continents,
                                ensuring comprehensive coverage for your global trade requirements
                                with local expertise and cultural understanding.
                            </p>
                            <div className="grid grid-cols-2 gap-6 text-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <div className="text-2xl font-bold text-white mb-1">4</div>
                                    <div className="text-blue-200 text-sm">Continents</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                    <div className="text-2xl font-bold text-white mb-1">30+</div>
                                    <div className="text-blue-200 text-sm">Countries</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                <svg className="w-full h-64 text-white/20" fill="currentColor" viewBox="0 0 400 200">
                                    {/* World Map Simplified */}
                                    <circle cx="100" cy="80" r="40" opacity="0.3" />
                                    <circle cx="200" cy="60" r="35" opacity="0.3" />
                                    <circle cx="300" cy="90" r="45" opacity="0.3" />
                                    <circle cx="150" cy="140" r="30" opacity="0.3" />

                                    {/* Connection Lines */}
                                    <path d="M100 80 L200 60 L300 90 L150 140 L100 80" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />

                                    {/* Center Hub */}
                                    <circle cx="200" cy="100" r="8" fill="#f59e0b" />
                                    <text x="200" y="125" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">AOA</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Markets Overview */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Our International Markets
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Established partnerships and deep market knowledge across key regions,
                            enabling seamless trade operations and business growth opportunities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {markets.map((market, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                                {/* Market Header */}
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-[#0F2A44] rounded-xl flex items-center justify-center mr-4">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {market.region}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {market.description}
                                </p>

                                {/* Key Countries */}
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Markets:</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {market.countries.map((country, countryIndex) => (
                                            <div
                                                key={countryIndex}
                                                className="flex items-center bg-white rounded-lg p-3 shadow-sm"
                                            >
                                                <div className="w-6 h-6 bg-[#0F2A44] rounded-full flex items-center justify-center mr-3">
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                                <span className="text-gray-700 font-medium">{country}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Market Stats */}
                                <div className="bg-white rounded-xl p-4 mb-6">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div>
                                            <div className="text-lg font-bold text-[#0F2A44]">Active</div>
                                            <div className="text-xs text-gray-600">Partnerships</div>
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-[#1E40AF]">Growing</div>
                                            <div className="text-xs text-gray-600">Trade Volume</div>
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-[#0F2A44]">24/7</div>
                                            <div className="text-xs text-gray-600">Support</div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <CTAButton href="/contact" variant="outline" size="md" className="w-full">
                                    Explore {market.region} Opportunities
                                </CTAButton>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Approach */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Our International Partnership Approach
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Building lasting relationships through cultural understanding,
                            local expertise, and mutual growth opportunities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                            <div className="w-16 h-16 bg-[#0F2A44] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Local Market Knowledge
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Deep understanding of local business practices, cultural nuances,
                                and regulatory requirements in each market we serve.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                            <div className="w-16 h-16 bg-[#0F2A44] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Trusted Network
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Established relationships with verified partners, suppliers,
                                and distributors across all our international markets.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                            <div className="w-16 h-16 bg-[#0F2A44] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Quality Assurance
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Rigorous quality control processes and compliance standards
                                ensuring excellence in every international transaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality & Compliance Standards */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Quality & Compliance Standards
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our commitment to maintaining the highest quality and compliance standards
                                across all international markets ensures reliable, risk-free trade operations
                                for our partners.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-[#1E40AF] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                            International Certifications
                                        </h4>
                                        <p className="text-gray-600">
                                            MSME registration and compliance with international trade standards
                                            including ISO certifications and regional quality requirements.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-[#1E40AF] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                            Regulatory Compliance
                                        </h4>
                                        <p className="text-gray-600">
                                            Adherence to all local and international trade regulations,
                                            customs requirements, and industry-specific compliance standards.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-[#1E40AF] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                            Quality Assurance Process
                                        </h4>
                                        <p className="text-gray-600">
                                            Comprehensive quality control measures including pre-shipment
                                            inspections, documentation verification, and continuous monitoring.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-[#0F2A44] rounded-2xl p-8 text-white">
                                <h3 className="text-xl font-bold mb-6 text-center">Compliance Metrics</h3>

                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-blue-200">Documentation Accuracy</span>
                                            <span className="text-white font-bold">100%</span>
                                        </div>
                                        <div className="w-full bg-[#1E40AF] rounded-full h-3">
                                            <div className="bg-white h-3 rounded-full w-full"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-blue-200">Regulatory Compliance</span>
                                            <span className="text-white font-bold">100%</span>
                                        </div>
                                        <div className="w-full bg-[#1E40AF] rounded-full h-3">
                                            <div className="bg-white h-3 rounded-full w-full"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-blue-200">Quality Standards</span>
                                            <span className="text-white font-bold">98%</span>
                                        </div>
                                        <div className="w-full bg-[#1E40AF] rounded-full h-3">
                                            <div className="bg-white h-3 rounded-full w-[98%]"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-blue-200">On-time Delivery</span>
                                            <span className="text-white font-bold">96%</span>
                                        </div>
                                        <div className="w-full bg-[#1E40AF] rounded-full h-3">
                                            <div className="bg-white h-3 rounded-full w-[96%]"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <div className="inline-flex items-center bg-[#1E40AF] text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        MSME Certified Excellence
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-[#0F2A44] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Explore Global Opportunities with AOA
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Ready to expand into international markets? Our global presence and
                        local expertise can help you navigate new territories with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton href="/contact" variant="secondary" size="lg">
                            Discuss Market Entry
                        </CTAButton>
                        <CTAButton href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#0F2A44]">
                            View Our Services
                        </CTAButton>
                    </div>
                </div>
            </section>
        </div>
    );
}