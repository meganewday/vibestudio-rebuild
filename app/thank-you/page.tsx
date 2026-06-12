export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 flex flex-col items-center text-center space-y-6">
      <p className="font-label text-xs uppercase tracking-[0.16em] text-text-muted">
        Message Received
      </p>
      <h1 className="font-display text-3xl md:text-4xl">
        We&apos;ll be in touch within 24 hours.
      </h1>
      <p className="text-sm text-text-muted font-body max-w-md">
        Your request has been sent. Check your WhatsApp - we may reach out there directly.
      </p>
      <a
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-2.5 text-sm font-display text-black"
      >
        Back to Home
      </a>
    </div>
  );
}
