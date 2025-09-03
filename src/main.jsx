import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <>
        <h1>Welcome to S.K Chicken Centre</h1>
        <App />
      </>
    </BrowserRouter>
  </StrictMode>
);
