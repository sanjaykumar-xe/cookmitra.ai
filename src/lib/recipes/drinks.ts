import { Recipe } from './types';

export const drinksRecipes: Recipe[] = [
  // --- TRADITIONAL (10) ---
  {
    id: "drink-masala-chai",
    name: "Masala Chai",
    description: "Classic Indian spiced tea brewed with a blend of aromatic spices and milk.",
    type: "Vegetarian",
    time: 15,
    servings: 2,
    difficulty: "Easy",
    cost: 20,
    popularity: 0.95,
    tags: ["Drinks", "Traditional", "Vegetarian", "Spicy", "Breakfast"],
    healthTags: ["cold-cough-friendly", "immunity-boosting", "digestive-friendly"],
    ingredients: [
      { id: "tea-leaves", name: "Assam Tea Leaves", qty: "2 tsp", price: 5, available: true },
      { id: "milk", name: "Whole Milk", qty: "1 cup", price: 10, available: true },
      { id: "ginger", name: "Fresh Ginger (crushed)", qty: "1 inch", price: 2, available: true },
      { id: "cardamom", name: "Green Cardamom", qty: "2 pods", price: 3, available: true }
    ],
    steps: [
      "Boil one cup of water with crushed ginger and cardamom pods.",
      "Add tea leaves and simmer for 2 minutes until the color darkens.",
      "Add milk and sugar; bring to a rolling boil.",
      "Strain into cups and serve hot."
    ]
  },
  {
    id: "drink-filter-coffee",
    name: "Filter Coffee",
    description: "Traditional South Indian decoction coffee served with frothy hot milk.",
    type: "Vegetarian",
    time: 15,
    servings: 2,
    difficulty: "Easy",
    cost: 25,
    popularity: 0.92,
    tags: ["Drinks", "Traditional", "Vegetarian", "Breakfast"],
    healthTags: [],
    ingredients: [
      { id: "coffee-powder", name: "Filter Coffee Powder (with Chicory)", qty: "3 tbsp", price: 15, available: true },
      { id: "milk", name: "Hot Milk", qty: "1.5 cups", price: 10, available: true },
      { id: "sugar", name: "Sugar", qty: "2 tsp", price: 0, available: true }
    ],
    steps: [
      "Add coffee powder to the top compartment of a traditional coffee filter.",
      "Pour boiling water over the powder and let the decoction drip for 10-15 minutes.",
      "Mix the thick decoction with hot frothy milk and sugar.",
      "Pour back and forth between two tumblers (dabara) to create froth and serve."
    ]
  },
  {
    id: "drink-sweet-lassi",
    name: "Sweet Lassi",
    description: "A creamy and refreshing chilled yogurt drink, perfectly sweetened and flavored with cardamom.",
    type: "Vegetarian",
    time: 10,
    servings: 2,
    difficulty: "Easy",
    cost: 40,
    popularity: 0.94,
    tags: ["Drinks", "Traditional", "Vegetarian"],
    healthTags: ["digestive-friendly"],
    ingredients: [
      { id: "yogurt", name: "Fresh Thick Yogurt", qty: "2 cups", price: 25, available: true },
      { id: "sugar", name: "Sugar", qty: "4 tbsp", price: 5, available: true },
      { id: "cardamom-powder", name: "Cardamom Powder", qty: "1/4 tsp", price: 10, available: true }
    ],
    steps: [
      "Add yogurt, sugar, and cardamom powder to a blender or use a traditional wooden churner.",
      "Blend until smooth and frothy.",
      "Add a few ice cubes and blend briefly.",
      "Pour into tall glasses and serve chilled."
    ]
  },
  {
    id: "drink-salted-buttermilk",
    name: "Salted Buttermilk (Chaas)",
    description: "A cooling and digestive spiced yogurt drink, ideal for hot summer days.",
    type: "Vegetarian",
    time: 10,
    servings: 2,
    difficulty: "Easy",
    cost: 25,
    popularity: 0.88,
    tags: ["Drinks", "Traditional", "Vegetarian", "Spicy"],
    healthTags: ["digestive-friendly", "weight-management", "high-bp-friendly"],
    ingredients: [
      { id: "yogurt", name: "Sour Yogurt", qty: "1 cup", price: 15, available: true },
      { id: "cumin-powder", name: "Roasted Cumin Powder", qty: "1/2 tsp", price: 5, available: true },
      { id: "black-salt", name: "Black Salt", qty: "1/4 tsp", price: 5, available: true },
      { id: "mint-leaves", name: "Fresh Mint Leaves", qty: "handful", price: 0, available: true }
    ],
    steps: [
      "Whisk yogurt with 2 cups of chilled water until thin and frothy.",
      "Add black salt, roasted cumin powder, and finely chopped mint.",
      "Stir well and serve chilled in glasses."
    ]
  },
  {
    id: "drink-jal-jeera",
    name: "Jal Jeera",
    description: "A tangy and spicy traditional Indian appetizer drink featuring cumin, mint, and lemon.",
    type: "Vegetarian",
    time: 15,
    servings: 2,
    difficulty: "Easy",
    cost: 20,
    popularity: 0.85,
    tags: ["Drinks", "Traditional", "Vegetarian", "Spicy"],
    healthTags: ["digestive-friendly", "immunity-boosting"],
    ingredients: [
      { id: "cumin-seeds", name: "Roasted Cumin Seeds", qty: "1 tbsp", price: 5, available: true },
      { id: "mint-leaves", name: "Fresh Mint Leaves", qty: "1/2 cup", price: 10, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "2 tbsp", price: 5, available: true }
    ],
    steps: [
      "Grind mint leaves and roasted cumin seeds with a little water into a paste.",
      "Mix the paste with 3 cups of chilled water.",
      "Add black salt, amchur (dry mango powder), and lemon juice.",
      "Strain and serve with boondi on top."
    ]
  },
  {
    id: "drink-sattu-sharbat",
    name: "Sattu Sharbat",
    description: "A nutritious and cooling drink from Bihar made with roasted gram flour (sattu).",
    type: "Vegetarian",
    time: 10,
    servings: 2,
    difficulty: "Easy",
    cost: 25,
    popularity: 0.78,
    tags: ["Drinks", "Traditional", "Vegetarian"],
    healthTags: ["diabetes-friendly", "weight-management", "heart-healthy", "pcos-friendly"],
    ingredients: [
      { id: "sattu", name: "Sattu (Roasted Gram Flour)", qty: "4 tbsp", price: 15, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "cumin-powder", name: "Roasted Cumin Powder", qty: "1/2 tsp", price: 5, available: true }
    ],
    steps: [
      "Add sattu to a jug and gradually add chilled water, whisking to avoid lumps.",
      "Stir in lemon juice, black salt, and cumin powder.",
      "For a savory version, add finely chopped onions and green chilies.",
      "Pour into glasses and serve chilled."
    ]
  },
  {
    id: "drink-aam-panna",
    name: "Aam Panna",
    description: "A traditional summer cooler made with boiled raw mangoes, mint, and roasted spices.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 35,
    popularity: 0.89,
    tags: ["Drinks", "Traditional", "Vegetarian"],
    healthTags: ["immunity-boosting", "digestive-friendly"],
    ingredients: [
      { id: "raw-mango", name: "Raw Green Mango", qty: "2 large", price: 20, available: true },
      { id: "jaggery", name: "Jaggery or Sugar", qty: "1/2 cup", price: 10, available: true },
      { id: "mint-leaves", name: "Fresh Mint", qty: "handful", price: 5, available: true }
    ],
    steps: [
      "Boil raw mangoes until soft; peel and extract the pulp.",
      "Blend the pulp with mint leaves and jaggery.",
      "Add roasted cumin powder, black salt, and chilled water.",
      "Stir well and serve with ice cubes."
    ]
  },
  {
    id: "drink-golden-milk",
    name: "Turmeric Golden Milk (Haldi Doodh)",
    description: "Warm, soothing spiced milk featuring fresh turmeric and black pepper for maximum health benefits.",
    type: "Vegetarian",
    time: 10,
    servings: 2,
    difficulty: "Easy",
    cost: 30,
    popularity: 0.90,
    tags: ["Drinks", "Hot Beverages", "Vegetarian", "Healthy"],
    healthTags: ["immunity-boosting", "cold-cough-friendly", "pcos-friendly", "pregnancy-friendly"],
    ingredients: [
      { id: "milk", name: "Full Cream Milk", qty: "2 cups", price: 15, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/2 tsp", price: 5, available: true },
      { id: "pepper", name: "Black Pepper Powder", qty: "pinch", price: 10, available: false }
    ],
    steps: [
      "Heat milk in a saucepan until it starts to simmer.",
      "Whisk in turmeric powder, ginger powder, and a pinch of black pepper.",
      "Add honey or sugar to taste.",
      "Serve warm before bedtime."
    ]
  },
  {
    id: "drink-kadha",
    name: "Kadha",
    description: "Traditional immunity-boosting herbal decoction with potent spices.",
    type: "Vegetarian",
    time: 20,
    servings: 2,
    difficulty: "Medium",
    cost: 25,
    popularity: 0.89,
    tags: ["Drinks", "Hot Beverages", "Vegetarian", "Healthy", "Spicy"],
    healthTags: ["immunity-boosting", "cold-cough-friendly", "digestive-friendly"],
    ingredients: [
      { id: "tulsi", name: "Tulsi Leaves", qty: "8-10", price: 5, available: true },
      { id: "spices-whole", name: "Peppercorns, Cloves, Ginger", qty: "various", price: 15, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1 tsp", price: 5, available: true }
    ],
    steps: [
      "Crush all whole spices and ginger.",
      "Boil with 3 cups of water and tulsi leaves.",
      "Simmer until the liquid reduces to half.",
      "Stir in jaggery and strain into cups."
    ]
  },
  {
    id: "drink-carrot-beetroot-juice",
    name: "Carrot Beetroot Juice",
    description: "A nutrient-packed vegetable juice blend that's great for glowing skin.",
    type: "Vegetarian",
    time: 15,
    servings: 2,
    difficulty: "Easy",
    cost: 45,
    popularity: 0.77,
    tags: ["Drinks", "Juices", "Vegetarian", "Healthy"],
    healthTags: ["anemia-friendly", "heart-healthy", "immunity-boosting", "pregnancy-friendly"],
    ingredients: [
      { id: "carrot", name: "Fresh Carrots", qty: "3", price: 20, available: true },
      { id: "beetroot", name: "Medium Beetroot", qty: "1", price: 15, available: true },
      { id: "lemon", name: "Lemon", qty: "1/2", price: 10, available: true }
    ],
    steps: [
      "Wash, peel, and chop carrots and beetroot.",
      "Pass them through a juicer.",
      "Stir in lemon juice and a pinch of black salt.",
      "Serve immediately for maximum nutrient absorption."
    ]
  }
];
