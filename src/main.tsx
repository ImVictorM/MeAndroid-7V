import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";

import App from "@/App.tsx";
import { setupStore } from "@/store";
import { getThemeSavedOrPreferred } from "@/store/theme/themeUtils";

import "@/index.css";

const theme = getThemeSavedOrPreferred();

// Append theme class before render to prevent flickering
document.documentElement.classList.add(theme);

const store = setupStore({
  theme: theme,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
