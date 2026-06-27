"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Shield,
  Camera,
  Server,
  Eye,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle,
  Globe,
  Award,
  Users,
  Zap,
  Menu,
  X,
  Search,
  ChevronDown,
  Play,
  Star,
  HardDrive,
  Lock,
  Cpu,
  BarChart2,
  MapPin,
  Wifi,
} from "lucide-react";
import { SOCIAL_ICONS } from "@/components/SocialIcons";
import PLPPage from "@/components/theme3/PLPPage";
import PDPPage from "@/components/theme3/PDPPage";
import type { Product } from "@/data/products";

const HERO_SLIDES = [
  {
    eyebrow: "Introducing the AX-9000 Series",
    title: "Where Precision\nMeets Power.",
    sub: "Aeroskop's flagship 8K AI surveillance platform — engineered for organizations that accept no compromise.",
    primary: "Discover the AX-9000",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900&q=80",
  },
  {
    eyebrow: "Enterprise-Grade Storage",
    title: "Infinite Scale.\nZero Compromise.",
    sub: "Our enterprise NVR architectures deliver petabyte-scale storage with sub-millisecond retrieval and 100% uptime.",
    primary: "Explore Storage Range",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
  },
  {
    eyebrow: "Smart Infrastructure",
    title: "The Intelligence\nBehind Safe Cities.",
    sub: "Unify thousands of cameras, sensors, and analytics tools on one elegant platform built for tomorrow's cities.",
    primary: "View City Solutions",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80",
  },
];

const PRODUCTS = [
  { icon: Camera, name: "IP Cameras", range: "4K – 8K Precision", desc: "Thermal, PTZ, fisheye & fixed cameras across 240+ models", img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80", tag: "Flagship" },
  { icon: HardDrive, name: "NVR Storage", range: "8 – 512 Channels", desc: "Enterprise NVR and DVR systems with intelligent tiering", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80", tag: "New" },
  { icon: Cpu, name: "AI Analytics", range: "30+ Algorithms", desc: "On-device deep learning for real-time behavioral insights", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80", tag: null },
  { icon: Lock, name: "Access Control", range: "120+ Models", desc: "Biometric access, smart intercoms & integrated card readers", img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80", tag: null },
];

const SOLUTIONS = [
  { icon: "🏙️", title: "Smart City", sub: "City-scale unified surveillance & traffic command" },
  { icon: "🏦", title: "Banking & Finance", sub: "Vault-to-ATM security with advanced anomaly detection" },
  { icon: "🏭", title: "Critical Infrastructure", sub: "24/7 perimeter defense for power, water, & logistics" },
  { icon: "🚇", title: "Transportation", sub: "Rail, metro, port & airport integrated security" },
  { icon: "🏥", title: "Healthcare", sub: "Patient safety, asset protection & controlled access" },
  { icon: "🏫", title: "Education", sub: "Campus-wide safety systems with attendance analytics" },
];

const PILLARS = [
  { icon: Shield, title: "Military-Grade Encryption", desc: "AES-256 encrypted video streams and secure boot prevent unauthorized access at every layer." },
  { icon: Eye, title: "Neural Vision AI", desc: "Our proprietary DeepSense AI achieves 99.7% recognition accuracy — detecting threats before they become incidents." },
  { icon: Award, title: "Global Compliance", desc: "NDAA, CE, FCC, and GDPR compliant — meeting the highest standards across every market we serve." },
  { icon: Zap, title: "Edge-First Architecture", desc: "On-device intelligence means real-time alerts, lower latency, and zero cloud dependency for critical systems." },
];

const STATS = [
  { value: "50M+", label: "Devices Deployed Globally" },
  { value: "180+", label: "Countries Served" },
  { value: "15K+", label: "Certified Partners" },
  { value: "5 Yrs", label: "Warranty on All Devices" },
];

const NEWS = [
  {
    cat: "Product Launch",
    date: "June 2025",
    title: "Aeroskop AX-9000: The World's First 8K AI Panoramic Camera",
    img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=700&q=80",
  },
  {
    cat: "Case Study",
    date: "May 2025",
    title: "Securing Dubai's New Port Terminal: A 10,000-Camera Deployment",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=80",
  },
  {
    cat: "Award",
    date: "May 2025",
    title: "Aeroskop Named 'Security Innovator of the Year' — ISC West 2025",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80",
  },
];

const TRUSTED = ["SAMSUNG", "IBM", "MICROSOFT", "CISCO", "HONEYWELL", "DELL"];

const GOLD = "#b45309";
const GOLD_LIGHT = "#d97706";
const GOLD_PAL = "#fef3c7";
const NAVY = "#0f172a";
const NAVY2 = "#1e293b";

export default function Theme3() {
  const [slide, setSlide] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<"home" | "plp" | "pdp">("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const cur = HERO_SLIDES[slide];

  if (view === "plp") return <PLPPage onSelectProduct={(p) => { setSelectedProduct(p); setView("pdp"); }} onHome={() => setView("home")} />;
  if (view === "pdp" && selectedProduct) return <PDPPage product={selectedProduct} onBack={() => setView("plp")} onHome={() => setView("home")} onSelectProduct={(p) => setSelectedProduct(p)} />;

  return (
    <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Top bar */}
      <div className="py-2 px-4 text-xs" style={{ background: NAVY, color: "#94a3b8" }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><Phone size={11} /> +1 800 AEROSKOP</span>
            <span className="flex items-center gap-1.5"><Mail size={11} /> enterprise@aeroskop.com</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-amber-400 transition-colors">Partner Portal</a>
            <span>|</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Distributor Login</a>
            <span>|</span>
            <span className="text-amber-400 font-semibold">🇺🇸 EN</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className={`sticky top-[50px] z-50 transition-all duration-300 ${scrolled ? "shadow-xl" : "border-b"} bg-white`} style={{ borderColor: "#f1f5f9" }}>
        <div className="max-w-7xl mx-auto px-4 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center select-none">
            <Image src="/ASK_BLUE_LOGO.png" alt="Aeroskop" width={160} height={48} className="h-12 w-auto object-contain" />
          </div>

          <div className="hidden lg:flex items-center gap-0.5">
            {["Products", "Solutions", "Technology", "Support", "About Us"].map((l) => (
              <button key={l} onClick={l === "Products" ? () => setView("plp") : undefined} className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-700 rounded-xl hover:bg-amber-50 transition-all group" style={{ ["--hover" as string]: GOLD }}>
                <span className="group-hover:text-amber-700 transition-colors">{l}</span>
                {(l === "Products" || l === "Solutions") && <ChevronDown size={13} className="text-slate-400 group-hover:text-amber-500 transition-colors" />}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <button className="p-2.5 rounded-xl text-slate-400 hover:text-amber-700 hover:bg-amber-50 transition-all">
              <Search size={18} />
            </button>
            <button
              className="btn-shine px-6 py-2.5 text-white text-sm font-bold rounded-xl transition-all"
              style={{ background: `linear-gradient(135deg, ${NAVY}, ${NAVY2})` }}
            >
              Request a Demo
            </button>
            <button
              className="px-6 py-2.5 text-sm font-bold rounded-xl border-2 transition-all hover:bg-amber-50"
              style={{ borderColor: GOLD, color: GOLD }}
            >
              Get a Quote
            </button>
          </div>

          <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden p-2 text-slate-700">
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1e293b 60%, #0f172a 100%)` }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(${GOLD_LIGHT} 1px, transparent 1px), linear-gradient(to right, ${GOLD_LIGHT} 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, transparent, ${GOLD_LIGHT}, transparent)` }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}60, transparent)` }} />

        {/* Glow */}
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${GOLD_LIGHT}, transparent 70%)`, transform: "translate(50%, -50%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div key={`e-${slide}`} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in" style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}50`, color: GOLD_LIGHT }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GOLD_LIGHT }} />
              {cur.eyebrow}
            </div>
            <h1 key={`h-${slide}`} className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6 animate-fade-up whitespace-pre-line">
              {cur.title}
            </h1>
            <p key={`p-${slide}`} className="text-slate-300 text-lg leading-relaxed mb-10 max-w-md animate-fade-up delay-100">
              {cur.sub}
            </p>
            <div className="flex flex-wrap gap-3 mb-14">
              <button
                className="btn-shine flex items-center gap-2 px-7 py-4 text-white font-bold rounded-xl text-sm transition-all"
                style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, boxShadow: `0 8px 24px ${GOLD}50` }}
              >
                {cur.primary} <ArrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 px-7 py-4 font-bold rounded-xl text-sm border transition-all text-white hover:bg-white/5" style={{ borderColor: `${GOLD}40` }}>
                <Play size={14} className="fill-current" /> Watch Overview
              </button>
            </div>
            <div className="flex gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} className="h-1 rounded-full transition-all duration-500" style={{ width: i === slide ? "36px" : "12px", background: i === slide ? GOLD_LIGHT : "#475569" }} />
              ))}
            </div>
          </div>

          <div key={`img-${slide}`} className="relative animate-scale-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ border: `1px solid ${GOLD}20` }}>
              <Image src={cur.img} alt="Aeroskop" width={700} height={480} className="object-cover w-full h-[460px]" priority />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${NAVY}60, transparent 50%)` }} />
            </div>
            {/* Stat cards */}
            <div className="absolute -bottom-6 -left-5 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-3 animate-float border" style={{ borderColor: "#f1f5f9" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${GOLD}20, ${GOLD_LIGHT}30)` }}>
                <Star size={20} style={{ color: GOLD }} />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500">Global Rank</div>
                <div className="text-xl font-black" style={{ color: NAVY }}>#1 AI Camera Brand</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3.5 shadow-2xl animate-float delay-300 border" style={{ borderColor: "#f1f5f9" }}>
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
                <span className="text-xs font-bold text-slate-800">System Status</span>
              </div>
              <div className="text-xs text-slate-400">99.9% uptime · 50M+ cameras</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black mb-1" style={{ color: NAVY }}>{s.value}</div>
              <div className="text-sm font-medium text-slate-400">{s.label}</div>
              {i < STATS.length - 1 && <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-slate-200" />}
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Product Portfolio</span>
              <h2 className="text-4xl font-black mt-1" style={{ color: NAVY }}>Engineered for Excellence</h2>
            </div>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">Every product bearing the Aeroskop name has passed rigorous testing under extreme conditions.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.map((p, i) => (
              <div key={i} className="card-lift group bg-white rounded-2xl overflow-hidden border border-slate-100">
                <div className="img-zoom relative h-52 overflow-hidden">
                  <Image src={p.img} alt={p.name} fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${NAVY}60, transparent)` }} />
                  {p.tag && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full text-white" style={{ background: GOLD }}>
                      {p.tag}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-0.5">{p.range}</div>
                    <div className="text-base font-black text-white">{p.name}</div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <button className="flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all" style={{ color: GOLD }}>
                    View Collection <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ border: `1px solid ${GOLD}20` }}>
              <Image
                src="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=700&q=80"
                alt="Security operations"
                width={640}
                height={520}
                className="object-cover w-full h-[520px]"
              />
            </div>
            {/* Gold accent frame */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-2xl pointer-events-none" style={{ border: `2px solid ${GOLD}30` }} />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl pointer-events-none" style={{ border: `2px solid ${GOLD}20` }} />
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Why Aeroskop</span>
            <h2 className="text-4xl font-black mt-2 mb-4" style={{ color: NAVY }}>Security Without Compromise</h2>
            <p className="text-slate-600 leading-relaxed mb-10">We don't build cameras. We build trust — through rigorous engineering, relentless testing, and a commitment to being the world's most reliable security platform.</p>
            <div className="grid grid-cols-1 gap-5">
              {PILLARS.map((p, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all" style={{ background: `${GOLD}15` }}>
                    <p.icon size={20} style={{ color: GOLD }} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1" style={{ color: NAVY }}>{p.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 px-4" style={{ background: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Industries</span>
            <h2 className="text-4xl font-black mt-2" style={{ color: NAVY }}>Where Aeroskop Excels</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTIONS.map((s, i) => (
              <div key={i} className="card-lift group bg-white rounded-2xl p-6 border border-slate-100 cursor-pointer hover:border-amber-200 transition-colors">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-base font-bold mb-1.5" style={{ color: NAVY }}>{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.sub}</p>
                <div className="flex items-center gap-1.5 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: GOLD }}>
                  Learn more <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted */}
      <section className="py-14 px-4 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest font-bold mb-8 text-slate-400">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-12">
            {TRUSTED.map((b) => (
              <span key={b} className="text-xl font-black text-slate-200 hover:text-slate-400 transition-colors cursor-pointer tracking-widest">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>Media & Press</span>
              <h2 className="text-3xl font-black mt-1" style={{ color: NAVY }}>Latest Intelligence</h2>
            </div>
            <button className="flex items-center gap-1.5 text-sm font-bold hover:gap-3 transition-all" style={{ color: GOLD }}>
              View All <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {NEWS.map((n, i) => (
              <div key={i} className="card-lift group bg-white rounded-2xl overflow-hidden border border-slate-100 cursor-pointer">
                <div className="img-zoom relative h-52 overflow-hidden">
                  <Image src={n.img} alt={n.title} fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${NAVY}50, transparent)` }} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full" style={{ background: `${GOLD}15`, color: GOLD }}>{n.cat}</span>
                    <span className="text-xs text-slate-400">{n.date}</span>
                  </div>
                  <h3 className="text-sm font-bold leading-snug group-hover:text-amber-700 transition-colors" style={{ color: NAVY }}>{n.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #1e293b 100%)` }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(${GOLD} 1px, transparent 1px), linear-gradient(to right, ${GOLD} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}60, transparent)` }} />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6" style={{ background: `${GOLD}20`, border: `1px solid ${GOLD}40`, color: GOLD_LIGHT }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: GOLD_LIGHT }} />
            Enterprise Partnership
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Built for Those Who\nDemand the Best.
          </h2>
          <p className="text-slate-300 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Aeroskop's enterprise team will design a bespoke security architecture for your organization — precision-engineered, future-proof, and backed by world-class support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="btn-shine px-8 py-4 font-black text-white rounded-xl text-sm inline-flex items-center gap-2 transition-all"
              style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`, boxShadow: `0 8px 32px ${GOLD}50` }}
            >
              <Phone size={16} /> Schedule Executive Briefing
            </button>
            <button className="px-8 py-4 border font-bold rounded-xl text-sm text-white hover:bg-white/5 transition-all" style={{ borderColor: `${GOLD}40` }}>
              Download Corporate Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4" style={{ background: "#060d19", color: "#64748b" }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div>
            <div className="mb-5">
              <Image src="/ASK_BLUE_LOGO.png" alt="Aeroskop" width={160} height={48} className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed mb-5 text-slate-500 max-w-[220px]">Precision security intelligence for organizations that accept no compromise.</p>
            <div className="flex gap-2">
              {SOCIAL_ICONS.map((Icon, i) => (
                <button key={i} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors" style={{ background: "#1e293b" }}>
                  <Icon size={14} className="text-slate-400" />
                </button>
              ))}
            </div>
          </div>
          {[
            { title: "Products", links: ["IP Cameras", "NVR Storage", "AI Analytics", "Access Control", "VMS Platform"] },
            { title: "Solutions", links: ["Smart City", "Banking & Finance", "Transportation", "Healthcare", "Critical Infrastructure"] },
            { title: "Enterprise", links: ["About Aeroskop", "Executive Team", "Partner Program", "Investor Relations", "Contact Us"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold mb-4 text-sm tracking-wide">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-amber-400 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-600">
          <p>© 2025 Aeroskop Technologies Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
