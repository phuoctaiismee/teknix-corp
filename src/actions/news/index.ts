'use server'

import { API_URL, CONTENT_KEY } from "@/configs"
import { IPostDetailResponse, IPostsResponse } from "@/stores/features/news";

export const getListNews = async () => {
  const response = await fetch(`${API_URL}/ghost/api/content/posts/?key=${CONTENT_KEY}`);
  const data:IPostsResponse = await response.json();
  return data.posts;
};

export const getPostBySlug = async (slug: string) => {
  const response = await fetch(`${API_URL}/ghost/api/content/posts/slug/${slug}/?key=${CONTENT_KEY}`);
  const data:IPostDetailResponse = await response.json();
  return data.posts[0];
};

