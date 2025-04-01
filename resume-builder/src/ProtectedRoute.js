import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("authToken");

  return token ? <Outlet /> : <Navigate to="/authorization" replace />;
};

export default ProtectedRoute;
