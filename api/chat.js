export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;
  const apiKey = process.env.GROQ_API_KEY; // Safely read from Vercel Server Environment

  if (!apiKey) {
    return res.status(500).json({ error: 'Groq API Key is missing on the server' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant', // <-- ⚡ UPDATED MODEL NAME HERE ⚡
        messages: messages,
        temperature: 0.3,
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to communicate with Groq API' });
  }
}