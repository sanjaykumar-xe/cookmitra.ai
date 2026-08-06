export interface HealthyFood {
  id: string;
  name: string;
  description: string;
  benefits: string;
  category: 'Sprouts & Pulses' | 'Nuts' | 'Seeds' | 'Other Healthy Foods';
  imageUrl: string;
  imageHint: string;
}

export const healthyFoodCategories = ['All', 'Sprouts & Pulses', 'Nuts', 'Seeds', 'Other Healthy Foods'] as const;

export type HealthyFoodCategory = typeof healthyFoodCategories[number];

export const healthyFoods: HealthyFood[] = [
  // Sprouts & Pulses
  { id: 'green-gram', name: 'Green Gram (Pacha Payaru)', description: 'A small, green legume packed with protein and fiber.', benefits: 'Rich in protein, fiber, and antioxidants. Helps in digestion and weight management.', category: 'Sprouts & Pulses', imageUrl: 'https://picsum.photos/seed/greengram/400/300', imageHint: 'green gram' },
  { id: 'sprouted-green-gram', name: 'Sprouted Green Gram', description: 'Germinated green gram, which increases its nutritional value.', benefits: 'Higher in vitamins and minerals than non-sprouted gram. Easy to digest.', category: 'Sprouts & Pulses', imageUrl: 'https://picsum.photos/seed/sprouts/400/300', imageHint: 'sprouts' },
  { id: 'chickpeas', name: 'Chickpeas (Kondakadalai)', description: 'A versatile legume used in many dishes like curries and salads.', benefits: 'Excellent source of plant-based protein, fiber, and iron.', category: 'Sprouts & Pulses', imageUrl: 'https://picsum.photos/seed/chickpeas/400/300', imageHint: 'chickpeas' },
  { id: 'black-gram', name: 'Black Gram', description: 'A bean grown in the Indian subcontinent, rich in nutrients.', benefits: 'Good source of protein, potassium, calcium, and iron. Boosts energy.', category: 'Sprouts & Pulses', imageUrl: 'https://picsum.photos/seed/blackgram/400/300', imageHint: 'black gram' },

  // Nuts
  { id: 'almonds', name: 'Almonds', description: 'A popular tree nut loaded with healthy fats, antioxidants, vitamins, and minerals.', benefits: 'Improves heart health, lowers cholesterol, and supports brain function.', category: 'Nuts', imageUrl: 'https://picsum.photos/seed/almonds/400/300', imageHint: 'almonds' },
  { id: 'cashews', name: 'Cashews', description: 'A kidney-shaped seed sourced from the cashew tree.', benefits: 'Rich in healthy fats, protein, and magnesium. Good for heart and bone health.', category: 'Nuts', imageUrl: 'https://picsum.photos/seed/cashews/400/300', imageHint: 'cashews' },
  { id: 'walnuts', name: 'Walnuts', description: 'A wrinkly, globe-like nut rich in omega-3 fats and antioxidants.', benefits: 'Excellent for brain health, reduces inflammation, and supports a healthy gut.', category: 'Nuts', imageUrl: 'https://picsum.photos/seed/walnuts/400/300', imageHint: 'walnuts' },
  { id: 'peanuts', name: 'Peanuts', description: 'A legume crop grown mainly for its edible seeds.', benefits: 'Good source of protein, healthy fats, and various vitamins and minerals.', category: 'Nuts', imageUrl: 'https://picsum.photos/seed/peanuts/400/300', imageHint: 'peanuts' },

  // Seeds
  { id: 'chia-seeds', name: 'Chia Seeds', description: 'Tiny black seeds from the plant Salvia hispanica, prized for their health benefits.', benefits: 'Loaded with fiber, protein, omega-3 fatty acids, and various micronutrients.', category: 'Seeds', imageUrl: 'https://picsum.photos/seed/chiaseeds/400/300', imageHint: 'chia seeds' },
  { id: 'flax-seeds', name: 'Flax Seeds', description: 'Small oil seeds that are a great source of fiber and omega-3.', benefits: 'High in Omega-3 fats, lignans, and fiber. May reduce cancer risk.', category: 'Seeds', imageUrl: 'https://picsum.photos/seed/flaxseeds/400/300', imageHint: 'flax seeds' },
  { id: 'pumpkin-seeds', name: 'Pumpkin Seeds', description: 'Edible seeds of a pumpkin, flat and oval in shape.', benefits: 'Rich in antioxidants, magnesium, zinc, and healthy fats.', category: 'Seeds', imageUrl: 'https://picsum.photos/seed/pumpkinseeds/400/300', imageHint: 'pumpkin seeds' },
  { id: 'sunflower-seeds', name: 'Sunflower Seeds', description: 'The fruit of the sunflower, harvested from the flower\'s large head.', benefits: 'Excellent source of Vitamin E, selenium, and beneficial plant compounds.', category: 'Seeds', imageUrl: 'https://picsum.photos/seed/sunflowerseeds/400/300', imageHint: 'sunflower seeds' },

  // Other Healthy Foods
  { id: 'oats', name: 'Oats', description: 'A whole-grain cereal, mainly grown in North America and Europe.', benefits: 'Incredibly nutritious, rich in fiber called beta-glucan, and can lower cholesterol.', category: 'Other Healthy Foods', imageUrl: 'https://picsum.photos/seed/oats/400/300', imageHint: 'oats bowl' },
  { id: 'quinoa', name: 'Quinoa', description: 'A gluten-free, whole-grain carbohydrate, as well as a whole protein.', benefits: 'Contains all nine essential amino acids. High in fiber, magnesium, and iron.', category: 'Other Healthy Foods', imageUrl: 'https://picsum.photos/seed/quinoa/400/300', imageHint: 'quinoa bowl' },
  { id: 'millets', name: 'Millets', description: 'A group of highly variable small-seeded grasses, widely grown around the world.', benefits: 'Gluten-free and rich in fiber, protein, and antioxidants. Helps control blood sugar.', category: 'Other Healthy Foods', imageUrl: 'https://picsum.photos/seed/millets/400/300', imageHint: 'millets grain' },
  { id: 'yogurt', name: 'Yogurt', description: 'A food produced by bacterial fermentation of milk.', benefits: 'Great source of probiotics, which are beneficial for gut health. High in protein and calcium.', category: 'Other Healthy Foods', imageUrl: 'https://picsum.photos/seed/yogurt/400/300', imageHint: 'yogurt bowl' },
  { id: 'honey', name: 'Honey', description: 'A sweet, viscous food substance produced by honey bees.', benefits: 'Rich in antioxidants and has antibacterial properties. A healthier alternative to sugar.', category: 'Other Healthy Foods', imageUrl: 'https://picsum.photos/seed/honey/400/300', imageHint: 'honey spoon' },
];
