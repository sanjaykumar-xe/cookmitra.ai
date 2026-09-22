/**
 * @fileOverview Helper functions for automatic recipe image resolution.
 * Maps recipe IDs/slugs to images dropped into public/recipe-images/
 */

import type { Recipe } from './recipes/types';
import { recipes as masterRecipes } from './recipes/index';

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
 * Returns alternative candidate file extensions and slug aliases to try if the default .jpg fails to load.
 */
export function getRecipeImageCandidates(recipeId: string): string[] {
  if (!recipeId) return [];

  // Candidate ID stems to try (exact DB ID + slug aliases)
  const idsToTry = [recipeId];

  // Strip regional/category suffixes (e.g. -street, -tn, -snack)
  const strippedId = recipeId.replace(/-(street|tn|snack|karnataka|andhra)$/, '');
  if (strippedId !== recipeId && !idsToTry.includes(strippedId)) {
    idsToTry.push(strippedId);
  }

  // Common aliases mapping DB ID <-> Filename Slugs
  const aliasMap: Record<string, string[]> = {
    'parotta-salna-street': ['parotta-salna'],
    'chicken-65-tn': ['chicken-65-tamil-style', 'chicken-65'],
    'ulundu-vadai-snack': ['ulundu-vadai'],
    'meen-kuzhambu': ['tamil-style-fish-curry', 'fish-curry'],
    'mutton-sukka-tn': ['mutton-sukka'],
    'chicken-chettinad-varuval-snack': ['chicken-chettinad-varuval'],
    'kari-dosai-tn': ['kari-dosai'],
    'mutton-kola-urundai-kuzhambu': ['kola-urundai', 'mutton-kola-urundai'],
    'bajji-snack': ['bajji'],
    'vazhakkai-bajji': ['bajji'],
    'onion-bajji': ['bajji']
  };

  if (aliasMap[recipeId]) {
    aliasMap[recipeId].forEach(alias => {
      if (!idsToTry.includes(alias)) idsToTry.push(alias);
    });
  }

  const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.jpg.jfif', '.jpg.jpg', '.jfif'];
  
  const candidates: string[] = [];
  for (const id of idsToTry) {
    for (const ext of extensions) {
      candidates.push(`/recipe-images/${id}${ext}`);
    }
  }

  return candidates;
}

/**
 * Resolves a prioritized list of candidate image URLs for any recipe object
 * (including master catalog recipes, saved user recipes, or partial recipe representations).
 *
 * 4-Step Resolution:
 * 1. If explicit imageUrl is provided, try it first.
 * 2. Look up the recipe in the master catalog by id, recipeId, originalId, slug, or matching dish name.
 * 3. Fall back to slugifying the recipe's clean display name if it corresponds to a catalog recipe.
 * 4. Try any explicit ID fields that match known catalog recipes (avoiding 404 spam on Firestore doc IDs).
 */
export function resolveRecipeImageCandidates(recipe: any): string[] {
  if (!recipe) return [];

  const candidates: string[] = [];

  // 1. If an explicit imageUrl is provided, try it first
  if (recipe.imageUrl && typeof recipe.imageUrl === 'string' && recipe.imageUrl.trim()) {
    candidates.push(recipe.imageUrl.trim());
  }

  const displayName = (recipe.name || recipe.dishName || '').trim();
  const cleanName = displayName.toLowerCase();

  // 2. Look up the recipe in the master recipes catalog
  const matchedRecipe = masterRecipes.find(r =>
    (recipe.originalId && r.id === recipe.originalId) ||
    (recipe.recipeId && r.id === recipe.recipeId) ||
    (recipe.slug && r.id === recipe.slug) ||
    (recipe.id && r.id === recipe.id) ||
    (cleanName && r.name.toLowerCase().trim() === cleanName)
  );

  if (matchedRecipe) {
    if (matchedRecipe.imageUrl) {
      candidates.push(matchedRecipe.imageUrl);
    }
    candidates.push(...getRecipeImageCandidates(matchedRecipe.id));
  }

  // 3. Fall back to slugifying the recipe's display name if it matches a catalog recipe
  if (cleanName) {
    const slugFromName = cleanName
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    if (slugFromName && masterRecipes.some(r => r.id === slugFromName)) {
      candidates.push(...getRecipeImageCandidates(slugFromName));
    }
  }

  // 4. Try any explicit id fields that might be a static recipe slug
  const possibleIds = [recipe.recipeId, recipe.originalId, recipe.slug, recipe.id].filter(Boolean);
  for (const id of possibleIds) {
    if (typeof id === 'string' && masterRecipes.some(r => r.id === id)) {
      candidates.push(...getRecipeImageCandidates(id));
    }
  }

  // Deduplicate while preserving priority order
  return Array.from(new Set(candidates.filter(Boolean)));
}
