import type { NextConfig } from "next";

if (typeof global.localStorage !== "undefined") {
  try {
    Object.defineProperty(global, "localStorage", {
      value: undefined,
      writable: true,
    });
  } catch (e) {
    // ignore
  }
}

const nextConfig: NextConfig = {};

export default nextConfig;
