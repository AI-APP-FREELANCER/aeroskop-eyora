/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local static images never change without a redeploy, so let the
    // optimizer cache each resized variant for a year instead of the
    // 60s default — avoids re-encoding the same width/quality on every
    // visitor after the cache's first request goes cold.
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
