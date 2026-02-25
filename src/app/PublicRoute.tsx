import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../features/auth/authStore";

const PublicRoute = () => {
  const user = useAuthStore((state) => state.user);

  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;