import { Recipe } from './types';

export const nagalandRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "smoked-pork-axone-naga",
    menuCategory: "Curries & Gravies",
    name: "Smoked Pork with Axone",
    description: "The most iconic Naga dish—smoked pork slow-cooked with pungent fermented soybean (axone) and fiery chilies.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.90,
    tags: ["Nagaland", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "smoked_pork", name: "Smoked Pork chunks", qty: "500g", price: 180, available: true },
      { id: "axone", name: "Axone (Fermented Soybean)", qty: "2 tbsp", price: 30, available: true },
      { id: "birds_eye_chili", name: "Birds Eye Chilies", qty: "6-8", price: 10, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 55, available: false }
    ],
    steps: [
      "Wash the smoked pork thoroughly and boil in water for 15 minutes to soften it.",
      "Drain the water and sauté the pork in a heavy pot until it releases its own fat.",
      "Add crushed ginger, garlic, and sliced green chilies.",
      "Wrap the axone in a banana leaf and roast briefly on a flame, then add it to the pot.",
      "Add salt and 1 cup of water; simmer on low heat until the pork is tender and the gravy is thick and dark."
    ]
  },
  {
    id: "naga-pork-bamboo-shoot",
    menuCategory: "Curries & Gravies",
    name: "Naga Pork with Bamboo Shoot",
    description: "A fiery pork curry simmered with fresh or fermented bamboo shoots and the legendary Bhut Jolokia.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.88,
    tags: ["Nagaland", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork (with fat)", qty: "500g", price: 180, available: true },
      { id: "bamboo_shoot", name: "Bamboo Shoot (fermented)", qty: "1/2 cup", price: 30, available: true },
      { id: "bhut_jolokia", name: "Ghost Pepper (Bhut Jolokia)", qty: "1 small", price: 20, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tbsp", price: 45, available: false }
    ],
    steps: [
      "Sear pork chunks in a dry pot until the fat renders and the meat browns.",
      "Add ginger-garlic paste and sauté for 2 minutes.",
      "Add shredded bamboo shoots and a tiny piece of Bhut Jolokia (very spicy!).",
      "Add salt and turmeric; stir well to combine.",
      "Pour in minimal water and slow cook until the meat is tender and the flavors are intense."
    ]
  },
  {
    id: "bhut-jolokia-chicken",
    menuCategory: "Curries & Gravies",
    name: "Bhut Jolokia Chicken Curry",
    description: "A simple but exceptionally spicy chicken curry using the famous ghost pepper of Nagaland.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.86,
    tags: ["Nagaland", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 150, available: true },
      { id: "ghost_pepper", name: "Bhut Jolokia", qty: "1/2 pepper", price: 15, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "ginger", name: "Ginger (minced)", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 100, available: false }
    ],
    steps: [
      "Heat a tablespoon of oil and sauté onions until translucent.",
      "Add chicken pieces and sear on high heat.",
      "Carefully add a small portion of Bhut Jolokia and salt.",
      "Add ginger and a splash of water.",
      "Simmer on medium heat until chicken is cooked through and the heat is distributed."
    ]
  },
  {
    id: "akhuni-pork-naga",
    menuCategory: "Curries & Gravies",
    name: "Akhuni Pork",
    description: "Pork pieces slow-roasted with fermented soybean paste (akhuni), a savory and pungent tribal specialty.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.83,
    tags: ["Nagaland", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork", qty: "500g", price: 180, available: true },
      { id: "akhuni", name: "Akhuni (Fermented Soybean Paste)", qty: "2 tbsp", price: 30, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "6", price: 5, available: true },
      { id: "garlic", name: "Garlic", qty: "8 cloves", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 60, available: false }
    ],
    steps: [
      "Boil pork chunks with a little salt until half-cooked.",
      "In a separate pan, roast akhuni paste until aromatic.",
      "Mix pork with crushed ginger, garlic, and green chilies.",
      "Combine meat and roasted akhuni; sauté in the rendered fat.",
      "Simmer with minimal water until the meat is coated in a pungent, dark gravy."
    ]
  },
  {
    id: "naga-fish-bamboo",
    menuCategory: "Curries & Gravies",
    name: "Naga Fish Curry with Bamboo Shoot",
    description: "River fish simmered with fresh bamboo shoot slices and a sharp kick of Naga mountain chilies.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.80,
    tags: ["Nagaland", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Fresh River Fish", qty: "500g", price: 200, available: true },
      { id: "bamboo_shoot", name: "Fresh Bamboo Shoot (sliced)", qty: "1/2 cup", price: 30, available: true },
      { id: "green_chili", name: "Naga Green Chilies", qty: "4", price: 5, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tsp", price: 60, available: false }
    ],
    steps: [
      "Clean and cut fish into medium pieces.",
      "Bring 3 cups of water to a boil with ginger and salt.",
      "Add bamboo shoot slices and green chilies; boil for 5 minutes.",
      "Gently slide in the fish pieces.",
      "Simmer for 10 minutes until the fish is flaky and the broth is aromatic."
    ]
  },
  {
    id: "smoked-pork-bamboo-dry",
    menuCategory: "Dry & Stir-Fried",
    name: "Smoked Pork with Bamboo Shoot (Dry)",
    description: "A dry-style smoked pork preparation where the meat is roasted with bamboo shoot to intensify the flavors.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.85,
    tags: ["Nagaland", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "smoked_pork", name: "Smoked Pork", qty: "500g", price: 180, available: true },
      { id: "bamboo_shoot", name: "Dry Bamboo Shoot", qty: "1/4 cup", price: 30, available: true },
      { id: "red_chili", name: "Roasted Red Chilies", qty: "6", price: 10, available: true },
      { id: "garlic", name: "Garlic (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "ghee", name: "Lard or Oil", qty: "1 tbsp", price: 55, available: false }
    ],
    steps: [
      "Wash and soak smoked pork in hot water for 10 minutes.",
      "Sauté pork in its own fat until slightly crispy.",
      "Add dry bamboo shoot and crushed garlic.",
      "Add roasted chili powder and salt.",
      "Sauté on high heat until the mixture is dry and aromatic."
    ]
  },
  {
    id: "chicken-axone-naga",
    menuCategory: "Curries & Gravies",
    name: "Chicken with Axone",
    description: "Chicken pieces simmered in a savory gravy flavored with fermented soybean paste.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.79,
    tags: ["Nagaland", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "axone", name: "Axone Paste", qty: "1 tbsp", price: 20, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 100, available: false }
    ],
    steps: [
      "Sauté chicken with ginger paste and green chilies.",
      "Stir in the axone paste and salt.",
      "Add minimal water and simmer on low heat.",
      "Cook until the chicken is tender and the gravy is thick and pungent."
    ]
  },
  {
    id: "naga-pork-chutney",
    menuCategory: "Sides & Accompaniments",
    name: "Naga Pork Chutney Curry",
    description: "A thick, chutney-like pork curry made by mashing the meat with fermented ingredients and lots of chili.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.81,
    tags: ["Nagaland", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork (with fat)", qty: "400g", price: 160, available: true },
      { id: "ngari", name: "Dried Fermented Fish (optional) or Salt", qty: "2 pieces", price: 15, available: true },
      { id: "king_chili", name: "Naga King Chili", qty: "1", price: 10, available: true },
      { id: "garlic", name: "Garlic", qty: "6 cloves", price: 5, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 90, available: false }
    ],
    steps: [
      "Boil pork until very soft; drain and reserve stock.",
      "Mash the boiled pork chunks coarsely.",
      "Grind chilies, garlic, and onion into a paste.",
      "Sauté the paste in a little pork fat; add the mashed meat.",
      "Add salt and simmer until the mixture is thick and pungent."
    ]
  },
  {
    id: "egg-curry-naga",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry Naga Style",
    description: "Boiled eggs simmered in a light, fiery gravy flavored with ghost pepper and local herbs.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.75,
    tags: ["Nagaland", "Northeast Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "ghost_pepper", name: "Bhut Jolokia (small bit)", qty: "as needed", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 65, available: false }
    ],
    steps: [
      "Halve boiled eggs and set aside.",
      "Sauté onions and ginger in a little oil.",
      "Add turmeric, salt, and a tiny piece of Bhut Jolokia.",
      "Add water to make a thin broth; bring to a boil.",
      "Add halved eggs and simmer for 5 minutes."
    ]
  },
  {
    id: "dried-fish-chutney-naga",
    menuCategory: "Sides & Accompaniments",
    name: "Dried Fish Chutney Curry Naga",
    description: "Pungent dried fish cooked with ghost pepper and local herbs into a spicy accompaniment.",
    type: "Non-Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 200,
    popularity: 0.73,
    tags: ["Nagaland", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "dried_fish", name: "Dried River Fish", qty: "100g", price: 80, available: true },
      { id: "ghost_pepper", name: "Bhut Jolokia", qty: "1 small", price: 15, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 tsp", price: 100, available: false }
    ],
    steps: [
      "Wash and lightly roast the dried fish; crush into pieces.",
      "Mash ghost pepper, garlic, and ginger with salt.",
      "Mix the fish with the spicy paste.",
      "Sauté in a teaspoon of oil for 5 minutes until aromatic.",
      "Serve as a spicy side dish."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "bamboo-shoot-curry-naga",
    menuCategory: "Curries & Gravies",
    name: "Bamboo Shoot Curry Naga",
    description: "A tangy and fiery vegetarian curry made with fermented bamboo shoots and mountain chilies.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.84,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "bamboo_shoot", name: "Fermented Bamboo Shoot", qty: "1 cup", price: 30, available: true },
      { id: "birds_eye_chili", name: "Birds Eye Chilies", qty: "6", price: 10, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "water", name: "Water", qty: "3 cups", price: 30, available: false }
    ],
    steps: [
      "Boil shredded bamboo shoot to remove excess acidity; drain.",
      "Bring fresh water to a boil with ginger and salt.",
      "Add green chilies and the bamboo shoot.",
      "Simmer for 15 minutes until the broth is flavorful and tangy.",
      "Serve as a light accompaniment to rice."
    ]
  },
  {
    id: "axone-curry-veg",
    menuCategory: "Curries & Gravies",
    name: "Axone Curry",
    description: "Pungent fermented soybean curry with seasonal mountain vegetables.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.72,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "axone", name: "Axone (Soybean Paste)", qty: "2 tbsp", price: 20, available: true },
      { id: "mixed_veg", name: "Potato, Carrot, Beans", qty: "2 cups", price: 30, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 25, available: false }
    ],
    steps: [
      "Sauté vegetables in oil until partially cooked.",
      "Add axone paste and roast for 5 minutes.",
      "Add green chilies, salt, and water.",
      "Simmer until vegetables are soft and gravy is pungent."
    ]
  },
  {
    id: "naga-chili-chutney-veg",
    menuCategory: "Sides & Accompaniments",
    name: "Naga Chili Chutney with Vegetables",
    description: "Fiery chili chutney served with simple boiled seasonal vegetables, a hallmark of Naga diet.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.78,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "chili_powder", name: "Bhut Jolokia Flakes", qty: "1 tsp", price: 15, available: true },
      { id: "seasonal_veg", name: "Cabbage, Pumpkin, Beans", qty: "3 cups", price: 30, available: true },
      { id: "ginger", name: "Ginger (minced)", qty: "1 tbsp", price: 5, available: true },
      { id: "garlic", name: "Garlic (minced)", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Boil seasonal vegetables in water with a pinch of salt until tender.",
      "For the chutney, mix chili flakes, ginger, garlic, and salt.",
      "Add a little warm water to bind the chutney.",
      "Serve the warm vegetables with the fiery dip."
    ]
  },
  {
    id: "greens-axone-naga",
    menuCategory: "Curries & Gravies",
    name: "Local Greens with Fermented Soybean",
    description: "Seasonal leafy greens cooked with the savory punch of axone paste.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.68,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "local_greens", name: "Mixed Mountain Greens", qty: "2 bunches", price: 20, available: true },
      { id: "axone", name: "Axone Paste", qty: "1 tbsp", price: 20, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tsp", price: 25, available: false }
    ],
    steps: [
      "Wash and roughly chop the greens.",
      "Heat a tiny amount of oil and sauté axone paste.",
      "Add the greens and salt; sauté until wilted.",
      "Simmer for 5 minutes with a splash of water."
    ]
  },
  {
    id: "boiled-veg-naga",
    menuCategory: "Curries & Gravies",
    name: "Boiled Vegetable Platter Naga",
    description: "Simple and nutritious boiled seasonal vegetables, reflecting the healthy mountain diet.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.70,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mixed_veg", name: "Seasonal Greens and Roots", qty: "4 cups", price: 40, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 5, available: true },
      { id: "water", name: "Water", qty: "3 cups", price: 15, available: false }
    ],
    steps: [
      "Bring water to a boil with a pinch of salt.",
      "Add vegetables in order of their cooking time.",
      "Simmer until tender but still vibrant.",
      "Drain and serve hot."
    ]
  },
  {
    id: "dal-naga",
    menuCategory: "Curries & Gravies",
    name: "Dal Naga Style",
    description: "Simple lentil curry with a touch of ghost pepper for a warming heat.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.74,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "yellow_dal", name: "Yellow Lentils", qty: "1 cup", price: 25, available: true },
      { id: "ghost_pepper", name: "Bhut Jolokia bit", qty: "pinch", price: 10, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Boil dal with ginger and turmeric until soft.",
      "Whisk for a smooth consistency.",
      "Add a tiny bit of ghost pepper and salt.",
      "Simmer for 2 minutes and serve warm."
    ]
  },
  {
    id: "fiddlehead-fern-naga",
    menuCategory: "Curries & Gravies",
    name: "Fiddlehead Fern Curry Naga",
    description: "Wild-harvested fiddlehead ferns stir-fried with local hill chilies.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 75,
    popularity: 0.76,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "fiddlehead_fern", name: "Fiddlehead Ferns", qty: "250g", price: 35, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "garlic", name: "Garlic", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 30, available: false }
    ],
    steps: [
      "Clean ferns and remove brown scales.",
      "Sauté garlic and green chili in oil.",
      "Add ferns and salt.",
      "Stir-fry until tender."
    ]
  },
  {
    id: "pumpkin-curry-naga",
    menuCategory: "Curries & Gravies",
    name: "Pumpkin Curry Naga Style",
    description: "Yellow pumpkin cooked with the savory punch of fermented soybean.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.65,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "pumpkin", name: "Yellow Pumpkin", qty: "500g", price: 25, available: true },
      { id: "axone", name: "Axone Paste", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tsp", price: 30, available: false }
    ],
    steps: [
      "Peel and cube pumpkin.",
      "Sauté pumpkin with chili and axone paste.",
      "Add a little water and salt.",
      "Simmer until soft."
    ]
  },
  {
    id: "bean-curry-naga",
    menuCategory: "Curries & Gravies",
    name: "Bean Curry Naga Style",
    description: "Local beans cooked with fermented bamboo shoot for a tangy and savory meal.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.68,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "local_beans", name: "Mixed Local Beans", qty: "2 cups", price: 35, available: true },
      { id: "bamboo_shoot", name: "Fermented Bamboo Shoot", qty: "2 tbsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Boil beans until half-cooked.",
      "Add fermented bamboo shoot and green chili.",
      "Simmer until beans are tender and liquid reduces.",
      "The result is a tangy and savory bean dish."
    ]
  },
  {
    id: "mustard-greens-chili-naga",
    menuCategory: "Dry & Stir-Fried",
    name: "Mustard Greens with Chili",
    description: "Fresh mustard greens stir-fried with a touch of ghost pepper, healthy and fiery.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.81,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Spicy", "Healthy"],
    ingredients: [
      { id: "mustard_greens", name: "Mustard Greens", qty: "2 bunches", price: 25, available: true },
      { id: "ghost_pepper", name: "Bhut Jolokia bits", qty: "pinch", price: 10, available: true },
      { id: "garlic", name: "Garlic", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Wash and roughly chop mustard greens.",
      "Sauté garlic and chili bits in oil.",
      "Add the greens and salt.",
      "Stir-fry on high heat for 5 minutes until wilted."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "naga-rice-cake",
    menuCategory: "Snacks & Street Food",
    name: "Naga Rice Cake",
    description: "Traditional steamed sticky rice cakes, a favorite tea-time sweet in the hills.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.88,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "sticky_rice", name: "Sticky Rice", qty: "2 cups", price: 40, available: true },
      { id: "sugar", name: "Sugar", qty: "2 tbsp", price: 5, available: true },
      { id: "water", name: "Water", qty: "as needed", price: 20, available: false }
    ],
    steps: [
      "Boil sticky rice until very soft.",
      "Mash and mix with sugar.",
      "Shape into small flat cakes.",
      "Steam for another 10 minutes to set."
    ]
  },
  {
    id: "akhuni-chutney-bites",
    menuCategory: "Sides & Accompaniments",
    name: "Akhuni Chutney Bites",
    description: "Fermented soybean chutney served with small crispy rice bites for a pungent flavor burst.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.74,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "akhuni", name: "Akhuni Paste", qty: "2 tbsp", price: 20, available: true },
      { id: "rice_crackers", name: "Rice Crackers", qty: "10", price: 20, available: true },
      { id: "chili", name: "Naga Chili", qty: "2", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 tsp", price: 10, available: false }
    ],
    steps: [
      "Grind roasted akhuni, chili, ginger, and salt into a thick paste.",
      "Spoon small portions onto rice crackers.",
      "Serve as a quick, pungent appetizer."
    ]
  },
  {
    id: "bhut-jolokia-pickle-plate",
    menuCategory: "Sides & Accompaniments",
    name: "Bhut Jolokia Pickle Snack Plate",
    description: "Fiery ghost pepper pickle served with a side of simple boiled snacks like roots and tubers.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.80,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "ghost_pickle", name: "Ghost Pepper Pickle", qty: "1 tbsp", price: 20, available: true },
      { id: "boiled_roots", name: "Boiled Taro or Potato", qty: "2 cups", price: 15, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 15, available: false }
    ],
    steps: [
      "Boil the roots or tubers until soft; peel and slice.",
      "Serve the warm slices with a tiny portion of Bhut Jolokia pickle.",
      "Enjoy the extreme heat with the mild boiled snack."
    ]
  },
  {
    id: "puffed-rice-chili-naga",
    menuCategory: "Snacks & Street Food",
    name: "Puffed Rice with Chili",
    description: "Crunchy puffed rice tossed with ghost pepper flakes and local mountain herbs.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.82,
    tags: ["Nagaland", "Northeast Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "puffed_rice", name: "Puffed Rice", qty: "3 cups", price: 20, available: true },
      { id: "chili_flakes", name: "Ghost Pepper Flakes", qty: "pinch", price: 10, available: true },
      { id: "garlic_oil", name: "Garlic infused Oil", qty: "1 tsp", price: 10, available: true },
      { id: "herbs", name: "Local Herbs", qty: "handful", price: 10, available: false }
    ],
    steps: [
      "Toss puffed rice in a large bowl.",
      "Add garlic oil, chili flakes, and salt.",
      "Mix in finely chopped local herbs.",
      "Toss well and serve immediately for crunch."
    ]
  },
  {
    id: "smoked-pork-bites-naga",
    menuCategory: "Snacks & Street Food",
    name: "Smoked Pork Bites",
    description: "Snack-sized pieces of smoked pork stir-fried with garlic and local chilies.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.89,
    tags: ["Nagaland", "Northeast Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "smoked_pork", name: "Smoked Pork", qty: "250g", price: 150, available: true },
      { id: "garlic", name: "Garlic", qty: "1 tbsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "1 tbsp", price: 70, available: false }
    ],
    steps: [
      "Cut smoked pork into small cubes.",
      "Sauté garlic and chili in oil.",
      "Add pork and fry on high heat until the edges are crispy.",
      "Serve hot as a savory non-veg snack."
    ]
  }
];
