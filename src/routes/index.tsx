import { Routes, Route } from "react-router";
import { LoginPage } from "../pages/Auth/Login";
import { RegisterPage } from "../pages/Auth/RegisterPage";
import { GamesPage } from "../pages/Games";
import HomePage from "../pages/Home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/games" element={<GamesPage />} />
    </Routes>
  );
};
