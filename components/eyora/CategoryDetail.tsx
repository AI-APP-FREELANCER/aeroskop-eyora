"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Camera, DoorClosed, Aperture, Wifi, HardDrive, Network, RadarIcon, Check, FileText } from "lucide-react";
import type { ProductCategory } from "@/lib/products";
import { productCategories } from "@/lib/products";
import { whatsappLink } from "@/lib/site";
import { useReveal } from "@/lib/useReveal";
import ProductImage from "./ProductImage";

const ICONS: Record<string, typeof Camera> = {
  "bullet-cameras": Camera,
  "dome-cameras": DoorClosed,
  "turret-cameras": Aperture,
  "ptz-cameras": RadarIcon,
  "wifi-cameras": Wifi,
  nvr: HardDrive,
  "poe-switches": Network,
};

export default function CategoryDetail({ category }: { category: ProductCategory }) {
  const ref = useReveal<HTMLDivElement>();
  const Icon = ICONS[category.slug] ?? Camera;
  const otherCategories = productCategories.filter((c) => c.slug !== category.slug);

  return (
    <>
      {/* Category hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-5 md:px-8 overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full opacity-70"
          style={{ background: "var(--gradient-glow-overlay)" }}
        />
        <div className="max-w-7xl mx-auto relative">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-sm mb-8">
            <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <Link href="/#products" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium">
              Products
            </Link>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="text-[var(--text-primary)] font-semibold">{category.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="animate-fade-up">
              <div className="eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
                <Icon size={13} />
                {category.eyebrow}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                {category.title}
              </h1>
              <p className="mt-5 text-base md:text-lg text-[var(--text-secondary)] max-w-lg leading-relaxed">
                {category.tagline}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="eyora-badge px-4 py-1.5 text-xs font-semibold">
                  {category.products.length} Model{category.products.length !== 1 ? "s" : ""}
                </span>
                {category.badge && (
                  <span className="eyora-badge px-4 py-1.5 text-xs font-semibold">{category.badge}</span>
                )}
              </div>
              <a
                href={whatsappLink(`Hi Eyora, I'd like a quote for your ${category.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-shine rounded-full px-7 py-3.5 text-sm font-semibold mt-9 inline-flex items-center gap-2"
              >
                Enquire About This Range
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative aspect-square max-w-md mx-auto rounded-[2rem] eyora-card overflow-hidden bg-white">
                <Image
                  src={category.heroImage}
                  alt={category.title}
                  fill
                  priority
                  quality={92}
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-contain p-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spec sheet grid */}
      <section className="px-5 md:px-8 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div ref={ref} data-reveal-root className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((p) => (
              <Link
                key={p.sku}
                href={`/products/${category.slug}/${p.sku}`}
                data-reveal
                className="reveal eyora-card rounded-3xl overflow-hidden flex flex-col group"
              >
                <div className="relative h-48 bg-white">
                  <ProductImage src={p.image} alt={p.name} sizes="(max-width: 768px) 90vw, 380px" className="object-contain p-7" />
                  <span className="absolute top-4 left-4 eyora-badge px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
                    {p.megapixel}
                  </span>
                  {p.datasheetFamily && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--text-accent)] bg-[var(--bg-tertiary)] border border-[var(--glass-border)] rounded-full px-2.5 py-1">
                      <FileText size={11} />
                      Datasheet
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1 product-tile-bg">
                  <p className="text-[11px] font-mono text-[var(--text-muted)] tracking-wide">{p.sku}</p>
                  <h3 className="mt-1 text-base font-bold text-[var(--text-primary)] leading-snug">{p.name}</h3>

                  <ul className="mt-4 space-y-1.5 flex-1">
                    {p.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)] leading-snug">
                        <Check size={13} className="text-[var(--text-accent)] shrink-0 mt-0.5" />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)] w-fit">
                    View Details & Specs
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="px-5 md:px-8 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-accent)] mb-5">
            Explore Other Ranges
          </p>
          <div className="flex flex-wrap gap-3">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                className="eyora-card rounded-full px-5 py-2.5 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
