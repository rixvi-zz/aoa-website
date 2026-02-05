import Image from 'next/image';
import { differentiators } from '@/lib/data';
import EnhancedMarkets from './EnhancedMarkets';

export default function WhyChooseAOA() {
  return (
    <>
      {/* Why Choose AOA Section with Premium Visual Elements */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Enhanced background pattern with depth */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#4A90E2]/15 to-transparent rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#1E3A5F]/15 to-transparent rounded-full -translate-x-40 translate-y-40 blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#4A90E2]/10 to-[#1E3A5F]/10 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
        </div>

        {/* Subtle grid overlay for corporate feel */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(30,58,95,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,95,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Premium Section Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl mb-8 border border-white/50">
              <div className="w-8 h-8 bg-gradient-to-r from-[#4A90E2] to-[#1E3A5F] rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#1E3A5F]">IEC & GST Certified Excellence</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1E3A5F] mb-8 leading-tight">
              Why Choose AOA Foods?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              As your trusted IEC and GST registered food import & export partner, we bring government-certified credibility,
              international trade expertise, and global sourcing capabilities to every business opportunity.
            </p>
          </div>

          {/* Enhanced Differentiators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center group bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-[#4A90E2]/30 transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden">
                {/* Subtle background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/5 to-[#1E3A5F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative">
                  {/* Premium Icon Design */}
                  <div className="w-24 h-24 bg-gradient-to-br from-[#1E3A5F] via-[#4A90E2] to-[#1E3A5F] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl group-hover:shadow-3xl">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={`${item.title} icon`}
                        width={44}
                        height={44}
                        className="w-11 h-11 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-6 leading-tight group-hover:text-[#4A90E2] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Subtle accent line */}
                  <div className="w-12 h-1 bg-gradient-to-r from-[#4A90E2] to-[#1E3A5F] rounded-full mx-auto mt-6 group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Stats Section with Advanced Visual Design */}
          <div className="relative">
            {/* Background container with multiple layers */}
            <div className="bg-gradient-to-br from-[#1E3A5F] via-[#4A90E2] to-[#1E3A5F] rounded-3xl p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-30 translate-y-30 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white rounded-full -translate-y-16 animate-pulse delay-500"></div>
              </div>

              {/* Subtle grid overlay */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              <div className="relative">
                {/* Premium Stats Header */}
                <div className="text-center mb-16">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-8 border border-white/20">
                    <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-sm font-bold text-white">Performance Metrics</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    Trusted by Food Businesses Worldwide
                  </h3>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                    Our track record in food export speaks for itself - delivering reliable international trade solutions with complete APEDA compliance and transparency.
                  </p>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-md:grid-cols-1 max-md:gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 group shadow-xl max-md:p-6 max-md:rounded-2xl">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300 max-md:text-3xl">4+</div>
                    <div className="text-white font-semibold text-lg mb-2 max-md:text-base">Continents Served</div>
                    <div className="text-white/70 text-sm">Active Export Markets</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 group shadow-xl max-md:p-6 max-md:rounded-2xl">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300 max-md:text-3xl">100%</div>
                    <div className="text-white font-semibold text-lg mb-2 max-md:text-base">APEDA Compliance</div>
                    <div className="text-white/70 text-sm">Food Export Authority</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 group shadow-xl max-md:p-6 max-md:rounded-2xl">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300 max-md:text-3xl">24/7</div>
                    <div className="text-white font-semibold text-lg mb-2 max-md:text-base">Export Support</div>
                    <div className="text-white/70 text-sm">Dedicated Assistance</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 group shadow-xl max-md:p-6 max-md:rounded-2xl">
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300 max-md:text-3xl">MSME</div>
                    <div className="text-white font-semibold text-lg mb-2 max-md:text-base">Registered & Certified</div>
                    <div className="text-white/70 text-sm">Government Verified</div>
                  </div>
                </div>

                {/* Additional trust indicators */}
                <div className="flex justify-center items-center mt-12 space-x-8">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
                    <span className="text-white text-sm font-semibold">Export Operations Active</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse mr-3"></div>
                    <span className="text-white text-sm font-semibold">Global Network Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Markets Component */}
      <EnhancedMarkets />
    </>
  );
}