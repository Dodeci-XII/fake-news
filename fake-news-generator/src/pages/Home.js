import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import "../styles/Home.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      {" "}
      <h1>{t("welcome")}</h1>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/generate"
        className="button"
      >
        {t("startGenerating")}
      </Button>
    </div>
  );
};

export default Home;
