import { Recipe } from './types';

export const himachalPradeshRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "himachali-chicken-curry-pahari",
    name: "Himachali Chicken Curry",
    description: "A mild and creamy mountain-style chicken curry prepared with a whisked curd base and aromatic spices.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.82,
    tags: ["Himachal Pradesh", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 160, available: true },
      { id: "curd", name: "Thick Curd", qty: "1 cup", price: 20, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Mustard Oil", qty: "2 tbsp", price: 80, available: false }
    ],
    steps: [
      "Sauté onions and ginger-garlic paste in mustard oil until golden brown.",
      "Add chicken pieces and sear on high heat until the meat turns white.",
      "Whisk the curd and add to the pot on low heat, stirring continuously to prevent curdling.",
      "Add turmeric, coriander powder, and salt.",
      "Simmer for 20 minutes until the chicken is tender and the gravy is smooth and thick."
    ]
  },
  {
    id: "mutton-curry-himachali-style",
    name: "Mutton Curry Himachali",
    description: "A slow-cooked, rustic mutton curry made with hand-pounded spices, typical of the Kangra valley.",
    type: "Non-Vegetarian",
    time: 75,
    servings: 4,
    difficulty: "Hard",
    cost: 430,
    popularity: 0.85,
    tags: ["Himachal Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "whole_spices", name: "Cloves, Cardamom, Cinnamon", qty: "various", price: 15, available: true },
      { id: "onion", name: "Sliced Onions", qty: "3 large", price: 15, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "8", price: 20, available: false }
    ],
    steps: [
      "Heat mustard oil until smoking; sauté whole spices and onions until dark brown.",
      "Add mutton and roast on high heat (bhunao) for 10 minutes.",
      "Stir in ginger-garlic paste and powdered spices like red chili and coriander.",
      "Add water and pressure cook for 6-8 whistles until the meat is tender.",
      "Simmer uncovered for a few minutes until the gravy is rich and flavorful."
    ]
  },
  {
    id: "chicken-anardana-pahari",
    name: "Chicken Anardana",
    description: "A unique Himachali chicken preparation flavored with dried pomegranate seeds, giving it a distinct tang and dark color.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 290,
    popularity: 0.78,
    tags: ["Himachal Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "anardana", name: "Dried Pomegranate Seeds (Ground)", qty: "2 tbsp", price: 40, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 85, available: false }
    ],
    steps: [
      "Grind the dried pomegranate seeds into a coarse powder.",
      "Sauté onions and green chilies in ghee until golden.",
      "Add chicken and sear on high heat.",
      "Stir in the anardana powder, salt, and red chili powder.",
      "Add a splash of water and cook until the chicken is tender and the masala is dark and tangy."
    ]
  },
  {
    id: "khatta-meat-himachali",
    name: "Khatta Meat",
    description: "A famous Pahari mutton delicacy cooked with dry mango powder (amchur) for a sharp, tangy flavor.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 410,
    popularity: 0.84,
    tags: ["Himachal Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 350, available: true },
      { id: "amchur", name: "Dry Mango Powder (Amchur)", qty: "1 tbsp", price: 10, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tbsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 35, available: false }
    ],
    steps: [
      "Sauté onions in mustard oil until browned; add mutton pieces.",
      "Roast the meat on medium-high heat until it changes color.",
      "Add salt, turmeric, and chili powder.",
      "Stir in the amchur powder and cook until the meat is tender.",
      "Garnish with lots of ginger juliennes and serve with steamed rice."
    ]
  },
  {
    id: "chicken-dham-style",
    name: "Chicken Dham Style",
    description: "A mountain-style chicken curry inspired by the traditional Himachali 'Dham' feast, using simple yet robust spices.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.72,
    tags: ["Himachal Pradesh", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "whole_spices", name: "Cinnamon, Cardamom", qty: "various", price: 15, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Groundnut Oil", qty: "2 tbsp", price: 105, available: false }
    ],
    steps: [
      "Heat oil and temper with mustard seeds and whole spices.",
      "Sauté chicken pieces until the moisture evaporates.",
      "Add whisked curd and salt; simmer on low heat.",
      "Cover and cook until the chicken is tender and the oil separates.",
      "The result is a mild, earthy, and fragrant curry."
    ]
  },
  {
    id: "mutton-rara-himachali-style",
    name: "Mutton Rara Himachali",
    description: "A combination of mutton chunks and minced mutton (keema) slow-cooked in a rich mountain-spice gravy.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 410,
    popularity: 0.75,
    tags: ["Himachal Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_chunks", name: "Mutton Chunks", qty: "400g", price: 280, available: true },
      { id: "mutton_mince", name: "Mutton Keema", qty: "100g", price: 70, available: true },
      { id: "onion", name: "Onions (finely chopped)", qty: "2 large", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "3 tbsp", price: 40, available: false }
    ],
    steps: [
      "Sauté mutton chunks in ghee until seared; remove and set aside.",
      "In the same pan, fry onions and ginger-garlic paste until brown.",
      "Add the keema and roast on high heat for 10 minutes.",
      "Stir in spices and a little stock; cook until the fat separates.",
      "Add back the mutton chunks and slow cook until tender."
    ]
  },
  {
    id: "trout-fish-curry-himalayan",
    name: "Trout Fish Curry",
    description: "Fresh Himalayan trout cooked in a light, spicy, and tangy gravy, a specialty of the Kullu and Manali regions.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 3,
    difficulty: "Medium",
    cost: 350,
    popularity: 0.81,
    tags: ["Himachal Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "trout", name: "Fresh Himalayan Trout", qty: "2 large", price: 250, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 75, available: false }
    ],
    steps: [
      "Clean and cut the trout into steaks; marinate with salt and turmeric.",
      "Shallow fry the fish and set aside.",
      "Sauté garlic and green chilies in mustard oil.",
      "Add turmeric, chili powder, and water; bring to a boil.",
      "Gently add the fried fish and simmer for 5 minutes.",
      "Finish with a squeeze of lemon and fresh coriander."
    ]
  },
  {
    id: "egg-curry-himachali-style",
    name: "Egg Curry Himachali",
    description: "Boiled eggs simmered in a tangy yogurt and tomato gravy, a quick and satisfying mountain meal.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.70,
    tags: ["Himachal Pradesh", "North Indian", "Non-Vegetarian", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "curd", name: "Sour Curd", qty: "1/2 cup", price: 10, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "tomato", name: "Tomato (puree)", qty: "1/2 cup", price: 10, available: true },
      { id: "ginger", name: "Ginger paste", qty: "1 tsp", price: 60, available: false }
    ],
    steps: [
      "Prick boiled eggs and lightly sear in oil; set aside.",
      "Sauté onions and ginger paste until golden.",
      "Add tomato puree and spices; cook until oil separates.",
      "Whisk curd and stir in on low heat.",
      "Add eggs and simmer for 5 minutes until the gravy is thick and tangy."
    ]
  },
  {
    id: "mutton-kaleji-himachali-style",
    name: "Mutton Kaleji Himachali",
    description: "Dry roasted spicy mutton liver fry, heavily seasoned with garlic and local Pahari spices.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.74,
    tags: ["Himachal Pradesh", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_liver", name: "Mutton Liver (Kaleji)", qty: "500g", price: 250, available: true },
      { id: "garlic", name: "Garlic cloves (crushed)", qty: "10", price: 10, available: true },
      { id: "onion", name: "Onion (thinly sliced)", qty: "1", price: 5, available: true },
      { id: "black_pepper", name: "Crushed Black Pepper", qty: "1 tsp", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Sauté sliced onions in ghee until brown.",
      "Add liver pieces and sear on high heat for 5-7 minutes.",
      "Add crushed garlic and spices; sauté well.",
      "Add salt and black pepper at the very end.",
      "Cook for another 2 minutes and serve as a spicy side."
    ]
  },
  {
    id: "chicken-korma-himachali-style",
    name: "Chicken Korma Himachali",
    description: "A rich and creamy chicken korma with mountain-fresh ingredients and a smooth yogurt base.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.68,
    tags: ["Himachal Pradesh", "North Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "curd", name: "Whisked Curd", qty: "1 cup", price: 15, available: true },
      { id: "cashew_paste", name: "Cashew Nut Paste", qty: "2 tbsp", price: 30, available: true },
      { id: "cardamom", name: "Cardamom Powder", qty: "1/2 tsp", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 100, available: false }
    ],
    steps: [
      "Sauté chicken pieces in ghee until seared.",
      "Stir in cashew paste and spices.",
      "Add whisked curd and simmer on low heat.",
      "Cook until chicken is tender and the gravy is silky.",
      "Garnish with cardamom powder and coriander."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "madra-himachali",
    name: "Madra",
    description: "The crown jewel of Himachali Dham—chickpeas or kidney beans cooked in a luscious yogurt and nut-based gravy.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 85,
    popularity: 0.90,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian", "Healthy", "Comfort Food"],
    ingredients: [
      { id: "chickpeas", name: "Boiled Chickpeas (Kabuli Chana)", qty: "1.5 cups", price: 25, available: true },
      { id: "curd", name: "Sour Curd", qty: "2 cups", price: 20, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "raisins", name: "Raisins", qty: "1 tbsp", price: 15, available: true },
      { id: "spices", name: "Pahari Spices", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Whisk the curd until smooth.",
      "Heat mustard oil and sauté whole spices until fragrant.",
      "Add the curd on low heat, stirring non-stop until it boils.",
      "Add boiled chickpeas, salt, and raisins.",
      "Simmer for 15 minutes until the gravy is thick and oil-rich.",
      "Serve hot with steamed rice (Dham style)."
    ]
  },
  {
    id: "siddu-authentic",
    name: "Siddu",
    description: "Hearty steamed stuffed wheat buns, a traditional winter staple often eaten with ghee or dal.",
    type: "Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 80,
    popularity: 0.88,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian", "Breakfast"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 15, available: true },
      { id: "yeast", name: "Yeast (for fermentation)", qty: "1 tsp", price: 10, available: true },
      { id: "stuffing", name: "Opium seed/Walnut paste", qty: "1/2 cup", price: 40, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "1/4 cup", price: 15, available: true }
    ],
    steps: [
      "Knead a soft dough with flour, yeast, and warm water; let it ferment for 4 hours.",
      "Prepare a spicy stuffing of ground walnuts or opium seeds mixed with ginger and chilies.",
      "Roll out small dough balls, place the stuffing in the center, and seal.",
      "Steam for 15-20 minutes until firm.",
      "Serve hot, cracked open and drizzled with plenty of ghee."
    ]
  },
  {
    id: "chana-madra-pahari",
    name: "Chana Madra",
    description: "A variation of the classic Madra, using chickpeas simmered in a spiced mountain yogurt gravy.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.86,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "chana", name: "Chickpeas (soaked & boiled)", qty: "1.5 cups", price: 20, available: true },
      { id: "curd", name: "Whisked Curd", qty: "1.5 cups", price: 15, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 10, available: true },
      { id: "fennel", name: "Fennel Seeds", qty: "1 tsp", price: 30, available: false }
    ],
    steps: [
      "Whisk curd and mix with a little turmeric and chili powder.",
      "Heat ghee, temper with fennel seeds and cardamom.",
      "Add curd and cook while stirring until it boils.",
      "Add boiled chickpeas and simmer until the gravy reduces and thickens.",
      "Serve with hot rice."
    ]
  },
  {
    id: "kaddu-ka-khatta-himachali",
    name: "Kaddu Ka Khatta",
    description: "A tangy and sweet-sour pumpkin curry made with a distinctive Pahari spice profile.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.76,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "pumpkin", name: "Yellow Pumpkin (cubed)", qty: "500g", price: 20, available: true },
      { id: "amchur", name: "Amchur Powder", qty: "1 tsp", price: 5, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 35, available: false }
    ],
    steps: [
      "Heat mustard oil and temper with methi seeds.",
      "Add pumpkin cubes and sauté with turmeric and salt.",
      "Cover and cook on low heat until soft.",
      "Add amchur and jaggery; mash slightly.",
      "Sauté for 2 more minutes until it reaches a thick, jammy consistency."
    ]
  },
  {
    id: "rajma-madra-pahari",
    name: "Rajma Madra",
    description: "Kidney beans cooked in a rich, velvety yogurt-based gravy, a festive Himachali Dham specialty.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 85,
    popularity: 0.84,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "rajma", name: "Red Kidney Beans (boiled)", qty: "1.5 cups", price: 30, available: true },
      { id: "curd", name: "Sour Curd", qty: "1.5 cups", price: 15, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 35, available: false }
    ],
    steps: [
      "Boil whisked curd on low heat, stirring non-stop.",
      "Add boiled kidney beans and ginger paste.",
      "Add spices and salt; simmer for 15-20 minutes.",
      "The result should be a thick, creamy, and mildly tangy bean curry."
    ]
  },
  {
    id: "auriya-kaddu-himachali",
    name: "Auriya Kaddu",
    description: "Pumpkin cooked with mustard seeds and fennel, providing a sharp and aromatic flavor profile.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.70,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "pumpkin", name: "Yellow Pumpkin", qty: "500g", price: 20, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds (ground)", qty: "1 tsp", price: 5, available: true },
      { id: "fennel", name: "Fennel Powder", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 35, available: false }
    ],
    steps: [
      "Peel and cube the pumpkin.",
      "Heat mustard oil and temper with mustard seeds.",
      "Add pumpkin cubes, fennel powder, and salt.",
      "Stir-fry for 15 minutes until soft and partially mashed.",
      "Serve as a light side dish."
    ]
  },
  {
    id: "dham-rice-authentic",
    name: "Dham Rice",
    description: "Fragrant rice mildly spiced with saffron and whole spices, served as the base of the Himachali Dham platter.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.81,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "rice", name: "Basmati Rice", qty: "2 cups", price: 60, available: true },
      { id: "whole_spices", name: "Bay leaf, Cardamom", qty: "as needed", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 25, available: false }
    ],
    steps: [
      "Wash rice and soak for 20 minutes.",
      "Heat ghee in a pot; sauté whole spices.",
      "Add rice and sauté briefly.",
      "Add water and salt; cook until fluffy.",
      "The rice should be non-sticky and fragrant."
    ]
  },
  {
    id: "sepu-vadi-himachali",
    name: "Sepu Vadi",
    description: "Split black gram dumplings (vadi) cooked in a silky yogurt gravy, a hallmark of Mandi cuisine.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.78,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "vadi", name: "Sepu Vadi (fried)", qty: "1 cup", price: 20, available: true },
      { id: "curd", name: "Whisked Curd", qty: "1 cup", price: 15, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 40, available: false }
    ],
    steps: [
      "Lightly fry sepu vadi and set aside.",
      "Whisk curd and simmer on low heat.",
      "Add vadi and spices to the curd.",
      "Cook for 10 minutes until the dumplings absorb the tangy gravy.",
      "Serve warm with rice."
    ]
  },
  {
    id: "palda-himachali",
    name: "Palda",
    description: "A simple and nutritious yogurt-based vegetable curry, common in the rural homes of Himachal.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.74,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian"],
    ingredients: [
      { id: "potato", name: "Potato cubes", qty: "1 cup", price: 10, available: true },
      { id: "curd", name: "Sour Curd", qty: "1 cup", price: 15, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 35, available: false }
    ],
    steps: [
      "Sauté potatoes and onions in oil until soft.",
      "Whisk curd and stir in on low heat.",
      "Add turmeric and salt.",
      "Simmer for 10 minutes (do not boil hard) until thick and creamy."
    ]
  },
  {
    id: "chutney-wale-aloo-pahari",
    name: "Chutney Wale Aloo",
    description: "Boiled potato cubes tossed in a fiery and tangy mint-coriander chutney.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.72,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "potato", name: "Boiled Potatoes", qty: "4", price: 15, available: true },
      { id: "chutney", name: "Mint-Coriander Chutney", qty: "1/2 cup", price: 15, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 30, available: false }
    ],
    steps: [
      "Cube the boiled potatoes.",
      "Heat a little oil and sauté potatoes for 2 minutes.",
      "Toss with mint-coriander chutney.",
      "Finish with lemon juice and salt."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "babru-himachali",
    name: "Babru",
    description: "Stuffed and deep-fried wheat bread patties with a savory black gram filling.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.84,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "black_gram", name: "Urad Dal paste", qty: "1/2 cup", price: 15, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 40, available: false }
    ],
    steps: [
      "Make a stiff dough of wheat flour.",
      "Stuff with spiced urad dal paste.",
      "Flatten into thick discs and deep fry until golden brown.",
      "Serve warm."
    ]
  },
  {
    id: "patande-himachali",
    name: "Patande",
    description: "A thin and sweet wheat pancake, often enjoyed for breakfast in the Sirmaur district.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.81,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "1 cup", price: 10, available: true },
      { id: "sugar", name: "Sugar", qty: "2 tbsp", price: 10, available: true },
      { id: "milk", name: "Milk (for batter)", qty: "1 cup", price: 45, available: false }
    ],
    steps: [
      "Mix flour, sugar, and milk into a thin batter.",
      "Let it rest for 10 minutes.",
      "Spread on a hot greased tawa into thin circles.",
      "Cook until golden brown on both sides."
    ]
  },
  {
    id: "chana-madra-chaat-bites",
    name: "Chana Madra Chaat Bites",
    description: "A bite-sized snack version of the chickpea yogurt curry, served on small crispy crackers.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.74,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "chana_madra", name: "Chana Madra base", qty: "1 cup", price: 30, available: true },
      { id: "crackers", name: "Crispy Crackers (Papdi)", qty: "10", price: 10, available: true },
      { id: "sev", name: "Spicy Sev", qty: "1/4 cup", price: 20, available: false }
    ],
    steps: [
      "Prepare Chana Madra base.",
      "Spoon small portions onto crispy crackers.",
      "Top with sev and fresh coriander."
    ]
  },
  {
    id: "mittha-himachali",
    name: "Mittha",
    description: "Sweet saffron-colored rice pudding with an abundance of dried fruits and nuts.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.86,
    tags: ["Himachal Pradesh", "North Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "rice", name: "Basmati Rice", qty: "1 cup", price: 30, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 cup", price: 10, available: true },
      { id: "nuts", name: "Dried Fruits & Nuts", qty: "1/4 cup", price: 50, available: false }
    ],
    steps: [
      "Boil rice with saffron until soft.",
      "Add sugar and simmer until water is absorbed.",
      "Garnish with dried fruits and nuts."
    ]
  },
  {
    id: "chicken-pakora-himachali-pahari",
    name: "Chicken Pakora Himachali",
    description: "Crispy mountain-style fried chicken bites coated in a spiced gram flour batter.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.82,
    tags: ["Himachal Pradesh", "North Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Boneless Chicken bits", qty: "300g", price: 100, available: true },
      { id: "besan", name: "Gram Flour", qty: "1/2 cup", price: 15, available: true },
      { id: "ginger", name: "Ginger paste", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 105, available: false }
    ],
    steps: [
      "Marinate chicken with ginger and spices.",
      "Coat in thick besan batter.",
      "Deep fry until golden brown and very crispy.",
      "Serve hot."
    ]
  }
];
