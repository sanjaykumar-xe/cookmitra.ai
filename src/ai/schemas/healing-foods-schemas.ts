import { z } from 'genkit';

export const HealingFoodItemSchema = z.object({
  name: z.string().describe("Name of the food or ingredient"),
  reason: z.string().describe("Brief 1-line reason why it helps or should be avoided"),
  icon: z.string().optional().describe("A relevant Lucide icon name (e.g. 'Leaf', 'Heart', 'Zap', 'Apple', 'Wheat')")
});

export const GenerateHealingFoodsInputSchema = z.object({
  condition: z.string().describe("The health condition to get dietary guidance for (e.g. 'kidney stones', 'thyroid', 'acne')"),
});

export type GenerateHealingFoodsInput = z.infer<typeof GenerateHealingFoodsInputSchema>;

export const GenerateHealingFoodsOutputSchema = z.object({
  name: z.string().describe("The condition name, normalized"),
  summary: z.string().describe("A short 2-3 sentence plain-language explanation of the condition and general dietary approach"),
  foodsToHelp: z.array(HealingFoodItemSchema).describe("List of 6-8 helpful foods/ingredients with brief reasons"),
  foodsToAvoid: z.array(HealingFoodItemSchema).describe("List of 4-6 foods to limit or reduce"),
  healthTags: z.array(z.string()).describe("A list of 1-3 relevant tags from this FIXED list: 'diabetes-friendly', 'pcos-friendly', 'heart-healthy', 'anemia-friendly', 'digestive-friendly', 'weight-management', 'immunity-boosting', 'cold-cough-friendly', 'pregnancy-friendly', 'high-bp-friendly'. Return an empty array if none apply."),
});

export type GenerateHealingFoodsOutput = z.infer<typeof GenerateHealingFoodsOutputSchema>;
