export interface SpecRow {
  label: string;
  value: string;
}

export interface SpecSection {
  section: string;
  rows: SpecRow[];
}

export interface Datasheet {
  pdfUrl: string;
  overview: string;
  keyFeatures: string[];
  warranty: string;
  specSections: SpecSection[];
}

export const datasheets: Record<string, Datasheet> = {
  "bullet-28": {
    pdfUrl: "/datasheets/eyrb-28.pdf",
    warranty: "5 Year Warranty",
    overview:
      "Delivers clear day-and-night imaging with 2MP, 5MP and 8MP resolution options, 30m Smart IR, True 120dB WDR and 3D DNR. AI-powered smart detection, a built-in microphone, 512GB microSD support and PoE/DC12V power sit inside a durable IP67 and IK10 housing, making it suitable for both indoor and outdoor installations.",
    keyFeatures: [
      "2MP / 5MP / 8MP Resolution",
      "2.8mm Fixed Lens",
      "30m Smart IR Night Vision",
      "True 120dB WDR",
      "3D Digital Noise Reduction",
      "AI Smart Detection",
      "Built-in Microphone",
      "Supports 512GB microSD",
      "H.265/H.264 Compression",
      "PoE & DC12V Power",
      "IP67 & IK10 Protection",
      "ONVIF Compatible",
    ],
    specSections: [
      {
        section: "Camera",
        rows: [
          { label: "Image Sensor", value: "1/2.8\" 2MP & 5MP progressive scan CMOS, 1/2.7\" 8MP progressive scan CMOS" },
          { label: "Effective Pixels", value: "2MP: 1920×1080 / 5MP: 2592×1944 / 8MP: 3840×2160" },
          { label: "Min. Illumination", value: "0.005 Lux @ F1.2 (AGC ON), 0 Lux with IR ON" },
          { label: "IR Distance", value: "Up to 30m" },
          { label: "Shutter", value: "1/2s – 1/50,000s" },
          { label: "Lens", value: "2.8mm fixed, F1.2 — FOV 2MP: H89.7° V58.4° D97.5° / 5MP: H89.7° V73.5° D102.4° / 8MP: H87.7° V56.7° D95.5°" },
          { label: "DORI", value: "2MP: Detect 38.6m / Observe 15.4m / Recognise 7.7m / Identify 3.9m — 5MP: Detect 52.1m / Observe 20.8m / Recognise 10.4m / Identify 5.2m — 8MP: Detect 79.9m / Observe 32.0m / Recognise 16.0m / Identify 8.0m" },
          { label: "Day / Night", value: "IR-CUT filter: auto, manual or scheduled" },
          { label: "Digital Noise Reduction", value: "3D Digital Noise Reduction" },
          { label: "WDR", value: "True WDR (120dB)" },
        ],
      },
      {
        section: "Compression Standard",
        rows: [
          { label: "Codec", value: "H.264 / H.265 / MJPEG" },
          { label: "Data Rate", value: "Main: 256–12000kbps, Sub: 50–2048kbps" },
          { label: "Audio Compression", value: "G.711A/G.711U/AAC/G.726/PCM" },
        ],
      },
      {
        section: "Image",
        rows: [
          { label: "Frame Rate — Main Stream", value: "2MP@30fps; 960P@30fps; 720P@30fps / 5MP@30fps; 4MP@30fps; 3MP@30fps; 2MP@30fps; 960P@30fps; 720P@30fps / 8MP@25fps; 5MP@30fps; 4MP@30fps; 3MP@30fps; 2MP@30fps; 960P@30fps; 720P@30fps" },
          { label: "Frame Rate — Sub Stream", value: "D1 (704×576)@30fps; VGA (640×480)@30fps; HVGA (640×360)@30fps; CIF (352×288)@30fps" },
          { label: "Features", value: "3DNR, WDR, AWB, AGC, BLC, Defog, ROI, Motion Detection, Privacy Masking" },
          { label: "Image Adjustment", value: "Mirroring, saturation, brightness, sharpness, contrast, exposure, BLC, WDR, defog, shutter, LDC" },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Protocols", value: "TCP/IP, UDP, HTTP, HTTPS, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTCP, PPPoE, NTP, UPnP, SMTP; SNMP v1/v2/v3, IEEE802.1X, IPv4/v6; Bonjour; SIP, ICMP, IGMP, QoS, SSL/TLS" },
          { label: "Compatibility", value: "HTTP CGI, ONVIF (Profile S/G/T), WebRTC" },
          { label: "Video Analytics", value: "Face / Human / Vehicle / Pet Detection, Smart Motion Detection, Line-crossing Detection, Intrusion Detection" },
        ],
      },
      {
        section: "Interface",
        rows: [
          { label: "Network", value: "RJ-45 LAN Port" },
          { label: "POE", value: "IEEE 802.3af, Max 7W" },
          { label: "Audio", value: "Built-in Microphone" },
          { label: "Local Recording", value: "Built-in micro SD slot, supporting max. 512GB" },
          { label: "Hardware Reset", value: "Built-in" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Color", value: "White" },
          { label: "Power Supply", value: "PoE & DC12V" },
          { label: "Operating Humidity", value: "10% – 90% RH (non-condensing)" },
          { label: "Operating Temperature", value: "−40°C to +65°C" },
          { label: "Ingress Protection", value: "IP67 & IK10" },
          { label: "Power Consumption", value: "Max 7W" },
          { label: "Dimensions", value: "207.6 × 74.2 × 74.2 mm (incl. bracket); camera body 113.2mm" },
          { label: "Weight", value: "N.W.: 380g / G.W.: 480g" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "ONVIF Profile", value: "ONVIF (Profile S/G/T)" },
        ],
      },
    ],
  },

  "bullet-z": {
    pdfUrl: "/datasheets/eyrb-z.pdf",
    warranty: "5 Year Warranty",
    overview:
      "Delivers clear day-and-night imaging with 2MP, 5MP and 8MP resolution options, 60m Smart IR, Real 120dB WDR and 3D DNR. AI-powered smart detection, a built-in microphone, 512GB microSD support and PoE/DC12V power sit inside a durable IP67 and IK10 housing, making it suitable for both indoor and outdoor installations.",
    keyFeatures: [
      "2MP / 5MP / 8MP Resolution",
      "2.8–13mm Motorized Varifocal Lens",
      "60m Smart IR Night Vision",
      "Real 120dB WDR",
      "3D Digital Noise Reduction",
      "AI Smart Detection",
      "Built-in Microphone",
      "Supports 512GB microSD",
      "H.265+/H.265/H.264 Compression",
      "PoE & DC12V Power",
      "IP67 & IK10 Protection",
      "ONVIF Compatible",
    ],
    specSections: [
      {
        section: "Camera",
        rows: [
          { label: "Image Sensor", value: "1/2.8\" 2MP & 5MP progressive scan CMOS, 1/2.7\" 8MP progressive scan CMOS" },
          { label: "Effective Pixels", value: "2MP: 1920×1080 / 5MP: 2592×1994 / 8MP: 3840×2160" },
          { label: "Min. Illumination", value: "0.005 Lux @ (F1.2, AGC ON), 0 Lux with IR ON" },
          { label: "IR Distance", value: "Up to 60m" },
          { label: "Shutter", value: "1/2s – 1/50,000s" },
          { label: "Lens", value: "At 2.8mm (wide) — FOV: 2MP H89.7° V58.4° D97.5°, 5MP H89.7° V73.5° D102.4°, 8MP H87.7° V56.7° D95.5°. At 13mm (tele) — FOV: 2MP H24.2° V13.7° D27.6°, 5MP H24.2° V18.3° D30.0°, 8MP H23.4° V13.3° D26.7°" },
          { label: "DORI", value: "At 2.8mm (wide): 2MP Detect38.6m/Observe15.4m/Recognise7.7m/Identify3.9m; 5MP Detect52.1m/Observe20.8m/Recognise10.4m/Identify5.2m; 8MP Detect79.9m/Observe32.0m/Recognise16.0m/Identify8.0m. At 13mm (tele): 2MP Detect179.1m/Observe71.6m/Recognise35.8m/Identify17.9m; 5MP Detect241.8m/Observe96.7m/Recognise48.4m/Identify24.2m; 8MP Detect370.9m/Observe148.3m/Recognise74.2m/Identify37.1m" },
          { label: "Day & Night", value: "IR-CUT Auto Switch, Manual Switch, Timing Switch" },
          { label: "Digital Noise Reduction", value: "3D Digital Noise Reduction" },
          { label: "WDR", value: "Real WDR (120dB)" },
        ],
      },
      {
        section: "Compression Standard",
        rows: [
          { label: "Codec", value: "H.264 / H.265 / MJPEG" },
          { label: "Data Rate", value: "Main: 256–12000kbps, Sub: 50–2048kbps" },
          { label: "Audio Compression", value: "G.711A/G.711U/AAC/G.726/PCM" },
        ],
      },
      {
        section: "Image",
        rows: [
          { label: "Frame Rate — Main Stream", value: "2MP@30fps; 960P@30fps; 720P@30fps / 5MP@30fps; 4MP@30fps; 3MP@30fps; 2MP@30fps; 960P@30fps; 720P@30fps / 8MP@25fps; 5MP@30fps; 4MP@30fps; 3MP@30fps; 2MP@30fps; 960P@30fps; 720P@30fps" },
          { label: "Frame Rate — Sub Stream", value: "D1(704×576)@30fps, VGA(640×480)@30fps, HVGA(640×360)@30fps, CIF(352×288)@30fps" },
          { label: "Features", value: "3DNR, WDR, AWB, AGC, BLC, Defog, ROI, Motion Detection, Privacy Masking" },
          { label: "Image Adjustment", value: "Mirroring, Saturation, Brightness, Sharpness, Contrast Adjustment, Exposure, BLC, WDR, Defog, Shutter etc." },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Protocols", value: "TCP/IP, UDP, HTTP, HTTPS, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTCP, PPPoE, NTP, UPnP, SMTP; SNMP v1/v2/v3, IEEE802.1X, IPv4/v6; Bonjour; SIP, ICMP, IGMP, QoS, SSL/TLS" },
          { label: "Compatibility", value: "HTTP CGI, ONVIF, WebRTC" },
          { label: "Video Analytics", value: "Face / Human / Vehicle / Pet Detection, Smart Motion Detection, Line-crossing Detection, Intrusion Detection" },
        ],
      },
      {
        section: "Interface",
        rows: [
          { label: "Network", value: "RJ-45 LAN Port" },
          { label: "POE", value: "IEEE 802.3af, Max 7W" },
          { label: "Microphone", value: "Built-in Microphone" },
          { label: "Local Recording", value: "Built-in micro SD slot, supporting max. 512GB" },
          { label: "Hardware Reset", value: "Built-in" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Color", value: "White" },
          { label: "Power Supply", value: "PoE & DC12V" },
          { label: "Work Humidity", value: "10% – 90%" },
          { label: "Operation Temperature", value: "−40°C to +65°C" },
          { label: "Ingress Protection", value: "IP67 & IK10" },
          { label: "Power Consumption", value: "Max 8.5W" },
          { label: "Size", value: "222.0 × 82.4 × 75.4mm" },
          { label: "Weight", value: "N.W.: 580g, G.W.: 780g" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "ONVIF Profile", value: "ONVIF (Profile S/G/T)" },
        ],
      },
    ],
  },

  "bullet-l": {
    pdfUrl: "/datasheets/eyrb-l.pdf",
    warranty: "5 Year Warranty",
    overview:
      "Delivers reliable surveillance with 2MP and 4MP resolution options for residential, commercial, and industrial applications. Featuring a progressive CMOS sensor, Smart IR night vision up to 30m, Digital WDR, and 3D DNR, it provides clear images in both day and night conditions. Its IP66-rated metal housing, PoE/DC12V support, H.265 compression, and ONVIF compatibility ensure durable, efficient, and easy deployment for indoor and outdoor installations.",
    keyFeatures: [
      "2MP & 4MP Resolution Options",
      "Progressive CMOS Image Sensor",
      "H.264/H.265/MJPEG Video Compression",
      "2.8mm & 3.6mm Fixed Lens Options",
      "Smart IR Night Vision up to 30m",
      "Real WDR for Balanced Imaging",
      "3D DNR for Reduced Image Noise",
      "Advanced Image Enhancement (AGC, AWB, ROI, etc.)",
      "Smart Detection for People, Vehicles & Motion",
      "PoE & DC12V Power Support",
      "ONVIF Compatible",
      "IP66-Rated Metal Housing",
    ],
    specSections: [
      {
        section: "Camera",
        rows: [
          { label: "Image Sensor", value: "1/3\" progressive scan CMOS" },
          { label: "Effective Pixels", value: "4MP: 2560×1440 / 2MP: 1920×1080" },
          { label: "Min. Illumination", value: "0.01 Lux @ (F1.8, AGC ON), 0 Lux with IR ON" },
          { label: "Shutter", value: "1/2s – 1/50,000s" },
          { label: "IR Range", value: "Smart IR up to 30m" },
          { label: "Lens", value: "At 2.8mm (wide) — FOV: 2MP (1/3\") H81° V51° D89° / 4MP (1/3\") H81° V51° D89°" },
          { label: "DORI", value: "At 2.8mm (wide): 2MP Detect45.0m/Observe18.0m/Recognise9.0m/Identify4.5m; 4MP Detect59.9m/Observe24.0m/Recognise12.0m/Identify6.0m" },
          { label: "Day & Night", value: "IR-CUT Auto Switch, Manual Switch, Timing Switch" },
          { label: "DNR", value: "3D Digital Noise Reduction" },
          { label: "WDR", value: "Digital WDR" },
        ],
      },
      {
        section: "Compression Standard",
        rows: [
          { label: "Codec", value: "H.264 / H.265 / MJPEG" },
          { label: "Data Rate", value: "Main: 256–8000kbps, Sub: 50–1000kbps" },
        ],
      },
      {
        section: "Image",
        rows: [
          { label: "Frame Rate", value: "30fps @ 4MP / 3MP / 2MP / 960P / 720P" },
          { label: "Main Stream 2MP", value: "30fps 4MP(2560×1440) · 30fps 3MP(2304×1280) · 30fps 2MP(1920×1080) · 30fps 960P(1280×960) · 30fps 720P(1280×720)" },
          { label: "Main Stream 4MP", value: "30fps 4MP(2560×1440) · 30fps 3MP(2304×1280) · 30fps 2MP(1920×1080) · 30fps 960P(1280×960) · 30fps 720P(1280×720)" },
          { label: "Sub Stream 2MP & 4MP", value: "D1(704×576) · VGA(640×480) · HVGA(640×360) · CIF(352×288) @30fps" },
          { label: "Features", value: "DWDR, 3D DNR, AGC, MGC, AWB, ROI, Motion Detection, Privacy Masking" },
          { label: "Image Adjustment", value: "Mirroring, Saturation, Brightness, Sharpness, Contrast Adjustment, Exposure, DWDR, Shutter, IRIS, LDC, etc." },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Protocols", value: "TCP/IP, UDP, HTTP, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTCP, NTP, UPnP, SMTP; SNMP v1/v2/v3, IPv4/v6; Bonjour; ICMP, IGMP, QoS, SSL/TLS" },
          { label: "Compatibility", value: "HTTP CGI, ONVIF, WebRTC" },
          { label: "Intelligent Detection", value: "Face / Human / Vehicle / Non-Motor Vehicle Detection, Smart Motion Detection, Line-Crossing Detection, Zone-Intrusion Detection, Abnormal Audio Detection" },
        ],
      },
      {
        section: "Interface",
        rows: [
          { label: "Network", value: "RJ-45 LAN Port" },
          { label: "PoE", value: "IEEE 802.3af, Max 7W" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Color", value: "White" },
          { label: "Power Supply", value: "PoE & DC12V" },
          { label: "Work Humidity", value: "10% – 90%" },
          { label: "Operation Temperature", value: "−40°C to 60°C" },
          { label: "Ingress Protection", value: "Metal housing; IP66 for indoor and outdoor use" },
          { label: "Power Consumption", value: "Max. 6W" },
          { label: "Size", value: "152.1mm × 68.3mm × 62.9mm" },
          { label: "Weight", value: "N.W.: 270g, G.W.: 350g" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "ONVIF Profile", value: "ONVIF (Profile S/G/T)" },
        ],
      },
    ],
  },

  "dome-28": {
    pdfUrl: "/datasheets/eyrd-28.pdf",
    warranty: "5 Year Warranty",
    overview:
      "Delivers clear day-and-night imaging with 2MP, 5MP and 8MP resolution options, 30m Smart IR, True 120dB WDR and 3D DNR. AI-powered smart detection, a built-in microphone, 512GB microSD support and PoE/DC12V power sit inside a durable IP67 and IK10 housing, making it suitable for both indoor and outdoor installations.",
    keyFeatures: [
      "2MP / 5MP / 8MP Resolution",
      "2.8mm Fixed Lens",
      "30m Smart IR Night Vision",
      "True 120dB WDR",
      "3D Digital Noise Reduction",
      "AI Smart Detection",
      "Built-in Microphone",
      "Supports 512GB microSD",
      "H.265/H.264 Compression",
      "PoE & DC12V Power",
      "IP67 & IK10 Protection",
      "ONVIF Compatible",
    ],
    specSections: [
      {
        section: "Camera",
        rows: [
          { label: "Image Sensor", value: "1/2.8\" 2MP & 5MP progressive scan CMOS, 1/2.7\" 8MP progressive scan CMOS" },
          { label: "Effective Pixels", value: "2MP: 1920×1080 / 5MP: 2592×1944 / 8MP: 3840×2160" },
          { label: "Min. Illumination", value: "0.005 Lux @ F1.2 (AGC ON), 0 Lux with IR ON" },
          { label: "IR Distance", value: "Up to 30m" },
          { label: "Shutter", value: "1/2s – 1/50,000s" },
          { label: "Lens", value: "2.8mm fixed, F1.2 — FOV 2MP: H89.7° V58.4° D97.5° / 5MP: H89.7° V73.5° D102.4° / 8MP: H87.7° V56.7° D95.5°" },
          { label: "DORI", value: "2MP: Detect 38.6m / Observe 15.4m / Recognise 7.7m / Identify 3.9m — 5MP: Detect 52.1m / Observe 20.8m / Recognise 10.4m / Identify 5.2m — 8MP: Detect 79.9m / Observe 32.0m / Recognise 16.0m / Identify 8.0m" },
          { label: "Day / Night", value: "IR-CUT filter: auto, manual or scheduled" },
          { label: "Digital Noise Reduction", value: "3D Digital Noise Reduction" },
          { label: "WDR", value: "True WDR (120dB)" },
        ],
      },
      {
        section: "Compression Standard",
        rows: [
          { label: "Codec", value: "H.264 / H.265 / MJPEG" },
          { label: "Data Rate", value: "Main: 256–12000kbps, Sub: 50–2048kbps" },
          { label: "Audio Compression", value: "G.711A/G.711U/AAC/G.726/PCM" },
        ],
      },
      {
        section: "Image",
        rows: [
          { label: "Frame Rate — Main Stream", value: "2MP@30fps; 960P@30fps; 720P@30fps / 5MP@30fps; 4MP@30fps; 3MP@30fps; 2MP@30fps; 960P@30fps; 720P@30fps / 8MP@25fps; 5MP@30fps; 4MP@30fps; 3MP@30fps; 2MP@30fps; 960P@30fps; 720P@30fps" },
          { label: "Frame Rate — Sub Stream", value: "D1 (704×576)@30fps; VGA (640×480)@30fps; HVGA (640×360)@30fps; CIF (352×288)@30fps" },
          { label: "Features", value: "3DNR, WDR, AWB, AGC, BLC, Defog, ROI, Motion Detection, Privacy Masking" },
          { label: "Image Adjustment", value: "Mirroring, saturation, brightness, sharpness, contrast, exposure, BLC, WDR, defog, shutter, LDC" },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Protocols", value: "TCP/IP, UDP, HTTP, HTTPS, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTCP, PPPoE, NTP, UPnP, SMTP; SNMP v1/v2/v3, IEEE802.1X, IPv4/v6; Bonjour; SIP, ICMP, IGMP, QoS, SSL/TLS" },
          { label: "Compatibility", value: "HTTP CGI, ONVIF (Profile S/G/T), WebRTC" },
          { label: "Video Analytics", value: "Face / Human / Vehicle / Pet Detection, Smart Motion Detection, Line-crossing Detection, Intrusion Detection" },
        ],
      },
      {
        section: "Interface",
        rows: [
          { label: "Network", value: "RJ-45 LAN Port" },
          { label: "POE", value: "IEEE 802.3af, Max 7W" },
          { label: "Audio", value: "Built-in Microphone" },
          { label: "Local Recording", value: "Built-in micro SD slot, supporting max. 512GB" },
          { label: "Hardware Reset", value: "Built-in" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Color", value: "White" },
          { label: "Power Supply", value: "PoE & DC12V" },
          { label: "Operating Humidity", value: "10% – 90%" },
          { label: "Operating Temperature", value: "−40°C to +65°C" },
          { label: "Ingress Protection", value: "IP67 & IK10" },
          { label: "Power Consumption", value: "Max 7W" },
          { label: "Dimensions", value: "Φ118.3 × 92.8mm" },
          { label: "Weight", value: "N.W.: 380g, G.W.: 480g" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "ONVIF Profile", value: "ONVIF (Profile S/G/T)" },
        ],
      },
    ],
  },

  "dome-z": {
    pdfUrl: "/datasheets/eyrd-z.pdf",
    warranty: "5 Year Warranty",
    overview:
      "Delivers clear day-and-night imaging with 2MP, 5MP and 8MP resolution options, 40m Smart IR, True 120dB WDR and 3D DNR. AI-powered smart detection, a built-in microphone, 512GB microSD support and PoE/DC12V power sit inside a durable IP67 and IK10 housing, making it suitable for both indoor and outdoor installations.",
    keyFeatures: [
      "2MP / 5MP / 8MP Resolution",
      "2.8–13mm Motorized Varifocal Lens",
      "40m Smart IR Night Vision",
      "Real 120dB WDR",
      "3D Digital Noise Reduction",
      "AI Smart Detection",
      "Built-in Microphone",
      "Supports 512GB microSD",
      "H.264/H.265 Compression",
      "PoE & DC12V Power",
      "IP67 & IK10 Protection",
      "ONVIF Compatible",
    ],
    specSections: [
      {
        section: "Camera",
        rows: [
          { label: "Image Sensor", value: "1/2.8\" 2MP & 5MP progressive scan CMOS, 1/2.7\" 8MP progressive scan CMOS" },
          { label: "Effective Pixels", value: "2MP: 1920×1080 / 5MP: 2592×1994 / 8MP: 3840×2160" },
          { label: "Min. Illumination", value: "0.005 Lux @ (F1.2, AGC ON), 0 Lux with IR ON" },
          { label: "IR Distance", value: "Up to 40m" },
          { label: "Shutter", value: "1/2s – 1/50,000s" },
          { label: "Lens", value: "At 2.8mm (wide) — FOV: 2MP H89.7° V58.4° D97.5°, 5MP H89.7° V73.5° D102.4°, 8MP H87.7° V56.7° D95.5°. At 13mm (tele) — FOV: 2MP H24.2° V13.7° D27.6°, 5MP H24.2° V18.3° D30.0°, 8MP H23.4° V13.3° D26.7°" },
          { label: "DORI", value: "At 2.8mm (wide): 2MP Detect38.6m/Observe15.4m/Recognise7.7m/Identify3.9m; 5MP Detect52.1m/Observe20.8m/Recognise10.4m/Identify5.2m; 8MP Detect79.9m/Observe32.0m/Recognise16.0m/Identify8.0m. At 13mm (tele): 2MP Detect179.1m/Observe71.6m/Recognise35.8m/Identify17.9m; 5MP Detect241.8m/Observe96.7m/Recognise48.4m/Identify24.2m; 8MP Detect370.9m/Observe148.3m/Recognise74.2m/Identify37.1m" },
          { label: "Day & Night", value: "IR-CUT Auto Switch, Manual Switch, Timing Switch" },
          { label: "Digital Noise Reduction", value: "3D Digital Noise Reduction" },
          { label: "WDR", value: "Real WDR (120dB)" },
        ],
      },
      {
        section: "Compression Standard",
        rows: [
          { label: "Codec", value: "H.264 / H.265 / MJPEG" },
          { label: "Data Rate", value: "Main: 256–12000kbps, Sub: 50–2048kbps" },
          { label: "Audio Compression", value: "G.711A/G.711U/AAC/G.726/PCM" },
        ],
      },
      {
        section: "Image",
        rows: [
          { label: "Frame Rate — Main Stream", value: "2MP@30fps; 960P@30fps; 720P@30fps / 5MP@30fps; 4MP@30fps; 3MP@30fps; 2MP@30fps; 960P@30fps; 720P@30fps / 8MP@25fps; 5MP@30fps; 4MP@30fps; 3MP@30fps; 2MP@30fps; 960P@30fps; 720P@30fps" },
          { label: "Frame Rate — Sub Stream", value: "D1(704×576)@30fps, VGA(640×480)@30fps, HVGA(640×360)@30fps, CIF(352×288)@30fps" },
          { label: "Features", value: "3DNR, WDR, AWB, AGC, BLC, Defog, ROI, Motion Detection, Privacy Masking" },
          { label: "Image Adjustment", value: "Mirroring, Saturation, Brightness, Sharpness, Contrast Adjustment, Exposure, BLC, WDR, Defog, Shutter etc." },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Protocols", value: "TCP/IP, UDP, HTTP, HTTPS, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTCP, PPPoE, NTP, UPnP, SMTP; SNMP v1/v2/v3, IEEE802.1X, IPv4/v6; Bonjour; SIP, ICMP, IGMP, QoS, SSL/TLS" },
          { label: "Compatibility", value: "HTTP CGI, ONVIF, WebRTC" },
          { label: "Video Analytics", value: "Face / Human / Vehicle / Pet Detection, Smart Motion Detection, Line-crossing Detection, Intrusion Detection" },
        ],
      },
      {
        section: "Interface",
        rows: [
          { label: "Network", value: "RJ-45 LAN Port" },
          { label: "POE", value: "IEEE 802.3af, Max 7W" },
          { label: "Microphone", value: "Built-in Microphone" },
          { label: "Local Recording", value: "Built-in micro SD slot, supporting max. 512GB" },
          { label: "Hardware Reset", value: "Built-in" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Color", value: "White" },
          { label: "Power Supply", value: "PoE & DC12V" },
          { label: "Work Humidity", value: "10% – 90%" },
          { label: "Operation Temperature", value: "−40°C to +65°C" },
          { label: "Ingress Protection", value: "IP67 & IK10" },
          { label: "Power Consumption", value: "Max 8.5W" },
          { label: "Size", value: "Φ116 × 96.5mm" },
          { label: "Weight", value: "N.W.: 590g, G.W.: 690g" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "ONVIF Profile", value: "ONVIF (Profile S/G/T)" },
        ],
      },
    ],
  },

  "turret-28": {
    pdfUrl: "/datasheets/eyrt-28.pdf",
    warranty: "5 Year Warranty",
    overview:
      "Delivers clear day-and-night imaging with 2MP, 5MP and 8MP resolution options, 30m Smart IR, True 120dB WDR and 3D DNR. AI-powered smart detection, a built-in microphone, 512GB microSD support and PoE/DC12V power sit inside a durable IP67 and IK10 housing, making it suitable for both indoor and outdoor installations.",
    keyFeatures: [
      "2MP / 5MP / 8MP Resolution",
      "2.8mm Fixed Lens",
      "30m Smart IR Night Vision",
      "True 120dB WDR",
      "3D Digital Noise Reduction",
      "AI Smart Detection",
      "Built-in Microphone",
      "Supports 512GB microSD",
      "H.265/H.264 Compression",
      "PoE & DC12V Power",
      "IP67 & IK10 Protection",
      "ONVIF Compatible",
    ],
    specSections: [
      {
        section: "Camera",
        rows: [
          { label: "Image Sensor", value: "1/2.8\" 2MP & 5MP progressive scan CMOS, 1/2.7\" 8MP progressive scan CMOS" },
          { label: "Effective Pixels", value: "2MP: 1920×1080 / 5MP: 2592×1944 / 8MP: 3840×2160" },
          { label: "Min. Illumination", value: "0.005 Lux @ F1.2 (AGC ON), 0 Lux with IR ON" },
          { label: "IR Distance", value: "Up to 30m" },
          { label: "Shutter", value: "1/2s – 1/50,000s" },
          { label: "Lens", value: "2.8mm fixed, F1.2 — FOV 2MP: H89.7° V58.4° D97.5° / 5MP: H89.7° V73.5° D102.4° / 8MP: H87.7° V56.7° D95.5°" },
          { label: "DORI", value: "2MP: Detect 38.6m / Observe 15.4m / Recognise 7.7m / Identify 3.9m — 5MP: Detect 52.1m / Observe 20.8m / Recognise 10.4m / Identify 5.2m — 8MP: Detect 79.9m / Observe 32.0m / Recognise 16.0m / Identify 8.0m" },
          { label: "Day / Night", value: "IR-CUT filter: auto, manual or scheduled" },
          { label: "Digital Noise Reduction", value: "3D Digital Noise Reduction" },
          { label: "WDR", value: "True WDR (120dB)" },
        ],
      },
      {
        section: "Compression Standard",
        rows: [
          { label: "Codec", value: "H.264 / H.265 / MJPEG" },
          { label: "Data Rate", value: "Main: 256–12000kbps, Sub: 50–2048kbps" },
          { label: "Audio Compression", value: "G.711A/G.711U/AAC/G.726/PCM" },
        ],
      },
      {
        section: "Image",
        rows: [
          { label: "Frame Rate — Main Stream", value: "2MP@30fps; 960P@30fps; 720P@30fps / 5MP@30fps; 4MP@30fps; 3MP@30fps; 2MP@30fps; 960P@30fps; 720P@30fps / 8MP@25fps; 5MP@30fps; 4MP@30fps; 3MP@30fps; 2MP@30fps; 960P@30fps; 720P@30fps" },
          { label: "Frame Rate — Sub Stream", value: "D1 (704×576)@30fps; VGA (640×480)@30fps; HVGA (640×360)@30fps; CIF (352×288)@30fps" },
          { label: "Features", value: "3DNR, WDR, AWB, AGC, BLC, Defog, ROI, Motion Detection, Privacy Masking" },
          { label: "Image Adjustment", value: "Mirroring, saturation, brightness, sharpness, contrast, exposure, BLC, WDR, defog, shutter, LDC" },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Protocols", value: "TCP/IP, UDP, HTTP, HTTPS, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTCP, PPPoE, NTP, UPnP, SMTP; SNMP v1/v2/v3, IEEE802.1X, IPv4/v6; Bonjour; SIP, ICMP, IGMP, QoS, SSL/TLS" },
          { label: "Compatibility", value: "HTTP CGI, ONVIF (Profile S/G/T), WebRTC" },
          { label: "Video Analytics", value: "Face / Human / Vehicle / Pet Detection, Smart Motion Detection, Line-crossing Detection, Intrusion Detection" },
        ],
      },
      {
        section: "Interface",
        rows: [
          { label: "Network", value: "RJ-45 LAN Port" },
          { label: "POE", value: "IEEE 802.3af, Max 7W" },
          { label: "Audio", value: "Built-in Microphone" },
          { label: "Local Recording", value: "Built-in micro SD slot, supporting max. 512GB" },
          { label: "Hardware Reset", value: "Built-in" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Color", value: "White" },
          { label: "Power Supply", value: "PoE & DC12V" },
          { label: "Operating Humidity", value: "10% – 90%" },
          { label: "Operating Temperature", value: "−40°C to +65°C" },
          { label: "Ingress Protection", value: "IP67 & IK10" },
          { label: "Power Consumption", value: "Max 7W" },
          { label: "Dimensions", value: "Φ92.80 × 89.84mm" },
          { label: "Weight", value: "N.W.: 410g, G.W.: 510g" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "ONVIF Profile", value: "ONVIF (Profile S/G/T)" },
        ],
      },
    ],
  },

  "turret-z": {
    pdfUrl: "/datasheets/eyrt-z.pdf",
    warranty: "5 Year Warranty",
    overview:
      "Delivers clear day-and-night imaging with 2MP, 5MP and 8MP resolution options, 30m Smart IR, Real 120dB WDR and 3D DNR. AI-powered smart detection, a built-in microphone, 512GB microSD support and PoE/DC12V power sit inside a durable IP67 and IK10 housing, making it suitable for both indoor and outdoor installations.",
    keyFeatures: [
      "2MP / 5MP / 8MP Resolution",
      "2.8–13mm Motorized Varifocal Lens",
      "30m Smart IR Night Vision",
      "Real 120dB WDR",
      "3D Digital Noise Reduction",
      "AI Smart Detection",
      "Built-in Microphone",
      "Supports 512GB microSD",
      "H.264/H.265 Compression",
      "PoE & DC12V Power",
      "IP67 & IK10 Protection",
      "ONVIF Compatible",
    ],
    specSections: [
      {
        section: "Camera",
        rows: [
          { label: "Image Sensor", value: "1/2.8\" 2MP & 5MP progressive scan CMOS, 1/2.7\" 8MP progressive scan CMOS" },
          { label: "Effective Pixels", value: "2MP: 1920×1080 / 5MP: 2592×1994 / 8MP: 3840×2160" },
          { label: "Min. Illumination", value: "0.005 Lux @ (F1.2, AGC ON), 0 Lux with IR ON" },
          { label: "IR Distance", value: "Up to 30m" },
          { label: "Shutter", value: "1/2s – 1/50,000s" },
          { label: "Lens", value: "At 2.8mm (wide) — FOV: 2MP H89.7° V58.4° D97.5°, 5MP H89.7° V73.5° D102.4°, 8MP H87.7° V56.7° D95.5°. At 13mm (tele) — FOV: 2MP H24.2° V13.7° D27.6°, 5MP H24.2° V18.3° D30.0°, 8MP H23.4° V13.3° D26.7°" },
          { label: "DORI", value: "At 2.8mm (wide): 2MP Detect38.6m/Observe15.4m/Recognise7.7m/Identify3.9m; 5MP Detect52.1m/Observe20.8m/Recognise10.4m/Identify5.2m; 8MP Detect79.9m/Observe32.0m/Recognise16.0m/Identify8.0m. At 13mm (tele): 2MP Detect179.1m/Observe71.6m/Recognise35.8m/Identify17.9m; 5MP Detect241.8m/Observe96.7m/Recognise48.4m/Identify24.2m; 8MP Detect370.9m/Observe148.3m/Recognise74.2m/Identify37.1m" },
          { label: "Day & Night", value: "IR-CUT Auto Switch, Manual Switch, Timing Switch" },
          { label: "Digital Noise Reduction", value: "3D Digital Noise Reduction" },
          { label: "WDR", value: "Real WDR (120dB)" },
        ],
      },
      {
        section: "Compression Standard",
        rows: [
          { label: "Codec", value: "H.264 / H.265 / MJPEG" },
          { label: "Data Rate", value: "Main: 256–12000kbps, Sub: 50–2048kbps" },
          { label: "Audio Compression", value: "G.711A/G.711U/AAC/G.726/PCM" },
        ],
      },
      {
        section: "Image",
        rows: [
          { label: "Frame Rate — Main Stream", value: "2MP@30fps; 960P@30fps; 720P@30fps / 5MP@30fps; 4MP@30fps; 3MP@30fps; 2MP@30fps; 960P@30fps; 720P@30fps / 8MP@25fps; 5MP@30fps; 4MP@30fps; 3MP@30fps; 2MP@30fps; 960P@30fps; 720P@30fps" },
          { label: "Frame Rate — Sub Stream", value: "D1(704×576)@30fps, VGA(640×480)@30fps, HVGA(640×360)@30fps, CIF(352×288)@30fps" },
          { label: "Features", value: "3DNR, WDR, AWB, AGC, BLC, Defog, ROI, Motion Detection, Privacy Masking" },
          { label: "Image Adjustment", value: "Mirroring, Saturation, Brightness, Sharpness, Contrast Adjustment, Exposure, BLC, WDR, Defog, Shutter etc." },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Protocols", value: "TCP/IP, UDP, HTTP, HTTPS, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTCP, PPPoE, NTP, UPnP, SMTP; SNMP v1/v2/v3, IEEE802.1X, IPv4/v6; Bonjour; SIP, ICMP, IGMP, QoS, SSL/TLS" },
          { label: "Compatibility", value: "HTTP CGI, ONVIF, WebRTC" },
          { label: "Video Analytics", value: "Face / Human / Vehicle / Pet Detection, Smart Motion Detection, Line-crossing Detection, Intrusion Detection" },
        ],
      },
      {
        section: "Interface",
        rows: [
          { label: "Network", value: "RJ-45 LAN Port" },
          { label: "POE", value: "IEEE 802.3af, Max 7W" },
          { label: "Microphone", value: "Built-in Microphone" },
          { label: "Local Recording", value: "Built-in micro SD slot, supporting max. 512GB" },
          { label: "Hardware Reset", value: "Built-in" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Color", value: "White" },
          { label: "Power Supply", value: "PoE & DC12V" },
          { label: "Work Humidity", value: "10% – 90%" },
          { label: "Operation Temperature", value: "−40°C to +65°C" },
          { label: "Ingress Protection", value: "IP67 & IK10" },
          { label: "Power Consumption", value: "Max 7W" },
          { label: "Size", value: "Φ92.80 × 89.84mm" },
          { label: "Weight", value: "N.W.: 410g, G.W.: 510g" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "ONVIF Profile", value: "ONVIF (Profile S/G/T)" },
        ],
      },
    ],
  },

  "turret-l": {
    pdfUrl: "/datasheets/eyrt-l.pdf",
    warranty: "5 Year Warranty",
    overview:
      "Delivers reliable HD surveillance with 2MP and 4MP resolution options, smooth 30fps video, and 2.8mm fixed lens choices. Featuring Digital WDR, 3D DNR, Smart IR up to 25m, H.265+ compression, PoE & DC12V support, and an IP66-rated weatherproof design, it provides dependable day-and-night monitoring for residential, commercial, and office environments.",
    keyFeatures: [
      "2MP & 4MP HD Resolution",
      "30fps Smooth Video",
      "2.8mm Fixed Lens",
      "Smart IR Range up to 25m",
      "Real WDR Technology",
      "3D Digital Noise Reduction",
      "H.264/H.265/MJPEG Video Compression",
      "Smart Human & Vehicle Detection",
      "PoE & DC12V Power Support",
      "IP66 Weatherproof Protection",
      "ONVIF Compatible",
      "Operating Temperature: −40°C to 60°C",
    ],
    specSections: [
      {
        section: "Camera",
        rows: [
          { label: "Image Sensor", value: "1/3\" progressive scan CMOS" },
          { label: "Effective Pixels", value: "4MP: 2560×1440 / 2MP: 1920×1080" },
          { label: "Min. Illumination", value: "0.01 Lux @ (F1.8, AGC ON), 0 Lux with IR ON" },
          { label: "Shutter", value: "1/2s – 1/50,000s" },
          { label: "IR Range", value: "Smart IR up to 25m" },
          { label: "Lens", value: "At 2.8mm (wide) — FOV: 2MP (1/3\") H81° V51° D89° / 4MP (1/3\") H81° V51° D89°" },
          { label: "DORI", value: "At 2.8mm (wide): 2MP Detect45.0m/Observe18.0m/Recognise9.0m/Identify4.5m; 4MP Detect59.9m/Observe24.0m/Recognise12.0m/Identify6.0m" },
          { label: "Day & Night", value: "IR-CUT Auto Switch, Manual Switch, Timing Switch" },
          { label: "DNR", value: "3D Digital Noise Reduction" },
          { label: "WDR", value: "Digital WDR" },
        ],
      },
      {
        section: "Compression Standard",
        rows: [
          { label: "Codec", value: "H.264 / H.265 / MJPEG" },
          { label: "Data Rate", value: "Main: 256–8000kbps, Sub: 50–1000kbps" },
        ],
      },
      {
        section: "Image",
        rows: [
          { label: "Frame Rate", value: "30fps @ 4MP / 3MP / 2MP / 960P / 720P" },
          { label: "Main Stream 2MP", value: "30fps 4MP(2560×1440) · 30fps 3MP(2304×1280) · 30fps 2MP(1920×1080) · 30fps 960P(1280×960) · 30fps 720P(1280×720)" },
          { label: "Main Stream 4MP", value: "30fps 4MP(2560×1440) · 30fps 3MP(2304×1280) · 30fps 2MP(1920×1080) · 30fps 960P(1280×960) · 30fps 720P(1280×720)" },
          { label: "Sub Stream 2MP & 4MP", value: "D1(704×576) · VGA(640×480) · HVGA(640×360) · CIF(352×288) @30fps" },
          { label: "Features", value: "DWDR, 3D DNR, AGC, MGC, AWB, ROI, Motion Detection, Privacy Masking" },
          { label: "Image Adjustment", value: "Mirroring, Saturation, Brightness, Sharpness, Contrast Adjustment, Exposure, DWDR, Shutter, IRIS, LDC, etc." },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Protocols", value: "TCP/IP, UDP, HTTP, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTCP, NTP, UPnP, SMTP; SNMP v1/v2/v3, IPv4/v6; Bonjour; ICMP, IGMP, QoS, SSL/TLS" },
          { label: "Compatibility", value: "HTTP CGI, ONVIF, WebRTC" },
          { label: "Intelligent Detection", value: "Face / Human / Vehicle / Non-Motor Vehicle Detection, Smart Motion Detection, Line-Crossing Detection, Zone-Intrusion Detection, Abnormal Audio Detection" },
        ],
      },
      {
        section: "Interface",
        rows: [
          { label: "Network", value: "RJ-45 LAN Port" },
          { label: "PoE", value: "IEEE 802.3af, Max 7W" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Color", value: "White" },
          { label: "Power Supply", value: "PoE & DC12V" },
          { label: "Work Humidity", value: "10% – 90%" },
          { label: "Operation Temperature", value: "−40°C to 60°C" },
          { label: "Ingress Protection", value: "IP66" },
          { label: "Power Consumption", value: "Max. 6W" },
          { label: "Size", value: "Ø109.1mm × 95.1mm" },
          { label: "Weight", value: "N.W.: 360g, G.W.: 460g" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "ONVIF Profile", value: "ONVIF (Profile S/G/T)" },
        ],
      },
    ],
  },

  "cube-28": {
    pdfUrl: "/datasheets/eyr-cube-28.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYR2C28 is a feature-rich 2MP Full HD IP Cube Camera engineered to provide dependable indoor monitoring with exceptional image clarity and intelligent event awareness. Equipped with PoE connectivity, built-in microphone and speaker for two-way communication, infrared night vision, PIR-assisted motion sensing, and advanced video enhancement technologies, it delivers consistent performance in various lighting conditions. With support for local microSD storage, ONVIF compatibility, and a wide range of smart detection features, it offers a practical and efficient surveillance solution for residential and commercial environments.",
    keyFeatures: [
      "2MP Full HD Video at 30fps",
      "Built-in PoE for Simple Installation",
      "Built-in Microphone & Speaker",
      "Two-Way Audio Communication",
      "Smart PIR & Motion Detection",
      "Up to 10m Infrared Night Vision",
      "Supports up to 512GB microSD Storage",
      "Real 120dB Wide Dynamic Range",
      "Advanced Image Enhancement (3DNR, Defog & ROI)",
      "Face, Human, Vehicle & Pet Detection",
      "Line Crossing & Intrusion Detection",
      "ONVIF Compatible for Easy Integration",
    ],
    specSections: [
      {
        section: "Camera",
        rows: [
          { label: "Image Sensor", value: "1/2.8\" 2 Megapixel progressive scan CMOS" },
          { label: "Effective Pixels", value: "3MP (2304×1280) / 2MP (1920×1080)" },
          { label: "Min. Illumination", value: "0.005 Lux @ (F1.2, AGC ON), 0 Lux with IR ON" },
          { label: "Shutter", value: "1/2s – 1/50,000s" },
          { label: "Lens", value: "2.8 / 3.6 / 6.0mm fixed lens" },
          { label: "Day & Night", value: "IR-CUT Auto Switch, Manual Switch, Timing Switch" },
          { label: "Digital Noise Reduction", value: "3D Digital Noise Reduction" },
          { label: "WDR", value: "Real WDR (120dB)" },
        ],
      },
      {
        section: "Compression Standard",
        rows: [
          { label: "Codec", value: "H.264 / H.265 / MJPEG" },
          { label: "Data Rate", value: "Main: 256–8000kbps, Sub: 50–2048kbps" },
        ],
      },
      {
        section: "Audio",
        rows: [
          { label: "Audio Compression", value: "G.711A/G.711U/AAC" },
          { label: "Audio Record", value: "Yes" },
        ],
      },
      {
        section: "Image",
        rows: [
          { label: "Frame Rate", value: "30fps @ 3MP/1080P/960P/720P" },
          { label: "Main Stream", value: "30fps 3MP(2304×1280), 30fps 2MP(1920×1080), 30fps 960P(1280×960), 30fps 720P(1280×720)" },
          { label: "Sub Stream", value: "30fps D1(704×576), 30fps VGA(640×480), 30fps HVGA(640×360), 30fps CIF(352×288)" },
          { label: "Features", value: "3DNR, WDR, AWB, AGC, BLC, HLC, Defog, ROI, Motion Detection, Privacy Masking" },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Protocols", value: "TCP/IP, HTTP, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTMP, RTCP, PPPoE, UPnP, SMTP" },
          { label: "Compatibility", value: "HTTP CGI, ONVIF" },
        ],
      },
      {
        section: "Interface",
        rows: [
          { label: "Network", value: "RJ-45 LAN Port" },
          { label: "POE", value: "IEEE 802.3af, Max 7W" },
          { label: "Audio Input", value: "Built-in microphone" },
          { label: "Audio Output", value: "Built-in speaker" },
          { label: "PIR", value: "Built-in PIR, detection range angle: 90° and 10-meter distance" },
          { label: "Local Recording", value: "Built-in micro SD slot, supporting max. 512GB" },
          { label: "Hardware Reset", value: "Built-in" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Color", value: "White" },
          { label: "Power Supply", value: "PoE & DC12V, power adaptor included" },
          { label: "Operation Temperature", value: "−10°C to 50°C" },
          { label: "Surge Protection", value: "External / Built-in SPD" },
          { label: "Proof", value: "Indoor" },
          { label: "Power Consumption", value: "Max. 7W" },
          { label: "Size", value: "99mm × 60mm × 32.5mm" },
          { label: "Weight", value: "N.W.: 100g (not incl. bracket), G.W.: 350g" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "ONVIF Profile", value: "ONVIF (Profile S/G/T)" },
        ],
      },
    ],
  },

  "poe-4p": {
    pdfUrl: "/datasheets/eyr-ps4p1r1s.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYR-PS4P1R1S is a 4-port Gigabit PoE Ethernet switch designed for powering and connecting IP cameras, wireless access points and other PoE network devices. It provides four PoE ports, one Gigabit RJ45 uplink and one 1.25 Gbps SFP fibre uplink, with 12 Gbps non-blocking switching so every port runs at full speed at once. A total PoE budget of 65W makes it well suited to reliable surveillance and network installations.",
    keyFeatures: [
      "4 Gigabit PoE Ports — 65W Total Budget",
      "All 4 Ports at 802.3af, or up to 2 at Full PoE+",
      "12 Gbps Non-Blocking Switching",
      "1 Gigabit RJ45 Uplink and 1× 1.25 Gbps SFP Fibre Uplink",
      "IEEE 802.3af and 802.3at Compliant",
      "Extended PoE Mode — up to 250m at 10Mbps",
      "Auto MDI/MDI-X — No Crossover Cables Needed",
      "Metal Housing",
      "Plug and Play — No Configuration Required",
      "5-Year Hardware Warranty",
    ],
    specSections: [
      {
        section: "Ports",
        rows: [
          { label: "PoE Ports", value: "4 × 10/100/1000Mbps RJ45, auto-negotiating" },
          { label: "RJ45 Uplink", value: "1 × 10/100/1000Mbps RJ45" },
          { label: "SFP Uplink", value: "1 × SFP, 1.25 Gbps" },
          { label: "Total Ports", value: "6" },
          { label: "Transmission Distance", value: "RJ45: up to 100m at 1000Mbps; SFP: per optical module specification" },
          { label: "Transmission Media", value: "RJ45: Cat5e / Cat6 UTP; SFP: LC connector" },
        ],
      },
      {
        section: "Power Over Ethernet",
        rows: [
          { label: "PoE Standard", value: "IEEE 802.3af (15.4W) and IEEE 802.3at (30W)" },
          { label: "PoE Method", value: "End-span (Mode A), pins 1/2 and 3/6" },
          { label: "Total PoE Budget", value: "65W" },
          { label: "Per-Port Output", value: "Up to 30W" },
          { label: "Capacity at Full Load", value: "All 4 ports at 802.3af (up to 15W each), or up to 2 ports at 802.3at (30W)" },
          { label: "PoE Port Detection", value: "Automatic — non-PoE devices receive data only" },
        ],
      },
      {
        section: "Switching",
        rows: [
          { label: "Network Standards", value: "IEEE 802.3 10BASE-T, IEEE 802.3u 100BASE-TX, IEEE 802.3ab 1000BASE-T" },
          { label: "Switching Capacity", value: "12 Gbps, non-blocking" },
          { label: "Forwarding Mode", value: "Store-and-forward" },
          { label: "MAC Address Table", value: "8K entries" },
          { label: "Jumbo Frame", value: "Up to 10K bytes" },
          { label: "Auto MDI/MDI-X", value: "Supported — straight or crossover cables" },
          { label: "Management", value: "Unmanaged — plug and play" },
        ],
      },
      {
        section: "Power",
        rows: [
          { label: "Power Supply", value: "External adapter" },
          { label: "Input Voltage", value: "AC 100–240V, 50/60Hz" },
          { label: "Power Consumption", value: "Switch: <5W; total with PoE: <70W" },
        ],
      },
      {
        section: "Indicators",
        rows: [
          { label: "Power", value: "1 × green LED" },
          { label: "SFP Link", value: "1 × green LED, on when linked" },
          { label: "PoE Status", value: "4 × yellow LED, one per PoE port" },
          { label: "Link / Activity", value: "4 × green LED on RJ45 jack — on when linked, flashing on data" },
        ],
      },
      {
        section: "Protection",
        rows: [
          { label: "Surge Immunity", value: "Level 3, IEC 61000-4-5" },
          { label: "Electrostatic Discharge", value: "Contact Level 3, Air Level 3, IEC 61000-4-2" },
        ],
      },
      {
        section: "Environment",
        rows: [
          { label: "Operating Temperature", value: "−10°C to +55°C" },
          { label: "Storage Temperature", value: "−40°C to +85°C" },
          { label: "Operating Humidity", value: "0% – 95% RH (non-condensing)" },
          { label: "Cooling", value: "Fanless" },
        ],
      },
      {
        section: "Mechanical",
        rows: [
          { label: "Dimensions (L × W × H)", value: "202 × 140 × 45 mm" },
          { label: "Housing", value: "Metal" },
          { label: "Colour", value: "Black" },
          { label: "Weight", value: "1 kg" },
          { label: "Mounting", value: "Desktop, wall, or rack mount with additional mounting bracket" },
        ],
      },
    ],
  },

  "poe-8p": {
    pdfUrl: "/datasheets/eyr-ps8p1r1s.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYR-PS8P1R1S is an 8-port Gigabit PoE Ethernet switch designed for powering and connecting IP cameras, wireless access points and other PoE network devices. It provides eight PoE ports, one Gigabit RJ45 uplink and one 1.25 Gbps SFP fibre uplink, with 24 Gbps non-blocking switching so every port runs at full speed at once. A total PoE budget of 120W makes it well suited to small and medium surveillance installations.",
    keyFeatures: [
      "8 Gigabit PoE Ports — 120W Total Budget",
      "All 8 Ports at 802.3af, or up to 4 at Full PoE+",
      "24 Gbps Non-Blocking Switching",
      "1 Gigabit RJ45 Uplink and 1× 1.25 Gbps SFP Fibre Uplink",
      "IEEE 802.3af and 802.3at Compliant",
      "Fanless — Silent Operation, No Moving Parts",
      "Metal Housing",
      "Surge Protection to IEC 61000-4-5 Level 3",
      "Plug and Play — No Configuration Required",
      "5-Year Hardware Warranty",
    ],
    specSections: [
      {
        section: "Ports",
        rows: [
          { label: "PoE Ports", value: "8 × 10/100/1000Mbps RJ45, auto-negotiating" },
          { label: "RJ45 Uplink", value: "1 × 10/100/1000Mbps RJ45" },
          { label: "SFP Uplink", value: "1 × SFP, 1.25 Gbps" },
          { label: "Total Ports", value: "10" },
          { label: "Transmission Distance", value: "RJ45: up to 100m; SFP: per optical module specification" },
          { label: "Transmission Media", value: "RJ45: Cat5e / Cat6 UTP; SFP: LC connector" },
        ],
      },
      {
        section: "Power Over Ethernet",
        rows: [
          { label: "PoE Standard", value: "IEEE 802.3af (15.4W) and IEEE 802.3at (30W)" },
          { label: "PoE Method", value: "End-span (Mode A), pins 1/2 and 3/6" },
          { label: "Total PoE Budget", value: "120W" },
          { label: "Per-Port Output", value: "Up to 30W" },
          { label: "Capacity at Full Load", value: "All 8 ports at 802.3af (up to 15W each), or up to 4 ports at 802.3at (30W)" },
          { label: "PoE Port Detection", value: "Automatic — non-PoE devices receive data only" },
        ],
      },
      {
        section: "Switching",
        rows: [
          { label: "Network Standards", value: "IEEE 802.3 10BASE-T, IEEE 802.3u 100BASE-TX, IEEE 802.3ab 1000BASE-T" },
          { label: "Switching Capacity", value: "24 Gbps, non-blocking" },
          { label: "Forwarding Mode", value: "Store-and-forward" },
          { label: "MAC Address Table", value: "8K entries" },
          { label: "Jumbo Frame", value: "Up to 9,216 bytes" },
          { label: "Auto MDI/MDI-X", value: "Supported — straight or crossover cables" },
          { label: "Management", value: "Unmanaged — plug and play" },
        ],
      },
      {
        section: "Power",
        rows: [
          { label: "Input Voltage", value: "AC 100–240V, 50/60Hz" },
          { label: "Internal Supply", value: "DC 52V" },
          { label: "Power Consumption", value: "Switch: <5W; total with PoE: <125W" },
        ],
      },
      {
        section: "Indicators",
        rows: [
          { label: "Power", value: "1 × green LED" },
          { label: "SFP Link", value: "1 × green LED, on when linked" },
          { label: "PoE Status", value: "8 × yellow LED, one per PoE port" },
          { label: "Link / Activity", value: "8 × green LED on RJ45 jack — on when linked, flashing on data" },
        ],
      },
      {
        section: "Protection",
        rows: [
          { label: "Surge Immunity", value: "Level 3, IEC 61000-4-5" },
          { label: "Electrostatic Discharge", value: "Contact Level 3, Air Level 3, IEC 61000-4-2" },
        ],
      },
      {
        section: "Environment",
        rows: [
          { label: "Operating Temperature", value: "−10°C to +55°C" },
          { label: "Storage Temperature", value: "−40°C to +85°C" },
          { label: "Operating Humidity", value: "0% – 95% RH (non-condensing)" },
          { label: "Cooling", value: "Fanless" },
        ],
      },
      {
        section: "Mechanical",
        rows: [
          { label: "Dimensions (L × W × H)", value: "202 × 140 × 45 mm" },
          { label: "Housing", value: "Metal" },
          { label: "Colour", value: "Black" },
          { label: "Weight", value: "1.5 kg" },
          { label: "Mounting", value: "Desktop or wall; rack-mountable with optional brackets" },
        ],
      },
      {
        section: "Reliability & Compliance",
        rows: [
          { label: "MTBF", value: "> 50,000 hours" },
          { label: "Warranty", value: "5 years, hardware" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "Country of Origin", value: "Made in Bahrain — certificate of origin available" },
        ],
      },
    ],
  },

  "poe-16p": {
    pdfUrl: "/datasheets/eyr-ps16p1r1s.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYR-PS16P1R1S is a 16-port Gigabit PoE Ethernet switch designed for powering and connecting IP cameras, wireless access points and other PoE network devices. It provides sixteen PoE ports, one Gigabit RJ45 uplink and one 1.25 Gbps SFP fibre uplink, with 40 Gbps non-blocking switching so every port runs at full speed at once. A 300W PoE budget runs all sixteen ports at 802.3af, or up to ten devices at full PoE+ for cameras with heaters or illuminators. The 1U metal chassis mounts in a standard rack.",
    keyFeatures: [
      "16 Gigabit PoE Ports — 300W Total Budget",
      "All 16 Ports at 802.3af, or up to 10 at Full PoE+",
      "40 Gbps Non-Blocking Switching",
      "1 Gigabit RJ45 Uplink and 1× 1.25 Gbps SFP Fibre Uplink",
      "IEEE 802.3af and 802.3at Compliant",
      "Fanless — Silent Operation, No Moving Parts",
      "1U Metal Chassis, Rack Ears Supplied",
      "Surge Protection to IEC 61000-4-5 Level 3",
      "Plug and Play — No Configuration Required",
      "5-Year Hardware Warranty",
    ],
    specSections: [
      {
        section: "Ports",
        rows: [
          { label: "PoE Ports", value: "16 × 10/100/1000Mbps RJ45, auto-negotiating" },
          { label: "RJ45 Uplink", value: "1 × 10/100/1000Mbps RJ45" },
          { label: "SFP Uplink", value: "1 × SFP, 1.25 Gbps" },
          { label: "Total Ports", value: "18" },
          { label: "Transmission Distance", value: "RJ45: up to 100m; SFP: per optical module specification" },
          { label: "Transmission Media", value: "RJ45: Cat5e / Cat6 UTP; SFP: LC connector" },
        ],
      },
      {
        section: "Power Over Ethernet",
        rows: [
          { label: "PoE Standard", value: "IEEE 802.3af (15.4W) and IEEE 802.3at (30W)" },
          { label: "PoE Method", value: "End-span (Mode A), pins 1/2 and 3/6" },
          { label: "Total PoE Budget", value: "300W" },
          { label: "Per-Port Output", value: "Up to 30W" },
          { label: "Capacity at Full Load", value: "All 16 ports at 802.3af (up to 15W each), or up to 10 ports at 802.3at (30W)" },
          { label: "PoE Port Detection", value: "Automatic — non-PoE devices receive data only" },
        ],
      },
      {
        section: "Switching",
        rows: [
          { label: "Network Standards", value: "IEEE 802.3 10BASE-T, IEEE 802.3u 100BASE-TX, IEEE 802.3ab 1000BASE-T, IEEE 802.3z 1000BASE-SX/LX" },
          { label: "Switching Capacity", value: "40 Gbps, non-blocking" },
          { label: "Forwarding Mode", value: "Store-and-forward" },
          { label: "Flow Control", value: "IEEE 802.3x full duplex, back pressure half duplex" },
          { label: "MAC Address Table", value: "8K entries" },
          { label: "Jumbo Frame", value: "Up to 9,216 bytes" },
          { label: "Auto MDI/MDI-X", value: "Supported — straight or crossover cables" },
          { label: "Management", value: "Unmanaged — plug and play" },
        ],
      },
      {
        section: "Power",
        rows: [
          { label: "Input Voltage", value: "AC 100–240V, 50/60Hz" },
          { label: "Power Consumption", value: "Switch: <15W; total with PoE: <315W" },
        ],
      },
      {
        section: "Indicators",
        rows: [
          { label: "Power", value: "1 × green LED" },
          { label: "SFP Link", value: "1 × green LED, on when linked" },
          { label: "Uplink Port", value: "1 × LED, flashing on data activity" },
          { label: "PoE Status", value: "16 × LED, one per PoE port" },
          { label: "Link / Activity", value: "16 × green LED on RJ45 jack — on when linked, flashing on data" },
        ],
      },
      {
        section: "Protection",
        rows: [
          { label: "Surge Immunity", value: "Level 3, IEC 61000-4-5" },
          { label: "Electrostatic Discharge", value: "Contact Level 3, Air Level 3, IEC 61000-4-2" },
        ],
      },
      {
        section: "Environment",
        rows: [
          { label: "Operating Temperature", value: "−10°C to +55°C" },
          { label: "Storage Temperature", value: "−40°C to +85°C" },
          { label: "Operating Humidity", value: "5% – 95% RH (non-condensing)" },
          { label: "Cooling", value: "Fanless" },
        ],
      },
      {
        section: "Mechanical",
        rows: [
          { label: "Dimensions (L × W × H)", value: "330 × 205 × 44.5 mm" },
          { label: "Rack Height", value: "1U" },
          { label: "Housing", value: "Metal" },
          { label: "Colour", value: "Black" },
          { label: "Weight", value: "3 kg" },
          { label: "Rack Ears", value: "Supplied in the box" },
        ],
      },
      {
        section: "Reliability & Compliance",
        rows: [
          { label: "MTBF", value: "> 50,000 hours" },
          { label: "Warranty", value: "5 years, hardware" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "Country of Origin", value: "Made in Bahrain — certificate of origin available" },
        ],
      },
    ],
  },

  "poe-24p": {
    pdfUrl: "/datasheets/eyr-ps24p1r1s.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYR-PS24P1R1S is a 24-port Gigabit PoE Ethernet switch designed for powering and connecting IP cameras, wireless access points and other PoE network devices. It provides twenty-four PoE ports, one Gigabit RJ45 uplink and one 1.25 Gbps SFP fibre uplink, with 56 Gbps non-blocking switching so every port runs at full speed at once. A 320W PoE budget runs all twenty-four ports at up to 13W each — comfortably above what a typical IP camera draws — or up to ten devices at full PoE+. The 19-inch 1U metal chassis mounts in a standard rack.",
    keyFeatures: [
      "24 Gigabit PoE Ports — 320W Total Budget",
      "All 24 Ports at up to 13W Each, or up to 10 at Full PoE+",
      "56 Gbps Non-Blocking Switching",
      "1 Gigabit RJ45 Uplink and 1× 1.25 Gbps SFP Fibre Uplink",
      "IEEE 802.3af and 802.3at Compliant",
      "19-inch 1U Metal Chassis, Rack Ears Supplied",
      "Surge Protection to IEC 61000-4-5 Level 3",
      "Plug and Play — No Configuration Required",
      "5-Year Hardware Warranty",
    ],
    specSections: [
      {
        section: "Ports",
        rows: [
          { label: "PoE Ports", value: "24 × 10/100/1000Mbps RJ45, auto-negotiating" },
          { label: "RJ45 Uplink", value: "1 × 10/100/1000Mbps RJ45" },
          { label: "SFP Uplink", value: "1 × SFP, 1.25 Gbps" },
          { label: "Total Ports", value: "26" },
          { label: "Transmission Distance", value: "RJ45: up to 100m; SFP: per optical module specification" },
          { label: "Transmission Media", value: "RJ45: Cat5e / Cat6 UTP; SFP: LC connector" },
        ],
      },
      {
        section: "Power Over Ethernet",
        rows: [
          { label: "PoE Standard", value: "IEEE 802.3af (15.4W) and IEEE 802.3at (30W)" },
          { label: "PoE Method", value: "End-span (Mode A), pins 1/2 and 3/6" },
          { label: "Total PoE Budget", value: "320W" },
          { label: "Per-Port Output", value: "Up to 30W" },
          { label: "Capacity at Full Load", value: "All 24 ports at up to 13W each, or up to 10 ports at 802.3at (30W)" },
          { label: "PoE Port Detection", value: "Automatic — non-PoE devices receive data only" },
        ],
      },
      {
        section: "Switching",
        rows: [
          { label: "Network Standards", value: "IEEE 802.3 10BASE-T, IEEE 802.3u 100BASE-TX, IEEE 802.3ab 1000BASE-T, IEEE 802.3z 1000BASE-SX/LX" },
          { label: "Switching Capacity", value: "56 Gbps, non-blocking" },
          { label: "Forwarding Mode", value: "Store-and-forward" },
          { label: "Flow Control", value: "IEEE 802.3x full duplex, back pressure half duplex" },
          { label: "MAC Address Table", value: "8K entries" },
          { label: "Jumbo Frame", value: "Up to 9,216 bytes" },
          { label: "Auto MDI/MDI-X", value: "Supported — straight or crossover cables" },
          { label: "Management", value: "Unmanaged — plug and play" },
        ],
      },
      {
        section: "Power",
        rows: [
          { label: "Input Voltage", value: "AC 100–240V, 50/60Hz" },
          { label: "Power Consumption", value: "Switch: <15W; total with PoE: <335W" },
        ],
      },
      {
        section: "Indicators",
        rows: [
          { label: "Power", value: "1 × green LED" },
          { label: "SFP Link", value: "1 × green LED, on when linked" },
          { label: "Uplink Port", value: "1 × green LED, on when linked" },
          { label: "PoE Status", value: "24 × LED, one per PoE port" },
          { label: "Link / Activity", value: "24 × green LED on RJ45 jack — on when linked, flashing on data" },
        ],
      },
      {
        section: "Protection",
        rows: [
          { label: "Surge Immunity", value: "Level 3, IEC 61000-4-5" },
          { label: "Electrostatic Discharge", value: "Contact Level 3, Air Level 3, IEC 61000-4-2" },
        ],
      },
      {
        section: "Environment",
        rows: [
          { label: "Operating Temperature", value: "−10°C to +55°C" },
          { label: "Storage Temperature", value: "−40°C to +85°C" },
          { label: "Operating Humidity", value: "5% – 95% RH (non-condensing)" },
          { label: "Cooling", value: "Fanless" },
        ],
      },
      {
        section: "Mechanical",
        rows: [
          { label: "Dimensions (L × W × H)", value: "442 × 224 × 44.5 mm" },
          { label: "Rack Format", value: "19-inch, 1U" },
          { label: "Housing", value: "Metal" },
          { label: "Colour", value: "Black" },
          { label: "Weight", value: "4.5 kg" },
          { label: "Rack Ears", value: "Supplied in the box" },
        ],
      },
      {
        section: "Reliability & Compliance",
        rows: [
          { label: "MTBF", value: "> 50,000 hours" },
          { label: "Warranty", value: "5 years, hardware" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
        ],
      },
    ],
  },

  "nvr-4chp": {
    pdfUrl: "/datasheets/eyr-nvr-4chp-8chp.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYR-NVR-4CHP is a compact 4-channel Mini Network Video Recorder designed for efficient IP surveillance. It supports recording up to 6MP, Ultra 265 / H.265 / H.264 compression, 4 built-in PoE ports, HDMI and VGA output, and a single SATA bay supporting up to 6TB. Intelligent features including Intrusion Detection, Cross-Line Detection, Human Body Detection, Area Detection, Auto Tracking and Behavior Search provide smarter and more reliable security monitoring.",
    keyFeatures: [
      "4-Channel IP Camera Input",
      "4 Built-in PoE Ports — 54W Budget",
      "Up to 6MP Recording Resolution",
      "Ultra 265 / H.265 / H.264 Compression",
      "1× SATA HDD Interface, up to 6TB",
      "HDMI and VGA Video Output",
      "Synchronous Multi-Channel Playback",
      "Intrusion, Cross-Line and Area Detection",
      "Human Body Detection",
      "Auto Tracking and Behavior Search",
      "5-Year Hardware Warranty",
    ],
    specSections: [
      {
        section: "Video / Audio Input",
        rows: [{ label: "IP Video Input", value: "4-ch" }],
      },
      {
        section: "Video / Audio Output",
        rows: [
          { label: "HDMI Output", value: "1920×1080/60Hz, 1920×1080/50Hz, 1600×1200/60Hz, 1280×1024/60Hz, 1280×720/60Hz, 1024×768/60Hz" },
          { label: "VGA Output", value: "1920×1080/60Hz, 1920×1080/50Hz, 1600×1200/60Hz, 1280×1024/60Hz, 1280×720/60Hz, 1024×768/60Hz" },
          { label: "Recording Resolution", value: "6MP / 5MP / 4MP / 3MP / 1080P / 960P / 720P / 960H / D1 / 2CIF / CIF" },
          { label: "Audio Output", value: "1-ch, 3.5mm" },
          { label: "Synchronous Playback", value: "4-ch" },
          { label: "Multi-screen Layout", value: "3 / 4" },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Network Interface", value: "1 × RJ45 10/100 Mbps self-adaptive Ethernet" },
          { label: "Incoming Bandwidth", value: "64 Mbps" },
          { label: "Outgoing Bandwidth", value: "48 Mbps" },
          { label: "Protocols", value: "TCP/IP, P2P, UPnP, DHCP, HTTP, HTTPS, DNS, DDNS, SMTP" },
          { label: "ONVIF", value: "Profile S / G / T" },
          { label: "Client Software / App", value: "Eyora APP" },
        ],
      },
      {
        section: "PoE",
        rows: [
          { label: "PoE Ports", value: "4 × RJ45 10/100 Mbps" },
          { label: "PoE Standard", value: "IEEE 802.3af / 802.3at (PoE+)" },
          { label: "PoE Budget — total", value: "54W total, shared across all ports. Max. 30W on any single port." },
        ],
      },
      {
        section: "Smart / Video Analytics",
        rows: [
          { label: "VCA Detection by Camera", value: "Intrusion Detection, Cross Line Detection, Enter Area, Leave Area, Audio Detection, Auto Tracking" },
          { label: "VCA Search", value: "Behavior Search" },
          { label: "Smart Intrusion Prevention", value: "4-ch (channels 1–4; alarm only, no image)" },
        ],
      },
      {
        section: "Decoding",
        rows: [
          { label: "Decoding Format", value: "Ultra 265 / H.265 / H.264" },
          { label: "Live View / Playback", value: "6MP / 5MP / 4MP / 3MP / 1080P / 960P / 720P / 960H / D1 / 2CIF / CIF" },
          { label: "Decoding Capability", value: "1 × 6MP@30 | 1 × 5MP@30 | 2 × 4MP@30 | 2 × 3MP@30 | 4 × 1080p@30" },
        ],
      },
      {
        section: "Interface",
        rows: [
          { label: "USB", value: "2 × USB 2.0 (rear panel)" },
          { label: "RS232 / RS485", value: "Not supported" },
          { label: "Alarm In / Out", value: "Not supported" },
        ],
      },
      {
        section: "Storage",
        rows: [
          { label: "SATA Interface", value: "1 × SATA interface, supporting one HDD up to 10 TB" },
          { label: "HDD Supplied", value: "Not included — ordered separately" },
        ],
      },
      {
        section: "Alarm",
        rows: [
          { label: "General Alarm", value: "Motion Detection, Human Body Detection, Video Loss" },
          { label: "Alert Alarm", value: "IP Conflict, Network Disconnected, Disk Offline, Disk Abnormal, Illegal Access" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Power Supply", value: "DC 48V / 1.35A" },
          { label: "Power Consumption (without HDD)", value: "≤ 9W" },
          { label: "Working Environment", value: "−10°C to +55°C (+14°F to +131°F), humidity ≤ 90% RH non-condensing" },
          { label: "Dimensions (W × D × H)", value: "190mm × 195mm × 42mm (7.5″ × 7.7″ × 1.6″)" },
          { label: "Weight", value: "≤ 1.0 kg (2.20 lb) without HDD" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "Warranty", value: "5 years, hardware" },
        ],
      },
    ],
  },

  "nvr-8chp": {
    pdfUrl: "/datasheets/eyr-nvr-4chp-8chp.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYR-NVR-8CHP is a compact 8-channel Mini Network Video Recorder designed for efficient IP surveillance. It supports recording up to 6MP, Ultra 265 / H.265 / H.264 compression, 8 built-in PoE ports, HDMI and VGA output, and a single SATA bay supporting up to 6TB. Intelligent features including Intrusion Detection, Cross-Line Detection, Human Body Detection, Area Detection, Auto Tracking and Behavior Search provide smarter and more reliable security monitoring.",
    keyFeatures: [
      "8-Channel IP Camera Input",
      "8 Built-in PoE Ports — 75W Budget",
      "Up to 6MP Recording Resolution",
      "Ultra 265 / H.265 / H.264 Compression",
      "1× SATA HDD Interface, up to 6TB",
      "HDMI and VGA Video Output",
      "Synchronous Multi-Channel Playback",
      "Intrusion, Cross-Line and Area Detection",
      "Human Body Detection",
      "Auto Tracking and Behavior Search",
      "5-Year Hardware Warranty",
    ],
    specSections: [
      {
        section: "Video / Audio Input",
        rows: [{ label: "IP Video Input", value: "8-ch" }],
      },
      {
        section: "Video / Audio Output",
        rows: [
          { label: "HDMI Output", value: "1920×1080/60Hz, 1920×1080/50Hz, 1600×1200/60Hz, 1280×1024/60Hz, 1280×720/60Hz, 1024×768/60Hz" },
          { label: "VGA Output", value: "1920×1080/60Hz, 1920×1080/50Hz, 1600×1200/60Hz, 1280×1024/60Hz, 1280×720/60Hz, 1024×768/60Hz" },
          { label: "Recording Resolution", value: "6MP / 5MP / 4MP / 3MP / 1080P / 960P / 720P / 960H / D1 / 2CIF / CIF" },
          { label: "Audio Output", value: "1-ch, 3.5mm" },
          { label: "Synchronous Playback", value: "8-ch" },
          { label: "Multi-screen Layout", value: "3 / 4 / 5 / 7 / 9" },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Network Interface", value: "1 × RJ45 10/100 Mbps self-adaptive Ethernet" },
          { label: "Incoming Bandwidth", value: "64 Mbps" },
          { label: "Outgoing Bandwidth", value: "48 Mbps" },
          { label: "Protocols", value: "TCP/IP, P2P, UPnP, DHCP, HTTP, HTTPS, DNS, DDNS, SMTP" },
          { label: "ONVIF", value: "Profile S / G / T" },
          { label: "Client Software / App", value: "Eyora APP" },
        ],
      },
      {
        section: "PoE",
        rows: [
          { label: "PoE Ports", value: "8 × RJ45 10/100 Mbps" },
          { label: "PoE Standard", value: "IEEE 802.3af / 802.3at (PoE+)" },
          { label: "PoE Budget — total", value: "75W total, shared across all ports. Max. 30W on any single port." },
        ],
      },
      {
        section: "Smart / Video Analytics",
        rows: [
          { label: "VCA Detection by Camera", value: "Intrusion Detection, Cross Line Detection, Enter Area, Leave Area, Audio Detection, Auto Tracking" },
          { label: "VCA Search", value: "Behavior Search" },
          { label: "Smart Intrusion Prevention", value: "4-ch (channels 1–4; alarm only, no image)" },
        ],
      },
      {
        section: "Decoding",
        rows: [
          { label: "Decoding Format", value: "Ultra 265 / H.265 / H.264" },
          { label: "Live View / Playback", value: "6MP / 5MP / 4MP / 3MP / 1080P / 960P / 720P / 960H / D1 / 2CIF / CIF" },
          { label: "Decoding Capability", value: "1 × 6MP@30 | 1 × 5MP@30 | 2 × 4MP@30 | 2 × 3MP@30 | 4 × 1080p@30" },
        ],
      },
      {
        section: "Interface",
        rows: [
          { label: "USB", value: "2 × USB 2.0 (rear panel)" },
          { label: "RS232 / RS485", value: "Not supported" },
          { label: "Alarm In / Out", value: "Not supported" },
        ],
      },
      {
        section: "Storage",
        rows: [
          { label: "SATA Interface", value: "1 × SATA interface, supporting one HDD up to 10 TB" },
          { label: "HDD Supplied", value: "Not included — ordered separately" },
        ],
      },
      {
        section: "Alarm",
        rows: [
          { label: "General Alarm", value: "Motion Detection, Human Body Detection, Video Loss" },
          { label: "Alert Alarm", value: "IP Conflict, Network Disconnected, Disk Offline, Disk Abnormal, Illegal Access" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Power Supply", value: "DC 52V / 1.8A" },
          { label: "Power Consumption (without HDD)", value: "≤ 9W" },
          { label: "Working Environment", value: "−10°C to +55°C (+14°F to +131°F), humidity ≤ 90% RH non-condensing" },
          { label: "Dimensions (W × D × H)", value: "190mm × 195mm × 42mm (7.5″ × 7.7″ × 1.6″)" },
          { label: "Weight", value: "≤ 1.0 kg (2.20 lb) without HDD" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "Warranty", value: "5 years, hardware" },
        ],
      },
    ],
  },

  "nvr-16chp": {
    pdfUrl: "/datasheets/eyr-nvr-16chp.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYR-NVR-16CHP provides powerful and efficient video management for up to 16 IP cameras at up to 12MP, with Ultra 265 / H.265 / H.264 compression. It features 16 independent PoE ports, dual SATA storage up to 10TB per drive, 4K HDMI output, ANR network recovery, and intelligent detection including Face, Human, Vehicle, Intrusion and Cross-Line Detection.",
    keyFeatures: [
      "16-Channel IP Camera Input",
      "16 Independent PoE Ports",
      "Up to 12MP Recording Resolution",
      "Ultra 265 / H.265 / H.264 Compression",
      "Dual SATA HDD, up to 10TB per Drive (20TB Total)",
      "4K HDMI Video Output",
      "HDMI and VGA Simultaneous Output",
      "Face, Human and Vehicle Detection",
      "Intrusion and Cross-Line Detection",
      "ANR Network Recovery Technology",
      "8-in / 2-out Alarm Interface",
      "5-Year Hardware Warranty",
    ],
    specSections: [
      {
        section: "Video / Audio Input",
        rows: [
          { label: "IP Video Input", value: "16-ch" },
          { label: "RCA Audio Input", value: "1-ch" },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Network Interface", value: "1 × RJ45 10/100/1000 Mbps self-adaptive Ethernet" },
          { label: "Incoming Bandwidth", value: "160 Mbps" },
          { label: "Outgoing Bandwidth", value: "128 Mbps" },
          { label: "Concurrent Remote Users", value: "128" },
          { label: "Protocols", value: "TCP/IP, P2P, UPnP, NTP, DHCP, PPPoE, HTTP, HTTPS, DNS, DDNS, SNMP, SMTP, RTSP" },
          { label: "ONVIF", value: "Profile S / G / T" },
          { label: "Browser", value: "Chrome 45+, Firefox 52+, Edge 79+ for Windows" },
          { label: "Client Software / App", value: "Eyora" },
        ],
      },
      {
        section: "PoE",
        rows: [
          { label: "PoE Ports", value: "16 × RJ45 10/100 Mbps" },
          { label: "PoE Standard", value: "IEEE 802.3af/at" },
          { label: "PoE Budget — total", value: "Max 30W for single port, Max 240W in total" },
        ],
      },
      {
        section: "Video / Audio Output",
        rows: [
          { label: "HDMI Output", value: "4K (3840×2160) @30, 1920×1080p@60, 1920×1080p@50, 1280×1024@60, 1280×720@60, 1024×768@60" },
          { label: "VGA Output", value: "1920×1080p@60, 1920×1080p@50, 1600×1200@60, 1280×1024@60, 1280×720@60, 1024×768@60" },
          { label: "Recording Resolution", value: "12MP / 8MP / 6MP / 5MP / 4MP / 3MP / 1080p / 960p / 720p / D1 / 2CIF / CIF" },
          { label: "RCA Audio Output", value: "1-ch" },
          { label: "Audio Compression", value: "G.711A, G.711U" },
          { label: "Synchronous Playback", value: "16-ch" },
          { label: "Live View Display", value: "1 / 4 / 6 / 8 / 9 / 16" },
          { label: "Corridor Mode Screen", value: "3 / 4 / 5 / 7 / 9 / 10 / 12 / 16" },
        ],
      },
      {
        section: "Decoding",
        rows: [
          { label: "Decoding Format", value: "Ultra 265, H.265, H.264" },
          { label: "Live View / Playback", value: "12MP / 8MP / 6MP / 5MP / 4MP / 3MP / 1080p / 960p / 720p / D1 / 2CIF / CIF" },
          { label: "Capability", value: "Smart Off: 2 × 12MP@30 | 2 × 4K@30 | 4 × 4MP@30 | 10 × 1080P@30 | 16 × 720P@30. Smart On: 2 × 4K@30 | 4 × 4MP@30 | 8 × 1080P@30 | 16 × 720P@30" },
        ],
      },
      {
        section: "Smart / Video Analytics",
        rows: [
          { label: "VCA Detection by Camera", value: "Face Detection, Human Detection, Vehicle Detection, Intrusion Detection, Cross-Line Detection, Motion Detection" },
          { label: "VCA Search", value: "Behavior Search" },
          { label: "Smart Intrusion", value: "8-ch" },
        ],
      },
      {
        section: "Alarm",
        rows: [
          { label: "General Alarm", value: "Defocus Detection, Scene Change Detection, Object Left Behind, Object Removed, Auto Tracking, Motion Detection, Tampering, Human Body Detection, Video Loss, Alarm Input, Audio Detection" },
          { label: "Alert Alarm", value: "IP Conflict, Network Disconnected, Disk Offline, Disk Abnormal, Illegal Access, Hard Disk Space Low, Hard Disk Full, Recording/Snapshot Abnormal" },
        ],
      },
      {
        section: "Storage & Interface",
        rows: [
          { label: "SATA", value: "2 × SATA interfaces, up to 10 TB per drive (20 TB total)" },
          { label: "HDD Supplied", value: "Not included — ordered separately" },
          { label: "USB", value: "Front panel: 1 × USB 2.0; Rear panel: 1 × USB 3.0" },
          { label: "RS232", value: "Not supported" },
          { label: "RS485", value: "1" },
          { label: "Alarm In / Out", value: "8 in / 2 out" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Power Supply", value: "AC 100–240V, 50/60Hz, ≤ 190W rated" },
          { label: "Power Consumption", value: "≤ 12W" },
          { label: "Working Environment", value: "−10°C to +55°C (+14°F to +131°F), humidity ≤ 90% RH non-condensing" },
          { label: "Dimensions (W × D × H)", value: "380mm × 315mm × 53mm (15.0″ × 12.4″ × 2.1″)" },
          { label: "Weight", value: "N.W. 2.6 kg without HDD; G.W. 2.9 kg" },
          { label: "Certifications", value: "CE, FCC, RoHS as per camera range" },
          { label: "Warranty", value: "5 years, hardware" },
        ],
      },
    ],
  },

  "nvr-32ch": {
    pdfUrl: "/datasheets/eyr-nvr-32ch.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYR-NVR-32CH delivers reliable, high-performance surveillance recording for up to 32 IP cameras at up to 32MP, with Ultra 265 / H.265 / H.264 compression. Dual SATA storage, 4K HDMI output, advanced AI detection, smart search and ANR technology provide efficient and secure video management for commercial and large-scale applications.",
    keyFeatures: [
      "32-Channel IP Camera Input",
      "Up to 32MP Recording Resolution",
      "Ultra 265 / H.265 / H.264 Compression",
      "Dual SATA HDD, up to 16TB per Drive (32TB Total)",
      "Dual Gigabit Network Ports",
      "4K HDMI Video Output",
      "HDMI and VGA Simultaneous Output",
      "Face Detection and Face Comparison",
      "Human and Vehicle Detection",
      "Intrusion and Cross-Line Detection",
      "ANR Network Recovery Technology",
      "Smart Search and Intelligent Playback",
      "4-in / 1-out Alarm Interface",
      "5-Year Hardware Warranty",
    ],
    specSections: [
      {
        section: "Video / Audio Input",
        rows: [
          { label: "IP Video Input", value: "32-ch" },
          { label: "Audio Input", value: "1-ch, RCA" },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Network Interface", value: "2 × RJ45 10/100/1000 Mbps self-adaptive Ethernet" },
          { label: "Incoming Bandwidth", value: "192 Mbps" },
          { label: "Outgoing Bandwidth", value: "192 Mbps" },
          { label: "Concurrent Remote Users", value: "128" },
          { label: "Protocols", value: "TCP/IP, P2P, UPnP, NTP, DHCP, PPPoE, HTTP, HTTPS, DNS, DDNS, SNMP, SMTP, NFS" },
          { label: "ONVIF", value: "Profile S / G / T" },
          { label: "Browser", value: "Chrome 57+, Firefox 58+, Edge 79+, Safari 11+" },
          { label: "Client Software / App", value: "Eyora App" },
          { label: "PoE", value: "Not supported" },
        ],
      },
      {
        section: "Video / Audio Output",
        rows: [
          { label: "HDMI Output", value: "4K (3840×2160)/30Hz, 1920×1080/60Hz, 1600×1200/60Hz, 1280×1024/60Hz, 1280×720/60Hz, 1024×768/60Hz" },
          { label: "VGA Output", value: "1920×1080/60Hz, 1920×1080/50Hz, 1600×1200/60Hz, 1280×1024/60Hz, 1280×720/60Hz, 1024×768/60Hz" },
          { label: "Recording Resolution", value: "32MP / 16MP / 12MP / 8MP / 6MP / 5MP / 4MP / 3MP / 1080P / 960P / 720P / D1 / 2CIF / CIF" },
          { label: "Audio Output", value: "1-ch, RCA" },
          { label: "Audio Compression", value: "G.711A, G.711U" },
          { label: "Synchronous Playback", value: "16-ch" },
          { label: "Live View Display", value: "1 / 4 / 6 / 8 / 9 / 16 / 25 / 32" },
          { label: "Corridor Mode Screen", value: "3 / 4 / 5 / 7 / 9 / 10 / 12 / 16 / 32" },
        ],
      },
      {
        section: "Decoding",
        rows: [
          { label: "Decoding Format", value: "Ultra 265, H.265, H.264" },
          { label: "Live View / Playback", value: "32MP / 16MP / 12MP / 8MP / 6MP / 5MP / 4MP / 3MP / 1080P / 960P / 720P / D1 / 2CIF / CIF" },
          { label: "Capability — H.265", value: "2 × 32MP@30 | 4 × 16MP@30 | 5 × 12MP@30 | 8 × 4K@30 | 10 × 6MP@30 | 12 × 5MP@30 | 16 × 4MP@30 | 21 × 3MP@30 | 32 × 1080P@30" },
          { label: "Capability — H.264", value: "2 × 32MP@30 | 4 × 16MP@30 | 5 × 12MP@30 | 8 × 4K@30 | 10 × 6MP@30 | 12 × 5MP@30 | 16 × 4MP@30 | 21 × 3MP@30 | 32 × 1080P@30" },
          { label: "Smart On — Impact", value: "Enabling Smart by NVR consumes decoding capacity equivalent to 16 × 1080P@30" },
        ],
      },
      {
        section: "Smart / Video Analytics",
        rows: [
          { label: "Smart by IPC", value: "Face Detection, Human Detection, Vehicle Detection, Intrusion Detection, Cross-Line Detection, Motion Detection. Plug-and-play with Eyora IP cameras; AI functions are optimised for Eyora cameras." },
          { label: "Smart by NVR", value: "Text search: up to 16-ch with third-party cameras, all channels with Eyora cameras. Face Comparison, Smart Intrusion Prevention (SIP), Ultra Motion Detection (UMD) — compatible with third-party cameras via ONVIF. Fire and Smoke Detection available." },
          { label: "VCA Search", value: "Face Snapshot Search, Face Comparison Search, Motor Vehicle Search, Non-Motor Vehicle Search, Human Body Search, General Search, People Counting Report" },
        ],
      },
      {
        section: "Alarm",
        rows: [
          { label: "General Alarm", value: "Defocus Detection, Scene Change Detection, Object Left Behind, Object Removed, Auto Tracking, Motion Detection, Tampering, Human Body Detection, Video Loss, Audio Detection, Alarm Input" },
          { label: "Alert Alarm", value: "IP Conflict, Network Disconnected, Disk Offline, Disk Abnormal, Illegal Access, Hard Disk Space Low, Hard Disk Full, Recording/Snapshot Abnormal" },
        ],
      },
      {
        section: "Storage & Interface",
        rows: [
          { label: "SATA", value: "2 × SATA interfaces, up to 16 TB per drive (32 TB total)" },
          { label: "HDD Supplied", value: "Not included — ordered separately" },
          { label: "USB", value: "Front panel: 1 × USB 2.0; Rear panel: 1 × USB 2.0, 1 × USB 3.0" },
          { label: "RS232", value: "Not supported" },
          { label: "RS485", value: "1" },
          { label: "Alarm In / Out", value: "4 in / 1 out" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Power Supply", value: "DC 12V / 3A (36W)" },
          { label: "Power Consumption", value: "≤ 20W (without HDD)" },
          { label: "Working Environment", value: "−10°C to +55°C (+14°F to +131°F), humidity ≤ 90% RH non-condensing" },
          { label: "Dimensions (W × D × H)", value: "380mm × 315mm × 53mm (15.0″ × 12.4″ × 2.1″)" },
          { label: "Weight", value: "N.W. 2.6 kg without HDD; G.W. 2.9 kg" },
          { label: "Certifications", value: "CE, FCC, RoHS" },
          { label: "Warranty", value: "5 years, hardware" },
        ],
      },
    ],
  },

  "ptz-8m33": {
    pdfUrl: "/datasheets/eyrsd8m33.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYRSD8M33 is an 8MP PTZ (Pan-Tilt-Zoom) camera designed for long-range surveillance with 33x optical zoom, intelligent tracking, and full-area coverage. It delivers high-quality imaging, powerful night vision, and smooth pan-tilt control, making it ideal for large-scale security applications like highways, campuses, and industrial zones.",
    keyFeatures: [
      "8MP Resolution",
      "33× Optical Zoom",
      "360° Endless Pan",
      "High-Speed PTZ Control",
      "IR Night Vision (150m)",
      "Up to 256 Presets",
      "Smart Detection",
      "120dB True WDR",
      "3D Digital Noise Reduction",
      "PoE + DC12V Power",
      "Audio & Alarm I/O",
      "IP66 & IK10 Protection",
      "ONVIF Compatible",
      "5-Year Replacement Warranty",
      "No Return Hardware Warranty",
    ],
    specSections: [
      {
        section: "Camera",
        rows: [
          { label: "Image Sensor", value: "1/2.8\" 8MP Progressive CMOS" },
          { label: "Min. Illumination", value: "0.001 Lux (F1.6, Color), 0 Lux (F1.6, IR ON)" },
          { label: "Shutter", value: "1/2s – 1/50,000s" },
          { label: "Lens", value: "4.5 – 148.5mm (33x optical zoom)" },
          { label: "Angle", value: "(H) 71.7° (Wide) to 2.4° (Tele) / (V) 43.4° (Wide) to 1.3° (Tele) / (D) 88.2° (Wide) to 2.8° (Tele)" },
          { label: "DNR", value: "3D Digital Noise Reduction" },
          { label: "WDR", value: "Yes, real WDR 120dB" },
        ],
      },
      {
        section: "Compression",
        rows: [
          { label: "Codec", value: "H.265+, H.264+, H.265, H.264, MJPEG" },
          { label: "Data Rate", value: "Main: 256–8000kbps, Sub: 50–1000kbps" },
          { label: "Audio Compression", value: "G.711A/G.711U/AAC/PCM/G.726" },
          { label: "Audio Record", value: "Yes" },
        ],
      },
      {
        section: "Image",
        rows: [
          { label: "Max. Resolution", value: "8MP (3840×2144)" },
          { label: "Max. Frame Rate", value: "20fps @ 8MP" },
          { label: "3rd Stream", value: "Supported" },
          { label: "Features", value: "Image Settings, Mirroring, Defog, ROI, etc." },
          { label: "Digital Zoom", value: "Supported" },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Protocols", value: "TCP/IP, HTTP, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTCP, PPPoE, UPnP, SMTP" },
          { label: "Compatibility", value: "HTTP CGI, ONVIF (Profile S, Profile G, Profile T)" },
          { label: "Intelligent Detection", value: "Human Detection, Tripwire Detection, Intrusion Detection" },
        ],
      },
      {
        section: "Pan & Tilt",
        rows: [
          { label: "Pan Range", value: "360° (endless)" },
          { label: "Pan Speed", value: "0.1°/s ~ 200°/s" },
          { label: "Tilt Range", value: "-10° ~ +90° (auto reverse)" },
          { label: "Tilt Speed", value: "0.1° ~ 180°/s" },
          { label: "Number of Preset", value: "256" },
          { label: "Patrol", value: "Preset patrol, route patrol, recorded patrol" },
          { label: "Scan", value: "Supported, Linear or Pattern" },
          { label: "PELCO", value: "Supported, PELCO-D/P" },
          { label: "Home Position", value: "Supported" },
        ],
      },
      {
        section: "Interface",
        rows: [
          { label: "Network", value: "RJ-45 10M/100M LAN Port" },
          { label: "POE", value: "Yes, Built-in" },
          { label: "Local Storage", value: "Micro SD, up to 256GB" },
          { label: "Microphone", value: "No" },
          { label: "Audio in/out", value: "1in / 1out" },
          { label: "Alarm in/out", value: "1in / 1out" },
          { label: "Hardware Reset", value: "Yes" },
          { label: "RS-485", value: "Supported" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Color", value: "White & black" },
          { label: "Accessories", value: "Printed User Manual, Installation Kits" },
          { label: "Power Supply", value: "POE & DC12V" },
          { label: "Work Temperature", value: "-40°C ~ 60°C" },
          { label: "Power Consumption", value: "9W / 25W (IR LED ON)" },
          { label: "Size (mm)", value: "185 × 291mm" },
          { label: "Weight", value: "G.W. 4620g, N.W. 3360g" },
          { label: "Warranty", value: "5-Year Replacement Warranty, No Return Hardware Warranty" },
        ],
      },
    ],
  },

  "ptz-dm05": {
    pdfUrl: "/datasheets/eyrsdm05.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYRSDM05 is a compact 5MP 2.5-inch PTZ IP camera designed for high-resolution indoor and outdoor surveillance. It features a 5× optical zoom lens, fast 360° pan-and-tilt movement, smart AI detection, 20m infrared night vision, 120dB HDR, and flexible PoE or 12V DC power. Its durable metal housing provides IP66 weather protection and IK10 impact resistance.",
    keyFeatures: [
      "5MP at 30fps",
      "1/2.8\" CMOS Sensor",
      "3.05–15.5mm Zoom Lens",
      "5× Optical Zoom",
      "360° Endless Pan",
      "-10° to 90° Tilt",
      "20m Smart IR",
      "AI Object Detection",
      "Intrusion Detection",
      "H.265+/H.264+ Compression",
      "PoE and 12V DC",
      "IP66 and IK10 Rated",
      "5-Year Replacement Warranty",
      "No-Return Hardware Warranty",
    ],
    specSections: [
      {
        section: "Camera",
        rows: [
          { label: "Image Sensor", value: "1/2.8\" Progressive Scan CMOS" },
          { label: "Max. Resolution", value: "5MP (2592×1944) 30fps" },
          { label: "Min. Illumination", value: "0.005 Lux @ (AGC ON), B/W: 0 Lux with IR" },
          { label: "Day & Night", value: "IR" },
        ],
      },
      {
        section: "Lens",
        rows: [
          { label: "Lens Type", value: "3.05–15.5mm (5× optical zoom)" },
          { label: "Focal Length & FOV", value: "(H) 360° endless, 0.1°–200°/s / (V) -10°–90°, 0.1°–180°/s" },
        ],
      },
      {
        section: "Illuminator",
        rows: [
          { label: "Supplement Light Type", value: "IR" },
          { label: "Supplement Light Range", value: "Up to 20m" },
          { label: "Smart Supplement Light", value: "Yes" },
        ],
      },
      {
        section: "Video",
        rows: [
          { label: "Main Stream", value: "50Hz: 25fps (2592×1920, 2560×1440, 2304×1280, 1920×1080, 1280×960, 1280×720); 60Hz: 30fps (same set)" },
          { label: "Sub-Stream", value: "50Hz: 25fps (704×576, 640×480, 640×352, 352×288); 60Hz: 30fps (same set)" },
          { label: "Video Compression", value: "Mainstream & Substream: H.265/H.264/H.264+/H.265+" },
          { label: "Video Bit Rate", value: "Main: 256–8000kbps, Sub: 50–1000kbps" },
          { label: "Profile", value: "Baseline Profile, Main Profile, High Profile" },
          { label: "Bit Rate Control", value: "CBR, VBR" },
          { label: "Region of Interest (ROI)", value: "Max. 4 regions supported/stream" },
        ],
      },
      {
        section: "Image",
        rows: [
          { label: "Image Parameters Switch", value: "Yes" },
          { label: "Image Settings", value: "Rotate mode, Saturation, Brightness, Contrast, Sharpness" },
          { label: "Day/Night Switch", value: "Day, Night, Normal" },
          { label: "HDR", value: "Yes (120dB)" },
          { label: "Image Enhancement", value: "BLC, HLC, 2D/3D DNR" },
          { label: "Privacy Mask", value: "4 programmable polygon privacy masks" },
        ],
      },
      {
        section: "Network",
        rows: [
          { label: "Protocols", value: "TCP/IP, PPPoE, UDP, HTTP, FTP, DHCP, DNS, DDNS, RTP, RTSP, RTCP, NTP, UPnP, SMTP; SNMP v1/v2/v3, IPv4/v6; Bonjour; QoS, VOIP, SSL/TLS" },
          { label: "Compatibility", value: "HTTP ONVIF, WEBRTC" },
          { label: "Client Intelligent Detection", value: "Motion / Human / Vehicle / Pet Detection, BSS Smart / BSS Mobile, Smoke and Fire Detection, Object Left / Removed, Non-Motor Vehicle Detection, Face Detection, Line Crossing, Intrusion Detection" },
        ],
      },
      {
        section: "Interface",
        rows: [
          { label: "Ethernet Interface", value: "RJ-45 LAN Port" },
          { label: "PoE", value: "Yes" },
          { label: "On-Board Storage", value: "No" },
          { label: "Built-in Microphone", value: "No" },
          { label: "Built-in Speaker", value: "No" },
          { label: "Reset Key", value: "Yes" },
          { label: "Audio", value: "Optional" },
          { label: "Alarm", value: "Optional" },
        ],
      },
      {
        section: "General",
        rows: [
          { label: "Power", value: "DC 12V / PoE" },
          { label: "Material", value: "Metal" },
          { label: "Dimension", value: "Φ130mm × 117.4mm" },
          { label: "Weight", value: "N.W. 600g" },
          { label: "With Package Weight", value: "G.W. 750g" },
          { label: "Working Conditions", value: "Temperature: -20°C ~ 60°C, Humidity: 10%–90%" },
          { label: "Protection", value: "IP66 & IK10" },
          { label: "Certifications", value: "CE (EMC/LVD), CB (IEC 62368-1), RoHS, WEEE, REACH" },
          { label: "Warranty", value: "5-Year Replacement Warranty, No-Return Hardware Warranty" },
        ],
      },
    ],
  },
};
