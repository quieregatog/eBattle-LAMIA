import { useSelector } from "react-redux";
import { Routes, Route } from "react-router";
import { RootState } from "../app/types";
import { LoginPage } from "../pages/Auth/Login";
import { RegisterPage } from "../pages/Auth/RegisterPage";
import { GamesPage } from "../pages/Games";
import { GamesEditPage } from "../pages/Games/EditGame";
import HomePage from "../pages/Home";
import ProtectedRoute from "./PrivateRouter";

export const RoutesMain = () => {
  const {
    authSlice: { userAuth },
  } = useSelector((state: RootState) => state);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/games"
        element={
          <ProtectedRoute user={userAuth?.token ? true : false}>
            <GamesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/games/edit"
        element={
          <ProtectedRoute user={userAuth?.token ? true : false}>
            <GamesEditPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
