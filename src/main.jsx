import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./layout/Root";
import { RouterProvider } from "react-router";
import router from "./routes/router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
      <StrictMode>
            <RouterProvider router={router} />
      </StrictMode>,
);
