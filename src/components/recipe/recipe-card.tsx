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

    const candidates = recipe.imageUrl ? [recipe.imageUrl] : getRecipeImageCandidates(recipe.id);

    useEffect(() => {
        setIsFlipped(false);
        setImageError(false);
        setCandidateIndex(0);
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
        } else {
            setImageError(true);
        }
    };

    return (
        <div 
            className="flip-card-container h-[520px] w-full"
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
                    <Card className="flex flex-col h-full rounded-[2.5rem] glass-card border-primary/5 shadow-lg group overflow-hidden">
                        {/* Image Container */}
                        <div className="relative h-48 w-full bg-muted overflow-hidden">
                            {showImage ? (
                                <Image 
                                    src={currentImageUrl}
                                    alt={recipe.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    data-ai-hint="indian kitchen"
                                    onError={handleImageError}
                                />
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900/40">
                                    <div className="bg-primary/10 p-6 rounded-[2rem] transition-transform group-hover:scale-110 duration-500 shadow-inner">
                                        <ChefHat className="h-16 w-16 text-primary opacity-40" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/30 mt-4">Photo coming soon</span>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                            <div className="absolute top-4 left-4">
                                <Badge variant={recipe.type === 'Vegetarian' ? 'secondary' : 'destructive'} className="font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-lg">
                                    {recipe.type}
                                </Badge>
                            </div>
                        </div>

                        <CardHeader className="p-8 pb-4 flex-1 flex flex-col">
                            <div className="flex-1 flex flex-col justify-center gap-4">
                                <CardTitle className="font-headline text-2xl font-bold tracking-tight line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                                    {recipe.name}
                                </CardTitle>
                                <CardDescription className="line-clamp-4 font-medium text-fluid-subtitle leading-relaxed text-muted-foreground">
                                    {recipe.description}
                                </CardDescription>
                                <div className="flex flex-wrap gap-1.5">
                                    {recipe.tags?.slice(0, 3).map(tag => (
                                        <Badge key={tag} variant="outline" className="text-[9px] font-black uppercase tracking-tighter bg-muted/30 border-border/40">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </CardHeader>
                        
                        <CardFooter className="px-8 pb-8 pt-0 mt-auto">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-60">
                                {isTouchDevice ? "Tap for details →" : "Hover for details →"}
                            </span>
                        </CardFooter>
                    </Card>
                </div>

                {/* BACK FACE */}
                <div className="flip-card-back h-full w-full">
                    <Card className="flex flex-col h-full rounded-[2.5rem] glass-card border-primary/40 shadow-xl overflow-hidden bg-white/95 dark:bg-zinc-900/95">
                        <CardHeader className="p-8 pb-2">
                            <CardTitle className="font-headline text-xl font-bold tracking-tight line-clamp-1">
                                {recipe.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow px-8 pt-2 overflow-hidden">
                            <div className="grid grid-cols-2 gap-2 mb-5">
                                <InfoPill icon={<Clock className="h-4 w-4"/>} label="Time" value={`${recipe.time}m`} />
                                <InfoPill icon={<Users className="h-4 w-4"/>} label="Serves" value={`${recipe.servings}`} />
                                <InfoPill icon={<BarChart2 className="h-4 w-4"/>} label="Level" value={recipe.difficulty} />
                                <InfoPill icon={<RupeeIcon className="h-4 w-4" />} label="Cost" value={`₹${recipe.cost}`} />
                            </div>
                            <div className="border-t border-border/40 pt-4">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-muted-foreground opacity-60">Key Ingredients</h4>
                                <div className="flex flex-wrap gap-2">
                                    {recipe.ingredients.slice(0, 4).map(ing => (
                                        <Badge key={ing.id} variant="outline" className="text-[10px] font-bold bg-muted/20 border-border/30 py-1.5 px-3 rounded-xl">
                                            {ing.name}
                                        </Badge>
                                    ))}
                                    {recipe.ingredients.length > 4 && (
                                        <Badge variant="secondary" className="text-[10px] font-black bg-primary/10 text-primary border-primary/10 rounded-xl">
                                            +{(recipe.ingredients.length - 4)} more
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="p-8">
                            <Button asChild className="w-full h-14 font-black uppercase tracking-[0.2em] text-xs rounded-2xl shadow-xl transition-all active:scale-95 btn-primary-gradient border-0">
                                <Link href={`/recipes/${recipe.id}`} className="flex items-center justify-center">
                                    View Details & Cook
                                    <ChevronRight className="ml-2 h-4 w-4" />
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
