import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'images.unsplash.com',
      'i.imgur.com',
      'www.apple.com', 
    ],
  },
};

export default nextConfig;
