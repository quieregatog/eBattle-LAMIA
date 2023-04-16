import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/types";
import { CircleProgress } from "./components/Progress/CircleProgress";
import { Toast } from "./components/Toast";
import { RoutesMain } from "./routes/routes";

const App = () => {
  const { authSlice } = useSelector((state: RootState) => state);

  return (
    <div className="App">
      <CircleProgress active={authSlice.loading} />
      <Toast />
      <RoutesMain />
    </div>
  );
};

export default App;
