import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./sass/index.scss";

import Layout from "./components/Layout";

import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>
);
