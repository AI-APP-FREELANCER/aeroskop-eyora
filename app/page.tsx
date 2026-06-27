"use client";
import { useState } from "react";
import Theme1 from "@/components/theme1/HomePage";
import Theme2 from "@/components/theme2/HomePage";
import Theme3 from "@/components/theme3/HomePage";

const themes = [
  {
    id: 1,
    label: "Clarity",
    desc: "Corporate Blue — Clean & Trustworthy",
    color: "#1e40af",
    active: "bg-blue-700 text-white shadow-lg shadow-blue-200",
    inactive: "bg-white text-blue-700 border border-blue-200 hover:bg-blue-50",
    dot: "bg-blue-700",
  },
  {
    id: 2,
    label: "Nova",
    desc: "Modern Teal — Vibrant & Innovative",
    color: "#0f766e",
    active: "bg-teal-700 text-white shadow-lg shadow-teal-200",
    inactive: "bg-white text-teal-700 border border-teal-200 hover:bg-teal-50",
    dot: "bg-teal-700",
  },
  {
    id: 3,
    label: "Prestige",
    desc: "Premium Gold — Luxury & Authority",
    color: "#92400e",
    active: "bg-amber-800 text-white shadow-lg shadow-amber-200",
    inactive: "bg-white text-amber-800 border border-amber-200 hover:bg-amber-50",
    dot: "bg-amber-800",
  },
];

export default function Home() {
  const [active, setActive] = useState(1);
  const current = themes.find((t) => t.id === active)!;

  return (
    <div>
      {/* Theme Switcher Bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-white/96 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden sm:block">
              Design Theme
            </span>
            <div className="flex gap-1.5">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    active === t.id ? t.active : t.inactive
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full inline-block transition-colors ${
                      active === t.id ? "bg-white/70" : t.dot
                    }`}
                  />
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <span className="text-xs text-slate-400 hidden md:block font-medium">
            {current.desc}
          </span>
        </div>
      </div>

      {/* Theme Panels */}
      <div className="pt-[50px]">
        <div className={active === 1 ? "block" : "hidden"}>
          <Theme1 />
        </div>
        <div className={active === 2 ? "block" : "hidden"}>
          <Theme2 />
        </div>
        <div className={active === 3 ? "block" : "hidden"}>
          <Theme3 />
        </div>
      </div>
    </div>
  );
}
