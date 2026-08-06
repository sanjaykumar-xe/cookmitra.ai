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

    const langName = language === 'ta' ? 'Tamil' : language === 'hi' ? 'Hindi' : 'English';
    const langInstruction = language !== 'en' ? `IMPORTANT: Respond ENTIRELY in ${langName}.` : '';

    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: `You are Chef Momo, a smart AI cooking assistant.

Your purpose:
Help users cook meals easily with clear, step-by-step guidance.

Core Features:
- Suggest recipes based on ingredients
- Provide step-by-step cooking instructions
- Support multiple languages (respond in user's language)
- Keep responses short, structured, and voice-friendly

Response Format:
Always structure answers like this:

🍽 Dish Name

🧂 Ingredients:
- item 1
- item 2
- item 3

👨‍🍳 Instructions:
1. Step one
2. Step two
3. Step three

⏱ Time: X mins  
🔥 Difficulty: Easy/Medium/Hard

Behavior Rules:
- Keep sentences short (optimized for voice output)
- Avoid long paragraphs
- Be friendly and helpful
- If user gives ingredients, prioritize those ingredients
- Suggest simple alternatives if something is missing
- Ask a follow-up question if needed

Multilingual:
- Detect user's language automatically
- Reply in ${langName}. ${langInstruction}

Fallback & Error Handling:
- If the request is unclear → ask a clarifying question
- If you don’t know something → say "I’m not sure, but here’s a simple alternative"
- If input is empty → respond: "Please tell me what ingredients you have or what you want to cook"
- NEVER return empty or null responses
- ALWAYS return a helpful cooking-related answer
- Do not mention APIs, models, or technical errors
- Do not break format
- Do not output raw JSON
- Always give a usable answer

Tone:
Friendly, simple, like a personal chef helping in the kitchen.`,
                },
                ...history,
            ],
            model: 'llama-3.1-8b-instant',
        });

        const response = chatCompletion.choices[0]?.message?.content || '';
        return { success: true, data: response };

    } catch (error: any) {
        console.error('Groq API Error:', error);
        return { success: false, error: error.message || 'The AI assistant is busy right now, please try again later.' };
    }
}
