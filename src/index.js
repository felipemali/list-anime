import React from "react";
import ReactDOM from "react-dom";
import Home from "./page/Home";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div style={{ backgroundColor: "#222629", overflowX: "hidden" }}>
    <Home />
  </div>,
  document.getElementById("root")
);

reportWebVitals();
