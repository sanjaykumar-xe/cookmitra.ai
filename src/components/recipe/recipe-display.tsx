'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Star, Users, Bookmark, ClipboardList, BadgeCheck, Download } from 'lucide-react';
import { MissingIngredients } from './missing-ingredients';
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { useUser, useFirestore } from '@/lib/firebase';
import { RupeeIcon } from '../icons/rupee-icon';
import { saveRecipe } from '@/lib/firebase/firestore/recipes';
import { generateRecipePDF } from '@/lib/pdf-export';
import { cn } from '@/lib/utils';

interface RecipeDisplayProps {
  recipe: any;
  isSaved?: boolean;
}

export function RecipeDisplay({ recipe, isSaved = false }: RecipeDisplayProps) {
  const { toast } = useToast();
  const { user } = useUser();
  const firestore = useFirestore();
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveRecipe = async () => {
    if (!user || !firestore) {
      toast({ title: "Login required to save recipes.", variant: 'destructive' });
      return;
    }
    setIsSaving(true);
    try {
      await saveRecipe(firestore, user.uid, recipe);
      toast({ title: "Recipe Saved!" });
    } finally { setIsSaving(false); }
  };

  const displayName = recipe.name || "Untitled Recipe";
  const displayTime = recipe.time || 0;
  const displayCost = recipe.cost || 0;
  const displayLevel = recipe.difficulty || 'Medium';
  const displayServings = recipe.servings || 2;

  const ingredients = recipe.ingredients || [];
  const steps = recipe.steps || [];

  return (
    <Card className="w-full shadow-2xl rounded-[3rem] glass-card overflow-hidden relative border-primary/20">
      <div className="h-2.5 bg-primary w-full shadow-[0_0_15px_rgba(244,162,26,0.3)]" />
      <CardHeader className="px-8 md:px-12 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="space-y-4 flex-1">
            <div className="flex items-center gap-2 text-primary uppercase tracking-[0.2em] text-[10px] font-black">
                <BadgeCheck className="h-4 w-4" /> 
                AI Crafted Recipe
            </div>
            <CardTitle className="font-headline text-4xl md:text-6xl tracking-tight">{displayName}</CardTitle>
            <div className="flex flex-wrap gap-6 text-sm font-bold text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> 
                {displayTime}m
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" /> 
                {displayLevel}
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" /> 
                {displayServings}
              </div>
              <div className="flex items-center gap-2 text-primary font-black">
                <RupeeIcon className="h-4 w-4" /> 
                ₹{displayCost}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleSaveRecipe} disabled={isSaving} className="rounded-full h-11 px-6 font-bold border-primary/20">
                <Bookmark className={cn("h-4 w-4 mr-2", isSaved && "fill-current")} /> 
                {isSaved ? 'Saved' : 'Save'}
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-11 w-11 border-primary/20" onClick={() => generateRecipePDF({
                ...recipe,
                dishName: displayName,
                cookingTime: String(displayTime),
                estimatedCost: displayCost,
                ingredients: ingredients.map((i: any) => ({ name: i.name, quantity: i.qty || i.quantity || '' })),
                instructions: steps
            } as any, (k) => k)}>
                <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8 md:p-12 space-y-16">
        <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
                <h3 className="font-headline text-3xl flex items-center gap-3">
                  <ClipboardList className="h-8 w-8 text-primary" /> 
                  Ingredients
                </h3>
                <div className="grid gap-2">
                    {ingredients.map((ing: any, i: number) => (
                        <div key={i} className="flex justify-between items-center p-4 bg-muted/30 dark:bg-white/5 rounded-2xl border border-primary/5 group hover:border-primary/20 transition-all">
                            <span className="font-bold text-base">{ing.name}</span>
                            <span className="text-xs font-black text-primary uppercase tracking-widest">{ing.qty || ing.quantity || ''}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-6">
                <h3 className="font-headline text-3xl">Shopping List</h3>
                <MissingIngredients 
                    missingIngredients={ingredients.map((i: any) => i.name)} 
                    userIngredients={[]} 
                />
            </div>
        </div>
        
        <div className="space-y-8">
            <h3 className="font-headline text-3xl">Steps to Cook</h3>
            <div className="grid gap-6">
                {steps.map((step: string, i: number) => (
                    <div key={i} className="flex gap-6 items-start group">
                        <div className="h-10 w-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-black text-lg shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                          {i + 1}
                        </div>
                        <p className="text-xl opacity-90 pt-1 leading-relaxed font-medium">
                          {step}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
