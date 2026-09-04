"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, DoorClosed, Aperture, Wifi, HardDrive, Network, ArrowRight } from "lucide-react";
import { productCategories, totalProductCount } from "@/lib/products";
import { useReveal } from "@/lib/useReveal";

const ICONS: Record<string, typeof Camera> = {
  "bullet-cameras": Camera,
  "dome-cameras": DoorClosed,
  "turret-cameras": Aperture,
  "wifi-cameras": Wifi,
  nvr: HardDrive,
  "poe-switches": Network,
};

export default function ProductPortfolio() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="products" className="px-5 md:px-8 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl reveal is-visible">
          <div className="eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
            Product Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            {totalProductCount} models across six product lines.
          </h2>
        </div>

        {/* Quick-nav strip */}
        <div className="mt-10 -mx-5 md:mx-0 px-5 md:px-0 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="eyora-card rounded-full pl-2 pr-4 py-2 flex items-center gap-3 shrink-0 hover:border-[var(--glass-border-hover)] transition-colors"
            >
              <span className="relative w-8 h-8 rounded-full bg-white overflow-hidden shrink-0">
                <Image src={cat.heroImage} alt="" fill sizes="32px" className="object-contain p-1" />
              </span>
              <span className="text-sm font-semibold text-[var(--text-primary)] whitespace-nowrap">{cat.title}</span>
              <span className="text-xs text-[var(--text-muted)]">{cat.products.length}</span>
            </Link>
          ))}
        </div>

        <div ref={ref} data-reveal-root className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {productCategories.map((cat) => {
            const Icon = ICONS[cat.slug] ?? Camera;
            return (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                data-reveal
                className="reveal eyora-card rounded-3xl overflow-hidden flex flex-col group"
              >
                <div className="relative h-56 bg-white img-zoom">
                  <Image
                    src={cat.heroImage}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-contain p-8"
                  />
                  {cat.badge && (
                    <span className="absolute top-4 left-4 eyora-badge px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
                      {cat.badge}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)] bg-[var(--bg-tertiary)] border border-[var(--glass-border)] rounded-full px-2.5 py-1">
                    {cat.products.length} Model{cat.products.length !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 product-tile-bg">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center eyora-badge !px-0 !py-0 shrink-0">
                      <Icon size={15} />
                    </div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-accent)]">
                      {cat.eyebrow}
                    </p>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-[var(--text-primary)]">{cat.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                    {cat.tagline}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)] w-fit">
                    View All Models
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
