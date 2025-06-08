/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export", // ✅ Bắt buộc để next export hoạt động
};

export default nextConfig;
