import { Recipe } from './types';

export const delhiRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "butter-chicken-purani-dilli",
    menuCategory: "Curries & Gravies",
    name: "Butter Chicken Purani Dilli Style",
    description: "Tandoor-charred chicken finished in a rich tomato-butter gravy, inspired by the original recipe from the heart of Old Delhi.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.90,
    tags: ["Delhi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (tandoori pieces)", qty: "500g", price: 160, available: true },
      { id: "butter", name: "White Butter", qty: "4 tbsp", price: 40, available: true },
      { id: "tomato_puree", name: "Fresh Tomato Puree", qty: "2 cups", price: 20, available: true },
      { id: "cream", name: "Fresh Cream", qty: "1/2 cup", price: 30, available: true },
      { id: "kasuri_methi", name: "Dried Fenugreek Leaves", qty: "1 tsp", price: 5, available: false }
    ],
    steps: [
      "Grill or tandoor-marinated chicken pieces until charred and 80% cooked.",
      "Sauté tomato puree in butter until it reduces and thickens.",
      "Add ginger-garlic paste, red chili powder, and salt; cook for 5 minutes.",
      "Add the chicken pieces and a splash of water; simmer until the chicken is tender.",
      "Finish with cream and crushed kasuri methi; the gravy should be thick, orange, and buttery."
    ]
  },
  {
    id: "mutton-korma-delhi-style",
    menuCategory: "Curries & Gravies",
    name: "Mutton Korma Delhi Style",
    description: "A rich and nutty slow-cooked mutton korma from the Mughlai court traditions of Old Delhi, featuring a smooth, golden gravy.",
    type: "Non-Vegetarian",
    time: 75,
    servings: 4,
    difficulty: "Hard",
    cost: 430,
    popularity: 0.88,
    tags: ["Delhi", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "mutton", name: "Mutton (on the bone)", qty: "500g", price: 350, available: true },
      { id: "fried_onions", name: "Brown Fried Onions (Birista)", qty: "1 cup", price: 10, available: true },
      { id: "cashew_paste", name: "Cashew Nut Paste", qty: "2 tbsp", price: 30, available: true },
      { id: "yogurt", name: "Thick Whisked Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "kewra", name: "Kewra Water", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook mutton with whole spices (cardamom, cloves, bay leaf) until tender.",
      "Sauté ginger-garlic paste and the brown onion paste in ghee.",
      "Stir in whisked yogurt and cashew paste; cook on low heat until the oil separates.",
      "Add the cooked mutton and stock.",
      "Simmer for 15 minutes, add a drop of kewra water, and let it rest before serving."
    ]
  },
  {
    id: "chicken-changezi",
    menuCategory: "Curries & Gravies",
    name: "Chicken Changezi",
    description: "A fiery and creamy tomato-cashew chicken curry with a distinct reddish-brown color, a favorite in Delhi's Mughlai restaurants.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.86,
    tags: ["Delhi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "milk", name: "Milk", qty: "1/2 cup", price: 5, available: true },
      { id: "cream", name: "Fresh Cream", qty: "2 tbsp", price: 20, available: true },
      { id: "tomato", name: "Tomato (puree)", qty: "1 cup", price: 15, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Sauté chicken pieces in oil until golden; set aside.",
      "Fry onion paste and ginger-garlic paste until brown.",
      "Add tomato puree, red chili powder, and coriander powder; cook until oil separates.",
      "Stir in milk and cream to create a rich, silky texture.",
      "Add chicken and simmer for 15 minutes until tender and the gravy is thick."
    ]
  },
  {
    id: "mutton-nihari-delhi-style",
    menuCategory: "Curries & Gravies",
    name: "Mutton Nihari Delhi Style",
    description: "Slow-simmered spiced mutton stew from the lanes of Old Delhi, known for its silky texture and deep flavors.",
    type: "Non-Vegetarian",
    time: 150,
    servings: 6,
    difficulty: "Hard",
    cost: 450,
    popularity: 0.89,
    tags: ["Delhi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_shank", name: "Mutton Nalli (Shank)", qty: "750g", price: 380, available: true },
      { id: "nihari_masala", name: "Nihari Spice Mix", qty: "3 tbsp", price: 20, available: true },
      { id: "wheat_flour", name: "Atta (Wheat Flour)", qty: "2 tbsp", price: 5, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "1/2 cup", price: 40, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "handful", price: 10, available: false }
    ],
    steps: [
      "Sear mutton shanks in ghee until brown.",
      "Add Nihari masala and salt; sauté briefly.",
      "Add 5 cups of water and slow cook for 3-4 hours (or pressure cook for 15 whistles).",
      "Make a slurry of wheat flour and water; stir into the stew to thicken.",
      "Simmer for another 20 minutes until the gravy is velvety.",
      "Garnish with ginger, green chili, and lemon juice."
    ]
  },
  {
    id: "chicken-seekh-kabab-delhi",
    menuCategory: "Starters & Appetizers",
    name: "Chicken Seekh Kabab Delhi",
    description: "Hand-pounded minced chicken flavored with fresh herbs and spices, grilled on skewers to a perfect char.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.84,
    tags: ["Delhi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken_mince", name: "Fine Chicken Mince", qty: "500g", price: 150, available: true },
      { id: "onion", name: "Onion (finely chopped)", qty: "1", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies (minced)", qty: "3", price: 5, available: true },
      { id: "coriander", name: "Fresh Coriander", qty: "handful", price: 5, available: true },
      { id: "ghee", name: "Ghee for basting", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Mix chicken mince with onion, green chilies, coriander, and spices.",
      "Knead the mixture for 5 minutes until it becomes sticky.",
      "Wrap portions around metal skewers, shaping into long cylinders.",
      "Grill over charcoal or in a pan with ghee until charred and cooked through.",
      "Brush with butter and serve with mint chutney."
    ]
  },
  {
    id: "mutton-kebab-delhi-style",
    menuCategory: "Starters & Appetizers",
    name: "Mutton Kebab Delhi Style",
    description: "Smoky char-grilled minced mutton kebabs seasoned with a rich spice blend, a street food masterpiece.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Hard",
    cost: 380,
    popularity: 0.82,
    tags: ["Delhi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_mince", name: "Fine Mutton Mince", qty: "500g", price: 300, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "raw_papaya", name: "Raw Papaya Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "spices", name: "Kebab Spice Mix", qty: "2 tbsp", price: 15, available: true },
      { id: "oil", name: "Oil for basting", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Mix mutton mince with papaya paste and let rest for 2 hours.",
      "Add garlic paste and kebab spices; knead thoroughly.",
      "Form into small patties or skewers.",
      "Grill until well charred on the outside and juicy inside.",
      "Serve hot with roomali roti."
    ]
  },
  {
    id: "chicken-curry-chandni-chowk",
    menuCategory: "Curries & Gravies",
    name: "Chicken Curry Chandni Chowk Style",
    description: "Rustic and bold bazaar-style chicken curry with a focus on roasted spices and a medium-thin gravy.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.78,
    tags: ["Delhi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "onion", name: "Onions (sliced)", qty: "3 large", price: 15, available: true },
      { id: "tomato", name: "Tomato (chopped)", qty: "2", price: 10, available: true },
      { id: "spices", name: "Whole Garam Masala", qty: "various", price: 15, available: true },
      { id: "oil", name: "Mustard Oil", qty: "3 tbsp", price: 40, available: false }
    ],
    steps: [
      "Heat oil and sauté whole spices and onions until brown.",
      "Add ginger-garlic paste and chicken; sear until browned.",
      "Add tomatoes, chili powder, and turmeric; cook into a masala.",
      "Add 2 cups of water and simmer until the chicken is tender.",
      "The result is a spicy, rustic curry perfect with naan."
    ]
  },
  {
    id: "egg-curry-delhi-style",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry Delhi Style",
    description: "Hard-boiled eggs simmered in a rich, buttery onion-tomato gravy with a typical North Indian spice profile.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.81,
    tags: ["Delhi", "North Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 30, available: true },
      { id: "onion", name: "Onion (paste)", qty: "1/2 cup", price: 10, available: true },
      { id: "tomato", name: "Tomato (puree)", qty: "1/2 cup", price: 10, available: true },
      { id: "butter", name: "Butter", qty: "2 tbsp", price: 20, available: true },
      { id: "spices", name: "Kitchen King Masala", qty: "1 tsp", price: 45, available: false }
    ],
    steps: [
      "Fry boiled eggs in a little oil until the skin is slightly crispy.",
      "Sauté onion paste in butter until brown; add ginger-garlic paste.",
      "Add tomato puree and spices; cook until oil separates.",
      "Add a cup of water and simmer to form a thick gravy.",
      "Add the eggs and simmer for 5 minutes; finish with fresh coriander."
    ]
  },
  {
    id: "mutton-burra-kebab-delhi",
    menuCategory: "Starters & Appetizers",
    name: "Mutton Burra Kebab",
    description: "Twice-cooked mutton chops marinated in a punchy spice blend and char-grilled for a smoky finish.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.85,
    tags: ["Delhi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_chops", name: "Mutton Chops", qty: "500g", price: 350, available: true },
      { id: "yogurt", name: "Hung Curd", qty: "1/2 cup", price: 10, available: true },
      { id: "kashmiri_chili", name: "Red Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "ghee", name: "Ghee for basting", qty: "2 tbsp", price: 25, available: true },
      { id: "pepper", name: "Black Pepper", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook chops with ginger-garlic and salt until 70% done.",
      "Marinate chops in hung curd and spices for at least 2 hours.",
      "Grill over charcoal or in an oven at 200°C for 15 minutes.",
      "Baste with ghee frequently until charred and tender.",
      "Serve with lemon and spicy green chutney."
    ]
  },
  {
    id: "chicken-curry-karims",
    menuCategory: "Curries & Gravies",
    name: "Chicken Curry Karim's Style",
    description: "Mughlai-inspired slow-cooked chicken curry from the legendary kitchens of Delhi, featuring a rich, velvety gravy.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.87,
    tags: ["Delhi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "onion_paste", name: "Brown Onion Paste", qty: "1/2 cup", price: 10, available: true },
      { id: "yogurt", name: "Curd", qty: "1/2 cup", price: 10, available: true },
      { id: "mace", name: "Mace & Cardamom Powder", qty: "pinch", price: 50, available: true },
      { id: "oil", name: "Oil/Ghee", qty: "3 tbsp", price: 15, available: false }
    ],
    steps: [
      "Sauté ginger-garlic and onion paste in oil.",
      "Add chicken and sear on high heat.",
      "Stir in whisked yogurt and salt; cook on low heat.",
      "Add ground spices and a little water; cover and simmer.",
      "Cook until chicken is tender and the oil separates; the gravy should be thick and dark."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "chana-bhatura-delhi",
    menuCategory: "Breads",
    name: "Chana Bhatura Delhi Style",
    description: "Spiced chickpea curry (chole) served with large, fluffy deep-fried bread (bhatura), a quintessential Delhi street food.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.94,
    tags: ["Delhi", "North Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "chickpeas", name: "Kabuli Chana (boiled)", qty: "1.5 cups", price: 30, available: true },
      { id: "maida", name: "Refined Flour (for bhatura)", qty: "2 cups", price: 20, available: true },
      { id: "pomegranate", name: "Anardana (Dried Pomegranate)", qty: "1 tbsp", price: 15, available: true },
      { id: "tea_bag", name: "Tea Bag (for color)", qty: "1", price: 5, available: true },
      { id: "oil", name: "Oil for frying", qty: "1 cup", price: 10, available: false }
    ],
    steps: [
      "Pressure cook chickpeas with a tea bag to get that deep dark color.",
      "Prepare a tangy chole gravy with pomegranate powder and roasted spices.",
      "For bhatura, knead a soft dough with curd and oil; let it rest for 2 hours.",
      "Roll out large discs and deep fry in piping hot oil until they puff up.",
      "Serve with spicy chole and pickled onions."
    ]
  },
  {
    id: "paneer-lababdar-delhi",
    menuCategory: "Curries & Gravies",
    name: "Paneer Lababdar",
    description: "A restaurant favorite in Delhi—paneer cubes in a rich, creamy, and slightly tangy tomato-cashew gravy.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 120,
    popularity: 0.88,
    tags: ["Delhi", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "paneer", name: "Paneer cubes", qty: "250g", price: 100, available: true },
      { id: "tomato", name: "Tomato (puree)", qty: "1 cup", price: 20, available: true },
      { id: "cashew_paste", name: "Cashew Nut Paste", qty: "2 tbsp", price: 40, available: true },
      { id: "melon_seeds", name: "Melon Seeds (ground)", qty: "1 tbsp", price: 15, available: true },
      { id: "cream", name: "Fresh Cream", qty: "1/4 cup", price: 25, available: false }
    ],
    steps: [
      "Sauté onion and tomato puree until oil separates.",
      "Add cashew and melon seed paste; cook for 5 minutes.",
      "Stir in spices and a little sugar.",
      "Add paneer cubes and cream; simmer for 5 minutes.",
      "The result is a smooth, rich, and reddish gravy."
    ]
  },
  {
    id: "matar-paneer-delhi",
    menuCategory: "Curries & Gravies",
    name: "Matar Paneer Delhi Style",
    description: "Classic home-style curry with paneer and green peas in a spicy tomato-onion base.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.82,
    tags: ["Delhi", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "paneer", name: "Paneer cubes", qty: "200g", price: 80, available: true },
      { id: "peas", name: "Green Peas", qty: "1/2 cup", price: 15, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato (chopped)", qty: "2", price: 10, available: true },
      { id: "oil", name: "Cooking Oil", qty: "2 tbsp", price: 15, available: false }
    ],
    steps: [
      "Sauté onions until golden; add ginger-garlic paste.",
      "Add tomatoes and cook until soft.",
      "Stir in peas, paneer, and salt.",
      "Add water to reach desired consistency and simmer for 10 minutes.",
      "Garnish with coriander."
    ]
  },
  {
    id: "kadhi-chawal-delhi",
    menuCategory: "Rice & Biryani",
    name: "Kadhi Chawal Delhi Style",
    description: "Tangy yogurt and gram flour curry with soft onion fritters, served over steaming basmati rice.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.91,
    tags: ["Delhi", "North Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "curd", name: "Sour Curd", qty: "2 cups", price: 20, available: true },
      { id: "besan", name: "Besan (Gram Flour)", qty: "1 cup", price: 15, available: true },
      { id: "basmati_rice", name: "Basmati Rice", qty: "2 cups", price: 30, available: true },
      { id: "ginger", name: "Ginger (minced)", qty: "1 tsp", price: 5, available: true },
      { id: "chili", name: "Whole Red Chilies", qty: "2", price: 40, available: false }
    ],
    steps: [
      "Make a smooth batter of curd, half the besan, and 4 cups of water; boil until it thickens.",
      "Make onion pakoras with the rest of the besan and fry them.",
      "Add pakoras to the boiling kadhi.",
      "Prepare a tempering with mustard seeds, cumin, and whole red chilies in oil.",
      "Serve the hot kadhi with steamed rice."
    ]
  },
  {
    id: "dahi-bhalla-delhi",
    menuCategory: "Snacks & Street Food",
    name: "Dahi Bhalla",
    description: "Soft lentil dumplings soaked in creamy yogurt and topped with sweet and spicy chutneys.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.85,
    tags: ["Delhi", "North Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "urad_dal", name: "Urad Dal (soaked)", qty: "1 cup", price: 25, available: true },
      { id: "yogurt", name: "Thick Curd", qty: "2 cups", price: 30, available: true },
      { id: "tamarind_chutney", name: "Imli Chutney", qty: "1/4 cup", price: 15, available: true },
      { id: "spices", name: "Bhalla Masala", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 25, available: false }
    ],
    steps: [
      "Grind dal into a smooth fluffy batter; deep fry small portions into balls.",
      "Soak fried balls in warm water for 15 minutes, then squeeze gently.",
      "Place bhallas in a bowl and cover with whisked, sweetened curd.",
      "Add tamarind chutney and green chutney.",
      "Garnish with bhalla masala and pomegranate seeds."
    ]
  },
  {
    id: "baingan-bharta-delhi",
    menuCategory: "Dry & Stir-Fried",
    name: "Baingan Bharta Delhi Style",
    description: "Smoky fire-roasted mashed eggplant cooked with plenty of onions, tomatoes, and spices.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.80,
    tags: ["Delhi", "North Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "brinjal", name: "Large Brinjal", qty: "1", price: 15, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato (chopped)", qty: "2", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Roast brinjal over an open flame until skin is charred; peel and mash.",
      "Sauté onions and green chilies until brown.",
      "Add tomatoes and cook until soft.",
      "Add the mashed brinjal and salt; stir-fry for 10 minutes.",
      "Finish with fresh coriander."
    ]
  },
  {
    id: "chole-kulche-delhi",
    menuCategory: "Curries & Gravies",
    name: "Chole Kulche",
    description: "Spiced chickpea curry served with soft, leavened white bread (kulcha), a favorite budget meal in Delhi.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.92,
    tags: ["Delhi", "North Indian", "Vegetarian", "Spicy", "Street Food"],
    ingredients: [
      { id: "chickpeas", name: "Dried White Peas (Matar)", qty: "2 cups", price: 30, available: true },
      { id: "kulcha", name: "Kulcha Bread", qty: "4", price: 20, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "lemon", name: "Lemon", qty: "1", price: 5, available: true },
      { id: "oil", name: "Butter for kulcha", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Soak and boil dried white peas until soft.",
      "Mix with chopped onions, green chilies, spices, and lemon juice (no gravy).",
      "Heat kulchas on a tawa with a little butter.",
      "Serve the spicy matar in a bowl with hot kulchas on the side."
    ]
  },
  {
    id: "paneer-do-pyaza-delhi",
    menuCategory: "Curries & Gravies",
    name: "Paneer Do Pyaza Delhi Style",
    description: "Paneer curry featuring onions used in two different ways—one for the base and another as crunchy chunks.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 110,
    popularity: 0.81,
    tags: ["Delhi", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "paneer", name: "Paneer cubes", qty: "250g", price: 100, available: true },
      { id: "onion_paste", name: "Onion (for paste)", qty: "2", price: 10, available: true },
      { id: "onion_chunks", name: "Onion (cubed)", qty: "1 large", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Cooking Oil", qty: "2 tbsp", price: 15, available: false }
    ],
    steps: [
      "Sauté onion paste and ginger-garlic until brown.",
      "Add spices and a little water to make a thick masala.",
      "Stir in the cubed onions and sauté for 2 minutes.",
      "Add paneer cubes and salt; simmer for 5 minutes.",
      "The cubed onions should be soft but retain their shape."
    ]
  },
  {
    id: "aloo-tikki-curry-delhi",
    menuCategory: "Curries & Gravies",
    name: "Aloo Tikki Curry",
    description: "Pan-fried potato patties simmered in a spiced tomato-onion gravy, a fusion of chaat and main course.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.74,
    tags: ["Delhi", "North Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "potato", name: "Boiled Potatoes", qty: "4", price: 15, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "tomato", name: "Tomato (chopped)", qty: "1", price: 5, available: true },
      { id: "breadcrumbs", name: "Breadcrumbs (for tikki)", qty: "1/2 cup", price: 20, available: true },
      { id: "oil", name: "Oil for pan fry", qty: "1/4 cup", price: 30, available: false }
    ],
    steps: [
      "Make small flat patties from mashed potatoes and breadcrumbs; pan-fry until crispy.",
      "Prepare a standard onion-tomato gravy with basic spices.",
      "Just before serving, place the tikkis in the hot gravy.",
      "Simmer for 2 minutes and serve immediately so tikkis don't get mushy."
    ]
  },
  {
    id: "kashmiri-dum-aloo-delhi",
    menuCategory: "Curries & Gravies",
    name: "Kashmiri Dum Aloo Delhi Style",
    description: "Baby potatoes in a rich, red spiced gravy, adapted from the Kashmiri original with a local Delhi touch.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.76,
    tags: ["Delhi", "North Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "baby_potato", name: "Baby Potatoes (boiled)", qty: "500g", price: 20, available: true },
      { id: "curd", name: "Sour Curd", qty: "1/2 cup", price: 10, available: true },
      { id: "cashew_paste", name: "Cashew Paste", qty: "1 tbsp", price: 20, available: true },
      { id: "kashmiri_chili", name: "Red Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Prick baby potatoes and lightly fry them until golden.",
      "Sauté onion paste and spices in oil.",
      "Stir in whisked curd and cashew paste.",
      "Add fried potatoes and a little water.",
      "Cover and simmer on low heat (dum) for 15 minutes."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "delhi-aloo-chaat",
    menuCategory: "Snacks & Street Food",
    name: "Delhi Aloo Chaat",
    description: "Spiced fried potato cubes tossed with tangy chutneys and special Delhi chaat masala.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.94,
    tags: ["Delhi", "North Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "potato", name: "Potatoes (boiled cubes)", qty: "4", price: 15, available: true },
      { id: "tamarind_chutney", name: "Tamarind Chutney", qty: "2 tbsp", price: 10, available: true },
      { id: "chaat_masala", name: "Delhi Chaat Masala", qty: "1 tsp", price: 10, available: true },
      { id: "lemon", name: "Lemon", qty: "1/2", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 15, available: false }
    ],
    steps: [
      "Deep fry boiled potato cubes until they are dark golden and extremely crispy.",
      "Drain excess oil.",
      "Toss the hot potatoes with tamarind chutney, mint chutney, and chaat masala.",
      "Add a squeeze of lemon and serve immediately."
    ]
  },
  {
    id: "golgappe-delhi",
    menuCategory: "Snacks & Street Food",
    name: "Golgappe (Pani Puri Delhi Style)",
    description: "Crispy hollow wheat puris filled with spiced mashed potatoes and tangy, spicy water.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 60,
    popularity: 0.95,
    tags: ["Delhi", "North Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "puri", name: "Wheat Puris", qty: "20", price: 20, available: true },
      { id: "mint", name: "Fresh Mint (for water)", qty: "1 bunch", price: 10, available: true },
      { id: "boondi", name: "Gram Flour Boondi", qty: "1/4 cup", price: 10, available: true },
      { id: "potato", name: "Boiled Potato", qty: "1", price: 10, available: true },
      { id: "spices", name: "Pani Puri Masala", qty: "2 tbsp", price: 10, available: false }
    ],
    steps: [
      "Grind mint, ginger, and green chilies into a paste; mix with chilled water and spices to make 'Teekha Pani'.",
      "Mash boiled potatoes with black salt.",
      "Gently poke a hole in each puri.",
      "Fill with potato mixture and dip into the spicy water.",
      "Enjoy immediately for the best crunch."
    ]
  },
  {
    id: "daulat-ki-chaat-delhi",
    menuCategory: "Snacks & Street Food",
    name: "Daulat Ki Chaat",
    description: "A delicate, airy milk foam winter dessert from Chandni Chowk, flavored with saffron.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.91,
    tags: ["Delhi", "North Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "milk", name: "Full Cream Milk", qty: "1L", price: 60, available: true },
      { id: "sugar", name: "Powdered Sugar", qty: "1/4 cup", price: 10, available: true },
      { id: "saffron", name: "Saffron strands", qty: "pinch", price: 25, available: true },
      { id: "mawa", name: "Grated Mawa (optional)", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Boil milk and let it cool overnight.",
      "Whisk the chilled milk vigorously (traditionally done in the early morning dew).",
      "Collect the foam that forms on top and mix with powdered sugar and saffron.",
      "The result is a cloud-like, airy dessert.",
      "Garnish with silver leaf and serve chilled."
    ]
  },
  {
    id: "bedmi-puri-delhi",
    menuCategory: "Breakfast & Tiffin",
    name: "Bedmi Puri Delhi Style",
    description: "Spiced lentil-stuffed fried bread served with a tangy potato curry, a classic Delhi morning snack.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.88,
    tags: ["Delhi", "North Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "urad_dal", name: "Urad Dal Paste", qty: "1/2 cup", price: 15, available: true },
      { id: "potato", name: "Potato (cubed)", qty: "2", price: 10, available: true },
      { id: "fennel", name: "Fennel Powder", qty: "1 tsp", price: 30, available: false }
    ],
    steps: [
      "Mix flour with lentil paste and fennel seeds to make a stiff dough.",
      "Prepare a thin, spicy aloo sabzi with plenty of amchur.",
      "Roll out thick puris from the dough.",
      "Deep fry until they are golden and crispy.",
      "Serve the hot puris with tangy aloo sabzi."
    ]
  },
  {
    id: "chicken-tikka-delhi-snack",
    menuCategory: "Starters & Appetizers",
    name: "Chicken Tikka Delhi Style",
    description: "Smoky char-grilled marinated chicken bites, a favorite non-veg snack from the Tandoors of Delhi.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.92,
    tags: ["Delhi", "North Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "chicken_boneless", name: "Chicken (boneless cubes)", qty: "400g", price: 140, available: true },
      { id: "curd", name: "Thick Curd", qty: "1/2 cup", price: 10, available: true },
      { id: "spices", name: "Tandoori Masala", qty: "2 tbsp", price: 15, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 85, available: false }
    ],
    steps: [
      "Marinate chicken in curd, mustard oil, and spices for 2 hours.",
      "Thread the pieces onto skewers.",
      "Grill in an oven or tandoor at 200°C for 20 minutes.",
      "Baste with butter once midway.",
      "Garnish with chaat masala and serve with mint chutney."
    ]
  }
];
