import { Recipe } from './types';

export const arunachalPradeshRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "thukpa-arunachali",
    menuCategory: "Soups",
    name: "Thukpa Arunachali",
    description: "A hearty and warming noodle soup cooked with tender pork, seasonal vegetables, and a hint of local mountain spices.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 190,
    popularity: 0.88,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "egg_noodles", name: "Egg Noodles", qty: "200g", price: 40, available: true },
      { id: "pork", name: "Pork (sliced)", qty: "250g", price: 100, available: true },
      { id: "cabbage", name: "Shredded Cabbage", qty: "1 cup", price: 15, available: true },
      { id: "ginger_garlic", name: "Ginger-Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: false }
    ],
    steps: [
      "Boil noodles according to package instructions and set aside.",
      "Sauté sliced pork with ginger-garlic paste until browned.",
      "Add chopped vegetables and 5 cups of water or broth.",
      "Bring to a boil and simmer until pork and vegetables are tender.",
      "Add the boiled noodles and season with salt and local pepper."
    ]
  },
  {
    id: "pork-bamboo-arunachali",
    menuCategory: "Curries & Gravies",
    name: "Pork with Bamboo Shoot Arunachali",
    description: "A classic tribal preparation where pork is slow-cooked with pungent fermented bamboo shoot and fiery local chilies.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.85,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork (fatty chunks)", qty: "500g", price: 180, available: true },
      { id: "bamboo_shoot", name: "Fermented Bamboo Shoot", qty: "1/2 cup", price: 40, available: true },
      { id: "green_chili", name: "Birds Eye Chilies", qty: "6", price: 10, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "garlic", name: "Garlic (crushed)", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Boil pork with salt until half-cooked; drain water.",
      "In a heavy pot, sauté pork in its own fat until slightly browned.",
      "Add fermented bamboo shoot, crushed ginger, garlic, and chilies.",
      "Add a splash of water and slow cook until the meat is tender and the aroma is strong.",
      "The dish should be relatively dry with the bamboo shoot coating the meat."
    ]
  },
  {
    id: "yak-meat-curry",
    menuCategory: "Curries & Gravies",
    name: "Yak Meat Curry",
    description: "A rare high-altitude specialty of the Monpa tribe, slow-cooked yak meat with mountain herbs and minimal oil.",
    type: "Non-Vegetarian",
    time: 90,
    servings: 4,
    difficulty: "Hard",
    cost: 450,
    popularity: 0.82,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "yak_meat", name: "Yak Meat (or Beef chunks)", qty: "500g", price: 350, available: true },
      { id: "ginger", name: "Local Ginger (grated)", qty: "2 tbsp", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "local_herb", name: "Mountain Herbs (Dried)", qty: "1 tsp", price: 20, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 65, available: false }
    ],
    steps: [
      "Wash meat and cut into small cubes.",
      "Pressure cook meat with salt and grated ginger for 10-12 whistles until tender.",
      "Sauté onions in a little oil until translucent.",
      "Add the meat and local herbs; simmer for 15 minutes.",
      "The result is a rustic, earthy stew focused on the natural taste of the meat."
    ]
  },
  {
    id: "chicken-nyishi-style",
    menuCategory: "Curries & Gravies",
    name: "Chicken Curry Nyishi Style",
    description: "Boiled chicken preparation typical of the Nyishi tribe, using minimal spices to preserve the natural flavor of the meat.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.76,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 160, available: true },
      { id: "ginger", name: "Ginger (minced)", qty: "1 tbsp", price: 10, available: true },
      { id: "garlic", name: "Garlic (minced)", qty: "1 tbsp", price: 10, available: true },
      { id: "bamboo_shoot", name: "Dry Bamboo Shoot (powder)", qty: "1 tsp", price: 15, available: true },
      { id: "chili", name: "Green Chili", qty: "4", price: 75, available: false }
    ],
    steps: [
      "Bring 4 cups of water to a boil in a pot.",
      "Add chicken pieces, salt, and minced ginger-garlic.",
      "Add green chilies and dry bamboo shoot powder.",
      "Simmer until the chicken is tender and the liquid reduces to a flavorful broth.",
      "Finish with fresh local herbs."
    ]
  },
  {
    id: "fish-apatani-style",
    menuCategory: "Curries & Gravies",
    name: "Fish Curry Apatani Style",
    description: "River fish cooked with local greens and rice flour, a delicacy of the Ziro valley.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.79,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "fish", name: "Freshwater Fish", qty: "500g", price: 200, available: true },
      { id: "local_greens", name: "Seasonal Greens", qty: "1 bunch", price: 20, available: true },
      { id: "rice_flour", name: "Rice Flour", qty: "1 tbsp", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 10, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 65, available: false }
    ],
    steps: [
      "Marinate fish with salt and turmeric.",
      "Lightly fry fish and set aside.",
      "Cook seasonal greens in a little water with salt and ginger.",
      "Mix rice flour with water and add to the greens to thicken.",
      "Add fish and simmer for 5 minutes until tender."
    ]
  },
  {
    id: "pork-momos-arunachali",
    menuCategory: "Snacks & Street Food",
    name: "Pork Momos Arunachali",
    description: "Mountain-style steamed dumplings filled with spiced minced pork and local herbs.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 200,
    popularity: 0.90,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork_mince", name: "Minced Pork", qty: "500g", price: 150, available: true },
      { id: "maida", name: "Refined Flour", qty: "2 cups", price: 20, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tbsp", price: 10, available: true },
      { id: "onion", name: "Onion (minced)", qty: "2 tbsp", price: 5, available: true },
      { id: "spices", name: "Local Momo Spice", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Knead a firm dough with flour and water.",
      "Mix minced pork with ginger, onion, and spices.",
      "Roll out thin wrappers and stuff with meat mixture.",
      "Steam for 15 minutes until cooked.",
      "Serve hot with fiery chili dip."
    ]
  },
  {
    id: "smoked-pork-soybean-arunachal",
    menuCategory: "Curries & Gravies",
    name: "Smoked Pork with Fermented Soybean",
    description: "Smoked pork pieces cooked with pungent fermented soybean paste (pehak), a favorite across many tribes.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.81,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "smoked_pork", name: "Smoked Pork", qty: "400g", price: 180, available: true },
      { id: "fermented_soybean", name: "Pehak (Soybean Paste)", qty: "2 tbsp", price: 30, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 60, available: false }
    ],
    steps: [
      "Wash smoked pork and boil until half-tender.",
      "Sauté pork in oil with ginger paste.",
      "Stir in the fermented soybean paste and crushed chilies.",
      "Simmer with minimal water until pork is tender and gravy is dark and pungent."
    ]
  },
  {
    id: "chicken-bamboo-arunachal",
    menuCategory: "Curries & Gravies",
    name: "Chicken with Bamboo Shoot Arunachali",
    description: "Zesty chicken preparation simmered with fresh shredded bamboo shoots and local hill chilies.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.83,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "bamboo_shoot", name: "Fresh Bamboo Shoot (shredded)", qty: "1/2 cup", price: 30, available: true },
      { id: "chili", name: "Birds Eye Chilies", qty: "4", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 85, available: false }
    ],
    steps: [
      "Sauté onions and chilies in oil.",
      "Add chicken and sear on high heat.",
      "Add bamboo shoots and salt; sauté for 5 minutes.",
      "Add a cup of water and slow cook until chicken is tender."
    ]
  },
  {
    id: "egg-curry-arunachal",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry Arunachali Style",
    description: "Boiled eggs in a very light, almost clear broth-style curry with ginger and local herbs.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.72,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Non-Vegetarian", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "local_herb", name: "Local Herbs", qty: "handful", price: 15, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tsp", price: 60, available: false }
    ],
    steps: [
      "Bring 3 cups of water to a boil with ginger and chilies.",
      "Add salt and halved boiled eggs.",
      "Simmer for 5 minutes.",
      "Stir in fresh local herbs and remove from heat.",
      "Serve hot as a light, warming meal."
    ]
  },
  {
    id: "pork-adi-style",
    menuCategory: "Curries & Gravies",
    name: "Pork Curry Adi Style",
    description: "A fiery pork curry from the Adi tribe, characterized by the use of local chilies and fermented ingredients.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.77,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork", qty: "500g", price: 180, available: true },
      { id: "green_chili", name: "Birds Eye Chilies", qty: "8", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger-Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 70, available: false }
    ],
    steps: [
      "Heat oil and sauté ginger-garlic paste.",
      "Add pork pieces and sear on high heat until it releases fat.",
      "Add salt, turmeric, and minced green chilies.",
      "Simmer with minimal water until pork is tender and the curry is pungent."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "bamboo-shoot-veg-arunachal",
    menuCategory: "Curries & Gravies",
    name: "Bamboo Shoot Curry Arunachali",
    description: "A light and tangy vegetarian curry made with fermented bamboo shoots and mountain greens.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.85,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "bamboo_shoot", name: "Bamboo Shoot (fermented)", qty: "1/2 cup", price: 30, available: true },
      { id: "seasonal_greens", name: "Seasonal Mountain Greens", qty: "1 bunch", price: 20, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 20, available: false }
    ],
    steps: [
      "Boil shredded bamboo shoot to remove excess sourness.",
      "Add seasonal greens and ginger to the pot.",
      "Simmer with salt and water until vegetables are tender.",
      "Serve as a light accompaniment to rice."
    ]
  },
  {
    id: "zan-porridge",
    menuCategory: "Curries & Gravies",
    name: "Zan (Millet Porridge)",
    description: "A traditional nutritious porridge made with finger millet or maize flour, often served with vegetables.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.80,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "millet_flour", name: "Finger Millet Flour", qty: "1 cup", price: 20, available: true },
      { id: "mixed_veg", name: "Mixed Chopped Veg", qty: "1 cup", price: 20, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 20, available: true },
      { id: "water", name: "Water", qty: "3 cups", price: 0, available: true }
    ],
    steps: [
      "Sauté mixed vegetables in a little ghee.",
      "Add water and bring to a boil.",
      "Slowly whisk in the millet flour to avoid lumps.",
      "Cook on low heat, stirring continuously, until it thickens into a porridge."
    ]
  },
  {
    id: "veg-thukpa-arunachal",
    menuCategory: "Soups",
    name: "Vegetable Thukpa Arunachali",
    description: "A comforting Himalayan noodle soup with seasonal vegetables and mountain herbs.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    cost: 140,
    popularity: 0.82,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "noodles", name: "Wheat Noodles", qty: "200g", price: 30, available: true },
      { id: "mixed_veg", name: "Bok Choy, Carrot, Beans", qty: "2 cups", price: 40, available: true },
      { id: "broth", name: "Vegetable Broth", qty: "4 cups", price: 10, available: true },
      { id: "ginger", name: "Ginger", qty: "1 tsp", price: 60, available: false }
    ],
    steps: [
      "Boil noodles and set aside.",
      "Bring broth to a boil with ginger and salt.",
      "Add vegetables and cook until tender.",
      "Add noodles and warm through."
    ]
  },
  {
    id: "soybean-curry-arunachal",
    menuCategory: "Curries & Gravies",
    name: "Fermented Soybean Curry Arunachali",
    description: "A pungent and high-protein curry made from fermented soybean paste and local spices.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.74,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "soybean_paste", name: "Fermented Soybean Paste", qty: "2 tbsp", price: 25, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "3", price: 45, available: false }
    ],
    steps: [
      "Sauté onion and ginger in oil.",
      "Add fermented soybean paste and roast briefly.",
      "Add water and simmer until the gravy is thick and pungent."
    ]
  },
  {
    id: "local-greens-stirfry-arunachal",
    menuCategory: "Dry & Stir-Fried",
    name: "Local Greens Stir Fry",
    description: "Healthy and simple stir-fry of foraged forest greens with garlic and mountain chilies.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.88,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "forest_greens", name: "Mixed Forest Greens", qty: "2 bunches", price: 20, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "4", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 20, available: false }
    ],
    steps: [
      "Wash and roughly chop the greens.",
      "Heat oil and sauté crushed garlic.",
      "Add the greens and salt.",
      "Stir-fry on high heat for 5 minutes until wilted."
    ]
  },
  {
    id: "boiled-veg-chili-chutney",
    menuCategory: "Sides & Accompaniments",
    name: "Boiled Vegetable Platter with Chili Chutney",
    description: "A staple tribal meal consisting of assorted boiled vegetables served with a fiery birds-eye chili dip.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.70,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian", "Spicy", "Healthy"],
    ingredients: [
      { id: "seasonal_veg", name: "Pumpkin, Cabbage, Beans", qty: "2 cups", price: 30, available: true },
      { id: "birds_eye_chili", name: "Birds Eye Chilies", qty: "6", price: 10, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 20, available: false }
    ],
    steps: [
      "Boil seasonal vegetables in water with a pinch of salt until tender.",
      "For chutney, grind chilies, ginger, and salt into a coarse paste.",
      "Serve the warm boiled vegetables with the spicy dip."
    ]
  },
  {
    id: "dal-arunachali",
    menuCategory: "Curries & Gravies",
    name: "Dal Arunachali Style",
    description: "Simple and comforting lentil curry tempered with mountain herbs and ginger.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.75,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "yellow_dal", name: "Moong or Toor Dal", qty: "1 cup", price: 25, available: true },
      { id: "ginger", name: "Ginger (minced)", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Boil dal with ginger and salt until mushy.",
      "Temper with cumin seeds and serve."
    ]
  },
  {
    id: "fiddlehead-fern-arunachal",
    menuCategory: "Curries & Gravies",
    name: "Fiddlehead Fern Curry",
    description: "Wild-harvested fiddlehead ferns stir-fried with basic mountain spices.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 75,
    popularity: 0.72,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "fiddlehead_fern", name: "Fiddlehead Ferns", qty: "250g", price: 35, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 35, available: false }
    ],
    steps: [
      "Clean ferns and remove brown scales.",
      "Sauté ginger and green chili in oil.",
      "Add ferns and salt.",
      "Stir-fry until tender."
    ]
  },
  {
    id: "rice-bamboo-shoot-arunachal",
    menuCategory: "Curries & Gravies",
    name: "Rice with Fermented Bamboo Shoot",
    description: "Fragrant rice tossed with the tangy punch of fermented bamboo shoot (bas-tenga).",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.65,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "rice", name: "Cooked Rice", qty: "3 cups", price: 15, available: true },
      { id: "bamboo_shoot", name: "Fermented Bamboo Shoot", qty: "2 tbsp", price: 15, available: true },
      { id: "chili", name: "Green Chili", qty: "2", price: 35, available: false }
    ],
    steps: [
      "Heat a little oil and sauté bamboo shoot.",
      "Add green chili and salt.",
      "Mix in cooked rice and toss well."
    ]
  },
  {
    id: "pumpkin-curry-arunachal",
    menuCategory: "Curries & Gravies",
    name: "Pumpkin Curry Arunachali",
    description: "Simple mountain-style pumpkin curry cooked with minimal oil and spices.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.60,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "pumpkin", name: "Yellow Pumpkin", qty: "500g", price: 25, available: true },
      { id: "ginger", name: "Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 35, available: false }
    ],
    steps: [
      "Peel and cube pumpkin.",
      "Sauté ginger in oil.",
      "Add pumpkin, salt, and water.",
      "Simmer until soft."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "veg-momos-arunachal",
    menuCategory: "Snacks & Street Food",
    name: "Vegetable Momos Arunachali",
    description: "Steamed dumplings stuffed with a mixture of mountain vegetables and herbs.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 150,
    popularity: 0.88,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "maida", name: "All-purpose Flour", qty: "2 cups", price: 20, available: true },
      { id: "mixed_veg", name: "Mixed Chopped Veg", qty: "2 cups", price: 30, available: true },
      { id: "ginger", name: "Ginger", qty: "1 tsp", price: 90, available: false }
    ],
    steps: [
      "Prepare a soft dough.",
      "Mix vegetables with ginger and salt.",
      "Stuff and steam for 10 minutes."
    ]
  },
  {
    id: "khura-arunachal",
    menuCategory: "Snacks & Street Food",
    name: "Khura",
    description: "Crispy rice flour pancakes, a popular tea-time snack in Arunachali homes.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.79,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 30, available: true },
      { id: "oil", name: "Oil for pan", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Make a smooth batter with rice flour and water.",
      "Spread on a hot greased tawa.",
      "Cook until crispy."
    ]
  },
  {
    id: "rice-cake-arunachal",
    menuCategory: "Snacks & Street Food",
    name: "Rice Cake Arunachali",
    description: "Steamed sticky rice cakes, a traditional tribal sweet.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.81,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "sticky_rice", name: "Sticky Rice", qty: "2 cups", price: 40, available: true },
      { id: "sugar", name: "Sugar", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Boil sticky rice until very soft.",
      "Mash and mix with sugar.",
      "Shape and steam again."
    ]
  },
  {
    id: "sticky-rice-sesame-arunachal",
    menuCategory: "Snacks & Street Food",
    name: "Sticky Rice with Sesame",
    description: "Steamed glutinous rice served with a coating of roasted sesame seeds.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.72,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "sticky_rice", name: "Sticky Rice", qty: "2 cups", price: 40, available: true },
      { id: "sesame", name: "Roasted Sesame Seeds", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Steam sticky rice.",
      "Form into small balls.",
      "Roll in roasted sesame seeds."
    ]
  },
  {
    id: "fried-pork-momos-arunachal",
    menuCategory: "Snacks & Street Food",
    name: "Pork Momos Fried",
    description: "Pan-fried crispy pork dumplings, popular as a street snack.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 210,
    popularity: 0.84,
    tags: ["Arunachal Pradesh", "Northeast Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "pork_momos", name: "Prepared Pork Momos", qty: "12", price: 120, available: true },
      { id: "oil", name: "Oil for pan fry", qty: "2 tbsp", price: 90, available: false }
    ],
    steps: [
      "Steam momos first.",
      "Heat a little oil.",
      "Fry until bottoms are golden and crispy."
    ]
  }
];
