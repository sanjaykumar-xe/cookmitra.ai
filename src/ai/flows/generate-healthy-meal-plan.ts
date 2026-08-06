'use server';
/**
 * @fileOverview A Genkit flow for generating a healthy weekly Indian meal plan.
 *
 * - generateHealthyMealPlan - A function that handles the meal plan generation process.
 * - GenerateHealthyMealPlanInput - The input type for the function.
 * - GenerateHealthyMealPlanOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import {
  GenerateHealthyMealPlanInputSchema,
  type GenerateHealthyMealPlanInput,
  GenerateHealthyMealPlanOutputSchema,
  type GenerateHealthyMealPlanOutput,
} from '@/ai/schemas/healthy-meal-plan-schemas';


export async function generateHealthyMealPlan(input: GenerateHealthyMealPlanInput): Promise<GenerateHealthyMealPlanOutput> {
  return generateHealthyMealPlanFlow(input);
}

const generateHealthyMealPlanPrompt = ai.definePrompt({
  name: 'generateHealthyMealPlanPrompt',
  input: { schema: GenerateHealthyMealPlanInputSchema },
  output: { schema: GenerateHealthyMealPlanOutputSchema },
  prompt: `You are an expert nutritionist specializing in Indian cuisine. Your task is to create a healthy, balanced, 7-day meal plan based on the user's profile and goals.

User Profile:
- Age Range: {{{ageRange}}}
- Activity Level: {{{activityLevel}}}
- Diet Preference: {{{dietPreference}}}
- Cuisine Preference: {{{cuisinePreference}}}
- Primary Goal: {{{goal}}}
- Weekly Budget: Approx. ₹{{{weeklyBudget}}}

IMPORTANT OUTPUT RULES:
1.  You MUST return ONLY valid JSON that adheres strictly to the provided output schema.
2.  Do NOT include any markdown formatting (like \`\`\`json).
3.  Do NOT include any explanations or text outside of the JSON object.
4.  All nutritional values (calories, protein, carbs, fats) must be numbers.
5.  Keep meals practical, using common Indian ingredients, and align with the user's budget, goals, and cuisine preference.
6.  Respect the diet preference: Vegetarian (dal, paneer, pulses), Eggetarian (include eggs), Non-Veg (include chicken/fish, but not every day).
7.  Meal calorie distribution should be: Breakfast (light), Lunch (highest), Dinner (moderate).
8.  CRITICAL: For every meal, provide a detailed 'ingredients' list with specific quantities and categories. This is used to build a shopping list for the user.

Generate the healthy meal plan now.`,
});

const generateHealthyMealPlanFlow = ai.defineFlow(
  {
    name: 'generateHealthyMealPlanFlow',
    inputSchema: GenerateHealthyMealPlanInputSchema,
    outputSchema: GenerateHealthyMealPlanOutputSchema,
  },
  async (input) => {
    const { output } = await generateHealthyMealPlanPrompt(input);
    if (!output) {
        throw new Error("The AI failed to generate a valid meal plan response. Please try again.");
    }
    return output;
  }
);
