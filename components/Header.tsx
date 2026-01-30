'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationItems } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-24 max-md:h-20 max-md:px-4">

          {/* Logo - Left Aligned */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png"
                alt="AOA Foods - Purely Global. Perfectly Local."
                width={400}
                height={120}
                className="h-16 w-auto sm:h-18 sm:w-auto lg:h-20 lg:w-auto xl:h-24 xl:w-auto max-md:h-14"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <div 
                key={item.href} 
                className="relative group"
              >
                <Link
                  href={item.href}
                  className={cn(
                    'text-[#1E3A5F] font-semibold text-sm transition-all duration-200 pb-1 border-b-2 border-transparent flex items-center',
                    pathname === item.href || (item.children && item.children.some(child => pathname === child.href))
                      ? 'border-[#4A90E2] text-[#4A90E2]'
                      : 'hover:border-[#4A90E2] hover:text-[#4A90E2]'
                  )}
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          'block px-4 py-3 text-sm text-[#1E3A5F] hover:bg-gray-50 hover:text-[#4A90E2] transition-colors duration-200',
                          pathname === child.href ? 'bg-gray-50 text-[#4A90E2] font-semibold' : ''
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
              <div key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => !item.children && setIsMobileMenuOpen(false)}
                    className={cn(
                      'block text-[#1E3A5F] font-semibold py-2 transition-colors duration-200 flex-1',
                      pathname === item.href || (item.children && item.children.some(child => pathname === child.href))
                        ? 'text-[#4A90E2]' 
                        : 'hover:text-[#4A90E2]'
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="p-2 text-[#1E3A5F] hover:text-[#4A90E2]"
                    >
                      <svg 
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === item.label ? "rotate-180" : ""
                        )} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          'block text-sm text-[#1E3A5F] py-2 pl-4 border-l-2 border-gray-200 hover:text-[#4A90E2] hover:border-[#4A90E2] transition-colors duration-200',
                          pathname === child.href ? 'text-[#4A90E2] border-[#4A90E2] font-semibold' : ''
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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