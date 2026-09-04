import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Eyora on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center animate-pulse-glow"
      style={{ background: "var(--gradient-eyora-brand)" }}
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="#ffffff" aria-hidden="true">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.31.646 4.47 1.767 6.31L4 29l7.86-1.73A11.93 11.93 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm6.965 16.94c-.297.84-1.47 1.54-2.415 1.74-.643.137-1.482.246-4.307-.925-3.617-1.498-5.944-5.166-6.126-5.406-.176-.24-1.463-1.948-1.463-3.717 0-1.769.926-2.638 1.254-3.001.328-.363.716-.454.955-.454.239 0 .478.002.687.012.22.01.517-.084.808.617.297.72 1.01 2.489 1.098 2.67.088.181.147.395.03.635-.117.24-.176.39-.352.6-.176.212-.37.472-.528.634-.176.181-.36.377-.155.74.205.363.912 1.505 1.958 2.437 1.345 1.2 2.48 1.572 2.843 1.748.363.176.575.147.788-.088.212-.234 1.01-1.18 1.28-1.582.27-.403.54-.335.911-.2.372.135 2.352 1.108 2.754 1.31.402.2.67.3.769.469.098.17.098.98-.198 1.816Z" />
      </svg>
    </a>
  );
}
