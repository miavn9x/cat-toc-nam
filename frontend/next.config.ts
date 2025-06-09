/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export", // ✅ Đây là cách mới để xuất static site
  eslint: {
    ignoreDuringBuilds: true, // ✅ Bỏ qua lỗi lint khi build
  },
};

export default nextConfig;
