import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/content/blog';
import type { ComponentType } from 'react';

type BlogPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

async function getPostComponent(
  slug: string,
): Promise<{ default: ComponentType<any> } | null> {
  try {
    switch (slug) {
      case 'how-much-does-a-website-cost-in-nigeria':
        return await import('../../../content/blog/how-much-does-a-website-cost-in-nigeria.mdx');
      case 'how-to-build-an-mvp-in-nigeria':
        return await import('../../../content/blog/how-to-build-an-mvp-in-nigeria.mdx');
      case 'why-your-nigerian-business-needs-a-website':
        return await import('../../../content/blog/why-your-nigerian-business-needs-a-website.mdx');
      case 'what-is-ai-accelerated-web-development':
        return await import('../../../content/blog/what-is-ai-accelerated-web-development.mdx');
      case 'yoruba-english-bilingual-websites':
        return await import('../../../content/blog/yoruba-english-bilingual-websites.mdx');
      default:
        return null;
    }
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const MDXModule = await getPostComponent(params.slug);
  if (!MDXModule) notFound();

  const MDXContent = MDXModule.default;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 space-y-8">
      <header className="space-y-3">
        <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
          {post.category}
        </p>
        <h1 className="font-display text-3xl md:text-4xl">{post.title}</h1>
        <p className="text-sm text-text-muted font-body max-w-2xl">
          {post.description}
        </p>
        <div className="flex gap-3 text-xs text-text-muted">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <div className="prose prose-invert prose-sm md:prose-base max-w-none">
        <MDXContent />
      </div>
    </article>
  );
}

