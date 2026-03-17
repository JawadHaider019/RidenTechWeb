// app/layout.js
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from '@/components/Footer';
import CTA from "@/components/CTA";

// --- Metadata for SEO, Open Graph, Twitter, etc. ---
export const metadata = {
  title: {
    default: 'RidenTech - Innovative Software Solutions',
    template: '%s | RidenTech',
  },
  description: 'RidenTech delivers cutting-edge software solutions including custom development, web & PWA engineering, mobile apps, cloud architecture, and AI/ML integration. Transform your business with our expert team.',
  keywords: [
    'software development',
    'web development',
    'mobile app development',
    'cloud architecture',
    'AI machine learning',
    'UI UX design',
    'API integration',
    'DevOps automation',
    'digital solutions',
    'technology consulting'
  ],
  authors: [{ name: 'RidenTech', url: 'https://ridentech.ca' }],
  creator: 'RidenTech',
  publisher: 'RidenTech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ridentech.ca'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-us',
    },
  },
  openGraph: {
    title: 'RidenTech - Innovative Software Solutions',
    description: 'Transform your business with cutting-edge software solutions from RidenTech. Expert team delivering custom development, cloud architecture, AI/ML, and more.',
    url: 'https://ridentech.ca',
    siteName: 'RidenTech',
    images: [
      {
        width: 1200,
        height: 630,
        alt: 'RidenTech - Innovative Software Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  category: 'technology',
};

// --- Move viewport OUT of metadata (Next.js 13+ requirement) ---
export const viewport = 'width=device-width, initial-scale=1, maximum-scale=5';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Manrope:wght@200..800&family=Marcellus&display=swap"
          rel="stylesheet"
        />

        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RidenTech" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-instrument antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <CTA />
        <Footer />
      </body>
    </html>
  );
}