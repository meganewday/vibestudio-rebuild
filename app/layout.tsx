import type { Metadata } from 'next';
import { Space_Grotesk, Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';
import { siteConfig, absoluteUrl } from '@/lib/siteConfig';

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
          <header className="border-b border-surface-2 bg-background/80 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
              <a href="/" className="font-display text-lg tracking-tight">
                Vibe<span className="text-accent">.</span>Studio NG
              </a>
              <nav className="hidden md:flex gap-6 text-sm font-label uppercase tracking-[0.16em] text-text-muted">
                <a href="/mvp-development">MVP Dev</a>
                <a href="/web-design">Web Design</a>
                <a href="/work">Work</a>
                <a href="/blog">Blog</a>
                <a href="/pricing">Pricing</a>
                <a
                  href="#contact"
                  className="rounded-md border border-accent bg-accent/10 px-3 py-1 text-xs text-accent"
                >
                  Start a Project
                </a>
              </nav>
            </div>
          </header>
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
        </div>
      </body>
    </html>
  );
}

