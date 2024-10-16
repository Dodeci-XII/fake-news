import React, { useState } from "react";
import { generateFakeNews } from "../api/aiService";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const GenerateNews = () => {
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState("");
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    if (!subject.trim()) return; // Check for empty or whitespace-only input

    setLoading(true);
    setError(null);

    try {
      const resultFakeNews = await generateFakeNews(subject);
      const fakeNews = resultFakeNews.data.choices[0].message.content;
      setNews(fakeNews); // Met à jour l'état avec la fake news générée
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
