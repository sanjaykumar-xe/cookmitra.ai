'use client';

import { useState, useEffect, useMemo } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/lib/firebase';
import { collection } from 'firebase/firestore';
import type { PantryItem } from '@/lib/firebase/firestore/pantry';
import { WeeklyShoppingListModal } from '@/components/meal-planner/weekly-shopping-list-modal';
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
import { 
  Loader2, Zap, Weight, Sparkles, Flame, Wheat, Droplets, Beef, Leaf, Wallet, 
  CalendarDays, Info, Download, ShoppingCart, ChevronDown, RotateCw, X, Users, Cookie, SlidersHorizontal 
} from 'lucide-react';
import { generateHealthyMealPlanAction, swapSingleMealAction } from '@/app/actions';
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
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

type MealPlanState = {
  data: GenerateHealthyMealPlanOutput | null;
  error: string | null;
  loading: boolean;
};

function MealCard({ 
  meal, 
  onSwap, 
  isSwapping, 
  swapError 
}: { 
  meal: any; 
  onSwap: (meal: any) => void; 
  isSwapping: boolean; 
  swapError?: string | null;
}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const touchQuery = window.matchMedia('(hover: none)');
        setIsTouchDevice(touchQuery.matches || 'ontouchstart' in window);
        
        const handler = (e: MediaQueryListEvent) => setIsTouchDevice(e.matches);
        if (touchQuery.addEventListener) touchQuery.addEventListener('change', handler);
        return () => {
            if (touchQuery.removeEventListener) touchQuery.removeEventListener('change', handler);
        };
    }, []);

    const handleFlip = () => {
        if (isTouchDevice) {
            setIsFlipped(!isFlipped);
        }
    };

    const handleMouseEnter = () => {
        if (!isTouchDevice) setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        if (!isTouchDevice) setIsFlipped(false);
    };

    const getBadgeStyle = (type: string) => {
      const lower = (type || '').toLowerCase();
      if (lower.includes('breakfast')) return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      if (lower.includes('lunch')) return "bg-[#F4A21A]/10 text-[#F4A21A] dark:text-amber-400 border-amber-500/20";
      if (lower.includes('snack')) return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    };

    return (
        <div 
            className="flip-card-container h-[270px] w-full min-w-0 flex-1 cursor-pointer relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleFlip}
            role="button"
            tabIndex={0}
            aria-label={`View macros & benefits for ${meal.food}`}
        >
            <div className={cn("flip-card-inner h-full w-full", isFlipped && "is-flipped")}>
                {/* FRONT FACE */}
                <div className="flip-card-front h-full w-full">
                    <Card className="flex flex-col justify-between h-full p-5 bg-card/60 backdrop-blur-md border border-stone-200/80 dark:border-stone-800/80 hover:border-[#F4A21A]/40 shadow-lg group rounded-[2rem] overflow-hidden relative w-full">
                        {isSwapping && (
                          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-[2rem] flex flex-col items-center justify-center space-y-2 z-20">
                            <Loader2 className="h-6 w-6 animate-spin text-[#F4A21A]" />
                            <span className="text-xs font-bold text-muted-foreground animate-pulse">Swapping Meal...</span>
                          </div>
                        )}
                        {swapError && (
                          <div className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm rounded-[2rem] p-4 flex flex-col items-center justify-center text-center space-y-2 z-20">
                            <p className="text-xs text-red-400 font-medium">{swapError}</p>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              className="text-xs h-8 px-3 rounded-full border-red-500/40 text-red-400 hover:bg-red-500/10"
                              onClick={(e) => {
                                e.stopPropagation();
                                onSwap(meal);
                              }}
                            >
                              <RotateCw className="mr-1.5 h-3 w-3" /> Retry Swap
                            </Button>
                          </div>
                        )}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between gap-2">
                                <Badge variant="outline" className={cn("font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-lg", getBadgeStyle(meal.type))}>
                                    {meal.type}
                                </Badge>
                                <div className="flex items-center gap-1.5">
                                  <div className="flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-full">
                                      <Flame className="h-3.5 w-3.5" />
                                      <span>{meal.calories} kcal</span>
                                  </div>
                                  <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-7 w-7 rounded-full text-stone-400 hover:text-[#F4A21A] hover:bg-amber-500/10 transition-transform active:scale-95 shrink-0"
                                    title="Regenerate this single meal"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onSwap(meal);
                                    }}
                                  >
                                    <RotateCw className="h-3.5 w-3.5" />
                                  </Button>
                                </div>
                            </div>
                            <CardTitle className="font-headline text-lg font-bold line-clamp-2 pt-1">{meal.food}</CardTitle>
                        </div>
                        <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground font-medium">
                            <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold text-[11px]">
                                <Info className="h-3.5 w-3.5 text-[#F4A21A]" /> Quick Overview
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                                {isTouchDevice ? "Tap to Flip 🔄" : "Hover to Flip 🔄"}
                            </span>
                        </div>
                    </Card>
                </div>

                {/* BACK FACE */}
                <div className="flip-card-back h-full w-full">
                    <Card className="flex flex-col justify-between h-full p-5 bg-card/95 backdrop-blur-md border border-[#F4A21A]/30 text-stone-900 dark:text-stone-100 shadow-xl rounded-[2rem] overflow-hidden w-full">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#F4A21A]">Nutritional Breakdown</h4>
                                {isTouchDevice && (
                                  <span className="text-[10px] text-stone-400 flex items-center gap-1 font-bold">
                                    Tap back <X className="h-3 w-3" />
                                  </span>
                                )}
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs font-bold text-stone-800 dark:text-stone-200">
                                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400"><Flame className="h-3.5 w-3.5 shrink-0 text-orange-500" /><span>{meal.calories} kcal</span></div>
                                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400"><Beef className="h-3.5 w-3.5 shrink-0 text-sky-500" /><span>{meal.protein}g Protein</span></div>
                                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400"><Wheat className="h-3.5 w-3.5 shrink-0 text-amber-500" /><span>{meal.carbs}g Carbs</span></div>
                                <div className="flex items-center gap-1.5 p-2 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400"><Droplets className="h-3.5 w-3.5 shrink-0 text-pink-500" /><span>{meal.fats}g Fats</span></div>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest mb-1 text-[#F4A21A]">Health Benefits</h4>
                                <p className="text-xs leading-relaxed italic text-stone-600 dark:text-stone-300 font-medium line-clamp-3">{meal.benefits}</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function SummaryCard({ icon, title, value, unit, color } : { icon: React.ReactNode, title: string, value: number, unit?: string, color: string}) {
    return (
        <Card className={cn("p-fluid-card border-0 shadow-sm w-full", color)}>
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

function WeeklyTrendChart({ week }: { week: GenerateHealthyMealPlanOutput['week'] }) {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

    const chartData = useMemo(() => {
        return week.map((d) => {
          const totalKcal = d.meals.reduce((sum, m) => sum + (m.calories || 0), 0);
          const totalProtein = d.meals.reduce((sum, m) => sum + (m.protein || 0), 0);
          return {
            day: d.day.substring(0, 3),
            dayShort: d.day.charAt(0),
            Calories: totalKcal,
            Protein: totalProtein,
          };
        });
    }, [week]);

    return (
        <div className="pt-6 border-t border-primary/10 space-y-3 w-full">
            <div className="flex items-center justify-between px-1">
                <h4 className="font-headline text-lg font-bold text-foreground flex items-center gap-2">
                    <Info className="h-4 w-4 text-[#F4A21A]" />
                    7-Day Nutrition Trend
                </h4>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    Calories (kcal) & Protein (g)
                </span>
            </div>

            <div className="h-[210px] w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <XAxis 
                            dataKey={isMobile ? "dayShort" : "day"} 
                            tickLine={false} 
                            axisLine={false}
                            tick={{ fontSize: 11, fontWeight: 700 }}
                        />
                        <YAxis 
                            yAxisId="kcal" 
                            orientation="left" 
                            tickLine={false} 
                            axisLine={false} 
                            tick={{ fontSize: 10 }}
                        />
                        <YAxis 
                            yAxisId="protein" 
                            orientation="right" 
                            tickLine={false} 
                            axisLine={false} 
                            tick={{ fontSize: 10 }}
                        />
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: 'rgba(28, 25, 23, 0.95)', 
                                borderColor: 'rgba(244, 162, 26, 0.4)', 
                                borderRadius: '1rem',
                                color: '#fff',
                                fontSize: '12px',
                                fontWeight: '600'
                            }}
                            formatter={(value: any, name: string) => [
                              `${value} ${name === 'Calories' ? 'kcal' : 'g'}`, 
                              name
                            ]}
                        />
                        <Legend 
                            wrapperStyle={{ fontSize: '11px', fontWeight: '700', paddingTop: '6px' }}
                        />
                        <Bar 
                            yAxisId="kcal" 
                            dataKey="Calories" 
                            fill="#F4A21A" 
                            radius={[6, 6, 0, 0]} 
                            maxBarSize={28}
                        />
                        <Bar 
                            yAxisId="protein" 
                            dataKey="Protein" 
                            fill="#0ea5e9" 
                            radius={[6, 6, 0, 0]} 
                            maxBarSize={28}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

function MealPlanDisplay({ 
  plan, 
  userPreferences, 
  onPlanUpdate 
}: { 
  plan: GenerateHealthyMealPlanOutput; 
  userPreferences: GenerateHealthyMealPlanInput;
  onPlanUpdate: (newPlan: GenerateHealthyMealPlanOutput) => void;
}) {
    const { week, weeklySummary, disclaimer } = plan;
    const [isShoppingListOpen, setIsShoppingListOpen] = useState(false);
    const [swappingMealKey, setSwappingMealKey] = useState<string | null>(null);
    const [swapErrorKey, setSwapErrorKey] = useState<{ key: string; error: string } | null>(null);

    const firestore = useFirestore();
    const { user } = useUser();
    const pantryQuery = useMemoFirebase(() => {
      if (!user || !firestore) return null;
      return collection(firestore, `users/${user.uid}/pantry`);
    }, [user, firestore]);
    const { data: pantryItems } = useCollection<PantryItem>(pantryQuery);

    // Live calculated stats from plan.week
    const liveStats = useMemo(() => {
        let totalKcal = 0;
        let totalProtein = 0;
        week.forEach(d => {
          d.meals.forEach(m => {
            totalKcal += m.calories || 0;
            totalProtein += m.protein || 0;
          });
        });
        const avgKcal = Math.round(totalKcal / 7);
        const avgProtein = Math.round(totalProtein / 7);
        return {
          avgKcal,
          avgProtein,
          cost: weeklySummary.estimatedCost,
          healthyDays: weeklySummary.healthyDays,
        };
    }, [week, weeklySummary]);

    const handleDownload = () => {
        generateMealPlanPDF(plan);
    };

    const handleCalendarExport = () => {
        generateMealPlanICS(plan);
    };

    const handleSingleMealSwap = async (dayName: string, mealItem: any) => {
        const mealKey = `${dayName}-${mealItem.type}-${mealItem.food}`;
        setSwappingMealKey(mealKey);
        setSwapErrorKey(null);

        const res = await swapSingleMealAction({
          mealType: mealItem.type,
          currentDish: mealItem.food,
          dietPreference: userPreferences.dietPreference,
          cuisinePreference: userPreferences.cuisinePreference,
          goal: userPreferences.goal,
          householdSize: userPreferences.householdSize || 1,
        });

        if (res.success && res.data) {
          const updatedWeek = week.map(d => {
            if (d.day.toLowerCase() === dayName.toLowerCase()) {
              const updatedMeals = d.meals.map(m => {
                if (m.type === mealItem.type && m.food === mealItem.food) {
                  return res.data;
                }
                return m;
              });
              const newDailyKcal = updatedMeals.reduce((acc, curr) => acc + (curr.calories || 0), 0);
              const newDailyProtein = updatedMeals.reduce((acc, curr) => acc + (curr.protein || 0), 0);
              return {
                ...d,
                meals: updatedMeals,
                dailyCalories: newDailyKcal,
                dailyProtein: newDailyProtein,
              };
            }
            return d;
          });

          onPlanUpdate({
            ...plan,
            week: updatedWeek,
          });
        } else {
          setSwapErrorKey({ key: mealKey, error: res.error || "Regeneration failed." });
        }
        setSwappingMealKey(null);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 w-full min-w-0">
            <Card className="p-fluid-card glass-card border-primary/20 w-full min-w-0">
                <CardHeader className="p-0 mb-8 flex flex-col md:flex-row items-start justify-between gap-6">
                    <div className="space-y-1">
                        <CardTitle className="font-headline text-fluid-h2">Your Weekly Meal Plan</CardTitle>
                        <CardDescription className="text-fluid-subtitle font-medium opacity-70">
                          Customized 7-day nutritional guidance ({userPreferences.householdSize || 1} person servings)
                        </CardDescription>
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
                                <div className={cn(
                                  "grid gap-4 w-full items-stretch",
                                  d.meals.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                                )}>
                                    {d.meals.map(meal => {
                                      const key = `${d.day}-${meal.type}-${meal.food}`;
                                      return (
                                        <MealCard 
                                          key={key} 
                                          meal={meal} 
                                          onSwap={(m) => handleSingleMealSwap(d.day, m)}
                                          isSwapping={swappingMealKey === key}
                                          swapError={swapErrorKey?.key === key ? swapErrorKey.error : null}
                                        />
                                      );
                                    })}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </CardContent>
            </Card>

            <Card className="p-fluid-card glass-card border-primary/10 w-full min-w-0">
                <CardHeader className="p-0 mb-6 flex flex-row items-center justify-between">
                    <CardTitle className="font-headline text-2xl font-medium">Weekly Summary</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1 font-bold">
                        Live Metrics
                    </Badge>
                </CardHeader>
                <CardContent className="p-0 space-y-8 w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full">
                        <SummaryCard icon={<Flame />} title="Avg. Calories" value={liveStats.avgKcal} unit=" kcal" color="bg-orange-500/10 text-orange-600 dark:text-orange-400" />
                        <SummaryCard icon={<Beef />} title="Avg. Protein" value={liveStats.avgProtein} unit=" g" color="bg-sky-500/10 text-sky-600 dark:text-sky-400" />
                        <SummaryCard icon={<Wallet />} title="Est. Cost" value={liveStats.cost} unit=" INR" color="bg-green-500/10 text-green-600 dark:text-green-400" />
                        <SummaryCard icon={<CalendarDays />} title="Healthy Days" value={liveStats.healthyDays} unit="/7" color="bg-purple-500/10 text-purple-600 dark:text-purple-400" />
                    </div>

                    {/* 7-Day Trend Chart */}
                    <WeeklyTrendChart week={week} />

                    <div className="pt-6 border-t border-primary/10 flex justify-center">
                        <Button 
                            onClick={() => setIsShoppingListOpen(true)}
                            className="bg-[#F4A21A] hover:bg-[#F4A21A]/90 text-white font-bold rounded-full px-8 h-12 text-sm shadow-md transition-all flex items-center justify-center"
                        >
                            <ShoppingCart className="mr-2 h-4 w-4" strokeWidth={1.75} />
                            Generate Shopping List
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <WeeklyShoppingListModal
                open={isShoppingListOpen}
                onOpenChange={setIsShoppingListOpen}
                plan={plan}
                pantryItems={pantryItems}
            />

            <div className="flex items-start gap-4 p-fluid-card rounded-3xl border border-border bg-card/30 backdrop-blur-sm shadow-inner mb-12 w-full">
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
            dietPreference: 'Veg' as any,
            cuisinePreference: 'Any',
            goal: 'Balanced eating',
            weeklyBudget: 1500,
            householdSize: 1,
        },
    });

    const watchedHouseholdSize = form.watch('householdSize') || 1;

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
        
        // Map legacy values if present
        let cleanDiet = values.dietPreference;
        if (cleanDiet === ('Vegetarian' as any)) cleanDiet = 'Veg';
        if (cleanDiet === ('Non-Vegetarian' as any)) cleanDiet = 'Non-Veg';
        if (cleanDiet === ('Eggetarian' as any)) cleanDiet = 'Veg + Egg';

        const result = await generateHealthyMealPlanAction({
          ...values,
          dietPreference: cleanDiet,
        });

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
        <div className="content-container pt-fluid-section pb-24 px-4 w-full min-w-0">
            <motion.div 
                style={{ opacity: titleOpacity, y: titleY, visibility: isTitleHidden ? 'hidden' : 'visible', pointerEvents: isTitleHidden ? 'none' : 'auto' }}
                className="text-center mb-16 will-change-[opacity,transform] animate-in fade-in slide-in-from-top-4 duration-1000"
            >
                <h1 className="font-headline text-fluid-h1 font-bold tracking-tight text-stone-900 dark:text-stone-100">Meal Planner</h1>
                <p className="mt-4 text-fluid-subtitle text-muted-foreground max-w-3xl mx-auto font-medium opacity-80 leading-relaxed">
                  Plan your weekly nutrition with AI-crafted Indian meals balanced for your goals and household.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-fluid-grid items-start pb-12 w-full">
                <div className="lg:col-span-1 lg:sticky lg:top-24 stagger-item w-full min-w-0">
                    <Card className="p-fluid-card glass-card border-primary/20 shadow-2xl w-full">
                        <CardHeader className="p-0 mb-8">
                            <div className="bg-primary/10 w-fit p-3 rounded-2xl mb-4">
                                <SlidersHorizontal className="h-6 w-6 text-primary" />
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
                                                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-2 gap-2 p-1.5 bg-muted/30 rounded-2xl border border-primary/5">
                                                    <Label htmlFor="veg" className="flex items-center justify-center rounded-xl p-3 text-[10px] font-black uppercase tracking-widest hover:bg-muted cursor-pointer transition-all [&:has([data-state=checked])]:bg-[#F4A21A] [&:has([data-state=checked])]:text-white shadow-sm text-center">
                                                        <RadioGroupItem value="Veg" id="veg" className="sr-only" />
                                                        Veg
                                                    </Label>
                                                    <Label htmlFor="non-veg" className="flex items-center justify-center rounded-xl p-3 text-[10px] font-black uppercase tracking-widest hover:bg-muted cursor-pointer transition-all [&:has([data-state=checked])]:bg-[#F4A21A] [&:has([data-state=checked])]:text-white shadow-sm text-center">
                                                        <RadioGroupItem value="Non-Veg" id="non-veg" className="sr-only" />
                                                        Non-Veg
                                                    </Label>
                                                    <Label htmlFor="veg-nonveg" className="flex items-center justify-center rounded-xl p-3 text-[10px] font-black uppercase tracking-widest hover:bg-muted cursor-pointer transition-all [&:has([data-state=checked])]:bg-[#F4A21A] [&:has([data-state=checked])]:text-white shadow-sm text-center">
                                                        <RadioGroupItem value="Veg + Non-Veg" id="veg-nonveg" className="sr-only" />
                                                        Veg + Non-Veg
                                                    </Label>
                                                    <Label htmlFor="veg-egg" className="flex items-center justify-center rounded-xl p-3 text-[10px] font-black uppercase tracking-widest hover:bg-muted cursor-pointer transition-all [&:has([data-state=checked])]:bg-[#F4A21A] [&:has([data-state=checked])]:text-white shadow-sm text-center">
                                                        <RadioGroupItem value="Veg + Egg" id="veg-egg" className="sr-only" />
                                                        Veg + Egg
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

                                    <FormField control={form.control} name="householdSize" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Household Size / Servings</FormLabel>
                                            <FormControl>
                                                <div className="flex items-center justify-between p-2.5 bg-muted/30 rounded-2xl border border-primary/5">
                                                    <span className="text-xs font-bold text-muted-foreground pl-2 flex items-center gap-1.5">
                                                        <Users className="h-3.5 w-3.5 text-primary" /> People eating:
                                                    </span>
                                                    <div className="flex items-center gap-3">
                                                        <Button
                                                            type="button"
                                                            variant="outline"
                                                            size="icon"
                                                            className="h-8 w-8 rounded-xl border-primary/20 text-primary font-black text-lg hover:bg-primary/10 shrink-0"
                                                            onClick={() => field.onChange(Math.max(1, (field.value || 1) - 1))}
                                                            disabled={(field.value || 1) <= 1}
                                                        >
                                                            -
                                                        </Button>
                                                        <span className="font-black text-lg w-6 text-center tabular-nums text-foreground">{field.value || 1}</span>
                                                        <Button
                                                            type="button"
                                                            variant="outline"
                                                            size="icon"
                                                            className="h-8 w-8 rounded-xl border-primary/20 text-primary font-black text-lg hover:bg-primary/10 shrink-0"
                                                            onClick={() => field.onChange(Math.min(8, (field.value || 1) + 1))}
                                                            disabled={(field.value || 1) >= 8}
                                                        >
                                                            +
                                                        </Button>
                                                    </div>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                    
                                    <FormField control={form.control} name="weeklyBudget" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Weekly Budget</FormLabel>
                                            <FormControl>
                                               <div className="pt-2">
                                                    <div className="flex justify-between items-center mb-4">
                                                        <span className="text-[10px] font-black text-muted-foreground/40 uppercase tracking-tighter">₹500</span>
                                                        <div className="text-center">
                                                            <span className="block text-[8px] font-black uppercase tracking-widest text-primary mb-0.5">Max Limit</span>
                                                            <span className="font-black text-foreground text-2xl flex items-center tracking-tighter">₹{budget}</span>
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
                                        className="w-full btn-primary-gradient font-black uppercase tracking-widest text-xs h-14 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all" 
                                        disabled={mealPlanState.loading}
                                    >
                                        {mealPlanState.loading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Crafting Plan...
                                            </>
                                        ) : (
                                            <>
                                                <Sparkles className="mr-2 h-4 w-4" />
                                                Generate Weekly Plan
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>

                <div className="lg:col-span-2 space-y-fluid-card stagger-item w-full min-w-0">
                    {mealPlanState.loading && (
                        <Card className="p-12 text-center glass-card border-primary/20 shadow-xl flex flex-col items-center justify-center space-y-4 w-full">
                            <Loader2 className="h-12 w-12 animate-spin text-primary" />
                            <h3 className="font-headline text-2xl font-bold">Creating Your Indian Meal Plan</h3>
                            <p className="text-muted-foreground text-sm max-w-md">Balancing regional cuisines, calorie targets, and grocery budgets for {watchedHouseholdSize} person(s)...</p>
                        </Card>
                    )}

                    {mealPlanState.error && (
                        <Card className="p-8 glass-card border-red-500/20 text-center space-y-4 w-full">
                            <div className="bg-red-500/10 w-fit p-3 rounded-full mx-auto text-red-500">
                                <Info className="h-6 w-6" />
                            </div>
                            <h3 className="font-headline text-xl font-bold text-red-500">Generation Unsuccessful</h3>
                            <p className="text-muted-foreground text-sm max-w-md mx-auto">{mealPlanState.error}</p>
                            <Button onClick={form.handleSubmit(handleGeneratePlan)} variant="outline" className="rounded-xl border-red-500/30 text-red-500 hover:bg-red-500/10">
                                Try Again
                            </Button>
                        </Card>
                    )}

                    {!mealPlanState.loading && !mealPlanState.error && mealPlanState.data && (
                        <MealPlanDisplay 
                          plan={mealPlanState.data} 
                          userPreferences={form.getValues()}
                          onPlanUpdate={(updatedPlan) => setMealPlanState(prev => ({ ...prev, data: updatedPlan }))}
                        />
                    )}

                    {!mealPlanState.loading && !mealPlanState.error && !mealPlanState.data && (
                        <Card className="flex items-center justify-center w-full py-16 sm:py-24 border-dashed border-2 border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/30 rounded-[2.5rem] shadow-xs">
                            <CardContent className="p-0">
                                <div className="text-center space-y-6 px-6">
                                    <div className="flex justify-center">
                                        <div className="bg-[#F4A21A]/10 p-4 rounded-2xl text-primary">
                                            <CalendarDays className="h-8 w-8 text-[#F4A21A]" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-headline text-2xl sm:text-3xl font-semibold text-stone-900 dark:text-stone-100">Ready to Start Your Healthy Week?</h3>
                                        <p className="text-stone-500 text-sm sm:text-base max-w-md mx-auto font-normal leading-relaxed">
                                            Customize your dietary preferences, household size, and weekly budget on the left, then click <span className="font-semibold text-stone-900 dark:text-stone-100">&quot;Generate Weekly Plan&quot;</span>.
                                        </p>
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
