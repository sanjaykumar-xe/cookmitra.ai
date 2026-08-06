import { Recipe } from './types';

export const sikkimRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "pork-momos-sikkim",
    name: "Pork Momos",
    description: "Traditional Sikkimese steamed dumplings filled with succulent minced pork and mountain herbs.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 200,
    popularity: 0.88,
    tags: ["Sikkim", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork_mince", name: "Minced Pork", qty: "500g", price: 150, available: true },
      { id: "onion", name: "Onions (finely chopped)", qty: "2", price: 10, available: true },
      { id: "ginger", name: "Ginger (grated)", qty: "1 tbsp", price: 5, available: true },
      { id: "maida", name: "All-purpose Flour", qty: "2 cups", price: 20, available: true },
      { id: "spices", name: "Local Momos Spices", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Knead a firm dough with flour and water; let it rest for 30 minutes.",
      "Mix minced pork, onions, ginger, and spices thoroughly in a bowl.",
      "Roll out thin circles of dough and place a spoonful of filling in the center.",
      "Pleat the edges to seal the dumplings in a half-moon or round shape.",
      "Steam for 12-15 minutes until the wrappers are translucent and meat is cooked.",
      "Serve hot with fiery red chili-tomato chutney."
    ]
  },
  {
    id: "chicken-thukpa-sikkim",
    name: "Chicken Thukpa",
    description: "A hearty and warming Himalayan noodle soup loaded with shredded chicken and seasonal vegetables.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 180,
    popularity: 0.85,
    tags: ["Sikkim", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "egg_noodles", name: "Egg Noodles", qty: "200g", price: 40, available: true },
      { id: "chicken", name: "Shredded Chicken", qty: "250g", price: 80, available: true },
      { id: "cabbage", name: "Shredded Cabbage", qty: "1 cup", price: 15, available: true },
      { id: "ginger_garlic", name: "Ginger-Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 35, available: false }
    ],
    steps: [
      "Boil noodles according to package instructions and set aside.",
      "Sauté ginger-garlic paste and green chilies in a large pot.",
      "Add shredded chicken and sauté until lightly browned.",
      "Add chopped vegetables and 4-5 cups of chicken broth or water.",
      "Bring to a boil and simmer until vegetables are tender.",
      "Add the boiled noodles and season with soy sauce and local spices before serving."
    ]
  },
  {
    id: "chicken-momos-sikkim",
    name: "Chicken Momos",
    description: "Delicate steamed dumplings stuffed with spiced minced chicken, a staple of Sikkimese street food.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 190,
    popularity: 0.90,
    tags: ["Sikkim", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken_mince", name: "Minced Chicken", qty: "500g", price: 140, available: true },
      { id: "onion", name: "Finely chopped Onions", qty: "2", price: 10, available: true },
      { id: "garlic", name: "Garlic (minced)", qty: "1 tbsp", price: 5, available: true },
      { id: "maida", name: "All-purpose Flour", qty: "2 cups", price: 20, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Prepare a soft dough using flour and water.",
      "Mix minced chicken, onions, garlic, oil, and salt in a bowl.",
      "Divide dough into small balls and roll into thin wrappers.",
      "Place filling in the center and fold into desired momo shapes.",
      "Steam for 10-12 minutes until cooked.",
      "Serve with a spicy Himalayan tomato dip."
    ]
  },
  {
    id: "pork-thenthuk-sikkim",
    name: "Pork Thenthuk",
    description: "Tibetan-style hand-pulled noodle soup with pieces of pork and fresh vegetables, known for its rustic texture.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 190,
    popularity: 0.82,
    tags: ["Sikkim", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork slices", qty: "300g", price: 100, available: true },
      { id: "wheat_dough", name: "Wheat Flour Dough", qty: "for noodles", price: 20, available: true },
      { id: "radish", name: "Sliced Radish", qty: "1/2 cup", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 55, available: false }
    ],
    steps: [
      "Sauté pork slices with ginger and onions until browned.",
      "Add water and bring to a boil; add sliced radish and other vegetables.",
      "Roll the dough into small strips and pull them by hand into flat, irregular noodles directly into the boiling soup.",
      "Cook for 10-15 minutes until the noodles and pork are tender.",
      "Season with salt and a dash of local pepper."
    ]
  },
  {
    id: "sikkimese-pork-curry",
    name: "Sikkimese Pork Curry",
    description: "A robust and spicy pork curry cooked in mustard oil and flavored with fermented bamboo shoots.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 350,
    popularity: 0.84,
    tags: ["Sikkim", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork (with fat)", qty: "500g", price: 200, available: true },
      { id: "bamboo_shoot", name: "Fermented Bamboo Shoot", qty: "1/4 cup", price: 40, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "dry_chili", name: "Dry Red Chilies", qty: "6", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "8", price: 70, available: false }
    ],
    steps: [
      "Heat mustard oil until smoking; sauté crushed garlic and red chilies.",
      "Add pork chunks and roast (bhunao) until the fat starts to render and edges are brown.",
      "Stir in the fermented bamboo shoot and sauté for 5 minutes.",
      "Add turmeric, salt, and 2 cups of water.",
      "Slow cook until the pork is extremely tender and the gravy is dark and pungent."
    ]
  },
  {
    id: "chicken-curry-sikkimese",
    name: "Sikkimese Chicken Curry",
    description: "A mild and earthy chicken curry prepared with a simple blend of Himalayan herbs and mountain-grown ginger.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.76,
    tags: ["Sikkim", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "ginger", name: "Local Ginger (grated)", qty: "2 tbsp", price: 10, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "2 tbsp", price: 85, available: false }
    ],
    steps: [
      "Sauté cumin seeds and onions in oil until translucent.",
      "Add chicken pieces and ginger; sauté until the meat turns white.",
      "Add turmeric, salt, and a little chili powder.",
      "Add a cup of water and simmer for 20 minutes until the chicken is tender.",
      "The result is a light, fragrant curry that highlights the fresh ginger flavor."
    ]
  },
  {
    id: "gyathuk-sikkim",
    name: "Gyathuk",
    description: "Sikkimese-style noodle soup with chicken and local greens, known for its restorative properties.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 180,
    popularity: 0.72,
    tags: ["Sikkim", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "noodles", name: "Handmade Noodles", qty: "200g", price: 50, available: true },
      { id: "chicken_broth", name: "Chicken Broth", qty: "4 cups", price: 30, available: true },
      { id: "chicken_bits", name: "Boiled Chicken bits", qty: "1 cup", price: 60, available: true },
      { id: "mustard_greens", name: "Mustard Greens", qty: "1/2 cup", price: 15, available: true },
      { id: "garlic", name: "Garlic", qty: "4 cloves", price: 25, available: false }
    ],
    steps: [
      "Boil noodles and set aside.",
      "Heat broth in a large pot with crushed garlic and ginger.",
      "Add mustard greens and cook until they wilt.",
      "Stir in the boiled chicken and noodles.",
      "Adjust salt and add a spoonful of spicy chili oil if desired."
    ]
  },
  {
    id: "pork-sha-phaley-sikkim",
    name: "Pork Sha Phaley",
    description: "Deep-fried bread stuffed with a spicy minced pork mixture, a popular festival snack in Sikkim.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 220,
    popularity: 0.81,
    tags: ["Sikkim", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork_mince", name: "Minced Pork", qty: "250g", price: 80, available: true },
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "cabbage", name: "Minced Cabbage", qty: "1/4 cup", price: 5, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 110, available: false }
    ],
    steps: [
      "Mix minced pork, cabbage, and onions with salt and pepper.",
      "Knead a simple wheat dough and roll into circles.",
      "Place filling in the center, fold over to make a semi-circle, and crimp the edges.",
      "Deep fry in medium hot oil until golden brown and crispy.",
      "Serve hot with spicy chutney."
    ]
  },
  {
    id: "egg-thukpa-sikkim",
    name: "Egg Thukpa",
    description: "A comforting bowl of noodle soup with hard-boiled eggs and mountain vegetables.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    cost: 150,
    popularity: 0.74,
    tags: ["Sikkim", "Northeast Indian", "Non-Vegetarian", "Breakfast"],
    ingredients: [
      { id: "noodles", name: "Wheat Noodles", qty: "200g", price: 30, available: true },
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 20, available: true },
      { id: "mixed_veg", name: "Carrot, Peas, Beans", qty: "1 cup", price: 30, available: true },
      { id: "broth", name: "Vegetable Broth", qty: "4 cups", price: 10, available: true },
      { id: "ginger", name: "Ginger", qty: "1 tsp", price: 60, available: false }
    ],
    steps: [
      "Prepare noodles and boil eggs; set aside.",
      "Bring broth to a boil with ginger and salt.",
      "Add vegetables and cook until tender.",
      "Add noodles and halved boiled eggs to the soup.",
      "Warm through and serve with a dash of soy sauce."
    ]
  },
  {
    id: "chicken-curry-bamboo-shoot-sikkim",
    name: "Chicken Curry with Fermented Bamboo Shoot",
    description: "A tangy and spicy chicken preparation using the unique flavor of fermented bamboo shoots.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.79,
    tags: ["Sikkim", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "bamboo_shoot", name: "Bamboo Shoot (fermented)", qty: "1/2 cup", price: 30, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 15, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 80, available: false }
    ],
    steps: [
      "Sauté onions and green chilies in mustard oil.",
      "Add chicken and sear on high heat.",
      "Add the bamboo shoot and salt.",
      "Simmer for 20 minutes with a little water until chicken is tender.",
      "The bamboo shoot gives it a distinct tangy and earthy flavor."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "vegetable-momos-sikkim",
    name: "Vegetable Momos",
    description: "Steamed dumplings filled with a mixture of finely chopped mountain vegetables and mild spices.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 150,
    popularity: 0.88,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "cabbage_carrot", name: "Cabbage & Carrots (minced)", qty: "2 cups", price: 30, available: true },
      { id: "onion", name: "Onion (finely chopped)", qty: "1", price: 5, available: true },
      { id: "maida", name: "All-purpose Flour", qty: "2 cups", price: 20, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 90, available: false }
    ],
    steps: [
      "Make a soft dough with flour and water.",
      "Mix minced vegetables with ginger, onion, oil, and salt.",
      "Roll small discs of dough and stuff with the vegetable mix.",
      "Steam for 10 minutes until the wrapper is cooked.",
      "Serve with spicy tomato chutney."
    ]
  },
  {
    id: "gundruk-soup-sikkim",
    name: "Gundruk Soup",
    description: "A traditional fermented leafy green soup, known for its probiotic benefits and sour-spicy taste.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.82,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "gundruk", name: "Fermented Greens (Gundruk)", qty: "1 cup", price: 20, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 10, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 25, available: false }
    ],
    steps: [
      "Wash gundruk and soak for 5 minutes.",
      "Sauté onions and green chilies in mustard oil.",
      "Add tomatoes and gundruk; sauté for 2 minutes.",
      "Add 3 cups of water and salt.",
      "Simmer for 15 minutes until the soup is flavorful and tangy."
    ]
  },
  {
    id: "sinki-soup-sikkim",
    name: "Sinki Soup",
    description: "A sour soup made from fermented radish roots, a unique preserved food of the Himalayan region.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.70,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "sinki", name: "Fermented Radish (Sinki)", qty: "1 cup", price: 20, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "4", price: 5, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "chili", name: "Red Chili Powder", qty: "1/2 tsp", price: 25, available: false }
    ],
    steps: [
      "Wash sinki and soak in warm water briefly.",
      "Heat oil and sauté crushed garlic and ginger.",
      "Add sinki and spices; sauté for a minute.",
      "Add water and simmer for 15-20 minutes.",
      "Serve as a hot, tangy appetising soup."
    ]
  },
  {
    id: "ningro-curry-sikkim",
    name: "Ningro Curry",
    description: "Wild fiddlehead ferns stir-fried with local spices and sometimes fermented cheese (Chhurpi).",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 75,
    popularity: 0.78,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "ningro", name: "Fiddlehead Ferns (Ningro)", qty: "250g", price: 30, available: true },
      { id: "chhurpi", name: "Local Fermented Cheese", qty: "2 tbsp", price: 15, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Clean ferns thoroughly and remove hard stems.",
      "Sauté ginger and green chilies in mustard oil.",
      "Add ferns and salt; stir-fry on high heat.",
      "Stir in chhurpi cheese and a splash of water.",
      "Cook until the ferns are tender and the cheese forms a light glaze."
    ]
  },
  {
    id: "vegetable-thukpa-sikkim",
    name: "Vegetable Thukpa",
    description: "A nourishing noodle soup packed with fresh mountain vegetables and mountain-grown herbs.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    cost: 140,
    popularity: 0.81,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "noodles", name: "Wheat Noodles", qty: "200g", price: 30, available: true },
      { id: "mixed_veg", name: "Bok Choy, Carrot, Beans", qty: "2 cups", price: 40, available: true },
      { id: "broth", name: "Vegetable Broth", qty: "4 cups", price: 10, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "1 tbsp", price: 50, available: false }
    ],
    steps: [
      "Boil noodles and set aside.",
      "Heat oil and sauté garlic paste.",
      "Add vegetables and stir-fry for 2 minutes.",
      "Add broth and bring to a boil; simmer for 10 minutes.",
      "Add noodles and season with salt and pepper."
    ]
  },
  {
    id: "chhurpi-curry-sikkim",
    name: "Chhurpi Curry",
    description: "Local fermented cheese cooked with onions and tomatoes into a savory, slightly pungent curry.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 110,
    popularity: 0.74,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "chhurpi", name: "Chhurpi (soft variety)", qty: "200g", price: 50, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 10, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Sauté onions and green chilies until soft.",
      "Add tomatoes and cook until mushy.",
      "Stir in chhurpi cheese and salt.",
      "Cook on low heat until the cheese integrates into a gravy.",
      "Serve warm with rice."
    ]
  },
  {
    id: "kinema-curry-sikkim",
    name: "Kinema Curry",
    description: "A traditional fermented soybean dish, rich in protein and known for its strong, distinct aroma.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.65,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "kinema", name: "Fermented Soybeans (Kinema)", qty: "1 cup", price: 25, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 15, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "pinch", price: 30, available: false }
    ],
    steps: [
      "Heat mustard oil and sauté onions until brown.",
      "Add ginger-garlic paste and sauté.",
      "Add kinema and roast on high heat for 3-4 minutes to mellow the aroma.",
      "Add turmeric, salt, and a little water.",
      "Simmer for 10 minutes until thick."
    ]
  },
  {
    id: "bamboo-shoot-curry-sikkimese",
    name: "Bamboo Shoot Curry Sikkimese",
    description: "Tangy fermented bamboo shoots cooked with potatoes and local spices.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.72,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "bamboo_shoot", name: "Bamboo Shoot (fermented)", qty: "1/2 cup", price: 30, available: true },
      { id: "potato", name: "Potatoes (cubed)", qty: "2", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "chili", name: "Dry Red Chili", qty: "2", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/4 tsp", price: 25, available: false }
    ],
    steps: [
      "Parboil potato cubes and set aside.",
      "Heat oil, temper with red chilies.",
      "Add potatoes and fermented bamboo shoot.",
      "Sauté for 5 minutes; add salt and turmeric.",
      "Simmer for 10 minutes with minimal water."
    ]
  },
  {
    id: "fapar-ko-roti-sabzi-sikkim",
    name: "Fapar Ko Roti with Sabzi",
    description: "Nutritious buckwheat flatbread served with a light mountain vegetable stir-fry.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.88,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian", "Breakfast", "Healthy"],
    ingredients: [
      { id: "buckwheat_flour", name: "Buckwheat Flour (Fapar)", qty: "2 cups", price: 30, available: true },
      { id: "mixed_veg", name: "Seasonal Mountain Veg", qty: "1 cup", price: 15, available: true },
      { id: "oil", name: "Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 15, available: false }
    ],
    steps: [
      "Mix buckwheat flour with water to form a smooth thick batter.",
      "Spread batter on a hot greased tawa like a pancake.",
      "Cook both sides until firm and browned.",
      "Prepare a light stir-fry of vegetables with minimal spices.",
      "Serve the roti hot with the sabzi."
    ]
  },
  {
    id: "alu-dum-sikkimese",
    name: "Alu Dum Sikkimese",
    description: "Potatoes in a thick, light spiced Himalayan-style gravy with a tangy finish.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.84,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "potato", name: "Boiled Potatoes", qty: "4", price: 15, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 10, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Cube the boiled potatoes.",
      "Sauté onions and green chilies until soft.",
      "Add tomatoes and spices; cook until mushy.",
      "Add potatoes and salt; toss well.",
      "Add a splash of water and simmer for 5 minutes."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "sel-roti-sikkim",
    name: "Sel Roti",
    description: "A traditional ring-shaped sweet fried rice bread, crispy on the outside and soft inside.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 60,
    popularity: 0.94,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "rice", name: "Rice (soaked & ground)", qty: "2 cups", price: 20, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 cup", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "1/4 cup", price: 30, available: true }
    ],
    steps: [
      "Grind soaked rice into a semi-smooth paste; mix with sugar and ghee.",
      "Beat the mixture until light and airy.",
      "Heat oil in a wide pan.",
      "Pour the batter by hand in a circular motion to form a ring.",
      "Deep fry until golden brown and crispy."
    ]
  },
  {
    id: "vegetable-momos-fried-sikkim",
    name: "Fried Vegetable Momos",
    description: "Steamed vegetable dumplings pan-fried until the bottom is crispy and golden.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 150,
    popularity: 0.85,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "veg_momos", name: "Prepared Veg Momos", qty: "12", price: 100, available: true },
      { id: "oil", name: "Oil for pan fry", qty: "2 tbsp", price: 50, available: false }
    ],
    steps: [
      "Steam vegetable momos as usual.",
      "Heat a little oil in a flat pan.",
      "Place momos on the pan and fry until the bottoms are golden and crispy.",
      "Serve with spicy chutney."
    ]
  },
  {
    id: "churpi-chatpate-sikkim",
    name: "Churpi Chatpate",
    description: "A tangy and spicy snack made from local fermented cheese, onions, and mountain chilies.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 90,
    popularity: 0.79,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "chhurpi", name: "Soft Chhurpi cheese", qty: "1 cup", price: 40, available: true },
      { id: "onion", name: "Raw Onion (minced)", qty: "2 tbsp", price: 5, available: true },
      { id: "green_chili", name: "Finely chopped Green Chili", qty: "2", price: 5, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 40, available: false }
    ],
    steps: [
      "Crumble soft chhurpi into a bowl.",
      "Mix with minced onions and green chilies.",
      "Add lemon juice and salt.",
      "Toss well and serve as a quick, pungent snack."
    ]
  },
  {
    id: "wai-wai-sadeko-sikkim",
    name: "Wai Wai Sadeko",
    description: "A zesty and spicy instant noodle salad, a hugely popular snack among Sikkimese youth.",
    type: "Vegetarian",
    time: 15,
    servings: 3,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.95,
    tags: ["Sikkim", "Northeast Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "wai_wai", name: "Wai Wai Noodles", qty: "2 packets", price: 20, available: true },
      { id: "onion", name: "Minced Onion", qty: "2 tbsp", price: 5, available: true },
      { id: "tomato", name: "Minced Tomato", qty: "2 tbsp", price: 5, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Crush the noodles into a bowl; add the seasoning oils and powders from the packets.",
      "Mix in minced onions, tomatoes, and green chilies.",
      "Add lemon juice and toss thoroughly.",
      "Enjoy immediately for maximum crunch."
    ]
  },
  {
    id: "chicken-momos-fried-sikkim",
    name: "Fried Chicken Momos",
    description: "Spiced chicken momos deep-fried for a crunchy exterior and juicy interior.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 200,
    popularity: 0.89,
    tags: ["Sikkim", "Northeast Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "chicken_momos", name: "Prepared Chicken Momos", qty: "12", price: 120, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 80, available: false }
    ],
    steps: [
      "Prepare chicken momos and steam them partially.",
      "Heat oil in a kadai.",
      "Deep fry the momos until they turn golden brown and crispy.",
      "Serve hot with spicy dip."
    ]
  }
];
