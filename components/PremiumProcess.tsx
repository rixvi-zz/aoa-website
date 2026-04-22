'use client';

import { useState } from 'react';

const processSteps = [
  {
    id: 1,
    title: "Source & Authenticate",
    description: "Direct sourcing from certified organic farms and Halaal-compliant facilities with complete traceability",
    icon: "🌾",
    details: ["Certified organic farms", "Halaal compliance verification", "Quality testing", "Traceability documentation"]
  },
  {
    id: 2,
    title: "Process & Certify", 
    description: "APEDA-compliant processing with international quality standards and certification",
    icon: "🏭",
    details: ["APEDA compliance", "International standards", "Quality control", "Certification process"]
  },
  {
    id: 3,
    title: "Package & Export",
    description: "Premium packaging with cold chain logistics for global delivery",
    icon: "📦",
    details: ["Premium packaging", "Cold chain logistics", "Export documentation", "Global shipping"]
  },
  {
    id: 4,
    title: "Deliver Excellence",
    description: "Timely delivery to 4+ continents with complete compliance and customer satisfaction",
    icon: "🚢",
    details: ["Global delivery", "Compliance assurance", "Customer support", "Quality guarantee"]
  }
];

export default function PremiumProcess() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#4A90E2]/20 to-[#2E7D32]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-[#2E7D32]/20 to-[#4A90E2]/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
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

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`relative cursor-pointer transition-all duration-500 h-full ${
                activeStep === step.id ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#4A90E2] to-[#2E7D32] opacity-30 z-0"></div>
              )}

              {/* Step Card */}
              <div className={`relative bg-white/60 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 h-full flex flex-col ${
                activeStep === step.id 
                  ? 'border-[#4A90E2]/50 shadow-2xl bg-white/80' 
                  : 'border-white/30 shadow-xl hover:shadow-2xl'
              }`}>
                
                {/* Step Number */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-6 flex-shrink-0 ${
                  activeStep === step.id
                    ? 'bg-gradient-to-r from-[#4A90E2] to-[#2E7D32]'
                    : 'bg-gradient-to-r from-gray-400 to-gray-500'
                }`}>
                  {step.id}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4 flex-shrink-0">{step.icon}</div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                  {/* Details (shown when active) */}
                  {activeStep === step.id && (
                    <div className="space-y-2 animate-slide-in-up">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-[#4A90E2] rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
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