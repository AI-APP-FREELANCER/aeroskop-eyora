import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/eyora/Header";
import Footer from "@/components/eyora/Footer";
import WhatsAppButton from "@/components/eyora/WhatsAppButton";
import CategoryDetail from "@/components/eyora/CategoryDetail";
import { productCategories } from "@/lib/products";

export function generateStaticParams() {
  return productCategories.map((cat) => ({ slug: cat.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = productCategories.find((c) => c.slug === params.slug);
  if (!category) return {};
  return {
    title: `${category.title} — Eyora`,
    description: category.tagline,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = productCategories.find((c) => c.slug === params.slug);
  if (!category) notFound();

  return (
    <div>
      <Header />
      <main>
        <CategoryDetail category={category} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
