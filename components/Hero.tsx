import Image from 'next/image';
import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30 min-h-screen">
      {/* Modern geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#4A90E2]/20 to-[#1E3A5F]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#2E7D32]/15 to-[#4A90E2]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#1E3A5F]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(30,58,95,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="text-left space-y-8">
              {/* Trust badge */}
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-[#4A90E2]/20 rounded-full px-6 py-3 shadow-lg">
                <div className="w-2 h-2 bg-[#2E7D32] rounded-full animate-pulse mr-3"></div>
                <span className="text-[#1E3A5F] font-semibold text-sm">APEDA & MSME Certified</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-[#1E3A5F]">
                Premium Food Export
                <br />
                <span className="bg-gradient-to-r from-[#4A90E2] to-[#2E7D32] bg-clip-text text-transparent">
                  Solutions for Global Markets
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Your trusted MSME and APEDA registered food export company in India, delivering comprehensive international food trade solutions with full compliance.
              </p>

              <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                Serving Asia, Middle East, Europe, and Africa with reliability and transparency.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <CTAButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="bg-gradient-to-r from-[#1E3A5F] to-[#4A90E2] text-white hover:from-[#4A90E2] hover:to-[#1E3A5F] font-bold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  trackingName="Hero CTA Primary"
                  trackingLocation="Hero Section"
                >
                  Request Export Quote
                </CTAButton>
                <a
                  href="/services"
                  className="inline-flex items-center text-[#1E3A5F] hover:text-[#4A90E2] font-semibold text-lg px-8 py-4 rounded-xl border-2 border-[#1E3A5F]/20 hover:border-[#4A90E2]/40 hover:bg-[#4A90E2]/5 transition-all duration-300 group"
                >
                  Explore Our Services
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative">
                {/* Main image container */}
                <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <Image
                    src="/images/hero-bg.svg"
                    alt="Premium food export operations - grains, spices, packaged foods, and shipping containers at international port"
                    width={600}
                    height={400}
                    className="rounded-2xl w-full h-auto shadow-lg"
                    priority
                    quality={100}
                  />
                  
                  {/* Floating stats cards */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#4A90E2]/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#1E3A5F]">4+</div>
                      <div className="text-sm text-gray-600">Continents</div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-[#2E7D32]/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#2E7D32]">100%</div>
                      <div className="text-sm text-gray-600">Compliant</div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -z-10 top-8 right-8 w-72 h-72 bg-gradient-to-br from-[#4A90E2]/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-[#2E7D32]/20 to-transparent rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>

          {/* Trust Indicators Strip */}
          <div className="mt-20 pt-12 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2E7D32] to-[#4A90E2] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#1E3A5F] font-bold text-lg">MSME Registered</div>
                  <div className="text-gray-500 text-sm">Government Certified</div>
                </div>
              </div>

              <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4A90E2] to-[#1E3A5F] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#1E3A5F] font-bold text-lg">APEDA Certified</div>
                  <div className="text-gray-500 text-sm">Export Authority</div>
                </div>
              </div>

              <div className="w-px h-12 bg-gray-300 hidden sm:block"></div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A5F] to-[#2E7D32] rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#1E3A5F] font-bold text-lg">Export Compliant</div>
                  <div className="text-gray-500 text-sm">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}