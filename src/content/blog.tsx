export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-much-does-a-website-cost-in-nigeria',
    title: 'How Much Does a Website Cost in Nigeria?',
    description: 'A practical breakdown of website pricing for Nigerian businesses.',
    date: '2026-03-01',
    readingTime: '5 min read',
    category: 'Web Design',
  },
  {
    slug: 'how-to-build-an-mvp-in-nigeria',
    title: 'How to Build an MVP in Nigeria',
    description: 'Steps to go from startup idea to working MVP in weeks.',
    date: '2026-03-01',
    readingTime: '6 min read',
    category: 'MVP Development',
  },
  {
    slug: 'why-your-nigerian-business-needs-a-website',
    title: 'Why Your Nigerian Business Needs a Website',
    description: 'Reasons every Nigerian business should be online.',
    date: '2026-03-01',
    readingTime: '4 min read',
    category: 'Business',
  },
  {
    slug: 'what-is-ai-accelerated-web-development',
    title: 'What Is AI-Accelerated Web Development?',
    description: 'How AI tools speed up shipping production-ready web projects.',
    date: '2026-03-01',
    readingTime: '5 min read',
    category: 'AI',
  },
  {
    slug: 'yoruba-english-bilingual-websites',
    title: 'Yoruba-English Bilingual Websites in Nigeria',
    description: 'How bilingual websites help Nigerian brands reach more people.',
    date: '2026-03-01',
    readingTime: '5 min read',
    category: 'Localization',
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

