import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bfasset.costco-static.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "wholefully.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.seededatthetable.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "c.ndtvimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
