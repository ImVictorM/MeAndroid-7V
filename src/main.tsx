import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";

import App from "@/App.tsx";
import { setupStore } from "@/common/store";
import { getThemeSavedOrPreferred } from "@/common/store/theme/themeUtils";

import "@/index.css";
import { BrowserRouter } from "react-router";

const theme = getThemeSavedOrPreferred();

// Append theme class before render to prevent flickering
document.documentElement.classList.add(theme);

const store = setupStore({
  theme: theme,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
