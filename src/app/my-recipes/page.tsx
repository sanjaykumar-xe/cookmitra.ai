'use client';

import { useEffect, useState } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { collection, query, orderBy } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, ChefHat, Trash2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { RecipeCard } from '@/components/recipe/recipe-card';
import { motion } from 'framer-motion';
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
  const [isDeleting, setIsDeleting] = useState(false);
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
    setIsDeleting(true);
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
      setIsDeleting(false);
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
          {recipes.map((recipe: any, idx: number) => {
            return (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: (idx % 12) * 0.08, ease: "easeOut" }}
                className="relative group/card"
              >
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 z-30 h-9 w-9 rounded-full bg-background/80 backdrop-blur-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 border border-border/40 shadow-sm transition-all"
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
              </motion.div>
            );
          })}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="text-center py-20 border-dashed border-2 bg-card/40 backdrop-blur-md border-amber-500/20 rounded-[3rem] max-w-3xl mx-auto shadow-xl">
            <CardHeader className="p-8 pb-4">
              <div className="mx-auto bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 rounded-2xl p-6 w-24 h-24 flex items-center justify-center mb-6 shadow-sm">
                <ChefHat className="h-12 w-12 stroke-[1.75]" />
              </div>
              <CardTitle className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">Your Recipe Collection is Empty</CardTitle>
              <CardDescription className="text-sm sm:text-base font-medium text-stone-700 dark:text-stone-300 mt-3 max-w-md mx-auto leading-relaxed">
                You haven't saved any recipes yet. Browse our catalog of 934+ authentic regional dishes or generate a custom meal with AI!
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4 pb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="rounded-full px-8 h-12 text-sm font-bold shadow-md bg-[#F4A21A] hover:bg-[#E09015] text-white transition-all border-0">
                <Link href="/recipes">Browse 934+ Recipes</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 h-12 text-sm font-bold border-stone-300 dark:border-stone-700 hover:bg-amber-500/10 text-stone-800 dark:text-stone-200">
                <Link href="/ai-recipes">
                  <Sparkles className="mr-2 h-4 w-4 text-amber-500" />
                  Generate with AI
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
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

