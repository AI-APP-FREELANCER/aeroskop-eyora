import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/eyora/Header";
import Footer from "@/components/eyora/Footer";
import CtaBand from "@/components/eyora/CtaBand";
import WhatsAppButton from "@/components/eyora/WhatsAppButton";
import IndustryDetail from "@/components/eyora/IndustryDetail";
import { industries } from "@/lib/industries";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) return {};
  return {
    title: `${industry.name} Security — Eyora`,
    description: industry.requirementText,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) notFound();

  return (
    <div>
      <Header />
      <main>
        <IndustryDetail industry={industry} />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
