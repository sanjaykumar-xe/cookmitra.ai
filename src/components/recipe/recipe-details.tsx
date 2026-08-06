'use client';

import { useState, useEffect } from 'react';
import type { Recipe } from '@/lib/recipes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, BarChart2, CheckCircle2, Plus, Minus, ChefHat, Bookmark, Download, BadgeCheck } from 'lucide-react';
import { MissingIngredients } from './missing-ingredients';
import { RupeeIcon } from '../icons/rupee-icon';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc, setDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { generateRecipePDF } from '@/lib/pdf-export';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';

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
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-between items-start flex-wrap gap-6">
                <div className="flex-1 min-w-[300px]">
                    <div className="flex items-center gap-2 text-primary uppercase tracking-[0.2em] text-[10px] font-black mb-2">
                        <BadgeCheck className="h-4 w-4" /> 
                        Verified Master Recipe
                    </div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 16 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="font-headline text-4xl md:text-5xl font-medium tracking-tight"
                    >
                        {displayName}
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        {recipe?.description}
                    </motion.p>
                </div>
                <div className="flex gap-2 ml-auto">
                    <Button variant="outline" className="rounded-full h-11 px-6 font-bold" onClick={handleSaveToggle} disabled={isSaving || isCheckLoading}>
                        {isSaved ? <Bookmark className="h-4 w-4 mr-2 fill-current" /> : <Bookmark className="h-4 w-4 mr-2" />}
                        {isSaved ? t('recipe.saved') : t('recipe.save')}
                    </Button>
                    <Button className="rounded-full h-11 px-6 font-bold shadow-xl shadow-primary/20" onClick={onStartCooking}>
                        <ChefHat className="mr-2 h-4 w-4" /> {t('recipe.startCooking')}
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full h-11 w-11" onClick={() => generateRecipePDF({
                        ...recipe,
                        dishName: displayName,
                        cookingTime: String(displayTime),
                        estimatedCost: displayCost,
                        ingredients: ingredients.map(i => ({ name: i.name, quantity: i.qty, cost: i.price })),
                        instructions: steps
                    } as any, (k) => k)}>
                        <Download className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <MetadataCard icon={<Clock className="h-6 w-6"/>} label={t('recipe.prepTime')} value={`${displayTime} min`} />
                <div className="p-6 flex flex-col items-center justify-center bg-card/40 backdrop-blur-sm rounded-[2rem] border border-primary/5 hover:border-primary/20 transition-all group">
                    <Users className="text-primary mb-3 h-6 w-6 group-hover:scale-110 transition-transform"/>
                    <p className="font-bold text-xl">{servings} {t('recipe.servings')}</p>
                    <div className="flex items-center gap-3 mt-3">
                        <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8 rounded-full border-primary/20" 
                            onClick={() => setServings(s => Math.max(1, s - 1))}
                            disabled={servings <= 1}
                        >
                            <Minus className="h-3 w-3" />
                        </Button>
                        <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8 rounded-full border-primary/20" 
                            onClick={() => setServings(s => Math.min(12, s + 1))}
                            disabled={servings >= 12}
                        >
                            <Plus className="h-3 w-3" />
                        </Button>
                    </div>
                </div>
                <MetadataCard icon={<BarChart2 className="h-6 w-6"/>} label={t('recipe.difficulty')} value={displayDifficulty} />
                <MetadataCard icon={<RupeeIcon className="h-6 w-6" />} label={t('recipe.estCost')} value={`₹${totalCost}`} />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-fluid-grid items-start">
                <Card className="rounded-[2.5rem] border-primary/5 bg-card/30 backdrop-blur-sm overflow-hidden">
                    <CardHeader className="p-8 pb-4">
                        <CardTitle className="font-headline text-3xl">{t('recipe.ingredients')}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                        {ingredients.length > 0 ? (
                            <div className="space-y-1">
                                {ingredients.map((ing, i) => (
                                    <div 
                                        key={i} 
                                        onClick={() => handleToggleIngredient(i)} 
                                        className={cn(
                                            "flex justify-between items-center p-4 rounded-2xl cursor-pointer transition-all border-2 border-transparent",
                                            ingStates[i] ? "bg-green-500/5 border-green-500/20" : "hover:bg-muted/50"
                                        )}
                                    >
                                        <div className="flex items-center gap-4">
                                            {ingStates[i] ? (
                                                <div className="bg-green-500 rounded-full p-1"><CheckCircle2 className="h-4 w-4 text-white" /></div>
                                            ) : (
                                                <div className={cn("h-6 w-6 rounded-full border-2", ing.available ? "border-primary/40" : "border-orange-500/40")} />
                                            )}
                                            <div className="min-w-0">
                                                <span className={cn("font-bold text-base block truncate", ingStates[i] && "line-through text-muted-foreground")}>
                                                    {ing.name}
                                                </span>
                                                <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground opacity-60">
                                                    {ing.available ? t('recipe.available') : t('recipe.missing')}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="text-primary font-black text-sm whitespace-nowrap">
                                            {scaleQuantity(ing.qty, servingMultiplier)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-muted-foreground italic p-4 text-center">No ingredient data available.</p>
                        )}
                    </CardContent>
                </Card>
                <div className="h-full">
                    <h3 className="font-headline text-2xl mb-4 ml-4">{t('explorer.findIngredients')}</h3>
                    <MissingIngredients 
                        missingIngredients={ingredients.filter((_, i) => !ingStates[i]).map(i => {
                            const scaled = scaleQuantity(i.qty, servingMultiplier);
                            return scaled ? `${scaled} ${i.name}` : i.name;
                        })} 
                        userIngredients={ingredients.filter((_, i) => ingStates[i]).map(i => i.name)} 
                    />
                </div>
            </div>

            <Card className="rounded-[3rem] border-primary/10 overflow-hidden shadow-2xl">
                <CardHeader className="p-8 md:p-12 pb-0">
                    <CardTitle className="font-headline text-4xl">{t('recipe.instructions')}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 md:p-12">
                    {steps.length > 0 ? (
                        <ol className="space-y-10">
                            {steps.map((step, i) => (
                                <li key={i} className="flex gap-6 items-start group">
                                    <div className="h-10 w-10 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-black text-lg shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                        {i + 1}
                                    </div>
                                    <p className="pt-1.5 leading-relaxed text-xl opacity-90 font-medium">
                                        {step}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <p className="text-muted-foreground italic text-center">No instruction data available.</p>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

function MetadataCard({icon, label, value}: {icon: React.ReactNode, label: string, value: string | number}) {
    return (
        <div className="p-6 flex flex-col items-center justify-center bg-card/40 backdrop-blur-sm rounded-[2rem] border border-primary/5 hover:border-primary/20 transition-all group">
            <div className="text-primary mb-3 group-hover:scale-110 transition-transform">{icon}</div>
            <p className="font-bold text-xl text-center leading-none mb-1.5">{value}</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">{label}</p>
        </div>
    )
}
