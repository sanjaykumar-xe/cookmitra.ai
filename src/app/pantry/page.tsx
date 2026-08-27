'use client';

import { useState, useMemo } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/lib/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Badge } from "@/components/ui/badge";
import { 
  Loader2, 
  Plus, 
  X, 
  Edit2, 
  ShoppingBasket, 
  Package, 
  UtensilsCrossed, 
  ChefHat, 
  Check, 
  Trash2,
  AlertTriangle,
  Sparkles
} from 'lucide-react';
import { addPantryItem, deletePantryItem, updatePantryItem, type PantryItem } from '@/lib/firebase/firestore/pantry';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { recipes } from '@/lib/recipes';
import { ingredientProfiles } from '@/lib/ingredient-encyclopedia';

const CATEGORIES = [
  "Vegetables", 
  "Grains & Rice", 
  "Dairy", 
  "Spices", 
  "Proteins", 
  "Condiments", 
  "Other"
];

export default function PantryPage() {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Other');
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  // Autocomplete state
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const pantryQuery = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return query(
      collection(firestore, `users/${user.uid}/pantry`),
      orderBy('addedAt', 'desc')
    );
  }, [user, firestore]);

  const { data: pantryItems, isLoading: isPantryLoading } = useCollection<PantryItem>(pantryQuery);

  const groupedItems = useMemo(() => {
    if (!pantryItems) return {};
    return pantryItems.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, PantryItem[]>);
  }, [pantryItems]);

  // Aggregate canonical ingredient suggestions from recipes & encyclopedia
  const canonicalSuggestions = useMemo(() => {
    const map = new Map<string, string>(); // name -> category

    // 1. From Encyclopedia
    ingredientProfiles.forEach(profile => {
      let cat = 'Other';
      if (profile.category === 'Spice') cat = 'Spices';
      else if (profile.category === 'Vegetable' || profile.category === 'Fruit' || profile.category === 'Herb') cat = 'Vegetables';
      else if (profile.category === 'Grain/Lentil') cat = 'Grains & Rice';
      else if (profile.category === 'Dairy') cat = 'Dairy';
      map.set(profile.name, cat);
    });

    // 2. From Recipes
    recipes.forEach(r => {
      r.ingredients.forEach(ing => {
        if (ing.name && !map.has(ing.name)) {
          let cat = 'Other';
          const nameLower = ing.name.toLowerCase();
          if (nameLower.includes('spice') || nameLower.includes('masala') || nameLower.includes('chili') || nameLower.includes('turmeric') || nameLower.includes('cumin') || nameLower.includes('mustard') || nameLower.includes('cardamom') || nameLower.includes('clove') || nameLower.includes('cinnamon') || nameLower.includes('salt') || nameLower.includes('hing')) {
            cat = 'Spices';
          } else if (nameLower.includes('rice') || nameLower.includes('dal') || nameLower.includes('flour') || nameLower.includes('atta') || nameLower.includes('oats') || nameLower.includes('dalia') || nameLower.includes('semolina') || nameLower.includes('rava')) {
            cat = 'Grains & Rice';
          } else if (nameLower.includes('milk') || nameLower.includes('paneer') || nameLower.includes('curd') || nameLower.includes('dahi') || nameLower.includes('ghee') || nameLower.includes('butter') || nameLower.includes('cheese')) {
            cat = 'Dairy';
          } else if (nameLower.includes('tomato') || nameLower.includes('onion') || nameLower.includes('potato') || nameLower.includes('spinach') || nameLower.includes('ginger') || nameLower.includes('garlic') || nameLower.includes('chilli') || nameLower.includes('coriander') || nameLower.includes('mint') || nameLower.includes('curry leaf') || nameLower.includes('gourd') || nameLower.includes('lemon')) {
            cat = 'Vegetables';
          } else if (nameLower.includes('chicken') || nameLower.includes('mutton') || nameLower.includes('egg') || nameLower.includes('fish') || nameLower.includes('prawn') || nameLower.includes('tofu')) {
            cat = 'Proteins';
          } else if (nameLower.includes('sauce') || nameLower.includes('chutney') || nameLower.includes('vinegar') || nameLower.includes('ketchup') || nameLower.includes('oil') || nameLower.includes('honey')) {
            cat = 'Condiments';
          }
          map.set(ing.name, cat);
        }
      });
    });

    // 3. Fallback common Indian staples
    const staples = [
      { name: 'Paneer', category: 'Dairy' },
      { name: 'Basmati Rice', category: 'Grains & Rice' },
      { name: 'Curd (Dahi)', category: 'Dairy' },
      { name: 'Ghee', category: 'Dairy' },
      { name: 'Tomatoes', category: 'Vegetables' },
      { name: 'Onions', category: 'Vegetables' },
      { name: 'Potatoes (Aloo)', category: 'Vegetables' },
      { name: 'Garlic', category: 'Vegetables' },
      { name: 'Ginger', category: 'Vegetables' },
      { name: 'Green Chillies', category: 'Vegetables' },
      { name: 'Turmeric Powder (Haldi)', category: 'Spices' },
      { name: 'Cumin Seeds (Jeera)', category: 'Spices' },
      { name: 'Mustard Seeds (Rai)', category: 'Spices' },
      { name: 'Garam Masala', category: 'Spices' },
      { name: 'Red Chilli Powder', category: 'Spices' },
      { name: 'Coriander Powder (Dhania)', category: 'Spices' },
      { name: 'Toor Dal (Arhar Dal)', category: 'Grains & Rice' },
      { name: 'Moong Dal', category: 'Grains & Rice' },
      { name: 'Chana Dal', category: 'Grains & Rice' },
      { name: 'Atta (Whole Wheat Flour)', category: 'Grains & Rice' },
      { name: 'Mustard Oil', category: 'Condiments' },
      { name: 'Refined Oil', category: 'Condiments' },
      { name: 'Coconut Oil', category: 'Condiments' },
      { name: 'Jaggery (Gur)', category: 'Condiments' },
      { name: 'Eggs', category: 'Proteins' },
      { name: 'Chicken', category: 'Proteins' },
    ];

    staples.forEach(s => {
      if (!map.has(s.name)) map.set(s.name, s.category);
    });

    return Array.from(map.entries()).map(([name, category]) => ({ name, category }));
  }, []);

  const matchingSuggestions = useMemo(() => {
    const trimmed = newItemName.trim().toLowerCase();
    if (!trimmed || trimmed.length < 1) return [];

    return canonicalSuggestions
      .filter(item => item.name.toLowerCase().includes(trimmed))
      .slice(0, 6);
  }, [newItemName, canonicalSuggestions]);

  // Check for duplicate in user's pantry
  const duplicateItem = useMemo(() => {
    const trimmed = newItemName.trim().toLowerCase();
    if (!trimmed || !pantryItems) return null;

    return pantryItems.find(item => item.name.trim().toLowerCase() === trimmed);
  }, [newItemName, pantryItems]);

  const selectSuggestion = (sugg: { name: string, category: string }) => {
    setNewItemName(sugg.name);
    if (sugg.category && CATEGORIES.includes(sugg.category)) {
      setNewItemCategory(sugg.category);
    }
    setShowSuggestions(false);
    setHighlightIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || matchingSuggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex(prev => (prev < matchingSuggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex(prev => (prev > 0 ? prev - 1 : matchingSuggestions.length - 1));
    } else if (e.key === 'Enter' && highlightIndex >= 0) {
      e.preventDefault();
      selectSuggestion(matchingSuggestions[highlightIndex]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setHighlightIndex(-1);
    }
  };

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim() || !user || !firestore) return;

    setIsAdding(true);
    try {
      await addPantryItem(firestore, user.uid, {
        name: newItemName.trim(),
        quantity: newItemQty.trim(),
        category: newItemCategory
      });
      setNewItemName('');
      setNewItemQty('');
      setNewItemCategory('Other');
      setShowSuggestions(false);
      toast({ title: "Added to Pantry", description: `${newItemName} is now in your inventory.` });
    } catch (error) {
      toast({ variant: 'destructive', title: "Error", description: "Could not add item to pantry." });
    } finally {
      setIsAdding(false);
    }
  };

  const handleDeleteItem = async (itemId: string, itemName: string) => {
    if (!user || !firestore) return;
    try {
      await deletePantryItem(firestore, user.uid, itemId);
      toast({ title: "Removed from Pantry", description: `${itemName} has been removed.` });
    } catch (error) {
      toast({ variant: 'destructive', title: "Error", description: "Could not remove item." });
    }
  };

  const startEditing = (item: PantryItem) => {
    setEditingId(item.id);
    setEditValue(item.quantity);
  };

  const saveEdit = async (itemId: string) => {
    if (!user || !firestore) return;
    try {
      await updatePantryItem(firestore, user.uid, itemId, { quantity: editValue });
      setEditingId(null);
    } catch (error) {
      toast({ variant: 'destructive', title: "Error", description: "Could not update quantity." });
    }
  };

  if (isUserLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="content-container py-fluid-section px-4">
      <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
        <h1 className="font-headline text-fluid-h1 font-bold tracking-tight text-stone-900 dark:text-stone-100">My Pantry</h1>
        <p className="mt-4 text-fluid-subtitle text-muted-foreground max-w-2xl mx-auto font-medium opacity-80">
          Keep track of what&apos;s in your kitchen, so you always know what you can cook.
        </p>
      </div>

      <Card className="p-fluid-card glass-card border-primary/20 shadow-2xl mb-12 stagger-item">
        <form onSubmit={handleAddItem} className="space-y-3">
          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="flex-1 w-full space-y-2 relative">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80 px-1">Ingredient Name</label>
              <Input 
                id="pantry-item-input"
                placeholder="e.g., Paneer, Basmati Rice..." 
                value={newItemName} 
                onChange={(e) => {
                  setNewItemName(e.target.value);
                  setShowSuggestions(true);
                  setHighlightIndex(-1);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                onKeyDown={handleKeyDown}
                className="h-12 rounded-xl bg-muted/30 border-primary/5 focus:ring-primary/20"
                required
                autoComplete="off"
              />

              {/* Autocomplete Suggestions Dropdown */}
              {showSuggestions && matchingSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-card/95 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-2xl overflow-hidden py-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {matchingSuggestions.map((sugg, idx) => (
                    <div
                      key={sugg.name}
                      className={cn(
                        "px-4 py-2.5 cursor-pointer flex items-center justify-between text-sm transition-colors",
                        highlightIndex === idx ? "bg-[#F4A21A]/15 font-bold text-[#F4A21A]" : "hover:bg-primary/5 text-foreground"
                      )}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        selectSuggestion(sugg);
                      }}
                    >
                      <span className="font-semibold">{sugg.name}</span>
                      <Badge variant="outline" className="text-[10px] font-bold bg-primary/5 text-primary border-primary/20">
                        {sugg.category}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full md:w-32 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80 px-1">Qty (Optional)</label>
              <Input 
                placeholder="e.g., 500g" 
                value={newItemQty} 
                onChange={(e) => setNewItemQty(e.target.value)}
                className="h-12 rounded-xl bg-muted/30 border-primary/5 focus:ring-primary/20"
              />
            </div>
            <div className="w-full md:w-48 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80 px-1">Category</label>
              <Select value={newItemCategory} onValueChange={setNewItemCategory}>
                <SelectTrigger className="h-12 rounded-xl bg-muted/30 font-bold border-primary/5 focus:ring-primary/20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {CATEGORIES.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button 
              type="submit" 
              className="h-12 rounded-xl px-8 font-black uppercase tracking-widest transition-all active:scale-95 shadow-xl border-0 bg-[#F4A21A] hover:bg-[#E09015] text-white"
              disabled={isAdding || !newItemName.trim()}
            >
              {isAdding ? <Loader2 className="h-5 w-5 animate-spin" /> : <Plus className="h-5 w-5 mr-2" />}
              Add
            </Button>
          </div>

          {/* Duplicate Warning Banner */}
          {duplicateItem && (
            <div className="mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs flex items-center gap-2.5 animate-in fade-in duration-300">
              <AlertTriangle className="h-4 w-4 text-[#F4A21A] shrink-0" />
              <span>
                You already have <strong>&quot;{duplicateItem.name}&quot;</strong> in your pantry ({duplicateItem.quantity || 'No qty'}). Consider updating its quantity instead!
              </span>
            </div>
          )}
        </form>
      </Card>

      {isPantryLoading ? (
        <div className="flex justify-center py-24">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      ) : pantryItems && pantryItems.length > 0 ? (
        <div className="space-y-12 pb-24">
          {CATEGORIES.map(category => {
            const items = groupedItems[category];
            if (!items) return null;
            return (
              <section key={category} className="stagger-item">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="font-headline text-2xl font-medium tracking-tight shrink-0">{category}</h2>
                  <div className="h-px flex-1 bg-primary/10" />
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">{items.length} items</Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  <AnimatePresence>
                    {items.map(item => (
                      <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.75, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: -10 }}
                        transition={{ type: "spring", stiffness: 450, damping: 22 }}
                        whileHover={{ scale: 1.02 }}
                        layout
                      >
                        <Card className="group hover:border-primary/50 transition-all duration-300 bg-card/60 overflow-hidden rounded-2xl relative">
                          <CardContent className="p-4 flex items-center justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <p className="font-bold text-base truncate group-hover:text-primary transition-colors">{item.name}</p>
                              {editingId === item.id ? (
                                <div className="flex items-center gap-2 mt-2">
                                  <Input 
                                    value={editValue} 
                                    onChange={(e) => setEditValue(e.target.value)}
                                    className="h-8 text-xs bg-background"
                                    autoFocus
                                  />
                                  <Button size="icon" variant="ghost" className="h-8 w-8 text-green-500" onClick={() => saveEdit(item.id)}>
                                    <Check className="h-4 w-4" />
                                  </Button>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-xs text-muted-foreground font-medium opacity-80">{item.quantity || 'No qty'}</span>
                                  <button onClick={() => startEditing(item)} className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-muted-foreground hover:text-primary">
                                    <Edit2 className="h-3 w-3" />
                                  </button>
                                </div>
                              )}
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
                              onClick={() => handleDeleteItem(item.id, item.name)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="text-center py-20 border-dashed border-2 bg-card/40 backdrop-blur-md border-[#F4A21A]/30 dark:border-amber-500/20 rounded-[3rem] max-w-3xl mx-auto shadow-xl">
            <CardHeader className="p-8 pb-4">
              <div className="mx-auto bg-[#F4A21A]/10 text-[#F4A21A] dark:bg-amber-500/20 dark:text-amber-400 rounded-2xl p-6 w-24 h-24 flex items-center justify-center mb-6 shadow-sm">
                <ShoppingBasket className="h-12 w-12 stroke-[1.75] text-[#F4A21A]" />
              </div>
              <CardTitle className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">Your Kitchen Pantry is Empty</CardTitle>
              <CardDescription className="text-sm sm:text-base font-medium text-stone-700 dark:text-stone-300 mt-3 max-w-md mx-auto leading-relaxed">
                Keep track of ingredients you have at home so CookMitra AI can suggest personalized recipes tailored to your available stock!
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4 pb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => {
                  const inputEl = document.getElementById('pantry-item-input');
                  if (inputEl) inputEl.focus();
                }}
                className="rounded-full px-8 h-12 text-sm font-bold shadow-md bg-[#F4A21A] hover:bg-[#E09015] text-white transition-all border-0"
              >
                <Plus className="mr-2 h-4 w-4" /> Add Ingredients Above
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
