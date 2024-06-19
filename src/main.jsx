import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/core/App.jsx";
import "./assets/styles/App.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* app pris en compte ds application ds react router */}
    <BrowserRouter basename="/Bocafina-JS/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
