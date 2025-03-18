import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "assets.aceternity.com",
        protocol: "https",
      },
    ],
  },
}

export default nextConfig
