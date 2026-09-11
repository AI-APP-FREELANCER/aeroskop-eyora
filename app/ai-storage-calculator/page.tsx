import type { Metadata } from "next";
import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Header from "@/components/eyora/Header";
import Footer from "@/components/eyora/Footer";
import WhatsAppButton from "@/components/eyora/WhatsAppButton";
import AIStorageCalculator from "@/components/eyora/AIStorageCalculator";

export const metadata: Metadata = {
  title: "AI Storage Calculator — Eyora",
  description:
    "Calculate your surveillance storage needs and get a personalized Eyora NVR recommendation, powered by AI.",
};

export default function AIStorageCalculatorPage() {
  return (
    <div>
      <Header />
      <main>
        <section className="relative pt-32 pb-6 md:pt-40 md:pb-8 px-5 md:px-8 overflow-hidden">
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
              <span className="text-[var(--text-primary)] font-semibold">AI Storage Calculator</span>
            </nav>

            <div className="eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
              <Sparkles size={13} />
              Powered by AI
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] max-w-2xl">
              AI Storage Calculator
            </h1>
            <p className="mt-4 text-base md:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
              Calculate your storage needs and get a personalized Eyora NVR recommendation in seconds.
            </p>
          </div>
        </section>

        <AIStorageCalculator />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
