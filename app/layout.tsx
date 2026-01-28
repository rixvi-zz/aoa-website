import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { seoKeywords } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Font optimization with next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
    default: 'AOA - Reliable Import & Export Solutions for Global Markets',
    template: '%s | AOA - Import Export Company'
  },
  description: 'AOA is an MSME-registered import and export company in India, providing comprehensive global trade solutions including import services, export services, global sourcing, and logistics support for international B2B partnerships.',
  keywords: seoKeywords,
  authors: [{ name: 'AOA Import Export' }],
  creator: 'AOA Import Export',
  publisher: 'AOA Import Export',
  metadataBase: new URL('https://aoa-trade.com'),
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
    url: 'https://aoa-trade.com',
    siteName: 'AOA Import Export',
    title: 'AOA - Reliable Import & Export Solutions for Global Markets',
    description: 'MSME-registered import and export company in India providing comprehensive global trade solutions for international B2B partnerships.',
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
    canonical: 'https://aoa-trade.com',
    languages: {
      'en-IN': 'https://aoa-trade.com',
      'en-US': 'https://aoa-trade.com',
      'en': 'https://aoa-trade.com',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/images/hero-bg.svg" as="image" type="image/svg+xml" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Google Analytics */}
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
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
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
              "url": "https://aoa-trade.com",
              "logo": "https://aoa-trade.com/images/logo.svg",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressRegion": "Maharashtra",
                "addressLocality": "Mumbai"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "business",
                "email": "info@aoa-trade.com",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://linkedin.com/company/aoa-import-export",
                "https://twitter.com/aoa_trade"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
