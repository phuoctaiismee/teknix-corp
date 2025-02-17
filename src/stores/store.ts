import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "./ssr-safe-storage";

import { setupListeners } from "@reduxjs/toolkit/query";
import { UserApi, UserSlice } from "./features/user";
import { CategoryAPI, CategoriesSlice } from "./features/categories";
import { NewsAPI, NewsSlice } from "./features/news";

// CONFIG
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["userSlice", "categoriesSlice"],
};

// REDUCER
const rootReducer = combineReducers({
  [UserApi.reducerPath]: UserApi.reducer,
  [CategoryAPI.reducerPath]: CategoryAPI.reducer,
  [NewsAPI.reducerPath]: NewsAPI.reducer,

  userSlice: UserSlice.reducer,
  categoriesSlice: CategoriesSlice.reducer,

  //   NEWS
  newsSlice: NewsSlice.reducer,
});

// Middleware
const middleware = [
  UserApi.middleware,
  CategoryAPI.middleware,
  NewsAPI.middleware,
];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
