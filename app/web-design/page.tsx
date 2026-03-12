import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Web Design Agency in Nigeria | Vibe Studio NG',
  description:
    'Professional websites for Nigerian businesses from $150. Landing pages delivered in 48hrs, business websites in 5 days. Mobile-first, production-ready. Based in Ibadan.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/web-design`,
  },
};

export default function WebDesignPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      <header className="space-y-4">
        <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
          Web Design
        </p>
        <h1 className="font-display text-3xl md:text-4xl">
          Web Design for Nigerian Businesses
        </h1>
        <p className="max-w-2xl text-sm text-text-muted font-body">
          Professional websites for Nigerian businesses from $150. Landing pages
          delivered in 48hrs, business websites in 5 days. Mobile-first,
          production-ready. Based in Ibadan.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2 text-sm font-display text-black"
        >
          Get a free quote
        </a>
      </header>

      <section className="space-y-4">
        <h2 className="font-display text-2xl">Services</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-surface-3 bg-surface-1 p-4 space-y-2">
            <h3 className="font-display text-lg">Landing pages</h3>
            <p className="text-sm text-text-muted font-body">
              High-converting single-page sites for launches, offers, and waitlists.
            </p>
          </div>
          <div className="rounded-lg border border-surface-3 bg-surface-1 p-4 space-y-2">
            <h3 className="font-display text-lg">Business websites</h3>
            <p className="text-sm text-text-muted font-body">
              Multi-page sites for Nigerian SMEs, NGOs, and organisations.
            </p>
          </div>
          <div className="rounded-lg border border-surface-3 bg-surface-1 p-4 space-y-2">
            <h3 className="font-display text-lg">Bilingual builds</h3>
            <p className="text-sm text-text-muted font-body">
              English/Yoruba bilingual websites that feel natural in both languages.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">Pricing & timelines</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-surface-3 bg-surface-1 p-4 space-y-2">
            <h3 className="font-display text-lg">Starter — Landing page</h3>
            <p className="text-sm text-text-muted font-body">
              From <span className="text-accent font-display">$150</span> with 48–72
              hour turnaround.
            </p>
          </div>
          <div className="rounded-lg border border-surface-3 bg-surface-1 p-4 space-y-2">
            <h3 className="font-display text-lg">Business website</h3>
            <p className="text-sm text-text-muted font-body">
              From <span className="text-accent font-display">$400</span> with 3–5 day
              turnaround.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl">Web design FAQs</h2>
        <div className="space-y-4 text-sm font-body text-text-muted">
          <div>
            <p className="font-display text-base text-text-primary">
              How much does a website cost in Nigeria?
            </p>
            <p>
              At Vibe Studio NG, landing pages start from $150 and business websites from
              $250.
            </p>
          </div>
          <div>
            <p className="font-display text-base text-text-primary">
              How long does a website take to build?
            </p>
            <p>Landing pages: 48–72 hours. Business websites: 3–5 days.</p>
          </div>
          <div>
            <p className="font-display text-base text-text-primary">
              Do you build bilingual Yoruba/English websites?
            </p>
            <p>
              Yes — we are one of the only studios in Nigeria offering bilingual
              English/Yoruba builds.
            </p>
          </div>
          <div>
            <p className="font-display text-base text-text-primary">
              What is included in the website price?
            </p>
            <p>
              Design, development, mobile responsiveness, contact forms, and 14-day
              post-launch support.
            </p>
          </div>
          <div>
            <p className="font-display text-base text-text-primary">
              Can you redesign my existing website?
            </p>
            <p>
              Yes. We offer full redesigns and rebuilds. Contact us for a custom quote.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

