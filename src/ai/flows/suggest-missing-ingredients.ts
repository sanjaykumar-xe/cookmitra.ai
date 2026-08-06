'use server';
/**
 * @fileOverview This file defines a Genkit flow for identifying missing ingredients in a recipe
 * and providing external purchase links from online retailers.
 *
 * - suggestMissingIngredients - A function that handles the logic for suggesting missing ingredients.
 * - SuggestMissingIngredientsInput - The input type for the suggestMissingIngredients function.
 * - SuggestMissingIngredientsOutput - The return type for the suggestMissingIngredients function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { 
  SuggestMissingIngredientsInputSchema, 
  type SuggestMissingIngredientsInput, 
  SuggestMissingIngredientsOutputSchema, 
  type SuggestMissingIngredientsOutput 
} from '@/ai/schemas/ingredient-schemas';

const getRetailerProductLink = ai.defineTool(
  {
    name: 'getRetailerProductLink',
    description: 'Generates a dummy purchase link for a given ingredient from a specified online retailer. In a real application, this would fetch actual product links.',
    inputSchema: z.object({
      ingredientName: z.string().describe('The name of the ingredient to search for.'),
      retailer: z.enum(['Zepto', 'Pluckk', 'Foodstories', 'JioMart']).describe('The online retailer to get the link from.'),
    }),
    outputSchema: z.string().url().describe('A dummy URL for purchasing the ingredient.'),
  },
  async (input) => {
    const { ingredientName, retailer } = input;
    // In a real application, this would call an external API to get actual product links.
    // For this example, we generate a placeholder URL.
    return `https://www.${retailer.toLowerCase()}.com/search?q=${encodeURIComponent(ingredientName.replace(/ /g, '+'))}`;
  }
);

const suggestMissingIngredientsPrompt = ai.definePrompt({
  name: 'suggestMissingIngredientsPrompt',
  tools: [getRetailerProductLink],
  input: { schema: SuggestMissingIngredientsInputSchema },
  output: { schema: SuggestMissingIngredientsOutputSchema },
  prompt: `You are an AI assistant that helps users identify missing ingredients for a recipe and provides purchase links.

Here are the ingredients required for the recipe:
{{#each requiredIngredients}}
- {{this}}
{{/each}}

Here are the ingredients the user currently has:
{{#each userIngredients}}
- {{this}}
{{/each}}

1. Carefully compare the 'requiredIngredients' list with the 'userIngredients' list to identify any ingredients that the user is missing.
2. For each missing ingredient, use the 'getRetailerProductLink' tool to generate purchase links for 'Zepto', 'Pluckk', 'Foodstories', and 'JioMart'.
3. Present the identified missing ingredients and their generated purchase links in a structured JSON format as described by the output schema.
4. Ensure that the 'purchaseLinks' array for each missing ingredient always contains entries for 'Zepto', 'Pluckk', 'Foodstories', and 'JioMart', using the tool for each.

Respond ONLY with the JSON object.`,
});

const suggestMissingIngredientsFlow = ai.defineFlow(
  {
    name: 'suggestMissingIngredientsFlow',
    inputSchema: SuggestMissingIngredientsInputSchema,
    outputSchema: SuggestMissingIngredientsOutputSchema,
  },
  async (input) => {
    const { output } = await suggestMissingIngredientsPrompt(input);
    return output!;
  }
);

export async function suggestMissingIngredients(input: SuggestMissingIngredientsInput): Promise<SuggestMissingIngredientsOutput> {
  return suggestMissingIngredientsFlow(input);
}
