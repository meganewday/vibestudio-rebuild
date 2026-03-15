import type { Metadata } from 'next';
import { Space_Grotesk, Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/siteConfig';
import { SiteHeader } from '@/components/site-header';
import { PwaInstallBanner } from '@/components/pwa-install-banner';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Vibe Studio NG',
    template: '%s | Vibe Studio NG',
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.baseUrl),
  manifest: '/manifest.json',
  icons: '/icon.png',
  openGraph: {
    type: 'website',
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    title: 'Vibe Studio NG',
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body className="bg-background text-text-primary">
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1 bg-background">{children}</main>
          <footer className="border-t border-surface-2 bg-background/80">
            <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-text-muted flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <p>© {new Date().getFullYear()} Vibe Studio NG. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="/work">Work</a>
                <a href="/pricing">Pricing</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </footer>
          <PwaInstallBanner />
        </div>
      </body>
    </html>
  );
}

