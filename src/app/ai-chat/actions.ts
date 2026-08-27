'use server';

import Groq from 'groq-sdk';
import { z } from 'zod';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const ChatHistorySchema = z.array(
    z.object({
        role: z.enum(['user', 'assistant', 'system']),
        content: z.string(),
    })
);

export type ChatMessage = z.infer<typeof ChatHistorySchema>[number];

export async function sendMessageToAI(history: ChatMessage[], language: string = 'en') {
    if (!process.env.GROQ_API_KEY) {
        return { success: false, error: 'Groq API key is not configured on the server.' };
    }

    const isTamil = language === 'ta';
    const isHindi = language === 'hi';

    const langName = isTamil ? 'Tamil' : isHindi ? 'Hindi' : 'English';
    const scriptName = isTamil ? 'தமிழ் (Tamil script)' : isHindi ? 'हिन्दी (Devanagari script)' : 'English';

    const langInstruction = isTamil || isHindi
        ? `CRITICAL MULTILINGUAL MANDATE:
The user has selected ${langName} as their active app language.
You MUST write your ENTIRE response (all conversational text, greetings, section titles, ingredient descriptions, and step-by-step instructions) in native ${scriptName}.
Do NOT use English or transliterated Latin script (Tanglish/Hinglish) for conversational text.
ONLY specific recipe dish names (e.g. "Paneer Tikka Masala") may remain in English script if desired. Everything else MUST be written in native ${scriptName}.`
        : 'Respond in natural, clear English.';

    const ingTitle = isTamil ? 'தேவையான பொருட்கள்' : isHindi ? 'सामग्री' : 'Ingredients';
    const instTitle = isTamil ? 'செய்முறை' : isHindi ? 'बनाने की विधि' : 'Instructions';
    const timeTitle = isTamil ? 'நேரம்' : isHindi ? 'समय' : 'Time';
    const diffTitle = isTamil ? 'கடினம்' : isHindi ? 'कठिनाई' : 'Difficulty';

    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: `You are Chef Momo, a warm and smart AI cooking assistant specializing in Indian cuisine.

${langInstruction}

Core Purpose:
Help users cook easily with clear, friendly, structured guidance in ${langName}.

Response Structure:
Always format your response clearly:

🍽 Dish Name

🧂 ${ingTitle}:
- item 1
- item 2

👨‍🍳 ${instTitle}:
1. Step 1
2. Step 2

⏱ ${timeTitle}: X mins  
🔥 ${diffTitle}: Easy/Medium/Hard

Rules:
- Keep sentences concise, conversational, and natural in ${scriptName}
- Be encouraging, friendly, and helpful
- Suggest recipe alternatives if ingredients are missing
- Strictly write all conversational text in ${langName} script when language is '${language}'`,
                },
                ...history,
            ],
            model: 'openai/gpt-oss-20b',
        });

        const response = chatCompletion.choices[0]?.message?.content || '';
        return { success: true, data: response };

    } catch (error: any) {
        console.error('Groq API Error:', error);
        return { success: false, error: error.message || 'The AI assistant is busy right now, please try again later.' };
    }
}
