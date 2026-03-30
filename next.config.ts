import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  /* config options here */
}
 
export default nextConfig

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
