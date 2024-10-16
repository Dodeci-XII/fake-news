import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Fake News Generator
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Accueil
        </Button>
        <Button color="inherit" component={Link} to="/generate">
          Générer
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
