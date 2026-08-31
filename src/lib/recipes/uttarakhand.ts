import { Recipe } from './types';

export const uttarakhandRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "uttarakhandi-chicken-curry",
    menuCategory: "Curries & Gravies",
    name: "Uttarakhandi Chicken Curry",
    description: "A rustic mountain-style chicken curry made with a base of roasted onions and traditional Pahari spices.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.82,
    tags: ["Uttarakhand", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 160, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2 large", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "pahari_masala", name: "Pahari Garam Masala", qty: "1 tbsp", price: 70, available: false }
    ],
    steps: [
      "Heat mustard oil until smoking; sauté whole spices and onions until golden brown.",
      "Add ginger-garlic paste and sauté until the raw smell disappears.",
      "Add chicken pieces and sear on high heat for 5-7 minutes.",
      "Stir in turmeric, chili powder, and the special Pahari spice mix.",
      "Add water, cover, and simmer until the chicken is tender and the gravy is thick.",
      "Garnish with fresh coriander."
    ]
  },
  {
    id: "mutton-curry-kumaoni",
    menuCategory: "Curries & Gravies",
    name: "Mutton Curry Kumaoni",
    description: "A slow-cooked, spicy mutton curry from the Kumaon region, featuring hand-pounded spices and a rich, dark gravy.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 420,
    popularity: 0.85,
    tags: ["Uttarakhand", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "4 tbsp", price: 30, available: true },
      { id: "onion", name: "Onions (sliced)", qty: "3 large", price: 15, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "8", price: 10, available: true },
      { id: "whole_spices", name: "Bay leaf, Cardamom, Cloves", qty: "various", price: 15, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt and turmeric for 5-6 whistles until 80% tender.",
      "Heat mustard oil and sauté whole spices and onions until deep brown.",
      "Add ginger-garlic paste and the pre-cooked mutton.",
      "Roast (bhunao) the meat in the masala for 10 minutes.",
      "Add water and simmer until the meat is falling off the bone and gravy is oily.",
      "Serve with hot rice or Mandua roti."
    ]
  },
  {
    id: "chicken-curry-garhwali",
    menuCategory: "Curries & Gravies",
    name: "Chicken Curry Garhwali",
    description: "A mild and soothing chicken curry prepared with a whisked curd base, a specialty of the Garhwal mountains.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.78,
    tags: ["Uttarakhand", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "curd", name: "Thick Curd", qty: "1 cup", price: 20, available: true },
      { id: "onion", name: "Onions (finely chopped)", qty: "2", price: 10, available: true },
      { id: "ginger", name: "Ginger paste", qty: "1 tsp", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 95, available: false }
    ],
    steps: [
      "Sauté onions and ginger-garlic paste in ghee until translucent.",
      "Add chicken and sear until the color changes to white.",
      "Whisk the curd and stir in on very low heat to prevent curdling.",
      "Add mild spices and salt; simmer for 20 minutes.",
      "The gravy should be smooth, creamy, and mildly aromatic."
    ]
  },
  {
    id: "mutton-rara-uttarakhandi",
    menuCategory: "Curries & Gravies",
    name: "Mutton Rara Uttarakhandi",
    description: "A hearty combination of mutton chunks and minced mutton cooked together in a rich mountain-spice gravy.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 410,
    popularity: 0.79,
    tags: ["Uttarakhand", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_chunks", name: "Mutton Chunks", qty: "400g", price: 280, available: true },
      { id: "mutton_mince", name: "Mutton Keema", qty: "100g", price: 70, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Cooking Oil", qty: "3 tbsp", price: 40, available: false }
    ],
    steps: [
      "Sauté mutton chunks in oil until seared; remove and set aside.",
      "In the same pan, fry onions and ginger-garlic paste until brown.",
      "Add the keema and roast on high heat for 10 minutes.",
      "Add back the chunks, spices, and a little stock.",
      "Slow cook until the meat is tender and the gravy is granular and rich."
    ]
  },
  {
    id: "fish-curry-kumaoni",
    menuCategory: "Curries & Gravies",
    name: "Fish Curry Kumaoni",
    description: "Fresh river fish cooked in a light mustard and garlic spiced gravy, reflecting the riverine culture of the Kumaon hills.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 320,
    popularity: 0.81,
    tags: ["Uttarakhand", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "river_fish", name: "Fresh River Fish", qty: "500g", price: 220, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds (ground)", qty: "1 tbsp", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "8", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 85, available: false }
    ],
    steps: [
      "Marinate fish with salt and turmeric; shallow fry and set aside.",
      "Sauté crushed garlic and green chilies in mustard oil.",
      "Add ground mustard paste and turmeric; sauté briefly.",
      "Add water and bring to a boil; gently slide in the fish.",
      "Simmer for 5 minutes until the gravy is pungent and coats the fish."
    ]
  },
  {
    id: "chicken-bhuna-uttarakhandi",
    menuCategory: "Curries & Gravies",
    name: "Chicken Bhuna Uttarakhandi",
    description: "Dry roasted chicken with a coarse masala base, heavily seasoned with mountain herbs and black pepper.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.83,
    tags: ["Uttarakhand", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken bits", qty: "500g", price: 160, available: true },
      { id: "garlic", name: "Minced Garlic", qty: "2 tbsp", price: 10, available: true },
      { id: "black_pepper", name: "Crushed Black Pepper", qty: "1 tsp", price: 5, available: true },
      { id: "onion", name: "Sliced Onions", qty: "2", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 85, available: false }
    ],
    steps: [
      "Heat ghee and sauté sliced onions until they begin to caramelize.",
      "Add chicken pieces and sear on high heat (bhunao) for 10 minutes.",
      "Stir in minced garlic, salt, and lots of black pepper.",
      "Cook uncovered, stirring frequently, until the moisture evaporates and masala is dry.",
      "Garnish with fresh coriander."
    ]
  },
  {
    id: "egg-curry-uttarakhandi",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry Uttarakhandi Style",
    description: "Boiled eggs simmered in a simple mountain-style onion-tomato gravy with a distinct mustard oil flavor.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.74,
    tags: ["Uttarakhand", "North Indian", "Non-Vegetarian", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato (puree)", qty: "1/2 cup", price: 10, available: true },
      { id: "ginger", name: "Ginger paste", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 60, available: false }
    ],
    steps: [
      "Prick boiled eggs and lightly sear in oil; set aside.",
      "Sauté onions and ginger paste in mustard oil until golden.",
      "Add tomato puree and spices; cook until oil separates.",
      "Add water to make a thin gravy and bring to a boil.",
      "Add eggs and simmer for 5 minutes."
    ]
  },
  {
    id: "mutton-kaleji-uttarakhandi",
    menuCategory: "Curries & Gravies",
    name: "Mutton Kaleji Uttarakhandi",
    description: "Spiced mutton liver fry, heavily seasoned with garlic and local mountain spices, a high-protein Pahari delicacy.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.71,
    tags: ["Uttarakhand", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_liver", name: "Mutton Liver (Kaleji)", qty: "500g", price: 250, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "black_pepper", name: "Black Pepper", qty: "1 tsp", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Sauté onions and ginger-garlic paste in ghee until soft.",
      "Add liver pieces and sear on high heat.",
      "Add spices and salt; roast for 10 minutes until tender.",
      "Add black pepper at the very end to keep it aromatic.",
      "Serve as a spicy side with Mandua roti."
    ]
  },
  {
    id: "chicken-korma-garhwali",
    menuCategory: "Curries & Gravies",
    name: "Chicken Korma Garhwali Style",
    description: "A mild and creamy chicken korma with mountain-fresh ingredients and a smooth yogurt base.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.68,
    tags: ["Uttarakhand", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "yogurt", name: "Whisked Yogurt", qty: "1 cup", price: 15, available: true },
      { id: "cashew_paste", name: "Cashew Paste", qty: "2 tbsp", price: 30, available: true },
      { id: "cardamom", name: "Cardamom Powder", qty: "pinch", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 100, available: false }
    ],
    steps: [
      "Sauté chicken pieces in ghee until seared.",
      "Stir in cashew paste and spices.",
      "Add whisked yogurt and simmer on low heat.",
      "Cook until chicken is tender and the gravy is silky.",
      "Garnish with cardamom powder."
    ]
  },
  {
    id: "mutton-mandua-combo",
    menuCategory: "Breads",
    name: "Mutton Curry with Mandua Roti",
    description: "Rustic mutton curry paired with traditional finger millet flatbread (Mandua), the quintessential Pahari farmer's meal.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.78,
    tags: ["Uttarakhand", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 350, available: true },
      { id: "mandua_flour", name: "Finger Millet Flour", qty: "2 cups", price: 20, available: true },
      { id: "onion", name: "Onion", qty: "2", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 15, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: false }
    ],
    steps: [
      "Prepare a spicy mutton curry with onions and mustard oil.",
      "Knead Mandua flour with warm water into a soft dough.",
      "Pat into thick flatbreads and cook on a tawa until golden-brown.",
      "Apply ghee on the hot roti.",
      "Serve the warm roti with the rich mutton curry."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "bhatt-ki-churkani",
    menuCategory: "Curries & Gravies",
    name: "Bhatt Ki Churkani",
    description: "A signature Kumaoni dish made with black soybeans cooked in a thin, tangy gravy thickened with wheat flour.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.92,
    tags: ["Uttarakhand", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "black_soybean", name: "Bhatt (Black Soybean)", qty: "1 cup", price: 30, available: true },
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 tbsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "jambu", name: "Jambu (Local Herb)", qty: "pinch", price: 20, available: false }
    ],
    steps: [
      "Wash and soak black soybeans for an hour; drain.",
      "Heat oil and fry the beans until they pop; remove and set aside.",
      "In the same oil, sauté wheat flour until it turns dark brown.",
      "Add ginger-garlic paste and spices; stir well.",
      "Add the fried beans and 3 cups of water.",
      "Simmer for 20 minutes until the beans are cooked and the gravy is thick and dark."
    ]
  },
  {
    id: "gahat-ki-dal",
    menuCategory: "Curries & Gravies",
    name: "Gahat Ki Dal",
    description: "A nutritious horse gram lentil curry, known for its warming properties and health benefits in the hills.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.88,
    tags: ["Uttarakhand", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "gahat_dal", name: "Horse Gram (Gahat)", qty: "1.5 cups", price: 25, available: true },
      { id: "ginger", name: "Ginger (grated)", qty: "1 tsp", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 5, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 30, available: false }
    ],
    steps: [
      "Pressure cook the gahat dal with ginger, salt, and turmeric for 5-6 whistles until soft.",
      "Heat ghee/oil and temper with mustard seeds and crushed garlic.",
      "Add dried red chilies and a pinch of hing.",
      "Pour the tempering over the dal.",
      "Simmer for 5 minutes and serve with steamed rice."
    ]
  },
  {
    id: "aloo-ke-gutke",
    menuCategory: "Dry & Stir-Fried",
    name: "Aloo Ke Gutke",
    description: "Classic Pahari dry potato stir-fry with cumin and red chilies, a popular travel snack across Uttarakhand.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.94,
    tags: ["Uttarakhand", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "potato", name: "Boiled Potatoes", qty: "4 large", price: 15, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "red_chili", name: "Dry Red Chilies", qty: "3", price: 5, available: true },
      { id: "coriander", name: "Fresh Coriander", qty: "handful", price: 25, available: false }
    ],
    steps: [
      "Peel and cube the boiled potatoes.",
      "Heat mustard oil until smoking; temper with cumin seeds and whole red chilies.",
      "Add turmeric and salt.",
      "Add the potato cubes and stir-fry on high heat for 5 minutes until crispy on the edges.",
      "Garnish with lots of fresh coriander and serve warm."
    ]
  },
  {
    id: "kaphuli-spinach",
    menuCategory: "Curries & Gravies",
    name: "Kaphuli",
    description: "A vibrant green spinach and yogurt-based curry thickened with rice flour, a Garhwali hallmark.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.81,
    tags: ["Uttarakhand", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "spinach", name: "Spinach (chopped)", qty: "2 bunches", price: 20, available: true },
      { id: "curd", name: "Sour Curd", qty: "1 cup", price: 15, available: true },
      { id: "rice_flour", name: "Rice Flour", qty: "2 tbsp", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Boil spinach with green chilies and salt; mash or blend into a coarse paste.",
      "Mix rice flour into the curd and whisk well.",
      "Heat oil and sauté ginger paste.",
      "Add the spinach paste and the curd-flour mixture.",
      "Simmer for 10 minutes until the gravy is thick and vibrant green."
    ]
  },
  {
    id: "chainsoo-dal",
    menuCategory: "Beverages",
    name: "Chainsoo",
    description: "Roasted black gram lentil curry, known for its smoky aroma and high iron content.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.84,
    tags: ["Uttarakhand", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "black_gram", name: "Whole Black Gram (Urad Dal)", qty: "1.5 cups", price: 30, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "8", price: 5, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 35, available: false }
    ],
    steps: [
      "Dry roast the black gram lentils until fragrant and grind into a coarse powder.",
      "Heat mustard oil; sauté garlic and ginger.",
      "Add the ground dal powder and sauté for 2 minutes.",
      "Add water, salt, and turmeric.",
      "Simmer for 20 minutes until the dal is cooked and the gravy is thick."
    ]
  },
  {
    id: "jhangore-kheer-combo",
    menuCategory: "Desserts & Sweets",
    name: "Jhangore Ki Kheer Sabzi Combo",
    description: "Barnyard millet pudding paired with a light vegetable stir-fry, a traditional high-altitude meal.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.76,
    tags: ["Uttarakhand", "North Indian", "Vegetarian", "Healthy", "Dessert"],
    ingredients: [
      { id: "jhangora", name: "Barnyard Millet (Jhangora)", qty: "1 cup", price: 20, available: true },
      { id: "milk", name: "Milk", qty: "1L", price: 40, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 cup", price: 10, available: true },
      { id: "mixed_veg", name: "Seasonal Mixed Veg", qty: "1 cup", price: 10, available: true },
      { id: "nuts", name: "Nuts", qty: "handful", price: 10, available: false }
    ],
    steps: [
      "Wash jhangora and boil in milk until it softens and milk reduces.",
      "Add sugar and simmer until it reaches a creamy pudding consistency.",
      "Prepare a light dry stir-fry of seasonal vegetables with simple spices.",
      "Serve the warm kheer with the savory vegetable side."
    ]
  },
  {
    id: "rus-kumaoni",
    menuCategory: "Curries & Gravies",
    name: "Rus (Kumaoni Toor Dal)",
    description: "A thin and spicy pigeon pea dal from the Kumaon region, flavored with local mountain herbs.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.81,
    tags: ["Uttarakhand", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 25, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "1 sprig", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 25, available: false }
    ],
    steps: [
      "Pressure cook dal with turmeric and salt until mushy.",
      "Whisk well to a thin consistency.",
      "Heat oil and temper with mustard seeds and curry leaves.",
      "Pour the tempering into the dal and simmer for 5 minutes."
    ]
  },
  {
    id: "thhatwani",
    menuCategory: "Curries & Gravies",
    name: "Thhatwani",
    description: "A unique black gram paste cooked with buttermilk, providing a tangy and protein-rich mountain meal.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.72,
    tags: ["Uttarakhand", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "black_gram_paste", name: "Black Gram Paste", qty: "1 cup", price: 15, available: true },
      { id: "buttermilk", name: "Buttermilk", qty: "2 cups", price: 10, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 40, available: false }
    ],
    steps: [
      "Grind soaked black gram into a smooth paste.",
      "Whisk with buttermilk and a little salt.",
      "Heat oil and temper with mustard seeds.",
      "Pour the mixture and simmer on low heat, stirring constantly until it thickens."
    ]
  },
  {
    id: "mandua-roti-sabzi",
    menuCategory: "Breads",
    name: "Mandua Ki Roti with Sabzi",
    description: "Finger millet flatbread (Mandua) served with a mixed vegetable curry, a highly nutritious high-altitude staple.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.90,
    tags: ["Uttarakhand", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mandua_flour", name: "Finger Millet Flour", qty: "2 cups", price: 20, available: true },
      { id: "mixed_veg", name: "Potato, Carrot, Beans", qty: "2 cups", price: 30, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "jaggery", name: "Jaggery (optional)", qty: "1 tsp", price: 10, available: false }
    ],
    steps: [
      "Knead Mandua flour with warm water into a soft dough.",
      "Pat into flatbreads and cook on a tawa until golden-brown.",
      "Prepare a light vegetable curry with simple spices.",
      "Serve the hot roti with a dollop of ghee and the vegetable curry."
    ]
  },
  {
    id: "palak-ka-kapa",
    menuCategory: "Curries & Gravies",
    name: "Palak Ka Kapa",
    description: "Spinach cooked in a curd and gram flour based gravy, a soothing and simple Kumaoni dish.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.70,
    tags: ["Uttarakhand", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "spinach", name: "Fresh Spinach", qty: "2 bunches", price: 20, available: true },
      { id: "curd", name: "Yogurt", qty: "1 cup", price: 15, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Blanch spinach and chop finely.",
      "Mix curd and besan into a smooth slurry.",
      "Sauté spinach with turmeric and salt.",
      "Stir in the curd-besan mixture and simmer for 10 minutes."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "bal-mithai-snack",
    menuCategory: "Desserts & Sweets",
    name: "Bal Mithai",
    description: "The most famous sweet snack from Almora—roasted khoya fudge coated with small sugar balls.",
    type: "Vegetarian",
    time: 35,
    servings: 6,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.95,
    tags: ["Uttarakhand", "North Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "khoya", name: "Khoya (Mawa)", qty: "500g", price: 80, available: true },
      { id: "sugar", name: "Sugar", qty: "1 cup", price: 10, available: true },
      { id: "sugar_balls", name: "Sugar Balls (Nonpareils)", qty: "1/4 cup", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 0, available: true }
    ],
    steps: [
      "Roast khoya in ghee on low heat until it turns very dark brown (almost chocolate-like).",
      "Stir in sugar and cardamom powder; cook until it leaves the sides.",
      "Set in a tray and let it cool slightly.",
      "Cut into rectangles and roll each piece in sugar balls while still slightly warm.",
      "Store in a dry place."
    ]
  },
  {
    id: "singal-snack",
    menuCategory: "Snacks & Street Food",
    name: "Singal",
    description: "Traditional deep-fried sweet rice flour rings, a festive specialty of the Kumaon region.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.81,
    tags: ["Uttarakhand", "North Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "1 cup", price: 10, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 cup", price: 5, available: true },
      { id: "banana", name: "Mashed Banana", qty: "1", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 45, available: false }
    ],
    steps: [
      "Mix rice flour, sugar, and mashed banana into a thick batter.",
      "Let the batter rest for 30 minutes.",
      "Pipe circular rings (like jalebi) into hot oil.",
      "Deep fry until golden brown and crispy."
    ]
  },
  {
    id: "arsa-snack",
    menuCategory: "Desserts & Sweets",
    name: "Arsa",
    description: "Sweet fried cookies made from rice flour and jaggery, a must-have for Uttarakhand weddings and festivals.",
    type: "Vegetarian",
    time: 35,
    servings: 6,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.90,
    tags: ["Uttarakhand", "North Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 20, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1 cup", price: 15, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 40, available: false }
    ],
    steps: [
      "Prepare a jaggery syrup of one-string consistency.",
      "Slowly mix in rice flour until it forms a soft dough.",
      "Take small portions and flatten them into small cookies.",
      "Deep fry on low heat until they turn dark brown.",
      "Let cool before serving."
    ]
  },
  {
    id: "gulgula-snack",
    menuCategory: "Snacks & Street Food",
    name: "Gulgula",
    description: "Sweet and spongy deep-fried wheat flour dumplings, a quick traditional snack for rainy days.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.82,
    tags: ["Uttarakhand", "North Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "1 cup", price: 10, available: true },
      { id: "sugar", name: "Sugar or Jaggery", qty: "1/2 cup", price: 10, available: true },
      { id: "saunf", name: "Fennel Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 35, available: false }
    ],
    steps: [
      "Make a thick batter with flour, sugar, and fennel seeds.",
      "Whisk well to ensure the dumplings are light.",
      "Drop small spoonfuls of the batter into hot oil.",
      "Deep fry until golden brown."
    ]
  },
  {
    id: "chicken-pakora-uttarakhandi",
    menuCategory: "Snacks & Street Food",
    name: "Chicken Pakora Uttarakhandi",
    description: "Mountain-style crispy fried chicken bites coated in a spiced gram flour batter with local herbs.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.84,
    tags: ["Uttarakhand", "North Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "chicken_bits", name: "Boneless Chicken", qty: "300g", price: 150, available: true },
      { id: "besan", name: "Gram Flour", qty: "1/2 cup", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 60, available: false }
    ],
    steps: [
      "Marinate chicken with ginger-garlic paste and salt.",
      "Make a thick batter of besan and mountain spices.",
      "Coat chicken bits and deep fry until very crispy.",
      "Serve as a spicy appetizer."
    ]
  }
];
