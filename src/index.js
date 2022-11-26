import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import palette from "./libs/theme";




ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={palette}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);