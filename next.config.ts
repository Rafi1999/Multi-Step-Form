import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Disable lint errors on production build
  },
};


export default nextConfig;
