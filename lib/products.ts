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
    slug: "ptz-cameras",
    title: "PTZ Cameras",
    eyebrow: "Long-Range",
    tagline: "Motorized pan-tilt-zoom domes for wide-area coverage and active tracking.",
    heroImage: "/images/products/eyrsd8m33.png",
    badge: "New",
    products: [
      {
        sku: "EYRSD8M33",
        name: "8MP 33X Zoom PTZ Camera",
        megapixel: "8MP",
        image: "/images/products/eyrsd8m33.png",
        specs: ["33× optical zoom, 4.5–148.5mm", "360° endless pan, -10°–90° tilt", "150m IR night vision", "120dB true WDR", "Up to 256 presets", "PoE & DC12V, IP66 & IK10"],
        datasheetFamily: "ptz-8m33",
      },
      {
        sku: "EYRSDM05",
        name: "5MP 2.5\" 5X Zoom PTZ Camera",
        megapixel: "5MP",
        image: "/images/products/eyrsdm05.png",
        specs: ["5× optical zoom, 3.05–15.5mm", "360° endless pan, -10°–90° tilt", "20m Smart IR", "120dB HDR", "Compact metal housing, Φ130mm", "PoE & DC12V, IP66 & IK10"],
        datasheetFamily: "ptz-dm05",
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
    tagline: "Scalable Ultra 265 network video recorders from 4 to 32 channels.",
    heroImage: "/images/products/nvr.png",
    products: [
      {
        sku: "EYR-NVR-4CHP",
        name: "4-Channel Mini NVR",
        megapixel: "4CH",
        image: "/images/products/nvr.png",
        specs: ["4 built-in PoE ports, 54W budget", "1 SATA interface, up to 6TB", "Ultra 265 / H.265 / H.264", "Up to 6MP recording", "HDMI & VGA output", "5-year warranty"],
        datasheetFamily: "nvr-4chp",
      },
      {
        sku: "EYR-NVR-8CHP",
        name: "8-Channel Mini NVR",
        megapixel: "8CH",
        image: "/images/products/nvr.png",
        specs: ["8 built-in PoE ports, 75W budget", "1 SATA interface, up to 6TB", "Ultra 265 / H.265 / H.264", "Up to 6MP recording", "HDMI & VGA output", "5-year warranty"],
        datasheetFamily: "nvr-8chp",
      },
      {
        sku: "EYR-NVR-16CHP",
        name: "16-Channel NVR",
        megapixel: "16CH",
        image: "/images/products/nvr.png",
        specs: ["16 independent PoE ports, 240W budget", "2 SATA interfaces, up to 20TB total", "Ultra 265 / H.265 / H.264", "Up to 12MP recording", "4K HDMI output", "5-year warranty"],
        datasheetFamily: "nvr-16chp",
      },
      {
        sku: "EYR-NVR-32CH",
        name: "32-Channel NVR",
        megapixel: "32CH",
        image: "/images/products/nvr.png",
        specs: ["Dual Gigabit network ports", "2 SATA interfaces, up to 32TB total", "Ultra 265 / H.265 / H.264", "Up to 32MP recording", "4K HDMI output", "5-year warranty"],
        datasheetFamily: "nvr-32ch",
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
        sku: "EYR-PS8P1R1S",
        name: "8-Port Unmanaged PoE Switch",
        megapixel: "8P",
        image: "/images/products/poe-switch-8port.png",
        specs: ["8× Gigabit PoE ports, 120W budget", "1× RJ45 + 1× SFP uplink", "24 Gbps non-blocking", "IEEE 802.3af/at compliant", "Metal housing", "5-year warranty"],
        datasheetFamily: "poe-8p",
      },
      {
        sku: "EYR-PS16P1R1S",
        name: "16-Port Unmanaged PoE Switch",
        megapixel: "16P",
        image: "/images/products/poe-switch-16port.png",
        specs: ["16× Gigabit PoE ports, 300W budget", "1× RJ45 + 1× SFP uplink", "40 Gbps non-blocking", "IEEE 802.3af/at compliant", "1U rack-mount metal chassis", "5-year warranty"],
        datasheetFamily: "poe-16p",
      },
      {
        sku: "EYR-PS24P1R1S",
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
