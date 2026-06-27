"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Star, Shield, ChevronRight, SlidersHorizontal, Award } from "lucide-react";
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
    <div className="bg-stone-950 min-h-screen font-sans">
      {/* Page Hero Banner */}
      <div
        className="py-14 px-4"
        style={{ background: "linear-gradient(135deg, #1c1008 0%, #3d1f05 50%, #92400e 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-amber-400/70 text-sm mb-4">
            <button onClick={onHome} className="hover:text-amber-300 transition-colors">Home</button>
            <ChevronRight size={14} />
            <span className="text-amber-300 font-semibold">Products</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white mb-3">
            Security Camera{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#f59e0b,#d97706)" }}
            >
              Collection
            </span>
          </h1>
          <p className="text-amber-100/70 text-lg max-w-2xl">
            240+ professional-grade cameras engineered for elite environments — where performance, precision, and prestige define every deployment.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6 text-amber-400/70 text-sm">
            <span className="flex items-center gap-1.5"><Award size={14} className="text-amber-400" /> Military-Grade Sensors</span>
            <span className="flex items-center gap-1.5"><Shield size={14} className="text-amber-400" /> NDAA Compliant</span>
            <span className="flex items-center gap-1.5"><Shield size={14} className="text-amber-400" /> 5-Year Warranty</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center gap-2 text-stone-400 text-sm font-semibold mr-2">
            <SlidersHorizontal size={15} /> Filter by:
          </div>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                activeCategory === cat
                  ? "text-stone-900 border-transparent"
                  : "bg-stone-900 text-stone-300 border-stone-700 hover:border-amber-600 hover:text-amber-400"
              }`}
              style={
                activeCategory === cat
                  ? { background: "linear-gradient(135deg,#f59e0b,#d97706)" }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-stone-500 text-sm">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-700/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/30 transition-all duration-300 cursor-pointer flex flex-col"
              onClick={() => onSelectProduct(product)}
            >
              {/* Image — white product background for clear cutout */}
              <div className="relative bg-white h-56 flex items-center justify-center p-6">
                {product.badge && (
                  <span
                    className="absolute top-4 left-4 z-10 text-stone-900 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}
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
                  <span
                    className="text-xs font-semibold uppercase tracking-widest bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(90deg,#f59e0b,#d97706)" }}
                  >
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 shrink-0">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-stone-300">{product.rating}</span>
                    <span className="text-xs text-stone-500">({product.reviews})</span>
                  </div>
                </div>
                <h3 className="text-lg font-black text-white mb-1">{product.name}</h3>
                <p className="text-sm text-stone-400 mb-4 flex-1">{product.tagline}</p>

                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-5">
                  {Object.entries(product.specs).slice(0, 4).map(([k, v]) => (
                    <div key={k}>
                      <div className="text-[10px] text-stone-500 uppercase tracking-wide font-semibold">{k}</div>
                      <div className="text-xs font-semibold text-stone-300 truncate">{v}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-end pt-4 border-t border-stone-800">
                  <button
                    className="flex items-center gap-1.5 text-stone-900 text-xs font-bold px-4 py-2.5 rounded-xl transition-all group-hover:gap-2.5"
                    style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}
                  >
                    View Details <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Contact Card */}
          <div
            className="rounded-2xl p-8 flex flex-col justify-between"
            style={{ background: "linear-gradient(135deg,#3d1f05,#92400e)" }}
          >
            <div>
              <div className="w-12 h-12 bg-amber-400/20 rounded-xl flex items-center justify-center mb-4">
                <Award size={24} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-black text-white mb-2">Bespoke Consultation</h3>
              <p className="text-amber-200/70 text-sm leading-relaxed">
                Our elite security consultants will design a tailored surveillance solution for your property or enterprise.
              </p>
            </div>
            <button
              className="mt-6 font-bold text-stone-900 text-sm px-5 py-3 rounded-xl transition-all flex items-center gap-2 hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}
            >
              Request Consultation <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16 border-t border-stone-800 pt-10">
          <p className="text-center text-stone-500 text-sm font-semibold uppercase tracking-widest mb-6">Every Aeroskop camera includes</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "5-Year Warranty", sub: "Parts & labour covered" },
              { label: "Free Firmware", sub: "Lifetime OTA updates" },
              { label: "24/7 Support", sub: "Dedicated tech line" },
              { label: "NDAA Compliant", sub: "Government approved" },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 bg-stone-900 border border-stone-800 rounded-xl">
                <div className="font-bold text-amber-400 text-sm">{item.label}</div>
                <div className="text-stone-500 text-xs mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
