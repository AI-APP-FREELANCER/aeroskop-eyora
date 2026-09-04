"use client";

import Link from "next/link";
import { Store, Building2, Home, Warehouse, GraduationCap, Hotel, ArrowRight, type LucideIcon } from "lucide-react";
import { industries } from "@/lib/industries";
import { useReveal } from "@/lib/useReveal";

const ICONS: Record<string, LucideIcon> = {
  retail: Store,
  corporate: Building2,
  residential: Home,
  logistics: Warehouse,
  schools: GraduationCap,
  hospitality: Hotel,
};

export default function Industries() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="industries" className="px-5 md:px-8 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl reveal is-visible">
          <div className="eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
            Where It Fits
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            One catalog, every kind of site.
          </h2>
        </div>

        <div ref={ref} data-reveal-root className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const IndIcon = ICONS[ind.slug];
            return (
              <Link
                key={ind.slug}
                href={`/industry/${ind.slug}`}
                data-reveal
                className="reveal eyora-card rounded-2xl p-7 group"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center eyora-badge !px-0 !py-0">
                  <IndIcon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[var(--text-primary)]">{ind.name}</h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{ind.sub}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[var(--text-accent)]">
                  View Template
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
