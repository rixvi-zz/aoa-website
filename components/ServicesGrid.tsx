'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { services } from '@/lib/data';
import CTAButton from './CTAButton';

export default function ServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-br from-[#4A90E2]/10 to-transparent rounded-full -translate-y-24 sm:-translate-y-48 blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-tl from-[#2E7D32]/10 to-transparent rounded-full translate-y-20 sm:translate-y-40 blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Modern Section Header - Responsive */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-[#4A90E2]/10 to-[#1E3A5F]/10 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full mb-6 sm:mb-8 border border-[#4A90E2]/20">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#2E7D32] rounded-full animate-pulse mr-2 sm:mr-3"></div>
            <span className="text-[#1E3A5F] font-bold text-xs sm:text-sm uppercase tracking-wide">Our Services</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8">
            <span className="text-[#1E3A5F]">Food Export Services & </span>
            <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-[#4A90E2] to-[#2E7D32] bg-clip-text text-transparent">Global Trade Solutions</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From APEDA-compliant food export services to global sourcing, our MSME-registered international trade company provides end-to-end solutions for your food business expansion needs.
          </p>
        </div>

        {/* Enhanced Services Grid with Expanded Features - Responsive layout with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-4 border border-gray-100 hover:border-[#4A90E2]/30 overflow-hidden cursor-pointer"
              onMouseMove={(e: any) => handleMouseMove(e as any, index)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setHoveredCard(index)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/5 via-transparent to-[#2E7D32]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#4A90E2] via-[#1E3A5F] to-[#2E7D32] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white rounded-2xl sm:rounded-3xl"></div>
              </div>

              <div className="relative z-10">
                {/* Modern Service Icon - Responsive sizing */}
                <div className="relative mb-4 sm:mb-6 lg:mb-8">
                  <div className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-br from-[#4A90E2] to-[#1E3A5F] rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={40}
                      height={40}
                      className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Service Content - Responsive typography */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#1E3A5F] mb-2 sm:mb-3 lg:mb-4 group-hover:text-[#4A90E2] transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Expanded Key Features - All features displayed - Responsive spacing */}
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 lg:mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      <div className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 bg-gradient-to-br from-[#4A90E2] to-[#2E7D32] rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Modern Learn More Link - Responsive */}
                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#1E3A5F] font-bold hover:text-[#4A90E2] transition-all duration-300 text-xs sm:text-sm group-hover:bg-gradient-to-r group-hover:from-[#4A90E2]/10 group-hover:to-[#2E7D32]/10 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl -mx-3 sm:-mx-4 group"
                >
                  Learn More
                  <svg className="w-3 sm:w-4 h-3 sm:h-4 ml-1 sm:ml-2 transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modern Bottom CTA - Responsive */}
        <div className="text-center relative">
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-gray-100 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/5 via-transparent to-[#2E7D32]/5"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center bg-gradient-to-r from-[#1E3A5F] to-[#4A90E2] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full shadow-xl mb-4 sm:mb-6 lg:mb-8">
                <svg className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-white font-bold text-sm sm:text-base">Start Your Food Export Journey</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E3A5F] mb-3 sm:mb-4 lg:mb-6">
                Ready to expand your food business globally?
              </h3>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s discuss your export requirements and APEDA compliance needs with our expert team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <CTAButton
                  href="/contact"
                  variant="primary"
                  size="lg"
                  trackingName="Services CTA Primary"
                  trackingLocation="Services Section"
                  className="bg-gradient-to-r from-[#1E3A5F] to-[#4A90E2] text-white hover:from-[#4A90E2] hover:to-[#1E3A5F] shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base"
                >
                  <span className="sm:hidden">Get Started</span>
                  <span className="hidden sm:inline">Get Started Today</span>
                </CTAButton>
                <CTAButton
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  trackingName="Services CTA Secondary"
                  trackingLocation="Services Section"
                  className="border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
                >
                  <span className="sm:hidden">Contact Us</span>
                  <span className="hidden sm:inline">Get In Touch</span>
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}