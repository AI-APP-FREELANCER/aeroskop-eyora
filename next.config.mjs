/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This also sets the Cache-Control max-age sent to visitors' browsers,
    // not just the server-side optimizer cache — a full year (the previous
    // value here) meant that swapping a /public image file (same filename,
    // new bytes, e.g. replacing a product photo) stayed invisible to anyone
    // who had already loaded the old one, for up to a year, until they
    // hard-refreshed. A day still avoids the 60s-default re-encode-on-every-
    // visitor cost, without trapping content updates behind a long-lived
    // browser cache.
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
