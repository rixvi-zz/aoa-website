'use client';

import { useEffect, useState } from 'react';
import GlassmorphismCard from './GlassmorphismCard';

export default function BrandStory() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('brand-story');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="brand-story" className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-bl from-blue-200/30 to-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl mb-8 border border-emerald-200/50">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-bold">AOA</span>
            </div>
            <span className="text-slate-700 font-bold text-sm tracking-wide">AUTHENTIC ORGANIC AGRICULTURE</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-black text-slate-800 mb-8 leading-tight">
            The <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">AOA</span> Difference
          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            <strong>Authentic Organic Agriculture</strong> represents our commitment to genuine, sustainable, and premium food export solutions.
            We don't just trade commodities – we cultivate trust, authenticity, and organic excellence in every shipment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              letter: 'A',
              word: 'Authentic',
              description: 'Genuine products with complete traceability from farm to fork. Every product carries our guarantee of authenticity and quality.',
              icon: '🌱',
              gradient: 'from-emerald-500 to-green-600'
            },
            {
              letter: 'O',
              word: 'Organic',
              description: 'Sustainably sourced, environmentally conscious products that meet international organic standards and certifications.',
              icon: '🌿',
              gradient: 'from-blue-500 to-emerald-500'
            },
            {
              letter: 'A',
              word: 'Agriculture',
              description: 'Deep-rooted expertise in agricultural commodities, from premium Basmati rice to certified Halaal meat products.',
              icon: '🚜',
              gradient: 'from-purple-500 to-blue-500'
            }
          ].map((item, index) => (
            <GlassmorphismCard
              key={index}
              className={`p-8 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                <span className="text-3xl font-black text-white">{item.letter}</span>
              </div>

              <div className="text-6xl mb-4">{item.icon}</div>

              <h3 className="text-2xl font-bold text-slate-800 mb-4">{item.word}</h3>

              <p className="text-slate-600 leading-relaxed">{item.description}</p>

              <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mx-auto mt-6" />
            </GlassmorphismCard>
          ))}
        </div>

        {/* Premium Value Proposition */}
        <GlassmorphismCard className={`p-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Why Global Businesses Choose AOA Foods
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                { stat: 'APEDA', label: 'Certified Exporter', icon: '🏆' },
                { stat: 'IEC', label: 'Registered Trader', icon: '📋' },
                { stat: 'GST', label: 'Compliant Business', icon: '✅' },
                { stat: '4+', label: 'Continents Served', icon: '🌍' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-2xl font-black text-slate-800">{item.stat}</div>
                  <div className="text-sm text-slate-600 font-semibold">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </GlassmorphismCard>
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