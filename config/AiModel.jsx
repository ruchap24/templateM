import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const config = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
};

export const GenerateEmailTemplateAIModel = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash',
  // systemInstruction: "You are an email template generator. Return valid JSON only.",
  // generationConfig: config
});

