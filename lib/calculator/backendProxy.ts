import { NextRequest, NextResponse } from "next/server";

/**
 * The Aeroskop Next.js app (Gemini AI + Postgres backend) runs as its own PM2
 * process on the same VM. Eyora doesn't duplicate that backend — it proxies
 * to it server-to-server (no CORS, no secrets in Eyora's own env), tagging
 * every request with brand: "eyora" so the backend recommends Eyora's own
 * NVR catalog and keeps cache/analytics separated from Aeroskop's traffic.
 */
const AEROSKOP_BACKEND_URL = process.env.AEROSKOP_BACKEND_URL || "http://127.0.0.1:3000";

export async function proxyToAeroskop(
  path: string,
  request: NextRequest,
  { injectBrand = false }: { injectBrand?: boolean } = {}
): Promise<NextResponse> {
  try {
    const init: RequestInit = { method: request.method, headers: { "Content-Type": "application/json" } };

    if (request.method !== "GET" && request.method !== "HEAD") {
      const body = await request.json().catch(() => ({}));
      init.body = JSON.stringify(injectBrand ? { ...body, brand: "eyora" } : body);
    }

    const search = request.nextUrl.search || "";
    const response = await fetch(`${AEROSKOP_BACKEND_URL}${path}${search}`, init);
    const data = await response.json().catch(() => ({}));

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error(`Failed to proxy to Aeroskop backend (${path}):`, error);
    return NextResponse.json(
      { error: "The storage calculator service is temporarily unavailable. Please try again shortly." },
      { status: 502 }
    );
  }
}
