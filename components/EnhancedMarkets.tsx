'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import createGlobe from 'cobe';
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

  // Local flag images
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
        className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
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
      {/* Flag Container with Enhanced Loading States */}
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

export default function EnhancedMarkets() {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Initialize loading states
    const initialLoadingStates: Record<string, boolean> = {};
    marketsData.forEach(market => {
      market.countries.forEach(country => {
        initialLoadingStates[country.code] = true;
      });
    });
    setLoadingStates(initialLoadingStates);

    // Trigger animations
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Initialize Globe with error handling
    let phi = 0;
    let globe: any;

    const initializeGlobe = () => {
      if (canvasRef.current && typeof window !== 'undefined') {
        try {
          globe = createGlobe(canvasRef.current, {
            devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
            width: 800,
            height: 800,
            phi: 0,
            theta: 0.3,
            dark: 0,
            diffuse: 1.5,
            mapSamples: 20000,
            mapBrightness: 8,
            baseColor: [0.15, 0.35, 0.75],
            markerColor: [1, 0.3, 0.1],
            glowColor: [0.7, 0.8, 1],
            markers: [
              // Major export destinations with proper coordinates [lat, lng]
              { location: [28.6139, 77.2090], size: 0.08 }, // Delhi (Home - largest)
              { location: [25.2048, 55.2708], size: 0.06 }, // Dubai
              { location: [1.3521, 103.8198], size: 0.05 }, // Singapore
              { location: [51.5074, -0.1278], size: 0.05 }, // London
              { location: [40.7128, -74.0060], size: 0.05 }, // New York
              { location: [35.6762, 139.6503], size: 0.04 }, // Tokyo
              { location: [39.9042, 116.4074], size: 0.04 }, // Beijing
              { location: [13.7563, 100.5018], size: 0.04 }, // Bangkok
              { location: [21.0285, 105.8542], size: 0.04 }, // Hanoi
              { location: [3.1390, 101.6869], size: 0.04 }, // Kuala Lumpur
              { location: [24.7136, 46.6753], size: 0.04 }, // Riyadh
              { location: [29.3117, 47.4818], size: 0.04 }, // Kuwait City
              { location: [25.2854, 51.5310], size: 0.04 }, // Doha
              { location: [52.5200, 13.4050], size: 0.04 }, // Berlin
              { location: [48.8566, 2.3522], size: 0.04 }, // Paris
              { location: [-26.2041, 28.0473], size: 0.04 }, // Johannesburg
              { location: [6.5244, 3.3792], size: 0.04 }, // Lagos
              { location: [30.0444, 31.2357], size: 0.04 }, // Cairo
              { location: [33.8869, 35.5131], size: 0.03 }, // Beirut
              { location: [36.2048, 138.2529], size: 0.03 }, // Japan Center
            ],
            // @ts-ignore
            onRender: (state: any) => {
              // Smooth auto-rotate
              phi += 0.003;
              state.phi = phi;
              // Gentle vertical oscillation
              state.theta = 0.3 + Math.sin(phi * 0.3) * 0.05;
            }
          });

          console.log('🌍 Globe initialized successfully');
        } catch (error) {
          console.error('❌ Globe initialization failed:', error);
        }
      }
    };

    // Delay globe initialization to ensure canvas is ready
    const globeTimer = setTimeout(initializeGlobe, 200);

    // Debug: Log configuration
    console.log('🌍 Enhanced Markets initialized with', Object.keys(initialLoadingStates).length, 'countries');

    return () => {
      clearTimeout(timer);
      clearTimeout(globeTimer);
      if (globe) {
        try {
          globe.destroy();
        } catch (error) {
          console.warn('Globe cleanup warning:', error);
        }
      }
    };
  }, []);

  const handleImageLoad = (countryCode: string) => {
    setLoadingStates(prev => ({ ...prev, [countryCode]: false }));
    console.log(`✅ Flag loaded: ${countryCode}`);
  };

  const handleImageError = (countryCode: string) => {
    setLoadingStates(prev => ({ ...prev, [countryCode]: false }));
    console.warn(`❌ Flag failed: ${countryCode}`);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }
      `}</style>

      {/* International Markets Section with Premium Visual Design */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Enhanced background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-[#0F2A44]/15 to-transparent rounded-full -translate-x-36 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-[#1E40AF]/15 to-transparent rounded-full translate-x-48 blur-2xl"></div>
          <div className="absolute top-0 left-1/2 w-80 h-80 bg-gradient-to-b from-[#1E40AF]/10 to-transparent rounded-full -translate-x-40 -translate-y-40 blur-3xl"></div>
        </div>

        {/* World map subtle background */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-full max-w-4xl h-auto" viewBox="0 0 1000 500" fill="none">
              <path d="M100 200 Q200 150 300 200 T500 200 T700 200 T900 200" stroke="currentColor" strokeWidth="2" fill="none" className="text-[#0F2A44]" />
              <path d="M150 250 Q250 200 350 250 T550 250 T750 250" stroke="currentColor" strokeWidth="2" fill="none" className="text-[#1E40AF]" />
              <circle cx="200" cy="200" r="3" fill="currentColor" className="text-[#1E40AF]" />
              <circle cx="400" cy="220" r="3" fill="currentColor" className="text-[#0F2A44]" />
              <circle cx="600" cy="180" r="3" fill="currentColor" className="text-[#1E40AF]" />
              <circle cx="800" cy="210" r="3" fill="currentColor" className="text-[#0F2A44]" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Premium Section Header */}
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

          {/* Interactive Globe Section */}
          <motion.div
            className="flex justify-center mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              {/* Globe Container with Enhanced Styling */}
              <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-full p-6 shadow-2xl border border-blue-200/50 backdrop-blur-sm">
                <canvas
                  ref={canvasRef}
                  style={{
                    width: 400,
                    height: 400,
                    maxWidth: "100%",
                    aspectRatio: 1,
                  }}
                  className="rounded-full shadow-inner bg-gradient-to-br from-blue-900/10 to-indigo-900/10"
                />

                {/* Enhanced Glow Effect Overlay */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-t from-blue-500/5 via-transparent to-blue-300/5 pointer-events-none"></div>
                <div className="absolute inset-4 rounded-full border border-blue-300/20 pointer-events-none"></div>

                {/* Floating Labels for Key Markets */}
                <div className="absolute -top-2 left-8 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-blue-200/50 transform -rotate-3">
                  <div className="text-xs font-bold text-blue-900 flex items-center">
                    <span className="mr-1">🇮🇳</span>
                    India (HQ)
                  </div>
                </div>

                <div className="absolute top-4 -right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-blue-200/50 transform rotate-2">
                  <div className="text-xs font-bold text-blue-900 flex items-center">
                    <span className="mr-1">🌍</span>
                    Global Network
                  </div>
                </div>

                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rotate-1 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-blue-200/50">
                  <div className="text-xs font-bold text-blue-900 flex items-center">
                    <span className="mr-1">📍</span>
                    4+ Continents
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path d="M200,200 Q150,100 100,150" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                    <path d="M200,200 Q300,120 350,180" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
                    <path d="M200,200 Q180,300 120,280" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '2s' }} />
                  </svg>
                </div>
              </div>

              {/* Enhanced Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '25s' }}>
                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg border-2 border-white/50"></div>
              </div>

              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-4 right-1/4 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full transform translate-x-1/2 translate-y-1/2 shadow-lg border-2 border-white/50"></div>
              </div>

              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '40s' }}>
                <div className="absolute top-1/4 right-2 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transform translate-x-1/2 -translate-y-1/2 shadow-lg border border-white/50"></div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Markets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketsData.map((market, marketIndex) => (
              <motion.div
                key={marketIndex}
                className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-white/50 hover:border-[#1E40AF]/30 group relative overflow-hidden ${isVisible ? 'animate-slide-in' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${marketIndex * 200}ms` }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: marketIndex * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/5 to-[#0F2A44]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative">
                  {/* Enhanced Region Header */}
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

                  {/* Enhanced Description */}
                  <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm">
                    {market.description}
                  </p>

                  {/* Premium Countries Display with Flags */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-[#0F2A44] mb-4 uppercase tracking-wide flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#1E40AF] to-[#0F2A44] rounded-full mr-2"></div>
                      Key Markets ({market.countries.length}):
                    </h4>

                    {/* Countries Grid - Responsive Layout */}
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

                  {/* Subtle accent line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-[#1E40AF] to-[#0F2A44] rounded-full mt-8 group-hover:w-16 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Bottom CTA */}
          <motion.div
            className={`text-center mt-20 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
            style={{ animationDelay: '1000ms' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
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