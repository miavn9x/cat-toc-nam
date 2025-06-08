import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Next.js sẽ tự export static HTML khi build
};

export default nextConfig;
