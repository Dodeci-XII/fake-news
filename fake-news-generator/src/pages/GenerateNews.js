import React, { useState } from "react";
import { generateFakeNews } from "../api/aiService";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MenuItem from "@mui/material/MenuItem"; // Importer MenuItem

const GenerateNews = () => {
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState("");
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState("en"); // État pour la langue

  const handleGenerate = async () => {
    if (!subject.trim()) return; // Vérifie si l'entrée est vide ou contient uniquement des espaces

    setLoading(true);
    setError(null);

    try {
      const fakeNews = await generateFakeNews(subject, language); // Passer la langue ici
      setNews(fakeNews); // Assurez-vous que fakeNews contient le texte correct
    } catch (err) {
      setError(err.message || "Erreur lors de la génération de la fake news");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Générer des Fake News
      </Typography>
      <TextField
        label="Sujet de la Fake News"
        variant="outlined"
        fullWidth
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <TextField
        select
        label="Choisir la langue"
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
        {loading ? <CircularProgress size={24} /> : "Générer"}
      </Button>

      {error && (
        <Typography color="error" style={{ marginTop: "20px" }}>
          {error}
        </Typography>
      )}

      {news && (
        <Card style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h5">Fake News :</Typography>
            <Typography variant="body1">{news}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default GenerateNews;
