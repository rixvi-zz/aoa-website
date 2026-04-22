'use client';

import { useEffect, useState } from 'react';
import GlassmorphismCard from './GlassmorphismCard';

export default function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('process-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 5);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const processSteps = [
    {
      step: '01',
      title: 'Source Authentication',
      description: 'Rigorous supplier verification and product authentication ensuring genuine organic and Halaal compliance from certified farms and facilities.',
      icon: '🔍',
      color: 'from-emerald-500 to-green-600'
    },
    {
      step: '02',
      title: 'Quality Assurance',
      description: 'Comprehensive quality testing, contamination screening, and international standards compliance before export approval.',
      icon: '🧪',
      color: 'from-blue-500 to-emerald-500'
    },
    {
      step: '03',
      title: 'Compliance Certification',
      description: 'APEDA registration, IEC documentation, GST compliance, and international trade certifications for seamless export.',
      icon: '📋',
      color: 'from-purple-500 to-blue-500'
    },
    {
      step: '04',
      title: 'Premium Packaging',
      description: 'International-grade packaging with temperature control, contamination prevention, and brand-compliant presentation.',
      icon: '📦',
      color: 'from-orange-500 to-purple-500'
    },
    {
      step: '05',
      title: 'Global Delivery',
      description: 'Cold chain logistics, real-time tracking, customs clearance, and on-time delivery to international destinations.',
      icon: '🚚',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section id="process-section" className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-bl from-purple-400/20 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-8 py-4 rounded-full shadow-xl mb-8 border border-white/20">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm">⚡</span>
            </div>
            <span className="text-white font-bold text-sm tracking-wide">FARM TO FORK EXCELLENCE</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
            Our <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Premium Process</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            From authentic sourcing to global delivery, every step in our process is designed to ensure 
            premium quality, complete compliance, and customer satisfaction.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-white/30 to-white/10 transform -translate-y-1/2 z-0" />
              )}
              
              <GlassmorphismCard 
                className={`p-6 text-center transition-all duration-500 ${
                  activeStep === index ? 'scale-110 shadow-2xl' : 'scale-100'
                } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                hover3D={false}
              >
                {/* Step Number */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl ${
                  activeStep === index ? 'animate-pulse' : ''
                }`}>
                  <span className="text-white font-black text-lg">{step.step}</span>
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                
                {/* Active Indicator */}
                {activeStep === index && (
                  <div className="w-full h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mt-4 animate-pulse" />
                )}
              </GlassmorphismCard>
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          {[
            {
              title: 'Complete Traceability',
              description: 'Full farm-to-fork tracking with digital documentation and quality certificates.',
              icon: '📍',
              stat: '100%'
            },
            {
              title: 'Compliance Guarantee',
              description: 'APEDA, IEC, and GST compliance with international trade regulations.',
              icon: '✅',
              stat: 'CERTIFIED'
            },
            {
              title: 'On-Time Delivery',
              description: 'Reliable logistics network ensuring timely delivery to global destinations.',
              icon: '⏰',
              stat: '24/7'
            }
          ].map((benefit, index) => (
            <GlassmorphismCard key={index} className="p-8 text-center">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <div className="text-3xl font-black text-white mb-2">{benefit.stat}</div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-white/70 leading-relaxed">{benefit.description}</p>
            </GlassmorphismCard>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
      `}</style>
    </section>
  );
}