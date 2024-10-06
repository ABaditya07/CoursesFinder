import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashRouter as Router } from "react-router-dom";  // Import HashRouter

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <App />
    </Router>
    <ToastContainer />
  </>
);
