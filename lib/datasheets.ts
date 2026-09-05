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
    pdfUrl: "/datasheets/eyr-808gp1g1sfp.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYR-808GP1G1SFP is an 8-port Gigabit PoE Ethernet switch designed for powering and connecting IP cameras, wireless access points and other PoE network devices. It provides eight PoE ports, one Gigabit RJ45 uplink and one 1.25 Gbps SFP fibre uplink, with 24 Gbps non-blocking switching so every port runs at full speed at once. A total PoE budget of 120W makes it well suited to small and medium surveillance installations.",
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
    pdfUrl: "/datasheets/eyr-816gp1g1sfp.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYR-816GP1G1SFP is a 16-port Gigabit PoE Ethernet switch designed for powering and connecting IP cameras, wireless access points and other PoE network devices. It provides sixteen PoE ports, one Gigabit RJ45 uplink and one 1.25 Gbps SFP fibre uplink, with 40 Gbps non-blocking switching so every port runs at full speed at once. A 300W PoE budget runs all sixteen ports at 802.3af, or up to ten devices at full PoE+ for cameras with heaters or illuminators. The 1U metal chassis mounts in a standard rack.",
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
    pdfUrl: "/datasheets/eyr-824gp1g1sfp.pdf",
    warranty: "5 Year Warranty",
    overview:
      "The EYR-824GP1G1SFP is a 24-port Gigabit PoE Ethernet switch designed for powering and connecting IP cameras, wireless access points and other PoE network devices. It provides twenty-four PoE ports, one Gigabit RJ45 uplink and one 1.25 Gbps SFP fibre uplink, with 56 Gbps non-blocking switching so every port runs at full speed at once. A 320W PoE budget runs all twenty-four ports at up to 13W each — comfortably above what a typical IP camera draws — or up to ten devices at full PoE+. The 19-inch 1U metal chassis mounts in a standard rack.",
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
};
