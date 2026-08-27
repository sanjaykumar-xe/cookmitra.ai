'use client';

import { useState, useMemo, useEffect } from 'react';
import { useFirestore } from '@/lib/firebase';
import { recipes as allRecipes } from '@/lib/recipes';
import { CURATED_CONDITIONS, type HealthCondition } from '@/lib/healing-foods/conditions';
import { generateHealingFoodsAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
    HeartPulse, 
    Search, 
    Info, 
    Loader2, 
    CheckCircle2, 
    AlertTriangle, 
    Flame, 
    Heart, 
    Zap, 
    Apple, 
    Wheat, 
    Leaf,
    Coffee,
    Sun,
    Salad,
    Milk,
    Droplets,
    ChevronRight,
    Soup,
    Droplet,
    Activity,
    Scale,
    ShieldCheck,
    Wind,
    Baby,
    Utensils,
    Cherry,
    Sprout
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { RecipeCard } from '@/components/recipe/recipe-card';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

const conditionIconMap: Record<string, any> = {
    'Diabetes': Droplet,
    'PCOS/PCOD': Heart,
    'Hypertension (High BP)': Activity,
    'Anemia': Droplets,
    'Heart Health': Heart,
    'Digestive Issues': Utensils,
    'Weight Management': Scale,
    'Immunity Boost': ShieldCheck,
    'Cold & Cough': Wind,
    'Pregnancy Nutrition': Baby,
};

const iconMap: Record<string, any> = {
    Leaf, Zap, Sparkles: Sun, Salad, Wheat, Apple, Heart, Coffee, Sun, Milk, Droplets, Flame, Soup, AlertTriangle, Cherry, Sprout
};

function getFoodIcon(name: string, type: 'help' | 'avoid', iconKey?: string) {
    if (type === 'avoid') return AlertTriangle;
    if (iconKey && iconMap[iconKey]) return iconMap[iconKey];
    const n = name.toLowerCase();
    if (n.includes('tea') || n.includes('beverage')) return Coffee;
    if (n.includes('turmeric') || n.includes('amla') || n.includes('gooseberry') || n.includes('cinnamon')) return Sun;
    if (n.includes('berry') || n.includes('berries') || n.includes('citrus')) return Cherry;
    if (n.includes('nut') || n.includes('seed') || n.includes('flax') || n.includes('sprouts')) return Sprout;
    if (n.includes('grain') || n.includes('oats') || n.includes('dalia') || n.includes('dal') || n.includes('lentil') || n.includes('bean') || n.includes('flour')) return Wheat;
    if (n.includes('green') || n.includes('spinach') || n.includes('moringa') || n.includes('gourd') || n.includes('tulsi') || n.includes('karela') || n.includes('leaf')) return Salad;
    if (n.includes('banana') || n.includes('papaya') || n.includes('cucumber') || n.includes('apple')) return Apple;
    if (n.includes('yogurt') || n.includes('milk') || n.includes('dahi') || n.includes('paneer') || n.includes('curd')) return Milk;
    if (n.includes('oil') || n.includes('chaas') || n.includes('water') || n.includes('gur') || n.includes('jaggery')) return Droplets;
    if (n.includes('ginger') || n.includes('garlic') || n.includes('pepper')) return Flame;
    if (n.includes('beetroot')) return Heart;
    return CheckCircle2;
}

function HealingFoodCard({ item, type }: { item: any, type: 'help' | 'avoid' }) {
    const Icon = getFoodIcon(item.name || '', type, item.icon);
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                "group p-6 rounded-[2rem] border-2 transition-all duration-300 h-full flex flex-col justify-between",
                type === 'help' 
                    ? "bg-pink-500/5 border-pink-500/10 hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-500/5" 
                    : "bg-muted/30 border-border/60 hover:border-red-500/30"
            )}
        >
            <div className="flex items-start gap-4">
                <div className={cn(
                    "p-3 rounded-2xl shrink-0 transition-transform group-hover:scale-110",
                    type === 'help' ? "bg-pink-500/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400" : "bg-red-500/10 text-red-500"
                )}>
                    <Icon className="h-6 w-6 stroke-[1.75]" />
                </div>
                <div>
                    <h4 className="font-headline font-bold text-lg leading-tight mb-1">{item.name}</h4>
                    <p className="text-fluid-subtitle text-muted-foreground leading-relaxed">{item.reason}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default function HealingFoodsPage() {
    const firestore = useFirestore();
    const { toast } = useToast();
    
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCondition, setActiveCondition] = useState<HealthCondition | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSelectCondition = async (condition: HealthCondition | string) => {
        if (!firestore) return;
        
        const conditionName = typeof condition === 'string' ? condition.trim() : condition.name;
        if (!conditionName) return;

        setIsLoading(true);
        
        try {
            if (typeof condition === 'string') {
                const normalizedKey = conditionName.toLowerCase().replace(/\s+/g, '-');
                const cacheRef = doc(firestore, "healingFoodsCache", normalizedKey);

                // 1. Check Client-Side Cache
                let cacheSnap;
                try {
                    cacheSnap = await getDoc(cacheRef);
                } catch (cacheErr) {
                    console.warn("Cache read failed (possibly permissions):", cacheErr);
                }

                if (cacheSnap?.exists()) {
                    setActiveCondition(cacheSnap.data() as HealthCondition);
                } else {
                    // 2. Generate via Server Action if not cached
                    const result = await generateHealingFoodsAction(conditionName);
                    
                    if (result.success && result.data) {
                        const generatedData = result.data as any;
                        const finalData = { id: normalizedKey, ...generatedData };
                        setActiveCondition(finalData);
                        
                        const sanitizedData = JSON.parse(JSON.stringify(generatedData));
                        setDoc(cacheRef, {
                            ...sanitizedData,
                            createdAt: serverTimestamp()
                        }).catch(err => console.warn("Failed to write to cache:", err));

                    } else {
                        toast({ 
                            variant: 'destructive', 
                            title: 'AI Service Error', 
                            description: result.error || 'The AI nutritionist is unavailable. Please try again.' 
                        });
                    }
                }
            } else {
                setActiveCondition(condition);
            }
        } catch (err: any) {
            console.error("CRITICAL HEALING FOODS ERROR:", err);
            toast({ 
                variant: 'destructive', 
                title: 'Operation Failed', 
                description: err.message || 'An unexpected error occurred while fetching information.' 
            });
        } finally {
            setIsLoading(false);
            window.scrollTo({ top: 300, behavior: 'smooth' });
        }
    };

    const recommendedRecipes = useMemo(() => {
        if (!activeCondition) return [];
        return allRecipes.filter(r => 
            activeCondition.healthTags?.some(tag => r.healthTags?.includes(tag))
        ).sort((a, b) => (b.popularity || 0) - (a.popularity || 0)).slice(0, 4);
    }, [activeCondition]);

    if (!mounted) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="content-container py-12 px-4 pb-24">
            {/* Header */}
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-primary text-xs font-black uppercase tracking-[0.2em]">
                    <HeartPulse className="h-4 w-4" />
                    Food as Medicine
                </div>
                <h1 className="font-headline text-fluid-h1 font-bold tracking-tight">Healing Foods</h1>
                <p className="text-fluid-subtitle text-muted-foreground max-w-2xl mx-auto">
                    Discover ingredients and meals tailored to support specific health conditions through traditional and modern nutritional wisdom.
                </p>
                
                <div className="mx-auto max-w-2xl bg-pink-500/10 border border-pink-500/20 p-4 rounded-2xl flex items-start gap-3 text-left">
                    <span className="shrink-0 mt-0.5"><Info className="h-5 w-5 text-pink-600 dark:text-pink-400" /></span>
                    <p className="text-xs text-pink-900/80 dark:text-pink-200/80 leading-relaxed font-medium italic">
                        This is general nutritional information, not medical advice. Always consult a doctor or registered dietitian for personal health decisions.
                    </p>
                </div>
            </div>

            {/* Selection Area */}
            <div className="max-w-5xl mx-auto mb-16 space-y-10">
                <div className="flex flex-wrap justify-center gap-3">
                    {CURATED_CONDITIONS.map((cond) => {
                        const ChipIcon = conditionIconMap[cond.name] || HeartPulse;
                        const isActive = activeCondition?.name === cond.name;
                        return (
                            <Badge
                                key={cond.id}
                                variant={isActive ? "default" : "outline"}
                                className={cn(
                                    "cursor-pointer px-5 py-2.5 text-sm font-bold rounded-full transition-all active:scale-95 flex items-center gap-2",
                                    isActive 
                                        ? "bg-primary text-primary-foreground border-0 shadow-lg scale-105" 
                                        : "hover:bg-primary/5 hover:border-primary/40 border-border/60 text-foreground"
                                )}
                                onClick={() => handleSelectCondition(cond)}
                            >
                                <ChipIcon className={cn("h-4 w-4 stroke-[1.75]", isActive ? "text-white" : "text-[#F4A21A]")} />
                                <span>{cond.name}</span>
                            </Badge>
                        );
                    })}
                </div>

                <div className="relative group max-w-2xl mx-auto">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground opacity-50 group-focus-within:text-primary transition-colors" />
                    <Input 
                        placeholder="Search any other condition (e.g. 'kidney stones', 'thyroid')..."
                        className="pl-16 h-16 rounded-[2rem] text-lg bg-card/50 backdrop-blur-sm border-primary/5 shadow-2xl focus:border-primary/40 focus:ring-0"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSelectCondition(searchTerm)}
                    />
                    <Button 
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full h-11 px-6 font-black uppercase tracking-widest text-xs"
                        onClick={() => handleSelectCondition(searchTerm)}
                        disabled={isLoading || !searchTerm.trim()}
                    >
                        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search AI"}
                    </Button>
                </div>
            </div>

            {/* Results Area */}
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div 
                        key="loading"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="space-y-16"
                    >
                        <Card className="max-w-3xl mx-auto py-6 px-8 sm:py-8 sm:px-10 rounded-[2.5rem] border-primary/10 bg-card/60 backdrop-blur-xl shadow-2xl animate-pulse text-center">
                            <div className="h-12 w-12 rounded-2xl bg-primary/10 mx-auto mb-3" />
                            <div className="h-8 w-64 bg-muted/80 rounded-2xl mx-auto mb-3" />
                            <div className="h-4 w-3/4 bg-muted/60 rounded-lg mx-auto" />
                        </Card>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
                            <div className="space-y-6">
                                <div className="h-8 w-48 bg-muted/80 rounded-xl animate-pulse" />
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <Card key={i} className="p-6 rounded-[2rem] border border-pink-500/10 bg-card/50 animate-pulse flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-2xl bg-pink-500/10 shrink-0" />
                                        <div className="space-y-2 flex-1">
                                            <div className="h-5 w-40 bg-muted/80 rounded" />
                                            <div className="h-4 w-full bg-muted/60 rounded" />
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            <div className="space-y-6">
                                <div className="h-8 w-48 bg-muted/80 rounded-xl animate-pulse" />
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <Card key={i} className="p-6 rounded-[2rem] border border-red-500/10 bg-card/50 animate-pulse flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-2xl bg-red-500/10 shrink-0" />
                                        <div className="space-y-2 flex-1">
                                            <div className="h-5 w-40 bg-muted/80 rounded" />
                                            <div className="h-4 w-full bg-muted/60 rounded" />
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-3">
                            <Loader2 className="h-6 w-6 animate-spin text-primary" />
                            <p className="font-headline text-2xl text-primary animate-pulse">Consulting AI Nutritionist...</p>
                        </div>
                    </motion.div>
                ) : activeCondition ? (
                    <motion.div 
                        key={activeCondition.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        className="space-y-16"
                    >
                        {/* Condition Summary */}
                        <Card className="max-w-3xl mx-auto py-6 px-8 sm:py-8 sm:px-10 rounded-[2.5rem] border-primary/10 bg-card/60 backdrop-blur-xl shadow-xl text-center space-y-3">
                            <div className="bg-primary/10 text-primary p-3 rounded-2xl w-fit mx-auto flex items-center justify-center">
                                {(() => {
                                  const CondHeaderIcon = conditionIconMap[activeCondition.name] || HeartPulse;
                                  return <CondHeaderIcon className="h-7 w-7 stroke-[1.75]" />;
                                })()}
                            </div>
                            <CardTitle className="font-headline text-3xl sm:text-4xl tracking-tight text-primary font-bold">
                                {activeCondition.name}
                            </CardTitle>
                            <CardDescription className="text-base sm:text-lg font-medium leading-relaxed max-w-xl mx-auto text-foreground/80 italic">
                                "{activeCondition.summary}"
                            </CardDescription>
                        </Card>

                        {/* Help / Avoid Grids */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
                            <section className="space-y-6">
                                <h3 className="flex items-center gap-3 font-headline text-2xl sm:text-3xl font-medium tracking-tight">
                                    <div className="bg-primary/10 p-2.5 rounded-xl"><CheckCircle2 className="text-primary h-6 w-6" /></div>
                                    Foods That Help
                                </h3>
                                <div className="grid gap-4">
                                    {activeCondition.foodsToHelp.map((item, i) => (
                                        <HealingFoodCard key={i} item={item} type="help" />
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-6">
                                <h3 className="flex items-center gap-3 font-headline text-2xl sm:text-3xl font-medium tracking-tight">
                                    <div className="bg-red-500/10 p-2.5 rounded-xl"><AlertTriangle className="text-red-500 h-6 w-6" /></div>
                                    Foods to Limit
                                </h3>
                                <div className="grid gap-4">
                                    {activeCondition.foodsToAvoid.map((item, i) => (
                                        <HealingFoodCard key={i} item={item} type="avoid" />
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Recommended Recipes */}
                        <section className="max-w-7xl mx-auto pt-10">
                            <div className="flex items-center justify-between mb-10">
                                <h3 className="font-headline text-3xl sm:text-4xl tracking-tight font-medium">Recommended for You</h3>
                                <Button variant="ghost" asChild className="group text-base sm:text-lg">
                                    <Link href="/recipes">
                                        View All Recipes <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </div>

                            {recommendedRecipes.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {recommendedRecipes.map((recipe, i) => (
                                        <motion.div 
                                            key={recipe.id}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                        >
                                            <RecipeCard recipe={recipe} />
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <Card className="text-center py-16 border-dashed border-2 bg-card/20 rounded-[2.5rem]">
                                    <div className="bg-muted/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Soup className="h-10 w-10 text-muted-foreground opacity-30" />
                                    </div>
                                    <p className="text-lg font-medium text-muted-foreground">No specific matching recipes yet — check back soon!</p>
                                </Card>
                            )}
                        </section>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="placeholder"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <Card className="text-center py-16 border-dashed border-2 bg-card/40 backdrop-blur-md border-pink-500/20 rounded-[2.5rem] max-w-3xl mx-auto shadow-xl">
                            <CardHeader className="p-8 pb-4">
                                <div className="mx-auto bg-pink-500/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400 rounded-2xl p-5 w-20 h-20 flex items-center justify-center mb-5 shadow-sm">
                                    <HeartPulse className="h-10 w-10 stroke-[1.75]" />
                                </div>
                                <CardTitle className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">Explore Healing Foods Guidance</CardTitle>
                                <CardDescription className="text-sm sm:text-base font-medium text-stone-700 dark:text-stone-300 mt-3 max-w-md mx-auto leading-relaxed">
                                    Select a health condition above or search for wellness topics like &apos;acidity&apos;, &apos;immunity&apos;, &apos;diabetes&apos;, or &apos;cold&apos; to get AI-crafted food recommendations!
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
