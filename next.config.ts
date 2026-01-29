import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : undefined,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : undefined,
};

export default nextConfig;
