import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/data';
import CTAButton from './CTAButton';

export default function ServicesGrid() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#4A90E2]/10 to-transparent rounded-full -translate-y-48 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#2E7D32]/10 to-transparent rounded-full translate-y-40 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Modern Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-[#4A90E2]/10 to-[#1E3A5F]/10 backdrop-blur-sm px-8 py-4 rounded-full mb-8 border border-[#4A90E2]/20">
            <div className="w-2 h-2 bg-[#2E7D32] rounded-full animate-pulse mr-3"></div>
            <span className="text-[#1E3A5F] font-bold text-sm uppercase tracking-wide">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-[#1E3A5F]">Food Export Services & </span>
            <span className="bg-gradient-to-r from-[#4A90E2] to-[#2E7D32] bg-clip-text text-transparent">Global Trade Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From APEDA-compliant food export services to global sourcing, our MSME-registered international trade company provides end-to-end solutions for your food business expansion needs.
          </p>
        </div>

        {/* Modern Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-[#4A90E2]/30 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A90E2]/5 via-transparent to-[#2E7D32]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#4A90E2] via-[#1E3A5F] to-[#2E7D32] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{padding: '2px'}}>
                <div className="w-full h-full bg-white rounded-3xl"></div>
              </div>
              
              <div className="relative z-10">
                {/* Modern Service Icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#4A90E2] to-[#1E3A5F] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={40}
                      height={40}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Floating number indicator */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-4 group-hover:text-[#4A90E2] transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Modern Key Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      <div className="w-5 h-5 bg-gradient-to-br from-[#4A90E2] to-[#2E7D32] rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Modern Learn More Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center text-[#1E3A5F] font-bold hover:text-[#4A90E2] transition-all duration-300 text-sm group-hover:bg-gradient-to-r group-hover:from-[#4A90E2]/10 group-hover:to-[#2E7D32]/10 px-4 py-3 rounded-xl -mx-4 group"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Bottom CTA */}
        <div className="text-center relative">
          <div className="relative bg-gradient-to-br from-white via-gray-50 to-blue-50/30 rounded-3xl p-12 shadow-2xl border border-gray-100 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2]/5 via-transparent to-[#2E7D32]/5"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center bg-gradient-to-r from-[#1E3A5F] to-[#4A90E2] px-8 py-4 rounded-full shadow-xl mb-8">
                <svg className="w-6 h-6 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-white font-bold">Start Your Food Export Journey</span>
              </div>
              
              <h3 className="text-3xl font-bold text-[#1E3A5F] mb-6">
                Ready to expand your food business globally?
              </h3>
              
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your export requirements and APEDA compliance needs with our expert team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <CTAButton 
                  href="/contact" 
                  variant="primary" 
                  size="lg"
                  trackingName="Services CTA Primary"
                  trackingLocation="Services Section"
                  className="bg-gradient-to-r from-[#1E3A5F] to-[#4A90E2] text-white hover:from-[#4A90E2] hover:to-[#1E3A5F] shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-4 rounded-xl font-bold"
                >
                  Get Started Today
                </CTAButton>
                <CTAButton 
                  href="/services" 
                  variant="secondary" 
                  size="lg"
                  trackingName="Services CTA Secondary"
                  trackingLocation="Services Section"
                  className="border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1"
                >
                  View All Services
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}