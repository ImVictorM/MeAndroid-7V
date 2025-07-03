import { combineReducers, configureStore } from "@reduxjs/toolkit";

import themeSlice from "./theme/themeSlice";
import themeListener from "./theme/themeListener";
import userActivitySlice from "./userActivity/userActivitySlice";
import userActivityListener from "./userActivity/userActivityListener";

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  userActivity: userActivitySlice.reducer,
});

export const setupStore = (preloadedState?: Partial<RootReducerState>) => {
  return configureStore({
    reducer: rootReducer,
    devTools: import.meta.env.DEV,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .prepend(themeListener.middleware)
        .prepend(userActivityListener.middleware),
  });
};

export type RootReducerState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
