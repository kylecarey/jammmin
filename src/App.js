

import React, { Children } from "react";

import App from "./Components/App/App";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App>
      {Children}
    </App>
  </React.StrictMode>
);
