import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lovely-flamingo-139.convex.cloud"
      },
      {
        protocol: "https",
        hostname: "greedy-avocet-324.convex.cloud"
      }
    ]
  }
};

export default nextConfig;
