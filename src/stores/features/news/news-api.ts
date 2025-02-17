import { API_URL, CONTENT_KEY } from "@/configs";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IPostDetailResponse,
  IPostsResponse,
  Post,
  PostResponse,
} from "./type";

export const NewsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/ghost/api/content`,
    prepareHeaders: (headers, { getState }) => {
      return headers;
    },
  }),

  endpoints: (build) => ({
    // GET LIST
    getListNews: build.query<
      IPostsResponse,
      {
        page?: number;
        limit?: number | "all";
      }
    >({
      query: (payload) => {
        return {
          url: `/posts/?key=${CONTENT_KEY}`,
          method: "GET",
          params: payload,
        };
      },
      transformResponse: (response: IPostsResponse) => response,
    }),
    // GET BY ID

    getNewsBySlug: build.query<Post, { slug: string }>({
      query: ({ slug }) => ({
        url: `/posts/slug/${slug}/?key=${CONTENT_KEY}`,
        method: "GET",
      }),
      transformResponse: (response: IPostDetailResponse) => response.posts[0],
    }),
  }),
});

export const {
  endpoints,
  useGetNewsBySlugQuery,
  useGetListNewsQuery,
  useLazyGetNewsBySlugQuery,
  useLazyGetListNewsQuery,
} = NewsAPI;