'use client';

import { ReactNode } from 'react';

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  hover3D?: boolean;
  style?: React.CSSProperties;
}

export default function GlassmorphismCard({ children, className = '', hover3D = true, style }: GlassmorphismCardProps) {
  return (
    <div 
      className={`
        relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 
        shadow-2xl hover:shadow-3xl transition-all duration-500
        ${hover3D ? 'hover:scale-105 hover:-translate-y-2 transform-gpu' : ''}
        ${className}
      `}
      style={style}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-3xl" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm" />
    </div>
  );
}