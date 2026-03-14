import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/content/blog';
import PostWebsiteCost from '../../../content/blog/how-much-does-a-website-cost-in-nigeria.mdx';
import PostBuildMvp from '../../../content/blog/how-to-build-an-mvp-in-nigeria.mdx';
import PostWhyBusinessNeedsWebsite from '../../../content/blog/why-your-nigerian-business-needs-a-website.mdx';
import PostAiAccelerated from '../../../content/blog/what-is-ai-accelerated-web-development.mdx';
import PostYorubaBilingual from '../../../content/blog/yoruba-english-bilingual-websites.mdx';

type BlogPageProps = {
  params: { slug: string };
};

const mdxBySlug: Record<string, React.ComponentType<any>> = {
  'how-much-does-a-website-cost-in-nigeria': PostWebsiteCost,
  'how-to-build-an-mvp-in-nigeria': PostBuildMvp,
  'why-your-nigerian-business-needs-a-website': PostWhyBusinessNeedsWebsite,
  'what-is-ai-accelerated-web-development': PostAiAccelerated,
  'yoruba-english-bilingual-websites': PostYorubaBilingual,
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

export default function BlogPostPage({ params }: BlogPageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const MDXContent = mdxBySlug[params.slug];
  if (!MDXContent) notFound();

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

