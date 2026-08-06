import { Recipe } from './types';

export const andhraPradeshRecipes: Recipe[] = [
  // --- NON-VEGETARIAN (15) ---
  {
    id: "kodi-kura-andhra",
    name: "Andhra Chicken Curry (Kodi Kura)",
    description: "A fiery, red-colored chicken curry made with a unique blend of roasted spices and Guntur chilies.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.88,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (bone-in)", qty: "500g", price: 150, available: true },
      { id: "guntur_chili", name: "Guntur Red Chilies", qty: "6", price: 10, available: true },
      { id: "poppy_seeds", name: "Poppy Seeds (Gasa Gasalu)", qty: "1 tbsp", price: 20, available: false },
      { id: "onion", name: "Onions (chopped)", qty: "2 large", price: 15, available: true },
      { id: "coconut", name: "Fresh Coconut Paste", qty: "2 tbsp", price: 10, available: true }
    ],
    steps: [
      "Dry roast cinnamon, cloves, cardamom, and poppy seeds; grind into a fine powder.",
      "Heat oil and sauté onions until golden brown, then add ginger-garlic paste.",
      "Add chicken pieces, turmeric, and the spice powder; sauté until chicken is seared.",
      "Pour in water and salt; cover and cook until the chicken is tender.",
      "Add coconut paste and Guntur chili powder; simmer until the gravy thickens and oil floats on top."
    ]
  },
  {
    id: "gongura-chicken-andhra",
    name: "Gongura Chicken",
    description: "A signature Andhra dish featuring tender chicken cooked with tangy sorrel leaves (Gongura) and spicy masalas.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.85,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken pieces", qty: "500g", price: 150, available: true },
      { id: "gongura_leaves", name: "Sorrel Leaves (Gongura)", qty: "2 bunches", price: 30, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "6", price: 5, available: false }
    ],
    steps: [
      "Sauté gongura leaves and green chilies until the leaves wilt and turn into a soft mass; grind coarsely.",
      "Sauté onions and ginger-garlic paste in a separate pan.",
      "Add chicken and spices; cook until the chicken is almost done.",
      "Stir in the ground gongura paste and mix well.",
      "Simmer for 10 minutes until the chicken absorbs the tanginess of the leaves."
    ]
  },
  {
    id: "andhra-mutton-curry-rich",
    name: "Andhra Mutton Curry",
    description: "Intensely flavorful mutton curry made with a rich roasted coconut base and a heavy dose of black pepper.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 420,
    popularity: 0.82,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton pieces", qty: "500g", price: 350, available: true },
      { id: "dry_coconut", name: "Dry Coconut (Kobbari)", qty: "1/4 cup", price: 15, available: true },
      { id: "poppy_seeds", name: "Poppy Seeds", qty: "1 tbsp", price: 15, available: true },
      { id: "black_pepper", name: "Black Peppercorns", qty: "1 tsp", price: 5, available: true },
      { id: "onion", name: "Shallots/Onions", qty: "1/2 cup", price: 10, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt and turmeric until tender.",
      "Roast dry coconut, poppy seeds, and black pepper; grind into a smooth paste.",
      "Sauté onions and ginger-garlic paste until brown.",
      "Add the pre-cooked mutton and the ground paste; cook on low heat.",
      "Simmer until the gravy is thick and dark brown."
    ]
  },
  {
    id: "chepa-pulusu-andhra",
    name: "Chepa Pulusu",
    description: "The ultimate coastal Andhra fish curry, characterized by its sharp tamarind tang and fiery chili heat.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 350,
    popularity: 0.90,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Fresh Fish (Rohu/Murrel)", qty: "500g", price: 250, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1/2 cup", price: 10, available: true },
      { id: "fenugreek", name: "Fenugreek Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "chili_powder", name: "Spicy Red Chili Powder", qty: "2 tbsp", price: 15, available: true },
      { id: "green_chili", name: "Green Chilies (slit)", qty: "4", price: 5, available: false }
    ],
    steps: [
      "Soak tamarind and extract thick juice.",
      "In a wide earthen pot, sauté fenugreek seeds, mustard, and green chilies.",
      "Add onions and cook until translucent; pour in tamarind juice and chili powder.",
      "Bring the sauce to a boil; gently add the fish pieces.",
      "Simmer for 10-12 minutes without stirring (swirl the pot instead) until fish is cooked and gravy is tangy."
    ]
  },
  {
    id: "royyala-iguru-andhra",
    name: "Royyala Iguru",
    description: "A thick, semi-dry prawn preparation with a potent onion-tomato masala base.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 380,
    popularity: 0.84,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "prawns", name: "Medium Prawns (cleaned)", qty: "400g", price: 300, available: true },
      { id: "onion", name: "Onions (finely chopped)", qty: "2 large", price: 15, available: true },
      { id: "tomato", name: "Tomato (chopped)", qty: "1", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "1 sprig", price: 5, available: false }
    ],
    steps: [
      "Sauté onions until golden; add ginger-garlic paste and tomatoes.",
      "Cook until the tomatoes break down and form a thick paste.",
      "Add prawns, chili powder, and coriander powder; toss on high heat.",
      "Cover and simmer for 5-7 minutes; prawns release their own water.",
      "Open lid and cook until the liquid evaporates and the masala clings to the prawns."
    ]
  },
  {
    id: "kodi-vepudu-andhra",
    name: "Kodi Vepudu",
    description: "A dry-roasted Andhra chicken fry featuring a coarse masala of cashews, pepper, and coconut.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.81,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken (small pieces)", qty: "500g", price: 150, available: true },
      { id: "cashews", name: "Cashew Nuts", qty: "10", price: 20, available: true },
      { id: "peppercorns", name: "Black Peppercorns", qty: "1 tsp", price: 5, available: true },
      { id: "dry_chili", name: "Dry Red Chilies", qty: "4", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 30, available: false }
    ],
    steps: [
      "Dry roast whole spices and peppercorns; grind into a coarse powder.",
      "Boil chicken with salt and turmeric until 80% done.",
      "Heat ghee/oil and sauté cashews until golden.",
      "Add the pre-cooked chicken and the ground spice powder; stir-fry on high heat.",
      "Toss until the chicken is crispy on the outside and well-coated with the dry masala."
    ]
  },
  {
    id: "natu-kodi-pulusu-andhra",
    name: "Natu Kodi Pulusu",
    description: "Rustic country chicken curry with a thin, spicy gravy, a village specialty across Andhra Pradesh.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 320,
    popularity: 0.78,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "country_chicken", name: "Natu Kodi (Country Chicken)", qty: "500g", price: 250, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "2 tbsp", price: 5, available: true },
      { id: "onion", name: "Onions", qty: "2", price: 10, available: true },
      { id: "poppy_seeds", name: "Poppy Seeds", qty: "1 tbsp", price: 15, available: true },
      { id: "garlic", name: "Garlic", qty: "10 cloves", price: 5, available: false }
    ],
    steps: [
      "Pressure cook the tough country chicken for 8-10 whistles until tender.",
      "Grind onions, poppy seeds, and garlic into a paste.",
      "Sauté the paste in oil until the raw smell disappears.",
      "Add the cooked meat, stock, and tamarind water.",
      "Simmer for 15 minutes until the gravy is thin but highly flavorful."
    ]
  },
  {
    id: "guntur-chicken-andhra",
    name: "Guntur Chicken",
    description: "Famous for its extreme heat, this curry uses the legendary Guntur chilies for a deep red, spicy punch.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.86,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "guntur_chili", name: "Guntur Chili Powder", qty: "3 tbsp", price: 15, available: true },
      { id: "yogurt", name: "Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Marinate chicken in curd, lemon juice, and half the chili powder for 1 hour.",
      "Heat oil and sauté ginger-garlic paste until fragrant.",
      "Add the chicken and cook on high heat until the moisture is released.",
      "Add the rest of the Guntur chili powder and salt.",
      "Cook until the chicken is tender and the oil separates, turning the gravy a deep dark red."
    ]
  },
  {
    id: "andhra-chicken-biryani-spicy",
    name: "Andhra Chicken Biryani",
    description: "A spicy, layered biryani from coastal Andhra, often served with a fiery 'Khatta' (tangy gravy).",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 320,
    popularity: 0.89,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "basmati_rice", name: "Basmati Rice", qty: "2 cups", price: 80, available: true },
      { id: "chicken", name: "Chicken", qty: "500g", price: 150, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "whole_spices", name: "Cardamom, Cloves, Cinnamon", qty: "as needed", price: 15, available: true },
      { id: "biryani_masala", name: "Spicy Biryani Masala", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Marinate chicken with curd and spices for at least 2 hours.",
      "Parboil rice with whole spices until 70% cooked.",
      "In a heavy pot, layer the marinated chicken at the bottom and the rice on top.",
      "Seal the pot with dough and cook on low heat (dum) for 30 minutes.",
      "Let it rest for 15 minutes before opening and mixing gently."
    ]
  },
  {
    id: "kodi-kura-pulao-andhra",
    name: "Kodi Kura Pulao",
    description: "A rustic, one-pot chicken and rice dish, highly seasoned and easier to prepare than biryani.",
    type: "Non-Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.77,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "rice", name: "Sona Masuri Rice", qty: "2 cups", price: 40, available: true },
      { id: "chicken", name: "Chicken", qty: "400g", price: 120, available: true },
      { id: "onion", name: "Sliced Onions", qty: "2", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "6", price: 5, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 35, available: false }
    ],
    steps: [
      "Sauté onions and green chilies in ghee until slightly browned.",
      "Add chicken and sauté until the meat turns opaque.",
      "Add washed rice and double the quantity of water.",
      "Add salt and a pinch of turmeric.",
      "Cover and cook until all the water is absorbed and rice is fluffy."
    ]
  },
  {
    id: "chicken-65-andhra",
    name: "Chicken 65 (Andhra Style)",
    description: "Deep-fried, crispy chicken bites tossed in a spicy curd-based sauce with lots of curry leaves.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 240,
    popularity: 0.91,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Boneless Chicken", qty: "400g", price: 140, available: true },
      { id: "corn_flour", name: "Corn Flour", qty: "2 tbsp", price: 10, available: true },
      { id: "yogurt", name: "Curd", qty: "2 tbsp", price: 10, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "2 sprigs", price: 5, available: true },
      { id: "chili_powder", name: "Kashmiri Chili Powder", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Marinate chicken with corn flour, ginger-garlic paste, and spices for 30 minutes.",
      "Deep fry the chicken bites until crispy and golden; drain on paper towels.",
      "In a small pan, temper curry leaves and green chilies in oil.",
      "Add a whisked mixture of curd and chili powder to the pan.",
      "Toss the fried chicken in this sauce until it's well-coated and dry."
    ]
  },
  {
    id: "egg-curry-andhra",
    name: "Egg Curry Andhra Style",
    description: "Boiled eggs simmered in a tangy and spicy onion-tomato gravy, a common breakfast side for appam or dosa.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.80,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy", "Breakfast"],
    ingredients: [
      { id: "eggs", name: "Boiled Eggs", qty: "4", price: 20, available: true },
      { id: "onion", name: "Onions (chopped)", qty: "2", price: 10, available: true },
      { id: "tomato", name: "Tomato (chopped)", qty: "2", price: 10, available: true },
      { id: "chili_powder", name: "Chili Powder", qty: "1 tsp", price: 5, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tsp", price: 45, available: false }
    ],
    steps: [
      "Make small slits on boiled eggs and set aside.",
      "Sauté onions until golden, then add ginger-garlic paste and tomatoes.",
      "Add chili powder, coriander powder, and turmeric; cook until tomatoes are soft.",
      "Add a cup of water and simmer to form a gravy.",
      "Add the boiled eggs and cook for 5 minutes until they absorb the flavor."
    ]
  },
  {
    id: "prawn-pulusu-andhra",
    name: "Prawn Pulusu",
    description: "Coastal style tangy prawn stew made with tamarind and fresh ground masalas.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 370,
    popularity: 0.83,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "prawns", name: "Prawns (cleaned)", qty: "400g", price: 300, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "3 tbsp", price: 5, available: true },
      { id: "small_onion", name: "Shallots/Small Onions", qty: "10", price: 15, available: true },
      { id: "fenugreek", name: "Fenugreek Seeds", qty: "1/4 tsp", price: 5, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tsp", price: 30, available: false }
    ],
    steps: [
      "Heat oil and temper with mustard, fenugreek, and cumin seeds.",
      "Add shallots and green chilies; sauté until soft.",
      "Pour in tamarind juice, salt, and chili powder; bring to a boil.",
      "Add prawns and ginger juliennes.",
      "Simmer for 8 minutes until prawns are cooked and the gravy is tangy."
    ]
  },
  {
    id: "mutton-chukka-andhra",
    name: "Mutton Chukka",
    description: "Dry, spicy mutton preparation where the meat is slow-cooked until it's perfectly roasted with spices.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.85,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton", name: "Mutton (small cubes)", qty: "500g", price: 350, available: true },
      { id: "shallots", name: "Shallots", qty: "1/2 cup", price: 15, available: true },
      { id: "black_pepper", name: "Black Pepper Powder", qty: "2 tsp", price: 5, available: true },
      { id: "fennel", name: "Fennel Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "3 tbsp", price: 15, available: false }
    ],
    steps: [
      "Pressure cook mutton with salt and minimal water until tender.",
      "In a wide pan, sauté shallots and curry leaves in oil.",
      "Add the pre-cooked mutton and any remaining stock.",
      "Stir in black pepper powder and roasted fennel powder.",
      "Sauté on high heat until the liquid is completely gone and the meat is dark and dry."
    ]
  },
  {
    id: "bommidi-fish-fry-andhra",
    name: "Bommidi Fish Fry",
    description: "Crispy marinated fish fry using local Andhra spices, a popular street-side delicacy.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 3,
    difficulty: "Medium",
    cost: 350,
    popularity: 0.79,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish", name: "Fish Slices (Murrel/Tilapia)", qty: "500g", price: 280, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "rice_flour", name: "Rice Flour", qty: "1 tbsp", price: 10, available: true },
      { id: "chili_powder", name: "Spicy Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Oil for shallow fry", qty: "1/4 cup", price: 30, available: false }
    ],
    steps: [
      "Make a paste of ginger-garlic, chili powder, turmeric, and salt.",
      "Coat fish slices with the paste and sprinkle rice flour for extra crunch.",
      "Let it marinate for 20 minutes.",
      "Heat oil in a heavy-bottomed pan.",
      "Shallow fry fish until golden brown and crispy on both sides."
    ]
  },

  // --- VEGETARIAN (10) ---
  {
    id: "gongura-pappu-andhra",
    name: "Gongura Pappu",
    description: "Hearty toor dal cooked with tangy sorrel leaves (Gongura), a staple in every Andhra household.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.87,
    tags: ["Andhra Pradesh", "South Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "gongura_leaves", name: "Sorrel Leaves (Gongura)", qty: "1 bunch", price: 20, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "4", price: 5, available: true },
      { id: "mustard", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "4", price: 20, available: false }
    ],
    steps: [
      "Pressure cook toor dal with gongura leaves and green chilies until mushy.",
      "Mash the dal and leaves together with salt.",
      "In a small pan, heat oil/ghee and temper with mustard, cumin, and red chilies.",
      "Add crushed garlic to the tempering and sauté until golden.",
      "Pour the tempering over the dal and mix well."
    ]
  },
  {
    id: "pesarattu-andhra",
    name: "Pesarattu",
    description: "Nutritious and fiber-rich green moong dal crepes, traditionally served with Ginger Chutney (Allam Pachadi).",
    type: "Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Medium",
    cost: 60,
    popularity: 0.85,
    tags: ["Andhra Pradesh", "South Indian", "Vegetarian", "Breakfast"],
    ingredients: [
      { id: "green_gram", name: "Whole Green Moong Dal", qty: "1 cup", price: 30, available: true },
      { id: "ginger", name: "Ginger", qty: "1 inch", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "rice", name: "Rice (for crispiness)", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Oil/Ghee", qty: "as needed", price: 10, available: false }
    ],
    steps: [
      "Soak moong dal and rice together for at least 6 hours or overnight.",
      "Grind into a smooth batter with ginger, green chilies, and salt.",
      "Heat a tawa and spread a ladle of batter into a thin circle.",
      "Drizzle oil around the edges and cook until golden brown.",
      "Flip and cook for 30 seconds; serve hot with ginger chutney."
    ]
  },
  {
    id: "tomato-pappu-andhra",
    name: "Andhra Tomato Pappu",
    description: "Classic toor dal cooked with ripe tomatoes and a generous tempering of garlic and spices.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.82,
    tags: ["Andhra Pradesh", "South Indian", "Vegetarian", "Comfort Food"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "tomato", name: "Ripe Tomatoes", qty: "3 large", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tsp", price: 5, available: true },
      { id: "garlic", name: "Garlic", qty: "4 cloves", price: 5, available: false }
    ],
    steps: [
      "Pressure cook dal, tomatoes, and green chilies with water until soft.",
      "Mash everything together with salt and tamarind pulp.",
      "Prepare tempering with mustard, cumin, dried red chilies, and lots of garlic.",
      "Stir the tempering into the dal.",
      "Serve hot with steamed rice and a spoonful of ghee."
    ]
  },
  {
    id: "gutti-vankaya-kura-andhra",
    name: "Gutti Vankaya Kura",
    description: "Famous Andhra style stuffed brinjal curry made with a rich peanut and sesame based masala.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.88,
    tags: ["Andhra Pradesh", "South Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "brinjal", name: "Small Purple Brinjals", qty: "1/2 kg", price: 40, available: true },
      { id: "peanuts", name: "Peanuts (roasted)", qty: "1/4 cup", price: 20, available: true },
      { id: "sesame_seeds", name: "Sesame Seeds", qty: "2 tbsp", price: 15, available: true },
      { id: "dry_coconut", name: "Dry Coconut", qty: "2 tbsp", price: 10, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 5, available: false }
    ],
    steps: [
      "Roast and grind peanuts, sesame seeds, coconut, and spices into a thick paste.",
      "Slit brinjals into four quarters (keeping the stem intact) and stuff with the paste.",
      "Sauté onions in a heavy pan; place the stuffed brinjals inside.",
      "Add any remaining paste, tamarind water, and salt.",
      "Cover and cook on low heat until the brinjals are tender and the gravy is oil-rich."
    ]
  },
  {
    id: "bendakaya-pulusu-andhra",
    name: "Bendakaya Pulusu",
    description: "Okra simmered in a tangy and sweet tamarind gravy, a popular Andhra side dish for rice.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.76,
    tags: ["Andhra Pradesh", "South Indian", "Vegetarian"],
    ingredients: [
      { id: "okra", name: "Okra (Ladyfinger)", qty: "250g", price: 20, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "3 tbsp", price: 10, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "jaggery", name: "Jaggery (Gud)", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 25, available: false }
    ],
    steps: [
      "Wash and cut okra into 1-inch pieces; sauté in oil for 5 minutes to remove stickiness.",
      "In a pot, sauté onions and green chilies.",
      "Add tamarind juice, salt, chili powder, and jaggery; bring to a boil.",
      "Add the sautéed okra and simmer for 10 minutes until the gravy thickens.",
      "Temper with mustard seeds and curry leaves."
    ]
  },
  {
    id: "andhra-veg-biryani-spicy",
    name: "Andhra Vegetable Biryani",
    description: "A spicy and aromatic mixed vegetable biryani with traditional coastal Andhra flavors.",
    type: "Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Medium",
    cost: 180,
    popularity: 0.81,
    tags: ["Andhra Pradesh", "South Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "basmati_rice", name: "Basmati Rice", qty: "2 cups", price: 80, available: true },
      { id: "mixed_veg", name: "Carrot, Peas, Beans, Potato", qty: "2 cups", price: 40, available: true },
      { id: "yogurt", name: "Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "biryani_spices", name: "Whole Spices", qty: "various", price: 20, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Cook rice with whole spices until 70% done; drain.",
      "Sauté vegetables with ginger-garlic paste and biryani masala.",
      "Layer the cooked vegetables and parboiled rice in a pot.",
      "Add curd and a little water mixed with turmeric.",
      "Cover tightly and cook on dum for 15-20 minutes."
    ]
  },
  {
    id: "pappu-charu-andhra",
    name: "Pappu Charu",
    description: "A classic Andhra style lentil rasam made with toor dal and flavored with pepper and cumin.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.74,
    tags: ["Andhra Pradesh", "South Indian", "Vegetarian"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1/2 cup", price: 15, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 5, available: true },
      { id: "pepper", name: "Black Pepper", qty: "1 tsp", price: 5, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "garlic", name: "Garlic", qty: "4 cloves", price: 15, available: false }
    ],
    steps: [
      "Pressure cook dal until mushy; mash with 3 cups of water.",
      "Extract tamarind pulp and add to the watery dal with salt.",
      "Coarsely crush pepper, cumin, and garlic; add to the dal.",
      "Boil the mixture for 10 minutes until fragrant.",
      "Temper with mustard seeds and curry leaves in oil."
    ]
  },
  {
    id: "beerakaya-pappu-andhra",
    name: "Beerakaya Pappu",
    description: "Soothing and nutritious ridge gourd cooked with toor dal, a perfect healthy lunch option.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.70,
    tags: ["Andhra Pradesh", "South Indian", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 30, available: true },
      { id: "ridge_gourd", name: "Ridge Gourd (Beerakaya)", qty: "1 large", price: 15, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "turmeric", name: "Turmeric", qty: "1/2 tsp", price: 5, available: true },
      { id: "curry_leaves", name: "Curry Leaves", qty: "1 sprig", price: 5, available: false }
    ],
    steps: [
      "Peel and chop ridge gourd into small cubes.",
      "Pressure cook dal and ridge gourd together with green chilies and turmeric.",
      "Once done, mash slightly and add salt.",
      "Temper with mustard, cumin, red chili, and curry leaves in oil.",
      "Serve with hot rice and ghee."
    ]
  },
  {
    id: "vankaya-pachadi-andhra",
    name: "Vankaya Pachadi",
    description: "Roasted brinjal chutney with a smoky flavor, traditionally made in a mortar and pestle.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.72,
    tags: ["Andhra Pradesh", "South Indian", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "brinjal", name: "Large Eggplant/Brinjal", qty: "1", price: 15, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "3", price: 5, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tsp", price: 5, available: true },
      { id: "shallots", name: "Shallots", qty: "5", price: 10, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1/2 tsp", price: 15, available: false }
    ],
    steps: [
      "Apply oil to the whole brinjal and roast on an open flame until the skin chars.",
      "Peel off the skin and mash the soft interior.",
      "Sauté green chilies and grind into a paste with tamarind and salt.",
      "Mix the brinjal pulp with the chili paste.",
      "Temper with mustard seeds and curry leaves."
    ]
  },
  {
    id: "ulavacharu-andhra",
    name: "Ulavacharu",
    description: "A unique and nutritious horse gram soup-like curry from the Rayalaseema region of Andhra.",
    type: "Vegetarian",
    time: 50,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.68,
    tags: ["Andhra Pradesh", "South Indian", "Vegetarian", "Healthy", "Spicy"],
    ingredients: [
      { id: "horse_gram", name: "Horse Gram (Ulavalu)", qty: "1 cup", price: 20, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "2 tbsp", price: 10, available: true },
      { id: "pepper", name: "Black Pepper", qty: "1 tsp", price: 5, available: true },
      { id: "ginger", name: "Ginger juliennes", qty: "1 tsp", price: 5, available: true },
      { id: "cream", name: "Cream (optional)", qty: "1 tbsp", price: 35, available: false }
    ],
    steps: [
      "Soak horse gram overnight and pressure cook until very soft (extract only the water).",
      "Cook the extracted water with tamarind juice, salt, and chili powder.",
      "Add black pepper and ginger; simmer for 20 minutes until the liquid reduces and thickens.",
      "Temper with mustard and cumin seeds.",
      "Traditionally served with rice and a generous dollop of cream or butter."
    ]
  },

  // --- SNACKS (5) ---
  {
    id: "mirchi-bajji-andhra",
    name: "Mirchi Bajji (Andhra Style)",
    description: "Iconic street snack—large green chilies stuffed with tamarind-cumin paste and deep-fried in gram flour batter.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.89,
    tags: ["Andhra Pradesh", "South Indian", "Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "mirchi", name: "Large Green Chilies", qty: "8", price: 20, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "1 cup", price: 15, available: true },
      { id: "tamarind", name: "Tamarind Pulp", qty: "1 tbsp", price: 5, available: true },
      { id: "ajwain", name: "Ajwain (Carom seeds)", qty: "1/2 tsp", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "2 cups", price: 20, available: false }
    ],
    steps: [
      "Slit chilies and remove seeds; stuff with a mixture of tamarind pulp, salt, and cumin.",
      "Make a thick, smooth batter with besan, rice flour, ajwain, and salt.",
      "Dip stuffed chilies into the batter until fully coated.",
      "Deep fry in hot oil until golden brown and crispy.",
      "Garnish with chopped onions and lemon juice; serve hot."
    ]
  },
  {
    id: "punugulu-andhra",
    name: "Punugulu",
    description: "Crispy fried fritters made from fermented idli/dosa batter, a popular coastal Andhra snack.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.84,
    tags: ["Andhra Pradesh", "South Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "batter", name: "Fermented Dosa Batter", qty: "2 cups", price: 20, available: true },
      { id: "onion", name: "Onion (finely chopped)", qty: "2 tbsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "cumin", name: "Cumin Seeds", qty: "1/2 tsp", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 20, available: false }
    ],
    steps: [
      "Mix chopped onions, green chilies, cumin seeds, and a little rice flour (if batter is thin) into the dosa batter.",
      "Heat oil in a kadai.",
      "Take small portions of the batter using your fingers and drop them into hot oil.",
      "Deep fry until they are golden brown and crispy spheres.",
      "Serve with spicy tomato chutney."
    ]
  },
  {
    id: "andhra-garelu",
    name: "Andhra Garelu",
    description: "Classic crispy and fluffy deep-fried urad dal vadas, a festive staple across the state.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.86,
    tags: ["Andhra Pradesh", "South Indian", "Vegetarian", "Snacks"],
    ingredients: [
      { id: "urad_dal", name: "Black Gram (Urad Dal)", qty: "1 cup", price: 25, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "pepper", name: "Whole Peppercorns", qty: "1 tsp", price: 5, available: true },
      { id: "ginger", name: "Minced Ginger", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil for frying", qty: "1 cup", price: 20, available: false }
    ],
    steps: [
      "Soak urad dal for 3 hours; grind into a very thick, fluffy batter with minimal water.",
      "Mix in onions, pepper, ginger, and salt.",
      "Wet your palms, take a ball of batter, flatten it, and make a hole in the center.",
      "Carefully drop into hot oil and fry until golden and crispy.",
      "Serve with ginger chutney."
    ]
  },
  {
    id: "andhra-chicken-pakoda",
    name: "Andhra Chicken Pakoda",
    description: "Street-style spicy fried chicken pieces coated in a flavorful gram flour and corn flour batter.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 220,
    popularity: 0.82,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Boneless Chicken bits", qty: "300g", price: 100, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "3 tbsp", price: 10, available: true },
      { id: "corn_flour", name: "Corn Flour", qty: "1 tbsp", price: 5, available: true },
      { id: "red_chili", name: "Spicy Chili Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "garlic", name: "Garlic paste", qty: "1 tsp", price: 90, available: false }
    ],
    steps: [
      "Marinate chicken with garlic paste, chili powder, salt, and garam masala for 20 minutes.",
      "Add gram flour, corn flour, and a splash of water; mix well to coat.",
      "Deep fry in medium hot oil until the chicken is cooked and the coating is very crispy.",
      "Fry a handful of curry leaves and green chilies at the end to garnish.",
      "Serve as a spicy snack with lemon wedges."
    ]
  },
  {
    id: "prawn-bajji-andhra",
    name: "Prawn Bajji (Andhra Style)",
    description: "Juicy prawns dipped in a spicy, seasoned gram flour batter and fried until crunchy.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Medium",
    cost: 290,
    popularity: 0.79,
    tags: ["Andhra Pradesh", "South Indian", "Non-Vegetarian", "Snacks", "Spicy"],
    ingredients: [
      { id: "prawns", name: "Large Prawns (tail on)", qty: "10-12", price: 200, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "1 cup", price: 15, available: true },
      { id: "rice_flour", name: "Rice Flour", qty: "2 tbsp", price: 10, available: true },
      { id: "chili_powder", name: "Chili Powder", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil for deep fry", qty: "1 cup", price: 55, available: false }
    ],
    steps: [
      "Clean prawns but keep the tails intact.",
      "Make a smooth, thick batter with besan, rice flour, spices, and salt.",
      "Hold the prawn by the tail, dip in the batter, and carefully drop in hot oil.",
      "Fry until golden brown and crispy.",
      "Serve hot with onion slices and lemon."
    ]
  }
];
