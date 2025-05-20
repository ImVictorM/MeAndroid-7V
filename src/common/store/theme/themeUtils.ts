import { Theme, themeKey } from "./themeSlice";
import { getFromLocalStorage } from "@/common/utils/localStorage";

export const getThemeSavedOrPreferred = (): Theme => {
  const themeSaved = getFromLocalStorage<Theme>(themeKey);

  if (themeSaved) {
    return themeSaved;
  } else {
    const preferredTheme: Theme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches
      ? "dark"
      : "light";

    return preferredTheme;
  }
};
