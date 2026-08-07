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
    Soup
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { RecipeCard } from '@/components/recipe/recipe-card';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

const iconMap: Record<string, any> = {
    Leaf, Zap, Sparkles: Sun, Salad, Wheat, Apple, Heart, Coffee, Sun, Milk, Droplets, Flame, Soup, AlertTriangle
};

function HealingFoodCard({ item, type }: { item: any, type: 'help' | 'avoid' }) {
    const Icon = iconMap[item.icon || ''] || (type === 'help' ? CheckCircle2 : AlertTriangle);
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                "group p-6 rounded-[2rem] border-2 transition-all duration-300",
                type === 'help' 
                    ? "bg-primary/5 border-primary/10 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5" 
                    : "bg-muted/30 border-border/60 hover:border-red-500/30"
            )}
        >
            <div className="flex items-start gap-4">
                <div className={cn(
                    "p-3 rounded-2xl shrink-0 transition-transform group-hover:scale-110",
                    type === 'help' ? "bg-primary/10 text-primary" : "bg-red-500/10 text-red-500"
                )}>
                    <Icon className="h-6 w-6" />
                </div>
                <div>
                    <h4 className="font-bold text-lg leading-tight mb-1">{item.name}</h4>
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
                        // Synthesize an ID if missing for the UI state
                        const finalData = { id: normalizedKey, ...generatedData };
                        setActiveCondition(finalData);
                        
                        // 3. Save to cache from client (non-blocking)
                        // Use a POJO-clean copy to avoid Firestore validation errors
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
                
                <div className="mx-auto max-w-2xl bg-amber-500/5 border border-amber-500/10 p-4 rounded-2xl flex items-start gap-3 text-left">
                    <span className="shrink-0 mt-0.5"><Info className="h-5 w-5 text-amber-600" /></span>
                    <p className="text-xs text-amber-800/80 dark:text-amber-200/60 leading-relaxed font-medium italic">
                        This is general nutritional information, not medical advice. Always consult a doctor or registered dietitian for personal health decisions.
                    </p>
                </div>
            </div>

            {/* Selection Area */}
            <div className="max-w-5xl mx-auto mb-16 space-y-10">
                <div className="flex flex-wrap justify-center gap-3">
                    {CURATED_CONDITIONS.map((cond) => (
                        <Badge
                            key={cond.id}
                            variant={activeCondition?.name === cond.name ? "default" : "outline"}
                            className={cn(
                                "cursor-pointer px-6 py-3 text-sm font-bold rounded-full transition-all active:scale-95",
                                activeCondition?.name === cond.name 
                                    ? "bg-primary text-primary-foreground border-0 shadow-lg scale-105" 
                                    : "hover:bg-primary/5 hover:border-primary/40 border-border/60"
                            )}
                            onClick={() => handleSelectCondition(cond)}
                        >
                            {cond.name}
                        </Badge>
                    ))}
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
                        className="flex flex-col items-center justify-center py-32 space-y-4"
                    >
                        <Loader2 className="h-16 w-16 animate-spin text-primary" />
                        <p className="font-headline text-2xl text-primary animate-pulse">Consulting AI Nutritionist...</p>
                    </motion.div>
                ) : activeCondition ? (
                    <motion.div 
                        key={activeCondition.name}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        className="space-y-20"
                    >
                        {/* Condition Summary */}
                        <Card className="max-w-4xl mx-auto p-10 rounded-[3rem] border-primary/10 bg-card/60 backdrop-blur-xl shadow-2xl">
                            <CardHeader className="p-0 text-center space-y-4 mb-8">
                                <CardTitle className="font-headline text-5xl tracking-tight text-primary">
                                    {activeCondition.name}
                                </CardTitle>
                                <CardDescription className="text-xl font-medium leading-relaxed max-w-2xl mx-auto text-foreground/80 italic">
                                    "{activeCondition.summary}"
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        {/* Help / Avoid Grids */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                            <section className="space-y-8">
                                <h3 className="flex items-center gap-3 font-headline text-3xl font-medium tracking-tight">
                                    <div className="bg-primary/10 p-2.5 rounded-xl"><CheckCircle2 className="text-primary h-6 w-6" /></div>
                                    Foods That Help
                                </h3>
                                <div className="grid gap-4">
                                    {activeCondition.foodsToHelp.map((item, i) => (
                                        <HealingFoodCard key={i} item={item} type="help" />
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-8">
                                <h3 className="flex items-center gap-3 font-headline text-3xl font-medium tracking-tight">
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
                                <h3 className="font-headline text-4xl tracking-tight font-medium">Recommended for You</h3>
                                <Button variant="ghost" asChild className="group text-lg">
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
                                <Card className="text-center py-20 border-dashed border-2 bg-card/20 rounded-[3rem]">
                                    <div className="bg-muted/10 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Soup className="h-12 w-12 text-muted-foreground opacity-30" />
                                    </div>
                                    <p className="text-xl font-medium text-muted-foreground">No specific matching recipes yet — check back soon!</p>
                                </Card>
                            )}
                        </section>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="placeholder"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-center py-40 border-4 border-dashed rounded-[4rem] border-border/20 max-w-5xl mx-auto"
                    >
                        <div className="bg-primary/5 h-24 w-24 rounded-full flex items-center justify-center mx-auto mb-8">
                            <HeartPulse className="h-12 w-12 text-primary/40" />
                        </div>
                        <h2 className="font-headline text-3xl font-medium text-muted-foreground">Select a condition to see guidance</h2>
                        <p className="text-muted-foreground mt-2 max-w-sm mx-auto opacity-70">Our AI-enhanced knowledge base covers everything from common colds to metabolic management.</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
