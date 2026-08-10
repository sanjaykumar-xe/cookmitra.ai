import { Recipe } from './types';

export const karnatakaRecipes: Recipe[] = [
  // --- VEGETARIAN (15) ---
  {
    id: "bisi-bele-bath",
    menuCategory: "Rice & Biryani",
    name: "Bisi Bele Bath",
    description: "A wholesome and spicy one-pot meal made of rice, lentils, and mixed vegetables, flavored with a unique spice blend.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 110,
    popularity: 0.9,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "rice", name: "Rice", qty: "1 cup", price: 20, available: true },
      { id: "toor_dal", name: "Toor Dal", qty: "1/2 cup", price: 15, available: true },
      { id: "mixed_veg", name: "Carrot, Beans, Peas", qty: "1.5 cups", price: 30, available: true },
      { id: "bbb_powder", name: "Bisi Bele Bath Powder", qty: "3 tbsp", price: 20, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "2 tbsp", price: 5, available: false }
    ],
    steps: [
      "Pressure cook rice and dal with turmeric until very soft.",
      "Cook mixed vegetables in tamarind water until tender.",
      "Mix the cooked rice-dal with vegetables and Bisi Bele Bath powder.",
      "Simmer for 10 minutes, adding water to get a mushy consistency.",
      "Temper with mustard seeds, red chilies, and curry leaves in ghee."
    ]
  },
  {
    id: "ragi-mudde",
    menuCategory: "Curries & Gravies",
    name: "Ragi Mudde",
    description: "Nutritious steamed finger millet balls, a traditional staple in South Karnataka, usually eaten with a spicy saaru.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.85,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "ragi_flour", name: "Ragi (Finger Millet) Flour", qty: "2 cups", price: 30, available: true },
      { id: "water", name: "Water", qty: "4 cups", price: 0, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tsp", price: 10, available: true },
      { id: "salt", name: "Salt", qty: "pinch", price: 2, available: true }
    ],
    steps: [
      "Bring water to a boil with a little salt and ghee.",
      "Mix a little ragi flour with cold water to make a slurry and add to the boiling water.",
      "Slowly add the remaining ragi flour while stirring constantly to avoid lumps.",
      "Cover and steam on low heat for 5-7 minutes.",
      "While hot, take a portion and roll into a smooth ball using wet hands."
    ]
  },
  {
    id: "vangi-bath",
    menuCategory: "Rice & Biryani",
    name: "Vangi Bath",
    description: "Fragrant and spicy brinjal rice made with a signature roasted spice powder called Vangi Bath powder.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.82,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "rice", name: "Cooked Rice", qty: "3 cups", price: 20, available: true },
      { id: "brinjal", name: "Brinjal (Long variety)", qty: "250g", price: 25, available: true },
      { id: "vb_powder", name: "Vangi Bath Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 5, available: true },
      { id: "peanuts", name: "Roasted Peanuts", qty: "2 tbsp", price: 10, available: false }
    ],
    steps: [
      "Sauté sliced brinjals in oil until they are soft and slightly browned.",
      "Add tamarind pulp, salt, and Vangi Bath powder to the brinjals.",
      "Cook for 2-3 minutes until the spices coat the vegetables.",
      "Mix in the cooked rice and roasted peanuts gently.",
      "Finish with a tempering of mustard seeds and curry leaves."
    ]
  },
  {
    id: "akki-roti",
    menuCategory: "Breads",
    name: "Akki Roti",
    description: "A popular breakfast flatbread made from rice flour, flavored with onions, dill leaves, and green chilies.",
    type: "Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.88,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Breakfast"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 30, available: true },
      { id: "onion", name: "Finely chopped Onion", qty: "1", price: 5, available: true },
      { id: "dill_leaves", name: "Dill Leaves (Sabbasige)", qty: "1/4 cup", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 2, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: false }
    ],
    steps: [
      "Mix rice flour, onion, dill leaves, chilies, cumin, and salt in a bowl.",
      "Gradually add warm water to make a soft, pliable dough.",
      "Pat a portion of dough directly onto a cold greased tawa.",
      "Cook on medium heat with a lid, drizzling oil around the edges.",
      "Remove when both sides are crispy and golden."
    ]
  },
  {
    id: "huli-karnataka",
    menuCategory: "Curries & Gravies",
    name: "Huli",
    description: "A classic South Karnataka lentil-vegetable stew, more robust and slightly sweeter than Tamil sambar.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.78,
    tags: ["Karnataka", "South Indian", "Vegetarian"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "mixed_veg", name: "Beans, Pumpkin, Carrot", qty: "2 cups", price: 20, available: true },
      { id: "huli_powder", name: "Huli Powder (Sambar powder)", qty: "2 tbsp", price: 15, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "2 tbsp", price: 5, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1 tsp", price: 2, available: false }
    ],
    steps: [
      "Cook toor dal with turmeric until mushy.",
      "Cook vegetables in tamarind water until tender.",
      "Add huli powder, salt, and jaggery to the vegetables.",
      "Mix in the cooked dal and simmer for 10 minutes.",
      "Temper with mustard, red chilies, and curry leaves."
    ]
  },
  {
    id: "majjige-huli",
    menuCategory: "Curries & Gravies",
    name: "Majjige Huli",
    description: "A cooling and aromatic white pumpkin curry made with a spiced yogurt and coconut base.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.75,
    tags: ["Karnataka", "South Indian", "Vegetarian"],
    ingredients: [
      { id: "white_pumpkin", name: "Ash Gourd (White Pumpkin)", qty: "250g", price: 20, available: true },
      { id: "curd", name: "Sour Curd", qty: "1.5 cups", price: 20, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "chana_dal", name: "Soaked Chana Dal", qty: "1 tbsp", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 10, available: false }
    ],
    steps: [
      "Boil ash gourd pieces with salt and turmeric until tender.",
      "Grind coconut, chana dal, green chili, and ginger into a fine paste.",
      "Whisk curd and mix with the ground paste and cooked pumpkin.",
      "Simmer on low heat (do not boil) until it froths.",
      "Temper with mustard seeds and curry leaves in coconut oil."
    ]
  },
  {
    id: "kosambari",
    menuCategory: "Salads",
    name: "Kosambari",
    description: "A light and refreshing lentil salad made with soaked moong dal, cucumber, and fresh coconut.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.86,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "moong_dal", name: "Yellow Moong Dal", qty: "1/2 cup", price: 15, available: true },
      { id: "cucumber", name: "Cucumber (chopped)", qty: "1", price: 10, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "2 tbsp", price: 10, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "coriander", name: "Coriander Leaves", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Soak moong dal in water for 1 hour, then drain completely.",
      "In a bowl, mix soaked dal, chopped cucumber, and coconut.",
      "Add lemon juice, salt, and finely chopped coriander.",
      "Temper with mustard seeds and green chili in a teaspoon of oil.",
      "Mix well and serve as a side or snack."
    ]
  },
  {
    id: "ennegai",
    menuCategory: "Curries & Gravies",
    name: "Ennegai",
    description: "North Karnataka specialty stuffed brinjal curry made with a spicy peanut and sesame seed masala.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.81,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "brinjal", name: "Small Purple Brinjals", qty: "8", price: 30, available: true },
      { id: "peanuts", name: "Roasted Peanuts", qty: "1/4 cup", price: 15, available: true },
      { id: "sesame", name: "Sesame Seeds", qty: "2 tbsp", price: 10, available: true },
      { id: "niger_seeds", name: "Niger Seeds (Uchellu)", qty: "1 tbsp", price: 20, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Grind peanuts, sesame, niger seeds, and spices into a thick masala paste.",
      "Slit brinjals and stuff them with the masala.",
      "Sauté onions and then add the stuffed brinjals to a pan.",
      "Add remaining masala, tamarind pulp, and jaggery.",
      "Cook on low heat until the brinjals are tender and the gravy is thick."
    ]
  },
  {
    id: "gojju",
    menuCategory: "Curries & Gravies",
    name: "Pineapple Gojju",
    description: "A unique sweet, tangy, and spicy curry made with chunks of pineapple and a ground coconut-spice paste.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.72,
    tags: ["Karnataka", "South Indian", "Vegetarian"],
    ingredients: [
      { id: "pineapple", name: "Pineapple chunks", qty: "2 cups", price: 40, available: true },
      { id: "sesame", name: "White Sesame Seeds", qty: "1 tbsp", price: 5, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "jaggery", name: "Jaggery", qty: "2 tbsp", price: 5, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 15, available: false }
    ],
    steps: [
      "Cook pineapple chunks with turmeric and salt until slightly soft.",
      "Dry roast sesame and grind with coconut and red chilies into a paste.",
      "Add the paste to the pineapple with tamarind and jaggery.",
      "Simmer for 10 minutes until it thickens.",
      "Temper with mustard and curry leaves."
    ]
  },
  {
    id: "chitranna",
    menuCategory: "Rice & Biryani",
    name: "Chitranna (Lemon Rice)",
    description: "Traditional Karnataka lemon rice tempered with peanuts and turmeric, a common temple prasada.",
    type: "Vegetarian",
    time: 20,
    servings: 3,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.89,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Breakfast"],
    ingredients: [
      { id: "rice", name: "Cooked Rice", qty: "3 cups", price: 15, available: true },
      { id: "lemon", name: "Lemon", qty: "1 large", price: 5, available: true },
      { id: "peanuts", name: "Peanuts", qty: "2 tbsp", price: 10, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/2 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 15, available: false }
    ],
    steps: [
      "Heat oil and fry peanuts until crunchy.",
      "Add mustard seeds, urad dal, green chilies, and curry leaves.",
      "Add turmeric and salt; turn off the heat.",
      "Squeeze lemon juice into the tempering and mix.",
      "Toss the tempering with cooked rice thoroughly."
    ]
  },
  {
    id: "pumpkin-sagu",
    menuCategory: "Curries & Gravies",
    name: "Pumpkin Sagu",
    description: "A mild and creamy vegetable curry made with red pumpkin and a ground coconut-poppy seed masala.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.68,
    tags: ["Karnataka", "South Indian", "Vegetarian"],
    ingredients: [
      { id: "pumpkin", name: "Red Pumpkin", qty: "300g", price: 20, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "poppy_seeds", name: "Poppy Seeds (Gasagase)", qty: "1 tsp", price: 15, available: true },
      { id: "cinnamon", name: "Cinnamon Stick", qty: "1 inch", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 10, available: false }
    ],
    steps: [
      "Cook pumpkin cubes until soft but holding shape.",
      "Grind coconut, poppy seeds, and cinnamon into a fine paste.",
      "Sauté onions until translucent, then add the ground paste.",
      "Mix in the cooked pumpkin and salt.",
      "Simmer for 5 minutes and serve with set dosa or chapati."
    ]
  },
  {
    id: "beans-palya",
    menuCategory: "Dry & Stir-Fried",
    name: "Beans Palya",
    description: "Simple and nutritious green beans stir-fry finished with a generous garnish of fresh coconut.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.74,
    tags: ["Karnataka", "South Indian", "Vegetarian"],
    ingredients: [
      { id: "beans", name: "Green Beans", qty: "250g", price: 30, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "3 tbsp", price: 10, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "urad_dal", name: "Urad Dal", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: false }
    ],
    steps: [
      "Finely chop beans and steam until tender.",
      "Heat oil and temper with mustard, urad dal, and green chili.",
      "Add curry leaves and the cooked beans.",
      "Stir-fry on medium heat with salt for 2 minutes.",
      "Turn off heat and garnish with fresh coconut."
    ]
  },
  {
    id: "kadubu",
    menuCategory: "Curries & Gravies",
    name: "Kadubu",
    description: "Traditional steamed rice flour dumplings, often made during festivals as an offering.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.65,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Breakfast"],
    ingredients: [
      { id: "rice_rava", name: "Rice Rava (Idli Rava)", qty: "2 cups", price: 30, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 5, available: true },
      { id: "water", name: "Water", qty: "4 cups", price: 10, available: false }
    ],
    steps: [
      "Boil water with salt, cumin, and grated coconut.",
      "Slowly add rice rava and stir to form a thick dough.",
      "Cool slightly and shape into cylinders or rounds.",
      "Steam the dumplings for 10-12 minutes.",
      "Serve warm with coconut chutney."
    ]
  },
  {
    id: "avarekalu-usli",
    menuCategory: "Dry & Stir-Fried",
    name: "Avarekalu Usli",
    description: "Seasonal specialty made with hyacinth beans, stir-fried with coconut and green chilies.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 75,
    popularity: 0.70,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "avarekalu", name: "Hyacinth Beans (Peeled)", qty: "2 cups", price: 40, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "3 tbsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook the peeled beans with a little salt for 2 whistles.",
      "Heat oil, temper with mustard, cumin, and green chilies.",
      "Add the cooked beans and sauté to remove moisture.",
      "Add fresh coconut and lemon juice.",
      "Mix well and serve as a healthy tea-time snack."
    ]
  },
  {
    id: "karnataka-sambar",
    menuCategory: "Curries & Gravies",
    name: "Karnataka Style Sambar",
    description: "A quintessential South Karnataka sambar variant made with fresh ground spices and a hint of sweetness.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 85,
    popularity: 0.84,
    tags: ["Karnataka", "South Indian", "Vegetarian"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "drumstick", name: "Drumstick", qty: "2", price: 15, available: true },
      { id: "sambar_powder", name: "Fresh Sambar Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "tamarind", name: "Tamarind", qty: "lemon size", price: 10, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook dal until mushy.",
      "Boil drumsticks in tamarind water with salt and turmeric.",
      "Add sambar powder and jaggery; simmer for 5 minutes.",
      "Add mashed dal and water to reach desired consistency.",
      "Finish with a tempering of mustard and curry leaves."
    ]
  },

  // --- NON-VEGETARIAN (15) ---
  {
    id: "kori-gassi",
    menuCategory: "Curries & Gravies",
    name: "Kori Gassi",
    description: "Authentic Mangalorean chicken curry with a rich and spicy coconut-based gravy, usually served with Neer Dosa.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.88,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 150, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1 cup", price: 20, available: true },
      { id: "red_chili", name: "Byadagi Red Chilies", qty: "8", price: 10, available: true },
      { id: "fennel", name: "Fennel Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 85, available: false }
    ],
    steps: [
      "Dry roast chilies, coriander seeds, fennel, and coconut; grind to a smooth paste.",
      "Sauté onions and ginger-garlic paste in coconut oil.",
      "Add chicken and ground masala paste; sauté until seared.",
      "Add tamarind juice and water; simmer until chicken is tender.",
      "The gravy should be thick and reddish-orange."
    ]
  },
  {
    id: "mutton-sukka-karnataka",
    menuCategory: "Protein Specialties",
    name: "Karnataka Mutton Sukka",
    description: "A dry mutton preparation where meat is slow-cooked and roasted with a coarse coconut and black pepper masala.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 420,
    popularity: 0.85,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "pepper", name: "Black Peppercorns", qty: "2 tsp", price: 5, available: true },
      { id: "poppy_seeds", name: "Poppy Seeds", qty: "1 tsp", price: 15, available: true },
      { id: "shallots", name: "Shallots", qty: "10", price: 35, available: false }
    ],
    steps: [
      "Pressure cook mutton with ginger-garlic paste until tender.",
      "Grind roasted coconut, pepper, and spices into a coarse powder.",
      "Sauté shallots and curry leaves; add cooked mutton (drain excess stock).",
      "Stir in the dry masala powder and roast on high heat.",
      "Sauté until the meat is completely dry and well-coated."
    ]
  },
  {
    id: "chicken-ghee-roast-karnataka",
    menuCategory: "Protein Specialties",
    name: "Chicken Ghee Roast",
    description: "Fiery red, tangy and rich Mangalorean chicken dish roasted in a generous amount of pure ghee.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 320,
    popularity: 0.92,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken chunks", qty: "500g", price: 150, available: true },
      { id: "ghee", name: "Pure Ghee", qty: "4 tbsp", price: 80, available: true },
      { id: "curd", name: "Thick Curd", qty: "1/4 cup", price: 10, available: true },
      { id: "kashmiri_chili", name: "Kashmiri Red Chilies", qty: "10", price: 20, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 62, available: false }
    ],
    steps: [
      "Marinate chicken in curd, turmeric, and lemon juice for 1 hour.",
      "Roast dry red chilies, peppercorns, and spices; grind into a thick paste.",
      "Heat ghee in a pan and sauté the chicken until nearly cooked.",
      "Add the masala paste and roast on low heat until the ghee separates.",
      "Sauté until chicken is tender and coated in the dark red masala."
    ]
  },
  {
    id: "koli-saaru",
    menuCategory: "Curries & Gravies",
    name: "Koli Saaru",
    description: "Rustic Karnataka style soupy chicken curry, usually made in rural households and served with Ragi Mudde.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.78,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 150, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "garam_masala", name: "Meat Masala Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "poppy_seeds", name: "Poppy Seeds", qty: "1 tsp", price: 80, available: false }
    ],
    steps: [
      "Grind roasted onions, coconut, poppy seeds, and ginger-garlic into a smooth paste.",
      "Sauté chicken in a pot until it changes color.",
      "Add the ground paste and spice powders; cook for 5 minutes.",
      "Add 3 cups of water and salt; bring to a boil.",
      "Simmer until chicken is cooked through and gravy is thin but flavorful."
    ]
  },
  {
    id: "mangalore-fish-curry",
    menuCategory: "Curries & Gravies",
    name: "Mangalorean Fish Curry",
    description: "A tangy coastal delicacy with coconut and tamarind, featuring the distinct aroma of roasted spices.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 350,
    popularity: 0.85,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Seer Fish or Rohu", qty: "500g", price: 250, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1 cup", price: 20, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "2 tbsp", price: 5, available: true },
      { id: "coriander_seeds", name: "Coriander Seeds", qty: "1 tbsp", price: 10, available: true },
      { id: "fenugreek", name: "Fenugreek Seeds", qty: "1/4 tsp", price: 65, available: false }
    ],
    steps: [
      "Grind coconut, roasted red chilies, coriander seeds, and fenugreek into a smooth paste.",
      "Add tamarind juice to the paste and mix with water.",
      "Bring the gravy to a boil in a wide pot.",
      "Carefully add the fish pieces and simmer for 10 minutes.",
      "Temper with mustard seeds and curry leaves in coconut oil."
    ]
  },
  {
    id: "bangude-pulimunchi",
    menuCategory: "Curries & Gravies",
    name: "Bangude Pulimunchi",
    description: "Famous coastal dish where mackerel (Bangude) is cooked in a sharp tamarind (Puli) and chili (Munchi) paste.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 340,
    popularity: 0.81,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mackerel", name: "Mackerel Fish", qty: "4 whole", price: 200, available: true },
      { id: "tamarind", name: "Large lump of Tamarind", qty: "50g", price: 15, available: true },
      { id: "red_chili", name: "Byadagi Red Chilies", qty: "12", price: 15, available: true },
      { id: "peppercorns", name: "Black Peppercorns", qty: "1 tsp", price: 10, available: true },
      { id: "onion", name: "Shallots", qty: "1/2 cup", price: 100, available: false }
    ],
    steps: [
      "Make a very thick, smooth paste of soaked tamarind, red chilies, pepper, and garlic.",
      "Sauté shallots in coconut oil; add the thick spice paste.",
      "Cook until the raw smell of tamarind vanishes.",
      "Add fish pieces and gently coat with the masala.",
      "Cover and simmer for 8 minutes until fish is done and masala is semi-dry."
    ]
  },
  {
    id: "kundapur-chicken-curry",
    menuCategory: "Curries & Gravies",
    name: "Kundapur Chicken Curry",
    description: "A signature chicken curry from the coastal town of Kundapur, known for its unique roasted coconut masala.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.83,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "coconut", name: "Dry Coconut (Kobbari)", qty: "1/2 cup", price: 15, available: true },
      { id: "poppy_seeds", name: "Poppy Seeds", qty: "1 tsp", price: 15, available: true },
      { id: "fennel", name: "Fennel Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "2 sprigs", price: 115, available: false }
    ],
    steps: [
      "Dry roast coconut, poppy seeds, and whole spices until dark golden; grind with water.",
      "Heat coconut oil; sauté onions and curry leaves.",
      "Add chicken and sauté until it turns white.",
      "Pour in the ground masala and salt; simmer for 20 minutes.",
      "The gravy should be thick and dark brown."
    ]
  },
  {
    id: "coorg-pandi-curry",
    menuCategory: "Curries & Gravies",
    name: "Coorg Pandi Curry",
    description: "Legendary Kodava style pork curry featuring the unique, dark 'Kachampuli' (Coorg vinegar).",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 380,
    popularity: 0.87,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork belly/shoulder", qty: "500g", price: 300, available: true },
      { id: "kachampuli", name: "Kachampuli Vinegar", qty: "1 tsp", price: 30, available: true },
      { id: "pandi_masala", name: "Coorg Meat Masala", qty: "2 tbsp", price: 20, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "pepper", name: "Black Pepper", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Pressure cook pork with turmeric and salt for 4 whistles.",
      "In a wide pan, roast the Coorg meat masala and lots of pepper until fragrant.",
      "Add pre-cooked meat and ginger-garlic paste.",
      "Sauté until the fat releases and the masala turns dark brown/black.",
      "Stir in Kachampuli at the very end and cook for 2 minutes."
    ]
  },
  {
    id: "kori-rotti",
    menuCategory: "Curries & Gravies",
    name: "Kori Rotti",
    description: "Spicy Mangalorean chicken curry served with crisp, thin rice wafers (Rotti) that soften as they soak up the gravy.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 290,
    popularity: 0.89,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken pieces", qty: "500g", price: 150, available: true },
      { id: "rice_rotti", name: "Crisp Rice Wafers (Kori Rotti)", qty: "1 packet", price: 60, available: true },
      { id: "coconut_milk", name: "Fresh Coconut Milk", qty: "1 cup", price: 40, available: true },
      { id: "masala", name: "Mangalorean Spice Mix", qty: "3 tbsp", price: 20, available: true },
      { id: "oil", name: "Coconut Oil", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Prepare a thin, spicy chicken curry using roasted coconut masala.",
      "Stir in coconut milk at the end to add richness.",
      "The gravy must be thin and ample for soaking.",
      "Place rice wafers in a bowl and pour hot curry over them.",
      "Wait for 2 minutes for the wafers to soften and enjoy."
    ]
  },
  {
    id: "chicken-sukka-karnataka",
    menuCategory: "Protein Specialties",
    name: "Chicken Sukka",
    description: "Mangalorean dry chicken dish where meat is slow-cooked with a heavily seasoned roasted coconut crumble.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.84,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Boneless Chicken", qty: "500g", price: 180, available: true },
      { id: "coconut", name: "Fresh Grated Coconut", qty: "1 cup", price: 20, available: true },
      { id: "byadagi", name: "Byadagi Red Chilies", qty: "8", price: 10, available: true },
      { id: "coriander", name: "Coriander Seeds", qty: "1 tbsp", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 60, available: false }
    ],
    steps: [
      "Grind half the coconut with spices into a smooth paste.",
      "Cook chicken with the paste and minimal water until tender.",
      "Coarsely grind the remaining coconut and add it to the pan.",
      "Toss on high heat until the mixture is dry and the coconut forms a golden coating.",
      "Garnish with lots of curry leaves."
    ]
  },
  {
    id: "prawn-ghee-roast",
    menuCategory: "Protein Specialties",
    name: "Prawn Ghee Roast",
    description: "Succulent prawns tossed in a fiery Mangalorean ghee-roasted masala, a coastal favorite.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 380,
    popularity: 0.82,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "prawns", name: "Prawns (cleaned)", qty: "400g", price: 300, available: true },
      { id: "ghee", name: "Ghee", qty: "3 tbsp", price: 40, available: true },
      { id: "red_chili", name: "Kashmiri Red Chilies", qty: "10", price: 15, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 5, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "2 sprigs", price: 20, available: false }
    ],
    steps: [
      "Marinate prawns in yogurt and salt for 15 minutes.",
      "Make a smooth paste of roasted chilies and spices.",
      "Heat ghee and sauté the prawns for 2 minutes; set aside.",
      "In the same ghee, roast the masala until oil separates.",
      "Add back prawns and toss until coated and cooked."
    ]
  },
  {
    id: "mutton-curry-karnataka",
    menuCategory: "Curries & Gravies",
    name: "Mutton Curry Karnataka Style",
    description: "Hearty and spicy mutton curry from the plains of Karnataka, made with a fresh poppy seed and coconut base.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 420,
    popularity: 0.81,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "gasagase", name: "Poppy Seeds (Gasagase)", qty: "1 tsp", price: 15, available: true },
      { id: "cloves", name: "Cloves and Cinnamon", qty: "small amount", price: 30, available: false }
    ],
    steps: [
      "Grind coconut, poppy seeds, and whole spices into a smooth paste.",
      "Pressure cook mutton with onions and ginger-garlic until tender.",
      "Add the ground masala and meat masala powder.",
      "Simmer for 15 minutes until the oil floats on top.",
      "Serve with Ragi Mudde or hot rice."
    ]
  },
  {
    id: "egg-curry-karnataka",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry Karnataka Style",
    description: "Boiled eggs simmered in a spicy coconut-based green masala with coriander and mint.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.80,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 20, available: true },
      { id: "coconut", name: "Coconut", qty: "1/4 cup", price: 10, available: true },
      { id: "coriander", name: "Coriander Leaves", qty: "1/2 cup", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "cloves", name: "Cloves", qty: "2", price: 65, available: false }
    ],
    steps: [
      "Grind coconut, coriander, mint, green chilies, and cloves into a green paste.",
      "Sauté onions in oil until translucent.",
      "Add the green masala and salt; sauté until fragrant.",
      "Add a cup of water and simmer to form a gravy.",
      "Add halved boiled eggs and simmer for 5 minutes."
    ]
  },
  {
    id: "mangalore-fish-fry",
    menuCategory: "Protein Specialties",
    name: "Fish Fry Mangalorean Style",
    description: "Crispy, spicy shallow-fried fish steaks coated with semolina (Rava) for extra crunch.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 3,
    difficulty: "Medium",
    cost: 350,
    popularity: 0.86,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "fish", name: "Seer Fish or Kingfish", qty: "400g", price: 280, available: true },
      { id: "rawa", name: "Semolina (Rawa)", qty: "1/2 cup", price: 10, available: true },
      { id: "chili_powder", name: "Mangalore Fish Chili Powder", qty: "1 tbsp", price: 15, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Coconut Oil", qty: "1/4 cup", price: 40, available: false }
    ],
    steps: [
      "Marinate fish slices in chili powder, salt, and lemon juice for 30 minutes.",
      "Dredge the marinated fish in semolina until evenly coated.",
      "Heat coconut oil in a flat pan.",
      "Shallow fry until both sides are dark red and very crispy.",
      "Garnish with onion rings and lemon wedges."
    ]
  },
  {
    id: "crab-sukka",
    menuCategory: "Protein Specialties",
    name: "Crab Sukka",
    description: "Coastal style dry roasted crab curry featuring the intense heat of Guntur chilies and sweet coconut.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 3,
    difficulty: "Hard",
    cost: 450,
    popularity: 0.79,
    tags: ["Karnataka", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "crab", name: "Cleaned Mud Crabs", qty: "500g", price: 350, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1 cup", price: 20, available: true },
      { id: "spices", name: "Mangalore Sukka Masala", qty: "2 tbsp", price: 15, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 5, available: true },
      { id: "onion", name: "Finely chopped Onion", qty: "1", price: 60, available: false }
    ],
    steps: [
      "Grind half the coconut with sukka masala into a fine paste.",
      "Cook crabs with the paste and tamarind water until tender.",
      "Coarsely grind the rest of the coconut and toss it in.",
      "Sauté on high heat until the coconut is roasted and clings to the crab shells.",
      "Garnish with curry leaves and serve as a specialty appetizer."
    ]
  },

  // --- SNACKS (10) ---
  {
    id: "mysore-masala-dosa",
    menuCategory: "Breads",
    name: "Mysore Masala Dosa",
    description: "Famous crispy dosa with a signature spicy red garlic-chili chutney spread inside and a potato filling.",
    type: "Vegetarian",
    time: 30,
    servings: 2,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.94,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Snacks", "Breakfast", "Spicy"],
    ingredients: [
      { id: "dosa_batter", name: "Fermented Dosa Batter", qty: "2 cups", price: 30, available: true },
      { id: "potato_filling", name: "Potato Masala", qty: "1 cup", price: 20, available: true },
      { id: "red_chutney", name: "Red Garlic Chutney", qty: "1/4 cup", price: 15, available: true },
      { id: "butter", name: "Butter or Ghee", qty: "2 tbsp", price: 25, available: true },
      { id: "garlic", name: "Garlic", qty: "4 cloves", price: 15, available: false }
    ],
    steps: [
      "Heat a tawa and spread a ladle of batter to make a thick, fluffy dosa.",
      "Spread 1 teaspoon of spicy red chutney on the top surface.",
      "Add a dollop of butter and smear it around.",
      "Place potato masala in the center and fold.",
      "Cook until the exterior is dark golden and very crispy."
    ]
  },
  {
    id: "maddur-vada",
    menuCategory: "Snacks & Street Food",
    name: "Maddur Vada",
    description: "The legendary railway snack—crisp, flat onion fritters from the town of Maddur, flavored with curry leaves.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 60,
    popularity: 0.85,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "maida", name: "Refined Flour (Maida)", qty: "1 cup", price: 10, available: true },
      { id: "rawa", name: "Semolina (Rawa)", qty: "1/2 cup", price: 5, available: true },
      { id: "onion", name: "Sliced Onions", qty: "1/2 cup", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 30, available: false }
    ],
    steps: [
      "Mix maida, rawa, sliced onions, green chilies, and salt.",
      "Add a tablespoon of hot oil and mix with fingers to a crumbly texture.",
      "Add very little water to form a stiff dough.",
      "Flatten small portions into discs on a greased sheet.",
      "Deep fry until golden brown and extremely crispy."
    ]
  },
  {
    id: "goli-baje",
    menuCategory: "Snacks & Street Food",
    name: "Goli Baje (Mangalore Bajji)",
    description: "Soft, spongy fried fritters from coastal Karnataka, made from a fermented yogurt and maida batter.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.82,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "maida", name: "Maida", qty: "1.5 cups", price: 15, available: true },
      { id: "curd", name: "Thick Yogurt", qty: "1 cup", price: 15, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "coconut_bits", name: "Fresh Coconut Bits", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Whisk maida and thick curd into a smooth batter; add ginger and chilies.",
      "Let the batter ferment for at least 3-4 hours for fluffiness.",
      "Stir in fresh coconut bits and a pinch of baking soda just before frying.",
      "Drop small balls of batter into hot oil using wet fingers.",
      "Deep fry until they turn golden brown and puffy."
    ]
  },
  {
    id: "benne-dosa",
    menuCategory: "Breads",
    name: "Davangere Benne Dosa",
    description: "Famous buttery dosa from Davangere, served with a specific potato mash and spicy coconut chutney.",
    type: "Vegetarian",
    time: 25,
    servings: 2,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.88,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Breakfast", "Snacks"],
    ingredients: [
      { id: "dosa_batter", name: "Puffed Rice Dosa Batter", qty: "2 cups", price: 20, available: true },
      { id: "butter", name: "White Butter (Benne)", qty: "1/4 cup", price: 40, available: true },
      { id: "potato", name: "Potato Palya", qty: "1 cup", price: 10, available: true },
      { id: "chutney", name: "Spicy Coconut Chutney", qty: "1/4 cup", price: 10, available: false }
    ],
    steps: [
      "Spread a ladle of batter to make a slightly thick dosa.",
      "Apply a generous dollop of white butter all over.",
      "Cook on medium heat until the bottom is crispy and light golden.",
      "Do not flip; the butter will seep through.",
      "Serve hot with potato mash and watery coconut chutney."
    ]
  },
  {
    id: "kodubale",
    menuCategory: "Snacks & Street Food",
    name: "Kodubale",
    description: "Crunchy, ring-shaped savory snack made from rice flour and roasted gram flour, flavored with cumin and chili.",
    type: "Vegetarian",
    time: 30,
    servings: 6,
    difficulty: "Medium",
    cost: 60,
    popularity: 0.76,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 30, available: true },
      { id: "roasted_gram", name: "Fried Gram Flour (Hurigadale)", qty: "1/4 cup", price: 10, available: true },
      { id: "coconut", name: "Dry Coconut bits", qty: "2 tbsp", price: 10, available: true },
      { id: "chili_powder", name: "Chili Powder", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 5, available: false }
    ],
    steps: [
      "Mix rice flour, fried gram flour, coconut, and spices.",
      "Add hot oil to the flour and mix until crumbly.",
      "Knead into a tight dough with very little water.",
      "Roll small portions into thin ropes and join the ends to form rings.",
      "Deep fry on medium heat until crunchy and dark golden."
    ]
  },
  {
    id: "ambode",
    menuCategory: "Snacks & Street Food",
    name: "Ambode (Masala Vada)",
    description: "Crispy and spicy deep-fried chana dal fritters flavored with dill leaves and ginger.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.81,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "chana_dal", name: "Chana Dal", qty: "1 cup", price: 20, available: true },
      { id: "onion", name: "Finely chopped Onion", qty: "1", price: 5, available: true },
      { id: "dill", name: "Fresh Dill Leaves", qty: "1/4 cup", price: 10, available: true },
      { id: "ginger", name: "Ginger paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "1 cup", price: 30, available: false }
    ],
    steps: [
      "Soak chana dal for 2 hours; grind into a coarse paste without water.",
      "Add onions, dill leaves, ginger, and green chilies to the paste.",
      "Form small flat patties using your palms.",
      "Deep fry in hot oil until very crispy and golden brown.",
      "Serve hot with tea or as a festival meal side."
    ]
  },
  {
    id: "nippattu",
    menuCategory: "Snacks & Street Food",
    name: "Nippattu",
    description: "Famous savory rice crackers from Karnataka, studded with peanuts and gram dal for extra crunch.",
    type: "Vegetarian",
    time: 35,
    servings: 6,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.74,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 30, available: true },
      { id: "maida", name: "Maida", qty: "2 tbsp", price: 5, available: true },
      { id: "peanuts", name: "Crushed Peanuts", qty: "1/4 cup", price: 15, available: true },
      { id: "sesame", name: "Sesame Seeds", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 20, available: false }
    ],
    steps: [
      "Mix rice flour, peanuts, sesame seeds, and chili powder.",
      "Add hot oil to the dry ingredients and rub well.",
      "Knead into a firm dough with minimal water.",
      "Flatten into thin discs and deep fry on low heat.",
      "Roast until dark golden to ensure they are crunchy through and through."
    ]
  },
  {
    id: "mysore-pak",
    menuCategory: "Desserts & Sweets",
    name: "Mysore Pak",
    description: "The royal sweet of Karnataka—a rich and porous melt-in-the-mouth fudge made with gram flour and ghee.",
    type: "Vegetarian",
    time: 30,
    servings: 8,
    difficulty: "Hard",
    cost: 150,
    popularity: 0.95,
    tags: ["Karnataka", "South Indian", "Dessert", "Snacks"],
    ingredients: [
      { id: "besan", name: "Besan (Gram Flour)", qty: "1 cup", price: 20, available: true },
      { id: "sugar", name: "Sugar", qty: "2 cups", price: 20, available: true },
      { id: "ghee", name: "Pure Ghee", qty: "1.5 cups", price: 100, available: true },
      { id: "cardamom", name: "Cardamom Powder", qty: "pinch", price: 10, available: false }
    ],
    steps: [
      "Roast besan in a little ghee and sieve for a smooth texture.",
      "Prepare a one-string sugar syrup.",
      "Slowly add sieved besan to the syrup while stirring constantly.",
      "Pour hot ghee in batches until the mixture starts frothing and becomes porous.",
      "Quickly pour into a greased tray and cut into blocks when warm."
    ]
  },
  {
    id: "obbattu",
    menuCategory: "Desserts & Sweets",
    name: "Obbattu (Holige)",
    description: "Sweet festive flatbread stuffed with a blend of cooked lentils and jaggery.",
    type: "Vegetarian",
    time: 45,
    servings: 6,
    difficulty: "Hard",
    cost: 110,
    popularity: 0.88,
    tags: ["Karnataka", "South Indian", "Dessert", "Snacks"],
    ingredients: [
      { id: "maida", name: "Maida", qty: "1 cup", price: 10, available: true },
      { id: "chana_dal", name: "Chana Dal", qty: "1 cup", price: 15, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1 cup", price: 20, available: true },
      { id: "ghee", name: "Ghee for roasting", qty: "3 tbsp", price: 30, available: true },
      { id: "turmeric", name: "Turmeric", qty: "pinch", price: 35, available: false }
    ],
    steps: [
      "Cook dal and grind with jaggery into a thick paste (Puran).",
      "Knead a soft, stretchy dough using maida, oil, and water.",
      "Stuff a ball of puran inside a portion of dough.",
      "Roll into a thin flatbread on a greased sheet.",
      "Cook on a hot tawa with ghee until both sides have golden spots."
    ]
  },
  {
    id: "mangalore-buns",
    menuCategory: "Snacks & Street Food",
    name: "Mangalore Buns",
    description: "Soft, sweet, and fluffy banana-based fried bread, a coastal Karnataka breakfast specialty.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.84,
    tags: ["Karnataka", "South Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "banana", name: "Ripe Bananas", qty: "2", price: 10, available: true },
      { id: "maida", name: "Maida", qty: "2 cups", price: 20, available: true },
      { id: "sugar", name: "Sugar", qty: "1 tbsp", price: 5, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 30, available: false }
    ],
    steps: [
      "Mash bananas with sugar and cumin into a smooth paste.",
      "Knead with maida and a little curd into a soft dough.",
      "Let the dough rest for at least 6 hours for better texture.",
      "Roll into thick small circles.",
      "Deep fry in hot oil until they puff up into golden balloons."
    ]
  }
];
