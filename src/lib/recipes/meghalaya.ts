import { Recipe } from './types';

export const meghalayaRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "jadoh-khasi-authentic",
    menuCategory: "Curries & Gravies",
    name: "Jadoh",
    description: "The most iconic Khasi dish—fragrant short-grain rice cooked with smoked pork, onions, and local spices.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.89,
    tags: ["Meghalaya", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Smoked Pork (cubed)", qty: "400g", price: 180, available: true },
      { id: "rice", name: "Short-grain Red Rice (Jingshai)", qty: "2 cups", price: 30, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "2", price: 10, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 25, available: false }
    ],
    steps: [
      "Clean and boil the smoked pork until tender; reserve the stock.",
      "Heat oil in a heavy-bottomed pot; sauté onions and ginger paste until soft.",
      "Add the pork pieces and sauté for 5 minutes until browned.",
      "Add the washed rice and sauté with the meat for another 3 minutes.",
      "Add the reserved pork stock and salt; bring to a boil.",
      "Cover and simmer on low heat until all the stock is absorbed and rice is fluffy."
    ]
  },
  {
    id: "dohneiiong-pork-sesame",
    menuCategory: "Curries & Gravies",
    name: "Dohneiiong",
    description: "A rich and flavorful Khasi pork curry prepared with a characteristic black sesame seed paste.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.87,
    tags: ["Meghalaya", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "pork", name: "Pork (with fat chunks)", qty: "500g", price: 200, available: true },
      { id: "black_sesame", name: "Black Sesame Seeds", qty: "3 tbsp", price: 30, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1 large", price: 10, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tbsp", price: 35, available: false }
    ],
    steps: [
      "Dry roast the black sesame seeds until they pop, then grind into a very smooth thick paste.",
      "Sauté onions, ginger, and garlic pastes in a little oil.",
      "Add pork pieces and roast (bhunao) on high heat until they release their own fat.",
      "Stir in the black sesame paste and coat the meat thoroughly.",
      "Add a little water and salt; simmer on low heat until the pork is tender and the gravy is dark black."
    ]
  },
  {
    id: "pork-bamboo-shoot-meghalaya",
    menuCategory: "Curries & Gravies",
    name: "Pork with Bamboo Shoot",
    description: "Tender pork chunks simmered with pungent fermented bamboo shoots and fiery local chilies.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.85,
    tags: ["Meghalaya", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork (fatty chunks)", qty: "500g", price: 200, available: true },
      { id: "bamboo_shoot", name: "Fermented Bamboo Shoot", qty: "1/2 cup", price: 40, available: true },
      { id: "green_chili", name: "Birds Eye Chilies", qty: "6", price: 10, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "garlic", name: "Garlic (crushed)", qty: "1 tbsp", price: 25, available: false }
    ],
    steps: [
      "Boil the pork with a little salt until half-cooked.",
      "Drain the water and sauté the pork in its own fat with ginger and garlic.",
      "Add the fermented bamboo shoot and crushed green chilies.",
      "Sauté for 5-10 minutes to integrate the flavors.",
      "Add a little water and simmer until the pork is fully tender and the aroma is strong."
    ]
  },
  {
    id: "khasi-chicken-curry-rustic",
    menuCategory: "Curries & Gravies",
    name: "Khasi Chicken Curry",
    description: "A mild and rustic mountain-style chicken curry cooked with local herbs and minimal spices.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.76,
    tags: ["Meghalaya", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 160, available: true },
      { id: "shallots", name: "Shallots/Small Onions", qty: "1/2 cup", price: 20, available: true },
      { id: "ginger", name: "Local Ginger (grated)", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "pepper", name: "Local Black Pepper", qty: "1 tsp", price: 80, available: false }
    ],
    steps: [
      "Heat oil and sauté shallots until translucent.",
      "Add chicken pieces and ginger; sauté until the meat turns white.",
      "Add turmeric and salt; toss well.",
      "Add water and simmer until the chicken is tender.",
      "Finish with freshly ground local black pepper for a warm, clean taste."
    ]
  },
  {
    id: "tungrymbai-pork-spicy",
    menuCategory: "Curries & Gravies",
    name: "Tungrymbai Pork",
    description: "A pungent and earthy preparation of pork cooked with fermented soybean paste (Tungrymbai) and black sesame.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.80,
    tags: ["Meghalaya", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork bits", qty: "400g", price: 160, available: true },
      { id: "tungrymbai", name: "Fermented Soybean Paste", qty: "3 tbsp", price: 40, available: true },
      { id: "black_sesame", name: "Roasted Sesame Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "dry_chili", name: "Dried Red Chilies", qty: "4", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 50, available: false }
    ],
    steps: [
      "Sauté pork in a little oil until it releases fat and browns.",
      "Add ginger paste and dried red chilies.",
      "Stir in the fermented soybean paste (Tungrymbai) and sesame powder.",
      "Roast on medium heat for 10 minutes until the aroma is pungent.",
      "Add a splash of water and simmer until it forms a thick, dark, and oily paste around the meat."
    ]
  },
  {
    id: "pork-bamboo-shoot-fry-dry",
    menuCategory: "Protein Specialties",
    name: "Pork Bamboo Shoot Fry",
    description: "A dry and spicy stir-fry featuring pork and bamboo shoots, a favorite accompaniment to local rice.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.81,
    tags: ["Meghalaya", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork (thinly sliced)", qty: "400g", price: 160, available: true },
      { id: "bamboo_shoot", name: "Bamboo Shoot (shredded)", qty: "1/2 cup", price: 30, available: true },
      { id: "green_chili", name: "Birds Eye Chilies", qty: "4", price: 5, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "2 tbsp", price: 70, available: false }
    ],
    steps: [
      "Sauté pork slices in oil until they are crispy and browned.",
      "Add shredded bamboo shoots and sauté for 5 minutes.",
      "Add garlic paste and chopped green chilies.",
      "Stir-fry on high heat until the mixture is dry and the bamboo shoots are lightly toasted.",
      "Season with salt and serve hot."
    ]
  },
  {
    id: "dohkhlieh-pork-salad",
    menuCategory: "Curries & Gravies",
    name: "Dohkhlieh",
    description: "A refreshing and sharp minced pork salad made with onions, green chilies, and ginger, often served as a side or snack.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.88,
    tags: ["Meghalaya", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork (with fat)", qty: "400g", price: 160, available: true },
      { id: "onion", name: "Onions (finely chopped)", qty: "1 large", price: 5, available: true },
      { id: "ginger", name: "Ginger (finely minced)", qty: "1 tbsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 75, available: false }
    ],
    steps: [
      "Boil the pork chunks in water with salt until very tender.",
      "Drain and finely mince the pork using a knife.",
      "In a bowl, combine the minced pork with onions, ginger, and green chilies.",
      "Mix thoroughly by hand to ensure the juices integrate.",
      "Adjust salt and serve cold or at room temperature."
    ]
  },
  {
    id: "chicken-black-sesame-meghalaya",
    menuCategory: "Curries & Gravies",
    name: "Chicken with Black Sesame",
    description: "Chicken pieces cooked in a rich, earthy gravy made from roasted black sesame seeds.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.73,
    tags: ["Meghalaya", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "black_sesame", name: "Black Sesame Paste", qty: "2 tbsp", price: 25, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "2 tbsp", price: 90, available: false }
    ],
    steps: [
      "Sauté onion and ginger-garlic paste in oil until fragrant.",
      "Add chicken pieces and sear on high heat.",
      "Stir in the black sesame paste and coat the chicken.",
      "Add water and salt; simmer for 20 minutes until chicken is tender and gravy is dark."
    ]
  },
  {
    id: "nakham-bitchi-dried-fish-soup",
    menuCategory: "Curries & Gravies",
    name: "Nakham Bitchi",
    description: "A traditional Garo-style soup made with dried fish, soda (kharchi), and local chilies, known for its bold flavor.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 200,
    popularity: 0.70,
    tags: ["Meghalaya", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "dried_fish", name: "Local Dried Fish (Nakham)", qty: "1/2 cup", price: 80, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "chili", name: "Birds Eye Chilies", qty: "5", price: 5, available: true },
      { id: "soda", name: "Kharchi/Soda", qty: "pinch", price: 5, available: true },
      { id: "water", name: "Water", qty: "4 cups", price: 105, available: false }
    ],
    steps: [
      "Wash the dried fish and break into pieces.",
      "Bring water to a boil in a pot; add the dried fish.",
      "Add crushed ginger and green chilies.",
      "Stir in a pinch of soda and salt.",
      "Simmer for 15 minutes until the broth is dark and highly aromatic."
    ]
  },
  {
    id: "pork-curry-garo-style-spicy",
    menuCategory: "Curries & Gravies",
    name: "Pork Curry Garo Style",
    description: "A spicy and tangy pork preparation from the Garo hills, featuring local chilies and a unique spice blend.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.77,
    tags: ["Meghalaya", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork", qty: "500g", price: 180, available: true },
      { id: "onion", name: "Onion", qty: "2", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies (minced)", qty: "6", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 70, available: false }
    ],
    steps: [
      "Heat mustard oil; sauté onions and ginger-garlic paste.",
      "Add pork pieces and sear on high heat.",
      "Add salt, turmeric, and minced green chilies.",
      "Simmer with minimal water until pork is tender.",
      "The result should be an oil-rich, spicy curry."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "ja-mynthdu-rice-peas",
    menuCategory: "Curries & Gravies",
    name: "Ja Mynthdu",
    description: "A simple and nutritious Khasi dish where black-eyed peas and rice are cooked together into a savory meal.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    cost: 75,
    popularity: 0.82,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "rice", name: "Local Rice", qty: "2 cups", price: 30, available: true },
      { id: "black_eyed_peas", name: "Black-eyed Peas", qty: "1/2 cup", price: 15, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "bay_leaf", name: "Bay Leaf", qty: "1", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Soak black-eyed peas for 2 hours.",
      "Heat oil in a pot and sauté onions with a bay leaf.",
      "Add washed rice and peas; sauté for 2 minutes.",
      "Add water (double the rice) and salt.",
      "Simmer until water is absorbed and rice is cooked."
    ]
  },
  {
    id: "tungrymbai-vegetarian-style",
    menuCategory: "Curries & Gravies",
    name: "Tungrymbai (Vegetarian Style)",
    description: "A pungent fermented soybean paste curry cooked with vegetables and mountain spices.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.74,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "tungrymbai", name: "Fermented Soybean Paste", qty: "3 tbsp", price: 35, available: true },
      { id: "mixed_veg", name: "Carrots, Beans, Potato", qty: "1 cup", price: 20, available: true },
      { id: "black_sesame", name: "Black Sesame Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "2 tbsp", price: 5, available: false }
    ],
    steps: [
      "Sauté ginger paste and vegetables in oil until partially cooked.",
      "Stir in the fermented soybean paste (Tungrymbai) and sesame powder.",
      "Sauté for 5 minutes until the aroma develops.",
      "Add a little water and salt; simmer until vegetables are tender.",
      "The gravy should be thick and dark."
    ]
  },
  {
    id: "pumpkin-sesame-meghalaya",
    menuCategory: "Curries & Gravies",
    name: "Pumpkin with Sesame",
    description: "Sweet pumpkin pieces cooked in an earthy black sesame seed paste, a common Khasi vegetable dish.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.72,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "pumpkin", name: "Yellow Pumpkin (cubed)", qty: "500g", price: 20, available: true },
      { id: "black_sesame", name: "Black Sesame Paste", qty: "2 tbsp", price: 20, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/4 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Heat oil and sauté pumpkin cubes with turmeric and salt.",
      "Add green chilies and a splash of water; cover and cook until soft.",
      "Stir in the black sesame paste.",
      "Cook uncovered for 2 minutes until the paste coats the pumpkin."
    ]
  },
  {
    id: "bamboo-shoot-curry-khasi",
    menuCategory: "Curries & Gravies",
    name: "Bamboo Shoot Curry Khasi",
    description: "Tangy and sharp fermented bamboo shoot curry cooked with local green beans and mountain chilies.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.70,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "bamboo_shoot", name: "Bamboo Shoot (fermented)", qty: "1/2 cup", price: 30, available: true },
      { id: "green_beans", name: "Local Green Beans", qty: "200g", price: 20, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "2 tbsp", price: 15, available: false }
    ],
    steps: [
      "Wash bamboo shoot and soak for 5 minutes.",
      "Sauté onions and ginger paste in oil.",
      "Add green beans and bamboo shoot.",
      "Add salt and turmeric; sauté for 5 minutes.",
      "Add water and simmer until beans are tender and tangy."
    ]
  },
  {
    id: "ja-prue-rice-sabzi",
    menuCategory: "Dry & Stir-Fried",
    name: "Ja Prue Simple Rice with Sabzi",
    description: "Plain mountain rice served with a very light vegetable stir-fry, the daily sustenance in rural Meghalaya.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.65,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "rice", name: "Local White Rice", qty: "2 cups", price: 20, available: true },
      { id: "mixed_veg", name: "Seasonal Greens and Potato", qty: "1.5 cups", price: 25, available: true },
      { id: "garlic", name: "Garlic (crushed)", qty: "1 tsp", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 10, available: false }
    ],
    steps: [
      "Cook rice until fluffy.",
      "Sauté mixed vegetables in very little oil with crushed garlic.",
      "Season with salt.",
      "Serve the warm rice and light vegetable side together."
    ]
  },
  {
    id: "khasi-bean-curry",
    menuCategory: "Curries & Gravies",
    name: "Khasi Bean Curry",
    description: "A simple and earthy bean curry cooked with local varieties of mountain beans and mild herbs.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.68,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "local_beans", name: "Mixed Local Beans", qty: "2 cups", price: 35, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "pinch", price: 25, available: false }
    ],
    steps: [
      "Pressure cook beans with salt until tender.",
      "Sauté onions and ginger paste in oil.",
      "Add the cooked beans and turmeric.",
      "Simmer for 10 minutes until the flavors integrate into a thick base."
    ]
  },
  {
    id: "mustard-greens-stir-fry-khasi",
    menuCategory: "Dry & Stir-Fried",
    name: "Mustard Greens Stir Fry Khasi",
    description: "Fresh mustard greens quickly stir-fried with garlic and green chilies, a healthy and vibrant side dish.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.81,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mustard_greens", name: "Mustard Greens", qty: "2 bunches", price: 20, available: true },
      { id: "garlic", name: "Garlic cloves (crushed)", qty: "4", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 25, available: false }
    ],
    steps: [
      "Wash and chop mustard greens roughly.",
      "Heat oil and sauté crushed garlic and chilies.",
      "Add the greens and salt.",
      "Stir-fry on high heat for 5 minutes until just wilted."
    ]
  },
  {
    id: "perilla-seed-chutney-sabzi",
    menuCategory: "Sides & Accompaniments",
    name: "Perilla Seed Chutney with Sabzi",
    description: "Nutty and fragrant perilla seed chutney served as a condiment for a mixed vegetable curry.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.72,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "perilla_seeds", name: "Perilla Seeds (Sohlang)", qty: "1/4 cup", price: 25, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "mixed_veg", name: "Mixed Vegetable Curry", qty: "1 cup", price: 40, available: false }
    ],
    steps: [
      "Dry roast perilla seeds until aromatic.",
      "Grind into a coarse paste with ginger, green chili, and salt.",
      "Prepare a simple vegetable stir-fry.",
      "Serve the stir-fry with a dollop of perilla chutney on the side."
    ]
  },
  {
    id: "sohphlang-curry-veg",
    menuCategory: "Curries & Gravies",
    name: "Sohphlang Curry",
    description: "A unique curry made from Sohphlang (yam bean), a crunchy local root tuber found in Meghalaya.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.60,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "sohphlang", name: "Yam Bean (Sohphlang)", qty: "250g", price: 30, available: true },
      { id: "black_sesame", name: "Sesame Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 20, available: false }
    ],
    steps: [
      "Clean and slice the yam bean.",
      "Sauté onions and ginger in oil.",
      "Add yam bean and sesame powder.",
      "Sauté for 10 minutes until tender."
    ]
  },
  {
    id: "dal-khasi-style",
    menuCategory: "Curries & Gravies",
    name: "Dal Khasi Style",
    description: "Simple and nutritious red lentil curry flavored with local herbs and ginger.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.70,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "red_lentils", name: "Masoor Dal", qty: "1 cup", price: 25, available: true },
      { id: "ginger", name: "Ginger (minced)", qty: "1 tbsp", price: 10, available: true },
      { id: "shallots", name: "Shallots", qty: "5", price: 10, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Boil dal with ginger and salt until soft.",
      "Whisk slightly.",
      "Temper oil with shallots and pour into the dal.",
      "Serve warm."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "putharo-steamed-rice-cake",
    menuCategory: "Snacks & Street Food",
    name: "Putharo",
    description: "A traditional Khasi steamed rice flour cake, often enjoyed for breakfast with tea or Jadoh.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.85,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 30, available: true },
      { id: "water", name: "Water", qty: "as needed", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "pinch", price: 20, available: false }
    ],
    steps: [
      "Mix rice flour with a little salt and enough water to form a smooth thick batter.",
      "Heat a special earthen griddle or flat tawa.",
      "Pour a small ladle of batter and spread slightly.",
      "Cover and steam for 3-4 minutes until firm and white.",
      "Serve hot."
    ]
  },
  {
    id: "pukhlein-sweet-fritters",
    menuCategory: "Snacks & Street Food",
    name: "Pukhlein",
    description: "Sweet and crunchy deep-fried fritters made from rice flour and jaggery, a popular tea-time treat.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.90,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 25, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1 cup", price: 20, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 15, available: false }
    ],
    steps: [
      "Dissolve jaggery in a little water and boil until it thickens slightly.",
      "Slowly mix the jaggery syrup into the rice flour to form a stiff dough.",
      "Shape small portions into flat discs.",
      "Deep fry in hot oil until they turn dark golden and crispy.",
      "Serve warm."
    ]
  },
  {
    id: "sakin-genjey-rice-cake",
    menuCategory: "Snacks & Street Food",
    name: "Sakin Genjey Style Rice Cake",
    description: "A sweet rice snack made with parboiled rice and jaggery, typical of Jaintia hills.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.72,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "rice", name: "Parboiled Rice (soaked)", qty: "1 cup", price: 20, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1/2 cup", price: 15, available: true },
      { id: "oil", name: "Oil for pan", qty: "1 tbsp", price: 30, available: false }
    ],
    steps: [
      "Grind soaked rice into a coarse paste.",
      "Mix with jaggery.",
      "Spread on a hot greased pan.",
      "Cook both sides until firm and sweet."
    ]
  },
  {
    id: "kyat-rice-snack",
    menuCategory: "Snacks & Street Food",
    name: "Kyat",
    description: "A fermented rice cake snack with a subtle tangy and sweet flavor profile.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.68,
    tags: ["Meghalaya", "Northeast Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 30, available: true },
      { id: "yeast", name: "Yeast/Starter Culture", qty: "pinch", price: 10, available: true },
      { id: "sugar", name: "Sugar", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Make a rice flour batter and add a tiny amount of fermenting agent.",
      "Let it sit for 4 hours.",
      "Steam the batter in small cups until firm.",
      "Serve as a light snack."
    ]
  },
  {
    id: "pork-sausage-meghalayan-snack",
    menuCategory: "Snacks & Street Food",
    name: "Pork Sausage Meghalayan",
    description: "Smoked and spiced local pork sausage bites, a popular market snack across the state.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.84,
    tags: ["Meghalaya", "Northeast Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "pork_sausage", name: "Local Smoked Pork Sausages", qty: "4", price: 150, available: true },
      { id: "onion", name: "Onion (sliced)", qty: "1", price: 10, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "1 tbsp", price: 60, available: false }
    ],
    steps: [
      "Cut sausages into 1-inch pieces.",
      "Heat oil and sauté onions and green chilies.",
      "Add sausage pieces and stir-fry on high heat.",
      "Cook until the sausage edges are crispy and browned.",
      "Serve as a savory snack."
    ]
  }
];