"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, FileDown, Check } from "lucide-react";
import type { Product, ProductCategory } from "@/lib/products";
import { datasheets } from "@/lib/datasheets";
import { whatsappLink } from "@/lib/site";

export default function ProductDetail({
  category,
  product,
}: {
  category: ProductCategory;
  product: Product;
}) {
  const sheet = product.datasheetFamily ? datasheets[product.datasheetFamily] : undefined;
  const otherProducts = category.products.filter((p) => p.sku !== product.sku);

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-5 md:px-8 overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full opacity-70"
          style={{ background: "var(--gradient-glow-overlay)" }}
        />
        <div className="max-w-7xl mx-auto relative">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-sm mb-8">
            <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <Link href="/#products" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium">
              Products
            </Link>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <Link href={`/products/${category.slug}`} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium">
              {category.title}
            </Link>
            <ChevronRight size={14} className="breadcrumb-sep" />
            <span className="text-[var(--text-primary)] font-semibold">{product.sku}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="animate-fade-up">
              <div className="eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
                {product.megapixel} · {category.eyebrow}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
                {product.name}
              </h1>
              <p className="mt-3 text-sm font-mono text-[var(--text-muted)] tracking-wide">{product.sku}</p>

              <ul className="mt-7 space-y-2">
                {product.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-2 text-sm text-[var(--text-secondary)] leading-snug">
                    <Check size={14} className="text-[var(--text-accent)] shrink-0 mt-0.5" />
                    {spec}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappLink(`Hi Eyora, I'd like a quote for ${product.sku} (${product.name}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-shine rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
                >
                  Enquire on WhatsApp
                  <ArrowRight size={15} />
                </a>
                {sheet && (
                  <a
                    href={sheet.pdfUrl}
                    download
                    className="btn-outline rounded-full px-7 py-3.5 text-sm font-semibold inline-flex items-center gap-2"
                  >
                    <FileDown size={15} />
                    Download Datasheet (PDF)
                  </a>
                )}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative aspect-square max-w-md mx-auto rounded-[2rem] eyora-card overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  quality={92}
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-contain p-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {sheet && (
        <section className="px-5 md:px-8 pb-16 md:pb-24">
          <div className="max-w-5xl mx-auto">
            <div className="eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
              Full Specifications
            </div>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-3xl">{sheet.overview}</p>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {sheet.specSections.map((section) => (
                <div key={section.section} className="eyora-card rounded-2xl overflow-hidden self-start">
                  <div className="px-5 py-3 text-xs font-bold uppercase tracking-widest text-[var(--text-accent)] bg-[var(--bg-tertiary)]">
                    {section.section}
                  </div>
                  <div className="divide-y divide-[var(--glass-border)]">
                    {section.rows.map((row) => (
                      <div key={row.label} className="px-5 py-3 grid grid-cols-[10rem_1fr] gap-3 text-sm">
                        <span className="text-[var(--text-muted)] font-medium">{row.label}</span>
                        <span className="text-[var(--text-secondary)] leading-snug">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {otherProducts.length > 0 && (
        <section className="px-5 md:px-8 pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-accent)] mb-5">
              Other Models in {category.title}
            </p>
            <div className="flex flex-wrap gap-3">
              {otherProducts.map((p) => (
                <Link
                  key={p.sku}
                  href={`/products/${category.slug}/${p.sku}`}
                  className="eyora-card rounded-full px-5 py-2.5 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {p.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
