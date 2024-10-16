import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Assurez-vous d'importer useTranslation

const Header = () => {
  const { i18n } = useTranslation(); // Récupérer l'instance i18n

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {i18n.t("title")}
        </Typography>
        <Button color="inherit" component={Link} to="/">
          {i18n.t("home")}
        </Button>
        <Button color="inherit" component={Link} to="/generate">
          {i18n.t("generate")}
        </Button>
        <Button color="inherit" onClick={() => changeLanguage("en")}>
          English
        </Button>
        <Button color="inherit" onClick={() => changeLanguage("fr")}>
          Français
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
