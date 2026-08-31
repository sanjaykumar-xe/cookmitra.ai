import { Recipe } from './types';

export const manipurRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "eromba-manipur",
    menuCategory: "Curries & Gravies",
    name: "Eromba",
    description: "The soul of Manipuri cuisine—a pungent and spicy dish made by mashing boiled vegetables and fermented fish (Ngari) with fiery chilies.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.89,
    tags: ["Manipur", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "ngari", name: "Ngari (Fermented Fish)", qty: "4-5 pieces", price: 50, available: true },
      { id: "potato", name: "Potatoes", qty: "2 medium", price: 10, available: true },
      { id: "bamboo_shoot", name: "Bamboo Shoot", qty: "1/4 cup", price: 30, available: true },
      { id: "king_chili", name: "U-morok (King Chili)", qty: "1", price: 10, available: true },
      { id: "maroi", name: "Maroi Nakupi (Chives)", qty: "handful", price: 15, available: false }
    ],
    steps: [
      "Boil potatoes, bamboo shoots, and any other seasonal vegetables until soft.",
      "Roast the Ngari on an open flame until it releases a strong aroma.",
      "Boil the red chilies or U-morok until soft.",
      "In a traditional mortar and pestle, mash the chilies and roasted Ngari with salt.",
      "Add the boiled vegetables and mash everything into a coarse paste.",
      "Garnish with chopped chives (Maroi) and coriander."
    ]
  },
  {
    id: "ngari-fish-curry-manipur",
    menuCategory: "Curries & Gravies",
    name: "Ngari Fish Curry",
    description: "A simple and pungent river fish curry prepared with fermented fish paste and local mountain herbs.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.85,
    tags: ["Manipur", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "river_fish", name: "Freshwater Fish", qty: "500g", price: 200, available: true },
      { id: "ngari_paste", name: "Ngari Paste", qty: "1 tbsp", price: 20, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "maroi", name: "Maroi (Local Herbs)", qty: "handful", price: 15, available: false }
    ],
    steps: [
      "Clean and cut the fish into medium pieces.",
      "Bring 3 cups of water to a boil with Ngari paste and ginger.",
      "Add green chilies and salt.",
      "Gently add the fish pieces and simmer for 10 minutes.",
      "Stir in the fresh local herbs and remove from heat.",
      "Serve hot with steamed rice."
    ]
  },
  {
    id: "chak-hao-kheer-chicken-side",
    menuCategory: "Desserts & Sweets",
    name: "Chak-hao Kheer with Chicken Side",
    description: "A unique combination of sweet black rice pudding served with a savory, lightly spiced chicken accompaniment.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.82,
    tags: ["Manipur", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "black_rice", name: "Chak-hao (Black Rice)", qty: "1 cup", price: 50, available: true },
      { id: "chicken_bits", name: "Chicken (small bits)", qty: "250g", price: 80, available: true },
      { id: "milk", name: "Milk", qty: "500ml", price: 40, available: true },
      { id: "sugar", name: "Sugar", qty: "1/4 cup", price: 10, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tsp", price: 35, available: false }
    ],
    steps: [
      "Boil black rice in milk with sugar until it turns into a thick, purple kheer.",
      "Sauté chicken bits with salt and minimal local spices in a separate pan.",
      "Cook chicken until tender and slightly browned.",
      "Serve the warm kheer in a bowl with the savory chicken on the side.",
      "This provides a traditional balance of sweet and savory flavors."
    ]
  },
  {
    id: "pork-bamboo-shoot-manipur",
    menuCategory: "Curries & Gravies",
    name: "Pork with Bamboo Shoot Manipuri",
    description: "Tender pork chunks slow-cooked with pungent fermented bamboo shoot and local Manipuri chilies.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.86,
    tags: ["Manipur", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork (with fat)", qty: "500g", price: 180, available: true },
      { id: "bamboo_shoot", name: "Fermented Bamboo Shoot", qty: "1/2 cup", price: 40, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "6", price: 10, available: true },
      { id: "ginger", name: "Ginger (minced)", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Boil pork with salt until half-cooked; drain.",
      "Sauté pork in mustard oil until it browns and releases fat.",
      "Add minced ginger and whole green chilies.",
      "Stir in the fermented bamboo shoot and sauté for 5 minutes.",
      "Add a splash of water and simmer on low heat until the pork is tender and the curry is pungent."
    ]
  },
  {
    id: "chicken-curry-manipur",
    menuCategory: "Curries & Gravies",
    name: "Chicken Curry Manipuri",
    description: "A light and healthy chicken preparation using local herbs like maroi nakupi and minimal oil.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.78,
    tags: ["Manipur", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 160, available: true },
      { id: "maroi_nakupi", name: "Maroi Nakupi (Chives)", qty: "1 bunch", price: 15, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 90, available: false }
    ],
    steps: [
      "Sauté chopped maroi chives and ginger paste in oil.",
      "Add chicken pieces and sear on high heat.",
      "Add turmeric, salt, and green chilies.",
      "Add water and simmer until the chicken is tender.",
      "The result is a light, clean-tasting curry focused on the herbs."
    ]
  },
  {
    id: "utong-metpa-pork",
    menuCategory: "Curries & Gravies",
    name: "Utong Metpa",
    description: "Bamboo-steamed pork flavored with local spices and fermented ingredients, a traditional tribal method.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.84,
    tags: ["Manipur", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork (thin slices)", qty: "400g", price: 160, available: true },
      { id: "bamboo_tube", name: "Fresh Bamboo Tube", qty: "1", price: 30, available: true },
      { id: "ginger_garlic", name: "Ginger-Garlic", qty: "1 tbsp", price: 10, available: true },
      { id: "local_spice", name: "Meitei Spice Blend", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tsp", price: 70, available: false }
    ],
    steps: [
      "Mix pork slices with ginger-garlic, salt, and spice blend.",
      "Stuff the mixture into a fresh bamboo tube.",
      "Plug the opening with leaves and roast the tube over an open flame.",
      "Rotate the tube constantly for 30-40 minutes.",
      "The meat cooks in its own juices and the bamboo sap, giving it a unique flavor."
    ]
  },
  {
    id: "fish-curry-local-herbs-manipur",
    menuCategory: "Curries & Gravies",
    name: "Fish Curry with Local Herbs",
    description: "River fish simmered in a very light broth flavored with fresh Manipuri herbs and a hint of Ngari.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.72,
    tags: ["Manipur", "Northeast Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "fish", name: "Freshwater Fish", qty: "500g", price: 200, available: true },
      { id: "ngari", name: "Ngari", qty: "2 pieces", price: 10, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "maroi", name: "Maroi Nakupi", qty: "handful", price: 15, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 80, available: false }
    ],
    steps: [
      "Boil Ngari in water until dissolved; strain.",
      "Sauté ginger and maroi herbs in oil.",
      "Add the Ngari water and salt.",
      "Gently add fish pieces and simmer for 10 minutes.",
      "Garnish with more fresh herbs before serving."
    ]
  },
  {
    id: "kangshoi-chicken-manipur",
    menuCategory: "Curries & Gravies",
    name: "Kangshoi with Chicken",
    description: "A nutritious and light mixed vegetable stew with chicken, focused on the natural sweetness of local produce.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.81,
    tags: ["Manipur", "Northeast Indian", "Non-Vegetarian", "Healthy"],
    ingredients: [
      { id: "chicken", name: "Chicken bits", qty: "300g", price: 120, available: true },
      { id: "seasonal_veg", name: "Pumpkin, Cabbage, Beans", qty: "2 cups", price: 30, available: true },
      { id: "ngari", name: "Ngari", qty: "2 pieces", price: 10, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tbsp", price: 10, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 65, available: false }
    ],
    steps: [
      "Bring 4 cups of water to a boil with Ngari and ginger.",
      "Add chicken bits and cook for 10 minutes.",
      "Add chopped vegetables and salt.",
      "Simmer until vegetables are soft and broth is flavorful.",
      "The stew should be clear and highly nutritious."
    ]
  },
  {
    id: "egg-curry-manipur",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry Manipuri Style",
    description: "Boiled eggs in a light gravy flavored with Ngari and local chilies, a common side for lunch.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.74,
    tags: ["Manipur", "Northeast Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "ngari", name: "Ngari", qty: "1 piece", price: 5, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 60, available: false }
    ],
    steps: [
      "Sauté onion and ginger in oil.",
      "Add Ngari and mash into the masala.",
      "Add salt, turmeric, and 1 cup of water; bring to a boil.",
      "Add halved boiled eggs and simmer for 5 minutes.",
      "Serve as a light accompaniment to rice."
    ]
  },
  {
    id: "pork-curry-manipur",
    menuCategory: "Curries & Gravies",
    name: "Pork Curry Manipuri",
    description: "A spicy and savory pork preparation from Manipur featuring local mountain chilies and bamboo shoot.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.77,
    tags: ["Manipur", "Northeast Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "pork", name: "Pork", qty: "500g", price: 180, available: true },
      { id: "onion", name: "Onion", qty: "2", price: 10, available: true },
      { id: "green_chili", name: "Birds Eye Chilies", qty: "6", price: 10, available: true },
      { id: "bamboo_shoot", name: "Bamboo Shoot", qty: "1/4 cup", price: 30, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 70, available: false }
    ],
    steps: [
      "Sauté onions in mustard oil until brown.",
      "Add pork pieces and sear on high heat until it releases fat.",
      "Add salt, turmeric, and minced green chilies.",
      "Stir in bamboo shoots and simmer with minimal water.",
      "The result should be an oil-rich, spicy curry."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "kangshoi-manipur",
    menuCategory: "Curries & Gravies",
    name: "Kangshoi",
    description: "The healthy staple of every Manipuri home—a boiled mixed vegetable stew seasoned with ginger and salt.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.90,
    tags: ["Manipur", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "seasonal_veg", name: "Potato, Pumpkin, Beans, Cabbage", qty: "3 cups", price: 30, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "ngari_veg", name: "Ngari (or Salt fallback)", qty: "2 pieces", price: 10, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 20, available: false }
    ],
    steps: [
      "Bring water to a boil in a pot with ginger and salt.",
      "Add chopped vegetables in order of cooking time.",
      "Boil on medium heat until all vegetables are soft.",
      "The result is a light, clean broth that is extremely healthy.",
      "Serve as a main accompaniment to rice."
    ]
  },
  {
    id: "singju-manipur",
    menuCategory: "Curries & Gravies",
    name: "Singju",
    description: "A zesty and spicy Manipuri salad made with finely shredded vegetables, herbs, and roasted chili powder.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.88,
    tags: ["Manipur", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "cabbage", name: "Shredded Cabbage", qty: "2 cups", price: 15, available: true },
      { id: "lotus_stem", name: "Lotus Stem (finely sliced)", qty: "1/2 cup", price: 20, available: true },
      { id: "chili_powder", name: "Roasted Red Chili Powder", qty: "1 tbsp", price: 5, available: true },
      { id: "perilla_seeds", name: "Thoiding (Perilla Seeds)", qty: "1 tbsp", price: 15, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 25, available: false }
    ],
    steps: [
      "Shred cabbage and other vegetables very finely.",
      "Roast perilla seeds and grind into a coarse powder.",
      "In a large bowl, mix vegetables, chili powder, perilla powder, and salt.",
      "Toss thoroughly by hand to release the juices.",
      "Garnish with fresh local herbs and serve immediately."
    ]
  },
  {
    id: "chak-hao-kheer-manipur",
    menuCategory: "Desserts & Sweets",
    name: "Chak-hao Kheer",
    description: "A gorgeous purple-colored dessert made from black rice, milk, and sugar, a hallmark of Manipuri celebrations.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.94,
    tags: ["Manipur", "Northeast Indian", "Vegetarian", "Dessert"],
    ingredients: [
      { id: "black_rice", name: "Manipuri Black Rice", qty: "1 cup", price: 50, available: true },
      { id: "milk", name: "Full Cream Milk", qty: "1L", price: 40, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 cup", price: 10, available: true },
      { id: "cardamom", name: "Cardamom Powder", qty: "pinch", price: 10, available: true },
      { id: "cashews", name: "Cashews (chopped)", qty: "2 tbsp", price: 35, available: false }
    ],
    steps: [
      "Wash and soak the black rice for at least 4 hours.",
      "Pressure cook the rice with a little water until soft.",
      "Add milk to the rice and simmer on low heat until it thickens.",
      "Add sugar and cardamom powder; stir well.",
      "Garnish with chopped nuts and serve warm or chilled."
    ]
  },
  {
    id: "bamboo-shoot-curry-manipur-veg",
    menuCategory: "Curries & Gravies",
    name: "Bamboo Shoot Curry Manipuri",
    description: "Tangy fermented bamboo shoots cooked with local mountain greens and mountain chilies.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.76,
    tags: ["Manipur", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "bamboo_shoot", name: "Bamboo Shoot (fermented)", qty: "1 cup", price: 30, available: true },
      { id: "seasonal_greens", name: "Seasonal Mountain Greens", qty: "1 bunch", price: 15, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "chili", name: "Green Chilies", qty: "2", price: 25, available: false }
    ],
    steps: [
      "Wash bamboo shoot and soak for 5 minutes.",
      "Bring water to a boil with ginger and green chilies.",
      "Add bamboo shoot and salt; cook for 10 minutes.",
      "Add finely chopped greens and simmer until tender.",
      "The result is a tangy and earthy mountain stew."
    ]
  },
  {
    id: "yongchak-eromba-veg",
    menuCategory: "Curries & Gravies",
    name: "Yongchak Eromba",
    description: "A specialty dish made with mashed stink beans (Yongchak) and seasonal vegetables with fermented soybean.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.81,
    tags: ["Manipur", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "stink_beans", name: "Yongchak (Stink Beans)", qty: "10 pods", price: 40, available: true },
      { id: "hawaijar", name: "Hawaijar (Fermented Soybean)", qty: "2 tbsp", price: 15, available: true },
      { id: "potato", name: "Potato (boiled)", qty: "1 medium", price: 5, available: true },
      { id: "red_chili", name: "Roasted Red Chilies", qty: "4", price: 5, available: true },
      { id: "oil", name: "Mustard Oil", qty: "1 tsp", price: 10, available: false }
    ],
    steps: [
      "Scrape the outer skin of Yongchak pods and cut into pieces; boil until soft.",
      "Mash roasted red chilies with salt and Hawaijar paste.",
      "Add boiled Yongchak and potato; mash everything together.",
      "Add a drizzle of raw mustard oil for pungency.",
      "Serve as a spicy side dish."
    ]
  },
  {
    id: "hawaijar-curry-veg",
    menuCategory: "Curries & Gravies",
    name: "Hawaijar Curry",
    description: "A pungent and high-protein curry made from fermented soybean paste and local mountain spices.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.74,
    tags: ["Manipur", "Northeast Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "hawaijar", name: "Hawaijar Paste", qty: "3 tbsp", price: 30, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 10, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 25, available: false }
    ],
    steps: [
      "Sauté onion and ginger in oil until fragrant.",
      "Add Hawaijar paste and sauté for 2 minutes to develop aroma.",
      "Add green chilies and salt.",
      "Add a cup of water and simmer until it forms a thick, pungent base.",
      "Serve with steamed rice."
    ]
  },
  {
    id: "local-greens-kangshoi-veg",
    menuCategory: "Curries & Gravies",
    name: "Local Greens Kangshoi",
    description: "Simple and nutritious boiled seasonal leafy greens seasoned with ginger and salt.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.85,
    tags: ["Manipur", "Northeast Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mixed_greens", name: "Mixed Mountain Greens", qty: "2 bunches", price: 20, available: true },
      { id: "ginger", name: "Ginger (crushed)", qty: "1 tbsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 15, available: false }
    ],
    steps: [
      "Wash and chop the greens roughly.",
      "Bring 3 cups of water to a boil with ginger and chilies.",
      "Add the greens and salt.",
      "Boil on high heat for 5 minutes until tender; serve with rice."
    ]
  },
  {
    id: "dal-manipur-style-veg",
    menuCategory: "Curries & Gravies",
    name: "Dal Manipuri Style",
    description: "Simple and comforting lentil curry tempered with cumin and local Manipuri herbs.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.70,
    tags: ["Manipur", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "yellow_dal", name: "Moong or Toor Dal", qty: "1 cup", price: 25, available: true },
      { id: "ginger", name: "Minced Ginger", qty: "1 tsp", price: 10, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Boil dal with ginger and turmeric until soft.",
      "Whisk for a smooth consistency.",
      "Temper oil with mustard seeds and cumin.",
      "Mix into the dal and serve hot."
    ]
  },
  {
    id: "pumpkin-curry-manipur-veg",
    menuCategory: "Curries & Gravies",
    name: "Pumpkin Curry Manipuri",
    description: "Simple mountain-style pumpkin curry cooked with minimal oil and mountain spices.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.65,
    tags: ["Manipur", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "pumpkin", name: "Yellow Pumpkin", qty: "500g", price: 25, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "1 tbsp", price: 30, available: false }
    ],
    steps: [
      "Peel and cube pumpkin.",
      "Sauté ginger and chili in oil.",
      "Add pumpkin and salt.",
      "Simmer with a little water until soft."
    ]
  },
  {
    id: "kanghou-veg",
    menuCategory: "Dry & Stir-Fried",
    name: "Kanghou",
    description: "A dry vegetable stir-fry with local greens and peas, a favorite side dish in Meitei meals.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.72,
    tags: ["Manipur", "Northeast Indian", "Vegetarian"],
    ingredients: [
      { id: "mixed_veg", name: "Peas, Beans, Greens", qty: "2 cups", price: 30, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 10, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Sauté onion in oil until translucent.",
      "Add vegetables and salt.",
      "Stir-fry on high heat until dry and slightly browned."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "chak-hao-poori-snack",
    menuCategory: "Breads",
    name: "Chak-hao Poori",
    description: "Fluffy deep-fried bread made from a mixture of wheat flour and ground black rice, offering a unique color and nutty flavor.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.85,
    tags: ["Manipur", "Northeast Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "black_rice_flour", name: "Black Rice Flour", qty: "1 cup", price: 40, available: true },
      { id: "wheat_flour", name: "Wheat Flour", qty: "1 cup", price: 10, available: true },
      { id: "oil_fry", name: "Oil for deep fry", qty: "2 cups", price: 15, available: false }
    ],
    steps: [
      "Mix black rice flour and wheat flour with a little oil and salt.",
      "Knead into a firm dough with warm water.",
      "Divide into small balls and roll into flat circles.",
      "Deep fry in hot oil until they puff up.",
      "Serve hot with a vegetable curry or chutney."
    ]
  },
  {
    id: "hawaijar-bites-snack",
    menuCategory: "Snacks & Street Food",
    name: "Hawaijar Bites",
    description: "Crispy fried snacks made from fermented soybean paste and rice flour.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.78,
    tags: ["Manipur", "Northeast Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "hawaijar_paste", name: "Hawaijar Paste", qty: "1/2 cup", price: 20, available: true },
      { id: "rice_flour", name: "Rice Flour", qty: "1/2 cup", price: 10, available: true },
      { id: "oil", name: "Oil for frying", qty: "1 cup", price: 25, available: false }
    ],
    steps: [
      "Mix Hawaijar paste with rice flour and salt.",
      "Form small patties.",
      "Deep fry until crispy."
    ]
  },
  {
    id: "kabok-snack",
    menuCategory: "Snacks & Street Food",
    name: "Kabok",
    description: "Traditional sweet puffed rice snack bound together with jaggery syrup.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.81,
    tags: ["Manipur", "Northeast Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "puffed_rice", name: "Puffed Rice", qty: "3 cups", price: 20, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1 cup", price: 20, available: true },
      { id: "water", name: "Water", qty: "1/4 cup", price: 15, available: false }
    ],
    steps: [
      "Melt jaggery with water and boil until it reaches a sticky consistency.",
      "Mix puffed rice into the syrup.",
      "Shape into rounds while warm."
    ]
  },
  {
    id: "singju-bites-snack",
    menuCategory: "Snacks & Street Food",
    name: "Singju Bites",
    description: "Small portions of spicy shredded vegetable salad served on crispy rice crackers.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.74,
    tags: ["Manipur", "Northeast Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "singju_base", name: "Singju Mix", qty: "1 cup", price: 30, available: true },
      { id: "rice_crackers", name: "Rice Crackers", qty: "10", price: 15, available: true },
      { id: "herbs", name: "Local Herbs", qty: "handful", price: 10, available: false }
    ],
    steps: [
      "Prepare Singju salad mix.",
      "Spoon onto rice crackers.",
      "Garnish with herbs and serve."
    ]
  },
  {
    id: "fish-cake-manipur-snack",
    menuCategory: "Snacks & Street Food",
    name: "Fish Cake Manipuri Style",
    description: "Steamed spiced fish cakes made with river fish and fermented fish (ngari) for a deep flavor.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 210,
    popularity: 0.82,
    tags: ["Manipur", "Northeast Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "fish_mince", name: "Minced River Fish", qty: "400g", price: 150, available: true },
      { id: "ngari", name: "Ngari", qty: "2 pieces", price: 10, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 50, available: false }
    ],
    steps: [
      "Mix fish mince with ngari paste and salt.",
      "Shape into small cakes.",
      "Steam for 15 minutes."
    ]
  }
];