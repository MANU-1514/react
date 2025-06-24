import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";   // ✅ must be "./App.jsx"
import "./index.css";          // optional

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
