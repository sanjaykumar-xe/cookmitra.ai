import { Recipe } from './types';

export const uttarPradeshRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (15) ---
  {
    id: "lucknowi-chicken-biryani",
    menuCategory: "Rice & Biryani",
    name: "Lucknowi Chicken Biryani",
    description: "A delicate and aromatic Awadhi-style biryani where chicken is dum-cooked with long-grain basmati rice and mild spices.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 320,
    popularity: 0.9,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 160, available: true },
      { id: "basmati_rice", name: "Basmati Rice", qty: "2 cups", price: 80, available: true },
      { id: "milk", name: "Milk (with saffron)", qty: "1/2 cup", price: 20, available: true },
      { id: "mace", name: "Mace and Javitri", qty: "pinch", price: 15, available: true },
      { id: "ghee", name: "Pure Ghee", qty: "3 tbsp", price: 45, available: false }
    ],
    steps: [
      "Parboil rice with whole spices until 70% cooked.",
      "Sauté chicken with ginger-garlic paste and mild spices in ghee.",
      "Add milk and simmer until chicken is half-done.",
      "Layer rice over the chicken, sprinkle saffron milk and fried onions.",
      "Seal the pot and cook on dum for 25 minutes.",
      "The result is a fragrant, non-greasy biryani with distinct grains."
    ]
  },
  {
    id: "galouti-kebab",
    menuCategory: "Starters & Appetizers",
    name: "Galouti Kebab",
    description: "The 'melt-in-the-mouth' kebabs originally made for a toothless Nawab, featuring finely minced meat and over 150 spices.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 380,
    popularity: 0.92,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_mince", name: "Finely Minced Mutton", qty: "500g", price: 300, available: true },
      { id: "raw_papaya", name: "Raw Papaya Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "kebab_masala", name: "Awadhi Kebab Masala", qty: "2 tbsp", price: 25, available: true },
      { id: "gram_flour", name: "Roasted Besan", qty: "2 tbsp", price: 5, available: true },
      { id: "ghee", name: "Ghee for frying", qty: "1/4 cup", price: 40, available: false }
    ],
    steps: [
      "Marinate mince with papaya paste for at least 4 hours to tenderize.",
      "Mix in roasted besan, kebab masala, and salt.",
      "Finely grind the mixture until it reaches a paste-like consistency.",
      "Form small flat patties using greased palms.",
      "Shallow fry on a heavy griddle with ghee until browned on both sides.",
      "Serve with mint chutney and onion rings."
    ]
  },
  {
    id: "awadhi-mutton-korma",
    menuCategory: "Curries & Gravies",
    name: "Awadhi Mutton Korma",
    description: "A rich and silky mutton curry from the royal kitchens of Lucknow, focusing on nut pastes and slow cooking.",
    type: "Non-Vegetarian",
    time: 75,
    servings: 4,
    difficulty: "Hard",
    cost: 430,
    popularity: 0.88,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "cashews", name: "Cashew Paste", qty: "1/4 cup", price: 40, available: true },
      { id: "yogurt", name: "Whisked Yogurt", qty: "1/2 cup", price: 15, available: true },
      { id: "onion_paste", name: "Brown Onion Paste", qty: "1/2 cup", price: 10, available: true },
      { id: "kewra", name: "Kewra Water", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt and whole spices until 80% tender.",
      "Sauté onion paste and ginger-garlic paste in ghee.",
      "Stir in yogurt and cashew paste; cook until oil separates.",
      "Add cooked mutton and its stock.",
      "Simmer for 15 minutes, add kewra water, and let it rest.",
      "The gravy should be smooth, thick, and highly aromatic."
    ]
  },
  {
    id: "nihari-up",
    menuCategory: "Curries & Gravies",
    name: "Nihari",
    description: "A slow-cooked, spicy mutton stew enriched with bone marrow, traditionally eaten as a breakfast dish in Lucknow.",
    type: "Non-Vegetarian",
    time: 150,
    servings: 6,
    difficulty: "Hard",
    cost: 450,
    popularity: 0.85,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_shanks", name: "Mutton Shanks (with marrow)", qty: "750g", price: 400, available: true },
      { id: "wheat_flour", name: "Wheat Flour (Atta)", qty: "2 tbsp", price: 5, available: true },
      { id: "nihari_masala", name: "Nihari Spice Blend", qty: "3 tbsp", price: 20, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "handful", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "1/4 cup", price: 15, available: false }
    ],
    steps: [
      "Sear mutton shanks in ghee with ginger-garlic paste.",
      "Add Nihari masala and salt; sauté briefly.",
      "Add 4-5 cups of water and slow cook for 3-4 hours (or pressure cook for 20 whistles).",
      "Dissolve atta in a little water and stir into the stew to thicken.",
      "Simmer for 20 minutes until the gravy reaches a silky consistency.",
      "Serve with ginger, green chili, and lemon."
    ]
  },
  {
    id: "tunday-kebab",
    menuCategory: "Starters & Appetizers",
    name: "Tunday Kebab",
    description: "Smoky and soft minced meat patties, a world-famous street food staple from the lanes of Lucknow.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Hard",
    cost: 380,
    popularity: 0.91,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "minced_meat", name: "Finely Minced Meat", qty: "500g", price: 300, available: true },
      { id: "papaya_paste", name: "Raw Papaya Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "charcoal", name: "Small Charcoal Piece", qty: "1", price: 5, available: true },
      { id: "cloves", name: "Cloves and Cardamom", qty: "small amount", price: 20, available: true },
      { id: "oil", name: "Frying Oil", qty: "1/2 cup", price: 45, available: false }
    ],
    steps: [
      "Marinate minced meat with papaya paste and salt for 4 hours.",
      "Grind the marinated meat with a special blend of warm spices.",
      "Place the meat in a bowl, place a burning charcoal in a small metal cup in the center, and drizzle ghee over the coal.",
      "Cover tightly for 10 minutes to infuse smoky flavor.",
      "Form small patties and pan-fry until golden brown.",
      "Serve with Sheermal or Roomali Roti."
    ]
  },
  {
    id: "chicken-rezala-lucknowi",
    menuCategory: "Curries & Gravies",
    name: "Chicken Rezala Lucknowi",
    description: "A white, fragrant, and mild chicken curry made with a base of yogurt, cashews, and poppy seeds.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.76,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken pieces", qty: "500g", price: 160, available: true },
      { id: "yogurt", name: "Thick Whisked Curd", qty: "1 cup", price: 20, available: true },
      { id: "poppy_seeds", name: "Poppy Seed Paste", qty: "1 tbsp", price: 20, available: true },
      { id: "dry_red_chili", name: "Whole Red Chilies (for looks)", qty: "4", price: 5, available: true },
      { id: "mace", name: "Mace and Nutmeg", qty: "pinch", price: 95, available: false }
    ],
    steps: [
      "Marinate chicken in curd and ginger-garlic paste for 1 hour.",
      "Heat ghee and temper with whole cardamom, cloves, and whole red chilies.",
      "Add chicken and sauté until seared.",
      "Stir in cashew and poppy seed paste.",
      "Cook on low heat until chicken is tender; do not brown the chicken.",
      "The gravy should be smooth, white, and mildly sweet-spicy."
    ]
  },
  {
    id: "kakori-kebab",
    menuCategory: "Starters & Appetizers",
    name: "Kakori Kebab",
    description: "Extremely delicate lamb kebabs seasoned with cloves and rose petals, grilled on skewers.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.84,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "lamb_mince", name: "Fine Lamb Mince", qty: "500g", price: 350, available: true },
      { id: "fat", name: "Mutton Fat (kidney fat)", qty: "50g", price: 10, available: true },
      { id: "rose_petals", name: "Dried Rose Petals", qty: "1 tsp", price: 15, available: true },
      { id: "cloves", name: "Cloves (ground)", qty: "1/2 tsp", price: 5, available: true },
      { id: "skewers", name: "Metal Skewers", qty: "as needed", price: 20, available: false }
    ],
    steps: [
      "Mix lamb mince with fat, rose petals, and spices; grind multiple times into a fine paste.",
      "The mixture must be almost like a soft dough.",
      "Thread small portions onto metal skewers, shaping them into thin cylinders.",
      "Grill over charcoal or under a broiler, basting with ghee.",
      "The kebabs are ready when they are lightly charred and extremely soft.",
      "Serve with Ulte Tawe ka Paratha."
    ]
  },
  {
    id: "mutton-rara-up",
    menuCategory: "Curries & Gravies",
    name: "Mutton Rara",
    description: "A unique combination where mutton chunks and mutton mince are cooked together in a rich, spiced gravy.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 410,
    popularity: 0.82,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_pieces", name: "Mutton Chunks", qty: "400g", price: 280, available: true },
      { id: "mutton_mince", name: "Mutton Keema", qty: "100g", price: 70, available: true },
      { id: "yogurt", name: "Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "tomato", name: "Tomato Puree", qty: "1/2 cup", price: 10, available: true },
      { id: "oil", name: "Mustard Oil", qty: "3 tbsp", price: 35, available: false }
    ],
    steps: [
      "Sauté mutton chunks in oil until seared; remove and set aside.",
      "In the same pan, fry onion paste and ginger-garlic paste until brown.",
      "Add the mutton mince (keema) and roast on high heat.",
      "Stir in tomato puree and spices; cook until oil separates.",
      "Add back the mutton chunks and enough water.",
      "Slow cook until chunks are tender and the minced meat forms a thick, granular gravy."
    ]
  },
  {
    id: "chicken-korma-awadhi",
    menuCategory: "Curries & Gravies",
    name: "Chicken Korma Awadhi",
    description: "A royal chicken korma from the heart of Lucknow, mildly spiced with a rich, nutty gravy.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.78,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "almonds", name: "Blanched Almonds (paste)", qty: "2 tbsp", price: 30, available: true },
      { id: "onion_paste", name: "Boiled Onion Paste", qty: "1/2 cup", price: 10, available: true },
      { id: "cardamom", name: "Green Cardamom Powder", qty: "1/2 tsp", price: 15, available: true },
      { id: "cream", name: "Fresh Cream", qty: "2 tbsp", price: 95, available: false }
    ],
    steps: [
      "Sauté whole spices and boiled onion paste in ghee.",
      "Add chicken and sear on high heat.",
      "Whisk yogurt with almond paste and stir into the chicken.",
      "Simmer on low heat until chicken is tender.",
      "Finish with cardamom powder and a touch of cream.",
      "Serve with fluffy Naan."
    ]
  },
  {
    id: "bhuna-gosht-up",
    menuCategory: "Curries & Gravies",
    name: "Bhuna Gosht UP Style",
    description: "Deeply roasted mutton pieces cooked in their own juices with a coarse, spicy masala base.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.81,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton (small pieces)", qty: "500g", price: 350, available: true },
      { id: "shallots", name: "Small Onions", qty: "1 cup", price: 20, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "peppercorns", name: "Whole Black Pepper", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "4 tbsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook mutton with ginger-garlic paste until tender.",
      "Heat mustard oil and sauté shallots until dark brown.",
      "Add the cooked mutton (drain excess stock) and spices.",
      "Stir-fry on high heat continuously (bhunao) for 15 minutes.",
      "The gravy should dry up and coat the meat like a thick, dark glaze.",
      "Garnish with lots of ginger juliennes."
    ]
  },
  {
    id: "egg-curry-lucknowi",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry Lucknowi Style",
    description: "Hard-boiled eggs simmered in a rich and aromatic onion-cashew gravy, reflecting the Awadhi style of breakfast.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Medium",
    cost: 120,
    popularity: 0.74,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 30, available: true },
      { id: "cashews", name: "Cashew Nut Paste", qty: "2 tbsp", price: 25, available: true },
      { id: "onion_paste", name: "Fried Onion Paste", qty: "1/4 cup", price: 10, available: true },
      { id: "whole_spices", name: "Cloves, Cardamom", qty: "small amount", price: 10, available: true },
      { id: "oil", name: "Ghee/Oil", qty: "2 tbsp", price: 45, available: false }
    ],
    steps: [
      "Prick boiled eggs and lightly sauté them in ghee.",
      "In the same pan, sauté fried onion paste and ginger-garlic paste.",
      "Stir in cashew paste and a little yogurt.",
      "Add mild spices and half a cup of water; simmer until thick.",
      "Add the boiled eggs and warm through.",
      "Finish with a drop of kewra water (optional)."
    ]
  },
  {
    id: "murgh-musallam-lucknow",
    menuCategory: "Curries & Gravies",
    name: "Murgh Musallam",
    description: "A whole roasted chicken marinated in royal spices and cooked in a rich, nut-based gravy with hard-boiled eggs.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 350,
    popularity: 0.83,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "whole_chicken", name: "Whole Chicken", qty: "800g", price: 200, available: true },
      { id: "almond_cashew", name: "Almond-Cashew Paste", qty: "1/2 cup", price: 80, available: true },
      { id: "eggs", name: "Boiled Eggs (for garnish)", qty: "2", price: 10, available: true },
      { id: "saffron", name: "Saffron strands", qty: "pinch", price: 50, available: true },
      { id: "ghee", name: "Pure Ghee", qty: "1/4 cup", price: 10, available: false }
    ],
    steps: [
      "Marinate whole chicken in yogurt and a special spice rub for 4 hours.",
      "Sauté the chicken in ghee until the outer skin is lightly browned.",
      "Add almond-cashew paste and saffron milk.",
      "Slow cook the chicken, basting frequently with its own juices.",
      "Place hard-boiled eggs inside or around the chicken just before serving.",
      "Serve as a grand centerpiece for a royal meal."
    ]
  },
  {
    id: "mutton-do-pyaza-up",
    menuCategory: "Curries & Gravies",
    name: "Mutton Do Pyaza UP Style",
    description: "A savory mutton curry featuring onions added at two different stages to provide both sweetness and texture.",
    type: "Non-Vegetarian",
    time: 55,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.79,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton chunks", qty: "500g", price: 350, available: true },
      { id: "onions_paste", name: "Onions (for paste)", qty: "2 large", price: 15, available: true },
      { id: "onions_cubed", name: "Onions (large cubes)", qty: "1 large", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Cooking Oil", qty: "3 tbsp", price: 15, available: false }
    ],
    steps: [
      "Sauté ground onion paste until golden brown.",
      "Add mutton and ginger-garlic paste; sauté until seared.",
      "Add spices and a cup of water; pressure cook until mutton is tender.",
      "Stir in the cubed onions and simmer for 5-7 minutes.",
      "The cubed onions should be soft but still hold their shape.",
      "Finish with fresh coriander."
    ]
  },
  {
    id: "chicken-chaap-lucknowi",
    menuCategory: "Protein Specialties",
    name: "Chicken Chaap Lucknowi",
    description: "Pan-roasted spiced chicken pieces slow-cooked in a nutty and oily gravy, a specialty of Lucknowi Nawabi cuisine.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 290,
    popularity: 0.71,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken_pieces", name: "Chicken Leg/Thigh", qty: "500g", price: 160, available: true },
      { id: "cashew_paste", name: "Cashew Paste", qty: "1/4 cup", price: 60, available: true },
      { id: "yogurt", name: "Thick Yogurt", qty: "1/2 cup", price: 15, available: true },
      { id: "mace", name: "Mace Powder (Javitri)", qty: "1/2 tsp", price: 20, available: true },
      { id: "oil", name: "Ghee/Oil for roasting", qty: "1/4 cup", price: 35, available: false }
    ],
    steps: [
      "Marinate chicken in cashew paste, yogurt, and mace powder for 2 hours.",
      "Heat ghee in a flat pan and place chicken pieces along with the marinade.",
      "Slowly roast on low heat, flipping occasionally.",
      "The gravy will dry up and form a thick, oily, spicy coating.",
      "Cook until the chicken is tender and slightly charred.",
      "Serve hot with Biryani or Roti."
    ]
  },
  {
    id: "machli-amritsari-up",
    menuCategory: "Curries & Gravies",
    name: "Machli Amritsari UP Style",
    description: "A popular fried fish delicacy from the northern belt, marinated with carom seeds and gram flour.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 3,
    difficulty: "Medium",
    cost: 320,
    popularity: 0.82,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish_slices", name: "River Fish (Rohu/Catla)", qty: "500g", price: 220, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "3 tbsp", price: 10, available: true },
      { id: "ajwain", name: "Carom Seeds (Ajwain)", qty: "1 tsp", price: 5, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 75, available: false }
    ],
    steps: [
      "Make a thick batter of besan, ajwain, salt, and spices.",
      "Marinate fish slices in the batter for 20 minutes.",
      "Heat oil in a kadai.",
      "Deep fry the fish pieces until golden brown and extremely crispy.",
      "Serve hot with lemon wedges and green chutney."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "kashi-chaat",
    menuCategory: "Snacks & Street Food",
    name: "Kashi Chaat",
    description: "The iconic street chaat of Varanasi—spiced mashed potatoes topped with chickpeas, chutneys, and a signature cumin water syrup.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.9,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "potato", name: "Boiled Potatoes", qty: "4 large", price: 15, available: true },
      { id: "chickpeas", name: "Boiled Chickpeas", qty: "1/2 cup", price: 10, available: true },
      { id: "tamarind", name: "Sweet Tamarind Chutney", qty: "1/4 cup", price: 15, available: true },
      { id: "cumin_syrup", name: "Jeera-Gud Syrup", qty: "2 tbsp", price: 10, available: true },
      { id: "sev", name: "Nylon Sev", qty: "1/2 cup", price: 10, available: false }
    ],
    steps: [
      "Mash the boiled potatoes coarsely.",
      "In a bowl, mix potatoes, chickpeas, salt, and chaat masala.",
      "Pour the warm Jeera-Gud (cumin-jaggery) syrup over the top.",
      "Add sweet tamarind chutney and spicy green chutney.",
      "Garnish with sev and fresh coriander; serve immediately."
    ]
  },
  {
    id: "bedmi-puri-sabzi",
    menuCategory: "Breads",
    name: "Bedmi Puri with Aloo Sabzi",
    description: "Deep-fried, lentil-stuffed whole wheat puris served with a spicy and thin potato curry, a classic UP breakfast.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.88,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian", "Breakfast"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "urad_dal", name: "Soaked Urad Dal (paste)", qty: "1/2 cup", price: 15, available: true },
      { id: "potato", name: "Potatoes (cubed)", qty: "3 large", price: 15, available: true },
      { id: "oil", name: "Oil for frying", qty: "1 cup", price: 20, available: true },
      { id: "fennel", name: "Fennel Seeds", qty: "1 tsp", price: 10, available: false }
    ],
    steps: [
      "Mix wheat flour with urad dal paste, spices, and a little oil; knead into a stiff dough.",
      "Prepare a thin aloo sabzi by sautéing potatoes with ginger, green chilies, and lots of amchur.",
      "Roll out medium-sized puris from the dough.",
      "Deep fry in hot oil until they puff up and turn golden-brown.",
      "Serve the crispy puris with hot aloo sabzi."
    ]
  },
  {
    id: "nimona-up",
    menuCategory: "Curries & Gravies",
    name: "Nimona",
    description: "A winter delicacy from Uttar Pradesh made with a coarse puree of fresh green peas and potatoes.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.82,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "green_peas", name: "Fresh Green Peas", qty: "2 cups", price: 30, available: true },
      { id: "potato", name: "Potatoes (fried cubes)", qty: "2", price: 10, available: true },
      { id: "ginger_chili", name: "Ginger-Green Chili Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 20, available: true },
      { id: "coriander", name: "Coriander Paste", qty: "1/4 cup", price: 10, available: false }
    ],
    steps: [
      "Coarsely grind the fresh peas into a granular paste.",
      "Sauté the pea paste in mustard oil until it darkens and loses its raw smell.",
      "In another pan, sauté ginger-chili paste and coriander paste.",
      "Add fried potato cubes and the roasted pea paste.",
      "Add water and simmer for 10 minutes until the flavors integrate.",
      "Serve with hot steamed rice."
    ]
  },
  {
    id: "dubki-wale-aloo",
    menuCategory: "Curries & Gravies",
    name: "Dubki Wale Aloo",
    description: "Small, boiled potatoes simmered in a tangy and thin yogurt-spiced gravy, a specialty of Mathura.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.80,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "baby_potato", name: "Baby Potatoes (boiled)", qty: "500g", price: 20, available: true },
      { id: "yogurt", name: "Curd", qty: "1/2 cup", price: 10, available: true },
      { id: "amchur", name: "Dry Mango Powder", qty: "1 tsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Peel boiled potatoes and prick them with a fork.",
      "Sauté ginger and green chilies in mustard oil.",
      "Stir in yogurt and spices; cook until it froths.",
      "Add potatoes and 2 cups of water.",
      "Simmer for 15 minutes until the gravy is thin but flavorful.",
      "Serve hot with Kachoris."
    ]
  },
  {
    id: "kaddu-ki-sabzi-up",
    menuCategory: "Dry & Stir-Fried",
    name: "Kaddu Ki Sabzi UP Style",
    description: "A tangy and sweet pumpkin curry flavored with fenugreek seeds and dried mango powder.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.76,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "pumpkin", name: "Yellow Pumpkin (cubed)", qty: "500g", price: 25, available: true },
      { id: "fenugreek", name: "Methi Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "amchur", name: "Amchur (Mango Powder)", qty: "1 tsp", price: 10, available: true },
      { id: "sugar", name: "Sugar or Jaggery", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Heat oil and temper with methi seeds and a pinch of hing.",
      "Add pumpkin cubes, turmeric, and chili powder.",
      "Cover and cook on low heat until the pumpkin is soft and mushy.",
      "Add amchur and sugar; mix well.",
      "Sauté for 2 more minutes until it reaches a thick, jammy consistency.",
      "Serve with Poori."
    ]
  },
  {
    id: "arhar-dal-banarasi",
    menuCategory: "Curries & Gravies",
    name: "Arhar Dal Banarasi",
    description: "Simple yet aromatic pigeon pea dal tempered with cumin, garlic, and dried whole red chilies in ghee.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.85,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "toor_dal", name: "Arhar (Toor) Dal", qty: "1 cup", price: 30, available: true },
      { id: "garlic", name: "Garlic cloves (minced)", qty: "6", price: 5, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "ghee", name: "Pure Ghee", qty: "2 tbsp", price: 10, available: true },
      { id: "chili", name: "Dry Red Chili", qty: "2", price: 5, available: false }
    ],
    steps: [
      "Pressure cook dal with turmeric and salt until mushy.",
      "Whisk well to a smooth consistency.",
      "Heat ghee in a small pan; add cumin and garlic.",
      "Once garlic turns golden-brown, add red chilies and hing.",
      "Pour the tempering over the dal and cover immediately.",
      "Serve with steamed rice."
    ]
  },
  {
    id: "bharwa-baingan-up",
    menuCategory: "Curries & Gravies",
    name: "Bharwa Baingan UP Style",
    description: "Small brinjals stuffed with a dry-roasted spice mix of fennel, coriander, and amchur.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.72,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "brinjal", name: "Small Purple Brinjals", qty: "8", price: 30, available: true },
      { id: "fennel", name: "Fennel Powder (Saunf)", qty: "2 tbsp", price: 15, available: true },
      { id: "coriander_powder", name: "Coriander Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "dry_mango", name: "Amchur Powder", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Mix all dry spice powders with a little oil and salt to make a stuffing.",
      "Slit brinjals into four quarters (stem intact) and stuff with the masala.",
      "Heat oil in a flat pan and place the brinjals inside.",
      "Cover and cook on low heat, turning occasionally, until soft and charred.",
      "The spices should form a crusty layer inside the brinjal."
    ]
  },
  {
    id: "lauki-kofta-up",
    menuCategory: "Protein Specialties",
    name: "Lauki Kofta",
    description: "Soft bottle gourd dumplings deep-fried and simmered in a creamy onion-tomato gravy.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.79,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "lauki", name: "Bottle Gourd (grated)", qty: "1 large", price: 20, available: true },
      { id: "besan", name: "Besan (Gram Flour)", qty: "1/2 cup", price: 15, available: true },
      { id: "tomato", name: "Tomato (puree)", qty: "1/2 cup", price: 10, available: true },
      { id: "cream", name: "Cream (optional)", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 35, available: false }
    ],
    steps: [
      "Squeeze excess water from grated lauki; mix with besan and spices to form a batter.",
      "Deep fry small spoonfuls of the batter until golden (koftas).",
      "Prepare a standard onion-tomato gravy.",
      "Stir in a little cream for richness.",
      "Add the koftas just before serving and simmer for 2 minutes."
    ]
  },
  {
    id: "petha-ki-sabzi-up",
    menuCategory: "Desserts & Sweets",
    name: "Petha ki Sabzi",
    description: "A mildly sweet and savory curry made with ash gourd, typical of the Braj region.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.68,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "ash_gourd", name: "White Ash Gourd (Petha)", qty: "500g", price: 25, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/2 tsp", price: 5, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Groundnut Oil", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Peel and cube the ash gourd.",
      "Heat oil and temper with cumin and ginger.",
      "Add gourd cubes, salt, and turmeric.",
      "Cover and cook until the gourd is tender and transparent.",
      "Add a pinch of sugar for a sweet-savory balance."
    ]
  },
  {
    id: "til-chutney-sabzi",
    menuCategory: "Sides & Accompaniments",
    name: "Til Ki Chutney with Sabzi",
    description: "A rustic combination of mixed vegetable stir-fry served with a pungent and nutty sesame seed chutney.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.70,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "sesame", name: "White Sesame Seeds", qty: "1/4 cup", price: 15, available: true },
      { id: "mixed_veg", name: "Seasonal Mixed Veg", qty: "2 cups", price: 30, available: true },
      { id: "garlic", name: "Garlic", qty: "4 cloves", price: 5, available: true },
      { id: "chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Dry roast sesame seeds; grind with garlic, chili, and salt into a thick chutney.",
      "Sauté mixed vegetables with simple spices in mustard oil.",
      "Serve the stir-fry with a generous dollop of sesame chutney on the side."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "banarasi-chaat",
    menuCategory: "Snacks & Street Food",
    name: "Banarasi Chaat",
    description: "Classic Kashi street food—tangy potato mash with crispy papdi, chickpeas, and a distinct Jeera syrup.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.94,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "potato", name: "Boiled Potato", qty: "4", price: 15, available: true },
      { id: "papdi", name: "Crispy Papdi", qty: "1 cup", price: 15, available: true },
      { id: "tamarind", name: "Tamarind Chutney", qty: "1/4 cup", price: 15, available: true },
      { id: "jeera_syrup", name: "Jeera-Gud Syrup", qty: "2 tbsp", price: 10, available: true },
      { id: "sev", name: "Nylon Sev", qty: "1/4 cup", price: 5, available: false }
    ],
    steps: [
      "Mash potatoes and mix with boiled chickpeas.",
      "Arrange on a plate; top with Jeera syrup and tamarind chutney.",
      "Add a splash of spicy green chutney.",
      "Top with crushed papdi and nylon sev.",
      "Serve as a classic Varanasi street snack."
    ]
  },
  {
    id: "agra-petha",
    menuCategory: "Desserts & Sweets",
    name: "Agra Petha",
    description: "The world-famous translucent sweet from Agra, made from ash gourd chunks soaked in sugar syrup.",
    type: "Vegetarian",
    time: 40,
    servings: 6,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.95,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "ash_gourd", name: "Ash Gourd (firm)", qty: "1 kg", price: 40, available: true },
      { id: "sugar", name: "Sugar", qty: "500g", price: 30, available: true },
      { id: "lime", name: "Slaked Lime (Chuna)", qty: "1 tsp", price: 5, available: true },
      { id: "rose_water", name: "Rose Water", qty: "1 tsp", price: 10, available: true },
      { id: "water", name: "Water", qty: "as needed", price: 5, available: false }
    ],
    steps: [
      "Peel gourd, remove seeds, and cut into cubes; soak in lime water for 4 hours.",
      "Wash cubes multiple times to remove lime.",
      "Boil cubes in water until they become transparent.",
      "Cook the boiled chunks in a thick sugar syrup for 30 minutes.",
      "Allow to soak in the syrup for 2 hours, then dry them on a tray.",
      "Store in an airtight container."
    ]
  },
  {
    id: "kachori-aloo-up",
    menuCategory: "Snacks & Street Food",
    name: "Kachori with Aloo Sabzi",
    description: "Flaky, deep-fried pastries stuffed with a spicy lentil mixture, served with a fiery potato gravy.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.88,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "moong_dal", name: "Moong Dal (soaked)", qty: "1/2 cup", price: 15, available: true },
      { id: "potato", name: "Potatoes (cubed)", qty: "2 large", price: 10, available: true },
      { id: "oil", name: "Oil for frying", qty: "1 cup", price: 30, available: false }
    ],
    steps: [
      "Prepare a dry-roasted moong dal stuffing with spices.",
      "Knead a flaky dough with flour and oil.",
      "Stuff small portions of dough with the dal mixture and flatten into discs.",
      "Deep fry until golden and extremely crispy.",
      "Serve hot with a thin, spicy aloo sabzi."
    ]
  },
  {
    id: "malaiyyo",
    menuCategory: "Snacks & Street Food",
    name: "Malaiyyo",
    description: "The delicate, airy milk foam dessert from the narrow lanes of Varanasi, flavored with saffron and cardamom.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.91,
    tags: ["Uttar Pradesh", "North Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "full_milk", name: "Full Cream Milk", qty: "1L", price: 60, available: true },
      { id: "sugar", name: "Powdered Sugar", qty: "1/4 cup", price: 10, available: true },
      { id: "saffron", name: "Saffron strands", qty: "pinch", price: 25, available: true },
      { id: "cardamom", name: "Cardamom Powder", qty: "1/4 tsp", price: 5, available: false }
    ],
    steps: [
      "Boil milk and reduce it slightly; let it cool overnight.",
      "Whisk the chilled milk vigorously (traditionally done under the early morning dew).",
      "As the foam forms, collect it gently in a separate bowl.",
      "Mix powdered sugar, saffron, and cardamom into the collected foam.",
      "Serve chilled as an airy, cloud-like dessert."
    ]
  },
  {
    id: "chicken-tikka-lucknowi",
    menuCategory: "Starters & Appetizers",
    name: "Chicken Tikka Lucknowi",
    description: "Succulent boneless chicken marinated in a cream and nut-based Awadhi masala, char-grilled to perfection.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.86,
    tags: ["Uttar Pradesh", "North Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "chicken_breast", name: "Chicken (boneless cubes)", qty: "400g", price: 140, available: true },
      { id: "cream", name: "Fresh Cream", qty: "2 tbsp", price: 20, available: true },
      { id: "cashews", name: "Cashew Paste", qty: "1 tbsp", price: 15, available: true },
      { id: "spices", name: "Lucknowi Tikka Masala", qty: "2 tbsp", price: 75, available: false }
    ],
    steps: [
      "Marinate chicken in cream, cashew paste, and spices for 1 hour.",
      "Thread pieces onto skewers.",
      "Grill or pan-fry with a little ghee until charred and cooked through.",
      "Baste with butter once while cooking.",
      "Serve as a regal non-veg appetizer."
    ]
  }
];
