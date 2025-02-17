import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "./type";
import { endpoints } from "./category-api";

const initialState: ICategory[] = [];

export const CategoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      endpoints.getListCategories.matchFulfilled,
      (state, action) => {
        state = action.payload;
      }
    );
  },
});

export const { setCategories } = CategoriesSlice.actions;

export default CategoriesSlice.reducer;
