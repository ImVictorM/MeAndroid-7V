import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

import { setupStore } from "@/common/store";
import { getThemeSavedOrPreferred } from "@/common/store/theme/themeUtils";
import { userActivityKey } from "@/common/store/userActivity/userActivitySlice";
import { getFromLocalStorage } from "@/common/utils/localStorage";

import App from "@/App.tsx";
import "@/index.css";

const theme = getThemeSavedOrPreferred();

// Append theme class before render to prevent flickering
document.documentElement.classList.add(theme);

const store = setupStore({
  theme: theme,
  userActivity: getFromLocalStorage(userActivityKey) || {
    lastVisit: null,
    visitCount: 0,
  },
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
