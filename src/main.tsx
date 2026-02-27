import "./i18n";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import "./index.css";
import { AuthProvider } from "./features/auth/AuthContext";
import { AppInitializer } from "./AppInitializer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <AppInitializer />
    <RouterProvider router={router} />
  </AuthProvider>,
);
