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
    <Card className="bg-card/80 border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] h-full p-3 sm:p-4 rounded-2xl sm:rounded-3xl">
      <CardHeader className="p-0 mb-3">
        <div className="flex justify-between items-start gap-1.5">
          <CardTitle className="text-xs sm:text-base font-bold line-clamp-1">{ingredient.name}</CardTitle>
          <Badge variant="outline" className="text-[9px] sm:text-[10px] uppercase tracking-wider shrink-0 px-1.5 py-0.5">{ingredient.category}</Badge>
        </div>
        <p className="text-[11px] sm:text-xs text-muted-foreground font-medium mt-0.5">{ingredient.unit}</p>
      </CardHeader>
      <CardContent className="p-0 mb-3">
        <Button className="w-full h-10 min-h-[40px] rounded-xl btn-primary-gradient shadow-sm border-0 flex items-center justify-center gap-1.5 group transition-all active:scale-95 text-xs font-bold uppercase tracking-wider">
            <span>Add</span>
            <div className="flex items-center gap-0.5 bg-white/20 px-2 py-0.5 rounded-md text-xs font-black">
                <RupeeIcon className="h-3 w-3" />
                {ingredient.price}
            </div>
        </Button>
      </CardContent>
      <CardFooter className="p-0">
          <p className="text-[9px] font-medium text-muted-foreground text-center w-full opacity-60 line-clamp-1">View recipe to buy</p>
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
        <Card className={cn("p-2.5 sm:p-4 flex items-center gap-2 sm:gap-4 border transition-all duration-300 rounded-2xl", summaryCardColors[color])}>
            <div className="text-xl sm:text-3xl opacity-80 shrink-0">{icon}</div>
            <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-wider truncate">{title}</p>
                <p className="text-sm sm:text-xl font-black truncate">{value}</p>
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
          <h1 className="font-headline text-fluid-h1 font-bold tracking-tight text-stone-900 dark:text-stone-100">Ingredient Catalog</h1>
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
          <div className="w-full overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex flex-nowrap items-center md:flex-wrap md:justify-center gap-2 min-w-max md:min-w-0">
              <Filter className="h-5 w-5 text-muted-foreground mr-1 hidden md:block" />
              {ingredientCategories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  className={cn(
                    "rounded-full px-5 h-10 min-h-[40px] text-xs font-bold uppercase tracking-wider shrink-0 transition-all active:scale-95 whitespace-nowrap",
                    activeCategory === category && "bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-md shadow-amber-500/20 border-0"
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="space-y-12 sm:space-y-16 w-full">
          {Object.keys(groupedIngredients).length > 0 ? (
            (Object.entries(groupedIngredients) as [IngredientCategory, CatalogIngredient[]][])
              .sort(([catA], [catB]) => ingredientCategories.indexOf(catA) - ingredientCategories.indexOf(catB))
              .map(([category, ingredients]) => (
                <section key={category}>
                  <div className="flex items-center gap-4 mb-6 sm:mb-8">
                      <h2 className="font-headline text-fluid-h2 font-medium tracking-tight">
                        {category}
                      </h2>
                      <div className="h-px flex-1 bg-border/60"></div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-fluid-grid">
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
        
        <div className="fixed bottom-0 left-0 right-0 md:left-16 bg-background/90 backdrop-blur-md p-3 sm:p-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] border-t z-40">
          <div className="content-container">
            <div className="grid grid-cols-3 gap-2 sm:gap-fluid-grid max-w-5xl mx-auto">
                <SummaryCard icon={<Hash className="h-5 w-5 sm:h-7 sm:w-7" />} title="Total Items" value={totalIngredients.toString()} color="blue" />
                <SummaryCard icon={<Package className="h-5 w-5 sm:h-7 sm:w-7" />} title="Categories" value={totalCategories.toString()} color="green" />
                <SummaryCard icon={<RupeeIcon className="h-5 w-5 sm:h-7 sm:w-7" />} title="Avg Price" value={<>≈ <RupeeIcon className="inline h-3.5 w-3.5 sm:h-4 sm:w-4 -mt-0.5" />{avgPrice}</>} color="orange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
