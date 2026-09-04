import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/eyora/Header";
import Footer from "@/components/eyora/Footer";
import WhatsAppButton from "@/components/eyora/WhatsAppButton";
import ProductDetail from "@/components/eyora/ProductDetail";
import { productCategories } from "@/lib/products";

export function generateStaticParams() {
  return productCategories.flatMap((cat) =>
    cat.products.map((p) => ({ slug: cat.slug, sku: p.sku }))
  );
}

export function generateMetadata({ params }: { params: { slug: string; sku: string } }): Metadata {
  const category = productCategories.find((c) => c.slug === params.slug);
  const product = category?.products.find((p) => p.sku === params.sku);
  if (!category || !product) return {};
  return {
    title: `${product.name} (${product.sku}) — Eyora`,
    description: `${product.name} — ${product.specs.join(", ")}.`,
  };
}

export default function ProductPage({ params }: { params: { slug: string; sku: string } }) {
  const category = productCategories.find((c) => c.slug === params.slug);
  const product = category?.products.find((p) => p.sku === params.sku);
  if (!category || !product) notFound();

  return (
    <div>
      <Header />
      <main>
        <ProductDetail category={category} product={product} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
