import React, { useState } from "react";
import { generateFakeNews } from "../api/aiService";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem";
import ReactMarkdown from "react-markdown";
import "../styles/GenerateNews.css";

const GenerateNews = () => {
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState("");
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState("en");

  const handleGenerate = async () => {
    if (!subject.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const fakeNews = await generateFakeNews(subject, language);
      setNews(fakeNews);
    } catch (err) {
      setError(err.message || "Erreur lors de la génération de la fake news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Typography variant="h4" gutterBottom>
        Generate Fake News
      </Typography>
      <TextField
        label="Subject of the Fake News"
        variant="outlined"
        fullWidth
        className="text-field"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <TextField
        select
        label="Choose Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="text-field"
      >
        <MenuItem value="en">Anglais</MenuItem>
        <MenuItem value="fr">Français</MenuItem>
      </TextField>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerate}
        disabled={loading}
        className="button"
      >
        {loading ? <CircularProgress size={24} /> : "Generate"}
      </Button>

      {error && <Typography className="error-message"> {error}</Typography>}

      {news && (
        <Card className="card">
          {" "}
          <CardContent>
            <Typography variant="h5">Fake News:</Typography>
            <ReactMarkdown>{news}</ReactMarkdown> {/* Affichage du Markdown */}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GenerateNews;
