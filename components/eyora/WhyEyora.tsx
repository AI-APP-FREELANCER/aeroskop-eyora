"use client";

import { ShieldCheck, Cable, MapPin, Layers } from "lucide-react";
import { useReveal } from "@/lib/useReveal";
import ProductImage from "./ProductImage";

const REASONS = [
  { icon: ShieldCheck, title: "Metal, Weatherproof Builds", desc: "IP67 and IK10 rated housings across the outdoor range — built for Gulf heat, dust and impact." },
  { icon: Cable, title: "PoE-Simple Installs", desc: "Power and data over a single cable across cameras, NVRs and switches — fewer points of failure." },
  { icon: MapPin, title: "Bahrain Stock & Support", desc: "Based in Bahrain, with a catalog sized and stocked for local and regional deployments." },
  { icon: Layers, title: "Flexible NVR Scaling", desc: "6 to 32-channel recorders mean the same product family scales from a shop to a campus." },
];

export default function WhyEyora() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="why-eyora" className="px-5 md:px-8 py-24 md:py-32">
      <div className="max-w-7xl mx-auto eyora-surface rounded-[2.5rem] p-8 md:p-16 grid lg:grid-cols-2 gap-14 items-center overflow-hidden relative">
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-60"
          style={{ background: "var(--gradient-glow-overlay)" }}
        />
        <div className="relative reveal is-visible">
          <div className="eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
            Why Eyora
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Built for sites that don&apos;t get second chances.
          </h2>

          <div ref={ref} data-reveal-root className="mt-10 grid sm:grid-cols-2 gap-6">
            {REASONS.map((r) => (
              <div key={r.title} data-reveal className="reveal">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center eyora-badge !px-0 !py-0 mb-3">
                  <r.icon size={17} />
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">{r.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--text-secondary)] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square rounded-[2rem] overflow-hidden eyora-card product-tile-bg">
          <ProductImage
            src="/images/products/dome-camera-varifocal-family.png"
            alt="Eyora dome camera"
            sizes="(max-width: 1024px) 90vw, 480px"
            className="object-contain p-8"
          />
        </div>
      </div>
    </section>
  );
}
