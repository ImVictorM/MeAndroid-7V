import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

export const themeKey = "theme";

export const themeSlice = createSlice({
  name: themeKey,
  initialState: "dark" as Theme,
  reducers: {
    setTheme: (_, action: PayloadAction<Theme>) => action.payload,
  },
  selectors: {
    selectTheme: (state: Theme) => state,
  },
});

export const { setTheme } = themeSlice.actions;

export const { selectTheme } = themeSlice.selectors;

export default themeSlice;
