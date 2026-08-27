/**
 * @fileOverview Curated data for the Healing Foods page.
 * Contains static information for common conditions.
 */

export interface HealingFoodItem {
  name: string;
  reason: string;
  icon?: string;
}

export interface HealthCondition {
  id?: string; // Made optional to support unsaved AI results
  name: string;
  summary: string;
  foodsToHelp: HealingFoodItem[];
  foodsToAvoid: HealingFoodItem[];
  healthTags: string[]; // Standardized tags to match recipe.healthTags
}

export const CURATED_CONDITIONS: HealthCondition[] = [
  {
    id: "diabetes",
    name: "Diabetes",
    summary: "Focus on managing blood sugar levels by choosing low-glycemic index foods and balancing carbohydrates with fiber, protein, and healthy fats.",
    foodsToHelp: [
      { name: "Bitter Gourd (Karela)", reason: "Contains charantin which helps lower blood glucose levels.", icon: "Leaf" },
      { name: "Fenugreek Seeds (Methi)", reason: "High in soluble fiber, which slows down carbohydrate absorption.", icon: "Zap" },
      { name: "Cinnamon", reason: "May improve insulin sensitivity and lower blood sugar.", icon: "Sparkles" },
      { name: "Leafy Greens", reason: "Low in calories and high in nutrients like Vitamin C.", icon: "Salad" }
    ],
    foodsToAvoid: [
      { name: "Refined Sugars", reason: "Causes rapid, dangerous spikes in blood glucose." },
      { name: "White Rice & Maida", reason: "High glycemic index and very low fiber content." },
      { name: "Sweetened Beverages", reason: "Full of empty calories and quick-acting sugars." },
      { name: "Deep Fried Snacks", reason: "High in trans fats that worsen insulin resistance." }
    ],
    healthTags: ["diabetes-friendly"]
  },
  {
    id: "pcos-pcod",
    name: "PCOS/PCOD",
    summary: "Hormonal balance and insulin sensitivity are key. Focus on anti-inflammatory foods, healthy fats, and high-fiber carbohydrates.",
    foodsToHelp: [
      { name: "Spearmint Tea", reason: "May help reduce androgen levels (excess male hormones).", icon: "Coffee" },
      { name: "Turmeric", reason: "Powerful anti-inflammatory properties to reduce systemic stress.", icon: "Sun" },
      { name: "Berries", reason: "High in antioxidants and low on the glycemic index.", icon: "Apple" },
      { name: "Nuts and Seeds", reason: "Provide essential healthy fats for hormone production.", icon: "Nut" }
    ],
    foodsToAvoid: [
      { name: "Processed Snacks", reason: "Trigger inflammation and insulin spikes." },
      { name: "Sugary Desserts", reason: "Worsen insulin resistance common in PCOS." },
      { name: "Excessive Caffeine", reason: "Can disrupt sleep and hormonal cycles." },
      { name: "Refined Carbohydrates", reason: "Rapidly convert to sugar, destabilizing blood glucose." }
    ],
    healthTags: ["pcos-friendly"]
  },
  {
    id: "hypertension",
    name: "Hypertension (High BP)",
    summary: "The goal is to reduce sodium intake while increasing potassium, magnesium, and calcium to help blood vessels relax.",
    foodsToHelp: [
      { name: "Banana", reason: "Rich in potassium which helps balance sodium levels.", icon: "Apple" },
      { name: "Beetroot", reason: "High in nitric oxide, which helps open blood vessels.", icon: "Heart" },
      { name: "Garlic", reason: "Contains allicin, which may help relax blood vessels.", icon: "Flame" },
      { name: "Hibiscus Tea", reason: "Traditionally known to help lower blood pressure naturally.", icon: "Coffee" }
    ],
    foodsToAvoid: [
      { name: "Pickles & Pappads", reason: "Extremely high in hidden sodium/salt." },
      { name: "Fried Foods", reason: "High in trans fats that affect cardiovascular health." },
      { name: "Canned Soups", reason: "Often contain high levels of sodium as a preservative." },
      { name: "Salted Processed Snacks", reason: "Strains arterial walls and increases blood pressure." }
    ],
    healthTags: ["high-bp-friendly"]
  },
  {
    id: "anemia",
    name: "Anemia",
    summary: "Focus on iron-rich foods and Vitamin C sources to enhance iron absorption and boost hemoglobin levels.",
    foodsToHelp: [
      { name: "Spinach & Moringa", reason: "Excellent plant-based sources of iron.", icon: "Salad" },
      { name: "Jaggery (Gur)", reason: "A natural sweetener rich in iron compared to white sugar.", icon: "Zap" },
      { name: "Amla & Citrus", reason: "Vitamin C is essential for absorbing plant-based iron.", icon: "Sparkles" },
      { name: "Beetroot", reason: "Known to boost blood count and iron levels.", icon: "Heart" }
    ],
    foodsToAvoid: [
      { name: "Excess Tea/Coffee", reason: "Tannins can block iron absorption if taken with meals." },
      { name: "Calcium Supplements with Meals", reason: "Calcium can compete with iron for absorption." },
      { name: "Soda & Carbonated Drinks", reason: "Phosphates interfere with essential mineral absorption." },
      { name: "Highly Processed Foods", reason: "Depleted of natural micronutrients and iron." }
    ],
    healthTags: ["anemia-friendly"]
  },
  {
    id: "heart-health",
    name: "Heart Health",
    summary: "Prioritize heart-healthy fats, fiber, and antioxidants to manage cholesterol and protect blood vessels.",
    foodsToHelp: [
      { name: "Walnuts & Flaxseeds", reason: "High in Omega-3 fatty acids for artery health.", icon: "Nut" },
      { name: "Oats", reason: "Beta-glucan fiber helps lower LDL (bad) cholesterol.", icon: "Wheat" },
      { name: "Olive Oil / Rice Bran Oil", reason: "Contain healthy unsaturated fats.", icon: "Droplets" },
      { name: "Garlic", reason: "Supports healthy blood flow and cholesterol levels.", icon: "Flame" }
    ],
    foodsToAvoid: [
      { name: "Trans Fats", reason: "Found in many commercial baked goods and vanaspati." },
      { name: "Excessive Red Meat", reason: "High in saturated fats that can clog arteries." },
      { name: "Highly Salted Snacks", reason: "Strains the heart by increasing blood pressure." },
      { name: "Deep Fried Foods", reason: "Increase systemic inflammation and LDL cholesterol." }
    ],
    healthTags: ["heart-healthy"]
  },
  {
    id: "digestive-issues",
    name: "Digestive Issues",
    summary: "Focus on 'Agni' (digestive fire) with easy-to-digest foods, probiotics, and warming spices.",
    foodsToHelp: [
      { name: "Yogurt (Dahi)", reason: "Probiotics support healthy gut bacteria.", icon: "Milk" },
      { name: "Ginger", reason: "Relieves bloating and stimulates digestive enzymes.", icon: "Flame" },
      { name: "Papaya", reason: "Contains papain, an enzyme that aids protein digestion.", icon: "Apple" },
      { name: "Buttermilk (Chaas)", reason: "A cooling probiotic drink that's easy on the gut.", icon: "Droplets" }
    ],
    foodsToAvoid: [
      { name: "Heavy Fried Foods", reason: "Difficult to break down and slow digestion." },
      { name: "Extremely Spicy Food", reason: "Can irritate the stomach lining." },
      { name: "Dairy (if lactose intolerant)", reason: "Causes bloating and discomfort for many." },
      { name: "Carbonated Sodas", reason: "Introduce excess gas and irritate the gut lining." }
    ],
    healthTags: ["digestive-friendly"]
  },
  {
    id: "weight-management",
    name: "Weight Management",
    summary: "Focus on high-volume, low-calorie foods that provide satiety through fiber and protein.",
    foodsToHelp: [
      { name: "Moong Dal", reason: "High protein and fiber keep you full for longer.", icon: "Nut" },
      { name: "Cucumber & Gourd", reason: "Very high water content and low calories.", icon: "Leaf" },
      { name: "Sprouts", reason: "Nutrient-dense and promotes metabolic health.", icon: "Zap" },
      { name: "Green Tea", reason: "Contains catechins that may boost metabolism.", icon: "Coffee" }
    ],
    foodsToAvoid: [
      { name: "Sugary Drinks", reason: "Full of hidden calories and spike hunger." },
      { name: "Deep Fried Snacks", reason: "High calorie density with low nutritional value." },
      { name: "Refined White Flour", reason: "Lacks fiber and leads to quick hunger return." },
      { name: "High-Calorie Creamy Sauces", reason: "Add dense empty calories without satiety." }
    ],
    healthTags: ["weight-management"]
  },
  {
    id: "immunity-boost",
    name: "Immunity Boost",
    summary: "Fortify your defenses with Vitamin C, Zinc, and anti-inflammatory traditional spices.",
    foodsToHelp: [
      { name: "Amla (Gooseberry)", reason: "Highest natural source of Vitamin C.", icon: "Apple" },
      { name: "Turmeric + Pepper", reason: "Synergistic anti-inflammatory and healing effect.", icon: "Sun" },
      { name: "Tulsi (Holy Basil)", reason: "Traditionally used for its antimicrobial properties.", icon: "Leaf" },
      { name: "Giloy", reason: "Renowned in Ayurveda for boosting white blood cell count.", icon: "Zap" }
    ],
    foodsToAvoid: [
      { name: "Excess Sugar", reason: "Can suppress immune system function for hours." },
      { name: "Highly Processed Food", reason: "Lacks the micronutrients needed for immunity." },
      { name: "Alcohol & Smoking", reason: "Depletes vital antioxidants and weakens immune defense." },
      { name: "Cold Sugary Drinks", reason: "Irritate upper respiratory mucosa." }
    ],
    healthTags: ["immunity-boosting"]
  },
  {
    id: "cold-cough",
    name: "Cold & Cough",
    summary: "Focus on warming, soothing liquids and ingredients that relieve congestion and inflammation.",
    foodsToHelp: [
      { name: "Ginger & Honey", reason: "Classic duo for throat relief and congestion.", icon: "Flame" },
      { name: "Black Pepper", reason: "Helps clear mucus and has warming properties.", icon: "Zap" },
      { name: "Tulsi Tea", reason: "Soothes the respiratory tract.", icon: "Coffee" },
      { name: "Warm Soups", reason: "Keep you hydrated and provide gentle nourishment.", icon: "Soup" }
    ],
    foodsToAvoid: [
      { name: "Cold Beverages", reason: "Can worsen throat irritation and congestion." },
      { name: "Excessive Dairy", reason: "Some find it increases mucus production during colds." },
      { name: "Fried Foods", reason: "Heavy and can irritate a sore throat." },
      { name: "Refined Sugars", reason: "Increase systemic inflammation during active infection." }
    ],
    healthTags: ["cold-cough-friendly"]
  },
  {
    id: "pregnancy-nutrition",
    name: "Pregnancy Nutrition",
    summary: "Prioritize Folate, Iron, Calcium, and clean protein for the health of both mother and baby.",
    foodsToHelp: [
      { name: "Leafy Greens", reason: "High in Folate (B9) essential for neural development.", icon: "Salad" },
      { name: "Milk and Paneer", reason: "Excellent sources of Calcium for bone growth.", icon: "Milk" },
      { name: "Lentils and Beans", reason: "Provide stable energy and necessary protein.", icon: "Wheat" },
      { name: "Nuts (Walnuts/Almonds)", reason: "Rich in DHA and healthy fats for brain health.", icon: "Nut" }
    ],
    foodsToAvoid: [
      { name: "Raw/Undercooked Eggs", reason: "Risk of Salmonella infection." },
      { name: "Unpasteurized Dairy", reason: "May contain Listeria bacteria." },
      { name: "High-Mercury Fish", reason: "Can affect baby's developing nervous system." },
      { name: "Excess Caffeine", reason: "Crosses the placenta and can impact fetal heart rate." }
    ],
    healthTags: ["pregnancy-friendly"]
  }
];
