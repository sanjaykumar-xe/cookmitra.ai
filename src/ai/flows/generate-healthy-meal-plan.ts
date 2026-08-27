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
- Household Size / Servings: {{{householdSize}}} person(s)

IMPORTANT OUTPUT RULES:
1.  You MUST return ONLY valid JSON that adheres strictly to the provided output schema.
2.  Do NOT include any markdown formatting (like \`\`\`json).
3.  Do NOT include any explanations or text outside of the JSON object.
4.  All nutritional values (calories, protein, carbs, fats) must be numbers.
5.  Every single day MUST include EXACTLY 4 meal slots in order: "Breakfast", "Lunch", "Snacks", "Dinner".
6.  The "Snacks" slot MUST be a lightweight tea-time or mid-day option (e.g., roasted chana, sprouts chaat, makhana, fruit chaat, green tea with Marie biscuits) — NOT a full main meal.
7.  Meal calorie distribution per day: Breakfast (25%), Lunch (40%), Snacks (10-15%), Dinner (25%).
8.  HOUSEHOLD SIZE SCALING: Scale all ingredient quantities in the 'ingredients' array and the 'estimatedCost' proportionally for {{{householdSize}}} person(s). Keep per-meal calories, protein, carbs, and fats as single-person (1 serving) nutritional values.
9.  DIET PREFERENCE RULES:
    - "Veg" (or "Vegetarian"): 100% vegetarian dishes only (dal, paneer, vegetables, pulses). NO meat, fish, poultry, or eggs.
    - "Non-Veg" (or "Non-Vegetarian"): Regular non-vegetarian options (includes chicken, fish, mutton, plus vegetarian staples).
    - "Veg + Non-Veg": A balanced ~50/50 mix across the week (e.g., 3-4 days vegetarian meals, 3-4 days non-vegetarian meals).
    - "Veg + Egg" (or "Eggetarian"): Vegetarian dishes plus egg-based dishes (e.g., egg chilla, egg curry, boiled eggs). NO meat, fish, or poultry.
10. HEALTH BENEFITS CONCISENESS: For every meal's 'benefits' field, provide a single concise 1-sentence explanation of health benefits so it can be scanned in under 2 seconds.
11. CRITICAL: For every meal, provide a detailed 'ingredients' list with specific quantities scaled for {{{householdSize}}} person(s) and categories. This is used to build a shopping list for the user.

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
