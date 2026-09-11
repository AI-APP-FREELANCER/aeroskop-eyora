import { EnhancedStorageCalculation, CalculatorForm } from "./types";

const DISCLAIMER_TEXT = `Disclaimer:
The results provided by this calculator are approximate estimations intended for planning and reference purposes only.
Actual storage requirements may vary based on codec efficiency, scene complexity, motion levels, network performance, and recording configurations.
Users are advised to verify the results through real-world testing and consult their storage vendor before final implementation.
Eyora and its affiliates shall not be held responsible for discrepancies arising from these estimations.`;

interface ExportData {
  formData: CalculatorForm;
  calculationResult: EnhancedStorageCalculation;
}

function escapeCSVField(field: any): string {
  if (field === null || field === undefined) return "";
  const str = String(field);
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function createCSVRow(values: any[]): string {
  return values.map(escapeCSVField).join(",");
}

export async function generateCSVReport(data: ExportData): Promise<string> {
  const rows: string[] = [];

  rows.push("AI Surveillance Storage Calculator - Eyora");
  rows.push(`Generated on: ${new Date().toLocaleDateString()}`);
  rows.push("");

  rows.push("=== INPUT PARAMETERS ===");
  rows.push(createCSVRow(["Parameter", "Value"]));
  rows.push(createCSVRow(["Number of Cameras", data.formData.cameras]));
  rows.push(createCSVRow(["Resolution", data.formData.resolution]));
  rows.push(createCSVRow(["Frame Rate (FPS)", data.formData.customFps || data.formData.fps]));
  rows.push(createCSVRow(["Compression Codec", data.formData.codec]));
  rows.push(createCSVRow(["Bitrate (Mbps)", data.calculationResult.bitratePerCamera.toFixed(2)]));
  rows.push(createCSVRow(["Recording Hours Per Day", data.formData.recordingHoursPerDay]));
  rows.push(createCSVRow(["Motion Activity (%)", data.formData.activityPercent]));
  rows.push(createCSVRow(["Retention Period (Days)", data.formData.retentionDays]));
  rows.push(createCSVRow(["Recording Mode", data.formData.recordingMode || "continuous"]));
  rows.push("");

  rows.push("=== CALCULATION SUMMARY ===");
  rows.push(createCSVRow(["Metric", "Value"]));
  rows.push(createCSVRow(["Total Storage Required (TB)", data.calculationResult.totalStorageTB.toFixed(2)]));
  rows.push(createCSVRow(["Daily Storage (TB)", (data.calculationResult.totalStorageTB / (data.formData.retentionDays || 1)).toFixed(2)]));
  rows.push(createCSVRow(["Daily Storage per Camera (GB)", data.calculationResult.dailyStoragePerCameraGB.toFixed(2)]));
  rows.push(createCSVRow(["Total Bitrate (Mbps)", data.calculationResult.totalBitrateMbps.toFixed(2)]));
  rows.push(createCSVRow(["Bitrate per Camera (Mbps)", data.calculationResult.bitratePerCamera.toFixed(2)]));
  rows.push(createCSVRow(["Adjusted Bitrate (Mbps)", data.calculationResult.adjustedBitrate.toFixed(2)]));
  rows.push(createCSVRow(["Retention Days", data.formData.retentionDays.toString()]));
  rows.push("");

  rows.push("=== DISCLAIMER ===");
  DISCLAIMER_TEXT.split("\n").forEach((line) => rows.push(createCSVRow([line])));

  const csvContent = rows.join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  const fileName = `eyora-storage-calculation-${new Date().toISOString().split("T")[0]}.csv`;

  link.setAttribute("href", url);
  link.setAttribute("download", fileName);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  return fileName;
}
