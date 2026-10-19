import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google';
import { HoldingJsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/config/site';
import './globals.css';

// next/font autoaloja y precarga las tipografías: evita el layout shift (CLS) por FOUT/FOIT
// y elimina la petición externa a Google Fonts en tiempo de ejecución.
const sansFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

// Solo para el wordmark "NEVA": replica el serif del logo oficial.
const brandFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-brand',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#07090F',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: siteConfig.brand.emblem,
    apple: siteConfig.brand.emblem,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.name,
    description: 'Conectamos infraestructura física y digital a nivel internacional.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
    images: [{ url: siteConfig.brand.ogImage, width: 1080, height: 1080, alt: siteConfig.name }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // lang="es" es obligatorio para que lectores de pantalla usen la pronunciación correcta.
    <html lang="es" className={`${sansFont.variable} ${monoFont.variable} ${brandFont.variable}`}>
      <head>
        <HoldingJsonLd />
      </head>
      <body className="bg-neva-ink font-sans text-white antialiased">{children}</body>
    </html>
  );
}
