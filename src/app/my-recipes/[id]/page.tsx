'use client';

import { useEffect, useState } from 'react';
import { useUser, useFirestore } from '@/lib/firebase';
import { useRouter, useParams } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, AlertTriangle } from 'lucide-react';
import type { GenerateIndianRecipeOutput } from '@/ai/schemas/recipe-schemas';
import { RecipeDisplay } from '@/components/recipe/recipe-display';
import { useLanguage } from '@/context/language-context';

type SavedRecipe = GenerateIndianRecipeOutput & { id: string };

export default function SavedRecipePage() {
  const { user, isUserLoading } = useUser();
  const [mounted, setMounted] = useState(false);
  const firestore = useFirestore();
  const router = useRouter();
  const params = useParams();
  const { t } = useLanguage();

  const [recipe, setRecipe] = useState<SavedRecipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const recipeId = params.id as string;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isUserLoading) {
      if (!user) {
        router.push('/login');
      } else if (user.providerData.some(p => p.providerId === 'password') && !user.emailVerified) {
        router.push('/verify-email');
      }
    }
  }, [user, isUserLoading, router, mounted]);

  useEffect(() => {
    if (!mounted || isUserLoading) return;
    if (!user) {
      return;
    }
    if (firestore && recipeId) {
      const fetchRecipe = async () => {
        setLoading(true);
        setError(null);
        try {
          const recipeRef = doc(firestore, `users/${user.uid}/recipes`, recipeId);
          const docSnap = await getDoc(recipeRef);

          if (docSnap.exists()) {
            setRecipe({ id: docSnap.id, ...docSnap.data() } as SavedRecipe);
          } else {
            setError(t('myRecipes.detail.notFound'));
          }
        } catch (err) {
          console.error(err);
          setError(t('myRecipes.detail.fetchError'));
        } finally {
          setLoading(false);
        }
      };
      fetchRecipe();
    }
  }, [user, isUserLoading, router, firestore, recipeId, t, mounted]);

  const renderContent = () => {
    if (!mounted || loading || isUserLoading) {
      return (
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      );
    }

    if (error) {
      return (
        <Card className="text-center py-16 border-dashed border-destructive">
          <CardHeader>
            <div className="mx-auto bg-destructive/10 rounded-full h-16 w-16 flex items-center justify-center mb-4">
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
            <CardTitle className="font-headline text-destructive">{t('myRecipes.detail.errorTitle')}</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
        </Card>
      );
    }

    if (recipe) {
      return <RecipeDisplay recipe={recipe} isSaved={true} />;
    }

    return null;
  };

  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="max-w-4xl mx-auto">{renderContent()}</div>
    </div>
  );
}
