import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental', //allows partial prerendering for specific routes
  },
};

export default nextConfig;
