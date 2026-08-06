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
          <div className="flex flex-col items-center h-full min-h-[400px] pb-24">
            <Card className="flex items-center justify-center w-full max-w-3xl py-20 border-dashed border-2 bg-card/30 border-border/60 rounded-[3rem]">
              <CardContent className="p-0">
                <div className="text-center text-muted-foreground space-y-6">
                    <div className="flex justify-center">
                        <div className="bg-muted/50 rounded-[2.5rem] p-8 relative">
                           <ChefHat className="h-20 w-20 text-muted-foreground opacity-40" />
                           <Sparkles className="h-8 w-8 text-primary absolute -top-2 -right-2 animate-pulse" />
                        </div>
                    </div>
                  <div className="space-y-2">
                    <h3 className="font-headline text-3xl font-medium text-foreground/80">Your recipe will appear here</h3>
                    <p className="text-lg max-w-xs mx-auto font-medium">Fill out the form to get started!</p>
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
