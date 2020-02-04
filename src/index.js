import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import App from "./App";

const token = localStorage.getItem("token");

ReactDOM.render(<App />, document.getElementById("root"));
