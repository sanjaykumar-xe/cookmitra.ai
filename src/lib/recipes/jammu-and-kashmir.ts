import { Recipe } from './types';

export const jammuAndKashmirRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "rogan-josh-authentic",
    menuCategory: "Curries & Gravies",
    name: "Rogan Josh",
    description: "A world-famous deep red aromatic lamb curry from the Kashmiri Wazwan tradition, flavored with mace and ratanjot.",
    type: "Non-Vegetarian",
    time: 75,
    servings: 4,
    difficulty: "Hard",
    cost: 450,
    popularity: 0.88,
    tags: ["Jammu and Kashmir", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton chunks", qty: "500g", price: 350, available: true },
      { id: "kashmiri_chili", name: "Kashmiri Red Chili Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1/2 cup", price: 10, available: true },
      { id: "fennel_powder", name: "Fennel Powder (Saunf)", qty: "1 tbsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 25, available: false }
    ],
    steps: [
      "Heat mustard oil and sear mutton chunks until they are brown on all sides.",
      "Add whole spices like cardamom and cloves; sauté for a minute.",
      "Stir in Kashmiri red chili powder mixed with a little water (to prevent burning) and fennel powder.",
      "Whisk yogurt and add it to the pan, stirring continuously to prevent curdling.",
      "Add water, cover, and slow cook until the meat is extremely tender and the gravy turns a deep red.",
      "The signature red color should come from the chilies and ratanjot (if available)."
    ]
  },
  {
    id: "yakhni-mutton-kashmiri",
    menuCategory: "Curries & Gravies",
    name: "Yakhni",
    description: "A delicate yogurt-based mutton curry flavored with dried mint and whole spices like cardamom and fennel.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.85,
    tags: ["Jammu and Kashmir", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 350, available: true },
      { id: "yogurt", name: "Thick Curd", qty: "2 cups", price: 25, available: true },
      { id: "fennel_powder", name: "Fennel Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "dry_mint", name: "Dried Mint Leaves", qty: "1 tbsp", price: 5, available: true },
      { id: "ginger_powder", name: "Ginger Powder (Saunth)", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook mutton with whole spices and salt until tender.",
      "Whisk curd thoroughly and boil it in a separate pan, stirring constantly until it thickens.",
      "Add the cooked mutton chunks and some broth to the boiling curd.",
      "Stir in fennel powder, ginger powder, and salt.",
      "Simmer for 10 minutes; finish by crushing dried mint leaves between your palms and adding to the curry.",
      "Serve warm with steamed basmati rice."
    ]
  },
  {
    id: "kashmiri-chicken-curry-mild",
    menuCategory: "Curries & Gravies",
    name: "Kashmiri Chicken Curry",
    description: "A mild chicken curry prepared with a base of yogurt and tomatoes, distinct for its use of Kashmiri red chili for color.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 290,
    popularity: 0.76,
    tags: ["Jammu and Kashmir", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "tomato", name: "Tomato Puree", qty: "1/2 cup", price: 15, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1/2 cup", price: 10, available: true },
      { id: "kashmiri_chili", name: "Kashmiri Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 40, available: false }
    ],
    steps: [
      "Sauté whole spices and garlic in oil until fragrant.",
      "Add chicken pieces and fry until seared.",
      "Add tomato puree, chili powder, and turmeric; cook until oil separates.",
      "Stir in whisked curd and salt; simmer on low heat.",
      "Add water as needed for consistency and cook until chicken is tender.",
      "The gravy should be smooth and vibrant red but not overly spicy."
    ]
  },
  {
    id: "gushtaba-wazwan",
    menuCategory: "Curries & Gravies",
    name: "Gushtaba",
    description: "Hand-pounded mutton dumplings cooked in a rich, creamy yogurt gravy; a masterpiece of the Kashmiri Wazwan.",
    type: "Non-Vegetarian",
    time: 90,
    servings: 4,
    difficulty: "Hard",
    cost: 460,
    popularity: 0.89,
    tags: ["Jammu and Kashmir", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "mutton_mince", name: "Fine Mutton Mince", qty: "500g", price: 350, available: true },
      { id: "fat", name: "Mutton Fat (pounded)", qty: "50g", price: 10, available: true },
      { id: "yogurt", name: "Thick Curd", qty: "3 cups", price: 40, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "2 tbsp", price: 30, available: true },
      { id: "spices", name: "Kashmiri Spice Blend", qty: "1 tbsp", price: 30, available: false }
    ],
    steps: [
      "Pound mutton mince and fat together on a stone slab until it becomes a very smooth, airy paste.",
      "Shape into large, smooth balls; boil them in water with salt until firm.",
      "In a separate pot, boil whisked curd until it changes consistency, stirring non-stop.",
      "Add the boiled dumplings to the curd gravy along with ghee and spices.",
      "Slow cook until the gravy is rich and the dumplings are airy and melt-in-mouth.",
      "Gushtaba is traditionally the final meat dish served in a Wazwan."
    ]
  },
  {
    id: "rista-authentic",
    menuCategory: "Curries & Gravies",
    name: "Rista",
    description: "Spiced mutton meatballs cooked in a fiery red gravy, known for its intense color and bouncy texture.",
    type: "Non-Vegetarian",
    time: 80,
    servings: 4,
    difficulty: "Hard",
    cost: 450,
    popularity: 0.84,
    tags: ["Jammu and Kashmir", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_mince", name: "Pounded Mutton Mince", qty: "500g", price: 350, available: true },
      { id: "kashmiri_chili", name: "Spicy Red Chili Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "shallots", name: "Shallot paste (Pran)", qty: "2 tbsp", price: 20, available: true },
      { id: "ghee", name: "Ghee", qty: "3 tbsp", price: 40, available: true },
      { id: "ginger_powder", name: "Ginger Powder", qty: "1 tsp", price: 25, available: false }
    ],
    steps: [
      "Shape pounded mutton mince into small balls and boil until set.",
      "Heat ghee and sauté the shallot paste until brown.",
      "Add red chili powder and ginger powder; sauté with splashes of water.",
      "Add the boiled meatballs and their stock.",
      "Simmer until the gravy is thick, vibrant red, and the meatballs are tender.",
      "Serve as part of a traditional feast."
    ]
  },
  {
    id: "tabak-maaz-fried-ribs",
    menuCategory: "Curries & Gravies",
    name: "Tabak Maaz",
    description: "Tender mutton ribs parboiled in milk and spices, then shallow fried in ghee until crispy and golden.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 420,
    popularity: 0.82,
    tags: ["Jammu and Kashmir", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_ribs", name: "Mutton Ribs", qty: "500g", price: 350, available: true },
      { id: "milk", name: "Milk", qty: "1 cup", price: 10, available: true },
      { id: "ghee", name: "Ghee for frying", qty: "1/2 cup", price: 50, available: true },
      { id: "fennel", name: "Fennel Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric", qty: "1/2 tsp", price: 5, available: false }
    ],
    steps: [
      "Boil mutton ribs in milk, water, and whole spices until they are tender and the liquid is mostly absorbed.",
      "Drain any excess liquid and cool the ribs.",
      "Heat ghee in a wide flat pan.",
      "Shallow fry the ribs on medium heat until the exterior is extremely crispy and dark golden brown.",
      "Serve hot as a signature Wazwan starter."
    ]
  },
  {
    id: "kashmiri-fish-curry-river-trout",
    menuCategory: "Curries & Gravies",
    name: "Kashmiri Fish Curry",
    description: "Fresh river trout prepared in a pungent mustard oil and spice gravy, reflecting the riverine culture of the valley.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 350,
    popularity: 0.72,
    tags: ["Jammu and Kashmir", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "River Trout or Rohu", qty: "500g", price: 250, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "fennel_powder", name: "Fennel Powder", qty: "1 tsp", price: 5, available: true },
      { id: "tamarind", name: "Tamarind Pulp (optional)", qty: "1 tsp", price: 55, available: false }
    ],
    steps: [
      "Lightly fry marinated fish slices in mustard oil and set aside.",
      "Temper the remaining oil with whole spices and garlic.",
      "Add red chili powder, fennel powder, and turmeric.",
      "Add water and bring to a boil; gently slide in the fish pieces.",
      "Simmer for 8 minutes until the gravy is thick and pungent.",
      "Finish with a pinch of shahi jeera."
    ]
  },
  {
    id: "mutton-kabab-kashmiri-spiced",
    menuCategory: "Starters & Appetizers",
    name: "Mutton Kabab Kashmiri",
    description: "Hand-pounded minced mutton skewers grilled with a unique blend of local spices and fresh herbs.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Hard",
    cost: 380,
    popularity: 0.78,
    tags: ["Jammu and Kashmir", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_mince", name: "Pounded Mutton Mince", qty: "500g", price: 300, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "besan", name: "Roasted Besan (for binding)", qty: "2 tbsp", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 20, available: true },
      { id: "spices", name: "Kashmiri Kabab Masala", qty: "1 tbsp", price: 50, available: false }
    ],
    steps: [
      "Mix pounded meat with minced chilies, roasted besan, and spices.",
      "Knead well for 10 minutes to ensure a smooth consistency.",
      "Wrap portions of the mixture around metal skewers.",
      "Grill over charcoal or on a tawa with ghee until charred and cooked through.",
      "Serve with walnut chutney."
    ]
  },
  {
    id: "egg-curry-kashmiri-yogurt",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry Kashmiri Style",
    description: "Boiled eggs simmered in a tangy yogurt-based gravy with a hint of fennel and dried ginger.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Medium",
    cost: 120,
    popularity: 0.74,
    tags: ["Jammu and Kashmir", "North Indian", "Non-Vegetarian", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "yogurt", name: "Sour Curd", qty: "1 cup", price: 15, available: true },
      { id: "fennel", name: "Fennel Powder", qty: "1 tsp", price: 5, available: true },
      { id: "ginger_powder", name: "Ginger Powder", qty: "1/2 tsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 65, available: false }
    ],
    steps: [
      "Fry whole boiled eggs in mustard oil with a pinch of turmeric until the skin is golden; set aside.",
      "Whisk curd and simmer on low heat, stirring continuously.",
      "Add fennel powder, ginger powder, and salt to the curd.",
      "Add the eggs and simmer for 5 minutes.",
      "Finish with dried mint and serve with rice."
    ]
  },
  {
    id: "chicken-yakhni-kashmiri",
    menuCategory: "Curries & Gravies",
    name: "Chicken Yakhni",
    description: "A lighter version of the traditional yakhni, using tender chicken pieces in a thin yogurt and mint broth.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.71,
    tags: ["Jammu and Kashmir", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "yogurt", name: "Curd", qty: "2 cups", price: 25, available: true },
      { id: "mint", name: "Dried Mint", qty: "1 tbsp", price: 5, available: true },
      { id: "cardamom", name: "Whole Green Cardamom", qty: "4", price: 10, available: true },
      { id: "shallots", name: "Shallot paste", qty: "1 tbsp", price: 90, available: false }
    ],
    steps: [
      "Sauté chicken with whole spices in oil until seared.",
      "Boil whisked curd in another pan until thick.",
      "Add chicken and some water to the curd.",
      "Simmer for 15 minutes with fennel and ginger powder.",
      "Finish with dried mint and ghee."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "dum-aloo-kashmiri-spicy",
    menuCategory: "Curries & Gravies",
    name: "Dum Aloo Kashmiri",
    description: "Fried baby potatoes simmered in a thick, spicy red gravy made with yogurt and Kashmiri red chili powder.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.90,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "baby_potato", name: "Baby Potatoes", qty: "500g", price: 20, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1/2 cup", price: 10, available: true },
      { id: "kashmiri_chili", name: "Red Chili Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "fennel", name: "Fennel Powder", qty: "1 tbsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1/2 cup", price: 40, available: false }
    ],
    steps: [
      "Peel baby potatoes and prick them with a toothpick; deep fry in mustard oil until golden.",
      "Mix chili powder, fennel powder, and ginger powder with a little water.",
      "In a separate pan, whisk curd and simmer on low heat.",
      "Add the spice paste and fried potatoes to the curd.",
      "Cover and slow cook (dum) for 15 minutes until the gravy is thick and oil-rich.",
      "The signature red color and absence of onion/garlic is key to Kashmiri Dum Aloo."
    ]
  },
  {
    id: "haak-collard-greens",
    menuCategory: "Curries & Gravies",
    name: "Haak",
    description: "The most basic and essential Kashmiri green dish—collard greens simmered simply with mustard oil and salt.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.88,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "haak", name: "Collard Greens (Haak)", qty: "2 bunches", price: 30, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 15, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "hing", name: "Asafoetida (Hing)", qty: "pinch", price: 10, available: false }
    ],
    steps: [
      "Wash and hand-tear the collard greens.",
      "Heat mustard oil to smoking point; add whole green chilies and hing.",
      "Add the greens and salt; stir-fry for a minute.",
      "Add a cup of water and simmer for 10-12 minutes until the greens are tender but still vibrant green.",
      "Serve the light broth and greens with steamed rice."
    ]
  },
  {
    id: "nadru-yakhni-lotus-stem",
    menuCategory: "Curries & Gravies",
    name: "Nadru Yakhni",
    description: "Sliced lotus stems cooked in a mild and creamy yogurt gravy with aromatic whole spices.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 85,
    popularity: 0.81,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "nadru", name: "Lotus Stem (Nadru)", qty: "250g", price: 40, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1.5 cups", price: 20, available: true },
      { id: "fennel", name: "Fennel Powder", qty: "1 tbsp", price: 5, available: true },
      { id: "mint", name: "Dried Mint", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 15, available: false }
    ],
    steps: [
      "Clean and slice lotus stem into diagonal rounds; boil with salt until tender.",
      "Whisk curd and simmer on low heat until it boils and thickens slightly.",
      "Add the boiled lotus stem, fennel powder, and ginger powder.",
      "Cook for 10 minutes on low heat.",
      "Garnish with dried mint and a drizzle of ghee."
    ]
  },
  {
    id: "rajma-kashmiri-authentic",
    menuCategory: "Curries & Gravies",
    name: "Rajma Kashmiri",
    description: "Red kidney beans slow-cooked with distinct Kashmiri spices like fennel and dried ginger, served with rice.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.85,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "rajma", name: "Kashmiri Red Rajma", qty: "1.5 cups", price: 30, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "ginger_powder", name: "Ginger Powder", qty: "1 tsp", price: 5, available: true },
      { id: "fennel", name: "Fennel Powder", qty: "1 tbsp", price: 5, available: true },
      { id: "shallots", name: "Shallot paste", qty: "1 tbsp", price: 30, available: false }
    ],
    steps: [
      "Pressure cook soaked rajma until soft.",
      "Heat oil and sauté shallot paste until brown.",
      "Add spices and the cooked beans with stock.",
      "Simmer for 20 minutes until the gravy is thick and flavors are absorbed.",
      "Serve with steamed rice and curd."
    ]
  },
  {
    id: "modur-pulav-saffron-rice",
    menuCategory: "Rice & Biryani",
    name: "Modur Pulav",
    description: "A fragrant sweet pulao made with long-grain rice, heavy saffron, and an abundance of dried fruits and nuts.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.83,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian", "Dessert"],
    ingredients: [
      { id: "rice", name: "Basmati Rice", qty: "2 cups", price: 60, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 cup", price: 10, available: true },
      { id: "nuts", name: "Cashews, Raisins, Almonds", qty: "1/4 cup", price: 40, available: true },
      { id: "saffron", name: "Saffron strands", qty: "pinch", price: 50, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Soak rice for 30 minutes; soak saffron in warm milk.",
      "Sauté nuts in ghee until golden and set aside.",
      "Cook rice with whole spices until 80% done.",
      "Add sugar, saffron milk, and fried nuts.",
      "Cover and slow cook for 10 minutes until water is gone and rice is sweet and fragrant."
    ]
  },
  {
    id: "chaman-paneer-curry",
    menuCategory: "Curries & Gravies",
    name: "Chaman",
    description: "Fried cottage cheese cubes simmered in a mild, tomato-yogurt gravy with fennel and ginger.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 95,
    popularity: 0.78,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "paneer", name: "Paneer", qty: "250g", price: 60, available: true },
      { id: "tomato", name: "Tomato Puree", qty: "1/2 cup", price: 10, available: true },
      { id: "yogurt", name: "Curd", qty: "1/4 cup", price: 10, available: true },
      { id: "fennel", name: "Fennel Powder", qty: "1 tbsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: false }
    ],
    steps: [
      "Deep fry paneer cubes until golden; set aside.",
      "Sauté ginger powder and fennel powder in oil.",
      "Add tomato puree and cook until oil separates.",
      "Stir in whisked curd and fried paneer.",
      "Simmer for 5 minutes with a little water."
    ]
  },
  {
    id: "nadru-monje-fritters",
    menuCategory: "Protein Specialties",
    name: "Nadru Monje",
    description: "Deep-fried lotus stem fritters that are often served as a tea-time snack or simmered in a light gravy.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 85,
    popularity: 0.72,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "nadru", name: "Lotus Stem", qty: "250g", price: 40, available: true },
      { id: "besan", name: "Besan", qty: "1 cup", price: 15, available: true },
      { id: "rice_flour", name: "Rice Flour", qty: "2 tbsp", price: 10, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 15, available: false }
    ],
    steps: [
      "Clean and diagonal-slice lotus stems; parboil briefly.",
      "Make a thick batter with besan, rice flour, and spices.",
      "Dip each slice in batter and deep fry until very crispy.",
      "Serve hot with walnut chutney."
    ]
  },
  {
    id: "tsok-wangun-sour-brinjal",
    menuCategory: "Curries & Gravies",
    name: "Tsok Wangun",
    description: "Fried brinjal slices cooked in a tangy tamarind and tomato gravy, a staple in Kashmiri Pandit cuisine.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.68,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "brinjal", name: "Small Brinjals", qty: "250g", price: 20, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 5, available: true },
      { id: "tomato", name: "Tomato Paste", qty: "2 tbsp", price: 5, available: true },
      { id: "ginger", name: "Ginger Powder", qty: "1/2 tsp", price: 10, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Slit and deep fry brinjals until soft.",
      "Prepare a tangy gravy with tomato paste and tamarind juice.",
      "Add spices and simmer for 5 minutes.",
      "Add fried brinjals and cook until they absorb the sauce."
    ]
  },
  {
    id: "kashmiri-kadam-pumpkin",
    menuCategory: "Curries & Gravies",
    name: "Kashmiri Kadam",
    description: "Yellow pumpkin slow-cooked with a distinct seasoning of fennel seeds, ginger powder, and mustard oil.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.62,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "pumpkin", name: "Yellow Pumpkin", qty: "500g", price: 25, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "fennel", name: "Fennel Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Peel and cube the pumpkin.",
      "Heat mustard oil and temper with mustard seeds.",
      "Add pumpkin cubes, fennel powder, ginger powder, and salt.",
      "Stir-fry for 15 minutes until soft and partially mashed."
    ]
  },
  {
    id: "monji-haakh-turnip-greens",
    menuCategory: "Curries & Gravies",
    name: "Monji Haakh",
    description: "Turnip greens and turnip slices simmered in a light, watery gravy seasoned with asafoetida and mustard oil.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.65,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "turnip", name: "Turnips with greens", qty: "500g", price: 30, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "hing", name: "Hing", qty: "pinch", price: 5, available: true },
      { id: "chili", name: "Whole Red Chili", qty: "2", price: 15, available: false }
    ],
    steps: [
      "Wash and chop turnip greens and slice the turnips.",
      "Sauté in mustard oil with hing and red chilies.",
      "Add water and simmer until the turnips are tender.",
      "Serve as a light side dish with rice."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "kashmiri-kulcha-breakfast",
    menuCategory: "Breads",
    name: "Kashmiri Kulcha",
    description: "A hard, crumbly baked leavened bread, traditionally enjoyed with pink tea (Nun Chai).",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.74,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "maida", name: "Refined Flour", qty: "2 cups", price: 20, available: true },
      { id: "ghee", name: "Ghee", qty: "1/4 cup", price: 30, available: true },
      { id: "poppy_seeds", name: "Poppy Seeds", qty: "1 tbsp", price: 10, available: true },
      { id: "salt", name: "Salt", qty: "pinch", price: 10, available: false }
    ],
    steps: [
      "Mix flour with ghee and salt into a crumbly dough.",
      "Add very little water to bind.",
      "Shape into small thick discs; sprinkle poppy seeds on top.",
      "Bake in a slow oven until firm and biscuit-like.",
      "Serve with salty Nun Chai."
    ]
  },
  {
    id: "shufta-dessert-snack",
    menuCategory: "Snacks & Street Food",
    name: "Shufta",
    description: "A rich mixture of mixed dry fruits, paneer, and coconut soaked in a heavy saffron and cardamom syrup.",
    type: "Vegetarian",
    time: 30,
    servings: 6,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.84,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "mixed_nuts", name: "Cashews, Almonds, Walnuts", qty: "1/2 cup", price: 60, available: true },
      { id: "paneer", name: "Fried Paneer bits", qty: "1/2 cup", price: 20, available: true },
      { id: "sugar", name: "Sugar Syrup", qty: "1/2 cup", price: 10, available: true },
      { id: "saffron", name: "Saffron", qty: "pinch", price: 10, available: false }
    ],
    steps: [
      "Sauté nuts and paneer bits in ghee until golden.",
      "Add to a thick sugar syrup flavored with saffron and cardamom.",
      "Simmer for 5 minutes until the nuts absorb the sweetness.",
      "Serve warm as a celebratory snack."
    ]
  },
  {
    id: "kashmiri-bread-pakora-stuffed",
    menuCategory: "Snacks & Street Food",
    name: "Kashmiri Bread Pakora",
    description: "Spiced mashed potato stuffed between bread slices, dipped in a thick gram flour batter and deep fried.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.78,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "bread", name: "White Bread", qty: "4 slices", price: 15, available: true },
      { id: "potato", name: "Boiled Potato", qty: "1 cup", price: 10, available: true },
      { id: "besan", name: "Gram Flour", qty: "1 cup", price: 10, available: true },
      { id: "spices", name: "Chili and Fennel powder", qty: "1 tsp", price: 30, available: false }
    ],
    steps: [
      "Mash potatoes with spices.",
      "Spread on bread slices and make sandwiches.",
      "Dip in thick besan batter and deep fry until golden.",
      "Serve with spicy chutney."
    ]
  },
  {
    id: "sheermal-kashmiri-sweet-bread",
    menuCategory: "Breads",
    name: "Sheermal Kashmiri",
    description: "A mildly sweet, saffron-flavored traditional flatbread made with refined flour and milk.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.76,
    tags: ["Jammu and Kashmir", "North Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "maida", name: "Maida", qty: "2 cups", price: 20, available: true },
      { id: "milk", name: "Saffron Milk", qty: "1/2 cup", price: 20, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 20, available: true },
      { id: "sugar", name: "Sugar", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Knead flour with saffron milk, ghee, and sugar.",
      "Let the dough rest for 1 hour.",
      "Roll into thick small flatbreads.",
      "Cook on a tawa until both sides have golden spots.",
      "Brush with ghee while hot."
    ]
  },
  {
    id: "mutton-seekh-kabab-kashmiri-grilled",
    menuCategory: "Starters & Appetizers",
    name: "Mutton Seekh Kabab Kashmiri",
    description: "Spiced minced mutton skewers grilled over charcoal, a staple street snack in the old city of Srinagar.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.81,
    tags: ["Jammu and Kashmir", "North Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "minced_mutton", name: "Mutton Mince", qty: "500g", price: 200, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "chili", name: "Kashmiri Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Oil for basting", qty: "1/4 cup", price: 30, available: false }
    ],
    steps: [
      "Mix mince with garlic, spices, and salt.",
      "Form onto skewers and grill until charred.",
      "Baste with oil/ghee while cooking.",
      "Serve with raw onions and lemon."
    ]
  }
];
