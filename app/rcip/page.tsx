import { Space_Grotesk, Barlow } from 'next/font/google';

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const barlow = Barlow({ weight: ['400', '600'], subsets: ['latin'], variable: '--font-barlow' });

export const metadata = {
  title: "Lawal Abdulbasit | Business Systems Specialist | RCIP Canada",
  description: "Business Systems Specialist relocating via RCIP.",
};

export default function RCIPPage() {
  return (
    <main className={`${space.variable} ${barlow.variable} font-barlow bg-[#0A0A0A] text-[#F5F2EC] min-h-screen`}>
      
      {/* 1. HERO */}
      <section className="relative h-screen flex flex-col justify-center px-6 lg:px-24 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#C8F53A]/20 rounded-full blur-[120px]" />
        <div className="max-w-4xl z-10">
          <span className="font-space font-bold text-[#C8F53A] tracking-widest text-sm mb-6 block uppercase">NOW ACCEPTING CANADA OPPORTUNITIES</span>
          <h1 className="font-space text-5xl md:text-7xl font-bold leading-tight mb-8">Business Systems Specialist / <span className="text-[#C8F53A]">Relocating via RCIP</span></h1>
          <p className="text-xl text-[#F5F2EC]/60 max-w-2xl mb-12">I build AI-accelerated workflows that scale operations. Bridging the gap between rural business needs and modern tech stacks.</p>
          <div className="flex gap-4">
            <button className="bg-[#C8F53A] text-black px-8 py-4 rounded-full font-bold">Download Credentials</button>
          </div>
        </div>
      </section>

      {/* 2. WHY RURAL CANADA */}
      <section className="py-24 bg-[#111111] px-6 lg:px-24">
        <h2 className="font-space text-4xl font-bold mb-8">Why Rural Canada?</h2>
        <div className="flex flex-wrap gap-3">
          {["Business Systems Specialist (NOC 21221)", "Rapid MVP Development", "Bilingual Content Platforms", "Retainer-Based Support"].map(tag => (
            <span key={tag} className="px-4 py-2 rounded-full border border-[#C8F53A] text-[#C8F53A] text-sm">{tag}</span>
          ))}
        </div>
      </section>

      {/* 3. PROCESS */}
      <section className="py-24 bg-[#1A1A1A] px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { n: "01", t: "Discovery", d: "Audit workflows." },
            { n: "02", t: "Proposal", d: "ROI mapping." },
            { n: "03", t: "Build", d: "AI Integration." },
            { n: "04", t: "Launch", d: "Scaling support." }
          ].map(s => (
            <div key={s.n}><span className="text-5xl font-bold text-[#C8F53A]/30 block mb-4">{s.n}</span><h3 className="text-xl font-bold">{s.t}</h3><p className="text-[#F5F2EC]/60">{s.d}</p></div>
          ))}
        </div>
      </section>

      {/* 4. IMMIGRATION READY */}
      <section className="py-24 bg-[#111111] px-6 lg:px-24">
        <div className="max-w-2xl bg-black p-10 rounded-xl border border-white/5">
          <h2 className="text-3xl font-bold mb-8">Immigration Status</h2>
          <ul className="space-y-4 text-lg">
            <li>✅ Valid International Passport</li>
            <li>✅ BSc Quantity Surveying - FUT Minna</li>
            <li>⏳ WES Evaluation (In Progress)</li>
            <li>📅 IELTS Scheduled 2026</li>
            <li>💼 4+ Years Experience</li>
          </ul>
        </div>
      </section>

      {/* 5. TARGET COMMUNITIES */}
      <section className="py-24 bg-[#1A1A1A] px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-black rounded-xl border-2 border-[#C8F53A]">
            <h3 className="text-xl font-bold mb-2">Peace River, BC</h3>
            <p className="text-[#F5F2EC]/60">NOC 21221 Priority</p>
          </div>
          <div className="p-8 bg-black rounded-xl border border-white/5">
            <h3 className="text-xl font-bold mb-2">Pictou County, NS</h3>
            <p className="text-[#F5F2EC]/60">Digital Transformation</p>
          </div>
          <div className="p-8 bg-black rounded-xl border border-white/5">
            <h3 className="text-xl font-bold mb-2">Brandon, MB</h3>
            <p className="text-[#F5F2EC]/60">Agri-tech Systems</p>
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO */}
      <section className="py-24 bg-[#111111] px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["VibeStudio.ng", "OkeogunJobs.com", "Realmarhatelier.ng", "AfroConsultEnergy.org"].map(p => (
            <div key={p} className="p-8 bg-[#1A1A1A] rounded-xl">
              <h3 className="text-xl font-bold text-[#C8F53A]">{p}</h3>
              <p className="opacity-60">System Infrastructure & Deployment</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CONTACT */}
      <section className="py-24 bg-black text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Let's Build Your Vision — <span className="text-[#C8F53A]">in Canada</span></h2>
        <p className="mb-4">lawalabdulbasit89@gmail.com</p>
        <p className="opacity-40 text-sm">Relocation Target: Late 2026</p>
      </section>

    </main>
  );
}
