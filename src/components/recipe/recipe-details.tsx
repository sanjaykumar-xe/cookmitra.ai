'use client';

import { useState, useEffect } from 'react';
import type { Recipe } from '@/lib/recipes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, BarChart2, CheckCircle2, Plus, Minus, ChefHat, Bookmark, Download, BadgeCheck } from 'lucide-react';
import { MissingIngredients } from './missing-ingredients';
import { RupeeIcon } from '../icons/rupee-icon';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/lib/firebase';
import { doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { generateRecipePDF } from '@/lib/pdf-export';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';
import Image from 'next/image';
import { getRecipeImageCandidates } from '@/lib/recipe-image-helper';

interface RecipeDetailsProps {
    recipe: Recipe;
    onStartCooking: () => void;
}

/**
 * Utility to scale a quantity string (e.g. "500g", "1/2 cup") by a multiplier.
 */
function scaleQuantity(qtyStr: string, multiplier: number): string {
    if (!qtyStr || multiplier === 1) return qtyStr;
    
    // Match integers, decimals, or simple fractions
    const regex = /(\d+\/\d+|\d+(\.\d+)?)/g;
    
    return qtyStr.replace(regex, (match) => {
        let value: number;
        if (match.includes('/')) {
            const [num, den] = match.split('/').map(Number);
            value = num / den;
        } else {
            value = Number(match);
        }
        
        const scaledValue = value * multiplier;
        
        // Clean formatting: round to 1 decimal place, remove .0
        return scaledValue.toFixed(1).replace(/\.0$/, '');
    });
}

export function RecipeDetails({ recipe, onStartCooking }: RecipeDetailsProps) {
    const { user } = useUser();
    const { t } = useLanguage();
    const firestore = useFirestore();
    const router = useRouter();
    const { toast } = useToast();
    
    // Safety check for all core fields
    const displayName = recipe?.name || 'Untitled Recipe';
    const displayTime = recipe?.time || 0;
    const displayCost = recipe?.cost || 0;
    const baseServings = recipe?.servings || 2;
    const displayDifficulty = recipe?.difficulty || 'Medium';
    const ingredients = recipe?.ingredients || [];
    const steps = recipe?.steps || [];

    const [servings, setServings] = useState(baseServings);
    const [ingStates, setIngStates] = useState<boolean[]>([]);
    const [isSaving, setIsSaving] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [candidateIndex, setCandidateIndex] = useState(0);

    const candidates = recipe?.imageUrl ? [recipe.imageUrl] : getRecipeImageCandidates(recipe?.id || '');

    useEffect(() => {
        setImageError(false);
        setCandidateIndex(0);
    }, [recipe?.id, recipe?.imageUrl]);

    const currentImageUrl = candidates[candidateIndex];
    const showImage = !!currentImageUrl && !imageError;

    const handleImageError = () => {
        if (candidateIndex < candidates.length - 1) {
            setCandidateIndex(prev => prev + 1);
        } else {
            setImageError(true);
        }
    };

    useEffect(() => {
        if (ingredients && ingredients.length > 0) {
            setIngStates(new Array(ingredients.length).fill(false));
        } else {
            setIngStates([]);
        }
    }, [recipe?.id, ingredients]);

    const savedRecipeRef = useMemoFirebase(() => (user && firestore && recipe?.id) ? doc(firestore, `users/${user.uid}/recipes`, recipe.id) : null, [user, firestore, recipe?.id]);
    const { data: savedData, isLoading: isCheckLoading } = useDoc(savedRecipeRef);
    const isSaved = !!savedData;

    const handleToggleIngredient = (index: number) => {
        setIngStates(prev => {
            const next = [...prev];
            next[index] = !next[index];
            return next;
        });
    };

    const handleSaveToggle = async () => {
        if (!user) { router.push('/login'); return; }
        if (!firestore || !recipe?.id) return;
        setIsSaving(true);
        try {
            const docRef = doc(firestore, `users/${user.uid}/recipes`, recipe.id);
            if (isSaved) {
                await deleteDoc(docRef);
                toast({ title: "Recipe removed from collection" });
            } else {
                await setDoc(docRef, { ...recipe, savedAt: serverTimestamp(), userId: user.uid });
                toast({ title: "Recipe saved to your kitchen!" });
            }
        } finally { setIsSaving(false); }
    };

    const servingMultiplier = servings / baseServings;
    const totalCost = Math.round(displayCost * servingMultiplier);

    return (
        <div className="max-w-5xl mx-auto space-y-10">
            {/* HERO FOOD IMAGE BANNER */}
            <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative h-72 sm:h-96 md:h-[420px] w-full rounded-[2.5rem] overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800/80 shadow-lg"
            >
                {showImage ? (
                    <Image 
                        src={currentImageUrl}
                        alt={displayName}
                        fill
                        priority
                        sizes="(max-width: 1200px) 100vw, 80vw"
                        className="object-cover"
                        onError={handleImageError}
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-100 dark:bg-stone-900">
                        <div className="bg-amber-500/10 p-6 rounded-3xl">
                            <ChefHat className="h-16 w-16 text-[#F4A21A]" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mt-4">Photo coming soon</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                
                {/* Badges Overlay on Hero Banner */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-2 pointer-events-none">
                    <div className="flex items-center gap-2">
                        <span className="bg-black/60 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full border border-white/20">
                            {recipe?.type || 'Vegetarian'}
                        </span>
                        {recipe?.menuCategory && (
                            <span className="bg-black/60 backdrop-blur-md text-white text-xs font-medium uppercase tracking-wider px-4 py-1.5 rounded-full border border-white/20">
                                {recipe.menuCategory}
                            </span>
                        )}
                    </div>
                </div>

                {/* Dish Name Overlay on Image Bottom */}
                <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-md space-y-1">
                    <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                        {displayName}
                    </h1>
                </div>
            </motion.div>

            {/* HEADER ACTIONS BAR */}
            <div className="flex justify-between items-center flex-wrap gap-6 py-4 border-b border-stone-200 dark:border-stone-800">
                <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 font-normal leading-relaxed max-w-2xl">
                    {recipe?.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 ml-auto">
                    <motion.div 
                        whileTap={{ scale: 0.95 }} 
                        animate={{ scale: isSaved ? [1, 1.15, 1] : 1 }} 
                        transition={{ duration: 0.3 }}
                    >
                        <Button 
                            variant="outline" 
                            className={cn(
                                "rounded-full h-12 px-6 font-semibold text-xs uppercase tracking-wider transition-all border",
                                isSaved 
                                    ? "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30 hover:bg-amber-500/20" 
                                    : "bg-white dark:bg-stone-900 border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 hover:border-stone-300 dark:hover:border-stone-700"
                            )} 
                            onClick={handleSaveToggle} 
                            disabled={isSaving || isCheckLoading}
                        >
                            {isSaved ? <Bookmark className="h-4 w-4 mr-2 fill-[#F4A21A] text-[#F4A21A]" /> : <Bookmark className="h-4 w-4 mr-2" />}
                            {isSaved ? t('recipe.saved') : t('recipe.save')}
                        </Button>
                    </motion.div>
                    <Button className="rounded-full h-12 px-7 font-semibold text-xs uppercase tracking-wider bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-md shadow-amber-500/20 border-0 transition-all active:scale-95" onClick={onStartCooking}>
                        <ChefHat className="mr-2 h-4 w-4" /> {t('recipe.startCooking')}
                    </Button>
                    <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full h-12 w-12 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 hover:border-stone-300 dark:hover:border-stone-700 text-stone-800 dark:text-stone-200 transition-all" 
                        onClick={() => generateRecipePDF({
                            ...recipe,
                            dishName: displayName,
                            cookingTime: String(displayTime),
                            estimatedCost: displayCost,
                            ingredients: ingredients.map(i => ({ name: i.name, quantity: i.qty, cost: i.price })),
                            instructions: steps
                        } as any, (k) => k)}
                    >
                        <Download className="h-4 w-4 text-stone-700 dark:text-stone-300" />
                    </Button>
                </div>
            </div>

            {/* METADATA CARDS GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <MetadataCard icon={<Clock className="h-5 w-5 text-amber-500"/>} label={t('recipe.prepTime')} value={`${displayTime} min`} />
                <div className="p-6 flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm rounded-[2rem] border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:border-amber-500/30 transition-all group">
                    <Users className="text-sky-500 mb-2 h-5 w-5 group-hover:scale-110 transition-transform"/>
                    <p className="font-headline text-2xl font-semibold text-stone-900 dark:text-stone-100">{servings} {t('recipe.servings')}</p>
                    <div className="flex items-center gap-2 mt-2">
                        <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-7 w-7 rounded-full border-stone-300 dark:border-stone-700" 
                            onClick={() => setServings(s => Math.max(1, s - 1))}
                            disabled={servings <= 1}
                        >
                            <Minus className="h-3 w-3" />
                        </Button>
                        <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-7 w-7 rounded-full border-stone-300 dark:border-stone-700" 
                            onClick={() => setServings(s => Math.min(12, s + 1))}
                            disabled={servings >= 12}
                        >
                            <Plus className="h-3 w-3" />
                        </Button>
                    </div>
                </div>
                <MetadataCard icon={<BarChart2 className="h-5 w-5 text-purple-500"/>} label={t('recipe.difficulty')} value={displayDifficulty} />
                <MetadataCard icon={<RupeeIcon className="h-5 w-5 text-emerald-500" />} label={t('recipe.estCost')} value={`₹${totalCost}`} />
            </div>
            
            {/* INGREDIENTS & MISSING ITEMS GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                <Card className="rounded-[2.5rem] border-stone-200/80 dark:border-stone-800/80 bg-card/80 backdrop-blur-sm overflow-hidden shadow-xs flex flex-col justify-between">
                    <CardHeader className="p-6 md:p-8 pb-3 border-b border-stone-100 dark:border-stone-800">
                        <CardTitle className="font-headline text-2xl font-medium text-stone-900 dark:text-stone-100">{t('recipe.ingredients')}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8 pt-4 flex-1">
                        {ingredients.length > 0 ? (
                            <div className="space-y-1.5">
                                {ingredients.map((ing, i) => (
                                    <div 
                                        key={i} 
                                        onClick={() => handleToggleIngredient(i)} 
                                        className={cn(
                                            "flex justify-between items-center p-3.5 rounded-2xl cursor-pointer transition-all border",
                                            ingStates[i] 
                                                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-300" 
                                                : "border-transparent hover:bg-stone-100 dark:hover:bg-stone-800/60"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            {ingStates[i] ? (
                                                <div className="bg-emerald-500 rounded-full p-1"><CheckCircle2 className="h-3.5 w-3.5 text-white" /></div>
                                            ) : (
                                                <div className={cn("h-5 w-5 rounded-full border-2", ing.available ? "border-amber-500/40" : "border-stone-300 dark:border-stone-700")} />
                                            )}
                                            <div className="min-w-0">
                                                <span className={cn("font-medium text-sm block truncate text-stone-900 dark:text-stone-100", ingStates[i] && "line-through text-stone-400 dark:text-stone-500")}>
                                                    {ing.name}
                                                </span>
                                                <span className="text-[10px] uppercase font-semibold tracking-wider text-stone-400">
                                                    {ing.available ? t('recipe.available') : t('recipe.missing')}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="text-[#F4A21A] font-semibold text-sm whitespace-nowrap">
                                            {scaleQuantity(ing.qty, servingMultiplier)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-stone-500 italic p-4 text-center">No ingredient data available.</p>
                        )}
                    </CardContent>
                </Card>

                <div className="h-full flex flex-col">
                    <MissingIngredients 
                        missingIngredients={ingredients.filter((_, i) => !ingStates[i]).map(i => {
                            const scaled = scaleQuantity(i.qty, servingMultiplier);
                            return scaled ? `${scaled} ${i.name}` : i.name;
                        })} 
                        userIngredients={ingredients.filter((_, i) => ingStates[i]).map(i => i.name)} 
                    />
                </div>
            </div>

            {/* STEP BY STEP INSTRUCTIONS */}
            <Card className="rounded-[2.5rem] border-stone-200/80 dark:border-stone-800/80 bg-card/80 backdrop-blur-sm overflow-hidden shadow-xs">
                <CardHeader className="p-6 md:p-10 pb-2 border-b border-stone-100 dark:border-stone-800">
                    <CardTitle className="font-headline text-3xl font-medium text-stone-900 dark:text-stone-100">{t('recipe.instructions')}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 md:p-10">
                    {steps.length > 0 ? (
                        <ol className="space-y-8">
                            {steps.map((step, i) => (
                                <li key={i} className="flex gap-5 items-start group">
                                    <div className="h-11 w-11 bg-amber-500/10 text-[#F4A21A] rounded-2xl flex items-center justify-center font-bold text-lg shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                                        {i + 1}
                                    </div>
                                    <p className="pt-1.5 leading-relaxed text-base md:text-lg font-normal text-stone-800 dark:text-stone-200">
                                        {step}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <p className="text-stone-500 italic text-center">No instruction data available.</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

function MetadataCard({icon, label, value}: {icon: React.ReactNode, label: string, value: string | number}) {
    return (
        <div className="p-6 flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm rounded-[2rem] border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:border-amber-500/30 transition-all group">
            <div className="mb-2 group-hover:scale-110 transition-transform">{icon}</div>
            <p className="font-headline text-2xl font-semibold text-center leading-tight mb-1 text-stone-900 dark:text-stone-100">{value}</p>
            <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500">{label}</p>
        </div>
    );
}
