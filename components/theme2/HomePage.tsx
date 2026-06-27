"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Camera,
  Server,
  Shield,
  Eye,
  Wifi,
  Zap,
  Globe,
  Award,
  Users,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle,
  TrendingUp,
  Menu,
  X,
  Search,
  ChevronDown,
  Play,
  Star,
  ChevronRight,
  Lock,
  Cpu,
  BarChart2,
  Video,
  HardDrive,
} from "lucide-react";
import { SOCIAL_ICONS } from "@/components/SocialIcons";
import PLPPage from "@/components/theme2/PLPPage";
import PDPPage from "@/components/theme2/PDPPage";
import type { Product } from "@/data/products";

const HERO_SLIDES = [
  {
    tag: "DeepSense AI 3.0",
    title: "See Everything.\nMiss Nothing.",
    sub: "Aeroskop's AI-powered surveillance platform delivers unmatched clarity, real-time intelligence, and edge-computing power.",
    cta: "Explore Our Products",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900&q=80",
  },
  {
    tag: "Enterprise NVR",
    title: "Storage That\nScales With You.",
    sub: "From 8 to 512-channel NVR systems — our enterprise-grade storage grows alongside your security infrastructure.",
    cta: "View Storage Range",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
  },
  {
    tag: "Smart City Platform",
    title: "Building Safer\nSmart Cities.",
    sub: "Unified city-scale surveillance, traffic management, and AI analytics on a single, open platform.",
    cta: "Discover the Platform",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80",
  },
];

const PRODUCT_CARDS = [
  {
    icon: Camera,
    label: "IP Cameras",
    sub: "4K–8K, PTZ, fisheye, thermal & bullet cameras",
    count: "240+",
    color: "from-lime-600 to-green-700",
    bg: "bg-lime-50",
    textColor: "text-lime-800",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&q=80",
  },
  {
    icon: HardDrive,
    label: "NVR & DVR",
    sub: "Scalable video recorders with AI-on-board",
    count: "80+",
    color: "from-lime-500 to-lime-700",
    bg: "bg-lime-50",
    textColor: "text-lime-700",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80",
  },
  {
    icon: Cpu,
    label: "AI Analytics",
    sub: "Edge computing with 30+ deep-learning algorithms",
    count: "30+",
    color: "from-green-600 to-lime-700",
    bg: "bg-lime-50",
    textColor: "text-lime-700",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&q=80",
  },
  {
    icon: Lock,
    label: "Access Control",
    sub: "Biometric readers, intercoms & door controllers",
    count: "120+",
    color: "from-lime-700 to-lime-500",
    bg: "bg-lime-50",
    textColor: "text-lime-800",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80",
  },
];

const SOLUTIONS = [
  { icon: "🏙️", title: "Smart City", desc: "City-wide unified surveillance & traffic analytics" },
  { icon: "🏦", title: "Banking & Finance", desc: "ATM monitoring, vault security & customer analytics" },
  { icon: "🏭", title: "Industrial", desc: "Hazardous zone monitoring & perimeter security" },
  { icon: "🚇", title: "Transportation", desc: "Station, airport & road traffic management" },
  { icon: "🏫", title: "Education", desc: "Campus safety with smart alerts & attendance" },
  { icon: "🏥", title: "Healthcare", desc: "Patient monitoring, asset tracking & access control" },
];

const FEATURES = [
  { icon: Eye, title: "360° Panoramic Vision", desc: "Multi-sensor cameras eliminate blind spots with complete scene coverage." },
  { icon: Zap, title: "Lightning-Fast Alerts", desc: "Sub-second event detection and push notifications before incidents escalate." },
  { icon: Shield, title: "Tamper-Proof Security", desc: "Encrypted streams, signed firmware, and automatic threat detection." },
  { icon: BarChart2, title: "Business Intelligence", desc: "Turn camera feeds into retail analytics, footfall data, and operational insights." },
  { icon: Globe, title: "Remote Management", desc: "Monitor and configure your entire estate from a single web dashboard." },
  { icon: Video, title: "4K Ultra Clarity", desc: "Forensic-quality video for reliable identification even in challenging light." },
];

const STATS = [
  { num: "50M+", label: "Devices Deployed" },
  { num: "180+", label: "Countries" },
  { num: "15K+", label: "Partners" },
  { num: "24/7", label: "Support" },
];

const NEWS = [
  {
    cat: "Product",
    date: "Jun 2025",
    title: "AX-9000 Panoramic 8K Camera Now Available",
    img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&q=80",
  },
  {
    cat: "Case Study",
    date: "May 2025",
    title: "How Aeroskop Secured Dubai's New Port Terminal",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
  },
  {
    cat: "Technology",
    date: "May 2025",
    title: "DeepSense 3.0: The Future of On-Device AI for CCTV",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
];

const TRUSTED = ["SAMSUNG", "MICROSOFT", "IBM", "CISCO", "DELL", "HONEYWELL"];

export default function Theme2() {
  const [slide, setSlide] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<"home" | "plp" | "pdp">("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const cur = HERO_SLIDES[slide];

  if (view === "plp") return <PLPPage onSelectProduct={(p) => { setSelectedProduct(p); setView("pdp"); }} onHome={() => setView("home")} />;
  if (view === "pdp" && selectedProduct) return <PDPPage product={selectedProduct} onBack={() => setView("plp")} onHome={() => setView("home")} onSelectProduct={(p) => setSelectedProduct(p)} />;

  return (
    <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Announcement bar */}
      <div
        className="text-white text-xs py-2.5 px-4 text-center font-medium"
        style={{ background: "linear-gradient(90deg, #2d6b0e, #6db928, #8ed621, #6db928, #2d6b0e)", backgroundSize: "400% 100%", animation: "gradientShift 6s ease infinite" }}
      >
        🚀 Aeroskop AX-9000 Series — World's First 8K AI PTZ Camera —{" "}
        <a href="#" className="underline font-bold">Learn More →</a>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-[50px] z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""} bg-white border-b border-slate-100`}>
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center select-none">
            <Image src="/eyora-logo.jpeg" alt="Eyora" width={140} height={42} className="h-10 w-auto object-contain" />
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {["Products", "Solutions", "Technology", "Support", "About"].map((l) => (
              <button key={l} onClick={l === "Products" ? () => setView("plp") : undefined} className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-lime-800 rounded-xl hover:bg-lime-50 transition-all">
                {l} {l === "Products" || l === "Solutions" ? <ChevronDown size={13} className="text-slate-400" /> : null}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button className="p-2.5 text-slate-500 hover:text-lime-800 hover:bg-lime-50 rounded-xl transition-all">
              <Search size={17} />
            </button>
            <button className="btn-shine px-5 py-2.5 text-white text-sm font-bold rounded-xl transition-all" style={{ background: "linear-gradient(135deg, #2d6b0e, #6db928)" }}>
              Get a Quote
            </button>
          </div>

          <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden p-2 text-slate-700">
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #6db928, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, #2d6b0e, transparent 70%)", transform: "translate(-30%, 30%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div key={`b-${slide}`} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in" style={{ background: "rgba(45,107,14,0.1)", color: "#2d6b0e", border: "1px solid rgba(45,107,14,0.2)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#6db928" }} />
              {cur.tag}
            </div>

            <h1 key={`t-${slide}`} className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 animate-fade-up whitespace-pre-line">
              {cur.title}
            </h1>

            <p key={`s-${slide}`} className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg animate-fade-up delay-100">
              {cur.sub}
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <button className="btn-shine flex items-center gap-2 px-7 py-4 text-white font-bold rounded-xl text-sm shadow-lg transition-all" style={{ background: "linear-gradient(135deg, #2d6b0e, #6db928)", boxShadow: "0 8px 24px rgba(45,107,14,0.35)" }}>
                {cur.cta} <ArrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 px-7 py-4 border-2 border-slate-200 text-slate-700 font-bold rounded-xl text-sm hover:border-lime-300 hover:text-lime-800 transition-all">
                <Play size={15} className="fill-current" /> Watch Demo
              </button>
            </div>

            {/* Slide dots */}
            <div className="flex gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} className="h-1.5 rounded-full transition-all duration-500" style={{ width: i === slide ? "32px" : "12px", background: i === slide ? "#2d6b0e" : "#cbd5e1" }} />
              ))}
            </div>
          </div>

          {/* Image side */}
          <div key={`i-${slide}`} className="relative animate-scale-in">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image src={cur.img} alt="Aeroskop" width={700} height={480} className="object-cover w-full h-[460px]" />
              <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(45,107,14,0.05), transparent)" }} />
            </div>
            {/* Floating badges */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-float border border-slate-100">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2d6b0e, #6db928)" }}>
                <Eye size={22} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">AI Accuracy</div>
                <div className="text-2xl font-black text-slate-900">99.7%</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-3.5 shadow-xl animate-float delay-300 border border-slate-100">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-slate-700">Live Monitoring</span>
              </div>
              <div className="text-xs text-slate-400">4,218 cameras online</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-4" style={{ background: "linear-gradient(135deg, #2d6b0e, #6db928)" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black text-white mb-1">{s.num}</div>
              <div className="text-lime-100 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2d6b0e" }}>Product Portfolio</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2 mb-3">The Complete Security Stack</h2>
            <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">Every piece engineered to work perfectly in isolation — and even better together.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCT_CARDS.map((p, i) => (
              <div key={i} className="card-lift group rounded-2xl border border-slate-100 overflow-hidden bg-white">
                <div className="img-zoom relative h-44 overflow-hidden">
                  <Image src={p.img} alt={p.label} fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }} />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-white text-xs font-bold bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">{p.count} models</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${p.bg}`}>
                    <p.icon size={20} className={p.textColor} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{p.label}</h3>
                  <p className="text-slate-500 text-sm mb-4 leading-relaxed">{p.sub}</p>
                  <button className={`flex items-center gap-1.5 text-sm font-semibold ${p.textColor} group-hover:gap-2.5 transition-all`}>
                    Explore Range <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2d6b0e" }}>Technology Edge</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2 mb-4">Built for the Future of Security</h2>
            <p className="text-slate-600 leading-relaxed mb-10 max-w-lg">Aeroskop integrates hardware excellence with software intelligence — so your team focuses on decisions, not monitoring screens.</p>
            <div className="grid grid-cols-2 gap-4">
              {FEATURES.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 border border-slate-100 card-lift-sm">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: "rgba(45,107,14,0.1)" }}>
                    <f.icon size={18} style={{ color: "#2d6b0e" }} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{f.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1605152276897-4f618f831968?w=700&q=80"
                alt="Security operations center"
                width={600}
                height={500}
                className="object-cover w-full h-[500px]"
              />
            </div>
            <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(45,107,14,0.08), transparent)" }} />
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2d6b0e" }}>Industries</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2 mb-3">Tailored for Every Sector</h2>
            <p className="text-slate-500 max-w-lg mx-auto">Aeroskop's platform adapts to the unique security demands of your industry.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTIONS.map((s, i) => (
              <div key={i} className="card-lift group bg-white border border-slate-100 rounded-2xl p-6 flex items-start gap-4 cursor-pointer hover:border-lime-200">
                <div className="text-3xl flex-shrink-0">{s.icon}</div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  <div className="flex items-center gap-1 mt-3 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#2d6b0e" }}>
                    Explore <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-14 bg-slate-50 px-4 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest mb-8">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-12">
            {TRUSTED.map((brand) => (
              <span key={brand} className="text-xl font-black text-slate-300 hover:text-slate-500 transition-colors cursor-pointer tracking-wider">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2d6b0e" }}>Press & Media</span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">Latest from Aeroskop</h2>
            </div>
            <button className="flex items-center gap-1.5 text-sm font-bold hover:gap-3 transition-all" style={{ color: "#2d6b0e" }}>
              All news <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {NEWS.map((n, i) => (
              <div key={i} className="card-lift group rounded-2xl overflow-hidden border border-slate-100 cursor-pointer">
                <div className="img-zoom relative h-48">
                  <Image src={n.img} alt={n.title} fill className="object-cover" />
                </div>
                <div className="p-5 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full" style={{ background: "rgba(45,107,14,0.1)", color: "#2d6b0e" }}>{n.cat}</span>
                    <span className="text-xs text-slate-400">{n.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-lime-800 transition-colors">{n.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(135deg, #061408, #0f2e06, #2d6b0e)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 text-lime-300 border border-lime-500/30 bg-lime-500/10">
            <span className="w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse" />
            Talk to Us Today
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5">Start Your Security Transformation</h2>
          <p className="text-lime-200 text-lg mb-10 max-w-xl mx-auto">Our security consultants will design a system that fits your space, budget, and risk profile — no generic proposals.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="btn-shine px-8 py-4 bg-white font-black text-slate-900 rounded-xl text-sm inline-flex items-center gap-2 hover:bg-lime-50 transition-all">
              <Phone size={16} /> Book a Free Consultation
            </button>
            <button className="px-8 py-4 border-2 border-lime-400/40 text-white font-bold rounded-xl text-sm hover:bg-white/5 transition-all">
              Download Product Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 pb-10 border-b border-slate-800">
          <div>
            <div className="mb-4">
              <Image src="/eyora-logo.jpeg" alt="Eyora" width={120} height={36} className="h-8 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed mb-5 text-slate-500">Next-generation security and surveillance for a safer, smarter world.</p>
            <div className="flex gap-2">
              {SOCIAL_ICONS.map((Icon, i) => (
                <button key={i} className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-lime-800 transition-colors">
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>
          {[
            { title: "Products", links: ["IP Cameras", "NVR Systems", "AI Analytics", "Access Control", "VMS Software"] },
            { title: "Solutions", links: ["Smart City", "Retail & Finance", "Transportation", "Healthcare", "Education"] },
            { title: "Company", links: ["About Aeroskop", "Careers", "Partners", "Press Room", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold mb-4 text-sm tracking-wide">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-lime-400 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>© 2025 Aeroskop Technologies Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-lime-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
