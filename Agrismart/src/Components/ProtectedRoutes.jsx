import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../store/AuthContext";

function ProtectedRoutes() {
  // const { isLoggedIn } = useAuth();
  let isLoggedIn = true;
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
