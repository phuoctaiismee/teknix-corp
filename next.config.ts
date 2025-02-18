import createNextIntlPlugin from "next-intl/plugin";
import { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

/** @type {NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https" as const,
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https" as const,
        hostname: "images.prismic.io",
      },
      {
        protocol: "https" as const,
        hostname: "s3-alpha-sig.figma.com",
      },
      {
        protocol: "https" as const,
        hostname: "ghost-teknixcorp.up.railway.app",
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

export default withNextIntl(nextConfig);
