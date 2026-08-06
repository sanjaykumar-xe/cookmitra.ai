import { recipes as allRecipes } from '@/lib/recipes';
import { RecipePageClient } from './recipe-page-client';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const recipe = allRecipes.find(r => r.id === id);
  
  if (!recipe) {
    return {
      title: "Recipe Not Found",
    };
  }

  const description = `${recipe.description} · ${recipe.time} min · ${recipe.difficulty} · ₹${recipe.cost}`;

  return {
    title: recipe.name,
    description: description,
    openGraph: {
      title: `${recipe.name} | CookMitra AI`,
      description: description,
      images: [{ url: "/og-banner.png", width: 1200, height: 630, alt: recipe.name }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${recipe.name} | CookMitra AI`,
      description: description,
      images: ["/og-banner.png"],
    },
  };
}

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Use local source of truth
  const recipe = allRecipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="flex h-screen items-center justify-center text-muted-foreground font-medium">
        Recipe not found.
      </div>
    );
  }

  return <RecipePageClient recipe={recipe} />;
}
