'use client';

import { useState, useMemo } from 'react';
import { ingredientProfiles, benefitCategories, type IngredientProfile } from '@/lib/ingredient-encyclopedia';
import { recipes as allRecipes } from '@/lib/recipes';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
    Search, 
    Filter, 
    BookOpen, 
    Info, 
    ChevronRight, 
    Lightbulb, 
    ShieldCheck, 
    Archive,
    History,
    X,
    ExternalLink
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function EncyclopediaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBenefit, setActiveBenefit] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredIngredients = useMemo(() => {
    return ingredientProfiles.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBenefit = activeBenefit === 'All' || item.benefitTags.includes(activeBenefit as any);
      return matchesSearch && matchesBenefit;
    });
  }, [searchTerm, activeBenefit]);

  const getRecipeUsage = (ingredientId: string) => {
    return allRecipes.filter(r => 
        r.ingredients.some(ing => ing.id === ingredientId || ing.name.toLowerCase().includes(ingredientId))
    );
  };

  return (
    <div className="content-container py-12 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
            <BookOpen className="h-4 w-4" />
            Culinary Knowledge Base
        </div>
        <h1 className="font-headline text-fluid-h1 font-bold tracking-tight">
          Ingredient Encyclopedia
        </h1>
        <p className="text-fluid-subtitle text-muted-foreground max-w-2xl mx-auto opacity-80">
          Learn about the ingredients behind Indian cooking — what they are, their health benefits, substitutes, and storage tips.
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-5xl mx-auto mb-12">
          <div className="grid md:grid-cols-[1fr,300px] gap-4 items-end">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input 
                    placeholder="Search ingredients (e.g. tamarind, turmeric)..."
                    className="pl-12 h-14 rounded-2xl text-lg border-primary/10 bg-card shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground ml-1">Good for:</label>
                  <Select value={activeBenefit} onValueChange={setActiveBenefit}>
                    <SelectTrigger className="h-14 rounded-2xl bg-card border-primary/10 font-bold">
                        <SelectValue placeholder="All Benefits" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl">
                        <SelectItem value="All">All Benefits</SelectItem>
                        {benefitCategories.map(cat => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
              </div>
          </div>
          
          <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/40">
              <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed italic opacity-80">
                These are general food benefits based on common nutritional knowledge — not medical advice. Consult a healthcare professional for personal health concerns.
              </p>
          </div>
      </div>

      {/* Grid */}
      <div className="mb-8 flex items-center justify-between">
          <p className="text-sm font-bold text-muted-foreground">Found {filteredIngredients.length} ingredients</p>
          { (searchTerm || activeBenefit !== 'All') && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => { setSearchTerm(''); setActiveBenefit('All'); }}
                className="h-8 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg"
              >
                  <X className="mr-1 h-3 w-3" /> Clear All Filters
              </Button>
          )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-grid">
        <AnimatePresence mode="popLayout">
            {filteredIngredients.map((item) => (
                <IngredientCard 
                    key={item.id} 
                    item={item} 
                    usageCount={getRecipeUsage(item.id).length}
                    isExpanded={expandedId === item.id}
                    onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    matchingRecipes={getRecipeUsage(item.id)}
                />
            ))}
        </AnimatePresence>
      </div>

      {filteredIngredients.length === 0 && (
          <div className="text-center py-32 border-4 border-dashed rounded-[3rem] border-border/20">
              <div className="bg-muted/10 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-muted-foreground opacity-30" />
              </div>
              <h3 className="text-2xl font-headline font-medium text-muted-foreground">No ingredients found</h3>
              <p className="text-muted-foreground mt-2">Try a different search term or filter category.</p>
          </div>
      )}
    </div>
  );
}

function IngredientCard({ 
    item, 
    usageCount, 
    isExpanded, 
    onToggle,
    matchingRecipes
}: { 
    item: IngredientProfile, 
    usageCount: number, 
    isExpanded: boolean, 
    onToggle: () => void,
    matchingRecipes: any[]
}) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={cn(
                "group relative bg-card/60 backdrop-blur-sm border-2 rounded-[2rem] overflow-hidden transition-all duration-500",
                isExpanded ? "border-primary shadow-2xl ring-4 ring-primary/5 md:col-span-2 lg:col-span-3" : "border-primary/5 hover:border-primary/30 hover:shadow-xl"
            )}
        >
            <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                    <Badge variant="outline" className="bg-primary/5 border-primary/10 text-primary font-black uppercase tracking-[0.1em] text-[10px] py-1 px-3 rounded-lg">
                        {item.category}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-muted-foreground/60 text-[10px] font-black uppercase tracking-widest">
                        <History className="h-3.5 w-3.5" />
                        Used in {usageCount} recipes
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="font-headline text-3xl font-bold tracking-tight leading-none">{item.name}</h3>
                    <p className={cn(
                        "text-muted-foreground font-medium leading-relaxed",
                        !isExpanded && "line-clamp-2"
                    )}>
                        {item.whatItIs}
                    </p>
                </div>

                {!isExpanded && (
                    <div className="mt-6 flex flex-wrap gap-2">
                        {item.benefitTags.slice(0, 3).map(tag => (
                            <Badge key={tag} className="bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-0 text-[9px] font-black uppercase tracking-tighter rounded-md py-1 px-2.5">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-10 space-y-10 pt-10 border-t border-primary/10"
                        >
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <h4 className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[11px]">
                                        <ShieldCheck className="h-4 w-4" />
                                        Verified Benefits
                                    </h4>
                                    <ul className="grid gap-3">
                                        {item.benefits.map((b, i) => (
                                            <li key={i} className="flex gap-3 text-base font-medium text-foreground/80 bg-muted/30 p-3 rounded-xl border border-border/40">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[11px] mb-4">
                                            <Archive className="h-4 w-4" />
                                            Substitutes
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {item.commonSubstitutes.map(s => (
                                                <Badge key={s} variant="outline" className="h-9 px-4 rounded-xl border-dashed border-primary/30 text-sm font-bold bg-primary/5">
                                                    {s}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[11px] mb-3">
                                            <Lightbulb className="h-4 w-4" />
                                            Storage Tip
                                        </h4>
                                        <p className="text-sm font-medium leading-relaxed bg-amber-500/5 p-4 rounded-2xl border border-amber-500/10 italic">
                                            {item.storageTip}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {item.funFact && (
                                <div className="bg-primary/5 rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-6 border border-primary/10">
                                    <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                        <History className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-primary">Did You Know?</p>
                                        <p className="text-lg font-medium leading-tight">{item.funFact}</p>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-6 pt-6">
                                <h4 className="font-headline text-2xl font-bold">Try it in these recipes:</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                    {matchingRecipes.slice(0, 4).map(recipe => (
                                        <Link 
                                            key={recipe.id} 
                                            href={`/recipes/${recipe.id}`}
                                            className="group/item flex items-center justify-between p-4 rounded-2xl bg-card border border-border/40 hover:border-primary transition-all hover:shadow-lg"
                                        >
                                            <span className="text-sm font-bold truncate pr-2">{recipe.name}</span>
                                            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover/item:text-primary transition-colors shrink-0" />
                                        </Link>
                                    ))}
                                    {usageCount > 4 && (
                                        <Link 
                                            href="/recipes"
                                            className="flex items-center justify-center p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-black uppercase tracking-widest text-[10px] hover:bg-primary/20 transition-all"
                                        >
                                            + {usageCount - 4} More Recipes
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-8 flex justify-end">
                    <Button 
                        onClick={(e) => { e.preventDefault(); onToggle(); }}
                        className={cn(
                            "rounded-full px-8 h-12 font-bold transition-all",
                            isExpanded ? "bg-zinc-900 text-white hover:bg-zinc-800" : "btn-primary-gradient"
                        )}
                    >
                        {isExpanded ? (
                            <>Close Profile <X className="ml-2 h-4 w-4" /></>
                        ) : (
                            <>View Full Profile <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></>
                        )}
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
