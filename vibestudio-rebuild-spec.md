# Project Spec: Vibe Studio NG — Website Rebuild
**Version:** 1.0  
**Date:** March 2026  
**Owner:** Lawal Abdulbasit — Founder, Vibe Studio NG  
**Live URL:** vibestudio.ng  
**Deadline:** Within 1 week  

---

## 🎯 Project Goal

Rebuild vibestudio.ng from a single-page website into a multi-page, SEO-optimised site that:
- Positions **MVP development as the hero service** (not web design)
- Fixes all technical SEO issues from the current site
- Creates individual service pages Google can index and rank
- Adds case study pages for existing client work
- Adds a blog section for long-term SEO content
- Maintains the existing brand identity exactly (Electric Lime + dark aesthetic)
- Keeps all existing copy and pricing — no rewrites

---

## 🏗️ Tech Stack Recommendation

**Next.js (React framework)**

Reasons:
- Static site generation (SSG) — fast load times, great for SEO
- File-based routing — clean URL structure out of the box
- Easy blog with markdown files (no CMS needed to start)
- Deploys to Vercel (current host) natively — zero config
- Future-proof: can add API routes, auth, dynamic features later as Vibe Studio NG grows

**Styling:** Tailwind CSS  
**Blog:** MDX (markdown + React components)  
**Deployment:** Vercel (existing)  
**Domain:** vibestudio.ng (existing)

---

## 📄 Pages & URL Structure

### Core Pages
| Page | URL | Priority |
|---|---|---|
| Home | `/` | P1 |
| MVP Development | `/mvp-development` | P1 |
| Web Design | `/web-design` | P2 |
| Work / Portfolio | `/work` | P1 |
| Case Study — Realmarh Atelier | `/work/realmarh-atelier` | P1 |
| Case Study — Afro Consult Energy | `/work/afro-consult-energy` | P1 |
| Blog Index | `/blog` | P2 |
| Blog Post Template | `/blog/[slug]` | P2 |
| Pricing | `/pricing` | P1 |

### Navigation Structure
```
Logo → Home
Nav: MVP Dev | Web Design | Work | Blog | Pricing | [Start a Project CTA]
```

---

## 🔍 SEO Requirements (Critical — Must Be Implemented)

### Meta Tags — Every Page
- Unique `<title>` tag per page (50–60 characters)
- Unique `<meta name="description">` per page (150–160 characters)
- Open Graph tags: `og:title`, `og:description`, `og:url`, `og:image`, `og:type`
- Canonical URL tag on every page

### Homepage SEO
```
Title: Web Design & MVP Development Agency in Nigeria | Vibe Studio NG
Description: Vibe Studio NG builds production-ready MVPs and websites for 
Nigerian startups — landing pages from $150 in 48hrs, MVPs from $500 in 
2 weeks. Based in Ibadan. Remote worldwide.
H1: Nigeria's Fast MVP & Web Development Studio
```

### MVP Development Page SEO
```
Title: MVP Development Agency in Nigeria | Vibe Studio NG
Description: Turn your startup idea into a working MVP in 1–2 weeks from 
$500. Dashboards, booking systems, fintech tools — shipped fast by Vibe 
Studio NG, Ibadan Nigeria.
H1: MVP Development for Nigerian Startups
```

### Web Design Page SEO
```
Title: Web Design Agency in Nigeria | Vibe Studio NG
Description: Professional websites for Nigerian businesses from $150. 
Landing pages delivered in 48hrs, business websites in 5 days. 
Mobile-first, production-ready. Based in Ibadan.
H1: Web Design for Nigerian Businesses
```

### Structured Data — Homepage
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Vibe Studio NG",
  "description": "Web design and MVP development agency in Ibadan, Nigeria",
  "url": "https://vibestudio.ng",
  "telephone": "+2348127862440",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ibadan",
    "addressRegion": "Oyo State",
    "addressCountry": "NG"
  },
  "priceRange": "$150 - $800+"
}
```

### XML Sitemap
- Auto-generated at `/sitemap.xml`
- Include all pages and blog posts
- Submit to Google Search Console post-launch

### Robots.txt
```
User-agent: *
Allow: /
Sitemap: https://vibestudio.ng/sitemap.xml
```

---

## 🏠 Homepage (`/`)

### Hero Section
- **H1:** Nigeria's Fast MVP & Web Development Studio
- **Subheading:** Vibe Studio NG ships production-ready MVPs and websites for startups and businesses — using AI-accelerated development to deliver in days, not months.
- **Primary CTA:** Get a Free Quote → `#contact`
- **Secondary CTA:** See Our Work → `/work`
- **Stats bar:** 3+ Live production websites · 48h Average turnaround · 4+ Years experience · 2× Bilingual: English & Yoruba

### Services Section
- **Heading:** Services Built for Results
- Lead with MVP Web Apps card (most prominent)
- Follow with Landing Pages, Business Websites, Data Dashboards, Retainer Support, Bilingual Builds
- Each card links to its dedicated service page where applicable

### Work Section
- **Heading:** Live Projects, Real Results
- Show Realmarh Atelier + Afro Consult Energy cards
- Each links to its case study page `/work/[slug]`

### Process Section (keep existing content)

### Pricing Section (keep existing content exactly)

### Contact Section (keep existing content exactly)

---

## 🚀 MVP Development Page (`/mvp-development`)

### Purpose
This is the hero service page. Targets: Nigerian startup founders, international clients, bootstrapped founders.

### Content Structure
1. **Hero:** H1 + subheading + CTA
2. **What we build:** Types of MVPs (dashboards, booking systems, fintech tools, SaaS apps)
3. **How it works:** The 4-step process
4. **Pricing:** MVP tier from $500 (scoped per project)
5. **Case studies:** Link to Realmarh Atelier + Afro Consult
6. **FAQ section:** 5 questions targeting People Also Ask
7. **CTA:** Start your MVP

### FAQ Content (for SEO — People Also Ask)
```
Q: How long does it take to build an MVP in Nigeria?
A: At Vibe Studio NG, most MVPs are delivered in 1–2 weeks depending on scope.

Q: How much does MVP development cost in Nigeria?
A: Our MVPs start from $500 for web applications. Price depends on features and complexity.

Q: What kind of MVPs do you build?
A: Dashboards, booking systems, fintech tools, SaaS apps, and data visualization platforms.

Q: Do I need a technical background to work with you?
A: No. We handle everything from scoping to deployment. You just need a clear idea.

Q: What happens after the MVP is delivered?
A: We offer 30-day post-launch support and monthly retainer plans from $100/mo.
```

---

## 🌐 Web Design Page (`/web-design`)

### Purpose
Secondary service page. Targets: Nigerian SMEs, local businesses, Yoruba-speaking businesses.

### Content Structure
1. **Hero:** H1 + subheading + CTA
2. **Services:** Landing pages, business websites, bilingual builds
3. **Pricing:** Starter $150 / Business $400
4. **Turnaround times:** 48hrs / 5 days
5. **FAQ section:** 5 questions
6. **CTA:** Get a free quote

### FAQ Content
```
Q: How much does a website cost in Nigeria?
A: At Vibe Studio NG, landing pages start from $150 and business websites from $250.

Q: How long does a website take to build?
A: Landing pages: 48–72 hours. Business websites: 3–5 days.

Q: Do you build bilingual Yoruba/English websites?
A: Yes — we are one of the only studios in Nigeria offering bilingual English/Yoruba builds.

Q: What is included in the website price?
A: Design, development, mobile responsiveness, contact forms, and 14-day post-launch support.

Q: Can you redesign my existing website?
A: Yes. We offer full redesigns and rebuilds. Contact us for a custom quote.
```

---

## 📁 Case Study Pages (`/work/[slug]`)

### Template Structure (same for both)
1. **Header:** Project name + client type + live URL
2. **The Brief:** What the client needed
3. **The Challenge:** What made it complex or interesting
4. **The Solution:** What was built and key decisions made
5. **The Result:** Live screenshots + turnaround time + outcome
6. **Tech used:** Stack tags
7. **CTA:** "Want results like this? Get a free quote."
8. **Next project:** Link to other case study

### Realmarh Atelier (`/work/realmarh-atelier`)
```
Title: Realmarh Atelier — Fashion Brand Website | Vibe Studio NG
Brief: Complete brand showcase with portfolio gallery, booking system, 
       contact forms, mobile-responsive design
Result: Built and deployed to production in 48 hours
Live URL: realmarhatelier.ng
```

### Afro Consult Energy (`/work/afro-consult-energy`)
```
Title: Afro Consult Energy — Corporate Website | Vibe Studio NG
Brief: Professional corporate WordPress site with custom theme and full CMS
Result: Delivered in 5 days
Live URL: afroconsultenergy.org
```

---

## 📝 Blog Section (`/blog`)

### Purpose
Long-term SEO engine. Each post targets a specific keyword from the keyword strategy.

### Blog Index Page
- Grid of post cards: title, date, reading time, category tag
- No pagination needed initially (few posts)

### First 5 Posts to Create as Placeholder MDX Files
```
1. how-much-does-a-website-cost-in-nigeria.mdx
   Target keyword: "website cost Nigeria"

2. how-to-build-an-mvp-in-nigeria.mdx
   Target keyword: "MVP development Nigeria"

3. why-your-nigerian-business-needs-a-website.mdx
   Target keyword: "Nigerian business website"

4. what-is-ai-accelerated-web-development.mdx
   Target keyword: "AI web development"

5. yoruba-english-bilingual-websites.mdx
   Target keyword: "Yoruba bilingual website Nigeria"
```
> Note: Create placeholder MDX files with frontmatter and intro paragraph only. Full content to be written separately.

---

## 🎨 Design & Brand Requirements

### Brand System (Must Follow Exactly)
- **Primary background:** `#0A0A0A` (True Black)
- **Surface cards:** `#111111` / `#1A1A1A` / `#242424`
- **Primary accent:** `#C8F53A` (Electric Lime) — one element per composition
- **Primary text:** `#F5F2EC` (Warm White)
- **Body text:** `rgba(245,242,236,0.60)`
- **Display font:** Space Grotesk (700) — headlines, buttons, nav, logo
- **Body font:** Barlow (300/400) — body copy, descriptions
- **Label font:** Barlow Condensed (700, uppercase, tracked) — section labels

### Logo
- Wordmark: `Vibe.Studio NG`
- The dot is always Electric Lime `#C8F53A` on dark, Lime Dark `#A3CC1E` on light
- Never modify, stretch, italicise, or recolor

### Layout Rules
- Dark backgrounds always (light only for invoice/document contexts)
- Sharp edges — minimal border radius (4–8px max)
- Generous white space using spacing scale
- Line icons only: 1.5px stroke, Electric Lime on dark

---

## ⚡ Performance Requirements

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| INP (Interaction to Next Paint) | < 200ms |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Lighthouse Performance Score | 90+ |
| Lighthouse SEO Score | 100 |
| Mobile-friendly | Pass |

- All images: WebP format, compressed, with descriptive alt text
- Fonts: loaded via `next/font` for zero layout shift
- No external scripts in `<head>` blocking render

---

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|---|---|
| Mobile | < 640px |
| Tablet | 640px – 1024px |
| Desktop | > 1024px |

All layouts must be mobile-first. Test on 375px (iPhone SE) as minimum.

---

## ✅ Definition of Done

The project is complete when:
- [ ] All pages listed above are built and functional
- [ ] Every page has unique title tag and meta description
- [ ] LocalBusiness schema markup is present on homepage
- [ ] XML sitemap generated at `/sitemap.xml`
- [ ] robots.txt present and correct
- [ ] All images have alt text and are WebP format
- [ ] Lighthouse SEO score = 100 on all pages
- [ ] Lighthouse Performance score ≥ 90 on homepage
- [ ] Mobile responsive at 375px minimum
- [ ] All internal links working (no 404s)
- [ ] Contact form functional
- [ ] Blog placeholder posts created with correct frontmatter
- [ ] Case study pages live with correct content
- [ ] Deployed to Vercel and live at vibestudio.ng

---

## 🚀 Orchestrator Launch Command

```
Please spawn an agents-orchestrator to execute the complete development 
pipeline for this spec. Run autonomous workflow:

1. project-manager-senior → read spec, create detailed task list
2. ArchitectUX → Next.js project structure, Tailwind config, component architecture
3. Frontend Developer + SEO Specialist → build each page with SEO requirements
4. EvidenceQA → validate each page (visuals + SEO + mobile)
5. testing-reality-checker → final production readiness check

Each task must pass QA before advancing. SEO requirements are non-negotiable 
quality gates — no page passes QA without correct meta tags, heading structure, 
and schema where specified.
```

---

*Spec prepared for use with agents-orchestrator from [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)*  
*Brand reference: Vibe Studio NG Brand Guide v1.0*  
*SEO reference: Vibe Studio NG SEO Audit — March 2026*
