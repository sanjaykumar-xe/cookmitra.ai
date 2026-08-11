import { Recipe } from './types';

export const chhattisgarhRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (15) ---
  {
    id: "chhattisgarhi-chicken-curry",
    menuCategory: "Curries & Gravies",
    name: "Chhattisgarhi Chicken Curry",
    description: "A rustic, homestyle chicken curry cooked with local spices and an onion-tomato base, typical of the plains of Chhattisgarh.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.82,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "onion", name: "Onions", qty: "3 large", price: 15, available: true },
      { id: "tomato", name: "Tomatoes", qty: "2", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Heat mustard oil in a heavy pot until smoking.",
      "Sauté chopped onions until deep golden brown.",
      "Add ginger-garlic paste and sauté until the raw smell disappears.",
      "Add chicken and fry on high heat for 5-7 minutes.",
      "Stir in chopped tomatoes, turmeric, chili powder, and salt.",
      "Cover and simmer until chicken is tender and oil separates."
    ]
  },
  {
    id: "mutton-curry-chhattisgarhi",
    menuCategory: "Curries & Gravies",
    name: "Mutton Curry Chhattisgarhi Style",
    description: "Slow-cooked mutton with a blend of ground spices, following the traditional village preparation methods of Central India.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 420,
    popularity: 0.85,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "onion", name: "Onions", qty: "2 large", price: 10, available: true },
      { id: "whole_spices", name: "Whole Garam Masala", qty: "various", price: 15, available: true },
      { id: "coriander_powder", name: "Coriander Powder", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "4 tbsp", price: 40, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt and turmeric for 5-6 whistles until 80% tender.",
      "Heat oil and temper with whole spices like bay leaf, cloves, and cinnamon.",
      "Sauté onions until brown; add ginger-garlic paste and sauté.",
      "Add pre-cooked mutton and roast in the masala (bhunao) for 10 minutes.",
      "Add chili powder, coriander powder, and a little stock.",
      "Simmer on low heat until the gravy is thick and flavorful."
    ]
  },
  {
    id: "bhajir-machhi",
    menuCategory: "Dry & Stir-Fried",
    name: "Bhajir Machhi",
    description: "A unique Chhattisgarhi river fish curry cooked with seasonal leafy greens, providing a distinct earthy flavor.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.78,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "river_fish", name: "Freshwater Fish", qty: "500g", price: 200, available: true },
      { id: "local_greens", name: "Spinach or Local Greens", qty: "1 bunch", price: 15, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 70, available: false }
    ],
    steps: [
      "Lightly fry marinated fish and set aside.",
      "Sauté garlic and green chilies in mustard oil.",
      "Add finely chopped greens and cook until they wilt and release water.",
      "Add turmeric, chili powder, and salt.",
      "Add a cup of water and bring to a boil; gently add the fried fish.",
      "Simmer for 5 minutes until the greens and fish integrate into a thick curry."
    ]
  },
  {
    id: "chicken-bafauri-curry",
    menuCategory: "Curries & Gravies",
    name: "Chicken Bafauri Style Curry",
    description: "A variation of the traditional Bafauri, using steamed chicken and lentil dumplings in a light gravy.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.74,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken_mince", name: "Minced Chicken", qty: "300g", price: 120, available: true },
      { id: "chana_dal", name: "Chana Dal (soaked)", qty: "1/2 cup", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "2", price: 10, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 115, available: false }
    ],
    steps: [
      "Grind soaked chana dal into a coarse paste; mix with minced chicken and ginger.",
      "Form small balls and steam them for 15 minutes until firm (bafauri).",
      "Sauté onions and spices in oil to make a light gravy.",
      "Add water and bring to a simmer.",
      "Add the steamed chicken bafauris and cook for 5 minutes.",
      "Garnish with coriander and serve with rice."
    ]
  },
  {
    id: "mutton-kaliya-cg",
    menuCategory: "Curries & Gravies",
    name: "Mutton Kaliya",
    description: "A thick, heavily spiced mutton curry from Central India, featuring a rich blend of roasted coriander and dry red chilies.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.79,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 350, available: true },
      { id: "coriander_seeds", name: "Coriander Seeds", qty: "2 tbsp", price: 5, available: true },
      { id: "dry_chili", name: "Whole Red Chilies", qty: "6", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: false }
    ],
    steps: [
      "Dry roast coriander seeds and red chilies; grind to a coarse powder.",
      "Pressure cook mutton with salt until tender.",
      "Heat mustard oil; sauté onions and ginger-garlic paste until brown.",
      "Add the roasted spice powder and sauté for 2 minutes.",
      "Add cooked mutton and a little stock; simmer until the gravy is thick and clings to the meat."
    ]
  },
  {
    id: "machli-bhuja",
    menuCategory: "Protein Specialties",
    name: "Machli Bhuja",
    description: "A dry-roasted spicy fish fry, marinated with local Chhattisgarhi spices and fried until crispy.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.83,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Freshwater Fish slices", qty: "500g", price: 200, available: true },
      { id: "chili_powder", name: "Spicy Chili Powder", qty: "1 tbsp", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "rice_flour", name: "Rice Flour", qty: "1 tbsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1/4 cup", price: 60, available: false }
    ],
    steps: [
      "Marinate fish with ginger-garlic, salt, chili powder, and turmeric.",
      "Dust with a little rice flour for extra crunch.",
      "Heat mustard oil in a flat pan until smoking.",
      "Shallow fry fish slices until golden brown and crispy on both sides.",
      "Serve hot as an appetizer or side."
    ]
  },
  {
    id: "chicken-kaliya-cg",
    menuCategory: "Curries & Gravies",
    name: "Chicken Kaliya",
    description: "A thick and potent chicken curry cooked with a special spice blend, a favorite for festive dinners in Chhattisgarh.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.76,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "garlic", name: "Garlic", qty: "6 cloves", price: 5, available: true },
      { id: "cloves", name: "Cloves and Cinnamon", qty: "small amount", price: 10, available: true },
      { id: "oil", name: "Cooking Oil", qty: "3 tbsp", price: 85, available: false }
    ],
    steps: [
      "Grind onions, garlic, and whole spices into a smooth paste.",
      "Sauté the paste in oil until the raw smell disappears and oil separates.",
      "Add chicken pieces and salt; sear on high heat.",
      "Add turmeric and chili powder.",
      "Simmer with minimal water until chicken is cooked and gravy is thick."
    ]
  },
  {
    id: "egg-curry-chhattisgarhi",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry Chhattisgarhi Style",
    description: "Hard-boiled eggs simmered in a tangy and spicy onion-tomato gravy, a common morning meal in Central India.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.81,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 20, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato (chopped)", qty: "2", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 65, available: false }
    ],
    steps: [
      "Prick boiled eggs and sauté them in oil with a pinch of turmeric; set aside.",
      "Sauté onions until golden brown; add ginger-garlic paste.",
      "Add tomatoes and spices; cook until soft.",
      "Add a cup of water and simmer to form a gravy.",
      "Add the eggs and cook for 5 minutes until they absorb the flavor."
    ]
  },
  {
    id: "kadai-chicken-chhattisgarhi",
    menuCategory: "Breads",
    name: "Kadai Chicken Chhattisgarhi",
    description: "Chicken pieces stir-fried with capsicum and a coarse blend of spices in an iron wok (kadai).",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.77,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken bits", qty: "500g", price: 160, available: true },
      { id: "capsicum", name: "Capsicum (chopped)", qty: "1", price: 15, available: true },
      { id: "onion", name: "Onion (large chunks)", qty: "1", price: 5, available: true },
      { id: "kadai_masala", name: "Kadai Masala", qty: "1 tbsp", price: 10, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 90, available: false }
    ],
    steps: [
      "Sauté chicken on high heat until seared and set aside.",
      "In the same pan, sauté onion chunks and capsicum for 2 minutes.",
      "Add ginger paste and kadai masala.",
      "Add chicken back to the pan and toss on high heat.",
      "Sauté until chicken is tender and coated with spices.",
      "Garnish with lots of coriander."
    ]
  },
  {
    id: "mutton-bhutwa-cg",
    menuCategory: "Protein Specialties",
    name: "Mutton Bhutwa",
    description: "A dry, spicy mutton stir-fry from rural Chhattisgarh, traditionally served as a rustic accompaniment.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 380,
    popularity: 0.84,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton cubes", qty: "500g", price: 350, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "dry_red_chili", name: "Dried Red Chilies", qty: "6", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt and ginger-garlic paste until tender.",
      "Heat mustard oil in a flat pan.",
      "Add whole red chilies and sauté.",
      "Add pre-cooked mutton and roast on high heat.",
      "Sauté until the liquid evaporates and meat is dark and crispy.",
      "Finish with black pepper."
    ]
  },
  {
    id: "chicken-bhutwa-cg",
    menuCategory: "Protein Specialties",
    name: "Chicken Bhutwa",
    description: "Dry spiced chicken stir-fry, following the traditional Bhutwa style of intense roasting.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.80,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (boneless)", qty: "500g", price: 180, available: true },
      { id: "onion", name: "Onion (thinly sliced)", qty: "1", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "spices", name: "Bhutwa Spice Mix", qty: "1 tbsp", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 60, available: false }
    ],
    steps: [
      "Sauté sliced onions and green chilies in ghee until brown.",
      "Add chicken pieces and sear on high heat.",
      "Stir in the spice mix and salt.",
      "Cover and cook until tender.",
      "Uncover and roast until the mixture is dry and fragrant."
    ]
  },
  {
    id: "machhi-jhor-cg",
    menuCategory: "Curries & Gravies",
    name: "Machhi Jhor",
    description: "A thin and spicy freshwater fish soup-curry, widely consumed in the river-rich regions of Chhattisgarh.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 290,
    popularity: 0.76,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Freshwater Fish", qty: "500g", price: 200, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric", qty: "1 tsp", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "4", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 75, available: false }
    ],
    steps: [
      "Sauté marinated fish briefly and set aside.",
      "Temper mustard oil with mustard seeds and crushed garlic.",
      "Add turmeric and chili powder.",
      "Pour in 3 cups of water and bring to a boil.",
      "Add fish and simmer for 8 minutes.",
      "The result should be a thin, pungent broth."
    ]
  },
  {
    id: "desi-murga-curry-cg",
    menuCategory: "Curries & Gravies",
    name: "Desi Murga Curry",
    description: "Tough but highly flavorful country chicken curry slow-cooked with mustard oil and rural spices.",
    type: "Non-Vegetarian",
    time: 55,
    servings: 4,
    difficulty: "Hard",
    cost: 300,
    popularity: 0.81,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "country_chicken", name: "Desi Murga", qty: "500g", price: 250, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 15, available: true },
      { id: "whole_spices", name: "Bay leaf, Cardamom", qty: "as needed", price: 15, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 10, available: false }
    ],
    steps: [
      "Pressure cook country chicken with minimal water for 7-8 whistles until tender.",
      "Heat mustard oil to smoking point; sauté whole spices and onions.",
      "Add ginger-garlic paste and spices; cook into a masala.",
      "Add cooked chicken and stock.",
      "Simmer for 15 minutes until gravy is rich.",
      "Finish with fresh coriander."
    ]
  },
  {
    id: "mutton-kohda-curry",
    menuCategory: "Curries & Gravies",
    name: "Mutton Curry with Kohda",
    description: "A rustic and flavorful mutton curry cooked with sweet pumpkin chunks (Kohda), a unique regional combination.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 390,
    popularity: 0.72,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 350, available: true },
      { id: "pumpkin", name: "Pumpkin (Kohda) chunks", qty: "1 cup", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "spices", name: "Meat Spices", qty: "2 tbsp", price: 15, available: true },
      { id: "garlic", name: "Garlic", qty: "4 cloves", price: 10, available: false }
    ],
    steps: [
      "Pressure cook mutton until almost tender.",
      "Sauté onions and garlic in oil; add mutton and spices.",
      "Add pumpkin chunks and sauté for 5 minutes.",
      "Pour in stock and simmer until pumpkin is soft and partially mashed into the gravy.",
      "The pumpkin adds a subtle sweetness to the spicy meat."
    ]
  },
  {
    id: "anda-bhutwa-cg",
    menuCategory: "Protein Specialties",
    name: "Anda Bhutwa",
    description: "A dry and spicy egg stir-fry with onions and green chilies, perfect for a quick breakfast or snack.",
    type: "Non-Vegetarian",
    time: 20,
    servings: 3,
    difficulty: "Easy",
    cost: 100,
    popularity: 0.78,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Hard Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "onion", name: "Onion (finely chopped)", qty: "1", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "pepper", name: "Black Pepper", qty: "1/2 tsp", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 55, available: false }
    ],
    steps: [
      "Cut boiled eggs into quarters.",
      "Sauté onions and green chilies in oil until brown.",
      "Add egg pieces and salt.",
      "Stir-fry on high heat for 3-4 minutes to brown the edges.",
      "Sprinkle black pepper and serve hot."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "chana-bhaji-chhattisgarhi",
    menuCategory: "Dry & Stir-Fried",
    name: "Chana Bhaji Chhattisgarhi",
    description: "A nutrient-rich curry made from fresh chickpea greens, a winter specialty in Chhattisgarhi homes.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.88,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "chana_greens", name: "Chickpea Greens (Chana Bhaji)", qty: "2 bunches", price: 20, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 5, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 15, available: false }
    ],
    steps: [
      "Wash and finely chop the chickpea greens.",
      "Heat oil, temper with mustard seeds and green chilies.",
      "Add crushed garlic and sauté until fragrant.",
      "Add the chopped greens and salt.",
      "Stir-fry on medium heat until tender and water evaporates."
    ]
  },
  {
    id: "bafauri-veg-cg",
    menuCategory: "Curries & Gravies",
    name: "Bafauri",
    description: "Traditional steamed chana dal dumplings, a light and oil-free vegetarian snack or side dish.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.82,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "chana_dal", name: "Chana Dal (soaked)", qty: "1.5 cups", price: 20, available: true },
      { id: "onion", name: "Finely Chopped Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger (grated)", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 35, available: false }
    ],
    steps: [
      "Grind soaked chana dal into a coarse paste with ginger and chilies.",
      "Add chopped onions, cumin, and salt.",
      "Form small patties and steam them for 20 minutes.",
      "Serve warm with a spicy chutney."
    ]
  },
  {
    id: "chousela-roti-sabzi",
    menuCategory: "Breakfast & Tiffin",
    name: "Chousela Roti with Sabzi",
    description: "Deep-fried rice flour flatbread (Chousela) served with a simple mixed vegetable curry.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.80,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian", "Breakfast"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 20, available: true },
      { id: "mixed_veg", name: "Mixed Vegetables", qty: "2 cups", price: 30, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 20, available: false }
    ],
    steps: [
      "Knead rice flour with warm water and salt into a soft dough.",
      "Flatten into discs and deep fry until golden (Chousela).",
      "Prepare a light vegetable curry by sautéing vegetables with basic spices.",
      "Serve the hot Chousela with the vegetable curry."
    ]
  },
  {
    id: "aamat-curry",
    menuCategory: "Curries & Gravies",
    name: "Aamat",
    description: "A signature Chhattisgarhi tangy curry made with bamboo shoots and mixed vegetables, traditionally prepared in bamboo containers.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.74,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "bamboo_shoot", name: "Bamboo Shoots", qty: "1/2 cup", price: 30, available: true },
      { id: "mixed_veg", name: "Yam, Brinjal, Beans", qty: "2 cups", price: 30, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "dry_chili", name: "Dry Red Chilies", qty: "2", price: 15, available: false }
    ],
    steps: [
      "Clean and chop bamboo shoots; boil them to remove bitterness.",
      "Sauté vegetables and bamboo shoots in mustard oil.",
      "Add turmeric, chili powder, and salt.",
      "Add water and simmer until vegetables are soft.",
      "The result is a uniquely tangy and earthy stew."
    ]
  },
  {
    id: "muthiya-bhaji",
    menuCategory: "Dry & Stir-Fried",
    name: "Muthiya Bhaji",
    description: "Steamed rice flour dumplings (Muthiya) cooked in a light green leafy curry.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.72,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "1 cup", price: 15, available: true },
      { id: "leafy_greens", name: "Spinach or Local Greens", qty: "1 bunch", price: 15, available: true },
      { id: "ginger", name: "Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1/2 tsp", price: 35, available: false }
    ],
    steps: [
      "Knead rice flour with a little salt into Muthiyas (hand-shaped cylinders).",
      "Steam Muthiyas for 15 minutes.",
      "Sauté finely chopped greens with ginger and green chilies.",
      "Add water and simmer to form a thin base.",
      "Add steamed Muthiyas and simmer for 5 minutes."
    ]
  },
  {
    id: "dubki-kadhi-cg",
    menuCategory: "Curries & Gravies",
    name: "Dubki Kadhi",
    description: "Gram flour dumplings dropped directly into a tangy yogurt gravy, an Odia-Chhattisgarhi staple.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.76,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "besan", name: "Besan (Gram Flour)", qty: "1 cup", price: 15, available: true },
      { id: "yogurt", name: "Thick Curd", qty: "1 cup", price: 15, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 40, available: false }
    ],
    steps: [
      "Make a smooth batter of besan, curd, and water for the gravy.",
      "Simmer this mixture on low heat.",
      "Prepare another thick besan batter and drop small lumps directly into the boiling gravy.",
      "Cover and simmer until the lumps (dubkis) float and are cooked.",
      "Temper with mustard and red chilies."
    ]
  },
  {
    id: "chhattisgarhi-mixed-greens",
    menuCategory: "Dry & Stir-Fried",
    name: "Bhaji Chhattisgarhi (Mixed Greens)",
    description: "A combination of local wild greens stir-fried with simple tempering, highlighting the region's produce.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.68,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mixed_greens", name: "Mixed Local Greens", qty: "3 bunches", price: 20, available: true },
      { id: "garlic", name: "Garlic", qty: "6 cloves", price: 5, available: true },
      { id: "mustard", name: "Mustard Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "dry_chili", name: "Dried Red Chilies", qty: "3", price: 20, available: false }
    ],
    steps: [
      "Wash and shred the greens finely.",
      "Heat mustard oil and temper with red chilies.",
      "Add crushed garlic and sauté.",
      "Add greens and stir-fry on high heat.",
      "Stir until moisture is gone and greens are tender."
    ]
  },
  {
    id: "farra-rolls",
    menuCategory: "Curries & Gravies",
    name: "Farra",
    description: "Steamed rice flour rolls served with a spicy sesame-mustard tempering, a favorite Chhattisgarhi breakfast.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.90,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian", "Breakfast"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 20, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "sesame", name: "Sesame Seeds", qty: "2 tsp", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "1 tbsp", price: 30, available: false }
    ],
    steps: [
      "Knead rice flour with salt and warm water into a soft dough.",
      "Roll into thin logs (farra).",
      "Steam farra for 15 minutes.",
      "Heat oil, temper with mustard and sesame seeds.",
      "Add steamed farra and sauté until slightly crispy on the outside.",
      "Serve with green chutney."
    ]
  },
  {
    id: "tilgur-chana",
    menuCategory: "Curries & Gravies",
    name: "Tilgur Chana",
    description: "A sweet and savory festive dish made with jaggery, sesame seeds, and chickpeas.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.70,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian"],
    ingredients: [
      { id: "chana", name: "Boiled Chickpeas", qty: "1 cup", price: 15, available: true },
      { id: "jaggery", name: "Jaggery (melted)", qty: "1/2 cup", price: 10, available: true },
      { id: "sesame", name: "Roasted Sesame", qty: "1 tbsp", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 25, available: false }
    ],
    steps: [
      "Melt jaggery with a little ghee in a pan.",
      "Add roasted sesame seeds.",
      "Stir in boiled chickpeas.",
      "Cook for 5 minutes until jaggery coats the chickpeas.",
      "Cool and serve as a festive side."
    ]
  },
  {
    id: "kusli-sabzi-cg",
    menuCategory: "Dry & Stir-Fried",
    name: "Kusli Sabzi",
    description: "A traditional curry made with sun-dried lentil dumplings (Kusli), typical of the rural Chhattisgarh kitchen.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.65,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian"],
    ingredients: [
      { id: "kusli", name: "Dried Lentil Dumplings", qty: "1 cup", price: 20, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "dry_mango", name: "Amchur", qty: "1 tsp", price: 40, available: false }
    ],
    steps: [
      "Lightly fry the dried kusli dumplings and set aside.",
      "Sauté onions and spices to make a gravy base.",
      "Add water and amchur for tanginess.",
      "Add fried kuslis and simmer for 10 minutes until they soften.",
      "Serve with steamed rice."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "chila-chhattisgarhi",
    menuCategory: "Breakfast & Tiffin",
    name: "Chila",
    description: "Savory and crispy rice pancakes, a daily breakfast staple in Chhattisgarh.",
    type: "Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.88,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "rice_batter", name: "Rice Flour Batter", qty: "2 cups", price: 20, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 5, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil for pan", qty: "as needed", price: 25, available: false }
    ],
    steps: [
      "Make a smooth batter of rice flour, water, and salt.",
      "Add cumin and chopped green chilies.",
      "Spread a ladle of batter on a hot greased tawa.",
      "Cook until crispy on both sides.",
      "Serve hot with tomato chutney."
    ]
  },
  {
    id: "aamat-bhajiya",
    menuCategory: "Snacks & Street Food",
    name: "Aamat Bhajiya",
    description: "Crispy gram flour vegetable fritters spiced with local seasonings.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.79,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "besan", name: "Gram Flour", qty: "1 cup", price: 15, available: true },
      { id: "mixed_veg", name: "Mixed Chopped Veg", qty: "1 cup", price: 15, available: true },
      { id: "chili_powder", name: "Chili Powder", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 25, available: false }
    ],
    steps: [
      "Mix besan, chopped vegetables, and spices into a thick paste.",
      "Drop small spoonfuls into hot oil.",
      "Deep fry until golden brown and crispy.",
      "Drain and serve hot."
    ]
  },
  {
    id: "khurma-chhattisgarhi",
    menuCategory: "Snacks & Street Food",
    name: "Khurma Chhattisgarhi",
    description: "Sweet and crunchy deep-fried wheat flour sticks, a popular festive snack.",
    type: "Vegetarian",
    time: 30,
    servings: 6,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.81,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "sugar", name: "Sugar Syrup", qty: "1 cup", price: 15, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 15, available: true },
      { id: "oil", name: "Oil for frying", qty: "1 cup", price: 25, available: false }
    ],
    steps: [
      "Knead wheat flour with ghee and sugar syrup into a stiff dough.",
      "Roll and cut into thin sticks.",
      "Deep fry on medium heat until golden and crispy.",
      "Cool completely to harden."
    ]
  },
  {
    id: "thethri-cg",
    menuCategory: "Snacks & Street Food",
    name: "Thethri",
    description: "Iconic Chhattisgarhi crunchy spiced fried flour twists, mandatory for regional festivals.",
    type: "Vegetarian",
    time: 30,
    servings: 6,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.85,
    tags: ["Chhattisgarh", "Central Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "besan", name: "Besan (Gram Flour)", qty: "2 cups", price: 30, available: true },
      { id: "carom", name: "Ajwain", qty: "1 tsp", price: 5, available: true },
      { id: "sesame", name: "Sesame Seeds", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 20, available: false }
    ],
    steps: [
      "Mix besan, ajwain, sesame, and salt.",
      "Add water to make a stiff dough.",
      "Roll into thin ropes and twist into rings or patterns.",
      "Deep fry until crunchy and dark golden."
    ]
  },
  {
    id: "fish-pakora-chhattisgarhi",
    menuCategory: "Snacks & Street Food",
    name: "Fish Pakora Chhattisgarhi",
    description: "Crispy river fish fritters coated in a spiced gram flour batter, a popular street-side non-veg snack.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.82,
    tags: ["Chhattisgarh", "Central Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "river_fish", name: "Small River Fish", qty: "300g", price: 150, available: true },
      { id: "besan", name: "Besan", qty: "1/2 cup", price: 10, available: true },
      { id: "chili_powder", name: "Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "ajwain", name: "Ajwain", qty: "1/2 tsp", price: 90, available: false }
    ],
    steps: [
      "Marinate fish bits with salt and turmeric.",
      "Make a thick batter of besan, chili powder, and ajwain.",
      "Dip fish in batter and deep fry until very crispy.",
      "Serve as a spicy appetizer."
    ]
  }
];
