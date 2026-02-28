import "./i18n";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import "./index.css";

import { AppInitializer } from "./AppInitializer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <AppInitializer />
    <RouterProvider router={router} />
  </>,
);
