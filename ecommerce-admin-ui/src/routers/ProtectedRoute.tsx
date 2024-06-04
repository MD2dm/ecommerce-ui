import useAuth from "@hooks/useAuth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  console.log(`ahihi:${children}`);
  const auth = useAuth();
  console.log("dit cu", auth);
  const location = useLocation();

  if (auth.isAuthenticated) {
    return <Navigate to="admin/auth/login" />;
  } else {
    return  <>{children}</>;
  }
};

export default ProtectedRoute;
