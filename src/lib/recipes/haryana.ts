import { Recipe } from './types';

export const haryanaRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "haryanvi-mutton-curry",
    name: "Haryanvi Mutton Curry",
    description: "A rustic mutton curry made with pure desi ghee and hand-pounded spices, a favorite among Haryanvi wrestlers for its strength-giving properties.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 420,
    popularity: 0.88,
    tags: ["Haryana", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "4 tbsp", price: 40, available: true },
      { id: "onion", name: "Onions (sliced)", qty: "3 large", price: 15, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "haryanvi_masala", name: "Rural Garam Masala", qty: "1 tbsp", price: 5, available: false }
    ],
    steps: [
      "Heat desi ghee in a heavy pot until it melts and begins to smoke slightly.",
      "Add sliced onions and fry until they are a deep, rich brown.",
      "Add mutton pieces and roast (bhunao) on high heat for 10-12 minutes until seared.",
      "Stir in ginger-garlic paste and the dry spices; sauté until aromatic.",
      "Add minimal water, cover, and slow cook for an hour until the meat is melt-in-mouth tender.",
      "Garnish with lots of ginger juliennes."
    ]
  },
  {
    id: "haryanvi-chicken-curry",
    name: "Haryanvi Chicken Curry",
    description: "Homestyle chicken curry cooked with a base of roasted onions and tomatoes, finished with a signature desi ghee tempering.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.84,
    tags: ["Haryana", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "2 tbsp", price: 20, available: true },
      { id: "onion", name: "Onions", qty: "2 large", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "2", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 90, available: false }
    ],
    steps: [
      "Sauté onions in ghee until light golden; add ginger-garlic paste.",
      "Add chicken pieces and sear on high heat until the color turns opaque.",
      "Add chopped tomatoes, turmeric, and chili powder.",
      "Cook until the tomatoes break down and the gravy thickens.",
      "Add a cup of water and simmer for 15 minutes until chicken is tender.",
      "Top with a spoonful of fresh ghee before serving."
    ]
  },
  {
    id: "sarson-wala-mutton",
    name: "Sarson Wala Mutton",
    description: "A hearty combination of mutton and fresh mustard greens, reflecting Haryana's rich agricultural produce and love for greens.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 410,
    popularity: 0.79,
    tags: ["Haryana", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "mustard_greens", name: "Sarson Saag (Pureed)", qty: "1 cup", price: 20, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tbsp", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "8", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt until nearly tender.",
      "Heat mustard oil and sauté garlic and green chilies.",
      "Add the pureed mustard greens and cook for 5 minutes.",
      "Stir in the pre-cooked mutton along with its broth.",
      "Simmer on low heat until the greens and meat integrate into a thick, dark green gravy.",
      "Finish with ginger juliennes and a dollop of white butter."
    ]
  },
  {
    id: "chicken-handi-haryanvi",
    name: "Chicken Handi Haryanvi",
    description: "Slow-cooked chicken in its own juices with minimal spices in a traditional clay pot, capturing the earthy rural essence.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 300,
    popularity: 0.77,
    tags: ["Haryana", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "clay_pot", name: "Earthen Handi", qty: "1", price: 80, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "3 tbsp", price: 30, available: true },
      { id: "whole_spices", name: "Black Cardamom, Cloves", qty: "small amount", price: 15, available: true },
      { id: "black_pepper", name: "Black Pepper", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Heat ghee in the handi and temper with whole spices.",
      "Add chicken pieces and toss on high heat until lightly charred.",
      "Add salt and lots of crushed black pepper; do not add water.",
      "Seal the handi with a lid and dough (dum style).",
      "Slow cook for 35 minutes until the chicken is tender and aromatic.",
      "The result is a dry, earthy, and intensely flavored chicken."
    ]
  },
  {
    id: "mutton-do-pyaza-haryanvi",
    name: "Mutton Do Pyaza Haryanvi",
    description: "A robust mutton curry where onions are used in two stages—one for the base and another as crunchy cubes for texture.",
    type: "Non-Vegetarian",
    time: 55,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.82,
    tags: ["Haryana", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 350, available: true },
      { id: "onions_sliced", name: "Onions (sliced)", qty: "2 large", price: 15, available: true },
      { id: "onions_cubed", name: "Onions (large cubes)", qty: "1 large", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Cooking Oil", qty: "3 tbsp", price: 15, available: false }
    ],
    steps: [
      "Sauté sliced onions until deep golden; add ginger-garlic paste.",
      "Add mutton and sear on high heat until it changes color.",
      "Add spices and a cup of water; pressure cook until mutton is tender.",
      "Stir in the cubed onions and simmer for 5 minutes until they soften slightly but keep their crunch.",
      "The sweetness of the cubed onions balances the spicy gravy."
    ]
  },
  {
    id: "egg-curry-haryanvi",
    name: "Egg Curry Haryanvi Style",
    description: "Boiled eggs simmered in a rustic onion-tomato gravy with a distinct mustard oil pungency, a staple for quick non-veg meals.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.79,
    tags: ["Haryana", "North Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tsp", price: 55, available: false }
    ],
    steps: [
      "Prick boiled eggs and lightly sear them in oil with a pinch of turmeric.",
      "Heat mustard oil, sauté onions until golden brown.",
      "Add ginger-garlic paste and tomatoes; cook until the oil separates.",
      "Add turmeric, chili powder, and water to make a thick gravy.",
      "Add the eggs and simmer for 5 minutes until the flavor is absorbed."
    ]
  },
  {
    id: "chicken-bhuna-haryanvi",
    name: "Chicken Bhuna Haryanvi",
    description: "Dry roasted chicken with a coarse masala, highly seasoned with black pepper and garlic, popular as a hearty side.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.83,
    tags: ["Haryana", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (boneless bits)", qty: "500g", price: 180, available: true },
      { id: "garlic", name: "Garlic (minced)", qty: "2 tbsp", price: 10, available: true },
      { id: "onion", name: "Onion (thinly sliced)", qty: "1", price: 5, available: true },
      { id: "black_pepper", name: "Crushed Black Pepper", qty: "1 tbsp", price: 15, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 60, available: false }
    ],
    steps: [
      "Heat ghee and sauté sliced onions until they begin to caramelize.",
      "Add chicken pieces and sear on high heat (bhunao) for 10 minutes.",
      "Stir in minced garlic, salt, and lots of black pepper.",
      "Cook uncovered, stirring frequently, until the chicken is tender and the masala is dry and dark brown.",
      "Serve hot with roomali roti."
    ]
  },
  {
    id: "mutton-kaleji-haryanvi",
    name: "Mutton Kaleji Haryanvi",
    description: "Spiced mutton liver fry with a heavy dose of garlic and ginger, popular among athletes for its high protein content.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.81,
    tags: ["Haryana", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_liver", name: "Mutton Liver (Kaleji)", qty: "500g", price: 250, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "pepper", name: "Black Pepper", qty: "1 tsp", price: 30, available: false }
    ],
    steps: [
      "Heat oil/ghee and sauté onions until brown.",
      "Add liver pieces and sear on high heat for 5-7 minutes; do not add salt yet to keep it tender.",
      "Add ginger-garlic paste and dry spices; sauté well.",
      "Stir in salt and black pepper at the very end.",
      "Cook for another 2 minutes and serve immediately before it becomes tough."
    ]
  },
  {
    id: "chicken-korma-haryanvi",
    name: "Chicken Korma Haryanvi",
    description: "A rich and robust chicken korma cooked with cashews and plenty of desi ghee, reflecting the prosperity of Haryanvi farms.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.76,
    tags: ["Haryana", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "cashews", name: "Cashew Paste", qty: "2 tbsp", price: 40, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "3 tbsp", price: 45, available: true },
      { id: "cardamom", name: "Cardamom", qty: "2", price: 40, available: false }
    ],
    steps: [
      "Heat ghee and sauté whole spices until fragrant.",
      "Add chicken and cook until the meat turns white.",
      "Stir in the cashew paste and whisked yogurt.",
      "Simmer on low heat until the chicken is cooked and the gravy is rich and silky.",
      "Adjust salt and garnish with coriander."
    ]
  },
  {
    id: "mutton-bathua-curry",
    name: "Mutton Bathua Curry",
    description: "Tender mutton pieces simmered with winter-special bathua (chenopodium) leaves, a healthy and warming regional specialty.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.78,
    tags: ["Haryana", "North Indian", "Non-Vegetarian", "Spicy", "Healthy"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 350, available: true },
      { id: "bathua", name: "Bathua leaves (blanched)", qty: "1 cup", price: 15, available: true },
      { id: "onion", name: "Onion", qty: "2", price: 10, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tbsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt until half-done.",
      "Heat mustard oil and sauté onions until brown.",
      "Add mutton and roast in the masala base.",
      "Stir in blanched and pureed bathua leaves.",
      "Simmer until meat is tender and the greens form a thick gravy.",
      "Serve hot with Bajra Roti."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "bajra-khichdi-haryanvi",
    name: "Bajra Khichdi",
    description: "The ultimate winter comfort food of Haryana, made with pearl millet and moong dal, traditionally served with a huge dollop of desi ghee.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.94,
    tags: ["Haryana", "North Indian", "Vegetarian", "Healthy", "Comfort Food"],
    ingredients: [
      { id: "bajra", name: "Bajra (Pearl Millet)", qty: "1 cup", price: 20, available: true },
      { id: "moong_dal", name: "Moong Dal", qty: "1/2 cup", price: 15, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "1/4 cup", price: 40, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: false }
    ],
    steps: [
      "Coarsely pound the bajra and wash to remove any husk.",
      "Pressure cook bajra and dal together with 4 cups of water for 4-5 whistles until very soft.",
      "Whisk the mixture to make it creamy while still hot.",
      "In a small pan, heat ghee and temper with cumin and dried red chilies.",
      "Pour the tempering over the khichdi and serve with jaggery and curd."
    ]
  },
  {
    id: "kadhi-pakora-haryanvi",
    name: "Kadhi Pakora Haryanvi",
    description: "Sour yogurt curry with gram flour dumplings, specifically made with a lot of garlic and a punchy red chili tadka.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.88,
    tags: ["Haryana", "North Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "curd", name: "Sour Curd", qty: "2 cups", price: 20, available: true },
      { id: "besan", name: "Gram Flour", qty: "1 cup", price: 15, available: true },
      { id: "garlic", name: "Garlic cloves (crushed)", qty: "10", price: 10, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 30, available: false }
    ],
    steps: [
      "Whisk curd and half the besan into a thin slurry; boil with turmeric and salt until it thickens.",
      "Make small fried pakoras from the remaining besan and add them to the kadhi.",
      "Heat ghee in a small pan; add mustard seeds, dried red chilies, and lots of crushed garlic.",
      "Once garlic turns golden brown, pour the tempering over the kadhi.",
      "Simmer for 5 minutes and serve with rice."
    ]
  },
  {
    id: "hara-dhania-cholia",
    name: "Hara Dhania Cholia",
    description: "Fresh green chickpeas (cholia) cooked with plenty of fresh coriander and simple home spices, a regional winter specialty.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.81,
    tags: ["Haryana", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "cholia", name: "Green Chickpeas", qty: "2 cups", price: 30, available: true },
      { id: "coriander", name: "Fresh Coriander (Puree)", qty: "1/2 cup", price: 10, available: true },
      { id: "potato", name: "Potato (cubed)", qty: "1", price: 5, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 25, available: false }
    ],
    steps: [
      "Sauté cumin and green chilies in oil.",
      "Add potato cubes and sauté for 2 minutes.",
      "Add green chickpeas and salt; stir-fry briefly.",
      "Add the coriander puree and a little water.",
      "Cover and simmer until the chickpeas and potatoes are tender."
    ]
  },
  {
    id: "sarson-ka-saag-haryanvi",
    name: "Sarson Ka Saag Haryanvi",
    description: "Mustard greens slow-cooked and mashed, enriched with maize flour and plenty of white butter.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.90,
    tags: ["Haryana", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mustard_greens", name: "Sarson Leaves", qty: "2 bunches", price: 25, available: true },
      { id: "maize_flour", name: "Makki Atta", qty: "2 tbsp", price: 5, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tbsp", price: 5, available: true },
      { id: "butter", name: "White Butter", qty: "2 tbsp", price: 40, available: true },
      { id: "garlic", name: "Garlic", qty: "6 cloves", price: 20, available: false }
    ],
    steps: [
      "Boil mustard greens and spinach with ginger and garlic until soft.",
      "Mash the greens thoroughly or use a hand blender.",
      "Add makki atta and whisk while cooking to remove the raw smell.",
      "Add salt and simmer for 15 minutes.",
      "Top with a generous amount of white butter and serve with Makki Roti."
    ]
  },
  {
    id: "bathua-raita-sabzi",
    name: "Bathue Ka Raita with Sabzi",
    description: "A cooling bathua greens yogurt dip paired with a simple dry potato-cauliflower sabzi, a classic rustic lunch.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.76,
    tags: ["Haryana", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "bathua", name: "Bathua leaves", qty: "1 bunch", price: 15, available: true },
      { id: "curd", name: "Yogurt", qty: "1 cup", price: 20, available: true },
      { id: "mixed_veg", name: "Potato and Cauliflower", qty: "2 cups", price: 30, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 15, available: false }
    ],
    steps: [
      "Blanch bathua leaves and chop finely; mix with whisked curd and salt.",
      "Sauté vegetables with turmeric and salt in a separate pan.",
      "Cook vegetables on medium heat until soft and slightly charred.",
      "Serve the warm sabzi alongside the chilled bathua raita."
    ]
  },
  {
    id: "alsi-pinni-sabzi",
    name: "Alsi Ki Pinni Sabzi Combo",
    description: "Flaxseed energy balls paired with a light vegetable curry, providing a balance of healthy fats and vitamins.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.72,
    tags: ["Haryana", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "alsi", name: "Flaxseeds (roasted)", qty: "1 cup", price: 30, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1/2 cup", price: 15, available: true },
      { id: "mixed_veg", name: "Green Beans and Carrot", qty: "1 cup", price: 20, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 35, available: false }
    ],
    steps: [
      "Grind roasted flaxseeds into a coarse powder.",
      "Melt jaggery in ghee and mix with the flaxseed powder to form balls (Pinni).",
      "Prepare a light stir-fry of green beans and carrots with minimal spices.",
      "Serve one Pinni with the vegetable curry as a balanced regional meal."
    ]
  },
  {
    id: "churma-with-dal",
    name: "Churma with Dal",
    description: "Sweetened, hand-crushed wheat cakes served with a simple, tempered yellow dal, Haryana's answer to festive comfort.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 85,
    popularity: 0.92,
    tags: ["Haryana", "North Indian", "Vegetarian", "Comfort Food", "Dessert"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "ghee", name: "Ghee", qty: "1/2 cup", price: 40, available: true },
      { id: "sugar", name: "Sugar or Jaggery powder", qty: "1/2 cup", price: 10, available: true },
      { id: "toor_dal", name: "Yellow Dal", qty: "1/2 cup", price: 15, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 25, available: false }
    ],
    steps: [
      "Make thick rotis from wheat flour; while hot, crumble them by hand.",
      "Mix crumbled rotis with lots of ghee and sugar to make Churma.",
      "Prepare a simple yellow dal tempered with cumin and ghee.",
      "Serve a portion of sweet Churma alongside the savory dal."
    ]
  },
  {
    id: "gatte-ki-sabzi-haryanvi",
    name: "Gatte Ki Sabzi Haryanvi",
    description: "Steamed gram flour dumplings in a tangy and spicy yogurt-based gravy, a favorite across rural North India.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.81,
    tags: ["Haryana", "North Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "besan", name: "Besan (Gram Flour)", qty: "1.5 cups", price: 20, available: true },
      { id: "curd", name: "Yogurt", qty: "1 cup", price: 15, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "ajwain", name: "Ajwain Seeds", qty: "1/2 tsp", price: 30, available: false }
    ],
    steps: [
      "Make a stiff dough of besan, ajwain, and spices; roll into cylinders and boil.",
      "Once cooled, cut the boiled cylinders into small rounds (Gatte).",
      "Sauté onions and ginger-garlic paste in oil.",
      "Stir in whisked yogurt and spices; cook until oil separates.",
      "Add the Gatte and simmer until the gravy thickens."
    ]
  },
  {
    id: "bajra-roti-lehsun-chutney",
    name: "Bajra Roti with Lehsun Chutney",
    description: "Rustic pearl millet flatbread served with a fiery, hand-pounded garlic chutney, the quintessential Haryanvi farmer's meal.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.91,
    tags: ["Haryana", "North Indian", "Vegetarian", "Breakfast", "Healthy"],
    ingredients: [
      { id: "bajra_flour", name: "Bajra Flour", qty: "2 cups", price: 20, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "15", price: 10, available: true },
      { id: "dry_chili", name: "Dry Red Chilies", qty: "4", price: 5, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Knead bajra flour with warm water into a soft dough.",
      "Pat into thick flatbreads and cook on a tawa until golden-brown.",
      "For chutney, pound garlic, dry chilies, and salt into a coarse paste.",
      "Heat a little oil and sauté the garlic paste for 2 minutes.",
      "Serve hot roti with a generous amount of ghee and the garlic chutney."
    ]
  },
  {
    id: "malai-kofta-haryanvi",
    name: "Malai Kofta Haryanvi Style",
    description: "Dairy-rich vegetable and paneer dumplings in a creamy, mildly spiced gravy, reflecting the abundance of milk in the region.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 110,
    popularity: 0.85,
    tags: ["Haryana", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "paneer", name: "Paneer (grated)", qty: "1 cup", price: 50, available: true },
      { id: "potato", name: "Potato (boiled)", qty: "2", price: 10, available: true },
      { id: "cream", name: "Fresh Cream", qty: "1/4 cup", price: 30, available: true },
      { id: "cashews", name: "Cashews", qty: "10", price: 20, available: false }
    ],
    steps: [
      "Mix grated paneer, mashed potatoes, and cornflour; shape into balls and fry (Koftas).",
      "Make a smooth gravy with cashew paste, tomato puree, and onions.",
      "Add cream and salt to the gravy.",
      "Gently place the koftas in the hot gravy just before serving.",
      "The result is a rich, melt-in-mouth vegetarian delicacy."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "bajre-ki-khichdi-bites",
    name: "Bajre Ki Khichdi Bites",
    description: "Leftover bajra khichdi mixed with herbs and pan-fried into crispy patties, a sustainable and tasty snack.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.78,
    tags: ["Haryana", "North Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "khichdi", name: "Cooked Bajra Khichdi", qty: "2 cups", price: 15, available: true },
      { id: "onion", name: "Finely chopped Onion", qty: "1", price: 5, available: true },
      { id: "besan", name: "Gram Flour (for binding)", qty: "2 tbsp", price: 10, available: true },
      { id: "oil", name: "Oil for pan fry", qty: "1/4 cup", price: 30, available: false }
    ],
    steps: [
      "Mix cooked khichdi with onions, green chilies, and besan.",
      "Shape into small flat patties.",
      "Pan-fry in hot oil until both sides are golden and crispy.",
      "Serve with green chutney or yogurt."
    ]
  },
  {
    id: "ghevar-haryanvi",
    name: "Ghevar Haryanvi",
    description: "A disc-shaped fried sweet sweet made from flour and ghee, soaked in sugar syrup, iconic for festivals like Teej.",
    type: "Vegetarian",
    time: 40,
    servings: 6,
    difficulty: "Hard",
    cost: 100,
    popularity: 0.89,
    tags: ["Haryana", "North Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "maida", name: "Refined Flour", qty: "2 cups", price: 20, available: true },
      { id: "ghee", name: "Ghee", qty: "1/2 cup", price: 50, available: true },
      { id: "sugar", name: "Sugar Syrup", qty: "1 cup", price: 15, available: true },
      { id: "ice_water", name: "Ice Cold Water", qty: "as needed", price: 15, available: false }
    ],
    steps: [
      "Whisk ghee and cold water into a smooth, white cream.",
      "Gradually add flour and more cold water to make a very thin batter.",
      "Pour batter in a thin stream into hot ghee to create a honeycomb structure.",
      "Fry until golden, then soak in sugar syrup for 5 minutes.",
      "Garnish with nuts and silver leaf."
    ]
  },
  {
    id: "kachri-chutney-snack",
    name: "Kachri Ki Chutney Snack Plate",
    description: "Tangy chutney made from wild melon (kachri), served with crunchy fried wheat strips.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.74,
    tags: ["Haryana", "North Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "kachri", name: "Dried Kachri", qty: "1/2 cup", price: 20, available: true },
      { id: "garlic", name: "Garlic", qty: "6 cloves", price: 10, available: true },
      { id: "mathri", name: "Fried Mathri/Strips", qty: "2 cups", price: 15, available: true },
      { id: "oil", name: "Oil", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Soak dried kachri in warm water; grind into a paste with garlic and chilies.",
      "Heat oil and temper with cumin.",
      "Add the chutney paste and sauté for 5 minutes.",
      "Serve the tangy chutney as a dip for crunchy fried strips."
    ]
  },
  {
    id: "alsi-pinni-snack",
    name: "Alsi Pinni",
    description: "Roasted flaxseed, jaggery, and nut balls, a traditional high-protein winter snack for strength.",
    type: "Vegetarian",
    time: 30,
    servings: 6,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.82,
    tags: ["Haryana", "North Indian", "Vegetarian", "Snacks", "Dessert", "Healthy"],
    ingredients: [
      { id: "alsi", name: "Flaxseeds", qty: "1 cup", price: 30, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1 cup", price: 15, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "1/4 cup", price: 30, available: true },
      { id: "nuts", name: "Crushed Walnuts/Almonds", qty: "2 tbsp", price: 5, available: false }
    ],
    steps: [
      "Dry roast flaxseeds until they pop; grind into a coarse powder.",
      "Melt jaggery in ghee until it forms a thick syrup.",
      "Add the flaxseed powder and crushed nuts to the syrup.",
      "While still warm, roll into small tight balls (Pinni).",
      "Store in a dry jar; perfect for cold winter mornings."
    ]
  },
  {
    id: "chicken-pakora-haryanvi",
    name: "Chicken Pakora Haryanvi",
    description: "Crispy fried chicken pieces coated in a spicy, garlic-heavy gram flour batter, a popular highway treat.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.86,
    tags: ["Haryana", "North Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (boneless bits)", qty: "300g", price: 100, available: true },
      { id: "besan", name: "Gram Flour", qty: "1/2 cup", price: 15, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "red_chili", name: "Red Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 95, available: false }
    ],
    steps: [
      "Marinate chicken bits with garlic paste, lemon, and salt for 15 minutes.",
      "Make a thick batter of besan and spices with a little water.",
      "Coat each chicken piece in the batter.",
      "Deep fry in hot oil until golden brown and very crunchy.",
      "Serve with onion rings and lemon wedges."
    ]
  }
];
