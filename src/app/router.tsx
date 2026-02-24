import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";


import ProtectedRoute from "./ProtectedRoute";
import { DashboardLayout } from "../shared/layout/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Dashboard /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" />,
  },
]);