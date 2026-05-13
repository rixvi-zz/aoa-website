'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    id: 1,
    title: "Source & Authenticate",
    description: "Direct sourcing from certified organic farms and Halaal-compliant facilities with complete traceability",
    details: ["Certified organic farms", "Halaal compliance verification", "Quality testing", "Traceability documentation"]
  },
  {
    id: 2,
    title: "Process & Certify",
    description: "APEDA-compliant processing with international quality standards and certification",
    details: ["APEDA compliance", "International standards", "Quality control", "Certification process"]
  },
  {
    id: 3,
    title: "Package & Export",
    description: "Premium packaging with cold chain logistics for global delivery",
    details: ["Premium packaging", "Cold chain logistics", "Export documentation", "Global shipping"]
  },
  {
    id: 4,
    title: "Deliver Excellence",
    description: "Timely delivery to 4+ continents with complete compliance and customer satisfaction",
    details: ["Global delivery", "Compliance assurance", "Customer support", "Quality guarantee"]
  }
];

// Clean SVG Icons for each step
const stepIcons = [
  // Source & Authenticate - Farm/Plant icon
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="source">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v8m-4-4h8" />
  </svg>,

  // Process & Certify - Gear/Settings icon
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="process">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,

  // Package & Export - Box/Package icon
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="package">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 9h.01M15 9h.01" />
  </svg>,

  // Deliver Excellence - Truck/Delivery icon
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="deliver">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
];

export default function PremiumProcess() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#4A90E2]/20 to-[#2E7D32]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#2E7D32]/20 to-[#4A90E2]/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/70 backdrop-blur-xl border border-white/30 rounded-full px-6 py-3 shadow-xl mb-8">
            <span className="text-[#1E3A5F] font-bold text-sm bg-gradient-to-r from-[#1E3A5F] to-[#4A90E2] bg-clip-text text-transparent">
              OUR PREMIUM PROCESS
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-[#1E3A5F] mb-6">
            From Farm to
            <span className="block bg-gradient-to-r from-[#4A90E2] to-[#2E7D32] bg-clip-text text-transparent">
              Global Markets
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our <span className="text-[#4A90E2] font-semibold">APEDA-certified</span> process ensures every product meets international standards for <span className="text-[#2E7D32] font-semibold">authentic organic agriculture</span> and Halaal compliance.
          </p>
        </div>

        {/* Premium Horizontal Timeline */}
        <div className="relative mb-16">
          {/* Timeline Container - Responsive: Horizontal on lg+, Vertical on mobile */}
          <div className="flex max-md:flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-4">

            {/* Connecting Line - Hidden on mobile, visible on lg+ */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#4A90E2] via-[#1E3A5F] to-[#2E7D32] rounded-full opacity-30 z-0" style={{ top: '4rem', marginLeft: '4rem', marginRight: '4rem' }}></div>

            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className={`relative cursor-pointer transition-all duration-500 lg:flex-1 ${activeStep === step.id ? 'scale-105' : 'hover:scale-102'
                  }`}
                onClick={() => setActiveStep(step.id)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Mobile Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-[#4A90E2] to-[#2E7D32] opacity-30"></div>
                )}

                {/* Step Card */}
                <div className={`relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 h-full flex flex-col ${activeStep === step.id
                  ? 'border-[#4A90E2]/50 shadow-2xl bg-white/80'
                  : 'border-white/30 shadow-xl hover:shadow-2xl'
                  }`}>

                  {/* Step Icon with SVG */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-6 flex-shrink-0 relative z-10 ${activeStep === step.id
                    ? 'bg-gradient-to-r from-[#4A90E2] to-[#2E7D32] shadow-lg'
                    : 'bg-gradient-to-r from-gray-400 to-gray-500'
                    }`}>
                    {stepIcons[index]}
                  </div>

                  {/* Step Number Badge */}
                  <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-20 ${activeStep === step.id
                    ? 'bg-gradient-to-r from-[#2E7D32] to-[#4A90E2]'
                    : 'bg-gradient-to-r from-gray-500 to-gray-600'
                    }`}>
                    {step.id}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                    {/* Details (shown when active) */}
                    {activeStep === step.id && (
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-[#4A90E2] rounded-full mr-3 flex-shrink-0"></div>
                            {detail}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-12 border border-white/30 shadow-2xl">
            <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">
              Ready to Experience Premium Quality?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Partner with AOA Foods for halaal certified products and premium agricultural commodities with complete APEDA compliance.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#1E3A5F] to-[#4A90E2] text-white font-bold px-10 py-5 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
            >
              Start Your Export Journey
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}