import { Recipe } from './types';

export const odishaRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (15) ---
  {
    id: "machha-jhola-odia",
    menuCategory: "Curries & Gravies",
    name: "Machha Jhola",
    description: "A light and flavorful Odia fish curry cooked with ginger, garlic, and a tangy tomato-tamarind base.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.88,
    tags: ["Odisha", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Freshwater Fish (Rohu/Catla)", qty: "500g", price: 200, available: true },
      { id: "potato", name: "Potato", qty: "2 medium", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "2", price: 10, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 5, available: true },
      { id: "panch_phoran", name: "Panch Phoran", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Marinate fish with salt and turmeric; shallow fry until golden and set aside.",
      "Sauté panch phoran and dried red chilies in mustard oil.",
      "Add onion-ginger-garlic paste and cook until the raw smell disappears.",
      "Add tomatoes, turmeric, and chili powder; cook until soft.",
      "Add fried potatoes and water; simmer until potatoes are cooked.",
      "Add fried fish and tamarind pulp; simmer for 5 minutes and garnish with coriander."
    ]
  },
  {
    id: "chingudi-jhola-odia",
    menuCategory: "Curries & Gravies",
    name: "Chingudi Jhola",
    description: "Succulent prawns cooked in a traditional Odia mustard and tomato gravy.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 350,
    popularity: 0.85,
    tags: ["Odisha", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "prawns", name: "Prawns (cleaned)", qty: "400g", price: 250, available: true },
      { id: "mustard_paste", name: "Yellow Mustard Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "1 large", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 40, available: false }
    ],
    steps: [
      "Marinate prawns with salt and turmeric.",
      "Heat mustard oil and sauté prawns for 2 minutes; remove and set aside.",
      "In the same oil, sauté onions and green chilies.",
      "Add mustard paste, turmeric, and chili powder; sauté briefly (do not overcook mustard paste).",
      "Add tomatoes and water; bring to a boil.",
      "Add prawns and simmer for 5 minutes until the gravy thickens slightly."
    ]
  },
  {
    id: "mutton-kassa-odia",
    menuCategory: "Dry & Stir-Fried",
    name: "Mutton Kassa",
    description: "A slow-cooked, spicy, and semi-dry Odia mutton preparation where the meat is roasted with onions and spices.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 420,
    popularity: 0.90,
    tags: ["Odisha", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "onion", name: "Onions (sliced)", qty: "3 large", price: 15, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "4 tbsp", price: 20, available: true },
      { id: "garam_masala", name: "Odia Garam Masala", qty: "1 tbsp", price: 25, available: false }
    ],
    steps: [
      "Marinate mutton with ginger-garlic paste, yogurt, and mustard oil for 2 hours.",
      "Sauté sliced onions in a heavy pot until they are deep brown and caramelized.",
      "Add the marinated mutton and cook on high heat to seal the juices.",
      "Reduce heat and 'kassa' (roast) the mutton by stirring frequently with small splashes of water.",
      "Add spices and continue roasting until the meat is tender and the masala is thick and dark.",
      "Garnish with coriander and serve with rice or paratha."
    ]
  },
  {
    id: "chicken-kassa-odia",
    menuCategory: "Protein Specialties",
    name: "Chicken Kassa",
    description: "Chicken pieces slow-roasted in a thick onion-tomato gravy with traditional Odia spices.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.84,
    tags: ["Odisha", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "onion", name: "Onions", qty: "2 large", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "spices", name: "Chicken Masala", qty: "2 tbsp", price: 105, available: false }
    ],
    steps: [
      "Heat mustard oil and fry onion slices until golden brown.",
      "Add ginger-garlic paste and sauté until the raw smell is gone.",
      "Add chicken and cook on high heat for 5 minutes.",
      "Add tomatoes, turmeric, chili powder, and chicken masala.",
      "Cook on low heat, roasting the chicken in the masala until the oil separates.",
      "Finish with a sprinkle of garam masala."
    ]
  },
  {
    id: "dahi-machha-odia",
    menuCategory: "Curries & Gravies",
    name: "Dahi Machha",
    description: "Fish steaks simmered in a creamy and mildly spiced yogurt-based gravy, an Odia delicacy.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 320,
    popularity: 0.81,
    tags: ["Odisha", "East Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "fish", name: "Rohu or Catla Fish", qty: "500g", price: 200, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1 cup", price: 20, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 90, available: false }
    ],
    steps: [
      "Lightly fry marinated fish slices and set aside.",
      "Temper oil with mustard seeds, cumin, and green chilies.",
      "Add ginger paste and turmeric; sauté for a minute.",
      "Whisk yogurt with a little water and salt; pour into the pan on very low heat.",
      "Continuously stir to avoid curdling.",
      "Add the fried fish and simmer for 5 minutes until the gravy thickens."
    ]
  },
  {
    id: "kankada-jhola-odia",
    menuCategory: "Curries & Gravies",
    name: "Kankada Jhola",
    description: "Spicy Odia crab curry made with a hearty onion-tomato base and fresh coastal crabs.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 3,
    difficulty: "Hard",
    cost: 450,
    popularity: 0.79,
    tags: ["Odisha", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "crab", name: "Fresh Crabs (cleaned)", qty: "500g", price: 350, available: true },
      { id: "onion", name: "Onion Paste", qty: "1/2 cup", price: 10, available: true },
      { id: "tomato", name: "Tomato Puree", qty: "1/2 cup", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 70, available: false }
    ],
    steps: [
      "Sauté crab pieces with turmeric and salt until they turn orange; set aside.",
      "In a heavy pot, sauté onion paste and ginger-garlic paste until brown.",
      "Add tomato puree and spices; cook until the oil separates.",
      "Add the fried crabs and toss to coat with the masala.",
      "Add warm water and simmer for 15 minutes until the gravy is rich.",
      "Finish with Odia garam masala."
    ]
  },
  {
    id: "chicken-rai-odia",
    menuCategory: "Curries & Gravies",
    name: "Chicken Rai",
    description: "A unique Odia chicken curry where mustard seeds (Rai) form the pungent and spicy base of the gravy.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.75,
    tags: ["Odisha", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds (ground)", qty: "2 tbsp", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "8", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 115, available: false }
    ],
    steps: [
      "Grind mustard seeds, garlic, and green chilies into a fine paste.",
      "Sauté onions in mustard oil until translucent.",
      "Add chicken and cook until seared.",
      "Add the mustard-garlic paste and turmeric.",
      "Add water and simmer until the chicken is tender and the gravy is pungent and spicy.",
      "Do not overcook after adding mustard paste to avoid bitterness."
    ]
  },
  {
    id: "macha-besara-odia",
    menuCategory: "Curries & Gravies",
    name: "Macha Besara",
    description: "Classic Odia fish curry prepared with a mustard-seed paste and flavored with sun-dried mango (Ambula).",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 330,
    popularity: 0.82,
    tags: ["Odisha", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Fish Slices", qty: "500g", price: 200, available: true },
      { id: "mustard_paste", name: "Besara (Mustard Paste)", qty: "2 tbsp", price: 15, available: true },
      { id: "ambula", name: "Sun-dried Mango (Ambula)", qty: "2 pieces", price: 10, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 100, available: false }
    ],
    steps: [
      "Fry the marinated fish steaks and set aside.",
      "Sauté panch phoran and green chilies in mustard oil.",
      "Add mustard paste mixed with water and turmeric.",
      "Add the sun-dried mango (Ambula) and bring to a boil.",
      "Gently add the fried fish pieces.",
      "Simmer for 5 minutes until the gravy is tangy and pungent."
    ]
  },
  {
    id: "mutton-curry-odia-style",
    menuCategory: "Curries & Gravies",
    name: "Mutton Curry Odia Style",
    description: "A traditional mutton curry with a rich gravy of onions and poppy seeds, typical of Odia home cooking.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 430,
    popularity: 0.85,
    tags: ["Odisha", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 350, available: true },
      { id: "onion", name: "Onions", qty: "3 large", price: 15, available: true },
      { id: "poppy_seeds", name: "Poppy Seeds (Posto)", qty: "1 tbsp", price: 25, available: true },
      { id: "garam_masala", name: "Whole Garam Masala", qty: "as needed", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt and turmeric until tender.",
      "Grind poppy seeds and cashews into a fine paste.",
      "Sauté whole spices and onions until caramelized.",
      "Add ginger-garlic paste and the poppy seed paste; sauté well.",
      "Add cooked mutton and its broth.",
      "Simmer until the gravy is thick and aromatic."
    ]
  },
  {
    id: "prawn-malai-curry-odia",
    menuCategory: "Curries & Gravies",
    name: "Prawn Malai Curry Odia Style",
    description: "Creamy and rich prawn curry cooked in fresh coconut milk with subtle Odia spices.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 380,
    popularity: 0.77,
    tags: ["Odisha", "East Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "prawns", name: "Large Prawns", qty: "400g", price: 300, available: true },
      { id: "coconut_milk", name: "Coconut Milk", qty: "1 cup", price: 40, available: true },
      { id: "ginger_paste", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 tsp", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 30, available: false }
    ],
    steps: [
      "Sauté prawns with salt and turmeric in ghee; set aside.",
      "In the same pan, sauté whole spices and ginger paste.",
      "Add a little coconut milk and stir.",
      "Pour in the rest of the coconut milk, sugar, and salt.",
      "Add the sautéed prawns and simmer for 5 minutes.",
      "The gravy should be creamy and mildly sweet."
    ]
  },
  {
    id: "chicken-curry-odia-style",
    menuCategory: "Curries & Gravies",
    name: "Chicken Curry Odia Style",
    description: "Comforting home-style chicken curry with large potato chunks in a light ginger-garlic gravy.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.80,
    tags: ["Odisha", "East Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "potato", name: "Potatoes (large chunks)", qty: "2", price: 10, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "cumin_powder", name: "Cumin Powder", qty: "1 tsp", price: 90, available: false }
    ],
    steps: [
      "Fry potato chunks and set aside.",
      "Sauté onions until light golden; add ginger-garlic paste.",
      "Add chicken and fry for 10 minutes.",
      "Add turmeric, chili powder, and fried potatoes.",
      "Add water and simmer until chicken and potatoes are tender.",
      "This is a light gravy perfect for lunch with rice."
    ]
  },
  {
    id: "anda-tarkari-odia",
    menuCategory: "Curries & Gravies",
    name: "Anda Tarkari",
    description: "Hard-boiled eggs simmered in a spicy Odia-style onion-tomato gravy.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.74,
    tags: ["Odisha", "East Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 20, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tsp", price: 10, available: true },
      { id: "panch_phoran", name: "Panch Phoran", qty: "1/2 tsp", price: 65, available: false }
    ],
    steps: [
      "Deep fry boiled eggs until the skin is golden and slightly crispy; set aside.",
      "Temper oil with panch phoran.",
      "Sauté onions and ginger-garlic paste until brown.",
      "Add tomatoes and spices; cook into a thick masala.",
      "Add water to make a gravy and bring to a boil.",
      "Add the fried eggs and simmer for 5 minutes."
    ]
  },
  {
    id: "machha-ambila-odia",
    menuCategory: "Curries & Gravies",
    name: "Machha Ambila",
    description: "A sour and tangy fish curry prepared with tomatoes and raw mango, a refreshing coastal dish.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 320,
    popularity: 0.72,
    tags: ["Odisha", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Fish pieces", qty: "500g", price: 200, available: true },
      { id: "raw_mango", name: "Raw Mango (sliced)", qty: "1/2 cup", price: 15, available: true },
      { id: "tomato", name: "Tomatoes", qty: "2", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 90, available: false }
    ],
    steps: [
      "Fry the fish slices and set aside.",
      "Cook raw mango slices and tomatoes with green chilies in water.",
      "Add turmeric and salt.",
      "Once the mango is soft, add the fried fish.",
      "Temper with mustard seeds and curry leaves in mustard oil.",
      "The result is a light, sour, and refreshing curry."
    ]
  },
  {
    id: "kosha-mangsho-odia-style",
    menuCategory: "Curries & Gravies",
    name: "Kosha Mangsho Odia Style",
    description: "A dark and spicy slow-cooked mutton curry, heavily roasted until the gravy is thick and intense.",
    type: "Non-Vegetarian",
    time: 75,
    servings: 4,
    difficulty: "Hard",
    cost: 430,
    popularity: 0.81,
    tags: ["Odisha", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 350, available: true },
      { id: "onion", name: "Onions", qty: "4", price: 20, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "spices", name: "Odia Meat Masala", qty: "3 tbsp", price: 50, available: true }
    ],
    steps: [
      "Marinate mutton in ginger-garlic, curd, and meat masala.",
      "Sauté onions in mustard oil until they are dark brown.",
      "Add the meat and roast (kassa) on medium-low heat for 40 minutes.",
      "Add minimal water only if the masala sticks to the pot.",
      "The meat should be dark brown and falling off the bone.",
      "Serve with hot Basanti Pulao or Kanika."
    ]
  },
  {
    id: "chuna-machha-bhaja-odia",
    menuCategory: "Protein Specialties",
    name: "Chuna Machha Bhaja",
    description: "Crispy shallow-fried small freshwater fish marinated in Odia spices, a crunchy appetizer.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.74,
    tags: ["Odisha", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "small_fish", name: "Small Fish (Chuna Machha)", qty: "300g", price: 200, available: true },
      { id: "rice_flour", name: "Rice Flour", qty: "1 tbsp", price: 5, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric", qty: "1/2 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1/4 cup", price: 65, available: false }
    ],
    steps: [
      "Clean the small fish thoroughly.",
      "Marinate with salt, turmeric, chili powder, and rice flour.",
      "Heat mustard oil in a flat pan.",
      "Shallow fry the fish in batches until they are golden brown and very crunchy.",
      "Serve as a snack or side dish with Pakhala."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "dalma-odia",
    menuCategory: "Curries & Gravies",
    name: "Dalma",
    description: "The most iconic Odia dish—lentils cooked with mixed vegetables and finished with a roasted cumin-chili spice.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.92,
    tags: ["Odisha", "East Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "mixed_veg", name: "Raw Papaya, Pumpkin, Brinjal, Taro", qty: "2 cups", price: 30, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "cumin_chili_powder", name: "Roasted Cumin Chili Powder", qty: "1 tbsp", price: 15, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook dal and vegetables with ginger, salt, and turmeric until soft.",
      "In a small pan, temper panch phoran and dried red chilies in ghee.",
      "Pour the tempering into the cooked dal.",
      "Sprinkle the signature roasted cumin-chili powder over the top.",
      "Stir gently and serve hot with rice."
    ]
  },
  {
    id: "santula-odia",
    menuCategory: "Curries & Gravies",
    name: "Santula",
    description: "A light and nutritious mixed vegetable stew, either boiled or fried, with minimal spices.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 75,
    popularity: 0.70,
    tags: ["Odisha", "East Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mixed_veg", name: "Papaya, Beans, Carrot, Brinjal", qty: "300g", price: 40, available: true },
      { id: "milk", name: "Milk (optional)", qty: "1/4 cup", price: 5, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "garlic", name: "Crushed Garlic", qty: "5 cloves", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 20, available: false }
    ],
    steps: [
      "Boil the chopped vegetables with salt until tender.",
      "Heat oil and temper with mustard seeds and crushed garlic.",
      "Add green chilies and then the boiled vegetables.",
      "Sauté for 2-3 minutes.",
      "Add a splash of milk for a richer version or keep it light.",
      "Serve as a healthy side dish."
    ]
  },
  {
    id: "ghanta-tarkari-odia",
    menuCategory: "Curries & Gravies",
    name: "Ghanta Tarkari",
    description: "A grand mixed vegetable curry prepared during festivals using local produce and panchphoran.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 85,
    popularity: 0.84,
    tags: ["Odisha", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "mixed_veg", name: "Pumpkin, Taro, Yam, Sprouts", qty: "2 cups", price: 40, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "2 tbsp", price: 10, available: true },
      { id: "panch_phoran", name: "Panch Phoran", qty: "1 tsp", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 15, available: false }
    ],
    steps: [
      "Boil vegetables and sprouts until tender.",
      "Sauté onions and ginger-garlic paste in mustard oil.",
      "Add turmeric, chili powder, and cumin powder.",
      "Add the boiled vegetables and mix well.",
      "Stir in grated coconut and salt; simmer for 5 minutes.",
      "Serve with paratha or rice."
    ]
  },
  {
    id: "chhena-poda-odia",
    menuCategory: "Desserts & Sweets",
    name: "Chhena Poda",
    description: "The pride of Odia sweets—baked cottage cheese cake with a caramelized crust, traditionally cooked in a wood-fired oven.",
    type: "Vegetarian",
    time: 50,
    servings: 6,
    difficulty: "Medium",
    cost: 120,
    popularity: 0.95,
    tags: ["Odisha", "East Indian", "Vegetarian", "Dessert"],
    ingredients: [
      { id: "paneer", name: "Fresh Chhena (Paneer)", qty: "500g", price: 80, available: true },
      { id: "sugar", name: "Sugar", qty: "1 cup", price: 15, available: true },
      { id: "semolina", name: "Semolina (Sooji)", qty: "2 tbsp", price: 5, available: true },
      { id: "cardamom", name: "Cardamom Powder", qty: "1/2 tsp", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Knead fresh chhena with sugar until smooth and creamy.",
      "Add semolina and cardamom powder; mix well.",
      "Caramelize a little sugar at the bottom of a baking tin.",
      "Pour the chhena mixture into the tin.",
      "Bake at 180°C for 45 minutes or until the top is dark brown and caramelized.",
      "Cool and slice before serving."
    ]
  },
  {
    id: "besara-odia",
    menuCategory: "Curries & Gravies",
    name: "Besara",
    description: "Mixed vegetables cooked in a pungent and aromatic mustard-seed gravy, a hallmark of Odia cuisine.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 75,
    popularity: 0.78,
    tags: ["Odisha", "East Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "mixed_veg", name: "Drumstick, Brinjal, Potato, Raw Banana", qty: "2 cups", price: 30, available: true },
      { id: "mustard_paste", name: "Yellow Mustard Paste", qty: "2 tbsp", price: 15, available: true },
      { id: "panch_phoran", name: "Panch Phoran", qty: "1 tsp", price: 5, available: true },
      { id: "ambula", name: "Sun-dried Mango", qty: "1 piece", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 15, available: false }
    ],
    steps: [
      "Boil vegetables with turmeric and salt until half-cooked.",
      "Add mustard paste mixed with water.",
      "Add Ambula for sourness.",
      "Simmer until vegetables are fully cooked.",
      "Temper with panch phoran and dried red chilies in mustard oil.",
      "Serve hot with steamed rice."
    ]
  },
  {
    id: "saga-bhaja-odia",
    menuCategory: "Dry & Stir-Fried",
    name: "Saga Bhaja",
    description: "Simple stir-fried seasonal leafy greens with a healthy dose of garlic and dried red chilies.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.68,
    tags: ["Odisha", "East Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "greens", name: "Seasonal Greens (Kosala/Amaranth)", qty: "2 bunches", price: 20, available: true },
      { id: "garlic", name: "Garlic (crushed)", qty: "6 cloves", price: 5, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "chili", name: "Dry Red Chilies", qty: "2", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Wash and chop the greens finely.",
      "Heat oil and temper with mustard seeds and red chilies.",
      "Add crushed garlic and sauté until golden brown.",
      "Add the greens and salt.",
      "Stir-fry on medium-high heat until the water evaporates and greens are tender.",
      "Serve as a healthy side."
    ]
  },
  {
    id: "kanika-odia",
    menuCategory: "Curries & Gravies",
    name: "Kanika",
    description: "A sweet and aromatic yellow rice dish (pulao) enriched with ghee, sugar, and dried fruits.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.81,
    tags: ["Odisha", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "basmati_rice", name: "Basmati Rice", qty: "2 cups", price: 60, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 cup", price: 10, available: true },
      { id: "nuts", name: "Cashews and Raisins", qty: "1/4 cup", price: 30, available: true },
      { id: "turmeric", name: "Turmeric (for color)", qty: "pinch", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Wash rice and soak for 20 minutes.",
      "Heat ghee and fry whole spices (cloves, cardamom, cinnamon) and nuts.",
      "Add the soaked rice and turmeric; sauté for 2 minutes.",
      "Add 4 cups of water and salt.",
      "When rice is half-cooked, add sugar.",
      "Simmer until water is absorbed and rice is fluffy and sweet."
    ]
  },
  {
    id: "alu-potala-rasa-odia",
    menuCategory: "Curries & Gravies",
    name: "Alu Potala Rasa",
    description: "A classic potato and pointed gourd (parwal) curry in a spiced tomato gravy.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.72,
    tags: ["Odisha", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "potato", name: "Potato", qty: "2 medium", price: 10, available: true },
      { id: "potala", name: "Pointed Gourd (Potala)", qty: "250g", price: 20, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Peel and cube potatoes; scrape and cut potala into halves.",
      "Shallow fry both and set aside.",
      "Sauté onions and ginger paste until light brown.",
      "Add tomatoes and dry spices; cook until soft.",
      "Add fried vegetables and salt; toss well.",
      "Add water and simmer for 10 minutes."
    ]
  },
  {
    id: "dahi-baigana-odia",
    menuCategory: "Curries & Gravies",
    name: "Dahi Baigana",
    description: "Fried brinjal slices soaked in a cool and tempered yogurt sauce.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.76,
    tags: ["Odisha", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "brinjal", name: "Brinjal (sliced)", qty: "1 large", price: 15, available: true },
      { id: "yogurt", name: "Thick Yogurt", qty: "1 cup", price: 15, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "1 tbsp", price: 30, available: false }
    ],
    steps: [
      "Shallow fry brinjal slices until golden and soft.",
      "Whisk yogurt with salt and a pinch of sugar.",
      "Temper oil with mustard seeds, dried red chilies, and curry leaves.",
      "Pour the tempering into the yogurt.",
      "Add the fried brinjal slices to the yogurt sauce.",
      "Serve chilled as a side dish."
    ]
  },
  {
    id: "chhena-tarkari-odia",
    menuCategory: "Curries & Gravies",
    name: "Chhena Tarkari",
    description: "Homemade cottage cheese (chhena) cubes simmered in a light, spicy tomato-onion gravy.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.82,
    tags: ["Odisha", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "chhena", name: "Fresh Chhena (Paneer)", qty: "250g", price: 50, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Form fresh chhena into cubes; lightly fry and set aside.",
      "Sauté onions and ginger-garlic paste until soft.",
      "Add tomatoes and spices; cook into a gravy.",
      "Add the chhena cubes and salt.",
      "Simmer for 5 minutes and garnish with coriander."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "pakhala-bhaja-odia",
    menuCategory: "Snacks & Street Food",
    name: "Pakhala Bhaja",
    description: "Fermented rice served with a variety of crispy fried side dishes—the ultimate Odia summer comfort food.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.94,
    tags: ["Odisha", "East Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "cooked_rice", name: "Cooked Rice", qty: "3 cups", price: 20, available: true },
      { id: "yogurt", name: "Curd", qty: "1/4 cup", price: 10, available: true },
      { id: "lemon", name: "Lemon / Small Onions", qty: "as needed", price: 10, available: true },
      { id: "fried_veg", name: "Potato or Brinjal Fry", qty: "as needed", price: 15, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tsp", price: 5, available: false }
    ],
    steps: [
      "Soak cooked rice in water overnight (for fermented Pakhala) or for an hour (for Sajja Pakhala).",
      "Stir in whisked curd and salt.",
      "Add lemon slices or small onions for tanginess.",
      "Temper with mustard seeds and curry leaves in oil.",
      "Serve with fried potatoes, roasted papad, or fish fry."
    ]
  },
  {
    id: "aloo-chop-odia",
    menuCategory: "Snacks & Street Food",
    name: "Aloo Chop",
    description: "The classic street snack of Odisha—spiced mashed potato balls dipped in gram flour batter and deep-fried.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.88,
    tags: ["Odisha", "East Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "potato", name: "Boiled Potatoes", qty: "4", price: 15, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "1 cup", price: 15, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 20, available: false }
    ],
    steps: [
      "Mash boiled potatoes; sauté with spices and ginger-garlic paste.",
      "Form small balls and flatten them slightly.",
      "Make a thick batter with besan, salt, and chili powder.",
      "Dip the potato patties in batter and deep fry until golden brown.",
      "Serve hot with spicy chutney."
    ]
  },
  {
    id: "dahi-vada-odia-style",
    menuCategory: "Snacks & Street Food",
    name: "Dahi Vada Odia Style",
    description: "Spiced lentil dumplings soaked in thin, flavored yogurt, a famous Cuttack street food.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.91,
    tags: ["Odisha", "East Indian", "Vegetarian", "Snacks", "Street Food"],
    ingredients: [
      { id: "urad_dal", name: "Urad Dal", qty: "1 cup", price: 25, available: true },
      { id: "curd", name: "Whisked Yogurt", qty: "2 cups", price: 20, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 20, available: false }
    ],
    steps: [
      "Soak urad dal for 4 hours; grind into a fluffy batter.",
      "Deep fry small vadas until golden; soak them in warm water for 5 minutes.",
      "Squeeze out water and drop the vadas into thin spiced yogurt.",
      "Temper with mustard seeds and curry leaves.",
      "Often served with spicy Ghugni (yellow pea curry)."
    ]
  },
  {
    id: "chhena-jhili-odia",
    menuCategory: "Snacks & Street Food",
    name: "Chhena Jhili",
    description: "Delicate and soft fried cottage cheese dumplings soaked in a light sugar syrup, a sweet specialty from Nimapada.",
    type: "Vegetarian",
    time: 35,
    servings: 6,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.89,
    tags: ["Odisha", "East Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "paneer", name: "Fresh Chhena", qty: "250g", price: 50, available: true },
      { id: "sugar", name: "Sugar", qty: "1 cup", price: 15, available: true },
      { id: "semolina", name: "Sooji", qty: "1 tsp", price: 5, available: true },
      { id: "ghee", name: "Ghee for frying", qty: "1 cup", price: 30, available: false }
    ],
    steps: [
      "Knead fresh chhena with a teaspoon of semolina until very soft.",
      "Form into small flat rings or rounds.",
      "Prepare a thin, hot sugar syrup.",
      "Deep fry the chhena rings in ghee on low-medium heat until light golden.",
      "Immediately drop into the sugar syrup.",
      "Serve warm."
    ]
  },
  {
    id: "fish-chop-odia",
    menuCategory: "Snacks & Street Food",
    name: "Fish Chop",
    description: "Crispy breaded croquettes made with spiced minced fish and potatoes, a favorite evening snack.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.83,
    tags: ["Odisha", "East Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "fish", name: "Boiled Minced Fish", qty: "250g", price: 150, available: true },
      { id: "potato", name: "Mashed Potato", qty: "1 cup", price: 10, available: true },
      { id: "breadcrumbs", name: "Bread Crumbs", qty: "1 cup", price: 20, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 60, available: false }
    ],
    steps: [
      "Mix minced fish with mashed potatoes, ginger-garlic paste, and spices.",
      "Form into oval-shaped patties.",
      "Dip in a thin flour slurry and then roll in breadcrumbs.",
      "Deep fry or shallow fry until dark golden and crispy.",
      "Serve hot with tomato ketchup and onion salad."
    ]
  }
];
