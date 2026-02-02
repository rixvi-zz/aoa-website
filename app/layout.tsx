import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { seoKeywords } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PerformanceMonitor from '@/components/PerformanceMonitor';

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
    default: 'AOA FOODS PRIVATE LIMITED - Reliable Import & Export Solutions for Global Markets',
    template: '%s | AOA FOODS - Import Export Company'
  },
  description: 'AOA FOODS PRIVATE LIMITED is an IEC and GST registered import and export company in India, providing comprehensive global trade solutions including import services, export services, global sourcing, and logistics support for international B2B partnerships.',
  keywords: seoKeywords,
  authors: [{ name: 'AOA FOODS PRIVATE LIMITED' }],
  creator: 'AOA FOODS PRIVATE LIMITED',
  publisher: 'AOA FOODS PRIVATE LIMITED',
  metadataBase: new URL('https://aoa-foods.com'),
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
    url: 'https://aoa-foods.com',
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
        {/* Favicon - Using AOA Logo as Website Identity */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png" sizes="180x180" />
        <link rel="apple-touch-icon" href="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png" sizes="152x152" />
        <link rel="apple-touch-icon" href="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png" sizes="144x144" />
        <link rel="apple-touch-icon" href="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png" sizes="120x120" />
        <link rel="apple-touch-icon" href="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png" sizes="114x114" />
        <link rel="apple-touch-icon" href="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png" sizes="76x76" />
        <link rel="apple-touch-icon" href="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png" sizes="72x72" />
        <link rel="apple-touch-icon" href="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png" sizes="60x60" />
        <link rel="apple-touch-icon" href="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png" sizes="57x57" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileImage" content="/images/ChatGPT Image Jan 29, 2026, 12_41_01 AM.png" />
        <meta name="msapplication-TileColor" content="#2E7D32" />

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
