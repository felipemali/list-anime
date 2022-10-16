import React from "react";
import { render } from "react-dom";
import Home from "./page/Home";
import "../src/index.css";

const root = document.getElementById("root");
render(
  <div className="container">
    <Home />
  </div>,
  root
);
