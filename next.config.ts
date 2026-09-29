import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  basePath: '/soryana-demo',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;