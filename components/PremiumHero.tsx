'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PremiumHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated 3D spheres */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.8), rgba(30, 58, 95, 0.4))',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            right: '10%',
            filter: 'blur(40px)',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-15 animate-pulse"
          style={{
            background: 'radial-gradient(circle at 70% 70%, rgba(46, 125, 50, 0.6), rgba(74, 144, 226, 0.3))',
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            bottom: '20%',
            left: '15%',
            filter: 'blur(60px)',
            animationDelay: '1s',
          }}
        />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '2s' }} />
      </div>

      {/* Glassmorphism Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Enhanced Content */}
            <div className={`text-left space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              {/* Premium Trust Badge */}
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 shadow-2xl">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse mr-4" />
                <span className="text-white font-bold text-sm tracking-wide">
                  🏆 APEDA CERTIFIED • IEC REGISTERED • GST COMPLIANT
                </span>
              </div>

              {/* Main Headline with 3D Text Effect */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
                  Authentic Organic
                </span>
                <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x" style={{ animationDelay: '0.5s' }}>
                  Agriculture
                </span>
                <span className="block text-white/90 text-3xl lg:text-4xl font-semibold mt-2">
                  Premium Food Export Solutions
                </span>
              </h1>

              {/* Enhanced Subtext */}
              <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl">
                Your trusted partner for <span className="text-emerald-400 font-semibold">premium Halaal meat exports</span> and 
                <span className="text-blue-400 font-semibold"> agricultural commodities</span> with complete APEDA compliance and global reach.
              </p>

              <div className="flex flex-wrap gap-4 text-white/70">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2" />
                  <span>Basmati Rice • Pulses • Spices</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                  <span>Halaal Certified Meat Products</span>
                </div>
              </div>

              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <a
                  href="/business-segments/halaal-meat"
                  className="group relative inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-bold px-10 py-5 text-lg rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center">
                    🥩 Halaal Meat Export
                    <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                
                <a
                  href="/business-segments"
                  className="group relative inline-flex items-center justify-center bg-white/10 backdrop-blur-md text-white font-bold px-10 py-5 text-lg rounded-2xl border-2 border-white/30 hover:border-emerald-400/50 hover:bg-white/20 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center group-hover:text-emerald-400 transition-colors duration-300">
                    🌾 Agricultural Products
                    <svg className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column - 3D Visual */}
            <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="relative perspective-1000">
                {/* 3D Card Container */}
                <div 
                  className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 transform-gpu hover:rotate-y-12 transition-transform duration-700"
                  style={{
                    transform: `rotateY(${mousePosition.x * 0.02 - 1}deg) rotateX(${mousePosition.y * 0.02 - 1}deg)`,
                  }}
                >
                  {/* Main Image with 3D Effect */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/images/main1.png"
                      alt="Premium food export operations"
                      width={600}
                      height={400}
                      className="rounded-2xl w-full h-auto shadow-2xl transform hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    
                    {/* Floating Badges with 3D Effect */}
                    <div className="absolute top-6 left-6 bg-emerald-500 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-2xl border-2 border-white/30 animate-float">
                      ✓ APEDA CERTIFIED
                    </div>
                    <div className="absolute top-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-2xl border-2 border-white/30 animate-float" style={{ animationDelay: '1s' }}>
                      ✓ HALAAL VERIFIED
                    </div>
                    <div className="absolute bottom-6 left-6 bg-purple-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-2xl border-2 border-white/30 animate-float" style={{ animationDelay: '2s' }}>
                      ✓ IEC REGISTERED
                    </div>
                  </div>

                  {/* 3D Floating Stats */}
                  <div className="absolute -top-8 -right-8 bg-gradient-to-br from-white to-gray-100 rounded-2xl p-6 shadow-2xl border border-white/50 animate-float">
                    <div className="text-center">
                      <div className="text-3xl font-black text-slate-800">4+</div>
                      <div className="text-sm text-slate-600 font-semibold">Continents</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-emerald-500 to-blue-600 text-white rounded-2xl p-6 shadow-2xl animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="text-center">
                      <div className="text-3xl font-black">100%</div>
                      <div className="text-sm font-semibold">Compliant</div>
                    </div>
                  </div>
                </div>

                {/* 3D Background Elements */}
                <div className="absolute -z-10 top-12 right-12 w-80 h-80 bg-gradient-to-br from-emerald-400/30 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -z-10 -bottom-12 -left-12 w-72 h-72 bg-gradient-to-tr from-purple-500/20 to-emerald-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className={`mt-24 pt-16 border-t border-white/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🏆', title: 'IEC Registered', subtitle: 'DGFT Verified', color: 'from-emerald-500 to-blue-600' },
                { icon: '📋', title: 'GST Compliant', subtitle: 'Tax Authority', color: 'from-blue-600 to-purple-600' },
                { icon: '🛡️', title: 'Trade Certified', subtitle: 'Quality Assured', color: 'from-purple-600 to-emerald-500' }
              ].map((item, index) => (
                <div key={index} className="group flex items-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{item.title}</div>
                    <div className="text-white/70 text-sm">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-right { animation: fade-in-right 0.8s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
}