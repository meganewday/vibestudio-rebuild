import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudyBySlug } from '@/content/caseStudies';

type CaseStudyPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return {};

  return {
    title: cs.title,
    description: cs.brief,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  const other = caseStudies.find((c) => c.slug !== cs.slug);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 space-y-10">
      <header className="space-y-4">
        <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
          Case Study
        </p>
        <h1 className="font-display text-3xl md:text-4xl">{cs.title}</h1>
        <p className="text-sm text-text-muted font-body">{cs.clientType}</p>
        <p className="text-sm text-text-muted font-body max-w-2xl">{cs.brief}</p>
        <p className="text-sm font-body">
          Live URL:{' '}
          <a href={cs.liveUrl} className="underline" target="_blank">
            {cs.liveUrl}
          </a>
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-display text-xl">The Result</h2>
        <p className="text-sm text-text-muted font-body">{cs.result}</p>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-xl">Tech used</h2>
        <p className="text-sm text-text-muted font-body">
          Modern web stack tailored to fast, production-ready builds. Exact stack
          details can be expanded here later.
        </p>
      </section>

      <section className="space-y-3 rounded-lg border border-surface-3 bg-surface-1 p-5">
        <h2 className="font-display text-xl">
          Want results like this for your business?
        </h2>
        <p className="text-sm text-text-muted font-body">
          Share a short brief about your project, and we&apos;ll reply with a scoped
          quote and timeline.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2 text-sm font-display text-black"
        >
          Get a Free Quote
        </a>
      </section>

      {other && (
        <section className="space-y-3">
          <h2 className="font-display text-xl">Next project</h2>
          <Link
            href={`/work/${other.slug}`}
            className="inline-flex items-center justify-between rounded-lg border border-surface-3 bg-surface-1 px-4 py-3 text-sm font-body text-text-muted hover:text-accent"
          >
            <span>{other.title}</span>
            <span className="text-xs text-text-muted">View case study →</span>
          </Link>
        </section>
      )}
    </article>
  );
}

