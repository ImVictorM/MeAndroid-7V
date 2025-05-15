import { Theme, themeKey } from "@/store/theme/themeSlice";
import { getFromLocalStorage } from "@/utils/localStorage";

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
