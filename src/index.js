import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/main.scss";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
