import { Recipe } from './types';

export const madhyaPradeshRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (15) ---
  {
    id: "bhopali-chicken-curry",
    menuCategory: "Curries & Gravies",
    name: "Bhopali Chicken Curry",
    description: "A rich and aromatic chicken curry from the city of lakes, characterized by its deep onion-tomato base and local spice blend.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.85,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 150, available: true },
      { id: "onion", name: "Onions (sliced)", qty: "3 large", price: 15, available: true },
      { id: "tomato", name: "Tomatoes (chopped)", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "spices", name: "Bhopali Masala", qty: "2 tbsp", price: 95, available: false }
    ],
    steps: [
      "Heat oil in a heavy pot and fry sliced onions until deep golden brown.",
      "Add ginger-garlic paste and sauté until the raw smell disappears.",
      "Add chicken pieces and fry on high heat for 5 minutes.",
      "Stir in tomatoes, turmeric, chili powder, and Bhopali spice mix.",
      "Cover and simmer until the chicken is tender and the oil separates from the gravy."
    ]
  },
  {
    id: "mutton-korma-bhopali",
    menuCategory: "Curries & Gravies",
    name: "Mutton Korma Bhopali",
    description: "A royal, creamy, and mildly spicy mutton korma made with a rich paste of nuts and slow-cooked to perfection.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 430,
    popularity: 0.82,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "cashews", name: "Cashew Paste", qty: "1/4 cup", price: 30, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "saffron", name: "Saffron strands", qty: "pinch", price: 35, available: false },
      { id: "ghee", name: "Ghee", qty: "3 tbsp", price: 0, available: true }
    ],
    steps: [
      "Pressure cook mutton with salt and turmeric until 80% tender.",
      "Heat ghee and sauté whole spices until aromatic.",
      "Add cashew paste and yogurt; cook on low heat until oil separates.",
      "Add the pre-cooked mutton and any remaining broth.",
      "Simmer for 15 minutes, adding saffron-infused milk at the end for a royal finish."
    ]
  },
  {
    id: "malwa-chicken-curry",
    menuCategory: "Curries & Gravies",
    name: "Malwa Style Chicken Curry",
    description: "A tangy and garlic-forward chicken curry typical of the Malwa plateau, using mustard oil for a pungent kick.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.78,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "garlic", name: "Garlic (crushed)", qty: "10 cloves", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "dry_chili", name: "Dried Red Chilies", qty: "4", price: 5, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "1 sprig", price: 75, available: false }
    ],
    steps: [
      "Heat mustard oil to smoking point; let it cool slightly and reheat.",
      "Temper with dried red chilies and lots of crushed garlic.",
      "Add chicken and fry on high heat until browned.",
      "Add turmeric and salt; simmer with minimal water.",
      "The result is a dryish, pungent chicken dish with intense garlic flavor."
    ]
  },
  {
    id: "keema-matar-mp",
    menuCategory: "Curries & Gravies",
    name: "Keema Matar",
    description: "Classic spiced minced mutton cooked with fresh green peas and a fragrant blend of central Indian spices.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 350,
    popularity: 0.81,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "minced_mutton", name: "Mutton Mince (Keema)", qty: "500g", price: 300, available: true },
      { id: "peas", name: "Fresh Green Peas", qty: "1/2 cup", price: 15, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "mint", name: "Fresh Mint", qty: "handful", price: 15, available: false }
    ],
    steps: [
      "Sauté onions and ginger-garlic paste until deep brown.",
      "Add minced meat and fry on high heat until the color changes.",
      "Add spices, peas, and a splash of water.",
      "Cover and cook for 15-20 minutes until the peas are tender.",
      "Garnish with fresh mint and coriander; serve with pav or paratha."
    ]
  },
  {
    id: "chicken-rogan-josh-bhopali",
    menuCategory: "Curries & Gravies",
    name: "Chicken Rogan Josh Bhopali",
    description: "A Central Indian take on Rogan Josh, using a deep red spice blend and slow-cooking for tender, falling-off-the-bone meat.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.79,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "kashmiri_chili", name: "Kashmiri Chili Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "fennel_powder", name: "Fennel Powder", qty: "1 tsp", price: 5, available: true },
      { id: "ginger_powder", name: "Ginger Powder (Saunth)", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "3 tbsp", price: 110, available: false }
    ],
    steps: [
      "Marinate chicken in chili powder and salt for 30 minutes.",
      "Sauté chicken in oil until seared; remove and set aside.",
      "In the same oil, sauté fennel and ginger powders.",
      "Return chicken to the pan and add enough water to cover.",
      "Slow cook until the gravy is thin, deep red, and the chicken is tender."
    ]
  },
  {
    id: "mutton-curry-malwa",
    menuCategory: "Curries & Gravies",
    name: "Mutton Curry Malwa Style",
    description: "Rustic and slow-cooked mutton curry from the Malwa region, known for its spicy and thin gravy.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 420,
    popularity: 0.76,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "4 tbsp", price: 40, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "15", price: 10, available: true },
      { id: "onion", name: "Onion paste", qty: "1/2 cup", price: 10, available: true },
      { id: "spices", name: "Malwa Meat Masala", qty: "2 tbsp", price: 10, available: false }
    ],
    steps: [
      "Heat mustard oil to smoking point; add crushed garlic and sauté.",
      "Add onion paste and fry until brown.",
      "Add mutton and roast on high heat for 10 minutes.",
      "Add spices and salt; simmer with minimal water.",
      "The result is a fiery, thin gravy typical of rural MP."
    ]
  },
  {
    id: "chicken-do-pyaza-mp",
    menuCategory: "Curries & Gravies",
    name: "Chicken Do Pyaza MP Style",
    description: "A Central Indian version of the double-onion chicken curry, balancing sweetness and spice.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.74,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "onion_sliced", name: "Onions (sliced)", qty: "2 large", price: 15, available: true },
      { id: "onion_cubes", name: "Onions (large cubes)", qty: "1 large", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 85, available: false }
    ],
    steps: [
      "Sauté sliced onions until golden; add ginger-garlic paste.",
      "Add chicken and sear on high heat.",
      "Add spices and tomatoes; cook until soft.",
      "Stir in the cubed onions and cook for another 10 minutes.",
      "The cubed onions should be soft but retain their shape, providing texture."
    ]
  },
  {
    id: "mutton-seekh-kebab-mp",
    menuCategory: "Starters & Appetizers",
    name: "Mutton Seekh Kebab",
    description: "Spiced minced mutton skewers grilled to perfection, a popular street-side delicacy in Bhopali bazaars.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Hard",
    cost: 350,
    popularity: 0.83,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "minced_mutton", name: "Mutton Mince", qty: "500g", price: 300, available: true },
      { id: "besan", name: "Roasted Besan", qty: "2 tbsp", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tbsp", price: 10, available: true },
      { id: "papaya_paste", name: "Raw Papaya Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "mint", name: "Mint & Coriander", qty: "handful", price: 25, available: false }
    ],
    steps: [
      "Mix minced meat with papaya paste and let it rest for 2 hours to tenderize.",
      "Add roasted besan, ginger-garlic, and spices.",
      "Mix in finely chopped mint and coriander.",
      "Form into long cylinders around skewers.",
      "Grill or pan-fry with ghee until charred and cooked through."
    ]
  },
  {
    id: "chicken-chaap-bhopali",
    menuCategory: "Curries & Gravies",
    name: "Chicken Chaap Bhopali",
    description: "Pan-seared spiced chicken pieces slow-cooked in a rich, oily gravy, a specialty of Bhopal.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.77,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken_pieces", name: "Chicken Leg/Thigh", qty: "500g", price: 160, available: true },
      { id: "yogurt", name: "Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "onion_paste", name: "Onion Paste", qty: "1/2 cup", price: 10, available: true },
      { id: "cashew_paste", name: "Cashew Paste", qty: "2 tbsp", price: 20, available: true },
      { id: "garlic", name: "Garlic", qty: "6 cloves", price: 75, available: false }
    ],
    steps: [
      "Marinate chicken in curd and salt for 1 hour.",
      "Heat oil in a wide pan and sear chicken pieces until golden; set aside.",
      "In the same pan, fry onion paste and ginger-garlic until brown.",
      "Add cashew paste and spices; sauté until the oil separates.",
      "Return chicken to the pan and slow cook until tender and the gravy is thick."
    ]
  },
  {
    id: "egg-curry-mp",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry MP Style",
    description: "Hard-boiled eggs simmered in a tangy and spicy onion-tomato gravy, a common morning meal in central India.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.79,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 55, available: false }
    ],
    steps: [
      "Prick boiled eggs and sauté in oil with a pinch of turmeric; set aside.",
      "Sauté onions until golden; add ginger-garlic paste and tomatoes.",
      "Add turmeric, chili powder, and coriander powder; cook until soft.",
      "Add a cup of water and bring to a boil.",
      "Add eggs and simmer for 5 minutes."
    ]
  },
  {
    id: "mutton-nihari-bhopali",
    menuCategory: "Curries & Gravies",
    name: "Mutton Nihari Bhopali",
    description: "A slow-simmered, extremely tender mutton stew, traditionally cooked overnight and served for breakfast in Bhopal.",
    type: "Non-Vegetarian",
    time: 120,
    servings: 4,
    difficulty: "Hard",
    cost: 450,
    popularity: 0.84,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_shank", name: "Mutton (with marrow)", qty: "500g", price: 380, available: true },
      { id: "wheat_flour", name: "Wheat Flour (Atta)", qty: "2 tbsp", price: 5, available: true },
      { id: "nihari_masala", name: "Nihari Spice Blend", qty: "3 tbsp", price: 20, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "handful", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "1/4 cup", price: 35, available: false }
    ],
    steps: [
      "Sear mutton in ghee with ginger-garlic paste.",
      "Add Nihari masala and salt; sauté briefly.",
      "Add 4 cups of water and pressure cook for 15-20 whistles until very soft.",
      "Dissolve wheat flour in water to make a slurry; stir into the stew.",
      "Simmer for 20 minutes until the gravy thickens.",
      "Serve hot with ginger, green chili, and lemon."
    ]
  },
  {
    id: "chicken-korma-bhopali-mild",
    menuCategory: "Curries & Gravies",
    name: "Mild Bhopali Chicken Korma",
    description: "A mild and creamy chicken korma from Bhopal, focusing on the sweetness of onions and the richness of nuts.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.70,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "onion_paste", name: "Boiled Onion Paste", qty: "1/2 cup", price: 10, available: true },
      { id: "almonds", name: "Almond Paste", qty: "2 tbsp", price: 30, available: true },
      { id: "yogurt", name: "Whisked Yogurt", qty: "1/2 cup", price: 15, available: true },
      { id: "cardamom", name: "Cardamom Powder", qty: "1/2 tsp", price: 95, available: false }
    ],
    steps: [
      "Sauté whole spices and onion paste in oil.",
      "Add chicken and cook until opaque.",
      "Stir in whisked yogurt and almond paste; cook on low heat.",
      "Add salt and cardamom powder.",
      "Simmer until chicken is cooked through and gravy is silky."
    ]
  },
  {
    id: "fish-curry-narmada",
    menuCategory: "Curries & Gravies",
    name: "Fish Curry Narmada Style",
    description: "A spicy river fish curry from the banks of the Narmada, cooked with mustard oil and rural Central Indian spices.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 320,
    popularity: 0.75,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "river_fish", name: "River Fish (Rohu/Catla)", qty: "500g", price: 200, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "garlic", name: "Garlic paste", qty: "1 tbsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric", qty: "1 tsp", price: 100, available: false }
    ],
    steps: [
      "Shallow fry marinated fish slices and set aside.",
      "Heat mustard oil; temper with mustard seeds and crushed garlic.",
      "Add turmeric, chili powder, and water; bring to a boil.",
      "Gently add the fried fish.",
      "Simmer for 8 minutes until the gravy is thin and pungent."
    ]
  },
  {
    id: "mutton-kaleji-mp",
    menuCategory: "Curries & Gravies",
    name: "Mutton Kaleji",
    description: "Spiced mutton liver stir-fry, a popular Central Indian delicacy often served as a side or snack.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.71,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_liver", name: "Mutton Liver (Kaleji)", qty: "500g", price: 250, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "pepper", name: "Black Pepper", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Sauté onions and ginger-garlic paste until soft.",
      "Add liver pieces and sear on high heat.",
      "Add spices and salt; toss continuously.",
      "Cook for 10 minutes until the liver is tender (do not overcook).",
      "Sprinkle black pepper and garnish with coriander."
    ]
  },
  {
    id: "chicken-handi-mp",
    menuCategory: "Curries & Gravies",
    name: "Chicken Handi",
    description: "Chicken curry slow-cooked in a traditional clay handi, absorbing the earthy aroma of the pot.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 310,
    popularity: 0.81,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "clay_handi", name: "Clay Handi (for cooking)", qty: "1", price: 100, available: true },
      { id: "onion", name: "Onion", qty: "2", price: 10, available: true },
      { id: "spices", name: "Central Indian Masala", qty: "2 tbsp", price: 15, available: true },
      { id: "oil", name: "Oil", qty: "3 tbsp", price: 25, available: false }
    ],
    steps: [
      "Sauté onions and spices in the clay handi.",
      "Add chicken and sear on high heat.",
      "Seal the lid with dough (dum style).",
      "Cook on low flame for 30 minutes.",
      "The slow cooking in clay gives it a unique earthy flavor."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "bhutte-ka-kees",
    menuCategory: "Curries & Gravies",
    name: "Bhutte Ka Kees",
    description: "A unique Indori specialty made with grated corn cooked with milk and tempered with spices.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.90,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "corn", name: "Grated Fresh Corn", qty: "2 cups", price: 40, available: true },
      { id: "milk", name: "Milk", qty: "1 cup", price: 15, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Heat oil and temper with mustard seeds and asafoetida.",
      "Add grated ginger and green chilies.",
      "Add grated corn and sauté for 5 minutes.",
      "Stir in milk and simmer until the corn absorbs the liquid.",
      "Season with salt and lemon juice; garnish with fresh coriander."
    ]
  },
  {
    id: "dal-bafla",
    menuCategory: "Curries & Gravies",
    name: "Dal Bafla",
    description: "The pride of Malwa—steamed and then baked wheat dumplings served with a spiced dal and lots of ghee.",
    type: "Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 90,
    popularity: 0.88,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "ghee", name: "Ghee", qty: "1/4 cup", price: 35, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true }
    ],
    steps: [
      "Make a stiff wheat dough; shape into balls.",
      "Boil the balls in water until they float.",
      "Bake the boiled balls in an oven or over charcoal until golden.",
      "Crack them open and dip in ghee.",
      "Serve hot with spiced toor dal."
    ]
  },
  {
    id: "sev-bhaji",
    menuCategory: "Snacks & Street Food",
    name: "Sev Bhaji",
    description: "Crunchy sev simmered in a fiery tomato-onion gravy, a popular spicy vegetarian meal in Central India.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.82,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "sev", name: "Thick Ratlami Sev", qty: "1 cup", price: 20, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 5, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tbsp", price: 30, available: false }
    ],
    steps: [
      "Sauté onions and ginger-garlic paste until soft.",
      "Add tomatoes and spices; cook into a thick masala.",
      "Add 2 cups of water and bring to a boil.",
      "Just before serving, add the thick sev to the boiling gravy.",
      "The sev will soften slightly but should retain some crunch."
    ]
  },
  {
    id: "palak-vadi-curry",
    menuCategory: "Curries & Gravies",
    name: "Palak Vadi Curry",
    description: "Spinach and gram flour dumplings (vadi) cooked in a light, spiced gravy.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.70,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "spinach", name: "Spinach (Chopped)", qty: "1 bunch", price: 15, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "1 cup", price: 15, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 35, available: false }
    ],
    steps: [
      "Mix spinach, besan, and spices to make a dough; steam it.",
      "Once cooled, cut into small cubes (vadis).",
      "Prepare a light gravy base with onions and spices.",
      "Add the vadis and simmer for 5 minutes.",
      "Serve with steamed rice."
    ]
  },
  {
    id: "indori-poha",
    menuCategory: "Breakfast & Tiffin",
    name: "Indori Poha",
    description: "The iconic breakfast of Indore—steamed flattened rice topped with spicy sev, pomegranate, and onions.",
    type: "Vegetarian",
    time: 20,
    servings: 3,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.94,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Breakfast", "Healthy"],
    ingredients: [
      { id: "poha", name: "Thick Poha", qty: "2 cups", price: 20, available: true },
      { id: "sev", name: "Indori Sev", qty: "1/2 cup", price: 15, available: true },
      { id: "pomegranate", name: "Pomegranate Seeds", qty: "2 tbsp", price: 10, available: true },
      { id: "fennel", name: "Fennel Seeds (Saunf)", qty: "1 tsp", price: 5, available: true },
      { id: "jeeravan", name: "Jeeravan Masala", qty: "1 tsp", price: 5, available: false }
    ],
    steps: [
      "Wash poha in a colander and drain; let it rest.",
      "Steam the poha for 5 minutes until fluffy.",
      "Temper oil with mustard, fennel seeds, and green chilies.",
      "Mix the tempering into the steamed poha with turmeric and salt.",
      "Serve topped with raw onions, sev, pomegranate, and Jeeravan masala."
    ]
  },
  {
    id: "chana-dal-sabzi-mp",
    menuCategory: "Curries & Gravies",
    name: "Chana Dal Sabzi",
    description: "Split chickpea curry tempered with cumin and whole red chilies, a protein-packed staple.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.70,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "chana_dal", name: "Chana Dal (soaked)", qty: "1 cup", price: 20, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "garlic", name: "Garlic", qty: "4 cloves", price: 5, available: true },
      { id: "dry_red_chili", name: "Dry Red Chili", qty: "2", price: 35, available: false }
    ],
    steps: [
      "Pressure cook dal with turmeric and salt for 3-4 whistles until soft but not mushy.",
      "In a small pan, heat oil/ghee and temper with cumin, garlic, and red chilies.",
      "Add a pinch of asafoetida.",
      "Mix the tempering into the dal and simmer for 2 minutes."
    ]
  },
  {
    id: "malpua-mp",
    menuCategory: "Desserts & Sweets",
    name: "Madhya Pradesh Malpua",
    description: "Sweet fried wheat pancakes soaked in sugar syrup, a festive specialty of Central India.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.83,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Dessert"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "1 cup", price: 10, available: true },
      { id: "sugar", name: "Sugar", qty: "1 cup", price: 10, available: true },
      { id: "fennel", name: "Fennel Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "ghee", name: "Ghee for frying", qty: "1 cup", price: 65, available: false }
    ],
    steps: [
      "Make a batter with flour, milk, and fennel seeds.",
      "Prepare a sugar syrup.",
      "Deep fry small pancakes in ghee until edges are crispy.",
      "Soak in sugar syrup for 2 minutes and serve warm."
    ]
  },
  {
    id: "kadhi-bhopali",
    menuCategory: "Curries & Gravies",
    name: "Kadhi Bhopali",
    description: "A tangy and mildly spiced yogurt-based curry with gram flour, simple yet comforting.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.78,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "curd", name: "Sour Curd", qty: "1.5 cups", price: 20, available: true },
      { id: "besan", name: "Besan", qty: "3 tbsp", price: 5, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "ginger", name: "Ginger paste", qty: "1 tsp", price: 35, available: false }
    ],
    steps: [
      "Whisk curd and besan with 3 cups of water.",
      "Boil the mixture with turmeric and ginger paste until it thickens.",
      "Temper with mustard seeds and curry leaves in oil.",
      "Serve hot with steamed rice."
    ]
  },
  {
    id: "bhindi-malwa",
    menuCategory: "Dry & Stir-Fried",
    name: "Bhindi Malwa Style",
    description: "Dry okra stir-fry with a coarse peanut-garlic seasoning, typical of the Malwa plateau.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.72,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "bhindi", name: "Okra (Bhindi)", qty: "250g", price: 20, available: true },
      { id: "peanuts", name: "Roasted Peanuts (crushed)", qty: "2 tbsp", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "4", price: 5, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 30, available: false }
    ],
    steps: [
      "Sauté okra in oil until they lose their stickiness.",
      "Add crushed garlic and spices.",
      "Stir-fry on high heat for 5 minutes.",
      "Turn off heat and garnish with crushed peanuts."
    ]
  },
  {
    id: "lapsi-mp",
    menuCategory: "Curries & Gravies",
    name: "Lapsi",
    description: "A traditional Central Indian sweet dish made with cracked wheat and jaggery.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.70,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Dessert"],
    ingredients: [
      { id: "dalia", name: "Cracked Wheat (Dalia)", qty: "1 cup", price: 15, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1/2 cup", price: 15, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 20, available: true },
      { id: "nuts", name: "Nuts", qty: "handful", price: 10, available: false }
    ],
    steps: [
      "Roast dalia in ghee until golden brown.",
      "Add 3 cups of water and pressure cook for 2 whistles.",
      "Stir in crushed jaggery and cook until it melts and the mixture thickens.",
      "Garnish with nuts and cardamom."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "indori-bhutte-ki-kees-chaat",
    menuCategory: "Snacks & Street Food",
    name: "Bhutte Ki Kees Chaat",
    description: "A snack version of the corn dish, served with extra lime, spicy sev, and coriander.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.88,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "bhutte_kees", name: "Bhutte Ka Kees", qty: "2 cups", price: 40, available: true },
      { id: "sev", name: "Indori Sev", qty: "1/4 cup", price: 10, available: true },
      { id: "lemon", name: "Lemon", qty: "1/2", price: 5, available: true },
      { id: "coriander", name: "Coriander", qty: "handful", price: 10, available: false }
    ],
    steps: [
      "Prepare Bhutte Ka Kees base.",
      "Spoon into a bowl while hot.",
      "Top with a generous squeeze of lemon.",
      "Garnish with lots of spicy sev and fresh coriander."
    ]
  },
  {
    id: "poha-jalebi-indore",
    menuCategory: "Desserts & Sweets",
    name: "Poha Jalebi",
    description: "The quintessential Indore breakfast—salty, spicy poha paired with hot, crispy, syrupy jalebi.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.95,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "poha", name: "Indori Poha", qty: "2 cups", price: 20, available: true },
      { id: "jalebi", name: "Fresh Jalebi", qty: "250g", price: 50, available: true },
      { id: "sev", name: "Sev", qty: "1/4 cup", price: 10, available: true }
    ],
    steps: [
      "Prepare Indori Poha.",
      "Arrange on a plate and top with sev.",
      "Serve with 2-3 pieces of hot jalebi on the side.",
      "The contrast of spicy poha and sweet jalebi is a local favorite."
    ]
  },
  {
    id: "mawa-bati-mp",
    menuCategory: "Snacks & Street Food",
    name: "Mawa Bati",
    description: "Fried milk-solid dumplings stuffed with nuts and soaked in sugar syrup, similar to Gulab Jamun but richer.",
    type: "Vegetarian",
    time: 35,
    servings: 6,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.81,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "khoya", name: "Khoya (Mawa)", qty: "250g", price: 80, available: true },
      { id: "nuts", name: "Chopped Nuts", qty: "2 tbsp", price: 15, available: true },
      { id: "sugar", name: "Sugar Syrup", qty: "1 cup", price: 5, available: false }
    ],
    steps: [
      "Knead khoya into a smooth dough.",
      "Shape into small balls with a nut-stuffing in the center.",
      "Deep fry in ghee on low heat until dark brown.",
      "Immediately soak in sugar syrup for 2 hours."
    ]
  },
  {
    id: "bhopali-samosa",
    menuCategory: "Snacks & Street Food",
    name: "Bhopali Samosa",
    description: "Crispy fried pastry with a spicy potato-pea filling, a favorite tea-time snack in Central India.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.85,
    tags: ["Madhya Pradesh", "Central Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "maida", name: "All-purpose Flour", qty: "2 cups", price: 20, available: true },
      { id: "potato", name: "Potato filling", qty: "1 cup", price: 15, available: true },
      { id: "peas", name: "Peas", qty: "1/4 cup", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 30, available: false }
    ],
    steps: [
      "Make a flaky dough with flour and carom seeds.",
      "Stuff with spiced mashed potatoes and peas.",
      "Fold into triangles and deep fry until crispy and golden.",
      "Serve with green and red chutneys."
    ]
  },
  {
    id: "chicken-cutlet-bhopali",
    menuCategory: "Snacks & Street Food",
    name: "Chicken Cutlet Bhopali",
    description: "Spiced minced chicken patties, breaded and fried, a common non-veg snack in Bhopal.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.82,
    tags: ["Madhya Pradesh", "Central Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "minced_chicken", name: "Chicken Mince", qty: "250g", price: 100, available: true },
      { id: "breadcrumbs", name: "Breadcrumbs", qty: "1 cup", price: 20, available: true },
      { id: "egg", name: "Beaten Egg", qty: "1", price: 10, available: true },
      { id: "pepper", name: "Black Pepper", qty: "1 tsp", price: 100, available: false }
    ],
    steps: [
      "Mix mince with spices and form into flat ovals.",
      "Dip in egg wash and coat with breadcrumbs.",
      "Shallow or deep fry until crispy brown.",
      "Serve as an appetizer."
    ]
  }
];
