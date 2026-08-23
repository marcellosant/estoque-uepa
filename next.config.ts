import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/:path",
        destination: "https://api-estoque-7wp0.onrender.com/api/:path",
      },
    ];
  },
};

export default nextConfig;
