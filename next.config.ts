import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // enables static export for Vercel / CDN
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
