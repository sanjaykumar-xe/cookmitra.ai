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

function generateFallbackAlternativeMeal(mealType: string, currentDish: string, householdSize: number = 1) {
  const alternatives: Record<string, Array<{ food: string; calories: number; protein: number; carbs: number; fats: number; benefits: string; ingredients: Array<{ name: string; quantity: string; category: string }> }>> = {
    Breakfast: [
      { food: "Moong Dal Chilla & Mint Chutney", calories: 280, protein: 14, carbs: 38, fats: 7, benefits: "Rich in plant protein and dietary fiber for clean, sustained morning energy.", ingredients: [{ name: "Moong Dal", quantity: `${100 * householdSize}g`, category: "Proteins" }, { name: "Spices & Herbs", quantity: "To taste", category: "Spices" }] },
      { food: "Oats Vegetable Upma", calories: 240, protein: 9, carbs: 42, fats: 5, benefits: "Beta-glucan fibers lower cholesterol and improve digestive wellness.", ingredients: [{ name: "Rolled Oats", quantity: `${80 * householdSize}g`, category: "Grains" }, { name: "Mixed Vegetables", quantity: `${150 * householdSize}g`, category: "Produce" }] },
      { food: "Steamed Rava Idli with Sambar", calories: 290, protein: 11, carbs: 48, fats: 4, benefits: "Fermented grains offer pro-biotic gut benefits and light digestion.", ingredients: [{ name: "Semolina (Rava)", quantity: `${100 * householdSize}g`, category: "Grains" }, { name: "Toor Dal", quantity: `${50 * householdSize}g`, category: "Proteins" }] },
    ],
    Lunch: [
      { food: "Palak Paneer with Whole Wheat Phulka", calories: 450, protein: 22, carbs: 46, fats: 18, benefits: "Rich in iron, calcium, and essential amino acids for muscle maintenance.", ingredients: [{ name: "Paneer", quantity: `${120 * householdSize}g`, category: "Dairy" }, { name: "Spinach", quantity: `${200 * householdSize}g`, category: "Produce" }] },
      { food: "Punjabi Rajma Masala & Brown Rice", calories: 480, protein: 19, carbs: 68, fats: 10, benefits: "Kidney beans provide high soluble fiber for steady blood sugar control.", ingredients: [{ name: "Rajma (Kidney Beans)", quantity: `${100 * householdSize}g`, category: "Proteins" }, { name: "Brown Rice", quantity: `${150 * householdSize}g`, category: "Grains" }] },
      { food: "Dal Tadka with Jeera Rice & Salad", calories: 420, protein: 16, carbs: 62, fats: 9, benefits: "Complete amino acid profile when combining lentils with grain staple.", ingredients: [{ name: "Yellow Arhar Dal", quantity: `${100 * householdSize}g`, category: "Proteins" }, { name: "Basmati Rice", quantity: `${150 * householdSize}g`, category: "Grains" }] },
    ],
    Snacks: [
      { food: "Roasted Spicy Makhana (Foxnuts)", calories: 150, protein: 5, carbs: 24, fats: 4, benefits: "Low glycemic index snack rich in antioxidants and magnesium.", ingredients: [{ name: "Phool Makhana", quantity: `${40 * householdSize}g`, category: "Pantry" }, { name: "Ghee & Spices", quantity: "1 tsp", category: "Dairy" }] },
      { food: "Tangy Protein Sprouts Chaat", calories: 180, protein: 11, carbs: 28, fats: 3, benefits: "Enzyme-active sprouted legumes boost nutrient bioavailability and immunity.", ingredients: [{ name: "Sprouted Moong & Chana", quantity: `${150 * householdSize}g`, category: "Proteins" }, { name: "Lemon & Spices", quantity: "To taste", category: "Produce" }] },
      { food: "Roasted Chana & Herbal Green Tea", calories: 140, protein: 8, carbs: 22, fats: 2.5, benefits: "Clean crunch rich in zinc and polyphenol antioxidants.", ingredients: [{ name: "Roasted Black Chana", quantity: `${50 * householdSize}g`, category: "Proteins" }, { name: "Green Tea Bag", quantity: `${1 * householdSize} pcs`, category: "Pantry" }] },
    ],
    Dinner: [
      { food: "Lauki Chana Dal Sabzi with Multigrain Roti", calories: 340, protein: 14, carbs: 48, fats: 8, benefits: "Cooling bottle gourd aids night digestion and hydration.", ingredients: [{ name: "Bottle Gourd (Lauki)", quantity: `${250 * householdSize}g`, category: "Produce" }, { name: "Chana Dal", quantity: `${60 * householdSize}g`, category: "Proteins" }] },
      { food: "Moong Dal Comfort Khichdi with Curd", calories: 360, protein: 15, carbs: 54, fats: 8, benefits: "Light, soothing comfort dish easy on evening metabolism.", ingredients: [{ name: "Moong Dal & Rice", quantity: `${120 * householdSize}g`, category: "Grains" }, { name: "Fresh Curd", quantity: `${100 * householdSize}g`, category: "Dairy" }] },
      { food: "Tofu Vegetable Stir Fry with Soup", calories: 310, protein: 18, carbs: 32, fats: 10, benefits: "Low carb, high protein option promoting overnight muscle recovery.", ingredients: [{ name: "Tofu", quantity: `${150 * householdSize}g`, category: "Proteins" }, { name: "Mixed Bell Peppers", quantity: `${150 * householdSize}g`, category: "Produce" }] },
    ],
  };

  const list = alternatives[mealType] || alternatives['Lunch'];
  const filtered = list.filter(item => item.food.toLowerCase() !== currentDish.toLowerCase());
  const selected = filtered[Math.floor(Math.random() * filtered.length)] || list[0];
  
  return {
    type: mealType,
    food: selected.food,
    ingredients: selected.ingredients,
    calories: selected.calories,
    protein: selected.protein,
    carbs: selected.carbs,
    fats: selected.fats,
    benefits: selected.benefits,
  };
}

export async function swapSingleMealAction(params: {
  mealType: string;
  currentDish: string;
  dietPreference?: string;
  cuisinePreference?: string;
  goal?: string;
  householdSize?: number;
}) {
  try {
    const { mealType, currentDish, dietPreference = 'Vegetarian', cuisinePreference = 'Any', goal = 'Balanced eating', householdSize = 1 } = params;
    
    if (process.env.GROQ_API_KEY) {
      try {
        const Groq = require('groq-sdk');
        const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
        const completion = await groq.chat.completions.create({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: 'You are an Indian AI nutritionist. Return valid JSON only.' },
            {
              role: 'user',
              content: `Generate 1 single alternative ${mealType} dish for an Indian meal plan.
Do NOT suggest "${currentDish}". Provide a different, healthy, delicious Indian dish.

User criteria:
- Diet: ${dietPreference}
- Cuisine: ${cuisinePreference}
- Goal: ${goal}
- Servings / Household size: ${householdSize} person(s)

Return valid JSON object with keys:
"type": "${mealType}",
"food": "Dish Name",
"ingredients": [{"name": "Item", "quantity": "amount for ${householdSize} person(s)", "category": "Produce"}],
"calories": 250,
"protein": 12,
"carbs": 35,
"fats": 8,
"benefits": "Single-sentence health benefit explanation."`
            }
          ],
          response_format: { type: 'json_object' }
        });
        const content = completion.choices[0].message.content || '{}';
        const parsed = JSON.parse(content);
        if (parsed.food && parsed.ingredients && parsed.calories) {
          return { success: true, data: parsed };
        }
      } catch (err) {
        console.warn("Groq single meal swap AI warning, using fallback meal generator:", err);
      }
    }
    
    const fallbackMeal = generateFallbackAlternativeMeal(params.mealType, params.currentDish, params.householdSize || 1);
    return { success: true, data: fallbackMeal };
  } catch (error: any) {
    console.error("swapSingleMealAction error:", error);
    return { success: false, error: error.message || "Couldn't regenerate meal." };
  }
}
