import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 typescript: {
  ignoreBuildErrors: true

 },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lovely-flamingo-139.convex.cloud"
      },
      {
        protocol: "https",
        hostname: "greedy-avocet-324.convex.cloud"
      },
      {
        protocol: "https",
        hostname: "img.clerk.com"
      }
    ]
  }
};

export default nextConfig;
