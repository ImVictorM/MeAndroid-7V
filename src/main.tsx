import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";

import { setupStore } from "@/common/store";
import { userActivityKey } from "@/common/store/userActivity/userActivitySlice";
import { getFromLocalStorage } from "@/common/utils/localStorage";
import { setTheme } from "@/common/store/theme/themeSlice";
import { getThemeSavedOrPreferred } from "@/common/store/theme/themeUtils";

import App from "@/App.tsx";
import "@/index.css";

const theme = getThemeSavedOrPreferred();

const store = setupStore({
  userActivity: getFromLocalStorage(userActivityKey) || {
    lastVisit: null,
    visitCount: 0,
  },
});

store.dispatch(setTheme(theme));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
