'use client';

import { useEffect, useState } from 'react';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

const STORAGE_KEY = 'vibe_pwa_install_dismissed';

export function PwaInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(display-mode: standalone)').matches) return;
    if (localStorage.getItem(STORAGE_KEY) === '1') return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler as any);
    return () => window.removeEventListener('beforeinstallprompt', handler as any);
  }, []);

  if (!visible || !deferredPrompt) return null;

  const onInstallClick = async () => {
    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === 'dismissed') {
        localStorage.setItem(STORAGE_KEY, '1');
      }
      setVisible(false);
      setDeferredPrompt(null);
    } catch {
      setVisible(false);
    }
  };

  const onDismiss = () => {
    localStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:bottom-4">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-lg border border-surface-3 bg-surface-1/95 backdrop-blur px-4 py-3 flex items-center justify-between gap-3">
          <div className="space-y-1">
            <p className="font-label text-[11px] uppercase tracking-[0.16em] text-text-muted">
              Install Vibe Studio NG
            </p>
            <p className="text-xs text-text-muted font-body max-w-md">
              Add Vibe Studio NG to your home screen for faster access and an
              app-like experience.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onDismiss}
              className="hidden sm:inline-flex items-center justify-center rounded-md border border-surface-3 px-3 py-1.5 text-[11px] font-label tracking-[0.16em] text-text-muted"
            >
              Not now
            </button>
            <button
              type="button"
              onClick={onInstallClick}
              className="inline-flex items-center justify-center rounded-md bg-accent px-3.5 py-1.5 text-[11px] font-label tracking-[0.16em] text-black"
            >
              Install app
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

