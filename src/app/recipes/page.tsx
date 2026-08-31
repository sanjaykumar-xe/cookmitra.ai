'use client';

import { useState, useEffect, useMemo, Suspense } from "react";
import { useUser } from '@/lib/firebase';
import { useRouter, useSearchParams } from 'next/navigation';
import { recipes as allRecipes } from "@/lib/recipes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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
    ChevronDown,
    ChevronUp,
    SlidersHorizontal,
    ArrowUpDown,
    Check,
    RotateCcw,
    Clock,
    Banknote,
    ArrowDownAZ,
    BarChart2
} from "lucide-react";
import { 
    IconFlame, 
    IconSoup, 
    IconSalad, 
    IconToolsKitchen,
    IconToolsKitchen2, 
    IconMeat,
    IconBowl, 
    IconBread, 
    IconCookie, 
    IconCake, 
    IconCup, 
    IconPepper 
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { RecipeCard } from "@/components/recipe/recipe-card";
import { SLUG_TO_STATE_MAP } from "@/components/recipes/india-region-map";
import type { MenuCategory } from "@/lib/recipes/types";

const moods = [
    { name: 'Lazy', icon: <Sofa className="h-7 w-7" />, color: 'hover:border-blue-500/50 hover:bg-blue-500/5 hover:text-blue-600 dark:hover:text-blue-400', active: 'bg-blue-500 text-white border-blue-500 shadow-md shadow-blue-500/20' },
    { name: 'Gym', icon: <Dumbbell className="h-7 w-7" />, color: 'hover:border-emerald-500/50 hover:bg-emerald-500/5 hover:text-emerald-600 dark:hover:text-emerald-400', active: 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/20' },
    { name: 'Party', icon: <PartyPopper className="h-7 w-7" />, color: 'hover:border-purple-500/50 hover:bg-purple-500/5 hover:text-purple-600 dark:hover:text-purple-400', active: 'bg-purple-500 text-white border-purple-500 shadow-md shadow-purple-500/20' },
    { name: 'Sad', icon: <Frown className="h-7 w-7" />, color: 'hover:border-indigo-500/50 hover:bg-indigo-500/5 hover:text-indigo-600 dark:hover:text-indigo-400', active: 'bg-indigo-500 text-white border-indigo-500 shadow-md shadow-indigo-500/20' },
    { name: 'Craving', icon: <IceCream2 className="h-7 w-7" />, color: 'hover:border-amber-500/50 hover:bg-amber-500/5 hover:text-amber-600 dark:hover:text-amber-400', active: 'bg-[#F4A21A] text-white border-amber-500 shadow-md shadow-amber-500/20' },
    { name: 'Cold Weather', icon: <Snowflake className="h-7 w-7" />, color: 'hover:border-sky-500/50 hover:bg-sky-500/5 hover:text-sky-600 dark:hover:text-sky-400', active: 'bg-sky-500 text-white border-sky-500 shadow-md shadow-sky-500/20' },
    { name: 'Spicy Mood', icon: <Flame className="h-7 w-7" />, color: 'hover:border-rose-500/50 hover:bg-rose-500/5 hover:text-rose-600 dark:hover:text-rose-400', active: 'bg-rose-500 text-white border-rose-500 shadow-md shadow-rose-500/20' },
];

const topCourseCategories: { name: MenuCategory; icon: React.ReactNode }[] = [
    { name: 'Breakfast & Tiffin', icon: <IconToolsKitchen className="h-7 w-7" /> },
    { name: 'Curries & Gravies', icon: <IconSoup className="h-7 w-7" /> },
    { name: 'Breads', icon: <IconBread className="h-7 w-7" /> },
    { name: 'Snacks & Street Food', icon: <IconCookie className="h-7 w-7" /> },
    { name: 'Rice & Biryani', icon: <IconBowl className="h-7 w-7" /> },
    { name: 'Desserts & Sweets', icon: <IconCake className="h-7 w-7" /> },
];

const remainingCourseCategories: { name: MenuCategory; icon: React.ReactNode }[] = [
    { name: 'Starters & Appetizers', icon: <IconFlame className="h-7 w-7" /> },
    { name: 'Soups', icon: <IconSoup className="h-7 w-7" /> },
    { name: 'Salads', icon: <IconSalad className="h-7 w-7" /> },
    { name: 'Dry & Stir-Fried', icon: <IconToolsKitchen2 className="h-7 w-7" /> },
    { name: 'Protein Specialties', icon: <IconMeat className="h-7 w-7" /> },
    { name: 'Beverages', icon: <IconCup className="h-7 w-7" /> },
    { name: 'Sides & Accompaniments', icon: <IconPepper className="h-7 w-7" /> },
];

const sortOptions: { value: string; label: string; icon: React.ReactNode }[] = [
  { value: 'popularity', label: 'Popularity (High to Low)', icon: <Flame className="h-4 w-4 text-amber-500 shrink-0" /> },
  { value: 'time_asc', label: 'Cooking Time (Quickest)', icon: <Clock className="h-4 w-4 text-sky-500 shrink-0" /> },
  { value: 'time_desc', label: 'Cooking Time (Longest)', icon: <Clock className="h-4 w-4 text-indigo-500 shrink-0" /> },
  { value: 'cost_asc', label: 'Cost (Lowest First)', icon: <Banknote className="h-4 w-4 text-emerald-500 shrink-0" /> },
  { value: 'cost_desc', label: 'Cost (Highest First)', icon: <Banknote className="h-4 w-4 text-purple-500 shrink-0" /> },
  { value: 'name_asc', label: 'Name (A to Z)', icon: <ArrowDownAZ className="h-4 w-4 text-stone-500 shrink-0" /> },
];

function RecipesExplorerContent() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [ingredientInput, setIngredientInput] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [searchIngredients, setSearchIngredients] = useState<string[]>([]);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | null>(null);
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [selectedRegionTag, setSelectedRegionTag] = useState<string | null>(null);
  const [selectedStateName, setSelectedStateName] = useState<string | null>(null);
  const [displayLimit, setDisplayLimit] = useState(24);

  const [selectedDiet, setSelectedDiet] = useState<'All' | 'Vegetarian' | 'Non-Vegetarian'>('All');
  const [selectedMaxTime, setSelectedMaxTime] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedMaxCost, setSelectedMaxCost] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Sync state & quick filters from URL query params (?state=, ?maxTime=, ?difficulty=, ?search=)
  const stateSlug = searchParams.get('state');
  const maxTimeParam = searchParams.get('maxTime');
  const difficultyParam = searchParams.get('difficulty');
  const searchQueryParam = searchParams.get('q') || searchParams.get('search') || searchParams.get('query');

  useEffect(() => {
    if (searchQueryParam) {
      const q = searchQueryParam.toLowerCase().trim();
      if (q && !searchIngredients.includes(q)) {
        setSearchIngredients([q]);
        setSelectedIngredients([q]);
      }
    }
  }, [searchQueryParam]);

  useEffect(() => {
    if (stateSlug) {
      const slug = stateSlug.toLowerCase().trim();
      const cfg = SLUG_TO_STATE_MAP[slug];
      if (cfg) {
        setSelectedRegionTag(cfg.tag);
        setSelectedStateName(cfg.name);
      } else {
        const formatted = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        setSelectedRegionTag(formatted);
        setSelectedStateName(formatted);
      }
    }

    if (maxTimeParam) {
      const parsedTime = parseInt(maxTimeParam, 10);
      if (!isNaN(parsedTime)) {
        setSelectedMaxTime(parsedTime);
      }
    }

    if (difficultyParam) {
      const diff = difficultyParam.toLowerCase().trim();
      if (diff === 'easy') setSelectedDifficulty('Easy');
      else if (diff === 'medium') setSelectedDifficulty('Medium');
      else if (diff === 'hard') setSelectedDifficulty('Hard');
    }
  }, [stateSlug, maxTimeParam, difficultyParam]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allRecipes.forEach(r => {
      if (r.menuCategory) {
        counts[r.menuCategory] = (counts[r.menuCategory] || 0) + 1;
      }
    });
    return counts;
  }, []);

  useEffect(() => {
    if (!isUserLoading && !user) { router.push('/login'); }
  }, [user, isUserLoading, router]);

  useEffect(() => { 
    setDisplayLimit(24); 
  }, [selectedMood, selectedCategory, searchIngredients, selectedRegionTag, selectedDiet, selectedMaxTime, selectedDifficulty, selectedMaxCost, sortBy]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedDiet !== 'All') count++;
    if (selectedMaxTime !== null) count++;
    if (selectedDifficulty !== 'All') count++;
    if (selectedMaxCost !== null) count++;
    return count;
  }, [selectedDiet, selectedMaxTime, selectedDifficulty, selectedMaxCost]);

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

  const scrollToResults = () => {
    setTimeout(() => {
      const resultsEl = document.getElementById('recipe-results-grid');
      if (resultsEl) {
        resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleCategorySelect = (catName: MenuCategory) => {
    setSelectedCategory(prev => (prev === catName ? null : catName));
    scrollToResults();
  };

  const handleMoodSelect = (moodName: string) => {
    setSelectedMood(prev => (prev === moodName ? null : moodName));
    scrollToResults();
  };

  const resetAllFilters = () => {
    setSelectedMood(null);
    setSelectedCategory(null);
    setSelectedRegionTag(null);
    setSelectedStateName(null);
    setSearchIngredients([]);
    setSelectedIngredients([]);
    setSelectedDiet('All');
    setSelectedMaxTime(null);
    setSelectedDifficulty('All');
    setSelectedMaxCost(null);
    setSortBy('popularity');
  };

  const allFilteredRecipes = useMemo(() => {
    let recipes = [...allRecipes];

    if (selectedRegionTag) {
        recipes = recipes.filter(r => r.tags?.includes(selectedRegionTag));
    }

    if (selectedCategory) {
        recipes = recipes.filter(r => r.menuCategory === selectedCategory);
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
        searchIngredients.every(term => {
          const t = term.toLowerCase().trim();
          if (!t) return true;
          const matchName = recipe.name.toLowerCase().includes(t);
          const matchIng = recipe.ingredients.some(recIng => recIng.name.toLowerCase().includes(t));
          const matchDesc = recipe.description ? recipe.description.toLowerCase().includes(t) : false;
          const matchTags = recipe.tags ? recipe.tags.some(tag => tag.toLowerCase().includes(t)) : false;
          return matchName || matchIng || matchDesc || matchTags;
        })
      );
    }

    if (selectedDiet !== 'All') {
      recipes = recipes.filter(r => r.type === selectedDiet);
    }

    if (selectedMaxTime !== null) {
      recipes = recipes.filter(r => r.time <= selectedMaxTime);
    }

    if (selectedDifficulty !== 'All') {
      recipes = recipes.filter(r => r.difficulty === selectedDifficulty);
    }

    if (selectedMaxCost !== null) {
      recipes = recipes.filter(r => r.cost <= selectedMaxCost);
    }

    return recipes.sort((a, b) => {
      switch (sortBy) {
        case 'time_asc':
          return a.time - b.time;
        case 'time_desc':
          return b.time - a.time;
        case 'cost_asc':
          return a.cost - b.cost;
        case 'cost_desc':
          return b.cost - a.cost;
        case 'name_asc':
          return a.name.localeCompare(b.name);
        case 'popularity':
        default:
          return (b.popularity || 0) - (a.popularity || 0);
      }
    });
  }, [selectedMood, selectedCategory, searchIngredients, selectedRegionTag, selectedDiet, selectedMaxTime, selectedDifficulty, selectedMaxCost, sortBy]);

  const recipesToDisplay = useMemo(() => allFilteredRecipes.slice(0, displayLimit), [allFilteredRecipes, displayLimit]);

  if (isUserLoading || !user) {
    return (
      <div className="content-container py-8 md:py-12 px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="h-12 w-72 bg-muted/80 rounded-2xl mx-auto animate-pulse" />
          <div className="h-5 w-96 max-w-full bg-muted/60 rounded-xl mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Card key={idx} className="h-[490px] rounded-[2rem] bg-card/60 border border-stone-200/80 dark:border-stone-800/80 p-5 flex flex-col justify-between animate-pulse">
              <div className="space-y-4">
                <div className="h-44 w-full rounded-2xl bg-muted/80" />
                <div className="flex gap-2">
                  <div className="h-5 w-20 rounded-md bg-muted/80" />
                  <div className="h-5 w-16 rounded-md bg-muted/60" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="content-container py-8 md:py-12 px-4 space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center space-y-3"
      >
        <h1 className="font-headline text-fluid-h1 font-medium tracking-tight text-stone-900 dark:text-stone-100">
          Indian Recipes Explorer
        </h1>
        <p className="text-fluid-subtitle text-stone-600 dark:text-stone-300 font-medium max-w-2xl mx-auto leading-relaxed">
          Discover authentic Indian recipes with detailed instructions, pricing, and 3D card previews.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center space-y-6"
      >
        <h2 className="font-headline text-2xl font-medium text-stone-900 dark:text-stone-100">What&apos;s Your Mood Today?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {moods.map((mood) => {
                const isSelected = selectedMood === mood.name;
                return (
                    <motion.div
                      key={mood.name}
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Card
                          onClick={() => handleMoodSelect(mood.name)}
                          className={cn(
                              "p-5 text-center cursor-pointer transition-all rounded-2xl border-2 flex flex-col items-center justify-center h-full",
                              isSelected 
                                  ? mood.active
                                  : `border-stone-200/80 dark:border-stone-800/80 bg-card/80 backdrop-blur-sm ${mood.color}`
                          )}
                      >
                          <div className={cn(
                              "mb-2.5 h-11 w-11 mx-auto rounded-xl flex items-center justify-center transition-colors", 
                              isSelected ? "bg-white/20 text-white" : "bg-amber-500/10 text-[#F4A21A]"
                          )}>
                              {mood.icon}
                          </div>
                          <p className={cn("font-medium text-sm", isSelected ? "text-white" : "text-stone-800 dark:text-stone-200")}>{mood.name}</p>
                      </Card>
                    </motion.div>
                );
            })}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center space-y-6"
      >
        <h2 className="font-headline text-2xl font-medium text-stone-900 dark:text-stone-100">Browse by Course</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {topCourseCategories.map((cat) => {
                const isSelected = selectedCategory === cat.name;
                const count = categoryCounts[cat.name] || 0;
                return (
                    <motion.div
                      key={cat.name}
                      whileHover={{ y: -3, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Card
                          onClick={() => handleCategorySelect(cat.name)}
                          className={cn(
                              "p-4 text-center cursor-pointer transition-all rounded-2xl border-2 flex flex-col items-center justify-center min-h-[140px] relative group",
                              isSelected 
                                  ? "border-[#F4A21A] bg-amber-500/10 shadow-sm" 
                                  : "border-stone-200/80 dark:border-stone-800/80 hover:border-amber-500/40 bg-card/80 backdrop-blur-sm"
                          )}
                      >
                          <div className={cn(
                              "mb-2 h-10 w-10 mx-auto rounded-xl flex items-center justify-center transition-colors shrink-0", 
                              isSelected ? "bg-[#F4A21A] text-white" : "bg-amber-500/10 text-[#F4A21A] group-hover:bg-[#F4A21A] group-hover:text-white"
                          )}>
                              {cat.icon}
                          </div>
                          <p className={cn("font-medium text-xs leading-snug text-center mb-1.5", isSelected ? "text-[#F4A21A]" : "text-stone-900 dark:text-stone-100")}>
                              {cat.name}
                          </p>
                          {count > 0 && (
                              <span className={cn(
                                  "inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-semibold rounded-full transition-colors",
                                  isSelected 
                                      ? "bg-[#F4A21A] text-white" 
                                      : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 group-hover:bg-amber-500/10 group-hover:text-[#F4A21A]"
                              )}>
                                  {count} recipes
                              </span>
                          )}
                      </Card>
                    </motion.div>
                );
            })}
        </div>

        <AnimatePresence>
            {showMoreCategories && (
                <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 pt-1">
                        {remainingCourseCategories.map((cat) => {
                            const isSelected = selectedCategory === cat.name;
                            const count = categoryCounts[cat.name] || 0;
                            return (
                                <motion.div
                                  key={cat.name}
                                  whileHover={{ y: -3, scale: 1.02 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                  <Card
                                      onClick={() => handleCategorySelect(cat.name)}
                                      className={cn(
                                          "p-4 text-center cursor-pointer transition-all rounded-2xl border-2 flex flex-col items-center justify-center min-h-[140px] relative group",
                                          isSelected 
                                              ? "border-[#F4A21A] bg-amber-500/10 shadow-sm" 
                                              : "border-stone-200/80 dark:border-stone-800/80 hover:border-amber-500/40 bg-card/80 backdrop-blur-sm"
                                      )}
                                  >
                                      <div className={cn(
                                          "mb-2 h-10 w-10 mx-auto rounded-xl flex items-center justify-center transition-colors shrink-0", 
                                          isSelected ? "bg-[#F4A21A] text-white" : "bg-amber-500/10 text-[#F4A21A] group-hover:bg-[#F4A21A] group-hover:text-white"
                                      )}>
                                          {cat.icon}
                                      </div>
                                      <p className={cn("font-medium text-xs leading-snug text-center mb-1.5", isSelected ? "text-[#F4A21A]" : "text-stone-900 dark:text-stone-100")}>
                                          {cat.name}
                                      </p>
                                      {count > 0 && (
                                          <span className={cn(
                                              "inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-semibold rounded-full transition-colors",
                                              isSelected 
                                                  ? "bg-[#F4A21A] text-white" 
                                                  : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 group-hover:bg-amber-500/10 group-hover:text-[#F4A21A]"
                                          )}>
                                              {count} recipes
                                          </span>
                                      )}
                                  </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        <div className="mt-4 flex justify-center">
            <Button
                variant="outline"
                onClick={() => setShowMoreCategories(prev => !prev)}
                className="rounded-full px-6 py-2 h-10 border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-[#F4A21A] transition-all font-medium text-sm flex items-center gap-2"
            >
                <span>{showMoreCategories ? "Show Less" : "Show 7 More Categories"}</span>
                {showMoreCategories ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
        </div>
      </motion.div>

      <Card className="w-full mb-12 p-6 md:p-8 rounded-[2.5rem] bg-card/80 backdrop-blur-sm border-stone-200/80 dark:border-stone-800/80 shadow-sm">
        <div className="space-y-1 mb-6">
            <h2 className="font-headline text-2xl font-medium text-stone-900 dark:text-stone-100">Find Recipes by Ingredients</h2>
            <p className="text-sm text-stone-600 dark:text-stone-300 font-medium">
                Tell us what&apos;s in your kitchen — we&apos;ll find recipes that use it.
            </p>
        </div>

        <div className="relative">
          <Input 
            placeholder="Add an ingredient (e.g. Tomato) and press Enter or +..."
            className="pr-12 h-14 rounded-2xl text-base pl-5 border-stone-300 dark:border-stone-700 focus:border-[#F4A21A]" 
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddIngredient(ingredientInput)}
          />
          <Button 
            variant="ghost"
            size="icon" 
            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 text-[#F4A21A] hover:bg-amber-500/10 rounded-xl disabled:opacity-30" 
            onClick={() => handleAddIngredient(ingredientInput)}
            disabled={!ingredientInput.trim()}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>

        {selectedIngredients.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 min-h-[36px]">
                {selectedIngredients.map(ing => (
                    <Badge 
                        key={ing} 
                        variant="secondary" 
                        className="pl-3 pr-1 py-1 h-8 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20 flex items-center gap-1.5"
                    >
                        <span className="font-medium text-xs uppercase tracking-wider">{ing}</span>
                        <button 
                            onClick={() => handleRemoveIngredient(ing)}
                            className="p-0.5 rounded-full hover:bg-amber-500/20 transition-colors"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    </Badge>
                ))}
            </div>
        )}

        <Button 
            className="w-full h-14 rounded-full text-sm sm:text-base font-semibold uppercase tracking-wider bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-lg shadow-amber-500/25 mt-6 border-0 active:scale-[0.99] transition-all flex items-center justify-center gap-2" 
            onClick={() => {
              let finalIngredients = [...selectedIngredients];
              if (ingredientInput.trim() && !finalIngredients.includes(ingredientInput.trim().toLowerCase())) {
                const newIng = ingredientInput.trim().toLowerCase();
                finalIngredients.push(newIng);
                setSelectedIngredients(finalIngredients);
                setIngredientInput("");
              }
              setSearchIngredients(finalIngredients);
              scrollToResults();
            }}
        >
          <Search className="h-5 w-5" /> Search Recipes
        </Button>
      </Card>

      <div id="recipe-results-grid" className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div>
          <h3 className="font-headline text-2xl font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            {selectedCategory || selectedMood || selectedStateName || activeFilterCount > 0 ? (
              <span>Showing <span className="text-[#F4A21A]">{allFilteredRecipes.length}</span> {selectedCategory || selectedMood || selectedStateName || 'Filtered'} Recipes</span>
            ) : (
              <span>All Recipes <span className="text-stone-500 font-normal text-lg">({allFilteredRecipes.length})</span></span>
            )}
          </h3>
          <p className="text-xs text-stone-500 dark:text-stone-400 font-medium mt-0.5">Master database count: 934 recipes</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          {selectedStateName && (
            <Button 
              variant="outline"
              onClick={() => {
                setSelectedRegionTag(null);
                setSelectedStateName(null);
                const params = new URLSearchParams(window.location.search);
                params.delete('state');
                const newUrl = params.toString() ? `/recipes?${params.toString()}` : '/recipes';
                router.push(newUrl);
              }}
              className="rounded-full h-11 px-4 text-xs font-semibold border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20 gap-1.5 transition-all shadow-xs"
            >
              <MapPin className="h-3.5 w-3.5 text-[#F4A21A]" />
              <span>{selectedStateName}</span>
              <X className="h-3.5 w-3.5 ml-1 text-amber-600 dark:text-amber-400" />
              <span className="sr-only">Clear region filter</span>
            </Button>
          )}

          {selectedMaxTime !== null && (
            <Button 
              variant="outline"
              onClick={() => {
                setSelectedMaxTime(null);
                const params = new URLSearchParams(window.location.search);
                params.delete('maxTime');
                const newUrl = params.toString() ? `/recipes?${params.toString()}` : '/recipes';
                router.push(newUrl);
              }}
              className="rounded-full h-11 px-4 text-xs font-semibold border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 gap-1.5 transition-all shadow-xs"
            >
              <Clock className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Under {selectedMaxTime} mins</span>
              <X className="h-3.5 w-3.5 ml-1 text-emerald-600 dark:text-emerald-400" />
              <span className="sr-only">Clear max time filter</span>
            </Button>
          )}

          {selectedDifficulty !== 'All' && (
            <Button 
              variant="outline"
              onClick={() => {
                setSelectedDifficulty('All');
                const params = new URLSearchParams(window.location.search);
                params.delete('difficulty');
                const newUrl = params.toString() ? `/recipes?${params.toString()}` : '/recipes';
                router.push(newUrl);
              }}
              className="rounded-full h-11 px-4 text-xs font-semibold border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 gap-1.5 transition-all shadow-xs"
            >
              <BarChart2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{selectedDifficulty}</span>
              <X className="h-3.5 w-3.5 ml-1 text-emerald-600 dark:text-emerald-400" />
              <span className="sr-only">Clear difficulty filter</span>
            </Button>
          )}

          {/* FILTER BUTTON */}
          <Button 
            variant="outline" 
            className="rounded-full h-11 px-5 text-xs font-semibold border-stone-300 dark:border-stone-700 bg-card/80 backdrop-blur-md hover:border-amber-500/50 hover:bg-amber-500/10 text-stone-800 dark:text-stone-200 gap-2 shadow-xs transition-all"
            onClick={() => setIsFilterModalOpen(true)}
          >
            <SlidersHorizontal className="h-4 w-4 text-[#F4A21A]" />
            <span>Filter</span>
            {activeFilterCount > 0 && (
              <Badge className="bg-[#F4A21A] text-white rounded-full px-2 py-0.5 text-[10px] font-bold border-0 shadow-xs">
                {activeFilterCount}
              </Badge>
            )}
          </Button>

          {/* CUSTOM SORT BY POPOVER DROPDOWN */}
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="rounded-full h-11 px-5 text-xs font-semibold border-stone-300 dark:border-stone-700 bg-card/80 backdrop-blur-md hover:border-amber-500/50 text-stone-800 dark:text-stone-200 gap-2 shadow-xs transition-all"
            >
              <ArrowUpDown className="h-4 w-4 text-[#F4A21A]" />
              <span className="text-stone-500 font-normal">Sort:</span>
              <span className="font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                {sortOptions.find(o => o.value === sortBy)?.icon}
                {sortOptions.find(o => o.value === sortBy)?.label}
              </span>
              <ChevronDown className={cn("h-3.5 w-3.5 text-stone-400 transition-transform duration-200 ml-1", isSortOpen && "rotate-180")} />
            </Button>

            <AnimatePresence>
              {isSortOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsSortOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute right-0 top-13 z-50 w-64 rounded-2xl bg-card/95 backdrop-blur-xl border border-stone-200 dark:border-stone-800 shadow-2xl p-1.5 space-y-1"
                  >
                    {sortOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setIsSortOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between gap-2",
                          sortBy === opt.value
                            ? "bg-amber-500/15 text-[#F4A21A] font-bold shadow-xs"
                            : "text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800/80 hover:text-stone-900 dark:hover:text-stone-100"
                        )}
                      >
                        <span className="flex items-center gap-2">
                          {opt.icon}
                          {opt.label}
                        </span>
                        {sortBy === opt.value && <Check className="h-3.5 w-3.5 text-[#F4A21A] shrink-0" />}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {(selectedCategory || selectedMood || selectedStateName || searchIngredients.length > 0 || activeFilterCount > 0) && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full h-11 px-4 text-xs font-semibold text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              onClick={resetAllFilters}
            >
              <RotateCcw className="h-3.5 w-3.5 mr-1.5" /> Reset All
            </Button>
          )}
        </div>
      </div>

      {/* FILTER MODAL / DRAWER */}
      <AnimatePresence>
        {isFilterModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="bg-card/95 backdrop-blur-2xl border border-amber-500/20 rounded-[2.5rem] p-6 md:p-8 max-w-lg w-full shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="bg-amber-500/10 text-[#F4A21A] p-2 rounded-xl">
                    <SlidersHorizontal className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-semibold text-stone-900 dark:text-stone-100">Filter Recipes</h3>
                    <p className="text-xs text-stone-500 font-normal">Refine recipes by diet, time, difficulty, & cost</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full h-9 w-9 text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800"
                  onClick={() => setIsFilterModalOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-5">
                {/* DIET TYPE */}
                <div className="space-y-2.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">Diet Type</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['All', 'Vegetarian', 'Non-Vegetarian'] as const).map(diet => (
                      <Button
                        key={diet}
                        variant="outline"
                        className={cn(
                          "rounded-full text-xs font-medium h-10 border transition-all",
                          selectedDiet === diet 
                            ? "bg-[#F4A21A] text-white hover:bg-[#E09015] border-transparent shadow-md shadow-amber-500/25 font-semibold scale-[1.02]" 
                            : "border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 hover:border-amber-500/50 hover:bg-amber-500/10"
                        )}
                        onClick={() => setSelectedDiet(diet)}
                      >
                        {diet}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* MAX COOKING TIME */}
                <div className="space-y-2.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">Max Cooking Time</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { label: 'All', val: null },
                      { label: '< 30m', val: 30 },
                      { label: '< 45m', val: 45 },
                      { label: '< 60m', val: 60 },
                    ].map(item => (
                      <Button
                        key={item.label}
                        variant="outline"
                        className={cn(
                          "rounded-full text-xs font-medium h-10 border transition-all",
                          selectedMaxTime === item.val 
                            ? "bg-[#F4A21A] text-white hover:bg-[#E09015] border-transparent shadow-md shadow-amber-500/25 font-semibold scale-[1.02]" 
                            : "border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 hover:border-amber-500/50 hover:bg-amber-500/10"
                        )}
                        onClick={() => setSelectedMaxTime(item.val)}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* DIFFICULTY */}
                <div className="space-y-2.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">Difficulty Level</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['All', 'Easy', 'Medium', 'Hard'].map(diff => (
                      <Button
                        key={diff}
                        variant="outline"
                        className={cn(
                          "rounded-full text-xs font-medium h-10 border transition-all",
                          selectedDifficulty === diff 
                            ? "bg-[#F4A21A] text-white hover:bg-[#E09015] border-transparent shadow-md shadow-amber-500/25 font-semibold scale-[1.02]" 
                            : "border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 hover:border-amber-500/50 hover:bg-amber-500/10"
                        )}
                        onClick={() => setSelectedDifficulty(diff)}
                      >
                        {diff}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* MAX BUDGET */}
                <div className="space-y-2.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">Max Budget (INR)</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { label: 'All', val: null },
                      { label: '≤ ₹100', val: 100 },
                      { label: '≤ ₹200', val: 200 },
                      { label: '≤ ₹300', val: 300 },
                    ].map(item => (
                      <Button
                        key={item.label}
                        variant="outline"
                        className={cn(
                          "rounded-full text-xs font-medium h-10 border transition-all",
                          selectedMaxCost === item.val 
                            ? "bg-[#F4A21A] text-white hover:bg-[#E09015] border-transparent shadow-md shadow-amber-500/25 font-semibold scale-[1.02]" 
                            : "border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 hover:border-amber-500/50 hover:bg-amber-500/10"
                        )}
                        onClick={() => setSelectedMaxCost(item.val)}
                      >
                        {item.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-stone-200 dark:border-stone-800 pt-4 gap-3">
                <Button
                  variant="outline"
                  className="rounded-full h-11 px-6 text-xs font-semibold border-stone-300 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                  onClick={() => {
                    setSelectedDiet('All');
                    setSelectedMaxTime(null);
                    setSelectedDifficulty('All');
                    setSelectedMaxCost(null);
                  }}
                >
                  Clear Filters
                </Button>
                <Button
                  className="rounded-full h-11 px-8 text-xs font-semibold uppercase tracking-wider bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-lg shadow-amber-500/25 border-0 transition-all active:scale-95"
                  onClick={() => setIsFilterModalOpen(false)}
                >
                  Apply Filters ({allFilteredRecipes.length})
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {recipesToDisplay.map((recipe, idx) => (
            <motion.div 
              key={recipe.id} 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: (idx % 24) * 0.02, duration: 0.4 }}
            >
                <RecipeCard recipe={recipe} />
            </motion.div>
        ))}
      </div>

      {allFilteredRecipes.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card className="text-center py-16 border-dashed border-2 bg-card/60 backdrop-blur-sm border-stone-300 dark:border-stone-800 rounded-[2.5rem] max-w-2xl mx-auto shadow-sm my-12">
              <CardHeader className="p-6 pb-2">
                <div className="mx-auto bg-amber-500/10 text-[#F4A21A] rounded-2xl p-5 w-20 h-20 flex items-center justify-center mb-4">
                  <Search className="h-10 w-10" />
                </div>
                <CardTitle className="font-headline text-3xl font-medium tracking-tight text-stone-900 dark:text-stone-100">No Matching Recipes Found</CardTitle>
                <CardDescription className="text-sm font-medium text-stone-600 dark:text-stone-300 mt-2 max-w-md mx-auto leading-relaxed">
                  We couldn't find any dish matching your current filters or ingredient search. Try adjusting your selections!
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 pb-4 flex justify-center">
                <Button 
                  className="rounded-full px-8 h-12 text-sm font-medium bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-md shadow-amber-500/20 transition-all border-0"
                  onClick={resetAllFilters}
                >
                  Reset All Filters
                </Button>
              </CardContent>
            </Card>
          </motion.div>
      )}

      {allFilteredRecipes.length > displayLimit && (
          <div className="mt-16 flex flex-col items-center gap-4 pb-20">
              <p className="text-sm font-medium text-stone-500 italic">Showing {displayLimit} of {allFilteredRecipes.length} recipes</p>
              <Button size="lg" className="rounded-full px-10 h-14 font-medium bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-lg shadow-amber-500/20 transition-all border-0" onClick={() => setDisplayLimit(prev => prev + 24)}>
                Load More Recipes
              </Button>
          </div>
      )}
    </div>
  );
}

export default function RecipesExplorerPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-[#F4A21A]" />
      </div>
    }>
      <RecipesExplorerContent />
    </Suspense>
  );
}
