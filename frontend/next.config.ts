import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Remove domains if using local images like /placeholder.svg
    domains: [], // Add external domains if needed, e.g., ['cdn.example.com']
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // Bypass ESLint errors in .next for now
  },
  reactStrictMode: true,
  trailingSlash: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};

export default nextConfig;
