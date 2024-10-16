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
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        {t("title")}
      </Typography>
      <TextField
        label={t("subject_placeholder")}
        variant="outlined"
        fullWidth
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <TextField
        select
        label={t("language_label")}
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ marginBottom: "20px" }}
      >
        <MenuItem value="en">Anglais</MenuItem>
        <MenuItem value="fr">Français</MenuItem>
      </TextField>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : t("generate")}
      </Button>

      {error && (
        <Typography color="error" style={{ marginTop: "20px" }}>
          {error}
        </Typography>
      )}

      {news && (
        <Card style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h5">{t("generateNews.fakeNews")}</Typography>
            <Typography variant="body1">{news}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GenerateNews;
