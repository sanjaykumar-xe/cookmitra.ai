'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles, Dices, Loader2, X, RefreshCw } from 'lucide-react';
import { generateRecipeAction } from '@/app/actions';
import { RecipeDisplay } from '@/components/recipe/recipe-display';
import { useToast } from '@/hooks/use-toast';
import type { GenerateIndianRecipeOutput } from '@/ai/schemas/recipe-schemas';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

const PANTRY_POOL = [
  "onion", "tomato", "potato", "rice", "dal (lentils)", "paneer", 
  "curd", "besan (gram flour)", "spinach", "cauliflower", "eggs", 
  "chicken", "green chili", "ginger-garlic paste", "coriander leaves", 
  "cumin seeds", "turmeric", "garam masala"
];

const REGIONS = [
  'North Indian', 'South Indian', 'East Indian', 'West Indian', 
  'Central Indian', 'Any', 'Tamil Nadu', 'Kerala', 
  'Andhra Pradesh', 'Karnataka', 'Punjabi', 'Bengali', 
  'Gujarati', 'Maharashtrian', 'Rajasthani'
];

export function SurpriseRecipeDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState<GenerateIndianRecipeOutput | null>(null);
  const { toast } = useToast();

  const generateSurprise = async () => {
    setIsLoading(true);
    
    // Randomize 4-6 ingredients
    const shuffled = [...PANTRY_POOL].sort(() => 0.5 - Math.random());
    const selectedIngredients = shuffled.slice(0, Math.floor(Math.random() * 3) + 4).join(', ');
    
    // Randomize region and diet
    const randomRegion = REGIONS[Math.floor(Math.random() * REGIONS.length)];
    const randomDiet = Math.random() > 0.5 ? 'Veg' : 'Non-Veg';

    const formData = new FormData();
    formData.append('ingredients', selectedIngredients);
    formData.append('budget', '150');
    formData.append('cookingTime', '<30 minutes');
    formData.append('dietaryPreference', randomDiet);
    formData.append('region', randomRegion);
    formData.append('numberOfPersons', '2');

    const result = await generateRecipeAction(formData);

    if (result.success && result.data) {
      setRecipe(result.data);
      setIsOpen(true);
    } else {
      toast({
        variant: 'destructive',
        title: 'Surprise failed!',
        description: result.error || 'The AI chef is having a moment. Please try again.',
      });
    }
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          onClick={(e) => {
            e.preventDefault();
            generateSurprise();
          }}
          disabled={isLoading}
          className={cn(
            "rounded-full px-8 h-12 text-base font-bold shadow-lg transition-all hover:scale-105 active:scale-95 border-0",
            "bg-gradient-to-r from-[#F4A21A] to-[#FFB02E] text-[#412402]"
          )}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Cooking up a surprise...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Surprise Me!
            </>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] p-0 overflow-hidden rounded-[2rem] border-primary/20">
        <DialogHeader className="p-6 absolute top-0 left-0 right-0 z-50 pointer-events-none">
            <DialogTitle className="sr-only">Surprise Recipe Recommendation</DialogTitle>
        </DialogHeader>
        
        <div className="absolute top-6 right-12 z-50">
            <DialogClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-background/20 text-muted-foreground hover:text-foreground">
                    <X className="h-6 w-6" />
                </Button>
            </DialogClose>
        </div>
        
        <ScrollArea className="h-full w-full">
            <div className="p-6 md:p-10">
                {recipe && (
                    <div className="space-y-8">
                        <RecipeDisplay recipe={recipe} />
                        <div className="flex justify-center pb-6">
                            <Button 
                                onClick={generateSurprise} 
                                disabled={isLoading}
                                variant="outline"
                                className="rounded-full px-8 h-12 border-primary/30 hover:bg-primary/5 font-bold"
                            >
                                {isLoading ? (
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                ) : (
                                    <RefreshCw className="mr-2 h-5 w-5" />
                                )}
                                Try Another Surprise
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
