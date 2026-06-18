'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import '../styles/enhanced-markets.css';

interface Country {
  name: string;
  code: string;
}

interface Market {
  region: string;
  countries: Country[];
  description: string;
}

const marketsData: Market[] = [
  {
    region: 'Asia',
    countries: [
      { name: 'China', code: 'cn' },
      { name: 'Singapore', code: 'sg' },
      { name: 'Thailand', code: 'th' },
      { name: 'Vietnam', code: 'vn' },
      { name: 'Hong Kong', code: 'hk' },
      { name: 'Malaysia', code: 'my' },
      { name: 'Indonesia', code: 'id' },
      { name: 'Kazakhstan', code: 'kz' },
    ],
    description: 'Strong partnerships across Asian markets with deep understanding of regional trade regulations and business practices.'
  },
  {
    region: 'Middle East & North Africa',
    countries: [
      { name: 'UAE', code: 'ae' },
      { name: 'Saudi Arabia', code: 'sa' },
      { name: 'Qatar', code: 'qa' },
      { name: 'Kuwait', code: 'kw' },
      { name: 'Oman', code: 'om' },
      { name: 'Bahrain', code: 'bh' },
      { name: 'Jordan', code: 'jo' },
      { name: 'Turkey', code: 'tr' },
      { name: 'Iran', code: 'ir' },
      { name: 'Iraq', code: 'iq' },
      { name: 'Egypt', code: 'eg' },
      { name: 'Lebanon', code: 'lb' },
      { name: 'Algeria', code: 'dz' },
    ],
    description: 'Established network in Middle Eastern and North African markets facilitating trade in various sectors including oil & gas, construction, and consumer goods.'
  },
  {
    region: 'Europe & Caucasus',
    countries: [
      { name: 'Germany', code: 'de' },
      { name: 'United Kingdom', code: 'gb' },
      { name: 'France', code: 'fr' },
      { name: 'Italy', code: 'it' },
      { name: 'Netherlands', code: 'nl' },
      { name: 'Spain', code: 'es' },
      { name: 'Belgium', code: 'be' },
      { name: 'Poland', code: 'pl' },
      { name: 'Armenia', code: 'am' },
      { name: 'Georgia', code: 'ge' },
    ],
    description: 'Comprehensive European market coverage with expertise in EU regulations, standards, and compliance requirements, extending to Caucasus region.'
  },
  {
    region: 'Africa',
    countries: [
      { name: 'South Africa', code: 'za' },
      { name: 'Nigeria', code: 'ng' },
      { name: 'Kenya', code: 'ke' },
      { name: 'Morocco', code: 'ma' },
      { name: 'Ghana', code: 'gh' },
      { name: 'Tanzania', code: 'tz' },
      { name: 'Ethiopia', code: 'et' },
      { name: 'Angola', code: 'ao' },
      { name: 'Congo', code: 'cg' },
      { name: 'Gabon', code: 'ga' },
      { name: 'Equatorial Guinea', code: 'gq' },
      { name: 'Ivory Coast', code: 'ci' },
    ],
    description: 'Growing presence in African markets with focus on infrastructure development, mining, and agricultural trade opportunities across diverse economies.'
  }
];

interface CountryItemProps {
  country: Country;
  index: number;
  isLoading: boolean;
  onImageLoad: (countryCode: string) => void;
  onImageError: (countryCode: string) => void;
}

const CountryItem: React.FC<CountryItemProps> = ({ country, index, isLoading, onImageLoad, onImageError }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Local flag images — path unchanged per requirement
  const flagUrl = `/flags/${country.code}.png`;

  const handleImageLoad = () => {
    setImageLoaded(true);
    onImageLoad(country.code);
  };

  const handleImageError = () => {
    setImageError(true);
    onImageError(country.code);
  };

  const renderFlagImage = () => {
    if (imageError) {
      return (
        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        </div>
      );
    }

    return (
      <Image
        src={flagUrl}
        alt={`${country.name} flag`}
        width={32}
        height={24}
        className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
        priority={false}
      />
    );
  };

  return (
    <div
      className="group flex items-center space-x-3 p-3 rounded-xl bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white hover:border-[#1E40AF]/30 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer transform country-item-hover"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.6s ease-out forwards',
        opacity: 0,
        transform: 'translateY(20px)'
      }}
    >
      {/* Flag Container */}
      <div className="relative w-8 h-6 flex-shrink-0 rounded overflow-hidden bg-gray-200">
        {isLoading && !imageLoaded && !imageError && (
          <div className="absolute inset-0 flag-skeleton"></div>
        )}
        {renderFlagImage()}
      </div>

      {/* Country Name */}
      <span className="text-sm font-medium text-gray-700 group-hover:text-[#1E40AF] transition-colors duration-300 flex-1">
        {country.name}
      </span>

      {/* Status Indicator */}
      <div className="flex items-center space-x-1">
        {imageError && (
          <div className="w-2 h-2 bg-red-400 rounded-full opacity-50" title="Flag unavailable"></div>
        )}
        {imageLoaded && !imageError && (
          <div className="w-2 h-2 bg-[#1E40AF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"></div>
        )}
      </div>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
export default function EnhancedMarkets() {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const initialLoadingStates: Record<string, boolean> = {};
    marketsData.forEach(market => {
      market.countries.forEach(country => {
        initialLoadingStates[country.code] = true;
      });
    });
    setLoadingStates(initialLoadingStates);

    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (countryCode: string) => {
    setLoadingStates(prev => ({ ...prev, [countryCode]: false }));
  };

  const handleImageError = (countryCode: string) => {
    setLoadingStates(prev => ({ ...prev, [countryCode]: false }));
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in { animation: slideInFromLeft 0.8s ease-out forwards; }
      `}</style>

      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-[#0F2A44]/15 to-transparent rounded-full -translate-x-36 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#1E40AF]/15 to-transparent rounded-full translate-x-48 blur-2xl"></div>
          <div className="absolute top-0 left-1/2 w-80 h-80 bg-gradient-to-b from-[#1E40AF]/10 to-transparent rounded-full -translate-x-40 -translate-y-40 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          {/* Section Header */}
          <motion.div
            className={`text-center mb-24 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-[#0F2A44] to-[#1E40AF] px-8 py-4 rounded-full shadow-xl mb-8 border border-white/20">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <span className="text-sm font-bold text-white">Global Food Export Network</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2A44] mb-8 leading-tight">
              Global Food Export Markets
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our extensive international network spans across four continents,
              ensuring comprehensive coverage for your food export requirements with full APEDA compliance.
            </p>
          </motion.div>

          {/* ── Market Overview Stats ── */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {/* Stats Cards */}
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="text-3xl font-bold text-[#0F2A44] mb-2">4+</div>
                <div className="text-sm text-gray-600 font-medium">Continents</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="text-3xl font-bold text-[#1E40AF] mb-2">50+</div>
                <div className="text-sm text-gray-600 font-medium">Countries</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="text-3xl font-bold text-[#0F2A44] mb-2">100+</div>
                <div className="text-sm text-gray-600 font-medium">Partners</div>
              </div>
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50">
                <div className="text-3xl font-bold text-[#1E40AF] mb-2">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Markets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketsData.map((market, marketIndex) => (
              <motion.div
                key={marketIndex}
                className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-white/50 hover:border-[#1E40AF]/30 group relative overflow-hidden ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
                style={{ animationDelay: `${marketIndex * 200}ms` }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: marketIndex * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/5 to-[#0F2A44]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0F2A44] via-[#1E40AF] to-[#0F2A44] rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#0F2A44] group-hover:text-[#1E40AF] transition-colors duration-300 leading-tight">
                      {market.region}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm">
                    {market.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-[#0F2A44] mb-4 uppercase tracking-wide flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#1E40AF] to-[#0F2A44] rounded-full mr-2"></div>
                      Key Markets ({market.countries.length}):
                    </h4>

                    <div className="space-y-2 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      {market.countries.map((country, countryIndex) => (
                        <CountryItem
                          key={country.code}
                          country={country}
                          index={countryIndex}
                          isLoading={loadingStates[country.code] || false}
                          onImageLoad={handleImageLoad}
                          onImageError={handleImageError}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="w-12 h-1 bg-gradient-to-r from-[#1E40AF] to-[#0F2A44] rounded-full mt-8 group-hover:w-16 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className={`text-center mt-20 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
            style={{ animationDelay: '1000ms' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#1E40AF] to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#0F2A44] to-transparent rounded-full translate-x-20 translate-y-20"></div>
              </div>

              <div className="relative">
                <div className="inline-flex items-center bg-gradient-to-r from-[#0F2A44] to-[#1E40AF] px-6 py-3 rounded-full shadow-lg mb-8">
                  <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-bold text-white">Start Your Global Journey</span>
                </div>

                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Ready to explore food export opportunities in these markets?
                </p>

                <div className="inline-flex items-center bg-white rounded-2xl p-3 shadow-2xl border border-gray-200">
                  <a
                    href="/markets"
                    className="px-8 py-4 bg-gradient-to-r from-[#0F2A44] to-[#1E40AF] text-white rounded-xl font-bold hover:from-[#1E40AF] hover:to-[#0F2A44] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Explore Markets
                  </a>
                  <a
                    href="/contact"
                    className="px-8 py-4 text-[#0F2A44] font-bold hover:bg-[#0F2A44] hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}