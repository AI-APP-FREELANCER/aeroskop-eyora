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
  Zap,
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
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Breadcrumb */}
      <div
        className="text-lime-200 text-sm px-4 py-3"
        style={{ background: "linear-gradient(135deg,#2d6b0e,#3d7c1a)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button onClick={onHome} className="hover:text-white transition-colors">Home</button>
          <ChevronRight size={13} />
          <button onClick={onBack} className="hover:text-white transition-colors">Products</button>
          <ChevronRight size={13} />
          <span className="text-white font-semibold">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-semibold hover:gap-1 transition-all mb-8"
          style={{ color: "#2d6b0e" }}
        >
          <ArrowLeft size={16} /> Back to Products
        </button>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Panel */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-8 flex items-center justify-center min-h-[400px] relative">
            {product.badge && (
              <span
                className="absolute top-6 left-6 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md"
                style={{ background: "linear-gradient(135deg,#2d6b0e,#6db928)" }}
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
            <span className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#3d7c1a" }}>{product.category}</span>
            <h1 className="text-4xl font-black text-slate-900 mb-2">{product.name}</h1>
            <p className="text-xl text-slate-500 font-medium mb-4">{product.tagline}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i <= Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-slate-200 fill-slate-200"}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-700">{product.rating}</span>
              <span className="text-sm text-slate-400">({product.reviews} reviews)</span>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8">{product.description}</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                className="flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-sm shadow-lg shadow-lime-200"
                style={{ background: "linear-gradient(135deg,#2d6b0e,#3d7c1a)" }}
              >
                <Phone size={16} /> Request a Quote
              </button>
              <button className="flex items-center gap-2 border-2 font-bold px-7 py-3.5 rounded-xl hover:bg-lime-50 transition-all text-sm" style={{ borderColor: "#2d6b0e", color: "#2d6b0e" }}>
                <Download size={16} /> Datasheet PDF
              </button>
            </div>

            {/* Key Badges */}
            <div className="flex flex-wrap gap-2">
              {["IP67 Weather Rated", "NDAA Compliant", "5-Year Warranty", "24/7 Support"].map((b) => (
                <span key={b} className="flex items-center gap-1.5 bg-lime-50 text-lime-800 text-xs font-semibold px-3 py-1.5 rounded-full border border-lime-100">
                  <Zap size={11} /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Specs + Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Specs */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8">
            <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <Package size={20} style={{ color: "#3d7c1a" }} /> Technical Specifications
            </h2>
            <div className="space-y-3">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="flex items-start justify-between py-3 border-b border-slate-100 last:border-0">
                  <span className="text-sm font-semibold text-slate-500 min-w-[140px]">{key}</span>
                  <span className="text-sm font-bold text-slate-800 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-black text-slate-900 mb-6">Key Features</h2>
            <div className="space-y-3">
              {product.features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-xl hover:border-lime-200 hover:bg-lime-50/30 transition-all">
                  <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: "#3d7c1a" }} />
                  <span className="text-sm text-slate-700 font-medium">{f}</span>
                </div>
              ))}
            </div>

            {/* Support CTA */}
            <div
              className="mt-6 rounded-2xl p-6 text-white"
              style={{ background: "linear-gradient(135deg,#2d6b0e,#5aab22)" }}
            >
              <h3 className="font-black mb-1">Need a site survey?</h3>
              <p className="text-lime-100 text-sm mb-4">Our engineers will visit your site and design the optimal camera layout — free of charge for qualified projects.</p>
              <button className="bg-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-lime-50 transition-all flex items-center gap-2" style={{ color: "#2d6b0e" }}>
                Book a Site Survey <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-black text-slate-900 mb-6">You May Also Like</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {related.map((p) => (
              <div
                key={p.id}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
                onClick={() => onSelectProduct(p)}
              >
                <div className="bg-white h-44 flex items-center justify-center p-4 border-b border-slate-50">
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
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "#3d7c1a" }}>{p.category}</div>
                  <div className="font-black text-slate-900 text-sm mb-1">{p.name}</div>
                  <div className="flex items-center justify-end">
                    <button className="text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all" style={{ color: "#2d6b0e" }}>
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
