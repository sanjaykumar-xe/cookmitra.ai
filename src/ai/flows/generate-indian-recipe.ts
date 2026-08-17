'use server';

import { ai } from '@/ai/genkit';
import { 
  GenerateIndianRecipeInputSchema, 
  type GenerateIndianRecipeInput, 
  GenerateIndianRecipeOutputSchema, 
  type GenerateIndianRecipeOutput 
} from '@/ai/schemas/recipe-schemas';

import Groq from 'groq-sdk';

export async function generateIndianRecipe(input: GenerateIndianRecipeInput): Promise<GenerateIndianRecipeOutput> {
  try {
    return await generateIndianRecipeFlow(input);
  } catch (error: any) {
    console.warn("Genkit Google AI failed, executing Groq LLM fallback:", error?.message);
    if (process.env.GROQ_API_KEY) {
      try {
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
        const completion = await groq.chat.completions.create({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: 'You are a master Indian chef. Output JSON only. Return a detailed, authentic Indian recipe.'
            },
            {
              role: 'user',
              content: `Create a unique, mouth-watering Indian recipe using:
Ingredients: ${input.ingredients}
Budget: INR ${input.budget}
Cooking Time: ${input.cookingTime}
Dietary Preference: ${input.dietaryPreference}
Region: ${input.region}
Servings: ${input.numberOfPersons}

Output valid JSON only with keys: name (string), description (string), time (number in minutes), cost (number in INR), servings (number), difficulty ("Easy"|"Medium"|"Hard"), ingredients (array of {name, qty, category}), steps (array of strings).`
            }
          ],
          response_format: { type: 'json_object' }
        });
        const content = completion.choices[0].message.content || '{}';
        const parsed = JSON.parse(content);
        if (parsed.name && parsed.steps && parsed.ingredients) {
          return parsed as GenerateIndianRecipeOutput;
        }
      } catch (groqErr) {
        console.error("Groq LLM fallback error:", groqErr);
      }
    }
    throw error;
  }
}

const generateIndianRecipePrompt = ai.definePrompt({
  name: 'generateIndianRecipePrompt',
  input: { schema: GenerateIndianRecipeInputSchema },
  output: { schema: GenerateIndianRecipeOutputSchema },
  prompt: `You are an expert Indian chef. Create a delicious Indian recipe based on the user's criteria.

Ingredients: {{{ingredients}}}
{{#if photoDataUri}}
(Photo provided - identify ingredients from image and include them)
{{/if}}

Budget: INR {{{budget}}}
Cooking Time: {{{cookingTime}}}
Dietary Preference: {{{dietaryPreference}}}
Region: {{{region}}}
Number of Persons: {{{numberOfPersons}}}
{{#if isBatchMode}}
Batch Mode: TRUE
Days: {{{batchDays}}}
{{/if}}

Guidelines:
1. Create a unique dish name.
2. Ensure the style matches the region.
3. Scale quantities for exactly {{{numberOfPersons}}} persons{{#if isBatchMode}} multiplied by {{{batchDays}}} days{{/if}}.
4. Provide nutritional info per serving.
5. Return ONLY valid JSON matching the schema.

Generate the Indian recipe now.`,
});

const generateIndianRecipeFlow = ai.defineFlow(
  {
    name: 'generateIndianRecipeFlow',
    inputSchema: GenerateIndianRecipeInputSchema,
    outputSchema: GenerateIndianRecipeOutputSchema,
  },
  async (input) => {
    const { output } = await generateIndianRecipePrompt(input);
    return output!;
  }
);
