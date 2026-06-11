'use client';

import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();

  return (
    <form
      className="space-y-4 max-w-xl"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const service = (form.elements.namedItem('service') as HTMLSelectElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
        const text = encodeURIComponent(
          `Hi Vibe Studio, I'm ${name}. I need: ${service}. ${message}`
        );
        window.open(`https://wa.me/2348127862440?text=${text}`, '_blank');
        router.push('/thank-you');
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs text-text-muted font-label uppercase tracking-widest">Name</label>
          <input type="text" name="name" required placeholder="Your name"
            className="w-full rounded-md border border-surface-3 bg-surface-2 px-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none" />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-text-muted font-label uppercase tracking-widest">Phone / WhatsApp</label>
          <input type="tel" name="phone" required placeholder="+234..."
            className="w-full rounded-md border border-surface-3 bg-surface-2 px-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none" />
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs text-text-muted font-label uppercase tracking-widest">What do you need?</label>
        <select name="service"
          className="w-full rounded-md border border-surface-3 bg-surface-2 px-4 py-2 text-sm text-text-primary focus:border-accent focus:outline-none">
          <option value="">Select a service</option>
          <option value="MVP Web App">MVP Web App</option>
          <option value="Landing Page">Landing Page</option>
          <option value="Business Website">Business Website</option>
          <option value="Data Dashboard">Data Dashboard</option>
          <option value="Bilingual Build">Bilingual Build</option>
          <option value="Retainer Support">Retainer Support</option>
          <option value="Other">Other / Not sure</option>
        </select>
      </div>
      <div className="space-y-1">
        <label className="text-xs text-text-muted font-label uppercase tracking-widest">Tell us about your project</label>
        <textarea name="message" required rows={4}
          placeholder="Briefly describe what you want to build, your timeline, and budget..."
          className="w-full rounded-md border border-surface-3 bg-surface-2 px-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none resize-none" />
      </div>
      <button type="submit"
        className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-2.5 text-sm font-display text-black">
        Send Message →
      </button>
    </form>
  );
}
