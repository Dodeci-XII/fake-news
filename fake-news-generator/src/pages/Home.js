import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Bienvenue sur le générateur de Fake News</h1>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/generate"
      >
        Commencer à générer des Fake News
      </Button>
    </div>
  );
};

export default Home;
