import Link from 'next/link';
import { blogPosts } from '@/content/blog';

export const metadata = {
  title: 'Vibe Studio NG Blog',
  description:
    'SEO-focused articles on web design, MVP development, AI-accelerated builds, and bilingual websites for Nigerian businesses.',
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
      <header className="space-y-3">
        <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
          Blog
        </p>
        <h1 className="font-display text-3xl md:text-4xl">
          Insights for Nigerian founders and businesses
        </h1>
        <p className="max-w-2xl text-sm text-text-muted font-body">
          SEO-focused content on MVP development, web design, AI-accelerated
          development, and bilingual websites.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-lg border border-surface-3 bg-surface-1 p-5 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-text-muted">
                <span>{post.date}</span>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="font-display text-lg group-hover:text-accent">
                {post.title}
              </h2>
              <p className="text-sm text-text-muted font-body">
                {post.description}
              </p>
            </div>
            <p className="mt-4 text-xs text-text-muted">{post.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

