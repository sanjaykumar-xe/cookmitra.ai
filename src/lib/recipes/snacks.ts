import { Recipe } from './types';

/**
 * Snacks Recipes
 * A collection of 50 pan-Indian snacks across 5 categories.
 * 25 Vegetarian / 25 Non-Vegetarian.
 */
export const snacksRecipes: Recipe[] = [
  // --- FRIED (5 Veg / 5 Non-Veg) ---
  {
    id: "snack-aloo-bonda",
    menuCategory: "Snacks & Street Food",
    name: "Aloo Bonda",
    description: "Classic South Indian fried potato balls coated in a golden gram flour batter, spiced with ginger and green chilies.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 60,
    popularity: 0.85,
    tags: ["Snacks", "Fried", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "potato", name: "Potatoes (boiled & mashed)", qty: "3 large", price: 15, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "1 cup", price: 10, available: true },
      { id: "ginger", name: "Ginger (finely minced)", qty: "1 tsp", price: 5, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1/2 tsp", price: 5, available: true }
    ],
    steps: [
      "Prepare the filling by tempering mustard seeds and sautéing ginger, green chilies, and onions; mix with mashed potatoes.",
      "Form small rounds of the potato mixture.",
      "Make a smooth, thick batter with besan, turmeric, and salt.",
      "Dip each potato ball into the batter to coat thoroughly.",
      "Deep fry in hot oil until golden brown and crispy."
    ]
  },
  {
    id: "snack-crispy-onion-pakora",
    menuCategory: "Snacks & Street Food",
    name: "Crispy Onion Pakora",
    description: "Thinly sliced onions mixed with gram flour and aromatic spices, fried to a perfect golden crunch.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.90,
    tags: ["Snacks", "Fried", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "onion", name: "Onions (thinly sliced)", qty: "3 large", price: 15, available: true },
      { id: "besan", name: "Besan", qty: "1 cup", price: 10, available: true },
      { id: "ajwain", name: "Carom Seeds (Ajwain)", qty: "1/2 tsp", price: 5, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 15, available: true }
    ],
    steps: [
      "Toss sliced onions with salt and let rest for 5 minutes until they release moisture.",
      "Add besan, spices, and a handful of chopped coriander; mix without adding much water.",
      "The batter should be thick and cling to the onions.",
      "Drop small, irregular clumps into hot oil.",
      "Deep fry until dark golden and very crispy."
    ]
  },
  {
    id: "snack-paneer-pakora",
    menuCategory: "Snacks & Street Food",
    name: "Paneer Pakora",
    description: "Soft cottage cheese cubes dipped in a seasoned gram flour batter and fried until the exterior is light and crispy.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.84,
    tags: ["Snacks", "Fried", "Vegetarian"],
    ingredients: [
      { id: "paneer", name: "Paneer", qty: "200g", price: 60, available: true },
      { id: "besan", name: "Gram Flour", qty: "1 cup", price: 10, available: true },
      { id: "chaat_masala", name: "Chaat Masala", qty: "1 tsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "1/4 tsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "1 cup", price: 10, available: true }
    ],
    steps: [
      "Cut paneer into cubes or rectangles and sprinkle with chaat masala.",
      "Make a smooth batter with besan, turmeric, salt, and a pinch of baking soda.",
      "Dip each paneer piece into the batter.",
      "Deep fry on medium heat until golden.",
      "Serve hot with green chutney."
    ]
  },
  {
    id: "snack-corn-cheese-balls",
    menuCategory: "Snacks & Street Food",
    name: "Corn Cheese Balls",
    description: "Irresistible fried spheres filled with sweet corn and melting cheese, perfect for parties.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.88,
    tags: ["Snacks", "Fried", "Vegetarian"],
    ingredients: [
      { id: "sweet_corn", name: "Sweet Corn (boiled)", qty: "1 cup", price: 20, available: true },
      { id: "cheese", name: "Mozzarella Cheese (grated)", qty: "1/2 cup", price: 30, available: true },
      { id: "potato", name: "Boiled Potato (mashed)", qty: "1", price: 5, available: true },
      { id: "breadcrumbs", name: "Breadcrumbs", qty: "1/2 cup", price: 10, available: true },
      { id: "oil", name: "Oil for frying", qty: "1 cup", price: 15, available: true }
    ],
    steps: [
      "Mix mashed potato, corn, cheese, and Italian herbs in a bowl.",
      "Shape into small balls.",
      "Roll each ball in breadcrumbs for a crispy crust.",
      "Deep fry until golden brown and the cheese inside is melted.",
      "Serve hot to enjoy the cheese pull."
    ]
  },
  {
    id: "snack-vegetable-spring-rolls",
    menuCategory: "Snacks & Street Food",
    name: "Vegetable Spring Rolls",
    description: "Crispy, golden-fried wrappers stuffed with a savory mixture of stir-fried vegetables and glass noodles.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 85,
    popularity: 0.81,
    tags: ["Snacks", "Fried", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "spring_roll_sheets", name: "Spring Roll Sheets", qty: "8", price: 40, available: true },
      { id: "cabbage", name: "Cabbage (shredded)", qty: "1 cup", price: 10, available: true },
      { id: "carrot", name: "Carrot (julienned)", qty: "1/2 cup", price: 10, available: true },
      { id: "soy_sauce", name: "Soy Sauce", qty: "1 tbsp", price: 10, available: true },
      { id: "oil", name: "Oil for frying", qty: "1 cup", price: 15, available: true }
    ],
    steps: [
      "Sauté vegetables on high heat with ginger, garlic, and soy sauce until tender-crisp.",
      "Place a spoonful of filling on a spring roll sheet.",
      "Fold the sides and roll tightly, sealing the edge with a flour paste.",
      "Deep fry until light golden and very crispy.",
      "Serve with sweet chili sauce."
    ]
  },
  {
    id: "snack-chicken-nuggets-indian",
    menuCategory: "Snacks & Street Food",
    name: "Chicken Nuggets Indian Style",
    description: "Bite-sized chicken pieces marinated in Indian spices, breaded, and fried until crunchy and juicy.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 200,
    popularity: 0.82,
    tags: ["Snacks", "Fried", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken_breast", name: "Chicken Breast (cubed)", qty: "300g", price: 120, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic Paste", qty: "1 tbsp", price: 10, available: true },
      { id: "garam_masala", name: "Garam Masala", qty: "1 tsp", price: 10, available: true },
      { id: "breadcrumbs", name: "Breadcrumbs", qty: "1 cup", price: 20, available: true },
      { id: "egg", name: "Egg (beaten)", qty: "1", price: 40, available: true }
    ],
    steps: [
      "Marinate chicken cubes with ginger-garlic paste and spices for 15 minutes.",
      "Dip each piece in beaten egg, then roll in breadcrumbs.",
      "Deep fry in medium-hot oil until golden brown.",
      "The chicken should be cooked through while the crust remains crispy.",
      "Serve with ketchup or mint mayo."
    ]
  },
  {
    id: "snack-fish-fingers",
    menuCategory: "Snacks & Street Food",
    name: "Fish Fingers",
    description: "Crispy breaded fried fish strips made with succulent white fish, a hit among kids and adults alike.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.85,
    tags: ["Snacks", "Fried", "Non-Vegetarian"],
    ingredients: [
      { id: "fish_fillets", name: "White Fish Fillets (Basa/Rohu)", qty: "300g", price: 150, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "pepper", name: "Black Pepper Powder", qty: "1 tsp", price: 10, available: true },
      { id: "maida", name: "Maida (for coating)", qty: "1/4 cup", price: 5, available: true },
      { id: "breadcrumbs", name: "Breadcrumbs", qty: "1 cup", price: 60, available: true }
    ],
    steps: [
      "Cut fish into 3-inch long strips.",
      "Marinate with lemon juice, salt, and pepper.",
      "Coat in flour, dip in egg wash, and then roll in breadcrumbs.",
      "Deep fry until golden and crispy.",
      "Serve with tartar sauce or lemon wedges."
    ]
  },
  {
    id: "snack-mutton-samosa",
    menuCategory: "Snacks & Street Food",
    name: "Mutton Samosa",
    description: "Spicy and savory minced mutton filled in a crispy triangular pastry shell.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Hard",
    cost: 220,
    popularity: 0.87,
    tags: ["Snacks", "Fried", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_mince", name: "Minced Mutton (Keema)", qty: "250g", price: 150, available: true },
      { id: "samosa_sheets", name: "Samosa Sheets (ready)", qty: "10", price: 30, available: true },
      { id: "onion", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "garam_masala", name: "Garam Masala", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Oil for frying", qty: "1 cup", price: 25, available: false }
    ],
    steps: [
      "Sauté minced mutton with onions and spices until fully cooked and dry.",
      "Place a spoonful of filling on a samosa sheet.",
      "Fold into a triangle and seal edges with a flour-water paste.",
      "Deep fry on medium heat until golden and crispy.",
      "The mutton should be savory and aromatic inside."
    ]
  },
  {
    id: "snack-egg-bonda",
    menuCategory: "Snacks & Street Food",
    name: "Egg Bonda",
    description: "Boiled eggs coated in a spicy gram flour batter and deep-fried until golden, a popular street-side non-veg snack.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 100,
    popularity: 0.81,
    tags: ["Snacks", "Fried", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "eggs", name: "Hard Boiled Eggs", qty: "4", price: 30, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "1 cup", price: 15, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tsp", price: 5, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1/2 tsp", price: 5, available: true },
      { id: "oil", name: "Frying Oil", qty: "1 cup", price: 45, available: false }
    ],
    steps: [
      "Halve the boiled eggs or keep them whole (make small slits).",
      "Prepare a thick, smooth batter with besan, chili powder, salt, and garlic paste.",
      "Dip each egg (or half) into the batter to coat fully.",
      "Deep fry in hot oil until golden brown.",
      "Serve hot with onion rings and lemon."
    ]
  },
  {
    id: "snack-prawn-fritters",
    menuCategory: "Snacks & Street Food",
    name: "Prawn Fritters",
    description: "Juicy prawns dipped in a spicy, seasoned batter and fried until crunchy.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.83,
    tags: ["Snacks", "Fried", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "prawns", name: "Prawns (cleaned)", qty: "250g", price: 200, available: true },
      { id: "besan", name: "Besan", qty: "1/2 cup", price: 10, available: true },
      { id: "rice_flour", name: "Rice Flour", qty: "2 tbsp", price: 5, available: true },
      { id: "chili_powder", name: "Red Chili Powder", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Oil", qty: "1 cup", price: 55, available: false }
    ],
    steps: [
      "Marinate prawns with salt and turmeric.",
      "Make a batter with besan, rice flour, and spices.",
      "Dip prawns in batter and deep fry until crispy gold.",
      "The prawns should remain tender while the coating is crunchy.",
      "Serve with a spicy dip."
    ]
  },

  // --- BAKED (5 Veg / 5 Non-Veg) ---
  {
    id: "snack-baked-samosa",
    menuCategory: "Snacks & Street Food",
    name: "Baked Samosa",
    description: "A healthier take on the traditional samosa, oven-baked to a crispy golden brown with a spiced potato filling.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 60,
    popularity: 0.82,
    tags: ["Snacks", "Baked", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 15, available: true },
      { id: "potato", name: "Potatoes (boiled & mashed)", qty: "3 large", price: 15, available: true },
      { id: "peas", name: "Green Peas", qty: "1/4 cup", price: 10, available: true },
      { id: "oil", name: "Oil (for dough)", qty: "2 tbsp", price: 20, available: true }
    ],
    steps: [
      "Prepare the spicy potato-pea filling.",
      "Knead a firm dough and roll into discs.",
      "Stuff with filling and fold into triangles.",
      "Brush each samosa with a little oil.",
      "Bake at 200°C for 25-30 minutes until golden and crisp."
    ]
  },
  {
    id: "snack-baked-nachos-cheese",
    menuCategory: "Snacks & Street Food",
    name: "Baked Nachos with Cheese",
    description: "Crispy tortilla chips baked with a generous layer of melted cheese, salsa, and jalapeños.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 90,
    popularity: 0.88,
    tags: ["Snacks", "Baked", "Vegetarian"],
    ingredients: [
      { id: "nacho_chips", name: "Corn Tortilla Chips", qty: "1 bag", price: 40, available: true },
      { id: "cheese", name: "Cheddar Cheese (grated)", qty: "1 cup", price: 30, available: true },
      { id: "salsa", name: "Salsa", qty: "1/4 cup", price: 10, available: true },
      { id: "jalapenos", name: "Pickled Jalapeños", qty: "2 tbsp", price: 10, available: true }
    ],
    steps: [
      "Spread nachos on a baking sheet.",
      "Top with salsa and jalapeños.",
      "Sprinkle cheese generously over the top.",
      "Bake at 180°C for 5-8 minutes until the cheese is bubbling.",
      "Serve immediately while hot."
    ]
  },
  {
    id: "snack-baked-vegetable-cutlet",
    menuCategory: "Snacks & Street Food",
    name: "Baked Vegetable Cutlet",
    description: "Healthy and delicious spiced mixed-vegetable patties, oven-baked for a low-oil alternative.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.79,
    tags: ["Snacks", "Baked", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mixed_veg", name: "Potato, Carrot, Beans", qty: "2 cups", price: 30, available: true },
      { id: "breadcrumbs", name: "Breadcrumbs", qty: "1/2 cup", price: 10, available: true },
      { id: "ginger_paste", name: "Ginger Paste", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil (for brushing)", qty: "1 tbsp", price: 20, available: false }
    ],
    steps: [
      "Mash boiled vegetables and mix with spices and salt.",
      "Form into small flat patties.",
      "Roll each patty in breadcrumbs.",
      "Place on a baking tray and brush lightly with oil.",
      "Bake at 190°C for 20 minutes, flipping halfway."
    ]
  },
  {
    id: "snack-baked-paneer-tikka",
    menuCategory: "Starters & Appetizers",
    name: "Baked Paneer Tikka Bites",
    description: "Oven-roasted marinated paneer cubes, served as bite-sized appetizers with mint chutney.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 95,
    popularity: 0.86,
    tags: ["Snacks", "Baked", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "paneer", name: "Paneer (cubes)", qty: "200g", price: 60, available: true },
      { id: "yogurt", name: "Whisked Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "tikka_masala", name: "Tikka Masala", qty: "1 tbsp", price: 10, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 10, available: true }
    ],
    steps: [
      "Marinate paneer in curd and spices for 20 minutes.",
      "Place cubes on a baking tray lined with parchment.",
      "Bake at 200°C for 15 minutes until edges are golden.",
      "Squeeze lemon juice and sprinkle chaat masala before serving."
    ]
  },
  {
    id: "snack-whole-wheat-veg-puff",
    menuCategory: "Snacks & Street Food",
    name: "Whole Wheat Vegetable Puffs",
    description: "Flaky whole wheat pastry stuffed with a savory vegetable filling, a guilt-free bakery snack.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 55,
    popularity: 0.74,
    tags: ["Snacks", "Baked", "Vegetarian"],
    ingredients: [
      { id: "puff_sheets", name: "Whole Wheat Puff Sheets", qty: "4", price: 30, available: true },
      { id: "veg_stuffing", name: "Spiced Potato & Peas", qty: "1 cup", price: 15, available: true },
      { id: "butter", name: "Butter (for brushing)", qty: "1 tbsp", price: 10, available: true }
    ],
    steps: [
      "Place stuffing in the center of the puff sheets.",
      "Fold into rectangles and seal the edges.",
      "Brush with melted butter.",
      "Bake at 200°C for 20-25 minutes until puffed and golden brown."
    ]
  },
  {
    id: "snack-baked-chicken-wings",
    menuCategory: "Snacks & Street Food",
    name: "Baked Chicken Wings",
    description: "Crispy oven-roasted chicken wings marinated in a spicy Indian-style glaze.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.89,
    tags: ["Snacks", "Baked", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken_wings", name: "Chicken Wings", qty: "500g", price: 180, available: true },
      { id: "honey", name: "Honey", qty: "1 tbsp", price: 10, available: true },
      { id: "peri_peri", name: "Peri Peri or Tikka Spice", qty: "1 tbsp", price: 15, available: true },
      { id: "garlic", name: "Garlic Paste", qty: "1 tsp", price: 45, available: false }
    ],
    steps: [
      "Pat dry the wings and marinate with spices, garlic, and honey.",
      "Arrange on a wire rack over a baking tray.",
      "Bake at 200°C for 30-35 minutes until the skin is crispy.",
      "Turn wings halfway through for even browning."
    ]
  },
  {
    id: "snack-baked-fish-cutlet",
    menuCategory: "Snacks & Street Food",
    name: "Baked Fish Cutlet",
    description: "Hearty and healthy fish patties oven-baked to perfection, served with a tangy dip.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.77,
    tags: ["Snacks", "Baked", "Non-Vegetarian", "Healthy"],
    ingredients: [
      { id: "boiled_fish", name: "Fish Mince (boiled & flaked)", qty: "250g", price: 180, available: true },
      { id: "potato", name: "Boiled Potato (mashed)", qty: "1/2 cup", price: 10, available: true },
      { id: "egg_white", name: "Egg White", qty: "1", price: 5, available: true },
      { id: "breadcrumbs", name: "Breadcrumbs", qty: "1/2 cup", price: 65, available: false }
    ],
    steps: [
      "Mix fish, potato, spices, and egg white.",
      "Form into small flat ovals.",
      "Roll in breadcrumbs and place on a baking tray.",
      "Bake at 190°C for 20 minutes until golden."
    ]
  },
  {
    id: "snack-baked-chicken-tikka",
    menuCategory: "Starters & Appetizers",
    name: "Baked Chicken Tikka Bites",
    description: "Juicy yogurt-marinated chicken chunks roasted in the oven, a classic favorite made easy.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.90,
    tags: ["Snacks", "Baked", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken", name: "Boneless Chicken chunks", qty: "400g", price: 140, available: true },
      { id: "curd", name: "Thick Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "spices", name: "Tandoori Masala", qty: "2 tbsp", price: 15, available: true },
      { id: "oil", name: "Oil for brushing", qty: "1 tbsp", price: 60, available: false }
    ],
    steps: [
      "Marinate chicken in curd and spices for at least 1 hour.",
      "Thread onto skewers or place on a baking tray.",
      "Bake at 220°C for 15-20 minutes.",
      "Baste with a little oil midway to keep them moist."
    ]
  },
  {
    id: "snack-baked-egg-boats",
    menuCategory: "Snacks & Street Food",
    name: "Baked Egg Boats",
    description: "Halved boiled eggs topped with a savory masala and baked until the edges are firm.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 100,
    popularity: 0.72,
    tags: ["Snacks", "Baked", "Non-Vegetarian"],
    ingredients: [
      { id: "boiled_eggs", name: "Boiled Eggs", qty: "4", price: 30, available: true },
      { id: "cheese", name: "Grated Cheese", qty: "2 tbsp", price: 15, available: true },
      { id: "spices", name: "Chaat Masala & Pepper", qty: "1 tsp", price: 10, available: true },
      { id: "capsicum", name: "Minced Capsicum", qty: "2 tbsp", price: 45, available: false }
    ],
    steps: [
      "Cut boiled eggs in half vertically.",
      "Mix cheese, capsicum, and spices.",
      "Top each egg half with the mixture.",
      "Bake at 180°C for 10 minutes until cheese melts."
    ]
  },
  {
    id: "snack-baked-mutton-kebab",
    menuCategory: "Starters & Appetizers",
    name: "Baked Mutton Kebab Bites",
    description: "Minced mutton patties flavored with local spices and baked for a smokier, lower-fat result.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Hard",
    cost: 260,
    popularity: 0.81,
    tags: ["Snacks", "Baked", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "mutton_mince", name: "Mutton Mince", qty: "300g", price: 180, available: true },
      { id: "chana_dal_flour", name: "Roasted Chana Dal Flour", qty: "2 tbsp", price: 10, available: true },
      { id: "ginger_garlic", name: "Ginger Garlic paste", qty: "1 tbsp", price: 70, available: false }
    ],
    steps: [
      "Mix mince with flour and spices; knead well.",
      "Form small balls or patties.",
      "Place on a baking tray.",
      "Bake at 200°C for 25 minutes until cooked through."
    ]
  },

  // --- CHAAT (5 Veg / 5 Non-Veg) ---
  {
    id: "snack-papdi-chaat",
    menuCategory: "Snacks & Street Food",
    name: "Papdi Chaat",
    description: "A symphony of flavors—crispy papdis topped with spiced potatoes, tangy chutneys, and cool yogurt.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.94,
    tags: ["Snacks", "Chaat", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "papdi", name: "Crispy Papdis", qty: "20", price: 20, available: true },
      { id: "potato", name: "Boiled Potato (cubed)", qty: "1 large", price: 5, available: true },
      { id: "yogurt", name: "Thick Curd", qty: "1/2 cup", price: 15, available: true },
      { id: "chutneys", name: "Imli & Mint Chutneys", qty: "1/4 cup", price: 25, available: true }
    ],
    steps: [
      "Arrange papdis on a plate.",
      "Top with potato cubes and boiled chickpeas (optional).",
      "Pour whisked, sweetened yogurt over them.",
      "Drizzle tamarind and green chutneys.",
      "Garnish with sev and chaat masala."
    ]
  },
  {
    id: "snack-sev-puri",
    menuCategory: "Snacks & Street Food",
    name: "Sev Puri",
    description: "Mouth-sized puris loaded with potatoes, a trio of chutneys, and a mountain of crunchy sev.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.91,
    tags: ["Snacks", "Chaat", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "flat_puri", name: "Flat Puris", qty: "20", price: 15, available: true },
      { id: "sev", name: "Nylon Sev", qty: "1/2 cup", price: 15, available: true },
      { id: "potato", name: "Potato mash", qty: "1 cup", price: 10, available: true },
      { id: "mango", name: "Raw Mango (minced)", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Lay out the flat puris.",
      "Top each with a little potato mash.",
      "Drizzle the sweet, spicy, and garlic chutneys.",
      "Top generously with nylon sev.",
      "Garnish with raw mango bits and coriander."
    ]
  },
  {
    id: "snack-bhel-puri",
    menuCategory: "Snacks & Street Food",
    name: "Bhel Puri",
    description: "The classic Mumbai beach snack—puffed rice tossed with savory snacks and tangy sauces.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.95,
    tags: ["Snacks", "Chaat", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "puffed_rice", name: "Puffed Rice (Kurmura)", qty: "3 cups", price: 10, available: true },
      { id: "sev_mix", name: "Bhel Sev Mix", qty: "1 cup", price: 20, available: true },
      { id: "chutney_tamarind", name: "Tamarind Chutney", qty: "2 tbsp", price: 10, available: true },
      { id: "green_chili_paste", name: "Green Chili Paste", qty: "1 tsp", price: 10, available: false }
    ],
    steps: [
      "In a large bowl, mix puffed rice and sev mix.",
      "Add chopped onions, tomatoes, and boiled potatoes.",
      "Quickly pour the chutneys and salt.",
      "Toss thoroughly and serve immediately before it gets soggy."
    ]
  },
  {
    id: "snack-ragda-pattice",
    menuCategory: "Snacks & Street Food",
    name: "Ragda Pattice",
    description: "Crispy potato patties (pattice) served with a hot, spiced white pea curry (ragda).",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 75,
    popularity: 0.88,
    tags: ["Snacks", "Chaat", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "white_peas", name: "White Peas (soaked & boiled)", qty: "1.5 cups", price: 25, available: true },
      { id: "potato_pattice", name: "Potato Patties", qty: "8", price: 30, available: true },
      { id: "onion", name: "Chopped Onion", qty: "1", price: 5, available: true },
      { id: "spices", name: "Chaat Spices", qty: "1 tbsp", price: 15, available: false }
    ],
    steps: [
      "Prepare the white pea gravy (ragda) with simple spices.",
      "Pan-fry the potato patties until crispy.",
      "Place two patties in a bowl and pour hot ragda over them.",
      "Top with chutneys, onions, and sev."
    ]
  },
  {
    id: "snack-corn-chaat",
    menuCategory: "Snacks & Street Food",
    name: "Corn Chaat",
    description: "A healthy and zesty chaat made with steamed sweet corn, crunchy vegetables, and tangy lime.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.81,
    tags: ["Snacks", "Chaat", "Vegetarian", "Spicy", "Healthy"],
    ingredients: [
      { id: "corn", name: "Sweet Corn (steamed)", qty: "2 cups", price: 30, available: true },
      { id: "onion_tomato", name: "Onion & Tomato (chopped)", qty: "1/2 cup", price: 10, available: true },
      { id: "lemon", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "butter", name: "Butter (optional)", qty: "1 tsp", price: 10, available: false }
    ],
    steps: [
      "Toss steamed corn with butter while hot.",
      "Add vegetables and spices like chaat masala.",
      "Squeeze fresh lime juice.",
      "Mix well and serve warm or at room temperature."
    ]
  },
  {
    id: "snack-chicken-chaat",
    menuCategory: "Snacks & Street Food",
    name: "Chicken Chaat",
    description: "Spicy and tangy shredded chicken tossed with Indian street-food flavors.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 200,
    popularity: 0.82,
    tags: ["Snacks", "Chaat", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken_shredded", name: "Boiled Chicken (shredded)", qty: "2 cups", price: 120, available: true },
      { id: "onion_raw", name: "Raw Onion (sliced)", qty: "1", price: 10, available: true },
      { id: "chutney_green", name: "Spicy Green Chutney", qty: "2 tbsp", price: 15, available: true },
      { id: "chaat_masala", name: "Chaat Masala", qty: "1 tsp", price: 55, available: false }
    ],
    steps: [
      "Mix shredded chicken with onions and green chilies.",
      "Add chutneys and chaat masala.",
      "Toss well and garnish with sev.",
      "Serve as a spicy cold appetizer."
    ]
  },
  {
    id: "snack-egg-chaat",
    menuCategory: "Snacks & Street Food",
    name: "Egg Chaat",
    description: "Zesty chaat made with hard-boiled eggs, perfect for a quick protein-rich snack.",
    type: "Non-Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 110,
    popularity: 0.79,
    tags: ["Snacks", "Chaat", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "eggs_boiled", name: "Hard Boiled Eggs", qty: "4", price: 30, available: true },
      { id: "tomato_raw", name: "Tomato (chopped)", qty: "1", price: 10, available: true },
      { id: "sev_topping", name: "Fine Sev", qty: "2 tbsp", price: 10, available: true },
      { id: "sauce_tamarind", name: "Tamarind Sauce", qty: "1 tbsp", price: 60, available: false }
    ],
    steps: [
      "Cut eggs into small cubes.",
      "Mix with tomatoes and onions.",
      "Drizzle tamarind sauce and sprinkle chaat masala.",
      "Top with sev just before serving."
    ]
  },
  {
    id: "snack-keema-chaat",
    menuCategory: "Snacks & Street Food",
    name: "Keema Chaat",
    description: "A hearty and spicy chaat featuring minced mutton (keema) topped with traditional crunchy garnishes.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.83,
    tags: ["Snacks", "Chaat", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "keema_cooked", name: "Cooked Mutton Keema", qty: "1 cup", price: 150, available: true },
      { id: "yogurt_thick", name: "Thick Yogurt", qty: "1/4 cup", price: 10, available: true },
      { id: "chips", name: "Papdi or Chips", qty: "handful", price: 10, available: true },
      { id: "spices_chaat", name: "Chaat Spice Mix", qty: "1 tsp", price: 60, available: false }
    ],
    steps: [
      "Layer crushed chips or papdis at the bottom of a plate.",
      "Spoon hot keema over them.",
      "Drizzle yogurt and chutneys.",
      "Garnish with onions and coriander."
    ]
  },
  {
    id: "snack-fish-chaat",
    menuCategory: "Snacks & Street Food",
    name: "Fish Chaat",
    description: "Crispy fried fish pieces tossed with tangy chutneys and fresh herbs for a unique coastal chaat experience.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.74,
    tags: ["Snacks", "Chaat", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish_fried", name: "Fried Fish Chunks", qty: "1 cup", price: 180, available: true },
      { id: "cucumber_chopped", name: "Cucumber", qty: "1/2 cup", price: 10, available: true },
      { id: "lime_fresh", name: "Lime", qty: "1", price: 10, available: true },
      { id: "mint_fresh", name: "Fresh Mint", qty: "handful", price: 50, available: false }
    ],
    steps: [
      "Mix fried fish with chopped cucumber and tomatoes.",
      "Add green chutney and a squeeze of lime.",
      "Toss gently and serve immediately."
    ]
  },
  {
    id: "snack-chicken-tikka-chaat",
    menuCategory: "Starters & Appetizers",
    name: "Chicken Tikka Chaat",
    description: "Flavor-packed chaat using grilled chicken tikka, mixed with onions, tomatoes, and street-style chutneys.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 220,
    popularity: 0.88,
    tags: ["Snacks", "Chaat", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "tikka_pieces", name: "Grilled Chicken Tikka", qty: "1 cup", price: 150, available: true },
      { id: "pomegranate_seeds", name: "Pomegranate Seeds", qty: "2 tbsp", price: 20, available: true },
      { id: "curd_whisked", name: "Whisked Curd", qty: "1/4 cup", price: 10, available: true },
      { id: "spices_tikka", name: "Tikka Chaat Spices", qty: "1 tsp", price: 40, available: false }
    ],
    steps: [
      "Toss chicken tikka pieces with onions and spices.",
      "Add a dollop of curd and tamarind chutney.",
      "Garnish with pomegranate seeds for a sweet burst.",
      "Serve as a gourmet chaat."
    ]
  },

  // --- STREET FOOD (5 Veg / 5 Non-Veg) ---
  {
    id: "snack-mumbai-pani-puri",
    menuCategory: "Snacks & Street Food",
    name: "Mumbai Pani Puri",
    description: "Crispy hollow puris served with a spicy, tangy mint-flavored water and a potato-chickpea filling.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 55,
    popularity: 0.95,
    tags: ["Snacks", "Street Food", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "puris", name: "Puris (hollow)", qty: "24", price: 15, available: true },
      { id: "mint_water", name: "Pani Puri Water (Teekha)", qty: "3 cups", price: 20, available: true },
      { id: "filling", name: "Potato & Boiled Ragda", qty: "1 cup", price: 10, available: true },
      { id: "gud_water", name: "Sweet Tamarind Water", qty: "1 cup", price: 10, available: false }
    ],
    steps: [
      "Poke a hole in each puri.",
      "Stuff with a small portion of the potato-pea filling.",
      "Add a dash of sweet water.",
      "Fill the rest with the spicy mint water and enjoy in one bite."
    ]
  },
  {
    id: "snack-dabeli",
    menuCategory: "Snacks & Street Food",
    name: "Dabeli",
    description: "A popular Kutch specialty—spiced mashed potato stuffed in a pav, served with special dabeli masala and pomegranate.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 50,
    popularity: 0.91,
    tags: ["Snacks", "Street Food", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "pav_buns", name: "Pav Buns", qty: "4", price: 10, available: true },
      { id: "dabeli_masala", name: "Dabeli Masala", qty: "1 tbsp", price: 10, available: true },
      { id: "pomegranate", name: "Pomegranate Seeds", qty: "2 tbsp", price: 10, available: true },
      { id: "masala_peanuts", name: "Spicy Peanuts", qty: "2 tbsp", price: 10, available: true },
      { id: "butter", name: "Butter", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Sauté mashed potato with special dabeli masala and tamarind chutney.",
      "Slit the pav and spread spicy and garlic chutneys.",
      "Stuff with the potato mixture, masala peanuts, and pomegranate.",
      "Toast on a tawa with butter until golden.",
      "Roll the edges in fine sev before serving."
    ]
  },
  {
    id: "snack-vegetable-frankie",
    menuCategory: "Snacks & Street Food",
    name: "Vegetable Frankie",
    description: "A popular Mumbai-style roll—spicy potato patty rolled in a flatbread with onions and a special frankie masala.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 65,
    popularity: 0.88,
    tags: ["Snacks", "Street Food", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "flour_tortilla", name: "Maida Wraps (Rotis)", qty: "4", price: 15, available: true },
      { id: "potato_patty", name: "Spiced Potato Rolls", qty: "4", price: 20, available: true },
      { id: "frankie_masala", name: "Frankie Masala", qty: "1 tsp", price: 10, available: true },
      { id: "onion_vinegar", name: "Pickled Onions", qty: "1/2 cup", price: 10, available: true },
      { id: "butter", name: "Butter", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Prepare spicy cylindrical potato patties.",
      "Warm the wraps on a tawa with butter.",
      "Place the patty in the center, add pickled onions and frankie masala.",
      "Roll tightly and wrap in paper.",
      "Serve as a classic street-side snack."
    ]
  },
  {
    id: "snack-kathi-roll-veg",
    menuCategory: "Snacks & Street Food",
    name: "Kathi Roll Vegetable",
    description: "Kolkata style street-roll with a savory mixed vegetable filling in a flaky paratha.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.82,
    tags: ["Snacks", "Street Food", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "paratha_frozen", name: "Flaky Parathas", qty: "4", price: 40, available: true },
      { id: "mixed_veg_filling", name: "Sautéed Spiced Veg", qty: "1.5 cups", price: 20, available: true },
      { id: "sauce_chili", name: "Green Chili Sauce", qty: "1 tbsp", price: 10, available: true },
      { id: "onion_ring", name: "Onion Rings", qty: "handful", price: 110, available: false }
    ],
    steps: [
      "Toast parathas until golden and flaky.",
      "Spread green chili sauce and a little lime juice.",
      "Add spiced vegetable filling and onion rings.",
      "Roll tightly and serve in foil."
    ]
  },
  {
    id: "snack-cut-fruit-chaat",
    menuCategory: "Snacks & Street Food",
    name: "Cut Fruit Chaat",
    description: "Freshly cut seasonal fruits tossed with tangy chaat masala and lime, a healthy street favorite.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.80,
    tags: ["Snacks", "Street Food", "Vegetarian", "Healthy"],
    ingredients: [
      { id: "mixed_fruits", name: "Apple, Banana, Papaya", qty: "2 cups", price: 40, available: true },
      { id: "chaat_powder", name: "Chaat Masala", qty: "1 tsp", price: 5, available: true },
      { id: "lime_juice", name: "Fresh Lime", qty: "1/2", price: 5, available: true },
      { id: "mint_leaves", name: "Mint Leaves", qty: "pinch", price: 20, available: false }
    ],
    steps: [
      "Dice all fruits into bite-sized pieces.",
      "Add chaat masala and black salt.",
      "Squeeze fresh lime juice.",
      "Toss gently and serve immediately with toothpicks."
    ]
  },
  {
    id: "snack-chicken-kathi-roll",
    menuCategory: "Snacks & Street Food",
    name: "Chicken Kathi Roll",
    description: "Spicy grilled chicken pieces rolled in a flaky, egg-coated paratha, the ultimate Kolkata street snack.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 200,
    popularity: 0.94,
    tags: ["Snacks", "Street Food", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "paratha_flaky", name: "Parathas", qty: "4", price: 40, available: true },
      { id: "chicken_kebab", name: "Chicken Tikka pieces", qty: "200g", price: 100, available: true },
      { id: "egg_one", name: "Eggs", qty: "2", price: 10, available: true },
      { id: "onion_sliced", name: "Sliced Onions", qty: "handful", price: 50, available: false }
    ],
    steps: [
      "Cook chicken tikka and set aside.",
      "Break an egg onto a paratha while it's on the tawa.",
      "Flip and cook until egg is set.",
      "Place chicken and onion rings in the center.",
      "Roll tightly and serve."
    ]
  },
  {
    id: "snack-egg-roll-kolkata",
    menuCategory: "Snacks & Street Food",
    name: "Egg Roll Kolkata Style",
    description: "Simple and satisfying street-roll with a golden egg-layered paratha and crunchy spiced onions.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.91,
    tags: ["Snacks", "Street Food", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "maida_roti", name: "Maida Rotis", qty: "4", price: 20, available: true },
      { id: "egg_count", name: "Eggs", qty: "4", price: 25, available: true },
      { id: "sauce_tomato", name: "Tomato Sauce", qty: "1 tbsp", price: 5, available: true },
      { id: "chilies_chopped", name: "Green Chilies", qty: "2", price: 40, available: false }
    ],
    steps: [
      "Layer each roti with a fried egg.",
      "Spread sauce, chilies, and onion rings.",
      "Add a dash of chaat masala.",
      "Roll tightly and serve hot."
    ]
  },
  {
    id: "snack-chicken-frankie",
    menuCategory: "Snacks & Street Food",
    name: "Chicken Frankie",
    description: "A spicy chicken roll from Mumbai street stalls—juicy chicken pieces in a thin wrap with tangy onions.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 190,
    popularity: 0.86,
    tags: ["Snacks", "Street Food", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "wrap_sheets", name: "Frankie Wraps", qty: "4", price: 30, available: true },
      { id: "chicken_pieces_spiced", name: "Spiced Chicken bits", qty: "250g", price: 120, available: true },
      { id: "masala_powder", name: "Frankie Masala", qty: "1 tsp", price: 5, available: true },
      { id: "vinegar_onions", name: "Vinegar Onion Slices", qty: "1/2 cup", price: 35, available: false }
    ],
    steps: [
      "Warm the wrap on a tawa.",
      "Add spiced chicken and vinegar onions.",
      "Sprinkle frankie masala.",
      "Roll and toast for 1 minute before serving."
    ]
  },
  {
    id: "snack-mutton-roll",
    menuCategory: "Snacks & Street Food",
    name: "Mutton Roll",
    description: "Indulgent street roll filled with spicy minced mutton and crunchy fresh garnishes.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Hard",
    cost: 230,
    popularity: 0.81,
    tags: ["Snacks", "Street Food", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "paratha_plain", name: "Wheat Parathas", qty: "4", price: 30, available: true },
      { id: "mutton_keema_filling", name: "Spiced Mutton Keema", qty: "250g", price: 160, available: true },
      { id: "green_dip", name: "Green Chutney", qty: "2 tbsp", price: 5, available: true },
      { id: "lime_wedge", name: "Lime juice", qty: "1 tsp", price: 35, available: false }
    ],
    steps: [
      "Toast parathas with a little ghee.",
      "Spread green chutney.",
      "Fill with hot mutton keema and onions.",
      "Roll and serve warm."
    ]
  },
  {
    id: "snack-fish-fry-street",
    menuCategory: "Snacks & Street Food",
    name: "Fish Fry Street Style",
    description: "Quick and crispy deep-fried fish bites sold as an evening snack on Indian coastlines.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.79,
    tags: ["Snacks", "Street Food", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish_cubes", name: "Boneless Fish bits", qty: "300g", price: 180, available: true },
      { id: "garlic_paste", name: "Garlic Paste", qty: "1 tbsp", price: 5, available: true },
      { id: "semolina_coating", name: "Semolina (Rawa)", qty: "1/4 cup", price: 10, available: true },
      { id: "spices_fry", name: "Local Fish Masala", qty: "1 tbsp", price: 65, available: false }
    ],
    steps: [
      "Marinate fish with garlic and masala.",
      "Coat in semolina and deep fry until very crispy.",
      "Serve with onion slices and lemon."
    ]
  },

  // --- HEALTHY (5 Veg / 5 Non-Veg) ---
  {
    id: "snack-sprouts-chaat",
    menuCategory: "Snacks & Street Food",
    name: "Sprouts Chaat",
    description: "A highly nutritious and crunchy snack made with mixed sprouted lentils, fresh vegetables, and tangy lime.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 55,
    popularity: 0.90,
    tags: ["Snacks", "Healthy", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "mixed_sprouts", name: "Mixed Sprouted Lentils", qty: "2 cups", price: 20, available: true },
      { id: "onion_raw", name: "Onion (chopped)", qty: "1", price: 5, available: true },
      { id: "tomato_raw", name: "Tomato (chopped)", qty: "1", price: 5, available: true },
      { id: "lime", name: "Lemon Juice", qty: "1 tbsp", price: 5, available: true },
      { id: "pomegranate", name: "Pomegranate Seeds", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Steam the sprouts for 5 minutes or use them raw (wash well).",
      "In a bowl, combine sprouts, chopped onions, and tomatoes.",
      "Add salt, chaat masala, and a generous squeeze of lime juice.",
      "Toss with pomegranate seeds and fresh coriander.",
      "Enjoy as a protein-rich snack."
    ]
  },
  {
    id: "snack-roasted-makhana",
    menuCategory: "Snacks & Street Food",
    name: "Roasted Makhana",
    description: "Light and airy roasted fox nuts seasoned with simple spices, a perfect low-calorie healthy snack.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.85,
    tags: ["Snacks", "Healthy", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "fox_nuts", name: "Makhana (Fox Nuts)", qty: "2 cups", price: 40, available: true },
      { id: "pepper", name: "Black Pepper Powder", qty: "1/2 tsp", price: 5, available: true },
      { id: "turmeric", name: "Turmeric Powder", qty: "pinch", price: 5, available: true },
      { id: "ghee", name: "Desi Ghee", qty: "1 tsp", price: 20, available: false }
    ],
    steps: [
      "Heat a teaspoon of ghee in a pan on low heat.",
      "Add makhana and roast, stirring constantly for 8-10 minutes.",
      "Wait until they become crunchy to the bite.",
      "Sprinkle salt, turmeric, and black pepper.",
      "Toss for another minute and store in an airtight container."
    ]
  },
  {
    id: "snack-baked-sweet-potato-chaat",
    menuCategory: "Desserts & Sweets",
    name: "Baked Sweet Potato Chaat",
    description: "Nutritious roasted sweet potato cubes tossed with zesty Indian spices and lime.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.80,
    tags: ["Snacks", "Healthy", "Vegetarian"],
    ingredients: [
      { id: "sweet_potato", name: "Sweet Potato (cubed)", qty: "2 cups", price: 25, available: true },
      { id: "chaat_masala", name: "Chaat Masala", qty: "1 tsp", price: 10, available: true },
      { id: "lime_juice", name: "Lime", qty: "1/2", price: 30, available: false }
    ],
    steps: [
      "Toss sweet potato cubes with a little oil and salt.",
      "Bake at 200°C for 20 minutes until tender.",
      "Add spices and lime juice while warm.",
      "Serve as a healthy alternative to fried snacks."
    ]
  },
  {
    id: "snack-steamed-dhokla-bites",
    menuCategory: "Beverages",
    name: "Steamed Dhokla Bites",
    description: "Mini-sized steamed savory gram flour cakes, a light and airy protein-rich snack.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 60,
    popularity: 0.86,
    tags: ["Snacks", "Healthy", "Vegetarian"],
    ingredients: [
      { id: "besan_flour", name: "Gram Flour", qty: "2 cups", price: 30, available: true },
      { id: "curd_sour", name: "Sour Curd", qty: "1/2 cup", price: 10, available: true },
      { id: "mustard_tempering", name: "Mustard Seeds", qty: "1 tsp", price: 20, available: false }
    ],
    steps: [
      "Make a smooth batter and steam for 15 minutes.",
      "Cut into tiny bite-sized cubes.",
      "Temper with very minimal oil and mustard seeds.",
      "Garnish with lots of coriander."
    ]
  },
  {
    id: "snack-roasted-chana-snack",
    menuCategory: "Snacks & Street Food",
    name: "Roasted Chana Snack",
    description: "Crunchy spiced roasted chickpeas, a high-fiber and protein-dense snack for anytime.",
    type: "Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 45,
    popularity: 0.78,
    tags: ["Snacks", "Healthy", "Vegetarian", "Spicy"],
    ingredients: [
      { id: "chana_boiled", name: "Boiled Chickpeas", qty: "2 cups", price: 20, available: true },
      { id: "chili_flour", name: "Chili Powder", qty: "1 tsp", price: 25, available: false }
    ],
    steps: [
      "Toss chickpeas with spices and minimal oil.",
      "Roast on a tawa or in an oven until crunchy.",
      "Store and serve cold."
    ]
  },
  {
    id: "snack-grilled-chicken-skewers",
    menuCategory: "Snacks & Street Food",
    name: "Grilled Chicken Skewers",
    description: "Lightly seasoned and grilled chicken chunks, a lean and healthy protein snack.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 220,
    popularity: 0.84,
    tags: ["Snacks", "Healthy", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken_lean", name: "Boneless Chicken Breast", qty: "300g", price: 150, available: true },
      { id: "lemon_juice", name: "Lemon", qty: "1", price: 10, available: true },
      { id: "pepper_spice", name: "Black Pepper", qty: "1 tsp", price: 60, available: false }
    ],
    steps: [
      "Marinate chicken with lemon, pepper, and ginger.",
      "Thread onto skewers.",
      "Grill until cooked through and lightly browned.",
      "Serve with a fresh salad."
    ]
  },
  {
    id: "snack-steamed-egg-bites",
    menuCategory: "Beverages",
    name: "Steamed Egg Bites",
    description: "Light and airy steamed egg white bites seasoned with fresh herbs and spices.",
    type: "Non-Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 90,
    popularity: 0.70,
    tags: ["Snacks", "Healthy", "Non-Vegetarian"],
    ingredients: [
      { id: "egg_whites", name: "Egg Whites", qty: "6", price: 30, available: true },
      { id: "herbs_fresh", name: "Mint & Parsley", qty: "handful", price: 20, available: true },
      { id: "cups_muffin", name: "Silicone Molds", qty: "as needed", price: 40, available: false }
    ],
    steps: [
      "Whisk egg whites with herbs and salt.",
      "Pour into small molds.",
      "Steam for 10 minutes until firm.",
      "Enjoy as a light breakfast or snack."
    ]
  },
  {
    id: "snack-grilled-fish-bites",
    menuCategory: "Snacks & Street Food",
    name: "Grilled Fish Bites",
    description: "Low-fat grilled fish cubes marinated in a delicate lemon-garlic sauce.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.79,
    tags: ["Snacks", "Healthy", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "fish_lean", name: "White Fish", qty: "300g", price: 200, available: true },
      { id: "garlic_fresh", name: "Garlic (minced)", qty: "1 tbsp", price: 60, available: false }
    ],
    steps: [
      "Marinate fish cubes in lemon and garlic.",
      "Grill on a non-stick pan with minimal oil.",
      "Serve warm."
    ]
  },
  {
    id: "snack-boiled-egg-chaat-healthy",
    menuCategory: "Snacks & Street Food",
    name: "Boiled Egg Chaat (Healthy Style)",
    description: "Protein-rich boiled eggs tossed with fresh vegetables and zero-oil dressings.",
    type: "Non-Vegetarian",
    time: 15,
    servings: 4,
    difficulty: "Easy",
    cost: 100,
    popularity: 0.82,
    tags: ["Snacks", "Healthy", "Non-Vegetarian"],
    ingredients: [
      { id: "eggs_boiled_clean", name: "Boiled Eggs", qty: "4", price: 40, available: true },
      { id: "spices_healthy", name: "Chaat Masala", qty: "1 tsp", price: 60, available: false }
    ],
    steps: [
      "Slice boiled eggs.",
      "Top with chopped tomatoes, cucumbers, and onions.",
      "Add lemon juice and salt.",
      "Serve immediately."
    ]
  },
  {
    id: "snack-grilled-chicken-tikka-healthy",
    menuCategory: "Starters & Appetizers",
    name: "Grilled Chicken Tikka (Healthy Style)",
    description: "Traditional tikka made with extra-lean chicken and minimal oil, focusing on the yogurt marinade.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 210,
    popularity: 0.88,
    tags: ["Snacks", "Healthy", "Non-Vegetarian", "Spicy"],
    ingredients: [
      { id: "chicken_breast_lean", name: "Chicken Breast", qty: "400g", price: 160, available: true },
      { id: "yogurt_lowfat", name: "Low-fat Yogurt", qty: "1/2 cup", price: 50, available: false }
    ],
    steps: [
      "Marinate lean chicken chunks.",
      "Grill until tender.",
      "Serve with mint chutney."
    ]
  }
];
