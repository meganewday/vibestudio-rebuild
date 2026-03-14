export const metadata = {
  title: 'Pricing | Vibe Studio NG',
  description:
    'See pricing for MVP development and web design services from Vibe Studio NG, including landing pages, business websites, and MVP builds.',
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-10">
      <header className="space-y-4">
        <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
          Pricing
        </p>
        <h1 className="font-display text-3xl md:text-4xl">Pricing</h1>
        <p className="max-w-2xl text-sm text-text-muted font-body">
          Transparent starting points for MVP builds and websites. Final pricing depends
          on features, integrations, and timelines.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="font-display text-2xl">MVP Development</h2>
        <div className="rounded-lg border border-surface-3 bg-surface-1 p-5 space-y-2">
          <p className="font-display text-lg">MVP Web Apps</p>
          <p className="text-sm text-text-muted font-body">
            From <span className="text-accent font-display">$800</span> for dashboards,
            booking systems, fintech tools, and SaaS apps.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-display text-2xl">Web Design</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-surface-3 bg-surface-1 p-5 space-y-2">
            <p className="font-display text-lg">Starter — Landing page</p>
            <p className="text-sm text-text-muted font-body">
              From <span className="text-accent font-display">$150</span> with 48–72
              hour turnaround.
            </p>
          </div>
          <div className="rounded-lg border border-surface-3 bg-surface-1 p-5 space-y-2">
            <p className="font-display text-lg">Business website</p>
            <p className="text-sm text-text-muted font-body">
              From <span className="text-accent font-display">$400</span> with 3–5 day
              turnaround.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3 rounded-lg border border-surface-3 bg-surface-1 p-5">
        <h2 className="font-display text-2xl">Next steps</h2>
        <p className="text-sm text-text-muted font-body">
          Share your budget range, timeline, and a short summary of what you want to
          build. We&apos;ll reply with a scoped quote and options.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2 text-sm font-display text-black"
        >
          Start a Project
        </a>
      </section>
    </div>
  );
}

