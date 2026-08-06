/**
 * @fileOverview Core types for the CookMitra recipe system.
 */

export interface Ingredient {
  id: string;
  name: string;
  qty: string;
  price: number;
  available: boolean;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  type: "Vegetarian" | "Non-Vegetarian";
  time: number; // in minutes
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cost: number; // in INR
  popularity: number;
  ingredients: Ingredient[];
  steps: string[];
  tags?: string[];
  healthTags?: string[]; // Tags for matching recipes to health conditions
  storageInstructions?: string[];
  reheatingInstructions?: string[];
  imageUrl?: string; // URL for the recipe photo
}
