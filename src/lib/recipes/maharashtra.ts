import { Recipe } from './types';

export const maharashtraRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (15) ---
  {
    id: "kolhapuri-chicken",
    name: "Kolhapuri Chicken",
    description: "An intensely fiery chicken curry from Kolhapur, known as one of India's spiciest regional dishes featuring a dark red, roasted masala.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Hard",
    cost: 300,
    popularity: 0.88,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 160, available: true },
      { id: "dry_coconut", name: "Dry Coconut (Grated)", qty: "1/2 cup", price: 15, available: true },
      { id: "kolhapuri_lavangi", name: "Kolhapuri Red Chilies", qty: "8", price: 20, available: true },
      { id: "poppy_seeds", name: "Poppy Seeds (Khus Khus)", qty: "1 tbsp", price: 15, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "10", price: 90, available: false }
    ],
    steps: [
      "Dry roast coconut, sesame seeds, poppy seeds, and red chilies until dark brown; grind to a fine paste.",
      "Sauté onions and ginger-garlic paste in oil until caramelized.",
      "Add chicken and the roasted masala paste; sauté until the chicken is well-coated.",
      "Add water and salt; simmer on medium heat for 25 minutes.",
      "The gravy should be thick and dark red with oil floating on top."
    ]
  },
  {
    id: "mutton-kolhapuri",
    name: "Mutton Kolhapuri",
    description: "An extremely spicy Kolhapuri-style mutton curry made with a potent blend of roasted spices and dry coconut.",
    type: "Non-Vegetarian",
    time: 75,
    servings: 4,
    difficulty: "Hard",
    cost: 430,
    popularity: 0.85,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "kolhapuri_masala", name: "Kolhapuri Kanda Lasun Masala", qty: "3 tbsp", price: 25, available: true },
      { id: "onion", name: "Finely chopped Onions", qty: "2 large", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "3 tbsp", price: 35, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt and turmeric until tender.",
      "Sauté onions and ginger-garlic paste until brown.",
      "Add the Kolhapuri masala and roasted coconut paste; sauté for 5 minutes.",
      "Add the cooked mutton along with its stock.",
      "Simmer on low heat until the gravy thickens and turns a deep, dark red."
    ]
  },
  {
    id: "malvani-chicken-curry",
    name: "Malvani Chicken Curry",
    description: "A coconut-based coastal Maharashtrian chicken curry with a distinct Malvani spice blend and tamarind tang.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 290,
    popularity: 0.84,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "coconut", name: "Grated Fresh Coconut", qty: "1 cup", price: 20, available: true },
      { id: "malvani_masala", name: "Malvani Masala", qty: "2 tbsp", price: 15, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 5, available: true },
      { id: "shallots", name: "Shallots/Small Onions", qty: "10", price: 100, available: false }
    ],
    steps: [
      "Grind fresh coconut, ginger, and garlic into a smooth paste.",
      "Sauté shallots in coconut oil until golden; add chicken and Malvani masala.",
      "Add the coconut paste and tamarind pulp; stir well.",
      "Pour in water and simmer until the chicken is tender and the curry is aromatic.",
      "Serve with hot rice or Vade."
    ]
  },
  {
    id: "malvani-fish-curry",
    name: "Malvani Fish Curry",
    description: "A tangy coastal fish curry made with coconut, tamarind, and the signature Malvani spice blend.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 350,
    popularity: 0.82,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Surmai or Pomfret Slices", qty: "500g", price: 250, available: true },
      { id: "coconut", name: "Fresh Grated Coconut", qty: "1 cup", price: 20, available: true },
      { id: "kokum", name: "Kokum Petals", qty: "4", price: 10, available: true },
      { id: "malvani_masala", name: "Malvani Masala", qty: "2 tbsp", price: 15, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 55, available: false }
    ],
    steps: [
      "Grind coconut and red chilies into a very smooth paste.",
      "Heat oil, temper with mustard and curry leaves.",
      "Add the coconut paste, Malvani masala, and kokum petals.",
      "Add water to reach gravy consistency; bring to a boil.",
      "Carefully add fish slices and simmer for 8 minutes until cooked."
    ]
  },
  {
    id: "chicken-sukka-maharashtrian",
    name: "Chicken Sukka (Maharashtrian)",
    description: "A dry, roasted coconut and spice-coated chicken preparation common in coastal Maharashtra.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.80,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Boneless Chicken bits", qty: "500g", price: 180, available: true },
      { id: "coconut", name: "Dry Coconut (Grated)", qty: "1/2 cup", price: 15, available: true },
      { id: "pepper", name: "Black Peppercorns", qty: "1 tsp", price: 5, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "garlic", name: "Garlic paste", qty: "1 tsp", price: 70, available: false }
    ],
    steps: [
      "Dry roast coconut and spices until dark brown; grind coarsely.",
      "Sauté onions and ginger-garlic paste until brown.",
      "Add chicken and roast on high heat until seared.",
      "Add the dry masala and salt; toss continuously.",
      "Cook on low heat without water until the chicken is tender and the masala is dry."
    ]
  },
  {
    id: "bombil-fry",
    name: "Bombil Fry (Bombay Duck Fry)",
    description: "Crispy, semolina-coated fried Bombay Duck fish, a legendary coastal Maharashtrian delicacy.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.90,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "bombil", name: "Fresh Bombil (Bombay Duck)", qty: "6", price: 200, available: true },
      { id: "rawa", name: "Semolina (Rawa)", qty: "1/2 cup", price: 10, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1/2 cup", price: 75, available: false }
    ],
    steps: [
      "Press fresh bombil between paper towels to remove excess moisture.",
      "Marinate with salt, turmeric, and chili powder for 15 minutes.",
      "Coat each piece thoroughly with semolina mixed with a little rice flour.",
      "Heat oil in a pan; shallow fry until dark golden and extremely crispy.",
      "Serve hot with lemon wedges."
    ]
  },
  {
    id: "kombdi-vade",
    name: "Kombdi Vade",
    description: "A spicy country chicken curry served with deep-fried multi-grain puris (vade), a classic rural Maharashtrian combo.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.86,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Country Chicken (bone-in)", qty: "500g", price: 160, available: true },
      { id: "vade_flour", name: "Vade Flour (Bhajani)", qty: "2 cups", price: 40, available: true },
      { id: "coconut_paste", name: "Roasted Coconut Paste", qty: "3 tbsp", price: 20, available: true },
      { id: "spices", name: "Malvani Masala", qty: "2 tbsp", price: 15, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 45, available: false }
    ],
    steps: [
      "Prepare a spicy chicken curry using roasted coconut and Malvani masala.",
      "For vade, knead bhajani flour with warm water; let it rest.",
      "Pat small portions of dough on a greased sheet into discs.",
      "Deep fry the discs until they puff up and turn golden.",
      "Serve the hot vade with the spicy chicken curry."
    ]
  },
  {
    id: "mutton-rassa",
    name: "Mutton Rassa",
    description: "A thin, fiery red mutton gravy from rural Maharashtra, meant to be soaked up with bhakri.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.81,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 350, available: true },
      { id: "lavangi_chili", name: "Spicy Red Chili Powder", qty: "2 tbsp", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "onion", name: "Sliced Onions", qty: "2", price: 10, available: true },
      { id: "coriander", name: "Fresh Coriander", qty: "handful", price: 20, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt and minimal water until tender.",
      "Sauté onions until dark brown; add ginger-garlic and spices.",
      "Add the cooked meat along with its broth.",
      "Simmer for 15 minutes until a layer of oil (tarri) forms on top.",
      "Serve hot with Jowar Bhakri."
    ]
  },
  {
    id: "chicken-rassa",
    name: "Chicken Rassa",
    description: "The classic Maharashtrian thin chicken gravy, spicy and perfect for a rustic meal.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.79,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "kanda_lasun", name: "Kanda Lasun Masala", qty: "2 tbsp", price: 15, available: true },
      { id: "coconut_paste", name: "Dry Coconut Paste", qty: "2 tbsp", price: 15, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 80, available: false }
    ],
    steps: [
      "Sauté onions and spices in oil/ghee until aromatic.",
      "Add chicken and sear on high heat.",
      "Add coconut paste and kanda lasun masala.",
      "Pour in warm water and simmer until chicken is soft and gravy is thin.",
      "Garnish with coriander."
    ]
  },
  {
    id: "prawns-koliwada",
    name: "Prawns Koliwada",
    description: "Crispy deep-fried spiced prawns, a specialty of the Koli fishing community of Mumbai.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 370,
    popularity: 0.87,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy", "Street Food"],
    ingredients: [
      { id: "prawns", name: "Medium Prawns (cleaned)", qty: "400g", price: 300, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "1/4 cup", price: 10, available: true },
      { id: "ajwain", name: "Ajwain Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "chili_powder", name: "Kashmiri Chili Powder", qty: "1 tbsp", price: 15, available: true },
      { id: "ginger", name: "Ginger Garlic paste", qty: "1 tsp", price: 40, available: false }
    ],
    steps: [
      "Marinate prawns in ginger-garlic paste, lemon, and spices for 30 minutes.",
      "Make a thick batter with besan, spices, and a little water.",
      "Dip prawns in batter and deep fry in hot oil.",
      "Drain and serve with spicy green chutney."
    ]
  },
  {
    id: "surmai-curry",
    name: "Surmai Curry",
    description: "Kingfish steaks simmered in a coconut-based Konkani gravy flavored with kokum.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 380,
    popularity: 0.83,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "surmai", name: "Surmai (Kingfish) Steaks", qty: "4", price: 280, available: true },
      { id: "coconut", name: "Fresh Coconut", qty: "1 cup", price: 20, available: true },
      { id: "kokum", name: "Kokum", qty: "3 pieces", price: 10, available: true },
      { id: "coriander", name: "Coriander Seeds", qty: "1 tbsp", price: 10, available: true },
      { id: "chilies", name: "Dry Red Chilies", qty: "4", price: 60, available: false }
    ],
    steps: [
      "Grind coconut, coriander seeds, and chilies into a fine paste.",
      "Simmer the paste with kokum and water in a pot.",
      "Carefully add fish steaks once the gravy boils.",
      "Cook for 10 minutes on medium heat.",
      "Garnish with coriander leaves."
    ]
  },
  {
    id: "egg-curry-maharashtrian",
    name: "Egg Curry (Maharashtrian)",
    description: "Hard-boiled eggs simmered in a spicy onion-coconut masala with roasted spices.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.80,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 30, available: true },
      { id: "dry_coconut", name: "Dry Coconut", qty: "1/4 cup", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "spices", name: "Garam Masala", qty: "1 tsp", price: 5, available: true },
      { id: "ginger", name: "Ginger paste", qty: "1 tsp", price: 60, available: false }
    ],
    steps: [
      "Roast onion and dry coconut until dark; grind with ginger and garlic.",
      "Sauté the paste in oil until fragrant.",
      "Add chili powder, salt, and water to make a gravy.",
      "Add halved boiled eggs and simmer for 5 minutes."
    ]
  },
  {
    id: "chicken-kolhapuri-sukka",
    name: "Chicken Kolhapuri Sukka",
    description: "Dry roasted spicy chicken with the signature Kolhapuri masala and dark coconut flakes.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.78,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "kolhapuri_masala", name: "Kolhapuri Masala", qty: "2 tbsp", price: 20, available: true },
      { id: "dry_coconut", name: "Grated Dry Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "1 sprig", price: 75, available: false }
    ],
    steps: [
      "Boil chicken with salt and turmeric until 80% done.",
      "Fry onions and curry leaves until brown.",
      "Add the chicken and Kolhapuri masala; roast on high heat.",
      "Add the grated coconut and sauté until the mixture is dry and dark brown.",
      "Garnish with coriander."
    ]
  },
  {
    id: "mutton-kheema-maharashtra",
    name: "Mutton Kheema",
    description: "Spiced minced mutton curry, a favorite breakfast dish in Mumbai's Irani cafes.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 350,
    popularity: 0.84,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "minced_mutton", name: "Mutton Mince (Kheema)", qty: "500g", price: 300, available: true },
      { id: "onion", name: "Onions", qty: "2 large", price: 10, available: true },
      { id: "peas", name: "Green Peas", qty: "1/4 cup", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "mint", name: "Fresh Mint", qty: "handful", price: 20, available: false }
    ],
    steps: [
      "Sauté onions and ginger-garlic paste until brown.",
      "Add minced mutton and spices; sauté on high heat until meat changes color.",
      "Add peas and a little water; cover and cook for 15 minutes.",
      "Finish with fresh mint and coriander.",
      "Serve hot with Pav."
    ]
  },
  {
    id: "crab-malvani",
    name: "Crab Malvani",
    description: "Fresh crabs simmered in a spicy coconut-based coastal masala, a seafood lover's delight.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 3,
    difficulty: "Hard",
    cost: 450,
    popularity: 0.77,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "crab", name: "Cleaned Crabs", qty: "500g", price: 350, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1 cup", price: 20, available: true },
      { id: "malvani_mix", name: "Malvani Spice Mix", qty: "3 tbsp", price: 20, available: true },
      { id: "tamarind", name: "Tamarind", qty: "small lump", price: 5, available: true },
      { id: "garlic", name: "Garlic", qty: "10 cloves", price: 55, available: false }
    ],
    steps: [
      "Grind roasted coconut and spices into a thick paste.",
      "Sauté onions and garlic in oil; add crabs and spice paste.",
      "Add tamarind water and salt.",
      "Simmer for 20 minutes until the crab shells turn orange and gravy is thick.",
      "Serve with steamed rice."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "puran-poli",
    name: "Puran Poli",
    description: "A sweet festive flatbread stuffed with a blend of cooked chana dal and jaggery.",
    type: "Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.92,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian", "Dessert"],
    ingredients: [
      { id: "chana_dal", name: "Chana Dal", qty: "1 cup", price: 25, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1 cup", price: 20, available: true },
      { id: "maida", name: "Refined Flour (Maida)", qty: "2 cups", price: 20, available: true },
      { id: "nutmeg", name: "Nutmeg Powder", qty: "pinch", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "3 tbsp", price: 20, available: false }
    ],
    steps: [
      "Cook dal and grind with jaggery into a thick paste (puran).",
      "Knead a soft dough with flour and oil; let it rest.",
      "Stuff a ball of puran inside a portion of dough.",
      "Roll into a thin flatbread and cook on a tawa with ghee.",
      "Serve warm with milk or ghee."
    ]
  },
  {
    id: "batata-vada-curry",
    name: "Batata Vada Curry",
    description: "Spiced potato curry served with bread or bhakri, a common household alternative to the street food vada pav.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.80,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "potato", name: "Potatoes (boiled)", qty: "4", price: 20, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tsp", price: 5, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric", qty: "1/2 tsp", price: 5, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "1 sprig", price: 30, available: false }
    ],
    steps: [
      "Mash boiled potatoes and sauté with ginger-garlic and turmeric.",
      "Prepare a tempering with mustard seeds and curry leaves.",
      "Add water to the potatoes and simmer to form a gravy.",
      "Serve hot with pav or roti."
    ]
  },
  {
    id: "varan-bhaat",
    name: "Varan Bhaat",
    description: "Simple and comforting Maharashtrian dal made with toor dal, served over steamed rice with a dollop of ghee.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.85,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian", "Comfort Food", "Healthy"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "ghee", name: "Pure Ghee", qty: "1 tbsp", price: 15, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "pinch", price: 5, available: true }
    ],
    steps: [
      "Pressure cook dal with turmeric until mushy.",
      "Whisk the dal with salt and water to a smooth consistency.",
      "Boil for 5 minutes.",
      "Temper with cumin and asafoetida in ghee.",
      "Serve over hot rice."
    ]
  },
  {
    id: "sabudana-khichdi",
    name: "Sabudana Khichdi",
    description: "A light and nutty dish made with sago pearls, roasted peanuts, and potatoes, traditionally eaten during fasts.",
    type: "Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.91,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian", "Breakfast", "Healthy"],
    ingredients: [
      { id: "sabudana", name: "Sago Pearls (soaked)", qty: "1.5 cups", price: 20, available: true },
      { id: "peanuts", name: "Roasted Peanut Powder", qty: "1/2 cup", price: 15, available: true },
      { id: "potato", name: "Potato (cubed)", qty: "1", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 25, available: false }
    ],
    steps: [
      "Soak sabudana for 6 hours until pearls are soft and separate.",
      "Mix peanut powder and salt with the soaked sabudana.",
      "Sauté cumin, green chilies, and potato in oil.",
      "Add the sabudana mixture and toss on low heat until pearls turn transparent.",
      "Garnish with lemon and coriander."
    ]
  },
  {
    id: "pithla",
    name: "Pithla",
    description: "A thick gram flour curry, a rustic staple often served with Bhakri and onions.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.82,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "besan", name: "Besan (Gram Flour)", qty: "1 cup", price: 15, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "garlic", name: "Garlic (crushed)", qty: "4 cloves", price: 5, available: true },
      { id: "chilies", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "turmeric", name: "Turmeric", qty: "1/2 tsp", price: 25, available: false }
    ],
    steps: [
      "Mix besan with water into a lump-free thin slurry.",
      "Sauté onions and garlic in oil until brown.",
      "Slowly pour in the besan slurry while stirring constantly.",
      "Cover and steam for 5 minutes until it thickens into a paste.",
      "Serve with hot Bhakri."
    ]
  },
  {
    id: "zunka",
    name: "Zunka",
    description: "A dry-cooked version of gram flour curry with onions and spices, a spicy rustic favorite.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.80,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian", "Comfort Food", "Spicy"],
    ingredients: [
      { id: "besan", name: "Gram Flour", qty: "1 cup", price: 15, available: true },
      { id: "onion", name: "Finely Chopped Onions", qty: "2", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 5, available: true },
      { id: "red_chili", name: "Red Chili Powder", qty: "1 tsp", price: 5, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "1 sprig", price: 20, available: false }
    ],
    steps: [
      "Sauté onions and garlic in plenty of oil until caramelized.",
      "Add spices and salt.",
      "Add dry besan and stir-fry for 5 minutes.",
      "Sprinkle a little water and cover to steam.",
      "Sauté until the besan is cooked and the mixture is crumbly."
    ]
  },
  {
    id: "masale-bhaat",
    name: "Masale Bhaat",
    description: "A traditional spiced mixed vegetable rice dish made with special 'Goda Masala'.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.84,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian"],
    ingredients: [
      { id: "rice", name: "Basmati or Sona Masuri Rice", qty: "2 cups", price: 30, available: true },
      { id: "mixed_veg", name: "Ivy Gourd, Cauliflower, Peas", qty: "2 cups", price: 25, available: true },
      { id: "goda_masala", name: "Goda Masala", qty: "2 tbsp", price: 15, available: true },
      { id: "peanuts", name: "Peanuts", qty: "2 tbsp", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 5, available: false }
    ],
    steps: [
      "Wash rice and soak for 20 minutes.",
      "Sauté vegetables and whole spices in ghee.",
      "Add goda masala and rice; sauté for 2 minutes.",
      "Add 4 cups of hot water and salt.",
      "Cook until rice is fluffy and vegetables are tender."
    ]
  },
  {
    id: "vangyache-bharit",
    name: "Vangyache Bharit",
    description: "Smoky roasted eggplant mash with onions and chilies, a rustic Maharashtrian classic.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.72,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian", "Comfort Food", "Spicy"],
    ingredients: [
      { id: "brinjal", name: "Large Purple Brinjal", qty: "1", price: 20, available: true },
      { id: "onion", name: "Chopped Onions", qty: "2", price: 10, available: true },
      { id: "chilies", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "garlic", name: "Garlic", qty: "4 cloves", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Roast brinjal on an open flame until the skin is charred and interior is soft.",
      "Peel the skin and mash the flesh.",
      "Sauté onions, garlic, and chilies in oil.",
      "Add the mashed brinjal and salt; cook for 5 minutes.",
      "Garnish with coriander."
    ]
  },
  {
    id: "amti-maharashtra",
    name: "Amti",
    description: "A tangy and slightly sweet Maharashtrian dal made with toor dal and flavored with goda masala and tamarind.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.88,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "goda_masala", name: "Goda Masala", qty: "1 tsp", price: 10, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 5, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1 tsp", price: 5, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "1 sprig", price: 15, available: false }
    ],
    steps: [
      "Pressure cook dal until very soft.",
      "Whisk the dal and add water, goda masala, tamarind, and jaggery.",
      "Simmer for 10 minutes.",
      "Temper with mustard, cumin, and curry leaves.",
      "Serve with hot rice."
    ]
  },
  {
    id: "aluchi-vadi",
    name: "Aluchi Vadi",
    description: "Steamed and fried rolls made from colocasia leaves with a spicy and tangy gram flour spread.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.70,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian", "Spicy", "Snacks"],
    ingredients: [
      { id: "alu_leaves", name: "Colocasia Leaves (Alu)", qty: "10", price: 30, available: true },
      { id: "besan", name: "Besan", qty: "1 cup", price: 15, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "2 tbsp", price: 10, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1 tbsp", price: 5, available: true },
      { id: "sesame", name: "Sesame Seeds", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Make a thick paste of besan, tamarind, jaggery, and spices.",
      "Apply the paste on the back of each leaf and stack them.",
      "Roll the stack tightly and steam for 20 minutes.",
      "Once cooled, slice the roll into rounds.",
      "Shallow fry until crispy and serve."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "vada-pav",
    name: "Vada Pav",
    description: "The iconic street food of Mumbai—spicy potato fritter inside a soft bun with various chutneys.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 40,
    popularity: 0.95,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian", "Snacks", "Street Food", "Spicy"],
    ingredients: [
      { id: "pav", name: "Bread Buns (Pav)", qty: "4", price: 10, available: true },
      { id: "potato", name: "Boiled Potatoes", qty: "4", price: 15, available: true },
      { id: "besan", name: "Besan", qty: "1/2 cup", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tsp", price: 2, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 3, available: false }
    ],
    steps: [
      "Prepare potato filling with mustard tempering and spices.",
      "Dip potato balls into a thick besan batter.",
      "Deep fry until golden brown.",
      "Slit pav buns and spread green and dry garlic chutney.",
      "Place the vada inside and serve with a fried green chili."
    ]
  },
  {
    id: "misal-pav",
    name: "Misal Pav",
    description: "A spicy sprouted lentil curry topped with crunchy farsan, served with pav and onions.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.93,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian", "Snacks", "Street Food", "Spicy"],
    ingredients: [
      { id: "sprouts", name: "Sprouted Moth Beans", qty: "2 cups", price: 30, available: true },
      { id: "pav", name: "Pav", qty: "4", price: 10, available: true },
      { id: "farsan", name: "Farsan (Crispy topping)", qty: "1/2 cup", price: 20, available: true },
      { id: "malvani", name: "Spicy Red Curry Paste", qty: "2 tbsp", price: 15, available: true },
      { id: "onion", name: "Chopped Onion", qty: "1", price: 5, available: false }
    ],
    steps: [
      "Cook sprouts until soft.",
      "Prepare a thin, very spicy red gravy (Kat/Rassa).",
      "Assemble by placing sprouts in a bowl, pouring gravy over it.",
      "Top with lots of farsan and chopped onions.",
      "Serve with pav and a lemon wedge."
    ]
  },
  {
    id: "kothimbir-vadi",
    name: "Kothimbir Vadi",
    description: "Spiced coriander and gram flour cakes, steamed and then fried for a crispy exterior.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.82,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "coriander", name: "Fresh Coriander (Chopped)", qty: "2 cups", price: 20, available: true },
      { id: "besan", name: "Besan", qty: "1 cup", price: 15, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "garlic", name: "Garlic", qty: "4 cloves", price: 5, available: true },
      { id: "sesame", name: "Sesame Seeds", qty: "1 tsp", price: 20, available: false }
    ],
    steps: [
      "Mix all ingredients into a thick, non-sticky dough.",
      "Shape into logs and steam for 15 minutes.",
      "Once cooled, slice into squares or rounds.",
      "Shallow or deep fry until golden brown and crispy.",
      "Serve with tea."
    ]
  },
  {
    id: "maharashtrian-poha",
    name: "Kanda Poha",
    description: "Flattened rice tempered with onions, peanuts, and potatoes—the breakfast staple of Maharashtra.",
    type: "Vegetarian",
    time: 20,
    servings: 3,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.94,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Vegetarian", "Snacks", "Breakfast", "Healthy"],
    ingredients: [
      { id: "poha", name: "Thick Poha (Flattened Rice)", qty: "2 cups", price: 15, available: true },
      { id: "onion", name: "Finely Chopped Onion", qty: "1", price: 5, available: true },
      { id: "peanuts", name: "Peanuts", qty: "2 tbsp", price: 10, available: true },
      { id: "potato", name: "Potato (boiled cubes)", qty: "1/4 cup", price: 5, available: true },
      { id: "lemon", name: "Lemon", qty: "1/2", price: 15, available: false }
    ],
    steps: [
      "Wash poha in a colander and drain immediately; keep aside for 5 minutes.",
      "Fry peanuts in oil until crunchy; add mustard seeds and green chilies.",
      "Add onions and sauté until translucent.",
      "Add turmeric and salt, then the poha; mix gently.",
      "Cover and steam for 2 minutes on low heat; finish with lemon juice."
    ]
  },
  {
    id: "chicken-kolivada",
    name: "Chicken Kolivada",
    description: "Mumbai-style crispy fried spiced chicken bites, a favorite coastal snack.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.88,
    tags: ["Maharashtrian", "Maharashtra", "West Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Boneless Chicken bits", qty: "300g", price: 120, available: true },
      { id: "besan", name: "Besan", qty: "3 tbsp", price: 10, available: true },
      { id: "ajwain", name: "Ajwain Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 90, available: false }
    ],
    steps: [
      "Marinate chicken in spices, lemon, and ginger-garlic paste for 15 minutes.",
      "Mix in besan and ajwain with a little water to form a coating.",
      "Deep fry until golden brown and cooked through.",
      "Garnish with chat masala and serve with onion rings."
    ]
  }
];
