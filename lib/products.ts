export interface Product {
  sku: string;
  name: string;
  megapixel: string;
  image: string;
  specs: string[];
  datasheetFamily?: string;
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
        sku: "EYRB2M-28",
        name: "2MP Bullet Camera — 2.8mm",
        megapixel: "2MP",
        image: "/images/products/bullet-camera-studio.png",
        specs: ["Metal case, IP67 & IK10", "True WDR 120dB", "30m Smart IR", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "bullet-28",
      },
      {
        sku: "EYRB5M-28",
        name: "5MP Bullet Camera — 2.8mm",
        megapixel: "5MP",
        image: "/images/products/bullet-camera-studio.png",
        specs: ["Metal case, IP67 & IK10", "True WDR 120dB", "30m Smart IR", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "bullet-28",
      },
      {
        sku: "EYRB8M-28",
        name: "8MP Bullet Camera — 2.8mm",
        megapixel: "8MP",
        image: "/images/products/bullet-camera-studio.png",
        specs: ["Metal case, IP67 & IK10", "True WDR 120dB", "30m Smart IR", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "bullet-28",
      },
      {
        sku: "EYRB2M-Z",
        name: "2MP Bullet Camera — Motorized VF",
        megapixel: "2MP",
        image: "/images/products/bullet-camera-wall.png",
        specs: ["Metal case, IP67 & IK10", "Real WDR 120dB", "60m Smart IR", "PoE & DC12V", "2.8–13mm motorized VF lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "bullet-z",
      },
      {
        sku: "EYRB5M-Z",
        name: "5MP Bullet Camera — Motorized VF",
        megapixel: "5MP",
        image: "/images/products/bullet-camera-wall.png",
        specs: ["Metal case, IP67 & IK10", "Real WDR 120dB", "60m Smart IR", "PoE & DC12V", "2.8–13mm motorized VF lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "bullet-z",
      },
      {
        sku: "EYRB8M-Z",
        name: "8MP Bullet Camera — Motorized VF",
        megapixel: "8MP",
        image: "/images/products/bullet-camera-wall.png",
        specs: ["Metal case, IP67 & IK10", "Real WDR 120dB", "60m Smart IR", "PoE & DC12V", "2.8–13mm motorized VF lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "bullet-z",
      },
      {
        sku: "EYRB2M-L",
        name: "2MP Bullet Camera — Metal, IP66",
        megapixel: "2MP",
        image: "/images/lifestyle/bullet-camera-dramatic.png",
        specs: ["Metal case, IP66", "Digital WDR", "30m Smart IR", "PoE & DC12V", "2.8mm fixed lens", "512GB microSD"],
        datasheetFamily: "bullet-l",
      },
      {
        sku: "EYRB4M-L",
        name: "4MP Bullet Camera — Metal, IP66",
        megapixel: "4MP",
        image: "/images/lifestyle/bullet-camera-dramatic-2.png",
        specs: ["Metal case, IP66", "Digital WDR", "30m Smart IR", "PoE & DC12V", "2.8mm fixed lens", "512GB microSD"],
        datasheetFamily: "bullet-l",
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
        specs: ["Metal case, IP67 & IK10", "True WDR 120dB", "30m Smart IR", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "dome-28",
      },
      {
        sku: "EYRD5M-28",
        name: "5MP Dome Camera — 2.8mm",
        megapixel: "5MP",
        image: "/images/products/dome-camera-1.png",
        specs: ["Metal case, IP67 & IK10", "True WDR 120dB", "30m Smart IR", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "dome-28",
      },
      {
        sku: "EYRD8M-28",
        name: "8MP Dome Camera — 2.8mm",
        megapixel: "8MP",
        image: "/images/products/dome-camera-1.png",
        specs: ["Metal case, IP67 & IK10", "True WDR 120dB", "30m Smart IR", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "dome-28",
      },
      {
        sku: "EYRD2M-Z",
        name: "2MP Dome Camera — Motorized VF",
        megapixel: "2MP",
        image: "/images/products/dome-camera-mini.png",
        specs: ["Metal case, IP67 & IK10", "Real WDR 120dB", "40m Smart IR", "PoE & DC12V", "2.8–13mm motorized VF lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "dome-z",
      },
      {
        sku: "EYRD5M-Z",
        name: "5MP Dome Camera — Motorized VF",
        megapixel: "5MP",
        image: "/images/products/dome-camera-mini.png",
        specs: ["Metal case, IP67 & IK10", "Real WDR 120dB", "40m Smart IR", "PoE & DC12V", "2.8–13mm motorized VF lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "dome-z",
      },
      {
        sku: "EYRD8M-Z",
        name: "8MP Dome Camera — Motorized VF",
        megapixel: "8MP",
        image: "/images/products/dome-camera-mini.png",
        specs: ["Metal case, IP67 & IK10", "Real WDR 120dB", "40m Smart IR", "PoE & DC12V", "2.8–13mm motorized VF lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "dome-z",
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
        specs: ["Metal case, IP67 & IK10", "True WDR 120dB", "30m Smart IR", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "turret-28",
      },
      {
        sku: "EYRT5M-28",
        name: "5MP Turret Camera — 2.8mm",
        megapixel: "5MP",
        image: "/images/products/turret-camera-angle.png",
        specs: ["Metal case, IP67 & IK10", "True WDR 120dB", "30m Smart IR", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "turret-28",
      },
      {
        sku: "EYRT8M-28",
        name: "8MP Turret Camera — 2.8mm",
        megapixel: "8MP",
        image: "/images/lifestyle/turret-camera-dramatic.png",
        specs: ["Metal case, IP67 & IK10", "True WDR 120dB", "30m Smart IR", "PoE & DC12V", "2.8mm fixed lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "turret-28",
      },
      {
        sku: "EYRT2M-Z",
        name: "2MP Turret Camera — Motorized VF",
        megapixel: "2MP",
        image: "/images/products/turret-camera-front.png",
        specs: ["Metal case, IP67 & IK10", "Real WDR 120dB", "30m Smart IR", "PoE & DC12V", "2.8–13mm motorized VF lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "turret-z",
      },
      {
        sku: "EYRT5M-Z",
        name: "5MP Turret Camera — Motorized VF",
        megapixel: "5MP",
        image: "/images/products/turret-camera-angle.png",
        specs: ["Metal case, IP67 & IK10", "Real WDR 120dB", "30m Smart IR", "PoE & DC12V", "2.8–13mm motorized VF lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "turret-z",
      },
      {
        sku: "EYRT8M-Z",
        name: "8MP Turret Camera — Motorized VF",
        megapixel: "8MP",
        image: "/images/lifestyle/turret-camera-dramatic.png",
        specs: ["Metal case, IP67 & IK10", "Real WDR 120dB", "30m Smart IR", "PoE & DC12V", "2.8–13mm motorized VF lens", "Built-in mic", "512GB microSD"],
        datasheetFamily: "turret-z",
      },
      {
        sku: "EYRT2M-L",
        name: "2MP Mini Turret Camera — 2.8mm",
        megapixel: "2MP",
        image: "/images/products/turret-camera-front.png",
        specs: ["Compact dome, IP66", "Digital WDR", "25m Smart IR", "PoE & DC12V", "2.8mm fixed lens", "H.265+ compression"],
        datasheetFamily: "turret-l",
      },
      {
        sku: "EYRT4M-L",
        name: "4MP Mini Turret Camera — 2.8mm",
        megapixel: "4MP",
        image: "/images/products/turret-camera-angle.png",
        specs: ["Compact dome, IP66", "Digital WDR", "25m Smart IR", "PoE & DC12V", "2.8mm fixed lens", "H.265+ compression"],
        datasheetFamily: "turret-l",
      },
    ],
  },
  {
    slug: "wifi-cameras",
    title: "Cube Cameras",
    eyebrow: "Smart Home & Office",
    tagline: "PoE cube cameras with PIR detection, two-way audio and 512GB local storage.",
    heroImage: "/images/products/cube-camera.png",
    products: [
      {
        sku: "EYR2C28",
        name: "2MP Cube Camera",
        megapixel: "2MP",
        image: "/images/products/cube-camera.png",
        specs: ["Real WDR 120dB", "PoE & DC12V", "2.8/3.6/6.0mm fixed lens", "Built-in mic & speaker", "Built-in PIR", "512GB microSD", "Indoor use"],
        datasheetFamily: "cube-28",
      },
      {
        sku: "EYR5C28",
        name: "5MP Cube Camera",
        megapixel: "5MP",
        image: "/images/products/cube-camera.png",
        specs: ["Real WDR 120dB", "PoE & DC12V", "2.8mm lens", "Built-in mic", "microSD slot", "PIR", "Indoor"],
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
        specs: ["4× Gigabit PoE ports, 65W budget", "1× RJ45 + 1× SFP uplink", "12 Gbps non-blocking", "IEEE 802.3af/at compliant", "Metal housing", "5-year warranty"],
        datasheetFamily: "poe-4p",
      },
      {
        sku: "EYR-808GP1G1SFP",
        name: "8-Port Unmanaged PoE Switch",
        megapixel: "8P",
        image: "/images/products/poe-switch-8port.png",
        specs: ["8× Gigabit PoE ports, 120W budget", "1× RJ45 + 1× SFP uplink", "24 Gbps non-blocking", "IEEE 802.3af/at compliant", "Metal housing", "5-year warranty"],
        datasheetFamily: "poe-8p",
      },
      {
        sku: "EYR-816GP1G1SFP",
        name: "16-Port Unmanaged PoE Switch",
        megapixel: "16P",
        image: "/images/products/poe-switch-16port.png",
        specs: ["16× Gigabit PoE ports, 300W budget", "1× RJ45 + 1× SFP uplink", "40 Gbps non-blocking", "IEEE 802.3af/at compliant", "1U rack-mount metal chassis", "5-year warranty"],
        datasheetFamily: "poe-16p",
      },
      {
        sku: "EYR-824GP1G1SFP",
        name: "24-Port Unmanaged PoE Switch",
        megapixel: "24P",
        image: "/images/products/poe-switch-24port.png",
        specs: ["24× Gigabit PoE ports, 320W budget", "1× RJ45 + 1× SFP uplink", "56 Gbps non-blocking", "IEEE 802.3af/at compliant", "19-inch 1U rack-mount chassis", "5-year warranty"],
        datasheetFamily: "poe-24p",
      },
    ],
  },
];

export const totalProductCount = productCategories.reduce(
  (sum, cat) => sum + cat.products.length,
  0
);
