'use client';

import { useEffect } from 'react';

export default function BraveCompatibility() {
    useEffect(() => {
        // Detect Brave browser
        const isBrave = () => {
            return (navigator as any).brave && (navigator as any).brave.isBrave;
        };

        // Add Brave-specific optimizations
        if (isBrave()) {
            // Add Brave-specific CSS class for styling adjustments
            document.documentElement.classList.add('brave-browser');

            // Ensure fonts load properly
            if (!document.fonts) {
                console.log('Brave: Font loading API not available, using system fonts');
            }

            // Check if analytics loaded
            setTimeout(() => {
                if (typeof window !== 'undefined' && !(window as any).gtag) {
                    console.log('Brave: Analytics blocked - site functionality preserved');
                }
            }, 2000);
        }

        // Progressive enhancement for blocked resources
        const checkResourceLoading = () => {
            // Check if Google Fonts loaded using a safer method
            const checkGoogleFonts = () => {
                const testElement = document.createElement('div');
                testElement.style.fontFamily = 'Inter, system-ui';
                testElement.style.position = 'absolute';
                testElement.style.visibility = 'hidden';
                testElement.textContent = 'Test';
                document.body.appendChild(testElement);

                const computedFont = window.getComputedStyle(testElement).fontFamily;
                document.body.removeChild(testElement);

                // If Inter is not in the computed font family, Google Fonts might be blocked
                if (!computedFont.includes('Inter')) {
                    console.log('Google Fonts may be blocked - using system fonts');
                    document.documentElement.style.setProperty(
                        '--font-inter',
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    );
                }
            };

            checkGoogleFonts();
        };

        // Run checks after page load
        if (document.readyState === 'complete') {
            checkResourceLoading();
        } else {
            window.addEventListener('load', checkResourceLoading);
        }

        return () => {
            window.removeEventListener('load', checkResourceLoading);
        };
    }, []);

    return null;
}