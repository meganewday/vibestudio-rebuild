import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = `${siteConfig.baseUrl}/sitemap.xml`;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: sitemapUrl,
  };
}

