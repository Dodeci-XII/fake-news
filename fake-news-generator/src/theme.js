// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1F2937", // Bleu foncé
    },
    secondary: {
      main: "#E63946", // Rouge vif
    },
    background: {
      default: "#E5E7EB", // Gris clair
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontFamily: "Merriweather, serif",
      fontSize: "48px",
      fontWeight: "bold",
      color: "#1F2937",
    },
    body1: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "16px",
      color: "#000000",
    },
  },
});

export default theme;
