import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Eyora — IP Cameras, NVR & PoE Networking | Bahrain",
  description:
    "Eyora builds metal-bodied IP cameras, H.265 NVR systems, and PoE networking gear engineered for real-world conditions. Based in Bahrain, stocked for the Gulf.",
  icons: {
    icon: "/images/eyora-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
