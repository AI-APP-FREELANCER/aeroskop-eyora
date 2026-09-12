"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Box,
  MapPin,
  Shield,
  Smartphone,
  Clock,
  Eye,
  Radio,
  Zap,
  KeyRound,
  ShieldCheck,
  MoonStar,
  type LucideIcon,
} from "lucide-react";
import type { Industry } from "@/lib/industries";
import { industries } from "@/lib/industries";
import { whatsappLink } from "@/lib/site";
import ProductImage from "./ProductImage";

const ICONS: Record<string, LucideIcon> = {
  Box,
  MapPin,
  Shield,
  Smartphone,
  Clock,
  Eye,
  Radio,
  Zap,
  KeyRound,
  ShieldCheck,
  MoonStar,
};

function Icon({ name, size = 14 }: { name?: string; size?: number }) {
  const Cmp = name ? ICONS[name] : undefined;
  if (!Cmp) return null;
  return <Cmp size={size} />;
}

function splitColumns<T>(items: T[]): [T[], T[]] {
  const left: T[] = [];
  const right: T[] = [];
  items.forEach((item, i) => (i % 2 === 0 ? left : right).push(item));
  return [left, right];
}

function TextBlock({ ind }: { ind: Industry }) {
  const dark = ind.theme === "dark";
  return (
    <div>
      <div className={`eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5 ${dark ? "!bg-white/10 !border-white/20 !text-white" : ""}`}>
        {ind.badge}
      </div>
      <h1 className={`text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] ${dark ? "text-white" : "text-[var(--text-primary)]"}`}>
        {ind.headline}
      </h1>
      <p className={`mt-4 text-base leading-relaxed max-w-md ${dark ? "text-white/70" : "text-[var(--text-secondary)]"}`}>
        {ind.sub}
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a
          href={whatsappLink(`Hi Eyora, I'd like to discuss a ${ind.name} project.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-shine rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
        >
          Discuss Your Project
          <ArrowRight size={15} />
        </a>
        <Link
          href="/#products"
          className={`rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 border transition-colors ${
            dark ? "border-white/25 text-white hover:bg-white/10" : "btn-outline"
          }`}
        >
          View Products
          <ChevronDown size={15} />
        </Link>
      </div>

      {ind.checklist && (
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
          {ind.checklist.map((item) => (
            <span key={item} className={`inline-flex items-center gap-1.5 text-xs font-semibold ${dark ? "text-white/80" : "text-[var(--text-secondary)]"}`}>
              <span className="text-[var(--eyora-green-mid)]">✓</span>
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function PhotoPanel({ ind, aspect = "aspect-[4/3]" }: { ind: Industry; aspect?: string }) {
  return (
    <div className={`relative ${aspect} rounded-[1.5rem] overflow-hidden eyora-card`}>
      <ProductImage src={ind.image} alt={ind.imageAlt} priority sizes="(max-width: 1024px) 90vw, 640px" className="object-cover" />
      {ind.pins?.map((pin) => (
        <span
          key={pin.label}
          className="absolute inline-flex items-center gap-1.5 rounded-full bg-[var(--eyora-green-dark)]/90 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1.5 shadow-lg"
          style={{ top: pin.top, left: pin.left }}
        >
          <MapPin size={11} />
          {pin.label}
        </span>
      ))}
      {ind.statusBadge && (
        <div className="absolute bottom-4 right-4 eyora-card !bg-white/95 rounded-xl px-3.5 py-2.5 flex items-center gap-2.5">
          <span className="w-7 h-7 rounded-lg flex items-center justify-center eyora-badge !px-0 !py-0 shrink-0">
            <Icon name={ind.statusBadge.icon} size={13} />
          </span>
          <span>
            {ind.statusBadge.eyebrow && (
              <p className="text-[9px] uppercase tracking-wider text-[var(--text-muted)] font-semibold">{ind.statusBadge.eyebrow}</p>
            )}
            <p className="text-xs font-bold text-[var(--text-primary)]">{ind.statusBadge.text}</p>
          </span>
        </div>
      )}
    </div>
  );
}

function FeatureCards({ ind }: { ind: Industry }) {
  if (!ind.features) return null;
  const dark = ind.theme === "dark";
  const numbered = ind.features.some((f) => f.n && !f.n.startsWith("PRIORITY"));
  return (
    <div className={`grid gap-4 ${ind.features.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
      {ind.features.map((f) => (
        <div key={f.title} className={numbered ? "" : `rounded-2xl p-5 ${dark ? "bg-white/5 border border-white/10" : "eyora-card"}`}>
          {f.n && !numbered && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--eyora-green-mid)] mb-2">{f.n}</p>
          )}
          {f.icon && (
            <span className={`w-9 h-9 rounded-lg flex items-center justify-center eyora-badge !px-0 !py-0 mb-3 ${dark ? "!bg-white/10 !text-white" : ""}`}>
              <Icon name={f.icon} size={16} />
            </span>
          )}
          {f.n && numbered && (
            <p className={`text-xs font-bold ${dark ? "text-white/50" : "text-[var(--text-muted)]"}`}>{f.n}</p>
          )}
          <h3 className={`mt-1 text-sm font-bold ${dark ? "text-white" : "text-[var(--text-primary)]"}`}>{f.title}</h3>
          <p className={`mt-1.5 text-xs leading-relaxed ${dark ? "text-white/60" : "text-[var(--text-secondary)]"}`}>{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

function OfficeFloorplanArt() {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
      <rect x="0" y="0" width="100" height="100" fill="#f3ede0" />
      <rect x="2" y="4" width="96" height="92" rx="2" fill="none" stroke="#c9c0a8" strokeWidth="0.6" />

      {/* Partitions */}
      <line x1="30" y1="4" x2="30" y2="96" stroke="#c9c0a8" strokeWidth="0.5" />
      <line x1="66" y1="4" x2="66" y2="65" stroke="#c9c0a8" strokeWidth="0.5" />
      <line x1="66" y1="42" x2="98" y2="42" stroke="#c9c0a8" strokeWidth="0.5" />
      <rect x="30" y="65" width="36" height="31" fill="none" stroke="#c9c0a8" strokeWidth="0.5" />

      {/* Reception: entrance arc + desk */}
      <path d="M 2 46 A 10 10 0 0 1 12 56" fill="none" stroke="#9fae8e" strokeWidth="0.6" />
      <rect x="6" y="66" width="16" height="7" rx="1" fill="none" stroke="#7f8f6c" strokeWidth="0.6" />
      <circle cx="14" cy="60" r="1.1" fill="#7f8f6c" />

      {/* Office floor: desk clusters */}
      {[[36, 14], [48, 14], [60, 14], [36, 28], [48, 28], [60, 28]].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="8" height="5" rx="0.6" fill="none" stroke="#7f8f6c" strokeWidth="0.5" />
      ))}

      {/* Meeting rooms: two rooms with tables */}
      <ellipse cx="82" cy="20" rx="7" ry="3.2" fill="none" stroke="#7f8f6c" strokeWidth="0.6" />
      <ellipse cx="82" cy="55" rx="7" ry="3.2" fill="none" stroke="#7f8f6c" strokeWidth="0.6" />

      {/* Server room: rack icon */}
      {[40, 46, 52, 58].map((x) => (
        <rect key={x} x={x} y="76" width="4" height="14" rx="0.5" fill="none" stroke="#7f8f6c" strokeWidth="0.6" />
      ))}
      {[40, 46, 52, 58].map((x) => (
        <circle key={`dot-${x}`} cx={x + 2} cy="79" r="0.5" fill="var(--eyora-green-mid)" />
      ))}
    </svg>
  );
}

function Floorplan({ ind }: { ind: Industry }) {
  if (!ind.floorplan) return null;
  return (
    <div className="eyora-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-accent)]">{ind.floorplan.title}</p>
        <p className="text-xs text-[var(--text-muted)]">{ind.floorplan.subtitle}</p>
      </div>
      <div className="relative h-56 rounded-xl border border-[var(--glass-border)] overflow-hidden">
        <OfficeFloorplanArt />
        {ind.floorplan.points.map((pt) => (
          <span
            key={pt.label}
            className="absolute inline-flex items-center gap-1.5 -translate-x-1/2 -translate-y-1/2"
            style={{ top: pt.top, left: pt.left }}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--eyora-green-mid)] shrink-0 shadow-[0_0_0_3px_rgba(112,214,17,0.25)]" />
            <span className="rounded-full bg-white border border-[var(--glass-border)] text-[10px] font-semibold text-[var(--text-primary)] px-2.5 py-1 whitespace-nowrap shadow-sm">
              {pt.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ProcessAndStats({ ind }: { ind: Industry }) {
  if (!ind.processSteps || !ind.statTiles) return null;
  return (
    <>
      <div className="rounded-2xl px-6 py-4 flex flex-wrap items-center gap-x-3 gap-y-2 bg-white/[0.07] border border-white/10">
        {ind.processSteps.map((step, i) => (
          <span key={step} className="flex items-center gap-3">
            <span className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-[var(--eyora-green-light)]">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm font-semibold text-white">{step}</span>
            </span>
            {i < ind.processSteps!.length - 1 && <ArrowRight size={13} className="text-white/30" />}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {ind.statTiles.map((s) => (
          <div key={s.label} className="rounded-2xl p-5 bg-white/[0.07] border border-white/10">
            <p className="text-2xl font-bold text-[var(--eyora-green-light)]">{s.value}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-white/50">{s.label}</p>
          </div>
        ))}
      </div>
    </>
  );
}

function CoverageAndProducts({ ind }: { ind: Industry }) {
  const dark = ind.theme === "dark";
  const [left, right] = splitColumns(ind.coverageAreas);
  const cardCls = dark ? "rounded-2xl p-6 bg-white/[0.07] border border-white/10" : "eyora-card rounded-2xl p-6";
  const labelCls = dark ? "text-[var(--eyora-green-light)]" : "text-[var(--text-accent)]";
  const itemCls = dark ? "text-white/80" : "text-[var(--text-secondary)]";
  const numCls = dark ? "text-[var(--eyora-green-light)]" : "text-[var(--text-accent)]";

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className={cardCls}>
        <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${labelCls}`}>{ind.coverageTitle}</p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
          {[left, right].map((col, ci) => (
            <ul key={ci} className="space-y-2.5">
              {col.map((area) => (
                <li key={area} className={`flex items-start gap-2 text-sm ${itemCls}`}>
                  <span className={`text-xs font-bold ${numCls}`}>{String(ind.coverageAreas.indexOf(area) + 1).padStart(2, "0")}</span>
                  {area}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className={cardCls}>
        <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${labelCls}`}>{ind.productsTitle}</p>
        <div className="flex flex-wrap gap-2">
          {ind.recommendedProducts.map((p) => (
            <span
              key={p}
              className={`text-xs font-semibold rounded-full px-3.5 py-1.5 border ${
                dark ? "border-white/20 text-white/90" : "border-[var(--glass-border)] text-[var(--text-secondary)]"
              }`}
            >
              {p}
            </span>
          ))}
        </div>
        <p className={`mt-5 text-xs leading-relaxed ${itemCls}`}>
          <span className={`font-bold ${dark ? "text-white" : "text-[var(--text-primary)]"}`}>{ind.requirementLabel}</span>{" "}
          {ind.requirementText}
        </p>
      </div>
    </div>
  );
}

export default function IndustryDetail({ industry }: { industry: Industry }) {
  const ind = industry;
  const dark = ind.theme === "dark";

  return (
    <>
      <section className="relative pt-28 pb-8 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative overflow-hidden rounded-3xl px-7 py-8 md:px-10 md:py-10"
            style={{ background: "linear-gradient(120deg, var(--eyora-green-dark) 0%, var(--eyora-green-deep) 100%)" }}
          >
            <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--eyora-green-light)]">Industry Template</p>
            <h1 className="mt-1 text-2xl md:text-3xl font-bold text-white">{ind.name}</h1>
            <span className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 text-7xl md:text-8xl font-bold text-white/10 select-none">
              {ind.number}
            </span>
          </div>

          <div className="mt-4 -mx-5 md:mx-0 px-5 md:px-0 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {industries.map((i) => (
              <Link
                key={i.slug}
                href={`/industry/${i.slug}`}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors inline-flex items-center gap-1.5 ${
                  i.slug === ind.slug
                    ? "text-white"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
                style={i.slug === ind.slug ? { background: "var(--eyora-green-dark)" } : undefined}
              >
                <span className="opacity-60">{i.number}</span>
                {i.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 md:px-8 pb-10">
        <div className="max-w-7xl mx-auto">
          <div
            className={`rounded-[2rem] p-6 md:p-10 ${dark ? "text-white" : "eyora-surface"}`}
            style={dark ? { background: "linear-gradient(160deg, var(--eyora-green-dark) 0%, var(--eyora-green-deep) 100%)" } : undefined}
          >
            {ind.heroVariant === "split-photo-right" && (
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <TextBlock ind={ind} />
                <PhotoPanel ind={ind} />
              </div>
            )}

            {ind.heroVariant === "split-photo-left" && (
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <PhotoPanel ind={ind} />
                <TextBlock ind={ind} />
              </div>
            )}

            {ind.heroVariant === "overlay" && (
              <div>
                <div className="relative aspect-[16/9] rounded-[1.5rem] overflow-hidden">
                  <ProductImage src={ind.image} alt={ind.imageAlt} priority sizes="(max-width: 1024px) 95vw, 1100px" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="eyora-badge !bg-white/15 !border-white/25 !text-white px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-4">
                      {ind.badge}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] max-w-2xl">{ind.headline}</h1>
                  </div>
                  {ind.statusBadge && (
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[var(--text-primary)] text-xs font-semibold px-3.5 py-2">
                      <Icon name={ind.statusBadge.icon} size={13} />
                      {ind.statusBadge.text}
                    </div>
                  )}
                </div>

                <div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-sm">{ind.sub}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <a
                        href={whatsappLink(`Hi Eyora, I'd like to discuss a ${ind.name} project.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary btn-shine rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
                      >
                        Discuss Your Project
                        <ArrowRight size={15} />
                      </a>
                      <Link href="/#products" className="btn-outline rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2">
                        View Products
                        <ChevronDown size={15} />
                      </Link>
                    </div>
                  </div>
                  <FeatureCards ind={ind} />
                </div>
              </div>
            )}

            {ind.heroVariant === "stacked" && (
              <div>
                <div className="grid md:grid-cols-2 gap-8 items-end mb-8">
                  <div>
                    <div className={`eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5 ${dark ? "!bg-white/10 !border-white/20 !text-white" : ""}`}>
                      {ind.badge}
                    </div>
                    <h1 className={`text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] ${dark ? "text-white" : "text-[var(--text-primary)]"}`}>
                      {ind.headline}
                    </h1>
                  </div>
                  <div className="md:text-right">
                    <p className={`text-base leading-relaxed ${dark ? "text-white/70" : "text-[var(--text-secondary)]"}`}>{ind.sub}</p>
                    <div className="mt-5 flex flex-wrap md:justify-end items-center gap-3">
                      <a
                        href={whatsappLink(`Hi Eyora, I'd like to discuss a ${ind.name} project.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary btn-shine rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
                      >
                        Discuss Your Project
                        <ArrowRight size={15} />
                      </a>
                      <Link
                        href="/#products"
                        className={`rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 border transition-colors ${
                          dark ? "border-white/25 text-white hover:bg-white/10" : "btn-outline"
                        }`}
                      >
                        View Products
                        <ChevronDown size={15} />
                      </Link>
                    </div>
                  </div>
                </div>

                <PhotoPanel ind={ind} aspect="aspect-[21/9]" />

                <div className="mt-8 space-y-6">
                  {ind.processSteps && ind.statTiles ? (
                    <div className="grid lg:grid-cols-[1fr] gap-6">
                      <ProcessAndStats ind={ind} />
                    </div>
                  ) : (
                    <FeatureCards ind={ind} />
                  )}
                </div>
              </div>
            )}

            {(ind.heroVariant === "split-photo-left" || ind.heroVariant === "split-photo-right") && ind.features && (
              <div className="mt-10">
                <FeatureCards ind={ind} />
              </div>
            )}

            {ind.floorplan && (
              <div className="mt-6">
                <Floorplan ind={ind} />
              </div>
            )}

            <div className="mt-10">
              <CoverageAndProducts ind={ind} />
            </div>

            <div className="mt-8">
              <Link
                href="/#industries"
                className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                  dark ? "text-[var(--eyora-green-light)]" : "text-[var(--text-accent)]"
                }`}
              >
                <ArrowLeft size={15} />
                Back to all industries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
