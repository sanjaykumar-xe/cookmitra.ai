import { Recipe } from './types';

export const tamilNaduRecipes: Recipe[] = [
  // --- VEGETARIAN (20) ---
  {
    id: "vatha-kuzhambu",
    name: "Vatha Kuzhambu",
    description: "A tangy and intensely flavored tamarind-based curry featuring sun-dried berries (manathakkali or sundakkai).",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 110,
    popularity: 0.85,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Spicy"],
    healthTags: ["digestive-friendly", "immunity-boosting"],
    ingredients: [
      { id: "manathakkali", name: "Sun-dried Manathakkali", qty: "2 tbsp", price: 20, available: true },
      { id: "tamarind", name: "Tamarind", qty: "lemon sized", price: 10, available: true },
      { id: "small_onion", name: "Small Onions (Shallots)", qty: "10", price: 15, available: true },
      { id: "sambarpowder", name: "Sambar Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "gingelly_oil", name: "Sesame Oil", qty: "3 tbsp", price: 50, available: false }
    ],
    steps: [
      "Soak tamarind in warm water and extract a thick juice.",
      "Heat sesame oil and fry the sun-dried berries until crisp, then set aside.",
      "In the same oil, add mustard seeds, fenugreek, and shallots; sauté until translucent.",
      "Pour in tamarind juice, add sambar powder, turmeric, and salt.",
      "Simmer until the gravy thickens and oil separates from the sides.",
      "Add back the fried berries and serve hot with steamed rice and a dollop of ghee."
    ]
  },
  {
    id: "veg-poriyal",
    name: "Mixed Vegetable Poriyal",
    description: "A simple, healthy Tamil-style stir-fry of mixed vegetables finished with fresh grated coconut.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.78,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Healthy"],
    healthTags: ["weight-management", "diabetes-friendly", "heart-healthy"],
    ingredients: [
      { id: "beans_carrot", name: "Beans and Carrots", qty: "250g", price: 30, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "3 tbsp", price: 15, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "1 sprig", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: false }
    ],
    steps: [
      "Steam or parboil the finely chopped beans and carrots with a pinch of salt.",
      "Heat oil in a pan and temper with mustard seeds, urad dal, and green chilies.",
      "Add curry leaves and then the parboiled vegetables.",
      "Sauté for 2-3 minutes on medium heat.",
      "Turn off the heat and garnish generously with fresh grated coconut.",
      "Serve as a side dish for sambar or rasam rice."
    ]
  },
  {
    id: "adai-dosai",
    name: "Adai",
    description: "A dense and nutritious savory pancake made from a variety of lentils and rice.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.82,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Breakfast"],
    healthTags: ["weight-management", "anemia-friendly", "pregnancy-friendly"],
    ingredients: [
      { id: "rice", name: "Idli Rice", qty: "1 cup", price: 20, available: true },
      { id: "mixed_dal", name: "Mixed Dal (Toor, Chana, Urad)", qty: "1 cup", price: 40, available: true },
      { id: "red_chili", name: "Dry Red Chilies", qty: "4", price: 10, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 5, available: true },
      { id: "drumstick_leaves", name: "Moringa Leaves", qty: "1/4 cup", price: 15, available: false }
    ],
    steps: [
      "Soak rice and lentils separately for 3-4 hours.",
      "Grind into a coarse batter with red chilies, ginger, and salt, adding minimal water.",
      "Mix in moringa leaves or finely chopped onions for extra flavor.",
      "Heat a tawa and spread a thick ladle of batter into a circle.",
      "Make a hole in the center, add oil, and cook until both sides are golden brown and crisp.",
      "Serve hot with avial or jaggery."
    ]
  },
  {
    id: "paruppu-sadam",
    name: "Paruppu Sadam",
    description: "The ultimate comfort food—simple mashed lentils and rice seasoned with cumin and ghee.",
    type: "Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.88,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Comfort Food"],
    healthTags: ["digestive-friendly", "anemia-friendly"],
    ingredients: [
      { id: "rice", name: "Raw Rice", qty: "1 cup", price: 15, available: true },
      { id: "toor_dal", name: "Toor Dal", qty: "1/2 cup", price: 20, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 25, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "garlic", name: "Garlic", qty: "4 cloves", price: 5, available: false }
    ],
    steps: [
      "Wash rice and toor dal together.",
      "Pressure cook with 4 cups of water, turmeric, and garlic for 4-5 whistles until very soft.",
      "Once cooked, mash the mixture gently while it's still hot.",
      "Heat ghee in a small pan, temper with cumin seeds and curry leaves.",
      "Pour the tempering over the rice and mix well.",
      "Serve warm with a side of potato fry or papad."
    ]
  },
  {
    id: "semiya-payasam",
    name: "Semiya Payasam",
    description: "A popular festive milk pudding made with roasted vermicelli, cardamom, and dry fruits.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.90,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Dessert"],
    healthTags: ["pregnancy-friendly"],
    ingredients: [
      { id: "semiya", name: "Vermicelli", qty: "1/2 cup", price: 20, available: true },
      { id: "milk", name: "Full Cream Milk", qty: "500ml", price: 40, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 cup", price: 15, available: true },
      { id: "nuts", name: "Cashews and Raisins", qty: "2 tbsp", price: 30, available: false },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 5, available: true }
    ],
    steps: [
      "Roast vermicelli in a little ghee until it turns golden brown.",
      "Boil milk in a heavy-bottomed pan.",
      "Add the roasted vermicelli and cook on medium heat until soft.",
      "Stir in sugar and cardamom powder; simmer for 5 minutes.",
      "In a separate small pan, fry cashews and raisins in ghee until golden and add to the pudding.",
      "Serve hot or chilled."
    ]
  },
  {
    id: "idiyappam",
    name: "Idiyappam",
    description: "Traditional steamed rice noodles, a light and healthy breakfast staple often served with coconut milk.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.81,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Breakfast"],
    healthTags: ["digestive-friendly", "high-bp-friendly"],
    ingredients: [
      { id: "rice_flour", name: "Idiyappam Rice Flour", qty: "2 cups", price: 30, available: true },
      { id: "coconut_milk", name: "Coconut Milk", qty: "1 cup", price: 40, available: false },
      { id: "salt", name: "Salt", qty: "pinch", price: 5, available: true },
      { id: "water", name: "Boiling Water", qty: "as needed", price: 5, available: true }
    ],
    steps: [
      "Add salt to rice flour and gradually mix in boiling water to form a non-sticky dough.",
      "Grease the idiyappam press and fill with dough.",
      "Press the strings onto a greased idli steamer plate in circular motions.",
      "Steam for 8-10 minutes until the noodles are cooked.",
      "Allow to cool slightly before removing from the plate.",
      "Serve with sweetened coconut milk or veg kurma."
    ]
  },
  {
    id: "kothamalli-thogayal",
    name: "Kothamalli Thogayal",
    description: "A thick, spicy coriander and lentil chutney that is perfect when mixed with hot rice and ghee.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 40,
    popularity: 0.72,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian"],
    healthTags: ["digestive-friendly", "immunity-boosting"],
    ingredients: [
      { id: "coriander", name: "Coriander Leaves", qty: "1 bunch", price: 15, available: true },
      { id: "urad_dal", name: "Urad Dal", qty: "3 tbsp", price: 10, available: true },
      { id: "red_chili", name: "Dry Red Chilies", qty: "3", price: 5, available: true },
      { id: "tamarind", name: "Tamarind", qty: "small piece", price: 5, available: true },
      { id: "asafoetida", name: "Hing", qty: "pinch", price: 5, available: false }
    ],
    steps: [
      "Heat a teaspoon of oil and fry urad dal and red chilies until golden.",
      "Add a pinch of hing and remove from heat.",
      "Wash coriander leaves and pulse them in a blender with the fried dal, tamarind, salt, and very little water.",
      "Grind to a thick, slightly coarse paste.",
      "Temper with mustard seeds if desired, though optional.",
      "Serve as a condiment or mix with hot rice."
    ]
  },
  {
    id: "ellu-sadam",
    name: "Ellu Sadam (Sesame Rice)",
    description: "A fragrant and nutty rice dish made with freshly roasted black sesame seeds and spices.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.65,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian"],
    healthTags: ["pcos-friendly", "heart-healthy"],
    ingredients: [
      { id: "rice", name: "Cooked Rice", qty: "3 cups", price: 20, available: true },
      { id: "sesame", name: "Black Sesame Seeds", qty: "3 tbsp", price: 20, available: true },
      { id: "urad_dal", name: "Urad Dal", qty: "1 tbsp", price: 10, available: true },
      { id: "red_chili", name: "Dry Red Chilies", qty: "2", price: 5, available: true },
      { id: "peanuts", name: "Roasted Peanuts", qty: "2 tbsp", price: 15, available: false }
    ],
    steps: [
      "Dry roast sesame seeds until they start to pop; cool and grind into a fine powder.",
      "Heat oil and temper with mustard seeds, urad dal, red chilies, and peanuts.",
      "Add curry leaves and a pinch of hing.",
      "Add the cooked rice and sprinkle the ground sesame powder and salt.",
      "Gently toss the rice until evenly coated with the spice mix.",
      "Serve with a side of chips or papadam."
    ]
  },
  {
    id: "thengai-sadam",
    name: "Thengai Sadam (Coconut Rice)",
    description: "A quick and aromatic variety rice flavored with fresh coconut and crunchy lentils.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 80,
    popularity: 0.79,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian"],
    healthTags: ["digestive-friendly", "immunity-boosting"],
    ingredients: [
      { id: "rice", name: "Cooked Rice", qty: "3 cups", price: 20, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1 cup", price: 30, available: true },
      { id: "ginger", name: "Minced Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "cashews", name: "Cashew Nuts", qty: "10", price: 20, available: false },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true }
    ],
    steps: [
      "Heat oil/ghee and add mustard seeds, urad dal, chana dal, and cashew nuts.",
      "Fry until the lentils and nuts turn golden.",
      "Add green chilies, ginger, and curry leaves.",
      "Add the fresh grated coconut and sauté for 1 minute on low heat (do not brown).",
      "Stir in the cooked rice and salt; mix thoroughly.",
      "Serve as a light lunch with potato fry."
    ]
  },
  {
    id: "puliyodarai",
    name: "Puliyodarai (Tamarind Rice)",
    description: "Classic Tamil temple-style tamarind rice, perfectly balanced with tang, spice, and crunch.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.92,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Spicy"],
    healthTags: ["digestive-friendly"],
    ingredients: [
      { id: "rice", name: "Cooked Rice", qty: "4 cups", price: 25, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1/2 cup", price: 15, available: true },
      { id: "peanuts", name: "Peanuts", qty: "1/4 cup", price: 15, available: true },
      { id: "puliyodarai_powder", name: "Roasted Spice Powder", qty: "2 tbsp", price: 20, available: true },
      { id: "sesame_oil", name: "Gingelly Oil", qty: "3 tbsp", price: 15, available: false }
    ],
    steps: [
      "Cook the tamarind pulp with turmeric and salt until raw smell goes away and it thickens.",
      "Heat gingelly oil and temper with mustard, chana dal, red chilies, and peanuts.",
      "Pour the concentrated tamarind paste into the tempering and simmer until oil floats.",
      "Add the special spice powder (made from coriander seeds, methi, pepper).",
      "Spread cooked rice on a wide plate, pour the paste over it, and mix gently.",
      "Let it rest for at least 1 hour before serving for best flavor."
    ]
  },
  {
    id: "vazhakkai-poriyal",
    name: "Vazhakkai Poriyal",
    description: "Crispy and savory raw banana stir-fry with a hint of garlic and coconut.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.74,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian"],
    healthTags: ["weight-management", "diabetes-friendly"],
    ingredients: [
      { id: "raw_banana", name: "Raw Banana", qty: "2", price: 20, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "2 tbsp", price: 10, available: true },
      { id: "garlic", name: "Crushed Garlic", qty: "3 cloves", price: 5, available: true },
      { id: "sambarpowder", name: "Sambar Powder", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Cooking Oil", qty: "2 tbsp", price: 15, available: false }
    ],
    steps: [
      "Peel and chop raw banana into small cubes; parboil with turmeric for 5 minutes.",
      "Heat oil and temper with mustard seeds and urad dal.",
      "Add crushed garlic and sauté until fragrant.",
      "Add the drained banana cubes, salt, and sambar powder.",
      "Fry on medium heat until the banana becomes crispy on the edges.",
      "Garnish with grated coconut and serve."
    ]
  },
  {
    id: "keerai-masiyal",
    name: "Keerai Masiyal",
    description: "Creamy mashed spinach cooked with simple spices, highly nutritious and comforting.",
    type: "Vegetarian",
    time: 20,
    servings: 3,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.80,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Healthy"],
    healthTags: ["anemia-friendly", "pregnancy-friendly", "weight-management", "diabetes-friendly"],
    ingredients: [
      { id: "spinach", name: "Fresh Spinach (Arai Keerai)", qty: "1 bunch", price: 20, available: true },
      { id: "moong_dal", name: "Yellow Moong Dal", qty: "1/4 cup", price: 10, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tsp", price: 10, available: false }
    ],
    steps: [
      "Pressure cook spinach, green chilies, and moong dal with a cup of water.",
      "Once pressure is released, mash the mixture thoroughly using a traditional wooden masher.",
      "Heat ghee/oil and temper with mustard and cumin seeds.",
      "Stir in the tempered oil and salt into the mashed spinach.",
      "Simmer for 2 minutes and serve warm with rice.",
      "Best paired with a tangy vatha kuzhambu."
    ]
  },
  {
    id: "mor-kuzhambu",
    name: "Mor Kuzhambu",
    description: "A traditional South Indian curd-based curry with a ground coconut-spice paste and winter melon.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.84,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian"],
    healthTags: ["digestive-friendly", "high-bp-friendly"],
    ingredients: [
      { id: "curd", name: "Sour Curd", qty: "2 cups", price: 20, available: true },
      { id: "ash_gourd", name: "Winter Melon (Ash Gourd)", qty: "200g", price: 20, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "ginger_chili", name: "Ginger and Green Chilies", qty: "small amount", price: 10, available: true },
      { id: "chana_dal", name: "Soaked Chana Dal", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Boil ash gourd cubes with turmeric and salt until tender.",
      "Grind coconut, soaked chana dal, ginger, and green chilies into a fine paste.",
      "Whisk the sour curd until smooth and mix with the ground paste.",
      "Add this mixture to the cooked ash gourd; simmer on very low heat.",
      "Do not boil, just heat until it starts to froth slightly.",
      "Temper with mustard seeds, fenugreek, and curry leaves in coconut oil."
    ]
  },
  {
    id: "sevai-breakfast",
    name: "Sevai",
    description: "Light rice noodles tempered with lemon, coconut, or tomato for a traditional breakfast.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.77,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Breakfast"],
    healthTags: ["digestive-friendly", "weight-management"],
    ingredients: [
      { id: "rice_noodles", name: "Rice Noodles (Sevai)", qty: "200g", price: 30, available: true },
      { id: "lemon", name: "Lemon", qty: "1", price: 5, available: true },
      { id: "small_onion", name: "Small Onions", qty: "5", price: 10, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/2 tsp", price: 5, available: true },
      { id: "peanuts", name: "Peanuts", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Prepare or soak the rice noodles according to package instructions.",
      "Heat oil and temper with mustard, urad dal, peanuts, and green chilies.",
      "Add curry leaves and turmeric powder.",
      "Squeeze lemon juice into the pan and turn off heat.",
      "Toss in the prepared rice noodles and mix gently with salt.",
      "Serve hot with coconut chutney."
    ]
  },
  {
    id: "milagu-kuzhambu-veg",
    name: "Milagu Kuzhambu",
    description: "A medicinal and warming pepper-based tamarind curry, excellent for digestion and rainy days.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.70,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Spicy", "Healthy"],
    healthTags: ["digestive-friendly", "immunity-boosting", "cold-cough-friendly"],
    ingredients: [
      { id: "peppercorns", name: "Black Peppercorns", qty: "2 tbsp", price: 15, available: true },
      { id: "tamarind", name: "Tamarind", qty: "small ball", price: 10, available: true },
      { id: "toor_dal", name: "Toor Dal", qty: "1 tbsp", price: 5, available: true },
      { id: "red_chili", name: "Dry Red Chili", qty: "1", price: 5, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "large handful", price: 45, available: false }
    ],
    steps: [
      "Dry roast peppercorns, toor dal, and red chili; grind into a smooth paste with curry leaves.",
      "Extract tamarind juice and bring to a boil with salt and turmeric.",
      "Add the ground pepper-dal paste to the boiling tamarind water.",
      "Let it simmer until the mixture thickens and reaches a gravy consistency.",
      "Temper with mustard seeds and curry leaves in sesame oil.",
      "Serve with steamed rice and sutta appalam (roasted papad)."
    ]
  },
  {
    id: "vengaya-sambar",
    name: "Vengaya Sambar",
    description: "A classic South Indian lentil stew made with small pearl onions that provide a sweet depth of flavor.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.89,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Weeknight Dinner"],
    healthTags: ["digestive-friendly", "anemia-friendly", "weight-management"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "shallots", name: "Shallots (Small Onions)", qty: "15", price: 25, available: true },
      { id: "tamarind", name: "Tamarind", qty: "lemon sized", price: 10, available: true },
      { id: "sambarpowder", name: "Sambar Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "oil", name: "Oil/Ghee", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Pressure cook toor dal with turmeric until soft and mash it.",
      "Sauté whole small onions in oil until they are lightly browned.",
      "Add tamarind juice, salt, and sambar powder; boil until onions are soft.",
      "Stir in the mashed dal and simmer for 5-7 minutes.",
      "Prepare tempering with mustard, hing, and curry leaves; pour over the sambar.",
      "Serve hot with rice or idli."
    ]
  },
  {
    id: "kootu-stew",
    name: "Kootu",
    description: "A mild and healthy stew of vegetables and lentils cooked in a fresh coconut-cumin-chili paste.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.76,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Healthy", "Comfort Food"],
    healthTags: ["digestive-friendly", "weight-management", "pregnancy-friendly"],
    ingredients: [
      { id: "cabbage_chow", name: "Chow Chow or Cabbage", qty: "250g", price: 25, available: true },
      { id: "moong_dal", name: "Yellow Moong Dal", qty: "1/4 cup", price: 10, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/4 cup", price: 15, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "pepper", name: "Black Pepper", qty: "1/2 tsp", price: 15, available: false }
    ],
    steps: [
      "Cook chopped vegetables and moong dal together with turmeric until soft.",
      "Grind coconut, cumin, and black pepper into a fine paste.",
      "Add the paste to the cooked vegetable-dal mixture.",
      "Simmer for 3-4 minutes on low heat.",
      "Temper with mustard seeds and urad dal in coconut oil.",
      "Serve as an accompaniment to a spicy kuzhambu."
    ]
  },
  {
    id: "rava-kesari",
    name: "Rava Kesari",
    description: "A bright orange, melt-in-the-mouth semolina sweet enriched with ghee, saffron, and nuts.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 90,
    popularity: 0.87,
    tags: ["Tamil Nadu", "South Indian", "Dessert"],
    healthTags: [],
    ingredients: [
      { id: "rava", name: "Semolina (Rava)", qty: "1 cup", price: 20, available: true },
      { id: "sugar", name: "Sugar", qty: "1.5 cups", price: 25, available: true },
      { id: "ghee", name: "Ghee", qty: "1/2 cup", price: 40, available: true },
      { id: "cashews", name: "Cashews", qty: "10", price: 20, available: false },
      { id: "saffron", name: "Saffron / Food Color", qty: "pinch", price: 5, available: true }
    ],
    steps: [
      "Heat a little ghee and fry cashews and raisins; set aside.",
      "Roast rava in the remaining ghee until fragrant (do not brown).",
      "Boil 2.5 cups of water in another pan and slowly pour into the rava, stirring constantly to avoid lumps.",
      "Once rava absorbs water, add sugar and kesari color/saffron.",
      "Stir in the rest of the ghee and cook until it leaves the sides of the pan.",
      "Add the fried nuts and serve warm."
    ]
  },
  {
    id: "sakkarai-pongal",
    name: "Sakkarai Pongal",
    description: "The traditional sweet rice dish made during harvest festivals with jaggery, lentils, and rich ghee.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 120,
    popularity: 0.90,
    tags: ["Tamil Nadu", "South Indian", "Dessert", "Comfort Food"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "raw_rice", name: "Raw Rice", qty: "1 cup", price: 15, available: true },
      { id: "moong_dal", name: "Yellow Moong Dal", qty: "1/4 cup", price: 10, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1.5 cups", price: 30, available: true },
      { id: "ghee", name: "Ghee", qty: "1/4 cup", price: 30, available: true },
      { id: "cardamom", name: "Cardamom Powder", qty: "1/2 tsp", price: 35, available: false }
    ],
    steps: [
      "Pressure cook rice and moong dal with 4 cups of water until very soft and mushy.",
      "Dissolve jaggery in 1/2 cup water, heat until it melts, and strain to remove impurities.",
      "Add the jaggery syrup to the cooked rice-dal and mix well over low heat.",
      "Add ghee and cardamom powder, stirring continuously.",
      "Garnish with ghee-fried cashews and raisins.",
      "Serve warm as a temple offering or festive dessert."
    ]
  },
  {
    id: "kadamba-sadam",
    name: "Kadamba Sadam",
    description: "A grand 'one-pot' festive rice featuring mixed vegetables, lentils, and a special spice blend.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 110,
    popularity: 0.83,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Weeknight Dinner"],
    healthTags: ["anemia-friendly", "digestive-friendly", "diabetes-friendly"],
    ingredients: [
      { id: "rice", name: "Raw Rice", qty: "1 cup", price: 15, available: true },
      { id: "toor_dal", name: "Toor Dal", qty: "1/2 cup", price: 15, available: true },
      { id: "mixed_veg", name: "Mixed Vegetables (Carrot, Bean, Peas)", qty: "2 cups", price: 40, available: true },
      { id: "sambarpowder", name: "Sambar Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Pressure cook rice, dal, and vegetables together with sambar powder and turmeric until soft.",
      "Stir in the tamarind pulp and salt; cook for another 5 minutes.",
      "Prepare a tempering with mustard seeds, red chilies, curry leaves, and a generous pinch of hing.",
      "Pour the tempering over the rice and mix with a spoon of ghee.",
      "The consistency should be slightly liquid/mushy like Bisibelebath.",
      "Serve with fried papads."
    ]
  },

  // --- NON-VEGETARIAN (20) ---
  {
    id: "meen-kuzhambu",
    name: "Tamil Style Fish Curry",
    description: "A spicy and tangy coastal curry made with fresh fish simmered in a tamarind and chili gravy.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 320,
    popularity: 0.88,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "heart-healthy"],
    ingredients: [
      { id: "fish", name: "Fresh Fish Slices", qty: "500g", price: 200, available: true },
      { id: "tamarind", name: "Tamarind", qty: "lemon sized", price: 10, available: true },
      { id: "small_onion", name: "Small Onions", qty: "15", price: 20, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "10", price: 10, available: true },
      { id: "red_chili_powder", name: "Red Chili Powder", qty: "2 tbsp", price: 80, available: false }
    ],
    steps: [
      "Extract tamarind juice and mix with chili powder, coriander powder, and salt.",
      "Heat sesame oil and temper with mustard, fenugreek, and curry leaves.",
      "Sauté shallots and garlic until golden.",
      "Pour in the tamarind-spice mixture and bring to a boil; simmer until it thickens.",
      "Gently slide in the fish slices and cook for 7-10 minutes on medium heat.",
      "Do not overcook; serve next day for enhanced flavor with rice."
    ]
  },
  {
    id: "chettinad-mutton-curry",
    name: "Chettinad Mutton Curry",
    description: "A fiery and robust mutton curry made with a unique blend of 18 freshly roasted spices.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 550,
    popularity: 0.92,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 400, available: true },
      { id: "chettinad_masala", name: "Roasted Spice Mix", qty: "3 tbsp", price: 50, available: true },
      { id: "onion", name: "Onions", qty: "2 large", price: 15, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "kalpasi", name: "Stone Flower (Kalpasi)", qty: "pinch", price: 75, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt, turmeric, and ginger-garlic paste for 5-6 whistles.",
      "Heat oil and temper with whole spices and kalpasi.",
      "Sauté onions and tomatoes until mushy.",
      "Add the roasted Chettinad spice powder and the pre-cooked mutton with its stock.",
      "Simmer on low heat until the gravy thickens and oil separates.",
      "Garnish with coriander and serve with Parotta or rice."
    ]
  },
  {
    id: "nei-meen-varuval",
    name: "Nei Meen Varuval",
    description: "Kingfish steaks marinated in a spicy masala and shallow fried to crispy perfection.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.81,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "heart-healthy"],
    ingredients: [
      { id: "seer_fish", name: "Seer Fish (Vanjaram)", qty: "3 steaks", price: 200, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tbsp", price: 5, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Cooking Oil", qty: "1/4 cup", price: 65, available: false }
    ],
    steps: [
      "Make a paste of chili powder, turmeric, ginger-garlic, salt, and lemon juice.",
      "Coat the fish steaks evenly with the masala and marinate for 30 minutes.",
      "Heat oil in a heavy-bottomed frying pan.",
      "Shallow fry the fish on medium heat until both sides are dark red and crispy.",
      "Garnish with onion rings and lemon wedges.",
      "Serve hot as an appetizer or with fish curry rice."
    ]
  },
  {
    id: "naatu-kozhi-kuzhambu",
    name: "Naatu Kozhi Kuzhambu",
    description: "Traditional country chicken curry cooked with rustic spices, known for its deep, rich flavor.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 380,
    popularity: 0.86,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "country_chicken", name: "Country Chicken", qty: "500g", price: 280, available: true },
      { id: "shallots", name: "Small Onions", qty: "1 cup", price: 25, available: true },
      { id: "tomato", name: "Tomato", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "homemade_masala", name: "Village Style Spice Mix", qty: "3 tbsp", price: 55, available: false }
    ],
    steps: [
      "Sauté whole spices and small onions in gingelly oil.",
      "Add chicken and ginger-garlic paste; sauté until chicken is seared.",
      "Add homemade curry powder and tomatoes; sauté until mushy.",
      "Add water and pressure cook for 7-8 whistles (country chicken is tougher than broiler).",
      "Finish with a handful of fresh curry leaves.",
      "Serve hot with idli or steamed rice."
    ]
  },
  {
    id: "nandu-kuzhambu",
    name: "Nandu Kuzhambu (Tamil Crab Curry)",
    description: "A spicy and aromatic crab curry prepared with a peppery coconut-based masala.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 3,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.79,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "crab", name: "Cleaned Crabs", qty: "500g", price: 300, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "pepper", name: "Black Pepper", qty: "1 tbsp", price: 10, available: true },
      { id: "fennel", name: "Fennel Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 70, available: false }
    ],
    steps: [
      "Grind coconut, pepper, and fennel seeds into a fine paste.",
      "Sauté onions, tomatoes, and ginger-garlic paste in oil.",
      "Add cleaned crabs and spice powders; sauté for 5 minutes.",
      "Pour in the ground coconut paste and water; bring to a boil.",
      "Cover and cook until the crab shells turn orange and the gravy is thick.",
      "Garnish with curry leaves and serve hot."
    ]
  },
  {
    id: "kozhi-milagu-varuval",
    name: "Kozhi Milagu Varuval",
    description: "A dry chicken preparation featuring the sharp heat of freshly crushed peppercorns.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.85,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["cold-cough-friendly", "digestive-friendly", "immunity-boosting"],
    ingredients: [
      { id: "chicken", name: "Chicken pieces", qty: "500g", price: 150, available: true },
      { id: "pepper", name: "Crushed Black Pepper", qty: "2 tbsp", price: 15, available: true },
      { id: "shallots", name: "Shallots", qty: "10", price: 10, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "2 sprigs", price: 5, available: true },
      { id: "oil", name: "Sesame Oil", qty: "2 tbsp", price: 80, available: false }
    ],
    steps: [
      "Clean and cut chicken into small pieces.",
      "Heat oil, sauté shallots and curry leaves until fragrant.",
      "Add chicken, salt, and turmeric; sauté until chicken is 70% cooked.",
      "Add crushed black pepper and a little cumin powder.",
      "Dry roast on medium heat until the moisture is gone and the chicken is well-coated with pepper.",
      "Serve as a starter or with rasam rice."
    ]
  },
  {
    id: "mutton-sukka-tn",
    name: "Mutton Sukka",
    description: "Tender pieces of mutton slow-cooked with roasted spices until dry and flavorful.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 500,
    popularity: 0.88,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 400, available: true },
      { id: "small_onion", name: "Shallots", qty: "1 cup", price: 25, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "sukka_masala", name: "Roasted Sukka Masala", qty: "2 tbsp", price: 20, available: true },
      { id: "coconut_pieces", name: "Coconut Slivers", qty: "2 tbsp", price: 45, available: false }
    ],
    steps: [
      "Pressure cook mutton with ginger-garlic paste and salt until tender.",
      "Heat oil in a kadai and fry coconut slivers and shallots until brown.",
      "Add the cooked mutton (without the stock) and the roasted spice mix.",
      "Stir-fry on high heat until the masala clings to the meat.",
      "Slowly add the leftover stock to glaze the pan and cook until completely dry.",
      "Finish with black pepper and lots of curry leaves."
    ]
  },
  {
    id: "prawn-masala-tn",
    name: "Prawn Masala (Tamil Style)",
    description: "Succulent prawns cooked in a tangy tamarind-coconut masala with fresh spices.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 420,
    popularity: 0.82,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "prawns", name: "Large Prawns", qty: "300g", price: 300, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "3 tbsp", price: 10, available: true },
      { id: "tamarind", name: "Tamarind Paste", qty: "1 tsp", price: 5, available: true },
      { id: "onion", name: "Chopped Onion", qty: "1", price: 10, available: true },
      { id: "red_chili", name: "Chili Powder", qty: "1 tbsp", price: 95, available: false }
    ],
    steps: [
      "Clean and devein the prawns.",
      "Sauté onions and tomatoes until they form a soft base.",
      "Add ginger-garlic paste and chili powder.",
      "Stir in the tamarind paste and a splash of coconut milk/paste.",
      "Add the prawns and cook for exactly 4-5 minutes (do not overcook).",
      "Garnish with fresh coriander and serve hot with steamed rice."
    ]
  },
  {
    id: "chicken-65-tn",
    name: "Chicken 65 (Tamil Style)",
    description: "The original Chennai street-food fried chicken—crispy, spicy, and tangy with deep red color.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 3,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.94,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    healthTags: ["immunity-boosting"],
    ingredients: [
      { id: "chicken", name: "Boneless Chicken", qty: "400g", price: 120, available: true },
      { id: "curd", name: "Curd", qty: "2 tbsp", price: 10, available: true },
      { id: "corn_flour", name: "Corn Flour", qty: "2 tbsp", price: 10, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 85, available: false }
    ],
    steps: [
      "Marinate chicken bites in curd, ginger-garlic paste, chili powder, and salt for 1 hour.",
      "Dust the marinated chicken with corn flour and rice flour for crunch.",
      "Deep fry in hot oil until the exterior is dark red and crispy.",
      "In a separate pan, temper curry leaves and green chilies; toss the fried chicken in this.",
      "Finish with a squeeze of lemon juice.",
      "Serve as an iconic South Indian appetizer."
    ]
  },
  {
    id: "mutton-kola-urundai-kuzhambu",
    name: "Mutton Kola Urundai Kuzhambu",
    description: "Crispy fried mutton meatballs simmered in a spicy, thin Chettinad gravy.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 350,
    popularity: 0.78,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "minced_mutton", name: "Minced Mutton (Keema)", qty: "250g", price: 200, available: true },
      { id: "fried_gram", name: "Fried Gram (Pottu Kadalai)", qty: "3 tbsp", price: 10, available: true },
      { id: "chettinad_powder", name: "Kuzhambu Masala", qty: "2 tbsp", price: 15, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Cooking Oil", qty: "3 tbsp", price: 115, available: false }
    ],
    steps: [
      "Grind minced mutton with fried gram powder and spices to form balls (kola urundai).",
      "Shallow fry or deep fry the meatballs until firm.",
      "Prepare a tangy Chettinad-style tamarind gravy with onions and tomatoes.",
      "Once the gravy is boiling and thickens slightly, gently add the fried meatballs.",
      "Simmer for 10 minutes so the balls absorb the flavor of the gravy.",
      "Serve with steamed rice or Kal Dosai."
    ]
  },
  {
    id: "chicken-chukka-tn",
    name: "Chicken Chukka",
    description: "A semi-dry chicken preparation with a heavy dose of small onions and black pepper.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.83,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "shallots", name: "Shallots", qty: "20", price: 20, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "pepper", name: "Crushed Black Pepper", qty: "1 tbsp", price: 15, available: true },
      { id: "oil", name: "Sesame Oil", qty: "2 tbsp", price: 55, available: false }
    ],
    steps: [
      "Heat oil and sauté shallots until they are completely soft and browned.",
      "Add chicken and ginger-garlic paste; sauté until chicken changes color.",
      "Add chili powder, coriander powder, and turmeric; cook with a splash of water.",
      "Slowly roast on low heat until the chicken is tender and the liquid evaporates.",
      "Add black pepper and salt; toss until the chicken is dry ('chukka').",
      "Garnish with lots of fried curry leaves."
    ]
  },
  {
    id: "meen-varuval-tn",
    name: "Meen Varuval",
    description: "Traditional Tamil fish fry coated with a spicy, red homemade masala paste.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.80,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "heart-healthy"],
    ingredients: [
      { id: "fish", name: "Fish Slices (Sankara/Rohu)", qty: "400g", price: 180, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/2 tsp", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1/2 cup", price: 95, available: false }
    ],
    steps: [
      "Marinate fish slices with a thick paste of chili powder, turmeric, ginger-garlic, and salt.",
      "Let it sit for at least 20 minutes.",
      "Heat a wide tawa and add enough oil for shallow frying.",
      "Place fish on the tawa and fry on both sides until crispy and cooked through.",
      "Serve as a side dish for variety rice or meen kuzhambu."
    ]
  },
  {
    id: "kozhi-varuval-tn",
    name: "Kozhi Varuval",
    description: "Succulent chicken bites marinated in South Indian spices and deep-fried until crunchy.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.81,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    healthTags: ["immunity-boosting"],
    ingredients: [
      { id: "chicken", name: "Chicken chunks", qty: "500g", price: 160, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "rice_flour", name: "Rice Flour", qty: "1 tbsp", price: 10, available: true },
      { id: "spices", name: "Fried Chicken Spice Mix", qty: "2 tbsp", price: 15, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 70, available: false }
    ],
    steps: [
      "Marinate chicken chunks with lemon juice, salt, and spices.",
      "Mix in rice flour just before frying to ensure a crispy texture.",
      "Deep fry in hot oil until brown and cooked inside.",
      "Toss with fresh curry leaves for the final touch of aroma.",
      "Serve hot with onion rings."
    ]
  },
  {
    id: "nattu-kozhi-varuval-tn",
    name: "Nattu Kozhi Varuval",
    description: "Dry fry of country chicken with a coarse, rustic Tamil spice blend and lots of garlic.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Hard",
    cost: 340,
    popularity: 0.84,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "nattu_kozhi", name: "Country Chicken", qty: "500g", price: 250, available: true },
      { id: "small_onion", name: "Shallots", qty: "15", price: 20, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "10", price: 10, available: true },
      { id: "peppercorns", name: "Crushed Black Pepper", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Sesame Oil", qty: "3 tbsp", price: 50, available: false }
    ],
    steps: [
      "Pressure cook the country chicken with turmeric and salt until nearly tender.",
      "Heat sesame oil in a kadai and sauté shallots and crushed garlic.",
      "Add the cooked chicken (drain stock) and sauté on high heat.",
      "Add chili powder and crushed black pepper.",
      "Fry until the chicken is completely dry and flavorful.",
      "Serve hot with steamed rice or as a hearty appetizer."
    ]
  },
  {
    id: "yera-thokku-tn",
    name: "Yera Thokku",
    description: "A thick, spicy, and tangy prawn preparation where the prawns are cooked down into a rich onion-tomato concentrate.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 3,
    difficulty: "Medium",
    cost: 380,
    popularity: 0.79,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "prawns", name: "Medium Prawns", qty: "400g", price: 300, available: true },
      { id: "small_onion", name: "Shallots", qty: "1 cup", price: 25, available: true },
      { id: "tomato", name: "Tomato", qty: "2 large", price: 15, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tsp", price: 30, available: false }
    ],
    steps: [
      "Sauté shallots until they are soft and golden brown.",
      "Add chopped tomatoes and cook until they break down.",
      "Add ginger-garlic paste, chili powder, and coriander powder.",
      "Add prawns and cook for 2 minutes on high heat.",
      "Slowly simmer until the sauce thickens and coats the prawns like a thick jam ('thokku').",
      "Finish with fresh coriander and a squeeze of lime."
    ]
  },
  {
    id: "kari-dosai-tn",
    name: "Kari Dosai",
    description: "A Madurai specialty—a fluffy dosa topped with a spicy, flavorful layer of minced mutton and egg.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 3,
    difficulty: "Medium",
    cost: 220,
    popularity: 0.87,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Breakfast"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "dosa_batter", name: "Idli Batter", qty: "2 cups", price: 30, available: true },
      { id: "minced_mutton", name: "Mutton Keema", qty: "200g", price: 120, available: true },
      { id: "egg", name: "Eggs", qty: "2", price: 15, available: true },
      { id: "shallots", name: "Shallots", qty: "5", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 45, available: false }
    ],
    steps: [
      "Cook mutton keema separately with onions and spices until dry.",
      "Whisk an egg with salt and a pinch of pepper.",
      "Pour a thick ladle of dosa batter on a hot tawa.",
      "Immediately spread a portion of the whisked egg over the batter, then add a generous layer of cooked mutton keema.",
      "Drizzle ghee around the edges and cook until the bottom is crisp.",
      "Flip and cook the meat side for 1 minute before serving with salna."
    ]
  },
  {
    id: "attu-kal-kari-tn",
    name: "Attu Kal Kari (Goat Trotters Curry)",
    description: "A slow-cooked, nutritious, and rich curry made from goat trotters, often served with appam or idiyappam.",
    type: "Non-Vegetarian",
    time: 90,
    servings: 4,
    difficulty: "Hard",
    cost: 450,
    popularity: 0.72,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian"],
    healthTags: ["anemia-friendly", "immunity-boosting", "pregnancy-friendly"],
    ingredients: [
      { id: "goat_trotters", name: "Goat Trotters (Attu Kal)", qty: "4", price: 300, available: true },
      { id: "coconut_milk", name: "Coconut Milk", qty: "1 cup", price: 40, available: true },
      { id: "onion", name: "Onion", qty: "2", price: 15, available: true },
      { id: "spices", name: "Whole Spices", qty: "various", price: 25, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "2 tbsp", price: 70, available: false }
    ],
    steps: [
      "Pressure cook the trotters with salt and whole spices for at least 15-20 whistles until extremely tender.",
      "Sauté onions and ginger-garlic paste until soft.",
      "Add the trotters along with their stock.",
      "Stir in thick coconut milk and simmer for 15 minutes until flavors meld.",
      "Garnish with fresh coriander.",
      "Traditionally served early in the morning with hot appam."
    ]
  },
  {
    id: "chicken-chettinad-biryani",
    name: "Chicken Chettinad Biryani",
    description: "Fragrant biryani using seeraga samba rice and the bold, peppery spices of Chettinad.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.89,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "rice", name: "Seeraga Samba Rice", qty: "2 cups", price: 80, available: true },
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "chettinad_mix", name: "Chettinad Masala Powder", qty: "2 tbsp", price: 20, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 15, available: true },
      { id: "ghee", name: "Ghee", qty: "1/4 cup", price: 135, available: false }
    ],
    steps: [
      "Roast and grind the Chettinad spice mix (peppercorns, kalpasi, star anise).",
      "Sauté onions and tomatoes in ghee; add chicken and the spice powder.",
      "Cook chicken halfway, then add soaked seeraga samba rice and water (1:1.5 ratio).",
      "Close the lid and cook on dum for 20 minutes.",
      "Fluff and garnish with fried onions and coriander.",
      "Serve with raita and egg."
    ]
  },
  {
    id: "ambur-chicken-biryani",
    name: "Ambur Chicken Biryani",
    description: "Famous short-grain rice biryani from the town of Ambur, known for its mild spice and light texture.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 380,
    popularity: 0.92,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "rice", name: "Seeraga Samba Rice", qty: "2 cups", price: 80, available: true },
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "curd", name: "Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "dry_chili", name: "Dry Red Chili Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "mint", name: "Mint and Coriander", qty: "1 handful", price: 125, available: false }
    ],
    steps: [
      "Prepare a paste of soaked dry red chilies.",
      "Sauté whole spices and the chili paste in oil; add chicken and curd.",
      "Cook the chicken with mint and coriander until almost done.",
      "Cook the rice separately until 70% done, then layer it over the chicken gravy.",
      "Cook on low heat (dum) for 15-20 minutes.",
      "Serve with 'Kathirikai Pachadi' (eggplant curry) and onion raita."
    ]
  },
  {
    id: "dindigul-chicken-biryani",
    name: "Dindigul Chicken Biryani",
    description: "A distinctive Tamil biryani with a unique tanginess from curd and the intense flavor of jeeraga samba rice.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 390,
    popularity: 0.90,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "rice", name: "Jeeraga Samba Rice", qty: "2 cups", price: 80, available: true },
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "shallots", name: "Pearl Onions (Small Onions)", qty: "1/2 cup", price: 30, available: true },
      { id: "curd", name: "Thick Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "green_chili", name: "Green Chili Paste", qty: "1 tbsp", price: 115, available: false }
    ],
    steps: [
      "Grind shallots and green chilies into a paste.",
      "Sauté this paste with whole spices and ginger-garlic paste in ghee.",
      "Add chicken, curd, and salt; cook until chicken is soft.",
      "Add the jeeraga samba rice and water; cook on medium-low flame.",
      "Finish on dum for 15 minutes to allow the rice to absorb all the liquids.",
      "The result is a slightly moist, flavorful biryani best served with pepper gravy."
    ]
  },

  // --- SNACKS (10) ---
  {
    id: "sundal-snack",
    name: "Sundal",
    description: "A healthy and popular temple snack made from boiled chickpeas tempered with coconut and mustard.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.82,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Snacks", "Healthy"],
    healthTags: ["weight-management", "diabetes-friendly", "heart-healthy", "anemia-friendly"],
    ingredients: [
      { id: "chickpeas", name: "Boiled Chickpeas (Kondaikadalai)", qty: "2 cups", price: 30, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "3 tbsp", price: 10, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1/2 tsp", price: 10, available: false }
    ],
    steps: [
      "Soak and pressure cook chickpeas with salt until soft.",
      "Heat a teaspoon of oil and temper with mustard, urad dal, and red chili.",
      "Add grated ginger, green chili, and curry leaves.",
      "Add the boiled chickpeas and sauté for 2 minutes.",
      "Turn off heat and mix in the fresh grated coconut.",
      "Serve as a healthy evening snack."
    ]
  },
  {
    id: "thattai-crackers",
    name: "Thattai",
    description: "Crispy, deep-fried savory rice crackers seasoned with chili and lentils, a classic Tamil snack.",
    type: "Vegetarian",
    time: 30,
    servings: 6,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.76,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Snacks"],
    healthTags: [],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 30, available: true },
      { id: "urad_dal_flour", name: "Roasted Urad Dal Flour", qty: "2 tbsp", price: 10, available: true },
      { id: "chana_dal", name: "Soaked Chana Dal", qty: "2 tbsp", price: 10, available: true },
      { id: "butter", name: "Butter", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 30, available: false }
    ],
    steps: [
      "Mix rice flour, urad dal flour, butter, salt, and chili powder.",
      "Add the soaked chana dal and sesame seeds.",
      "Knead into a tight dough using minimal water.",
      "Take small portions and flatten them into thin discs on a greased sheet.",
      "Prick with a fork to prevent puffing and deep fry in medium-hot oil until golden brown.",
      "Store in an airtight container for weeks."
    ]
  },
  {
    id: "ulundu-vadai-snack",
    name: "Ulundu Vadai",
    description: "Crispy fried lentil doughnuts made from fluffy black gram batter, a favorite tea-time snack.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.89,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Snacks", "Breakfast"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "urad_dal", name: "Urad Dal", qty: "1 cup", price: 25, available: true },
      { id: "onion", name: "Chopped Onion", qty: "2 tbsp", price: 5, available: true },
      { id: "pepper", name: "Whole Peppercorns", qty: "1 tsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 35, available: false }
    ],
    steps: [
      "Soak urad dal for 2 hours and grind into a very thick, fluffy batter with minimal water.",
      "Aerate the batter by whisking it until it floats in water.",
      "Mix in peppercorns, chopped onion, green chili, and salt.",
      "Wet your palms, take a small ball of batter, flatten it, and make a hole in the middle.",
      "Carefully drop into hot oil and fry until golden and crispy on both sides.",
      "Serve hot with coconut chutney."
    ]
  },
  {
    id: "vazhaipoo-vadai-snack",
    name: "Vazhaipoo Vadai",
    description: "Unique and crispy fritters made from finely chopped banana flower and spiced lentils.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Hard",
    cost: 90,
    popularity: 0.74,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Snacks"],
    healthTags: ["anemia-friendly", "weight-management", "diabetes-friendly"],
    ingredients: [
      { id: "banana_flower", name: "Banana Flower (Cleaned)", qty: "1 cup", price: 30, available: true },
      { id: "chana_dal", name: "Chana Dal", qty: "1 cup", price: 20, available: true },
      { id: "red_chili", name: "Dry Red Chilies", qty: "4", price: 5, available: true },
      { id: "fennel", name: "Fennel Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 30, available: false }
    ],
    steps: [
      "Clean the banana flower and chop very finely; soak in buttermilk to prevent browning.",
      "Soak chana dal for 2 hours and grind coarsely with red chilies and fennel seeds.",
      "Squeeze the chopped banana flower dry and mix with the lentil batter.",
      "Add finely chopped onions and salt.",
      "Take small portions, flatten into patties, and deep fry until crispy brown.",
      "Serve as a delicious, fiber-rich snack."
    ]
  },
  {
    id: "ellu-urundai-snack",
    name: "Ellu Urundai",
    description: "Simple, nutrient-dense balls made from roasted sesame seeds and molten jaggery.",
    type: "Vegetarian",
    time: 20,
    servings: 8,
    difficulty: "Easy",
    cost: 100,
    popularity: 0.75,
    tags: ["Tamil Nadu", "South Indian", "Dessert", "Healthy"],
    healthTags: ["pcos-friendly", "anemia-friendly", "heart-healthy"],
    ingredients: [
      { id: "sesame", name: "Black Sesame Seeds", qty: "1 cup", price: 30, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "3/4 cup", price: 20, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tsp", price: 5, available: true },
      { id: "cardamom", name: "Cardamom Powder", qty: "pinch", price: 45, available: false }
    ],
    steps: [
      "Dry roast sesame seeds until they pop and smell nutty; set aside.",
      "Melt jaggery with a little water, strain, and boil until it reaches a soft-ball consistency.",
      "Add roasted sesame seeds and cardamom powder to the syrup; mix well.",
      "Turn off the heat. While still warm, grease your hands with ghee.",
      "Quickly roll the mixture into small, firm balls.",
      "Store in an airtight jar once completely cooled."
    ]
  },
  {
    id: "bajji-snack",
    name: "Bajji",
    description: "Classic South Indian fritters—slices of potato, onion, or plantain dipped in spiced gram flour batter.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.88,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Snacks"],
    healthTags: ["immunity-boosting"],
    ingredients: [
      { id: "besan", name: "Gram Flour (Besan)", qty: "1 cup", price: 15, available: true },
      { id: "potato_onion", name: "Potato or Onion slices", qty: "1 cup", price: 15, available: true },
      { id: "rice_flour", name: "Rice Flour", qty: "2 tbsp", price: 5, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 30, available: false }
    ],
    steps: [
      "Whisk gram flour, rice flour, chili powder, hing, and salt with water to make a thick, smooth batter.",
      "Add a pinch of baking soda for extra fluffiness (optional).",
      "Dip vegetable slices into the batter until fully coated.",
      "Deep fry in hot oil until they turn golden and puffed.",
      "Drain excess oil and serve hot.",
      "Essential rainy-day snack with hot ginger tea."
    ]
  },
  {
    id: "murukku-snack",
    name: "Murukku",
    description: "The quintessential crunchy spiral snack of South India, made from rice and lentil flour.",
    type: "Vegetarian",
    time: 30,
    servings: 6,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.85,
    tags: ["Tamil Nadu", "South Indian", "Vegetarian", "Snacks"],
    healthTags: [],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 30, available: true },
      { id: "urad_dal_flour", name: "Urad Dal Flour", qty: "1/4 cup", price: 10, available: true },
      { id: "butter", name: "Butter", qty: "1 tbsp", price: 10, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 25, available: false }
    ],
    steps: [
      "Mix rice flour, roasted urad dal flour, butter, cumin, and salt.",
      "Add water gradually to make a smooth, non-cracked dough.",
      "Fix the star-shaped plate in the murukku press.",
      "Press the spirals onto a flat spoon or direct into hot oil in circular motions.",
      "Deep fry on medium heat until the sizzling sound stops and it turns golden.",
      "Store in airtight containers."
    ]
  },
  {
    id: "kola-urundai-chettinad",
    name: "Kola Urundai (Chettinad Meatballs)",
    description: "Crispy, deep-fried spiced meatballs made from minced mutton and a complex blend of Chettinad spices.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.86,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    healthTags: ["anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "minced_mutton", name: "Minced Mutton", qty: "250g", price: 200, available: true },
      { id: "pottukadalai", name: "Fried Gram Powder", qty: "3 tbsp", price: 10, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "2 tbsp", price: 10, available: true },
      { id: "fennel", name: "Fennel Seeds", qty: "1 tsp", price: 10, available: true },
      { id: "chili_powder", name: "Chili Powder", qty: "1 tsp", price: 70, available: false }
    ],
    steps: [
      "Grind minced mutton (without adding water) with fennel seeds, garlic, and red chili powder.",
      "Mix in finely grated coconut and fried gram powder; the gram powder acts as a binder.",
      "Roll the mixture into small, tight balls.",
      "Heat oil for deep frying.",
      "Gently fry the meatballs on low-medium heat until they are dark brown and crispy on the outside.",
      "Serve as a classic Chettinad snack or side dish."
    ]
  },
  {
    id: "parotta-salna-street",
    name: "Parotta Salna",
    description: "Flaky, layered parottas served with a thin, spicy, watery gravy—the ultimate Tamil Nadu street food experience.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 180,
    popularity: 0.95,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Street Food", "Spicy"],
    healthTags: ["immunity-boosting"],
    ingredients: [
      { id: "maida", name: "All-purpose Flour", qty: "3 cups", price: 30, available: true },
      { id: "chicken_pieces", name: "Chicken (bone-in)", qty: "250g", price: 80, available: true },
      { id: "coconut_paste", name: "Ground Coconut and Fennel", qty: "3 tbsp", price: 20, available: true },
      { id: "onion_tomato", name: "Onions and Tomatoes", qty: "2 each", price: 20, available: true },
      { id: "oil_ghee", name: "Oil and Ghee", qty: "1/2 cup", price: 30, available: false }
    ],
    steps: [
      "Prepare a layered parotta dough with maida, oil, and water; coil and roll into discs.",
      "Cook parottas on a hot tawa with oil until golden and flaky, then crush to separate layers.",
      "For the salna, sauté onions and tomatoes until mushy, then add chicken and spices.",
      "Add a thin ground coconut-spice paste and enough water to make it very watery.",
      "Simmer for 20 minutes until the chicken is tender and the fat floats on top.",
      "Pour the hot salna over shredded parotta and serve immediately."
    ]
  },
  {
    id: "chicken-chettinad-varuval-snack",
    name: "Chicken Chettinad Varuval",
    description: "A dry-roasted, intensely spiced Chettinad chicken preparation with a bold black pepper finish.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.88,
    tags: ["Tamil Nadu", "South Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    healthTags: ["cold-cough-friendly", "anemia-friendly", "immunity-boosting"],
    ingredients: [
      { id: "chicken", name: "Chicken pieces", qty: "500g", price: 150, available: true },
      { id: "chettinad_spice", name: "Roasted Spice Powder", qty: "2 tbsp", price: 20, available: true },
      { id: "small_onion", name: "Shallots", qty: "1 cup", price: 25, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "2 sprigs", price: 5, available: true },
      { id: "oil", name: "Coconut Oil", qty: "2 tbsp", price: 70, available: false }
    ],
    steps: [
      "Marinate chicken with ginger-garlic paste and salt for 20 minutes.",
      "Heat coconut oil and temper with fennel seeds and a lot of curry leaves.",
      "Sauté shallots until they turn dark brown.",
      "Add the chicken and Chettinad roasted spice powder.",
      "Cook on medium heat without adding water until the chicken is tender and the spices form a dry coating.",
      "Add extra black pepper at the end for a spicy punch."
    ]
  }
];
