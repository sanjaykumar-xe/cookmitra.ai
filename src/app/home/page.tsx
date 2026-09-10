'use client';

import { useEffect, useState, useMemo, useRef } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { 
    ChevronRight, 
    Clock, 
    Loader2, 
    ChefHat,
    Search,
    ArrowRight,
    Star,
    Flame
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { SurpriseRecipeDialog } from '@/components/home/surprise-recipe-dialog';
import { IconHeartFilled } from '@tabler/icons-react';
import { useLanguage } from '@/context/language-context';
import { RegionalCuisineExplorer } from '@/components/home/regional-cuisine-explorer';
import { recipes } from '@/lib/recipes';
import type { Recipe } from '@/lib/recipes/types';
import { getRecipeImageCandidates } from '@/lib/recipe-image-helper';
import { getRecipeSearchSuggestions } from '@/lib/recipe-search';
import { cn } from '@/lib/utils';

// Single Recipe Card for Popular Recipes 4-column grid
function PopularRecipeCard({ recipe, isTrending = false }: { recipe: Recipe; isTrending?: boolean }) {
    const [imageError, setImageError] = useState(false);
    const [candidateIndex, setCandidateIndex] = useState(0);
    const [isImageLoading, setIsImageLoading] = useState(true);

    const candidates = recipe.imageUrl ? [recipe.imageUrl] : getRecipeImageCandidates(recipe.id);
    const currentImageUrl = candidates[candidateIndex];
    const showImage = !!currentImageUrl && !imageError;

    const handleImageError = () => {
        if (candidateIndex < candidates.length - 1) {
            setCandidateIndex(prev => prev + 1);
            setIsImageLoading(true);
        } else {
            setImageError(true);
            setIsImageLoading(false);
        }
    };

    // Derived rating formula: correctly handles decimal popularity (e.g. 0.95 -> 95)
    // with a deterministic spread based on recipe identity to produce realistic 4.6–4.9★ variation
    const rawPop = recipe.popularity || 0.9;
    const normalizedPop = rawPop <= 1 ? rawPop * 100 : rawPop;
    const idHash = recipe.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const spread = [0.0, 0.1, -0.1, 0.2][idHash % 4];
    const baseRating = 4.7 + ((normalizedPop - 95) * 0.1);
    const derivedRating = Math.min(4.9, Math.max(4.6, Number((baseRating + spread).toFixed(1)))).toFixed(1);

    return (
        <Card className="flex flex-col h-full rounded-2xl bg-card border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:shadow-lg hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-200 ease-out group overflow-hidden">
            {/* Image Container */}
            <div className="relative h-44 w-full bg-stone-100 dark:bg-stone-900 overflow-hidden shrink-0">
                {showImage ? (
                    <>
                        {isImageLoading && (
                            <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800 animate-pulse z-10" />
                        )}
                        <Image
                            src={currentImageUrl}
                            alt={`Photo of ${recipe.name}, an authentic ${recipe.type} Indian dish`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className={cn(
                                "object-cover transition-transform duration-250 ease-out group-hover:scale-105",
                                isImageLoading ? "opacity-0" : "opacity-100"
                            )}
                            onLoad={() => setIsImageLoading(false)}
                            onError={handleImageError}
                        />
                    </>
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100 dark:bg-stone-900">
                        <ChefHat className="h-9 w-9 text-amber-500/60" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mt-2">Photo coming soon</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none z-10" />

                {/* Top Badges */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none z-20">
                    <div className="flex items-center gap-1.5 flex-wrap">
                        <Badge 
                            variant={recipe.type === 'Vegetarian' ? 'secondary' : 'destructive'} 
                            className={cn(
                                "font-semibold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs",
                                recipe.type === 'Vegetarian' 
                                    ? "bg-emerald-600 text-white border-0" 
                                    : "bg-red-600 text-white border-0"
                            )}
                        >
                            {recipe.type === 'Vegetarian' ? 'Veg' : 'Non-Veg'}
                        </Badge>
                        {isTrending && (
                            <Badge 
                                className="font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F4A21A] text-stone-950 border-0 shadow-xs flex items-center gap-0.5"
                            >
                                <Flame className="h-2.5 w-2.5 fill-current text-stone-950" />
                                <span>Trending</span>
                            </Badge>
                        )}
                    </div>
                    {recipe.menuCategory && (
                        <Badge variant="outline" className="font-medium text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-md border-white/20 shadow-xs">
                            {recipe.menuCategory}
                        </Badge>
                    )}
                </div>

                {/* Bottom Overlay: Time (left) + Star Rating (right) */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] font-medium z-20 pointer-events-none">
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/15">
                        <Clock className="h-3 w-3 text-amber-400" />
                        {recipe.time}m
                    </span>
                    <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/15 font-semibold text-amber-300">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        {derivedRating}
                    </span>
                </div>
            </div>

            {/* Card Body */}
            <CardHeader className="p-4 pb-2 flex-1 flex flex-col justify-between">
                <div>
                    <CardTitle className="font-headline text-base font-semibold tracking-tight text-stone-900 dark:text-stone-100 group-hover:text-[#F4A21A] transition-colors line-clamp-1">
                        {recipe.name}
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-xs font-normal text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                        {recipe.description}
                    </CardDescription>
                </div>

                <div className="pt-3 flex flex-wrap gap-1">
                    {recipe.tags?.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="outline" className="text-[10px] font-medium bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/20 rounded-full px-2 py-0.2">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardHeader>

            <CardFooter className="px-4 pb-3.5 pt-1 mt-auto border-t border-stone-100 dark:border-stone-800/70 flex justify-between items-center text-xs font-semibold text-stone-500 dark:text-stone-400 group-hover:text-[#F4A21A] transition-colors">
                <Link 
                    href={`/recipes/${recipe.id}`} 
                    className="flex items-center justify-between w-full"
                    aria-label={`View recipe details for ${recipe.name}`}
                >
                    <span>View Recipe</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </CardFooter>
        </Card>
    );
}

// Helper to resolve all candidate image URLs for a saved recipe
function getSavedRecipeImageCandidates(recipe: any): string[] {
    const candidates: string[] = [];

    // 1. If an explicit imageUrl is provided on the recipe object, try it first
    if (recipe?.imageUrl && typeof recipe.imageUrl === 'string' && recipe.imageUrl.trim()) {
        candidates.push(recipe.imageUrl.trim());
    }

    const displayName = (recipe?.name || recipe?.dishName || '').trim();
    const cleanName = displayName.toLowerCase();

    // 2. Look up the recipe in the master recipes catalog to find its canonical static slug ID
    const matchedRecipe = recipes.find(r => {
        if (recipe?.originalId && r.id === recipe.originalId) return true;
        if (recipe?.recipeId && r.id === recipe.recipeId) return true;
        if (recipe?.slug && r.id === recipe.slug) return true;
        if (recipe?.id && r.id === recipe.id) return true;
        if (cleanName && r.name.toLowerCase().trim() === cleanName) return true;
        return false;
    });

    if (matchedRecipe) {
        if (matchedRecipe.imageUrl) {
            candidates.push(matchedRecipe.imageUrl);
        }
        candidates.push(...getRecipeImageCandidates(matchedRecipe.id));
    }

    // 3. Fall back to slugifying the recipe's display name (e.g. "Butter Chicken" -> "butter-chicken")
    if (cleanName) {
        const slugFromName = cleanName
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
        if (slugFromName) {
            candidates.push(...getRecipeImageCandidates(slugFromName));
        }
    }

    // 4. Try any explicit id fields that might be a static recipe slug
    const possibleIds = [recipe?.recipeId, recipe?.originalId, recipe?.slug, recipe?.id].filter(Boolean);
    for (const id of possibleIds) {
        if (typeof id === 'string') {
            candidates.push(...getRecipeImageCandidates(id));
        }
    }

    // Deduplicate while preserving priority order
    return Array.from(new Set(candidates.filter(Boolean)));
}

// Recent Saved Recipe Thumbnail Component with proper fallback
function SavedRecipeThumbnail({ recipe, displayName }: { recipe: any; displayName: string }) {
    const [imageError, setImageError] = useState(false);
    const [candidateIndex, setCandidateIndex] = useState(0);
    const [isImageLoading, setIsImageLoading] = useState(true);

    const candidates = useMemo(() => getSavedRecipeImageCandidates(recipe), [recipe]);
    const currentImageUrl = candidates[candidateIndex];
    const showImage = !!currentImageUrl && !imageError;

    const handleImageError = () => {
        if (candidateIndex < candidates.length - 1) {
            setCandidateIndex(prev => prev + 1);
            setIsImageLoading(true);
        } else {
            setImageError(true);
            setIsImageLoading(false);
        }
    };

    return (
        <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700/80">
            {showImage ? (
                <>
                    {isImageLoading && (
                        <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800 animate-pulse z-10" />
                    )}
                    <Image
                        src={currentImageUrl}
                        alt={`Thumbnail photo of ${displayName}`}
                        fill
                        sizes="56px"
                        className={cn(
                            "object-cover transition-transform duration-250 ease-out group-hover:scale-105",
                            isImageLoading ? "opacity-0" : "opacity-100"
                        )}
                        onLoad={() => setIsImageLoading(false)}
                        onError={handleImageError}
                    />
                </>
            ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-1 text-center bg-stone-100 dark:bg-stone-800/80">
                    <ChefHat className="h-4 w-4 sm:h-5 sm:w-5 text-[#F4A21A]" />
                    <span className="text-[7px] leading-tight font-medium text-stone-400 dark:text-stone-500 mt-0.5 line-clamp-1">Photo coming soon</span>
                </div>
            )}
        </div>
    );
}

// Single Card for Recent Saved Recipes
function SavedRecipeCard({ recipe }: { recipe: any }) {
    const displayName = recipe.name || recipe.dishName || "Untitled Recipe";
    const rawTime = recipe.time || recipe.cookingTime || 0;
    const displayTime = typeof rawTime === 'string' ? parseInt(rawTime) : rawTime;
    const displayCost = recipe.cost || recipe.estimatedCost || 0;
    const displayLevel = recipe.difficulty || 'Medium';

    return (
        <Link 
            href={`/my-recipes/${recipe.id}`}
            className="block h-full"
            aria-label={`View saved recipe for ${displayName}`}
        >
            <Card className="h-full p-3.5 sm:p-4 rounded-2xl bg-card border border-stone-200/80 dark:border-stone-800/80 hover:border-amber-500/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-out group">
                <div className="flex items-center gap-3">
                    <SavedRecipeThumbnail 
                        recipe={recipe} 
                        displayName={displayName} 
                    />
                    <div className="min-w-0 flex-1">
                        <h4 className="font-headline font-semibold text-sm text-stone-900 dark:text-stone-100 truncate group-hover:text-[#F4A21A] transition-colors">
                            {displayName}
                        </h4>
                        <div className="flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400 mt-1">
                            <span>{displayTime}m</span>
                            <span>•</span>
                            <span>{displayLevel}</span>
                            <span>•</span>
                            <span className="text-amber-600 dark:text-amber-400 font-medium">₹{displayCost}</span>
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
}

export default function DashboardPage() {
    const { user, isUserLoading } = useUser();
    const { t } = useLanguage();
    const [mounted, setMounted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState<Recipe[]>([]);
    const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
    const [recipeFilter, setRecipeFilter] = useState<'all' | 'veg' | 'non-veg' | 'quick'>('all');
    const searchContainerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const firestore = useFirestore();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && !isUserLoading && !user) {
            router.push('/login');
        }
    }, [user, isUserLoading, router, mounted]);

    // Live search suggestions with ~250ms debounce
    useEffect(() => {
        const queryText = searchQuery.trim();
        if (!queryText) {
            setSuggestions([]);
            return;
        }

        const timer = setTimeout(() => {
            const results = getRecipeSearchSuggestions(recipes, queryText, 5);
            setSuggestions(results);
        }, 250);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    // Click outside handler for search suggestions dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setIsSuggestionsOpen(false);
            }
        };

        document.addEventListener('pointerdown', handleClickOutside);
        return () => {
            document.removeEventListener('pointerdown', handleClickOutside);
        };
    }, []);

    const savedRecipesQuery = useMemoFirebase(() => {
        if (!user || !firestore) return null;
        return query(
            collection(firestore, `users/${user.uid}/recipes`),
            orderBy('savedAt', 'desc'),
            limit(4)
        );
    }, [user, firestore]);

    const { data: savedRecipes, isLoading: recipesLoading } = useCollection(savedRecipesQuery);

    // Search submit handler
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSuggestionsOpen(false);
        if (searchQuery.trim()) {
            router.push(`/recipes?q=${encodeURIComponent(searchQuery.trim())}`);
        } else {
            router.push('/recipes');
        }
    };

    // Filter Popular Recipes
    const popularRecipes = useMemo(() => {
        const sorted = [...recipes].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        return sorted.filter(recipe => {
            if (recipeFilter === 'veg') return recipe.type === 'Vegetarian';
            if (recipeFilter === 'non-veg') return recipe.type === 'Non-Vegetarian';
            if (recipeFilter === 'quick') return recipe.time <= 30;
            return true;
        }).slice(0, 8);
    }, [recipeFilter]);

    // Trending recipe: show "Trending" badge on the single highest-popularity recipe in the currently displayed set
    const trendingRecipeId = useMemo(() => {
        return popularRecipes.length > 0 ? popularRecipes[0].id : null;
    }, [popularRecipes]);

    if (!mounted || isUserLoading || !user) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
        );
    }

    const firstName = user.displayName ? user.displayName.split(' ')[0] : 'Foodie';

    // Search suggestion chips
    const suggestionChips = [
        { label: 'High protein meals', href: '/recipes?q=protein' },
        { label: 'Indian dinner ideas', href: '/recipes?q=dinner' },
        { label: 'Low calorie recipes', href: '/recipes?q=healthy' },
        { label: 'Quick & easy', href: '/recipes?maxTime=30&difficulty=easy' },
    ];

    return (
        <div className="content-container py-6 md:py-10 space-y-10 md:space-y-14 px-4 max-w-7xl mx-auto">
            
            {/* 1. HERO SECTION */}
            <section className="relative rounded-3xl bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-stone-50 dark:from-stone-900 dark:via-stone-900/90 dark:to-stone-950 border border-amber-200/70 dark:border-stone-800 p-6 sm:p-8 md:p-10 shadow-sm overflow-hidden">
                {/* Soft ambient background gradient wash */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-bl from-amber-300/20 via-orange-200/10 to-transparent dark:from-amber-500/10 dark:via-amber-950/15 dark:to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                    {/* Left Column */}
                    <div className="lg:col-span-7 space-y-4 z-10">
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30">
                            <span>Good Food</span>
                            <span className="text-[#F4A21A]">♥</span>
                            <span>Better You</span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
                            Welcome back, <span className="text-[#F4A21A]">{firstName}</span>!
                        </h1>

                        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base font-normal max-w-xl">
                            What would you like to cook today? Explore chef-curated Indian recipes, personalized nutrition, and smart meal planning.
                        </p>

                        {/* Prominent Search Bar with Autocomplete Suggestions Dropdown */}
                        <div ref={searchContainerRef} className="pt-2 max-w-xl relative">
                            <form onSubmit={handleSearchSubmit}>
                                <div className="relative flex items-center">
                                    <Search className="absolute left-4 h-5 w-5 text-stone-400 pointer-events-none" />
                                    <input
                                        type="text"
                                        id="home-recipe-search-input"
                                        value={searchQuery}
                                        onChange={(e) => {
                                            setSearchQuery(e.target.value);
                                            setIsSuggestionsOpen(true);
                                        }}
                                        onFocus={() => {
                                            if (searchQuery.trim().length > 0) {
                                                setIsSuggestionsOpen(true);
                                            }
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Escape') {
                                                setIsSuggestionsOpen(false);
                                            }
                                        }}
                                        placeholder="What would you like to cook today?"
                                        aria-label="What would you like to cook today? Search recipes or ingredients"
                                        aria-autocomplete="list"
                                        aria-controls="home-search-suggestions"
                                        aria-expanded={isSuggestionsOpen && suggestions.length > 0}
                                        className="w-full bg-white dark:bg-stone-800/95 border border-stone-200 dark:border-stone-700 pl-11 pr-14 py-3.5 rounded-full text-stone-900 dark:text-stone-100 placeholder:text-stone-400 text-sm shadow-xs focus:outline-none focus:ring-2 focus:ring-[#F4A21A]/50 transition-all"
                                    />
                                    <button
                                        type="submit"
                                        aria-label="Search recipes"
                                        className="absolute right-2 h-9 w-9 bg-[#F4A21A] hover:bg-amber-500 text-white rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95"
                                    >
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </form>

                            {/* Autocomplete Suggestions Dropdown */}
                            {isSuggestionsOpen && suggestions.length > 0 && (
                                <div 
                                    id="home-search-suggestions"
                                    role="listbox"
                                    aria-label="Recipe search suggestions"
                                    className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-xl z-50 overflow-hidden divide-y divide-stone-100 dark:divide-stone-800/70"
                                >
                                    <div className="px-3 py-2 text-[11px] font-bold tracking-wider uppercase text-stone-400 dark:text-stone-500 bg-stone-50/50 dark:bg-stone-900/50">
                                        Matching Recipes
                                    </div>
                                    {suggestions.map((rec) => (
                                        <Link
                                            key={rec.id}
                                            href={`/recipes/${rec.id}`}
                                            role="option"
                                            aria-selected={false}
                                            onClick={() => {
                                                setIsSuggestionsOpen(false);
                                                setSearchQuery('');
                                            }}
                                            className="flex items-center justify-between px-3.5 py-2.5 hover:bg-amber-50/60 dark:hover:bg-amber-950/30 transition-colors group"
                                        >
                                            <div className="flex items-center gap-2.5 min-w-0">
                                                <div className={cn(
                                                    "w-2 h-2 rounded-full shrink-0",
                                                    rec.type === 'Vegetarian' ? "bg-emerald-500" : "bg-red-500"
                                                )} />
                                                <span className="text-sm font-medium text-stone-900 dark:text-stone-100 group-hover:text-[#F4A21A] transition-colors truncate">
                                                    {rec.name}
                                                </span>
                                                {rec.menuCategory && (
                                                    <span className="hidden sm:inline-block text-[10px] font-medium text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-full">
                                                        {rec.menuCategory}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-1 text-xs text-stone-400 shrink-0 group-hover:text-[#F4A21A] transition-colors">
                                                <span>{rec.time}m</span>
                                                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                            </div>
                                        </Link>
                                    ))}
                                    <div className="px-3.5 py-2 bg-stone-50/50 dark:bg-stone-900/50 flex justify-between items-center text-[11px] text-stone-500 dark:text-stone-400">
                                        <span>Press <kbd className="px-1 py-0.5 rounded bg-stone-200 dark:bg-stone-800 text-[10px]">Enter</kbd> to see all results</span>
                                        <Link 
                                            href={`/recipes?q=${encodeURIComponent(searchQuery.trim())}`}
                                            onClick={() => setIsSuggestionsOpen(false)}
                                            className="text-amber-600 dark:text-amber-400 hover:underline font-medium"
                                        >
                                            View all &rarr;
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Suggestion Chips */}
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 mr-1">Popular:</span>
                            {suggestionChips.map(chip => (
                                <Link
                                    key={chip.label}
                                    href={chip.href}
                                    aria-label={`Search for ${chip.label}`}
                                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/90 dark:bg-stone-800/90 text-stone-700 dark:text-stone-300 hover:bg-amber-500/15 hover:text-amber-700 dark:hover:text-amber-300 border border-stone-200/80 dark:border-stone-700 transition-colors shadow-2xs"
                                >
                                    {chip.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Clean Typography, Botanical Accents & Repositioned Actions */}
                    <div className="lg:col-span-5 relative flex flex-col justify-between space-y-6 rounded-3xl bg-gradient-to-br from-amber-500/[0.06] via-orange-500/[0.02] to-transparent dark:from-amber-500/[0.08] dark:via-stone-800/30 dark:to-stone-900/50 border border-amber-200/60 dark:border-stone-800/80 p-6 sm:p-7 md:p-8 backdrop-blur-xs shadow-xs overflow-hidden">
                        {/* Decorative Botanical Line-Art Texture */}
                        <div className="absolute -right-6 -bottom-6 w-56 h-56 text-amber-600/[0.12] dark:text-amber-400/[0.08] pointer-events-none select-none">
                            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full">
                                <path d="M40 180C70 160 110 130 140 60C150 35 160 20 160 20" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M80 145C80 145 95 130 90 115C85 100 70 110 70 110C70 110 65 125 70 140C75 155 80 145 80 145Z" strokeWidth="1.2" strokeLinejoin="round" />
                                <path d="M105 120C105 120 120 105 115 90C110 75 95 85 95 85C95 85 90 100 95 115C100 130 105 120 105 120Z" strokeWidth="1.2" strokeLinejoin="round" />
                                <path d="M125 90C125 90 145 80 145 62C145 44 130 52 130 52C130 52 120 64 122 78C124 92 125 90 125 90Z" strokeWidth="1.2" strokeLinejoin="round" />
                                <path d="M140 60C140 60 165 52 168 35C171 18 152 24 152 24C152 24 140 34 138 48C136 62 140 60 140 60Z" strokeWidth="1.2" strokeLinejoin="round" />
                                <path d="M65 160C65 160 50 148 52 135C54 122 68 128 68 128" strokeWidth="1.2" strokeLinecap="round" />
                                <path d="M90 132C90 132 75 120 77 107C79 94 93 100 93 100" strokeWidth="1.2" strokeLinecap="round" />
                                <path d="M112 102C112 102 97 90 99 77C101 64 115 70 115 70" strokeWidth="1.2" strokeLinecap="round" />
                                <circle cx="150" cy="95" r="16" strokeWidth="0.8" strokeDasharray="3 3" />
                                <circle cx="60" cy="60" r="24" strokeWidth="0.8" strokeDasharray="4 4" />
                            </svg>
                        </div>

                        {/* Top: Large Stylized Headline & Tag */}
                        <div className="space-y-3 relative z-10">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-900 dark:text-amber-300 border border-amber-500/30 w-fit">
                                <IconHeartFilled className="h-3.5 w-3.5 text-rose-500 fill-rose-500 animate-pulse" />
                                <span>Daily Cooking Inspiration</span>
                            </div>

                            <h2 className="font-headline italic text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-stone-900 dark:text-stone-100 leading-[1.25] tracking-tight">
                                &ldquo;Let&apos;s cook something <span className="text-[#F4A21A] not-italic font-bold">great</span> today!&rdquo;
                            </h2>

                            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal max-w-md">
                                Fresh ingredients, wholesome flavors, and smart AI guidance whenever you step into the kitchen.
                            </p>
                        </div>

                        {/* Bottom: Repositioned Actions (Surprise Me & Chef Momo Chat Card) */}
                        <div className="space-y-3.5 relative z-10 pt-2">
                            {/* Surprise Me Button Row */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                <div className="shrink-0">
                                    <SurpriseRecipeDialog />
                                </div>
                                <p className="text-xs text-stone-500 dark:text-stone-400 italic">
                                    Instant curated recipe from your pantry
                                </p>
                            </div>

                            {/* Chef Momo Chat Card */}
                            <div className="w-full bg-white/95 dark:bg-stone-800/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border border-amber-200/80 dark:border-stone-700 shadow-xs flex items-center justify-between gap-3 transition-all hover:border-amber-400/60">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="h-10 w-10 shrink-0 rounded-full bg-amber-500/15 flex items-center justify-center overflow-hidden border border-amber-500/30">
                                        <Image
                                            src="/chef-momo-logo.png"
                                            alt="Chef Momo, CookMitra AI culinary guide"
                                            width={40}
                                            height={40}
                                            className="h-full w-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                        <ChefHat className="h-5 w-5 text-[#F4A21A]" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 truncate">Hi! I&apos;m Chef Momo</h4>
                                        <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate">Ask for recipes & pantry tips</p>
                                    </div>
                                </div>
                                <Button asChild size="sm" className="h-8 px-3.5 rounded-full bg-[#F4A21A] hover:bg-amber-500 text-white text-xs font-semibold shrink-0 shadow-xs">
                                    <Link href="/ai-chat" aria-label="Chat with Chef Momo AI assistant">
                                        Chat now
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. POPULAR RECIPES SECTION */}
            <section className="space-y-6">
                {/* Header and View All */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                        <h2 className="font-headline text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                            Popular Recipes
                        </h2>
                        <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
                            Freshly loved by our community
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Filter Tabs */}
                        <div 
                            role="tablist" 
                            aria-label="Filter popular recipes by diet or speed"
                            className="flex flex-wrap items-center gap-1.5 bg-stone-100 dark:bg-stone-900/80 p-1 rounded-full border border-stone-200/80 dark:border-stone-800"
                        >
                            <button
                                role="tab"
                                aria-selected={recipeFilter === 'all'}
                                aria-label="Show all popular recipes"
                                onClick={() => setRecipeFilter('all')}
                                className={cn(
                                    "px-3.5 py-1 rounded-full text-xs font-semibold transition-all",
                                    recipeFilter === 'all'
                                        ? "bg-[#F4A21A] text-white shadow-xs"
                                        : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                                )}
                            >
                                All
                            </button>
                            <button
                                role="tab"
                                aria-selected={recipeFilter === 'veg'}
                                aria-label="Show vegetarian popular recipes"
                                onClick={() => setRecipeFilter('veg')}
                                className={cn(
                                    "px-3.5 py-1 rounded-full text-xs font-semibold transition-all",
                                    recipeFilter === 'veg'
                                        ? "bg-[#F4A21A] text-white shadow-xs"
                                        : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                                )}
                            >
                                Vegetarian
                            </button>
                            <button
                                role="tab"
                                aria-selected={recipeFilter === 'non-veg'}
                                aria-label="Show non-vegetarian popular recipes"
                                onClick={() => setRecipeFilter('non-veg')}
                                className={cn(
                                    "px-3.5 py-1 rounded-full text-xs font-semibold transition-all",
                                    recipeFilter === 'non-veg'
                                        ? "bg-[#F4A21A] text-white shadow-xs"
                                        : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                                )}
                            >
                                Non-Vegetarian
                            </button>
                            <button
                                role="tab"
                                aria-selected={recipeFilter === 'quick'}
                                aria-label="Show quick and easy popular recipes"
                                onClick={() => setRecipeFilter('quick')}
                                className={cn(
                                    "px-3.5 py-1 rounded-full text-xs font-semibold transition-all",
                                    recipeFilter === 'quick'
                                        ? "bg-[#F4A21A] text-white shadow-xs"
                                        : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                                )}
                            >
                                Quick & Easy
                            </button>
                        </div>

                        <Button variant="ghost" asChild className="hidden sm:inline-flex text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-[#F4A21A] group">
                            <Link href="/recipes" aria-label="View all recipes in catalog" className="flex items-center gap-1">
                                View all
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* 4-Column Recipe Cards Grid with Smooth Filter Switching Transition */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={recipeFilter}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {popularRecipes.map(recipe => (
                            <PopularRecipeCard 
                                key={recipe.id} 
                                recipe={recipe} 
                                isTrending={recipe.id === trendingRecipeId}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* 4. TWO LARGE CTA BANNER CARDS (SIDE BY SIDE) WITH SCROLL REVEAL */}
            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {/* CTA 1: Weekly Meals */}
                <div className="rounded-3xl bg-gradient-to-br from-amber-100/70 via-orange-100/40 to-amber-50/90 dark:from-amber-950/40 dark:via-stone-900 dark:to-stone-900 border border-amber-200/80 dark:border-amber-900/40 p-6 md:p-8 flex flex-col justify-between shadow-xs overflow-hidden relative">
                    <div className="space-y-3 z-10 max-w-md">
                        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/30">
                            Let&apos;s Plan Ahead
                        </span>
                        <h3 className="font-headline text-2xl font-bold text-stone-900 dark:text-stone-100">
                            Plan Your Weekly Meals
                        </h3>
                        <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                            Organize authentic breakfasts, lunches, and dinners tailored to your health goals, budget limits, and pantry staples.
                        </p>
                    </div>

                    <div className="pt-6 z-10">
                        <Button asChild className="rounded-full bg-[#F4A21A] hover:bg-amber-500 text-white font-semibold text-xs px-6 py-2 shadow-sm">
                            <Link href="/healthy-meal-planner" aria-label="Create your weekly healthy meal plan" className="flex items-center gap-1.5">
                                Create Meal Plan
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </Button>
                    </div>

                    <div className="absolute right-[-20px] bottom-[-20px] w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden opacity-30 dark:opacity-20 pointer-events-none">
                        <Image
                            src="/recipe-images/idli-sambar.jpg"
                            alt="Idli Sambar South Indian breakfast for weekly meal planning"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* CTA 2: Healing Foods */}
                <div className="rounded-3xl bg-gradient-to-br from-emerald-100/70 via-teal-100/30 to-emerald-50/90 dark:from-emerald-950/40 dark:via-stone-900 dark:to-stone-900 border border-emerald-200/80 dark:border-emerald-900/40 p-6 md:p-8 flex flex-col justify-between shadow-xs overflow-hidden relative">
                    <div className="space-y-3 z-10 max-w-md">
                        <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 border border-emerald-500/30">
                            Eat for Wellness
                        </span>
                        <h3 className="font-headline text-2xl font-bold text-stone-900 dark:text-stone-100">
                            Healing Foods
                        </h3>
                        <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                            Target nutrition by health conditions with Ayurvedic remedies, gut-friendly ingredients, and natural immunity boosters.
                        </p>
                    </div>

                    <div className="pt-6 z-10">
                        <Button asChild className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs px-6 py-2 shadow-sm">
                            <Link href="/healing-foods" aria-label="Explore Ayurvedic healing foods and recipes" className="flex items-center gap-1.5">
                                Explore Now
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </Button>
                    </div>

                    <div className="absolute right-[-20px] bottom-[-20px] w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden opacity-30 dark:opacity-20 pointer-events-none">
                        <Image
                            src="/recipe-images/drink-golden-milk.jpg"
                            alt="Golden Milk turmeric wellness beverage for healing foods"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </motion.section>

            {/* 5. REGIONAL CUISINE EXPLORER */}
            <RegionalCuisineExplorer />

            {/* 6. RECENT SAVED RECIPES (WITH SKELETON LOADER AND SCROLL REVEAL) */}
            {recipesLoading ? (
                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <Skeleton className="h-6 w-44 rounded-lg bg-stone-200/80 dark:bg-stone-800/80" />
                        <Skeleton className="h-5 w-16 rounded-lg bg-stone-200/80 dark:bg-stone-800/80" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((n) => (
                            <Card key={n} className="p-3.5 sm:p-4 rounded-2xl bg-card border border-stone-200/80 dark:border-stone-800/80">
                                <div className="flex items-center gap-3">
                                    <Skeleton className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl shrink-0 bg-amber-100/50 dark:bg-stone-800" />
                                    <div className="space-y-2 flex-1 min-w-0">
                                        <Skeleton className="h-4 w-3/4 rounded bg-stone-200/80 dark:bg-stone-800" />
                                        <Skeleton className="h-3 w-1/2 rounded bg-stone-200/60 dark:bg-stone-800/60" />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            ) : savedRecipes && savedRecipes.length > 0 ? (
                <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-4"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="font-headline text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                            {t('home.recentSaved')}
                        </h2>
                        <Button variant="ghost" asChild className="text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-[#F4A21A]">
                            <Link href="/my-recipes" aria-label="View all saved recipes in your notebook" className="flex items-center gap-1">
                                {t('home.viewAll')}
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {savedRecipes.map((recipe: any) => (
                            <SavedRecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>
                </motion.section>
            ) : null}

        </div>
    );
}
