import type { Recipe } from './recipes/types';

/**
 * Evaluates whether a recipe matches a search query term across name, ingredients, description, and tags.
 * Reusable matching function used across recipes explorer and autocomplete search bars.
 */
function matchesRecipeSearch(recipe: Recipe, query: string): boolean {
  const t = query.toLowerCase().trim();
  if (!t) return true;
  const matchName = recipe.name.toLowerCase().includes(t);
  const matchIng = recipe.ingredients?.some(recIng => recIng.name.toLowerCase().includes(t)) ?? false;
  const matchDesc = recipe.description ? recipe.description.toLowerCase().includes(t) : false;
  const matchTags = recipe.tags ? recipe.tags.some(tag => tag.toLowerCase().includes(t)) : false;
  return matchName || matchIng || matchDesc || matchTags;
}

/**
 * Returns up to maxResults matching recipes for an autocomplete search query,
 * prioritizing exact name matches, then general matches sorted by popularity.
 */
export function getRecipeSearchSuggestions(recipesList: Recipe[], query: string, maxResults = 5): Recipe[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const matched = recipesList.filter(recipe => matchesRecipeSearch(recipe, q));

  // Prioritize recipes whose title contains the query string, then by popularity
  return matched.sort((a, b) => {
    const aStarts = a.name.toLowerCase().startsWith(q);
    const bStarts = b.name.toLowerCase().startsWith(q);
    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;

    const aNameIncludes = a.name.toLowerCase().includes(q);
    const bNameIncludes = b.name.toLowerCase().includes(q);
    if (aNameIncludes && !bNameIncludes) return -1;
    if (!aNameIncludes && bNameIncludes) return 1;

    return (b.popularity || 0) - (a.popularity || 0);
  }).slice(0, maxResults);
}
