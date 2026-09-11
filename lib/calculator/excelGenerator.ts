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

export async function generateExcelReport(data: ExportData): Promise<string> {
  const XLSXModule = await import("xlsx");
  const XLSX = XLSXModule.default || XLSXModule;
  const workbook = XLSX.utils.book_new();

  const inputParams = [
    ["Parameter", "Value"],
    ["Number of Cameras", data.formData.cameras],
    ["Resolution", data.formData.resolution],
    ["Frame Rate (FPS)", data.formData.customFps || data.formData.fps],
    ["Compression Codec", data.formData.codec],
    ["Bitrate (Mbps)", data.calculationResult.bitratePerCamera.toFixed(2)],
    ["Recording Hours Per Day", data.formData.recordingHoursPerDay],
    ["Motion Activity (%)", data.formData.activityPercent],
    ["Retention Period (Days)", data.formData.retentionDays],
    ["Recording Mode", data.formData.recordingMode || "continuous"],
    ["Pre-Record Time (seconds)", data.formData.preRecordSeconds || 2],
    ["Post-Record Time (seconds)", data.formData.postRecordSeconds || 5],
  ];

  const inputSheet = XLSX.utils.aoa_to_sheet(inputParams);
  XLSX.utils.book_append_sheet(workbook, inputSheet, "Input Parameters");

  const calculations = [
    ["Metric", "Value"],
    ["Total Storage Required (TB)", data.calculationResult.totalStorageTB.toFixed(2)],
    ["Daily Storage (TB)", (data.calculationResult.totalStorageTB / (data.formData.retentionDays || 1)).toFixed(2)],
    ["Daily Storage per Camera (GB)", data.calculationResult.dailyStoragePerCameraGB.toFixed(2)],
    ["Total Bitrate (Mbps)", data.calculationResult.totalBitrateMbps.toFixed(2)],
    ["Bitrate per Camera (Mbps)", data.calculationResult.bitratePerCamera.toFixed(2)],
    ["Adjusted Bitrate (Mbps)", data.calculationResult.adjustedBitrate.toFixed(2)],
    ["Retention Days", data.formData.retentionDays],
  ];

  const calcSheet = XLSX.utils.aoa_to_sheet(calculations);
  XLSX.utils.book_append_sheet(workbook, calcSheet, "Calculation Summary");

  const disclaimerRows = DISCLAIMER_TEXT.split("\n").map((line) => [line]);
  const disclaimerSheet = XLSX.utils.aoa_to_sheet(disclaimerRows);
  XLSX.utils.book_append_sheet(workbook, disclaimerSheet, "Disclaimer");

  const fileName = `eyora-storage-calculation-${new Date().toISOString().split("T")[0]}.xlsx`;
  XLSX.writeFile(workbook, fileName);

  return fileName;
}
