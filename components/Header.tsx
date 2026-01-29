'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 max-md:h-16 max-md:px-4">

          {/* Logo - Left Aligned */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png"
                alt="AOA Foods - Purely Global. Perfectly Local."
                width={280}
                height={84}
                className="h-12 w-auto sm:h-14 sm:w-auto lg:h-16 lg:w-auto xl:h-18 xl:w-auto max-md:h-10"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-[#1E3A5F] font-semibold text-sm transition-all duration-200 pb-1 border-b-2 border-transparent',
                  pathname === item.href
                    ? 'border-[#4A90E2] text-[#4A90E2]'
                    : 'hover:border-[#4A90E2] hover:text-[#4A90E2]'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Right Aligned */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-[#1E3A5F] text-white px-6 py-2 text-sm font-semibold transition-all duration-200 hover:bg-[#4A90E2] rounded"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#1E3A5F] hover:text-[#4A90E2] transition-colors duration-200 max-md:p-1"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block text-[#1E3A5F] font-semibold py-2 transition-colors duration-200',
                  pathname === item.href ? 'text-[#4A90E2]' : 'hover:text-[#4A90E2]'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-[#1E3A5F] text-white px-6 py-3 text-sm font-semibold transition-all duration-200 hover:bg-[#4A90E2] rounded"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}