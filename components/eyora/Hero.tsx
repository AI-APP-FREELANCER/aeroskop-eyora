"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const SLIDES = [
  {
    eyebrow: "Perimeter Security",
    title: "Usable footage.\nAny weather.",
    sub: "Metal-bodied cameras with True WDR — IP67 and IK10 rated to hold a clear line of sight through glare, rain and total darkness.",
    cta: "Explore Bullet Cameras",
    ctaHref: "#products",
    image: "/images/products/bullet-camera-fixed.png",
    badges: [
      { label: "True WDR", value: "120dB", pos: "top-10 -left-5" },
      { label: "Housing", value: "IP67 & IK10", pos: "bottom-28 -right-5" },
      { label: "Warranty", value: "5 Years", pos: "bottom-8 -right-5" },
    ],
  },
  {
    eyebrow: "Vendor Agnostic NVR",
    title: "Footage you can\ncount on.",
    sub: "Superior performance, backed by a 5-year warranty.",
    cta: "Explore NVR",
    ctaHref: "#products",
    image: "/images/products/nvr.png",
    badges: [
      { label: "Channels", value: "4 – 32 CH", pos: "top-10 -left-5" },
      { label: "Warranty", value: "5 Years", pos: "top-10 -right-5" },
      { label: "Compression", value: "Ultra 265, H.264 & H.265", pos: "bottom-12 -left-5" },
    ],
  },
  {
    eyebrow: "PoE Networking",
    title: "One cable.\nPower, data, done.",
    sub: "Gigabit PoE switches from 4 to 24 ports power your entire camera estate over a single Ethernet run.",
    supportLine: "Full load. Full speed. Every port.",
    cta: "See the Range",
    ctaHref: "#products",
    image: "/images/products/poe-switch-16port.png",
    badges: [
      { label: "Warranty", value: "5 Years", pos: "top-10 -left-5" },
      { label: "Standard", value: "802.3af/at", pos: "bottom-12 -right-5" },
    ],
  },
];

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  const cur = SLIDES[slide];

  return (
    <section id="top" className="relative pt-32 pb-16 md:pt-44 md:pb-24 px-5 md:px-8 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full opacity-70"
        style={{ background: "var(--gradient-glow-overlay)" }}
      />

      {/* Vertical trust ribbon */}
      <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <div className="eyora-card rounded-l-2xl px-2.5 py-5 flex flex-col items-center gap-2">
          <ShieldCheck size={16} className="text-[var(--text-accent)]" />
          <span className="trust-ribbon text-[10px] font-bold uppercase text-[var(--text-secondary)]">
            Based in Bahrain
          </span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div key={`badge-${slide}`} className="animate-fade-up eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--eyora-green-mid)] animate-pulse-glow" />
            {cur.eyebrow}
          </div>

          <h1
            key={`title-${slide}`}
            className="animate-fade-up delay-100 text-4xl md:text-6xl font-bold leading-[1.08] tracking-tight text-[var(--text-primary)] whitespace-pre-line min-h-[2.2em] md:min-h-[2.2em]"
          >
            {cur.title.split("\n").map((line, i) =>
              i === 1 ? (
                <span key={i} className="eyora-text-gradient block">{line}</span>
              ) : (
                <span key={i} className="block">{line}</span>
              )
            )}
          </h1>

          <p key={`sub-${slide}`} className="animate-fade-up delay-200 mt-6 text-base md:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
            {cur.sub}
          </p>

          {cur.supportLine && (
            <p key={`support-${slide}`} className="animate-fade-up delay-200 mt-2 text-sm md:text-base font-semibold text-[var(--text-accent)]">
              {cur.supportLine}
            </p>
          )}

          <div className="animate-fade-up delay-300 mt-9 flex flex-wrap items-center gap-4">
            <a href={cur.ctaHref} className="btn-primary btn-shine rounded-full px-7 py-3.5 text-sm font-semibold">
              {cur.cta}
            </a>
            <a
              href={whatsappLink("Hi Eyora, I'd like a quote for a full camera + NVR system.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-pill text-sm font-semibold text-[var(--text-primary)]"
            >
              Get a Quote
              <span className="cta-arrow">
                <ArrowRight size={15} />
              </span>
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.eyebrow}
                aria-label={`Show ${s.eyebrow} slide`}
                onClick={() => setSlide(i)}
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: i === slide ? "34px" : "12px",
                  background: i === slide ? "var(--eyora-green-mid)" : "rgba(61,139,8,0.2)",
                }}
              />
            ))}
          </div>
        </div>

        <div key={`img-${slide}`} className="relative animate-scale-in">
          <div className="relative aspect-square max-w-lg mx-auto">
            <div
              className="absolute inset-0 rounded-[2rem] scale-95"
              style={{ background: "var(--gradient-surface)", boxShadow: "var(--shadow-glow-lg)" }}
            />
            <div className="absolute inset-0 rounded-[2rem] eyora-card overflow-hidden">
              <Image
                src={cur.image}
                alt={cur.eyebrow}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-contain p-10"
              />
            </div>

            {cur.badges.map((b, i) => (
              <div
                key={b.label}
                className={`absolute ${b.pos} eyora-card rounded-2xl px-4 py-3 animate-float`}
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">{b.label}</p>
                <p className="text-lg font-bold text-[var(--text-primary)]">{b.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
