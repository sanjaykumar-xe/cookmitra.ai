"use client";

import { useState, useEffect, useRef } from "react";
import { RecipeGeneratorForm } from "@/components/recipe/recipe-generator-form";
import { RecipeDisplay } from "@/components/recipe/recipe-display";
import type { GenerateIndianRecipeOutput } from "@/ai/flows/generate-indian-recipe";
import { generateRecipeAction, refineRecipeAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { ChefHat, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RecipeDnaLoader } from "@/components/recipes/recipe-dna-loader";
import { CookMitraLogo } from "@/components/icons/cook-mitra-logo";

const SUCCESS_SOUND_URL = 'https://cdn.pixabay.com/audio/2021/08/04/audio_0625c1539c.mp3';

type RecipeState = {
  data: GenerateIndianRecipeOutput | null;
  error: string | null;
  loading: boolean;
  isRefining: boolean;
  lastIngredients: string[];
};

export default function RecipeGenerator() {
  const [recipeState, setRecipeState] = useState<RecipeState>({
    data: null,
    error: null,
    loading: false,
    isRefining: false,
    lastIngredients: [],
  });
  const { toast } = useToast();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        audioRef.current = new Audio(SUCCESS_SOUND_URL);
    }
  }, []);

  const handleGenerateRecipe = async (formData: FormData) => {
    const ingredientsString = formData.get('ingredients') as string || "";
    const parsedIngredients = ingredientsString.split(',').map(i => i.trim()).filter(Boolean);

    setRecipeState(prev => ({ 
      ...prev, 
      data: null, 
      error: null, 
      loading: true,
      lastIngredients: parsedIngredients
    }));
    
    const result = await generateRecipeAction(formData);

    if (result.success && result.data) {
      setRecipeState(prev => ({ ...prev, data: result.data, error: null, loading: false }));
      // Play success sound when recipe is generated
      if (audioRef.current) {
          audioRef.current.play().catch(() => {});
      }
    } else {
      setRecipeState(prev => ({ ...prev, data: null, error: result.error, loading: false }));
      toast({
        variant: "destructive",
        title: "Oh no! Something went wrong.",
        description: result.error,
      });
    }
  };

  const handleRefineRecipe = async (instruction: string) => {
    if (!recipeState.data) return;
    
    setRecipeState(prev => ({ ...prev, isRefining: true }));
    
    const result = await refineRecipeAction({
        currentRecipe: recipeState.data,
        tweakInstruction: instruction
    });

    if (result.success && result.data) {
        setRecipeState(prev => ({ ...prev, data: result.data, isRefining: false }));
        toast({ title: "Recipe Refined!", description: "Applied: " + instruction });
        if (audioRef.current) {
            audioRef.current.play().catch(() => {});
        }
    } else {
        setRecipeState(prev => ({ ...prev, isRefining: false }));
        toast({
            variant: "destructive",
            title: "Refinement Failed",
            description: result.error,
        });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[420px,1fr] gap-8 items-start">
      {/* Left Panel: Sticky Form Area */}
      <div className="lg:sticky lg:top-24">
          <RecipeGeneratorForm
              onSubmit={handleGenerateRecipe}
              isGenerating={recipeState.loading}
              hasGenerated={!!recipeState.data}
          />
      </div>

      {/* Right Panel: Scrollable Results Area */}
      <div className="min-w-0">
        {recipeState.loading && (
          <div className="pb-8 md:pb-12">
              <RecipeDnaLoader ingredients={recipeState.lastIngredients} />
          </div>
        )}
        
        {recipeState.data && !recipeState.loading && (
          <div className="animate-in fade-in slide-in-from-right-8 duration-700 pb-24">
              <RecipeDisplay 
                recipe={recipeState.data} 
              />
          </div>
        )}
        
        {!recipeState.data && !recipeState.loading && (
          <div className="flex flex-col items-center h-full min-h-[460px] pb-24">
            <Card className="flex items-center justify-center w-full py-16 sm:py-24 border-dashed border-2 border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30 rounded-[2.5rem] shadow-xs">
              <CardContent className="p-0">
                <div className="text-center space-y-6 px-6">
                    <div className="flex justify-center">
                        <div className="bg-[#F4A21A]/10 p-5 rounded-2xl text-primary flex items-center justify-center">
                           <ChefHat className="w-16 h-16 text-[#F4A21A]" />
                        </div>
                    </div>
                  <div className="space-y-2">
                    <h3 className="font-headline text-2xl sm:text-3xl font-semibold text-stone-900 dark:text-stone-100">Your Recipe Will Appear Here</h3>
                    <p className="text-stone-500 text-sm sm:text-base max-w-sm mx-auto font-normal">Select your ingredients or budget on the left to generate an instant recipe!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
