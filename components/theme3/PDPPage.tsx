"use client";
import Image from "next/image";
import {
  ArrowLeft,
  Star,
  CheckCircle,
  Shield,
  ChevronRight,
  ArrowRight,
  Download,
  Phone,
  Package,
  Award,
} from "lucide-react";
import { CAMERA_PRODUCTS, Product } from "@/data/products";

interface PDPPageProps {
  product: Product;
  onBack: () => void;
  onHome: () => void;
  onSelectProduct: (p: Product) => void;
}

export default function PDPPage({ product, onBack, onHome, onSelectProduct }: PDPPageProps) {
  const related = CAMERA_PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-stone-950 min-h-screen font-sans">
      {/* Breadcrumb */}
      <div
        className="text-amber-400/70 text-sm px-4 py-3"
        style={{ background: "linear-gradient(135deg,#1c1008,#3d1f05)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button onClick={onHome} className="hover:text-amber-300 transition-colors">Home</button>
          <ChevronRight size={13} />
          <button onClick={onBack} className="hover:text-amber-300 transition-colors">Products</button>
          <ChevronRight size={13} />
          <span className="text-amber-300 font-semibold">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-amber-400 text-sm font-semibold hover:gap-1 transition-all mb-8"
        >
          <ArrowLeft size={16} /> Back to Products
        </button>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Panel — white background for product clarity */}
          <div className="bg-white rounded-2xl p-8 flex items-center justify-center min-h-[400px] relative shadow-2xl shadow-amber-900/20">
            {product.badge && (
              <span
                className="absolute top-6 left-6 text-stone-900 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md"
                style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}
              >
                {product.badge}
              </span>
            )}
            <div className="relative w-full h-80">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain mix-blend-multiply"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col justify-center">
            <span
              className="text-xs font-bold uppercase tracking-widest mb-2 bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg,#f59e0b,#d97706)" }}
            >
              {product.category}
            </span>
            <h1 className="text-4xl font-black text-white mb-2">{product.name}</h1>
            <p className="text-xl text-stone-400 font-medium mb-4">{product.tagline}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i <= Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-stone-700 fill-stone-700"}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-stone-300">{product.rating}</span>
              <span className="text-sm text-stone-500">({product.reviews} reviews)</span>
            </div>

            <p className="text-stone-400 leading-relaxed mb-8">{product.description}</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                className="flex items-center gap-2 text-stone-900 font-bold px-7 py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-amber-900/40 hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}
              >
                <Phone size={16} /> Request a Quote
              </button>
              <button className="flex items-center gap-2 border-2 border-amber-700 text-amber-400 font-bold px-7 py-3.5 rounded-xl hover:bg-amber-900/20 transition-all text-sm">
                <Download size={16} /> Datasheet PDF
              </button>
            </div>

            {/* Key Badges */}
            <div className="flex flex-wrap gap-2">
              {["IP67 Weather Rated", "NDAA Compliant", "5-Year Warranty", "24/7 Support"].map((b) => (
                <span key={b} className="flex items-center gap-1.5 bg-stone-900 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-800/50">
                  <Award size={11} /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Specs + Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Specs */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-8">
            <h2 className="text-xl font-black text-white mb-6 flex items-center gap-2">
              <Package size={20} className="text-amber-500" /> Technical Specifications
            </h2>
            <div className="space-y-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex items-start justify-between py-3 border-b border-stone-800 last:border-0">
                  <span className="text-sm font-semibold text-stone-500 min-w-[140px]">{key}</span>
                  <span className="text-sm font-bold text-stone-200 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-black text-white mb-6">Key Features</h2>
            <div className="space-y-3">
              {product.features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 bg-stone-900 border border-stone-800 rounded-xl hover:border-amber-700/50 transition-all">
                  <CheckCircle size={18} className="text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-stone-300 font-medium">{f}</span>
                </div>
              ))}
            </div>

            {/* Support CTA */}
            <div
              className="mt-6 rounded-2xl p-6"
              style={{ background: "linear-gradient(135deg,#3d1f05,#92400e)" }}
            >
              <h3 className="font-black text-white mb-1">Bespoke Site Survey</h3>
              <p className="text-amber-200/70 text-sm mb-4">Our engineers will personally survey your property and design a tailored surveillance architecture — complimentary for qualified projects.</p>
              <button
                className="font-bold text-stone-900 text-sm px-5 py-2.5 rounded-lg transition-all flex items-center gap-2 hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#f59e0b,#d97706)" }}
              >
                Request Site Survey <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-black text-white mb-6">You May Also Like</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((p) => (
              <div
                key={p.id}
                className="group bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-700/50 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-900/20 transition-all cursor-pointer"
                onClick={() => onSelectProduct(p)}
              >
                {/* White background for product image */}
                <div className="bg-white h-44 flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain mix-blend-multiply"
                      sizes="33vw"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest mb-1 bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(90deg,#f59e0b,#d97706)" }}
                  >
                    {p.category}
                  </div>
                  <div className="font-black text-white text-sm mb-1">{p.name}</div>
                  <div className="flex items-center justify-end">
                    <button className="text-xs text-amber-400 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      View <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
