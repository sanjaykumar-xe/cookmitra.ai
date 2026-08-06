'use client';

import { useState } from 'react';
import type { Recipe } from '@/lib/recipes';
import { RecipeDetails } from '@/components/recipe/recipe-details';
import { CommunitySection } from '@/components/recipe/community-section';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';

/**
 * Performance: Load CookMode dynamically as it's only needed once cooking starts.
 * Disabling SSR for CookMode as it relies on Web Speech API.
 */
const CookMode = dynamic(() => import('@/components/recipe/cook-mode').then(mod => mod.CookMode), {
    ssr: false,
    loading: () => (
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="font-bold text-muted-foreground">Preparing Kitchen...</p>
        </div>
    )
});

interface RecipePageClientProps {
  recipe: Recipe;
}

export function RecipePageClient({ recipe }: RecipePageClientProps) {
  const [isCooking, setIsCooking] = useState(false);

  const recipeName = recipe.name || 'Untitled Recipe';

  return (
    <div className="bg-background text-foreground">
        <div className="content-container py-8 md:py-12 px-4">
          {isCooking ? (
            <CookMode 
              recipe={recipe} 
              onExit={() => setIsCooking(false)} 
            />
          ) : (
            <>
              <RecipeDetails recipe={recipe} onStartCooking={() => setIsCooking(true)} />
              <div className="mt-20">
                <CommunitySection recipeId={recipe.id} recipeName={recipeName} />
              </div>
            </>
          )}
        </div>
    </div>
  );
}
