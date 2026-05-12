'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton'; // Note: Ensure this is actually being used or remove if unused.

export default function Hero() {
  // Animation variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const wordVariants: any = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as any
      }
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen bg-slate-900">
      
      {/* --- NEW VIDEO BACKGROUND SECTION --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/images/hero2-video.mp4"
        />
        {/* Dark overlay to ensure text remains readable over the video */}
        <div className="absolute inset-0 z-10 w-full h-full bg-slate-900/50"></div>
        <div className="absolute inset-0 z-20 w-full h-full bg-gradient-to-br from-slate-900/60 via-transparent to-blue-900/30"></div>
      </div>
      {/* -------------------------------------- */}

      {/* Premium 3D background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Floating orbs with glassmorphism */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#4A90E2]/30 to-[#1E3A5F]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#2E7D32]/25 to-[#4A90E2]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#1E3A5F]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-[#4A90E2]/20 to-[#2E7D32]/20 rounded-2xl rotate-45 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-gradient-to-br from-[#2E7D32]/20 to-[#4A90E2]/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
      </div>

      {/* Premium grid pattern with depth */}
      <div className="absolute inset-0 opacity-[0.05] z-0">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(74,144,226,0.1) 0%, transparent 50%)
          `,
          backgroundSize: '60px 60px, 60px 60px, 200px 200px'
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column - Enhanced Content */}
            <div className="text-left space-y-8 relative z-10">
              {/* Premium trust badge with glassmorphism */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 max-md:px-4 max-md:py-2">
                <div className="w-3 h-3 bg-gradient-to-r from-[#4ade80] to-[#60a5fa] rounded-full animate-pulse mr-3 shadow-lg"></div>
                <span className="text-white font-bold text-sm max-md:text-xs tracking-wider">
                  HALAAL CERTIFIED
                </span>
              </div>

              {/* Enhanced headline with 3D text effect and Framer Motion */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight max-md:text-3xl max-md:leading-tight"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span
                  className="block text-white drop-shadow-lg"
                  variants={wordVariants}
                >
                  Premium
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-[#60a5fa] via-[#4ade80] to-white bg-clip-text text-transparent drop-shadow-2xl"
                  variants={wordVariants}
                >
                  Halaal Meat & Agro
                </motion.span>
                <motion.span
                  className="block text-white drop-shadow-lg"
                  variants={wordVariants}
                >
                  Export Excellence
                </motion.span>
              </motion.h1>

              {/* Enhanced subtext */}
              <div className="space-y-4">
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl font-medium max-md:text-lg drop-shadow-md">
                  Your <span className="text-[#60a5fa] font-bold">APEDA-certified</span> partner for premium Halaal meat exports and authentic organic agricultural commodities.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed max-w-xl max-md:text-base drop-shadow-md">
                  Delivering <span className="text-[#4ade80] font-semibold">100% compliant</span> Basmati rice, organic spices, and certified Halaal products to 4+ continents with complete traceability.
                </p>
              </div>

              {/* Premium CTA Buttons with 3D effects */}
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <a
                  href="/business-segments/halaal-meat"
                  className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#1E3A5F] via-[#4A90E2] to-[#2E7D32] text-white font-bold px-10 py-5 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden"
                  style={{
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32] via-[#4A90E2] to-[#1E3A5F] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 flex items-center">
                    🥩 Halaal Meat Export
                    <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>

                <a
                  href="/business-segments"
                  className="group relative inline-flex items-center justify-center bg-white/10 backdrop-blur-xl text-white font-bold px-10 py-5 text-lg rounded-2xl border-2 border-white/20 hover:border-white/50 hover:bg-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
                  style={{
                    boxShadow: '0 15px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}
                >
                  <span className="relative z-10 flex items-center transition-colors duration-500">
                    🌾 Organic Agriculture
                    <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column - 3D Visual Enhancement */}
            <div className="relative -mt-16 lg:-mt-20">
              <div className="relative transform hover:scale-105 transition-transform duration-700">
                {/* Main glassmorphism container */}
                <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-700"
                  style={{
                    boxShadow: '0 25px 50px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}>

                  {/* Hero Image with enhanced effects */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/images/main1.png"
                      alt="Premium AOA Foods export operations - organic grains, Halaal meat, spices, and international shipping"
                      width={600}
                      height={400}
                      className="rounded-2xl w-full h-auto shadow-2xl transform hover:scale-110 transition-transform duration-700"
                      priority
                      style={{
                        filter: 'contrast(1.1) saturate(1.2) brightness(1.05)'
                      }}
                    />

                    {/* Enhanced floating badges */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#4A90E2] to-[#2E7D32] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-2xl border-2 border-white/50 backdrop-blur-sm animate-pulse">
                      ✓ APEDA CERTIFIED
                    </div>

                    <div className="absolute top-4 right-4 bg-gradient-to-r from-[#2E7D32] to-[#4A90E2] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-2xl border-2 border-white/50 backdrop-blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}>
                      ✓ HALAAL PREMIUM
                    </div>

                    {/* Overlay gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
                  </div>

                  {/* Enhanced floating stats with 3D effect */}
                  <div className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/50 transform hover:scale-110 hover:rotate-3 transition-all duration-500"
                    style={{
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)'
                    }}>
                    <div className="text-center">
                      <div className="text-3xl font-black bg-gradient-to-r from-[#1E3A5F] to-[#4A90E2] bg-clip-text text-transparent">4+</div>
                      <div className="text-sm text-gray-800 font-bold">Continents</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/50 transform hover:scale-110 hover:-rotate-3 transition-all duration-500"
                    style={{
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)'
                    }}>
                    <div className="text-center">
                      <div className="text-3xl font-black bg-gradient-to-r from-[#2E7D32] to-[#4A90E2] bg-clip-text text-transparent">100%</div>
                      <div className="text-sm text-gray-800 font-bold">Compliant</div>
                    </div>
                  </div>
                </div>

                {/* Enhanced decorative elements */}
                <div className="absolute -z-10 top-8 right-8 w-80 h-80 bg-gradient-to-br from-[#4A90E2]/30 to-[#2E7D32]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-gradient-to-tr from-[#2E7D32]/30 to-[#4A90E2]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* Premium Service Cards with Icons */}
          <div className="mt-20 pt-12 relative z-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                Our Premium Services
              </h3>
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4 drop-shadow-md">
                Comprehensive food export solutions with complete compliance and quality assurance
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16">
              {[
                {
                  icon: "/icons/halaal.svg",
                  title: "Halaal Meat Export",
                  subtitle: "APEDA Certified",
                  gradient: "from-[#2E7D32] to-[#4A90E2]",
                  href: "/business-segments/halaal-meat"
                },
                {
                  icon: "/icons/rice.svg",
                  title: "Basmati Rice",
                  subtitle: "Premium Quality",
                  gradient: "from-[#4A90E2] to-[#1E3A5F]",
                  href: "/business-segments"
                },
                {
                  icon: "/icons/organic.svg",
                  title: "Organic Products",
                  subtitle: "Certified Organic",
                  gradient: "from-[#1E3A5F] to-[#2E7D32]",
                  href: "/business-segments"
                },
                {
                  icon: "/icons/compliance.svg",
                  title: "Trade Compliance",
                  subtitle: "Full Support",
                  gradient: "from-[#2E7D32] to-[#1E3A5F]",
                  href: "/contact"
                }
              ].map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="group bg-white/10 backdrop-blur-xl rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl border border-white/20 hover:border-white/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                  style={{
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}
                >
                  {/* Icon Container with Blue Gradient and Shadow */}
                  <div className="mb-4 sm:mb-6">
                    <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-xl lg:rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-white/30`}>
                      <Image
                        src={service.icon}
                        alt={`${service.title} icon`}
                        width={32}
                        height={32}
                        className="w-6 sm:w-8 h-6 sm:h-8 group-hover:scale-110 transition-transform duration-300 brightness-0 invert"
                      />
                    </div>
                  </div>

                  {/* Service Content */}
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-[#60a5fa] transition-colors duration-300 leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-[#60a5fa] transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Trust Indicators with glassmorphism */}
          <div className="mt-16 pt-16 border-t border-white/20 relative z-20">
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
              {[
                { icon: "✓", title: "IEC Registered", subtitle: "DGFT Verified", gradient: "from-[#2E7D32] to-[#4A90E2]" },
                { icon: "🛡️", title: "GST Compliant", subtitle: "Tax Authority", gradient: "from-[#4A90E2] to-[#1E3A5F]" },
                { icon: "🏆", title: "Trade Excellence", subtitle: "Quality Assured", gradient: "from-[#1E3A5F] to-[#2E7D32]" }
              ].map((item, index) => (
                <div key={index} className="flex items-center group hover:scale-110 transition-transform duration-500">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mr-4 shadow-2xl border border-white/30 backdrop-blur-sm`}>
                    <span className="text-2xl text-white drop-shadow-md">{item.icon}</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg drop-shadow-md">{item.title}</div>
                    <div className="text-gray-300 text-sm font-medium">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}