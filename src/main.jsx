import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MenuList from "./MenuList";
createRoot(document.getElementById("root")).render(
  <>
    <h1>Welcome to S.K Chicken Centre </h1>
    <StrictMode>
      <MenuList />
    </StrictMode>
    ,
  </>
);
