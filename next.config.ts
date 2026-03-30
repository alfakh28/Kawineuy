/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔥 HAPUS experimental (biar aman Next.js 15)

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
