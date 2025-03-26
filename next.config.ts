import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* specify config options for image links */
  reactStrictMode: false,        //This was false
  images: {
    
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

};

export default nextConfig;
