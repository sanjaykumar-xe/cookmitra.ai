import { Recipe } from './types';

export const keralaRecipes: Recipe[] = [
  // --- VEGETARIAN (15) ---
  {
    id: "avial",
    menuCategory: "Curries & Gravies",
    name: "Avial",
    description: "A thick mixture of 13 vegetables commonly found in the Western Ghats, seasoned with coconut oil and curry leaves.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 130,
    popularity: 0.88,
    tags: ["Kerala", "South Indian", "Vegetarian", "Healthy"],
    healthTags: ["diabetes-friendly", "heart-healthy", "weight-management", "pregnancy-friendly"],
    ingredients: [
      { id: "mixed_veg", name: "Mixed Vegetables (Yam, Carrot, Beans, Drumstick)", qty: "500g", price: 60, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1 cup", price: 20, available: true },
      { id: "curd", name: "Thick Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "coconut_oil", name: "Coconut Oil", qty: "2 tbsp", price: 20, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: false }
    ],
    steps: [
      "Cut all vegetables into 2-inch long thin batons.",
      "Cook vegetables with turmeric and salt until tender but firm.",
      "Coarsely grind coconut, cumin, and green chilies into a thick paste.",
      "Add the paste to the vegetables and simmer for 2 minutes.",
      "Turn off the heat, stir in whisked curd, and drizzle fresh coconut oil on top.",
      "Garnish with a handful of fresh curry leaves."
    ]
  },
  {
    id: "appam-veg-stew",
    menuCategory: "Breakfast & Tiffin",
    name: "Appam with Vegetable Stew",
    description: "Lacy, fermented rice pancakes with a soft center and crispy edges, served with a mild, aromatic coconut milk vegetable stew.",
    type: "Vegetarian",
    time: 30,
    servings: 2,
    difficulty: "Medium",
    cost: 180,
    popularity: 0.90,
    tags: ["Kerala", "South Indian", "Vegetarian", "Breakfast"],
    healthTags: ["digestive-friendly", "high-bp-friendly"],
    ingredients: [
      { id: "appam_batter", name: "Fermented Appam Batter", qty: "2 cups", price: 40, available: true },
      { id: "coconut_milk", name: "Fresh Coconut Milk", qty: "1 cup", price: 50, available: true },
      { id: "mixed_veg", name: "Carrot, Potato, Peas", qty: "1 cup", price: 40, available: true },
      { id: "whole_spices", name: "Cardamom, Cloves, Cinnamon", qty: "small amount", price: 20, available: true },
      { id: "shallots", name: "Shallots", qty: "5", price: 15, available: false }
    ],
    steps: [
      "For the stew, sauté whole spices and shallots in coconut oil.",
      "Add vegetables and thin coconut milk; cook until vegetables are tender.",
      "Add thick coconut milk, salt, and pepper; simmer without boiling.",
      "Heat an appam chatti (kadai), pour a ladle of batter, and swirl to form lacy edges.",
      "Cover and steam until the center is cooked through.",
      "Serve the hot appams with a generous bowl of vegetable stew."
    ]
  },
  {
    id: "puttu-kadala-curry",
    menuCategory: "Breakfast & Tiffin",
    name: "Puttu with Kadala Curry",
    description: "Steamed cylinders of ground rice and coconut served with a spicy, black chickpea curry flavored with roasted coconut.",
    type: "Vegetarian",
    time: 40,
    servings: 2,
    difficulty: "Medium",
    cost: 150,
    popularity: 0.85,
    tags: ["Kerala", "South Indian", "Vegetarian", "Spicy", "Breakfast"],
    healthTags: ["anemia-friendly", "weight-management"],
    ingredients: [
      { id: "puttu_podi", name: "Rice Flour (Puttu Podi)", qty: "2 cups", price: 30, available: true },
      { id: "black_chickpeas", name: "Black Chickpeas (Kadala)", qty: "1 cup", price: 25, available: true },
      { id: "roasted_coconut", name: "Roasted Coconut Paste", qty: "3 tbsp", price: 30, available: true },
      { id: "shallots", name: "Shallots", qty: "10", price: 20, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 15, available: false }
    ],
    steps: [
      "Soak chickpeas overnight and pressure cook until soft.",
      "Prepare a spicy gravy with sautéed shallots, ginger, and roasted coconut paste.",
      "Add the chickpeas and simmer until the gravy is thick.",
      "For puttu, moisten rice flour with salt water to a crumbly consistency.",
      "Layer rice flour and grated coconut in a puttu maker and steam for 10 minutes.",
      "Push out the cylindrical cakes and serve hot with the kadala curry."
    ]
  },
  {
    id: "olan",
    menuCategory: "Curries & Gravies",
    name: "Olan",
    description: "A very mild and elegant Kerala dish made with white ash gourd and black-eyed peas in coconut milk.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 90,
    popularity: 0.72,
    tags: ["Kerala", "South Indian", "Vegetarian", "Healthy"],
    healthTags: ["digestive-friendly", "high-bp-friendly", "heart-healthy"],
    ingredients: [
      { id: "ash_gourd", name: "Ash Gourd (Kumbalanga)", qty: "250g", price: 20, available: true },
      { id: "black_eyed_peas", name: "Vanpayar (Cowpeas)", qty: "1/4 cup", price: 15, available: true },
      { id: "coconut_milk", name: "Thick Coconut Milk", qty: "1/2 cup", price: 30, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "coconut_oil", name: "Coconut Oil", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Soak and pressure cook the black-eyed peas until soft.",
      "Cook ash gourd slices with green chilies and a little water until tender.",
      "Add the cooked peas and thick coconut milk.",
      "Simmer for a minute on very low heat (do not boil).",
      "Drizzle fresh coconut oil and add curry leaves.",
      "Let it sit for a few minutes before serving."
    ]
  },
  {
    id: "cabbage-thoran",
    menuCategory: "Dry & Stir-Fried",
    name: "Cabbage Thoran",
    description: "A dry vegetable stir-fry with finely shredded cabbage, tempered with mustard seeds and finished with a coconut-garlic crumble.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.83,
    tags: ["Kerala", "South Indian", "Vegetarian", "Healthy"],
    healthTags: ["weight-management", "diabetes-friendly"],
    ingredients: [
      { id: "cabbage", name: "Finely Shredded Cabbage", qty: "3 cups", price: 25, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "garlic", name: "Garlic", qty: "2 cloves", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/4 tsp", price: 5, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 15, available: false }
    ],
    steps: [
      "Shred cabbage finely and mix with a little salt.",
      "Coarsely crush coconut, garlic, turmeric, and green chilies.",
      "Heat oil, temper with mustard seeds, urad dal, and curry leaves.",
      "Add the cabbage and sauté on medium heat for 3-4 minutes.",
      "Add the coconut mixture, cover and cook for another 2 minutes.",
      "Stir well and serve hot with rice."
    ]
  },
  {
    id: "erissery",
    menuCategory: "Curries & Gravies",
    name: "Pumpkin & Lentil Erissery",
    description: "A classic Kerala dish made with sweet pumpkin and cowpeas in a roasted coconut base.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.78,
    tags: ["Kerala", "South Indian", "Vegetarian", "Healthy"],
    healthTags: ["diabetes-friendly", "anemia-friendly", "heart-healthy"],
    ingredients: [
      { id: "pumpkin", name: "Yellow Pumpkin", qty: "250g", price: 20, available: true },
      { id: "vanpayar", name: "Red Cowpeas", qty: "1/2 cup", price: 20, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1 cup", price: 25, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tsp", price: 25, available: false }
    ],
    steps: [
      "Pressure cook the cowpeas until soft.",
      "Cook pumpkin cubes with turmeric, chili powder, and salt.",
      "Grind half the coconut with cumin into a fine paste and add to the pumpkin.",
      "Mix in the cooked peas and mash slightly.",
      "In a small pan, brown the remaining coconut in oil until dark golden.",
      "Pour the toasted coconut over the curry and mix gently."
    ]
  },
  {
    id: "kaalan",
    menuCategory: "Curries & Gravies",
    name: "Kaalan",
    description: "A thick and tangy traditional Kerala curry made with yam, yogurt, and a lot of black pepper.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.75,
    tags: ["Kerala", "South Indian", "Vegetarian"],
    healthTags: ["digestive-friendly", "immunity-boosting"],
    ingredients: [
      { id: "yam", name: "Elephant Foot Yam (Chena)", qty: "200g", price: 30, available: true },
      { id: "curd", name: "Sour Thick Curd", qty: "1.5 cups", price: 20, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "black_pepper", name: "Crushed Black Pepper", qty: "1 tbsp", price: 10, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/2 tsp", price: 20, available: false }
    ],
    steps: [
      "Cook yam cubes with turmeric, pepper, and very little water until dry.",
      "Add whisked curd and simmer on low heat until the mixture thickens and curd releases fat.",
      "Grind coconut and cumin seeds into a very smooth paste.",
      "Stir the paste into the curd mixture and cook for 2 minutes.",
      "Temper with mustard seeds, fenugreek, and curry leaves in coconut oil.",
      "Kaalan lasts for several days due to its thick, sour consistency."
    ]
  },
  {
    id: "parippu-curry-kerala",
    menuCategory: "Curries & Gravies",
    name: "Kerala Parippu Curry",
    description: "Roasted moong dal cooked with a spiced coconut paste, a mandatory first course in a Kerala Sadya.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.82,
    tags: ["Kerala", "South Indian", "Vegetarian", "Comfort Food"],
    healthTags: ["digestive-friendly", "anemia-friendly", "weight-management"],
    ingredients: [
      { id: "moong_dal", name: "Yellow Moong Dal", qty: "1 cup", price: 25, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chili", qty: "1", price: 5, available: false }
    ],
    steps: [
      "Dry roast moong dal until fragrant; wash and pressure cook with turmeric until soft.",
      "Grind coconut, cumin, and green chili into a fine paste.",
      "Add the paste to the cooked dal and boil for 2-3 minutes.",
      "Adjust salt and consistency (should be thick).",
      "Temper with mustard seeds and curry leaves in ghee or coconut oil.",
      "Serve hot with rice and a dollop of ghee."
    ]
  },
  {
    id: "kerala-veg-stew",
    menuCategory: "Curries & Gravies",
    name: "Kerala Vegetable Stew",
    description: "A fragrant, mildly spiced coconut milk stew with mixed vegetables, a popular companion for Appam and Idiyappam.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 110,
    popularity: 0.85,
    tags: ["Kerala", "South Indian", "Vegetarian"],
    healthTags: ["digestive-friendly", "high-bp-friendly"],
    ingredients: [
      { id: "potato", name: "Potato", qty: "1 large", price: 10, available: true },
      { id: "carrot", name: "Carrot", qty: "1 medium", price: 10, available: true },
      { id: "beans", name: "Green Beans", qty: "10", price: 10, available: true },
      { id: "coconut_milk", name: "Fresh Coconut Milk", qty: "1.5 cups", price: 40, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tsp", price: 35, available: false }
    ],
    steps: [
      "Sauté whole spices (cinnamon, cloves, cardamom) in coconut oil.",
      "Add sliced onions, ginger, and green chilies; sauté without browning.",
      "Add vegetables and thin coconut milk; simmer until vegetables are cooked.",
      "Add thick coconut milk and salt; warm through without boiling.",
      "Drizzle fresh coconut oil and garnish with curry leaves.",
      "Serve with hot appams."
    ]
  },
  {
    id: "cherupayar-curry",
    menuCategory: "Curries & Gravies",
    name: "Cherupayar Curry",
    description: "Wholesome green gram curry made in a light coconut base, traditionally served with Puttu or Kanji.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.79,
    tags: ["Kerala", "South Indian", "Vegetarian", "Healthy", "Breakfast"],
    healthTags: ["weight-management", "diabetes-friendly", "heart-healthy"],
    ingredients: [
      { id: "green_gram", name: "Whole Green Gram", qty: "1 cup", price: 25, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "shallots", name: "Shallots", qty: "5", price: 10, available: true },
      { id: "garlic", name: "Garlic", qty: "2 cloves", price: 5, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 10, available: false }
    ],
    steps: [
      "Pressure cook green gram with turmeric and salt for 4-5 whistles.",
      "Grind coconut, cumin, and garlic into a slightly coarse paste.",
      "Add the paste to the cooked lentils and simmer for 5 minutes.",
      "Heat oil, temper with mustard seeds, sliced shallots, and curry leaves.",
      "Pour the tempering over the curry.",
      "Serve as a nutritious side for breakfast."
    ]
  },
  {
    id: "kappa-vevichathu",
    menuCategory: "Curries & Gravies",
    name: "Kappa Vevichathu",
    description: "Boiled tapioca chunks mashed and seasoned with a spicy coconut-shallot mixture, a staple Kerala comfort food.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.81,
    tags: ["Kerala", "South Indian", "Vegetarian", "Comfort Food"],
    healthTags: ["weight-management", "energy-boost"],
    ingredients: [
      { id: "tapioca", name: "Raw Tapioca (Kappa)", qty: "1 kg", price: 40, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1 cup", price: 20, available: true },
      { id: "shallots", name: "Shallots", qty: "8", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/2 tsp", price: 5, available: false }
    ],
    steps: [
      "Peel and chop tapioca into large chunks; boil in plenty of water until soft.",
      "Drain the water completely.",
      "Coarsely grind coconut, shallots, green chilies, and turmeric.",
      "Add the grind to the tapioca and mash everything together while hot.",
      "Temper with mustard seeds and curry leaves in coconut oil.",
      "Serve with spicy red fish curry or green chili chutney."
    ]
  },
  {
    id: "kerala-kanji",
    menuCategory: "Beverages",
    name: "Kerala Rice Kanji",
    description: "Light and soothing red rice porridge, traditionally served for dinner with simple sides like pickle and roasted papadam.",
    type: "Vegetarian",
    time: 20,
    servings: 3,
    difficulty: "Easy",
    cost: 40,
    popularity: 0.70,
    tags: ["Kerala", "South Indian", "Vegetarian", "Comfort Food"],
    healthTags: ["digestive-friendly", "weight-management", "diabetes-friendly"],
    ingredients: [
      { id: "matta_rice", name: "Kerala Matta Rice", qty: "1 cup", price: 15, available: true },
      { id: "water", name: "Water", qty: "5 cups", price: 0, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "2 tbsp", price: 10, available: true },
      { id: "pickle", name: "Mango or Lemon Pickle", qty: "as needed", price: 10, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 5, available: false }
    ],
    steps: [
      "Wash the red rice thoroughly.",
      "Pressure cook the rice with 5 cups of water for 4-5 whistles until very soft.",
      "Stir in salt and fresh grated coconut.",
      "The consistency should be like a thick soup with soft grains.",
      "Serve hot in a bowl with a side of spicy pickle and mung bean stir-fry."
    ]
  },
  {
    id: "pachadi-kerala",
    menuCategory: "Sides & Accompaniments",
    name: "Cucumber Pachadi",
    description: "A cooling yogurt-based side dish with finely chopped cucumber and a mustard-coconut base.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.76,
    tags: ["Kerala", "South Indian", "Vegetarian", "Healthy"],
    healthTags: ["digestive-friendly", "weight-management", "high-bp-friendly"],
    ingredients: [
      { id: "cucumber", name: "Cucumber (Vellarikka)", qty: "1 cup", price: 15, available: true },
      { id: "curd", name: "Thick Curd", qty: "1 cup", price: 15, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/4 cup", price: 10, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "1", price: 15, available: false }
    ],
    steps: [
      "Cook finely chopped cucumber with green chili and salt in minimal water.",
      "Grind coconut and a pinch of mustard seeds into a very smooth paste.",
      "Add the paste to the cooked cucumber and heat through (do not boil).",
      "Whisk curd and stir it into the mixture off the heat.",
      "Temper with mustard seeds, red chilies, and curry leaves in coconut oil."
    ]
  },
  {
    id: "puliyinji",
    menuCategory: "Curries & Gravies",
    name: "Puliyinji",
    description: "The essential 'ginger-tamarind-jaggery' dark relish that balances the flavors of a Kerala Sadya feast.",
    type: "Vegetarian",
    time: 20,
    servings: 6,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.80,
    tags: ["Kerala", "South Indian", "Vegetarian"],
    healthTags: ["digestive-friendly", "anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "ginger", name: "Finely Chopped Ginger", qty: "1/2 cup", price: 20, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1/2 cup", price: 10, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1/4 cup", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tsp", price: 5, available: false }
    ],
    steps: [
      "Deep fry or sauté finely chopped ginger until dark brown and crispy; set aside.",
      "Sauté green chilies and curry leaves in oil.",
      "Add tamarind juice, chili powder, turmeric, and salt; boil until it thickens slightly.",
      "Add the fried ginger and crushed jaggery.",
      "Simmer until the mixture becomes a thick, dark, syrupy relish.",
      "Store in a glass jar; it stays fresh for weeks."
    ]
  },
  {
    id: "kerala-sambar",
    menuCategory: "Curries & Gravies",
    name: "Kerala Style Sambar",
    description: "A unique sambar variant using roasted and ground coconut paste, offering a deeper, richer flavor than standard sambar.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.87,
    tags: ["Kerala", "South Indian", "Vegetarian"],
    healthTags: ["digestive-friendly", "heart-healthy", "weight-management"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1/2 cup", price: 15, available: true },
      { id: "mixed_veg", name: "Drumstick, Okra, Brinjal", qty: "2 cups", price: 30, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "2 tbsp", price: 10, available: true },
      { id: "spices", name: "Sambar Powder", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Pressure cook dal until mushy.",
      "Dry roast coconut with spices until dark golden; grind into a very smooth paste.",
      "Cook vegetables in tamarind water with salt and turmeric.",
      "Add cooked dal and the ground coconut paste to the vegetables.",
      "Simmer for 10 minutes until flavors integrate.",
      "Temper with mustard seeds and lots of curry leaves in coconut oil."
    ]
  },

  // --- NON-VEGETARIAN (15) ---
  {
    id: "kerala-fish-curry",
    menuCategory: "Curries & Gravies",
    name: "Kerala Fish Curry (Meen Curry)",
    description: "A signature coastal red curry made with tamarind (Kudampuli) and coconut milk, perfectly balancing sour and spicy notes.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 350,
    popularity: 0.90,
    tags: ["Kerala", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["heart-healthy", "anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "fish", name: "Fresh Fish (Kingfish/Seer)", qty: "500g", price: 250, available: true },
      { id: "kudampuli", name: "Malabar Tamarind", qty: "3 pieces", price: 15, available: true },
      { id: "coconut_milk", name: "Thick Coconut Milk", qty: "1 cup", price: 40, available: true },
      { id: "shallots", name: "Shallots", qty: "10", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger-Garlic Paste", qty: "1 tbsp", price: 35, available: false }
    ],
    steps: [
      "Soak Malabar tamarind in warm water.",
      "Sauté shallots, ginger, garlic, and curry leaves in coconut oil.",
      "Add red chili powder and turmeric; sauté until oil separates.",
      "Pour in tamarind water and bring to a boil.",
      "Add fish pieces and simmer for 10 minutes.",
      "Stir in coconut milk and remove from heat immediately. Let rest before serving."
    ]
  },
  {
    id: "kerala-beef-fry",
    menuCategory: "Protein Specialties",
    name: "Kerala Beef Fry (Ularthiyathu)",
    description: "The most iconic Kerala dish—beef pieces slow-cooked with roasted spices and fried with coconut slivers.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 350,
    popularity: 0.95,
    tags: ["Kerala", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "beef", name: "Beef cubes", qty: "500g", price: 280, available: true },
      { id: "coconut_pieces", name: "Coconut Slivers (Thenga Kothu)", qty: "1/4 cup", price: 20, available: true },
      { id: "shallots", name: "Shallots", qty: "1 cup", price: 20, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "spices", name: "Meat Masala Powder", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Pressure cook beef with ginger-garlic paste, salt, turmeric, and black pepper for 5-6 whistles.",
      "Heat coconut oil in a wide kadai; fry coconut slivers until golden brown.",
      "Sauté shallots and curry leaves in the same oil.",
      "Add the pre-cooked meat (drain excess stock) and spices.",
      "Slowly roast on low heat for 20-30 minutes until the meat turns dark brown and nearly dry.",
      "Garnish with more curry leaves and serve with Malabar Parotta."
    ]
  },
  {
    id: "fish-molee",
    menuCategory: "Curries & Gravies",
    name: "Fish Molee",
    description: "A mild, creamy coconut milk fish stew with its origins in Kerala's Syrian Christian community.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 3,
    difficulty: "Easy",
    cost: 400,
    popularity: 0.86,
    tags: ["Kerala", "South Indian", "Non-Vegetarian"],
    healthTags: ["heart-healthy", "digestive-friendly"],
    ingredients: [
      { id: "fish", name: "Fish steaks (Pomfret/Seer)", qty: "400g", price: 300, available: true },
      { id: "coconut_milk", name: "Fresh Coconut Milk", qty: "1.5 cups", price: 40, available: true },
      { id: "shallots", name: "Shallots", qty: "10", price: 15, available: true },
      { id: "green_chili", name: "Green Chilies (slit)", qty: "4", price: 5, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tbsp", price: 40, available: false }
    ],
    steps: [
      "Marinate fish in turmeric, pepper, and salt; shallow fry for 2 minutes (just to sear).",
      "Sauté shallots, ginger, garlic, and green chilies in coconut oil.",
      "Add thin coconut milk and simmer until shallots are soft.",
      "Carefully add the fish pieces and cook for 5 minutes.",
      "Pour in the thick coconut milk and heat through (do not boil).",
      "Garnish with tomato slices and curry leaves."
    ]
  },
  {
    id: "kerala-chicken-curry",
    menuCategory: "Curries & Gravies",
    name: "Kerala Chicken Curry",
    description: "A rich and spicy chicken curry made with roasted coconut and a blend of traditional Malabar spices.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.89,
    tags: ["Kerala", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "chicken", name: "Chicken pieces", qty: "500g", price: 160, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1 cup", price: 20, available: true },
      { id: "shallots", name: "Small Onions", qty: "1/2 cup", price: 15, available: true },
      { id: "coriander", name: "Coriander Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "8", price: 70, available: false }
    ],
    steps: [
      "Dry roast coconut with whole spices until dark brown; grind into a smooth, oily paste.",
      "Sauté onions and ginger-garlic paste in coconut oil.",
      "Add chicken and ground spices; sauté until meat is seared.",
      "Mix in the coconut paste and water; simmer until the chicken is tender and the gravy is rich.",
      "Garnish with fresh curry leaves."
    ]
  },
  {
    id: "chicken-mappas",
    menuCategory: "Curries & Gravies",
    name: "Chicken Mappas",
    description: "A mild and creamy Syrian Christian style chicken curry cooked in thick coconut milk with potatoes.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.81,
    tags: ["Kerala", "South Indian", "Non-Vegetarian"],
    healthTags: ["digestive-friendly"],
    ingredients: [
      { id: "chicken", name: "Chicken chunks", qty: "500g", price: 160, available: true },
      { id: "potato", name: "Potato cubes", qty: "1 cup", price: 10, available: true },
      { id: "coconut_milk", name: "Thick Coconut Milk", qty: "1 cup", price: 40, available: true },
      { id: "coriander", name: "Coriander Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "fennel", name: "Fennel Powder", qty: "1 tsp", price: 75, available: false }
    ],
    steps: [
      "Sauté whole spices, onions, and ginger-garlic in oil.",
      "Add chicken and potato cubes; sauté for 5 minutes.",
      "Add thin coconut milk and coriander powder; simmer until chicken is cooked.",
      "Add fennel powder and salt.",
      "Stir in thick coconut milk and heat gently; remove before it boils.",
      "Serve hot with Appam or Bread."
    ]
  },
  {
    id: "meen-pollichathu",
    menuCategory: "Protein Specialties",
    name: "Meen Pollichathu",
    description: "Fish coated in a fiery masala, wrapped in a banana leaf, and pan-roasted for a smoky, tender finish.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 3,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.92,
    tags: ["Kerala", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "heart-healthy", "immunity-boosting"],
    ingredients: [
      { id: "fish", name: "Pearl Spot or Pomfret", qty: "3 whole", price: 300, available: true },
      { id: "banana_leaf", name: "Banana Leaves", qty: "3", price: 10, available: true },
      { id: "masala", name: "Pollichathu Spice Paste", qty: "1/2 cup", price: 20, available: true },
      { id: "shallots", name: "Shallots", qty: "15", price: 15, available: true },
      { id: "coconut_oil", name: "Coconut Oil", qty: "2 tbsp", price: 55, available: false }
    ],
    steps: [
      "Prepare a thick masala by sautéing shallots, ginger, garlic, and spices in coconut oil.",
      "Lightly fry the marinated fish; coat both sides with the prepared masala.",
      "Wilt banana leaves over a flame to make them pliable.",
      "Wrap each fish in a leaf and tie with a string.",
      "Roast the parcels on a heavy tawa on both sides until the leaves are charred and fragrant.",
      "Serve the fish inside the leaf."
    ]
  },
  {
    id: "karimeen-fry",
    menuCategory: "Protein Specialties",
    name: "Karimeen Fry",
    description: "Deep-fried Pearl Spot fish, marinated in a classic Kerala spice blend, a backwater specialty.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 2,
    difficulty: "Medium",
    cost: 450,
    popularity: 0.88,
    tags: ["Kerala", "South Indian", "Non-Vegetarian"],
    healthTags: ["anemia-friendly", "heart-healthy"],
    ingredients: [
      { id: "karimeen", name: "Pearl Spot Fish (Karimeen)", qty: "2 whole", price: 350, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tbsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1 tsp", price: 5, available: true },
      { id: "pepper", name: "Black Pepper Powder", qty: "1 tsp", price: 5, available: true },
      { id: "coconut_oil", name: "Frying Oil", qty: "1/2 cup", price: 85, available: false }
    ],
    steps: [
      "Make deep gashes on the cleaned fish.",
      "Marinate with a thick paste of chili powder, turmeric, pepper, salt, and lemon juice.",
      "Let it sit for at least 30 minutes.",
      "Heat coconut oil in a pan.",
      "Deep fry or shallow fry until the exterior is dark and very crispy.",
      "Serve with onion rings and lemon wedges."
    ]
  },
  {
    id: "prawn-mango-curry",
    menuCategory: "Curries & Gravies",
    name: "Prawn Mango Curry",
    description: "Tangy and creamy coconut prawn curry made with raw mangoes, a coastal Kerala classic.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 420,
    popularity: 0.84,
    tags: ["Kerala", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "heart-healthy", "immunity-boosting"],
    ingredients: [
      { id: "prawns", name: "Prawns (Cleaned)", qty: "400g", price: 300, available: true },
      { id: "raw_mango", name: "Raw Mango Slices", qty: "1/2 cup", price: 15, available: true },
      { id: "coconut_milk", name: "Fresh Coconut Milk", qty: "1.5 cups", price: 40, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "shallots", name: "Shallots", qty: "10", price: 60, available: false }
    ],
    steps: [
      "Simmer raw mango slices and green chilies in thin coconut milk.",
      "Once mangoes are half-cooked, add the prawns, salt, and turmeric.",
      "Cook for 5 minutes until prawns are tender.",
      "Add thick coconut milk and warm through.",
      "Temper with mustard seeds and curry leaves in coconut oil.",
      "The sourness from the mango provides the perfect balance to the sweet coconut milk."
    ]
  },
  {
    id: "egg-roast-kerala",
    menuCategory: "Protein Specialties",
    name: "Kerala Egg Roast",
    description: "Hard-boiled eggs cooked in a thick, spicy onion-tomato gravy with a heavy dose of Malabar spices.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 100,
    popularity: 0.89,
    tags: ["Kerala", "South Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "eggs", name: "Hard Boiled Eggs", qty: "4", price: 30, available: true },
      { id: "onion", name: "Onions (Thinly sliced)", qty: "3 large", price: 15, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 5, available: true },
      { id: "fennel", name: "Fennel Powder", qty: "1/2 tsp", price: 40, available: false }
    ],
    steps: [
      "Boil and peel eggs; make small slits on them.",
      "Sauté onions until they are deep brown and caramelized.",
      "Add ginger-garlic paste and spices; sauté until fragrant.",
      "Add tomatoes and cook until soft; stir in a splash of water to form a thick masala.",
      "Add the boiled eggs and coat them thoroughly with the gravy.",
      "Serve hot with Appam or Puttu."
    ]
  },
  {
    id: "duck-roast-kerala",
    menuCategory: "Protein Specialties",
    name: "Kerala Duck Roast",
    description: "A rich and festive duck curry from the Kuttanad region, slow-cooked with potatoes and dark roasted spices.",
    type: "Non-Vegetarian",
    time: 90,
    servings: 4,
    difficulty: "Hard",
    cost: 500,
    popularity: 0.78,
    tags: ["Kerala", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "duck", name: "Duck pieces", qty: "1 kg", price: 400, available: true },
      { id: "potato", name: "Potato cubes", qty: "1 cup", price: 10, available: true },
      { id: "shallots", name: "Shallots", qty: "1/2 cup", price: 20, available: true },
      { id: "vinegar", name: "Vinegar", qty: "1 tbsp", price: 5, available: true },
      { id: "masala", name: "Meat Masala Mix", qty: "3 tbsp", price: 65, available: false }
    ],
    steps: [
      "Marinate duck in vinegar, salt, and ginger-garlic for 1 hour.",
      "Pressure cook the duck with minimal water until 80% done.",
      "In a heavy pot, sauté shallots, curry leaves, and potatoes in coconut oil.",
      "Add the duck and spices; slow roast until the meat is tender and the gravy is dark and thick.",
      "Add a splash of thick coconut milk to finish if a richer texture is desired.",
      "Serve with hot bread or vellayappam."
    ]
  },

  // --- SNACKS (10) ---
  {
    id: "unniyappam",
    menuCategory: "Desserts & Sweets",
    name: "Unniyappam",
    description: "Sweet, spongy, deep-fried dumplings made from rice flour, jaggery, and banana, a beloved Kerala festival snack.",
    type: "Vegetarian",
    time: 30,
    servings: 6,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.88,
    tags: ["Kerala", "South Indian", "Dessert", "Snacks"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 30, available: true },
      { id: "jaggery", name: "Jaggery (melted)", qty: "1 cup", price: 20, available: true },
      { id: "banana", name: "Mashed Banana", qty: "1", price: 5, available: true },
      { id: "coconut_bits", name: "Fried Coconut Bits", qty: "2 tbsp", price: 15, available: true },
      { id: "oil", name: "Frying Oil", qty: "2 cups", price: 20, available: false }
    ],
    steps: [
      "Make a thick batter with rice flour, jaggery syrup, and mashed banana.",
      "Add fried coconut bits and cardamom powder; let the batter rest for 4 hours.",
      "Heat oil in an unniyappam mold (karayal).",
      "Fill each hole halfway and fry until the balls are dark brown and crispy.",
      "Drain and serve hot."
    ]
  },
  {
    id: "parippu-vada-kerala",
    menuCategory: "Breakfast & Tiffin",
    name: "Kerala Parippu Vada",
    description: "Crispy, crunchy chana dal fritters with onions and curry leaves, a popular tea-time snack across Kerala.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.85,
    tags: ["Kerala", "South Indian", "Vegetarian", "Snacks"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "chana_dal", name: "Chana Dal", qty: "1 cup", price: 20, available: true },
      { id: "onion", name: "Finely Chopped Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 45, available: false }
    ],
    steps: [
      "Soak chana dal for 2 hours; grind coarsely without adding water.",
      "Mix in chopped onions, ginger, green chilies, curry leaves, and salt.",
      "Form small flat discs using your palms.",
      "Deep fry in hot oil on medium heat until dark golden and very crispy.",
      "Serve with hot tea."
    ]
  },
  {
    id: "banana-chips-kerala",
    menuCategory: "Snacks & Street Food",
    name: "Kerala Banana Chips",
    description: "Thinly sliced raw bananas deep-fried in fresh coconut oil, the signature snack of Kerala.",
    type: "Vegetarian",
    time: 20,
    servings: 6,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.94,
    tags: ["Kerala", "South Indian", "Vegetarian", "Snacks"],
    healthTags: [],
    ingredients: [
      { id: "raw_banana", name: "Raw Banana (Nendran)", qty: "4", price: 40, available: true },
      { id: "coconut_oil", name: "Coconut Oil", qty: "2 cups", price: 50, available: true },
      { id: "turmeric", name: "Turmeric water", qty: "small amount", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 5, available: false }
    ],
    steps: [
      "Peel the bananas and soak in turmeric water for 15 minutes.",
      "Slice the bananas into very thin rounds using a mandoline slicer directly into hot coconut oil.",
      "Fry on medium-high heat until the chips stop sizzling and become firm.",
      "Add a splash of salt-turmeric water into the oil for even seasoning.",
      "Drain well and store in an airtight container."
    ]
  },
  {
    id: "ada-pradhaman",
    menuCategory: "Snacks & Street Food",
    name: "Ada Pradhaman",
    description: "The king of Kerala payasams, made with rice ada flakes, molten jaggery, and creamy coconut milk.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 150,
    popularity: 0.91,
    tags: ["Kerala", "South Indian", "Dessert", "Snacks"],
    healthTags: ["anemia-friendly", "pregnancy-friendly"],
    ingredients: [
      { id: "rice_ada", name: "Rice Ada", qty: "100g", price: 30, available: true },
      { id: "jaggery", name: "Jaggery (melted)", qty: "1.5 cups", price: 30, available: true },
      { id: "coconut_milk", name: "Coconut Milk (3 extracts)", qty: "2 cups", price: 60, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 20, available: true },
      { id: "cashews", name: "Cashews and Raisins", qty: "2 tbsp", price: 10, available: false }
    ],
    steps: [
      "Boil rice ada until soft, then wash in cold water.",
      "Fry the ada in ghee for 5 minutes.",
      "Add jaggery syrup and cook until the ada absorbs the sweetness.",
      "Stir in the thin and medium coconut milk extracts; boil for 10 minutes.",
      "Add the thickest extract, cardamom powder, and dry ginger powder; warm through.",
      "Garnish with ghee-fried nuts and coconut pieces."
    ]
  },
  {
    id: "pazham-pori",
    menuCategory: "Snacks & Street Food",
    name: "Pazham Pori",
    description: "The classic Kerala evening snack—ripe plantain slices dipped in a sweet batter and deep-fried.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.93,
    tags: ["Kerala", "South Indian", "Snacks"],
    healthTags: [],
    ingredients: [
      { id: "plantain", name: "Ripe Nendran Plantain", qty: "2", price: 20, available: true },
      { id: "all_purpose_flour", name: "Maida", qty: "1 cup", price: 15, available: true },
      { id: "sugar", name: "Sugar", qty: "2 tbsp", price: 10, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "pinch", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 10, available: false }
    ],
    steps: [
      "Peel plantains and slice into long thin strips.",
      "Make a smooth batter with flour, sugar, turmeric, and water (should be coating consistency).",
      "Heat oil in a kadai.",
      "Dip each plantain slice in the batter and deep fry until golden brown.",
      "Drain and serve hot with tea."
    ]
  },
  {
    "id": "kl-salad-nariyal",
    "menuCategory": "Salads",
    "name": "Nariyal Salad",
    "description": "A light Kerala-style salad of fresh grated coconut, cucumber, and shallots, tempered with curry leaves and mustard seeds.",
    "type": "Vegetarian",
    "time": 10,
    "servings": 4,
    "difficulty": "Easy",
    "cost": 45,
    "popularity": 0.88,
    "tags": [
      "Kerala",
      "South Indian",
      "Vegetarian",
      "Salads",
      "Healthy",
      "Coconut"
    ],
    "healthTags": [
      "healthy-fats",
      "hydration",
      "gluten-free"
    ],
    "ingredients": [
      {
        "id": "coconut",
        "name": "Grated Fresh Coconut",
        "qty": "1 cup",
        "price": 20,
        "available": true
      },
      {
        "id": "cucumber",
        "name": "Diced Cucumber",
        "qty": "1/2 cup",
        "price": 10,
        "available": true
      },
      {
        "id": "shallots",
        "name": "Thinly Sliced Shallots",
        "qty": "1/4 cup",
        "price": 8,
        "available": true
      },
      {
        "id": "green_chili",
        "name": "Minced Green Chili",
        "qty": "1",
        "price": 2,
        "available": true
      },
      {
        "id": "mustard_seeds",
        "name": "Mustard Seeds",
        "qty": "1/2 tsp",
        "price": 2,
        "available": true
      },
      {
        "id": "curry_leaves",
        "name": "Curry Leaves",
        "qty": "6-8",
        "price": 2,
        "available": true
      },
      {
        "id": "coconut_oil",
        "name": "Coconut Oil",
        "qty": "1 tsp",
        "price": 5,
        "available": true
      },
      {
        "id": "lime_juice",
        "name": "Lime Juice",
        "qty": "1 tsp",
        "price": 3,
        "available": true
      }
    ],
    "steps": [
      "Combine coconut, cucumber, and shallots in a bowl.",
      "Heat coconut oil, temper mustard seeds and curry leaves.",
      "Pour over the salad.",
      "Add green chili, lime juice, and salt. Toss and serve."
    ]
  },

  {
    "id": "kl-soup-ash-gourd",
    "menuCategory": "Soups",
    "name": "Ash Gourd Soup",
    "description": "A gentle, coconut-milk based Kerala soup made from ash gourd, lightly spiced and finished with curry leaves.",
    "type": "Vegetarian",
    "time": 20,
    "servings": 4,
    "difficulty": "Easy",
    "cost": 50,
    "popularity": 0.89,
    "tags": [
      "Kerala",
      "South Indian",
      "Vegetarian",
      "Soups",
      "Healthy",
      "Cooling"
    ],
    "healthTags": [
      "cooling-digestive",
      "low-calorie",
      "weight-management"
    ],
    "ingredients": [
      {
        "id": "ash_gourd",
        "name": "Peeled & Cubed Ash Gourd",
        "qty": "2 cups",
        "price": 20,
        "available": true
      },
      {
        "id": "coconut_milk",
        "name": "Coconut Milk",
        "qty": "1/2 cup",
        "price": 20,
        "available": true
      },
      {
        "id": "green_chili",
        "name": "Slit Green Chili",
        "qty": "1",
        "price": 2,
        "available": true
      },
      {
        "id": "cumin_seeds",
        "name": "Cumin Seeds",
        "qty": "1/2 tsp",
        "price": 2,
        "available": true
      },
      {
        "id": "curry_leaves",
        "name": "Curry Leaves",
        "qty": "6-8",
        "price": 2,
        "available": true
      },
      {
        "id": "coconut_oil",
        "name": "Coconut Oil",
        "qty": "1 tsp",
        "price": 5,
        "available": true
      }
    ],
    "steps": [
      "Boil ash gourd in water with green chili and salt until soft (10-12 minutes).",
      "Blend lightly for a chunky-smooth texture, or leave as is.",
      "Stir in coconut milk, simmer 3-4 minutes without boiling hard.",
      "Heat coconut oil, temper cumin seeds and curry leaves, pour over soup. Serve hot."
    ]
  }
];
