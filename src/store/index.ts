import { combineReducers, configureStore } from "@reduxjs/toolkit";

import themeSlice from "./theme/themeSlice";
import themeListener from "./theme/themeListener";

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
});

export const setupStore = (preloadedState?: Partial<RootReducerState>) => {
  return configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.DEV,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(themeListener.middleware),
  });
};

export type RootReducerState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
