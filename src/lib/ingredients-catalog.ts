export interface CatalogIngredient {
  id: string;
  name: string;
  unit: string;
  price: number;
  category: 'Proteins' | 'Grains' | 'Vegetables' | 'Dairy' | 'Spices' | 'Oils' | 'Condiments' | 'Nuts' | 'Fruits';
}

export const ingredientCategories = ['All', 'Proteins', 'Grains', 'Vegetables', 'Dairy', 'Spices', 'Oils', 'Condiments', 'Nuts', 'Fruits'] as const;

export type IngredientCategory = typeof ingredientCategories[number];

export const ingredientCatalog: CatalogIngredient[] = [
  { id: 'chicken', name: 'Chicken', unit: '1kg', price: 250, category: 'Proteins' },
  { id: 'mutton', name: 'Mutton (Goat)', unit: '1kg', price: 700, category: 'Proteins' },
  { id: 'paneer', name: 'Paneer', unit: '200g', price: 120, category: 'Proteins' },
  { id: 'fish', name: 'Fish (Rohu)', unit: '1kg', price: 300, category: 'Proteins' },
  { id: 'eggs', name: 'Eggs', unit: '1 dozen', price: 80, category: 'Proteins' },
  { id: 'tofu', name: 'Tofu', unit: '200g', price: 100, category: 'Proteins' },

  { id: 'basmati_rice', name: 'Basmati Rice', unit: '1kg', price: 180, category: 'Grains' },
  { id: 'wheat_flour', name: 'Wheat Flour', unit: '1kg', price: 40, category: 'Grains' },
  { id: 'rice_flour', name: 'Rice Flour', unit: '500g', price: 50, category: 'Grains' },
  { id: 'semolina', name: 'Semolina (Sooji)', unit: '500g', price: 30, category: 'Grains' },
  { id: 'lentils_toor', name: 'Toor Dal', unit: '1kg', price: 150, category: 'Grains' },
  { id: 'chickpeas', name: 'Chickpeas', unit: '1kg', price: 140, category: 'Grains' },

  { id: 'onion', name: 'Onion', unit: '1kg', price: 40, category: 'Vegetables' },
  { id: 'tomato', name: 'Tomato', unit: '1kg', price: 50, category: 'Vegetables' },
  { id: 'potato', name: 'Potato', unit: '1kg', price: 30, category: 'Vegetables' },
  { id: 'garlic', name: 'Garlic', unit: '250g', price: 60, category: 'Vegetables' },
  { id: 'ginger', name: 'Ginger', unit: '250g', price: 50, category: 'Vegetables' },
  { id: 'green_chilli', name: 'Green Chilli', unit: '100g', price: 20, category: 'Vegetables' },
  { id: 'capsicum', name: 'Capsicum', unit: '500g', price: 45, category: 'Vegetables' },

  { id: 'milk', name: 'Milk', unit: '1L', price: 60, category: 'Dairy' },
  { id: 'yogurt', name: 'Yogurt (Curd)', unit: '400g', price: 50, category: 'Dairy' },
  { id: 'butter', name: 'Butter', unit: '100g', price: 60, category: 'Dairy' },
  { id: 'ghee', name: 'Ghee', unit: '500ml', price: 350, category: 'Dairy' },
  { id: 'cream', name: 'Fresh Cream', unit: '200ml', price: 90, category: 'Dairy' },

  { id: 'turmeric_powder', name: 'Turmeric Powder', unit: '100g', price: 40, category: 'Spices' },
  { id: 'red_chili_powder', name: 'Red Chili Powder', unit: '100g', price: 60, category: 'Spices' },
  { id: 'coriander_powder', name: 'Coriander Powder', unit: '100g', price: 50, category: 'Spices' },
  { id: 'garam_masala', name: 'Garam Masala', unit: '50g', price: 80, category: 'Spices' },
  { id: 'cumin_seeds', name: 'Cumin Seeds', unit: '100g', price: 70, category: 'Spices' },
  { id: 'mustard_seeds', name: 'Mustard Seeds', unit: '100g', price: 40, category: 'Spices' },
  { id: 'black_pepper', name: 'Black Pepper', unit: '50g', price: 100, category: 'Spices' },
  { id: 'cardamom', name: 'Cardamom', unit: '20g', price: 150, category: 'Spices' },
  { id: 'cloves', name: 'Cloves', unit: '20g', price: 90, category: 'Spices' },

  { id: 'cooking_oil', name: 'Cooking Oil', unit: '1L', price: 180, category: 'Oils' },
  { id: 'mustard_oil', name: 'Mustard Oil', unit: '1L', price: 200, category: 'Oils' },

  { id: 'salt', name: 'Salt', unit: '1kg', price: 25, category: 'Condiments' },
  { id: 'sugar', name: 'Sugar', unit: '1kg', price: 45, category: 'Condiments' },
  { id: 'vinegar', name: 'Vinegar', unit: '500ml', price: 70, category: 'Condiments' },
  
  { id: 'cashews', name: 'Cashews', unit: '250g', price: 400, category: 'Nuts' },
  { id: 'almonds', name: 'Almonds', unit: '250g', price: 350, category: 'Nuts' },
  
  { id: 'lemon', name: 'Lemon', unit: '4 pcs', price: 20, category: 'Fruits' },
  { id: 'tamarind', name: 'Tamarind', unit: '200g', price: 80, category: 'Fruits' },
];
