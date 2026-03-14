import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'MVP Development Agency in Nigeria | Vibe Studio NG',
  description:
    'Turn your startup idea into a working MVP in 1–2 weeks from $800. Dashboards, booking systems, fintech tools, SaaS apps — shipped fast by Vibe Studio NG, Ibadan Nigeria.',
  alternates: {
    canonical: `${siteConfig.baseUrl}/mvp-development`,
  },
};

export default function MvpDevelopmentPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      <header className="space-y-4">
        <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
          MVP Development
        </p>
        <h1 className="font-display text-3xl md:text-4xl">
          MVP Development for Nigerian Startups
        </h1>
        <p className="max-w-2xl text-sm text-text-muted font-body">
          Turn your startup idea into a working MVP in 1–2 weeks from $800. Dashboards,
          booking systems, fintech tools, SaaS apps — shipped fast by Vibe Studio NG,
          Ibadan Nigeria.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2 text-sm font-display text-black"
        >
          Start your MVP
        </a>
      </header>

      <section className="space-y-4">
        <h2 className="font-display text-2xl">What we build</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Founder dashboards & admin panels',
            'Booking & scheduling systems',
            'Fintech and internal tools',
            'SaaS web applications',
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-surface-3 bg-surface-1 p-4 text-sm font-body text-text-muted"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl">How it works</h2>
        <ol className="space-y-3 text-sm font-body text-text-muted">
          <li>
            <span className="font-display text-accent">1. Scope & prioritise</span> —
            we clarify your core use case and must-have features.
          </li>
          <li>
            <span className="font-display text-accent">2. UX & architecture</span> —
            we sketch flows and choose the right stack.
          </li>
          <li>
            <span className="font-display text-accent">3. Build & iterate</span> —
            fast weekly or even daily builds with tight feedback loops.
          </li>
          <li>
            <span className="font-display text-accent">4. Launch & support</span> —
            deploy to production and keep it stable with 30-day support.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-2xl">Pricing</h2>
        <p className="text-sm text-text-muted font-body">
          MVPs start from <span className="text-accent font-display">$800</span> for
          web applications. Final pricing depends on features, integrations, and
          timelines.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl">Case studies</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="/work/realmarh-atelier"
            className="rounded-lg border border-surface-3 bg-surface-1 p-4 text-sm font-body text-text-muted hover:text-accent"
          >
            Realmarh Atelier — Fashion Brand Website
          </a>
          <a
            href="/work/afro-consult-energy"
            className="rounded-lg border border-surface-3 bg-surface-1 p-4 text-sm font-body text-text-muted hover:text-accent"
          >
            Afro Consult Energy — Corporate Website
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl">MVP FAQs</h2>
        <div className="space-y-4 text-sm font-body text-text-muted">
          <div>
            <p className="font-display text-base text-text-primary">
              How long does it take to build an MVP in Nigeria?
            </p>
            <p>
              At Vibe Studio NG, most MVPs are delivered in 1–2 weeks depending on
              scope.
            </p>
          </div>
          <div>
            <p className="font-display text-base text-text-primary">
              How much does MVP development cost in Nigeria?
            </p>
            <p>
              Our MVPs start from $800 for web applications. Price depends on features
              and complexity.
            </p>
          </div>
          <div>
            <p className="font-display text-base text-text-primary">
              What kind of MVPs do you build?
            </p>
            <p>
              Dashboards, booking systems, fintech tools, SaaS apps, and data
              visualization platforms.
            </p>
          </div>
          <div>
            <p className="font-display text-base text-text-primary">
              Do I need a technical background to work with you?
            </p>
            <p>
              No. We handle everything from scoping to deployment. You just need a clear
              idea.
            </p>
          </div>
          <div>
            <p className="font-display text-base text-text-primary">
              What happens after the MVP is delivered?
            </p>
            <p>
              We offer 30-day post-launch support and monthly retainer plans from
              $100/mo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

