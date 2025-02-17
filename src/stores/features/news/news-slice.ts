import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { endpoints } from "./news-api";
import { Post } from "./type";

const initialState: {
  posts: Post[];
} = {
  posts: [],
};
export const NewsSlice = createSlice({
  name: "newsSlice",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      endpoints.getListNews.matchFulfilled,
      (state, action) => {
        state.posts = action.payload.posts;
      }
    );
  },
});

export const { setNews } = NewsSlice.actions;

export default NewsSlice.reducer;
