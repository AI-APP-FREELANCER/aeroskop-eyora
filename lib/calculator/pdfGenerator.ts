import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { CalculatorForm, EnhancedStorageCalculation } from "./types";

interface ExportData {
  formData: CalculatorForm;
  calculationResult: EnhancedStorageCalculation;
}

export async function generateEnhancedPDFReport(data: ExportData): Promise<void> {
  const doc = new jsPDF();
  doc.setFont("helvetica");

  let yPosition = 20;

  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("Eyora", 14, yPosition);

  doc.setFontSize(16);
  doc.setFont("helvetica", "normal");
  doc.text("AI Surveillance Storage Calculator Report", 14, yPosition + 10);

  doc.setFontSize(10);
  doc.text(`Generated on: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`, 14, yPosition + 18);

  yPosition += 30;

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Input Parameters", 14, yPosition);
  yPosition += 10;

  const inputData = [
    ["Parameter", "Value"],
    ["Number of Cameras", String(data.formData.cameras)],
    ["Resolution", data.formData.resolution],
    ["Frame Rate (FPS)", String(data.formData.customFps || data.formData.fps)],
    ["Compression Codec", data.formData.codec],
    ["Bitrate (Mbps)", data.calculationResult.bitratePerCamera.toFixed(2)],
    ["Recording Hours Per Day", String(data.formData.recordingHoursPerDay)],
    ["Motion Activity (%)", String(data.formData.activityPercent)],
    ["Retention Period (Days)", String(data.formData.retentionDays)],
    ["Recording Mode", data.formData.recordingMode || "continuous"],
  ];

  autoTable(doc, {
    startY: yPosition,
    head: [inputData[0]],
    body: inputData.slice(1),
    theme: "striped",
    headStyles: { fillColor: [61, 139, 8], textColor: 255, fontStyle: "bold" },
    styles: { fontSize: 9, cellPadding: 3 },
    columnStyles: { 0: { cellWidth: 80, fontStyle: "bold" }, 1: { cellWidth: 110 } },
    margin: { left: 14, right: 14 },
  });

  yPosition = (doc as any).lastAutoTable.finalY + 15;

  if (yPosition > 250) {
    doc.addPage();
    yPosition = 20;
  }

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Calculation Summary", 14, yPosition);
  yPosition += 10;

  const calcData = [
    ["Metric", "Value"],
    ["Total Storage Required (TB)", data.calculationResult.totalStorageTB.toFixed(2)],
    ["Daily Storage (TB)", (data.calculationResult.totalStorageTB / (data.formData.retentionDays || 1)).toFixed(2)],
    ["Daily Storage per Camera (GB)", data.calculationResult.dailyStoragePerCameraGB.toFixed(2)],
    ["Total Bitrate (Mbps)", data.calculationResult.totalBitrateMbps.toFixed(2)],
    ["Bitrate per Camera (Mbps)", data.calculationResult.bitratePerCamera.toFixed(2)],
    ["Adjusted Bitrate (Mbps)", data.calculationResult.adjustedBitrate.toFixed(2)],
  ];

  autoTable(doc, {
    startY: yPosition,
    head: [calcData[0]],
    body: calcData.slice(1),
    theme: "striped",
    headStyles: { fillColor: [61, 139, 8], textColor: 255, fontStyle: "bold" },
    styles: { fontSize: 9, cellPadding: 3 },
    columnStyles: { 0: { cellWidth: 80, fontStyle: "bold" }, 1: { cellWidth: 110 } },
    margin: { left: 14, right: 14 },
  });

  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    doc.text(
      `Results are approximate estimations. Copyright ${new Date().getFullYear()} Eyora.`,
      105,
      285,
      { align: "center" }
    );
  }

  doc.save(`Eyora_Storage_Calculator_Report_${new Date().toISOString().split("T")[0]}.pdf`);
}
