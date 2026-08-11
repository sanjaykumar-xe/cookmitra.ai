import { Recipe } from './types';

export const rajasthanRecipes: Recipe[] = [
  {
    id: "laal-maas",
    menuCategory: "Curries & Gravies",
    name: "Laal Maas",
    description: "A fiery Rajasthani mutton curry cooked with a variety of spices and a burst of red chillies.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 450,
    popularity: 0.9,
    tags: ["Rajasthani", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 400, available: true },
      { id: "red_chili", name: "Mathania Red Chilies", qty: "10", price: 20, available: true },
      { id: "yogurt", name: "Yogurt", qty: "1 cup", price: 15, available: true },
      { id: "ghee", name: "Ghee", qty: "4 tbsp", price: 50, available: true }
    ],
    steps: [
      "Marinate mutton in yogurt and spices.",
      "Prepare a paste of soaked Mathania red chilies.",
      "Cook mutton with onions and the chili paste until tender.",
      "Smoke the curry with a piece of charcoal for authentic flavor."
    ]
  },
  {
    id: "moong-dal-halwa",
    menuCategory: "Desserts & Sweets",
    name: "Moong Dal Halwa",
    description: "A rich and delicious golden-colored halwa made with split yellow moong dal and ghee.",
    type: "Vegetarian",
    time: 45,
    servings: 4,
    difficulty: "Hard",
    cost: 180,
    popularity: 0.85,
    tags: ["Rajasthani", "Vegetarian", "Dessert"],
    healthTags: [],
    ingredients: [
      { id: "moong_dal", name: "Moong Dal", qty: "1 cup", price: 30, available: true },
      { id: "ghee", name: "Ghee", qty: "1 cup", price: 200, available: true },
      { id: "sugar", name: "Sugar", qty: "1 cup", price: 10, available: true }
    ],
    steps: [
      "Soak and grind moong dal coarsely.",
      "Sauté the dal in a lot of ghee until it turns golden brown.",
      "Add sugar syrup and cook until the halwa thickens.",
      "Garnish with nuts and serve hot."
    ]
  },
  {
    id: "kachori",
    menuCategory: "Snacks & Street Food",
    name: "Moong Dal Kachori",
    description: "Crispy, flaky deep-fried pastries filled with a savory moong dal mixture.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.8,
    tags: ["Rajasthani", "Vegetarian", "Snacks"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "all_purpose_flour", name: "Maida", qty: "2 cups", price: 20, available: true },
      { id: "moong_dal", name: "Moong Dal", qty: "1/2 cup", price: 15, available: true },
      { id: "oil", name: "Oil for frying", qty: "2 cups", price: 40, available: true }
    ],
    steps: [
      "Prepare a spiced moong dal filling.",
      "Make a flaky dough with flour and oil.",
      "Stuff the filling into dough discs and deep fry until golden."
    ]
  },
  {
    id: "dal-baati-churma",
    menuCategory: "Curries & Gravies",
    name: "Dal Baati Churma",
    description: "Baked wheat balls served with spiced lentils and a sweet crumbled wheat dessert, Rajasthan's most iconic dish.",
    type: "Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 150,
    popularity: 0.85,
    tags: ["Rajasthani", "Vegetarian", "Comfort Food"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "wheat_flour", name: "Wheat Flour", qty: "2 cups", price: 20, available: true },
      { id: "toor_dal", name: "Toor Dal", qty: "1 cup", price: 40, available: true },
      { id: "ghee", name: "Ghee", qty: "1/2 cup", price: 100, available: true },
      { id: "jaggery", name: "Jaggery", qty: "1/2 cup", price: 15, available: true },
      { id: "spices", name: "Spices", qty: "various", price: 10, available: true }
    ],
    steps: [
      "Prepare stiff dough for baatis, shape into rounds and bake.",
      "Cook dal with Rajasthani spices until thick.",
      "For churma, crush baatis and mix with ghee and sugar/jaggery.",
      "Serve dal and churma with ghee-dipped baatis."
    ]
  },
  {
    id: "gatte-ki-sabzi",
    menuCategory: "Curries & Gravies",
    name: "Gatte Ki Sabzi",
    description: "Steamed gram flour dumplings simmered in a spiced yogurt gravy, a Rajasthani specialty born from desert scarcity of vegetables.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.82,
    tags: ["Rajasthani", "Vegetarian", "Spicy"],
    healthTags: ["digestive-friendly", "anemia-friendly"],
    ingredients: [
      { id: "besan", name: "Gram Flour (Besan)", qty: "1.5 cups", price: 30, available: true },
      { id: "yogurt", name: "Curd", qty: "1 cup", price: 15, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "spices", name: "Rajasthani Spices", qty: "various", price: 15, available: true }
    ],
    steps: [
      "Make stiff besan dough with spices and oil.",
      "Roll into logs, boil in water, and cut into rounds.",
      "Sauté onions and whisked yogurt with spices.",
      "Add cooked gatte and simmer until gravy thickens.",
      "Serve hot with paratha or rice."
    ]
  },
  {
    id: "ker-sangri",
    menuCategory: "Curries & Gravies",
    name: "Ker Sangri",
    description: "A dry, tangy desert-bean and berry curry, a distinctly Rajasthani dish using drought-resistant ingredients.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 110,
    popularity: 0.78,
    tags: ["Rajasthani", "Vegetarian", "Spicy"],
    healthTags: ["diabetes-friendly", "weight-management"],
    ingredients: [
      { id: "ker", name: "Ker (Desert Berries)", qty: "1/2 cup", price: 40, available: false },
      { id: "sangri", name: "Sangri (Desert Beans)", qty: "1 cup", price: 50, available: true },
      { id: "dry_mango", name: "Amchur", qty: "1 tbsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "3 tbsp", price: 15, available: true }
    ],
    steps: [
      "Soak ker and sangri overnight and boil until soft.",
      "Sauté whole spices and ginger in oil.",
      "Add ker-sangri and dry spice powders.",
      "Add amchur for tanginess and cook until dry."
    ]
  },
  {
    id: "bajre-ki-roti",
    menuCategory: "Breads",
    name: "Bajre Ki Roti",
    description: "A rustic pearl millet flatbread, a staple in rural Rajasthan often paired with ghee and jaggery.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Medium",
    cost: 50,
    popularity: 0.75,
    tags: ["Rajasthani", "Vegetarian", "Healthy"],
    healthTags: ["diabetes-friendly", "weight-management", "pcos-friendly"],
    ingredients: [
      { id: "bajra_flour", name: "Pearl Millet Flour", qty: "2 cups", price: 30, available: true },
      { id: "hot_water", name: "Hot Water", qty: "as needed", price: 0, available: true },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 20, available: true }
    ],
    steps: [
      "Knead bajra flour with hot water into a soft dough.",
      "Pat into thick flatbreads using palms.",
      "Cook on a tawa until golden brown spots appear.",
      "Apply generous ghee and serve with jaggery or curry."
    ]
  },
  {
    id: "pyaaz-kachori",
    menuCategory: "Snacks & Street Food",
    name: "Pyaaz Kachori",
    description: "Crispy pastries stuffed with a spiced onion filling, a beloved Rajasthani street snack.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.85,
    tags: ["Rajasthani", "Vegetarian", "Snacks", "Street Food", "Spicy"],
    healthTags: [],
    ingredients: [
      { id: "maida", name: "All-purpose Flour", qty: "2 cups", price: 20, available: true },
      { id: "onion", name: "Onions", qty: "3 large", price: 15, available: true },
      { id: "gram_flour", name: "Besan", qty: "2 tbsp", price: 5, available: true },
      { id: "oil", name: "Oil for frying", qty: "2 cups", price: 40, available: true }
    ],
    steps: [
      "Prepare a spicy onion and besan filling.",
      "Make a flaky dough with flour, oil, and water.",
      "Stuff small dough portions with onion mixture.",
      "Deep fry on low heat until golden and crispy."
    ]
  },
  {
    id: "rajasthani-kadhi",
    menuCategory: "Curries & Gravies",
    name: "Rajasthani Kadhi",
    description: "A tangy, spiced yogurt-gram flour curry with a distinct fiery Rajasthani chili tempering.",
    type: "Vegetarian",
    time: 25,
    servings: 4,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.78,
    tags: ["Rajasthani", "Vegetarian", "Comfort Food", "Spicy"],
    healthTags: ["digestive-friendly"],
    ingredients: [
      { id: "yogurt", name: "Sour Curd", qty: "2 cups", price: 20, available: true },
      { id: "besan", name: "Besan", qty: "1/4 cup", price: 10, available: true },
      { id: "green_chili", name: "Green Chilies", qty: "2", price: 5, available: true },
      { id: "ghee", name: "Ghee for tempering", qty: "2 tbsp", price: 35, available: true }
    ],
    steps: [
      "Whisk curd and besan with water until smooth.",
      "Simmer the mixture with turmeric and ginger paste.",
      "Prepare tempering with ghee, mustard, and dried red chilies.",
      "Pour tempering over the kadhi and serve with rice."
    ]
  },
  {
    id: "mirchi-bada",
    menuCategory: "Snacks & Street Food",
    name: "Mirchi Bada",
    description: "Large green chilies stuffed with spiced potato filling, battered, and deep-fried.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.81,
    tags: ["Rajasthani", "Vegetarian", "Snacks", "Spicy"],
    healthTags: ["immunity-boosting"],
    ingredients: [
      { id: "green_chili_large", name: "Large Green Chilies", qty: "8", price: 20, available: true },
      { id: "potato", name: "Potatoes", qty: "3", price: 10, available: true },
      { id: "besan", name: "Besan", qty: "1 cup", price: 25, available: true },
      { id: "oil", name: "Oil for frying", qty: "2 cups", price: 15, available: true }
    ],
    steps: [
      "Prepare spiced mashed potato filling.",
      "Slit chilies and remove seeds, then stuff with potatoes.",
      "Dip stuffed chilies in a thick besan batter.",
      "Deep fry until golden brown and serve with chutney."
    ]
  },
  {
    id: "papad-ki-sabzi",
    menuCategory: "Sides & Accompaniments",
    name: "Papad Ki Sabzi",
    description: "A unique curry made with crushed lentil papad simmered in a spiced yogurt gravy.",
    type: "Vegetarian",
    time: 20,
    servings: 4,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.72,
    tags: ["Rajasthani", "Vegetarian"],
    healthTags: ["digestive-friendly"],
    ingredients: [
      { id: "papad", name: "Lentil Papad", qty: "4", price: 20, available: true },
      { id: "yogurt", name: "Curd", qty: "1 cup", price: 15, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 5, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 20, available: true }
    ],
    steps: [
      "Whisk yogurt with spices and water.",
      "Sauté cumin and mustard seeds in oil.",
      "Add yogurt mixture and simmer into a gravy.",
      "Break papad into pieces, add to gravy, and cook for 2 minutes."
    ]
  },
  {
    id: "rajasthani-besan-chilla",
    menuCategory: "Breakfast & Tiffin",
    name: "Rajasthani Besan Chilla",
    description: "A savory gram flour pancake spiced with Rajasthani seasonings, a quick breakfast dish.",
    type: "Vegetarian",
    time: 15,
    servings: 3,
    difficulty: "Easy",
    cost: 50,
    popularity: 0.68,
    tags: ["Rajasthani", "Vegetarian", "Breakfast", "Healthy"],
    healthTags: ["diabetes-friendly", "weight-management", "pcos-friendly"],
    ingredients: [
      { id: "besan", name: "Besan", qty: "1.5 cups", price: 30, available: true },
      { id: "onion", name: "Onion", qty: "1", price: 5, available: true },
      { id: "ajwain", name: "Ajwain", qty: "1/2 tsp", price: 10, available: true },
      { id: "green_chili", name: "Green Chili", qty: "1", price: 5, available: true }
    ],
    steps: [
      "Make a smooth batter with besan, water, and spices.",
      "Mix in finely chopped onions and chilies.",
      "Spread batter on a hot greased tawa.",
      "Cook both sides until golden brown and serve hot."
    ]
  },
  {
    id: "malpua",
    menuCategory: "Desserts & Sweets",
    name: "Malpua",
    description: "Sweet, syrup-soaked pancakes, a festive Rajasthani dessert often served with rabri.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 120,
    popularity: 0.83,
    tags: ["Rajasthani", "Dessert"],
    healthTags: [],
    ingredients: [
      { id: "maida", name: "All-purpose Flour", qty: "1 cup", price: 10, available: true },
      { id: "khoya", name: "Khoya", qty: "1/2 cup", price: 50, available: false },
      { id: "sugar", name: "Sugar", qty: "1.5 cups", price: 15, available: true },
      { id: "ghee", name: "Ghee for frying", qty: "1 cup", price: 45, available: true }
    ],
    steps: [
      "Make a batter with flour, khoya, and fennel seeds.",
      "Prepare a one-string sugar syrup.",
      "Fry small pancakes in ghee until edges are crisp.",
      "Soak in sugar syrup for 2 minutes and serve."
    ]
  },
  {
    id: "ghevar",
    menuCategory: "Curries & Gravies",
    name: "Ghevar",
    description: "A disc-shaped, honeycomb-textured sweet soaked in sugar syrup, a signature Rajasthani festival dessert.",
    type: "Vegetarian",
    time: 45,
    servings: 6,
    difficulty: "Hard",
    cost: 160,
    popularity: 0.89,
    tags: ["Rajasthani", "Dessert"],
    healthTags: [],
    ingredients: [
      { id: "maida", name: "Maida", qty: "2 cups", price: 20, available: true },
      { id: "ghee", name: "Cold Ghee", qty: "1/2 cup", price: 80, available: true },
      { id: "sugar", name: "Sugar", qty: "1.5 cups", price: 15, available: true },
      { id: "ice_water", name: "Ice Cold Water", qty: "as needed", price: 0, available: true }
    ],
    steps: [
      "Whisk ghee and cold water into a smooth cream.",
      "Gradually add flour and ice-cold water to make a very thin batter.",
      "Pour batter in a thin stream into hot ghee to create honeycomb texture.",
      "Drizzle with sugar syrup once fried and serve."
    ]
  },
  {
    id: "rajasthani-pulao",
    menuCategory: "Rice & Biryani",
    name: "Rajasthani Pulao",
    description: "A fragrant, mildly spiced rice dish with dried fruits and nuts, a royal Rajasthani accompaniment.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 110,
    popularity: 0.74,
    tags: ["Rajasthani", "Vegetarian"],
    healthTags: ["pcos-friendly"],
    ingredients: [
      { id: "basmati_rice", name: "Basmati Rice", qty: "2 cups", price: 100, available: true },
      { id: "dry_fruits", name: "Cashews and Raisins", qty: "1/4 cup", price: 50, available: true },
      { id: "saffron", name: "Saffron", qty: "pinch", price: 40, available: false },
      { id: "ghee", name: "Ghee", qty: "2 tbsp", price: 20, available: true }
    ],
    steps: [
      "Soak rice for 20 minutes.",
      "Sauté nuts and whole spices in ghee.",
      "Cook rice with saffron water and spices.",
      "Fluff and garnish with fried nuts before serving."
    ]
  },
  {
    id: "chana-dal-halwa",
    menuCategory: "Desserts & Sweets",
    name: "Chana Dal Halwa (Rajasthani Style)",
    description: "A rich, ghee-based split chickpea dal dessert, distinct from the moong dal version.",
    type: "Vegetarian",
    time: 50,
    servings: 6,
    difficulty: "Hard",
    cost: 200,
    popularity: 0.79,
    tags: ["Rajasthani", "Dessert"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "chana_dal", name: "Chana Dal", qty: "1 cup", price: 30, available: true },
      { id: "sugar", name: "Sugar", qty: "1 cup", price: 10, available: true },
      { id: "ghee", name: "Ghee", qty: "1 cup", price: 150, available: true },
      { id: "milk", name: "Milk", qty: "2 cups", price: 10, available: true }
    ],
    steps: [
      "Soak and grind chana dal coarsely.",
      "Sauté dal in ghee until it turns nutty brown.",
      "Add milk and sugar; cook while stirring until thick.",
      "Garnish with cardamom and nuts."
    ]
  },
  {
    id: "safed-maas",
    menuCategory: "Curries & Gravies",
    name: "Safed Maas",
    description: "A rich, creamy white mutton curry made with cashews and yogurt, a royal Rajasthani dish.",
    type: "Non-Vegetarian",
    time: 65,
    servings: 4,
    difficulty: "Hard",
    cost: 580,
    popularity: 0.86,
    tags: ["Rajasthani", "Non-Vegetarian"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 400, available: true },
      { id: "cashews", name: "Cashew Paste", qty: "1/2 cup", price: 100, available: false },
      { id: "yogurt", name: "Whisked Yogurt", qty: "1 cup", price: 20, available: true },
      { id: "white_pepper", name: "White Pepper", qty: "1 tsp", price: 60, available: true }
    ],
    steps: [
      "Marinate mutton in ginger-garlic and white pepper.",
      "Prepare a white gravy with onion paste and cashews.",
      "Cook mutton in the gravy until tender.",
      "Finish with cream and serve with rumali roti."
    ]
  },
  {
    id: "jungli-maas",
    menuCategory: "Curries & Gravies",
    name: "Jungli Maas",
    description: "An extremely simple, minimally spiced mutton curry cooked in ghee, a hunting-camp-style Rajasthani dish.",
    type: "Non-Vegetarian",
    time: 55,
    servings: 4,
    difficulty: "Hard",
    cost: 540,
    popularity: 0.8,
    tags: ["Rajasthani", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 400, available: true },
      { id: "dry_red_chili", name: "Whole Red Chilies", qty: "15", price: 20, available: true },
      { id: "ghee", name: "Ghee", qty: "1/2 cup", price: 120, available: true }
    ],
    steps: [
      "Heat ghee in a heavy pot.",
      "Add mutton and whole red chilies.",
      "Slow cook with just salt and minimal water.",
      "Cook until meat is tender and releases its own fat."
    ]
  },
  {
    id: "rajasthani-chicken-curry",
    menuCategory: "Curries & Gravies",
    name: "Rajasthani Chicken Curry",
    description: "A rich, yogurt-based chicken curry with a distinctive Rajasthani spice blend.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 280,
    popularity: 0.82,
    tags: ["Rajasthani", "Non-Vegetarian", "Spicy"],
    healthTags: ["immunity-boosting"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "yogurt", name: "Curd", qty: "1 cup", price: 20, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1/4 cup", price: 50, available: true },
      { id: "spices", name: "Rajasthan Garam Masala", qty: "2 tbsp", price: 50, available: true }
    ],
    steps: [
      "Marinate chicken in spiced curd.",
      "Sauté onions and ginger-garlic paste in mustard oil.",
      "Add chicken and cook until oil separates.",
      "Add water and simmer until tender."
    ]
  },
  {
    id: "mutton-khaad",
    menuCategory: "Curries & Gravies",
    name: "Mutton Khaad Khargosh Style",
    description: "Mutton slow-cooked in an underground pit-style method (adapted for stovetop), a traditional Rajasthani royal preparation.",
    type: "Non-Vegetarian",
    time: 90,
    servings: 4,
    difficulty: "Hard",
    cost: 600,
    popularity: 0.75,
    tags: ["Rajasthani", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "750g", price: 500, available: true },
      { id: "raw_papaya", name: "Papaya Paste", qty: "2 tbsp", price: 10, available: false },
      { id: "spices", name: "Khaad Masala", qty: "3 tbsp", price: 90, available: true }
    ],
    steps: [
      "Marinate meat in papaya paste and spices for 4 hours.",
      "Wrap in foil (to simulate underground pot) and seal.",
      "Slow cook on very low flame for 1.5 hours.",
      "Garnish with charcoal smoke for authenticity."
    ]
  },
  {
    id: "achar-gosht",
    menuCategory: "Curries & Gravies",
    name: "Achar Gosht",
    description: "Mutton cooked in a tangy, pickle-spiced masala, a distinctive Rajasthani preparation.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 550,
    popularity: 0.79,
    tags: ["Rajasthani", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 400, available: true },
      { id: "achar_masala", name: "Pickle Spices (Achari Masala)", qty: "2 tbsp", price: 40, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1/4 cup", price: 60, available: true },
      { id: "yogurt", name: "Curd", qty: "1/2 cup", price: 50, available: true }
    ],
    steps: [
      "Prepare achari masala using fennel, mustard, and nigella seeds.",
      "Sauté meat in mustard oil with the masala.",
      "Add curd and cook until mutton is tender and tangy."
    ]
  },
  {
    id: "rajasthani-mutton-curry",
    menuCategory: "Curries & Gravies",
    name: "Rajasthani Mutton Curry",
    description: "A rustic, deeply spiced mutton curry distinct from Laal Maas and Safed Maas.",
    type: "Non-Vegetarian",
    time: 60,
    servings: 4,
    difficulty: "Hard",
    cost: 560,
    popularity: 0.81,
    tags: ["Rajasthani", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 400, available: true },
      { id: "garlic", name: "Garlic cloves", qty: "10", price: 10, available: true },
      { id: "onion", name: "Onions", qty: "3", price: 50, available: true },
      { id: "spices", name: "Village Spice Blend", qty: "2 tbsp", price: 100, available: true }
    ],
    steps: [
      "Pressure cook meat with salt and turmeric.",
      "Fry onions and garlic paste until dark brown.",
      "Add spices and the meat pieces.",
      "Simmer on low heat until gravy is thick."
    ]
  },
  {
    id: "khad-kukkad",
    menuCategory: "Curries & Gravies",
    name: "Khad Kukkad (Chicken in Clay Pot)",
    description: "Chicken marinated and slow-cooked in a sealed pot, a royal Rajasthani method.",
    type: "Non-Vegetarian",
    time: 55,
    servings: 4,
    difficulty: "Hard",
    cost: 300,
    popularity: 0.77,
    tags: ["Rajasthani", "Non-Vegetarian"],
    healthTags: ["immunity-boosting"],
    ingredients: [
      { id: "chicken", name: "Whole Chicken", qty: "800g", price: 220, available: true },
      { id: "ginger_garlic", name: "Ginger-Garlic Paste", qty: "2 tbsp", price: 10, available: true },
      { id: "spices", name: "Kukkad Spice Mix", qty: "3 tbsp", price: 70, available: true }
    ],
    steps: [
      "Apply deep slits to chicken and rub with spices.",
      "Place in a pot and seal the lid with dough.",
      "Cook on slow embers or low flame for 45 minutes.",
      "Serve hot with butter."
    ]
  },
  {
    id: "mutton-soweta",
    menuCategory: "Curries & Gravies",
    name: "Mutton Soweta",
    description: "A creamy, mildly spiced mutton curry with a nutty gravy, distinct from Safed Maas.",
    type: "Non-Vegetarian",
    time: 55,
    servings: 4,
    difficulty: "Hard",
    cost: 560,
    popularity: 0.74,
    tags: ["Rajasthani", "Non-Vegetarian"],
    healthTags: ["anemia-friendly", "pcos-friendly"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 400, available: true },
      { id: "poppy_seeds", name: "Poppy Seeds", qty: "1 tbsp", price: 60, available: false },
      { id: "coconut", name: "Dry Coconut Paste", qty: "1/4 cup", price: 50, available: true },
      { id: "ghee", name: "Ghee", qty: "3 tbsp", price: 50, available: true }
    ],
    steps: [
      "Make a paste of poppy seeds and dry coconut.",
      "Sauté meat in ghee with onions.",
      "Add paste and mild spices.",
      "Simmer until gravy is rich and meat is tender."
    ]
  },
  {
    id: "chicken-achari-rajasthani",
    menuCategory: "Curries & Gravies",
    name: "Chicken Achari",
    description: "Chicken cooked in a tangy pickling-spice masala, a Rajasthani favorite.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 270,
    popularity: 0.8,
    tags: ["Rajasthani", "Non-Vegetarian", "Spicy"],
    healthTags: ["immunity-boosting"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "mustard_oil", name: "Mustard Oil", qty: "1/4 cup", price: 60, available: true },
      { id: "achar_spices", name: "Achari Spice Mix", qty: "1 tbsp", price: 50, available: true }
    ],
    steps: [
      "Heat mustard oil to smoking point.",
      "Add achari spices and sauté chicken.",
      "Add yogurt and cook until chicken is done.",
      "Garnish with pickled chilies."
    ]
  },
  {
    id: "rajasthani-fish-curry",
    menuCategory: "Curries & Gravies",
    name: "Rajasthani Fish Curry",
    description: "A rare inland-style fish curry made with river fish and a Rajasthani spice blend.",
    type: "Non-Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 300,
    popularity: 0.72,
    tags: ["Rajasthani", "Non-Vegetarian", "Spicy"],
    healthTags: ["heart-healthy"],
    ingredients: [
      { id: "fish", name: "River Fish", qty: "500g", price: 250, available: true },
      { id: "yogurt", name: "Curd", qty: "1/2 cup", price: 10, available: true },
      { id: "mustard_seeds", name: "Mustard Seeds", qty: "1 tsp", price: 40, available: true }
    ],
    steps: [
      "Lightly fry marinated fish slices.",
      "Prepare a tangy gravy with curd and mustard.",
      "Simmer fish in the gravy for 5 minutes.",
      "Garnish with coriander."
    ]
  },
  {
    id: "bater-curry",
    menuCategory: "Curries & Gravies",
    name: "Bater (Quail) Curry",
    description: "A traditional Rajasthani quail curry, a royal hunting-heritage dish.",
    type: "Non-Vegetarian",
    time: 40,
    servings: 3,
    difficulty: "Hard",
    cost: 400,
    popularity: 0.68,
    tags: ["Rajasthani", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "quail", name: "Quail (Bater)", qty: "4", price: 320, available: true },
      { id: "onion", name: "Sautéed Onion Paste", qty: "1 cup", price: 30, available: true },
      { id: "garlic", name: "Fresh Garlic", qty: "5 cloves", price: 50, available: true }
    ],
    steps: [
      "Wash and marinate quail in ginger-garlic.",
      "Prepare thick spicy onion-based gravy.",
      "Cook quail until tender.",
      "Finish with a touch of ghee."
    ]
  },
  {
    id: "mutton-handi",
    menuCategory: "Curries & Gravies",
    name: "Mutton Handi",
    description: "Mutton slow-cooked in a sealed clay handi with rich spices, a festive Rajasthani preparation.",
    type: "Non-Vegetarian",
    time: 70,
    servings: 4,
    difficulty: "Hard",
    cost: 570,
    popularity: 0.83,
    tags: ["Rajasthani", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "mutton", name: "Mutton", qty: "500g", price: 400, available: true },
      { id: "handi", name: "Clay Handi (for cooking)", qty: "1", price: 100, available: true },
      { id: "ghee", name: "Ghee", qty: "4 tbsp", price: 70, available: true }
    ],
    steps: [
      "Layer meat and spices in a clay handi.",
      "Seal the handi with dough.",
      "Slow cook for over an hour.",
      "Serve directly from the handi."
    ]
  },
  {
    id: "chicken-rassa-rajasthani",
    menuCategory: "Curries & Gravies",
    name: "Chicken Rassa (Rajasthani Style)",
    description: "A thin, spicy red chicken gravy meant to be soaked with bajra roti.",
    type: "Non-Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 260,
    popularity: 0.79,
    tags: ["Rajasthani", "Non-Vegetarian", "Spicy"],
    healthTags: ["immunity-boosting"],
    ingredients: [
      { id: "chicken", name: "Chicken", qty: "500g", price: 160, available: true },
      { id: "red_chili", name: "Red Chili Powder", qty: "2 tbsp", price: 90, available: true },
      { id: "garlic", name: "Garlic", qty: "10 cloves", price: 10, available: true }
    ],
    steps: [
      "Prepare a watery but intensely spiced base.",
      "Cook chicken until soft.",
      "Simmer until oil floats on top.",
      "Serve hot with rustic rotis."
    ]
  },
  {
    id: "egg-curry-rajasthani",
    menuCategory: "Curries & Gravies",
    name: "Egg Curry (Rajasthani Style)",
    description: "Boiled eggs simmered in a fiery red Rajasthani onion-tomato masala.",
    type: "Non-Vegetarian",
    time: 25,
    servings: 3,
    difficulty: "Easy",
    cost: 100,
    popularity: 0.8,
    tags: ["Rajasthani", "Non-Vegetarian", "Spicy"],
    healthTags: ["anemia-friendly"],
    ingredients: [
      { id: "eggs", name: "Eggs", qty: "4", price: 40, available: true },
      { id: "red_chili", name: "Mathania Chili Powder", qty: "1 tbsp", price: 50, available: true },
      { id: "oil", name: "Oil", qty: "2 tbsp", price: 10, available: true }
    ],
    steps: [
      "Boil and fry eggs until golden.",
      "Prepare spicy red gravy with ginger-garlic.",
      "Drop eggs into gravy and simmer.",
      "Serve with steamed rice."
    ]
  }
];
