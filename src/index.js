// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css"; // Import the CSS file
import App from "./App";

// Replace ReactDOM.render with createRoot
const root = document.getElementById("root");
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


createRoot(root).render(rootElement);