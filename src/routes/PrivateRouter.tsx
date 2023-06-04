/* eslint-disable no-console */
import { Navigate } from "react-router-dom";
import { IGlobalAttributes } from "../interface/IGlobal";

interface IProtectedRoute extends IGlobalAttributes {
  user: boolean;
}

const ProtectedRoute = ({ user, children }: IProtectedRoute) => {
  console.log(user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
