import React from "react";
import { Navigate } from "react-router-dom";
import { IGlobalAttributes } from "../interface/IGlobal";

interface IProtectedRoute extends IGlobalAttributes {
  user: boolean;
}

const ProtectedRoute = ({ user, children }: IProtectedRoute) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
