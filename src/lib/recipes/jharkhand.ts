import { Recipe } from './types';

export const jharkhandRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "jharkhandi-chicken-curry",
    name: "Jharkhandi Chicken Curry",
    description: "A rustic and flavorful chicken curry cooked in mustard oil with a dominance of garlic and whole spices.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.82,
    tags: ["Jharkhand", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "10", price: 10, available: true },
      { id: "onion", name: "Onions (sliced)", qty: "2 large", price: 10, available: true },
      { id: "ginger", name: "Ginger paste", qty: "1 tsp", price: 70, available: false }
    ],
    steps: [
      "Heat mustard oil until smoking; sauté whole red chilies and bay leaf.",
      "Add sliced onions and fry until light brown.",
      "Add chicken and sear on high heat until it turns opaque.",
      "Stir in crushed garlic, ginger paste, turmeric, and chili powder.",
      "Add minimal water and slow cook until the chicken is tender and the oil separates."
    ]
  },
  {
    id: "mutton-curry-jharkhandi",
    name: "Mutton Curry Jharkhandi Style",
    description: "Slow-cooked spicy mutton curry featuring roasted spices and a rich mustard oil base.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 420,
    popularity: 0.85,
    tags: ["Jharkhand", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "4 tbsp", price: 30, available: true },
      { id: "garlic", name: "Whole Garlic Bulbs", qty: "2", price: 10, available: true },
      { id: "onion", name: "Onions", qty: "3 large", price: 15, available: true },
      { id: "spices", name: "Rural Garam Masala", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt and turmeric until 80% tender.",
      "Heat mustard oil and fry onions until deep brown.",
      "Add pre-cooked mutton and whole garlic bulbs (traditional touch).",
      "Add spices and roast (bhunao) the meat in the masala for 10 minutes.",
      "Add water and simmer until meat is soft and gravy is thick."
    ]
  },
  {
    id: "handia-chicken",
    name: "Handia Chicken",
    description: "A tribal-inspired chicken curry slow-cooked with earthy spices, traditionally paired with local rice preparations.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 290,
    popularity: 0.78,
    tags: ["Jharkhand", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "onion", name: "Onion paste", qty: "1/2 cup", price: 10, available: true },
      { id: "clay_pot", name: "Clay Pot (for cooking)", qty: "1", price: 115, available: false }
    ],
    steps: [
      "Marinate chicken with ginger-garlic paste and salt.",
      "Heat oil in a clay pot and sauté onion paste until soft.",
      "Add chicken and sear on high heat.",
      "Add spices and a little water; cover the pot.",
      "Slow cook for 25 minutes until the earthy aroma of the pot infuses into the meat."
    ]
  },
  {
    id: "chicken-curry-bamboo-shoot-jh",
    name: "Chicken Curry with Bamboo Shoot",
    description: "A distinct tribal specialty where chicken is simmered with tangy fermented bamboo shoots.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.76,
    tags: ["Jharkhand", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "bamboo_shoot", name: "Fermented Bamboo Shoot", qty: "1/2 cup", price: 40, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 95, available: false }
    ],
    steps: [
      "Wash bamboo shoots several times to remove excess sourness.",
      "Sauté onions and garlic in mustard oil until translucent.",
      "Add chicken and sauté until it turns white.",
      "Stir in bamboo shoots and spices; cook for 5 minutes.",
      "Add a cup of water and simmer until chicken is tender and the curry is tangy."
    ]
  },
  {
    id: "mutton-rogra",
    name: "Mutton Rogra",
    description: "A hearty combination of mutton and wild Rogra mushrooms (black gram mushrooms), a rare forest specialty.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 410,
    popularity: 0.74,
    tags: ["Jharkhand", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 350, available: true },
      { id: "rogra", name: "Wild Mushrooms (Rugra)", qty: "1 cup", price: 30, available: true },
      { id: "onion", name: "Onions (sliced)", qty: "2 large", price: 10, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt until nearly tender.",
      "Clean Rugra mushrooms and cut into halves.",
      "Sauté onions in ghee until brown; add mutton and spices.",
      "Add Rugra mushrooms and sauté for 5 minutes.",
      "Simmer for 15 minutes until the mushrooms absorb the meat juices."
    ]
  },
  {
    id: "machh-jhor-jharkhand",
    name: "Machh Jhor Jharkhandi Style",
    description: "A thin and spicy river fish curry prepared with mustard paste and local seasonings.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.81,
    tags: ["Jharkhand", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "river_fish", name: "Freshwater Fish", qty: "500g", price: 200, available: true },
      { id: "mustard_paste", name: "Yellow Mustard Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 80, available: false }
    ],
    steps: [
      "Fry marinated fish slices and set aside.",
      "Heat mustard oil and temper with mustard seeds.",
      "Add onion-garlic paste and sauté for 2 minutes.",
      "Stir in mustard paste mixed with turmeric and water.",
      "Bring to a boil and add the fried fish; simmer for 5 minutes."
    ]
  },
  {
    id: "chicken-bhuja-jharkhand",
    name: "Chicken Bhuja Jharkhandi",
    description: "A dry-roasted spicy chicken preparation, following the traditional Bhuja style of intense sautéing.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.83,
    tags: ["Jharkhand", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken bits", qty: "500g", price: 150, available: true },
      { id: "onion", name: "Onion (sliced)", qty: "2", price: 10, available: true },
      { id: "garlic", name: "Crushed Garlic", qty: "1 tbsp", price: 10, available: true },
      { id: "dry_chili", name: "Whole Red Chilies", qty: "4", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "3 tbsp", price: 95, available: false }
    ],
    steps: [
      "Sauté sliced onions and red chilies in mustard oil until browned.",
      "Add chicken and sear on high heat.",
      "Add crushed garlic and spices; roast for 15 minutes without adding water.",
      "The chicken should cook in its own juices and the onion base until dry.",
      "Garnish with fresh coriander."
    ]
  },
  {
    id: "egg-curry-jharkhand",
    name: "Egg Curry Jharkhandi Style",
    description: "Boiled eggs simmered in a sharp mustard oil gravy with a deep red color and bold spices.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.79,
    tags: ["Jharkhand", "East Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "spices", name: "Local Curry Spices", qty: "1 tbsp", price: 60, available: false }
    ],
    steps: [
      "Prick boiled eggs and lightly sear in oil; set aside.",
      "Heat mustard oil and sauté onions until brown.",
      "Add ginger paste and spices; cook until soft.",
      "Add a cup of water and simmer to form a gravy.",
      "Add eggs and cook for 5 minutes."
    ]
  },
  {
    id: "mutton-kaleji-jharkhand",
    name: "Mutton Kaleji Jharkhandi",
    description: "Spiced mutton liver fry, heavily seasoned with garlic and local spices, a popular rustic side dish.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.74,
    tags: ["Jharkhand", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_liver", name: "Mutton Liver", qty: "500g", price: 250, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 5, available: true },
      { id: "black_pepper", name: "Crushed Black Pepper", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Sauté onions and garlic in oil until brown.",
      "Add liver pieces and sear on high heat for 5 minutes.",
      "Add turmeric, chili powder, and salt.",
      "Roast uncovered until the liver is tender and masala is dry.",
      "Sprinkle black pepper at the very end."
    ]
  },
  {
    id: "chicken-mahua-jharkhand",
    name: "Chicken Curry with Mahua Notes",
    description: "An earthy chicken curry inspired by tribal culinary practices using mahua flower essences for a unique aroma.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 290,
    popularity: 0.68,
    tags: ["Jharkhand", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "onion", name: "Onion paste", qty: "1/2 cup", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tbsp", price: 10, available: true },
      { id: "spices", name: "Tribal Spice Blend", qty: "1 tbsp", price: 20, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 100, available: false }
    ],
    steps: [
      "Sauté onion and ginger-garlic paste in mustard oil.",
      "Add chicken and sear until browned.",
      "Add the special spice blend and salt.",
      "Add a splash of water and slow cook.",
      "The result is a deeply aromatic and earthy tribal-style curry."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "rugra-curry",
    name: "Rugra Curry",
    description: "A seasonal specialty of Jharkhand—wild mushrooms (Rugra) cooked in a spicy onion-tomato gravy.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.92,
    tags: ["Jharkhand", "East Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "rugra", name: "Rugra Mushrooms", qty: "1 cup", price: 30, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 10, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 35, available: false }
    ],
    steps: [
      "Wash Rugra thoroughly and cut into halves.",
      "Sauté onions and ginger paste in mustard oil until brown.",
      "Add tomatoes and spices; cook until soft.",
      "Add Rugra mushrooms and salt; sauté for 5 minutes.",
      "Add a little water and simmer for 10 minutes until the gravy is thick."
    ]
  },
  {
    id: "dhuska-ghugni-combo",
    name: "Dhuska with Ghugni",
    description: "Deep-fried rice-lentil pancakes served with a spicy dried yellow pea curry, a quintessential Jharkhandi breakfast.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.94,
    tags: ["Jharkhand", "East Indian", "Vegetarian", "Breakfast", "Spicy"],
    ingredients: [
      { id: "rice_dal_batter", name: "Rice-Lentil Batter", qty: "2 cups", price: 20, available: true },
      { id: "yellow_peas", name: "Yellow Peas (boiled)", qty: "1 cup", price: 15, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 30, available: false }
    ],
    steps: [
      "Prepare Dhuska by deep frying spoonfuls of batter until golden and puffy.",
      "For Ghugni, sauté onions and ginger-garlic paste.",
      "Add spices and boiled yellow peas; simmer for 10 minutes.",
      "Serve the hot Dhuska with a bowl of spicy Ghugni."
    ]
  },
  {
    id: "bamboo-shoot-curry-jh",
    name: "Bamboo Shoot Curry",
    description: "A tangy and earthy curry made from fermented bamboo shoots, common in tribal diets.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.72,
    tags: ["Jharkhand", "East Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "bamboo_shoot", name: "Bamboo Shoot (sliced)", qty: "1 cup", price: 30, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "4", price: 5, available: true },
      { id: "dry_chili", name: "Dry Red Chilies", qty: "2", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 35, available: false }
    ],
    steps: [
      "Boil sliced bamboo shoots to remove bitterness; drain.",
      "Heat mustard oil and temper with mustard seeds and red chilies.",
      "Add crushed garlic and sauté.",
      "Add bamboo shoots, salt, and turmeric.",
      "Simmer for 15 minutes until tender and tangy."
    ]
  },
  {
    id: "chana-ghugni-jharkhand",
    name: "Chana Ghugni Jharkhandi",
    description: "Spiced dried yellow pea curry with local Jharkhandi seasoning, a popular street-side evening snack.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.88,
    tags: ["Jharkhand", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "yellow_peas", name: "Dried Yellow Peas (soaked)", qty: "1.5 cups", price: 20, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 35, available: false }
    ],
    steps: [
      "Pressure cook soaked peas until soft.",
      "Sauté onions and garlic in oil until brown.",
      "Add turmeric, chili powder, and cumin powder.",
      "Add cooked peas and water; simmer until the gravy is thick.",
      "Garnish with chopped onions and lemon."
    ]
  },
  {
    id: "saag-jharkhand",
    name: "Saag Jharkhandi",
    description: "Simple stir-fried foraged leafy greens with garlic and mustard oil, a nutritious tribal staple.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.90,
    tags: ["Jharkhand", "East Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "local_greens", name: "Mixed Foraged Greens", qty: "2 bunches", price: 20, available: true },
      { id: "garlic", name: "Garlic cloves (crushed)", qty: "6", price: 5, available: true },
      { id: "red_chili", name: "Dry Red Chili", qty: "2", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 25, available: false }
    ],
    steps: [
      "Wash and chop the greens finely.",
      "Heat mustard oil and temper with red chilies.",
      "Add crushed garlic and sauté until fragrant.",
      "Add the greens and salt; stir-fry on high heat.",
      "Cook until the greens are tender and water is gone."
    ]
  },
  {
    id: "arhar-dal-jharkhand",
    name: "Arhar Dal Jharkhandi",
    description: "Simple tempered pigeon pea dal with a punchy garlic and red chili tadka in mustard oil.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.85,
    tags: ["Jharkhand", "East Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 5, available: true },
      { id: "red_chili", name: "Whole Red Chili", qty: "2", price: 15, available: false }
    ],
    steps: [
      "Pressure cook dal with turmeric and salt until mushy.",
      "Heat mustard oil and temper with red chilies and lots of crushed garlic.",
      "Add a pinch of hing.",
      "Pour the tempering over the dal and cover immediately."
    ]
  },
  {
    id: "aloo-posto-jharkhand",
    name: "Aloo Posto Jharkhandi",
    description: "Potatoes cooked in a creamy poppy seed paste with a subtle mustard oil aroma, influenced by neighboring traditions.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 75,
    popularity: 0.82,
    tags: ["Jharkhand", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "potato", name: "Potatoes (cubed)", qty: "4", price: 15, available: true },
      { id: "poppy_seeds", name: "Poppy Seeds (Posto)", qty: "3 tbsp", price: 30, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Grind poppy seeds into a smooth thick paste with green chilies.",
      "Sauté potato cubes in mustard oil until lightly browned.",
      "Add the poppy seed paste and salt.",
      "Simmer for 10 minutes until the potatoes are cooked and coated in the paste."
    ]
  },
  {
    id: "kohra-bhaji-jh",
    name: "Kohra Bhaji",
    description: "Sweet and spicy pumpkin stir-fry with a simple tempering, a common home-style vegetable dish.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.70,
    tags: ["Jharkhand", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "pumpkin", name: "Yellow Pumpkin", qty: "500g", price: 20, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tsp", price: 5, available: true },
      { id: "jaggery", name: "Sugar/Jaggery", qty: "1/2 tsp", price: 30, available: false }
    ],
    steps: [
      "Cube the pumpkin.",
      "Heat oil and temper with mustard seeds and ginger.",
      "Add pumpkin cubes, salt, and turmeric.",
      "Cook on medium heat until soft.",
      "Add a pinch of jaggery to balance the taste."
    ]
  },
  {
    id: "til-baigan-jh",
    name: "Til Baigan",
    description: "Brinjal pieces cooked with a roasted sesame seed paste, providing a nutty and spicy regional flavor.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.76,
    tags: ["Jharkhand", "East Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "brinjal", name: "Small Brinjals (slit)", qty: "8", price: 20, available: true },
      { id: "sesame_seeds", name: "Roasted Sesame Seeds", qty: "2 tbsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "dry_chili", name: "Dry Red Chili", qty: "2", price: 25, available: false }
    ],
    steps: [
      "Grind roasted sesame seeds into a paste.",
      "Slit brinjals and lightly fry them in oil.",
      "Add the sesame paste and spices.",
      "Simmer for 10 minutes until brinjals are tender and gravy is thick."
    ]
  },
  {
    id: "gundli-kheer-combo",
    name: "Gundli Ki Kheer with Sabzi",
    description: "Millet pudding served alongside a light vegetable curry, a traditional and healthy tribal meal.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.72,
    tags: ["Jharkhand", "East Indian", "Vegetarian", "Healthy", "Dessert"],
    ingredients: [
      { id: "millet", name: "Gundli (Small Millet)", qty: "1 cup", price: 20, available: true },
      { id: "milk", name: "Milk", qty: "1L", price: 40, available: true },
      { id: "mixed_veg", name: "Seasonal Mixed Veg", qty: "1 cup", price: 15, available: true },
      { id: "sugar", name: "Sugar/Jaggery", qty: "1/2 cup", price: 5, available: false }
    ],
    steps: [
      "Boil millet in milk until soft and milk reduces.",
      "Add sugar/jaggery and simmer until it reaches a pudding consistency.",
      "Prepare a light dry stir-fry of mixed vegetables.",
      "Serve the warm kheer with the savory vegetable side."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "dhuska-snack",
    name: "Dhuska",
    description: "Deep-fried spiced rice-lentil pancakes, the iconic street-side snack of Jharkhand.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.94,
    tags: ["Jharkhand", "East Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "rice", name: "Rice (soaked)", qty: "1 cup", price: 15, available: true },
      { id: "chana_dal", name: "Chana Dal (soaked)", qty: "1/2 cup", price: 10, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 35, available: false }
    ],
    steps: [
      "Grind soaked rice and dal into a smooth thick batter with green chilies.",
      "Let the batter rest for 2 hours.",
      "Deep fry small spoonfuls of the batter until they puff up into golden balls.",
      "Serve hot."
    ]
  },
  {
    id: "pitha-jharkhand",
    name: "Pitha Jharkhandi",
    description: "Steamed rice flour dumplings with a sweet jaggery or savory lentil filling.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.81,
    tags: ["Jharkhand", "East Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 20, available: true },
      { id: "jaggery", name: "Jaggery (for filling)", qty: "1/2 cup", price: 15, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/4 cup", price: 10, available: true },
      { id: "cardamom", name: "Cardamom", qty: "pinch", price: 25, available: false }
    ],
    steps: [
      "Knead rice flour with warm water into a soft dough.",
      "Stuff small dough discs with a mixture of jaggery and coconut.",
      "Seal and steam for 15-20 minutes.",
      "Serve warm."
    ]
  },
  {
    id: "thekua-jharkhand",
    name: "Thekua Jharkhandi",
    description: "Crunchy fried wheat flour cookies made with jaggery and dried fruits, a durable travel snack.",
    type: "Vegetarian",
    time: 35,
    servings: 6,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.92,
    tags: ["Jharkhand", "East Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "jaggery", name: "Jaggery Syrup", qty: "1 cup", price: 20, available: true },
      { id: "dry_fruits", name: "Chopped Dry Fruits", qty: "2 tbsp", price: 15, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 20, available: false }
    ],
    steps: [
      "Knead flour with jaggery syrup and dry fruits into a tight dough.",
      "Shape into small thick discs.",
      "Deep fry on low heat until dark brown and firm.",
      "Cool completely to harden."
    ]
  },
  {
    id: "malpua-jharkhand",
    name: "Malpua Jharkhandi Style",
    description: "Sweet fried wheat pancakes soaked in sugar syrup, a festive treat in Jharkhand.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 85,
    popularity: 0.79,
    tags: ["Jharkhand", "East Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "1 cup", price: 10, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 cup", price: 10, available: true },
      { id: "milk", name: "Milk", qty: "1 cup", price: 15, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 50, available: false }
    ],
    steps: [
      "Make a batter with flour, sugar, and milk.",
      "Let the batter rest for 30 minutes.",
      "Deep fry small spoonfuls until golden.",
      "Serve warm."
    ]
  },
  {
    id: "fish-pakora-jharkhand",
    name: "Fish Pakora Jharkhandi",
    description: "Crispy river fish fritters coated in a spiced gram flour batter, a popular street-side snack.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.84,
    tags: ["Jharkhand", "East Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "fish_bits", name: "Small River Fish", qty: "300g", price: 150, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "1/2 cup", price: 10, available: true },
      { id: "chili_powder", name: "Chili Powder", qty: "1 tsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil for frying", qty: "1 cup", price: 90, available: false }
    ],
    steps: [
      "Marinate fish bits with salt and turmeric.",
      "Make a thick batter of besan and spices.",
      "Coat fish and deep fry until very crispy in mustard oil.",
      "Serve as a spicy appetizer."
    ]
  }
];
