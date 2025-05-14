import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/globals.css"; // Updated path to use alias and point to globals.css
import App from "@/App.tsx"; // Updated path to use alias

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

