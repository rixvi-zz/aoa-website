import Image from 'next/image';
import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20 min-h-screen">

      {/* Background elements (unchanged) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-br from-[#1E3A5F]/15 to-[#D4AF37]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-[#2E7D32]/10 to-[#1E3A5F]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* ================= LEFT ================= */}
            <div className="space-y-5 lg:space-y-6 order-2 lg:order-1">

              {/* APEDA Badge */}
              <div className="inline-flex items-center bg-[#2E7D32] text-white rounded-full px-4 py-2 shadow-md">
                <span className="font-semibold text-sm">✔ APEDA Registered Exporter</span>
              </div>

              {/* Headline (reduced) */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Premium </span>
                <span className="text-[#2E7D32]">Halaal Meat</span>
                <span className="text-gray-900"> & </span>
                
                <span className="text-[#2E7D32]">Commodity</span>
                <span className="text-gray-900"> Export</span>
              </h1>

              {/* Subheading (reduced) */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1E3A5F]">
                Backed by APEDA Certification
              </h2>

              {/* Paragraph (reduced) */}
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                Internationally compliant, ethically processed and Shariah-certified
                Halaal meat exports along with premium agri-commodities for Middle East,
                Africa, Europe and global markets with complete regulatory compliance.
              </p>

              {/* CTAs (slightly tighter) */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <CTAButton
                  href="/business-segments/halaal-meat"
                  className="bg-[#2E7D32] text-white hover:bg-[#1B5E20] font-semibold px-6 py-3 text-base rounded-lg shadow-md"
                >
                  Premium Halaal Meat & Commodity Export
                </CTAButton>

                <CTAButton
                  href="/contact"
                  className="border-2 border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white font-semibold px-6 py-3 text-base rounded-lg"
                >
                  Request Quote
                </CTAButton>
              </div>

              {/* Trust badges (cleaner spacing) */}
              <div className="flex flex-wrap gap-4 pt-4 text-sm">
                <span className="px-4 py-2 bg-white rounded-lg shadow border">APEDA Registered</span>
                <span className="px-4 py-2 bg-white rounded-lg shadow border">Halaal Certified</span>
                <span className="px-4 py-2 bg-white rounded-lg shadow border">4+ Continents</span>
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border bg-white">

                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/hero.png"
                    alt="Halaal meat and commodity export facility"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Overlays unchanged */}
                <div className="absolute top-4 left-4 bg-[#2E7D32] text-white px-3 py-1.5 rounded-md text-xs font-semibold">
                  HALAAL CERTIFIED
                </div>

                <div className="absolute bottom-4 right-4 bg-[#1E3A5F] text-white px-3 py-2 rounded-md text-xs text-center">
                  <div className="font-semibold">Export Ready</div>
                  <div className="opacity-90">Cold Chain Maintained</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
