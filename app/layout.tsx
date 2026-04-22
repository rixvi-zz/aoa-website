import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { seoKeywords } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import BraveCompatibility from '@/components/BraveCompatibility';

// Font optimization with next/font and system fallbacks
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

// Global metadata configuration
export const metadata: Metadata = {
  title: {
    default: 'AOA Foods - Halaal Certified | Premium Halaal Meat & Food Export Company India',
    template: '%s | AOA Foods - Halaal Certified Export Solutions'
  },
  description: 'AOA Foods (Halaal Certified) - APEDA certified premium food export company in Delhi. Specializing in Halaal meat export, Basmati rice, organic spices & agricultural commodities. IEC & GST registered for global trade excellence.',
  keywords: seoKeywords,
  authors: [{ name: 'AOA FOODS PRIVATE LIMITED' }],
  creator: 'AOA FOODS PRIVATE LIMITED',
  publisher: 'AOA FOODS PRIVATE LIMITED',
  metadataBase: new URL('https://www.aoafoods.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.aoafoods.com',
    siteName: 'AOA FOODS PRIVATE LIMITED',
    title: 'AOA FOODS PRIVATE LIMITED - Reliable Import & Export Solutions for Global Markets',
    description: 'IEC and GST registered import and export company in India providing comprehensive global trade solutions for international B2B partnerships.',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'AOA Import Export - Global Trade Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AOA - Reliable Import & Export Solutions for Global Markets',
    description: 'MSME-registered import and export company in India providing comprehensive global trade solutions for international B2B partnerships.',
    images: ['/images/twitter-image.svg'],
  },
  alternates: {
    canonical: 'https://www.aoafoods.com',
    languages: {
      'en-IN': 'https://www.aoafoods.com',
      'en-US': 'https://www.aoafoods.com',
      'en': 'https://www.aoafoods.com',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* DNS prefetch for external resources - with fallbacks */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Font loading with system fallback */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />

        {/* Google Analytics with Brave-friendly fallback */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  
                  // Brave-friendly analytics with error handling
                  try {
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                      page_title: document.title,
                      page_location: window.location.href,
                      anonymize_ip: true,
                      allow_google_signals: false,
                      allow_ad_personalization_signals: false
                    });
                  } catch (e) {
                    console.log('Analytics initialization blocked - site continues normally');
                  }
                `,
              }}
            />
          </>
        )}

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-google-search-console-verification-code" />

        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AOA Import Export",
              "description": "MSME-registered import and export company in India providing comprehensive global trade solutions",
              "url": "https://www.aoafoods.com",
              "logo": "https://www.aoafoods.com/images/mainlogo.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Delhi",
                "addressLocality": "New Delhi"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "business",
                "email": "info@aoafoods.com",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://linkedin.com/company/aoafoods",
                "https://twitter.com/aoafoods"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {/* Brave browser compatibility */}
        <BraveCompatibility />
        
        {/* Performance monitoring */}
        <PerformanceMonitor />

        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
