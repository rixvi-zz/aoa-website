'use client';

import { useEffect } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in development for debugging
    if (process.env.NODE_ENV !== 'development' || typeof window === 'undefined') {
      return;
    }

    const metrics: PerformanceMetrics = {};

    // Largest Contentful Paint (LCP)
    const observeLCP = () => {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.lcp = lastEntry.startTime;
          console.log('LCP:', metrics.lcp);
        });
        
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (error) {
        console.warn('LCP observation failed:', error);
      }
    };

    // First Input Delay (FID)
    const observeFID = () => {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEventTiming; // Type assertion for FID entry
            if (fidEntry.processingStart && fidEntry.startTime) {
              metrics.fid = fidEntry.processingStart - fidEntry.startTime;
              console.log('FID:', metrics.fid);
            }
          });
        });
        
        observer.observe({ type: 'first-input', buffered: true });
      } catch (error) {
        console.warn('FID observation failed:', error);
      }
    };

    // Cumulative Layout Shift (CLS)
    const observeCLS = () => {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const layoutShiftEntry = entry as LayoutShift;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          });
          
          metrics.cls = clsValue;
          console.log('CLS:', metrics.cls);
        });
        
        observer.observe({ type: 'layout-shift', buffered: true });
      } catch (error) {
        console.warn('CLS observation failed:', error);
      }
    };

    // Initialize observers
    observeLCP();
    observeFID();
    observeCLS();

    // Report metrics summary
    const reportMetrics = () => {
      setTimeout(() => {
        console.log('Performance Metrics Summary:', metrics);
      }, 3000);
    };

    if (document.readyState === 'complete') {
      reportMetrics();
    } else {
      window.addEventListener('load', reportMetrics);
    }

    return () => {
      window.removeEventListener('load', reportMetrics);
    };
  }, []);

  return null;
}