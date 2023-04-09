import { Routes, Route } from "react-router";
import { LoginPage } from "../pages/Auth/Login";
import { RegisterPage } from "../pages/Auth/RegisterPage";
import { GamesPage } from "../pages/Games";
import { GamesEditPage } from "../pages/Games/EditGame";
import HomePage from "../pages/Home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/games" element={<GamesPage />} />
      <Route path="/games/edit" element={<GamesEditPage />} />
    </Routes>
  );
};
