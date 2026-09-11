export function formatStorage(storageTB: number, decimals: number = 2): string {
  if (storageTB < 1) {
    const storageGB = storageTB * 1000;
    return `${storageGB.toFixed(decimals)} GB`;
  }
  return `${storageTB.toFixed(decimals)} TB`;
}

export function formatDailyStorageAlwaysGB(storageTB: number, decimals: number = 2): string {
  const storageGB = storageTB * 1024;
  return `${storageGB.toFixed(decimals)} GB`;
}

export function formatStorageAlwaysTB(storageTB: number, decimals: number = 2): string {
  return `${storageTB.toFixed(decimals)} TB`;
}
