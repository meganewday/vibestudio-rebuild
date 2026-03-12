import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Web Design & MVP Development Agency in Nigeria | Vibe Studio NG',
  description:
    'Vibe Studio NG builds production-ready MVPs and websites for Nigerian startups — landing pages from $150 in 48hrs, MVPs from $500 in 2 weeks. Based in Ibadan. Remote worldwide.',
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  openGraph: {
    title: 'Web Design & MVP Development Agency in Nigeria | Vibe Studio NG',
    description:
      'Vibe Studio NG builds production-ready MVPs and websites for Nigerian startups — landing pages from $150 in 48hrs, MVPs from $500 in 2 weeks. Based in Ibadan. Remote worldwide.',
    url: siteConfig.baseUrl,
    type: 'website',
    siteName: siteConfig.name,
  },
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-16">
      <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
        <div className="space-y-6">
          <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
            Web Design & MVP Development — Ibadan, Nigeria
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight">
            Nigeria&apos;s Fast MVP &amp; Web Development Studio
          </h1>
          <p className="max-w-xl text-sm md:text-base text-text-muted font-body">
            Vibe Studio NG ships production-ready MVPs and websites for startups and
            businesses — using AI-accelerated development to deliver in days, not
            months.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2 text-sm font-display text-black"
            >
              Get a Free Quote
            </a>
            <a
              href="/work"
              className="inline-flex items-center justify-center rounded-md border border-surface-3 px-5 py-2 text-sm font-display text-text-primary"
            >
              See Our Work
            </a>
          </div>
        </div>
        <div className="rounded-lg bg-surface-2 border border-surface-3 p-6 space-y-4">
          <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
            Studio Stats
          </p>
          <dl className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-text-muted">Live production websites</dt>
              <dd className="font-display text-2xl">3+</dd>
            </div>
            <div>
              <dt className="text-text-muted">Average turnaround</dt>
              <dd className="font-display text-2xl">48h</dd>
            </div>
            <div>
              <dt className="text-text-muted">Years experience</dt>
              <dd className="font-display text-2xl">4+</dd>
            </div>
            <div>
              <dt className="text-text-muted">Languages</dt>
              <dd className="font-display text-2xl">EN / YO</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
              Services
            </p>
            <h2 className="font-display text-2xl">Services Built for Results</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="/mvp-development"
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <p className="font-label text-[11px] uppercase tracking-[0.16em] text-accent">
                Hero Service
              </p>
              <h3 className="font-display text-lg group-hover:text-accent">
                MVP Web Apps
              </h3>
              <p className="text-sm text-text-muted font-body">
                Dashboards, booking systems, fintech tools, SaaS apps — shipped in 1–2
                weeks for Nigerian startups and global founders.
              </p>
            </div>
            <p className="mt-4 text-xs text-text-muted">From $500 · 1–2 weeks</p>
          </a>
          <a
            href="/web-design"
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="font-display text-lg group-hover:text-accent">
                Landing Pages
              </h3>
              <p className="text-sm text-text-muted font-body">
                High-converting landing pages for launches, waitlists, and campaigns.
              </p>
            </div>
            <p className="mt-4 text-xs text-text-muted">From $150 · 48h</p>
          </a>
          <a
            href="/web-design"
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="font-display text-lg group-hover:text-accent">
                Business Websites
              </h3>
              <p className="text-sm text-text-muted font-body">
                Production-ready websites for Nigerian SMEs with bilingual options and
                mobile-first layouts.
              </p>
            </div>
            <p className="mt-4 text-xs text-text-muted">From $400 · 5 days</p>
          </a>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
              Work
            </p>
            <h2 className="font-display text-2xl">Live Projects, Real Results</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/work/realmarh-atelier"
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="font-display text-lg group-hover:text-accent">
                Realmarh Atelier — Fashion Brand
              </h3>
              <p className="text-sm text-text-muted font-body">
                Complete brand showcase with portfolio gallery, booking system, and
                mobile-responsive design.
              </p>
            </div>
            <p className="mt-4 text-xs text-text-muted">Delivered in 48 hours</p>
          </a>
          <a
            href="/work/afro-consult-energy"
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="font-display text-lg group-hover:text-accent">
                Afro Consult Energy — Corporate
              </h3>
              <p className="text-sm text-text-muted font-body">
                Professional corporate website with CMS, built to earn trust with
                stakeholders and partners.
              </p>
            </div>
            <p className="mt-4 text-xs text-text-muted">Delivered in 5 days</p>
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="space-y-6 rounded-lg border border-surface-3 bg-surface-1 p-6"
      >
        <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
          Contact
        </p>
        <h2 className="font-display text-2xl">
          Start your MVP or website in days, not months.
        </h2>
        <p className="text-sm text-text-muted font-body max-w-xl">
          Share a short brief about your idea or business, and we&apos;ll reply with a
          scoped quote, timeline, and next steps.
        </p>
        <div className="space-y-3 text-sm font-body">
          <p>
            Email:{' '}
            <a href="mailto:hello@vibestudio.ng" className="underline">
              hello@vibestudio.ng
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

