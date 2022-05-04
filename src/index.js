import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App";
import APIContextProvider from "./store/contexts/APIContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <APIContextProvider>
        <App />
      </APIContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
