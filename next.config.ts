import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All artwork is bundled with the site. Serving it directly avoids a
    // runtime image-proxy dependency and keeps mobile previews reliable.
    unoptimized: true,
  },
  async headers() {
    return [
      { source: "/optimized/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/qr/:path*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
      { source: "/:path*", headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ] },
    ];
  },
};

export default nextConfig;
