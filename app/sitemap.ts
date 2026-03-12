import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import { blogPosts } from '@/content/blog';
import { caseStudies } from '@/content/caseStudies';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;

  const staticPages = ['', '/mvp-development', '/web-design', '/work', '/pricing', '/blog'];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${base}${path || '/'}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${base}/work/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...caseStudyEntries];
}

