import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutesOnLoggedIn: React.FC = () => {
  const location = useLocation();

  if (localStorage.getItem("todo_access_token")) {
    return <Navigate to='/board' state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoutesOnLoggedIn;
