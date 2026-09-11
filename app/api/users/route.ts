import { NextRequest } from "next/server";
import { proxyToAeroskop } from "@/lib/calculator/backendProxy";

export async function POST(request: NextRequest) {
  return proxyToAeroskop("/api/users", request);
}

export async function GET(request: NextRequest) {
  return proxyToAeroskop("/api/users", request);
}
