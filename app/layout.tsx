import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { HoldingJsonLd } from '@/components/seo/JsonLd';
import './globals.css';

// next/font autoaloja y precarga las tipografías: evita el layout shift (CLS) por FOUT/FOIT
// y elimina la petición externa a Google Fonts en tiempo de ejecución.
const headingFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nevacorporation.com'),
  title: {
    default: 'Neva Corporation — Del cable a la nube',
    template: '%s | Neva Corporation',
  },
  description:
    'Neva Corporation es un holding multinacional que integra construcción de infraestructura de redes, telecomunicaciones (ISP) y desarrollo de software en Estados Unidos, Colombia y Venezuela.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Neva Corporation',
    description: 'Conectamos infraestructura física y digital a nivel internacional.',
    url: 'https://www.nevacorporation.com',
    siteName: 'Neva Corporation',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // lang="es" es obligatorio para que lectores de pantalla usen la pronunciación correcta.
    <html lang="es" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <HoldingJsonLd />
      </head>
      <body className="bg-neva-navy font-body text-white antialiased">{children}</body>
    </html>
  );
}
