/* eslint-disable no-console */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { RootState } from "../app/types";
import { LoginPage } from "../pages/Auth/Login";
import { RegisterPage } from "../pages/Auth/RegisterPage";
import { GamesPage } from "../pages/Games";
import { CreateGame } from "../pages/Games/Create";
import { EditGame } from "../pages/Games/Edit";
import HomePage from "../pages/Home";
import ProtectedRoute from "./PrivateRouter";

export const RoutesMain = () => {
  const {
    authSlice: { userAuth },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    console.log(userAuth);
  }, [userAuth]);

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
        path="/games/create"
        element={
          <ProtectedRoute user={userAuth?.token ? true : false}>
            <CreateGame />
          </ProtectedRoute>
        }
      />

      <Route
        path="/games/edit"
        element={
          <ProtectedRoute user={userAuth?.token ? true : false}>
            <EditGame />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
