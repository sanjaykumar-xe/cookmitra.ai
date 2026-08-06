import { z } from 'genkit';

export const SuggestMissingIngredientsInputSchema = z.object({
  requiredIngredients: z.array(z.string()).describe('A list of ingredients required for the recipe.'),
  userIngredients: z.array(z.string()).describe('A list of ingredients the user currently possesses.'),
});
export type SuggestMissingIngredientsInput = z.infer<typeof SuggestMissingIngredientsInputSchema>;

export const PurchaseLinkSchema = z.object({
  retailer: z.enum(['Zepto', 'Pluckk', 'Foodstories', 'JioMart']).describe('The name of the online retailer.'),
  url: z.string().url().describe('The URL to purchase the ingredient from the retailer.'),
});

export const MissingIngredientDetailsSchema = z.object({
  name: z.string().describe('The name of the missing ingredient.'),
  purchaseLinks: z.array(PurchaseLinkSchema).describe('A list of purchase links for the missing ingredient.'),
});

export const SuggestMissingIngredientsOutputSchema = z.object({
  missingIngredients: z.array(MissingIngredientDetailsSchema).describe('A list of ingredients the user is missing, along with purchase links.'),
});
export type SuggestMissingIngredientsOutput = z.infer<typeof SuggestMissingIngredientsOutputSchema>;
