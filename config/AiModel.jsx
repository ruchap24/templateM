import { GoogleGenAI } from '@google/genai';

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY
  });

  const tools = [
    {
      googleSearch: {}
    }
  ];

  const config = {
    thinkingConfig: {
      thinkingLevel: 'HIGH'
    },
    tools
  };

  const model = 'gemini-3-pro-preview';

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: 'INSERT_INPUT_HERE'
        }
      ]
    }
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents
  });

  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

main();
