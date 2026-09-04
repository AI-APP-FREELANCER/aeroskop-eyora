import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { productCategories } from "@/lib/products";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE, WHATSAPP_DISPLAY } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="px-5 md:px-8 pt-16 pb-10 border-t border-[var(--glass-border)]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.3fr_1fr_1fr] gap-12">
        <div>
          <Image
            src="/images/eyora-logo.png"
            alt="Eyora"
            width={159}
            height={30}
            className="h-8 w-auto"
          />
          <p className="mt-4 text-sm text-[var(--text-secondary)] max-w-xs leading-relaxed">
            Metal-bodied IP cameras, NVR systems and PoE networking gear. Based in Bahrain.
          </p>
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-accent)]"
          >
            <MessageCircle size={15} />
            WhatsApp: {WHATSAPP_DISPLAY}
          </a>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
            Products
          </h4>
          <ul className="mt-4 space-y-2.5">
            {productCategories.map((cat) => (
              <li key={cat.slug}>
                <a href="#products" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  {cat.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
            Company
          </h4>
          <ul className="mt-4 space-y-2.5">
            <li><a href="/about" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">About</a></li>
            <li><a href="#technology" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Technology</a></li>
            <li><a href="#industries" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Industries</a></li>
            <li><a href="#why-eyora" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Why Eyora</a></li>
            <li><a href="#contact" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-6 glow-divider" />

      <div className="max-w-7xl mx-auto mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[var(--text-muted)]">© {new Date().getFullYear()} Eyora. All rights reserved.</p>
        <p className="text-xs text-[var(--text-muted)]">Bahrain</p>
      </div>
    </footer>
  );
}
