'use client';

import { useState, useEffect, useMemo } from "react";
import { useUser } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { recipes as allRecipes } from "@/lib/recipes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
    Search, 
    Plus, 
    X, 
    Loader2, 
    Sofa, 
    Dumbbell, 
    PartyPopper, 
    Frown, 
    IceCream2, 
    Snowflake, 
    Flame,
    MapPin,
    Map as MapIcon,
    CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { RecipeCard } from "@/components/recipe/recipe-card";
import { IndiaRegionMap } from "@/components/recipes/india-region-map";

const moods = [
    { name: 'Lazy', icon: <Sofa className="h-8 w-8" /> },
    { name: 'Gym', icon: <Dumbbell className="h-8 w-8" /> },
    { name: 'Party', icon: <PartyPopper className="h-8 w-8" /> },
    { name: 'Sad', icon: <Frown className="h-8 w-8" /> },
    { name: 'Craving', icon: <IceCream2 className="h-8 w-8" /> },
    { name: 'Cold Weather', icon: <Snowflake className="h-8 w-8" /> },
    { name: 'Spicy Mood', icon: <Flame className="h-8 w-8" /> },
];

export default function RecipesExplorerPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  const [ingredientInput, setIngredientInput] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [searchIngredients, setSearchIngredients] = useState<string[]>([]);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedRegionTag, setSelectedRegionTag] = useState<string | null>(null);
  const [selectedStateName, setSelectedStateName] = useState<string | null>(null);
  const [displayLimit, setDisplayLimit] = useState(24);

  useEffect(() => {
    if (!isUserLoading && !user) { router.push('/login'); }
  }, [user, isUserLoading, router]);

  useEffect(() => { 
    setDisplayLimit(24); 
  }, [selectedMood, searchIngredients, selectedRegionTag]);

  const handleAddIngredient = (ing: string) => {
    const newIngredient = ing.trim().toLowerCase();
    if (newIngredient && !selectedIngredients.includes(newIngredient)) {
      setSelectedIngredients([...selectedIngredients, newIngredient]);
    }
    setIngredientInput("");
  };

  const handleRemoveIngredient = (ing: string) => { 
    setSelectedIngredients(selectedIngredients.filter(i => i !== ing)); 
  };

  const allFilteredRecipes = useMemo(() => {
    let recipes = [...allRecipes];

    if (selectedRegionTag) {
        recipes = recipes.filter(r => r.tags?.includes(selectedRegionTag));
    }

    if (selectedMood) {
      switch (selectedMood) {
        case 'Lazy': 
          recipes = recipes.filter(r => r.difficulty === 'Easy' || r.time < 30); 
          break;
        case 'Gym': 
          recipes = recipes.filter(r => r.healthTags?.includes('weight-management')); 
          break;
        case 'Party': 
          recipes = recipes.filter(r => r.tags?.includes('Snacks') || r.tags?.includes('Dessert') || r.tags?.includes('Party')); 
          break;
        case 'Spicy Mood': 
          recipes = recipes.filter(r => r.tags?.includes('Spicy')); 
          break;
        case 'Sad': 
          recipes = recipes.filter(r => r.tags?.includes('Comfort Food') || r.tags?.includes('Dessert')); 
          break;
        case 'Craving': 
          recipes = recipes.filter(r => (r.popularity || 0) > 0.85 || r.tags?.includes('Street Food')); 
          break;
        case 'Cold Weather': 
          recipes = recipes.filter(r => r.tags?.includes('Soup') || r.tags?.includes('Hot Beverages') || r.tags?.includes('Spicy')); 
          break;
      }
    }

    if (searchIngredients.length > 0) {
      recipes = recipes.filter(recipe =>
        searchIngredients.every(selIng =>
          recipe.ingredients.some(recIng => recIng.name.toLowerCase().includes(selIng))
        )
      );
    }

    return recipes.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  }, [selectedMood, searchIngredients, selectedRegionTag]);

  const recipesToDisplay = useMemo(() => allFilteredRecipes.slice(0, displayLimit), [allFilteredRecipes, displayLimit]);

  if (isUserLoading || !user) {
    return <div className="flex h-screen items-center justify-center"><Loader2 className="h-12 w-12 animate-spin text-primary" /></div>;
  }

  return (
    <div className="content-container py-8 md:py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
        <h1 className="font-headline text-fluid-h1 font-bold text-primary tracking-tight">Indian Recipes Explorer</h1>
        <p className="mt-4 text-fluid-subtitle font-medium text-muted-foreground max-w-2xl mx-auto opacity-80">
          Discover hand-curated Indian recipes with detailed instructions and pricing.
        </p>
      </div>

      {/* Region Map Section - RESTORED */}
      <div className="mb-16 space-y-8 animate-in fade-in slide-in-from-top-4 duration-1000 delay-100">
        <div className="text-center">
            <h2 className="font-headline text-2xl font-medium mb-2 flex items-center justify-center gap-2">
                <MapIcon className="h-6 w-6 text-primary" />
                Explore by Region
            </h2>
            <p className="text-sm text-muted-foreground italic opacity-70">Click a state to see regional specialties</p>
        </div>
        
        <IndiaRegionMap 
            onRegionSelect={(tag, state) => {
                if (selectedStateName === state) {
                    setSelectedRegionTag(null);
                    setSelectedStateName(null);
                } else {
                    setSelectedRegionTag(tag);
                    setSelectedStateName(state);
                }
            }} 
            selectedStateName={selectedStateName}
        />

        <AnimatePresence>
            {selectedStateName && (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex justify-center"
                >
                    <Card className="bg-primary/5 border-primary/20 rounded-2xl p-4 flex items-center gap-4 shadow-lg">
                        <div className="bg-primary/10 p-2 rounded-lg">
                            <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Selected Region</p>
                            <p className="font-bold text-lg leading-none">{selectedStateName}</p>
                        </div>
                        <div className="h-10 w-px bg-primary/10 mx-2" />
                        <div className="text-center min-w-[80px]">
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Matches</p>
                            <p className="font-black text-xl text-primary leading-none">{allFilteredRecipes.length}</p>
                        </div>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => { setSelectedRegionTag(null); setSelectedStateName(null); }}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </Card>
                </motion.div>
            )}
        </AnimatePresence>
      </div>

      {/* Mood Selector */}
      <div className="text-center mb-16">
        <h2 className="font-headline text-2xl font-medium mb-8">What&apos;s Your Mood Today?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {moods.map((mood) => {
                const isSelected = selectedMood === mood.name;
                return (
                    <Card
                        key={mood.name}
                        onClick={() => setSelectedMood(isSelected ? null : mood.name)}
                        className={cn(
                            "p-6 text-center cursor-pointer transition-all rounded-3xl border-2",
                            isSelected 
                                ? "border-primary bg-primary/10 shadow-inner scale-105" 
                                : "border-border/40 hover:border-primary/40 bg-card/50"
                        )}
                    >
                        <div className={cn(
                            "mb-3 h-12 w-12 mx-auto rounded-2xl flex items-center justify-center transition-colors", 
                            isSelected ? "bg-primary text-primary-foreground shadow-lg" : "bg-primary/10 text-primary"
                        )}>
                            {mood.icon}
                        </div>
                        <p className={cn("font-bold text-sm", isSelected ? "text-primary" : "text-muted-foreground")}>{mood.name}</p>
                    </Card>
                );
            })}
        </div>
      </div>

      {/* Search by Ingredients */}
      <Card className="w-full mb-12 p-8 rounded-[2.5rem] glass-card shadow-2xl border-primary/5">
        <div className="space-y-2 mb-8">
            <h2 className="font-headline text-2xl font-medium">Find Recipes by Ingredients</h2>
            <p className="text-sm text-muted-foreground font-medium italic opacity-70">
                Tell us what&apos;s in your kitchen — we&apos;ll find recipes that use it.
            </p>
        </div>

        <div className="relative">
          <Input 
            placeholder="Add an ingredient (e.g. Tomato) and press Enter or +..."
            className="pr-12 h-16 rounded-2xl text-lg pl-6 border-2 focus:border-primary/50" 
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddIngredient(ingredientInput)}
          />
          <Button 
            variant="ghost"
            size="icon" 
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 text-primary hover:bg-primary/10 disabled:opacity-30" 
            onClick={() => handleAddIngredient(ingredientInput)}
            disabled={!ingredientInput.trim()}
          >
            <Plus className="h-6 w-6" />
          </Button>
        </div>

        {/* Ingredient Chips */}
        {selectedIngredients.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 min-h-[40px]">
                {selectedIngredients.map(ing => (
                    <Badge 
                        key={ing} 
                        variant="secondary" 
                        className="pl-3 pr-1 py-1.5 h-8 rounded-full bg-primary/10 text-primary border-primary/20 flex items-center gap-1.5 group hover:bg-primary/20 transition-all"
                    >
                        <span className="font-bold text-xs uppercase tracking-widest">{ing}</span>
                        <button 
                            onClick={() => handleRemoveIngredient(ing)}
                            className="p-0.5 rounded-full hover:bg-primary/30 transition-colors"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </Badge>
                ))}
            </div>
        )}

        <Button 
            className="w-full h-16 rounded-2xl text-xl font-black tracking-widest uppercase shadow-2xl mt-8 disabled:opacity-100 disabled:bg-zinc-100 dark:disabled:bg-zinc-800 disabled:text-zinc-400 dark:disabled:text-zinc-600 disabled:bg-none disabled:shadow-none disabled:scale-100" 
            onClick={() => setSearchIngredients([...selectedIngredients])}
            disabled={selectedIngredients.length === 0}
        >
          <Search className="mr-3 h-6 w-6" /> Search Recipes
        </Button>
      </Card>

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {recipesToDisplay.map((recipe, idx) => (
            <motion.div key={recipe.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (idx % 24) * 0.03 }}>
                <RecipeCard recipe={recipe} />
            </motion.div>
        ))}
      </div>

      {allFilteredRecipes.length === 0 && (
          <div className="text-center py-32 border-4 border-dashed rounded-[3rem] border-border/20">
            <div className="bg-muted/10 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-12 w-12 text-muted-foreground opacity-30" />
            </div>
            <h3 className="text-2xl font-headline font-medium text-muted-foreground">No matching recipes found</h3>
            <p className="text-muted-foreground mt-2">Try different ingredients or clear your filters.</p>
            {(selectedMood || searchIngredients.length > 0 || selectedRegionTag) && (
                <Button 
                    variant="link" 
                    className="mt-4 text-primary font-bold"
                    onClick={() => { 
                        setSelectedMood(null); 
                        setSearchIngredients([]); 
                        setSelectedIngredients([]); 
                        setSelectedRegionTag(null);
                        setSelectedStateName(null);
                    }}
                >
                    Clear All Filters
                </Button>
            )}
          </div>
      )}

      {allFilteredRecipes.length > displayLimit && (
          <div className="mt-20 flex flex-col items-center gap-6 pb-24">
              <p className="text-sm font-medium text-muted-foreground italic">Showing {displayLimit} of {allFilteredRecipes.length} recipes</p>
              <Button variant="outline" size="lg" className="rounded-full px-12 h-16 border-2 border-primary/20 text-primary hover:bg-primary/5 shadow-xl transition-all" onClick={() => setDisplayLimit(prev => prev + 24)}>
                Load More Recipes
              </Button>
          </div>
      )}
    </div>
  );
}
