import type { Metadata } from 'next';
import Image from 'next/image';
import { coreValues } from '@/lib/data';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
    title: 'About Us - IEC & GST Registered Food Import Export Company',
    description: 'Learn about AOA FOODS PRIVATE LIMITED, an IEC and GST registered company in India providing reliable international food & agri products trade solutions with integrity, quality, compliance, and reliability.',
    keywords: ['About AOA Foods', 'IEC GST registered food company', 'International food trade India', 'Company history', 'Mission vision values'],
    openGraph: {
        title: 'About AOA FOODS - IEC & GST Registered Food Import Export Company',
        description: 'Learn about AOA FOODS PRIVATE LIMITED, an IEC and GST registered company in India providing reliable international food trade solutions.',
        images: ['/images/about-og.svg'],
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Structured Data for About Page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About AOA - MSME Registered Import Export Company",
                        "description": "Learn about AOA Import Export, an MSME-registered company in India providing reliable international trade solutions",
                        "url": "https://aoa-trade.com/about",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "AOA FOODS PRIVATE LIMITED",
                            "legalName": "AOA FOODS PRIVATE LIMITED",
                            "foundingDate": "2025",
                            "description": "IEC and GST registered food import and export company specializing in comprehensive international food & agri products trade solutions",
                            "url": "https://aoa-foods.com",
                            "logo": "https://aoa-foods.com/images/logo.svg",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "A-19, Lane 1, Johri Farm, Noor Nagar Extension, Jamia Nagar",
                                "addressLocality": "New Delhi",
                                "addressRegion": "Delhi",
                                "postalCode": "110025",
                                "addressCountry": "IN"
                            },
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "business",
                                "email": "ahmarabyadtrading@gmail.com",
                                "telephone": "+91-99714-09567"
                            },
                            "identifier": [
                                {
                                    "@type": "PropertyValue",
                                    "name": "IEC",
                                    "value": "ABECA1554F"
                                },
                                {
                                    "@type": "PropertyValue",
                                    "name": "GSTIN",
                                    "value": "07ABECA1554F1ZZ"
                                }
                            ],
                            "knowsAbout": [
                                "Food Import Export",
                                "International Food Trade",
                                "Global Food Sourcing",
                                "Food Logistics",
                                "Trade Compliance",
                                "Agri Products Export"
                            ]
                        }
                    })
                }}
            />
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#1E3A5F] via-[#4A90E2] to-[#1E3A5F] text-white py-20 lg:py-32 relative overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0 bg-black/40">
                    <Image
                        src="/images/about.jpeg"
                        alt="AOA Foods Company Overview & Team"
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                    />
                </div>
                {/* Modern background elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white to-transparent rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#2E7D32] to-transparent rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            {/* IEC & GST Badge */}
                            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/30">
                                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                IEC & GST Registered Company
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold mb-8">
                                About <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">AOA Foods</span>
                            </h1>
                            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                                Your trusted partner in international food trade, connecting Indian businesses
                                with global opportunities through expert export, sourcing, and logistics solutions.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        <div className="text-3xl font-bold text-white mb-2">IEC</div>
                                        <div className="text-white/80 text-sm">DGFT Registered</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        <div className="text-3xl font-bold text-white mb-2">GST</div>
                                        <div className="text-white/80 text-sm">Tax Compliant</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        <div className="text-3xl font-bold text-white mb-2">4+</div>
                                        <div className="text-white/80 text-sm">Continents Served</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        <div className="text-3xl font-bold text-white mb-2">24/7</div>
                                        <div className="text-white/80 text-sm">Support Available</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                IEC & GST Registered Excellence in Global Food Trade
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    AOA FOODS PRIVATE LIMITED is a government-registered IEC and GST compliant
                                    company based in India, specializing in comprehensive international food & agri products
                                    trade solutions. Our IEC registration (ABECA1554F) with DGFT and GST registration
                                    (07ABECA1554F1ZZ) validates our credibility and ensures full regulatory compliance.
                                </p>
                                <p>
                                    Founded with a vision to bridge the gap between Indian food businesses and global markets,
                                    we have established ourselves as a reliable partner for companies seeking to expand
                                    their international food trade footprint. Our expertise spans across food import services,
                                    food export facilitation, global food sourcing, and end-to-end logistics support.
                                </p>
                                <p>
                                    With our deep understanding of international food trade regulations, customs procedures,
                                    APEDA requirements, and market dynamics across Asia, Middle East, Europe, and Africa,
                                    we ensure seamless and compliant food trade operations for our valued partners.
                                </p>
                                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                                    <h4 className="font-semibold text-gray-900 mb-2">Company Legal Information:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                                        <div><strong>Legal Name:</strong> AOA FOODS PRIVATE LIMITED</div>
                                        <div><strong>Business Type:</strong> Private Limited Company</div>
                                        <div><strong>IEC:</strong> ABECA1554F (Issued: 08/01/2026)</div>
                                        <div><strong>GSTIN:</strong> 07ABECA1554F1ZZ (Registered: 17/12/2025)</div>
                                        <div><strong>Authority:</strong> DGFT</div>
                                        <div><strong>Status:</strong> Active & Verified</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <Image
                                src="/images/about.jpeg"
                                alt="AOA Foods office and operations - professional team and facilities"
                                width={500}
                                height={400}
                                className="rounded-2xl shadow-xl object-cover"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-[#0F2A44] text-white p-6 rounded-xl shadow-xl">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-white mb-1">Est. 2025</div>
                                    <div className="text-sm text-blue-200">Years of Excellence</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Our Mission & Vision
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Driving global trade growth through reliable, compliant, and innovative solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Mission */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-[#0F2A44] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                To empower Indian food businesses with seamless access to global markets through
                                comprehensive food import-export solutions, while maintaining the highest standards
                                of compliance, quality, and customer service. We are committed to fostering
                                international food trade relationships that drive mutual growth and prosperity.
                            </p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-[#1E40AF] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Facilitate seamless international food trade
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-[#1E40AF] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Ensure 100% regulatory compliance (IEC, GST, APEDA)
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-[#1E40AF] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Build lasting global partnerships
                                </li>
                            </ul>
                        </div>

                        {/* Vision */}
                        <div className="bg-[#0F2A44] text-white rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-[#1E40AF] rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-blue-100 leading-relaxed mb-6">
                                To become India&apos;s most trusted and preferred IEC & GST registered partner for international
                                food trade, recognized globally for our expertise, integrity, and innovative
                                solutions. We envision a future where geographical boundaries do not limit
                                food business growth, and every food enterprise can access global opportunities with confidence.
                            </p>
                            <ul className="space-y-2 text-blue-100">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Leading IEC & GST registered food trade facilitator in India
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Global recognition for excellence
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    Democratizing global food market access
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide every aspect of our business operations and client relationships
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-20 h-20 bg-[#0F2A44] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1E40AF] transition-colors duration-300">
                                    <Image
                                        src={value.icon}
                                        alt={`${value.title} icon`}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Approach */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Our Business Approach
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            How we deliver exceptional value through our comprehensive international trade methodology
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-12 h-12 bg-[#0F2A44] rounded-lg flex items-center justify-center mb-6">
                                <span className="text-white font-bold text-xl">1</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Consultation & Analysis
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We begin with a thorough understanding of your business needs, market requirements,
                                and compliance obligations to develop a customized trade strategy.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-12 h-12 bg-[#0F2A44] rounded-lg flex items-center justify-center mb-6">
                                <span className="text-white font-bold text-xl">2</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Implementation & Execution
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our expert team handles all aspects of trade execution, from documentation and
                                compliance to logistics coordination and quality assurance.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <div className="w-12 h-12 bg-[#0F2A44] rounded-lg flex items-center justify-center mb-6">
                                <span className="text-white font-bold text-xl">3</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Monitoring & Support
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Continuous monitoring, real-time updates, and ongoing support ensure smooth
                                operations and long-term partnership success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 lg:py-24 bg-[#0F2A44] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                        Ready to Expand Your Global Reach?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Partner with AOA FOODS PRIVATE LIMITED and leverage our IEC & GST registered expertise
                        to unlock new international food trade opportunities for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton href="/contact" variant="secondary" size="lg">
                            Start Your Journey
                        </CTAButton>
                        <CTAButton href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900">
                            Explore Our Services
                        </CTAButton>
                    </div>
                </div>
            </section>
        </div>
    );
}