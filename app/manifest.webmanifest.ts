import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vibe Studio NG',
    short_name: 'Vibe Studio',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

