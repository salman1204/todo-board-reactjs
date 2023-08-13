import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}
const ProtectedRoutes: React.FC<Props> = ({ children }) => {
  let token = localStorage.getItem("todo_access_token");
  if (!token) {
    return <Navigate replace to={"/"} />;
  }
  return children;
};

export default ProtectedRoutes;
