import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { PageProvider } from "./components/PageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </React.StrictMode>
);
