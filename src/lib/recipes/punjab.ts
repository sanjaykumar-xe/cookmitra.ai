import { Recipe } from './types';

export const punjabRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "amritsari-fish-fry",
    menuCategory: "Snacks & Street Food",
    name: "Amritsari Fish Fry",
    description: "Crispy and spicy deep-fried fish fillets coated with a carom-flavored gram flour batter.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 3,
    difficulty: "Medium",
    cost: 320,
    popularity: 0.88,
    tags: ["Punjab", "Punjabi", "North Indian", "Non-Vegetarian", "Spicy", "Snacks"],
    ingredients: [
      { id: "fish", name: "Singhara or Sole Fish", qty: "500g", price: 250, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "4 tbsp", price: 10, available: true },
      { id: "ajwain", name: "Carom Seeds (Ajwain)", qty: "1 tsp", price: 5, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "2 cups", price: 45, available: false }
    ],
    steps: [
      "Cut the fish into long strips and marinate with ginger-garlic paste and salt.",
      "In a bowl, mix besan, rice flour, ajwain, and spices to make a thick batter.",
      "Coat the fish strips evenly with the batter.",
      "Deep fry in hot oil until golden brown and very crispy.",
      "Serve hot with a sprinkle of chaat masala and mint chutney."
    ]
  },
  {
    id: "chicken-tikka-punjabi",
    menuCategory: "Starters & Appetizers",
    name: "Chicken Tikka Punjabi",
    description: "Succulent boneless chicken pieces marinated in spiced yogurt and grilled to a smoky perfection.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.90,
    tags: ["Punjab", "Punjabi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Boneless Chicken", qty: "500g", price: 160, available: true },
      { id: "yogurt", name: "Thick Curd", qty: "1/2 cup", price: 20, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "tikka_masala", name: "Tikka Masala Blend", qty: "2 tbsp", price: 15, available: true },
      { id: "butter", name: "Butter (for basting)", qty: "2 tbsp", price: 45, available: false }
    ],
    steps: [
      "Marinate chicken in yogurt, ginger-garlic paste, and tikka masala for 2 hours.",
      "Thread the chicken onto skewers.",
      "Grill or pan-fry until the edges are charred and chicken is cooked through.",
      "Baste with melted butter during the last 5 minutes of cooking.",
      "Garnish with lemon and serve as a popular appetizer."
    ]
  },
  {
    id: "mutton-rara-punjabi",
    menuCategory: "Curries & Gravies",
    name: "Mutton Rara Punjabi",
    description: "A decadent combination of tender mutton chunks and minced mutton (keema) cooked in a rich, spiced gravy.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 410,
    popularity: 0.85,
    tags: ["Punjab", "Punjabi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_pieces", name: "Mutton Chunks", qty: "400g", price: 300, available: true },
      { id: "mutton_mince", name: "Mutton Keema", qty: "100g", price: 80, available: true },
      { id: "onion", name: "Onions (finely chopped)", qty: "2 large", price: 10, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1/4 cup", price: 10, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "3 tbsp", price: 10, available: false }
    ],
    steps: [
      "Sauté mutton chunks in ghee until seared; remove and set aside.",
      "In the same pan, fry onions and ginger-garlic paste until brown.",
      "Add the keema and roast on high heat for 10 minutes.",
      "Stir in yogurt, tomatoes, and spices; cook until the fat separates.",
      "Add back the mutton chunks and slow cook until the meat is tender and gravy is granular.",
      "Serve hot with garlic naan."
    ]
  },
  {
    id: "amritsari-chicken-curry",
    menuCategory: "Curries & Gravies",
    name: "Amritsari Chicken Curry",
    description: "A tandoor-influenced chicken curry with a deep, smoky flavor and a thick, buttery gravy.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.87,
    tags: ["Punjab", "Punjabi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "tomato_puree", name: "Tomato Puree", qty: "1 cup", price: 20, available: true },
      { id: "cream", name: "Fresh Cream", qty: "2 tbsp", price: 30, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tbsp", price: 5, available: true },
      { id: "spices", name: "Amritsari Spice Mix", qty: "2 tbsp", price: 95, available: false }
    ],
    steps: [
      "Lightly grill or pan-sear chicken pieces until charred; set aside.",
      "Prepare a thick gravy with butter, onions, and tomato puree.",
      "Add the spice mix and sauté until oil separates.",
      "Add the charred chicken and a splash of water; simmer for 15 minutes.",
      "Finish with cream and ginger juliennes."
    ]
  },
  {
    id: "mutton-curry-punjabi",
    menuCategory: "Curries & Gravies",
    name: "Mutton Curry Punjabi Style",
    description: "Hearty and slow-cooked mutton curry with a rich base of roasted onions and traditional Punjabi whole spices.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 430,
    popularity: 0.84,
    tags: ["Punjab", "Punjabi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "onion", name: "Onions (sliced)", qty: "3 large", price: 15, available: true },
      { id: "whole_spices", name: "Cinnamon, Cardamom, Cloves", qty: "various", price: 20, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "8", price: 15, available: false }
    ],
    steps: [
      "Heat mustard oil until smoking; sauté whole spices and sliced onions until dark brown.",
      "Add mutton and sear on high heat (bhunao) for 10-12 minutes.",
      "Stir in ginger-garlic paste and powdered spices.",
      "Add 2 cups of water and pressure cook for 6-8 whistles until tender.",
      "The gravy should be dark, oily, and intensely flavorful."
    ]
  },
  {
    id: "chicken-sagwala",
    menuCategory: "Curries & Gravies",
    name: "Chicken Sagwala",
    description: "A nutritious and flavorful combination of tender chicken cooked in a pureed spinach gravy.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.79,
    tags: ["Punjab", "Punjabi", "North Indian", "Non-Vegetarian", "Healthy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "spinach", name: "Spinach (pureed)", qty: "2 cups", price: 25, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "2", price: 10, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 90, available: false }
    ],
    steps: [
      "Blanch and puree spinach; set aside.",
      "Sauté onions and ginger in ghee until golden.",
      "Add chicken and cook until the color changes to white.",
      "Stir in the spinach puree and salt.",
      "Simmer for 15 minutes until the chicken is tender and the flavors merge.",
      "Top with a little cream before serving."
    ]
  },
  {
    id: "tandoori-chicken",
    menuCategory: "Protein Specialties",
    name: "Tandoori Chicken",
    description: "Whole chicken pieces marinated in a fiery red spice blend and roasted in a traditional clay oven (tandoor).",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 320,
    popularity: 0.94,
    tags: ["Punjab", "Punjabi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Whole Chicken legs", qty: "4", price: 180, available: true },
      { id: "yogurt", name: "Hung Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "2 tbsp", price: 10, available: true },
      { id: "red_chili", name: "Kashmiri Red Chili Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 100, available: false }
    ],
    steps: [
      "Apply deep slits on the chicken legs.",
      "Marinate with lemon juice and salt for 15 minutes.",
      "Apply the second marinade of hung curd, spices, and ginger-garlic paste; let it rest for 4 hours.",
      "Roast in a tandoor or oven at 200°C for 25-30 minutes.",
      "Baste with butter once midway.",
      "Serve with onion rings and green chutney."
    ]
  },
  {
    id: "egg-curry-punjabi",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry Punjabi Style",
    description: "Hard-boiled eggs simmered in a rich, buttery onion-tomato gravy with a punch of spices.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.82,
    tags: ["Punjab", "Punjabi", "North Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "butter", name: "Butter", qty: "2 tbsp", price: 15, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato (puree)", qty: "1/2 cup", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 50, available: false }
    ],
    steps: [
      "Halve boiled eggs and lightly sear in butter; set aside.",
      "In the same pan, fry onions and ginger-garlic paste until brown.",
      "Add tomato puree and spices; cook until oil separates.",
      "Add a cup of water and simmer to form a thick gravy.",
      "Add eggs and cook for 5 minutes; finish with fresh coriander."
    ]
  },
  {
    id: "mutton-keema-matar-punjabi",
    menuCategory: "Curries & Gravies",
    name: "Mutton Keema Matar Punjabi",
    description: "Spiced minced mutton cooked with fresh green peas, a quintessential Punjabi lunch dish.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 350,
    popularity: 0.81,
    tags: ["Punjab", "Punjabi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "minced_mutton", name: "Mutton Keema", qty: "500g", price: 300, available: true },
      { id: "peas", name: "Fresh Green Peas", qty: "1/2 cup", price: 15, available: true },
      { id: "onion", name: "Onion (finely chopped)", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "mint", name: "Fresh Mint", qty: "handful", price: 15, available: false }
    ],
    steps: [
      "Sauté onions and ginger-garlic paste until brown.",
      "Add minced mutton and roast on high heat until the moisture evaporates.",
      "Stir in spices, peas, and a splash of water.",
      "Cover and simmer for 15-20 minutes until keema is cooked.",
      "Garnish with fresh mint and serve with pav or paratha."
    ]
  },
  {
    id: "chicken-curry-dhaba",
    menuCategory: "Curries & Gravies",
    name: "Chicken Curry Punjabi Dhaba Style",
    description: "A rustic and spicy roadside-style chicken curry with a thin but intensely flavored gravy.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.86,
    tags: ["Punjab", "Punjabi", "North Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 160, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "onion", name: "Onion (thickly sliced)", qty: "3 large", price: 15, available: true },
      { id: "garlic", name: "Whole Garlic cloves", qty: "10", price: 5, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tbsp", price: 70, available: false }
    ],
    steps: [
      "Heat mustard oil to smoking point; fry onion slices until dark brown.",
      "Add garlic cloves and ginger paste; sauté for 2 minutes.",
      "Add chicken pieces and fry on high heat (bhunao) for 10 minutes.",
      "Add turmeric, chili powder, and lots of warm water.",
      "Simmer until the chicken is tender and the oil separates on top.",
      "The gravy should be thin and fiery."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "sarson-ka-saag-makki-roti",
    menuCategory: "Breads",
    name: "Sarson Ka Saag with Makki Roti",
    description: "Traditional winter specialty of mustard greens slow-cooked and mashed, served with cornflour flatbread.",
    type: "Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.95,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mustard_greens", name: "Sarson Leaves", qty: "2 bunches", price: 20, available: true },
      { id: "spinach", name: "Palak (Spinach)", qty: "1 bunch", price: 15, available: true },
      { id: "maize_flour", name: "Makki Atta", qty: "2 tbsp", price: 5, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "3 tbsp", price: 40, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 10, available: false }
    ],
    steps: [
      "Boil mustard greens and spinach with ginger and garlic until soft.",
      "Mash the greens thoroughly (traditionally with a wooden masher).",
      "Stir in maize flour and salt; whisk while cooking to remove raw smell.",
      "Add a generous tempering of garlic and red chilies in ghee.",
      "Serve with Makki Roti and a dollop of white butter."
    ]
  },
  {
    id: "kadhi-pakora-punjabi",
    menuCategory: "Snacks & Street Food",
    name: "Kadhi Pakora Punjabi Style",
    description: "Sour yogurt curry with spiced gram flour fritters, a comfort food staple in Punjabi homes.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.88,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "sour_curd", name: "Sour Curd", qty: "2 cups", price: 20, available: true },
      { id: "besan", name: "Besan (Gram Flour)", qty: "1 cup", price: 15, available: true },
      { id: "onion", name: "Onion (for pakoras)", qty: "1", price: 5, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "dried_chili", name: "Whole Red Chilies", qty: "2", price: 30, available: false }
    ],
    steps: [
      "Mix curd, half the besan, and water into a thin slurry; boil until it thickens.",
      "Make spiced onion fritters (pakoras) with the rest of the besan and deep fry.",
      "Add pakoras to the boiling kadhi and simmer for 5 minutes.",
      "Finish with a tempering of ghee, mustard seeds, and whole red chilies.",
      "Serve hot with steamed rice."
    ]
  },
  {
    id: "amritsari-chole",
    menuCategory: "Curries & Gravies",
    name: "Amritsari Chole",
    description: "Dark, tangy, and spicy chickpea curry from Amritsar, uniquely flavored with tea-bag tinting.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.90,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "chickpeas", name: "Kabuli Chana (soaked)", qty: "1.5 cups", price: 25, available: true },
      { id: "tea_bag", name: "Tea Bag (for color)", qty: "1", price: 5, available: true },
      { id: "amritsari_chole_masala", name: "Chole Masala Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "anardana", name: "Pomegranate Seeds Powder", qty: "1 tsp", price: 10, available: true },
      { id: "onion", name: "Onion paste", qty: "1/2 cup", price: 20, available: false }
    ],
    steps: [
      "Pressure cook soaked chickpeas with the tea bag until very soft and dark.",
      "Sauté onion paste and ginger-garlic until brown.",
      "Add the special spice powder and anardana powder.",
      "Add cooked chickpeas and a little stock; mash some chickpeas to thicken the gravy.",
      "Simmer until the gravy is dark and tangy."
    ]
  },
  {
    id: "punjabi-kadhi-chawal",
    menuCategory: "Rice & Biryani",
    name: "Punjabi Kadhi Chawal",
    description: "The classic Punjabi meal of tangy yogurt curry with fritters served over fluffy basmati rice.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.92,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "basmati_rice", name: "Basmati Rice", qty: "2 cups", price: 30, available: true },
      { id: "kadhi", name: "Prepared Kadhi Pakora", qty: "as needed", price: 40, available: true }
    ],
    steps: [
      "Wash and soak basmati rice for 20 minutes.",
      "Cook rice with double the water until fluffy.",
      "Prepare a fresh Punjabi kadhi with onion pakoras.",
      "Serve the hot kadhi poured over a mound of steaming rice.",
      "Add a spoonful of ghee on top for the authentic touch."
    ]
  },
  {
    id: "baingan-bharta-punjabi",
    menuCategory: "Dry & Stir-Fried",
    name: "Baingan Bharta Punjabi Style",
    description: "Smoky fire-roasted eggplant mash cooked with plenty of onions, tomatoes, and peas.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.81,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "brinjal", name: "Large Eggplant", qty: "1", price: 15, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato (chopped)", qty: "2", price: 10, available: true },
      { id: "peas", name: "Green Peas (optional)", qty: "1/4 cup", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Apply oil to the eggplant and roast over an open flame until charred and soft.",
      "Peel the skin and mash the flesh.",
      "Sauté onions and green chilies in oil.",
      "Add tomatoes and peas; cook until soft.",
      "Add the mashed eggplant and salt; cook for 10 minutes on high heat to blend flavors."
    ]
  },
  {
    id: "gobi-aloo-punjabi",
    menuCategory: "Curries & Gravies",
    name: "Gobi Aloo",
    description: "Classic Punjabi dry curry with cauliflower florets and potatoes, flavored with ginger and turmeric.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.78,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "cauliflower", name: "Cauliflower (florets)", qty: "1 medium", price: 25, available: true },
      { id: "potato", name: "Potatoes (cubed)", qty: "2", price: 10, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tbsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/2 tsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Sauté potatoes in oil until half-cooked; set aside.",
      "In the same pan, sauté cauliflower florets on high heat.",
      "Add ginger juliennes, turmeric, and green chilies.",
      "Return potatoes to the pan and add salt.",
      "Cover and cook on low heat until vegetables are tender but not mushy."
    ]
  },
  {
    id: "kali-dal-punjabi",
    menuCategory: "Curries & Gravies",
    name: "Kali Dal",
    description: "Whole black lentils slow-cooked until creamy, a lighter yet flavorful version of Dal Makhani.",
    type: "Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.85,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "black_gram", name: "Whole Urad Dal (Black)", qty: "1 cup", price: 30, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "cream", name: "Fresh Cream", qty: "2 tbsp", price: 20, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 25, available: true },
      { id: "red_chili", name: "Red Chili Powder", qty: "1 tsp", price: 10, available: false }
    ],
    steps: [
      "Soak the dal for 4 hours; pressure cook until very soft.",
      "Sauté ginger-garlic paste and spices in ghee.",
      "Add the cooked dal and mash some grains to make it creamy.",
      "Simmer on low heat for 20 minutes.",
      "Stir in cream and finish with a fresh tempering of cumin."
    ]
  },
  {
    id: "paneer-bhurji-punjabi",
    menuCategory: "Dry & Stir-Fried",
    name: "Paneer Bhurji",
    description: "Crumbled cottage cheese scrambled with onions, tomatoes, and a heavy dose of fresh herbs.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 90,
    popularity: 0.88,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Breakfast"],
    ingredients: [
      { id: "paneer", name: "Fresh Paneer", qty: "250g", price: 60, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "tomato", name: "Tomato (chopped)", qty: "1", price: 5, available: true },
      { id: "ginger_chili", name: "Ginger & Green Chili", qty: "minced", price: 10, available: true },
      { id: "butter", name: "Butter", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Crumble fresh paneer by hand and set aside.",
      "Sauté onions and ginger-chili mince in butter.",
      "Add tomatoes and sauté until soft.",
      "Add the crumbled paneer and salt.",
      "Toss on high heat for 2-3 minutes; garnish with plenty of coriander."
    ]
  },
  {
    id: "punjabi-rajma-masala",
    menuCategory: "Curries & Gravies",
    name: "Punjabi Rajma Masala",
    description: "Hearty red kidney beans simmered in a thick, spicy tomato-based gravy, the quintessential Punjabi Sunday meal.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 85,
    popularity: 0.94,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "rajma", name: "Red Kidney Beans (soaked)", qty: "1 cup", price: 30, available: true },
      { id: "onion", name: "Onion paste", qty: "1/2 cup", price: 15, available: true },
      { id: "tomato", name: "Tomato Puree", qty: "1 cup", price: 20, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook soaked rajma until soft.",
      "Sauté onion paste until brown; add ginger-garlic and tomato puree.",
      "Cook until oil separates from the masala.",
      "Add the cooked beans and simmer for 15 minutes to thicken.",
      "Serve hot with jeera rice."
    ]
  },
  {
    id: "kadhai-paneer-punjabi",
    menuCategory: "Curries & Gravies",
    name: "Kadhai Paneer",
    description: "Paneer cubes and crunchy bell peppers cooked in a spicy, freshly pounded coriander and chili masala.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 110,
    popularity: 0.89,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "paneer", name: "Paneer cubes", qty: "250g", price: 60, available: true },
      { id: "capsicum", name: "Bell Pepper (cubed)", qty: "1", price: 15, available: true },
      { id: "kadhai_masala", name: "Pounded Whole Spices", qty: "1 tbsp", price: 10, available: true },
      { id: "tomato", name: "Tomato (cubed)", qty: "1", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 15, available: false }
    ],
    steps: [
      "Dry roast whole coriander and dried red chilies; pound into a coarse powder.",
      "Sauté bell peppers and tomato cubes in oil briefly; set aside.",
      "Sauté the pounded masala and ginger in oil.",
      "Add paneer and sautéed vegetables.",
      "Simmer for 5 minutes and serve dry with hot rotis."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "amritsari-kulcha",
    menuCategory: "Breads",
    name: "Amritsari Kulcha",
    description: "Crispy, flaky tandoor-baked flatbread stuffed with spiced potatoes and onions, served with lots of white butter.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.95,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Snacks", "Breakfast"],
    ingredients: [
      { id: "maida", name: "Maida (Flour)", qty: "2 cups", price: 20, available: true },
      { id: "potato", name: "Potato (boiled & mashed)", qty: "1 cup", price: 10, available: true },
      { id: "onion", name: "Finely chopped Onion", qty: "1/4 cup", price: 5, available: true },
      { id: "anardana", name: "Pomegranate Powder", qty: "1 tsp", price: 5, available: true },
      { id: "butter", name: "White Butter", qty: "1/4 cup", price: 30, available: false }
    ],
    steps: [
      "Make a layered dough with flour and oil.",
      "Prepare a spicy potato-onion stuffing.",
      "Stuff the dough and roll into thick discs.",
      "Bake in a very hot oven or tandoor until crispy and dark golden.",
      "Crush with hands to separate layers and top with white butter."
    ]
  },
  {
    id: "punjabi-samosa",
    menuCategory: "Snacks & Street Food",
    name: "Punjabi Samosa",
    description: "The classic triangular fried pastry stuffed with a heavy potato-pea masala flavored with coriander seeds.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.93,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "maida", name: "Maida", qty: "2 cups", price: 20, available: true },
      { id: "potato", name: "Potatoes (boiled cubes)", qty: "1 cup", price: 10, available: true },
      { id: "ajwain", name: "Ajwain Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "peas", name: "Peas", qty: "1/4 cup", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 25, available: false }
    ],
    steps: [
      "Knead a firm dough with flour and ajwain.",
      "Sauté boiled potatoes and peas with coarsely crushed coriander seeds.",
      "Shape dough portions into cones and fill with potato mixture.",
      "Seal and deep fry on very low heat initially to get a crispy, non-bubbled crust.",
      "Serve hot with tamarind chutney."
    ]
  },
  {
    id: "pinni-punjabi",
    menuCategory: "Snacks & Street Food",
    name: "Pinni",
    description: "Wholesome whole wheat and ghee energy balls enriched with nuts and edible gum, a winter staple.",
    type: "Vegetarian",
    time: 30,
    servings: 6,
    difficulty: "Medium",
    cost: 85,
    popularity: 0.82,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "wheat_flour", name: "Whole Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "1 cup", price: 40, available: true },
      { id: "sugar", name: "Powdered Sugar", qty: "1 cup", price: 10, available: true },
      { id: "nuts", name: "Crushed Almonds", qty: "1/4 cup", price: 15, available: true }
    ],
    steps: [
      "Roast wheat flour in ghee on low heat until it turns deep golden and fragrant.",
      "Turn off heat and let it cool slightly.",
      "Add powdered sugar and crushed nuts.",
      "Roll while warm into small tight balls.",
      "Store in a jar for a long shelf life."
    ]
  },
  {
    id: "gur-wale-chawal",
    menuCategory: "Rice & Biryani",
    name: "Gur Wale Chawal",
    description: "Sweet jaggery-flavored rice cooked with whole spices and garnished with dry fruits.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.74,
    tags: ["Punjab", "Punjabi", "North Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "rice", name: "Basmati Rice", qty: "1 cup", price: 15, available: true },
      { id: "jaggery", name: "Jaggery (Gur)", qty: "3/4 cup", price: 20, available: true },
      { id: "cloves", name: "Cloves and Cardamom", qty: "small amount", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Soak rice for 20 minutes.",
      "Melt jaggery in 2 cups of water and strain.",
      "Sauté whole spices in ghee; add rice and sauté briefly.",
      "Add jaggery water and cook until water is absorbed.",
      "Fluff and serve warm."
    ]
  },
  {
    id: "chicken-pakora-punjabi",
    menuCategory: "Snacks & Street Food",
    name: "Chicken Pakora Punjabi",
    description: "Spiced boneless chicken pieces dipped in a gram flour batter and fried until extremely crunchy.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.89,
    tags: ["Punjab", "Punjabi", "North Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (boneless bits)", qty: "300g", price: 100, available: true },
      { id: "besan", name: "Besan", qty: "1/2 cup", price: 15, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "ajwain", name: "Ajwain", qty: "1/2 tsp", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 100, available: false }
    ],
    steps: [
      "Marinate chicken bits with lemon, salt, and garlic paste.",
      "Make a thick batter of besan, spices, and ajwain.",
      "Dip chicken in batter and deep fry until dark golden.",
      "Serve as a spicy appetizer with onion rings."
    ]
  },
  {
    "id": "pb-salad-kachumber",
    "menuCategory": "Salads",
    "name": "Kachumber",
    "description": "A classic North Indian side salad of finely diced cucumber, tomato, and onion, sharpened with lime and roasted cumin.",
    "type": "Vegetarian",
    "time": 10,
    "servings": 4,
    "difficulty": "Easy",
    "cost": 40,
    "popularity": 0.92,
    "tags": [
      "Punjab",
      "North Indian",
      "Vegetarian",
      "Salads",
      "Healthy",
      "Quick"
    ],
    "healthTags": [
      "low-calorie",
      "digestive-friendly",
      "raw-vegan"
    ],
    "ingredients": [
      {
        "id": "cucumber",
        "name": "Diced Cucumber",
        "qty": "1 cup",
        "price": 15,
        "available": true
      },
      {
        "id": "tomato",
        "name": "Diced Tomato",
        "qty": "1 cup",
        "price": 15,
        "available": true
      },
      {
        "id": "onion",
        "name": "Diced Onion",
        "qty": "1/2 cup",
        "price": 10,
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
        "id": "coriander",
        "name": "Chopped Coriander Leaves",
        "qty": "2 tbsp",
        "price": 5,
        "available": true
      },
      {
        "id": "lime_juice",
        "name": "Lime Juice",
        "qty": "1 tbsp",
        "price": 5,
        "available": true
      },
      {
        "id": "cumin_powder",
        "name": "Roasted Cumin Powder",
        "qty": "1/2 tsp",
        "price": 5,
        "available": true
      },
      {
        "id": "black_salt",
        "name": "Black Salt",
        "qty": "1/4 tsp",
        "price": 3,
        "available": true
      }
    ],
    "steps": [
      "Combine cucumber, tomato, onion, and green chili in a bowl.",
      "Add lime juice, roasted cumin, black salt, and regular salt.",
      "Toss well and garnish with coriander. Serve immediately."
    ]
  },
  {
    "id": "pb-salad-laccha-pyaaz",
    "menuCategory": "Salads",
    "name": "Laccha Pyaaz",
    "description": "Thinly sliced onion rings tossed with lime, chaat masala, and mint — the classic tandoori-side salad found at every Punjabi dhaba.",
    "type": "Vegetarian",
    "time": 10,
    "servings": 4,
    "difficulty": "Easy",
    "cost": 30,
    "popularity": 0.95,
    "tags": [
      "Punjab",
      "North Indian",
      "Vegetarian",
      "Salads",
      "Quick",
      "Dhaba Style"
    ],
    "healthTags": [
      "digestive-friendly",
      "low-calorie"
    ],
    "ingredients": [
      {
        "id": "red_onion",
        "name": "Thinly Sliced Red Onion",
        "qty": "2 cups",
        "price": 15,
        "available": true
      },
      {
        "id": "lime_juice",
        "name": "Lime Juice",
        "qty": "1 tbsp",
        "price": 5,
        "available": true
      },
      {
        "id": "chaat_masala",
        "name": "Chaat Masala",
        "qty": "1/2 tsp",
        "price": 5,
        "available": true
      },
      {
        "id": "mint_leaves",
        "name": "Chopped Mint Leaves",
        "qty": "1 tbsp",
        "price": 3,
        "available": true
      },
      {
        "id": "red_chili_powder",
        "name": "Red Chili Powder",
        "qty": "1 pinch",
        "price": 2,
        "available": true
      }
    ],
    "steps": [
      "Soak sliced onions in cold water for 10 minutes to reduce sharpness, then drain well.",
      "Toss with lime juice, chaat masala, mint, chili powder, and salt. Serve immediately alongside grilled/tandoori dishes."
    ]
  },
  {
    "id": "pb-salad-mooli",
    "menuCategory": "Salads",
    "name": "Mooli Salad",
    "description": "A peppery grated radish salad brightened with lime and roasted cumin — a simple winter staple across North India.",
    "type": "Vegetarian",
    "time": 10,
    "servings": 4,
    "difficulty": "Easy",
    "cost": 30,
    "popularity": 0.86,
    "tags": [
      "Punjab",
      "North Indian",
      "Vegetarian",
      "Salads",
      "Healthy",
      "Winter Special"
    ],
    "healthTags": [
      "low-calorie",
      "digestive-friendly",
      "detox-friendly"
    ],
    "ingredients": [
      {
        "id": "mooli",
        "name": "Grated White Radish (Mooli)",
        "qty": "2 cups",
        "price": 15,
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
        "id": "coriander",
        "name": "Chopped Coriander Leaves",
        "qty": "2 tbsp",
        "price": 5,
        "available": true
      },
      {
        "id": "lime_juice",
        "name": "Lime Juice",
        "qty": "1 tbsp",
        "price": 5,
        "available": true
      },
      {
        "id": "cumin_powder",
        "name": "Roasted Cumin Powder",
        "qty": "1/2 tsp",
        "price": 5,
        "available": true
      },
      {
        "id": "black_salt",
        "name": "Black Salt",
        "qty": "1/4 tsp",
        "price": 3,
        "available": true
      }
    ],
    "steps": [
      "Squeeze grated radish gently to remove excess water.",
      "Combine with green chili and coriander.",
      "Add lime juice, cumin powder, black salt, and salt.",
      "Toss and serve fresh."
    ]
  },

  {
    "id": "pb-soup-dal-shorba",
    "menuCategory": "Soups",
    "name": "Dal Shorba",
    "description": "A silky, thin lentil broth from North Indian dining traditions, lightly spiced and finished with a swirl of cream.",
    "type": "Vegetarian",
    "time": 25,
    "servings": 4,
    "difficulty": "Easy",
    "cost": 45,
    "popularity": 0.91,
    "tags": [
      "Punjab",
      "North Indian",
      "Vegetarian",
      "Soups",
      "Lentils",
      "Comfort Food"
    ],
    "healthTags": [
      "high-protein",
      "digestive-friendly"
    ],
    "ingredients": [
      {
        "id": "moong_dal",
        "name": "Cooked & Blended Moong Dal",
        "qty": "1/2 cup",
        "price": 15,
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
        "id": "garlic",
        "name": "Minced Garlic",
        "qty": "2 cloves",
        "price": 3,
        "available": true
      },
      {
        "id": "ginger",
        "name": "Minced Ginger",
        "qty": "1 tsp",
        "price": 3,
        "available": true
      },
      {
        "id": "tomato",
        "name": "Chopped Tomato",
        "qty": "1",
        "price": 10,
        "available": true
      },
      {
        "id": "turmeric",
        "name": "Turmeric Powder",
        "qty": "1/4 tsp",
        "price": 2,
        "available": true
      },
      {
        "id": "cream",
        "name": "Fresh Cream",
        "qty": "1 tbsp",
        "price": 5,
        "available": true
      },
      {
        "id": "ghee",
        "name": "Ghee",
        "qty": "1 tsp",
        "price": 5,
        "available": true
      }
    ],
    "steps": [
      "Heat ghee, temper cumin seeds.",
      "Add garlic, ginger, and tomato; sauté until soft.",
      "Add turmeric and blended dal along with water.",
      "Simmer 10 minutes, strain if a smoother texture is desired.",
      "Swirl in cream, garnish with coriander. Serve hot."
    ]
  }
,
  {
    "id": "sd-soup-kadhi-shorba",
    "menuCategory": "Soups",
    "name": "Sindhi Kadhi Shorba",
    "description": "A thinned, tangy gram-flour broth infused with vegetables, inspired by Sindhi kadhi but served light as a soup.",
    "type": "Vegetarian",
    "time": 25,
    "servings": 4,
    "difficulty": "Medium",
    "cost": 40,
    "popularity": 0.86,
    "tags": [
      "Sindhi",
      "North Indian",
      "Vegetarian",
      "Soups",
      "Tangy",
      "Gram Flour"
    ],
    "healthTags": [
      "digestive-friendly",
      "low-calorie"
    ],
    "ingredients": [
      {
        "id": "besan",
        "name": "Gram Flour (Besan)",
        "qty": "2 tbsp",
        "price": 5,
        "available": true
      },
      {
        "id": "tamarind",
        "name": "Tamarind Pulp",
        "qty": "1 tsp",
        "price": 3,
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
        "id": "green_chili",
        "name": "Slit Green Chili",
        "qty": "1",
        "price": 2,
        "available": true
      },
      {
        "id": "oil",
        "name": "Oil",
        "qty": "1 tbsp",
        "price": 5,
        "available": true
      }
    ],
    "steps": [
      "Whisk gram flour with 1 cup water until lump-free.",
      "Heat oil, temper cumin and mustard seeds, curry leaves, and green chili.",
      "Add turmeric, then the gram flour mixture, stirring continuously.",
      "Add tamarind pulp and remaining water; simmer 15 minutes, stirring occasionally.",
      "Season with salt, garnish with coriander. Serve hot."
    ]
  }
,
  {
    "id": "pb-soup-palak-shorba",
    "menuCategory": "Soups",
    "name": "Palak Shorba",
    "description": "A silky spinach soup finished with garlic and a touch of cream, popular as a light starter in North Indian meals.",
    "type": "Vegetarian",
    "time": 20,
    "servings": 4,
    "difficulty": "Easy",
    "cost": 45,
    "popularity": 0.9,
    "tags": [
      "Punjab",
      "North Indian",
      "Vegetarian",
      "Soups",
      "Spinach",
      "Healthy"
    ],
    "healthTags": [
      "iron-rich",
      "antioxidant-rich",
      "low-calorie"
    ],
    "ingredients": [
      {
        "id": "spinach",
        "name": "Blanched Spinach",
        "qty": "2 cups",
        "price": 20,
        "available": true
      },
      {
        "id": "garlic",
        "name": "Minced Garlic",
        "qty": "2 cloves",
        "price": 3,
        "available": true
      },
      {
        "id": "onion",
        "name": "Chopped Onion",
        "qty": "1/4 cup",
        "price": 5,
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
        "id": "cream",
        "name": "Fresh Cream",
        "qty": "1 tbsp",
        "price": 5,
        "available": true
      },
      {
        "id": "butter",
        "name": "Butter",
        "qty": "1 tsp",
        "price": 5,
        "available": true
      }
    ],
    "steps": [
      "Blend blanched spinach with a little water into a smooth puree.",
      "Heat butter, temper cumin seeds, sauté garlic and onion until soft.",
      "Add spinach puree and remaining stock; simmer 8-10 minutes.",
      "Season with black pepper and salt.",
      "Swirl in cream before serving. Serve hot."
    ]
  }
];
