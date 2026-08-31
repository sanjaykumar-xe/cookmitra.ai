import { Recipe } from './types';

export const mizoramRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "bai-mizo-pork",
    menuCategory: "Curries & Gravies",
    name: "Bai",
    description: "The quintessential Mizo stew—a healthy, boiled mixture of pork, seasonal greens, and fermented pork fat (Sa-um).",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Easy",
    cost: 250,
    popularity: 0.89,
    tags: ["Mizoram", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "pork", name: "Pork (cubed)", qty: "400g", price: 160, available: true },
      { id: "sa_um", name: "Fermented Pork Fat (Sa-um)", qty: "1 tbsp", price: 30, available: true },
      { id: "mustard_leaves", name: "Mustard Leaves", qty: "2 bunches", price: 20, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 inch", price: 35, available: false }
    ],
    steps: [
      "Bring 4 cups of water to a boil in a heavy pot.",
      "Add pork pieces, salt, and crushed ginger.",
      "Add green chilies and the fermented pork fat (Sa-um).",
      "Stir in the roughly chopped mustard leaves.",
      "Simmer on low heat until the pork is tender and the greens are soft.",
      "Serve hot with steamed rice."
    ]
  },
  {
    id: "sawhchiar-pork",
    menuCategory: "Rice & Biryani",
    name: "Sawhchiar",
    description: "A traditional Mizo rice and meat porridge, flavored with local herbs and slow-cooked to a creamy consistency.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.86,
    tags: ["Mizoram", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "rice", name: "Short-grain Rice", qty: "1 cup", price: 15, available: true },
      { id: "pork", name: "Pork (with fat)", qty: "250g", price: 100, available: true },
      { id: "local_herb", name: "Local Herbs", qty: "handful", price: 10, available: true },
      { id: "black_pepper", name: "Whole Peppercorns", qty: "1 tsp", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 100, available: false }
    ],
    steps: [
      "Boil pork chunks with salt and peppercorns until half-tender.",
      "Add washed rice to the same pot.",
      "Add enough water to ensure a porridge consistency (roughly 1:4 ratio).",
      "Stir in the local mountain herbs.",
      "Simmer on low heat, stirring occasionally, until rice is mushy and meat is tender.",
      "Serve as a wholesome one-pot meal."
    ]
  },
  {
    id: "pork-bekang-mizo",
    menuCategory: "Curries & Gravies",
    name: "Pork with Bekang",
    description: "A pungent and savory Mizo pork curry cooked with fermented soybean paste (Bekang) and local mountain chilies.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.82,
    tags: ["Mizoram", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork chunks", qty: "500g", price: 180, available: true },
      { id: "bekang", name: "Fermented Soybean (Bekang)", qty: "2 tbsp", price: 20, available: true },
      { id: "birds_eye_chili", name: "Birds Eye Chilies", qty: "6", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "4", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 55, available: false }
    ],
    steps: [
      "Sauté pork in a dry pot until it releases its own fat and begins to brown.",
      "Add crushed ginger and garlic.",
      "Stir in the fermented soybean paste (Bekang) and salt.",
      "Add the whole birds-eye chilies for a sharp kick.",
      "Add minimal water and simmer until the pork is tender and coated in a dark, pungent gravy."
    ]
  },
  {
    id: "vawksa-rep-mustard",
    menuCategory: "Dry & Stir-Fried",
    name: "Vawksa Rep with Mustard Leaves",
    description: "Smoked pork pieces stir-fried with fresh mustard greens and local Mizo spices.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.88,
    tags: ["Mizoram", "Northeast Indian", "Non-Vegetarian", "Healthy"],
    ingredients: [
      { id: "smoked_pork", name: "Smoked Pork", qty: "400g", price: 180, available: true },
      { id: "mustard_leaves", name: "Mustard Leaves", qty: "2 bunches", price: 20, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "garlic", name: "Garlic (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tsp", price: 60, available: false }
    ],
    steps: [
      "Wash smoked pork and cut into small pieces; boil for 10 minutes to soften.",
      "Heat a tiny amount of oil and sauté crushed garlic.",
      "Add the pork and sauté on high heat for 5 minutes.",
      "Add chopped mustard leaves and green chilies.",
      "Stir-fry until the leaves wilt and the pork is well-incorporated.",
      "Serve dry with rice."
    ]
  },
  {
    id: "chicken-bai-mizo",
    menuCategory: "Curries & Gravies",
    name: "Chicken Bai",
    description: "A light and clear chicken stew with assorted mountain vegetables, focused on the natural flavors of the ingredients.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Easy",
    cost: 260,
    popularity: 0.74,
    tags: ["Mizoram", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 150, available: true },
      { id: "mixed_veg", name: "Pumpkin, Cabbage, Beans", qty: "2 cups", price: 30, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tbsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tsp", price: 65, available: false }
    ],
    steps: [
      "Bring water to a boil with ginger and green chilies.",
      "Add chicken pieces and salt; simmer for 15 minutes.",
      "Add chopped vegetables and cook until tender.",
      "The broth should be light and clear, not thickened.",
      "Finish with a sprinkle of local herbs."
    ]
  },
  {
    id: "pork-bamboo-shoot-mizo",
    menuCategory: "Curries & Gravies",
    name: "Pork with Bamboo Shoot",
    description: "Classic Mizo pork preparation cooked with fresh bamboo shoots and minimal oil.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.85,
    tags: ["Mizoram", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork", qty: "500g", price: 160, available: true },
      { id: "bamboo_shoot", name: "Fresh Bamboo Shoot (sliced)", qty: "1/2 cup", price: 30, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tsp", price: 70, available: false }
    ],
    steps: [
      "Sear pork in its own fat with a little oil.",
      "Add sliced bamboo shoot and sauté for 5 minutes.",
      "Add ginger, salt, and green chilies.",
      "Add enough water to cover and simmer until tender.",
      "The bamboo shoot should impart a subtle tang to the meat."
    ]
  },
  {
    id: "sa-um-vegetables",
    menuCategory: "Curries & Gravies",
    name: "Sa Um with Vegetables",
    description: "A unique tribal preparation using fermented pork fat (Sa-um) as a flavoring agent for mixed mountain vegetables.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.70,
    tags: ["Mizoram", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "sa_um", name: "Fermented Pork Fat (Sa-um)", qty: "2 tbsp", price: 40, available: true },
      { id: "mixed_veg", name: "Taro root, Pumpkin, Greens", qty: "2 cups", price: 30, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tsp", price: 175, available: false }
    ],
    steps: [
      "Boil taro root and pumpkin in water until half-soft.",
      "Stir in the fermented pork fat (Sa-um).",
      "Add green chilies, ginger, and salt.",
      "Simmer until the vegetables are very soft and the broth is pungent and rich.",
      "The fat should be well-integrated into the stew."
    ]
  },
  {
    id: "fish-bai-mizo",
    menuCategory: "Curries & Gravies",
    name: "Fish Bai",
    description: "A healthy and light fish stew cooked with local greens and minimal spices, typical of Mizo riverine regions.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    cost: 280,
    popularity: 0.72,
    tags: ["Mizoram", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "fish", name: "Freshwater Fish", qty: "400g", price: 200, available: true },
      { id: "local_greens", name: "Seasonal Greens", qty: "2 bunches", price: 20, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "1", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tsp", price: 50, available: false }
    ],
    steps: [
      "Clean and cut fish into medium pieces.",
      "Bring water to a boil with ginger and salt.",
      "Add chopped greens and simmer for 5 minutes.",
      "Gently add fish and green chili.",
      "Simmer for another 10 minutes until fish is cooked through."
    ]
  },
  {
    id: "egg-bai-mizo",
    menuCategory: "Curries & Gravies",
    name: "Egg Bai",
    description: "Boiled eggs simmered in a light, clear broth with mixed mountain vegetables, a common Mizo breakfast side.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.75,
    tags: ["Mizoram", "Northeast Indian", "Non-Vegetarian", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "mixed_veg", name: "Carrots, Beans, Cabbage", qty: "1 cup", price: 20, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tsp", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 60, available: false }
    ],
    steps: [
      "Bring 3 cups of water to a boil with ginger and salt.",
      "Add chopped vegetables and cook until half-soft.",
      "Halve the boiled eggs and add them to the pot.",
      "Simmer for 5 minutes until the vegetables are fully cooked.",
      "Serve as a light and warming soup."
    ]
  },
  {
    id: "pork-curry-mizo-style",
    menuCategory: "Curries & Gravies",
    name: "Mizo Style Pork Curry",
    description: "A simple, rustic pork curry from Mizoram featuring local mountain chilies and a thin, flavorful gravy.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.77,
    tags: ["Mizoram", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork", qty: "500g", price: 180, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "local_chili", name: "Mizo Red Chilies", qty: "4", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 70, available: false }
    ],
    steps: [
      "Heat a little oil and sauté onions until translucent.",
      "Add ginger-garlic paste and sear pork pieces on high heat.",
      "Add crushed red chilies, turmeric, and salt.",
      "Add 2 cups of water and slow cook until pork is tender.",
      "The gravy should be thin but deeply flavorful."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "bekang-fermented-soybean",
    menuCategory: "Curries & Gravies",
    name: "Bekang",
    description: "A Mizo household staple—fermented soybeans cooked with minimal seasoning to highlight its unique, strong flavor.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.85,
    tags: ["Mizoram", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "bekang_paste", name: "Fermented Soybean (Bekang)", qty: "250g", price: 40, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 25, available: false }
    ],
    steps: [
      "Mix Bekang paste with crushed green chilies and ginger.",
      "Add a little water to make it into a thick curry consistency.",
      "Simmer on low heat for 10-15 minutes until the aroma develops.",
      "The result is a dark, pungent, and highly savory dish.",
      "Serve as a side with rice and boiled vegetables."
    ]
  },
  {
    id: "anhla-boiled-greens",
    menuCategory: "Curries & Gravies",
    name: "Anhla",
    description: "Healthy and simple boiled mixed mountain greens, the most common everyday accompaniment in Mizoram.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.90,
    tags: ["Mizoram", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mixed_greens", name: "Assorted Local Greens", qty: "3 bunches", price: 30, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 20, available: false }
    ],
    steps: [
      "Wash and roughly chop the mountain greens.",
      "Bring 3 cups of water to a boil with crushed ginger.",
      "Add the greens and salt.",
      "Boil on high heat for 5-8 minutes until tender but still green.",
      "Serve the warm broth and greens with rice."
    ]
  },
  {
    id: "bamboo-shoot-curry-mizo-veg",
    menuCategory: "Curries & Gravies",
    name: "Bamboo Shoot Curry Mizo",
    description: "Tangy fermented bamboo shoots cooked with local seasonal vegetables and herbs.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.76,
    tags: ["Mizoram", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "bamboo_shoot", name: "Fermented Bamboo Shoot", qty: "1 cup", price: 35, available: true },
      { id: "green_beans", name: "Green Beans", qty: "200g", price: 15, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "chili", name: "Green Chilies", qty: "2", price: 20, available: false }
    ],
    steps: [
      "Boil shredded bamboo shoot to remove excess sourness.",
      "Add chopped beans and ginger to the pot.",
      "Add green chilies and salt.",
      "Simmer with minimal water until tender.",
      "Finish with fresh coriander if desired."
    ]
  },
  {
    id: "vegetable-bai-mizo",
    menuCategory: "Curries & Gravies",
    name: "Vegetable Bai",
    description: "A wholesome and healthy boiled mixed vegetable stew, a staple for everyday Mizo meals.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.81,
    tags: ["Mizoram", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "seasonal_veg", name: "Pumpkin, Cabbage, Beans, Potato", qty: "3 cups", price: 40, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tbsp", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 20, available: false }
    ],
    steps: [
      "Bring water to a boil with ginger and salt.",
      "Add chopped vegetables in order of their cooking time (potatoes first).",
      "Cook on medium heat until all vegetables are soft.",
      "The result is a light, nutritious stew centered on vegetable flavors."
    ]
  },
  {
    id: "rep-fermented-mustard",
    menuCategory: "Dry & Stir-Fried",
    name: "Rep (Fermented Mustard Leaves)",
    description: "Preserved mustard leaves cooked into a dry or semi-dry savory dish with minimal spices.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.65,
    tags: ["Mizoram", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "fermented_mustard", name: "Fermented Mustard Leaves", qty: "1 cup", price: 25, available: true },
      { id: "garlic", name: "Garlic cloves (crushed)", qty: "4", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tsp", price: 30, available: false }
    ],
    steps: [
      "Wash the fermented leaves and squeeze out excess moisture.",
      "Heat a tiny amount of oil and sauté crushed garlic.",
      "Add the leaves and stir-fry for 5 minutes.",
      "Add a splash of water and simmer until tender."
    ]
  },
  {
    id: "bekang-umtak-mizo",
    menuCategory: "Curries & Gravies",
    name: "Bekang Umtak",
    description: "Fermented soybean cooked with local aromatic mountain herbs, a savory and high-protein side dish.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.72,
    tags: ["Mizoram", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "bekang", name: "Bekang (Soybean Paste)", qty: "200g", price: 35, available: true },
      { id: "local_herb", name: "Mizo Mountain Herbs", qty: "handful", price: 15, available: true },
      { id: "chili", name: "Birds Eye Chilies", qty: "4", price: 25, available: false }
    ],
    steps: [
      "Heat Bekang paste in a pot with a little water.",
      "Stir in crushed chilies and salt.",
      "Add the fresh local herbs and simmer for 10 minutes.",
      "The dish should be pungent and thick."
    ]
  },
  {
    id: "pumpkin-leaf-bai-mizo",
    menuCategory: "Curries & Gravies",
    name: "Pumpkin Leaf Bai",
    description: "Lightly boiled tender pumpkin leaves seasoned with ginger and salt, reflecting the simplicity of Mizo cooking.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.78,
    tags: ["Mizoram", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "pumpkin_leaves", name: "Tender Pumpkin Leaves", qty: "2 bunches", price: 20, available: true },
      { id: "ginger", name: "Crushed Ginger", qty: "1 tbsp", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 30, available: false }
    ],
    steps: [
      "Wash and chop the pumpkin leaves.",
      "Bring water to a boil with ginger.",
      "Add the leaves and salt.",
      "Cook for 5-8 minutes until tender; do not overcook."
    ]
  },
  {
    id: "dal-mizo-style",
    menuCategory: "Curries & Gravies",
    name: "Dal Mizo Style",
    description: "Simple boiled red lentils with minimal tempering, served as a clean and nutritious protein source.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.70,
    tags: ["Mizoram", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "red_lentils", name: "Masoor Dal", qty: "1 cup", price: 25, available: true },
      { id: "ginger", name: "Minced Ginger", qty: "1 tsp", price: 10, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 20, available: false }
    ],
    steps: [
      "Boil dal with ginger and turmeric until soft.",
      "Whisk for a smooth consistency.",
      "The flavor is purely centered on the lentils and ginger.",
      "Serve warm."
    ]
  },
  {
    id: "chow-chow-curry-mizo",
    menuCategory: "Curries & Gravies",
    name: "Chow Chow Curry",
    description: "Chayote squash (Chow Chow) cooked with local herbs in a light mountain-style preparation.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.68,
    tags: ["Mizoram", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "chayote", name: "Chow Chow (Chayote)", qty: "2 large", price: 25, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 30, available: false }
    ],
    steps: [
      "Peel and cube the squash.",
      "Bring water to a boil with ginger and chili.",
      "Add the squash cubes and salt.",
      "Simmer until tender but not mushy."
    ]
  },
  {
    id: "mustard-greens-bai-mizo",
    menuCategory: "Curries & Gravies",
    name: "Mustard Greens Bai",
    description: "Boiled mustard greens with minimal seasoning, a healthy and cleansing regional staple.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.81,
    tags: ["Mizoram", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mustard_greens", name: "Mustard Greens", qty: "2 bunches", price: 25, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tbsp", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 25, available: false }
    ],
    steps: [
      "Wash and roughly chop the mustard greens.",
      "Boil water with ginger and salt.",
      "Add the greens and cook on high heat for 5 minutes.",
      "Serve the warm broth with rice."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "chhangban-rice-cake",
    menuCategory: "Snacks & Street Food",
    name: "Chhangban",
    description: "A traditional Mizo steamed rice cake wrapped in leaves, known for its sticky texture and subtle flavor.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 60,
    popularity: 0.88,
    tags: ["Mizoram", "Northeast Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "sticky_rice_flour", name: "Sticky Rice Flour", qty: "2 cups", price: 30, available: true },
      { id: "sugar", name: "Sugar (optional)", qty: "2 tbsp", price: 5, available: true },
      { id: "leaves", name: "Broad Leaves (for wrapping)", qty: "as needed", price: 25, available: false }
    ],
    steps: [
      "Mix sticky rice flour with water into a thick paste.",
      "Add sugar if a sweet version is desired.",
      "Place spoonfuls of batter onto the leaves.",
      "Fold the leaves tightly and steam for 15-20 minutes.",
      "The cake should be firm and chewy."
    ]
  },
  {
    id: "vawksa-rep-bites",
    menuCategory: "Snacks & Street Food",
    name: "Vawksa Rep Bites",
    description: "Snack-sized bites of smoked pork tossed with fresh mountain herbs and a hint of local chili.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 200,
    popularity: 0.85,
    tags: ["Mizoram", "Northeast Indian", "Non-Vegetarian", "Snacks"],
    ingredients: [
      { id: "smoked_pork", name: "Smoked Pork", qty: "250g", price: 150, available: true },
      { id: "local_herb", name: "Mountain Herbs", qty: "handful", price: 10, available: true },
      { id: "chili", name: "Green Chili", qty: "2", price: 40, available: false }
    ],
    steps: [
      "Boil smoked pork until tender; slice into small bites.",
      "Sauté with ginger and green chili until edges are crisp.",
      "Toss with fresh local herbs.",
      "Serve as a savory snack."
    ]
  },
  {
    id: "rice-cake-mizo-style",
    menuCategory: "Snacks & Street Food",
    name: "Rice Cake Mizo Style",
    description: "Simple steamed sticky rice cakes, a traditional tribal sweet often enjoyed with tea.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.81,
    tags: ["Mizoram", "Northeast Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "sticky_rice", name: "Sticky Rice", qty: "2 cups", price: 40, available: true },
      { id: "sugar", name: "Sugar", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Boil sticky rice until very soft.",
      "Mash and mix with sugar.",
      "Shape and steam again to set.",
      "Serve warm."
    ]
  },
  {
    id: "bekang-chutney-snack",
    menuCategory: "Sides & Accompaniments",
    name: "Bekang Chutney Snack",
    description: "Pungent fermented soybean chutney served with small crispy rice bites.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.74,
    tags: ["Mizoram", "Northeast Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "bekang", name: "Bekang (Soybean Paste)", qty: "1/2 cup", price: 20, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "chili", name: "Mizo Chilies", qty: "3", price: 30, available: false }
    ],
    steps: [
      "Grind Bekang, ginger, and chilies into a thick paste.",
      "Serve in a small bowl as a dip for rice crackers."
    ]
  },
  {
    id: "fish-cake-mizo-style",
    menuCategory: "Snacks & Street Food",
    name: "Fish Cake Mizo Style",
    description: "Steamed spiced fish cakes prepared with local river fish and mountain herbs.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 210,
    popularity: 0.80,
    tags: ["Mizoram", "Northeast Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "fish_mince", name: "Minced River Fish", qty: "400g", price: 150, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 10, available: true },
      { id: "chili", name: "Green Chili", qty: "2", price: 50, available: false }
    ],
    steps: [
      "Mix minced fish with ginger, chili, and salt.",
      "Shape into small flat discs.",
      "Steam for 15 minutes until firm.",
      "Serve warm with a local chutney."
    ]
  }
];
