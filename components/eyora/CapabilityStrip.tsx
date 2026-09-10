import { Aperture, HardDrive, ShieldCheck, Network } from "lucide-react";

const CAPABILITIES = [
  { icon: Aperture, value: "2–8MP", label: "Resolution range" },
  { icon: HardDrive, value: "4–32 CH", label: "NVR channel options" },
  { icon: ShieldCheck, value: "IP67 / IK10", label: "Weatherproof & vandal rated" },
  { icon: Network, value: "4–24 Port", label: "PoE switch range" },
];

export default function CapabilityStrip() {
  return (
    <section className="px-5 md:px-8 -mt-4 relative z-10">
      <div className="max-w-7xl mx-auto eyora-card rounded-3xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--glass-border)]">
        {CAPABILITIES.map((c) => (
          <div key={c.label} className="px-6 py-8 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 eyora-badge !bg-[rgba(112,214,17,0.1)]">
              <c.icon size={18} className="text-[var(--text-accent)]" />
            </div>
            <p className="text-2xl md:text-3xl font-bold eyora-text-gradient font-[var(--font-heading)]">{c.value}</p>
            <p className="mt-1 text-xs md:text-sm text-[var(--text-secondary)]">{c.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
