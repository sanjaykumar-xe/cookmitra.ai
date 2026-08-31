import { Recipe } from './types';

export const tripuraRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "mui-borok-fish-curry",
    menuCategory: "Curries & Gravies",
    name: "Mui Borok Fish Curry",
    description: "The traditional soul food of Tripura—fresh river fish cooked with fermented fish (berma) and local herbs for a pungent, oil-free flavor.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.88,
    tags: ["Tripura", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "river_fish", name: "Freshwater Fish", qty: "500g", price: 200, available: true },
      { id: "berma", name: "Fermented Fish (Berma)", qty: "2-3 pieces", price: 50, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "6", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/2 tsp", price: 5, available: true }
    ],
    steps: [
      "Clean and cut the fish into steaks.",
      "Bring 3 cups of water to a boil in a heavy pot.",
      "Add fermented fish (berma), crushed ginger, and green chilies to the water.",
      "Add turmeric and salt; boil until the berma dissolves completely.",
      "Gently add the fish pieces and simmer for 10-12 minutes.",
      "Serve the thin, pungent broth with steamed rice."
    ]
  },
  {
    id: "chakhwi-pork-stew",
    menuCategory: "Curries & Gravies",
    name: "Chakhwi",
    description: "A unique Tripuri pork stew cooked with bamboo shoots, green papaya, and a hint of soda (kharchi), making it extremely tender.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.85,
    tags: ["Tripura", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork (with fat)", qty: "500g", price: 180, available: true },
      { id: "bamboo_shoot", name: "Bamboo Shoot", qty: "1/2 cup", price: 40, available: true },
      { id: "green_papaya", name: "Raw Green Papaya", qty: "1 cup", price: 15, available: true },
      { id: "soda", name: "Baking Soda (Kharchi)", qty: "pinch", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tbsp", price: 5, available: true }
    ],
    steps: [
      "Boil pork with salt and a pinch of soda until it starts to soften.",
      "Add sliced green papaya and shredded bamboo shoots.",
      "Stir in ginger paste and green chilies.",
      "Cook on low heat until the meat and vegetables are thoroughly tender.",
      "The soda helps in breaking down the meat fibers, creating a distinct texture.",
      "Serve as a hearty side with rice."
    ]
  },
  {
    id: "pork-bamboo-shoot-tripuri",
    menuCategory: "Curries & Gravies",
    name: "Pork with Bamboo Shoot Tripuri",
    description: "A spicy Tripuri pork curry where the pungent flavor of fermented bamboo shoot complements the rich fat of the pork.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.82,
    tags: ["Tripura", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork chunks", qty: "500g", price: 180, available: true },
      { id: "bamboo_shoot", name: "Fermented Bamboo Shoot", qty: "1/2 cup", price: 30, available: true },
      { id: "red_chili", name: "Dry Red Chilies", qty: "6", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "8", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Sauté pork pieces in its own fat until slightly browned.",
      "Add crushed garlic and roasted red chilies.",
      "Stir in the fermented bamboo shoot and salt.",
      "Cover and slow cook for 30 minutes, allowing the pork to absorb the tang.",
      "Add a splash of water if needed, but the dish should be relatively dry.",
      "Garnish with local herbs and serve hot."
    ]
  },
  {
    id: "berma-chicken-curry",
    menuCategory: "Curries & Gravies",
    name: "Berma Chicken Curry",
    description: "Chicken curry prepared with Tripuri fermented fish (berma), offering a unique earthy and pungent depth to the meat.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.79,
    tags: ["Tripura", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "berma", name: "Fermented Fish", qty: "3 pieces", price: 40, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "2", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "garlic", name: "Garlic paste", qty: "1 tbsp", price: 75, available: false }
    ],
    steps: [
      "Clean chicken and cut into small pieces.",
      "Boil berma in a little water until it dissolves; strain to remove bones.",
      "Sauté onions and garlic in a little oil; add chicken.",
      "Pour in the berma extract and green chilies.",
      "Simmer for 20 minutes until the chicken is tender and the gravy is thick and pungent."
    ]
  },
  {
    id: "wahan-mosdeng",
    menuCategory: "Curries & Gravies",
    name: "Wahan Mosdeng",
    description: "A spicy and savory Tripuri pork salad made with roasted meat, lots of green chilies, and fresh ginger.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.86,
    tags: ["Tripura", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Roasted Pork", qty: "400g", price: 180, available: true },
      { id: "onion", name: "Raw Onion (chopped)", qty: "1 large", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies (roasted)", qty: "6", price: 5, available: true },
      { id: "ginger", name: "Ginger (finely minced)", qty: "1 tbsp", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 55, available: false }
    ],
    steps: [
      "Boil or roast pork chunks until fully cooked; slice into thin strips.",
      "Fire-roast the green chilies until charred and soft.",
      "In a bowl, mash the roasted chilies with salt and minced ginger.",
      "Add sliced onions and the pork strips.",
      "Mix thoroughly with hands to release the flavors.",
      "Serve as a sharp and spicy side dish."
    ]
  },
  {
    id: "fish-curry-tripuri",
    menuCategory: "Curries & Gravies",
    name: "Fish Curry Tripuri Style",
    description: "A light and refreshing freshwater fish curry prepared with minimal oil and local mountain herbs.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.74,
    tags: ["Tripura", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "fish", name: "Freshwater Fish", qty: "500g", price: 200, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tsp", price: 5, available: true },
      { id: "cumin_seeds", name: "Cumin Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/2 tsp", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 85, available: false }
    ],
    steps: [
      "Marinate fish with salt and turmeric.",
      "Sauté cumin seeds and ginger in mustard oil.",
      "Add fish and sear briefly on both sides.",
      "Add 2 cups of water and salt.",
      "Simmer for 10 minutes until the fish is flaky.",
      "Finish with fresh coriander or local herbs."
    ]
  },
  {
    id: "muya-awandru-pork",
    menuCategory: "Curries & Gravies",
    name: "Muya Awandru",
    description: "A thick and creamy Tripuri stew made with bamboo shoots and pork, thickened with rice flour.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.81,
    tags: ["Tripura", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork bits", qty: "300g", price: 120, available: true },
      { id: "bamboo_shoot", name: "Bamboo Shoot (sliced)", qty: "1 cup", price: 30, available: true },
      { id: "rice_flour", name: "Rice Flour", qty: "2 tbsp", price: 10, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "chilies", name: "Green Chilies", qty: "4", price: 115, available: false }
    ],
    steps: [
      "Boil pork and bamboo shoots together with salt until soft.",
      "Mix rice flour with a little water to make a smooth slurry.",
      "Gradually add the slurry to the boiling pot while stirring constantly.",
      "The stew will thicken into a creamy consistency.",
      "Add ginger paste and green chilies for flavor.",
      "Simmer for another 5 minutes and serve warm."
    ]
  },
  {
    id: "chicken-bamboo-shoot-tripuri",
    menuCategory: "Curries & Gravies",
    name: "Chicken Curry with Bamboo Shoot Tripuri",
    description: "A zesty chicken curry from the hills of Tripura, using fresh bamboo shoots and birds eye chilies.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.77,
    tags: ["Tripura", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "bamboo_shoot", name: "Fresh Bamboo Shoot", qty: "1/2 cup", price: 30, available: true },
      { id: "green_chili", name: "Birds Eye Chilies", qty: "4", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "2 tbsp", price: 85, available: false }
    ],
    steps: [
      "Sauté onions and green chilies in oil.",
      "Add chicken and sear until browned.",
      "Add bamboo shoots and salt; sauté for 5 minutes.",
      "Add minimal water and cover.",
      "Slow cook until chicken is tender and flavors are absorbed."
    ]
  },
  {
    id: "dried-fish-chutney-curry",
    menuCategory: "Sides & Accompaniments",
    name: "Dried Fish Chutney Curry",
    description: "A fiery and pungent dish made by cooking dried fish into a thick, chutney-like curry with lots of garlic.",
    type: "Non-Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 200,
    popularity: 0.72,
    tags: ["Tripura", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "dried_fish", name: "Small Dried Fish", qty: "100g", price: 80, available: true },
      { id: "garlic", name: "Garlic cloves (crushed)", qty: "10", price: 10, available: true },
      { id: "red_chili", name: "Red Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "onion", name: "Onion (minced)", qty: "2 tbsp", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 95, available: false }
    ],
    steps: [
      "Wash dried fish thoroughly and remove heads.",
      "Heat mustard oil; sauté onions and lots of garlic.",
      "Add the dried fish and fry until aromatic.",
      "Stir in chili powder and salt.",
      "Add a splash of water and cook until the mixture is thick and oily."
    ]
  },
  {
    id: "egg-curry-tripuri",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry Tripuri Style",
    description: "Boiled eggs in a light, fermented fish-tinged gravy, a common comfort meal in rural Tripura.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.70,
    tags: ["Tripura", "Northeast Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "berma", name: "Fermented Fish (Berma)", qty: "1 piece", price: 15, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 60, available: false }
    ],
    steps: [
      "Prick boiled eggs and sear in oil; set aside.",
      "Boil berma in 1/2 cup water until it dissolves; strain.",
      "Sauté onion and ginger in oil.",
      "Add berma extract and eggs.",
      "Simmer for 5 minutes until the gravy is absorbed."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "mosdeng-veg",
    menuCategory: "Curries & Gravies",
    name: "Mosdeng",
    description: "A traditional Tripuri mashed salad made with roasted vegetables and fiery local chilies.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.90,
    tags: ["Tripura", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "potato_brinjal", name: "Potato or Brinjal", qty: "2 medium", price: 20, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "onion", name: "Raw Onion (chopped)", qty: "1 small", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves (roasted)", qty: "2", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 25, available: false }
    ],
    steps: [
      "Roast the vegetable (potato or brinjal) and green chilies on an open flame until charred.",
      "Peel the skin and mash the vegetable thoroughly.",
      "Crush the roasted chilies and garlic with salt.",
      "Combine the mash with raw onions and the chili-garlic paste.",
      "Mix well and serve as a spicy condiment or side."
    ]
  },
  {
    id: "muya-bwtwi",
    menuCategory: "Curries & Gravies",
    name: "Muya Bwtwi",
    description: "A healthy Tripuri curry made with bamboo shoots and local green vegetables, cooked with a touch of fermented fish extract.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.85,
    tags: ["Tripura", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "bamboo_shoot", name: "Bamboo Shoot (shredded)", qty: "1 cup", price: 30, available: true },
      { id: "local_greens", name: "Spinach or Local Greens", qty: "1 bunch", price: 15, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "pinch", price: 5, available: true },
      { id: "berma_extract", name: "Berma Water (optional)", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Boil shredded bamboo shoots in water until tender.",
      "Add green chilies and the fermented fish (berma) extract.",
      "Stir in the chopped greens and salt.",
      "Cook on low heat until the greens are done and the liquid reduces.",
      "The result is a light, healthy mountain stew."
    ]
  },
  {
    id: "berma-veg-curry",
    menuCategory: "Curries & Gravies",
    name: "Berma Vegetable Curry",
    description: "Mixed seasonal vegetables simmered in a pungent gravy flavored with fermented fish paste.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.81,
    tags: ["Tripura", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "mixed_veg", name: "Beans, Carrot, Pumpkin", qty: "2 cups", price: 30, available: true },
      { id: "berma", name: "Fermented Fish paste", qty: "2 tbsp", price: 15, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Sauté garlic and green chilies in mustard oil.",
      "Add mixed vegetables and sauté for 5 minutes.",
      "Stir in the berma paste and salt.",
      "Add a little water and simmer until vegetables are soft and tangy."
    ]
  },
  {
    id: "thwitwi-curry",
    menuCategory: "Curries & Gravies",
    name: "Thwitwi Curry",
    description: "Banana flower (Thwitwi) cooked in a traditional Tripuri style with roasted spices and minimal oil.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.72,
    tags: ["Tripura", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "banana_flower", name: "Banana Flower (cleaned)", qty: "2 cups", price: 30, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "chili", name: "Birds Eye Chilies", qty: "4", price: 10, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/4 tsp", price: 10, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 25, available: false }
    ],
    steps: [
      "Boil the cleaned banana flower with turmeric and salt until tender; drain.",
      "Sauté ginger paste and chilies in oil.",
      "Add the boiled banana flower and roast on medium heat.",
      "Stir-fry until the mixture is dry and fragrant."
    ]
  },
  {
    id: "muya-awandru-veg",
    menuCategory: "Curries & Gravies",
    name: "Muya Awandru Vegetarian",
    description: "A thick and wholesome bamboo shoot stew thickened with rice flour and seasoned with local herbs.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.78,
    tags: ["Tripura", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "bamboo_shoot", name: "Bamboo Shoot", qty: "1 cup", price: 25, available: true },
      { id: "rice_flour", name: "Rice Flour", qty: "2 tbsp", price: 5, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 35, available: false }
    ],
    steps: [
      "Boil bamboo shoots in 3 cups of water until soft.",
      "Make a smooth slurry with rice flour and water.",
      "Slowly add to the pot while stirring.",
      "Add ginger, chilies, and salt.",
      "Simmer until the stew is thick and creamy."
    ]
  },
  {
    id: "gudok-veg",
    menuCategory: "Curries & Gravies",
    name: "Gudok (Vegetarian Style)",
    description: "A healthy and oil-free mashed vegetable stew made with seasonal greens and roots.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.74,
    tags: ["Tripura", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "taro_root", name: "Taro Root (Arbi)", qty: "1/2 cup", price: 15, available: true },
      { id: "beans", name: "Local Green Beans", qty: "1/2 cup", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "4", price: 5, available: true },
      { id: "coriander", name: "Fresh Coriander", qty: "handful", price: 30, available: false }
    ],
    steps: [
      "Boil taro root and beans with green chilies and garlic in minimal water.",
      "Once soft, mash the vegetables together inside the pot.",
      "Add a little more water to reach a stew-like consistency.",
      "Garnish with fresh coriander and serve as a light side."
    ]
  },
  {
    id: "pumpkin-leaf-tripuri",
    menuCategory: "Curries & Gravies",
    name: "Pumpkin Leaf Curry Tripuri",
    description: "Stir-fried tender pumpkin leaves with garlic and green chilies, a simple and nutritious forest dish.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.68,
    tags: ["Tripura", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "pumpkin_leaves", name: "Tender Pumpkin Leaves", qty: "2 bunches", price: 20, available: true },
      { id: "garlic", name: "Garlic cloves (crushed)", qty: "6", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "chili", name: "Birds Eye Chilies", qty: "2", price: 20, available: false }
    ],
    steps: [
      "Wash and roughly chop the pumpkin leaves.",
      "Heat mustard oil and temper with crushed garlic and chilies.",
      "Add the leaves and sauté on high heat.",
      "Stir until the leaves wilt and the water evaporates."
    ]
  },
  {
    id: "dal-tripuri",
    menuCategory: "Curries & Gravies",
    name: "Dal Tripuri Style",
    description: "Simple and comforting lentil soup prepared with local hill herbs and ginger.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.70,
    tags: ["Tripura", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "yellow_lentils", name: "Moong or Toor Dal", qty: "1 cup", price: 25, available: true },
      { id: "ginger", name: "Minced Ginger", qty: "1 tbsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "pinch", price: 15, available: false }
    ],
    steps: [
      "Boil dal with ginger, turmeric, and salt until mushy.",
      "Whisk for a smooth consistency.",
      "Temper with cumin seeds in a teaspoon of oil.",
      "Serve hot."
    ]
  },
  {
    id: "arum-leaf-curry",
    menuCategory: "Curries & Gravies",
    name: "Arum Leaf Curry",
    description: "Colocasia (arum) leaves cooked into a tangy curry with mountain spices.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.65,
    tags: ["Tripura", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "arum_leaves", name: "Colocasia Leaves", qty: "2 cups", price: 20, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "4", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 40, available: false }
    ],
    steps: [
      "Boil leaves with salt; drain.",
      "Sauté garlic and chilies in oil.",
      "Add leaves and tamarind pulp to prevent throat itchiness.",
      "Simmer for 10 minutes until thick."
    ]
  },
  {
    id: "mixed-veg-berma-curry",
    menuCategory: "Curries & Gravies",
    name: "Mixed Vegetable Berma Curry",
    description: "Seasonal hill vegetables in a lightly fermented, spicy gravy.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.76,
    tags: ["Tripura", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "seasonal_veg", name: "Mixed Vegetables", qty: "2 cups", price: 30, available: true },
      { id: "berma", name: "Fermented Fish extract", qty: "2 tbsp", price: 15, available: true },
      { id: "chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 25, available: false }
    ],
    steps: [
      "Sauté vegetables in oil.",
      "Add berma extract and green chilies.",
      "Cover and simmer until vegetables are soft.",
      "Adjust salt and serve."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "chakhwi-rice-bites",
    menuCategory: "Snacks & Street Food",
    name: "Chakhwi Rice Bites",
    description: "Pan-fried savory rice flour cakes flavored with ginger and local Tripuri seasonings.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.82,
    tags: ["Tripura", "Northeast Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "1.5 cups", price: 20, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tbsp", price: 5, available: true },
      { id: "onion", name: "Onion (minced)", qty: "2 tbsp", price: 5, available: true },
      { id: "oil", name: "Oil for pan fry", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Make a thick paste with rice flour, ginger, and salt.",
      "Flatten small portions into discs.",
      "Pan-fry in minimal oil until both sides are golden and firm.",
      "Serve with a spicy chutney."
    ]
  },
  {
    id: "muya-bhaja",
    menuCategory: "Snacks & Street Food",
    name: "Muya Bhaja",
    description: "Crispy fried bamboo shoot fritters, a popular evening snack in Tripuri households.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.81,
    tags: ["Tripura", "Northeast Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "bamboo_shoot", name: "Fresh Bamboo Shoot (sliced)", qty: "1 cup", price: 25, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "1/2 cup", price: 10, available: true },
      { id: "chili_powder", name: "Chili Powder", qty: "1/2 tsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 25, available: false }
    ],
    steps: [
      "Parboil bamboo shoot slices.",
      "Make a thick batter with besan and spices.",
      "Dip slices in batter and deep fry until crispy gold.",
      "Serve hot."
    ]
  },
  {
    id: "malpua-tripuri",
    menuCategory: "Desserts & Sweets",
    name: "Malpua Tripuri",
    description: "Sweet fried rice flour and jaggery pancakes, common during local Tripuri festivals.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.89,
    tags: ["Tripura", "Northeast Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "1 cup", price: 15, available: true },
      { id: "jaggery", name: "Jaggery (liquid)", qty: "1/2 cup", price: 20, available: true },
      { id: "fennel", name: "Saunf (Fennel Seeds)", qty: "pinch", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 25, available: false }
    ],
    steps: [
      "Mix flour, jaggery syrup, and fennel seeds into a thick batter.",
      "Deep fry small spoonfuls until puffy.",
      "Serve warm."
    ]
  },
  {
    id: "muya-pitha",
    menuCategory: "Desserts & Sweets",
    name: "Muya Pitha",
    description: "Steamed rice flour dumplings with a savory bamboo shoot and ginger filling.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.74,
    tags: ["Tripura", "Northeast Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 20, available: true },
      { id: "bamboo_shoot", name: "Shredded Bamboo Shoot", qty: "1/2 cup", price: 15, available: true },
      { id: "ginger", name: "Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "steamer", name: "Steamer", qty: "1", price: 30, available: false }
    ],
    steps: [
      "Knead flour with warm water.",
      "Stuff small dough discs with ginger-flavored bamboo shoots.",
      "Steam for 15 minutes.",
      "Serve with chutney."
    ]
  },
  {
    id: "pork-bamboo-skewers",
    menuCategory: "Snacks & Street Food",
    name: "Pork Bamboo Skewers",
    description: "Grilled spiced pork and bamboo shoot skewers, a popular tribal street snack.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.92,
    tags: ["Tripura", "Northeast Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "pork_chunks", name: "Pork Chunks", qty: "300g", price: 150, available: true },
      { id: "bamboo_shoot", name: "Bamboo Shoot (large cubes)", qty: "1/2 cup", price: 20, available: true },
      { id: "spices", name: "Local Spice Mix", qty: "1 tbsp", price: 20, available: true },
      { id: "oil", name: "Oil for basting", qty: "1 tbsp", price: 40, available: false }
    ],
    steps: [
      "Marinate pork and bamboo shoots with spices.",
      "Thread onto skewers.",
      "Grill until meat is charred.",
      "Serve hot."
    ]
  }
];
