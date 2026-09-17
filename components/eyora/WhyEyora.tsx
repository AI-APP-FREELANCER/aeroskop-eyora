"use client";

export default function WhyEyora() {
  return (
    <section id="about" className="px-5 md:px-8 py-24 md:py-32">
      <div className="max-w-4xl mx-auto eyora-surface rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-60"
          style={{ background: "var(--gradient-glow-overlay)" }}
        />
        <div className="relative reveal is-visible">
          <div className="text-center">
            <div className="eyora-badge px-4 py-1.5 text-xs font-semibold tracking-wide uppercase mb-5 inline-flex">
              About Eyora
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)] max-w-xl mx-auto">
              Same line. Same standards. Built for a different budget.
            </h2>
          </div>

          <div className="mt-10 max-w-2xl mx-auto text-[var(--text-secondary)] leading-relaxed [&>p]:mt-4 first:[&>p]:mt-0">
            <p>Eyora is a brand of Aeroskop, a surveillance technology company headquartered in the Kingdom of Bahrain.</p>
            <p>Aeroskop builds professional surveillance hardware for enterprise, government and critical-infrastructure projects across the Gulf. That work sets a high bar, and it carries a cost, because those projects demand capability that most installations will never use.</p>
            <p>A large part of the security industry sits outside that. Shops, villas, warehouses, clinics, small offices, mid-size commercial sites. Budget-conscious, but still needing equipment that is honestly built and survives a Gulf summer. For years that segment has been handed the cheapest import available and told to live with the consequences.</p>
            <p>Eyora is our answer, and it came off our own production line.</p>
            <p>Eyora units are built in the same facility in Bahrain, from the same approved component sources, assembled by the same people, and put through the same incoming inspection and end-of-line testing as our professional range. The firmware is written by the same Aeroskop engineers. The certificate of origin says Bahrain.</p>
            <p>What we changed was the specification, not the standard. Eyora carries the capability the volume market genuinely uses and leaves out the specialised features that add cost to a professional product. What we did not touch is the part that decides whether a camera is still working in year five: metal bodies instead of plastic, IP67 and IK10 housings rated for Gulf heat, dust and impact, 120dB True WDR, PoE with DC12V fallback, and full ONVIF Profile S, G and T.</p>
            <p>The price works for three reasons, none of which involve cutting the build. Eyora shares a production line Aeroskop has already paid for. It is a focused range, which means longer production runs and better component pricing. And it sells direct to distributors rather than through a chain of agents each taking a margin for moving a box.</p>
            <p>That is how a metal-bodied camera with True WDR, an IP67 and IK10 rating and a five-year hardware warranty lands at the price most brands ask for their plastic entry line.</p>
          </div>

          <p className="mt-10 text-center text-lg md:text-xl font-bold text-[var(--text-primary)]">
            Eyora. A brand of Aeroskop. Made in Bahrain.
          </p>
        </div>
      </div>
    </section>
  );
}
