export type CaseStudy = {
  slug: 'realmarh-atelier' | 'afro-consult-energy';
  title: string;
  clientType: string;
  liveUrl: string;
  brief: string;
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'realmarh-atelier',
    title: 'Realmarh Atelier — Fashion Brand Website',
    clientType: 'Fashion brand',
    liveUrl: 'https://realmarhatelier.ng',
    brief:
      'Complete brand showcase with portfolio gallery, booking system, contact forms, and mobile-responsive design.',
    result: 'Built and deployed to production in 48 hours.',
  },
  {
    slug: 'afro-consult-energy',
    title: 'Afro Consult Energy — Corporate Website',
    clientType: 'Energy consulting firm',
    liveUrl: 'https://afroconsultenergy.org',
    brief:
      'Professional corporate WordPress site with custom theme and full CMS.',
    result: 'Delivered in 5 days.',
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}

