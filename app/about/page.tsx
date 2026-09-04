import type { Metadata } from "next";
import AboutPage from "@/components/eyora/AboutPage";

export const metadata: Metadata = {
  title: "About — Eyora",
  description:
    "Eyora is a brand of Aeroskop, a security hardware company that designs, produces and supports its own IP cameras, NVRs and PoE switches from Bahrain.",
};

export default function About() {
  return <AboutPage />;
}
