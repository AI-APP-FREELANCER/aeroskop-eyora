"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Star, Shield, ChevronRight, SlidersHorizontal, Zap } from "lucide-react";
import { CAMERA_PRODUCTS, Product } from "@/data/products";

const CATEGORIES = ["All", "PTZ Camera", "Fixed Bullet Camera", "Starlight Dome Camera", "AI Smart Camera", "Panoramic Fisheye"];

interface PLPPageProps {
  onSelectProduct: (p: Product) => void;
  onHome: () => void;
}

export default function PLPPage({ onSelectProduct, onHome }: PLPPageProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? CAMERA_PRODUCTS
      : CAMERA_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Page Hero Banner */}
      <div
        className="py-14 px-4"
        style={{ background: "linear-gradient(135deg, #2d6b0e 0%, #3d7c1a 50%, #6db928 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-lime-200 text-sm mb-4">
            <button onClick={onHome} className="hover:text-white transition-colors">Home</button>
            <ChevronRight size={14} />
            <span className="text-white font-semibold">Products</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-3">
            Security Camera <span className="text-lime-200">Range</span>
          </h1>
          <p className="text-lime-100 text-lg max-w-2xl">
            240+ professional-grade cameras engineered for every environment — from compact retail stores to sprawling smart city deployments.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6 text-lime-200 text-sm">
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-lime-300" /> AI-Powered Edge Computing</span>
            <span className="flex items-center gap-1.5"><Shield size={14} className="text-lime-300" /> NDAA Compliant</span>
            <span className="flex items-center gap-1.5"><Shield size={14} className="text-lime-300" /> 5-Year Warranty</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold mr-2">
            <SlidersHorizontal size={15} /> Filter by:
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? "text-white border-transparent shadow-md shadow-lime-200"
                  : "bg-white text-slate-600 border-slate-200 hover:border-lime-400 hover:text-lime-800"
              }`}
              style={activeCategory === cat ? { background: "linear-gradient(135deg,#2d6b0e,#6db928)" } : {}}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-slate-400 text-sm">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col"
              onClick={() => onSelectProduct(product)}
            >
              {/* Image */}
              <div className="relative bg-white h-56 flex items-center justify-center p-6 border-b border-slate-50">
                {product.badge && (
                  <span
                    className="absolute top-4 left-4 z-10 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: "linear-gradient(135deg,#2d6b0e,#6db928)" }}
                  >
                    {product.badge}
                  </span>
                )}
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain mix-blend-multiply"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="text-xs font-semibold text-lime-700 uppercase tracking-widest">{product.category}</span>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-slate-700">{product.rating}</span>
                    <span className="text-xs text-slate-400">({product.reviews})</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-1">{product.name}</h3>
                <p className="text-sm text-slate-500 mb-4 flex-1">{product.tagline}</p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
                  {Object.entries(product.specs).slice(0, 4).map(([k, v]) => (
                    <div key={k}>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wide font-semibold">{k}</div>
                      <div className="text-xs font-semibold text-slate-700 truncate">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-end pt-4 border-t border-slate-100">
                  <button
                    className="flex items-center gap-1.5 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all group-hover:gap-2.5"
                    style={{ background: "linear-gradient(135deg,#2d6b0e,#3d7c1a)" }}
                  >
                    View Details <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Contact Card */}
          <div
            className="rounded-2xl p-8 flex flex-col justify-between text-white"
            style={{ background: "linear-gradient(135deg, #2d6b0e 0%, #5aab22 100%)" }}
          >
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-black mb-2">Need Help Choosing?</h3>
              <p className="text-lime-100 text-sm leading-relaxed">
                Our security consultants will assess your site and recommend the perfect camera configuration.
              </p>
            </div>
            <button className="mt-6 bg-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-lime-50 transition-all flex items-center gap-2" style={{ color: "#2d6b0e" }}>
              Talk to an Expert <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 border-t border-slate-200 pt-10">
          <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-6">Every Aeroskop camera includes</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "5-Year Warranty", sub: "Parts & labour covered" },
              { label: "Free Firmware", sub: "Lifetime OTA updates" },
              { label: "24/7 Support", sub: "Dedicated tech line" },
              { label: "NDAA Compliant", sub: "Government approved" },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 bg-lime-50 rounded-xl border border-lime-100">
                <div className="font-bold text-lime-900 text-sm">{item.label}</div>
                <div className="text-slate-500 text-xs mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
