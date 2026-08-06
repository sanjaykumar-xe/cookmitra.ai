'use client';

import { useEffect, useState } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { useRouter } from 'next/navigation';
import { collection, query, orderBy } from 'firebase/firestore';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, ChefHat, AlertTriangle, Trash2, Clock, BarChart2 } from 'lucide-react';
import Link from 'next/link';
import { RupeeIcon } from '@/components/icons/rupee-icon';
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
import { deleteRecipe } from '@/firebase/firestore/recipes';

export default function MyRecipesPage() {
  const { user, isUserLoading } = useUser();
  const [mounted, setMounted] = useState(false);
  const firestore = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  const [recipeToDelete, setRecipeToDelete] = useState<any | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isUserLoading) {
      if (!user) {
        router.push('/login');
      }
    }
  }, [user, isUserLoading, router, mounted]);

  const recipesQuery = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    const recipesRef = collection(firestore, `users/${user.uid}/recipes`);
    return query(recipesRef, orderBy('savedAt', 'desc'));
  }, [user, firestore]);

  const { data: recipes, isLoading: recipesLoading, error } = useCollection(recipesQuery);

  const handleDeleteRecipe = async () => {
    if (!recipeToDelete || !user || !firestore) return;

    setIsDeleting(true);
    try {
      await deleteRecipe(firestore, user.uid, recipeToDelete.id);
      const name = recipeToDelete.name || "Recipe";
      toast({
        title: "Recipe Removed",
        description: `"${name}" has been removed from your collection.`,
      });
    } catch (err) {
      toast({
        variant: 'destructive',
        title: "Error",
        description: "Could not remove recipe. Please try again.",
      });
      console.error(err);
    } finally {
      setIsDeleting(false);
      setRecipeToDelete(null);
    }
  };

  if (!mounted || isUserLoading || recipesLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
     return (
        <div className="content-container py-8 md:py-12 px-4">
            <h1 className="font-headline text-fluid-h1 mb-8 text-primary font-medium tracking-tight">My Saved Recipes</h1>
            <Card className="text-center py-24 border-dashed border-2 bg-card/30 rounded-[3rem]">
                <CardHeader>
                    <div className="mx-auto bg-destructive/10 rounded-[2rem] h-20 w-20 flex items-center justify-center mb-6">
                        <AlertTriangle className="h-10 w-10 text-destructive opacity-40" />
                    </div>
                    <CardTitle className="font-headline text-fluid-h2 text-destructive font-medium">Error Loading Recipes</CardTitle>
                    <CardDescription className="text-fluid-body mt-2">{error.message}</CardDescription>
                </CardHeader>
            </Card>
        </div>
     )
  }

  return (
    <div className="content-container py-8 md:py-12 px-4">
      <h1 className="font-headline text-fluid-h1 mb-10 text-primary font-medium tracking-tight">My Saved Recipes</h1>

      {recipes && recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-fluid-grid">
          {recipes.map((recipe: any) => {
            const displayName = recipe.name || "Untitled Recipe";
            const rawTime = recipe.time || 0;
            const displayTime = typeof rawTime === 'string' ? parseInt(rawTime) : rawTime;
            const displayCost = recipe.cost || 0;
            const displayLevel = recipe.difficulty || 'Medium';

            return (
                <Link href={`/my-recipes/${recipe.id}`} key={recipe.id} className="block h-full">
                <Card className="flex flex-col h-full glass-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.03] p-fluid-card overflow-hidden rounded-[2rem]">
                    <CardHeader className="p-0 mb-6">
                    <div className="flex justify-between items-start gap-4">
                        <div className="flex-1 min-w-0">
                            <CardTitle className="font-headline text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors tracking-tight">{displayName}</CardTitle>
                            <CardDescription className="text-[10px] font-black uppercase tracking-widest opacity-60 mt-2 flex items-center gap-3">
                               <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {displayTime}m</span>
                               <span className="flex items-center gap-1"><BarChart2 className="h-3 w-3" /> {displayLevel}</span>
                            </CardDescription>
                        </div>
                        <Button 
                            variant="ghost" 
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 shrink-0"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setRecipeToDelete(recipe);
                            }}
                        >
                            <Trash2 className="h-4 w-4" />
                        </Button>
                    </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-1">
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed line-clamp-3 opacity-80 mb-6">
                        {recipe.description}
                    </p>
                    <div className="flex items-center gap-1 text-primary font-black text-sm pt-4 border-t border-primary/5">
                        <RupeeIcon className="h-4 w-4" />
                        {displayCost}
                    </div>
                    </CardContent>
                </Card>
                </Link>
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
            <Button asChild className="rounded-full px-10 h-14 text-base font-black uppercase tracking-widest shadow-xl shadow-primary/20">
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
