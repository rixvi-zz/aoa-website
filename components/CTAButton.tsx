'use client';

import Link from 'next/link';
import { CTAButtonProps } from '@/types';
import { cn } from '@/lib/utils';
import { trackCTAClick } from '@/lib/analytics';

export default function CTAButton({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  trackingName,
  trackingLocation,
  ...props
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#1E40AF] text-white hover:bg-[#1E3A8A] focus:ring-[#1E40AF] shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-[#1E40AF] border-2 border-[#1E40AF] hover:bg-[#1E40AF] hover:text-white focus:ring-[#1E40AF] shadow-lg hover:shadow-xl font-bold',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#0F2A44] focus:ring-white bg-transparent'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const handleClick = (e: React.MouseEvent) => {
    // Track CTA click if tracking info is provided
    if (trackingName && trackingLocation) {
      trackCTAClick(trackingName, trackingLocation);
    }
    
    // Call custom onClick if provided
    if (onClick) {
      onClick(e);
    }
  };
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses} onClick={handleClick} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={handleClick} className={buttonClasses} {...props}>
      {children}
    </button>
  );
}