'use client';

import { useState } from 'react';

const navItems = [
  { href: '/mvp-development', label: 'MVP Dev' },
  { href: '/web-design', label: 'Web Design' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Blog' },
  { href: '/pricing', label: 'Pricing' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-surface-2 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="/" className="font-display text-lg tracking-tight">
          Vibe<span className="text-accent">.</span>Studio NG
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-label uppercase tracking-[0.16em] text-text-muted">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md border border-accent bg-accent/10 px-3 py-1 text-xs text-accent"
          >
            Start a Project
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-surface-3 bg-surface-1 px-2.5 py-1.5 text-xs font-label tracking-[0.16em]"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="mr-2 text-[10px] text-text-muted">Menu</span>
          <span className="flex flex-col gap-0.5">
            <span className="h-[1.5px] w-3 bg-text-primary" />
            <span className="h-[1.5px] w-3 bg-text-primary" />
          </span>
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <div className="md:hidden border-t border-surface-2 bg-background">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-sm font-label uppercase tracking-[0.16em] text-text-muted">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-1 inline-flex items-center justify-center rounded-md border border-accent bg-accent/10 px-3 py-2 text-xs text-accent"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

