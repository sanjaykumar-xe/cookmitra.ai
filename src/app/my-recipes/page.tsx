'use client';

import { useEffect, useState } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { collection, query, orderBy } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, ChefHat, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { RecipeCard } from '@/components/recipe/recipe-card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast';
import { deleteRecipe } from '@/lib/firebase/firestore/recipes';

export default function MyRecipesPage() {
  const { user, isUserLoading } = useUser();
  const [mounted, setMounted] = useState(false);
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();

  const [recipeToDelete, setRecipeToDelete] = useState<any | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router, mounted]);

  const savedRecipesQuery = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return query(
      collection(firestore, `users/${user.uid}/recipes`),
      orderBy('savedAt', 'desc')
    );
  }, [user, firestore]);

  const { data: recipes, isLoading: recipesLoading } = useCollection(savedRecipesQuery);

  const handleDeleteRecipe = async () => {
    if (!recipeToDelete || !user || !firestore) return;
    try {
      await deleteRecipe(firestore, user.uid, recipeToDelete.id);
      toast({
        title: "Recipe Removed",
        description: `"${recipeToDelete.name || 'Recipe'}" has been deleted from your saved list.`
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: "Error",
        description: "Failed to delete recipe. Please try again."
      });
    } finally {
      setRecipeToDelete(null);
    }
  };

  if (!mounted || isUserLoading || !user) {
     return (
       <div className="flex h-screen items-center justify-center">
         <Loader2 className="h-12 w-12 animate-spin text-primary" />
       </div>
     )
  }

  return (
    <div className="content-container py-8 md:py-12 px-4">
      <h1 className="font-headline text-fluid-h1 mb-10 text-primary font-medium tracking-tight">My Saved Recipes</h1>

      {recipes && recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-fluid-grid">
          {recipes.map((recipe: any) => {
            return (
              <div key={recipe.id} className="relative group/card">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 z-30 h-9 w-9 rounded-full bg-background/80 backdrop-blur-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 border border-border/40 shadow-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setRecipeToDelete(recipe);
                  }}
                  aria-label="Delete recipe"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
        </div>
      ) : (
        <Card className="text-center py-24 border-dashed border-2 bg-card/30 rounded-[3rem] max-w-4xl mx-auto">
          <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-[2.5rem] h-24 w-24 flex items-center justify-center mb-6">
              <ChefHat className="h-12 w-12 text-primary opacity-40" />
            </div>
            <CardTitle className="font-headline text-3xl font-medium tracking-tight">No Recipes Saved Yet</CardTitle>
            <CardDescription className="text-fluid-body mt-2 max-w-xs mx-auto">Start by generating an AI recipe or browsing our library!</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Button asChild className="rounded-full px-8 py-3 text-base font-medium shadow-md bg-[#F4A21A] hover:bg-[#E09015] text-white transition-all border-0">
              <Link href="/recipes">Browse Library</Link>
            </Button>
          </CardContent>
        </Card>
      )}

      <AlertDialog open={!!recipeToDelete} onOpenChange={(open) => !open && setRecipeToDelete(null)}>
        <AlertDialogContent className="rounded-[2.5rem] p-10 border-primary/10">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-headline text-3xl">Remove Recipe?</AlertDialogTitle>
            <AlertDialogDescription className="text-lg leading-relaxed pt-2">
              This will remove <strong>{recipeToDelete?.name || 'this recipe'}</strong> from your personal collection.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-8 gap-4">
            <AlertDialogCancel className="rounded-full h-12 px-8 font-bold" onClick={() => setRecipeToDelete(null)}>Keep Recipe</AlertDialogCancel>
            <AlertDialogAction className="rounded-full h-12 px-8 font-bold bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={handleDeleteRecipe} disabled={isDeleting}>
              {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Remove Now
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
