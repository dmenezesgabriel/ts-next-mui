import { createTheme, ThemeOptions } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

// Base theme with shared properties
const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  shape: {
    borderRadius: 8,
  },
};

const lightThemeOptions: ThemeOptions = deepmerge(baseTheme, {
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
});

const darkThemeOptions: ThemeOptions = deepmerge(baseTheme, {
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#303030",
      paper: "#424242",
    },
  },
});

// Create themes
export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);
