import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/immunefi-redesign",
  assetPrefix: "/immunefi-redesign/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
