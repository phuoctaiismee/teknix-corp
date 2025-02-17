import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "images.prismic.io",
      "s3-alpha-sig.figma.com",
      "ghost-teknixcorp.up.railway.app"
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

export default withNextIntl(nextConfig);
