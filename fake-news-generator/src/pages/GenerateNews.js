import React, { useState } from "react";
import { generateFakeNews } from "../api/aiService";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import "../styles/GenerateNews.css";

const GenerateNews = () => {
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState("");
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState("en");
  const { t } = useTranslation();

  const handleGenerate = async () => {
    if (!subject.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const fakeNews = await generateFakeNews(subject, language);
      setNews(fakeNews);
    } catch (err) {
      setError(err.message || t("errorGeneratingNews"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {" "}
      {/* Utilisation de la classe CSS container */}
      <Typography variant="h4" gutterBottom>
        {t("title")}
      </Typography>
      <TextField
        label={t("subject_placeholder")}
        variant="outlined"
        fullWidth
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="text-field" // Classe CSS pour le champ de texte
      />
      <TextField
        select
        label={t("language_label")}
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="text-field" // Classe CSS pour le champ de texte
      >
        <MenuItem value="en">Anglais</MenuItem>
        <MenuItem value="fr">Français</MenuItem>
      </TextField>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerate}
        disabled={loading}
        className="button" // Classe CSS pour le bouton
      >
        {loading ? <CircularProgress size={24} /> : t("generate")}
      </Button>
      {error && (
        <Typography color="error" className="error-message">
          {" "}
          {/* Classe CSS pour le message d'erreur */}
          {error}
        </Typography>
      )}
      {news && (
        <Card className="card">
          {" "}
          {/* Classe CSS pour la carte */}
          <CardContent>
            <Typography variant="h5">{t("fake_news")}</Typography>
            <Typography variant="body1">{news}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GenerateNews;
