import { API_URL, CONTENT_KEY, ROUTES, WEBSITE_HOST_URL } from "@/configs";
import { Post } from "@/stores/features/news";
import type { MetadataRoute } from "next";

type changeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const responseNews = await fetch(
    `${API_URL}/ghost/api/content/posts/?key=${CONTENT_KEY}`
  );
  const fetchArticles = await responseNews.json();

  if (!Array.isArray(fetchArticles?.posts)) {
    console.error("Invalid API response:", fetchArticles);
    return [];
  }

  const changeFrequency = "daily" as changeFrequency;

  const posts = fetchArticles.posts.map(({ slug }: Post) => ({
    url: `${WEBSITE_HOST_URL}/news/${slug}`,
    lastModified: new Date(),
    changeFrequency,
  }));

  const routes = Object.values(ROUTES).map((page: string) => ({
    url: `${WEBSITE_HOST_URL}/${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...posts, ...routes];
}
