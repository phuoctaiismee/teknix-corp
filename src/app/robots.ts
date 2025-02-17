import { WEBSITE_HOST_URL } from "@/configs";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [""],
    },
    sitemap: `${WEBSITE_HOST_URL}/sitemap.xml`,
  };
}
