import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All artwork is bundled with the site. Serving it directly avoids a
    // runtime image-proxy dependency and keeps mobile previews reliable.
    unoptimized: true,
  },
};

export default nextConfig;
