import { SaltProviderNext } from "@salt-ds/core";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "@salt-ds/theme/index.css";
import "@salt-ds/theme/css/theme-next.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SaltProviderNext accent="teal" corner="rounded" density="low" mode="dark">
      <App />
    </SaltProviderNext>
  </React.StrictMode>
);

reportWebVitals(console.log);
