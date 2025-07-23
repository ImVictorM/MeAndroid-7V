import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { themeKey, setTheme, toggleTheme } from "./themeSlice";
import { setToLocalStorage } from "@/common/utils/localStorage";
import type { AppDispatch, RootReducerState } from "..";

export const themeListener = createListenerMiddleware();

themeListener.startListening.withTypes<RootReducerState, AppDispatch>()({
  matcher: isAnyOf(setTheme, toggleTheme),
  effect: (_, listenerApi) => {
    const state = listenerApi.getState();
    const theme = state.theme;

    setToLocalStorage(themeKey, theme);
  },
});

export default themeListener;
