// ⚡ IMPORT YOUR CONTEXT HERE (Update the path to match where your file actually lives) ⚡
// ✅ Correct: Only go up one level (../) and include the extension
import { getResumeContext } from '../src/components/ai-assistant/getDynamicContext.js'; 

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
    // 1. Generate the system prompt safely on the server
    const systemPrompt = getResumeContext();

    // 2. Filter out any client-provided system messages to prevent prompt injection
    const userConversation = (messages || []).filter(msg => msg.role !== 'system');

    // 3. Prepend the secure server-side system prompt to the user's chat history
    const finalMessages = [
      { role: 'system', content: systemPrompt },
      ...userConversation,
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b', // Fully accessible on the Groq Developer Tier
        messages: finalMessages, // <-- ⚡ Send the securely assembled messages here ⚡
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