import Header from "./Header";
import Hero from "./Hero";
import CapabilityStrip from "./CapabilityStrip";
import ProductPortfolio from "./ProductPortfolio";
import Technology from "./Technology";
import WhyEyora from "./WhyEyora";
import CtaBand from "./CtaBand";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <CapabilityStrip />
        <ProductPortfolio />
        <Technology />
        <WhyEyora />
        <CtaBand />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
