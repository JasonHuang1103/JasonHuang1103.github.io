import React from "react";
import { createRoot } from "react-dom/client";
import Cs180App from "./Cs180App";
import "../../styles.css";
import "./styles.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container missing in cs180 HTML.");
}

createRoot(container).render(
  <React.StrictMode>
    <Cs180App />
  </React.StrictMode>
);
