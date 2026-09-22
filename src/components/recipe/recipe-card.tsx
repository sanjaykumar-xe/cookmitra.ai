'use client';

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, BarChart2, ChevronRight, ChefHat } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { RupeeIcon } from '@/components/icons/rupee-icon';
import { resolveRecipeImageCandidates } from '@/lib/recipe-image-helper';
import { recipes as allRecipes } from '@/lib/recipes';
import type { Recipe } from '@/lib/recipes/types';

export function RecipeCard({ recipe, href }: { recipe: any; href?: string }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [candidateIndex, setCandidateIndex] = useState(0);
    const [isImageLoading, setIsImageLoading] = useState(true);

    const displayName = recipe?.name || recipe?.dishName || "Untitled Recipe";
    const displayTime = recipe?.time || recipe?.cookingTime || 0;
    const displayCost = recipe?.cost || recipe?.estimatedCost || 0;
    const displayLevel = recipe?.difficulty || 'Medium';
    const displayServings = recipe?.servings || 2;
    const displayType = recipe?.type || 'Vegetarian';

    const candidates = useMemo(() => {
        return resolveRecipeImageCandidates(recipe);
    }, [recipe]);

    useEffect(() => {
        setIsFlipped(false);
        setImageError(false);
        setCandidateIndex(0);
        setIsImageLoading(candidates.length > 0);
    }, [recipe?.id, recipe?.imageUrl, candidates.length]);

    useEffect(() => {
        setIsTouchDevice(window.matchMedia('(hover: none)').matches);
    }, []);

    const handleFlip = () => {
        if (isTouchDevice) {
            setIsFlipped(!isFlipped);
        }
    };

    const handlePointerEnter = () => {
        if (!isTouchDevice) setIsFlipped(true);
    };

    const handlePointerLeave = () => {
        if (!isTouchDevice) setIsFlipped(false);
    };

    const currentImageUrl = candidates[candidateIndex];
    const showImage = !!currentImageUrl && !imageError && candidates.length > 0;

    const handleImageError = () => {
        if (candidateIndex < candidates.length - 1) {
            setCandidateIndex(prev => prev + 1);
            setIsImageLoading(true);
        } else {
            setImageError(true);
            setIsImageLoading(false);
        }
    };

    const handleImageLoad = () => {
        setIsImageLoading(false);
    };

    const isKnownCatalogRecipe = allRecipes.some(r => r.id === recipe?.id);
    const detailHref = href || (isKnownCatalogRecipe ? `/recipes/${recipe?.id}` : `/my-recipes/${recipe?.id}`);

    return (
        <div 
            className="flip-card-container h-[350px] sm:h-[430px] w-full"
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            onClick={handleFlip}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${displayName}`}
        >
            <div className={cn("flip-card-inner h-full w-full", isFlipped && "is-flipped")}>
                {/* FRONT FACE */}
                <div className="flip-card-front h-full w-full">
                    <Card className="flex flex-col h-full rounded-2xl sm:rounded-[2rem] bg-card/90 backdrop-blur-md border border-stone-200/80 dark:border-stone-800/80 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        {/* Image Container */}
                        <div className="relative h-36 sm:h-44 w-full bg-stone-100 dark:bg-stone-900 overflow-hidden shrink-0">
                            {showImage ? (
                                <>
                                    {isImageLoading && (
                                        <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800 animate-pulse z-10" />
                                    )}
                                    <Image 
                                        src={currentImageUrl}
                                        alt={displayName}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className={cn(
                                            "object-cover transition-all duration-700 group-hover:scale-105",
                                            isImageLoading ? "opacity-0" : "opacity-100"
                                        )}
                                        data-ai-hint="indian kitchen"
                                        onLoad={handleImageLoad}
                                        onError={handleImageError}
                                    />
                                    {/* Gradient overlay ONLY when real photo is shown */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none z-20" />
                                </>
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-amber-500/5 via-stone-100 to-stone-200 dark:from-amber-500/10 dark:via-stone-900 dark:to-stone-800/90 border-b border-stone-200/80 dark:border-stone-800">
                                    <div className="bg-amber-500/15 dark:bg-amber-500/20 p-3 sm:p-3.5 rounded-2xl transition-transform group-hover:scale-110 duration-300 shadow-xs border border-amber-500/20">
                                        <ChefHat className="h-7 w-7 sm:h-8 sm:w-8 text-[#F4A21A]" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400 mt-2">Photo coming soon</span>
                                </div>
                            )}
                            
                            {/* Badges Overlay */}
                            <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between gap-1.5 pointer-events-none z-20">
                                <Badge variant={displayType === 'Vegetarian' ? 'secondary' : 'destructive'} className="font-semibold text-[10px] uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full shadow-sm">
                                    {displayType}
                                </Badge>
                                {recipe?.menuCategory && (
                                    <Badge variant="outline" className={cn(
                                        "font-medium text-[10px] uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full shadow-sm",
                                        showImage ? "bg-black/50 text-white backdrop-blur-md border-white/20" : "bg-card/90 text-foreground border-stone-200 dark:border-stone-700"
                                    )}>
                                        {recipe.menuCategory}
                                    </Badge>
                                )}
                            </div>

                            {/* Key Stats Chips Overlay on Image Bottom */}
                            <div className="absolute bottom-2 sm:bottom-2.5 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-medium z-20">
                                <span className={cn(
                                    "flex items-center gap-1 px-2 py-0.5 rounded-full border shadow-xs",
                                    showImage ? "bg-black/50 text-white backdrop-blur-md border-white/10" : "bg-card/90 text-stone-700 dark:text-stone-300 border-stone-200/80 dark:border-stone-700"
                                )}>
                                    <Clock className="h-3 w-3 text-amber-500" /> {displayTime}m
                                </span>
                                <span className={cn(
                                    "flex items-center gap-1 px-2 py-0.5 rounded-full border shadow-xs",
                                    showImage ? "bg-black/50 text-white backdrop-blur-md border-white/10" : "bg-card/90 text-stone-700 dark:text-stone-300 border-stone-200/80 dark:border-stone-700"
                                )}>
                                    <RupeeIcon className="h-3 w-3 text-emerald-500" /> ₹{displayCost}
                                </span>
                                <span className={cn(
                                    "flex items-center gap-1 px-2 py-0.5 rounded-full border shadow-xs ml-auto",
                                    showImage ? "bg-black/50 text-white backdrop-blur-md border-white/10" : "bg-card/90 text-stone-700 dark:text-stone-300 border-stone-200/80 dark:border-stone-700"
                                )}>
                                    <Users className="h-3 w-3 text-sky-500" /> {displayServings}
                                </span>
                            </div>
                        </div>

                        {/* Card Content */}
                        <CardHeader className="p-3.5 sm:p-5 pb-1 sm:pb-2 flex-1 flex flex-col justify-between">
                            <div className="space-y-1 sm:space-y-1.5">
                                <CardTitle className="font-headline text-base sm:text-lg font-semibold tracking-tight line-clamp-1 text-stone-900 dark:text-stone-100 group-hover:text-[#F4A21A] transition-colors">
                                    {displayName}
                                </CardTitle>
                                <CardDescription className="line-clamp-2 text-xs sm:text-sm font-normal text-stone-600 dark:text-stone-300 leading-snug sm:leading-relaxed">
                                    {recipe?.description || (recipe?.ingredients?.length ? `${recipe.ingredients.length} ingredients • ${displayType} specialty` : "Authentic regional recipe with step-by-step instructions.")}
                                </CardDescription>
                            </div>

                            <div className="pt-1 sm:pt-2">
                                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                                    {recipe?.tags && recipe.tags.length > 0 ? (
                                        recipe.tags.slice(0, 3).map((tag: string) => (
                                            <Badge key={tag} variant="outline" className="text-[10px] font-medium tracking-tight bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/20 rounded-full px-2 sm:px-2.5 py-0.5">
                                                {tag}
                                            </Badge>
                                        ))
                                    ) : (
                                        <Badge variant="outline" className="text-[10px] font-medium tracking-tight bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700 rounded-full px-2 sm:px-2.5 py-0.5">
                                            {recipe?.difficulty || "Custom Recipe"}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        </CardHeader>
                        
                        <CardFooter className="px-3.5 sm:px-5 py-2 sm:pb-4 sm:pt-1 mt-auto border-t border-stone-100 dark:border-stone-800/60 flex justify-between items-center text-xs font-semibold text-stone-400 dark:text-stone-500 group-hover:text-[#F4A21A] transition-colors">
                            <span>{isTouchDevice ? "Tap for full recipe" : "Hover for full recipe"}</span>
                            <ChevronRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                        </CardFooter>
                    </Card>
                </div>

                {/* BACK FACE */}
                <div className="flip-card-back h-full w-full">
                    <Card className="flex flex-col h-full rounded-2xl sm:rounded-[2rem] bg-card border-2 border-amber-500/30 shadow-xl overflow-hidden p-3.5 sm:p-5">
                        <CardHeader className="p-0 pb-2 sm:pb-3 border-b border-stone-200 dark:border-stone-800">
                            <CardTitle className="font-headline text-base sm:text-lg font-semibold tracking-tight line-clamp-1 text-stone-900 dark:text-stone-100">
                                {displayName}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow p-0 pt-2 sm:pt-3 overflow-hidden space-y-2.5 sm:space-y-4">
                            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                                <InfoPill icon={<Clock className="h-3.5 w-3.5 text-amber-500"/>} label="Time" value={`${displayTime}m`} />
                                <InfoPill icon={<Users className="h-3.5 w-3.5 text-sky-500"/>} label="Serves" value={`${displayServings}`} />
                                <InfoPill icon={<BarChart2 className="h-3.5 w-3.5 text-purple-500"/>} label="Level" value={displayLevel} />
                                <InfoPill icon={<RupeeIcon className="h-3.5 w-3.5 text-emerald-500" />} label="Cost" value={`₹${displayCost}`} />
                            </div>
                            <div className="border-t border-stone-200 dark:border-stone-800 pt-2 sm:pt-3">
                                <h4 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5 sm:mb-2">Key Ingredients</h4>
                                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                                    {(recipe?.ingredients || []).slice(0, 4).map((ing: any, idx: number) => {
                                        const ingName = typeof ing === 'string' ? ing : ing?.name;
                                        const ingKey = typeof ing === 'string' ? `${ing}-${idx}` : (ing?.id || `${ingName}-${idx}`);
                                        if (!ingName) return null;
                                        return (
                                            <Badge key={ingKey} variant="outline" className="text-[10px] sm:text-[11px] font-medium bg-stone-100 dark:bg-stone-800/80 border-stone-200 dark:border-stone-700 py-0.5 sm:py-1 px-2 sm:px-2.5 rounded-lg">
                                                {ingName}
                                            </Badge>
                                        );
                                    })}
                                    {((recipe?.ingredients?.length || 0) > 4) && (
                                        <Badge variant="secondary" className="text-[10px] font-bold bg-amber-500/10 text-[#F4A21A] border-0 rounded-lg">
                                            +{((recipe?.ingredients?.length || 0) - 4)} more
                                        </Badge>
                                    )}
                                    {(!recipe?.ingredients || recipe.ingredients.length === 0) && (
                                        <span className="text-xs text-stone-400 dark:text-stone-500 italic">No ingredients listed</span>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="p-0 pt-2 sm:pt-3 mt-auto">
                            <Button asChild className="w-full h-10 sm:h-11 font-semibold text-xs uppercase tracking-wider rounded-full bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-md shadow-amber-500/25 transition-all border-0">
                                <Link href={detailHref} className="flex items-center justify-center gap-1">
                                    View Details & Cook
                                    <ChevronRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function InfoPill({icon, label, value}: {icon: React.ReactNode, label: string, value: string | number}) {
    return (
        <div className="flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2.5 bg-muted/30 rounded-xl sm:rounded-2xl border border-transparent hover:border-border/60 transition-all">
            <div className="text-primary shrink-0">{icon}</div>
            <div className="min-w-0">
                <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-60 leading-none mb-0.5 sm:mb-1">{label}</p>
                <p className="font-bold text-xs truncate">{value}</p>
            </div>
        </div>
    )
}
