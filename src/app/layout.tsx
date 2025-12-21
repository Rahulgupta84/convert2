import type { Metadata } from 'next';
import { PT_Sans_Caption, Lora, IBM_Plex_Mono } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: 'UnitConvert - Free Online Unit Converter | Convert Any Unit Instantly',
    template: '%s | UnitConvert',
  },
  description:
    'Free online unit converter with 79+ categories and 1000+ units. Convert length, weight, temperature, volume, area, speed, and more. Accurate, fast, and easy to use.',
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
  authors: [{ name: 'UnitConvert' }],
  creator: 'UnitConvert',
  publisher: 'UnitConvert',
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
    siteName: 'UnitConvert',
    title: 'UnitConvert - Free Online Unit Converter',
    description:
      'Convert any unit instantly with our free online converter. 79+ categories, 1000+ units.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UnitConvert - Free Online Unit Converter',
    description:
      'Convert any unit instantly with our free online converter. 79+ categories, 1000+ units.',
  },
  alternates: {
    canonical: '/',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${ptSansCaption.variable} ${lora.variable} ${ibmPlexMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
