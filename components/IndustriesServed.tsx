'use client';

import { useState } from 'react';

const industries = [
  {
    id: 'food-retail',
    title: 'Food Retail & Distribution',
    description: 'Premium Halaal meat and organic products for retail chains and distributors',
    icon: '🏪',
    products: ['Halaal Meat Products', 'Organic Basmati Rice', 'Premium Spices', 'Organic Pulses'],
    markets: ['Middle East', 'Europe', 'Asia', 'North America'],
    gradient: 'from-[#4A90E2] to-[#2E7D32]'
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Hospitality',
    description: 'Authentic organic ingredients for premium restaurants and hotel chains',
    icon: '🍽️',
    products: ['Fresh Halaal Meat', 'Aged Basmati Rice', 'Authentic Spices', 'Organic Vegetables'],
    markets: ['UAE', 'Qatar', 'Singapore', 'UK'],
    gradient: 'from-[#2E7D32] to-[#1E3A5F]'
  },
  {
    id: 'food-processing',
    title: 'Food Processing Industry',
    description: 'Bulk organic raw materials for food processing and manufacturing',
    icon: '🏭',
    products: ['Bulk Organic Grains', 'Processing Spices', 'Raw Materials', 'Organic Ingredients'],
    markets: ['Germany', 'Netherlands', 'Italy', 'France'],
    gradient: 'from-[#1E3A5F] to-[#4A90E2]'
  },
  {
    id: 'institutional',
    title: 'Institutional Catering',
    description: 'Large-scale supply for institutions, schools, and corporate catering',
    icon: '🏢',
    products: ['Bulk Halaal Meat', 'Institutional Rice', 'Catering Spices', 'Organic Supplies'],
    markets: ['Saudi Arabia', 'Kuwait', 'Malaysia', 'Indonesia'],
    gradient: 'from-[#4A90E2] via-[#2E7D32] to-[#1E3A5F]'
  }
];

export default function IndustriesServed() {
  const [activeIndustry, setActiveIndustry] = useState('food-retail');

  const activeData = industries.find(ind => ind.id === activeIndustry);

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-[#4A90E2]/15 to-[#2E7D32]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-br from-[#2E7D32]/15 to-[#4A90E2]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/70 backdrop-blur-xl border border-white/30 rounded-full px-6 py-3 shadow-xl mb-8">
            <span className="text-[#1E3A5F] font-bold text-sm bg-gradient-to-r from-[#1E3A5F] to-[#4A90E2] bg-clip-text text-transparent">
              INDUSTRIES WE SERVE
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-[#1E3A5F] mb-6">
            Serving Premium
            <span className="block bg-gradient-to-r from-[#4A90E2] to-[#2E7D32] bg-clip-text text-transparent">
              Global Industries
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From retail chains to fine dining, we supply <span className="text-[#4A90E2] font-semibold">authentic organic agriculture</span> products and <span className="text-[#2E7D32] font-semibold">premium Halaal meat</span> to diverse industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Industry Selector */}
          <div className="space-y-6">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className={`cursor-pointer transition-all duration-500 ${
                  activeIndustry === industry.id ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveIndustry(industry.id)}
              >
                <div className={`bg-white/60 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500 ${
                  activeIndustry === industry.id 
                    ? 'border-[#4A90E2]/50 shadow-2xl bg-white/80' 
                    : 'border-white/30 shadow-xl hover:shadow-2xl'
                }`}>
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl ${
                      activeIndustry === industry.id
                        ? `bg-gradient-to-r ${industry.gradient} text-white`
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {industry.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">{industry.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{industry.description}</p>
                    </div>

                    {/* Active Indicator */}
                    {activeIndustry === industry.id && (
                      <div className="w-3 h-3 bg-gradient-to-r from-[#4A90E2] to-[#2E7D32] rounded-full animate-pulse"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Details */}
          <div className="lg:pl-8">
            {activeData && (
              <div className="bg-white/40 backdrop-blur-2xl rounded-3xl p-10 border border-white/30 shadow-2xl animate-slide-in-right">
                {/* Header */}
                <div className="flex items-center mb-8">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-3xl bg-gradient-to-r ${activeData.gradient} text-white mr-6`}>
                    {activeData.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1E3A5F]">{activeData.title}</h3>
                    <p className="text-gray-600">{activeData.description}</p>
                  </div>
                </div>

                {/* Products */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-[#1E3A5F] mb-4">Key Products</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {activeData.products.map((product, idx) => (
                      <div key={idx} className="flex items-center bg-white/60 rounded-xl p-3 border border-white/30">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#4A90E2] to-[#2E7D32] rounded-full mr-3"></div>
                        <span className="text-sm font-medium text-gray-700">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Markets */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-[#1E3A5F] mb-4">Target Markets</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeData.markets.map((market, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-[#4A90E2]/10 to-[#2E7D32]/10 text-[#1E3A5F] px-4 py-2 rounded-full text-sm font-medium border border-[#4A90E2]/20"
                      >
                        {market}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="/contact"
                  className={`inline-flex items-center bg-gradient-to-r ${activeData.gradient} text-white font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-500`}
                >
                  Get Industry Solutions
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}