import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";

import ProtectedRoute from "./ProtectedRoute";
import { DashboardLayout } from "../shared/layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import PublicRoute from "./PublicRoute";
import Users from "../pages/dashboard/Users";
import UserDetails from "../pages/dashboard/UserDetails";

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [{ path: "/login", element: <Login /> }],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "users", element: <Users /> },
          { path: "users/:id", element: <UserDetails /> },
        ],
      },
    ],
  },
]);
