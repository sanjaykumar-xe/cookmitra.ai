import { z } from 'zod';

export const GenerateHealthyMealPlanInputSchema = z.object({
  ageRange: z.enum(['18-25', '25-35', '35-50', '50+']).describe('The age range of the user.'),
  activityLevel: z.enum(['Low', 'Moderate', 'Active']).describe('The activity level of the user.'),
  dietPreference: z.enum(['Veg', 'Non-Veg', 'Veg + Non-Veg', 'Veg + Egg', 'Vegetarian', 'Non-Vegetarian', 'Eggetarian']).describe('The dietary preference of the user.'),
  cuisinePreference: z.enum(['North Indian', 'South Indian', 'East Indian', 'West Indian', 'Central Indian', 'Any', 'Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Karnataka', 'Punjabi', 'Bengali', 'Gujarati', 'Maharashtrian', 'Rajasthani']).describe('The preferred regional cuisine.'),
  goal: z.enum(['Balanced eating', 'Weight management', 'Energy boost', 'Muscle support']).describe('The primary health goal of the user.'),
  weeklyBudget: z.number().min(500).max(5000).describe('The estimated weekly budget for groceries in INR.'),
  householdSize: z.number().min(1).max(8).optional().default(1).describe('Household size / number of persons (1-8).'),
  language: z.string().optional().describe('The language in which to generate the meal plan (e.g., "en", "ta", "hi").'),
});
export type GenerateHealthyMealPlanInput = z.infer<typeof GenerateHealthyMealPlanInputSchema>;

const MealIngredientSchema = z.object({
    name: z.string().describe("Name of the ingredient"),
    quantity: z.string().describe("Quantity needed"),
    category: z.string().describe("Category (e.g., Produce, Dairy, Grains, Spices, Proteins, Pantry)")
});

const MealSchema = z.object({
    type: z.string().describe("Type of meal, e.g., 'Breakfast', 'Lunch', 'Snacks', 'Dinner'"),
    food: z.string().describe("Name of the food/dish"),
    ingredients: z.array(MealIngredientSchema).describe("List of ingredients for this specific meal"),
    calories: z.number().describe("Approximate calories"),
    protein: z.number().describe("Approximate protein in grams"),
    carbs: z.number().describe("Approximate carbohydrates in grams"),
    fats: z.number().describe("Approximate fats in grams"),
    benefits: z.string().describe("A brief description of health benefits"),
});

const DailyMealPlanSchema = z.object({
    day: z.string().describe("Day of the week, e.g., 'Monday'"),
    meals: z.array(MealSchema).describe("An array of 4 meals for the day (Breakfast, Lunch, Snacks, Dinner)"),
    dailyCalories: z.number().describe("Total approximate calories for the day"),
    dailyProtein: z.number().describe("Total approximate protein for the day"),
});

export const GenerateHealthyMealPlanOutputSchema = z.object({
  week: z.array(DailyMealPlanSchema).describe("An array of 7 daily meal plans for the week."),
  weeklySummary: z.object({
    avgCaloriesPerDay: z.number().describe("Average calories per day for the week"),
    avgProteinPerDay: z.number().describe("Average protein per day for the week"),
    estimatedCost: z.number().describe("Estimated total cost for the week's groceries in INR"),
    healthyDays: z.number().describe("Number of days that are considered 'healthy'"),
  }).describe("A summary of the weekly plan."),
  disclaimer: z.string().describe("Disclaimer about the plan's nature."),
});
export type GenerateHealthyMealPlanOutput = z.infer<typeof GenerateHealthyMealPlanOutputSchema>;
