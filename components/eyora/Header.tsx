"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calculator, Menu, X } from "lucide-react";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site";

const NAV_LINKS = [
  { label: "Products", href: "/#products" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/#industries" },
  { label: "Why Eyora", href: "/#why-eyora" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div className="max-w-6xl mx-auto eyora-card rounded-full flex items-center justify-between h-16 px-3 md:px-3 md:pl-6">
        <a href="/#top" className="flex items-center gap-2 shrink-0">
          <Image src="/images/eyora-logo.png" alt="Eyora" width={159} height={30} priority className="h-6 md:h-7 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm font-medium">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/ai-storage-calculator"
            className="btn-outline rounded-full pl-4 pr-5 py-2.5 text-sm font-semibold inline-flex items-center gap-2"
          >
            <Calculator size={15} />
            AI Storage Calculator
          </Link>
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-shine rounded-full px-5 py-2.5 text-sm"
          >
            WhatsApp Us
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="lg:hidden w-10 h-10 shrink-0 flex items-center justify-center rounded-full"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X size={20} className="text-[var(--text-primary)]" />
          ) : (
            <Menu size={20} className="text-[var(--text-primary)]" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden max-w-6xl mx-auto mt-2 eyora-card rounded-3xl px-6 py-6 flex flex-col gap-4 animate-fade-in">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-[var(--text-secondary)] text-sm font-medium">
              {link.label}
            </a>
          ))}
          <Link
            href="/ai-storage-calculator"
            onClick={() => setMenuOpen(false)}
            className="btn-outline rounded-full px-5 py-2.5 text-sm font-semibold text-center inline-flex items-center justify-center gap-2"
          >
            <Calculator size={15} />
            AI Storage Calculator
          </Link>
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary rounded-full px-5 py-2.5 text-sm text-center"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}
