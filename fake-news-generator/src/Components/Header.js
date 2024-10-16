import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Select, MenuItem } from "@mui/material";

const Header = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
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

        {/* Menu déroulant pour la sélection de la langue */}
        <Select
          value={language}
          onChange={(e) => changeLanguage(e.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "Select Language" }}
          variant="outlined"
          style={{ color: "white" }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fr">Français</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
