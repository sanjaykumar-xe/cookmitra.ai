import { Recipe } from './types';

export const westBengalRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (10) ---
  {
    id: "machher-jhol-bengali",
    menuCategory: "Curries & Gravies",
    name: "Machher Jhol",
    description: "The soul of a Bengali meal—a light and healthy fish curry with potatoes and cauliflower, seasoned with ginger and cumin.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.90,
    tags: ["West Bengal", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Rohu or Catla Fish", qty: "500g", price: 200, available: true },
      { id: "potato", name: "Potato (wedges)", qty: "2 medium", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "ginger", name: "Ginger paste", qty: "1 tsp", price: 5, available: true },
      { id: "panch_phoron", name: "Panch Phoron (Five Spice)", qty: "1 tsp", price: 15, available: false }
    ],
    steps: [
      "Marinate fish with salt and turmeric; shallow fry in mustard oil and set aside.",
      "In the same oil, temper panch phoron and dried red chilies.",
      "Sauté potato wedges and cauliflower florets with turmeric.",
      "Add ginger paste and cumin powder; sauté with a little water.",
      "Add water and bring to a boil; gently slide in the fried fish.",
      "Simmer for 10 minutes and garnish with fresh coriander."
    ]
  },
  {
    id: "shorshe-ilish",
    menuCategory: "Curries & Gravies",
    name: "Shorshe Ilish",
    description: "The most prized Bengali delicacy—Hilsa fish cooked in a pungent and creamy mustard-poppy seed gravy.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 450,
    popularity: 0.95,
    tags: ["West Bengal", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "ilish", name: "Ilish (Hilsa Fish)", qty: "500g", price: 350, available: true },
      { id: "mustard_seeds", name: "Yellow and Black Mustard Paste", qty: "3 tbsp", price: 20, available: true },
      { id: "green_chili", name: "Green Chilies (slit)", qty: "6", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 30, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1 tsp", price: 5, available: false }
    ],
    steps: [
      "Lightly marinate ilish steaks with salt and turmeric.",
      "Mix mustard paste with water, turmeric, and a little salt; strain if necessary.",
      "Heat mustard oil and add green chilies.",
      "Pour in the mustard mixture and bring to a gentle simmer.",
      "Slide in the raw ilish steaks; cover and cook for 8-10 minutes.",
      "Drizzle raw mustard oil on top and serve with steamed rice."
    ]
  },
  {
    id: "kosha-mangsho-bengali",
    menuCategory: "Curries & Gravies",
    name: "Kosha Mangsho",
    description: "Iconic Bengali slow-cooked mutton curry, known for its deep brown color, rich spices, and velvety texture.",
    type: "Non-Vegetarian",
    time: 75,
    servings: 4,
    difficulty: "Hard",
    cost: 430,
    popularity: 0.92,
    tags: ["West Bengal", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "onion", name: "Onions (sliced)", qty: "4 large", price: 20, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "4 tbsp", price: 30, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1/2 cup", price: 10, available: true },
      { id: "garam_masala", name: "Bengali Garam Masala", qty: "1 tsp", price: 20, available: false }
    ],
    steps: [
      "Marinate mutton with curd, ginger-garlic paste, and mustard oil for 2 hours.",
      "Heat oil and fry whole spices; sauté onions until deep brown.",
      "Add marinated mutton and roast (kosha) on medium heat for 40 minutes, adding water in small splashes.",
      "Add turmeric and chili powder; continue roasting until the meat is dark and tender.",
      "The final gravy should be thick and coat the meat perfectly.",
      "Finish with ghee and garam masala."
    ]
  },
  {
    id: "chingri-malai-curry",
    menuCategory: "Curries & Gravies",
    name: "Chingri Malai Curry",
    description: "Classic festive prawn curry cooked in fresh coconut milk with subtle spices, a signature of Bengali weddings.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 400,
    popularity: 0.91,
    tags: ["West Bengal", "East Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "prawns", name: "Large Tiger Prawns", qty: "400g", price: 300, available: true },
      { id: "coconut_milk", name: "Fresh Coconut Milk", qty: "1.5 cups", price: 50, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "1 tbsp", price: 15, available: true },
      { id: "cinnamon", name: "Whole Spices", qty: "various", price: 10, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 tsp", price: 25, available: false }
    ],
    steps: [
      "Clean prawns but keep the tail intact; lightly fry with turmeric and set aside.",
      "Sauté whole spices in ghee and oil.",
      "Add ginger paste and sauté briefly; pour in coconut milk.",
      "Add salt, turmeric, and sugar.",
      "Bring to a simmer and add the prawns; cook for 5 minutes until prawns are tender.",
      "The gravy should be creamy, golden, and mildly sweet."
    ]
  },
  {
    id: "doi-maach-bengali",
    menuCategory: "Curries & Gravies",
    name: "Doi Maach",
    description: "Fish steaks cooked in a mild and fragrant yogurt-based gravy with a touch of sweetness and whole spices.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 330,
    popularity: 0.86,
    tags: ["West Bengal", "East Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "fish", name: "Rohu Slices", qty: "500g", price: 200, available: true },
      { id: "yogurt", name: "Thick Whisked Curd", qty: "1 cup", price: 20, available: true },
      { id: "sugar", name: "Sugar", qty: "1 tsp", price: 2, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "garam_masala", name: "Cardamom and Cinnamon", qty: "small amount", price: 100, available: false }
    ],
    steps: [
      "Shallow fry marinated fish slices and set aside.",
      "Sauté whole spices and onion paste in oil.",
      "Mix whisked yogurt with sugar and a little turmeric; pour into the pan on low heat.",
      "Add the fried fish and green chilies; simmer for 5 minutes.",
      "Garnish with ghee and serve with rice."
    ]
  },
  {
    id: "chicken-kosha-bengali",
    menuCategory: "Curries & Gravies",
    name: "Chicken Kosha",
    description: "Spicy and thick chicken curry roasted with onions and spices, following the traditional kosha method.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.85,
    tags: ["West Bengal", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "3 large", price: 15, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "3 tbsp", price: 30, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 70, available: false }
    ],
    steps: [
      "Sauté onions until deep brown.",
      "Add ginger-garlic paste and chicken; sear on high heat.",
      "Add spices and tomatoes; roast (kosha) for 20 minutes with splashes of water.",
      "Cover and slow cook until chicken is tender and gravy is dark brown.",
      "The result is a semi-dry, flavorful chicken dish."
    ]
  },
  {
    id: "bhetki-paturi",
    menuCategory: "Curries & Gravies",
    name: "Bhetki Paturi",
    description: "Barramundi fillets marinated in a sharp mustard-coconut paste, wrapped in banana leaves, and steamed to perfection.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 3,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.88,
    tags: ["West Bengal", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "bhetki", name: "Bhetki (Barramundi) Fillets", qty: "300g", price: 250, available: true },
      { id: "mustard_paste", name: "Mustard-Coconut Paste", qty: "1/2 cup", price: 30, available: true },
      { id: "banana_leaf", name: "Banana Leaves", qty: "2", price: 15, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 20, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 85, available: false }
    ],
    steps: [
      "Coat fish fillets with mustard-coconut paste and salt; let it marinate for 20 minutes.",
      "Wilt banana leaves over a flame to make them soft.",
      "Place each fillet on a leaf, top with raw mustard oil and a green chili.",
      "Wrap the leaf into a parcel and tie with a string.",
      "Steam or pan-roast the parcels for 15 minutes.",
      "Serve hot inside the leaf with rice."
    ]
  },
  {
    id: "kolkata-chicken-curry",
    menuCategory: "Curries & Gravies",
    name: "Kolkata Chicken Curry",
    description: "A comforting, mildly sweet chicken curry with large potato chunks, a staple on Sunday afternoons in Kolkata.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.83,
    tags: ["West Bengal", "East Indian", "Non-Vegetarian"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "potato", name: "Large Potato (halved)", qty: "2", price: 10, available: true },
      { id: "onion", name: "Onion", qty: "2", price: 10, available: true },
      { id: "sugar", name: "Sugar", qty: "1 tsp", price: 2, available: true },
      { id: "oil", name: "Cooking Oil", qty: "3 tbsp", price: 95, available: false }
    ],
    steps: [
      "Fry the potato halves and set aside.",
      "Caramelize sugar in oil to give a deep red color to the gravy.",
      "Sauté onions and ginger-garlic paste until brown.",
      "Add chicken and cook until opaque.",
      "Add turmeric, chili powder, and fried potatoes.",
      "Add water and simmer until chicken and potatoes are soft."
    ]
  },
  {
    id: "dimer-jhol",
    menuCategory: "Curries & Gravies",
    name: "Dimer Jhol",
    description: "Hard-boiled eggs and potatoes in a light, spiced Bengali gravy, the quintessential quick non-veg meal.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.89,
    tags: ["West Bengal", "East Indian", "Non-Vegetarian", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 30, available: true },
      { id: "potato", name: "Potato (wedges)", qty: "2", price: 10, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "2", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 15, available: true },
      { id: "spices", name: "Cumin and Coriander Powder", qty: "1 tsp", price: 45, available: false }
    ],
    steps: [
      "Sear boiled eggs and potatoes in oil with a pinch of turmeric.",
      "Heat mustard oil, temper with whole spices, and sauté onions.",
      "Add ginger paste and dry spices; cook until oil separates.",
      "Add water and bring to a boil.",
      "Add eggs and potatoes; simmer for 5 minutes until the gravy is light and flavorful."
    ]
  },
  {
    id: "mutton-kosha-alu",
    menuCategory: "Curries & Gravies",
    name: "Mutton Kosha with Alu",
    description: "The classic feast of slow-roasted mutton served with large fried potatoes that absorb the rich meat juices.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 420,
    popularity: 0.88,
    tags: ["West Bengal", "East Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 350, available: true },
      { id: "potato", name: "Potato (halved)", qty: "2 large", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "4 tbsp", price: 20, available: true },
      { id: "garam_masala", name: "Whole Spices", qty: "various", price: 15, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Marinate mutton in curd and spices for at least 2 hours.",
      "Deep fry large potato halves and set aside.",
      "Sauté onions and spices in mustard oil until brown.",
      "Roast (kosha) the mutton on low heat for 45 minutes until dark brown.",
      "Add the fried potatoes and a little stock.",
      "Simmer until the mutton is tender and the potatoes are soft but intact."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "aloo-posto-bengali",
    menuCategory: "Curries & Gravies",
    name: "Aloo Posto",
    description: "The most beloved Bengali comfort dish—potatoes cooked in a creamy, nutty poppy seed paste.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 75,
    popularity: 0.94,
    tags: ["West Bengal", "East Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "potato", name: "Potato (cubed)", qty: "4 large", price: 15, available: true },
      { id: "poppy_seeds", name: "Poppy Seeds (Posto)", qty: "3 tbsp", price: 40, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "nigella", name: "Kalonji (Nigella Seeds)", qty: "1/2 tsp", price: 5, available: false }
    ],
    steps: [
      "Grind poppy seeds into a smooth thick paste with green chilies.",
      "Heat mustard oil and temper with nigella seeds.",
      "Sauté potato cubes until lightly browned.",
      "Add a little water and salt; cover and cook until potatoes are tender.",
      "Stir in the poppy seed paste and cook for 2 minutes on low heat.",
      "Drizzle raw mustard oil on top and serve with biulir dal."
    ]
  },
  {
    id: "shukto-bengali",
    menuCategory: "Curries & Gravies",
    name: "Shukto",
    description: "A complex and cooling mixed vegetable stew with a hint of bitterness, traditionally the start of a multi-course meal.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.81,
    tags: ["West Bengal", "East Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "bitter_gourd", name: "Bitter Gourd", qty: "1", price: 10, available: true },
      { id: "mixed_veg", name: "Raw Banana, Yam, Drumstick", qty: "2 cups", price: 30, available: true },
      { id: "milk", name: "Milk", qty: "1/2 cup", price: 5, available: true },
      { id: "mustard_paste", name: "Mustard-Poppy Paste", qty: "2 tbsp", price: 15, available: true },
      { id: "panch_phoron", name: "Radhuni/Panch Phoron", qty: "1 tsp", price: 20, available: false }
    ],
    steps: [
      "Shallow fry bitter gourd slices and set aside.",
      "Sauté other vegetables in oil with panch phoron.",
      "Add mustard-poppy paste and ginger paste; sauté briefly.",
      "Add water and milk; simmer until vegetables are soft.",
      "Add the fried bitter gourd and a little ghee.",
      "The consistency should be light and the flavor uniquely balanced between bitter and creamy."
    ]
  },
  {
    id: "dhokar-dalna",
    menuCategory: "Curries & Gravies",
    name: "Dhokar Dalna",
    description: "Fried lentil cakes (dhoka) simmered in a spiced tomato-ginger gravy, a high-protein vegetarian delicacy.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.86,
    tags: ["West Bengal", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "chana_dal", name: "Chana Dal (soaked)", qty: "1.5 cups", price: 20, available: true },
      { id: "tomato", name: "Tomato", qty: "1", price: 10, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "asafoetida", name: "Hing", qty: "pinch", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1/2 cup", price: 50, available: false }
    ],
    steps: [
      "Grind chana dal with ginger and chilies into a paste.",
      "Cook the paste in a pan with hing until it thickens; spread on a plate and cut into diamonds.",
      "Deep fry the lentil diamonds (dhoka) until golden brown.",
      "Prepare a spiced tomato and ginger gravy.",
      "Add the fried dhokas to the boiling gravy and simmer for 5 minutes.",
      "Garnish with ghee and garam masala."
    ]
  },
  {
    id: "chholar-dal-bengali",
    menuCategory: "Curries & Gravies",
    name: "Chholar Dal",
    description: "Sweet and nutty Bengal gram dal flavored with coconut slices and aromatic whole spices, served with Luchi.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.88,
    tags: ["West Bengal", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "chana_dal", name: "Chana Dal", qty: "1 cup", price: 20, available: true },
      { id: "coconut_slices", name: "Fried Coconut Slices", qty: "2 tbsp", price: 10, available: true },
      { id: "sugar", name: "Sugar", qty: "1 tbsp", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "1 tbsp", price: 10, available: true },
      { id: "whole_spices", name: "Cardamom, Cinnamon", qty: "as needed", price: 20, available: false }
    ],
    steps: [
      "Pressure cook chana dal with turmeric until soft but still holding its shape.",
      "Heat ghee, fry coconut slices until brown, and set aside.",
      "Temper with whole spices, bay leaf, and ginger paste.",
      "Add the cooked dal, salt, and sugar.",
      "Simmer for 10 minutes until the dal thickens slightly.",
      "Stir in the fried coconut slices and serve."
    ]
  },
  {
    id: "begun-bhaja-dal-combo",
    menuCategory: "Curries & Gravies",
    name: "Begun Bhaja with Dal",
    description: "Classic Bengali meal pairing of thick, spicy fried brinjal slices with tempered yellow lentils.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.84,
    tags: ["West Bengal", "East Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "large_brinjal", name: "Large Brinjal (rounds)", qty: "1", price: 15, available: true },
      { id: "toor_dal", name: "Yellow Dal", qty: "1 cup", price: 25, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 10, available: true },
      { id: "sugar", name: "Sugar (for brinjal)", qty: "pinch", price: 15, available: false }
    ],
    steps: [
      "Marinate large brinjal rounds with turmeric, salt, and a pinch of sugar.",
      "Prepare a simple yellow dal tempered with cumin and ghee.",
      "Shallow fry the brinjal slices in mustard oil until they are soft and dark brown.",
      "Serve the hot fried brinjal along with the dal and steamed rice."
    ]
  },
  {
    id: "labra-bengali",
    menuCategory: "Curries & Gravies",
    name: "Labra",
    description: "A traditional mixed vegetable mush cooked with panch phoron and ginger, often served at religious festivals.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.79,
    tags: ["West Bengal", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "mixed_veg", name: "Pumpkin, Taro, Potato, Beans", qty: "2 cups", price: 30, available: true },
      { id: "panch_phoron", name: "Panch Phoron", qty: "1 tsp", price: 5, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 15, available: true },
      { id: "ginger", name: "Grated Ginger", qty: "1 tsp", price: 25, available: false }
    ],
    steps: [
      "Sauté panch phoron and whole red chilies in mustard oil.",
      "Add all the mixed vegetables and sauté for 5 minutes.",
      "Add turmeric, salt, and grated ginger.",
      "Cover and slow cook until the vegetables release their water and become soft and mashed.",
      "Stir occasionally to ensure it doesn't stick; the final dish should be thick and integrated."
    ]
  },
  {
    id: "cholar-ghonto",
    menuCategory: "Dry & Stir-Fried",
    name: "Cholar Ghonto",
    description: "A dry preparation of Bengal gram and grated coconut seasoned with traditional spices.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.72,
    tags: ["West Bengal", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "chana_dal", name: "Chana Dal (boiled)", qty: "1.5 cups", price: 25, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "1/2 cup", price: 15, available: true },
      { id: "ginger", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "cumin", name: "Cumin Powder", qty: "1/2 tsp", price: 30, available: false }
    ],
    steps: [
      "Boil chana dal until tender but firm (not mushy).",
      "Sauté ginger paste and cumin in oil.",
      "Add grated coconut and sauté for 2 minutes.",
      "Add the dal and spices; stir-fry on high heat to remove all moisture.",
      "Garnish with a little ghee and serve as a side."
    ]
  },
  {
    id: "bandhakopir-ghonto",
    menuCategory: "Dry & Stir-Fried",
    name: "Bandhakopir Ghonto",
    description: "Bengali style cabbage curry cooked with potato cubes, green peas, and fresh coconut.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.76,
    tags: ["West Bengal", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "cabbage", name: "Cabbage (shredded)", qty: "3 cups", price: 20, available: true },
      { id: "potato", name: "Potato (cubed)", qty: "1", price: 10, available: true },
      { id: "peas", name: "Green Peas", qty: "1/4 cup", price: 10, available: true },
      { id: "spices", name: "Cumin and Turmeric", qty: "1 tsp", price: 25, available: false }
    ],
    steps: [
      "Sauté potato cubes until golden; set aside.",
      "In the same oil, temper with whole spices and sauté shredded cabbage.",
      "Add turmeric, chili powder, and cumin powder.",
      "Add potatoes and peas; cover and cook until cabbage is soft.",
      "Finish with a pinch of sugar and ghee."
    ]
  },
  {
    id: "aloo-potol-posto-bengali",
    menuCategory: "Curries & Gravies",
    name: "Aloo Potol Posto",
    description: "Pointed gourd and potatoes cooked in a rich and aromatic poppy seed paste.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 75,
    popularity: 0.82,
    tags: ["West Bengal", "East Indian", "Vegetarian"],
    ingredients: [
      { id: "potol", name: "Pointed Gourd (Potol)", qty: "250g", price: 20, available: true },
      { id: "potato", name: "Potato (cubed)", qty: "2", price: 10, available: true },
      { id: "posto", name: "Poppy Seed Paste", qty: "3 tbsp", price: 35, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 10, available: false }
    ],
    steps: [
      "Lightly scrape and cut potol into halves; shallow fry with potato cubes.",
      "Add poppy seed paste and green chilies.",
      "Simmer for 10 minutes until the vegetables are tender.",
      "Finish with a dash of raw mustard oil."
    ]
  },
  {
    id: "mochar-ghonto-bengali",
    menuCategory: "Dry & Stir-Fried",
    name: "Mochar Ghonto",
    description: "Exquisite banana flower curry cooked with small potato cubes and grated coconut, featuring a complex spice profile.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 85,
    popularity: 0.88,
    tags: ["West Bengal", "East Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "mocha", name: "Banana Flower (cleaned)", qty: "2 cups", price: 30, available: true },
      { id: "potato", name: "Potato (tiny cubes)", qty: "1", price: 5, available: true },
      { id: "coconut", name: "Grated Coconut", qty: "2 tbsp", price: 10, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "2 tbsp", price: 40, available: false }
    ],
    steps: [
      "Clean and chop banana flower; boil with turmeric and drain water.",
      "Sauté potato cubes in mustard oil.",
      "Add boiled mocha and spices; roast for 10 minutes.",
      "Stir in coconut and sugar; simmer until the mixture is dry and fragrant.",
      "Finish with ghee and Bengali garam masala."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "beguni-bengali",
    menuCategory: "Snacks & Street Food",
    name: "Beguni",
    description: "Classic Bengali evening snack—thinly sliced brinjal dipped in a spiced gram flour batter and deep-fried.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.90,
    tags: ["West Bengal", "East Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "brinjal", name: "Brinjal (thin long slices)", qty: "1 large", price: 15, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "1 cup", price: 15, available: true },
      { id: "nigella", name: "Kalonji Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 20, available: false }
    ],
    steps: [
      "Slice brinjal into very thin, long strips; sprinkle with salt.",
      "Make a smooth batter with besan, kalonji, salt, and water.",
      "Dip each slice into the batter until evenly coated.",
      "Deep fry in hot oil until they puff up and turn golden-crisp.",
      "Serve hot with tea or alongside khichuri."
    ]
  },
  {
    id: "rasgulla-bengali",
    menuCategory: "Desserts & Sweets",
    name: "Rasgulla (Rosogolla)",
    description: "The world-famous Bengali sweet—spongy, melt-in-mouth balls of fresh cottage cheese soaked in a light sugar syrup.",
    type: "Vegetarian",
    time: 40,
    servings: 6,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.95,
    tags: ["West Bengal", "East Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "milk", name: "Full Cream Milk", qty: "1L", price: 50, available: true },
      { id: "sugar", name: "Sugar", qty: "2 cups", price: 20, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "2 tbsp", price: 5, available: true },
      { id: "water", name: "Water", qty: "4 cups", price: 15, available: false }
    ],
    steps: [
      "Curdle milk with lemon juice; drain and hang the chhena for 1 hour.",
      "Knead the fresh chhena for 10 minutes until smooth and non-greasy.",
      "Form into small balls (about 12).",
      "Prepare a thin sugar syrup in a large pot.",
      "Drop the balls into the boiling syrup and cook covered for 15 minutes.",
      "Allow to cool in the syrup; they should be spongy and light."
    ]
  },
  {
    id: "sandesh-bengali",
    menuCategory: "Desserts & Sweets",
    name: "Sandesh",
    description: "A delicate and aristocratic Bengali sweet made from hand-kneaded fresh cottage cheese and flavored with cardamom.",
    type: "Vegetarian",
    time: 30,
    servings: 6,
    difficulty: "Medium",
    cost: 95,
    popularity: 0.88,
    tags: ["West Bengal", "East Indian", "Vegetarian", "Snacks", "Dessert"],
    ingredients: [
      { id: "chhena", name: "Fresh Chhena (from 1L milk)", qty: "200g", price: 60, available: true },
      { id: "powdered_sugar", name: "Powdered Sugar", qty: "1/4 cup", price: 10, available: true },
      { id: "cardamom", name: "Cardamom Powder", qty: "pinch", price: 10, available: true },
      { id: "saffron", name: "Saffron strands", qty: "pinch", price: 15, available: false }
    ],
    steps: [
      "Knead fresh, dry chhena until very smooth.",
      "Heat the chhena in a non-stick pan on low heat with sugar.",
      "Stir continuously for 5 minutes until the mixture leaves the sides but remains moist.",
      "Add cardamom powder and mix.",
      "While still warm, press into molds or shape by hand into discs.",
      "Garnish with saffron and let it set."
    ]
  },
  {
    id: "ghugni-chaat-bengali",
    menuCategory: "Snacks & Street Food",
    name: "Ghugni Chaat",
    description: "A popular Kolkata street snack made with spiced dried yellow peas, topped with onions and tangy tamarind water.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.92,
    tags: ["West Bengal", "East Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "yellow_peas", name: "Dried Yellow Peas (soaked)", qty: "1.5 cups", price: 20, available: true },
      { id: "onion", name: "Raw Onion (chopped)", qty: "1/4 cup", price: 10, available: true },
      { id: "tamarind", name: "Tangy Tamarind Water", qty: "2 tbsp", price: 5, available: true },
      { id: "bhaja_masala", name: "Roasted Spice Powder", qty: "1 tsp", price: 25, available: false }
    ],
    steps: [
      "Pressure cook soaked yellow peas with turmeric and salt until tender.",
      "Sauté onions and spices to make a thick gravy base; add the peas.",
      "Simmer for 10 minutes until the consistency is thick.",
      "Pour into a bowl; top with raw onions, green chilies, and bhaja masala.",
      "Drizzle tamarind water on top and serve hot."
    ]
  },
  {
    id: "fish-fry-kolkata-style",
    menuCategory: "Snacks & Street Food",
    name: "Fish Fry Kolkata Style",
    description: "Famous diamond-shaped breaded fish fillets, marinated in a special green masala and fried until crispy.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 3,
    difficulty: "Medium",
    cost: 320,
    popularity: 0.93,
    tags: ["West Bengal", "East Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "bhetki", name: "Bhetki Fish Fillets", qty: "300g", price: 200, available: true },
      { id: "ginger_garlic", name: "Green Masala (Ginger-Garlic-Coriander)", qty: "2 tbsp", price: 10, available: true },
      { id: "breadcrumbs", name: "Fine Breadcrumbs", qty: "1 cup", price: 20, available: true },
      { id: "egg", name: "Beaten Egg", qty: "1", price: 10, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 80, available: false }
    ],
    steps: [
      "Marinate fish fillets in green masala, lemon, and salt for 1 hour.",
      "Form each fillet into a neat diamond shape.",
      "Dip in beaten egg and then roll in breadcrumbs, pressing firmly.",
      "Repeat the double-coating for extra crunch.",
      "Deep fry on medium heat until dark golden and crispy.",
      "Serve hot with Kashundi (mustard dip)."
    ]
  }
];
