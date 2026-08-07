/**
 * @fileOverview Helper functions for automatic recipe image resolution.
 * Maps recipe IDs/slugs to images dropped into public/recipe-images/
 */

import type { Recipe } from './recipes/types';

/**
 * Returns the primary image candidate URL for a recipe.
 * Checks recipe.imageUrl first, then falls back to local /recipe-images/[recipe.id].jpg
 */
export function getRecipeImageUrl(recipe: Partial<Recipe> | null | undefined): string {
  if (!recipe) return '';
  if (recipe.imageUrl) return recipe.imageUrl;
  if (recipe.id) return `/recipe-images/${recipe.id}.jpg`;
  return '';
}

/**
 * Returns alternative candidate file extensions to try if the default .jpg fails to load.
 */
export function getRecipeImageCandidates(recipeId: string): string[] {
  if (!recipeId) return [];
  return [
    `/recipe-images/${recipeId}.jpg`,
    `/recipe-images/${recipeId}.jpeg`,
    `/recipe-images/${recipeId}.png`,
    `/recipe-images/${recipeId}.webp`
  ];
}
