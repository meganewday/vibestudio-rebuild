export const siteConfig = {
  name: 'Vibe Studio NG',
  baseUrl: 'https://vibestudio.ng',
  description:
    'Web design and MVP development agency in Ibadan, Nigeria. Vibe Studio NG ships production-ready MVPs and websites for startups and businesses.',
  telephone: '+2348127862440',
  address: {
    locality: 'Ibadan',
    region: 'Oyo State',
    country: 'NG',
  },
  priceRange: '$150 - $800+',
};

export function absoluteUrl(path: string) {
  if (path.startsWith('http')) return path;
  return new URL(path, siteConfig.baseUrl).toString();
}

