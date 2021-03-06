import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App";
import ComicContextProvider from "./store/contexts/ComicContextProvider";
import APIContextProvider from "./store/contexts/APIContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <APIContextProvider>
        <ComicContextProvider>
          <App />
        </ComicContextProvider>
      </APIContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
