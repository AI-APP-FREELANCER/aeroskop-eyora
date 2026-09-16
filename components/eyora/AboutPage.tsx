"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import CtaBand from "./CtaBand";
import WhatsAppButton from "./WhatsAppButton";
import ProductImage from "./ProductImage";
import { useReveal } from "@/lib/useReveal";
import { imageAspect, versionedSrc } from "@/lib/imageManifest";

const HERO_IMAGE = "/images/about/lineup-made-in-bahrain-v2.png";

const SECTIONS = [
  {
    eyebrow: "Made in Bahrain",
    title: "Made in Bahrain",
    lead: "Eyora cameras, NVRs and PoE switches are produced in Bahrain, close to the GCC projects they serve.",
    body: "Local production gives our partners shorter lead times, dependable stock availability and an engineering team working in the same time zone, so project planning runs on regional timelines rather than overseas shipping schedules.",
    image: "/images/about/factory-bahrain.png",
  },
  {
    eyebrow: "Engineered for Endurance",
    title: "Engineered for Endurance",
    lead: "Component selection is guided by lifetime performance rather than initial cost.",
    body: "Eyora cameras use metal enclosures, IP67 and IK10 rated housings, industrial-grade sensors and conservatively rated power stages, designed for 24/7 operation in demanding GCC conditions.",
    image: "/images/about/component-quality.png",
  },
  {
    eyebrow: "Five Years Warranty",
    title: "Five Years Warranty",
    lead: "Eyora cameras, NVRs and PoE switches carry a five-year hardware warranty as standard.",
    body: "The coverage period follows from how the products are engineered: component selection, thermal design and production testing are all aimed at continuous operation well beyond that term. Every Eyora product is also covered by a five-year advance replacement warranty — if a unit or component fails within the warranty period, we send the replacement straight away, with no need to return the faulty hardware first.",
    image: "/images/about/five-year-warranty.png",
  },
  {
    eyebrow: "Regional Technical Support",
    title: "Regional Technical Support",
    lead: "Eyora support is handled by Aeroskop's technical team in Bahrain during GCC working hours.",
    body: "Our engineers review device logs and configurations directly, and bring in the wider engineering team when an issue needs deeper investigation.",
    image: "/images/about/support-team.png",
  },
  {
    eyebrow: "Open by Design",
    title: "Open by Design",
    lead: "Eyora NVRs record video from ONVIF-compliant cameras, with core streaming and recording functions supported. Eyora cameras integrate with ONVIF-compliant NVRs, including motion-based recording.",
    body: "This lets you add Eyora cameras to an existing recorder, or install an Eyora NVR alongside cameras already on site, without replacing equipment that still works. Pairing Eyora cameras with Eyora recorders unlocks the full feature set.",
    image: "/images/about/onvif-compatibility.png",
  },
  {
    eyebrow: "Partner Network",
    title: "Partner Network",
    lead: "Eyora is supplied through a network of distributors and installation partners across the GCC.",
    body: "Aeroskop designs, builds and supports the hardware, and our partners contribute site surveys, installation and local project knowledge. Registered partners work directly with our technical team on system design, configuration and after-sales support.",
    image: "/images/about/partners.jpg",
  },
  {
    eyebrow: "Why It Matters",
    title: "What we're for",
    lead: "Security hardware became complicated for reasons that had nothing to do with security. Licence tiers, subscription platforms, feature locks, ecosystems designed to make leaving expensive.",
    body: "We build the opposite. Hardware that is owned outright, works with equipment already on site, and carries a warranty long enough to matter. There is nothing to renew and nothing to unlock.",
    image: "/images/about/what-we-are-for.png",
  },
];

export default function AboutPage() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div>
      <Header />
      <main>
        {/* Hero */}
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
              <span className="text-[var(--text-primary)] font-semibold">Why Eyora</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="animate-fade-up">
                <div className="eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
                  Why Eyora
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-[1.08] tracking-tight text-[var(--text-primary)]">
                  Made in Bahrain.
                  <span className="eyora-text-gradient block">Built to last.</span>
                </h1>
                <p className="mt-6 text-base md:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
                  Eyora is a brand of Aeroskop — a security hardware company that designs, produces and supports its own products from Bahrain.
                </p>
                <p className="mt-4 text-base md:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
                  We make IP cameras, network video recorders and PoE switches. Every unit is produced in Bahrain and carries a Bahraini certificate of origin. Our engineering team develops and maintains the full firmware stack in-house, covering ISP tuning, the H.265/H.264 encoding pipeline, ONVIF integration and the web interface — so when we say we&apos;ll fix something, we can fix it at the code level, not by forwarding a ticket to someone else.
                </p>
              </div>

              <div className="relative animate-scale-in">
                <div
                  className="relative max-w-xl mx-auto rounded-[2rem] eyora-card overflow-hidden bg-white"
                  style={{ aspectRatio: imageAspect(HERO_IMAGE) ?? 4 / 3 }}
                >
                  <Image
                    src={versionedSrc(HERO_IMAGE)}
                    alt="Eyora cameras, NVR and PoE switch produced in Bahrain"
                    fill
                    priority
                    quality={92}
                    sizes="(max-width: 1024px) 90vw, 560px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternating sections */}
        <section className="px-5 md:px-8 py-8 md:py-12">
          <div ref={ref} data-reveal-root className="max-w-7xl mx-auto flex flex-col gap-20 md:gap-28">
            {SECTIONS.map((s, i) => (
              <div
                key={s.title}
                data-reveal
                className={`reveal grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div
                  className="relative rounded-[2rem] overflow-hidden eyora-card bg-white"
                  style={{ aspectRatio: imageAspect(s.image) ?? 4 / 3 }}
                >
                  <ProductImage
                    src={s.image}
                    alt={s.title}
                    sizes="(max-width: 1024px) 90vw, 560px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
                    {s.eyebrow}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-base md:text-lg font-semibold text-[var(--text-primary)] leading-relaxed">
                    {s.lead}
                  </p>
                  <p className="mt-3 text-[var(--text-secondary)] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing statement */}
        <section className="px-5 md:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              That&apos;s the whole idea.
            </p>
            <p className="mt-2 text-base md:text-lg text-[var(--text-secondary)]">
              Everything else on this site is detail.
            </p>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
