import { createListenerMiddleware } from "@reduxjs/toolkit";
import { themeKey, setTheme } from "./themeSlice";
import { setToLocalStorage } from "@/utils/localStorage";

export const themeListener = createListenerMiddleware();

themeListener.startListening({
  actionCreator: setTheme,
  effect: (action) => {
    setToLocalStorage(themeKey, action.payload);
  },
});

export default themeListener;
