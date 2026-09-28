import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { PT_Sans_Caption, Lora, IBM_Plex_Mono } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { allCategories, totalUnitCount } from '@/lib/converters';
import './globals.css';

const categoryCount = allCategories.length;
const unitCount = totalUnitCount.toLocaleString('en-US');
const shareDescription = `Convert any unit instantly with our free online converter. ${categoryCount} categories, ${unitCount} units.`;

const ptSansCaption = PT_Sans_Caption({
  variable: '--font-pt-sans-caption',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.convert2.work'),
  title: {
    default: 'Unit Converter | Convert Any Unit Instantly',
    template: '%s | Unit Converter',
  },
  description: `Free online unit converter with ${categoryCount} categories and ${unitCount} units. Convert length, weight, temperature, volume, area, speed, and more. Accurate, fast, and easy to use.`,
  keywords: [
    'unit converter',
    'convert units',
    'online converter',
    'metric converter',
    'imperial converter',
    'length converter',
    'weight converter',
    'temperature converter',
    'volume converter',
    'free converter',
  ],
  authors: [{ name: 'Rahul Gupta' }],
  creator: 'Rahul Gupta',
  publisher: 'Unit Converter',
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
    locale: 'en_US',
    siteName: 'Unit Converter',
    title: 'Unit Converter - Free Online Conversion Tool',
    description: shareDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unit Converter - Free Online Conversion Tool',
    description: shareDescription,
  },
  alternates: {
    canonical: '/',
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
};

export const viewport: Viewport = {
  themeColor: '#5b3fd1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${ptSansCaption.variable} ${lora.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
