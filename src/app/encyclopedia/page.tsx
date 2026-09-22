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

/**
 * Extracts clean English display name and optional vernacular parenthetical name.
 * e.g., "Turmeric (Haldi)" -> { displayName: "Turmeric", vernacularName: "Haldi" }
 */
function parseIngredientName(fullName: string): { displayName: string; vernacularName?: string } {
  const match = fullName.match(/^([^(]+)(?:\(([^)]+)\))?/);
  if (!match) return { displayName: fullName.trim() };
  return {
    displayName: match[1].trim(),
    vernacularName: match[2]?.trim()
  };
}

const categoryStyles: Record<string, { badge: string; borderHover: string }> = {
  Spice: {
    badge: "bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/25",
    borderHover: "hover:border-amber-500/40",
  },
  Herb: {
    badge: "bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/25",
    borderHover: "hover:border-emerald-500/40",
  },
  Vegetable: {
    badge: "bg-green-500/10 text-green-800 dark:text-green-300 border-green-500/25",
    borderHover: "hover:border-green-500/40",
  },
  Fruit: {
    badge: "bg-rose-500/10 text-rose-800 dark:text-rose-300 border-rose-500/25",
    borderHover: "hover:border-rose-500/40",
  },
  'Grain/Lentil': {
    badge: "bg-orange-500/10 text-orange-800 dark:text-orange-300 border-orange-500/25",
    borderHover: "hover:border-orange-500/40",
  },
  Dairy: {
    badge: "bg-sky-500/10 text-sky-800 dark:text-sky-300 border-sky-500/25",
    borderHover: "hover:border-sky-500/40",
  },
  Other: {
    badge: "bg-purple-500/10 text-purple-800 dark:text-purple-300 border-purple-500/25",
    borderHover: "hover:border-purple-500/40",
  }
};

/**
 * Extracts searchable name tokens from an ingredient profile (English name, Hindi name, ID).
 * Keeps underlying vernacular parenthetical data intact for recipe matching.
 */
function getSearchTerms(item: IngredientProfile): string[] {
  const terms = new Set<string>();
  
  // 1. item.id normalized (replace _ with space)
  terms.add(item.id.replace(/_/g, ' ').toLowerCase());
  
  // 2. item.name full
  const nameLower = item.name.toLowerCase();
  terms.add(nameLower);
  
  // 3. Extract main English & Hindi names from parenthetical e.g. "Turmeric (Haldi)" -> "turmeric", "haldi"
  const match = nameLower.match(/^([^(]+)(?:\(([^)]+)\))?/);
  if (match) {
    const mainName = match[1].trim();
    if (mainName) terms.add(mainName);
    
    if (match[2]) {
      const parenParts = match[2].split(/[\/,]/);
      parenParts.forEach(p => {
        const trimmed = p.trim();
        if (trimmed) terms.add(trimmed);
      });
    }
  }
  
  return Array.from(terms).filter(t => t.length > 2);
}

/**
 * Computes matching recipes for a given encyclopedia ingredient using canonical IDs & alias search terms.
 */
function getMatchingRecipes(item: IngredientProfile) {
  const searchTerms = getSearchTerms(item);
  return allRecipes.filter(r => {
    return r.ingredients.some(ing => {
      const ingName = (ing.name || '').toLowerCase();
      const ingId = (ing.id || '').toLowerCase();
      
      // Match canonical ID or ID without underscores
      if (ingId && (ingId === item.id.toLowerCase() || ingId === item.id.replace(/_/g, '').toLowerCase())) {
        return true;
      }
      
      // Match any alias search term against recipe ingredient name
      return searchTerms.some(term => ingName.includes(term));
    });
  });
}

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

  return (
    <div className="content-container py-12 px-4 md:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary dark:bg-amber-500/20 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        <AnimatePresence mode="popLayout">
            {filteredIngredients.map((item) => (
                <IngredientCard 
                    key={item.id} 
                    item={item} 
                    isExpanded={expandedId === item.id}
                    onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
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
    isExpanded, 
    onToggle
}: { 
    item: IngredientProfile, 
    isExpanded: boolean, 
    onToggle: () => void
}) {
    const matchingRecipes = useMemo(() => getMatchingRecipes(item), [item]);
    const usageCount = matchingRecipes.length;
    const { displayName, vernacularName } = useMemo(() => parseIngredientName(item.name), [item.name]);
    const catStyle = categoryStyles[item.category] || categoryStyles.Other;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={cn(
                "group relative bg-card dark:bg-stone-900/90 border rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-xs",
                isExpanded 
                    ? "border-primary shadow-2xl ring-4 ring-primary/5 col-span-full" 
                    : cn("border-stone-200/90 dark:border-stone-800/90 hover:shadow-lg hover:-translate-y-1", catStyle.borderHover)
            )}
        >
            <div className={cn(
                "flex flex-col h-full justify-between transition-all",
                isExpanded ? "p-6 sm:p-8" : "p-4 sm:p-5"
            )}>
                <div>
                    {/* Top Row: Category Badge + Usage Count */}
                    <div className="flex justify-between items-center gap-2 mb-3">
                        <Badge 
                            variant="outline" 
                            className={cn("font-bold uppercase tracking-wider text-[10px] py-0.5 px-2.5 rounded-full border shadow-2xs", catStyle.badge)}
                        >
                            {item.category}
                        </Badge>
                        <div className="flex items-center gap-1.5 text-stone-500 dark:text-stone-400 text-xs font-medium shrink-0">
                            <History className="h-3.5 w-3.5 text-stone-400" />
                            <span>{usageCount} {usageCount === 1 ? 'recipe' : 'recipes'}</span>
                        </div>
                    </div>

                    {/* Title & Vernacular Name & Description */}
                    <div className="space-y-1.5 mb-2.5">
                        <div className="flex items-baseline gap-1.5 flex-wrap">
                            <h3 className="font-headline text-lg sm:text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100 group-hover:text-primary transition-colors">
                                {displayName}
                            </h3>
                            {vernacularName && (
                                <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 italic">
                                    ({vernacularName})
                                </span>
                            )}
                        </div>
                        <p className={cn(
                            "text-xs sm:text-[13px] text-stone-600 dark:text-stone-300 font-normal leading-relaxed",
                            !isExpanded && "line-clamp-2 min-h-[2.5rem]"
                        )}>
                            {item.whatItIs}
                        </p>
                    </div>

                    {/* Benefit Tags */}
                    {!isExpanded && (
                        <div className="mt-3 flex flex-wrap items-center gap-1.5">
                            {item.benefitTags.slice(0, 2).map(tag => (
                                <Badge 
                                    key={tag} 
                                    variant="secondary"
                                    className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700/60 text-[10px] font-medium tracking-tight rounded-full py-0.5 px-2.5"
                                >
                                    {tag}
                                </Badge>
                            ))}
                            {item.benefitTags.length > 2 && (
                                <span className="text-[10px] text-stone-400 font-medium px-1">
                                    +{item.benefitTags.length - 2} more
                                </span>
                            )}
                        </div>
                    )}
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-6 space-y-6 pt-6 border-t border-stone-200 dark:border-stone-800"
                        >
                            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                                <div className="space-y-4">
                                    <h4 className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[11px]">
                                        <ShieldCheck className="h-4 w-4" />
                                        Verified Benefits
                                    </h4>
                                    <ul className="grid gap-2 sm:gap-2.5">
                                        {item.benefits.map((b, i) => (
                                            <li key={i} className="flex gap-2.5 text-sm font-medium text-foreground/80 bg-muted/30 p-2.5 sm:p-3 rounded-xl border border-border/40">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[11px] mb-3">
                                            <Archive className="h-4 w-4" />
                                            Substitutes
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {item.commonSubstitutes.map(s => (
                                                <Badge key={s} variant="outline" className="h-8 px-3 rounded-lg border-dashed border-primary/30 text-xs font-bold bg-primary/5">
                                                    {s}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.2em] text-[11px] mb-2">
                                            <Lightbulb className="h-4 w-4" />
                                            Storage Tip
                                        </h4>
                                        <p className="text-xs sm:text-sm font-medium leading-relaxed bg-amber-500/5 p-3 sm:p-4 rounded-xl border border-amber-500/10 italic text-stone-700 dark:text-stone-300">
                                            {item.storageTip}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {item.funFact && (
                                <div className="bg-primary/5 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center gap-4 border border-primary/10">
                                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <History className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="space-y-0.5 text-center md:text-left">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-primary">Did You Know?</p>
                                        <p className="text-sm sm:text-base font-medium leading-snug">{item.funFact}</p>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 pt-2">
                                <h4 className="font-headline text-lg sm:text-xl font-bold">Try it in these recipes:</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                                    {matchingRecipes.slice(0, 4).map(recipe => (
                                        <Link 
                                            key={recipe.id} 
                                            href={`/recipes/${recipe.id}`}
                                            className="group/item flex items-center justify-between p-3 rounded-xl bg-card border border-border/40 hover:border-primary transition-all hover:shadow-sm"
                                        >
                                            <span className="text-xs sm:text-sm font-bold truncate pr-2">{recipe.name}</span>
                                            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover/item:text-primary transition-colors shrink-0" />
                                        </Link>
                                    ))}
                                    {usageCount > 4 && (
                                        <Link 
                                            href="/recipes"
                                            className="flex items-center justify-center p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary font-black uppercase tracking-widest text-[9px] hover:bg-primary/20 transition-all"
                                        >
                                            + {usageCount - 4} More Recipes
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Footer Action Button */}
                <div className={cn(
                    "flex items-center justify-between",
                    isExpanded ? "mt-6 border-t border-stone-200 dark:border-stone-800 pt-4" : "mt-4 pt-3 border-t border-stone-100 dark:border-stone-800/60"
                )}>
                    {!isExpanded ? (
                        <>
                            <span className="text-xs font-medium text-stone-500 dark:text-stone-400 group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-colors">
                                Culinary profile
                            </span>
                            <Button 
                                size="sm"
                                onClick={(e) => { e.preventDefault(); onToggle(); }}
                                className="rounded-full h-8 px-3.5 text-xs font-semibold transition-all btn-primary-gradient shadow-xs"
                            >
                                View Profile <ChevronRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </Button>
                        </>
                    ) : (
                        <div className="w-full flex justify-end">
                            <Button 
                                size="sm"
                                onClick={(e) => { e.preventDefault(); onToggle(); }}
                                className="rounded-full h-8 px-4 text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 transition-all"
                            >
                                Close Profile <X className="ml-1.5 h-3.5 w-3.5" />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
