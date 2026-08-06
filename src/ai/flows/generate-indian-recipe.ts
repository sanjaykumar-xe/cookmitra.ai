'use server';

import { ai } from '@/ai/genkit';
import { 
  GenerateIndianRecipeInputSchema, 
  type GenerateIndianRecipeInput, 
  GenerateIndianRecipeOutputSchema, 
  type GenerateIndianRecipeOutput 
} from '@/ai/schemas/recipe-schemas';

export async function generateIndianRecipe(input: GenerateIndianRecipeInput): Promise<GenerateIndianRecipeOutput> {
  return generateIndianRecipeFlow(input);
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
