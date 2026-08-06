'use server';
/**
 * @fileOverview A Genkit flow for refining an existing Indian recipe based on user feedback.
 *
 * - refineIndianRecipe - A function that handles the recipe refinement process.
 * - RefineIndianRecipeInput - The input type for the function.
 * - GenerateIndianRecipeOutput - The return type (reuses the same schema).
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { 
  GenerateIndianRecipeOutputSchema, 
  type GenerateIndianRecipeOutput 
} from '@/ai/schemas/recipe-schemas';

const RefineIndianRecipeInputSchema = z.object({
  currentRecipe: z.any().describe('The current recipe data in JSON format.'),
  tweakInstruction: z.string().describe('The user\'s instruction on how to change the recipe (e.g., "make it spicier", "swap rice for quinoa").'),
});
export type RefineIndianRecipeInput = z.infer<typeof RefineIndianRecipeInputSchema>;

export async function refineIndianRecipe(input: RefineIndianRecipeInput): Promise<GenerateIndianRecipeOutput> {
  return refineIndianRecipeFlow(input);
}

const refineIndianRecipePrompt = ai.definePrompt({
  name: 'refineIndianRecipePrompt',
  input: { schema: RefineIndianRecipeInputSchema },
  output: { schema: GenerateIndianRecipeOutputSchema },
  prompt: `You are an expert Indian chef. You are provided with an existing recipe and a specific instruction to change or refine it.

Existing Recipe Data:
{{{JSONcurrentRecipe}}}

User's Refinement Instruction:
{{{tweakInstruction}}}

Your task:
1. Apply the user's specific instruction to the recipe.
2. Keep EVERYTHING ELSE in the recipe the same (ingredients, instructions, etc.) unless the requested change explicitly requires an update (e.g., swapping an ingredient or changing a cooking step).
3. Ensure the nutritional information and costs are updated if the changes affect them.
4. Maintain the same output format.
5. Return ONLY the updated recipe JSON.

Refine the recipe now.`,
});

const refineIndianRecipeFlow = ai.defineFlow(
  {
    name: 'refineIndianRecipeFlow',
    inputSchema: RefineIndianRecipeInputSchema,
    outputSchema: GenerateIndianRecipeOutputSchema,
  },
  async (input) => {
    const { output } = await refineIndianRecipePrompt({
        ...input,
        JSONcurrentRecipe: JSON.stringify(input.currentRecipe)
    });
    return output!;
  }
);
