"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import CtaBand from "./CtaBand";
import WhatsAppButton from "./WhatsAppButton";
import { useReveal } from "@/lib/useReveal";

const SECTIONS = [
  {
    eyebrow: "Made in Bahrain",
    title: "Made in Bahrain",
    lead: "Our products are produced in Bahrain and ship with Bahraini certificates of origin.",
    body: "Regional manufacturing is not a slogan for us. It means shorter lead times, stock that actually exists when you order it, and engineers in your time zone rather than eight hours behind you. When a partner needs a hundred units for a site next month, we can answer that question honestly instead of checking with a factory we've never visited.",
    image: "/images/about/factory-bahrain.jpg",
  },
  {
    eyebrow: "Build Quality",
    title: "Components chosen for working life",
    lead: "We build with quality components because the alternative is cheaper for us and more expensive for the people who install and use our equipment.",
    body: "Metal bodies instead of plastic. IP67 and IK10 rated housings. Industrial-grade sensors, power supplies rated well above their working load, and connectors that survive being installed by someone standing on a ladder in August. A camera that fails in its third year costs far more than the difference between a good component and a poor one.",
    image: "/images/about/component-quality.jpg",
  },
  {
    eyebrow: "Warranty",
    title: "Five-year hardware warranty",
    lead: "Every Eyora product carries a five-year hardware warranty. Most of the market offers two.",
    body: "We don't offer five years because we're generous. We offer it because we build for a working life considerably longer than that, and because a warranty is the only reliability claim a company can be held to. Everything else is an adjective.",
    image: "/images/about/five-year-warranty.jpg",
  },
  {
    eyebrow: "Support",
    title: "Support that answers",
    lead: "Regional support, from people who know the product, in your working hours.",
    body: "Our support team can read the firmware. They have the same hardware on the bench. Most issues are resolved in the first conversation, because the person answering isn't reading from a script written by a different company.",
    image: "/images/about/support-team.jpg",
  },
  {
    eyebrow: "Compatibility",
    title: "Works both ways",
    lead: "Our NVRs record any ONVIF-compliant camera with full functionality. Our cameras work on any ONVIF-compliant NVR, with motion recording supported.",
    body: "Most sites already have something on the wall or in the rack. Replacing working equipment to change one box has never made sense to us, so we built for the opposite. Add Eyora cameras to the recorder you have. Put an Eyora recorder behind the cameras you have. Or run both, and get the full feature set.",
    image: "/images/about/onvif-compatibility.jpg",
  },
  {
    eyebrow: "Partners",
    title: "Partners",
    lead: "Eyora is sold through a distribution and installer network across the region.",
    body: "We build the hardware and stand behind it; our partners bring the site knowledge, the survey, the install and the local relationship. It's a division of labour we take seriously, which is why partners get direct access to our engineers rather than a reseller portal and a phone number that rings out.",
    image: "/images/about/partners.jpg",
  },
  {
    eyebrow: "Why It Matters",
    title: "What we're for",
    lead: "Security hardware became complicated for reasons that had nothing to do with security. Licence tiers, subscription platforms, feature locks, ecosystems designed to make leaving expensive.",
    body: "We build the opposite. Hardware that is owned outright, works with equipment already on site, and carries a warranty long enough to matter. There is nothing to renew and nothing to unlock.",
    image: "/images/about/what-we-are-for.jpg",
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
              <span className="text-[var(--text-primary)] font-semibold">About</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="animate-fade-up">
                <div className="eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5">
                  About Eyora
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-[1.08] tracking-tight text-[var(--text-primary)]">
                  Made in Bahrain.
                  <span className="eyora-text-gradient block">Built to last.</span>
                </h1>
                <p className="mt-6 text-base md:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
                  Eyora is a brand of Aeroskop — a security hardware company that designs, produces and supports its own products from Bahrain.
                </p>
                <p className="mt-4 text-base md:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
                  We make IP cameras, network video recorders and PoE switches. Every unit is produced in Bahrain and carries a Bahraini certificate of origin. The firmware running inside them is written by our own engineers, not licensed from a third party. When we say we&apos;ll fix something, we can fix it — at the code level, not by forwarding a ticket to someone else.
                </p>
              </div>

              <div className="relative animate-scale-in">
                <div className="relative aspect-[4/3] max-w-xl mx-auto rounded-[2rem] eyora-card overflow-hidden bg-white">
                  <Image
                    src="/images/about/lineup-made-in-bahrain.png"
                    alt="Eyora cameras, NVR and PoE switch produced in Bahrain"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 560px"
                    className="object-cover"
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
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden eyora-card product-tile-bg">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 90vw, 560px"
                    className="object-cover"
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
