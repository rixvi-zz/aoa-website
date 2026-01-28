import Link from 'next/link';
import Image from 'next/image';
import { navigationItems, contactInfo } from '@/lib/data';
import { getCurrentYear } from '@/lib/utils';

export default function Footer() {
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png"
                alt="AOA Foods - Purely Global. Perfectly Local."
                width={400}
                height={120}
                className="h-20 w-auto sm:h-24 sm:w-auto lg:h-28 lg:w-auto xl:h-32 xl:w-auto"
              />
            </div>
            <p className="text-white mb-8 max-w-md leading-relaxed text-lg">
              AOA Foods is an MSME and APEDA registered food export company based in India,
              providing reliable global trade solutions for international food business partnerships.
              We specialize in food export services, global sourcing, and
              comprehensive logistics support with full compliance.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <span className="bg-[#4A90E2] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg">
                MSME REGISTERED
              </span>
              <span className="bg-white text-[#1E3A5F] px-6 py-3 rounded-xl text-sm font-bold shadow-lg border-2 border-[#4A90E2]">
                APEDA REGISTERED EXPORTER
              </span>
              <span className="text-[#2E7D32] font-semibold">Government Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white hover:bg-[#4A90E2] hover:text-white px-2 py-1 rounded transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4 text-white">
              <div>
                <p className="font-bold text-white mb-2">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white hover:bg-[#4A90E2] hover:text-white px-2 py-1 rounded transition-colors duration-200 font-medium"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="font-bold text-white mb-2">Phone</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white hover:bg-[#4A90E2] hover:text-white px-2 py-1 rounded transition-colors duration-200 font-medium"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div>
                <p className="font-bold text-white mb-2">Location</p>
                <p className="font-medium text-white">
                  {contactInfo.address.city}, {contactInfo.address.state}
                  <br />
                  {contactInfo.address.country}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="border-t border-white/20 mt-16 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            <div className="bg-[#4A90E2] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-white mb-4 text-lg">Food Import Services</h4>
              <p className="font-medium text-white/90 text-sm leading-relaxed">Global food sourcing, APEDA compliance, customs coordination</p>
            </div>
            <div className="bg-[#4A90E2] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-white mb-4 text-lg">Food Export Services</h4>
              <p className="font-medium text-white/90 text-sm leading-relaxed">International market access, APEDA documentation</p>
            </div>
            <div className="bg-[#4A90E2] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-white mb-4 text-lg">Global Food Sourcing</h4>
              <p className="font-medium text-white/90 text-sm leading-relaxed">Supplier identification, quality assurance, compliance</p>
            </div>
            <div className="bg-[#4A90E2] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h4 className="font-bold text-white mb-4 text-lg">Logistics Support</h4>
              <p className="font-medium text-white/90 text-sm leading-relaxed">Supply chain management, freight forwarding</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-6 md:mb-0">
            <p className="font-medium">
              © {currentYear} AOA Foods Export. All rights reserved. |
              <span className="ml-1">MSME & APEDA Registered</span>
            </p>
          </div>
          <div className="flex space-x-8 text-white">
            <Link href="/privacy-policy" className="text-white hover:bg-[#4A90E2] hover:text-white px-2 py-1 rounded transition-colors duration-200 font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white hover:bg-[#4A90E2] hover:text-white px-2 py-1 rounded transition-colors duration-200 font-medium">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="text-white hover:bg-[#4A90E2] hover:text-white px-2 py-1 rounded transition-colors duration-200 font-medium">
              Disclaimer
            </Link>
            <Link href="/sitemap" className="text-white hover:bg-[#4A90E2] hover:text-white px-2 py-1 rounded transition-colors duration-200 font-medium">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}