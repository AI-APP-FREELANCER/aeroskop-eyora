"use client";

import { Store, Warehouse, GraduationCap, UtensilsCrossed, HardHat, Home } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const SIRA_NOTE = "We work with SIRA-certified installation partners.";

const INDUSTRIES = [
  { icon: Store, title: "Retail & Showrooms", desc: "Glare at glass entrances, till coverage, stock room." },
  { icon: Warehouse, title: "Warehousing & Logistics", desc: "Loading bays, long sightlines, low light — this is where varifocal earns its place." },
  { icon: GraduationCap, title: "Schools & Nurseries", desc: "Corridors, gates, retention policy and access control.", note: SIRA_NOTE },
  { icon: UtensilsCrossed, title: "Restaurants & Cafés", desc: "Kitchen, till, delivery entrance, grease and heat on the housing." },
  { icon: HardHat, title: "Construction & Yards", desc: "Dust, heat, temporary power — IP67 and IK10 do the arguing." },
  { icon: Home, title: "Villas & Residential Compounds", desc: "Gates, driveways and boundary walls, with clear footage after dark.", note: SIRA_NOTE },
];

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
          {INDUSTRIES.map((ind) => (
            <div key={ind.title} data-reveal className="reveal eyora-card rounded-2xl p-7">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center eyora-badge !px-0 !py-0">
                <ind.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[var(--text-primary)]">{ind.title}</h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{ind.desc}</p>
              {ind.note && (
                <p className="mt-3 text-xs font-semibold text-[var(--text-accent)]">{ind.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
