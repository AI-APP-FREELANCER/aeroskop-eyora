import { MessageCircle } from "lucide-react";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/site";

export default function CtaBand() {
  return (
    <section id="contact" className="px-5 md:px-8 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden eyora-surface">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "var(--gradient-glow-overlay)" }}
        />

        <div className="relative">
          <div className="eyora-badge px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--eyora-green-mid)] animate-pulse-glow" />
            Talk to Us Today
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] max-w-2xl mx-auto">
            Ready to plan your camera system?
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-base md:text-lg max-w-xl mx-auto">
            Message us on WhatsApp with your site details — we&apos;ll help you pick the right cameras,
            NVR and PoE switch for the job.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-shine rounded-full px-8 py-4 text-sm font-semibold inline-flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp — {WHATSAPP_DISPLAY}
            </a>
            <a
              href="#products"
              className="btn-outline rounded-full px-8 py-4 text-sm font-semibold"
            >
              Browse Catalog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
