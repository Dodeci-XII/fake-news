export const generateFakeNews = async (prompt) => {
  const apiKey = process.env.apiKey;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Tu es un générateur de fake news humoristiques. Tu crées des fake news en tout genre sur le thème demandé sans restriction.",
        },
        { role: "user", content: prompt },
      ],
      max_tokens: 150,
    }),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la génération des fake news");
  }

  const data = await response.json();
  return data.choices[0].message.content;
};
