"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Loader2, 
  Minus, 
  Plus, 
  Camera, 
  X, 
  ChefHat, 
  MapPin, 
  Clock, 
  IndianRupee, 
  Sparkles, 
  Mic, 
  MicOff, 
  ShoppingBasket,
  Package,
  CheckCircle2
} from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CookMitraLogo } from "@/components/icons/cook-mitra-logo";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUser, useFirestore, useCollection, useMemoFirebase } from "@/lib/firebase";
import { collection, query, orderBy } from 'firebase/firestore';
import type { PantryItem } from "@/lib/firebase/firestore/pantry";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  ingredients: z.string(),
  budget: z.number().min(50).max(500),
  cookingTime: z.enum(["<15 minutes", "<30 minutes", "<45 minutes", "<60 minutes", "<90 minutes"]),
  dietaryPreference: z.enum(["Veg", "Non-Veg"]),
  region: z.enum(['North Indian', 'South Indian', 'East Indian', 'West Indian', 'Central Indian', 'Any', 'Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Karnataka', 'Punjabi', 'Bengali', 'Gujarati', 'Maharashtrian', 'Rajasthani']),
  numberOfPersons: z.number().min(1).max(12),
  photoDataUri: z.string().optional(),
  isBatchMode: z.boolean().default(false),
  batchDays: z.number().min(2).max(7).default(3),
}).refine((data) => data.ingredients.trim().length > 0 || !!data.photoDataUri, {
  message: "Please enter at least one ingredient or upload an image.",
  path: ["ingredients"],
});


type RecipeFormValues = z.infer<typeof formSchema>;

interface RecipeGeneratorFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  isGenerating: boolean;
  hasGenerated: boolean;
}

const CATEGORIES = [
  "Vegetables", 
  "Grains & Rice", 
  "Dairy", 
  "Spices", 
  "Proteins", 
  "Condiments", 
  "Other"
];

export function RecipeGeneratorForm({ onSubmit, isGenerating, hasGenerated }: RecipeGeneratorFormProps) {
  const [budget, setBudget] = useState(150);
  const { toast } = useToast();
  const { user } = useUser();
  const firestore = useFirestore();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isListening, setIsListening] = useState(false);
  const [isPantryOpen, setIsPantryOpen] = useState(false);
  const recognitionRef = useRef<any>(null);
  
  const form = useForm<RecipeFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredients: "",
      budget: 150,
      cookingTime: "<30 minutes",
      dietaryPreference: "Veg",
      region: "Any",
      numberOfPersons: 2,
      isBatchMode: false,
      batchDays: 3,
    },
  });

  const isBatchMode = form.watch("isBatchMode");

  // Fetch Pantry Items
  const pantryQuery = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return query(
      collection(firestore, `users/${user.uid}/pantry`),
      orderBy('addedAt', 'desc')
    );
  }, [user, firestore]);

  const { data: pantryItems } = useCollection<PantryItem>(pantryQuery);

  const groupedPantry = useMemo(() => {
    if (!pantryItems) return {};
    return pantryItems.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, PantryItem[]>);
  }, [pantryItems]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-IN';

            recognitionRef.current.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                addIngredientToTextarea(transcript);
                setIsListening(false);
                toast({ title: "Voice input received", description: `Added: ${transcript}` });
            };

            recognitionRef.current.onerror = (event: any) => {
                console.error("Speech recognition error", event.error);
                setIsListening(false);
                if (event.error === 'not-allowed') {
                    toast({ variant: 'destructive', title: "Microphone Access Denied", description: "Please enable microphone permissions in your browser settings." });
                } else {
                    toast({ variant: 'destructive', title: "Voice Input Error", description: "Could not recognize speech. Please try again." });
                }
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        }
    }
  }, [form, toast]);

  const addIngredientToTextarea = (name: string) => {
    const currentIngredients = form.getValues('ingredients');
    const trimmedName = name.trim();
    if (!trimmedName) return;

    // Avoid duplicates
    const items = currentIngredients.split(',').map(i => i.trim().toLowerCase());
    if (items.includes(trimmedName.toLowerCase())) return;

    const newIngredients = currentIngredients 
        ? `${currentIngredients}, ${trimmedName}` 
        : trimmedName;
    form.setValue('ingredients', newIngredients, { shouldValidate: true });
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
        toast({ variant: 'destructive', title: "Not Supported", description: "Voice input is not supported in this browser." });
        return;
    }

    if (isListening) {
        recognitionRef.current.stop();
    } else {
        try {
            recognitionRef.current.start();
            setIsListening(true);
        } catch (e) {
            console.error(e);
            setIsListening(false);
        }
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUri = reader.result as string;
        setImagePreview(dataUri);
        form.setValue('photoDataUri', dataUri, { shouldValidate: true });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    form.setValue('photoDataUri', undefined, { shouldValidate: true });
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (values: RecipeFormValues) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined) {
        formData.append(key, String(value));
      }
    });
    onSubmit(formData);
  };

  const submitButtonLabel = isGenerating 
    ? "Generating..." 
    : (hasGenerated ? "Generate New Recipe" : "Generate Recipe");

  return (
    <Card className="rounded-[2.5rem] bg-card/80 backdrop-blur-sm border border-stone-200/80 dark:border-stone-800/80 shadow-xs overflow-hidden">
      <CardHeader className="p-6 sm:p-8">
        <div className="flex items-center gap-4 mb-1">
            <div className="bg-amber-500/10 p-2.5 rounded-2xl">
                <ChefHat className="h-6 w-6 text-[#F4A21A]" />
            </div>
            <div>
                <CardTitle className="font-headline text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
                    Create Your Recipe
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm font-normal text-stone-500">Refine your vision</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 sm:p-8 pt-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
            
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-muted/30 dark:bg-white/5 border-2 border-dashed border-border dark:border-white/10 focus-within:border-primary/40 focus-within:bg-muted/50 dark:focus-within:bg-white/10 transition-all">
                 <FormField
                    control={form.control}
                    name="ingredients"
                    render={({ field }) => (
                        <FormItem className="!space-y-0">
                            <FormLabel className="text-xs font-black uppercase tracking-[0.2em] text-primary/80">Available Ingredients</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Textarea
                                        placeholder="e.g., onion, tomato, paneer, rice..."
                                        {...field}
                                        className="min-h-[100px] bg-transparent border-0 shadow-none focus-visible:ring-0 px-0 text-lg font-medium resize-none placeholder:text-muted-foreground/30 pr-10"
                                    />
                                    <Button 
                                        type="button" 
                                        variant="ghost" 
                                        size="icon" 
                                        className={cn(
                                            "absolute right-0 top-0 h-10 w-10 rounded-full transition-all",
                                            isListening ? "text-red-500 animate-pulse bg-red-500/10" : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                                        )}
                                        onClick={toggleListening}
                                        title="Add ingredients by voice"
                                    >
                                        {isListening ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5 opacity-40" />}
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage className="pt-2" />
                        </FormItem>
                    )}
                 />
                 <div className="mt-4 pt-4 border-t border-border dark:border-white/10 flex flex-col sm:flex-row gap-3">
                   <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleImageChange} 
                        className="hidden" 
                        accept="image/*"
                    />
                    {imagePreview ? (
                         <div className="relative group rounded-xl overflow-hidden shadow-inner flex-1 min-w-[120px] h-32">
                            <Image src={imagePreview} alt="Ingredients preview" width={200} height={150} className="rounded-xl object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                <Button
                                    type="button"
                                    variant="destructive"
                                    size="sm"
                                    className="h-8 rounded-full font-bold"
                                    onClick={handleRemoveImage}
                                >
                                    <X className="mr-2 h-4 w-4" />
                                    Remove
                                </Button>
                            </div>
                        </div>
                    ) : (
                         <Button type="button" variant="outline" className="flex-1 min-w-0 h-12 rounded-xl bg-muted dark:bg-white/5 hover:bg-muted-foreground/10 dark:hover:bg-white/10 font-bold text-sm border-2 border-border dark:border-white/5 transition-all px-4" onClick={() => fileInputRef.current?.click()}>
                            <Camera className="mr-2 h-5 w-5 text-primary shrink-0" />
                            <span className="truncate">Scan from Pantry Image</span>
                        </Button>
                    )}

                    <Dialog open={isPantryOpen} onOpenChange={setIsPantryOpen}>
                      <DialogTrigger asChild>
                        <Button type="button" variant="outline" className="flex-1 min-w-0 h-12 rounded-xl bg-muted dark:bg-white/5 hover:bg-muted-foreground/10 dark:hover:bg-white/10 font-bold text-sm border-2 border-border dark:border-white/5 transition-all px-4">
                          <ShoppingBasket className="mr-2 h-5 w-5 text-primary shrink-0" />
                          <span className="truncate">Add from Pantry</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-[400px] p-0 rounded-2xl shadow-2xl border-primary/20 overflow-hidden flex flex-col h-auto">
                        <DialogHeader className="bg-primary/5 border-b p-6">
                          <DialogTitle className="text-xl font-headline flex items-center gap-3">
                            <Package className="h-6 w-6 text-primary" />
                            Your Pantry Inventory
                          </DialogTitle>
                        </DialogHeader>
                        
                        <div className="flex-grow min-h-0">
                          <ScrollArea className="max-h-[60vh]">
                            <div className="p-6 space-y-8">
                              {pantryItems && pantryItems.length > 0 ? (
                                CATEGORIES.map(category => {
                                  const items = groupedPantry[category];
                                  if (!items) return null;
                                  return (
                                    <div key={category} className="space-y-3">
                                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{category}</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {items.map(item => {
                                          const isSelected = form.watch('ingredients').split(',').map(i => i.trim().toLowerCase()).includes(item.name.toLowerCase());
                                          return (
                                            <Badge 
                                              key={item.id} 
                                              variant={isSelected ? "default" : "outline"}
                                              className={cn(
                                                "cursor-pointer px-4 py-2 text-sm font-medium rounded-xl transition-all active:scale-95",
                                                isSelected ? "bg-primary text-white border-0 shadow-md scale-105" : "hover:bg-primary/5 hover:border-primary/40"
                                              )}
                                              onClick={() => addIngredientToTextarea(item.name)}
                                            >
                                              {item.name}
                                              {isSelected && <CheckCircle2 className="ml-2 h-4 w-4" />}
                                            </Badge>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  );
                                })
                              ) : (
                                <div className="py-16 text-center space-y-4">
                                  <div className="bg-primary/5 h-20 w-20 rounded-full flex items-center justify-center mx-auto">
                                    <ShoppingBasket className="h-10 w-10 text-muted-foreground opacity-20" />
                                  </div>
                                  <div className="space-y-1">
                                    <p className="text-base font-bold">Your pantry is empty</p>
                                    <p className="text-sm text-muted-foreground">Add items first to pick them here.</p>
                                  </div>
                                  <Button variant="link" className="text-primary font-bold" asChild>
                                    <a href="/pantry">Open My Pantry</a>
                                  </Button>
                                </div>
                              )}
                            </div>
                          </ScrollArea>
                        </div>

                        <div className="p-4 border-t bg-muted/20">
                          <DialogClose asChild>
                            <Button className="w-full rounded-xl h-12 font-black uppercase tracking-widest text-xs shadow-lg">Done</Button>
                          </DialogClose>
                        </div>
                      </DialogContent>
                    </Dialog>
                 </div>
              </div>
            </div>

            <div className="space-y-6 bg-muted/30 dark:bg-white/5 p-6 rounded-2xl border border-border dark:border-white/5">
                <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px] text-muted-foreground mb-4">
                        <IndianRupee className="h-3 w-3 text-primary" />
                        Budget (INR)
                    </FormLabel>
                    <FormControl>
                        <div className="space-y-6">
                        <div className="flex justify-between items-end">
                            <span className="text-[10px] font-black text-muted-foreground opacity-50 uppercase tracking-tighter">₹50</span>
                            <div className="text-center">
                                <span className="block text-[10px] uppercase tracking-[0.2em] text-primary font-black">Limit</span>
                                <span className="text-3xl font-black text-foreground">₹{budget}</span>
                            </div>
                            <span className="text-[10px] font-black text-muted-foreground opacity-50 uppercase tracking-tighter">₹500</span>
                        </div>
                        <Slider
                            min={50}
                            max={500}
                            step={10}
                            defaultValue={[field.value]}
                            onValueChange={(value) => {
                                field.onChange(value[0]);
                                setBudget(value[0]);
                            }}
                            className="py-4"
                        />
                        </div>
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <div className="flex items-end gap-3">
                <FormField
                    control={form.control}
                    name="cookingTime"
                    render={({ field }) => (
                    <FormItem className="flex-1">
                        <FormLabel className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px] text-muted-foreground mb-2">
                            <Clock className="h-3 w-3 text-primary" />
                            Max Cook Time
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className="h-12 rounded-xl bg-muted/50 dark:bg-white/5 border border-border dark:border-white/5 font-bold">
                            <SelectValue placeholder="Select" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="<15 minutes">&lt; 15 min</SelectItem>
                            <SelectItem value="<30 minutes">&lt; 30 min</SelectItem>
                            <SelectItem value="<45 minutes">&lt; 45 min</SelectItem>
                            <SelectItem value="<60 minutes">&lt; 60 min</SelectItem>
                            <SelectItem value="<90 minutes">&lt; 90 min</SelectItem>
                        </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                    <FormItem className="flex-1">
                        <FormLabel className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px] text-muted-foreground mb-2">
                            <MapPin className="h-3 w-3 text-primary" />
                            Region
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className="h-12 min-w-[140px] rounded-xl bg-muted/50 dark:bg-white/5 border border-border dark:border-white/5 font-bold">
                            <SelectValue placeholder="Region" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            <SelectItem value="Any">Any Style</SelectItem>
                            <SelectItem value="North Indian">North Indian</SelectItem>
                            <SelectItem value="South Indian">South Indian</SelectItem>
                            <SelectItem value="East Indian">East Indian</SelectItem>
                            <SelectItem value="West Indian">West Indian</SelectItem>
                            <SelectItem value="Punjabi">Punjabi</SelectItem>
                            <SelectItem value="Bengali">Bengali</SelectItem>
                            <SelectItem value="Gujarati">Gujarati</SelectItem>
                            <SelectItem value="Maharashtrian">Maharashtrian</SelectItem>
                        </SelectContent>
                        </Select>
                    </FormItem>
                    )}
                />
                </div>
            </div>

            <div className="flex gap-4 items-center">
              <FormField
                control={form.control}
                name="dietaryPreference"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="font-black uppercase tracking-widest text-[10px] text-muted-foreground mb-2 block">Dietary Preference</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-2 p-1.5 border border-border dark:border-white/5 rounded-2xl bg-muted/50 dark:bg-white/5"
                      >
                        <div className="flex-1 min-w-[80px]">
                          <RadioGroupItem value="Veg" id="diet-veg" className="peer sr-only" />
                          <Label
                            htmlFor="diet-veg"
                            className="flex items-center justify-center h-10 w-full rounded-xl cursor-pointer peer-data-[state=checked]:bg-[#F4A21A] peer-data-[state=checked]:text-white font-semibold text-xs uppercase tracking-wider transition-all whitespace-nowrap"
                          >
                            Veg
                          </Label>
                        </div>
                        <div className="flex-1 min-w-[80px]">
                          <RadioGroupItem value="Non-Veg" id="diet-non-veg" className="peer sr-only" />
                          <Label
                            htmlFor="diet-non-veg"
                            className="flex items-center justify-center h-10 w-full rounded-xl cursor-pointer peer-data-[state=checked]:bg-[#F4A21A] peer-data-[state=checked]:text-white font-semibold text-xs uppercase tracking-wider transition-all whitespace-nowrap"
                          >
                            Non-Veg
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numberOfPersons"
                render={({ field }) => (
                  <FormItem className="w-32">
                    <FormLabel className="font-bold uppercase tracking-wider text-[11px] text-stone-400 mb-2 block">Servings</FormLabel>
                    <FormControl>
                       <div className="flex items-center justify-between rounded-2xl border border-stone-200 dark:border-stone-800 h-[52px] bg-stone-50/50 dark:bg-stone-900/40 px-2">
                          <Button variant="ghost" size="icon" type="button" className="h-8 w-8 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800" onClick={() => field.onChange(Math.max(1, field.value - 1))}>
                              <Minus className="h-4 w-4" />
                          </Button>
                          <span className="font-headline font-bold text-xl text-stone-900 dark:text-stone-100">{field.value}</span>
                          <Button variant="ghost" size="icon" type="button" className="h-8 w-8 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800" onClick={() => field.onChange(Math.min(12, field.value + 1))}>
                              <Plus className="h-4 w-4" />
                          </Button>
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                <FormField
                    control={form.control}
                    name="isBatchMode"
                    render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-2xl border border-stone-200 dark:border-stone-800 p-4 bg-stone-50/50 dark:bg-stone-900/40">
                        <div className="space-y-0.5">
                            <FormLabel className="font-bold uppercase tracking-wider text-[11px] text-stone-400">Batch Cooking</FormLabel>
                            <FormDescription className="text-xs text-stone-500">Cook for the whole week</FormDescription>
                        </div>
                        <FormControl>
                            <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        </FormControl>
                    </FormItem>
                    )}
                />

                {isBatchMode && (
                    <FormField
                        control={form.control}
                        name="batchDays"
                        render={({ field }) => (
                        <FormItem className="animate-in fade-in slide-in-from-top-2 duration-300">
                            <FormLabel className="font-bold uppercase tracking-wider text-[11px] text-stone-400 mb-2 block">
                                Number of Days
                            </FormLabel>
                            <FormControl>
                                <div className="flex items-center justify-between rounded-2xl border border-stone-200 dark:border-stone-800 h-[52px] bg-stone-50/50 dark:bg-stone-900/40 px-2">
                                    <Button variant="ghost" size="icon" type="button" className="h-8 w-8 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800" onClick={() => field.onChange(Math.max(2, field.value - 1))}>
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <span className="font-headline font-bold text-xl text-stone-900 dark:text-stone-100">{field.value} Days</span>
                                    <Button variant="ghost" size="icon" type="button" className="h-8 w-8 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-800" onClick={() => field.onChange(Math.min(7, field.value + 1))}>
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </FormControl>
                        </FormItem>
                        )}
                    />
                )}
            </div>

            <Button 
                type="submit" 
                variant="secondary"
                className="w-full rounded-full h-14 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-lg shadow-amber-500/25 border-0 transition-all active:scale-[0.99] flex items-center justify-center gap-2 !mt-10" 
                disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                    <Sparkles className="h-4 w-4" />
                    {submitButtonLabel}
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
