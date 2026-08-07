'use client';

import { useState, useEffect, useMemo } from 'react';
import { useUser } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Zap, Weight, Sparkles, Flame, Wheat, Droplets, Beef, Leaf, Wallet, CalendarDays, Info, Download, ChefHat, ShoppingCart, CheckCircle2, ChevronDown } from 'lucide-react';
import { generateHealthyMealPlanAction } from '@/app/actions';
import type { GenerateHealthyMealPlanOutput, GenerateHealthyMealPlanInput } from '@/ai/schemas/healthy-meal-plan-schemas';
import { GenerateHealthyMealPlanInputSchema } from '@/ai/schemas/healthy-meal-plan-schemas';
import { useToast } from '@/hooks/use-toast';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { generateMealPlanPDF } from '@/lib/pdf-export';
import { generateMealPlanICS } from '@/lib/calendar-export';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Checkbox } from '@/components/ui/checkbox';


type MealPlanState = {
  data: GenerateHealthyMealPlanOutput | null;
  error: string | null;
  loading: boolean;
};

function MealCard({ meal }: { meal: any }) {
    return (
        <Card className="p-fluid-card bg-card/50 backdrop-blur-sm border-blue-500/10 hover:border-blue-500/30 transition-all">
            <CardHeader className="p-0 mb-4">
                <CardTitle className="font-headline text-xl">{meal.food}</CardTitle>
                <Badge variant="outline" className="mt-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">{meal.type}</Badge>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
                <div>
                    <h4 className="font-semibold text-[10px] uppercase tracking-widest mb-2 text-muted-foreground">Nutrition</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center gap-2"><Flame className="h-4 w-4 text-blue-500" /><span>{meal.calories} kcal</span></div>
                        <div className="flex items-center gap-2"><Beef className="h-4 w-4 text-blue-500" /><span>{meal.protein} g</span></div>
                        <div className="flex items-center gap-2"><Wheat className="h-4 w-4 text-blue-500" /><span>{meal.carbs} g</span></div>
                        <div className="flex items-center gap-2"><Droplets className="h-4 w-4 text-blue-500" /><span>{meal.fats} g</span></div>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-[10px] uppercase tracking-widest mb-1 text-muted-foreground">Benefits</h4>
                    <p className="text-sm leading-relaxed italic opacity-80">{meal.benefits}</p>
                </div>
            </CardContent>
        </Card>
    );
}

function SummaryCard({ icon, title, value, unit, color } : { icon: React.ReactNode, title: string, value: number, unit?: string, color: string}) {
    return (
        <Card className={cn("p-fluid-card border-0 shadow-sm", color)}>
            <div className="flex items-center gap-4">
                <div className="text-2xl opacity-80">{icon}</div>
                <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] opacity-60 mb-0.5">{title}</p>
                    <p className="text-xl font-black tabular-nums">{value}{unit}</p>
                </div>
            </div>
        </Card>
    )
}

function GroceryList({ plan }: { plan: GenerateHealthyMealPlanOutput }) {
    const [checkedItems, setCompletedItems] = useState<Set<string>>(new Set());

    const aggregated = useMemo(() => {
        const list: Record<string, { name: string, qtyNotes: string[] }[]> = {};
        
        plan.week.forEach(day => {
            day.meals.forEach(meal => {
                meal.ingredients.forEach(ing => {
                    const category = ing.category || 'Other';
                    if (!list[category]) list[category] = [];
                    
                    const existing = list[category].find(item => item.name.toLowerCase() === ing.name.toLowerCase());
                    if (existing) {
                        if (!existing.qtyNotes.includes(ing.quantity)) {
                            existing.qtyNotes.push(ing.quantity);
                        }
                    } else {
                        list[category].push({ name: ing.name, qtyNotes: [ing.quantity] });
                    }
                });
            });
        });
        return list;
    }, [plan]);

    const toggleCheck = (id: string) => {
        const next = new Set(checkedItems);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        setCompletedItems(next);
    };

    return (
        <Card className="p-fluid-card glass-card border-primary/20 shadow-xl overflow-hidden mt-8">
            <CardHeader className="p-0 mb-8 border-b border-primary/10 pb-6">
                <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                        <ShoppingCart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <CardTitle className="font-headline text-3xl">Weekly Grocery List</CardTitle>
                        <CardDescription>Everything you need for your 7-day meal plan</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(aggregated).map(([category, items]) => (
                        <div key={category} className="space-y-4">
                            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                {category}
                            </h4>
                            <div className="space-y-2">
                                {items.map((item) => {
                                    const id = `${category}-${item.name}`;
                                    const isChecked = checkedItems.has(id);
                                    return (
                                        <div 
                                            key={id} 
                                            className={cn(
                                                "flex items-start gap-3 p-3 rounded-xl transition-all cursor-pointer group",
                                                isChecked ? "bg-green-500/5 opacity-50" : "bg-muted/30 hover:bg-muted/50"
                                            )}
                                            onClick={() => toggleCheck(id)}
                                        >
                                            <Checkbox checked={isChecked} className="mt-1" />
                                            <div className="min-w-0">
                                                <p className={cn(
                                                    "text-sm font-bold leading-tight transition-all",
                                                    isChecked && "line-through text-muted-foreground"
                                                )}>
                                                    {item.name}
                                                </p>
                                                <p className="text-[10px] text-muted-foreground mt-0.5">
                                                    {item.qtyNotes.join(' + ')}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

function MealPlanDisplay({ plan }: { plan: GenerateHealthyMealPlanOutput }) {
    const { week, weeklySummary, disclaimer } = plan;
    const [showGroceryList, setShowGroceryList] = useState(false);

    const handleDownload = () => {
        generateMealPlanPDF(plan);
    };

    const handleCalendarExport = () => {
        generateMealPlanICS(plan);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Card className="p-fluid-card glass-card border-primary/20">
                <CardHeader className="p-0 mb-8 flex flex-col md:flex-row items-start justify-between gap-6">
                    <div className="space-y-1">
                        <CardTitle className="font-headline text-fluid-h2">Your Weekly Meal Plan</CardTitle>
                        <CardDescription className="text-fluid-subtitle font-medium opacity-70">Customized 7-day nutritional guidance</CardDescription>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <Button variant="outline" onClick={handleDownload} className="flex-1 md:flex-none h-11 px-6 font-bold rounded-xl border-primary/30 text-primary hover:bg-primary/5">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                        </Button>
                        <Button variant="outline" onClick={handleCalendarExport} className="flex-1 md:flex-none h-11 px-6 font-bold rounded-xl border-primary/30 text-primary hover:bg-primary/5">
                            <CalendarDays className="mr-2 h-4 w-4" />
                            Add to Calendar
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Tabs defaultValue={week[0].day.toLowerCase()} className="w-full">
                        <TabsList className="grid w-full grid-cols-4 md:grid-cols-7 h-auto p-1 bg-muted/30 rounded-2xl border border-primary/5">
                            {week.map(d => <TabsTrigger key={d.day} value={d.day.toLowerCase()} className="capitalize text-[10px] md:text-xs font-black py-2.5 data-[state=active]:bg-background data-[state=active]:text-primary rounded-xl transition-all">{d.day.substring(0,3)}</TabsTrigger>)}
                        </TabsList>
                        {week.map(d => (
                            <TabsContent key={d.day} value={d.day.toLowerCase()} className="animate-in fade-in slide-in-from-bottom-2 duration-500 pt-6">
                                <div className="grid md:grid-cols-3 gap-fluid-grid">
                                    {d.meals.map(meal => <MealCard key={meal.food} meal={meal} />)}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </CardContent>
            </Card>

            <Card className="p-fluid-card glass-card border-primary/10">
                <CardHeader className="p-0 mb-6 flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-2xl font-medium">Weekly Summary</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1 font-bold">
                        Metrics
                    </Badge>
                </CardHeader>
                <CardContent className="p-0 space-y-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        <SummaryCard icon={<Flame />} title="Avg. Calories" value={weeklySummary.avgCaloriesPerDay} unit=" kcal" color="bg-orange-500/10 text-orange-600 dark:text-orange-400" />
                        <SummaryCard icon={<Beef />} title="Avg. Protein" value={weeklySummary.avgProteinPerDay} unit=" g" color="bg-sky-500/10 text-sky-600 dark:text-sky-400" />
                        <SummaryCard icon={<Wallet />} title="Est. Cost" value={weeklySummary.estimatedCost} unit=" INR" color="bg-green-500/10 text-green-600 dark:text-green-400" />
                        <SummaryCard icon={<CalendarDays />} title="Healthy Days" value={weeklySummary.healthyDays} unit="/7" color="bg-purple-500/10 text-purple-600 dark:text-purple-400" />
                    </div>

                    <div className="pt-6 border-t border-primary/10 flex justify-center">
                        <Button 
                            onClick={() => setShowGroceryList(!showGroceryList)}
                            className="btn-primary-gradient rounded-full px-10 h-14 text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all"
                        >
                            {showGroceryList ? (
                                <><ChevronDown className="mr-2 h-5 w-5" /> Hide Shopping List</>
                            ) : (
                                <><ShoppingCart className="mr-2 h-5 w-5" /> Generate Shopping List</>
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <AnimatePresence>
                {showGroceryList && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: 20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <GroceryList plan={plan} />
                    </motion.div>
                )}
            </AnimatePresence>

             <div className="flex items-start gap-4 p-fluid-card rounded-3xl border border-border bg-card/30 backdrop-blur-sm shadow-inner mb-12">
                <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-fluid-body text-muted-foreground leading-relaxed italic opacity-80">{disclaimer}</p>
            </div>
        </div>
    );
}

export default function HealthyMealPlannerPage() {
    const { user, isUserLoading } = useUser();
    const router = useRouter();
    const [mealPlanState, setMealPlanState] = useState<MealPlanState>({ data: null, error: null, loading: false });
    const { toast } = useToast();
    const [budget, setBudget] = useState(1500);
    const [mounted, setMounted] = useState(false);

    const { scrollY } = useScroll();
    const titleOpacity = useTransform(scrollY, [0, 150], [1, 0]);
    const titleY = useTransform(scrollY, [0, 150], [0, -20]);
    const [isTitleHidden, setIsTitleHidden] = useState(false);

    useMotionValueEvent(titleOpacity, "change", (latest) => {
        if (latest === 0 && !isTitleHidden) setIsTitleHidden(true);
        else if (latest > 0 && isTitleHidden) setIsTitleHidden(false);
    });

    const form = useForm<GenerateHealthyMealPlanInput>({
        resolver: zodResolver(GenerateHealthyMealPlanInputSchema),
        defaultValues: {
            ageRange: '18-25',
            activityLevel: 'Low',
            dietPreference: 'Vegetarian',
            cuisinePreference: 'Any',
            goal: 'Balanced eating',
            weeklyBudget: 1500,
        },
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && !isUserLoading) {
            if (!user) {
                router.push('/login');
            }
        }
    }, [user, isUserLoading, router, mounted]);

    if (!mounted || isUserLoading || !user) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
        );
    }

    const handleGeneratePlan = async (values: GenerateHealthyMealPlanInput) => {
        setMealPlanState({ data: null, error: null, loading: true });
        
        const result = await generateHealthyMealPlanAction(values);

        if (result.success && result.data) {
            setMealPlanState({ data: result.data, error: null, loading: false });
            window.scrollTo({ top: 400, behavior: 'smooth' });
        } else {
            setMealPlanState({ data: null, error: result.error, loading: false });
            toast({
                variant: 'destructive',
                title: 'Plan Generation Failed',
                description: result.error,
            });
        }
    };
    
    const goalIcons = {
        'Balanced eating': { icon: <Leaf className="h-5 w-5" />, label: 'Balanced eating' },
        'Weight management': { icon: <Weight className="h-5 w-5" />, label: 'Weight management' },
        'Energy boost': { icon: <Zap className="h-5 w-5" />, label: 'Energy boost' },
        'Muscle support': { icon: <Beef className="h-5 w-5" />, label: 'Muscle support' },
    }

    return (
        <div className="content-container pt-fluid-section pb-24 px-4">
            <motion.div 
                style={{ opacity: titleOpacity, y: titleY, visibility: isTitleHidden ? 'hidden' : 'visible', pointerEvents: isTitleHidden ? 'none' : 'auto' }}
                className="text-center mb-16 will-change-[opacity,transform] animate-in fade-in slide-in-from-top-4 duration-1000"
            >
                <h1 className="font-headline text-fluid-h1 font-bold text-primary">Healthy Meal Planner</h1>
                <p className="mt-4 text-fluid-subtitle text-muted-foreground max-w-3xl mx-auto font-medium opacity-80 leading-relaxed">
                  Plan your weekly nutrition with AI-crafted Indian meals balanced for your goals and budget.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-fluid-grid items-start pb-12">
                <div className="lg:col-span-1 lg:sticky lg:top-24 stagger-item">
                    <Card className="p-fluid-card glass-card border-primary/20 shadow-2xl">
                        <CardHeader className="p-0 mb-8">
                            <div className="bg-primary/10 w-fit p-3 rounded-2xl mb-4">
                                <Sparkles className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-2xl">Your Preferences</CardTitle>
                            <CardDescription className="text-sm font-medium opacity-70">Customize your 7-day plan</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(handleGeneratePlan)} className="space-y-8">
                                    <div className="grid grid-cols-2 gap-4">
                                         <FormField control={form.control} name="ageRange" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Age Range</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl><SelectTrigger className="h-12 rounded-xl bg-muted/30 font-bold border-primary/5 focus:ring-primary/20"><SelectValue/></SelectTrigger></FormControl>
                                                    <SelectContent className="rounded-xl border-primary/10">
                                                        <SelectItem value="18-25">18-25</SelectItem>
                                                        <SelectItem value="25-35">25-35</SelectItem>
                                                        <SelectItem value="35-50">35-50</SelectItem>
                                                        <SelectItem value="50+">50+</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="activityLevel" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Activity</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl><SelectTrigger className="h-12 rounded-xl bg-muted/30 font-bold border-primary/5 focus:ring-primary/20"><SelectValue/></SelectTrigger></FormControl>
                                                    <SelectContent className="rounded-xl border-primary/10">
                                                        <SelectItem value="Low">Low</SelectItem>
                                                        <SelectItem value="Moderate">Moderate</SelectItem>
                                                        <SelectItem value="Active">Active</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )} />
                                    </div>
                                    <FormField control={form.control} name="dietPreference" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Diet Type</FormLabel>
                                            <FormControl>
                                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-3 gap-2 p-1.5 bg-muted/30 rounded-2xl border border-primary/5">
                                                    <Label htmlFor="veg" className="flex items-center justify-center rounded-xl p-3 text-[10px] font-black uppercase tracking-widest hover:bg-muted cursor-pointer transition-all [&:has([data-state=checked])]:bg-primary [&:has([data-state=checked])]:text-primary-foreground shadow-sm">
                                                        <RadioGroupItem value="Vegetarian" id="veg" className="sr-only" />
                                                        Veg
                                                    </Label>
                                                    <Label htmlFor="non-veg" className="flex items-center justify-center rounded-xl p-3 text-[10px] font-black uppercase tracking-widest hover:bg-muted cursor-pointer transition-all [&:has([data-state=checked])]:bg-primary [&:has([data-state=checked])]:text-primary-foreground shadow-sm">
                                                        <RadioGroupItem value="Non-Vegetarian" id="non-veg" className="sr-only" />
                                                        Non-Veg
                                                    </Label>
                                                    <Label htmlFor="egg" className="flex items-center justify-center rounded-xl p-3 text-[10px] font-black uppercase tracking-widest hover:bg-muted cursor-pointer transition-all [&:has([data-state=checked])]:bg-primary [&:has([data-state=checked])]:text-primary-foreground shadow-sm">
                                                        <RadioGroupItem value="Eggetarian" id="egg" className="sr-only" />
                                                        Egg
                                                    </Label>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <FormField control={form.control} name="cuisinePreference" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Cuisine Style</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl><SelectTrigger className="h-12 rounded-xl bg-muted/30 font-bold border-primary/5 focus:ring-primary/20"><SelectValue/></SelectTrigger></FormControl>
                                                    <SelectContent className="rounded-xl border-primary/10 max-h-[300px]">
                                                        <SelectItem value="Any">Any Indian</SelectItem>
                                                        <SelectItem value="North Indian">North Indian</SelectItem>
                                                        <SelectItem value="South Indian">South Indian</SelectItem>
                                                        <SelectItem value="Punjabi">Punjabi</SelectItem>
                                                        <SelectItem value="Bengali">Bengali</SelectItem>
                                                        <SelectItem value="Gujarati">Gujarati</SelectItem>
                                                        <SelectItem value="Maharashtrian">Maharashtrian</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}
                                    />

                                    <FormField control={form.control} name="goal" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Primary Goal</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl><SelectTrigger className="h-12 rounded-xl bg-muted/30 font-bold border-primary/5 focus:ring-primary/20"><SelectValue/></SelectTrigger></FormControl>
                                                <SelectContent className="rounded-xl border-primary/10">
                                                    {Object.entries(goalIcons).map(([goal, { icon, label }]) => (
                                                        <SelectItem key={goal} value={goal}>
                                                            <div className="flex items-center gap-3 font-bold text-sm">
                                                                <span className="text-primary">{icon}</span>
                                                                {label}
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )} />
                                    
                                    <FormField control={form.control} name="weeklyBudget" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Weekly Budget</FormLabel>
                                            <FormControl>
                                               <div className="pt-4">
                                                    <div className="flex justify-between items-center mb-6">
                                                        <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-tighter">₹500</span>
                                                        <div className="text-center">
                                                            <span className="block text-[8px] font-black uppercase tracking-widest text-primary mb-1">Max Limit</span>
                                                            <span className="font-black text-foreground text-3xl flex items-center tracking-tighter">₹{budget}</span>
                                                        </div>
                                                        <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-tighter">₹5000</span>
                                                    </div>
                                                    <Slider
                                                        min={500} max={5000} step={100} defaultValue={[field.value]}
                                                        onValueChange={(value) => { field.onChange(value[0]); setBudget(value[0]); }}
                                                        className="py-2"
                                                    />
                                                </div>
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                    
                                    <Button 
                                        type="submit" 
                                        size="lg" 
                                        className="w-full !mt-12 rounded-full h-14 text-sm font-black uppercase tracking-[0.15em] shadow-2xl shadow-primary/30 transition-all hover:scale-[1.03] active:scale-95 border-0" 
                                        disabled={mealPlanState.loading}
                                    >
                                        {mealPlanState.loading ? (
                                            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Generating Plan...</>
                                        ) : (
                                            <><ChefHat className="mr-2 h-6 w-6" /> Generate Plan</>
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-2">
                    {mealPlanState.loading && (
                        <Card className="flex items-center justify-center min-h-[600px] h-full bg-card/60 backdrop-blur-md border-primary/10 rounded-[3rem] shadow-2xl overflow-hidden relative">
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-muted overflow-hidden">
                                <div className="h-full bg-primary animate-progress origin-left" style={{ width: '100%', animation: 'shimmer 2s infinite linear' }} />
                            </div>
                            <CardContent className="flex flex-col items-center justify-center gap-8 text-center p-fluid-card h-full">
                                <div className="relative">
                                    <div className="absolute inset-0 animate-ping rounded-full bg-primary/20 scale-150" />
                                    <div className="bg-primary/10 h-28 w-28 rounded-full flex items-center justify-center border border-primary/20 relative shadow-inner">
                                        <Loader2 className="h-12 w-12 animate-spin text-primary" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <p className="font-headline text-4xl font-medium text-primary tracking-tight">Building your plan...</p>
                                    <p className="text-lg text-muted-foreground font-medium max-w-sm mx-auto leading-relaxed opacity-80">Our AI nutritionist is curating the best meals for you.</p>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                    {mealPlanState.data && !mealPlanState.loading && (
                        <MealPlanDisplay plan={mealPlanState.data} />
                    )}
                    {!mealPlanState.data && !mealPlanState.loading && (
                        <Card className="flex items-center justify-center min-h-[600px] h-full border-dashed border-2 bg-card/30 border-border/60 rounded-[4rem] stagger-item">
                            <CardContent className="p-fluid-card flex flex-col items-center justify-center h-full">
                                <div className="text-center space-y-8">
                                    <div className="flex justify-center">
                                        <div className="bg-muted/50 rounded-[3rem] p-12 relative overflow-hidden group">
                                            <Sparkles className="h-24 w-24 text-muted-foreground/30 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-primary/5 animate-pulse rounded-full" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="font-headline text-4xl font-medium text-foreground/80 tracking-tight">Ready to start?</h3>
                                        <p className="text-lg text-muted-foreground font-medium max-w-xs mx-auto opacity-70 leading-relaxed">Fill out the form to generate your first healthy meal plan.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
