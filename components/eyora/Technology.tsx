"use client";

import Image from "next/image";
import { Sun, Aperture, ShieldCheck, Zap, HardDrive, Wifi } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const FEATURES = [
  { icon: Sun, title: "Real WDR 120dB", desc: "True wide dynamic range keeps faces and plates readable against bright backlight and harsh contrast." },
  { icon: Aperture, title: "Motorized Varifocal Lenses", desc: "2.7–13.5mm motorized VF options let installers fine-tune field of view on site, no lens swap needed." },
  { icon: ShieldCheck, title: "IP67 & IK10 Housings", desc: "Metal, weatherproof, vandal-resistant bodies rated for outdoor exposure and impact." },
  { icon: Zap, title: "PoE + DC12V Power", desc: "Single-cable PoE installs, with DC12V fallback for flexible power planning." },
  { icon: HardDrive, title: "H.265 Smart NVRs", desc: "6 to 32-channel recorders with H.265 compression and PoE ports built in, cutting storage and cabling costs." },
  { icon: Wifi, title: "Dual-Band Wi-Fi Cube Cameras", desc: "2.4 & 5GHz cube cameras with PIR detection for cable-free indoor installs." },
];

export default function Technology() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="technology" className="px-5 md:px-8 py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal is-visible">
          <div className="eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
            Built In, Not Bolted On
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Hardware that holds up on site.
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-lg">
            Every spec below ships standard across the relevant Eyora range — not a premium add-on.
          </p>

          <div ref={ref} data-reveal-root className="mt-10 grid sm:grid-cols-2 gap-5">
            {FEATURES.map((f) => (
              <div key={f.title} data-reveal className="reveal eyora-card rounded-2xl p-5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center eyora-badge !px-0 !py-0 mb-3">
                  <f.icon size={16} />
                </div>
                <h3 className="text-sm font-bold text-[var(--text-primary)]">{f.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--text-secondary)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute inset-0 rounded-[2rem] scale-90"
            style={{ background: "var(--gradient-surface)", boxShadow: "var(--shadow-glow-md)" }}
          />
          <div className="relative aspect-[4/5] rounded-[2rem] eyora-card overflow-hidden product-tile-bg">
            <Image
              src="/images/products/fisheye-camera.png"
              alt="Eyora 360 panoramic camera"
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-contain p-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
