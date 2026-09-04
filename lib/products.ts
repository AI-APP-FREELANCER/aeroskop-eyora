export interface Product {
  sku: string;
  name: string;
  megapixel: string;
  image: string;
  specs: string[];
}

export interface ProductCategory {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  heroImage: string;
  badge?: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    slug: "bullet-cameras",
    title: "Bullet Cameras",
    eyebrow: "Perimeter",
    tagline: "Long-range detection for entrances, perimeters and open yards.",
    heroImage: "/images/products/bullet-camera-fixed.png",
    badge: "Best Seller",
    products: [
      {
        sku: "EYB2M-28",
        name: "2MP Bullet Camera — 2.8mm",
        megapixel: "2MP",
        image: "/images/products/bullet-camera-studio.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYB5M-28",
        name: "5MP Bullet Camera — 2.8mm",
        megapixel: "5MP",
        image: "/images/products/bullet-camera-studio.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYB8M-28",
        name: "8MP Bullet Camera — 2.8mm",
        megapixel: "8MP",
        image: "/images/products/bullet-camera-studio.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYB2M-Z",
        name: "2MP Bullet Camera — Motorized VF",
        megapixel: "2MP",
        image: "/images/products/bullet-camera-wall.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.7–13.5mm motorized VF lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYB5M-Z",
        name: "5MP Bullet Camera — Motorized VF",
        megapixel: "5MP",
        image: "/images/products/bullet-camera-wall.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.7–13.5mm motorized VF lens", "Built-in mic", "microSD slot", "IP67 & IK11"],
      },
      {
        sku: "EYB8M-Z",
        name: "8MP Bullet Camera — Motorized VF",
        megapixel: "8MP",
        image: "/images/products/bullet-camera-wall.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.7–13.5mm motorized VF lens", "Built-in mic", "microSD slot", "IP67 & IK12"],
      },
      {
        sku: "EYRB2M-L",
        name: "2MP Bullet Camera — Low-Light",
        megapixel: "2MP",
        image: "/images/lifestyle/bullet-camera-dramatic.png",
        specs: ["IP metal bullet", "Real WDR", "Min. 0.01 Lux", "Fixed lens", "IR 30m", "PoE & DC12V", "IP67", "-40°C ~ 60°C"],
      },
      {
        sku: "EYRB5M-L",
        name: "4MP Bullet Camera — Low-Light",
        megapixel: "4MP",
        image: "/images/lifestyle/bullet-camera-dramatic-2.png",
        specs: ["IP metal bullet", "Real WDR", "Min. 0.01 Lux", "Fixed lens", "IR 30m", "PoE & DC12V", "IP67", "-40°C ~ 60°C"],
      },
    ],
  },
  {
    slug: "dome-cameras",
    title: "Dome Cameras",
    eyebrow: "Interior",
    tagline: "Discreet, vandal-resistant coverage for indoor and covered spaces.",
    heroImage: "/images/products/dome-camera-1.png",
    products: [
      {
        sku: "EYRD2M-28",
        name: "2MP Dome Camera — 2.8mm",
        megapixel: "2MP",
        image: "/images/products/dome-camera-1.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYRD5M-28",
        name: "5MP Dome Camera — 2.8mm",
        megapixel: "5MP",
        image: "/images/products/dome-camera-1.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYRD8M-28",
        name: "8MP Dome Camera — 2.8mm",
        megapixel: "8MP",
        image: "/images/products/dome-camera-1.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYRD2M-Z",
        name: "2MP Dome Camera — Motorized VF",
        megapixel: "2MP",
        image: "/images/products/dome-camera-mini.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.7–13.5mm motorized VF lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYRD5M-Z",
        name: "5MP Dome Camera — Motorized VF",
        megapixel: "5MP",
        image: "/images/products/dome-camera-mini.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.7–13.5mm motorized VF lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYRD8M-Z",
        name: "8MP Dome Camera — Motorized VF",
        megapixel: "8MP",
        image: "/images/products/dome-camera-mini.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.7–13.5mm motorized VF lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYRD2M-L",
        name: "2MP/5MP Dome Camera — Low-Light",
        megapixel: "2/5MP",
        image: "/images/products/dome-camera-1.png",
        specs: ["Metal & plastic dome", "Real WDR", "Min. 0.01 Lux", "Fixed lens", "IR 25m", "PoE & DC12V", "IP67", "-40°C ~ 60°C"],
      },
    ],
  },
  {
    slug: "turret-cameras",
    title: "Turret Cameras",
    eyebrow: "Smart Spaces",
    tagline: "Wide-angle eyeball design for offices, lobbies and retail aisles.",
    heroImage: "/images/products/turret-camera-front.png",
    badge: "New",
    products: [
      {
        sku: "EYRT2M-28",
        name: "2MP Turret Camera — 2.8mm",
        megapixel: "2MP",
        image: "/images/products/turret-camera-front.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYRT5M-28",
        name: "5MP Turret Camera — 2.8mm",
        megapixel: "5MP",
        image: "/images/products/turret-camera-angle.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYRT8M-28",
        name: "8MP Turret Camera — 2.8mm",
        megapixel: "8MP",
        image: "/images/lifestyle/turret-camera-dramatic.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYRT2M-Z",
        name: "2MP Turret Camera — Motorized VF",
        megapixel: "2MP",
        image: "/images/products/turret-camera-front.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.7–13.5mm motorized VF lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYRT5M-Z",
        name: "5MP Turret Camera — Motorized VF",
        megapixel: "5MP",
        image: "/images/products/turret-camera-angle.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.7–13.5mm motorized VF lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
      {
        sku: "EYRT8M-Z",
        name: "8MP Turret Camera — Motorized VF",
        megapixel: "8MP",
        image: "/images/lifestyle/turret-camera-dramatic.png",
        specs: ["Metal case", "Real WDR 120dB", "PoE & DC12V", "2.7–13.5mm motorized VF lens", "Built-in mic", "microSD slot", "IP67 & IK10"],
      },
    ],
  },
  {
    slug: "wifi-cameras",
    title: "Cube / Wi-Fi Cameras",
    eyebrow: "Smart Home & Office",
    tagline: "Dual-band Wi-Fi cameras with PIR detection for easy, cable-free installs.",
    heroImage: "/images/products/cube-camera.png",
    products: [
      {
        sku: "EYR2C28",
        name: "2MP Cube Camera",
        megapixel: "2MP",
        image: "/images/products/cube-camera.png",
        specs: ["Real WDR 120dB", "PoE & DC12V", "2.8mm lens", "Built-in mic", "microSD slot", "PIR", "Indoor", "2.4 & 5GHz dual-band Wi-Fi"],
      },
      {
        sku: "EYR5C28",
        name: "5MP Cube Camera",
        megapixel: "5MP",
        image: "/images/products/cube-camera.png",
        specs: ["Real WDR 120dB", "PoE & DC12V", "2.8mm lens", "Built-in mic", "microSD slot", "PIR", "Indoor", "2.4 & 5GHz dual-band Wi-Fi"],
      },
    ],
  },
  {
    slug: "nvr",
    title: "NVR",
    eyebrow: "Recording",
    tagline: "Scalable H.265 network video recorders from 6 to 32 channels.",
    heroImage: "/images/products/nvr.png",
    products: [
      {
        sku: "EYR-6C4P-NVR",
        name: "6-Channel NVR",
        megapixel: "6CH",
        image: "/images/products/nvr.png",
        specs: ["1 SATA interface", "Compact case", "H.265", "Up to 6MP@30", "1 RJ45, 10M/100M", "4-port PoE"],
      },
      {
        sku: "EYR-10C8P-NVR",
        name: "10-Channel NVR",
        megapixel: "10CH",
        image: "/images/products/nvr.png",
        specs: ["1 SATA interface", "Compact case", "H.265", "Up to 6MP@30", "8-port PoE"],
      },
      {
        sku: "EYR-16C16P-NVR",
        name: "16-Channel NVR",
        megapixel: "16CH",
        image: "/images/products/nvr.png",
        specs: ["2 SATA interfaces", "1U chassis", "H.265, up to 12MP", "16-port PoE"],
      },
      {
        sku: "EYR-32C16P-NVR",
        name: "32-Channel NVR",
        megapixel: "32CH",
        image: "/images/products/nvr.png",
        specs: ["2 SATA interfaces", "1U chassis", "H.265, up to 16MP", "Smart mode up to 32×32MP@30", "2× RJ45, 10M/100M/1000M"],
      },
    ],
  },
  {
    slug: "poe-switches",
    title: "PoE Switches",
    eyebrow: "Networking",
    tagline: "Unmanaged Gigabit PoE switches sized for any deployment.",
    heroImage: "/images/products/poe-switch-16port.png",
    products: [
      {
        sku: "EYR-PS4P1R1S",
        name: "4-Port Unmanaged PoE Switch",
        megapixel: "4P",
        image: "/images/products/poe-switch-4port.png",
        specs: ["4× 10/100/1000Mbps PoE ports", "1× SFP uplink", "Built-in 65W power budget", "IEEE 802.3af/at compliant"],
      },
      {
        sku: "EYR-PS8P1R1S",
        name: "8-Port Unmanaged PoE Switch",
        megapixel: "8P",
        image: "/images/products/poe-switch-8port.png",
        specs: ["8× 10/100/1000Mbps PoE ports", "1× uplink + 1× SFP", "120W power budget", "IEEE 802.3af/at compliant"],
      },
      {
        sku: "EYR-PS16P2R2S",
        name: "16-Port Unmanaged PoE Switch",
        megapixel: "16P",
        image: "/images/products/poe-switch-16port.png",
        specs: ["16× 10/100/1000Mbps PoE ports", "2× RJ45 uplink + 1× SFP", "260W power budget", "IEEE 802.3af/at compliant"],
      },
      {
        sku: "EYR-PS24P1R1S",
        name: "24-Port Unmanaged PoE Switch",
        megapixel: "24P",
        image: "/images/products/poe-switch-24port.png",
        specs: ["24× 10/100/1000Mbps PoE ports", "1× RJ45 uplink + 1× SFP", "260W power budget", "IEEE 802.3af/at compliant"],
      },
    ],
  },
];

export const totalProductCount = productCategories.reduce(
  (sum, cat) => sum + cat.products.length,
  0
);
