"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calculator,
  MessageSquare,
  Send,
  Bot,
  User as UserIcon,
  Check,
  FileText,
  FileSpreadsheet,
  File as FileIcon,
  ArrowRight,
  FileDown,
} from "lucide-react";
import { generateEnhancedPDFReport } from "@/lib/calculator/pdfGenerator";
import { generateExcelReport } from "@/lib/calculator/excelGenerator";
import { generateCSVReport } from "@/lib/calculator/csvGenerator";
import { formatStorage } from "@/lib/calculator/storageFormatter";
import { AIRecommendationResponse, CalculatorForm, EnhancedStorageCalculation } from "@/lib/calculator/types";
import { productCategories } from "@/lib/products";
import { datasheets } from "@/lib/datasheets";
import CalculatorLoginModal from "./CalculatorLoginModal";

interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: Date;
}

/** Resolve a SKU the backend recommends (e.g. "EYR-NVR-16CHP") to Eyora's own
 *  catalog entry, so the result card can show the real product photo, PDP
 *  link, and datasheet download — never Aeroskop's. */
function resolveEyoraProduct(model: string | undefined) {
  if (!model) return null;
  for (const category of productCategories) {
    const product = category.products.find((p) => p.sku.toLowerCase() === model.toLowerCase());
    if (product) {
      const sheet = product.datasheetFamily ? datasheets[product.datasheetFamily] : undefined;
      return { product, category, pdfUrl: sheet?.pdfUrl };
    }
  }
  return null;
}

export default function AIStorageCalculator() {
  const [formData, setFormData] = useState<CalculatorForm>({
    cameras: "",
    resolution: "1080p",
    fps: 30,
    codec: "H.265",
    quality: "Medium",
    activityPercent: 70,
    recordingHoursPerDay: 24,
    retentionDays: 30,
    recordingMode: "continuous",
    preRecordSeconds: 2,
    postRecordSeconds: 5,
  });

  const [calculationResult, setCalculationResult] = useState<EnhancedStorageCalculation | null>(null);
  const [aiRecommendations, setAiRecommendations] = useState<AIRecommendationResponse | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [calcError, setCalcError] = useState<string | null>(null);
  const [useCustomFps, setUseCustomFps] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [sessionId] = useState(() => "eyora-session-" + Date.now());

  const [userCaptured, setUserCaptured] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCheckingUser, setIsCheckingUser] = useState(true);

  useEffect(() => {
    const checkExistingUser = async () => {
      const storedEmail = typeof window !== "undefined" ? localStorage.getItem("eyoraUserEmail") : null;
      if (!storedEmail) {
        setIsCheckingUser(false);
        return;
      }
      try {
        const response = await fetch(`/api/users?email=${encodeURIComponent(storedEmail)}`);
        if (response.ok) {
          const user = await response.json();
          if (user && user.email) {
            setUserCaptured(true);
          } else {
            localStorage.removeItem("eyoraUserEmail");
          }
        }
      } catch {
        // Non-blocking — let them try to register if the check fails
      } finally {
        setIsCheckingUser(false);
      }
    };
    checkExistingUser();
  }, []);

  useEffect(() => {
    if (calculationResult || aiRecommendations) {
      setTimeout(() => {
        document.getElementById("calculator-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, [calculationResult, aiRecommendations]);

  const handleInputChange = (field: keyof CalculatorForm, value: any) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === "activityPercent" && Number(value) >= 90) {
        updated.recordingMode = "continuous";
      }
      return updated;
    });
  };

  const handleUserSubmit = async (userInfo: any) => {
    const checkResponse = await fetch(`/api/users?email=${encodeURIComponent(userInfo.email)}`);
    let user;
    if (checkResponse.ok) {
      const existing = await checkResponse.json();
      if (existing && existing.email) user = existing;
    }
    if (!user) {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: userInfo.firstName,
          last_name: userInfo.lastName,
          email: userInfo.email,
          country_code: userInfo.countryCode,
          phone_number: userInfo.phoneNumber,
          company: userInfo.company,
        }),
      });
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || "Registration failed. Please try again.");
      }
      user = await response.json();
    }
    localStorage.setItem("eyoraUserEmail", user.email);
    setUserCaptured(true);
    await performCalculation();
  };

  const handleCalculate = () => {
    if (isCheckingUser) return;
    if (!formData.cameras || Number(formData.cameras) <= 0) {
      setCalcError("Please enter a valid number of cameras");
      return;
    }
    if (!userCaptured) {
      setIsLoginModalOpen(true);
      return;
    }
    performCalculation();
  };

  const performCalculation = async () => {
    setCalcError(null);
    setIsCalculating(true);
    setCalculationResult(null);
    setAiRecommendations(null);

    try {
      const payload = {
        cameras: Number(formData.cameras) || 1,
        resolution: formData.resolution,
        fps: useCustomFps && formData.customFps ? formData.customFps : formData.fps,
        codec: formData.codec,
        quality: "Medium",
        activity_percent: formData.activityPercent || 1,
        recording_hours_per_day: formData.recordingHoursPerDay || 1,
        retention_days: formData.retentionDays || 1,
        recording_mode: formData.recordingMode,
        pre_record_seconds: formData.preRecordSeconds || 2,
        post_record_seconds: formData.postRecordSeconds || 5,
        custom_bitrate: formData.customBitrate,
        custom_fps: useCustomFps ? formData.customFps : undefined,
        sessionId,
      };

      const response = await fetch("/api/ai-storage-recommendation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok || !data.calculations) {
        throw new Error(data.error || "Failed to calculate storage requirements");
      }

      setAiRecommendations(data);
      setCalculationResult({
        bitratePerCamera: data.calculations.bitrate_per_camera || 0,
        dailyStoragePerCameraGB: data.calculations.daily_storage_per_camera_gb || 0,
        totalStorageTB: data.calculations.total_storage_tb || data.calculations.total_usable_storage_tb || 0,
        totalBitrateMbps: data.calculations.total_bitrate_mbps || 0,
        adjustedBitrate: data.calculations.adjusted_bitrate || 0,
        overhead: 0,
      });

      const productName = data.recommendation?.product_name || data.top_products?.[0]?.product_name;
      const systemMessage: ChatMessage = {
        id: `sys-${Date.now()}`,
        sender: "ai",
        text: `Based on ${formData.cameras} cameras at ${formData.resolution}, you'll need ${formatStorage(
          data.calculations.total_storage_tb || 0,
          1
        )} of storage. I recommend the ${productName || "Eyora NVR"} — ask me anything about compression, retention, or your setup!`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, systemMessage]);
    } catch (error: any) {
      setCalcError(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsCalculating(false);
    }
  };

  const sendChatMessage = async () => {
    const trimmed = userInput.trim();
    if (!trimmed || chatLoading) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), sender: "user", text: trimmed, timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setChatLoading(true);

    try {
      const response = await fetch("/api/gemini-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: trimmed, sessionId, pageUrl: "/ai-storage-calculator" }),
      });
      const data = await response.json();
      if (!response.ok || !data.response) throw new Error(data.error || "Empty response from AI");

      setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), sender: "ai", text: data.response, timestamp: new Date() }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: "I ran into a connection issue reaching the AI assistant. Please try again in a moment.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  const bestProduct = aiRecommendations?.recommendation || aiRecommendations?.top_products?.[0];
  const resolvedProduct = resolveEyoraProduct(bestProduct?.product_model);

  return (
    <section className="px-5 md:px-8 py-10 md:py-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Calculator Form */}
          <div className="eyora-card rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center eyora-badge !px-0 !py-0 shrink-0">
                <Calculator size={17} />
              </div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">AI Storage Calculator</h2>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Number of Cameras *</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={formData.cameras}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value === "" || /^\d+$/.test(value)) handleInputChange("cameras", value === "" ? "" : Number(value));
                  }}
                  placeholder="Enter number of cameras"
                  className="w-full p-3 bg-white/70 border border-[var(--glass-border-hover)] rounded-xl px-4 py-3 placeholder:text-[var(--text-muted)] focus:ring-2 focus:ring-[var(--eyora-green-mid)]/40 focus:border-[var(--eyora-green-mid)] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Resolution</label>
                <select
                  value={formData.resolution}
                  onChange={(e) => handleInputChange("resolution", e.target.value)}
                  className="w-full p-3 bg-white/70 border border-[var(--glass-border-hover)] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--eyora-green-mid)]/40 focus:border-[var(--eyora-green-mid)] transition-all"
                >
                  <option value="720p">720p (0.92 MP)</option>
                  <option value="1080p">1080p (2.07 MP)</option>
                  <option value="4MP">4MP</option>
                  <option value="4K">4K / 8MP</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Frame Rate (FPS)</label>
                <div className="flex gap-2">
                  <select
                    value={useCustomFps ? "" : formData.fps}
                    onChange={(e) => {
                      if (e.target.value === "") {
                        setUseCustomFps(true);
                      } else {
                        setUseCustomFps(false);
                        handleInputChange("fps", parseInt(e.target.value));
                      }
                    }}
                    className="flex-1 p-3 bg-white/70 border border-[var(--glass-border-hover)] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--eyora-green-mid)]/40 focus:border-[var(--eyora-green-mid)] transition-all"
                  >
                    <option value="">Custom...</option>
                    {[2, 4, 6, 12, 15, 20, 25, 30, 60].map((f) => (
                      <option key={f} value={f}>{f} FPS</option>
                    ))}
                  </select>
                  {useCustomFps && (
                    <input
                      type="number"
                      min={1}
                      max={120}
                      value={formData.customFps || ""}
                      onChange={(e) => handleInputChange("customFps", parseInt(e.target.value) || undefined)}
                      placeholder="Custom FPS"
                      className="flex-1 p-3 bg-white/70 border border-[var(--glass-border-hover)] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--eyora-green-mid)]/40 focus:border-[var(--eyora-green-mid)] transition-all"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Compression Codec</label>
                <select
                  value={formData.codec}
                  onChange={(e) => handleInputChange("codec", e.target.value)}
                  className="w-full p-3 bg-white/70 border border-[var(--glass-border-hover)] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--eyora-green-mid)]/40 focus:border-[var(--eyora-green-mid)] transition-all"
                >
                  <option value="H.265">H.265 (HEVC)</option>
                  <option value="H.264">H.264 (AVC)</option>
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)]">Bitrate (Mbps)</label>
                  <span className="text-sm font-semibold text-[var(--text-accent)]">{(formData.customBitrate || 4.0).toFixed(1)} Mbps</span>
                </div>
                <input
                  type="range"
                  min={0.5}
                  max={20}
                  step={0.1}
                  value={formData.customBitrate || 4.0}
                  onChange={(e) => handleInputChange("customBitrate", parseFloat(e.target.value))}
                  className="w-full accent-[var(--eyora-green-mid)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Recording Hours Per Day: {formData.recordingHoursPerDay} hours
                </label>
                <input
                  type="range"
                  min={1}
                  max={24}
                  value={formData.recordingHoursPerDay}
                  onChange={(e) => handleInputChange("recordingHoursPerDay", parseInt(e.target.value))}
                  className="w-full accent-[var(--eyora-green-mid)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Motion Activity: {formData.activityPercent}%
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={formData.activityPercent}
                  onChange={(e) => handleInputChange("activityPercent", parseInt(e.target.value))}
                  className="w-full accent-[var(--eyora-green-mid)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Retention Period: {formData.retentionDays} days
                </label>
                <input
                  type="range"
                  min={1}
                  max={365}
                  value={formData.retentionDays}
                  onChange={(e) => handleInputChange("retentionDays", parseInt(e.target.value))}
                  className="w-full accent-[var(--eyora-green-mid)]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Recording Mode</label>
                <select
                  value={formData.recordingMode}
                  onChange={(e) => formData.activityPercent < 90 && handleInputChange("recordingMode", e.target.value)}
                  disabled={formData.activityPercent >= 90}
                  className="w-full p-3 bg-white/70 border border-[var(--glass-border-hover)] rounded-xl px-4 py-3 focus:ring-2 focus:ring-[var(--eyora-green-mid)]/40 focus:border-[var(--eyora-green-mid)] transition-all disabled:opacity-60"
                >
                  <option value="continuous">Continuous Recording</option>
                  <option value="motion" disabled={formData.activityPercent >= 90}>Motion-Triggered Recording</option>
                </select>
              </div>

              {calcError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">{calcError}</p>
              )}

              <button
                onClick={handleCalculate}
                disabled={isCalculating || !formData.cameras}
                className="btn-primary btn-shine w-full rounded-full px-6 py-3.5 text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isCalculating ? "Calculating..." : "Calculate Storage Requirements"}
                {!isCalculating && <ArrowRight size={15} />}
              </button>
            </div>
          </div>

          {/* AI Assistant */}
          <div className="eyora-card rounded-3xl p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center eyora-badge !px-0 !py-0 shrink-0">
                <MessageSquare size={17} />
              </div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">AI Assistant</h2>
            </div>

            <div className="flex-1 min-h-[280px] max-h-[420px] overflow-y-auto space-y-4 pr-1">
              {messages.length === 0 ? (
                <div className="text-center py-10">
                  <Bot className="mx-auto text-[var(--text-muted)] mb-3" size={32} />
                  <p className="text-sm text-[var(--text-secondary)]">Start a conversation about your storage requirements!</p>
                  <p className="text-xs text-[var(--text-muted)] mt-2">Try asking: "What's the difference between H.264 and H.265?"</p>
                </div>
              ) : (
                messages.map((m) => (
                  <div key={m.id} className={`flex gap-2.5 ${m.sender === "user" ? "flex-row-reverse" : ""}`}>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 eyora-badge !px-0 !py-0">
                      {m.sender === "user" ? <UserIcon size={13} /> : <Bot size={13} />}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed max-w-[85%] ${
                        m.sender === "user"
                          ? "bg-[var(--eyora-green-mid)] text-white"
                          : "bg-[var(--bg-tertiary)] text-[var(--text-primary)]"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))
              )}
              {chatLoading && <p className="text-xs text-[var(--text-muted)]">Thinking…</p>}
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendChatMessage())}
                placeholder="Ask about storage, compression, or optimization..."
                className="flex-1 p-3 bg-white/70 border border-[var(--glass-border-hover)] rounded-xl px-4 py-2.5 text-sm placeholder:text-[var(--text-muted)] focus:ring-2 focus:ring-[var(--eyora-green-mid)]/40 focus:border-[var(--eyora-green-mid)] transition-all"
              />
              <button
                onClick={sendChatMessage}
                disabled={chatLoading || !userInput.trim()}
                className="btn-primary rounded-xl px-4 py-3 disabled:opacity-60"
                aria-label="Send"
              >
                <Send size={16} />
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--glass-border)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-accent)] mb-3">Quick Tips</p>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                <li>💡 <strong>H.265 Codec</strong> — saves up to 50% storage vs H.264</li>
                <li>🎯 <strong>Motion Detection</strong> — reduces storage needs by 70%+</li>
                <li>⚡ <strong>AI Recommendations</strong> — get the right Eyora NVR for your site</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Results */}
        {calculationResult && (
          <div id="calculator-results" className="mt-8 scroll-mt-28">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Total Storage Required", value: formatStorage(calculationResult.totalStorageTB, 2) },
                { label: "Daily Storage / Camera", value: `${calculationResult.dailyStoragePerCameraGB.toFixed(2)} GB` },
                { label: "Bitrate Per Camera", value: `${calculationResult.bitratePerCamera.toFixed(2)} Mbps` },
                { label: "Total Bit Rate", value: `${calculationResult.totalBitrateMbps.toFixed(2)} Mbps` },
              ].map((stat) => (
                <div key={stat.label} className="eyora-card rounded-2xl p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)] mb-2">{stat.label}</h3>
                  <p className="text-2xl font-bold eyora-text-gradient">{stat.value}</p>
                </div>
              ))}
            </div>

            {bestProduct && (
              <div className="mt-6">
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">Recommended Eyora Product</h2>
                <div className="eyora-card rounded-3xl p-6 md:p-8 grid md:grid-cols-[200px_1fr] gap-6">
                  <div className="relative h-40 md:h-full rounded-2xl bg-white overflow-hidden">
                    <Image
                      src={resolvedProduct?.product.image || bestProduct.product_image_url || "/images/products/nvr.png"}
                      alt={bestProduct.product_name}
                      fill
                      quality={92}
                      sizes="200px"
                      className="object-contain p-4"
                    />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)]">{resolvedProduct?.product.name || bestProduct.product_name}</h3>
                        <p className="text-sm font-mono text-[var(--text-muted)] mt-0.5">{bestProduct.product_model}</p>
                      </div>
                      <span className="eyora-badge px-3 py-1 text-[10px] font-bold uppercase tracking-wide">Best Match</span>
                    </div>

                    <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">{bestProduct.why_recommended}</p>

                    <div className="grid grid-cols-2 gap-3 mt-4">
                      <div className="bg-[var(--bg-tertiary)] rounded-xl p-3">
                        <p className="text-xs text-[var(--text-muted)] mb-1">Channels</p>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{bestProduct.channel_capacity}</p>
                      </div>
                      <div className="bg-[var(--bg-tertiary)] rounded-xl p-3">
                        <p className="text-xs text-[var(--text-muted)] mb-1">Max Storage</p>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{bestProduct.storage_capacity_tb} TB</p>
                      </div>
                    </div>

                    {resolvedProduct?.product.specs && resolvedProduct.product.specs.length > 0 && (
                      <ul className="mt-4 space-y-1.5">
                        {resolvedProduct.product.specs.slice(0, 4).map((spec) => (
                          <li key={spec} className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)]">
                            <Check size={13} className="text-[var(--text-accent)] shrink-0 mt-0.5" />
                            {spec}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-6 flex flex-wrap gap-3">
                      {resolvedProduct && (
                        <Link
                          href={`/products/${resolvedProduct.category.slug}/${resolvedProduct.product.sku}`}
                          className="btn-primary btn-shine rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
                        >
                          View Product Details
                          <ArrowRight size={14} />
                        </Link>
                      )}
                      {resolvedProduct?.pdfUrl && (
                        <a
                          href={resolvedProduct.pdfUrl}
                          download
                          className="btn-outline rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
                        >
                          <FileDown size={14} />
                          Download Datasheet (PDF)
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 eyora-card rounded-3xl p-6 md:p-8">
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-4">Export Results</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={async () => {
                    if (isExporting || !calculationResult) return;
                    setIsExporting(true);
                    try {
                      await generateEnhancedPDFReport({ formData, calculationResult });
                    } finally {
                      setIsExporting(false);
                    }
                  }}
                  disabled={isExporting}
                  className="flex items-center gap-2 px-4 py-2.5 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white rounded-xl text-sm font-medium transition-colors"
                >
                  <FileText className="w-4 h-4" /> PDF
                </button>
                <button
                  onClick={async () => {
                    if (isExporting || !calculationResult) return;
                    setIsExporting(true);
                    try {
                      await generateExcelReport({ formData, calculationResult });
                    } finally {
                      setIsExporting(false);
                    }
                  }}
                  disabled={isExporting}
                  className="flex items-center gap-2 px-4 py-2.5 btn-primary disabled:opacity-60 rounded-xl text-sm font-medium"
                >
                  <FileSpreadsheet className="w-4 h-4" /> Excel
                </button>
                <button
                  onClick={async () => {
                    if (isExporting || !calculationResult) return;
                    setIsExporting(true);
                    try {
                      await generateCSVReport({ formData, calculationResult });
                    } finally {
                      setIsExporting(false);
                    }
                  }}
                  disabled={isExporting}
                  className="flex items-center gap-2 px-4 py-2.5 btn-outline disabled:opacity-60 rounded-xl text-sm font-medium"
                >
                  <FileIcon className="w-4 h-4" /> CSV
                </button>
              </div>
            </div>

            <div className="mt-6 eyora-card rounded-3xl p-6">
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                <strong>Disclaimer:</strong> The results provided by this calculator are approximate estimations
                intended for planning and reference purposes only. Actual storage requirements may vary based on
                codec efficiency, scene complexity, motion levels, network performance, and recording configurations.
                Users are advised to verify the results through real-world testing before final implementation.
                Eyora and its affiliates shall not be held responsible for discrepancies arising from these estimations.
              </p>
            </div>
          </div>
        )}
      </div>

      <CalculatorLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSubmit={async (userInfo) => {
          try {
            await handleUserSubmit(userInfo);
          } catch (error: any) {
            setCalcError(error.message || "Registration failed. Please try again.");
            throw error;
          }
        }}
      />
    </section>
  );
}
