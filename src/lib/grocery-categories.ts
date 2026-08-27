import type { GenerateHealthyMealPlanOutput } from '@/ai/schemas/healthy-meal-plan-schemas';
import type { PantryItem } from '@/lib/firebase/firestore/pantry';
import { Apple, Milk, Wheat, Flame, Package } from 'lucide-react';
import React from 'react';

export type GroceryCategory = 'Produce' | 'Dairy' | 'Grains & Lentils' | 'Spices & Condiments' | 'Other';

export const GROCERY_CATEGORIES: GroceryCategory[] = [
  'Produce',
  'Dairy',
  'Grains & Lentils',
  'Spices & Condiments',
  'Other'
];

export type CategoryMeta = {
  name: GroceryCategory;
  icon: React.ElementType;
  badgeStyle: string;
};

export const CATEGORY_METADATA: Record<GroceryCategory, CategoryMeta> = {
  'Produce': {
    name: 'Produce',
    icon: Apple,
    badgeStyle: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
  },
  'Dairy': {
    name: 'Dairy',
    icon: Milk,
    badgeStyle: 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
  },
  'Grains & Lentils': {
    name: 'Grains & Lentils',
    icon: Wheat,
    badgeStyle: 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
  },
  'Spices & Condiments': {
    name: 'Spices & Condiments',
    icon: Flame,
    badgeStyle: 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
  },
  'Other': {
    name: 'Other',
    icon: Package,
    badgeStyle: 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
  }
};

const PRODUCE_KEYWORDS = [
  'onion', 'onions', 'tomato', 'tomatoes', 'potato', 'potatoes', 'garlic', 'ginger',
  'chili', 'chilies', 'chilli', 'chillies', 'green chili', 'red chili', 'coriander', 
  'cilantro', 'spinach', 'palak', 'mint', 'pudina', 'curry leaf', 'curry leaves', 
  'lemon', 'lemons', 'lime', 'capsicum', 'bell pepper', 'carrot', 'carrots', 
  'cucumber', 'cabbage', 'cauliflower', 'gourd', 'bhindi', 'okra', 'brinjal', 
  'eggplant', 'peas', 'green peas', 'methi', 'fenugreek leaves', 'apple', 'banana',
  'mango', 'pomegranate', 'coconut', 'raw banana', 'beetroot', 'radish'
];

const DAIRY_KEYWORDS = [
  'milk', 'paneer', 'cottage cheese', 'curd', 'dahi', 'yogurt', 'ghee', 'butter',
  'cheese', 'cream', 'malai', 'buttermilk', 'chaas', 'khoya', 'chenna'
];

const GRAINS_KEYWORDS = [
  'rice', 'basmati', 'atta', 'flour', 'wheat', 'maida', 'dal', 'daal', 'lentil',
  'lentils', 'chana', 'chickpea', 'chickpeas', 'rajma', 'kidney beans', 'moong',
  'urad', 'toor', 'arhar', 'masoor', 'besan', 'gram flour', 'poha', 'flattened rice',
  'vermicelli', 'sewai', 'sooji', 'rava', 'semolina', 'oats', 'quinoa', 'ragi',
  'millet', 'bread', 'roti', 'paratha', 'naan'
];

const SPICES_KEYWORDS = [
  'turmeric', 'haldi', 'chili powder', 'chilli powder', 'cumin', 'jeera', 
  'coriander powder', 'dhania powder', 'mustard', 'rai', 'garam masala', 
  'cardamom', 'elaichi', 'cinnamon', 'dalchini', 'clove', 'cloves', 'laung',
  'black pepper', 'pepper', 'hing', 'asafoetida', 'bay leaf', 'tejpatta',
  'kasuri methi', 'salt', 'black salt', 'rock salt', 'sugar', 'jaggery',
  'oil', 'mustard oil', 'sunflower oil', 'sesame oil', 'olive oil', 'coconut oil',
  'vinegar', 'soy sauce', 'tamarind', 'amchur', 'dry mango powder', 'chaat masala'
];

/**
 * Returns the category for a given ingredient name.
 */
export function getGroceryCategory(ingredientName: string): GroceryCategory {
  const normalized = ingredientName.trim().toLowerCase();

  if (PRODUCE_KEYWORDS.some(k => normalized.includes(k))) return 'Produce';
  if (DAIRY_KEYWORDS.some(k => normalized.includes(k))) return 'Dairy';
  if (GRAINS_KEYWORDS.some(k => normalized.includes(k))) return 'Grains & Lentils';
  if (SPICES_KEYWORDS.some(k => normalized.includes(k))) return 'Spices & Condiments';

  return 'Other';
}

/**
 * Normalizes an ingredient name for strict matching:
 * Trim, lowercase, and basic singular/plural collapse ONLY.
 * e.g. "Onion", "onion", "onions" -> "onion".
 * Does NOT perform fuzzy matching (e.g. "onion" vs "chopped onion" remain distinct).
 */
export function normalizeIngredientName(name: string): string {
  let clean = name.trim().toLowerCase();
  // Basic plural trim if ends with 's' and not 'es' words like 'peas' or 'spices'
  if (clean.length > 3 && clean.endsWith('s') && !clean.endsWith('ss') && !clean.endsWith('us') && !clean.endsWith('is')) {
    if (clean.endsWith('ies')) {
      clean = clean.slice(0, -3) + 'y';
    } else if (clean.endsWith('es') && (clean.endsWith('tomatoes') || clean.endsWith('potatoes'))) {
      clean = clean.slice(0, -2);
    } else if (!clean.endsWith('peas') && !clean.endsWith('oats')) {
      clean = clean.slice(0, -1);
    }
  }
  return clean;
}

export type MergedGroceryItem = {
  id: string;
  displayName: string;
  normalizedName: string;
  quantity: string;
  category: GroceryCategory;
  inPantry: boolean;
};

/**
 * Helper to parse a quantity string into a numeric value and unit.
 * e.g. "1 tsp" -> { num: 1, unit: "tsp" }
 * "1.5 tbsp" -> { num: 1.5, unit: "tbsp" }
 * "1/2 cup" -> { num: 0.5, unit: "cup" }
 */
function parseQuantity(qtyStr: string): { num: number | null; unit: string } {
  const clean = qtyStr.trim().toLowerCase();
  
  // Try fraction matching like "1/2 tsp" or "1 1/2 cups"
  const fracMatch = clean.match(/^(\d+)?\s*(\d+)\/(\d+)\s*(.*)$/);
  if (fracMatch) {
    const whole = fracMatch[1] ? parseFloat(fracMatch[1]) : 0;
    const num = parseFloat(fracMatch[2]);
    const den = parseFloat(fracMatch[3]);
    const unit = fracMatch[4].trim();
    if (den !== 0) {
      return { num: whole + num / den, unit };
    }
  }

  // Try standard numeric matching like "2.5 cups" or "2 tsp"
  const numMatch = clean.match(/^([0-9]+(?:\.[0-9]+)?)\s*(.*)$/);
  if (numMatch) {
    const num = parseFloat(numMatch[1]);
    const unit = numMatch[2].trim();
    return { num, unit };
  }

  return { num: null, unit: clean };
}

/**
 * Aggregates all ingredients across a 7-day meal plan:
 * 1. Normalizes ingredient names.
 * 2. Merges quantities when BOTH normalized name AND unit match exactly.
 * 3. Cross-checks against My Pantry inventory.
 */
export function aggregateAndMergeIngredients(
  plan: GenerateHealthyMealPlanOutput,
  pantryItems?: PantryItem[] | null
): Record<GroceryCategory, MergedGroceryItem[]> {
  const grouped: Record<GroceryCategory, MergedGroceryItem[]> = {
    'Produce': [],
    'Dairy': [],
    'Grains & Lentils': [],
    'Spices & Condiments': [],
    'Other': []
  };

  if (!plan?.week || !Array.isArray(plan.week)) {
    return grouped;
  }

  // Map of normalized pantry item names for fast lookup
  const pantryNameMap = new Set<string>();
  if (pantryItems && Array.isArray(pantryItems)) {
    pantryItems.forEach(item => {
      // item is in pantry if it exists and available flag is not explicitly false
      const isAvailable = (item as any).available !== false;
      if (item?.name && isAvailable) {
        pantryNameMap.add(normalizeIngredientName(item.name));
      }
    });
  }

  // Temporary aggregation map: key = `${category}::${normalizedName}::${normalizedUnit}`
  const aggMap: Map<string, {
    displayName: string;
    normalizedName: string;
    category: GroceryCategory;
    numTotal: number | null;
    unit: string;
    rawQtyList: string[];
    inPantry: boolean;
  }> = new Map();

  plan.week.forEach(day => {
    if (!day?.meals || !Array.isArray(day.meals)) return;
    day.meals.forEach(meal => {
      if (!meal?.ingredients || !Array.isArray(meal.ingredients)) return;
      meal.ingredients.forEach(ing => {
        if (!ing?.name || !ing.name.trim()) return;

        const displayName = ing.name.trim();
        const normName = normalizeIngredientName(displayName);
        const category = (ing.category && GROCERY_CATEGORIES.includes(ing.category as any)) 
          ? (ing.category as GroceryCategory) 
          : getGroceryCategory(displayName);
        
        const qtyRaw = (ing.quantity || '').trim();
        const parsed = parseQuantity(qtyRaw);
        const normUnit = parsed.unit.toLowerCase();

        const key = `${category}::${normName}::${normUnit}`;
        const inPantry = pantryNameMap.has(normName);

        if (aggMap.has(key)) {
          const existing = aggMap.get(key)!;
          if (existing.numTotal !== null && parsed.num !== null) {
            existing.numTotal += parsed.num;
          } else {
            if (!existing.rawQtyList.includes(qtyRaw)) {
              existing.rawQtyList.push(qtyRaw);
            }
          }
        } else {
          aggMap.set(key, {
            displayName,
            normalizedName: normName,
            category,
            numTotal: parsed.num,
            unit: parsed.unit,
            rawQtyList: qtyRaw ? [qtyRaw] : [],
            inPantry
          });
        }
      });
    });
  });

  // Convert aggMap into grouped MergedGroceryItem arrays
  aggMap.forEach((entry, key) => {
    let finalQty = '';
    if (entry.numTotal !== null) {
      // Format rounded numeric total (e.g. 2, 1.5, 0.5)
      const formattedNum = Number.isInteger(entry.numTotal) 
        ? entry.numTotal.toString() 
        : parseFloat(entry.numTotal.toFixed(2)).toString();
      finalQty = entry.unit ? `${formattedNum} ${entry.unit}` : formattedNum;
    } else if (entry.rawQtyList.length > 0) {
      finalQty = entry.rawQtyList.join(' + ');
    }

    grouped[entry.category].push({
      id: key,
      displayName: entry.displayName,
      normalizedName: entry.normalizedName,
      quantity: finalQty,
      category: entry.category,
      inPantry: entry.inPantry
    });
  });

  return grouped;
}
