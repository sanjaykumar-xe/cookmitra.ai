import { Recipe } from './types';

/**
 * Gujarat Recipes
 * Predominantly vegetarian, with Non-Vegetarian traditions drawn from 
 * Kathiawadi, Parsi, and Surti Muslim communities.
 */
export const gujaratRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (15) ---
  {
    id: "kathiawadi-chicken-curry",
    name: "Kathiawadi Chicken Curry",
    description: "A fiery and pungent chicken curry from the Kathiawar region, known for its heavy use of garlic and red chilies.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.82,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "15", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "red_chili", name: "Kathiawadi Red Chili Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: false }
    ],
    steps: [
      "Heat mustard oil to smoking point, then let it cool slightly.",
      "Sauté crushed garlic and sliced onions until dark brown.",
      "Add chicken and sear on high heat until the color changes.",
      "Stir in red chili powder, turmeric, and salt; sauté with splashes of water.",
      "Simmer until the chicken is tender and the oil (tarri) floats on top."
    ]
  },
  {
    id: "kathiawadi-mutton-curry",
    name: "Kathiawadi Mutton Curry",
    description: "A robust and spicy mutton curry prepared in the rustic style of rural Gujarat, featuring a coarse masala base.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 430,
    popularity: 0.85,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "bajra_flour", name: "Roasted Bajra Flour (for thickness)", qty: "1 tbsp", price: 5, available: true },
      { id: "dry_chili", name: "Whole Red Chilies", qty: "6", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tbsp", price: 10, available: true },
      { id: "onion", name: "Onion paste", qty: "1/2 cup", price: 10, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt and turmeric until tender.",
      "Sauté onion paste and ginger-garlic in oil until brown.",
      "Add the pre-cooked mutton and roast in the masala.",
      "Add roasted bajra flour mixed with water to thicken the gravy.",
      "Simmer for 15 minutes until the gravy is dark and flavorful."
    ]
  },
  {
    id: "chicken-bharuchi",
    name: "Chicken Bharuchi",
    description: "A Parsi-Gujarati fusion dish from Bharuch, featuring a unique balance of sweetness from jaggery and tang from vinegar.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 290,
    popularity: 0.78,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1 tbsp", price: 5, available: true },
      { id: "vinegar", name: "Cane Vinegar", qty: "2 tbsp", price: 15, available: true },
      { id: "potato", name: "Potato (fried cubes)", qty: "1", price: 5, available: true },
      { id: "apricots", name: "Dried Apricots", qty: "4", price: 30, available: false }
    ],
    steps: [
      "Sauté onions and spices until soft.",
      "Add chicken and cook until opaque.",
      "Stir in vinegar, jaggery, and salt; simmer for 10 minutes.",
      "Add fried potato cubes and soaked apricots.",
      "Cook on low heat until the sauce is thick and glossy."
    ]
  },
  {
    id: "surti-chicken-curry",
    name: "Surti Chicken Curry",
    description: "A Surat-style chicken curry influenced by local coastal flavors, often using a touch of coconut and fresh green spices.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.76,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "coconut_milk", name: "Coconut Milk", qty: "1/2 cup", price: 30, available: true },
      { id: "green_masala", name: "Green Chili-Coriander Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "2", price: 10, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: false }
    ],
    steps: [
      "Sauté onions and green masala paste in oil.",
      "Add chicken and salt; cook on high heat to sear.",
      "Pour in thin coconut milk and simmer until chicken is tender.",
      "Stir in thick coconut milk and remove from heat.",
      "Finish with lemon juice and fresh coriander."
    ]
  },
  {
    id: "machhi-nu-shaak",
    name: "Machhi Nu Shaak",
    description: "A traditional Gujarati coastal fish curry made with a pungent mustard and garlic paste, common in the Veraval region.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 320,
    popularity: 0.74,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Fresh Fish (Pomfret/Rohu)", qty: "500g", price: 220, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds (ground)", qty: "1 tbsp", price: 5, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Groundnut Oil", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Lightly fry marinated fish slices and set aside.",
      "Heat oil and temper with fenugreek seeds.",
      "Add garlic-mustard paste and sauté briefly.",
      "Pour in tamarind juice and water; bring to a boil.",
      "Add fish and simmer for 5-7 minutes until the gravy is pungent and thick."
    ]
  },
  {
    id: "chicken-khiro",
    name: "Chicken Khiro",
    description: "A specialty of the Gujarati Muslim community, chicken is slow-cooked in a silky coconut milk and poppy seed gravy.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.72,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "coconut_milk", name: "Coconut Milk", qty: "1 cup", price: 40, available: true },
      { id: "poppy_seeds", name: "Poppy Seed Paste", qty: "1 tbsp", price: 20, available: true },
      { id: "cashews", name: "Cashew Paste", qty: "1 tbsp", price: 15, available: true },
      { id: "onion", name: "Boiled Onion Paste", qty: "1/4 cup", price: 10, available: false }
    ],
    steps: [
      "Sauté boiled onion paste in oil; add chicken and cook until seared.",
      "Stir in cashew and poppy seed pastes.",
      "Pour in coconut milk and salt; simmer on very low heat.",
      "The gravy should be smooth and white with a mild nutty aroma."
    ]
  },
  {
    id: "mutton-bafat-gujarati",
    name: "Mutton Bafat",
    description: "A heavily spiced mutton curry influenced by the spice-trade history of Gujarati ports, using a roasted masala.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 410,
    popularity: 0.70,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 350, available: true },
      { id: "bafat_masala", name: "Bafat Spice Mix", qty: "2 tbsp", price: 15, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 5, available: true },
      { id: "vinegar", name: "Vinegar", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt and vinegar until tender.",
      "Sauté onions and ginger until brown.",
      "Add the Bafat spice mix and roast briefly.",
      "Add cooked mutton and a little broth.",
      "Simmer until the gravy is thick and highly aromatic."
    ]
  },
  {
    id: "chicken-ambot-tik",
    name: "Chicken Ambot Tik (Gujarati Style)",
    description: "A tangy (Ambot) and spicy (Tik) chicken curry found in the Konkan-bordering regions of Gujarat.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.68,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "tamarind", name: "Tamarind", qty: "lemon size", price: 5, available: true },
      { id: "red_chili", name: "Dried Red Chilies", qty: "6", price: 10, available: true },
      { id: "peppercorns", name: "Black Peppercorns", qty: "1 tsp", price: 5, available: true },
      { id: "garlic", name: "Garlic", qty: "6 cloves", price: 30, available: false }
    ],
    steps: [
      "Grind chilies, peppercorns, and garlic with tamarind into a smooth paste.",
      "Sauté onions in oil until translucent.",
      "Add chicken and the tangy-spicy paste.",
      "Add water and simmer until the chicken is tender and the gravy is sharp."
    ]
  },
  {
    id: "egg-curry-gujarati",
    name: "Egg Curry Gujarati Style",
    description: "Boiled eggs simmered in a mildly sweet tomato-onion gravy, a comfort meal in urban Gujarati households.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.81,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "tomato", name: "Tomato (puree)", qty: "1 cup", price: 15, available: true },
      { id: "sugar", name: "Sugar/Jaggery", qty: "1 tsp", price: 2, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 35, available: false }
    ],
    steps: [
      "Sauté onions and ginger-garlic paste until brown.",
      "Add tomato puree and spices; cook into a masala.",
      "Add sugar/jaggery for that signature Gujarati touch.",
      "Add halved eggs and a splash of water; simmer for 5 minutes."
    ]
  },
  {
    id: "kolamba-fish-curry",
    name: "Kolamba Fish Curry",
    description: "Coastal Gujarati fish curry using freshwater river fish and a sharp tamarind-based base.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 330,
    popularity: 0.72,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Rohu or Catla", qty: "500g", price: 200, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "tamarind", name: "Tamarind", qty: "small ball", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "oil", name: "Groundnut Oil", qty: "2 tbsp", price: 40, available: false }
    ],
    steps: [
      "Lightly fry fish and set aside.",
      "Temper mustard seeds and green chilies in oil.",
      "Add tamarind juice and turmeric; bring to a boil.",
      "Add fish and simmer for 5-8 minutes."
    ]
  },
  {
    id: "chicken-handi-gujarati",
    name: "Chicken Handi Gujarati Style",
    description: "Chicken slow-cooked in a sealed clay handi with central Gujarati spices and caramelized onions.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 300,
    popularity: 0.77,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "clay_pot", name: "Clay Handi (for cooking)", qty: "1", price: 80, available: true },
      { id: "onion", name: "Onion (sliced)", qty: "3", price: 15, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 30, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 40, available: false }
    ],
    steps: [
      "Layer chicken, onions, and spices in the clay handi.",
      "Seal the lid with dough.",
      "Cook on very low heat for 45 minutes.",
      "The steam inside makes the chicken tender and flavorful."
    ]
  },
  {
    id: "mutton-kheema-gujarati",
    name: "Mutton Kheema Gujarati",
    description: "Minced mutton cooked with cubed potatoes and green peas, a favorite Irani-cafe style breakfast in Gujarat.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 350,
    popularity: 0.84,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "minced_mutton", name: "Mutton Mince", qty: "500g", price: 300, available: true },
      { id: "potato", name: "Potato (cubed)", qty: "1", price: 5, available: true },
      { id: "peas", name: "Peas", qty: "1/4 cup", price: 10, available: true },
      { id: "mint", name: "Mint Leaves", qty: "handful", price: 5, available: true },
      { id: "onion", name: "Onion", qty: "2", price: 10, available: false }
    ],
    steps: [
      "Sauté onions and spices.",
      "Add minced meat and roast on high heat.",
      "Add potato cubes and peas.",
      "Cover and cook until potatoes are soft.",
      "Garnish with lots of mint and serve with Pav."
    ]
  },
  {
    id: "chicken-curry-parsi",
    name: "Parsi Chicken Curry",
    description: "A mild and silky chicken curry with Parsi spices, focusing on the sweetness of roasted nuts and coconut.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 290,
    popularity: 0.70,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "almonds", name: "Almond Paste", qty: "1 tbsp", price: 25, available: true },
      { id: "coconut_milk", name: "Coconut Milk", qty: "1/2 cup", price: 20, available: true },
      { id: "onion", name: "Boiled Onion Paste", qty: "1/4 cup", price: 10, available: true },
      { id: "cardamom", name: "Cardamom", qty: "2", price: 65, available: false }
    ],
    steps: [
      "Sauté onion paste with whole spices.",
      "Add chicken and cook until white.",
      "Add almond paste and coconut milk.",
      "Simmer until the gravy is thick and ivory-colored."
    ]
  },
  {
    id: "prawn-curry-surti",
    name: "Prawn Curry Surti",
    description: "Fresh prawns simmered in a coconut and garlic gravy typical of the Surat coastline.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 370,
    popularity: 0.82,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "prawns", name: "Prawns", qty: "400g", price: 300, available: true },
      { id: "coconut", name: "Fresh Coconut Paste", qty: "2 tbsp", price: 20, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "garlic", name: "Garlic", qty: "6 cloves", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 50, available: false }
    ],
    steps: [
      "Sauté garlic and green chilies in oil.",
      "Add coconut paste and turmeric.",
      "Add prawns and salt; toss for 2 minutes.",
      "Add a little water and simmer until prawns are tender."
    ]
  },
  {
    id: "chicken-fry-kathiawadi",
    name: "Chicken Fry Kathiawadi",
    description: "Dry roasted spicy chicken with a heavy dose of garlic and crushed red chilies, a popular highway snack.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.79,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (boneless)", qty: "400g", price: 140, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "crushed_chili", name: "Crushed Red Chilies", qty: "1 tbsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 15, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "2 sprigs", price: 65, available: false }
    ],
    steps: [
      "Marinate chicken with garlic and chili.",
      "Heat oil and fry curry leaves until crisp.",
      "Add chicken and stir-fry on high heat.",
      "Toss until the chicken is dry and slightly charred."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "undhiyu",
    name: "Undhiyu",
    description: "A mixed winter vegetable dish from Surat, slow-cooked in a classic green masala with fried fenugreek dumplings.",
    type: "Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 120,
    popularity: 0.95,
    tags: ["Gujarat", "West Indian", "Vegetarian"],
    ingredients: [
      { id: "papdi", name: "Surti Papdi (Flat Beans)", qty: "250g", price: 30, available: true },
      { id: "sweet_potato", name: "Sweet Potato", qty: "1 medium", price: 10, available: true },
      { id: "muthiya", name: "Methi Muthiya (dumplings)", qty: "10", price: 20, available: true },
      { id: "coconut_peanut", name: "Coconut-Peanut Green Masala", qty: "1/2 cup", price: 30, available: true },
      { id: "brinjal", name: "Small Brinjals", qty: "4", price: 20, available: false }
    ],
    steps: [
      "Prepare green masala with coconut, coriander, green chilies, and crushed peanuts.",
      "Slit brinjals and potatoes; stuff them with the masala.",
      "Sauté papdi and other vegetables in a heavy pot.",
      "Layer the stuffed vegetables and methi muthiyas on top.",
      "Cover and slow cook until all vegetables are tender.",
      "The result should be a semi-dry, rich, green-tinged delicacy."
    ]
  },
  {
    id: "gujarati-kadhi",
    name: "Gujarati Kadhi",
    description: "A sweet and tangy yogurt-based curry made with gram flour and tempered with fragrant spices.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.90,
    tags: ["Gujarat", "West Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "yogurt", name: "Curd", qty: "2 cups", price: 20, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "3 tbsp", price: 5, available: true },
      { id: "sugar", name: "Sugar/Jaggery", qty: "1 tbsp", price: 2, available: true },
      { id: "ginger_chili", name: "Ginger-Green Chili Paste", qty: "1 tsp", price: 5, available: true },
      { id: "cloves", name: "Cloves and Cinnamon", qty: "small amount", price: 15, available: false }
    ],
    steps: [
      "Whisk curd and besan with 4 cups of water to make a smooth mixture.",
      "Boil the mixture with salt, ginger-chili paste, and sugar.",
      "Simmer for 10-15 minutes until it reaches a thin pouring consistency.",
      "Prepare a tempering with ghee, mustard seeds, cumin, cloves, and dried red chilies.",
      "Pour the tempering into the kadhi and garnish with coriander."
    ]
  },
  {
    id: "dal-dhokli",
    name: "Dal Dhokli",
    description: "Wheat flour dumplings (dhokli) simmered in a sweet, tangy, and spicy dal, providing a complete meal in one pot.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.88,
    tags: ["Gujarat", "West Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "1.5 cups", price: 15, available: true },
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "peanuts", name: "Raw Peanuts", qty: "2 tbsp", price: 10, available: true },
      { id: "kokum", name: "Kokum or Tamarind", qty: "small piece", price: 5, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Prepare a simple Gujarati toor dal with peanuts, kokum, and jaggery.",
      "Knead a spiced wheat dough, roll it thin, and cut into diamonds (dhokli).",
      "While the dal is boiling, drop the dhokli pieces one by one.",
      "Simmer for 10-12 minutes until the dhoklis are cooked and the dal thickens.",
      "Finish with a ghee tempering of mustard and curry leaves."
    ]
  },
  {
    id: "sev-tameta-nu-shaak",
    name: "Sev Tameta Nu Shaak",
    description: "A quick and spicy tomato curry topped with crunchy thick sev, a staple across Gujarati homes.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.86,
    tags: ["Gujarat", "West Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "tomato", name: "Ripe Tomatoes (chopped)", qty: "4", price: 20, available: true },
      { id: "sev", name: "Thick Ratlami Sev", qty: "1 cup", price: 20, available: true },
      { id: "sugar", name: "Sugar", qty: "1 tsp", price: 2, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 15, available: false }
    ],
    steps: [
      "Sauté onions (optional) and ginger-garlic paste in oil.",
      "Add chopped tomatoes and cook until soft and mushy.",
      "Add turmeric, chili powder, salt, and a little sugar.",
      "Add half a cup of water and simmer for 5 minutes.",
      "Just before serving, top with crunchy sev; do not cook after adding sev."
    ]
  },
  {
    id: "bateta-nu-shaak",
    name: "Bateta Nu Shaak",
    description: "A simple dry-roasted potato curry with cumin and turmeric, often served with Poori and Shrikhand.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.75,
    tags: ["Gujarat", "West Indian", "Vegetarian"],
    ingredients: [
      { id: "potato", name: "Potatoes (boiled cubes)", qty: "4", price: 15, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Heat oil and temper with cumin seeds and a pinch of asafoetida.",
      "Add potato cubes, turmeric, salt, and chili powder.",
      "Sauté on medium-high heat until the edges of the potato turn crispy.",
      "Garnish with coriander and serve warm."
    ]
  },
  {
    id: "ringan-no-olo",
    name: "Ringan No Olo",
    description: "Roasted eggplant mash seasoned with plenty of garlic and green chilies, a Kathiawadi winter specialty.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.82,
    tags: ["Gujarat", "West Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "brinjal", name: "Large Purple Brinjal", qty: "1", price: 15, available: true },
      { id: "garlic", name: "Garlic cloves (crushed)", qty: "10", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "onion", name: "Onion (finely chopped)", qty: "2", price: 10, available: true },
      { id: "oil", name: "Groundnut Oil", qty: "3 tbsp", price: 15, available: false }
    ],
    steps: [
      "Roast brinjal on an open flame until skin is charred; peel and mash.",
      "Heat oil, sauté lots of garlic and green chilies.",
      "Add onions and sauté until translucent.",
      "Add the mashed brinjal and salt; cook for 5-10 minutes on medium heat.",
      "Serve hot with Bajra Roti."
    ]
  },
  {
    id: "gujarati-dal",
    name: "Gujarati Dal",
    description: "The classic sweet and tangy toor dal that is the centerpiece of a Gujarati thali.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.88,
    tags: ["Gujarat", "West Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "peanuts", name: "Raw Peanuts", qty: "2 tbsp", price: 10, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1 tbsp", price: 5, available: true },
      { id: "kokum", name: "Kokum Petals", qty: "2", price: 5, available: true },
      { id: "spices", name: "Dal Masala Powder", qty: "1 tsp", price: 10, available: false }
    ],
    steps: [
      "Pressure cook dal with peanuts and turmeric until mushy.",
      "Whisk well and add water, jaggery, kokum, and salt.",
      "Simmer for 10-15 minutes until it becomes slightly thick.",
      "Temper with mustard, cumin, and dried red chilies in oil/ghee.",
      "Serve with steamed rice."
    ]
  },
  {
    id: "handvo",
    name: "Handvo",
    description: "A savory, protein-packed baked cake made with fermented rice-lentil batter and various vegetables like bottle gourd.",
    type: "Vegetarian",
    time: 45,
    servings: 6,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.81,
    tags: ["Gujarat", "West Indian", "Vegetarian", "Breakfast", "Healthy"],
    ingredients: [
      { id: "handvo_batter", name: "Rice-Lentil Batter", qty: "3 cups", price: 40, available: true },
      { id: "bottle_gourd", name: "Grated Bottle Gourd (Dudhi)", qty: "1 cup", price: 15, available: true },
      { id: "sesame", name: "Sesame Seeds", qty: "1 tbsp", price: 5, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "1/4 cup", price: 20, available: false }
    ],
    steps: [
      "Mix grated dudhi, ginger-chili paste, and salt into the fermented batter.",
      "Heat oil in a heavy bottomed pan; temper with mustard and sesame seeds.",
      "Pour the batter into the pan and cover.",
      "Cook on low heat until the bottom is crispy brown; flip and cook the other side.",
      "Alternatively, bake in an oven at 180°C for 30 minutes.",
      "Cut into wedges and serve with green chutney."
    ]
  },
  {
    id: "muthiya-nu-shaak",
    name: "Muthiya Nu Shaak",
    description: "Steamed and then simmered dumplings made from gram flour and bottle gourd in a light tomato curry.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.72,
    tags: ["Gujarat", "West Indian", "Vegetarian"],
    ingredients: [
      { id: "dudhi", name: "Grated Bottle Gourd", qty: "1 cup", price: 10, available: true },
      { id: "besan", name: "Gram Flour", qty: "1 cup", price: 15, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 10, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 tsp", price: 25, available: false }
    ],
    steps: [
      "Make small steamed dumplings (Muthiya) from dudhi and besan.",
      "Sauté onions and tomatoes with spices to make a light gravy base.",
      "Add water and bring to a simmer.",
      "Gently add the steamed muthiyas and cook for 5 minutes.",
      "The muthiyas will absorb the gravy and become soft."
    ]
  },
  {
    id: "sev-khamani",
    name: "Sev Khamani",
    description: "A Surat delicacy made from crumbled steamed chana dal cake, sautéed with spices and garnished with sev.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.84,
    tags: ["Gujarat", "West Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "khaman", name: "Steamed Khaman (crumbled)", qty: "2 cups", price: 30, available: true },
      { id: "garlic", name: "Garlic (minced)", qty: "1 tsp", price: 5, available: true },
      { id: "pomegranate", name: "Pomegranate Seeds", qty: "2 tbsp", price: 10, available: true },
      { id: "sev", name: "Nylon Sev", qty: "1/2 cup", price: 15, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: false }
    ],
    steps: [
      "Crumble fresh khaman into a coarse mixture.",
      "Heat oil, temper with mustard and minced garlic.",
      "Add the crumbled khaman and toss with a little sugar and lemon juice.",
      "Sauté for 2-3 minutes until warm.",
      "Garnish with lots of nylon sev and pomegranate seeds."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "dhokla",
    name: "Dhokla",
    description: "A light, fermented, and steamed savory cake made from gram flour, tempered with mustard and chilies.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 60,
    popularity: 0.94,
    tags: ["Gujarat", "West Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "besan", name: "Besan", qty: "2 cups", price: 20, available: true },
      { id: "curd", name: "Sour Curd", qty: "1/2 cup", price: 10, available: true },
      { id: "eno", name: "Fruit Salt (Eno)", qty: "1 tsp", price: 10, available: true },
      { id: "turmeric", name: "Turmeric", qty: "1/4 tsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 10, available: false }
    ],
    steps: [
      "Mix besan, curd, and water into a smooth batter; ferment for 4 hours (optional).",
      "Stir in turmeric, salt, and ginger-chili paste.",
      "Add fruit salt and quickly pour into a greased steamer tray.",
      "Steam for 15 minutes until firm.",
      "Cut into squares and temper with mustard seeds and green chilies in oil."
    ]
  },
  {
    id: "khandvi",
    name: "Khandvi",
    description: "Thin, silky rolled ribbons of cooked gram flour batter, a delicate and technical Gujarati snack.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.85,
    tags: ["Gujarat", "West Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "besan", name: "Besan", qty: "1 cup", price: 15, available: true },
      { id: "curd", name: "Thin Buttermilk", qty: "2 cups", price: 20, available: true },
      { id: "turmeric", name: "Turmeric", qty: "1/4 tsp", price: 5, available: true },
      { id: "sesame", name: "Sesame Seeds", qty: "1 tbsp", price: 10, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Whisk besan, buttermilk, and turmeric into a thin batter.",
      "Cook on a heavy-bottomed pan while stirring continuously until it thickens.",
      "Quickly spread the hot batter onto a clean flat surface as thin as possible.",
      "Once cooled, cut into strips and roll them up tightly.",
      "Temper with mustard seeds and sesame; garnish with fresh coconut."
    ]
  },
  {
    id: "fafda-jalebi",
    name: "Fafda Jalebi",
    description: "The classic Sunday breakfast of Gujarat—crispy chickpea flour strips paired with hot syrupy jalebis.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.95,
    tags: ["Gujarat", "West Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "besan", name: "Fafda Besan", qty: "2 cups", price: 30, available: true },
      { id: "papads_khara", name: "Papad Khar", qty: "1/2 tsp", price: 5, available: true },
      { id: "carom", name: "Ajwain", qty: "1 tsp", price: 5, available: true },
      { id: "jalebi", name: "Fresh Jalebi", qty: "250g", price: 30, available: true },
      { id: "oil", name: "Oil", qty: "1 cup", price: 5, available: false }
    ],
    steps: [
      "Knead fafda dough with besan, ajwain, papad khar, and oil.",
      "Pat small portions of dough on a wooden surface and slide your palm to create strips.",
      "Deep fry fafdas on medium heat until crispy and light yellow.",
      "Serve hot with sweet jalebis and spicy green papaya chutney."
    ]
  },
  {
    id: "khaman",
    name: "Khaman",
    description: "A softer, spongier, and slightly sweeter version of dhokla, made with a more hydrated chana dal batter.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.92,
    tags: ["Gujarat", "West Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "besan", name: "Besan", qty: "2 cups", price: 20, available: true },
      { id: "sugar", name: "Sugar", qty: "2 tbsp", price: 5, available: true },
      { id: "lemon_juice", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Tempering Oil", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Make a smooth, aerated batter of besan, sugar, and citric acid.",
      "Steam for 15-20 minutes until very puffy.",
      "Soak the steamed cake with a warm sugar-lemon water mixture.",
      "Temper with mustard seeds and curry leaves.",
      "Cut into squares and serve with green chutney."
    ]
  },
  {
    id: "chicken-pakora-gujarati",
    name: "Chicken Pakora (Gujarati Style)",
    description: "Crispy fried chicken bites coated in a spiced gram flour batter with a hint of garlic and coriander.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.84,
    tags: ["Gujarat", "West Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Boneless Chicken bits", qty: "300g", price: 100, available: true },
      { id: "besan", name: "Besan", qty: "3 tbsp", price: 10, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tsp", price: 5, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 105, available: false }
    ],
    steps: [
      "Marinate chicken bits in garlic paste and salt for 20 minutes.",
      "Make a thick batter of besan and spices with a little water.",
      "Coat chicken in batter and deep fry until very crispy.",
      "Serve as a spicy appetizer with lemon."
    ]
  }
];
