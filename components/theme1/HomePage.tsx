"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Camera,
  Server,
  Shield,
  ChevronRight,
  ChevronLeft,
  Play,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Wifi,
  Eye,
  Zap,
  Globe,
  Award,
  Users,
  TrendingUp,
  Menu,
  X,
  Search,
  ChevronDown,
} from "lucide-react";
import { SOCIAL_ICONS } from "@/components/SocialIcons";
import PLPPage from "@/components/theme1/PLPPage";
import PDPPage from "@/components/theme1/PDPPage";
import type { Product } from "@/data/products";

const NAV_LINKS = [
  { label: "Products", mega: true },
  { label: "Solutions" },
  { label: "Technology" },
  { label: "Support" },
  { label: "About Us" },
];

const HERO_SLIDES = [
  {
    badge: "New Release 2025",
    title: "AI-Powered\nSurveillance\nRedefined",
    subtitle:
      "Aeroskop's next-gen IP cameras deliver 4K clarity with real-time AI analytics — protecting what matters most.",
    cta: "Explore Products",
    ctaSecondary: "Watch Demo",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900&q=80",
    accent: "#1e40af",
  },
  {
    badge: "Enterprise Storage",
    title: "Scalable NVR\nStorage\nArchitecture",
    subtitle:
      "From 8 to 512 channels — our storage servers scale with your business while never compromising performance.",
    cta: "View Storage Solutions",
    ctaSecondary: "Get a Quote",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
    accent: "#1d4ed8",
  },
  {
    badge: "Smart City Ready",
    title: "Intelligent City\nSurveillance\nPlatform",
    subtitle:
      "Deploy city-wide surveillance networks with centralized management, AI-driven insights, and 99.9% uptime.",
    cta: "Explore Platform",
    ctaSecondary: "Case Studies",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=80",
    accent: "#1e3a8a",
  },
];

const PRODUCTS = [
  {
    icon: Camera,
    title: "IP Cameras",
    desc: "4K/8K AI-enabled PTZ & fixed cameras for every environment",
    count: "240+ Models",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&q=80",
    tag: "Best Seller",
  },
  {
    icon: Server,
    title: "NVR & Storage",
    desc: "Enterprise-grade network video recorders with intelligent storage",
    count: "80+ Models",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80",
    tag: "New",
  },
  {
    icon: Eye,
    title: "AI Analytics",
    desc: "Real-time facial recognition, crowd density & behavior analysis",
    count: "30+ Algorithms",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&q=80",
    tag: "Featured",
  },
  {
    icon: Wifi,
    title: "Access Control",
    desc: "Smart door controllers, biometric readers & intercoms",
    count: "120+ Models",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&q=80",
    tag: null,
  },
];

const SOLUTIONS = [
  { label: "Retail & Banking", icon: "🏦", color: "from-blue-50 to-blue-100" },
  {
    label: "Transportation",
    icon: "🚇",
    color: "from-indigo-50 to-indigo-100",
  },
  { label: "Education", icon: "🎓", color: "from-sky-50 to-sky-100" },
  { label: "Healthcare", icon: "🏥", color: "from-blue-50 to-cyan-100" },
  { label: "Smart City", icon: "🌆", color: "from-indigo-50 to-blue-100" },
  { label: "Industrial", icon: "🏭", color: "from-slate-50 to-blue-100" },
];

const STATS = [
  { value: "180+", label: "Countries Served", icon: Globe },
  { value: "50M+", label: "Devices Deployed", icon: Camera },
  { value: "15K+", label: "Partners Worldwide", icon: Users },
  { value: "99.9%", label: "Uptime Guarantee", icon: TrendingUp },
];

const WHY_US = [
  {
    icon: Shield,
    title: "Cyber-Secure by Design",
    desc: "End-to-end encryption, regular firmware audits, and GDPR-compliant data handling built into every device.",
  },
  {
    icon: Zap,
    title: "AI at the Edge",
    desc: "On-device deep learning means faster alerts, lower bandwidth, and zero cloud dependency for critical decisions.",
  },
  {
    icon: Award,
    title: "Industry Certified",
    desc: "CE, FCC, NDAA-compliant products meeting the strictest global standards for security infrastructure.",
  },
  {
    icon: CheckCircle,
    title: "5-Year Warranty",
    desc: "Confidence-backed hardware with dedicated regional support teams available 24/7 across 40+ countries.",
  },
];

const NEWS = [
  {
    date: "Jun 12, 2025",
    category: "Product Launch",
    title: "Aeroskop Unveils the AX-9000 Series: 8K Panoramic AI Camera",
    img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&q=80",
  },
  {
    date: "May 28, 2025",
    category: "Partnership",
    title: "Aeroskop Partners with Dubai Smart City Initiative for 10,000 Unit Deployment",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
  },
  {
    date: "May 15, 2025",
    category: "Award",
    title: "Aeroskop Wins 'Security Innovation of the Year' at ISC West 2025",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  },
];

export default function Theme1() {
  const [slide, setSlide] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<"home" | "plp" | "pdp">("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = HERO_SLIDES[slide];

  if (view === "plp") return <PLPPage onSelectProduct={(p) => { setSelectedProduct(p); setView("pdp"); }} onHome={() => setView("home")} />;
  if (view === "pdp" && selectedProduct) return <PDPPage product={selectedProduct} onBack={() => setView("plp")} onHome={() => setView("home")} onSelectProduct={(p) => setSelectedProduct(p)} />;

  return (
    <div className="bg-white font-sans">
      {/* Top Bar */}
      <div className="bg-blue-950 text-blue-200 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={11} /> +1 800 AEROSKOP</span>
            <span className="flex items-center gap-1"><Mail size={11} /> info@aeroskop.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span>🇺🇸 EN</span>
            <span className="text-blue-400">|</span>
            <a href="#" className="hover:text-white transition-colors">Partner Portal</a>
            <a href="#" className="hover:text-white transition-colors">Distributor Login</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`sticky top-[50px] z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white border-b border-slate-100"}`}>
        <div className="max-w-7xl mx-auto px-4 py-0 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center select-none">
            <Image src="/ASK_BLUE_LOGO.png" alt="Aeroskop" width={160} height={48} className="h-12 w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button key={link.label} onClick={link.label === "Products" ? () => setView("plp") : undefined} className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-all group">
                {link.label}
                {link.mega && <ChevronDown size={14} className="text-slate-400 group-hover:text-blue-500 transition-colors" />}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button className="p-2 text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all">
              <Search size={18} />
            </button>
            <button className="btn-shine px-5 py-2 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-all">
              Get a Quote
            </button>
          </div>

          <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden p-2 text-slate-700">
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden min-h-[88vh] flex items-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text */}
          <div className="text-white">
            <div key={`badge-${slide}`} className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 animate-fade-in">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
              {current.badge}
            </div>
            <h1 key={`title-${slide}`} className="text-5xl lg:text-6xl font-black leading-tight mb-6 animate-fade-up whitespace-pre-line">
              {current.title}
            </h1>
            <p key={`sub-${slide}`} className="text-blue-200 text-lg leading-relaxed mb-8 max-w-md animate-fade-up delay-100">
              {current.subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn-shine flex items-center gap-2 px-7 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all text-sm shadow-xl">
                {current.cta} <ArrowRight size={16} />
              </button>
              <button className="flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm">
                <Play size={16} className="fill-current" /> {current.ctaSecondary}
              </button>
            </div>

            {/* Slide dots */}
            <div className="flex gap-2 mt-10">
              {HERO_SLIDES.map((_, i) => (
                <button key={i} onClick={() => setSlide(i)} className={`h-1.5 rounded-full transition-all duration-500 ${i === slide ? "w-8 bg-white" : "w-4 bg-white/30"}`} />
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div key={`img-${slide}`} className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src={current.image}
                alt="Aeroskop product"
                width={700}
                height={460}
                className="object-cover w-full h-[420px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-6 bg-white rounded-xl p-4 shadow-2xl flex items-center gap-3 animate-float">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Camera size={20} className="text-blue-700" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Active Cameras</div>
                <div className="text-xl font-black text-blue-900">50M+</div>
              </div>
            </div>
            <div className="absolute -top-5 -right-6 bg-white rounded-xl p-3 shadow-2xl animate-float delay-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-slate-700">Live AI Detection</span>
              </div>
              <div className="text-xs text-slate-500 mt-0.5">99.7% Accuracy</div>
            </div>
          </div>
        </div>

        {/* Scroll chevron */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <s.icon size={20} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-blue-200 text-xs font-medium">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">Our Portfolio</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2 mb-3">Complete Security Ecosystem</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From edge cameras to enterprise storage — every component engineered for reliability and intelligence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((p, i) => (
              <div key={i} className="card-lift bg-white rounded-2xl overflow-hidden border border-slate-100 group">
                <div className="img-zoom relative h-48">
                  <Image src={p.img} alt={p.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {p.tag && (
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {p.tag}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <p.icon size={18} className="text-blue-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{p.count}</span>
                    <button className="flex items-center gap-1 text-sm font-semibold text-blue-700 group-hover:gap-2 transition-all">
                      View all <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">Industries</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2 mb-3">Solutions by Sector</h2>
            <p className="text-slate-500 max-w-lg mx-auto">Purpose-built configurations and analytics for your specific industry challenges.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {SOLUTIONS.map((s, i) => (
              <div key={i} className={`card-lift-sm bg-gradient-to-br ${s.color} rounded-2xl p-6 border border-white cursor-pointer group`}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-base font-bold text-slate-800 mb-1">{s.label}</h3>
                <div className="flex items-center gap-1 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-300 text-sm font-bold uppercase tracking-widest">AI Technology</span>
            <h2 className="text-4xl font-black text-white mt-2 mb-4">Intelligence Built Into Every Pixel</h2>
            <p className="text-blue-200 leading-relaxed mb-6">Our proprietary DeepSense™ AI engine processes video streams in real time, detecting anomalies, tracking objects across cameras, and generating actionable alerts — all on-device.</p>
            <ul className="space-y-3">
              {["Face & License Plate Recognition", "Crowd Density & Heat Mapping", "Perimeter Intrusion Detection", "Abandoned Object Alerting"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle size={16} className="text-blue-400 flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <button className="btn-shine mt-8 px-7 py-3.5 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all text-sm inline-flex items-center gap-2">
              Discover DeepSense™ AI <ArrowRight size={15} />
            </button>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80"
                alt="AI Analytics"
                width={600}
                height={380}
                className="object-cover w-full h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Aeroskop */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">Why Us</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2">Why Leading Organizations Choose Aeroskop</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_US.map((w, i) => (
              <div key={i} className="card-lift-sm bg-white rounded-2xl p-6 border border-slate-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <w.icon size={22} className="text-blue-700" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{w.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">Latest</span>
              <h2 className="text-3xl font-black text-slate-900 mt-1">News & Updates</h2>
            </div>
            <button className="flex items-center gap-2 text-blue-700 font-semibold text-sm hover:gap-3 transition-all">
              View all news <ArrowRight size={15} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {NEWS.map((n, i) => (
              <div key={i} className="card-lift bg-white rounded-2xl overflow-hidden border border-slate-100 group cursor-pointer">
                <div className="img-zoom h-48 relative">
                  <Image src={n.img} alt={n.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wide">{n.category}</span>
                    <span className="text-xs text-slate-400">{n.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">{n.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-950 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">Ready to Secure Your Business?</h2>
          <p className="text-blue-300 text-lg mb-8">Talk to a security expert and get a customized solution designed for your organization.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="btn-shine px-8 py-4 bg-white text-blue-900 font-bold rounded-xl text-sm hover:bg-blue-50 transition-all inline-flex items-center gap-2">
              <Phone size={16} /> Schedule a Demo
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 text-white font-bold rounded-xl text-sm hover:bg-blue-500/10 transition-all">
              Download Product Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div>
            <div className="mb-4">
              <Image src="/ASK_BLUE_LOGO.png" alt="Aeroskop" width={160} height={48} className="h-10 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed mb-4">Advanced security and surveillance technology powering safer environments worldwide.</p>
            <div className="flex gap-3">
              {SOCIAL_ICONS.map((Icon, i) => (
                <button key={i} className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Icon size={14} className="text-slate-400" />
                </button>
              ))}
            </div>
          </div>
          {[
            { title: "Products", links: ["IP Cameras", "NVR Systems", "AI Analytics", "Access Control", "Video Management"] },
            { title: "Solutions", links: ["Smart City", "Retail & Banking", "Transportation", "Healthcare", "Education"] },
            { title: "Company", links: ["About Aeroskop", "Careers", "Press Room", "Partners", "Contact Us"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p>© 2025 Aeroskop Technologies Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
