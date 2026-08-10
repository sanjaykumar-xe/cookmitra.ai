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

export type MenuCategory =
  | "Starters & Appetizers"
  | "Soups"
  | "Salads"
  | "Curries & Gravies"
  | "Dry & Stir-Fried"
  | "Protein Specialties"
  | "Rice & Biryani"
  | "Breads"
  | "Snacks & Street Food"
  | "Desserts & Sweets"
  | "Beverages"
  | "Sides & Accompaniments";

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
  menuCategory?: MenuCategory;
  ingredients: Ingredient[];
  steps: string[];
  tags?: string[];
  healthTags?: string[]; // Tags for matching recipes to health conditions
  storageInstructions?: string[];
  reheatingInstructions?: string[];
  imageUrl?: string; // URL for the recipe photo
}

