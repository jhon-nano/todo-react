import { createTheme } from "@mui/material";

export const coolGray = {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  };
  
  
  let palette = createTheme({
  
    palette: {
      mode: 'light',
      common: {
        black: "#000",
        white: "#fff",
      },
      primary: {
  
        light: "#4fb3bf",
        main: "#00838f",
        dark: "#005662",
        contrastText: "#fff",
      },
      secondary: {
        light: "#a44fbb",
        main: "#8e24aa",
        dark: "#631976",
      },
      error: {
        light: "#f55a4e",
        main: "#FF0000",
        dark: "#f32c1e",
        contrastText: "#fff",
      },
      warning: {
        light: "#ffa21a",
        main: "#FF9800",
        dark: "#e68900",
        contrastText: "#fff",
        backgroundColor: "green",
      },
      info: {
        light: "#14b4fc",
        main: "#2471A3 ",
        dark: "#0398db",
        contrastText: "#fff",
      },
      success: {
        light: "#5cb860",
        main: "#4CAF50",
        dark: "#449d48",
        contrastText: "#fff",
      },
      text: {
        primary: coolGray[900],
        secondary: coolGray[600],
        disabled: coolGray[300],
      },
      background: {
        default: coolGray[100],
        paper: "#fff",
      },
      grey: coolGray,
    },
  });
  
  export default palette;
  