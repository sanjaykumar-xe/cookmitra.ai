'use client';

import { useState, useMemo, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Hash, Package } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ingredientCatalog, ingredientCategories, type CatalogIngredient, type IngredientCategory } from '@/lib/ingredients-catalog';
import { RupeeIcon } from '@/components/icons/rupee-icon';

function IngredientCard({ ingredient }: { ingredient: CatalogIngredient }) {
  return (
    <Card className="bg-card/80 border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-primary/10 hover:scale-105 h-full p-fluid-card">
      <CardHeader className="p-0 mb-4">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-fluid-body font-bold line-clamp-1">{ingredient.name}</CardTitle>
          <Badge variant="outline" className="text-[10px] uppercase tracking-tighter shrink-0">{ingredient.category}</Badge>
        </div>
        <p className="text-xs text-muted-foreground font-medium">{ingredient.unit}</p>
      </CardHeader>
      <CardContent className="p-0 mb-4">
        <Button className="w-full h-11 rounded-xl btn-primary-gradient shadow-md border-0 flex items-center justify-center gap-2 group transition-all active:scale-95">
            <span className="font-bold text-xs uppercase tracking-widest">Add</span>
            <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-lg text-sm font-black">
                <RupeeIcon className="h-3.5 w-3.5" />
                {ingredient.price}
            </div>
        </Button>
      </CardContent>
      <CardFooter className="p-0">
          <p className="text-[9px] font-medium uppercase tracking-widest text-muted-foreground text-center w-full opacity-60">To buy this ingredient, view a recipe and check ingredient details.</p>
      </CardFooter>
    </Card>
  );
}

const summaryCardColors = {
  blue: 'bg-chart-1/10 text-chart-1 border-chart-1/20',
  green: 'bg-chart-2/10 text-chart-2 border-chart-2/20',
  orange: 'bg-chart-3/10 text-chart-3 border-chart-3/20',
};

function SummaryCard({ icon, title, value, color }: { icon: React.ReactNode; title: string; value: React.ReactNode; color: keyof typeof summaryCardColors }) {
    return (
        <Card className={cn("p-4 flex items-center gap-4 border transition-all duration-300 rounded-2xl", summaryCardColors[color])}>
            <div className="text-3xl opacity-80 shrink-0">{icon}</div>
            <div className="min-w-0">
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest truncate">{title}</p>
                <p className="text-xl font-black truncate">{value}</p>
            </div>
        </Card>
    )
}

export default function IngredientsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<IngredientCategory>('All');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const groupedIngredients = useMemo(() => {
    const searchedIngredients = ingredientCatalog.filter(ingredient =>
      ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (activeCategory !== 'All') {
      const categoryIngredients = searchedIngredients.filter(
        ingredient => ingredient.category === activeCategory
      );
      return categoryIngredients.length > 0 ? { [activeCategory]: categoryIngredients } : {};
    }

    return searchedIngredients.reduce((acc, ingredient) => {
      const { category } = ingredient;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(ingredient);
      return acc;
    }, {} as Record<string, CatalogIngredient[]>);
  }, [searchTerm, activeCategory]);

  const totalIngredients = ingredientCatalog.length;
  const totalCategories = new Set(ingredientCatalog.map(i => i.category)).size;
  const avgPrice = Math.round(ingredientCatalog.reduce((acc, ing) => acc + ing.price, 0) / totalIngredients);

  if (!mounted) return null;

  return (
    <div className="content-container py-8 md:py-12 px-4">
      <div className="w-full pb-32">
        <div className="text-center mb-10">
          <h1 className="font-headline text-fluid-h1 font-medium text-primary tracking-tight">Ingredient Catalog</h1>
          <p className="mt-4 text-fluid-subtitle font-medium text-muted-foreground max-w-2xl mx-auto opacity-80">
            Browse our complete collection of ingredients with prices. Use recipe details to buy anything you need!
          </p>
        </div>

        <div className="w-full mb-12">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground opacity-50" />
            <Input
              placeholder="Search ingredients by name..."
              className="pl-10 h-12 text-fluid-body rounded-xl glass-card"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter className="h-5 w-5 text-muted-foreground mr-2 hidden md:block" />
            {ingredientCategories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={cn(
                  "rounded-full px-6 h-10 text-xs font-bold uppercase tracking-widest",
                  activeCategory === category && "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="space-y-16 w-full">
          {Object.keys(groupedIngredients).length > 0 ? (
            (Object.entries(groupedIngredients) as [IngredientCategory, CatalogIngredient[]][])
              .sort(([catA], [catB]) => ingredientCategories.indexOf(catA) - ingredientCategories.indexOf(catB))
              .map(([category, ingredients]) => (
                <section key={category}>
                  <div className="flex items-center gap-4 mb-8">
                      <h2 className="font-headline text-fluid-h2 font-medium tracking-tight">
                        {category}
                      </h2>
                      <div className="h-px flex-1 bg-border/60"></div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-fluid-grid">
                    {ingredients.map(ingredient => (
                      <IngredientCard key={ingredient.id} ingredient={ingredient} />
                    ))}
                  </div>
                </section>
              ))
          ) : (
            <div className="text-center py-24 glass-card border-dashed border-2 rounded-[3rem]">
                <p className="text-fluid-subtitle font-medium text-muted-foreground opacity-60">No results found.</p>
            </div>
          )}
        </div>
        
        <div className="fixed bottom-0 left-0 right-0 md:left-16 bg-background/80 backdrop-blur-md p-6 border-t z-40">
          <div className="content-container">
            <div className="grid grid-cols-3 gap-fluid-grid max-w-5xl mx-auto">
                <SummaryCard icon={<Hash />} title="Total Ingredients" value={totalIngredients.toString()} color="blue" />
                <SummaryCard icon={<Package />} title="Categories" value={totalCategories.toString()} color="green" />
                <SummaryCard icon={<RupeeIcon className="h-8 w-8" />} title="Avg Price" value={<>≈ <RupeeIcon className="inline h-5 w-5 -mt-1" />{avgPrice}</>} color="orange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
