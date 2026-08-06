/**
 * @fileOverview Data for the Ingredient Encyclopedia.
 * Maps health benefits and culinary profiles to common Indian ingredients.
 */

export interface IngredientProfile {
  id: string;
  name: string;
  category: 'Spice' | 'Vegetable' | 'Fruit' | 'Grain/Lentil' | 'Dairy' | 'Herb' | 'Other';
  whatItIs: string;
  benefits: string[];
  benefitTags: ('Skin Health' | 'Hair Health' | 'Weight Management' | 'Digestion' | 'Immunity' | 'Heart Health' | 'Bone Health' | 'Energy & Metabolism')[];
  commonSubstitutes: string[];
  storageTip: string;
  funFact?: string;
}

export const benefitCategories = [
  'Skin Health', 
  'Hair Health', 
  'Weight Management', 
  'Digestion', 
  'Immunity', 
  'Heart Health', 
  'Bone Health', 
  'Energy & Metabolism'
] as const;

export const ingredientProfiles: IngredientProfile[] = [
  {
    id: "turmeric_powder",
    name: "Turmeric (Haldi)",
    category: "Spice",
    whatItIs: "A bright yellow spice derived from the root of the Curcuma longa plant, essential in almost all Indian savory dishes.",
    benefits: ["Contains curcumin, known for anti-inflammatory properties", "Supports immune system function", "Traditionally used for skin glow"],
    benefitTags: ["Immunity", "Skin Health"],
    commonSubstitutes: ["Saffron (for color)", "Ginger powder (for mild warmth)"],
    storageTip: "Store in a cool, dark, airtight container to prevent the color from fading.",
    funFact: "India produces nearly 80% of the world's turmeric."
  },
  {
    id: "ginger",
    name: "Ginger (Adrak)",
    category: "Herb",
    whatItIs: "A pungent, aromatic root used fresh or dried to add warmth and zing to curries and teas.",
    benefits: ["Known to aid digestion and reduce nausea", "Supports respiratory health", "Promotes blood circulation"],
    benefitTags: ["Digestion", "Immunity", "Energy & Metabolism"],
    commonSubstitutes: ["Galangal", "Ginger powder (half the amount)"],
    storageTip: "Keep unpeeled ginger in a paper bag in the refrigerator or freeze for longer use.",
    funFact: "In Indian households, ginger-honey tea is a primary home remedy for common colds."
  },
  {
    id: "garlic",
    name: "Garlic (Lahsun)",
    category: "Vegetable",
    whatItIs: "A potent bulb used for its intense flavor and aroma, forming the base of many Indian gravies.",
    benefits: ["Supports cardiovascular health", "Natural antimicrobial properties", "Known to help regulate blood pressure"],
    benefitTags: ["Heart Health", "Immunity"],
    commonSubstitutes: ["Shallots", "Asafoetida (Hing) for a similar sulfurous aroma"],
    storageTip: "Store in a cool, dry place with good air circulation. Do not refrigerate whole bulbs.",
    funFact: "Garlic's flavor profile changes based on how it's cut—finely minced is stronger than whole cloves."
  },
  {
    id: "tamarind",
    name: "Tamarind (Imli)",
    category: "Fruit",
    whatItIs: "A tart fruit that grows in pods, used to add a distinctive sourness to South Indian sambars and chutneys.",
    benefits: ["High in antioxidants and Vitamin C", "Aids in healthy digestion", "Traditionally used as a cooling agent"],
    benefitTags: ["Digestion", "Immunity"],
    commonSubstitutes: ["Kokum", "Dry Mango Powder (Amchur)", "Lemon Juice"],
    storageTip: "Store tamarind pulp in the refrigerator or its dried block in an airtight container.",
    funFact: "Tamarind is a key ingredient in Worcestershire sauce!"
  },
  {
    id: "curry_leaves",
    name: "Curry Leaves (Kadi Patta)",
    category: "Herb",
    whatItIs: "Small, dark green leaves with a unique nutty and citrusy aroma, vital for South Indian tempering.",
    benefits: ["Traditionally associated with hair health and preventing graying", "Good for eyesight", "Supports digestive enzymes"],
    benefitTags: ["Hair Health", "Digestion"],
    commonSubstitutes: ["Lime zest", "Bay leaves (though the flavor is very different)"],
    storageTip: "Keep dry leaves in an airtight container in the fridge to stay fresh for weeks.",
    funFact: "Curry leaves belong to the citrus family (Rutaceae)."
  },
  {
    id: "cumin_seeds",
    name: "Cumin (Jeera)",
    category: "Spice",
    whatItIs: "Small, earthy seeds that are usually fried in oil as the first step in tempering many Indian dishes.",
    benefits: ["Promotes efficient digestion", "Rich source of iron", "May boost metabolism"],
    benefitTags: ["Digestion", "Energy & Metabolism"],
    commonSubstitutes: ["Caraway seeds", "Nigella seeds (Kalonji)"],
    storageTip: "Keep whole seeds in a glass jar. Ground cumin loses flavor much faster than whole seeds.",
    funFact: "Cumin water (Jeera pani) is a popular traditional weight-loss aid in India."
  },
  {
    id: "mustard_seeds",
    name: "Mustard Seeds (Rai/Sarson)",
    category: "Spice",
    whatItIs: "Tiny seeds (black or yellow) that pop when heated in oil, releasing a nutty, peppery flavor.",
    benefits: ["Rich in selenium and magnesium", "Supports heart health", "Contains glucosinolates with health-protective properties"],
    benefitTags: ["Heart Health"],
    commonSubstitutes: ["Brown mustard seeds", "Horseradish (for heat)"],
    storageTip: "Store in a cool, dry place. They can last up to a year without losing potency.",
    funFact: "In North India, large mustard fields create the iconic yellow landscape seen in many Bollywood films."
  },
  {
    id: "paneer",
    name: "Cottage Cheese (Paneer)",
    category: "Dairy",
    whatItIs: "A non-melting fresh cheese made by curdling milk with a fruit or vegetable acid like lemon juice.",
    benefits: ["High-quality vegetarian protein", "Excellent source of calcium for bones", "Slow-digesting protein (casein)"],
    benefitTags: ["Bone Health", "Weight Management"],
    commonSubstitutes: ["Tofu", "Halloumi (though saltier)"],
    storageTip: "Store in water in the fridge, changing the water daily, or freeze for up to a month.",
    funFact: "Unlike many cheeses, paneer is never aged and relies solely on fresh milk quality."
  },
  {
    id: "yogurt",
    name: "Curd (Dahi)",
    category: "Dairy",
    whatItIs: "A staple fermented milk product used in raitas, marinades, or eaten plain with meals.",
    benefits: ["Rich in probiotics for gut health", "Great for hair shine when used as a mask", "Natural cooling effect on the body"],
    benefitTags: ["Digestion", "Hair Health", "Immunity"],
    commonSubstitutes: ["Greek yogurt", "Vegan nut-based curds"],
    storageTip: "Keep refrigerated. Use older curd for recipes that require tanginess, like Kadhi.",
    funFact: "Indian curd is technically different from 'yogurt' as it is fermented with different bacterial strains."
  },
  {
    id: "ghee",
    name: "Clarified Butter (Ghee)",
    category: "Dairy",
    whatItIs: "Butter that has been simmered until the water evaporates and the milk solids brown and are filtered out.",
    benefits: ["Rich in fat-soluble vitamins (A, D, E)", "Provides steady energy", "Known to support brain health"],
    benefitTags: ["Energy & Metabolism", "Skin Health"],
    commonSubstitutes: ["Butter", "Coconut oil"],
    storageTip: "Ghee is shelf-stable and can be stored at room temperature in an airtight jar.",
    funFact: "Traditional ghee contains almost zero lactose or casein, making it suitable for many with dairy sensitivities."
  },
  {
    id: "basmati_rice",
    name: "Basmati Rice",
    category: "Grain/Lentil",
    whatItIs: "A long-grain, aromatic rice varieties primarily grown in the Himalayan foothills.",
    benefits: ["Lower glycemic index than many other rice types", "Gluten-free energy source", "Easier to digest than whole grains"],
    benefitTags: ["Energy & Metabolism", "Digestion"],
    commonSubstitutes: ["Jasmine rice", "Sona masuri rice"],
    storageTip: "Store in a cool, dry place. Aged basmati rice is considered superior as it is less sticky.",
    funFact: "The name 'Basmati' translates to 'The Fragrant One' in Sanskrit."
  },
  {
    id: "chickpeas",
    name: "Chickpeas (Chana)",
    category: "Grain/Lentil",
    whatItIs: "A high-protein legume, used whole in curries (Chole) or ground into flour (Besan).",
    benefits: ["High fiber supports weight management", "Regulates blood sugar levels", "Provides sustained energy"],
    benefitTags: ["Weight Management", "Energy & Metabolism"],
    commonSubstitutes: ["Black-eyed peas", "Green peas"],
    storageTip: "Dried chickpeas last for years in an airtight jar. Cooked ones should be refrigerated.",
    funFact: "India is the world's largest producer of chickpeas."
  },
  {
    id: "lemon",
    name: "Lemon (Nimbu)",
    category: "Fruit",
    whatItIs: "A citrus fruit used across India for its tangy juice and zest, providing a finish to most meals.",
    benefits: ["Packed with Vitamin C for immunity", "Natural detoxifying properties", "Boosts iron absorption from plant foods"],
    benefitTags: ["Immunity", "Skin Health"],
    commonSubstitutes: ["Lime", "Dry Mango Powder"],
    storageTip: "Store in the fridge crisper drawer to keep them juicy for longer.",
    funFact: "Drinking warm lemon water in the morning is a staple Ayurvedic wellness ritual."
  },
  {
    id: "cardamom",
    name: "Cardamom (Elaichi)",
    category: "Spice",
    whatItIs: "A sweet, aromatic spice pod used in both savory biryanis and sweet desserts.",
    benefits: ["Natural breath freshener", "Supports respiratory health", "Aids in relieving acidity"],
    benefitTags: ["Digestion"],
    commonSubstitutes: ["Nutmeg (small amount)", "Cinnamon"],
    storageTip: "Store whole pods; the seeds lose their aroma instantly once the pod is opened.",
    funFact: "Cardamom is the world's third most expensive spice by weight, after saffron and vanilla."
  },
  {
    id: "black_pepper",
    name: "Black Pepper (Kali Mirch)",
    category: "Spice",
    whatItIs: "The 'King of Spices', providing a sharp, biting heat and depth to Indian masalas.",
    benefits: ["Enhances absorption of other nutrients (like curcumin)", "Supports thermogenesis (metabolism)", "Relieves chest congestion"],
    benefitTags: ["Energy & Metabolism", "Immunity"],
    commonSubstitutes: ["White pepper", "Long pepper (Pippali)"],
    storageTip: "Always buy whole peppercorns and grind fresh for the best flavor and health benefits.",
    funFact: "India's Malabar Coast has been the world's primary source of pepper for millennia."
  },
  {
    id: "onion",
    name: "Onion (Pyaz)",
    category: "Vegetable",
    whatItIs: "The fundamental base of Indian cooking, providing sweetness, texture, and body to gravies.",
    benefits: ["Rich in sulfur compounds for heart health", "Good source of Vitamin C and B6", "Prebiotic properties for gut health"],
    benefitTags: ["Heart Health", "Digestion"],
    commonSubstitutes: ["Shallots", "Leeks", "Asafoetida (for flavor)"],
    storageTip: "Keep in a cool, dry, dark place. Avoid storing near potatoes as they spoil faster.",
    funFact: "India is one of the world's largest exporters of red onions."
  },
  {
    id: "tomato",
    name: "Tomato (Tamatar)",
    category: "Vegetable",
    whatItIs: "Used for tanginess and color, tomatoes are indispensable for Masalas and curries.",
    benefits: ["High in Lycopene, which supports skin health", "Rich in Potassium for heart health", "Boosts hydration levels"],
    benefitTags: ["Skin Health", "Heart Health"],
    commonSubstitutes: ["Tamarind (for tang)", "Yogurt (for body)", "Dry Mango Powder"],
    storageTip: "Store at room temperature until fully ripe, then move to the fridge.",
    funFact: "Botanically a fruit, but treated as a vegetable in the Indian kitchen."
  },
  {
    id: "chicken",
    name: "Chicken (Murgh)",
    category: "Other",
    whatItIs: "A versatile lean protein staple in non-vegetarian Indian households across all regions.",
    benefits: ["High-quality complete protein for muscle maintenance", "Source of Vitamin B12 and Selenium", "Supports bone density"],
    benefitTags: ["Bone Health", "Energy & Metabolism"],
    commonSubstitutes: ["Paneer", "Tofu", "Soya Chunks"],
    storageTip: "Always keep refrigerated below 4°C and consume within 2 days of purchase, or freeze.",
    funFact: "The word 'Tandoori' comes from the Persian 'Tannur', referring to the clay oven used to cook chicken."
  },
  {
    id: "potato",
    name: "Potato (Aloo)",
    category: "Vegetable",
    whatItIs: "The most versatile vegetable, appearing in snacks, main courses, and even flatbreads.",
    benefits: ["High in complex carbohydrates for energy", "Contains Vitamin B6 and Fiber (with skin)", "Natural source of potassium"],
    benefitTags: ["Energy & Metabolism"],
    commonSubstitutes: ["Sweet Potato", "Yam", "Raw Banana"],
    storageTip: "Store in a dark, cool place. Do not refrigerate as it turns the starch to sugar.",
    funFact: "Potatoes were introduced to India by the Portuguese in the 17th century."
  },
  {
    id: "ginger_garlic_paste",
    name: "Ginger-Garlic Paste",
    category: "Other",
    whatItIs: "A dynamic duo of pungent roots crushed together, forming the aromatic heart of most Indian recipes.",
    benefits: ["Synergistic immunity boost", "Anti-inflammatory and antimicrobial", "Aids in breaking down complex proteins"],
    benefitTags: ["Immunity", "Digestion"],
    commonSubstitutes: ["Freshly minced ginger and garlic"],
    storageTip: "Store in a glass jar in the fridge. Adding a layer of oil on top preserves it longer.",
    funFact: "Many Indian families still prefer grinding this fresh daily on a 'sil-batta' (grinding stone)."
  },
  {
    id: "green_chili",
    name: "Green Chili (Hari Mirch)",
    category: "Vegetable",
    whatItIs: "Fresh peppers used to add sharp heat and a distinct green flavor to dishes.",
    benefits: ["Contains Capsaicin which may boost metabolism", "Very high in Vitamin C", "Known to release endorphins"],
    benefitTags: ["Weight Management", "Immunity"],
    commonSubstitutes: ["Black Pepper", "Red Chili Powder (though different flavor)"],
    storageTip: "Remove the stems before refrigerating to prevent them from rotting quickly.",
    funFact: "Indian green chilies are generally hotter than jalapeños but milder than habaneros."
  },
  {
    id: "coriander_leaves",
    name: "Coriander (Dhaniya Patta)",
    category: "Herb",
    whatItIs: "Fresh, citrusy leaves used as a garnish and a key ingredient in chutneys.",
    benefits: ["Natural detoxifier", "Supports digestion and bloating relief", "Traditionally used to cool the body"],
    benefitTags: ["Digestion", "Skin Health"],
    commonSubstitutes: ["Parsley (mildly similar look, very different taste)", "Mint"],
    storageTip: "Wrap in a dry paper towel and store in a ventilated container in the fridge.",
    funFact: "In North America, this herb is commonly known as Cilantro."
  },
  {
    id: "mint_leaves",
    name: "Mint (Pudina)",
    category: "Herb",
    whatItIs: "Cooling and aromatic leaves used in biryanis, raitas, and summer drinks.",
    benefits: ["Excellent for relieving indigestion", "Natural breath freshener", "Soothing effect on the stomach lining"],
    benefitTags: ["Digestion"],
    commonSubstitutes: ["Basil", "Coriander"],
    storageTip: "Store upright with stems in a small glass of water in the fridge, covered with a bag.",
    funFact: "Pudina tea is one of India's most popular natural digestive aids."
  },
  {
    id: "garam_masala",
    name: "Garam Masala",
    category: "Spice",
    whatItIs: "A 'warm' blend of ground spices like cinnamon, cloves, and cardamom added at the end of cooking.",
    benefits: ["Boosts thermogenesis and metabolism", "Aids in absorption of nutrients", "High in antioxidants from varied spices"],
    benefitTags: ["Energy & Metabolism", "Digestion"],
    commonSubstitutes: ["Individual spices (cardamom + cinnamon + cloves)"],
    storageTip: "Add at the end of cooking to preserve the volatile oils and aroma.",
    funFact: "The composition of Garam Masala varies significantly from one region (and one home) to another."
  },
  {
    id: "red_chili_powder",
    name: "Red Chili Powder (Lal Mirch)",
    category: "Spice",
    whatItIs: "Ground dried chilies used for both heat and the signature red color of Indian curries.",
    benefits: ["Boosts metabolism and fat burning", "Rich in Vitamin A", "Anti-inflammatory properties"],
    benefitTags: ["Energy & Metabolism", "Weight Management"],
    commonSubstitutes: ["Paprika (for color)", "Cayenne (for heat)"],
    storageTip: "Keep in an airtight container away from moisture to prevent clumping.",
    funFact: "Kashmiri Lal Mirch is prized for its deep red color but very mild heat."
  },
  {
    id: "mustard_oil",
    name: "Mustard Oil (Sarson ka Tel)",
    category: "Other",
    whatItIs: "A pungent, sharp-smelling oil extracted from mustard seeds, a staple in North and East India.",
    benefits: ["High in Monounsaturated Fatty Acids (MUFA)", "Good for heart health when used correctly", "Traditionally used for hair and skin massage"],
    benefitTags: ["Heart Health", "Skin Health", "Hair Health"],
    commonSubstitutes: ["Rice Bran Oil", "Sunflower Oil"],
    storageTip: "Heat it to the smoking point before cooking to mellow its strong pungent aroma.",
    funFact: "In many parts of India, it's the primary oil used for making long-lasting pickles."
  },
  {
    id: "wheat_flour",
    name: "Wheat Flour (Atta)",
    category: "Grain/Lentil",
    whatItIs: "Finely ground whole wheat flour used to make daily flatbreads like Rotis and Chapatis.",
    benefits: ["Rich in complex carbs and fiber", "Provides sustained energy release", "Contains B-vitamins and Minerals"],
    benefitTags: ["Energy & Metabolism"],
    commonSubstitutes: ["Multigrain Flour", "Millet Flour (Bajra/Jowar)"],
    storageTip: "Store in a dry, airtight container to prevent infestation and moisture absorption.",
    funFact: "Traditional 'Chakki' Atta is stone-ground, which keeps the nutrients and fiber intact."
  },
  {
    id: "gram_flour",
    name: "Gram Flour (Besan)",
    category: "Grain/Lentil",
    whatItIs: "Flour made from ground chana dal (split chickpeas), used in snacks like Pakoras and sweets.",
    benefits: ["High protein vegetarian option", "Gluten-free and high in fiber", "Lower glycemic index than wheat flour"],
    benefitTags: ["Weight Management", "Energy & Metabolism"],
    commonSubstitutes: ["Chickpea Flour", "Cornstarch (as a binder)"],
    storageTip: "Besan can go rancid due to its high oil content; store in a cool place.",
    funFact: "Besan is also a popular traditional facial cleanser in India for glowing skin."
  },
  {
    id: "toor_dal",
    name: "Toor Dal (Arhar Dal)",
    category: "Grain/Lentil",
    whatItIs: "Split pigeon peas, the most popular lentil used to make the daily 'Dal' in most Indian homes.",
    benefits: ["Excellent source of plant-based protein", "High in Folic Acid and Fiber", "Supports energy levels"],
    benefitTags: ["Weight Management", "Energy & Metabolism"],
    commonSubstitutes: ["Moong Dal", "Masoor Dal"],
    storageTip: "Always pick through for small stones before washing and cooking.",
    funFact: "Toor dal is the primary ingredient in the famous South Indian Sambar."
  },
  {
    id: "urad_dal",
    name: "Black Gram (Urad Dal)",
    category: "Grain/Lentil",
    whatItIs: "A dark lentil used whole (black) or split (white) to make Dal Makhani or fermented batters.",
    benefits: ["Rich in iron and protein", "Supports bone mineral density", "High fiber for heart health"],
    benefitTags: ["Bone Health", "Heart Health"],
    commonSubstitutes: ["Mung Beans"],
    storageTip: "Soak for at least 4 hours before cooking for better digestion and texture.",
    funFact: "Urad dal provides the unique 'mucilaginous' texture required for soft idlis and crispy dosas."
  },
  {
    id: "moong_dal",
    name: "Moong Dal",
    category: "Grain/Lentil",
    whatItIs: "Small, yellow split lentils known for being the easiest to digest among all pulses.",
    benefits: ["Very easy on the stomach during illness", "High in protein and low in calories", "Regulates blood sugar"],
    benefitTags: ["Digestion", "Weight Management"],
    commonSubstitutes: ["Masoor Dal"],
    storageTip: "Dry roast slightly before storing to prevent pests and enhance flavor when cooked.",
    funFact: "Moong dal is often the first solid food introduced to Indian infants."
  },
  {
    id: "coconut",
    name: "Coconut (Nariyal)",
    category: "Fruit",
    whatItIs: "Essential in South and Coastal Indian cooking, used grated, as oil, or as milk.",
    benefits: ["Rich in medium-chain triglycerides (MCTs)", "Provides quick energy boost", "Supports skin and hair luster"],
    benefitTags: ["Energy & Metabolism", "Skin Health", "Hair Health"],
    commonSubstitutes: ["Nut powders", "Dairy cream"],
    storageTip: "Keep fresh grated coconut in the freezer for long-term use.",
    funFact: "In India, the coconut is known as 'Kalpavriksha'—the tree that provides all the necessities of life."
  },
  {
    id: "coconut_milk",
    name: "Coconut Milk",
    category: "Other",
    whatItIs: "A creamy liquid extracted from grated coconut, used for rich, mild curries (Stews/Moilee).",
    benefits: ["Lactose-free dairy alternative", "Rich in healthy fats", "Soothing for the digestive tract"],
    benefitTags: ["Hair Health", "Energy & Metabolism"],
    commonSubstitutes: ["Dairy Cream", "Cashew Milk"],
    storageTip: "Do not boil it vigorously as it may curdle; always add towards the end of cooking.",
    funFact: "First-press milk is thicker and used for finishing, while second-press is thinner and used for cooking."
  },
  {
    id: "cashews",
    name: "Cashews (Kaju)",
    category: "Other",
    whatItIs: "Creamy nuts used whole for crunch or ground into a paste for luxurious Shahi gravies.",
    benefits: ["High in heart-healthy fats", "Source of Magnesium for bone health", "Provides plant-based protein"],
    benefitTags: ["Heart Health", "Bone Health"],
    commonSubstitutes: ["Almonds", "Melon Seeds (Magaz)"],
    storageTip: "Store in the fridge to prevent the oils from turning rancid in heat.",
    funFact: "India's Goa region is world-famous for its high-quality cashews."
  },
  {
    id: "almonds",
    name: "Almonds (Badam)",
    category: "Other",
    whatItIs: "A nutrient-dense nut used in sweets, garnishes, and healthy morning rituals.",
    benefits: ["High in Vitamin E for skin", "Supports healthy cholesterol levels", "Known for supporting brain health"],
    benefitTags: ["Skin Health", "Heart Health"],
    commonSubstitutes: ["Cashews", "Walnuts"],
    storageTip: "Soak overnight and peel the skin for better digestibility and nutrient absorption.",
    funFact: "Soaked almonds are a standard 'exam season' snack for Indian students."
  },
  {
    id: "jaggery",
    name: "Jaggery (Gur)",
    category: "Other",
    whatItIs: "Unrefined cane sugar used as a healthier, earthy sweetener in tea and traditional desserts.",
    benefits: ["Rich in iron and minerals", "Acts as a digestive aid after meals", "Cleanses the respiratory tract"],
    benefitTags: ["Energy & Metabolism", "Digestion"],
    commonSubstitutes: ["Brown Sugar", "Palm Sugar"],
    storageTip: "Keep in a moisture-free place; it melts easily in humid weather.",
    funFact: "Eating a small piece of jaggery after a meal is a common Indian tradition to prevent acidity."
  },
  {
    id: "semolina",
    name: "Semolina (Sooji/Rava)",
    category: "Grain/Lentil",
    whatItIs: "Coarse wheat middlings used for quick breakfasts (Upma) and crispy coatings.",
    benefits: ["Quick energy source", "Lower fat content than many snacks", "Contains iron and potassium"],
    benefitTags: ["Energy & Metabolism"],
    commonSubstitutes: ["Broken Wheat", "Rice Rava"],
    storageTip: "Dry roast it before storing to prevent bugs and save time while cooking.",
    funFact: "Sooji is also used to make the crispy outer shell of the famous Pani Puri."
  },
  {
    id: "poha",
    name: "Flattened Rice (Poha)",
    category: "Grain/Lentil",
    whatItIs: "Rice that has been parboiled and flattened, making it a quick-cooking, light staple.",
    benefits: ["Very low in gluten and easy to digest", "Rich in Iron (if iron-fortified/brown)", "Instant source of carbohydrates"],
    benefitTags: ["Digestion", "Energy & Metabolism"],
    commonSubstitutes: ["Oats", "Rice"],
    storageTip: "Wash only for a few seconds; soaking it too long makes it mushy.",
    funFact: "Poha is considered the ultimate 'fast food' of Indian breakfast, ready in under 10 minutes."
  },
  {
    id: "fennel_seeds",
    name: "Fennel Seeds (Saunf)",
    category: "Spice",
    whatItIs: "Sweet, licorice-like seeds used in tempering and as a post-meal digestive.",
    benefits: ["Powerful digestive aid and bloating relief", "Natural mouth freshener", "Relieves water retention"],
    benefitTags: ["Digestion"],
    commonSubstitutes: ["Anise seeds", "Star Anise (ground)"],
    storageTip: "Sugar-coated saunf is a popular variant, but plain roasted seeds are healthier.",
    funFact: "In Indian restaurants, saunf and rock sugar (mishri) are always offered with the bill."
  },
  {
    id: "bay_leaf",
    name: "Bay Leaf (Tej Patta)",
    category: "Spice",
    whatItIs: "Dried leaves used for their woodsy, subtle aroma in Biryanis and Pulaos.",
    benefits: ["Supports blood sugar management", "Anti-inflammatory and digestive", "Rich in phytochemicals"],
    benefitTags: ["Digestion"],
    commonSubstitutes: ["Cinnamon sticks (for aroma)"],
    storageTip: "Remove the leaf before serving; it's used only for infusing flavor during cooking.",
    funFact: "The Indian bay leaf comes from the cassia tree and is distinct from the Mediterranean laurel leaf."
  },
  {
    id: "cloves",
    name: "Cloves (Laung)",
    category: "Spice",
    whatItIs: "Intense, aromatic flower buds used in whole spice blends and for their medicinal properties.",
    benefits: ["Extremely high in antioxidants", "Natural remedy for toothache and oral health", "Supports bone health"],
    benefitTags: ["Immunity", "Bone Health"],
    commonSubstitutes: ["Allspice"],
    storageTip: "Store whole; cloves are very strong, so 1 or 2 are usually enough for a whole pot.",
    funFact: "Clove oil is a centuries-old Indian remedy for tooth pain."
  },
  {
    id: "cinnamon",
    name: "Cinnamon (Dalchini)",
    category: "Spice",
    whatItIs: "The dried inner bark of trees, used to add a sweet and woody warmth to savory curries.",
    benefits: ["Helps regulate blood sugar levels", "Good for heart health", "Anti-inflammatory and antimicrobial"],
    benefitTags: ["Weight Management", "Heart Health"],
    commonSubstitutes: ["Cassia Bark (often sold as cinnamon)"],
    storageTip: "Store sticks in a dry jar. They keep their flavor for much longer than ground cinnamon.",
    funFact: "Most 'cinnamon' in India is technically Cassia bark, which has a stronger, spicier profile."
  },
  {
    id: "asafoetida",
    name: "Asafoetida (Hing)",
    category: "Spice",
    whatItIs: "A pungent resin used in tiny amounts to mimic the savory depth of onion and garlic.",
    benefits: ["Unrivaled for reducing bloating and gas", "Antispasmodic properties", "Aids in the digestion of heavy legumes"],
    benefitTags: ["Digestion"],
    commonSubstitutes: ["Garlic powder", "Onion powder"],
    storageTip: "Keep in a very tightly sealed container; its raw smell is extremely strong.",
    funFact: "Hing is essentially a dried latex (resin) from a giant fennel plant."
  },
  {
    id: "fenugreek",
    name: "Fenugreek (Methi)",
    category: "Spice",
    whatItIs: "Bitter seeds or dried leaves (Kasuri Methi) used for a unique maple-like aroma.",
    benefits: ["Known to improve insulin sensitivity", "Traditionally used to support hair growth", "Aids in weight management"],
    benefitTags: ["Hair Health", "Weight Management"],
    commonSubstitutes: ["Celery seeds (seeds)", "Maple syrup (for smell only)"],
    storageTip: "Rub Kasuri Methi between your palms before adding to a dish to release maximum flavor.",
    funFact: "Fenugreek is a key ingredient in many proprietary hair oils in India."
  },
  {
    id: "saffron",
    name: "Saffron (Kesar)",
    category: "Spice",
    whatItIs: "The dried stigmas of the crocus flower, the world's most expensive spice, used for color and luxury.",
    benefits: ["Powerful mood-booster and antioxidant", "Used traditionally for skin brightening", "Immunity-enhancing properties"],
    benefitTags: ["Skin Health", "Immunity"],
    commonSubstitutes: ["Turmeric (for color only)"],
    storageTip: "Steep in warm milk for 10 minutes before adding to biryanis or desserts for best results.",
    funFact: "It takes about 75,000 saffron flowers to produce just one pound of the spice."
  },
  {
    id: "mutton",
    name: "Mutton",
    category: "Other",
    whatItIs: "Refers to goat or sheep meat in India, prized for its rich flavor and use in festive curries.",
    benefits: ["Dense source of iron and zinc", "High in Vitamin B12", "Supports muscle and bone health"],
    benefitTags: ["Bone Health", "Energy & Metabolism"],
    commonSubstitutes: ["Lamb", "Beef (in specific regions)"],
    storageTip: "Slow-cook on low heat for the best results; pressure cooking is standard for speed.",
    funFact: "In Indian English, 'Mutton' almost always refers to goat meat, unlike in the West where it's sheep."
  },
  {
    id: "fish",
    name: "Fish (Machli)",
    category: "Other",
    whatItIs: "A staple in coastal India (Bengal, Kerala, Goa), providing light and nutritious protein.",
    benefits: ["Rich in Omega-3 fatty acids for heart health", "Excellent for skin health and glow", "Lean source of high-quality protein"],
    benefitTags: ["Heart Health", "Skin Health"],
    commonSubstitutes: ["Prawns", "Tofu"],
    storageTip: "Fresh fish should have clear eyes and no strong 'fishy' odor.",
    funFact: "India's coastline of over 7,500km makes it a global leader in fish consumption and exports."
  },
  {
    id: "eggs",
    name: "Eggs (Anda)",
    category: "Other",
    whatItIs: "A quick and affordable complete protein source used in curries, rolls, and breakfasts.",
    benefits: ["Contains all 9 essential amino acids", "Good for eye health (Lutein)", "Supports metabolic function"],
    benefitTags: ["Bone Health", "Energy & Metabolism"],
    commonSubstitutes: ["Paneer", "Tofu"],
    storageTip: "Keep refrigerated; check freshness by placing in water—fresh eggs sink, old eggs float.",
    funFact: "In India, many vegetarians consider themselves 'Eggetarians' if they consume eggs."
  },
  {
    id: "rajma",
    name: "Red Kidney Beans (Rajma)",
    category: "Grain/Lentil",
    whatItIs: "Dark red beans used to make the iconic Punjabi soul food, Rajma-Chawal.",
    benefits: ["High fiber supports satiety and weight loss", "Good source of molybdenum and folate", "Provides sustained energy"],
    benefitTags: ["Weight Management", "Energy & Metabolism"],
    commonSubstitutes: ["Black Beans", "Chana"],
    storageTip: "Always soak for at least 8 hours to reduce phytates and anti-nutrients.",
    funFact: "Rajma is not native to India; it was brought from the Americas via Europe."
  }
];
