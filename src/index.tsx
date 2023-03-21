import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import GlobalStyled from "./style/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routes>
        <GlobalStyled />
        <App />
      </Routes>
    </React.StrictMode>
  </Provider>
);
