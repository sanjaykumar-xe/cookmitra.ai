'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, BarChart2, ChevronRight, ChefHat } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { RupeeIcon } from '@/components/icons/rupee-icon';
import { getRecipeImageCandidates } from '@/lib/recipe-image-helper';
import type { Recipe } from '@/lib/recipes/types';

export function RecipeCard({ recipe }: { recipe: Recipe }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [candidateIndex, setCandidateIndex] = useState(0);
    const [isImageLoading, setIsImageLoading] = useState(true);

    const candidates = recipe.imageUrl ? [recipe.imageUrl] : getRecipeImageCandidates(recipe.id);

    useEffect(() => {
        setIsFlipped(false);
        setImageError(false);
        setCandidateIndex(0);
        setIsImageLoading(true);
    }, [recipe.id, recipe.imageUrl]);

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

    const handleImageLoad = () => {
        setIsImageLoading(false);
    };

    return (
        <div 
            className="flip-card-container h-[480px] w-full"
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            onClick={handleFlip}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${recipe.name}`}
        >
            <div className={cn("flip-card-inner h-full w-full", isFlipped && "is-flipped")}>
                {/* FRONT FACE */}
                <div className="flip-card-front h-full w-full">
                    <Card className="flex flex-col h-full rounded-[2rem] bg-card/90 backdrop-blur-md border border-stone-200/80 dark:border-stone-800/80 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                        {/* Image Container */}
                        <div className="relative h-44 w-full bg-stone-100 dark:bg-stone-900 overflow-hidden shrink-0">
                            {showImage ? (
                                <>
                                    {isImageLoading && (
                                        <div className="absolute inset-0 bg-stone-200 dark:bg-stone-800 animate-pulse z-10" />
                                    )}
                                    <Image 
                                        src={currentImageUrl}
                                        alt={recipe.name}
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
                                </>
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100 dark:bg-stone-900/60">
                                    <div className="bg-amber-500/10 p-4 rounded-2xl transition-transform group-hover:scale-105 duration-500">
                                        <ChefHat className="h-10 w-10 text-[#F4A21A]" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mt-2.5">Photo coming soon</span>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none z-20" />
                            
                            {/* Badges Overlay */}
                            <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5 pointer-events-none">
                                <Badge variant={recipe.type === 'Vegetarian' ? 'secondary' : 'destructive'} className="font-semibold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm">
                                    {recipe.type}
                                </Badge>
                                {recipe.menuCategory && (
                                    <Badge variant="outline" className="font-medium text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/50 text-white backdrop-blur-md border-white/20 shadow-sm">
                                        {recipe.menuCategory}
                                    </Badge>
                                )}
                            </div>

                            {/* Key Stats Chips Overlay on Image Bottom */}
                            <div className="absolute bottom-2.5 left-3 right-3 flex items-center gap-2 text-white text-[11px] font-medium drop-shadow-md">
                                <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                                    <Clock className="h-3 w-3 text-amber-400" /> {recipe.time}m
                                </span>
                                <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                                    <RupeeIcon className="h-3 w-3 text-emerald-400" /> ₹{recipe.cost}
                                </span>
                                <span className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 ml-auto">
                                    <Users className="h-3 w-3 text-sky-400" /> {recipe.servings}
                                </span>
                            </div>
                        </div>

                        {/* Card Content */}
                        <CardHeader className="p-5 pb-2 flex-1 flex flex-col justify-between">
                            <div className="space-y-2">
                                <CardTitle className="font-headline text-lg font-semibold tracking-tight line-clamp-1 text-stone-900 dark:text-stone-100 group-hover:text-[#F4A21A] transition-colors">
                                    {recipe.name}
                                </CardTitle>
                                <CardDescription className="line-clamp-2 text-xs sm:text-sm font-normal text-stone-600 dark:text-stone-300 leading-relaxed">
                                    {recipe.description}
                                </CardDescription>
                            </div>

                            <div className="pt-2">
                                <div className="flex flex-wrap gap-1.5">
                                    {recipe.tags?.slice(0, 3).map(tag => (
                                        <Badge key={tag} variant="outline" className="text-[10px] font-medium tracking-tight bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/20 rounded-full px-2.5 py-0.5">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </CardHeader>
                        
                        <CardFooter className="px-5 pb-4 pt-1 mt-auto border-t border-stone-100 dark:border-stone-800/60 flex justify-between items-center text-xs font-semibold text-stone-400 dark:text-stone-500 group-hover:text-[#F4A21A] transition-colors">
                            <span>{isTouchDevice ? "Tap for full recipe" : "Hover for full recipe"}</span>
                            <ChevronRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                        </CardFooter>
                    </Card>
                </div>

                {/* BACK FACE */}
                <div className="flip-card-back h-full w-full">
                    <Card className="flex flex-col h-full rounded-[2rem] bg-card border-2 border-amber-500/30 shadow-xl overflow-hidden p-5">
                        <CardHeader className="p-0 pb-3 border-b border-stone-200 dark:border-stone-800">
                            <CardTitle className="font-headline text-lg font-semibold tracking-tight line-clamp-1 text-stone-900 dark:text-stone-100">
                                {recipe.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow p-0 pt-3 overflow-hidden space-y-4">
                            <div className="grid grid-cols-2 gap-2">
                                <InfoPill icon={<Clock className="h-3.5 w-3.5 text-amber-500"/>} label="Time" value={`${recipe.time}m`} />
                                <InfoPill icon={<Users className="h-3.5 w-3.5 text-sky-500"/>} label="Serves" value={`${recipe.servings}`} />
                                <InfoPill icon={<BarChart2 className="h-3.5 w-3.5 text-purple-500"/>} label="Level" value={recipe.difficulty} />
                                <InfoPill icon={<RupeeIcon className="h-3.5 w-3.5 text-emerald-500" />} label="Cost" value={`₹${recipe.cost}`} />
                            </div>
                            <div className="border-t border-stone-200 dark:border-stone-800 pt-3">
                                <h4 className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2">Key Ingredients</h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {recipe.ingredients.slice(0, 4).map(ing => (
                                        <Badge key={ing.id} variant="outline" className="text-[11px] font-medium bg-stone-100 dark:bg-stone-800/80 border-stone-200 dark:border-stone-700 py-1 px-2.5 rounded-lg">
                                            {ing.name}
                                        </Badge>
                                    ))}
                                    {recipe.ingredients.length > 4 && (
                                        <Badge variant="secondary" className="text-[10px] font-bold bg-amber-500/10 text-[#F4A21A] border-0 rounded-lg">
                                            +{(recipe.ingredients.length - 4)} more
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="p-0 pt-3 mt-auto">
                            <Button asChild className="w-full h-11 font-semibold text-xs uppercase tracking-wider rounded-full bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-md shadow-amber-500/25 transition-all border-0">
                                <Link href={`/recipes/${recipe.id}`} className="flex items-center justify-center gap-1">
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
        <div className="flex items-center gap-3 p-2.5 bg-muted/30 rounded-2xl border border-transparent hover:border-border/60 transition-all">
            <div className="text-primary shrink-0">{icon}</div>
            <div className="min-w-0">
                <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-60 leading-none mb-1">{label}</p>
                <p className="font-bold text-xs truncate">{value}</p>
            </div>
        </div>
    )
}
