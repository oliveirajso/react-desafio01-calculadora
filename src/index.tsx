import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import GlobalStyles from "./global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
