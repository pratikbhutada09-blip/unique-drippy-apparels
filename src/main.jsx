import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />

    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#ffffff",
          color: "#111827",
          border: "1px solid #e5e7eb",
        },
        success: {
          duration: 3000,
        },
        error: {
          duration: 4000,
        },
      }}
    />
  </React.StrictMode>
);
