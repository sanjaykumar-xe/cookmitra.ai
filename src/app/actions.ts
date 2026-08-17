'use server';

import {
  generateIndianRecipe,
} from "@/ai/flows/generate-indian-recipe";
import {
  refineIndianRecipe,
  RefineIndianRecipeInput,
} from "@/ai/flows/refine-indian-recipe";
import {
  suggestMissingIngredients,
  SuggestMissingIngredientsInput,
} from "@/ai/flows/suggest-missing-ingredients";
import {
  generateHealthyMealPlan,
} from "@/ai/flows/generate-healthy-meal-plan";
import {
  generateHealingFoodsInfo,
} from "@/ai/flows/generate-healing-foods-flow";
import { z } from "zod";
import { GenerateHealthyMealPlanInputSchema, type GenerateHealthyMealPlanInput } from "@/ai/schemas/healthy-meal-plan-schemas";

const generateRecipeSchema = z.object({
  ingredients: z.string(),
  photoDataUri: z.string().optional(),
  budget: z.coerce.number(),
  cookingTime: z.enum(["<15 minutes", "<30 minutes", "<45 minutes", "<60 minutes", "<90 minutes"]),
  dietaryPreference: z.enum(["Veg", "Non-Veg"]),
  region: z.enum(['North Indian', 'South Indian', 'East Indian', 'West Indian', 'Central Indian', 'Any', 'Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Karnataka', 'Punjabi', 'Bengali', 'Gujarati', 'Maharashtrian', 'Rajasthani']),
  numberOfPersons: z.coerce.number(),
  isBatchMode: z.preprocess((val) => val === 'true' || val === true, z.boolean()).optional(),
  batchDays: z.coerce.number().optional(),
  language: z.string().optional(),
});

export async function generateRecipeAction(formData: FormData) {
  try {
    const rawData = Object.fromEntries(formData);
    const inputData = generateRecipeSchema.parse(rawData);
    
    // Inject language instructions if not English
    if (inputData.language && inputData.language !== 'en') {
      const langName = inputData.language === 'ta' ? 'Tamil' : 'Hindi';
      (inputData as any).ingredients = `${inputData.ingredients}. IMPORTANT: Respond entirely in ${langName}, including recipe title, description, ingredients, and steps.`;
    }

    const recipe = await generateIndianRecipe(inputData as any);
    return { success: true, data: recipe };
  } catch (error: any) {
    console.error("AI Generation Error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Invalid form data provided." };
    }
    return { success: false, error: error.message || "Failed to generate recipe. Please try again." };
  }
}

export async function refineRecipeAction(input: RefineIndianRecipeInput) {
    try {
        const recipe = await refineIndianRecipe(input);
        return { success: true, data: recipe };
    } catch (error: any) {
        console.error(error);
        return { success: false, error: error.message || "Failed to refine recipe. Please try again." };
    }
}

export async function suggestMissingIngredientsAction(input: SuggestMissingIngredientsInput) {
    try {
        const result = await suggestMissingIngredients(input);
        return { success: true, data: result };
    } catch (error: any) {
        console.error(error);
        return { success: false, error: error.message || "Failed to suggest ingredients." };
    }
}

export async function generateHealthyMealPlanAction(input: GenerateHealthyMealPlanInput) {
  try {
    const inputData = GenerateHealthyMealPlanInputSchema.parse(input);
    
    // Inject language instructions if not English
    if (inputData.language && inputData.language !== 'en') {
        const langName = inputData.language === 'ta' ? 'Tamil' : 'Hindi';
        inputData.goal = `${inputData.goal}. Respond entirely in ${langName}, including meal names and benefits.` as any;
    }

    const mealPlan = await generateHealthyMealPlan(inputData);
    return { success: true, data: mealPlan };
  } catch (error: any) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return { success: false, error: "Invalid form data provided." };
    }
    return { success: false, error: error.message || "Failed to generate meal plan. The AI nutritionist might be busy. Please try again later." };
  }
}

/**
 * Pure server action to generate healing foods info via AI.
 * Caching is now handled on the client side to avoid Firebase SDK server/client conflicts.
 */
export async function generateHealingFoodsAction(condition: string) {
    try {
        console.log(`[HealingFoods] Generating for: ${condition}`);
        const data = await generateHealingFoodsInfo({ condition });
        console.log(`[HealingFoods] Generation successful for: ${condition}`);
        return { success: true, data };
    } catch (error: any) {
        console.error("[HealingFoods] SERVER ACTION ERROR:", error);
        return { success: false, error: error.message || "Failed to generate healing foods info. The AI service might be busy." };
    }
}
