import axios from "axios";

export const generateFakeNews = async (subject, language) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseURL = "https://api.ai21.com/studio/v1/chat/completions";

  const userPrompt =
    language === "fr"
      ? `Raconte-moi une fake news absurde et drôle sur ${subject}`
      : `Tell me an absurd and funny fake news about ${subject}`;

  const payload = {
    model: "jamba-1.5-large",
    messages: [
      {
        role: "user",
        content: userPrompt,
      },
    ],
    documents: [],
    tools: [],
    n: 1,
    max_tokens: 256,
    temperature: 0.7,
    top_p: 1,
    stop: [],
    response_format: { type: "text" },
  };

  try {
    const response = await axios.post(baseURL, payload, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error generating fake news:", error.response?.data || error);
    throw new Error(
      "Erreur lors de la génération de la fake news: " +
        (error.response?.data?.message || error.message)
    );
  }
};
