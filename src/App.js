import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GenerateNews from "./pages/GenerateNews";
import Header from "./Components/Header";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header changeLanguage={changeLanguage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GenerateNews />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
