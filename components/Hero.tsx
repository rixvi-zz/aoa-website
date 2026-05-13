'use client';

import { motion } from 'framer-motion';

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
    <section className="relative overflow-hidden min-h-screen bg-[#0B132B]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 max-w-[1600px] mx-auto min-h-screen pt-24 px-4 lg:px-8 pb-12">

        {/* Bento Card 1 (Main Text Content) */}
        <div className="lg:col-span-7 lg:row-span-2 relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-8 lg:p-16 flex flex-col justify-center">
          {/* Premium trust badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 shadow-lg mb-8 w-fit">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-white font-medium text-sm tracking-wide">
              HALAAL CERTIFIED
            </span>
          </div>

          {/* Main headline with Framer Motion */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8 text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="block"
              variants={wordVariants}
            >
              Premium
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-green-400 to-white bg-clip-text text-transparent"
              variants={wordVariants}
            >
              Halaal Meat & Agro
            </motion.span>
            <motion.span
              className="block"
              variants={wordVariants}
            >
              Export Excellence
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <div className="space-y-4 mb-12 max-w-2xl">
            <p className="text-lg lg:text-xl text-gray-200 leading-relaxed font-light">
              Your <span className="text-blue-400 font-medium">APEDA-certified</span> partner for premium Halaal meat exports and authentic organic agricultural commodities.
            </p>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Delivering <span className="text-green-400 font-medium">100% compliant</span> Basmati rice, organic spices, and certified Halaal products to 4+ continents with complete traceability.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="/business-segments/halaal-meat"
              className="inline-flex items-center justify-center bg-white text-slate-900 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Halaal Meat Export
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href="/business-segments"
              className="inline-flex items-center justify-center border border-white/30 backdrop-blur-md text-white font-semibold px-8 py-4 text-lg rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Organic Agriculture
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bento Card 2 (The Meat Video) */}
        <div className="lg:col-span-5 lg:row-span-1 relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 min-h-[350px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/hero-video.mp4"
          />
        </div>

        {/* Bento Card 3 (The Globe Video) */}
        <div className="lg:col-span-5 lg:row-span-1 relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 min-h-[350px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/hero2-video.mp4"
          />
          <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
            Global Reach: 4+ Continents
          </div>
        </div>

      </div>
    </section>
  );
}