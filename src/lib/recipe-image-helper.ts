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
