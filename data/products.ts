export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  price: string;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
  specs: Record<string, string>;
  features: string[];
  description: string;
}

export const CAMERA_PRODUCTS: Product[] = [
  {
    id: "sentinel-4k-ptz",
    name: "Sentinel 4K PTZ",
    category: "PTZ Camera",
    tagline: "360° Pursuit. 4K Precision.",
    price: "$349",
    rating: 4.8,
    reviews: 324,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
    specs: {
      "Resolution": "4K Ultra HD (8MP)",
      "Optical Zoom": "20x Optical / 16x Digital",
      "Night Vision": "100m Smart IR Range",
      "Weather Rating": "IP67 / IK10",
      "Frame Rate": "30fps @ 4K",
      "AI Features": "Auto-tracking, Face Detection",
    },
    features: [
      "360° Pan / ±90° Tilt with auto-flip",
      "AI-powered moving object auto-tracking",
      "Wide Dynamic Range (WDR) 120dB",
      "H.265+ compression — 50% bandwidth saving",
      "PoE+ powered — single cable installation",
      "ONVIF Profile S/G/T compliant",
    ],
    description:
      "The Sentinel 4K PTZ is our flagship pan-tilt-zoom camera, engineered for perimeter defense and wide-area monitoring. Its AI tracking engine locks onto moving targets and follows them autonomously, eliminating blind spots across sprawling sites.",
  },
  {
    id: "visionx-pro-8mp",
    name: "VisionX Pro 8MP",
    category: "Fixed Bullet Camera",
    tagline: "Sharp. Silent. Steadfast.",
    price: "$189",
    rating: 4.7,
    reviews: 512,
    badge: "New",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    specs: {
      "Resolution": "8MP (3840×2160)",
      "Lens": "2.8mm – 12mm Motorized Varifocal",
      "Night Vision": "60m Smart IR",
      "Weather Rating": "IP67",
      "Frame Rate": "25fps @ 8MP",
      "Compression": "H.265+ / H.264+",
    },
    features: [
      "Motorized varifocal lens with remote focus",
      "Ultra-low light performance (0.003 Lux color)",
      "Built-in microSD slot — up to 512GB onboard",
      "Deep learning-based intrusion detection",
      "Anti-corrosion aluminum housing",
      "NDAA-compliant chipset",
    ],
    description:
      "The VisionX Pro 8MP delivers crystal-clear imagery day and night from a compact bullet form factor. Its motorized varifocal lens allows remote focus adjustment without physically accessing the camera — ideal for high-ceiling or hard-to-reach installations.",
  },
  {
    id: "nighthawk-ultra-starlight",
    name: "NightHawk Ultra",
    category: "Starlight Dome Camera",
    tagline: "Total Darkness. Total Clarity.",
    price: "$259",
    rating: 4.9,
    reviews: 276,
    badge: "Award Winning",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    specs: {
      "Resolution": "4MP Starlight Sensor",
      "Low-Light": "0.0005 Lux (Color) / 0 Lux IR",
      "Night Vision": "50m Smart IR",
      "Weather Rating": "IP67 / IK10 Vandal-proof",
      "Frame Rate": "30fps @ 4MP",
      "Special": "True Day/Night with ICR Filter",
    },
    features: [
      "Starlight sensor — full-color in near-zero light",
      "120dB True WDR for extreme contrast scenes",
      "Motorized 2.8–12mm auto-focus lens",
      "Privacy masking across up to 24 zones",
      "Vandal-proof IK10 dome housing",
      "ONVIF & RTSP streaming support",
    ],
    description:
      "The NightHawk Ultra pushes low-light performance to its absolute limit. Its large-format starlight sensor captures full-color footage in near-zero light conditions — no more grainy black-and-white footage when it matters most.",
  },
  {
    id: "eagleeye-ai-analytics",
    name: "EagleEye AI",
    category: "AI Smart Camera",
    tagline: "Intelligence That Sees Intent.",
    price: "$429",
    rating: 4.8,
    reviews: 198,
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    specs: {
      "Resolution": "5MP with Neural Processing",
      "AI Engine": "Dedicated NPU — 4 TOPS",
      "Algorithms": "10+ Deep Learning Models",
      "Edge Storage": "256GB onboard + Cloud Backup",
      "Frame Rate": "30fps @ 5MP",
      "Integration": "VMS, PSIM, Access Control APIs",
    },
    features: [
      "On-device facial recognition (1:N matching)",
      "Real-time crowd density analytics",
      "License plate recognition (LPR) built-in",
      "Behavior analysis: loitering, fight detection",
      "REST API for custom integrations",
      "GDPR-compliant video anonymization mode",
    ],
    description:
      "The EagleEye AI is more than a camera — it's an edge intelligence node. Running 10+ deep learning algorithms simultaneously without cloud dependency, it delivers actionable security insights in real time, transforming raw video into structured intelligence.",
  },
  {
    id: "shielddome-360-panoramic",
    name: "ShieldDome 360",
    category: "Panoramic Fisheye",
    tagline: "One Camera. Zero Blind Spots.",
    price: "$299",
    rating: 4.6,
    reviews: 341,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
    specs: {
      "Resolution": "12MP Fisheye (4000×3000)",
      "Field of View": "360° / 180° Corridor Mode",
      "Night Vision": "15m Smart IR",
      "Weather Rating": "IP66",
      "De-warp": "Hardware + Software De-warping",
      "Mount": "Ceiling / Wall / Desktop",
    },
    features: [
      "True 360° panoramic coverage from one lens",
      "Hardware de-warping — zero distortion views",
      "4-way split view with PTZ electronic zoom",
      "Intelligent motion detection across all zones",
      "Replaces up to 4 standard cameras",
      "Ultra-compact 130mm form factor",
    ],
    description:
      "The ShieldDome 360 eliminates camera blind spots entirely. One unit replaces up to four standard cameras, covering an entire room, lobby, or warehouse floor with a single cable drop. Its hardware de-warping engine renders natural, distortion-free views in real time.",
  },
];
