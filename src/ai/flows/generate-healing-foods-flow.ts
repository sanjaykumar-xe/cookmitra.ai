'use server';
/**
 * @fileOverview A Genkit flow for generating dietary guidance for any health condition.
 */

import { ai } from '@/ai/genkit';
import {
  GenerateHealingFoodsInputSchema,
  type GenerateHealingFoodsInput,
  GenerateHealingFoodsOutputSchema,
  type GenerateHealingFoodsOutput,
} from '@/ai/schemas/healing-foods-schemas';

export async function generateHealingFoodsInfo(input: GenerateHealingFoodsInput): Promise<GenerateHealingFoodsOutput> {
  return generateHealingFoodsFlow(input);
}

const generateHealingFoodsPrompt = ai.definePrompt({
  name: 'generateHealingFoodsPrompt',
  input: { schema: GenerateHealingFoodsInputSchema },
  output: { schema: GenerateHealingFoodsOutputSchema },
  prompt: `You are an expert clinical nutritionist specializing in Indian dietary practices. 

Your task is to provide dietary guidance for the following health condition: {{{condition}}}.

IMPORTANT RULES:
1. Provide a short, empathetic summary of the condition and the primary dietary goal.
2. Suggest 6-8 foods that are commonly found in an Indian kitchen that help manage or heal this condition.
3. Suggest 4-6 foods to limit or avoid.
4. Select 1-3 relevant tags from the following FIXED VOCABULARY for recipe filtering:
   - "diabetes-friendly"
   - "pcos-friendly"
   - "heart-healthy"
   - "anemia-friendly"
   - "digestive-friendly"
   - "weight-management"
   - "immunity-boosting"
   - "cold-cough-friendly"
   - "pregnancy-friendly"
   - "high-bp-friendly"
   DO NOT invent new tags. If none of these apply, return an empty array for healthTags.
5. All reasoning must be medically grounded but easy for a layperson to understand.
6. Return valid JSON only.

Generate the guidance now.`,
});

const generateHealingFoodsFlow = ai.defineFlow(
  {
    name: 'generateHealingFoodsFlow',
    inputSchema: GenerateHealingFoodsInputSchema,
    outputSchema: GenerateHealingFoodsOutputSchema,
  },
  async (input) => {
    const { output } = await generateHealingFoodsPrompt(input);
    if (!output) {
      throw new Error("Failed to generate healing foods info.");
    }
    return output;
  }
);
