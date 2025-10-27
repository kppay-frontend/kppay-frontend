// src/app/layout.tsx
'use client';

import { Inter, Bebas_Neue } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { Header, getLayoutConfig, images, Footer, ScrollToTop } from '@/types';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

// SEO Metadata
const siteConfig = {
  name: 'KPPAY',
  title: 'KPPAY - The Safest and Most Reliable Money Transaction Platform',
  description:
    'Send money globally, receive payments, deposit and request funds, invest and exchange across multiple currencies with low fees, speed and safety.',
  url: 'https://kppay.com',
  ogImage: images.logos.primary,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const layoutConfig = getLayoutConfig(pathname);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={siteConfig.title} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:image" content={siteConfig.ogImage} />
        <meta property="og:url" content={siteConfig.url} />
      </head>
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${inter.className}`}
      >
        <div className="min-h-screen flex flex-col">
          <Header variant={layoutConfig.header} />
          <main className="flex-1 pt-24">
            <div className="page-transition">{children}</div>
          </main>
          <Footer />
          <ScrollToTop />
          {/* {layoutConfig.footer === 'footer1' ? <Footer1 /> : <Footer2 />} */}
        </div>
      </body>
    </html>
  );
}
