import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>
);
