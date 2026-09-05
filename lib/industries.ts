export interface IndustryPin {
  label: string;
  top: string;
  left: string;
}

export interface IndustryFeature {
  title: string;
  desc: string;
  icon?: string;
  n?: string;
}

export interface FloorplanPoint {
  label: string;
  top: string;
  left: string;
}

export interface Industry {
  slug: string;
  number: string;
  name: string;
  theme: "light" | "dark";
  heroVariant: "split-photo-right" | "split-photo-left" | "stacked" | "overlay";
  image: string;
  imageAlt: string;
  badge: string;
  headline: string;
  sub: string;
  pins?: IndustryPin[];
  statusBadge?: { eyebrow: string; text: string; icon: string };
  checklist?: string[];
  features?: IndustryFeature[];
  floorplan?: { title: string; subtitle: string; points: FloorplanPoint[] };
  processSteps?: string[];
  statTiles?: { value: string; label: string }[];
  coverageTitle: string;
  coverageAreas: string[];
  productsTitle: string;
  recommendedProducts: string[];
  requirementLabel: string;
  requirementText: string;
}

export const industries: Industry[] = [
  {
    slug: "retail",
    number: "01",
    name: "Retail & Commercial",
    theme: "light",
    heroVariant: "split-photo-right",
    image: "/images/industries/retail.jpg",
    imageAlt: "Retail store interior with camera coverage points",
    badge: "RETAIL & COMMERCIAL SECURITY",
    headline: "Clear coverage from entrance to stockroom.",
    sub: "Entrance, till and stockroom coverage with clear low-light footage.",
    pins: [
      { label: "Entrance", top: "12%", left: "8%" },
      { label: "Aisle 03", top: "48%", left: "58%" },
      { label: "Checkout", top: "78%", left: "16%" },
    ],
    statusBadge: { eyebrow: "SYSTEM STATUS", text: "All zones visible", icon: "Box" },
    checklist: ["Low-Light Clarity", "Till-Level Detail", "Stockroom Visibility"],
    coverageTitle: "PROTECTION AREAS",
    coverageAreas: ["Customer entrances", "Tills and checkout", "Sales floors", "Stockrooms", "Delivery access", "Customer parking"],
    productsTitle: "RECOMMENDED SOLUTION",
    recommendedProducts: ["Low-Light Turret Cameras", "Dome Cameras", "Bullet Cameras", "NVR & Storage", "PoE Switches"],
    requirementLabel: "Retail & Commercial requirement:",
    requirementText: "Keep entrances, transactions and stock areas visible with reliable detail throughout changing light conditions.",
  },
  {
    slug: "corporate",
    number: "02",
    name: "Offices & Corporate",
    theme: "light",
    heroVariant: "split-photo-left",
    image: "/images/industries/corporate.jpg",
    imageAlt: "Modern office lobby and corridor",
    badge: "OFFICE & CORPORATE SECURITY",
    headline: "Discreet security for the modern workplace.",
    sub: "Discreet dome and turret cameras for lobbies, floors and car parks.",
    statusBadge: { eyebrow: "WORKPLACE OVERVIEW", text: "Quiet, professional coverage", icon: "MapPin" },
    features: [
      { n: "01", title: "Discreet Coverage", desc: "Low-profile cameras that complement professional interiors" },
      { n: "02", title: "Floor-Wide Visibility", desc: "Clear oversight from reception through shared work areas" },
      { n: "03", title: "Car-Park Monitoring", desc: "Reliable visibility around staff and visitor parking" },
    ],
    floorplan: {
      title: "TYPICAL OFFICE COVERAGE",
      subtitle: "Lobby · Floors · Car park",
      points: [
        { label: "Office floor", top: "22%", left: "48%" },
        { label: "Reception", top: "62%", left: "16%" },
        { label: "Meeting rooms", top: "58%", left: "78%" },
        { label: "Server room", top: "82%", left: "50%" },
      ],
    },
    coverageTitle: "COVERAGE AREAS",
    coverageAreas: ["Reception and lobbies", "Office floors", "Meeting rooms", "Server rooms", "Access points", "Employee car parks"],
    productsTitle: "RECOMMENDED PRODUCTS",
    recommendedProducts: ["Discreet Dome Cameras", "Turret Cameras", "Access-Area Cameras", "Central NVR", "PoE Switches"],
    requirementLabel: "Offices & Corporate requirement:",
    requirementText: "Protect people, workspaces and access points with professional coverage that blends into the office environment.",
  },
  {
    slug: "residential",
    number: "03",
    name: "Residential Compounds",
    theme: "light",
    heroVariant: "stacked",
    image: "/images/industries/residential.jpg",
    imageAlt: "Aerial view of a residential villa compound",
    badge: "RESIDENTIAL COMPOUND SECURITY",
    headline: "Confident protection from gate to villa.",
    sub: "Perimeter bullet cameras and Wi-Fi cube cameras for gates and villas.",
    pins: [
      { label: "Main gate", top: "80%", left: "8%" },
      { label: "Internal road", top: "78%", left: "40%" },
      { label: "Shared areas", top: "18%", left: "72%" },
    ],
    features: [
      { title: "Perimeter Monitoring", desc: "Visibility through changing light", icon: "Shield" },
      { title: "Remote Mobile Viewing", desc: "Stay connected from anywhere", icon: "Smartphone" },
      { title: "Reliable Recording", desc: "Recorded coverage when needed", icon: "Clock" },
    ],
    coverageTitle: "COMMUNITY COVERAGE",
    coverageAreas: ["Compound gates", "Villa entrances", "Property perimeters", "Internal roads", "Shared spaces", "Resident parking"],
    productsTitle: "RECOMMENDED PRODUCTS",
    recommendedProducts: ["Perimeter Bullet Cameras", "Wi-Fi Cube Cameras", "Entrance Dome Cameras", "NVR & Storage", "PoE Switches"],
    requirementLabel: "Residential Compounds requirement:",
    requirementText: "Combine dependable perimeter coverage with simple Wi-Fi visibility for gates, villas and shared residential spaces.",
  },
  {
    slug: "logistics",
    number: "04",
    name: "Warehousing & Logistics",
    theme: "dark",
    heroVariant: "stacked",
    image: "/images/industries/logistics.jpg",
    imageAlt: "Warehouse loading dock and storage aisles",
    badge: "WAREHOUSING & LOGISTICS SECURITY",
    headline: "Wide-angle visibility across every operation.",
    sub: "Wide-angle NVR setups covering loading docks and long aisles.",
    pins: [
      { label: "Yard 01", top: "82%", left: "8%" },
      { label: "Dock 06", top: "22%", left: "42%" },
      { label: "Dispatch", top: "58%", left: "78%" },
    ],
    processSteps: ["Vehicle Arrival", "Loading Dock", "Storage", "Dispatch"],
    statTiles: [
      { value: "120m", label: "WIDE-ANGLE COVERAGE" },
      { value: "24/7", label: "LONG-AISLE DETAIL" },
      { value: "30d", label: "LOADING-DOCK VISIBILITY" },
      { value: "360°", label: "CENTRAL NVR RECORDING" },
    ],
    coverageTitle: "OPERATIONAL COVERAGE",
    coverageAreas: ["Vehicle arrival", "Loading docks", "Long storage aisles", "Dispatch areas", "External yards", "Stock handling"],
    productsTitle: "RECOMMENDED PRODUCTS",
    recommendedProducts: ["Wide-Angle Cameras", "Varifocal Bullet Cameras", "Low-Light Dome Cameras", "High-Capacity NVR", "PoE Switches"],
    requirementLabel: "Warehousing & Logistics requirement:",
    requirementText: "Maintain clear operational visibility across loading activity, long warehouse aisles and high-traffic dispatch zones.",
  },
  {
    slug: "schools",
    number: "05",
    name: "Education",
    theme: "light",
    heroVariant: "split-photo-right",
    image: "/images/industries/education.jpg",
    imageAlt: "Modern school campus building and grounds",
    badge: "EDUCATION SECURITY",
    headline: "Campus-wide coverage, simply connected.",
    sub: "Campus-wide coverage with centralized NVR recording and PoE simplicity.",
    statusBadge: { eyebrow: "CAMPUS OVERVIEW", text: "Connected spaces. Central recording.", icon: "MapPin" },
    features: [
      { n: "PRIORITY 01", title: "Campus-Wide Visibility", desc: "Consistent visibility across the campus", icon: "Eye" },
      { n: "PRIORITY 02", title: "Centralized Recording", desc: "One NVR for coordinated recording", icon: "Radio" },
      { n: "PRIORITY 03", title: "Simple PoE Network", desc: "Power and data through simple PoE", icon: "Zap" },
      { n: "PRIORITY 04", title: "Controlled Entry Points", desc: "Clear coverage at gates and entrances", icon: "KeyRound" },
    ],
    coverageTitle: "VISIBILITY AREAS",
    coverageAreas: ["Main gates", "Reception", "Corridors", "Learning areas", "Shared spaces", "Playgrounds", "Staff parking"],
    productsTitle: "RECOMMENDED PRODUCTS",
    recommendedProducts: ["Corridor Dome Cameras", "Entry Turret Cameras", "Outdoor Bullet Cameras", "Central NVR", "PoE Switches"],
    requirementLabel: "Education requirement:",
    requirementText: "Create consistent campus visibility with centralized recording and straightforward PoE connectivity across every building.",
  },
  {
    slug: "hospitality",
    number: "06",
    name: "Hospitality",
    theme: "light",
    heroVariant: "overlay",
    image: "/images/industries/hospitality.jpg",
    imageAlt: "Premium hospitality lobby and guest entrance",
    badge: "HOSPITALITY SECURITY",
    headline: "Discreet protection for every guest space.",
    sub: "Vandal-resistant IK10 domes for corridors, entrances and back-of-house.",
    statusBadge: { eyebrow: "", text: "IK10 guest-area protection", icon: "ShieldCheck" },
    features: [
      { title: "IK10 Vandal Resistance", desc: "Durable housings for exposed public circulation areas", icon: "ShieldCheck" },
      { title: "Discreet Guest Coverage", desc: "Low-profile placement that respects the guest experience", icon: "Eye" },
      { title: "Back-of-House Visibility", desc: "Clear operational oversight beyond guest-facing spaces", icon: "MoonStar" },
    ],
    coverageTitle: "HOSPITALITY COVERAGE",
    coverageAreas: ["Guest entrances", "Reception and lobby", "Guest corridors", "Lift areas", "Service entrances", "Back-of-house"],
    productsTitle: "RECOMMENDED PRODUCTS",
    recommendedProducts: ["IK10 Dome Cameras", "Discreet Turret Cameras", "Low-Light Cameras", "Central NVR", "PoE Switches"],
    requirementLabel: "Hospitality requirement:",
    requirementText: "Preserve a welcoming guest experience while protecting corridors, entrances and operational areas with durable equipment.",
  },
];
