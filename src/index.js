import React from "react";
import ReactDOM from "react-dom";
import Home from "./page/Home";
import "../src/index.css";
import reportWebVitals from "./reportWebVitals";
//#222629"
// background: "#000 linear-gradient(180deg, #0000, #213944)",
ReactDOM.render(
  <div className="container">
    <Home />
  </div>,
  document.getElementById("root")
);

reportWebVitals();
