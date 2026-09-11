// AI Storage Calculator types — shared contract with the Aeroskop backend's
// /api/ai-storage-recommendation response shape.

export interface StorageRecommendation {
  product_name: string;
  product_model: string;
  product_image_url: string;
  product_url?: string;
  channel_capacity: string;
  storage_capacity_tb: number;
  cpu: string;
  ram: string;
  pros: string[];
  cons: string[];
  raid_support?: string;
  suitable_for: string[];
  why_recommended: string;
  key_benefits?: string[];
}

export interface StorageCalculations {
  total_storage_tb: number;
  total_usable_storage_tb?: number;
  daily_storage_tb: number;
  daily_storage_per_camera_gb: number;
  total_bitrate_mbps: number;
  bitrate_per_camera: number;
  retention_days: number;
  adjusted_bitrate: number;
  overhead_factor: number;
}

export interface AIRecommendationResponse {
  cached: boolean;
  is_fallback?: boolean;
  fallback_reason?: string;
  recommendation: StorageRecommendation;
  top_products?: StorageRecommendation[];
  calculations: StorageCalculations;
  optimization: {
    suggestions: string[];
    insights: string[];
  };
  summary: string;
}

export interface CalculatorForm {
  cameras: number | '';
  resolution: string;
  fps: number;
  codec: string;
  quality: string;
  activityPercent: number;
  recordingHoursPerDay: number;
  retentionDays: number;
  recordingMode: string;
  customFps?: number;
  customBitrate?: number;
  preRecordSeconds?: number;
  postRecordSeconds?: number;
}

export interface EnhancedStorageCalculation {
  bitratePerCamera: number;
  dailyStoragePerCameraGB: number;
  totalStorageTB: number;
  totalBitrateMbps: number;
  adjustedBitrate: number;
  overhead: number;
  adjustedMotionPercent?: number;
}
