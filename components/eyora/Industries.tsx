"use client";

import { Store, Building2, Home, Warehouse, GraduationCap, Hotel } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const INDUSTRIES = [
  { icon: Store, title: "Retail & Commercial", desc: "Entrance, till and stockroom coverage with clear low-light footage." },
  { icon: Building2, title: "Offices & Corporate", desc: "Discreet dome and turret cameras for lobbies, floors and car parks." },
  { icon: Home, title: "Residential Compounds", desc: "Perimeter bullet cameras and Wi-Fi cube cameras for gates and villas." },
  { icon: Warehouse, title: "Warehousing & Logistics", desc: "Wide-angle NVR setups covering loading docks and long aisles." },
  { icon: GraduationCap, title: "Education", desc: "Campus-wide coverage with centralized NVR recording and PoE simplicity." },
  { icon: Hotel, title: "Hospitality", desc: "Vandal-resistant IK10 domes for corridors, entrances and back-of-house." },
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
