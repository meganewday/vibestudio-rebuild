import Link from 'next/link';
import { caseStudies } from '@/content/caseStudies';

export const metadata = {
  title: 'Client Work & Case Studies',
  description:
    'Selected live projects from Vibe Studio NG, including fashion, corporate, and startup builds.',
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
      <header className="space-y-3">
        <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
          Work
        </p>
        <h1 className="font-display text-3xl md:text-4xl">
          Live projects, real results
        </h1>
        <p className="max-w-2xl text-sm text-text-muted font-body">
          Case studies from fashion brands, corporate clients, and startups — all
          shipped with fast, production-ready builds.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            href={`/work/${cs.slug}`}
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <h2 className="font-display text-lg group-hover:text-accent">
                {cs.title}
              </h2>
              <p className="text-xs text-text-muted font-body">{cs.clientType}</p>
              <p className="text-sm text-text-muted font-body">{cs.brief}</p>
            </div>
            <p className="mt-4 text-xs text-text-muted">{cs.result}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

