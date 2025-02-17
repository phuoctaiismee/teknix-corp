export const API_URL: string =
  process.env.NEXT_PUBLIC_API_URL || "localhost:3000";
export const WEBSITE_HOST_URL: string =
  process.env.NEXT_PUBLIC_WEBSITE_HOST_URL || "localhost:3000";
export const CONTENT_KEY: string = process.env.NEXT_PUBLIC_CONTENT_KEY || "";

export const META_DATA = {
  title:
    "At TekNix, We Create Optimal Technology Platforms And Breakthrough Products With High Applicability. | TekNix Corporation",
  description:
    "TekNix Corporation is an information technology company providing tech products, applications, and solutions for businesses and users.",
  image: "/thumbnail.png",
  keywords: [
    "TekNix",
    "technology company",
    "IT solutions",
    "business technology",
    "software development",
    "enterprise solutions",
    "digital transformation",
    "tech products",
  ],
  og_title: "TekNix Corporation - Leading Tech Innovations and Solutions",
  icon: "/favicon.ico",
  og_description:
    "TekNix Corporation specializes in developing high-performance technology platforms, digital solutions, and breakthrough IT products for businesses and individuals.",
  twitter_title:
    "TekNix Corporation - Optimal Tech Solutions & Breakthrough Innovations",
  twitter_description:
    "Discover the future of technology with TekNix Corporation. We deliver cutting-edge tech products, applications, and business solutions for digital transformation.",
};

export const ROUTES = {
  HOME: "",
  NEWS: "/news",
  NEWS_DETAIL: "/news/:slug",
};

