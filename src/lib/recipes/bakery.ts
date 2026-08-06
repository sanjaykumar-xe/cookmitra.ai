import { Recipe } from './types';

export const bakeryRecipes: Recipe[] = [
  // --- BREADS (10) ---
  {
    id: "bakery-whole-wheat-bread",
    name: "Whole Wheat Sandwich Bread",
    description: "A soft, healthy everyday loaf made with 100% whole wheat flour, perfect for sandwiches and toast.",
    type: "Vegetarian",
    time: 180,
    servings: 8,
    difficulty: "Medium",
    cost: 60,
    popularity: 0.85,
    tags: ["Bakery", "Breads", "Vegetarian", "Eggless"],
    ingredients: [
      { id: "whole_wheat_flour", name: "Whole Wheat Flour", qty: "3 cups", price: 20, available: true },
      { id: "yeast", name: "Instant Yeast", qty: "2 tsp", price: 10, available: true },
      { id: "honey", name: "Honey or Sugar", qty: "2 tbsp", price: 5, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "2 tbsp", price: 5, available: true },
      { id: "water", name: "Warm Water", qty: "1.25 cups", price: 0, available: true }
    ],
    steps: [
      "Mix warm water, yeast, and honey; let it sit for 5-10 minutes until frothy.",
      "In a large bowl, combine flour and salt; add the yeast mixture and oil.",
      "Knead the dough for 8-10 minutes until smooth and elastic.",
      "Place in a greased bowl, cover, and let it rise in a warm place for 1 hour or until doubled in size.",
      "Punch down the dough, shape into a loaf, and place in a greased bread tin for a second rise (45 minutes).",
      "Bake at 190°C (375°F) for 30-35 minutes until the top is golden and sounds hollow when tapped."
    ]
  },
  {
    id: "bakery-garlic-rolls",
    name: "Garlic Butter Dinner Rolls",
    description: "Soft, pull-apart dinner rolls brushed with a rich garlic and herb butter finish.",
    type: "Vegetarian",
    time: 150,
    servings: 8,
    difficulty: "Medium",
    cost: 70,
    popularity: 0.82,
    tags: ["Bakery", "Breads", "Vegetarian", "Contains Egg"],
    ingredients: [
      { id: "all_purpose_flour", name: "All-purpose Flour", qty: "3 cups", price: 15, available: true },
      { id: "butter", name: "Salted Butter", qty: "4 tbsp", price: 30, available: true },
      { id: "milk", name: "Warm Milk", qty: "1 cup", price: 10, available: true },
      { id: "egg", name: "Egg (for wash)", qty: "1", price: 5, available: true },
      { id: "garlic", name: "Minced Garlic", qty: "1 tbsp", price: 5, available: true }
    ],
    steps: [
      "Activate yeast in warm milk with a pinch of sugar.",
      "Mix flour, melted butter, and yeast mixture; knead into a soft dough.",
      "Let the dough rise for 1 hour until doubled.",
      "Divide into 12 small balls and place them close together in a greased baking dish.",
      "Let rise for another 30 minutes; brush with egg wash.",
      "Bake at 180°C for 20-25 minutes; brush immediately with garlic-herb butter after baking."
    ]
  },
  {
    id: "bakery-multigrain-bread",
    name: "Multigrain Seeded Bread",
    description: "A hearty and nutritious loaf packed with oats, flax seeds, and sunflower seeds for a rich texture.",
    type: "Vegetarian",
    time: 180,
    servings: 8,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.78,
    tags: ["Bakery", "Breads", "Vegetarian", "Eggless", "Healthy"],
    ingredients: [
      { id: "multigrain_mix", name: "Multigrain Flour", qty: "3 cups", price: 40, available: true },
      { id: "mixed_seeds", name: "Flax, Sunflower, Pumpkin Seeds", qty: "1/4 cup", price: 20, available: true },
      { id: "oats", name: "Rolled Oats", qty: "2 tbsp", price: 5, available: true },
      { id: "yeast", name: "Instant Yeast", qty: "2 tsp", price: 10, available: true },
      { id: "molasses", name: "Molasses or Brown Sugar", qty: "1 tbsp", price: 5, available: false }
    ],
    steps: [
      "Combine flour, half the seeds, and yeast in a bowl.",
      "Add warm water and molasses; knead until a firm dough forms.",
      "Allow to rise for 90 minutes in a warm environment.",
      "Shape into a loaf and roll the top in the remaining seeds and oats.",
      "Place in a tin and let rise for 45 more minutes.",
      "Bake at 200°C for 35 minutes until the crust is deep brown."
    ]
  },
  {
    id: "bakery-focaccia",
    name: "Rosemary and Sea Salt Focaccia",
    description: "Classic Italian flatbread with a golden olive oil crust, topped with fresh rosemary and flaky sea salt.",
    type: "Vegetarian",
    time: 120,
    servings: 6,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.88,
    tags: ["Bakery", "Breads", "Vegetarian", "Eggless"],
    ingredients: [
      { id: "bread_flour", name: "Bread Flour or Maida", qty: "3 cups", price: 20, available: true },
      { id: "olive_oil", name: "Extra Virgin Olive Oil", qty: "1/3 cup", price: 50, available: true },
      { id: "rosemary", name: "Fresh Rosemary", qty: "2 sprigs", price: 10, available: true },
      { id: "sea_salt", name: "Flaky Sea Salt", qty: "1 tsp", price: 5, available: true },
      { id: "yeast", name: "Instant Yeast", qty: "2 tsp", price: 5, available: true }
    ],
    steps: [
      "Mix flour, yeast, salt, water, and 2 tbsp olive oil into a very sticky dough.",
      "Let it rise for 1 hour until bubbly.",
      "Pour 2 tbsp oil into a baking tray and stretch the dough to fit.",
      "Use your fingers to poke deep dimples all over the surface.",
      "Drizzle with remaining oil, sprinkle rosemary and sea salt.",
      "Bake at 220°C for 20 minutes until golden and crisp."
    ]
  },
  {
    id: "bakery-cheese-herb-bread",
    name: "Cheese and Herb Pull-Apart Bread",
    description: "A savory, buttery loaf layered with cheddar cheese and Italian herbs.",
    type: "Vegetarian",
    time: 150,
    servings: 8,
    difficulty: "Medium",
    cost: 100,
    popularity: 0.84,
    tags: ["Bakery", "Breads", "Vegetarian", "Contains Egg"],
    ingredients: [
      { id: "maida", name: "Refined Flour", qty: "3 cups", price: 15, available: true },
      { id: "cheddar", name: "Grated Cheddar Cheese", qty: "1 cup", price: 50, available: true },
      { id: "mixed_herbs", name: "Dried Italian Herbs", qty: "1 tbsp", price: 10, available: true },
      { id: "butter", name: "Butter", qty: "3 tbsp", price: 20, available: true },
      { id: "milk", name: "Milk", qty: "1 cup", price: 5, available: false }
    ],
    steps: [
      "Prepare a standard yeast dough and let it rise for 1 hour.",
      "Roll the dough into a large rectangle and brush with melted butter.",
      "Sprinkle cheese and herbs evenly across the dough.",
      "Cut into squares and stack them vertically in a loaf tin.",
      "Let rise for 30 minutes, then brush with milk.",
      "Bake at 180°C for 30 minutes until the cheese is melted and bubbling."
    ]
  },
  {
    id: "bakery-banana-bread",
    name: "Moist Walnut Banana Bread",
    description: "A quick and easy sweet loaf made with overripe bananas and crunchy walnuts.",
    type: "Vegetarian",
    time: 70,
    servings: 8,
    difficulty: "Easy",
    cost: 80,
    popularity: 0.90,
    tags: ["Bakery", "Breads", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "bananas", name: "Ripe Bananas (mashed)", qty: "3", price: 15, available: true },
      { id: "flour", name: "All-purpose Flour", qty: "1.5 cups", price: 10, available: true },
      { id: "walnuts", name: "Chopped Walnuts", qty: "1/4 cup", price: 30, available: true },
      { id: "butter", name: "Melted Butter", qty: "1/3 cup", price: 20, available: true },
      { id: "egg", name: "Egg", qty: "1 large", price: 5, available: false }
    ],
    steps: [
      "Mash bananas in a bowl; stir in melted butter and whisked egg.",
      "Mix in sugar, vanilla, and baking soda.",
      "Gently fold in flour and walnuts until just combined (do not overmix).",
      "Pour into a greased loaf pan.",
      "Bake at 175°C (350°F) for 50-60 minutes.",
      "Cool in the pan for 10 minutes before slicing."
    ]
  },
  {
    id: "bakery-brown-bread",
    name: "Classic Brown Bread",
    description: "Simple, honest whole wheat bread with a soft crumb and a traditional taste.",
    type: "Vegetarian",
    time: 180,
    servings: 8,
    difficulty: "Medium",
    cost: 55,
    popularity: 0.72,
    tags: ["Bakery", "Breads", "Vegetarian", "Eggless"],
    ingredients: [
      { id: "whole_wheat", name: "Whole Wheat Flour", qty: "2 cups", price: 15, available: true },
      { id: "maida", name: "Refined Flour", qty: "1 cup", price: 5, available: true },
      { id: "jaggery", name: "Jaggery Powder", qty: "1 tbsp", price: 5, available: true },
      { id: "yeast", name: "Active Dry Yeast", qty: "2 tsp", price: 10, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "2 tbsp", price: 20, available: false }
    ],
    steps: [
      "Dissolve jaggery and yeast in warm water; wait for 10 minutes.",
      "Knead both flours with the yeast water and oil for 10 minutes.",
      "First rise: 1 hour in a warm spot.",
      "Shape into a log and place in a greased tin.",
      "Second rise: 45 minutes.",
      "Bake at 190°C for 30 minutes until the top is well-browned."
    ]
  },
  {
    id: "bakery-pav",
    name: "Ladi Pav (Soft Dinner Buns)",
    description: "Pillowy soft Indian buns used for Pav Bhaji, Vada Pav, and Misal, known for their incredible fluffiness.",
    type: "Vegetarian",
    time: 150,
    servings: 8,
    difficulty: "Medium",
    cost: 50,
    popularity: 0.92,
    tags: ["Bakery", "Breads", "Vegetarian", "Eggless"],
    ingredients: [
      { id: "maida", name: "Maida", qty: "2 cups", price: 10, available: true },
      { id: "milk_powder", name: "Milk Powder", qty: "2 tbsp", price: 10, available: true },
      { id: "yeast", name: "Instant Yeast", qty: "1.5 tsp", price: 5, available: true },
      { id: "butter", name: "Softened Butter", qty: "2 tbsp", price: 15, available: true },
      { id: "milk", name: "Milk (for brushing)", qty: "2 tbsp", price: 10, available: false }
    ],
    steps: [
      "Knead flour, milk powder, yeast, and sugar into a very soft, slightly sticky dough.",
      "Add butter and knead for another 5 minutes until the dough is smooth.",
      "Let rise for 1 hour until tripled in volume.",
      "Divide into 9 equal balls and place them in a square pan, nearly touching.",
      "Let rise for 30 minutes; brush with milk.",
      "Bake at 200°C for 15-18 minutes. Brush with butter immediately after baking."
    ]
  },
  {
    id: "bakery-cinnamon-raisin-bread",
    name: "Cinnamon Raisin Bread",
    description: "A sweet breakfast loaf swirled with aromatic cinnamon sugar and juicy raisins.",
    type: "Vegetarian",
    time: 180,
    servings: 8,
    difficulty: "Hard",
    cost: 95,
    popularity: 0.76,
    tags: ["Bakery", "Breads", "Vegetarian", "Contains Egg", "Breakfast"],
    ingredients: [
      { id: "flour", name: "All-purpose Flour", qty: "3 cups", price: 15, available: true },
      { id: "raisins", name: "Raisins", qty: "1/2 cup", price: 30, available: true },
      { id: "cinnamon", name: "Cinnamon Powder", qty: "1 tbsp", price: 10, available: true },
      { id: "brown_sugar", name: "Brown Sugar", qty: "1/4 cup", price: 10, available: true },
      { id: "egg", name: "Egg", qty: "1", price: 30, available: false }
    ],
    steps: [
      "Prepare an enriched yeast dough with egg and milk.",
      "Knead in the raisins during the last minute of kneading.",
      "Let rise for 1 hour.",
      "Roll into a rectangle, brush with butter, and sprinkle cinnamon sugar.",
      "Roll up tightly into a log and place in a tin for a second rise (45 mins).",
      "Bake at 180°C for 35 minutes."
    ]
  },
  {
    id: "bakery-sourdough",
    name: "Artisan Sourdough Bread",
    description: "Naturally leavened bread with a crispy crust, an open crumb, and a characteristic tangy flavor.",
    type: "Vegetarian",
    time: 1440,
    servings: 8,
    difficulty: "Hard",
    cost: 110,
    popularity: 0.81,
    tags: ["Bakery", "Breads", "Vegetarian", "Eggless", "Healthy"],
    ingredients: [
      { id: "starter", name: "Active Sourdough Starter", qty: "1/2 cup", price: 20, available: true },
      { id: "bread_flour", name: "High Protein Bread Flour", qty: "4 cups", price: 50, available: true },
      { id: "sea_salt", name: "Sea Salt", qty: "2 tsp", price: 5, available: true },
      { id: "water", name: "Filtered Water", qty: "1.5 cups", price: 35, available: false }
    ],
    steps: [
      "Mix starter and water; add flour and salt.",
      "Perform 4 sets of stretch-and-folds every 30 minutes over 2 hours.",
      "Bulk ferment for 6-8 hours at room temperature.",
      "Shape into a round boule and place in a proofing basket; refrigerate overnight (12-16 hours).",
      "Score the top with a blade and bake in a preheated Dutch oven at 230°C for 25 mins with lid on, then 20 mins without.",
      "Allow to cool completely for 2 hours before slicing."
    ]
  },

  // --- CAKES (10) ---
  {
    id: "bakery-vanilla-sponge",
    name: "Classic Vanilla Sponge Cake",
    description: "The perfect base for any celebration—a light, airy, and moist vanilla sponge.",
    type: "Vegetarian",
    time: 50,
    servings: 8,
    difficulty: "Medium",
    cost: 150,
    popularity: 0.90,
    tags: ["Bakery", "Cakes", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "maida", name: "Maida (Flour)", qty: "1.5 cups", price: 10, available: true },
      { id: "eggs", name: "Eggs", qty: "3", price: 15, available: true },
      { id: "sugar", name: "Granulated Sugar", qty: "1 cup", price: 10, available: true },
      { id: "butter", name: "Butter (melted)", qty: "1/2 cup", price: 40, available: true },
      { id: "vanilla", name: "Vanilla Extract", qty: "1 tsp", price: 75, available: false }
    ],
    steps: [
      "Whisk eggs and sugar until thick, pale, and tripled in volume.",
      "Sift flour and baking powder; gently fold into the egg mixture.",
      "Stir in vanilla and melted butter until just combined.",
      "Pour into a 7-inch greased cake tin.",
      "Bake at 170°C (340°F) for 25-30 minutes.",
      "Cool on a wire rack before serving or frosting."
    ]
  },
  {
    id: "bakery-chocolate-truffle",
    name: "Rich Chocolate Truffle Cake",
    description: "A chocolate lover's dream—moist chocolate layers filled and coated with silky ganache.",
    type: "Vegetarian",
    time: 70,
    servings: 10,
    difficulty: "Hard",
    cost: 300,
    popularity: 0.95,
    tags: ["Bakery", "Cakes", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "dark_chocolate", name: "Dark Chocolate (chopped)", qty: "200g", price: 120, available: true },
      { id: "cream", name: "Fresh Cream", qty: "1 cup", price: 40, available: true },
      { id: "cocoa_powder", name: "Cocoa Powder", qty: "1/2 cup", price: 30, available: true },
      { id: "butter", name: "Butter", qty: "1/2 cup", price: 40, available: true },
      { id: "coffee", name: "Instant Coffee", qty: "1 tsp", price: 70, available: false }
    ],
    steps: [
      "Bake two chocolate sponges and let them cool completely.",
      "Make ganache by pouring hot cream over chopped chocolate; stir until smooth.",
      "Level the cakes and sandwich them with a layer of ganache.",
      "Frost the entire cake with the remaining ganache.",
      "Chill for 2 hours to set. Decorate with chocolate curls or cocoa dusting."
    ]
  },
  {
    id: "bakery-red-velvet",
    name: "Red Velvet Cake",
    description: "Elegant and velvety cocoa-flavored cake with its signature crimson hue and cream cheese frosting.",
    type: "Vegetarian",
    time: 60,
    servings: 10,
    difficulty: "Hard",
    cost: 320,
    popularity: 0.88,
    tags: ["Bakery", "Cakes", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "buttermilk", name: "Buttermilk", qty: "1 cup", price: 15, available: true },
      { id: "cream_cheese", name: "Cream Cheese (for frosting)", qty: "200g", price: 150, available: true },
      { id: "cocoa", name: "Unsweetened Cocoa Powder", qty: "2 tbsp", price: 10, available: true },
      { id: "red_color", name: "Red Food Color", qty: "1 tsp", price: 15, available: true },
      { id: "vinegar", name: "White Vinegar", qty: "1 tsp", price: 130, available: false }
    ],
    steps: [
      "Cream butter and sugar; add eggs one by one.",
      "Mix red color and cocoa powder into a paste; add to the batter.",
      "Alternately add flour and buttermilk; finish with vinegar and baking soda.",
      "Bake at 180°C for 30 minutes.",
      "Whisk cream cheese, butter, and icing sugar for the frosting.",
      "Once cooled, frost the cake generously."
    ]
  },
  {
    id: "bakery-carrot-cake",
    name: "Spiced Carrot Walnut Cake",
    description: "Moist and dense cake packed with fresh carrots, crunchy walnuts, and warm cinnamon notes.",
    type: "Vegetarian",
    time: 55,
    servings: 8,
    difficulty: "Medium",
    cost: 200,
    popularity: 0.84,
    tags: ["Bakery", "Cakes", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "carrots", name: "Grated Carrots", qty: "2 cups", price: 20, available: true },
      { id: "walnuts", name: "Chopped Walnuts", qty: "1/2 cup", price: 50, available: true },
      { id: "cinnamon", name: "Cinnamon Powder", qty: "1 tsp", price: 10, available: true },
      { id: "oil", name: "Vegetable Oil", qty: "3/4 cup", price: 30, available: true },
      { id: "sugar", name: "Brown Sugar", qty: "1 cup", price: 90, available: false }
    ],
    steps: [
      "Whisk oil, sugar, and eggs until smooth.",
      "Stir in the grated carrots.",
      "Fold in the dry ingredients (flour, cinnamon, walnuts).",
      "Pour into a greased cake tin.",
      "Bake at 180°C for 40-45 minutes.",
      "Serve plain or with a light cream cheese glaze."
    ]
  },
  {
    id: "bakery-black-forest",
    name: "Black Forest Gateau",
    description: "Classic German-style chocolate sponge layered with whipped cream and tart cherry compote.",
    type: "Vegetarian",
    time: 75,
    servings: 10,
    difficulty: "Hard",
    cost: 350,
    popularity: 0.91,
    tags: ["Bakery", "Cakes", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "cherries", name: "Canned or Fresh Cherries", qty: "1 cup", price: 80, available: true },
      { id: "whipping_cream", name: "Whipping Cream", qty: "2 cups", price: 60, available: true },
      { id: "chocolate_shavings", name: "Dark Chocolate Shavings", qty: "1/2 cup", price: 30, available: true },
      { id: "cherry_syrup", name: "Cherry Syrup", qty: "1/4 cup", price: 20, available: true },
      { id: "flour", name: "Chocolate Cake Mix or Ingredients", qty: "various", price: 160, available: false }
    ],
    steps: [
      "Bake a deep chocolate sponge and slice into three horizontal layers.",
      "Soak each layer with cherry syrup.",
      "Pipe whipped cream and spread cherry compote between layers.",
      "Cover the entire cake with whipped cream.",
      "Press chocolate shavings onto the sides and garnish with whole cherries on top."
    ]
  },
  {
    id: "bakery-lemon-drizzle",
    name: "Lemon Drizzle Loaf Cake",
    description: "A zesty and moist loaf cake soaked in a crunchy lemon sugar syrup.",
    type: "Vegetarian",
    time: 55,
    servings: 8,
    difficulty: "Medium",
    cost: 180,
    popularity: 0.82,
    tags: ["Bakery", "Cakes", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "lemons", name: "Fresh Lemons (zest and juice)", qty: "2", price: 10, available: true },
      { id: "butter", name: "Butter", qty: "3/4 cup", price: 40, available: true },
      { id: "sugar", name: "Granulated Sugar", qty: "3/4 cup", price: 10, available: true },
      { id: "icing_sugar", name: "Icing Sugar (for drizzle)", qty: "1/2 cup", price: 15, available: true },
      { id: "eggs", name: "Eggs", qty: "2", price: 105, available: false }
    ],
    steps: [
      "Cream butter, sugar, and lemon zest; add eggs one at a time.",
      "Fold in flour and a tablespoon of lemon juice.",
      "Bake at 180°C for 35-40 minutes.",
      "Mix remaining lemon juice with icing sugar to make a thin syrup.",
      "Prick the hot cake all over and pour the syrup; let it soak in completely."
    ]
  },
  {
    id: "bakery-pineapple-cake",
    name: "Fresh Pineapple Cream Cake",
    description: "Light vanilla sponge layered with juicy pineapple pieces and fresh whipped cream.",
    type: "Vegetarian",
    time: 60,
    servings: 8,
    difficulty: "Medium",
    cost: 250,
    popularity: 0.88,
    tags: ["Bakery", "Cakes", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "pineapple", name: "Canned Pineapple Chunks", qty: "1 cup", price: 50, available: true },
      { id: "whipping_cream", name: "Non-dairy Whipping Cream", qty: "1.5 cups", price: 40, available: true },
      { id: "sponge", name: "Vanilla Sponge (ready or baked)", qty: "1", price: 100, available: true },
      { id: "pineapple_juice", name: "Pineapple Juice", qty: "1/2 cup", price: 20, available: true },
      { id: "cherries", name: "Glacé Cherries", qty: "4", price: 40, available: false }
    ],
    steps: [
      "Slice sponge into two layers and soak with pineapple juice.",
      "Whip the cream to stiff peaks.",
      "Spread cream and chopped pineapple between layers.",
      "Frost the cake with more cream and decorate with pineapple slices and cherries.",
      "Refrigerate for at least 1 hour before serving."
    ]
  },
  {
    id: "bakery-coffee-walnut-cake",
    name: "Coffee Walnut Sponge Cake",
    description: "A sophisticated coffee-infused sponge cake loaded with toasted walnut pieces.",
    type: "Vegetarian",
    time: 55,
    servings: 8,
    difficulty: "Medium",
    cost: 220,
    popularity: 0.80,
    tags: ["Bakery", "Cakes", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "coffee", name: "Instant Coffee Granules", qty: "2 tbsp", price: 15, available: true },
      { id: "walnuts", name: "Toasted Walnuts", qty: "1/2 cup", price: 50, available: true },
      { id: "butter", name: "Butter", qty: "3/4 cup", price: 40, available: true },
      { id: "eggs", name: "Eggs", qty: "3", price: 15, available: true },
      { id: "flour", name: "Maida", qty: "1.5 cups", price: 100, available: false }
    ],
    steps: [
      "Dissolve coffee in 1 tbsp hot water.",
      "Cream butter and sugar; add eggs and the coffee extract.",
      "Fold in flour and walnuts.",
      "Bake at 180°C for 35 minutes.",
      "Frost with a coffee-flavored buttercream if desired."
    ]
  },
  {
    id: "bakery-marble-cake",
    name: "Chocolate and Vanilla Marble Cake",
    description: "Beautifully swirled loaf cake that combines the best of both worlds—vanilla and chocolate.",
    type: "Vegetarian",
    time: 50,
    servings: 8,
    difficulty: "Medium",
    cost: 170,
    popularity: 0.86,
    tags: ["Bakery", "Cakes", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "cocoa", name: "Cocoa Powder", qty: "3 tbsp", price: 20, available: true },
      { id: "vanilla", name: "Vanilla Extract", qty: "1 tsp", price: 10, available: true },
      { id: "butter", name: "Butter", qty: "1/2 cup", price: 40, available: true },
      { id: "eggs", name: "Eggs", qty: "2", price: 10, available: true },
      { id: "flour", name: "Maida", qty: "1.5 cups", price: 90, available: false }
    ],
    steps: [
      "Prepare a plain vanilla cake batter.",
      "Divide the batter into two bowls; mix cocoa powder into one.",
      "Drop alternating spoonfuls of vanilla and chocolate batter into a loaf pan.",
      "Use a knife to gently swirl the batters (do not over-swirl).",
      "Bake at 180°C for 35-40 minutes."
    ]
  },
  {
    id: "bakery-butterscotch-cake",
    name: "Butterscotch Praline Cake",
    description: "Soft butterscotch-flavored sponge topped with crunchy brown sugar praline and caramel sauce.",
    type: "Vegetarian",
    time: 60,
    servings: 8,
    difficulty: "Medium",
    cost: 230,
    popularity: 0.87,
    tags: ["Bakery", "Cakes", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "butterscotch", name: "Butterscotch Essence", qty: "1 tsp", price: 20, available: true },
      { id: "praline", name: "Cashew Praline (crushed)", qty: "1/2 cup", price: 40, available: true },
      { id: "caramel", name: "Caramel Sauce", qty: "1/4 cup", price: 30, available: true },
      { id: "whipping_cream", name: "Cream", qty: "1.5 cups", price: 40, available: true },
      { id: "flour", name: "Vanilla Sponge Base", qty: "1", price: 100, available: false }
    ],
    steps: [
      "Bake a butterscotch essence-infused sponge.",
      "Whip cream with caramel sauce.",
      "Layer the cake with caramel cream and crushed praline for crunch.",
      "Frost the entire cake and drizzle with extra caramel.",
      "Garnish with whole praline pieces."
    ]
  },

  // --- COOKIES (10) ---
  {
    id: "bakery-butter-cookies",
    name: "Classic Butter Cookies",
    description: "Simple, crisp, and melt-in-the-mouth buttery biscuits that go perfectly with evening tea.",
    type: "Vegetarian",
    time: 30,
    servings: 12,
    difficulty: "Easy",
    cost: 80,
    popularity: 0.88,
    tags: ["Bakery", "Cookies", "Vegetarian", "Contains Egg"],
    ingredients: [
      { id: "butter", name: "Unsalted Butter", qty: "1 cup", price: 50, available: true },
      { id: "maida", name: "Maida", qty: "2 cups", price: 10, available: true },
      { id: "icing_sugar", name: "Icing Sugar", qty: "3/4 cup", price: 10, available: true },
      { id: "egg", name: "Egg Yolk", qty: "1", price: 5, available: true },
      { id: "vanilla", name: "Vanilla Extract", qty: "1 tsp", price: 5, available: false }
    ],
    steps: [
      "Cream butter and sugar until very light and fluffy.",
      "Beat in the egg yolk and vanilla.",
      "Gently fold in sifted flour; do not overmix.",
      "Roll into small balls and flatten slightly with a fork.",
      "Chill the tray for 15 minutes.",
      "Bake at 170°C for 12-15 minutes until edges are barely golden."
    ]
  },
  {
    id: "bakery-choco-chip-cookies",
    name: "Classic Chocolate Chip Cookies",
    description: "Perfectly chewy cookies with golden edges and a generous amount of dark chocolate chips.",
    type: "Vegetarian",
    time: 30,
    servings: 12,
    difficulty: "Easy",
    cost: 100,
    popularity: 0.94,
    tags: ["Bakery", "Cookies", "Vegetarian", "Contains Egg"],
    ingredients: [
      { id: "choco_chips", name: "Dark Chocolate Chips", qty: "1 cup", price: 50, available: true },
      { id: "brown_sugar", name: "Brown Sugar", qty: "1/2 cup", price: 15, available: true },
      { id: "butter", name: "Softened Butter", qty: "1/2 cup", price: 25, available: true },
      { id: "egg", name: "Egg", qty: "1 large", price: 5, available: true },
      { id: "flour", name: "All-purpose Flour", qty: "1.5 cups", price: 5, available: false }
    ],
    steps: [
      "Whisk butter, brown sugar, and granulated sugar until combined.",
      "Add egg and vanilla; mix well.",
      "Fold in dry ingredients and chocolate chips.",
      "Scoop onto a tray and bake at 180°C for 10-12 minutes.",
      "The centers should look slightly underbaked when taken out."
    ]
  },
  {
    id: "bakery-oatmeal-cookies",
    name: "Chewy Oatmeal Raisin Cookies",
    description: "Hearty and chewy cookies made with whole oats, sweet raisins, and a touch of cinnamon.",
    type: "Vegetarian",
    time: 30,
    servings: 12,
    difficulty: "Easy",
    cost: 90,
    popularity: 0.79,
    tags: ["Bakery", "Cookies", "Vegetarian", "Contains Egg", "Healthy"],
    ingredients: [
      { id: "oats", name: "Rolled Oats", qty: "2 cups", price: 30, available: true },
      { id: "raisins", name: "Raisins", qty: "1/2 cup", price: 25, available: true },
      { id: "cinnamon", name: "Cinnamon Powder", qty: "1 tsp", price: 10, available: true },
      { id: "butter", name: "Butter", qty: "1/2 cup", price: 20, available: true },
      { id: "egg", name: "Egg", qty: "1", price: 5, available: false }
    ],
    steps: [
      "Mix butter, sugars, and egg.",
      "Combine oats, flour, and cinnamon; stir into the wet mix.",
      "Fold in raisins.",
      "Bake at 175°C for 12-14 minutes.",
      "Cool on the tray for 5 minutes before moving."
    ]
  },
  {
    id: "bakery-jeera-cookies",
    name: "Jeera (Cumin) Salty Biscuits",
    description: "Crispy, savory Indian-style biscuits flavored with roasted cumin seeds.",
    type: "Vegetarian",
    time: 25,
    servings: 12,
    difficulty: "Easy",
    cost: 60,
    popularity: 0.86,
    tags: ["Bakery", "Cookies", "Vegetarian", "Eggless"],
    ingredients: [
      { id: "jeera", name: "Roasted Cumin Seeds", qty: "2 tbsp", price: 10, available: true },
      { id: "butter", name: "Butter", qty: "1/2 cup", price: 25, available: true },
      { id: "powdered_sugar", name: "Powdered Sugar", qty: "2 tbsp", price: 5, available: true },
      { id: "flour", name: "Maida", qty: "1.5 cups", price: 10, available: true },
      { id: "milk", name: "Milk (for binding)", qty: "1 tbsp", price: 10, available: false }
    ],
    steps: [
      "Cream butter, sugar, and salt.",
      "Rub in flour and roasted cumin seeds until crumbly.",
      "Add minimal milk to bring the dough together.",
      "Roll out 1/4 inch thick and cut into rounds.",
      "Bake at 160°C for 15-20 minutes until crisp."
    ]
  },
  {
    id: "bakery-nankhatai",
    name: "Traditional Nankhatai",
    description: "Indian-style shortbread cookies flavored with cardamom and made with a blend of semolina and flour.",
    type: "Vegetarian",
    time: 30,
    servings: 12,
    difficulty: "Easy",
    cost: 65,
    popularity: 0.90,
    tags: ["Bakery", "Cookies", "Vegetarian", "Eggless"],
    ingredients: [
      { id: "ghee", name: "Desi Ghee", qty: "1/2 cup", price: 40, available: true },
      { id: "maida", name: "Maida", qty: "1 cup", price: 5, available: true },
      { id: "besan", name: "Gram Flour (Besan)", qty: "2 tbsp", price: 5, available: true },
      { id: "rava", name: "Semolina (Sooji)", qty: "2 tbsp", price: 5, available: true },
      { id: "cardamom", name: "Cardamom Powder", qty: "1/2 tsp", price: 10, available: false }
    ],
    steps: [
      "Cream ghee and powdered sugar until white and fluffy.",
      "Fold in maida, besan, and rava with cardamom powder.",
      "Do not knead; just bring together into a soft dough.",
      "Form small rounds and top with a sliced pistachio or almond.",
      "Bake at 170°C for 15 minutes."
    ]
  },
  {
    id: "bakery-coconut-cookies",
    name: "Crispy Coconut Biscuits",
    description: "Crumbly and golden cookies packed with desiccated coconut flavor.",
    type: "Vegetarian",
    time: 25,
    servings: 12,
    difficulty: "Easy",
    cost: 70,
    popularity: 0.83,
    tags: ["Bakery", "Cookies", "Vegetarian", "Contains Egg"],
    ingredients: [
      { id: "coconut", name: "Desiccated Coconut", qty: "1 cup", price: 30, available: true },
      { id: "butter", name: "Butter", qty: "1/2 cup", price: 20, available: true },
      { id: "flour", name: "Maida", qty: "1 cup", price: 10, available: true },
      { id: "sugar", name: "Sugar", qty: "1/2 cup", price: 5, available: true },
      { id: "egg", name: "Egg", qty: "1", price: 5, available: false }
    ],
    steps: [
      "Cream butter and sugar; beat in the egg.",
      "Stir in desiccated coconut.",
      "Fold in flour; shape into balls and roll in extra coconut.",
      "Bake at 180°C for 12-15 minutes until edges are toasted."
    ]
  },
  {
    id: "bakery-peanut-butter-cookies",
    name: "Soft Peanut Butter Cookies",
    description: "Tender cookies with a rich peanut butter flavor and classic fork criss-cross pattern.",
    type: "Vegetarian",
    time: 30,
    servings: 12,
    difficulty: "Easy",
    cost: 85,
    popularity: 0.81,
    tags: ["Bakery", "Cookies", "Vegetarian", "Contains Egg"],
    ingredients: [
      { id: "peanut_butter", name: "Creamy Peanut Butter", qty: "1/2 cup", price: 40, available: true },
      { id: "butter", name: "Butter", qty: "1/4 cup", price: 15, available: true },
      { id: "brown_sugar", name: "Brown Sugar", qty: "1/2 cup", price: 15, available: true },
      { id: "egg", name: "Egg", qty: "1", price: 5, available: true },
      { id: "flour", name: "Maida", qty: "1.25 cups", price: 10, available: false }
    ],
    steps: [
      "Cream butter, peanut butter, and sugars.",
      "Beat in the egg.",
      "Stir in dry ingredients.",
      "Roll into balls; press with a fork in two directions.",
      "Bake at 175°C for 10 minutes."
    ]
  },
  {
    id: "bakery-almond-cookies",
    name: "Delicate Almond Biscuits",
    description: "Thin and crispy cookies topped with sliced almonds and a hint of almond essence.",
    type: "Vegetarian",
    time: 30,
    servings: 12,
    difficulty: "Medium",
    cost: 95,
    popularity: 0.77,
    tags: ["Bakery", "Cookies", "Vegetarian", "Contains Egg"],
    ingredients: [
      { id: "almond_flour", name: "Ground Almonds", qty: "1/2 cup", price: 40, available: true },
      { id: "sliced_almonds", name: "Sliced Almonds", qty: "2 tbsp", price: 20, available: true },
      { id: "butter", name: "Butter", qty: "1/2 cup", price: 20, available: true },
      { id: "essence", name: "Almond Essence", qty: "1/2 tsp", price: 10, available: true },
      { id: "maida", name: "Maida", qty: "1 cup", price: 5, available: false }
    ],
    steps: [
      "Whisk butter and sugar; add egg white and almond essence.",
      "Fold in maida and almond flour.",
      "Place small scoops on a tray and flatten with sliced almonds.",
      "Bake at 160°C for 15 minutes."
    ]
  },
  {
    id: "bakery-double-chocolate-cookies",
    name: "Double Chocolate Fudgy Cookies",
    description: "Deeply chocolatey cookies with a fudgy center and chocolate chunks.",
    type: "Vegetarian",
    time: 30,
    servings: 12,
    difficulty: "Easy",
    cost: 105,
    popularity: 0.89,
    tags: ["Bakery", "Cookies", "Vegetarian", "Contains Egg"],
    ingredients: [
      { id: "cocoa", name: "Cocoa Powder", qty: "1/2 cup", price: 25, available: true },
      { id: "choco_chunks", name: "Chocolate Chunks", qty: "1/2 cup", price: 40, available: true },
      { id: "butter", name: "Butter", qty: "1/2 cup", price: 25, available: true },
      { id: "sugar", name: "Sugar", qty: "1 cup", price: 10, available: true },
      { id: "egg", name: "Egg", qty: "1", price: 5, available: false }
    ],
    steps: [
      "Beat butter and sugar; add egg.",
      "Mix in cocoa, flour, and salt.",
      "Stir in chocolate chunks.",
      "Bake at 175°C for 10-12 minutes."
    ]
  },
  {
    id: "bakery-cardamom-shortbread",
    name: "Cardamom Shortbread Cookies",
    description: "Fragrant and buttery three-ingredient shortbread with a spicy cardamom twist.",
    type: "Vegetarian",
    time: 30,
    servings: 12,
    difficulty: "Easy",
    cost: 75,
    popularity: 0.84,
    tags: ["Bakery", "Cookies", "Vegetarian", "Eggless"],
    ingredients: [
      { id: "butter", name: "Butter", qty: "1 cup", price: 40, available: true },
      { id: "sugar", name: "Powdered Sugar", qty: "1/2 cup", price: 10, available: true },
      { id: "maida", name: "Maida", qty: "2 cups", price: 15, available: true },
      { id: "cardamom", name: "Cardamom Powder", qty: "1 tsp", price: 10, available: true }
    ],
    steps: [
      "Cream butter and sugar until pale.",
      "Fold in flour and cardamom.",
      "Press into a square pan and prick with a fork.",
      "Chill for 20 minutes.",
      "Bake at 150°C for 25 minutes; cut while warm."
    ]
  },

  // --- PASTRIES (10) ---
  {
    id: "bakery-chocolate-pastry",
    name: "Belgian Chocolate Pastry",
    description: "Individual servings of dark chocolate sponge layered with rich chocolate truffle cream.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.92,
    tags: ["Bakery", "Pastries", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "choco_sponge", name: "Chocolate Sponge Sheet", qty: "1", price: 40, available: true },
      { id: "ganache", name: "Chocolate Ganache", qty: "1/2 cup", price: 30, available: true },
      { id: "glaze", name: "Chocolate Glaze", qty: "2 tbsp", price: 10, available: true }
    ],
    steps: [
      "Cut the sponge sheet into equal squares or rectangles.",
      "Sandwich two layers with a thick layer of ganache.",
      "Coat the top with chocolate glaze.",
      "Garnish with a chocolate shard and serve chilled."
    ]
  },
  {
    id: "bakery-pineapple-pastry",
    name: "Classic Pineapple Pastry",
    description: "Light-as-air vanilla sponge slices filled with chopped pineapples and fresh whipped cream.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 80,
    popularity: 0.90,
    tags: ["Bakery", "Pastries", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "vanilla_sponge", name: "Vanilla Sponge Sheet", qty: "1", price: 30, available: true },
      { id: "pineapple", name: "Chopped Pineapple", qty: "1/2 cup", price: 20, available: true },
      { id: "cream", name: "Whipped Cream", qty: "1 cup", price: 30, available: true }
    ],
    steps: [
      "Cut sponge into rectangular slices.",
      "Layer with whipped cream and pineapple pieces.",
      "Pipe decorative cream borders on top.",
      "Serve chilled with a cherry on top."
    ]
  },
  {
    id: "bakery-black-forest-pastry",
    name: "Black Forest Pastry Slice",
    description: "Single-serving black forest pastry with layers of chocolate, cream, and cherry compote.",
    type: "Vegetarian",
    time: 40,
    servings: 4,
    difficulty: "Medium",
    cost: 90,
    popularity: 0.89,
    tags: ["Bakery", "Pastries", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "sponge", name: "Chocolate Sponge", qty: "1 layer", price: 40, available: true },
      { id: "cherries", name: "Cherries", qty: "1/4 cup", price: 20, available: true },
      { id: "cream", name: "Whipping Cream", qty: "1 cup", price: 30, available: true }
    ],
    steps: [
      "Cut the chocolate sponge into layers.",
      "Spread cream and cherry filling between them.",
      "Frost with cream and garnish with chocolate flakes."
    ]
  },
  {
    id: "bakery-veg-puff",
    name: "Spicy Vegetable Puff",
    description: "Crispy and flaky puff pastry stuffed with a savory, spicy mixed vegetable filling.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 40,
    popularity: 0.95,
    tags: ["Bakery", "Pastries", "Vegetarian", "Eggless", "Spicy"],
    ingredients: [
      { id: "puff_pastry", name: "Puff Pastry Sheets", qty: "4", price: 20, available: true },
      { id: "mixed_veg", name: "Potato, Peas, Carrot (spiced)", qty: "1 cup", price: 15, available: true },
      { id: "butter", name: "Butter (for brushing)", qty: "1 tbsp", price: 5, available: true }
    ],
    steps: [
      "Prepare a spicy dry vegetable masala.",
      "Place filling in the center of the pastry sheets.",
      "Fold into triangles and seal edges with water.",
      "Bake at 200°C for 20-25 minutes until golden and puffed up."
    ]
  },
  {
    id: "bakery-cheese-puff",
    name: "Cheesy Herb Puff",
    description: "Flaky golden pastry filled with a gooey blend of cheese and herbs.",
    type: "Vegetarian",
    time: 35,
    servings: 4,
    difficulty: "Medium",
    cost: 50,
    popularity: 0.84,
    tags: ["Bakery", "Pastries", "Vegetarian", "Eggless"],
    ingredients: [
      { id: "puff_sheets", name: "Puff Pastry Sheets", qty: "4", price: 25, available: true },
      { id: "cheese", name: "Processed & Mozzarella Cheese", qty: "1/2 cup", price: 20, available: true },
      { id: "herbs", name: "Dried Herbs", qty: "1/2 tsp", price: 5, available: true }
    ],
    steps: [
      "Stuff pastry with cheese and herb mix.",
      "Fold and seal.",
      "Bake at 200°C until golden brown."
    ]
  },
  {
    id: "bakery-danish-pastry",
    name: "Fruit Danish Pastry",
    description: "Buttery, laminated sweet pastry topped with creamy custard and seasonal fruits.",
    type: "Vegetarian",
    time: 120,
    servings: 6,
    difficulty: "Hard",
    cost: 90,
    popularity: 0.81,
    tags: ["Bakery", "Pastries", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "laminated_dough", name: "Danish Pastry Dough", qty: "500g", price: 50, available: true },
      { id: "custard", name: "Pastry Cream (Custard)", qty: "1/2 cup", price: 20, available: true },
      { id: "fruit", name: "Seasonal Fruits", qty: "1/2 cup", price: 20, available: true }
    ],
    steps: [
      "Roll out the chilled laminated dough.",
      "Cut into squares and fold the corners to the center.",
      "Pipe a dollop of pastry cream in the middle.",
      "Top with fruits and bake at 190°C for 20 minutes.",
      "Glaze with apricot jam while warm."
    ]
  },
  {
    id: "bakery-cream-roll",
    name: "Crispy Cream Roll",
    description: "A nostalgic bakery classic—crispy, light puff pastry rolls filled with sweet vanilla whipped cream.",
    type: "Vegetarian",
    time: 30,
    servings: 4,
    difficulty: "Medium",
    cost: 60,
    popularity: 0.88,
    tags: ["Bakery", "Pastries", "Vegetarian", "Eggless", "Dessert"],
    ingredients: [
      { id: "puff_pastry", name: "Puff Pastry Strips", qty: "4", price: 30, available: true },
      { id: "whipped_cream", name: "Vanilla Whipped Cream", qty: "1/2 cup", price: 25, available: true },
      { id: "sugar", name: "Sugar dusting", qty: "1 tsp", price: 5, available: true }
    ],
    steps: [
      "Wrap puff pastry strips around metal horn molds.",
      "Bake at 200°C until golden and crispy.",
      "Slide off the molds carefully and cool.",
      "Pipe whipped cream into the hollow center before serving."
    ]
  },
  {
    id: "bakery-eclairs",
    name: "Chocolate Eclairs",
    description: "Light choux pastry fingers filled with vanilla cream and dipped in dark chocolate.",
    type: "Vegetarian",
    time: 50,
    servings: 6,
    difficulty: "Hard",
    cost: 100,
    popularity: 0.85,
    tags: ["Bakery", "Pastries", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "choux", name: "Choux Pastry Dough", qty: "1 batch", price: 30, available: true },
      { id: "cream", name: "Pastry Cream", qty: "1 cup", price: 30, available: true },
      { id: "chocolate", name: "Dark Chocolate Melted", qty: "1/2 cup", price: 40, available: true }
    ],
    steps: [
      "Pipe dough into long finger shapes.",
      "Bake until puffed and hollow.",
      "Make a small hole and pipe in the cream filling.",
      "Dip the tops in melted chocolate."
    ]
  },
  {
    id: "bakery-fruit-tart",
    name: "Fresh Fruit Tart",
    description: "A crisp shortcrust pastry shell filled with silky pastry cream and topped with glazed fresh fruit.",
    type: "Vegetarian",
    time: 50,
    servings: 6,
    difficulty: "Hard",
    cost: 150,
    popularity: 0.83,
    tags: ["Bakery", "Pastries", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "shortcrust", name: "Shortcrust Pastry Shells", qty: "6", price: 60, available: true },
      { id: "custard", name: "Vanilla Pastry Cream", qty: "1 cup", price: 40, available: true },
      { id: "mixed_fruit", name: "Kiwi, Grapes, Mango", qty: "1 cup", price: 50, available: true }
    ],
    steps: [
      "Blind bake the tart shells until crisp.",
      "Fill with chilled pastry cream.",
      "Arrange fruit slices artistically on top.",
      "Brush with a light sugar glaze for shine."
    ]
  },
  {
    id: "bakery-croissant",
    name: "Butter Croissant",
    description: "Flaky, multi-layered French pastry made with laminated dough and plenty of butter.",
    type: "Vegetarian",
    time: 180,
    servings: 6,
    difficulty: "Hard",
    cost: 90,
    popularity: 0.90,
    tags: ["Bakery", "Pastries", "Vegetarian", "Contains Egg", "Breakfast"],
    ingredients: [
      { id: "flour", name: "Strong Bread Flour", qty: "2 cups", price: 15, available: true },
      { id: "butter_block", name: "Chilled Butter Block", qty: "200g", price: 60, available: true },
      { id: "milk", name: "Milk", qty: "1/2 cup", price: 10, available: true },
      { id: "egg", name: "Egg for wash", qty: "1", price: 5, available: false }
    ],
    steps: [
      "Prepare a yeast dough and chill.",
      "Laminate the dough with the butter block (3 folds).",
      "Cut into triangles, roll up, and proof for 2 hours.",
      "Brush with egg wash.",
      "Bake at 200°C for 15-20 minutes until dark golden."
    ]
  },

  // --- OTHER BAKERY / DESSERTS (10) ---
  {
    id: "bakery-rusk",
    name: "Crispy Tea Rusk",
    description: "Twice-baked hard biscuits that are the perfect companion for dipping into hot Indian tea.",
    type: "Vegetarian",
    time: 60,
    servings: 12,
    difficulty: "Medium",
    cost: 40,
    popularity: 0.94,
    tags: ["Bakery", "Other Bakery", "Vegetarian", "Contains Egg"],
    ingredients: [
      { id: "plain_cake", name: "Dry Sponge Cake Loaf", qty: "1", price: 30, available: true },
      { id: "sugar", name: "Powdered Sugar (for dusting)", qty: "1 tsp", price: 10, available: true }
    ],
    steps: [
      "Slice the dry cake loaf into 1/2 inch thick pieces.",
      "Arrange slices on a baking tray.",
      "Bake at a very low temperature (130°C) for 20 minutes.",
      "Flip the slices and bake for another 15 minutes until hard and toasted.",
      "Store in an airtight container for that perfect crunch."
    ]
  },
  {
    id: "bakery-bread-pudding",
    name: "Old-Fashioned Bread Pudding",
    description: "A comforting baked dessert made with bread cubes soaked in a spiced egg-milk custard.",
    type: "Vegetarian",
    time: 45,
    servings: 6,
    difficulty: "Easy",
    cost: 80,
    popularity: 0.81,
    tags: ["Bakery", "Other Bakery", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "bread", name: "Stale White Bread Cubes", qty: "4 cups", price: 20, available: true },
      { id: "milk", name: "Full Cream Milk", qty: "2 cups", price: 20, available: true },
      { id: "eggs", name: "Eggs", qty: "3", price: 15, available: true },
      { id: "raisins", name: "Raisins", qty: "2 tbsp", price: 10, available: true },
      { id: "nutmeg", name: "Nutmeg & Cinnamon", qty: "pinch", price: 15, available: false }
    ],
    steps: [
      "Whisk eggs, milk, sugar, and spices.",
      "Arrange bread cubes and raisins in a baking dish.",
      "Pour custard over the bread and let soak for 15 minutes.",
      "Bake at 170°C for 35 minutes until the center is set and top is golden."
    ]
  },
  {
    id: "bakery-choco-muffins",
    name: "Chocolate Chip Muffins",
    description: "Soft and fluffy individual cakes bursting with dark chocolate chips, perfect for a quick snack.",
    type: "Vegetarian",
    time: 30,
    servings: 6,
    difficulty: "Easy",
    cost: 90,
    popularity: 0.88,
    tags: ["Bakery", "Other Bakery", "Vegetarian", "Contains Egg", "Breakfast"],
    ingredients: [
      { id: "maida", name: "Refined Flour", qty: "1.5 cups", price: 10, available: true },
      { id: "choco_chips", name: "Chocolate Chips", qty: "1/2 cup", price: 30, available: true },
      { id: "butter", name: "Melted Butter", qty: "1/3 cup", price: 20, available: true },
      { id: "egg", name: "Egg", qty: "1", price: 5, available: true },
      { id: "milk", name: "Milk", qty: "1/2 cup", price: 25, available: false }
    ],
    steps: [
      "Mix wet ingredients and dry ingredients separately.",
      "Gently combine until just moistened.",
      "Fold in chocolate chips.",
      "Fill muffin cups 3/4 full.",
      "Bake at 190°C for 18-20 minutes."
    ]
  },
  {
    id: "bakery-brownies",
    name: "Fudgy Chocolate Brownies",
    description: "Dense, intensely chocolatey squares with a crinkle top and a fudgy center.",
    type: "Vegetarian",
    time: 40,
    servings: 8,
    difficulty: "Easy",
    cost: 100,
    popularity: 0.95,
    tags: ["Bakery", "Other Bakery", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "dark_choco", name: "Dark Chocolate", qty: "150g", price: 60, available: true },
      { id: "butter", name: "Butter", qty: "1/2 cup", price: 20, available: true },
      { id: "sugar", name: "Granulated Sugar", qty: "1 cup", price: 10, available: true },
      { id: "eggs", name: "Eggs", qty: "2", price: 10, available: true }
    ],
    steps: [
      "Melt chocolate and butter together.",
      "Whisk in sugar, then eggs.",
      "Fold in flour and cocoa powder.",
      "Bake at 170°C for 25 minutes (do not overbake)."
    ]
  },
  {
    id: "bakery-doughnuts",
    name: "Glazed Yeast Doughnuts",
    description: "Soft and airy fried doughnuts dipped in a classic sweet sugar glaze.",
    type: "Vegetarian",
    time: 120,
    servings: 8,
    difficulty: "Hard",
    cost: 70,
    popularity: 0.84,
    tags: ["Bakery", "Other Bakery", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "yeast_dough", name: "Enriched Yeast Dough", qty: "500g", price: 40, available: true },
      { id: "glaze", name: "Sugar Glaze (Icing sugar + Milk)", qty: "1/2 cup", price: 20, available: true },
      { id: "oil", name: "Frying Oil", qty: "2 cups", price: 10, available: false }
    ],
    steps: [
      "Roll out dough and cut into rings.",
      "Proof for 45 minutes until doubled.",
      "Fry in medium-hot oil until golden.",
      "Dip in sugar glaze while warm."
    ]
  },
  {
    id: "bakery-cinnamon-rolls",
    name: "Soft Cinnamon Rolls",
    description: "Swirled sweet rolls filled with cinnamon-brown sugar and topped with cream cheese frosting.",
    type: "Vegetarian",
    time: 150,
    servings: 8,
    difficulty: "Hard",
    cost: 90,
    popularity: 0.89,
    tags: ["Bakery", "Other Bakery", "Vegetarian", "Contains Egg", "Breakfast"],
    ingredients: [
      { id: "dough", name: "Sweet Yeast Dough", qty: "500g", price: 40, available: true },
      { id: "cinnamon", name: "Cinnamon Powder", qty: "2 tbsp", price: 10, available: true },
      { id: "brown_sugar", name: "Brown Sugar", qty: "1/2 cup", price: 15, available: true },
      { id: "icing", name: "Cream Cheese Frosting", qty: "1/2 cup", price: 25, available: false }
    ],
    steps: [
      "Roll dough into a rectangle and spread with butter, cinnamon, and sugar.",
      "Roll up tightly and cut into 1-inch pieces.",
      "Rise for 45 minutes; bake at 180°C for 20 mins.",
      "Spread frosting while rolls are still slightly warm."
    ]
  },
  {
    id: "bakery-plum-cake",
    name: "Rich Holiday Plum Cake",
    description: "A dark, dense, and boozy fruit cake loaded with soaked dry fruits and festive spices.",
    type: "Vegetarian",
    time: 90,
    servings: 10,
    difficulty: "Hard",
    cost: 250,
    popularity: 0.82,
    tags: ["Bakery", "Other Bakery", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "soaked_fruits", name: "Mixed Soaked Fruits (Raisins, Peel, Cherries)", qty: "2 cups", price: 100, available: true },
      { id: "caramel", name: "Burnt Sugar Syrup (Caramel)", qty: "1/4 cup", price: 10, available: true },
      { id: "spices", name: "Dry Ginger, Cinnamon, Nutmeg", qty: "1 tsp", price: 10, available: true },
      { id: "butter", name: "Butter", qty: "1 cup", price: 50, available: true },
      { id: "eggs", name: "Eggs", qty: "4", price: 80, available: false }
    ],
    steps: [
      "Cream butter and sugar; add eggs and caramel syrup.",
      "Stir in the soaked fruits and spices.",
      "Fold in flour and bake at a low 150°C for 60-70 minutes.",
      "The low temperature is key for a moist, dark fruit cake."
    ]
  },
  {
    id: "bakery-cheesecake",
    name: "Classic Baked Cheesecake",
    description: "Velvety smooth baked cheesecake with a crunchy graham cracker base.",
    type: "Vegetarian",
    time: 80,
    servings: 8,
    difficulty: "Hard",
    cost: 280,
    popularity: 0.86,
    tags: ["Bakery", "Other Bakery", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "cream_cheese", name: "Cream Cheese", qty: "400g", price: 200, available: true },
      { id: "biscuits", name: "Digestive Biscuits (for base)", qty: "150g", price: 30, available: true },
      { id: "butter", name: "Butter", qty: "1/4 cup", price: 15, available: true },
      { id: "eggs", name: "Eggs", qty: "2", price: 10, available: true },
      { id: "sour_cream", name: "Sour Cream or Thick Curd", qty: "1/4 cup", price: 25, available: false }
    ],
    steps: [
      "Press crushed biscuits mixed with butter into the bottom of a tin.",
      "Whisk cream cheese, sugar, eggs, and sour cream until smooth.",
      "Pour over base and bake at 160°C for 50 minutes in a water bath.",
      "Cool completely and refrigerate for 6 hours before serving."
    ]
  },
  {
    id: "bakery-apple-pie",
    name: "Cinnamon Apple Pie",
    description: "Flaky buttery pastry filled with spiced apples, a timeless comfort dessert.",
    type: "Vegetarian",
    time: 75,
    servings: 8,
    difficulty: "Hard",
    cost: 200,
    popularity: 0.84,
    tags: ["Bakery", "Other Bakery", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "apples", name: "Tart Apples (sliced)", qty: "4", price: 60, available: true },
      { id: "pastry", name: "Shortcrust Pastry Dough", qty: "2 portions", price: 40, available: true },
      { id: "cinnamon", name: "Cinnamon & Brown Sugar", qty: "1/2 cup", price: 20, available: true },
      { id: "butter", name: "Butter", qty: "2 tbsp", price: 80, available: false }
    ],
    steps: [
      "Line a pie dish with one layer of pastry.",
      "Fill with apples mixed with sugar and cinnamon.",
      "Cover with the second layer of pastry; cut slits for steam.",
      "Brush with egg wash and bake at 190°C for 45 minutes."
    ]
  },
  {
    id: "bakery-custard-tart",
    name: "Baked Custard Tart",
    description: "A silky, nutmeg-dusted egg custard baked in a crisp pastry shell.",
    type: "Vegetarian",
    time: 60,
    servings: 6,
    difficulty: "Medium",
    cost: 140,
    popularity: 0.77,
    tags: ["Bakery", "Other Bakery", "Vegetarian", "Contains Egg", "Dessert"],
    ingredients: [
      { id: "pastry_shell", name: "Baked Tart Shell", qty: "1 large", price: 50, available: true },
      { id: "milk", name: "Milk", qty: "1 cup", price: 10, available: true },
      { id: "eggs", name: "Eggs", qty: "2", price: 10, available: true },
      { id: "nutmeg", name: "Nutmeg Powder", qty: "pinch", price: 70, available: false }
    ],
    steps: [
      "Whisk eggs, milk, sugar, and vanilla.",
      "Pour into the pre-baked tart shell.",
      "Dust generously with nutmeg.",
      "Bake at 150°C for 25-30 minutes until the custard is just set."
    ]
  }
];
