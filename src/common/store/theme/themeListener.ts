import { createListenerMiddleware } from "@reduxjs/toolkit";
import { themeKey, setTheme } from "./themeSlice";
import { setToLocalStorage } from "@/common/utils/localStorage";
import type { AppDispatch, RootReducerState } from "..";

export const themeListener = createListenerMiddleware();

themeListener.startListening.withTypes<RootReducerState, AppDispatch>()({
  actionCreator: setTheme,
  effect: (_, listenerApi) => {
    const state = listenerApi.getState();
    const theme = state.theme;

    setToLocalStorage(themeKey, theme);
  },
});

export default themeListener;
