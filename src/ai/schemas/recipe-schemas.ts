import { z } from 'genkit';

export const regionEnum = z.enum(['North Indian', 'South Indian', 'East Indian', 'West Indian', 'Central Indian', 'Any', 'Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Karnataka', 'Punjabi', 'Bengali', 'Gujarati', 'Maharashtrian', 'Rajasthani']);

export const GenerateIndianRecipeInputSchema = z.object({
  ingredients: z.string().describe('A comma-separated list of ingredients available to the user.'),
  photoDataUri: z.string().optional().describe("An optional photo of ingredients, as a data URI."),
  budget: z.number().describe('Maximum budget for the recipe in INR.'),
  cookingTime: z.enum(['<15 minutes', '<30 minutes', '<45 minutes', '<60 minutes', '<90 minutes']).describe('Desired cooking time.'),
  dietaryPreference: z.enum(['Veg', 'Non-Veg']).describe('Dietary preference for the recipe.'),
  region: regionEnum.describe('The specific regional cuisine style for the recipe.'),
  numberOfPersons: z.number().describe('The number of people the recipe should serve.'),
  isBatchMode: z.boolean().optional().describe('Whether the user is cooking for multiple days.'),
  batchDays: z.number().optional().describe('The number of days the batch is intended for.'),
});
export type GenerateIndianRecipeInput = z.infer<typeof GenerateIndianRecipeInputSchema>;

export const GenerateIndianRecipeOutputSchema = z.object({
  name: z.string().describe('The name of the generated Indian dish.'),
  description: z.string().describe('A brief appetizing description of the dish.'),
  type: z.enum(['Vegetarian', 'Non-Vegetarian']).describe('Dietary type.'),
  ingredients: z.array(z.object({
    id: z.string().describe('Unique ID for the ingredient (lowercase, no spaces).'),
    name: z.string().describe('Ingredient name'),
    qty: z.string().describe('Ingredient quantity (e.g. 500g, 2 tbsp)'),
    price: z.number().describe('Estimated cost in INR.')
  })).describe('List of ingredients with quantities and cost.'),
  steps: z.array(z.string()).describe('Step-by-step cooking instructions.'),
  cost: z.number().describe('Estimated total cost of the recipe in INR.'),
  time: z.number().describe('Estimated total cooking time in minutes.'),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']).describe('Difficulty level.'),
  servings: z.number().describe('Number of people the recipe serves.'),
  popularity: z.number().default(0.5).describe('Initial popularity score.'),
  tags: z.array(z.string()).describe('Categorical tags (e.g. Punjabi, Healthy, Spicy).'),
  storageInstructions: z.array(z.string()).optional(),
  reheatingInstructions: z.array(z.string()).optional(),
});
export type GenerateIndianRecipeOutput = z.infer<typeof GenerateIndianRecipeOutputSchema>;
