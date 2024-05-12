import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
window.onload = function () {
  // Hide the logo after a certain delay (e.g., 2 seconds) and display the content
  setTimeout(function () {
    document.getElementById("logo-container").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 1000); // Adjust delay as needed (in milliseconds)
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
