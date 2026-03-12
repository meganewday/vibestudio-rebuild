import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center space-y-6">
      <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
        404
      </p>
      <h1 className="font-display text-3xl md:text-4xl">
        We couldn&apos;t find that page.
      </h1>
      <p className="text-sm text-text-muted font-body">
        The link you followed might be broken, or the page may have been moved.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2 text-sm font-display text-black"
        >
          Back to home
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center justify-center rounded-md border border-surface-3 px-5 py-2 text-sm font-display text-text-primary"
        >
          View our work
        </Link>
      </div>
    </div>
  );
}

