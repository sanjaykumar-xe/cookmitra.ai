import { Recipe } from './types';

export const biharRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "bihari-mutton-curry",
    name: "Bihari Mutton Curry",
    description: "A rustic and robust mutton curry made with mustard oil and a unique blend of roasted spices, typical of Bihari households.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 420,
    popularity: 0.88,
    tags: ["Bihar", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "4 tbsp", price: 30, available: true },
      { id: "onion", name: "Onions (sliced)", qty: "3 large", price: 15, available: true },
      { id: "garlic", name: "Garlic cloves (whole)", qty: "2 bulbs", price: 10, available: true },
      { id: "spices", name: "Bihari Garam Masala", qty: "2 tbsp", price: 15, available: false }
    ],
    steps: [
      "Heat mustard oil to smoking point; sauté sliced onions until golden brown.",
      "Add ginger-garlic paste and whole garlic bulbs (a traditional touch).",
      "Add mutton pieces and roast (bhuna) on high heat for 10 minutes.",
      "Stir in turmeric, chili powder, and the special Bihari masala.",
      "Add water, cover, and slow cook until the meat is tender and gravy is dark and oily."
    ]
  },
  {
    id: "bihari-chicken-curry",
    name: "Bihari Chicken Curry",
    description: "A simple yet flavorful chicken curry cooked in mustard oil with a dominance of onions and garlic.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.85,
    tags: ["Bihar", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "onion", name: "Onions", qty: "3", price: 15, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "chili", name: "Whole Red Chilies", qty: "4", price: 10, available: false }
    ],
    steps: [
      "Heat mustard oil and temper with whole red chilies and cumin.",
      "Sauté onions until light brown; add garlic paste.",
      "Add chicken and fry until seared.",
      "Add turmeric, coriander powder, and salt.",
      "Simmer with minimal water until chicken is cooked and the gravy is thick and pungent."
    ]
  },
  {
    id: "machh-ka-salan",
    name: "Machh Ka Salan",
    description: "Traditional Bihari river fish curry prepared with a spicy mustard and garlic paste.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.82,
    tags: ["Bihar", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "river_fish", name: "Rohu or Catla Fish", qty: "500g", price: 200, available: true },
      { id: "mustard_paste", name: "Yellow Mustard Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "8", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 40, available: false }
    ],
    steps: [
      "Marinate fish with salt and turmeric; shallow fry in mustard oil and set aside.",
      "In the same oil, sauté a little mustard-garlic paste and green chilies.",
      "Add turmeric and chili powder; sauté for a minute.",
      "Add water and bring to a boil; gently slide in the fried fish.",
      "Simmer for 5 minutes until the gravy is pungent and coats the fish."
    ]
  },
  {
    id: "mutton-kaleji-bihari",
    name: "Mutton Kaleji Bihari",
    description: "Dry roasted spiced mutton liver, a popular snack or side dish in Bihari meat-eating traditions.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.78,
    tags: ["Bihar", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_liver", name: "Mutton Liver (Kaleji)", qty: "500g", price: 250, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "pepper", name: "Black Pepper", qty: "1 tsp", price: 30, available: false }
    ],
    steps: [
      "Sauté onions and ginger-garlic paste until brown.",
      "Add liver pieces and sear on high heat (bhunao) for 5-7 minutes.",
      "Add salt, turmeric, and lots of black pepper.",
      "Cook until the liver is tender but not tough.",
      "Finish with a squeeze of lemon and fresh coriander."
    ]
  },
  {
    id: "chicken-rezala-bihari",
    name: "Chicken Rezala Bihari",
    description: "A mild and aromatic white chicken curry influenced by Mughlai traditions, using yogurt and nut pastes.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 290,
    popularity: 0.75,
    tags: ["Bihar", "East Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1 cup", price: 20, available: true },
      { id: "cashew_paste", name: "Cashew Paste", qty: "2 tbsp", price: 40, available: true },
      { id: "onion_paste", name: "Boiled Onion Paste", qty: "1/2 cup", price: 10, available: true },
      { id: "mace", name: "Mace (Javitri)", qty: "pinch", price: 70, available: false }
    ],
    steps: [
      "Marinate chicken in curd and ginger-garlic paste for 1 hour.",
      "Sauté boiled onion paste in oil until translucent.",
      "Add chicken and cashew paste; cook on low heat.",
      "Add mace powder and salt; simmer until chicken is tender.",
      "The gravy should be smooth, white, and mildly fragrant."
    ]
  },
  {
    id: "anda-curry-bihari",
    name: "Anda Curry Bihari Style",
    description: "Boiled eggs simmered in a sharp mustard oil gravy with a deep red color and bold spices.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.81,
    tags: ["Bihar", "East Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 5, available: true },
      { id: "chili_powder", name: "Spicy Red Chili Powder", qty: "1 tsp", price: 60, available: false }
    ],
    steps: [
      "Halve boiled eggs and lightly sear in oil; set aside.",
      "Heat mustard oil and sauté onions until brown.",
      "Add tomatoes and dry spices; cook until oil separates.",
      "Add eggs and a little water; simmer for 5 minutes.",
      "Serve hot with rice or roti."
    ]
  },
  {
    id: "machh-bhuja",
    name: "Machh Bhuja",
    description: "A dry-roasted river fish fry, heavily seasoned with garlic and local Bihari spices.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.79,
    tags: ["Bihar", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish_bits", name: "River Fish (small chunks)", qty: "500g", price: 200, available: true },
      { id: "garlic_paste", name: "Garlic Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "chili_powder", name: "Chili Powder", qty: "1 tsp", price: 40, available: false }
    ],
    steps: [
      "Marinate fish with garlic paste, salt, and turmeric.",
      "Heat mustard oil in a heavy pan until smoking.",
      "Toss fish pieces and fry on high heat until crispy.",
      "Sauté until the masala dries up and coats the fish perfectly.",
      "Serve as a crunchy appetizer."
    ]
  },
  {
    id: "champaran-mutton",
    name: "Mutton Champaran Style (Ahuna Mutton)",
    description: "The legendary slow-cooked mutton from Champaran, prepared in an earthen pot (Handi) with whole garlic and raw spices.",
    type: "Non-Vegetarian",
    time: 90,
    servings: 4,
    difficulty: "Hard",
    cost: 450,
    popularity: 0.95,
    tags: ["Bihar", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton (fatty chunks)", qty: "500g", price: 350, available: true },
      { id: "whole_garlic", name: "Whole Garlic Bulbs", qty: "3", price: 15, available: true },
      { id: "mustard_oil", name: "Mustard Oil (raw)", qty: "1/2 cup", price: 30, available: true },
      { id: "onion", name: "Onions (thickly sliced)", qty: "4 large", price: 20, available: true },
      { id: "handi", name: "Earthen Handi", qty: "1", price: 35, available: false }
    ],
    steps: [
      "Mix mutton, raw mustard oil, onions, and whole garlic bulbs in a bowl with dry spices.",
      "Transfer the mixture into an earthen handi.",
      "Seal the lid with dough (dum style).",
      "Cook on a very low flame (or charcoal) for 1.5 hours.",
      "Shake the pot occasionally to prevent sticking. Open and serve the melt-in-mouth meat."
    ]
  },
  {
    id: "chicken-bhuna-bihari",
    name: "Chicken Bhuna Bihari",
    description: "A thick and spicy chicken preparation where the meat is roasted with spices until the liquid is almost evaporated.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.83,
    tags: ["Bihar", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "onion", name: "Onions (sliced)", qty: "2", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tbsp", price: 10, available: true },
      { id: "black_pepper", name: "Crushed Black Pepper", qty: "1 tsp", price: 100, available: false }
    ],
    steps: [
      "Sauté onions until deep brown.",
      "Add chicken and sear on high heat.",
      "Add spices and salt; roast for 15 minutes without adding water.",
      "The chicken should cook in its own juices and the onion base.",
      "Garnish with lots of coriander and green chilies."
    ]
  },
  {
    id: "kadhi-machhi",
    name: "Kadhi Machhi",
    description: "A rare and tangy Bihari fish curry where fish steaks are cooked in a yogurt and gram-flour based gravy.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 310,
    popularity: 0.76,
    tags: ["Bihar", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Fish Slices", qty: "500g", price: 200, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1 cup", price: 20, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "2 tbsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 85, available: false }
    ],
    steps: [
      "Fry the fish slices and set aside.",
      "Whisk curd and besan into a smooth thin mixture.",
      "Heat oil, temper with mustard seeds and red chilies.",
      "Pour in the yogurt mixture and simmer until it thickens slightly.",
      "Add the fried fish and cook for 5 minutes. Serve with rice."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "litti-chokha",
    name: "Litti Chokha",
    description: "The ultimate soul food of Bihar—roasted wheat balls stuffed with sattu, served with smoky mashed vegetables.",
    type: "Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 90,
    popularity: 0.94,
    tags: ["Bihar", "East Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "sattu", name: "Roasted Sattu", qty: "1 cup", price: 15, available: true },
      { id: "baingan", name: "Large Brinjal", qty: "1", price: 15, available: true },
      { id: "mustard_oil", name: "Raw Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "ajwain", name: "Ajwain Seeds", qty: "1/2 tsp", price: 30, available: false }
    ],
    steps: [
      "Mix sattu with ginger, garlic, chilies, lemon, and raw mustard oil (stuffing).",
      "Knead wheat dough and stuff it with the sattu mixture; shape into balls (litti).",
      "Roast the littis over charcoal or in an oven until firm and charred.",
      "For chokha, roast brinjal, potato, and tomato; mash them with raw mustard oil and salt.",
      "Crack open littis, dip in ghee, and serve with hot chokha."
    ]
  },
  {
    id: "chana-ghugni",
    name: "Chana Ghugni",
    description: "A spicy and tangy curry made with dried yellow peas, a popular Bihari evening staple.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.88,
    tags: ["Bihar", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "yellow_peas", name: "Dried Yellow Peas (soaked)", qty: "1.5 cups", price: 20, available: true },
      { id: "onion", name: "Onion", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 10, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 25, available: false }
    ],
    steps: [
      "Pressure cook the soaked peas until tender.",
      "Sauté onions and ginger-garlic paste until brown.",
      "Add spices and tomatoes; cook until soft.",
      "Add the cooked peas and simmer for 10 minutes until the gravy is thick.",
      "Garnish with raw onions and sev."
    ]
  },
  {
    id: "dal-pitha",
    name: "Dal Pitha",
    description: "Steamed rice flour dumplings stuffed with a spicy lentil paste, a healthy and filling Bihari snack.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.81,
    tags: ["Bihar", "East Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 20, available: true },
      { id: "chana_dal", name: "Soaked Chana Dal", qty: "1 cup", price: 15, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "garlic", name: "Garlic", qty: "4 cloves", price: 35, available: false }
    ],
    steps: [
      "Grind chana dal with chilies and garlic into a thick paste.",
      "Knead rice flour with warm water into a soft dough.",
      "Stuff small dough discs with the dal paste and seal (semi-circle shape).",
      "Steam for 15-20 minutes until firm.",
      "Serve warm with spicy chutney."
    ]
  },
  {
    id: "kadhi-bihari",
    name: "Kadhi Bihari Style",
    description: "A tangy yogurt-based curry with soft gram flour dumplings (Bari), uniquely seasoned with panchphoran.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.84,
    tags: ["Bihar", "East Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "besan", name: "Besan", qty: "1.5 cups", price: 15, available: true },
      { id: "yogurt", name: "Sour Curd", qty: "1 cup", price: 15, available: true },
      { id: "panchphoran", name: "Panchphoran Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 35, available: false }
    ],
    steps: [
      "Make soft fried dumplings (bari) from besan and water.",
      "Prepare a thin mixture of curd, besan, and water.",
      "Simmer the mixture until it boils and thickens slightly.",
      "Add the fried baris and cook for 5 minutes.",
      "Temper with mustard seeds and whole red chilies in oil."
    ]
  },
  {
    id: "sattu-paratha",
    name: "Sattu Paratha",
    description: "Whole wheat flatbread stuffed with a spicy roasted gram flour mixture, a nutrient-dense Bihari breakfast.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.90,
    tags: ["Bihar", "East Indian", "Vegetarian", "Breakfast"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "sattu", name: "Sattu Flour", qty: "1 cup", price: 15, available: true },
      { id: "pickle_oil", name: "Mango Pickle Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "ajwain", name: "Ajwain Seeds", qty: "1/2 tsp", price: 20, available: false }
    ],
    steps: [
      "Mix sattu with spices, pickle oil, and finely chopped onions.",
      "Knead wheat dough; stuff small portions with the sattu mix.",
      "Roll into flatbreads and cook on a tawa with oil/ghee.",
      "Serve hot with curd or aloo chokha."
    ]
  },
  {
    id: "bhindi-bihari",
    name: "Bhindi Bihari Style",
    description: "Dry okra stir-fry with a distinct panchphoran tempering and spicy mustard oil flavor.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.72,
    tags: ["Bihar", "East Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "bhindi", name: "Okra (Bhindi)", qty: "250g", price: 20, available: true },
      { id: "panchphoran", name: "Panchphoran", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "garlic", name: "Minced Garlic", qty: "1 tsp", price: 30, available: false }
    ],
    steps: [
      "Sauté okra in mustard oil with panchphoran seeds.",
      "Add minced garlic and dry spices.",
      "Stir-fry on high heat for 5-7 minutes to maintain crispness.",
      "Finish with a sprinkle of amchur (optional)."
    ]
  },
  {
    id: "aloo-chokha",
    name: "Aloo Chokha",
    description: "Classic Bihari mashed potato seasoned with raw mustard oil, roasted red chilies, and raw onions.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.92,
    tags: ["Bihar", "East Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "potato", name: "Boiled Potatoes", qty: "4", price: 15, available: true },
      { id: "mustard_oil", name: "Raw Mustard Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "red_chili", name: "Roasted Whole Red Chili", qty: "2", price: 5, available: true },
      { id: "onion", name: "Raw Onion (chopped)", qty: "1", price: 20, available: false }
    ],
    steps: [
      "Mash boiled potatoes while warm.",
      "Crush roasted red chilies into the potatoes.",
      "Mix in raw onions, green chilies, salt, and raw mustard oil.",
      "The raw oil is essential for the authentic smoky flavor."
    ]
  },
  {
    id: "baingan-chokha",
    name: "Baingan Chokha",
    description: "Smoky roasted mashed brinjal with mustard oil and garlic, a mandatory side for Litti.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.90,
    tags: ["Bihar", "East Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "large_brinjal", name: "Large Brinjal", qty: "1", price: 15, available: true },
      { id: "mustard_oil", name: "Raw Mustard Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves (roasted)", qty: "4", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 25, available: false }
    ],
    steps: [
      "Roast whole brinjal on an open flame until the skin chars.",
      "Peel and mash the flesh with roasted garlic.",
      "Stir in raw mustard oil, salt, and green chilies.",
      "Mix well and serve with hot littis."
    ]
  },
  {
    id: "dal-bihari",
    name: "Dal Bihari (Arhar Dal)",
    description: "Simple tempered pigeon pea dal with a punchy garlic and red chili tadka.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.85,
    tags: ["Bihar", "East Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "toor_dal", name: "Arhar Dal", qty: "1 cup", price: 30, available: true },
      { id: "garlic", name: "Garlic cloves (crushed)", qty: "6", price: 5, available: true },
      { id: "red_chili", name: "Whole Red Chili", qty: "2", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook dal with turmeric and salt until mushy.",
      "Heat mustard oil and temper with whole red chilies and lots of garlic.",
      "Add a pinch of hing.",
      "Pour the tempering over the dal and cover immediately."
    ]
  },
  {
    id: "kaddu-bhaji-bihari",
    name: "Kaddu Bhaji Bihari Style",
    description: "Sweet and spicy pumpkin stir-fry with a hint of panchphoran.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.70,
    tags: ["Bihar", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "pumpkin", name: "Yellow Pumpkin (cubed)", qty: "500g", price: 20, available: true },
      { id: "panchphoran", name: "Panchphoran", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1 tbsp", price: 10, available: true },
      { id: "jaggery", name: "Sugar/Jaggery", qty: "1/2 tsp", price: 25, available: false }
    ],
    steps: [
      "Heat mustard oil and temper with panchphoran seeds.",
      "Add pumpkin cubes and turmeric.",
      "Cook on medium heat until soft.",
      "Add salt and a pinch of sugar to balance the heat."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "sattu-snack-balls",
    name: "Sattu Sharbat Snack Balls",
    description: "Protein-rich energy bites made from roasted gram flour, salt, and spices.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.82,
    tags: ["Bihar", "East Indian", "Vegetarian", "Snacks", "Healthy"],
    ingredients: [
      { id: "sattu", name: "Roasted Sattu", qty: "2 cups", price: 20, available: true },
      { id: "onion", name: "Raw Onion (minced)", qty: "2 tbsp", price: 5, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "water", name: "Water", qty: "minimal", price: 0, available: true }
    ],
    steps: [
      "Mix sattu with minced onions, salt, and spices.",
      "Add very little water and lemon juice to bind.",
      "Shape into small balls and serve as a quick energy snack."
    ]
  },
  {
    id: "khaja",
    name: "Khaja",
    description: "Flaky and crisp layered sweet pastry soaked in sugar syrup, a traditional festive snack.",
    type: "Vegetarian",
    time: 35,
    servings: 6,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.89,
    tags: ["Bihar", "East Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "maida", name: "Maida", qty: "2 cups", price: 20, available: true },
      { id: "sugar", name: "Sugar", qty: "1.5 cups", price: 15, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 20, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 35, available: false }
    ],
    steps: [
      "Make a layered dough with flour and ghee.",
      "Roll and cut into small strips.",
      "Deep fry until golden and crispy.",
      "Soak in hot sugar syrup for 5 minutes."
    ]
  },
  {
    id: "thekua",
    name: "Thekua",
    description: "Sturdy and sweet fried wheat-jaggery cookies, the signature prasad of Chhath Puja.",
    type: "Vegetarian",
    time: 35,
    servings: 6,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.95,
    tags: ["Bihar", "East Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1 cup", price: 15, available: true },
      { id: "coconut", name: "Dry Coconut bits", qty: "2 tbsp", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 30, available: false }
    ],
    steps: [
      "Mix flour with melted jaggery and coconut bits.",
      "Press into small wooden molds or flatten by hand.",
      "Deep fry on low heat until dark brown and firm.",
      "Cool completely to harden."
    ]
  },
  {
    id: "pua",
    name: "Pua",
    description: "Sweet fried pancakes made from wheat flour and mashed banana, a festive Bihari treat.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.81,
    tags: ["Bihar", "East Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "1 cup", price: 10, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 cup", price: 10, available: true },
      { id: "banana", name: "Mashed Banana", qty: "1", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 40, available: false }
    ],
    steps: [
      "Mix flour, sugar, and mashed banana with a little water into a thick batter.",
      "Let the batter rest for 30 minutes.",
      "Deep fry small spoonfuls until golden and puffy.",
      "Serve warm."
    ]
  },
  {
    id: "fish-pakora-bihari",
    name: "Fish Pakora Bihari Style",
    description: "Crispy river fish fritters coated in a spiced gram flour batter with a hint of garlic.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.84,
    tags: ["Bihar", "East Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "fish_bits", name: "Small Fish", qty: "300g", price: 150, available: true },
      { id: "besan", name: "Gram Flour", qty: "1/2 cup", price: 10, available: true },
      { id: "chili_powder", name: "Chili Powder", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 90, available: false }
    ],
    steps: [
      "Marinate fish bits with salt and turmeric.",
      "Make a thick batter of besan, chili powder, and garlic.",
      "Coat fish and deep fry until very crispy.",
      "Serve as a spicy appetizer."
    ]
  }
];
