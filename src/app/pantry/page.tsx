'use client';

import { useState, useMemo } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
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
  Trash2 
} from 'lucide-react';
import { addPantryItem, deletePantryItem, updatePantryItem, type PantryItem } from '@/firebase/firestore/pantry';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim() || !user || !firestore) return;

    setIsAdding(true);
    try {
      await addPantryItem(firestore, user.uid, {
        name: newItemName,
        quantity: newItemQty,
        category: newItemCategory
      });
      setNewItemName('');
      setNewItemQty('');
      setNewItemCategory('Other');
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
        <h1 className="font-headline text-fluid-h1 font-bold text-primary">My Pantry</h1>
        <p className="mt-4 text-fluid-subtitle text-muted-foreground max-w-2xl mx-auto font-medium opacity-80">
          Keep track of what&apos;s in your kitchen, so you always know what you can cook.
        </p>
      </div>

      <Card className="p-fluid-card glass-card border-primary/20 shadow-2xl mb-12 stagger-item">
        <form onSubmit={handleAddItem} className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1 w-full space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/80 px-1">Ingredient Name</label>
            <Input 
              placeholder="e.g., Paneer, Basmati Rice..." 
              value={newItemName} 
              onChange={(e) => setNewItemName(e.target.value)}
              className="h-12 rounded-xl bg-muted/30 border-primary/5 focus:ring-primary/20"
              required
            />
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
            className="h-12 rounded-xl px-8 font-black uppercase tracking-widest transition-all active:scale-95 shadow-xl border-0"
            disabled={isAdding || !newItemName.trim()}
          >
            {isAdding ? <Loader2 className="h-5 w-5 animate-spin" /> : <Plus className="h-5 w-5 mr-2" />}
            Add
          </Button>
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
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
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
        <Card className="text-center py-24 border-dashed border-2 bg-card/30 rounded-[3rem] max-w-4xl mx-auto stagger-item">
          <CardHeader>
            <div className="mx-auto bg-primary/10 rounded-[2.5rem] h-24 w-24 flex items-center justify-center mb-6">
              <ShoppingBasket className="h-12 w-12 text-primary opacity-40" />
            </div>
            <CardTitle className="font-headline text-3xl font-medium tracking-tight">Your pantry is empty</CardTitle>
            <CardDescription className="text-fluid-body mt-2 max-w-xs mx-auto">
              Add ingredients you have at home to keep track of your kitchen inventory.
            </CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}
