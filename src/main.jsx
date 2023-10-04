import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ForecastContextProvider } from "./context/ForecastContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ForecastContextProvider>
      <App />
    </ForecastContextProvider>
  </React.StrictMode>
);
