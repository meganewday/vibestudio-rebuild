export type CaseStudy = {
  slug:
    | 'realmarh-atelier'
    | 'afro-consult-energy'
    | 'okeogunjobs'
    | 'lagraceevents'
    | 'salateef'
    | 'nswo';
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
    result: 'Delivered in 5 days.',
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
  {
    slug: 'okeogunjobs',
    title: 'Okeogun Jobs — Job Board for Okeogun',
    clientType: 'Job board / Recruitment',
    liveUrl: 'https://okeogunjobs.com',
    brief:
      "Custom job listing platform with employer dashboard, job posting, and application forms — optimised for Nigerian job seekers.",
    result: 'Launched and live.',
  },
  {
    slug: 'lagraceevents',
    title: 'La Grace Events — Event Management & Booking',
    clientType: 'Event planning business',
    liveUrl: 'https://lagraceevents.com.ng',
    brief:
      'Event showcase and booking system with contact integration and calendar management for clients.',
    result: 'Launched and live.',
  },
  {
    slug: 'salateef',
    title: 'Salateef — Personal Portfolio',
    clientType: 'Personal portfolio',
    liveUrl: 'https://salateef.vercel.app',
    brief:
      'Personal portfolio site with project showcases, blog links, and contact integration. Custom domain will be added once the client completes payment.',
    result: 'Delivered; domain pending purchase.',
  },
  {
    slug: 'nswo',
    title: 'NSWO — Startup Landing & Lead Capture',
    clientType: 'Startup / Landing page',
    liveUrl: 'https://nswo.vercel.app',
    brief:
      'High-converting landing page with lead capture forms and analytics. Domain will be updated after client purchase.',
    result: 'Delivered; domain pending purchase.',
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}

