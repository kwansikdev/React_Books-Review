import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import create from "./store";

const token = localStorage.getItem("token");
const store = create({ token });
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
