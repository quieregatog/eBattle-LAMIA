import { Routes, Route } from "react-router";
import HomePage from "../pages/Home";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
