import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_API_KEY } from '@/lib/env';

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash'
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'application/json'
};

export const AIChatSession = model.startChat({
  generationConfig,
  history: []
});
