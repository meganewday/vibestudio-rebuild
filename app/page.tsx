import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Web Design & MVP Development Agency in Nigeria | Vibe Studio NG',
  description:
    'Vibe Studio NG builds production-ready MVPs and websites for Nigerian startups — landing pages from $150 in 48hrs, MVPs from $800 in 2 weeks. Based in Ibadan. Remote worldwide.',
  alternates: {
    canonical: siteConfig.baseUrl,
  },
  openGraph: {
    title: 'Web Design & MVP Development Agency in Nigeria | Vibe Studio NG',
    description:
      'Vibe Studio NG builds production-ready MVPs and websites for Nigerian startups — landing pages from $150 in 48hrs, MVPs from $800 in 2 weeks. Based in Ibadan. Remote worldwide.',
    url: siteConfig.baseUrl,
    type: 'website',
    siteName: siteConfig.name,
  },
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-24">

      {/* ── HERO ── */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start bg-[#00FF00] shadow-[0_0_20px_#00FF00] rounded-lg p-8">
        <div className="space-y-6 text-black">
          <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
            Web Design & MVP Development — Ibadan, Nigeria
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight">
            Nigeria&apos;s Fast MVP &amp; Web Development Studio
          </h1>
          <p className="max-w-xl text-sm md:text-base text-text-muted font-body">
            Vibe Studio NG ships production-ready MVPs and websites for startups and
            businesses — using AI-accelerated development to deliver in days, not months.
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

      {/* ── SERVICES ── */}
      <section className="space-y-8">
        <div>
          <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted mb-2">
            Services
          </p>
          <h2 className="font-display text-2xl">Services Built for Results</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">

          {/* Hero service */}
          <a
            href="/mvp-development"
            className="group rounded-lg border border-accent bg-surface-1 p-5 flex flex-col justify-between md:col-span-3"
          >
            <div className="space-y-3">
              <p className="font-label text-[11px] uppercase tracking-[0.16em] text-accent">
                Hero Service
              </p>
              <h3 className="font-display text-xl group-hover:text-accent">
                MVP Web Apps
              </h3>
              <p className="text-sm text-text-muted font-body max-w-2xl">
                Dashboards, booking systems, fintech tools, SaaS apps — shipped in 1–2
                weeks for Nigerian startups and global founders. Turn your idea into a
                working product fast.
              </p>
            </div>
            <p className="mt-4 text-xs text-accent">From $800 · 1–2 weeks →</p>
          </a>

          {/* Landing Pages */}
          <a
            href="/web-design"
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="font-display text-lg group-hover:text-accent">
                Landing Pages
              </h3>
              <p className="text-sm text-text-muted font-body">
                High-converting, beautifully designed landing pages that turn visitors
                into customers. Mobile-first and fast.
              </p>
            </div>
            <p className="mt-4 text-xs text-text-muted">From $150 · 48h</p>
          </a>

          {/* Business Websites */}
          <a
            href="/web-design"
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="font-display text-lg group-hover:text-accent">
                Business Websites
              </h3>
              <p className="text-sm text-text-muted font-body">
                Professional corporate websites and brand showcases that establish
                credibility and drive leads.
              </p>
            </div>
            <p className="mt-4 text-xs text-text-muted">From $250 · 3–5 days</p>
          </a>

          {/* Data Dashboards */}
          <a
            href="/mvp-development"
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="font-display text-lg group-hover:text-accent">
                Data Dashboards
              </h3>
              <p className="text-sm text-text-muted font-body">
                Interactive analytics dashboards that make your business data clear,
                actionable, and beautiful.
              </p>
            </div>
            <p className="mt-4 text-xs text-text-muted">From $400 · 1 week</p>
          </a>

          {/* Bilingual Builds */}
          <a
            href="/web-design"
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <p className="font-label text-[11px] uppercase tracking-[0.16em] text-accent">
                Unique to us
              </p>
              <h3 className="font-display text-lg group-hover:text-accent">
                Bilingual Builds
              </h3>
              <p className="text-sm text-text-muted font-body">
                English/Yoruba bilingual websites and content platforms. Perfect for
                businesses targeting Nigerian audiences.
              </p>
            </div>
            <p className="mt-4 text-xs text-text-muted">Custom Quote</p>
          </a>

          {/* Retainer Support */}
          <a
            href="#contact"
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h3 className="font-display text-lg group-hover:text-accent">
                Retainer Support
              </h3>
              <p className="text-sm text-text-muted font-body">
                Monthly ongoing support, updates, new features, and maintenance. Your
                dedicated dev partner, always on call.
              </p>
            </div>
            <p className="mt-4 text-xs text-text-muted">From $100/mo</p>
          </a>

        </div>
      </section>

      {/* ── WORK ── */}
      <section className="space-y-8">
        <div>
          <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted mb-2">
            Work
          </p>
          <h2 className="font-display text-2xl">Live Projects, Real Results</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="/work/realmarh-atelier"
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <p className="font-label text-[11px] uppercase tracking-[0.16em] text-text-muted">
                Fashion Brand · Landing Page + Booking
              </p>
              <h3 className="font-display text-lg group-hover:text-accent">
                Realmarh Atelier
              </h3>
              <p className="text-sm text-text-muted font-body">
                Complete brand showcase with portfolio gallery, booking system, and
                mobile-responsive design. Built and deployed to production.
              </p>
            </div>
            <p className="mt-4 text-xs text-accent">Delivered in 5 days →</p>
          </a>
          <a
            href="/work/afro-consult-energy"
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <p className="font-label text-[11px] uppercase tracking-[0.16em] text-text-muted">
                Energy Consulting · Corporate Website
              </p>
              <h3 className="font-display text-lg group-hover:text-accent">
                Afro Consult Energy
              </h3>
              <p className="text-sm text-text-muted font-body">
                Professional corporate WordPress site with custom theme and full CMS
                control. Built to earn trust with stakeholders and partners.
              </p>
            </div>
            <p className="mt-4 text-xs text-accent">Delivered in 5 days →</p>
          </a>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="space-y-8">
        <div>
          <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted mb-2">
            How we work
          </p>
          <h2 className="font-display text-2xl">From Idea to Live in Days, Not Months</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              step: '01',
              title: 'Discovery Call',
              desc: 'We talk through your idea, goals, and requirements. No fluff — just clarity on what you need and what it costs.',
              time: 'Day 1',
            },
            {
              step: '02',
              title: 'Proposal & Scope',
              desc: 'You receive a clear scope document, timeline, and fixed price quote. No surprises, no scope creep.',
              time: 'Day 1–2',
            },
            {
              step: '03',
              title: 'Build & Review',
              desc: 'We build fast using AI-accelerated development. You review progress and give feedback in real-time.',
              time: 'Day 2–7',
            },
            {
              step: '04',
              title: 'Launch & Support',
              desc: 'We deploy, test, and hand over a live, working product. Post-launch support included for 14 days.',
              time: 'Day 7–10',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-lg border border-surface-3 bg-surface-1 p-5 space-y-3"
            >
              <p className="font-display text-3xl text-accent">{item.step}</p>
              <h3 className="font-display text-base">{item.title}</h3>
              <p className="text-sm text-text-muted font-body">{item.desc}</p>
              <p className="text-xs text-accent">{item.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="space-y-8">
        <div>
          <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted mb-2">
            Transparent pricing
          </p>
          <h2 className="font-display text-2xl">Simple, Fixed Prices. No Hidden Fees.</h2>
          <p className="text-sm text-text-muted font-body mt-2">
            Pay in USD for international projects or Naira for local. 50% upfront, 50% on delivery.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">

          {/* Starter */}
          <div className="rounded-lg border border-surface-3 bg-surface-1 p-6 space-y-6 flex flex-col">
            <div className="space-y-2">
              <h3 className="font-display text-lg">Starter</h3>
              <p className="font-display text-3xl">$150</p>
              <p className="text-xs text-text-muted">One-time payment</p>
            </div>
            <ul className="space-y-2 text-sm text-text-muted font-body flex-1">
              {[
                'Single-page landing site',
                'Mobile-responsive design',
                'Contact form integration',
                '2 revision rounds',
                '48–72hr delivery',
                '14-day post-launch support',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-surface-3 px-5 py-2 text-sm font-display text-text-primary"
            >
              Get Started
            </a>
          </div>

          {/* Business */}
          <div className="rounded-lg border border-accent bg-surface-1 p-6 space-y-6 flex flex-col relative">
            <p className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black font-label text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
              Most Popular
            </p>
            <div className="space-y-2">
              <h3 className="font-display text-lg">Business</h3>
              <p className="font-display text-3xl">$400</p>
              <p className="text-xs text-text-muted">One-time payment</p>
            </div>
            <ul className="space-y-2 text-sm text-text-muted font-body flex-1">
              {[
                'Multi-page website (up to 6 pages)',
                'CMS / WordPress setup',
                'Booking or inquiry system',
                'Portfolio/gallery section',
                '3 revision rounds',
                '5–7 day delivery',
                '1 month post-launch support',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2 text-sm font-display text-black"
            >
              Get Started
            </a>
          </div>

          {/* MVP */}
          <div className="rounded-lg border border-surface-3 bg-surface-1 p-6 space-y-6 flex flex-col">
            <div className="space-y-2">
              <h3 className="font-display text-lg">MVP / App</h3>
              <p className="font-display text-3xl">$800+</p>
              <p className="text-xs text-text-muted">Scoped per project</p>
            </div>
            <ul className="space-y-2 text-sm text-text-muted font-body flex-1">
              {[
                'Full web application build',
                'Dashboard & data visualization',
                'API integrations',
                'User authentication',
                'Database & backend logic',
                'Unlimited revisions in scope',
                '1–2 week delivery',
                '30-day post-launch support',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">✓</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-surface-3 px-5 py-2 text-sm font-display text-text-primary"
            >
              Get a Custom Quote
            </a>
          </div>

        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="space-y-6 rounded-lg border border-surface-3 bg-surface-1 p-8"
      >
        <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
          Let&apos;s build together
        </p>
        <h2 className="font-display text-2xl">Have an Idea? Let&apos;s Ship It.</h2>
        <p className="text-sm text-text-muted font-body max-w-xl">
          Tell us what you need and we&apos;ll get back to you within 24 hours with a
          clear plan and price.
        </p>

        {/*
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="space-y-4 max-w-xl"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs text-text-muted font-label uppercase tracking-widest">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-md border border-surface-3 bg-surface-2 px-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs text-text-muted font-label uppercase tracking-widest">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-md border border-surface-3 bg-surface-2 px-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs text-text-muted font-label uppercase tracking-widest">
              What do you need?
            </label>
            <select
              name="service"
              className="w-full rounded-md border border-surface-3 bg-surface-2 px-4 py-2 text-sm text-text-primary focus:border-accent focus:outline-none"
            >
              <option value="">Select a service</option>
              <option value="mvp">MVP Web App</option>
              <option value="landing">Landing Page</option>
              <option value="website">Business Website</option>
              <option value="dashboard">Data Dashboard</option>
              <option value="bilingual">Bilingual Build</option>
              <option value="retainer">Retainer Support</option>
              <option value="other">Other / Not sure</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs text-text-muted font-label uppercase tracking-widest">
              Tell us about your project
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Briefly describe what you want to build, your timeline, and any budget in mind..."
              className="w-full rounded-md border border-surface-3 bg-surface-2 px-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-2.5 text-sm font-display text-black"
          >
            Send Message →
          </button>
        </form>
        */}
        <a href="mailto:hello@vibestudio.ng">
        Send us a message →
        </a>

        <div className="pt-4 border-t border-surface-3 space-y-1 text-sm font-body text-text-muted">
          <p>📧 <a href="mailto:hello@vibestudio.ng" className="underline">hello@vibestudio.ng</a></p>
          <p>📱 +234 812 786 2440</p>
          <p>🌍 Ibadan, Nigeria · Remote Worldwide</p>
        </div>
      </section>

    </div>
  );
}
