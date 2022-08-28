// EXTERNAL
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

//COMPONENTS
import App from "./app";

// -----
const container = document.querySelector("#root") as HTMLElement;
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);   