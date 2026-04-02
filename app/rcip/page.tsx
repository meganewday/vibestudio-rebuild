import { Space_Grotesk, Barlow } from 'next/font/google';
import { Check, Circle, X, ArrowRight, Mail, Phone } from 'lucide-react';
import type { Metadata } from 'next';

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const barlow = Barlow({ weight: ['400', '600'], subsets: ['latin'], variable: '--font-barlow' });

export const metadata: Metadata = {
  title: "Lawal Abdulbasit | Business Systems Specialist | RCIP Canada",
  description: "Business Systems Specialist relocating via RCIP. Focused on AI-accelerated workflows and rapid MVP development.",
};

export default function RCIPPage() {
  return (
    <main className={`${space.variable} ${barlow.variable} font-barlow bg-black text-warmWhite min-h-screen selection:bg-lime selection:text-black`}>
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center px-6 lg:px-24 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-lime/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl z-10">
          <span className="font-space font-bold text-lime tracking-widest text-sm mb-6 block uppercase">
            NOW ACCEPTING CANADA OPPORTUNITIES
          </span>
          <h1 className="font-space text-5xl md:text-7xl font-bold leading-tight mb-8">
            Business Systems Specialist / <br className="hidden md:block" /> 
            <span className="text-lime/90">Relocating via RCIP</span>
          </h1>
          <p className="text-xl md:text-2xl text-warmWhite/60 max-w-2xl mb-12">
            I build AI-accelerated workflows that scale operations. Bridging the gap between rural business needs and modern tech stacks.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-lime text-black px-8 py-4 rounded-pill font-space font-bold hover:scale-105 transition-transform">
              Download Credentials
            </button>
            <button className="border border-warmWhite/20 px-8 py-4 rounded-pill font-space font-bold hover:bg-warmWhite/5 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* 2. WHY RURAL CANADA */}
      <section className="py-96 bg-surface1 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space text-4xl font-bold mb-8">Why Rural Canada?</h2>
          <p className="text-xl text-warmWhite/60 max-w-3xl mb-12">
            Proven expertise in underserved markets. I don't just build software; I build systems that thrive where infrastructure and talent pools are lean.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Business Systems Specialist (NOC 21221)", "Rapid MVP Development", "Bilingual Content Platforms", "Retainer-Based Support"].map((tag) => (
              <span key={tag} className="px-6 py-2 rounded-pill border border-lime text-lime font-space text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS */}
      <section className="py-96 bg-surface2 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Discovery", desc: "Audit existing workflows and bottleneck ID.", time: "Week 1" },
              { num: "02", title: "Proposal", desc: "Architecture roadmap and ROI mapping.", time: "Week 2" },
              { num: "03", title: "Build", desc: "Rapid deployment of AI-integrated systems.", time: "Week 3-6" },
              { num: "04", title: "Launch", desc: "Onboarding, training, and scaling support.", time: "Week 7+" },
            ].map((step) => (
              <div key={step.num} className="flex flex-col">
                <span className="font-space text-6xl font-bold text-lime/30 mb-6">{step.num}</span>
                <h3 className="font-space text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-warmWhite/60 mb-4">{step.desc}</p>
                <span className="text-lime text-sm font-bold uppercase tracking-tighter">{step.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMMIGRATION READY */}
      <section className="py-96 bg-surface1 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto bg-black p-12 rounded-card border border-warmWhite/5">
          <h2 className="font-space text-4xl font-bold mb-12">Immigration Readiness</h2>
          <div className="space-y-6 mb-12">
            {[
              { text: "Valid International Passport", icon: <Check className="text-lime" /> },
              { text: "BSc Quantity Surveying - FUT Minna", icon: <Check className="text-lime" /> },
              { text: "WES Evaluation (In Progress)", icon: <Circle className="text-yellow-500" /> },
              { text: "IELTS Scheduled (Q3 2026)", icon: <Circle className="text-yellow-500" /> },
              { text: "4+ Years Professional Experience", icon: <Check className="text-lime" /> },
              { text: "Seeking LMIA / RCIP Employer Offer", icon: <ArrowRight className="text-lime" /> },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-lg">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-warmWhite/10">
            <p className="text-warmWhite/60">Status: <span className="text-lime">Active Candidate</span> | Relocation Window: Late 2026</p>
          </div>
        </div>
      </section>

      {/* 5. TARGET COMMUNITIES */}
      <section className="py-96 bg-surface2 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space text-4xl font-bold mb-12 text-center">Priority RCIP Zones</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-card border-2 border-lime">
              <h3 className="font-space text-2xl font-bold mb-4">Peace River, BC</h3>
              <p className="text-warmWhite/60 mb-6">High demand for Technical Analysts and Systems Specialists.</p>
              <span className="text-xs bg-lime text-black px-3 py-1 rounded-pill font-bold uppercase">Primary Target</span>
            </div>
            <div className="bg-black p-8 rounded-card border border-warmWhite/10">
              <h3 className="font-space text-2xl font-bold mb-4">Pictou County, NS</h3>
              <p className="text-warmWhite/60 mb-6">Focus on digital transformation for local manufacturing.</p>
            </div>
            <div className="bg-black p-8 rounded-card border border-warmWhite/10">
              <h3 className="font-space text-2xl font-bold mb-4">Brandon, MB</h3>
              <p className="text-warmWhite/60 mb-6">Agri-tech systems and enterprise resource planning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO */}
      <section className="py-96 bg-surface1 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-space text-4xl font-bold mb-12">Selected Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "VibeStudio.ng", desc: "Creative agency management system.", tech: "Next.js / Supabase" },
              { name: "OkeogunJobs.com", desc: "Regional employment marketplace.", tech: "React / Node.js" },
              { name: "Realmarhatelier.ng", desc: "E-commerce for bespoke tailoring.", tech: "Next.js / Stripe" },
              { name: "AfroConsultEnergy.org", desc: "Energy consultancy data portal.", tech: "Python / Tailwind" },
            ].map((proj) => (
              <div key={proj.name} className="group bg-surface2 p-8 rounded-card hover:border-lime/50 border border-transparent transition-all">
                <h3 className="font-space text-2xl font-bold mb-2 group-hover:text-lime transition-colors">{proj.name}</h3>
                <p className="text-warmWhite/60 mb-6">{proj.desc}</p>
                <code className="text-xs text-lime font-mono">{proj.tech}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT */}
      <section className="py-96 bg-black relative overflow-hidden px-6 lg:px-24">
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-lime/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          <h2 className="font-space text-5xl md:text-6xl font-bold mb-8">Let's Build Your Vision — <span className="text-lime">in Canada</span></h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <a href="mailto:lawalabdulbasit89@gmail.com" className="flex items-center gap-3 text-xl hover:text-lime transition-colors">
              <Mail className="w-6 h-6" /> lawalabdulbasit89@gmail.com
            </a>
            <a href="tel:+2348127862440" className="flex items-center gap-3 text-xl hover:text-lime transition-colors">
              <Phone className="w-6 h-6" /> +234 812 786 2440
            </a>
          </div>
          <p className="text-warmWhite/40 mb-12 uppercase tracking-widest text-sm">Available for virtual interviews: GMT +1 (EST +5)</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-lime text-black px-10 py-5 rounded-pill font-space font-bold hover:scale-105 transition-transform">
              Send Partnership Inquiry
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-warmWhite/5 text-center text-warmWhite/20 text-sm">
        &copy; 2026 Lawal Abdulbasit. All Rights Reserved. Built for RCIP Pathways.
      </footer>
    </main>
  );
}
