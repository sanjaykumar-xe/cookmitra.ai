import { Recipe } from './types';

export const assamRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "masor-tenga-assam",
    menuCategory: "Curries & Gravies",
    name: "Masor Tenga",
    description: "The signature Assamese sour fish curry, light and refreshing, made with tomatoes and finished with a squeeze of local lemon.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.90,
    tags: ["Assam", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "fish", name: "Freshwater Fish (Rohu/Catla)", qty: "500g", price: 200, available: true },
      { id: "tomato", name: "Tomatoes (chopped)", qty: "3 large", price: 15, available: true },
      { id: "lemon", name: "Assamese Lemon (Kaji Nemu)", qty: "1", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 30, available: true },
      { id: "fenugreek", name: "Fenugreek Seeds", qty: "1/4 tsp", price: 5, available: false }
    ],
    steps: [
      "Marinate fish with salt and turmeric; shallow fry in mustard oil and set aside.",
      "Temper the remaining oil with fenugreek seeds.",
      "Add chopped tomatoes and sauté until soft and mushy.",
      "Add turmeric, salt, and 3 cups of water; bring to a boil.",
      "Add the fried fish and simmer for 5-8 minutes.",
      "Turn off the heat and squeeze fresh lemon juice over the curry. Garnish with coriander."
    ]
  },
  {
    id: "assamese-chicken-curry-light",
    menuCategory: "Curries & Gravies",
    name: "Assamese Chicken Curry",
    description: "A mild and thin chicken curry cooked with minimal spices and potatoes, typical of Assamese home cooking.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.82,
    tags: ["Assam", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 160, available: true },
      { id: "potato", name: "Potatoes (halved)", qty: "2", price: 10, available: true },
      { id: "onion", name: "Onions (sliced)", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Heat mustard oil and sauté onions until translucent.",
      "Add ginger-garlic paste and sauté for 2 minutes.",
      "Add chicken and potato halves; sear on high heat for 5 minutes.",
      "Add turmeric, cumin powder, and salt.",
      "Add 3 cups of water, cover, and simmer until chicken and potatoes are tender.",
      "The result should be a light, comforting broth."
    ]
  },
  {
    id: "duck-curry-bamboo-shoot-assam",
    menuCategory: "Curries & Gravies",
    name: "Duck Curry with Bamboo Shoot",
    description: "A festive Assamese dish where duck is slow-cooked with pungent fermented bamboo shoot (khorisa).",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.88,
    tags: ["Assam", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "duck", name: "Duck meat (with skin)", qty: "750g", price: 300, available: true },
      { id: "bamboo_shoot", name: "Fermented Bamboo Shoot (Khorisa)", qty: "1/4 cup", price: 40, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "4 tbsp", price: 30, available: true },
      { id: "dry_chili", name: "Whole Red Chilies", qty: "6", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "10", price: 20, available: false }
    ],
    steps: [
      "Pressure cook duck with salt and turmeric for 5-6 whistles until half-tender.",
      "Heat mustard oil to smoking point; sauté crushed garlic and red chilies.",
      "Add the duck pieces and roast (bhunao) in the oil until the skin starts to render fat.",
      "Stir in the fermented bamboo shoot and sauté for 5 minutes.",
      "Add minimal water and slow cook until the meat is tender and the aroma is strong."
    ]
  },
  {
    id: "pork-with-khorisa-assam",
    menuCategory: "Curries & Gravies",
    name: "Pork with Khorisa",
    description: "Tender pork chunks cooked with fermented bamboo shoot (khorisa) and fiery local chilies.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.86,
    tags: ["Assam", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork (fatty chunks)", qty: "500g", price: 180, available: true },
      { id: "khorisa", name: "Fermented Bamboo Shoot", qty: "3 tbsp", price: 30, available: true },
      { id: "green_chili", name: "Bhut Jolokia or Birds Eye Chili", qty: "2", price: 10, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 55, available: false }
    ],
    steps: [
      "Boil pork with a little salt until half-cooked; drain.",
      "Sauté pork in mustard oil until it releases its own fat.",
      "Add crushed ginger and fiery chilies.",
      "Stir in the fermented bamboo shoot (khorisa).",
      "Add a splash of water and simmer on low heat until the pork is tender and the curry is pungent."
    ]
  },
  {
    id: "masor-koni-curry-assam",
    menuCategory: "Curries & Gravies",
    name: "Masor Koni Curry",
    description: "A spicy and grainy curry made with freshwater fish roe (eggs) and mustard oil.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.79,
    tags: ["Assam", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish_roe", name: "Fish Roe (Koni)", qty: "300g", price: 150, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 20, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1 tsp", price: 5, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tsp", price: 95, available: false }
    ],
    steps: [
      "Lightly steam the fish roe with salt and turmeric until set; cut into chunks.",
      "Heat mustard oil and sauté onions until brown.",
      "Add ginger-garlic paste and spices.",
      "Add the roe chunks and sauté for 5 minutes.",
      "Add minimal water to form a thick, grainy gravy and simmer for 5 minutes."
    ]
  },
  {
    id: "chicken-khorisa-assam",
    menuCategory: "Curries & Gravies",
    name: "Chicken with Bamboo Shoot Assamese Style",
    description: "Chicken pieces simmered with tangy fermented bamboo shoot, a popular tribal-style curry from Upper Assam.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.81,
    tags: ["Assam", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "bamboo_shoot", name: "Fermented Bamboo Shoot", qty: "3 tbsp", price: 30, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 90, available: false }
    ],
    steps: [
      "Sauté onions and garlic in mustard oil until soft.",
      "Add chicken and sear on high heat.",
      "Add the bamboo shoot, salt, and turmeric.",
      "Simmer for 20 minutes with a little water until chicken is tender.",
      "The bamboo shoot gives it a distinct tangy and earthy flavor."
    ]
  },
  {
    id: "xaak-aru-maas-assam",
    menuCategory: "Dry & Stir-Fried",
    name: "Xaak Aru Maas",
    description: "A healthy and traditional Assamese preparation of small freshwater fish cooked with seasonal leafy greens.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.77,
    tags: ["Assam", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "small_fish", name: "Small Freshwater Fish", qty: "250g", price: 100, available: true },
      { id: "leafy_greens", name: "Seasonal Greens (Lai Xaak)", qty: "2 bunches", price: 20, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "4", price: 120, available: false }
    ],
    steps: [
      "Lightly fry the small fish with salt and turmeric; set aside.",
      "Sauté crushed garlic and green chilies in mustard oil.",
      "Add the chopped greens and sauté until they wilt.",
      "Add the fried fish and salt; toss gently.",
      "Simmer for 5 minutes without adding water until the greens are cooked."
    ]
  },
  {
    id: "pork-curry-assamese-style",
    menuCategory: "Curries & Gravies",
    name: "Pork Curry Assamese",
    description: "Traditional Assamese pork curry cooked with local herbs and a generous amount of garlic and ginger.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.84,
    tags: ["Assam", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork (cubed)", qty: "500g", price: 180, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "2", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 10, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 70, available: false }
    ],
    steps: [
      "Sauté onions and ginger-garlic paste in mustard oil until brown.",
      "Add pork pieces and sear on high heat until it releases fat.",
      "Add turmeric, chili powder, and salt.",
      "Simmer with minimal water until pork is tender.",
      "The result should be an oil-rich, spicy curry."
    ]
  },
  {
    id: "egg-curry-assamese-tomato",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry Assamese Style",
    description: "Simple and comforting boiled egg curry in a thin, tangy tomato gravy, perfect with rice.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.80,
    tags: ["Assam", "Northeast Indian", "Non-Vegetarian", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 20, available: true },
      { id: "tomato", name: "Ripe Tomatoes (pureed)", qty: "2 large", price: 10, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "ginger", name: "Ginger paste", qty: "1 tsp", price: 65, available: false }
    ],
    steps: [
      "Prick boiled eggs and lightly sear in mustard oil; set aside.",
      "Sauté onions and ginger paste until golden.",
      "Add tomato puree and spices; cook until oil separates.",
      "Add a cup of water and simmer to form a thin gravy.",
      "Add eggs and simmer for 5 minutes."
    ]
  },
  {
    id: "duck-black-sesame-assam",
    menuCategory: "Curries & Gravies",
    name: "Duck Meat Curry with Black Sesame",
    description: "A rustic and flavorful duck curry prepared with a characteristic black sesame seed paste, a winter specialty.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.85,
    tags: ["Assam", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "duck", name: "Duck meat", qty: "750g", price: 300, available: true },
      { id: "black_sesame", name: "Black Sesame Seeds", qty: "3 tbsp", price: 30, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "2", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 50, available: false }
    ],
    steps: [
      "Dry roast black sesame seeds and grind into a smooth paste.",
      "Pressure cook duck meat with salt and ginger-garlic until 80% done.",
      "In a heavy pot, sauté onions in mustard oil until brown.",
      "Add the sesame paste and sauté for 2 minutes.",
      "Add the duck meat and simmer until the meat is tender and the gravy is dark and rich."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "khar-assamese-authentic",
    menuCategory: "Curries & Gravies",
    name: "Khar",
    description: "The soul of an Assamese meal—an alkaline dish made with raw papaya and kolakhar (ash extract).",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.92,
    tags: ["Assam", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "raw_papaya", name: "Raw Papaya (cubed)", qty: "2 cups", price: 20, available: true },
      { id: "kolakhar", name: "Kolakhar (Liquid)", qty: "1 tbsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil (Raw)", qty: "1 tbsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tsp", price: 30, available: false }
    ],
    steps: [
      "Heat a little oil and sauté crushed ginger and green chilies.",
      "Add cubed raw papaya and sauté for 2 minutes.",
      "Add salt and turmeric; stir well.",
      "Add water and simmer until the papaya is soft and partially mashed.",
      "Stir in the kolakhar (alkaline extract) and simmer for 2 more minutes.",
      "Finish with a drizzle of raw mustard oil."
    ]
  },
  {
    id: "tenga-dal-assam",
    menuCategory: "Curries & Gravies",
    name: "Tenga Dal",
    description: "A light and tangy Assamese lentil curry flavored with tomatoes and finished with lemon.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.88,
    tags: ["Assam", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "masoor_dal", name: "Red Lentils (Masoor Dal)", qty: "1 cup", price: 25, available: true },
      { id: "tomato", name: "Ripe Tomato", qty: "1 large", price: 5, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "lemon", name: "Assamese Lemon", qty: "1", price: 10, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Boil dal with salt and turmeric until soft.",
      "Sauté tomato in a separate pan until mushy; add to the dal.",
      "Heat oil and temper with mustard seeds and green chilies.",
      "Pour the tempering over the dal and simmer for 2 minutes.",
      "Turn off heat and add fresh lemon juice."
    ]
  },
  {
    id: "bilahi-tenga-veg-assam",
    menuCategory: "Curries & Gravies",
    name: "Bilahi Maas Tenga Style Vegetables",
    description: "A vegetarian version of the famous Tenga, using tangy tomatoes and local mountain vegetables.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.82,
    tags: ["Assam", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "mixed_veg", name: "Potato, Carrot, Beans", qty: "2 cups", price: 30, available: true },
      { id: "tomato", name: "Ripe Tomatoes", qty: "3 large", price: 15, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 15, available: false }
    ],
    steps: [
      "Boil vegetables until tender; set aside.",
      "Sauté tomatoes and ginger in mustard oil until soft and pulpy.",
      "Add turmeric, salt, and water to make a thin base.",
      "Add the boiled vegetables and simmer for 10 minutes until tangy.",
      "Temper with mustard seeds and curry leaves."
    ]
  },
  {
    id: "aloo-pitika-assam",
    menuCategory: "Curries & Gravies",
    name: "Aloo Pitika",
    description: "The ultimate Assamese comfort food—mashed potatoes with raw mustard oil, onions, and green chilies.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.95,
    tags: ["Assam", "Northeast Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "potato", name: "Boiled Potatoes", qty: "4 large", price: 15, available: true },
      { id: "mustard_oil", name: "Raw Mustard Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "onion", name: "Raw Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 20, available: false }
    ],
    steps: [
      "Mash boiled potatoes while warm.",
      "Add raw chopped onions and minced green chilies.",
      "Pour the raw mustard oil and add salt.",
      "Mix thoroughly by hand to integrate the pungent oil flavor.",
      "Serve as a side with rice and dal."
    ]
  },
  {
    id: "bamboo-shoot-curry-assam",
    menuCategory: "Curries & Gravies",
    name: "Bamboo Shoot Curry Assamese",
    description: "Tangy fermented bamboo shoot (khorisa) cooked with local seasonal greens.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.70,
    tags: ["Assam", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "khorisa", name: "Fermented Bamboo Shoot", qty: "1/2 cup", price: 30, available: true },
      { id: "leafy_greens", name: "Seasonal Greens", qty: "1 bunch", price: 15, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 tsp", price: 25, available: false }
    ],
    steps: [
      "Sauté ginger and green chilies in mustard oil.",
      "Add bamboo shoots and sauté for 5 minutes.",
      "Add finely chopped greens and salt.",
      "Simmer for 10 minutes until tender and tangy."
    ]
  },
  {
    id: "xaak-bhaji-assam",
    menuCategory: "Dry & Stir-Fried",
    name: "Xaak Bhaji",
    description: "Simple and nutritious stir-fry of assorted Assamese leafy greens with garlic.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.81,
    tags: ["Assam", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mixed_greens", name: "Assorted Greens (Lai, Paleng)", qty: "3 bunches", price: 20, available: true },
      { id: "garlic", name: "Garlic cloves (crushed)", qty: "6", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "chili", name: "Green Chili", qty: "2", price: 20, available: false }
    ],
    steps: [
      "Wash and roughly chop the greens.",
      "Heat mustard oil and sauté crushed garlic and chilies until golden.",
      "Add the greens and salt.",
      "Stir-fry on high heat for 5 minutes until just wilted and tender."
    ]
  },
  {
    id: "bor-kumura-curry-assam",
    menuCategory: "Curries & Gravies",
    name: "Bor Kumura Curry",
    description: "Ash gourd cooked with simple Assamese spices in a light, watery gravy.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.76,
    tags: ["Assam", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "ash_gourd", name: "Ash Gourd (Bor Kumura)", qty: "500g", price: 25, available: true },
      { id: "ginger", name: "Minced Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/4 tsp", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 30, available: false }
    ],
    steps: [
      "Peel and cube the ash gourd.",
      "Sauté ginger in mustard oil.",
      "Add gourd cubes, turmeric, and salt.",
      "Add 1 cup of water, cover, and cook until tender."
    ]
  },
  {
    id: "dal-assamese-style",
    menuCategory: "Curries & Gravies",
    name: "Dal Assamese Style",
    description: "Simple tempered lentil curry flavored with ginger and local herbs.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.70,
    tags: ["Assam", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "yellow_dal", name: "Moong or Toor Dal", qty: "1 cup", price: 25, available: true },
      { id: "ginger", name: "Minced Ginger", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Boil dal with turmeric and salt until mushy.",
      "Sauté ginger in mustard oil.",
      "Pour into the dal and simmer for 2 minutes.",
      "Serve warm."
    ]
  },
  {
    id: "kordoi-tenga-assam",
    menuCategory: "Curries & Gravies",
    name: "Kordoi Tenga",
    description: "A sour vegetable curry made with star fruit (Kordoi), a refreshing regional specialty.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.65,
    tags: ["Assam", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "star_fruit", name: "Star Fruit (Kordoi)", qty: "2 medium", price: 20, available: true },
      { id: "potato", name: "Potato (cubed)", qty: "1", price: 5, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "sugar", name: "Sugar (optional)", qty: "pinch", price: 35, available: false }
    ],
    steps: [
      "Sauté potato cubes in mustard oil.",
      "Add star fruit slices and sauté for 2 minutes.",
      "Add water, salt, and turmeric.",
      "Simmer until vegetables are tender and gravy is tangy."
    ]
  },
  {
    id: "pumpkin-flower-fritter-curry",
    menuCategory: "Curries & Gravies",
    name: "Pumpkin Flower Fritter Curry",
    description: "Pumpkin flower fritters (Bor) cooked in a light spiced gravy, a delicate Assamese dish.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.74,
    tags: ["Assam", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "pumpkin_flowers", name: "Pumpkin Flowers", qty: "10", price: 20, available: true },
      { id: "besan", name: "Besan", qty: "1/2 cup", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1/4 cup", price: 30, available: false }
    ],
    steps: [
      "Make a thick besan batter and dip flowers to fry into fritters (Bor).",
      "Prepare a light gravy with onions and spices.",
      "Add the fritters to the gravy just before serving.",
      "The flowers absorb the gravy while remaining soft."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "pitha-assamese-sweet",
    menuCategory: "Snacks & Street Food",
    name: "Pitha",
    description: "Traditional steamed rice flour cakes stuffed with a sweet mixture of grated coconut and jaggery.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.94,
    tags: ["Assam", "Northeast Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 30, available: true },
      { id: "jaggery", name: "Jaggery (liquid)", qty: "1/2 cup", price: 15, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "steamer", name: "Steamer", qty: "1", price: 10, available: false }
    ],
    steps: [
      "Knead rice flour with warm water into a soft dough.",
      "Stuff small dough discs with a coconut-jaggery mixture.",
      "Seal and steam for 15-20 minutes.",
      "Serve warm."
    ]
  },
  {
    id: "til-pitha-assam",
    menuCategory: "Snacks & Street Food",
    name: "Til Pitha",
    description: "Famous Assamese rice flour rolls filled with a sweet roasted black sesame and jaggery center.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Hard",
    cost: 70,
    popularity: 0.95,
    tags: ["Assam", "Northeast Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "sticky_rice", name: "Glutinous Rice (Bora Saul)", qty: "2 cups", price: 40, available: true },
      { id: "black_sesame", name: "Black Sesame Seeds", qty: "1/2 cup", price: 15, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1/2 cup", price: 15, available: true }
    ],
    steps: [
      "Grind soaked sticky rice into a fine powder.",
      "Roast sesame seeds and mix with jaggery.",
      "Spread rice powder on a hot flat tawa into a thin circle.",
      "Place sesame filling in the center and roll tightly into a cylinder.",
      "Let it set and become firm."
    ]
  },
  {
    id: "doi-chira-assam",
    menuCategory: "Snacks & Street Food",
    name: "Doi Chira",
    description: "A simple and nutritious Assamese snack or breakfast of flattened rice soaked in creamy yogurt and sweetened with jaggery.",
    type: "Vegetarian",
    time: 15,
    servings: 3,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.89,
    tags: ["Assam", "Northeast Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "chira", name: "Flattened Rice (Chira)", qty: "2 cups", price: 20, available: true },
      { id: "curd", name: "Thick Curd (Doi)", qty: "1 cup", price: 20, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1/4 cup", price: 15, available: true }
    ],
    steps: [
      "Wash and soak chira for 2 minutes; drain water.",
      "Mix with thick curd in a bowl.",
      "Stir in jaggery syrup or crushed jaggery.",
      "Serve as a light and refreshing meal."
    ]
  },
  {
    id: "ghila-pitha-assam",
    menuCategory: "Snacks & Street Food",
    name: "Ghila Pitha",
    description: "Deep-fried sweet rice flour and mashed banana fritters, a popular Bihu festival treat.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.90,
    tags: ["Assam", "Northeast Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "1 cup", price: 15, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1/2 cup", price: 15, available: true },
      { id: "banana", name: "Mashed Banana", qty: "1", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 25, available: false }
    ],
    steps: [
      "Mix rice flour, mashed banana, and jaggery into a thick batter.",
      "Form small flat discs.",
      "Deep fry until golden brown and crispy.",
      "Serve hot."
    ]
  },
  {
    id: "duck-meat-momos-assam",
    menuCategory: "Snacks & Street Food",
    name: "Duck Meat Momos",
    description: "Steamed dumplings filled with spiced minced duck meat, a specialty of Assamese hill regions.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 210,
    popularity: 0.82,
    tags: ["Assam", "Northeast Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "duck_mince", name: "Minced Duck", qty: "300g", price: 120, available: true },
      { id: "onion", name: "Onion (minced)", qty: "2 tbsp", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 5, available: true },
      { id: "maida", name: "All-purpose Flour", qty: "2 cups", price: 80, available: false }
    ],
    steps: [
      "Mix minced duck with onions and spices.",
      "Make a soft flour dough and roll into circles.",
      "Stuff with duck mixture and steam for 15 minutes.",
      "Serve with spicy tomato dip."
    ]
  }
];
