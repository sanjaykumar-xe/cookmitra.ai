import { Recipe } from './types';

export const telanganaRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (15) ---
  {
    id: "hyderabadi-chicken-biryani",
    menuCategory: "Rice & Biryani",
    name: "Hyderabadi Chicken Biryani",
    description: "The world-famous dum-cooked layered biryani where raw marinated chicken is cooked slowly with fragrant basmati rice.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 320,
    popularity: 0.95,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "basmati_rice", name: "Basmati Rice", qty: "2 cups", price: 80, available: true },
      { id: "yogurt", name: "Thick Yogurt", qty: "1/2 cup", price: 15, available: true },
      { id: "saffron", name: "Saffron", qty: "pinch", price: 50, available: true },
      { id: "biryani_spices", name: "Shahi Jeera & Whole Spices", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Marinate raw chicken with yogurt, ginger-garlic paste, and special biryani spices for 4 hours.",
      "Parboil basmati rice with whole spices until 70% cooked.",
      "Layer the marinated chicken at the bottom of a heavy pot and top with parboiled rice.",
      "Add saffron milk, fried onions (birista), and mint leaves on top.",
      "Seal the pot with dough (dum) and cook on low heat for 45 minutes.",
      "Let it rest for 15 minutes before serving hot."
    ]
  },
  {
    id: "hyderabadi-mutton-biryani",
    menuCategory: "Rice & Biryani",
    name: "Hyderabadi Mutton Biryani",
    description: "A rich and aromatic layered mutton biryani cooked in the traditional 'Kachchi Yakhni' style.",
    type: "Non-Vegetarian",
    time: 75,
    servings: 4,
    difficulty: "Hard",
    cost: 420,
    popularity: 0.93,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "basmati_rice", name: "Aromatic Basmati Rice", qty: "2 cups", price: 80, available: true },
      { id: "raw_papaya", name: "Raw Papaya Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "ghee", name: "Pure Ghee", qty: "4 tbsp", price: 60, available: true },
      { id: "fried_onions", name: "Fried Onions", qty: "1 cup", price: 10, available: false }
    ],
    steps: [
      "Marinate mutton with papaya paste, yogurt, and spices for at least 6 hours.",
      "Soak basmati rice and cook it until it's half done.",
      "In a heavy bottomed pot, spread the mutton and layer with partially cooked rice.",
      "Top with ghee, fried onions, and coriander.",
      "Seal and cook on dum for 60 minutes on a very low flame.",
      "Gently mix and serve with Mirchi Ka Salan."
    ]
  },
  {
    id: "haleem",
    menuCategory: "Curries & Gravies",
    name: "Haleem",
    description: "A nutritious, slow-cooked porridge of wheat, lentils, and meat, traditionally served during Ramadan.",
    type: "Non-Vegetarian",
    time: 120,
    servings: 6,
    difficulty: "Hard",
    cost: 250,
    popularity: 0.94,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Boneless Mutton", qty: "500g", price: 350, available: true },
      { id: "broken_wheat", name: "Broken Wheat (Dalia)", qty: "1 cup", price: 20, available: true },
      { id: "mixed_lentils", name: "Chana & Moong Dal", qty: "1/4 cup", price: 15, available: true },
      { id: "ghee", name: "Pure Ghee", qty: "1/2 cup", price: 80, available: true },
      { id: "cashews", name: "Cashews", qty: "10", price: 30, available: false }
    ],
    steps: [
      "Soak broken wheat and lentils for 2 hours.",
      "Cook mutton with ginger-garlic paste and spices until very soft.",
      "Cook the wheat and lentils separately until they turn mushy.",
      "Combine meat and wheat; mash thoroughly using a heavy wooden masher (ghootna) until smooth.",
      "Add lots of ghee and simmer, mashing continuously to achieve a paste-like consistency.",
      "Garnish with fried onions, lemon, and ginger juliennes."
    ]
  },
  {
    id: "chicken-marag",
    menuCategory: "Curries & Gravies",
    name: "Chicken Marag",
    description: "A thin, spicy, and extremely flavorful chicken bone soup, a staple starter at Hyderabadi weddings.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.82,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken_bones", name: "Chicken with bones", qty: "500g", price: 140, available: true },
      { id: "cashew_paste", name: "Cashew Nut Paste", qty: "2 tbsp", price: 40, available: true },
      { id: "cream", name: "Fresh Cream", qty: "2 tbsp", price: 25, available: true },
      { id: "peppercorns", name: "Black Peppercorns", qty: "1 tsp", price: 5, available: true },
      { id: "mint", name: "Fresh Mint", qty: "handful", price: 5, available: false }
    ],
    steps: [
      "Sauté whole spices and sliced onions in ghee until translucent.",
      "Add chicken bones and sauté until seared.",
      "Add ginger-garlic paste, salt, and lots of crushed black pepper.",
      "Pour in water and pressure cook for 4-5 whistles until the meat is falling off the bone.",
      "Stir in cashew paste and fresh cream to give it a slight body.",
      "Simmer for 5 minutes and serve hot with Sheermal or Naan."
    ]
  },
  {
    id: "mutton-marag",
    menuCategory: "Curries & Gravies",
    name: "Mutton Marag",
    description: "A rich and thin mutton soup made with tender meat on the bone, flavored with cashews and pepper.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.85,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_bones", name: "Mutton with bones", qty: "500g", price: 350, available: true },
      { id: "onion", name: "Sliced Onions", qty: "2 large", price: 15, available: true },
      { id: "whole_spices", name: "Cinnamon, Cardamom, Cloves", qty: "as needed", price: 20, available: true },
      { id: "coconut_milk", name: "Coconut Milk (optional)", qty: "1/4 cup", price: 20, available: true },
      { id: "pepper", name: "Black Pepper", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Pressure cook mutton bones with onions, ginger-garlic paste, and whole spices for 8-10 whistles.",
      "Extract the broth and separate the meat; discard excess whole spices.",
      "Grind cashews and peppercorns into a fine paste.",
      "Add the paste to the boiling broth and simmer.",
      "Adjust consistency with a little water or coconut milk.",
      "Serve piping hot with bread."
    ]
  },
  {
    id: "boti-kurma",
    menuCategory: "Curries & Gravies",
    name: "Boti Kurma",
    description: "A traditional Hyderabadi specialty where mutton offal is cooked in a spicy and tangy gravy.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 300,
    popularity: 0.76,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "boti", name: "Mutton Boti (cleaned)", qty: "500g", price: 200, available: true },
      { id: "chana_dal", name: "Chana Dal", qty: "2 tbsp", price: 5, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "2 tbsp", price: 5, available: true },
      { id: "chili_powder", name: "Spicy Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Cooking Oil", qty: "3 tbsp", price: 40, available: false }
    ],
    steps: [
      "Thoroughly clean the boti and pressure cook with chana dal and salt until tender.",
      "In a separate pan, sauté onions and ginger-garlic paste.",
      "Add the pre-cooked boti and dal along with the spices.",
      "Stir in tamarind pulp and simmer for 15 minutes.",
      "Cook until the gravy is thick and the oil separates.",
      "Serve hot with rice or rotis."
    ]
  },
  {
    id: "shikampuri-kebab",
    menuCategory: "Breads",
    name: "Shikampuri Kebab",
    description: "Melt-in-the-mouth minced mutton patties stuffed with a core of tangy yogurt and onions.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Hard",
    cost: 350,
    popularity: 0.81,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_mince", name: "Minced Mutton", qty: "500g", price: 350, available: true },
      { id: "hung_curd", name: "Hung Curd (Yogurt)", qty: "1/2 cup", price: 20, available: true },
      { id: "fried_onion", name: "Fried Onion (minced)", qty: "2 tbsp", price: 10, available: true },
      { id: "chana_dal", name: "Chana Dal", qty: "1/4 cup", price: 10, available: true },
      { id: "mint", name: "Mint Leaves", qty: "handful", price: 5, available: false }
    ],
    steps: [
      "Cook mutton mince with chana dal and spices until dry; grind into a smooth paste.",
      "For the filling, mix hung curd, minced fried onions, mint, and green chilies.",
      "Take a portion of meat paste, flatten it, place a teaspoon of filling in the center, and seal.",
      "Shape into round patties.",
      "Shallow fry on a tawa with ghee until golden brown on both sides.",
      "Serve as a regal appetizer."
    ]
  },
  {
    id: "pathar-ka-gosht",
    menuCategory: "Curries & Gravies",
    name: "Pathar Ka Gosht",
    description: "Slices of mutton marinated in spices and slow-cooked on a wide stone slab over charcoal.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 380,
    popularity: 0.84,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_slices", name: "Mutton Slices (very thin)", qty: "500g", price: 400, available: true },
      { id: "raw_papaya", name: "Raw Papaya Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "kebab_masala", name: "Hyderabadi Kebab Masala", qty: "2 tbsp", price: 20, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 40, available: true },
      { id: "lemon", name: "Lemon", qty: "1", price: 5, available: false }
    ],
    steps: [
      "Marinate thin mutton slices with papaya paste and spices for 4 hours.",
      "Heat a wide stone slab (or heavy iron griddle) until very hot.",
      "Place marinated slices on the slab and drizzle with ghee.",
      "Cook on medium heat, flipping occasionally, until the meat is charred and tender.",
      "Serve hot with onion rings and lemon wedges."
    ]
  },
  {
    id: "dum-ka-murgh",
    menuCategory: "Curries & Gravies",
    name: "Dum Ka Murgh",
    description: "Chicken marinated in a rich paste of nuts and slow-cooked (dum) for a silky, rich finish.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.87,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "cashews", name: "Cashews & Almonds", qty: "1/4 cup", price: 60, available: true },
      { id: "fried_onions", name: "Fried Onions", qty: "1/2 cup", price: 15, available: true },
      { id: "yogurt", name: "Whisked Yogurt", qty: "1/2 cup", price: 15, available: true },
      { id: "saffron", name: "Saffron", qty: "pinch", price: 40, available: false }
    ],
    steps: [
      "Make a smooth paste of cashews, almonds, and fried onions.",
      "Marinate chicken with this paste, yogurt, ginger-garlic, and spices.",
      "Place in a heavy-bottomed pot and seal the lid.",
      "Cook on very low flame (dum) for 35-40 minutes.",
      "Do not open the lid during cooking.",
      "Finish with a drizzle of saffron milk."
    ]
  },
  {
    id: "chicken-do-pyaza-hyderabadi",
    menuCategory: "Curries & Gravies",
    name: "Chicken Do Pyaza Hyderabadi",
    description: "A flavorful chicken curry featuring onions added at two different stages for texture and sweetness.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.80,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken pieces", qty: "500g", price: 150, available: true },
      { id: "onions_sliced", name: "Onions (sliced)", qty: "2 large", price: 15, available: true },
      { id: "onions_cubed", name: "Onions (cubed)", qty: "1 large", price: 10, available: true },
      { id: "tomato", name: "Tomato (chopped)", qty: "1", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Sauté the sliced onions until golden brown; add ginger-garlic paste and tomatoes.",
      "Add chicken and dry spices; sauté until the chicken is seared.",
      "Add half a cup of water and cook until chicken is 80% done.",
      "Stir in the cubed onions and cook for another 10 minutes.",
      "The cubed onions should be soft but retain their shape.",
      "Garnish with coriander and serve."
    ]
  },
  {
    id: "gongura-mutton",
    menuCategory: "Curries & Gravies",
    name: "Gongura Mutton",
    description: "A classic Telangana dish where tender mutton is cooked with the sharp, tangy punch of sorrel leaves.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.88,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "gongura", name: "Gongura Leaves (Sorrel)", qty: "2 bunches", price: 30, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "6", price: 5, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 25, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt and turmeric until tender.",
      "Sauté gongura leaves and green chilies until the leaves wilt; grind coarsely.",
      "In a pan, sauté onions and ginger-garlic paste until brown.",
      "Add the ground gongura paste and pre-cooked mutton pieces.",
      "Simmer for 15 minutes until the mutton absorbs the tanginess of the leaves.",
      "Finish with a tempering of garlic and dried red chilies."
    ]
  },
  {
    id: "kodi-kharam",
    menuCategory: "Curries & Gravies",
    name: "Kodi Kharam",
    description: "A fiery and dry chicken stir-fry from rural Telangana, heavily flavored with red chili and garlic.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.83,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (small bits)", qty: "500g", price: 150, available: true },
      { id: "dry_red_chili", name: "Whole Red Chilies", qty: "10", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "12", price: 5, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "3 sprigs", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "3 tbsp", price: 60, available: false }
    ],
    steps: [
      "Grind red chilies and garlic into a coarse, spicy paste.",
      "Boil chicken with salt and turmeric until 90% done; drain.",
      "Heat oil and fry lots of curry leaves until crisp.",
      "Add the garlic-chili paste and sauté for a minute.",
      "Add the pre-cooked chicken and toss on high heat until dry and fiery.",
      "Serve as a spicy side with rice."
    ]
  },
  {
    id: "talawa-gosht",
    menuCategory: "Protein Specialties",
    name: "Talawa Gosht",
    description: "Hyderabadi style deep-fried mutton pieces, crispy on the outside and juicy inside.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Hard",
    cost: 380,
    popularity: 0.86,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton (boneless)", qty: "500g", price: 350, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tbsp", price: 5, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "2 cups", price: 35, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt, turmeric, and ginger-garlic until 80% tender.",
      "Drain any stock and marinate the meat in chili powder and lemon juice.",
      "Heat oil in a kadai.",
      "Deep fry the mutton pieces in small batches until they turn dark brown and crispy.",
      "Drain on paper towels and toss with fried curry leaves.",
      "Serve hot with sliced onions."
    ]
  },
  {
    id: "natukodi-iguru",
    menuCategory: "Curries & Gravies",
    name: "Natukodi Iguru",
    description: "A thick and spicy country chicken preparation, a rural Telangana favorite known for its intense heat.",
    type: "Non-Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Hard",
    cost: 300,
    popularity: 0.79,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "country_chicken", name: "Natu Kodi (Country Chicken)", qty: "500g", price: 250, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "6", price: 5, available: true },
      { id: "masala", name: "Telangana Spice Mix", qty: "2 tbsp", price: 15, available: true },
      { id: "garlic", name: "Garlic", qty: "8 cloves", price: 20, available: false }
    ],
    steps: [
      "Pressure cook the country chicken for 8-10 whistles until tender.",
      "Sauté onions and green chilies until browned.",
      "Add ginger-garlic paste and the special spice mix.",
      "Add pre-cooked chicken and very little stock.",
      "Simmer on high heat until the gravy evaporates and forms a thick coating on the meat.",
      "Garnish with lots of coriander."
    ]
  },
  {
    id: "egg-biryani-hyderabadi",
    menuCategory: "Rice & Biryani",
    name: "Egg Biryani Hyderabadi",
    description: "A lighter version of the Hyderabadi biryani, featuring spiced boiled eggs layered with fragrant rice.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 3,
    difficulty: "Medium",
    cost: 150,
    popularity: 0.81,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 25, available: true },
      { id: "basmati_rice", name: "Basmati Rice", qty: "1.5 cups", price: 60, available: true },
      { id: "fried_onions", name: "Fried Onions", qty: "1/2 cup", price: 15, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1/4 cup", price: 10, available: true },
      { id: "mint", name: "Mint Leaves", qty: "handful", price: 35, available: false }
    ],
    steps: [
      "Sauté boiled eggs with a little chili powder and turmeric; set aside.",
      "Cook basmati rice with whole spices until 70% done.",
      "Make a small spiced gravy using yogurt, onions, and biryani spices.",
      "Layer the eggs, gravy, and rice in a pot.",
      "Top with mint, coriander, and fried onions.",
      "Cook on low heat (dum) for 15 minutes."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "mirchi-ka-salan",
    menuCategory: "Curries & Gravies",
    name: "Mirchi Ka Salan",
    description: "A rich, tangy, and nutty gravy made with long green chilies, the traditional partner to Hyderabadi Biryani.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.89,
    tags: ["Telangana", "South Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "large_chilies", name: "Bhavnagri/Banana Chilies", qty: "8", price: 25, available: true },
      { id: "peanuts", name: "Roasted Peanuts", qty: "1/4 cup", price: 15, available: true },
      { id: "sesame_seeds", name: "Sesame Seeds", qty: "2 tbsp", price: 10, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "2 tbsp", price: 5, available: true },
      { id: "dry_coconut", name: "Dry Coconut", qty: "2 tbsp", price: 40, available: false }
    ],
    steps: [
      "Make a smooth paste of peanuts, sesame, and dry coconut.",
      "Slit the chilies and sauté them in oil until the skin blisters; set aside.",
      "In the same oil, sauté onions and ginger-garlic paste.",
      "Add the nut paste and cook until fragrant; stir in tamarind pulp.",
      "Add the fried chilies and simmer until the gravy is thick and oil-rich.",
      "Serve hot with Biryani or Pulao."
    ]
  },
  {
    id: "bagara-baingan",
    menuCategory: "Curries & Gravies",
    name: "Bagara Baingan",
    description: "Small brinjals cooked in a creamy and tangy nut-based gravy, a Hyderabadi royal vegetarian specialty.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.88,
    tags: ["Telangana", "South Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "brinjal", name: "Small Purple Brinjals", qty: "8", price: 30, available: true },
      { id: "peanuts", name: "Peanuts", qty: "1/4 cup", price: 15, available: true },
      { id: "sesame", name: "Sesame Seeds", qty: "2 tbsp", price: 10, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "2 tbsp", price: 5, available: true },
      { id: "jaggery", name: "Jaggery (optional)", qty: "1 tsp", price: 35, available: false }
    ],
    steps: [
      "Slit brinjals into four quarters (stem intact) and deep fry until soft.",
      "Make a paste of roasted peanuts, sesame, and coconut.",
      "Sauté onions and spices; stir in the paste and tamarind water.",
      "Add fried brinjals and simmer for 15 minutes.",
      "The gravy should be thick and coat the brinjals.",
      "Serve with Bagara Rice."
    ]
  },
  {
    id: "khatti-dal",
    menuCategory: "Curries & Gravies",
    name: "Khatti Dal",
    description: "The soul of Hyderabadi home cooking—a simple, tangy dal spiked with tamarind and tempered with garlic.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.85,
    tags: ["Telangana", "South Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "2 tbsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 5, available: true },
      { id: "mustard", name: "Mustard & Cumin", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook dal with green chilies, salt, and turmeric until mushy.",
      "Stir in tamarind pulp and adjust consistency with water.",
      "Boil for 5 minutes until the raw tamarind smell goes away.",
      "Prepare tempering with mustard, cumin, dried red chilies, and crushed garlic.",
      "Pour the tempering over the dal and cover immediately to lock in the aroma."
    ]
  },
  {
    id: "sorakaya-curry",
    menuCategory: "Curries & Gravies",
    name: "Sorakaya Curry",
    description: "A light and cooling bottle gourd curry cooked with lentils and a subtle tempering.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.68,
    tags: ["Telangana", "South Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "bottle_gourd", name: "Bottle Gourd (Sorakaya)", qty: "1 large", price: 20, available: true },
      { id: "moong_dal", name: "Moong Dal", qty: "2 tbsp", price: 5, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ginger", name: "Ginger paste", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chili", qty: "2", price: 35, available: false }
    ],
    steps: [
      "Peel and cube the bottle gourd.",
      "Sauté onions and green chilies in oil.",
      "Add gourd cubes, moong dal, and turmeric.",
      "Add a splash of water, cover, and cook until the gourd is transparent and tender.",
      "Stir in salt and garnish with coriander."
    ]
  },
  {
    id: "palak-pappu",
    menuCategory: "Curries & Gravies",
    name: "Palak Pappu",
    description: "Nutritious and comforting spinach-dal, a daily staple in Telangana households.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.82,
    tags: ["Telangana", "South Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "spinach", name: "Fresh Spinach", qty: "1 bunch", price: 15, available: true },
      { id: "garlic", name: "Garlic", qty: "4 cloves", price: 5, available: true },
      { id: "dry_chili", name: "Dried Red Chilies", qty: "3", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook dal and chopped spinach together with green chilies.",
      "Mash with salt.",
      "Heat ghee and temper with mustard, cumin, and lots of crushed garlic.",
      "Add dried red chilies to the tempering.",
      "Mix the tempering into the dal."
    ]
  },
  {
    id: "chintakaya-pappu",
    menuCategory: "Curries & Gravies",
    name: "Chintakaya Pappu",
    description: "A seasonal specialty dal made with raw, green tamarind for a unique, sharp tang.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.70,
    tags: ["Telangana", "South Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "raw_tamarind", name: "Raw Tamarind (Chintakaya)", qty: "4-5", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 10, available: false }
    ],
    steps: [
      "Pressure cook dal with whole raw tamarind and green chilies.",
      "Separate the boiled tamarind, peel the skin, and extract the pulp into the dal.",
      "Mash the dal and pulp together with salt.",
      "Temper with mustard, cumin, and curry leaves in oil.",
      "Serve with hot rice and ghee."
    ]
  },
  {
    id: "uppu-kura",
    menuCategory: "Curries & Gravies",
    name: "Uppu Kura",
    description: "Simple, rustic dry stir-fry of seasonal vegetables, highlighting the natural flavors of the produce.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.55,
    tags: ["Telangana", "South Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mixed_veg", name: "Beans, Carrot, Cluster beans", qty: "300g", price: 30, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "urad_dal", name: "Urad Dal", qty: "1 tsp", price: 5, available: true },
      { id: "dry_chili", name: "Dry Red Chili", qty: "2", price: 5, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "1 sprig", price: 10, available: false }
    ],
    steps: [
      "Steam or boil vegetables until tender; drain completely.",
      "Heat oil and temper with mustard, urad dal, and red chili.",
      "Add curry leaves.",
      "Add vegetables and salt; stir-fry on high heat for 3 minutes to remove moisture.",
      "Serve as a healthy side."
    ]
  },
  {
    id: "bagara-rice",
    menuCategory: "Rice & Biryani",
    name: "Bagara Rice",
    description: "A fragrant and mildly spiced rice dish, the standard accompaniment for non-veg curries in Telangana.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 80,
    popularity: 0.86,
    tags: ["Telangana", "South Indian", "Vegetarian"],
    ingredients: [
      { id: "rice", name: "Sona Masuri Rice", qty: "2 cups", price: 30, available: true },
      { id: "whole_spices", name: "Bay leaf, Cinnamon, Cardamom", qty: "as needed", price: 15, available: true },
      { id: "onion", name: "Sliced Onion", qty: "1 large", price: 5, available: true },
      { id: "mint", name: "Fresh Mint & Coriander", qty: "handful", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Sauté onions and whole spices in ghee until onions are translucent.",
      "Add ginger-garlic paste and mint-coriander leaves; sauté for a minute.",
      "Add washed rice and double the quantity of water.",
      "Add salt.",
      "Cook until water is absorbed and rice is fluffy."
    ]
  },
  {
    id: "gongura-pachadi-telangana",
    menuCategory: "Sides & Accompaniments",
    name: "Gongura Pachadi",
    description: "A spicy and tangy sorrel leaf chutney, arguably the most beloved pickle in the region.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.90,
    tags: ["Telangana", "South Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "gongura", name: "Sorrel Leaves", qty: "1 bunch", price: 15, available: true },
      { id: "dry_red_chili", name: "Dried Red Chilies", qty: "8", price: 10, available: true },
      { id: "garlic", name: "Garlic", qty: "6 cloves", price: 5, available: true },
      { id: "coriander_seeds", name: "Coriander Seeds", qty: "1 tbsp", price: 5, available: true },
      { id: "fenugreek", name: "Fenugreek Seeds", qty: "1/4 tsp", price: 20, available: false }
    ],
    steps: [
      "Sauté gongura leaves in a little oil until they wilt and turn mushy; set aside.",
      "Dry roast red chilies, coriander seeds, and fenugreek; grind into a powder.",
      "Mix the leaves, spice powder, salt, and raw garlic; grind coarsely.",
      "Temper with mustard seeds and lots of oil to preserve."
    ]
  },
  {
    id: "sabzi-khatti-meethi",
    menuCategory: "Dry & Stir-Fried",
    name: "Sabzi Khatti Meethi",
    description: "A rare Hyderabadi vegetable curry that balances sweet and sour notes using jaggery and tamarind.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 85,
    popularity: 0.62,
    tags: ["Telangana", "South Indian", "Vegetarian"],
    ingredients: [
      { id: "mixed_veg", name: "Potato, Carrot, Peas", qty: "2 cups", price: 30, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 5, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1 tbsp", price: 5, available: true },
      { id: "peanut_powder", name: "Peanut Powder", qty: "2 tbsp", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 35, available: false }
    ],
    steps: [
      "Boil mixed vegetables until tender.",
      "Sauté onions and spices.",
      "Add tamarind juice and jaggery; boil for 2 minutes.",
      "Add vegetables and peanut powder.",
      "Simmer until gravy thickens."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "sarva-pindi",
    menuCategory: "Snacks & Street Food",
    name: "Sarva Pindi",
    description: "A savory, spicy rice flour griddle cake studded with peanuts, a signature rural Telangana snack.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.85,
    tags: ["Telangana", "South Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "rice_flour", name: "Rice Flour", qty: "2 cups", price: 30, available: true },
      { id: "peanuts", name: "Soaked Peanuts", qty: "2 tbsp", price: 10, available: true },
      { id: "chana_dal", name: "Soaked Chana Dal", qty: "1 tbsp", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 5, available: true },
      { id: "sesame", name: "Sesame Seeds", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Mix rice flour, peanuts, dal, sesame, spices, and ginger-garlic in a bowl.",
      "Add water slowly to make a soft dough.",
      "Take a heavy bottomed pan (sarva), grease it well, and press the dough thinly onto the surface.",
      "Make small holes in the dough and fill with oil.",
      "Cook on medium heat with a lid until the bottom is crispy and golden.",
      "Peel off and serve as a rustic tea-time snack."
    ]
  },
  {
    id: "sakinalu",
    menuCategory: "Snacks & Street Food",
    name: "Sakinalu",
    description: "Crispy, fried concentric circles made from rice flour and sesame, a traditional Sankranti specialty.",
    type: "Vegetarian",
    time: 35,
    servings: 6,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.78,
    tags: ["Telangana", "South Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "rice", name: "Raw Rice (soaked & ground)", qty: "2 cups", price: 30, available: true },
      { id: "sesame", name: "Sesame Seeds", qty: "1/4 cup", price: 20, available: true },
      { id: "ajwain", name: "Ajwain (Vamu)", qty: "1 tsp", price: 5, available: true },
      { id: "salt", name: "Salt", qty: "to taste", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "2 cups", price: 40, available: false }
    ],
    steps: [
      "Soak rice overnight, drain, and grind into a slightly moist powder.",
      "Mix rice powder, sesame seeds, and ajwain with very little water to a tight dough.",
      "Take a small portion, roll it into a thin rope using fingers on a cloth.",
      "Coil the rope into concentric circles.",
      "Let them dry on the cloth for 30 minutes.",
      "Deep fry until golden brown and very crunchy."
    ]
  },
  {
    id: "double-ka-meetha",
    menuCategory: "Desserts & Sweets",
    name: "Double Ka Meetha",
    description: "Iconic Hyderabadi bread pudding made with fried bread slices soaked in thickened saffron milk.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.91,
    tags: ["Telangana", "South Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "bread", name: "White Bread", qty: "8 slices", price: 20, available: true },
      { id: "milk", name: "Full Cream Milk", qty: "1L", price: 40, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 cup", price: 10, available: true },
      { id: "ghee", name: "Ghee for frying", qty: "1/2 cup", price: 80, available: true },
      { id: "saffron", name: "Saffron", qty: "pinch", price: 40, available: false }
    ],
    steps: [
      "Deep fry bread slices in ghee until dark golden and crispy; drain.",
      "Boil milk and reduce it by half until thick.",
      "Add sugar and saffron to the reduced milk.",
      "Layer the fried bread in a tray and pour the hot milk over it.",
      "Let it soak until the bread absorbs all the milk.",
      "Garnish with fried cashews and serve warm."
    ]
  },
  {
    id: "qubani-ka-meetha",
    menuCategory: "Desserts & Sweets",
    name: "Qubani Ka Meetha",
    description: "A royal Hyderabadi dessert made from stewed dried apricots, traditionally served with malai.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 110,
    popularity: 0.88,
    tags: ["Telangana", "South Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "dried_apricots", name: "Dried Apricots", qty: "250g", price: 200, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 cup", price: 10, available: true },
      { id: "cream", name: "Fresh Cream / Malai", qty: "1/2 cup", price: 30, available: true },
      { id: "almonds", name: "Apricot Kernels", qty: "inside pits", price: 0, available: true },
      { id: "rose_water", name: "Rose Water", qty: "1 tsp", price: 20, available: false }
    ],
    steps: [
      "Soak dried apricots overnight; remove the pits (save them) and extract the kernels.",
      "Boil the apricots in their soaking water until soft and mushy.",
      "Add sugar and cook while mashing until it forms a thick, jam-like consistency.",
      "Stir in rose water.",
      "Serve in a bowl topped with a dollop of fresh cream and the apricot kernels."
    ]
  },
  {
    id: "chicken-majestic",
    menuCategory: "Snacks & Street Food",
    name: "Chicken Majestic",
    description: "A popular Hyderabadi restaurant snack—dry fried chicken strips tossed in a spicy, tangy yogurt sauce.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.84,
    tags: ["Telangana", "South Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "chicken_strips", name: "Boneless Chicken strips", qty: "400g", price: 140, available: true },
      { id: "yogurt", name: "Curd", qty: "2 tbsp", price: 10, available: true },
      { id: "mint", name: "Fresh Mint", qty: "handful", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies (slit)", qty: "4", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "1/2 cup", price: 70, available: false }
    ],
    steps: [
      "Deep fry marinated chicken strips until golden; set aside.",
      "Heat a little oil and temper with cumin, garlic, and slit green chilies.",
      "Add fresh mint leaves and curry leaves.",
      "Stir in whisked curd and a little chili powder; cook for a minute.",
      "Toss the fried chicken in this sauce until dry and well-coated.",
      "Serve as a spicy appetizer."
    ]
  }
];
