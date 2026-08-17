"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Copy, Search, Check, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface MissingIngredientsProps {
  missingIngredients: string[];
  userIngredients: string[];
}

const PLATFORMS = [
  { id: "google", name: "Google Shopping", url: (q: string) => `https://www.google.com/search?tbm=shop&q=${q}` },
  { id: "blinkit", name: "Blinkit", url: (q: string) => `https://blinkit.com/s/?q=${q}` },
  { id: "zepto", name: "Zepto", url: (q: string) => `https://www.zeptonow.com/search?query=${q}` },
  { id: "swiggy", name: "Swiggy Instamart", url: (q: string) => `https://www.swiggy.com/instamart/search?custom_back=true&query=${q}` },
  { id: "amazon", name: "Amazon Fresh", url: (q: string) => `https://www.amazon.in/s?k=${q}&i=nowstore` },
  { id: "flipkart", name: "Flipkart Minutes", url: (q: string) => `https://www.flipkart.com/search?q=${q}` },
];

export function MissingIngredients({
  missingIngredients,
}: MissingIngredientsProps) {
  const { toast } = useToast();
  const [selectedPlatformId, setSelectedPlatformId] = useState("google");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("cookmitra_preferred_grocery_platform");
      if (saved && PLATFORMS.find(p => p.id === saved)) {
        setSelectedPlatformId(saved);
      }
    }
  }, []);

  const handlePlatformChange = (val: string) => {
    setSelectedPlatformId(val);
    if (typeof window !== 'undefined') {
      localStorage.setItem("cookmitra_preferred_grocery_platform", val);
    }
  };

  const cleanName = (name: string) => {
    // Strips parenthetical qualifiers like "Onion (for frying)" -> "Onion"
    // Also ignores leading measurements if they contain numbers
    return name.replace(/\s*\([^)]*\)/g, '').replace(/^[\d\s\/\-.]+(g|kg|ml|l|tbsp|tsp|cup|cups|pieces|pcs|dozen)?\s+/i, '').trim();
  };

  const selectedPlatform = PLATFORMS.find(p => p.id === selectedPlatformId) || PLATFORMS[0];

  const handleShopSingle = (ing: string) => {
    const cleaned = cleanName(ing);
    const url = selectedPlatform.url(encodeURIComponent(cleaned));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleShopAll = async () => {
    if (missingIngredients.length === 0) return;

    // 1. Copy the formatted list to clipboard
    const listText = missingIngredients.map(ing => `• ${ing}`).join('\n');
    try {
      await navigator.clipboard.writeText(listText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
      
      toast({
        title: "List Copied!",
        description: "Paste the list to search for the rest after the first item.",
      });
    } catch (err) {
      console.error("Failed to copy to clipboard", err);
    }

    // 2. Open search for first item
    const firstCleaned = cleanName(missingIngredients[0]);
    const url = selectedPlatform.url(encodeURIComponent(firstCleaned));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (missingIngredients.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-green-500/20 bg-green-500/5 p-8 text-center">
        <Check className="h-8 w-8 text-green-500 mx-auto mb-3" />
        <p className="font-bold text-green-700 dark:text-green-400">All Ingredients Ready!</p>
        <p className="text-xs text-muted-foreground mt-1">You have everything you need in your kitchen.</p>
      </div>
    );
  }

  return (
    <div className="rounded-[2.5rem] border border-amber-500/20 bg-amber-500/5 p-6 h-full flex flex-col gap-5 overflow-hidden shadow-xs">
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-headline text-xl font-medium text-stone-900 dark:text-stone-100">Missing Ingredients</h3>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 whitespace-nowrap">Shop on:</span>
                    <Select value={selectedPlatformId} onValueChange={handlePlatformChange}>
                        <SelectTrigger className="h-8 w-[140px] text-xs font-semibold bg-background border-stone-200 dark:border-stone-700 rounded-full focus:ring-0 focus:ring-offset-0">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-stone-200 dark:border-stone-800">
                            {PLATFORMS.map(p => (
                                <SelectItem key={p.id} value={p.id} className="text-xs font-medium focus:bg-amber-500/10 focus:text-[#F4A21A]">
                                  {p.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-1.5">
                {missingIngredients.map((ing, index) => (
                <div key={index} className="flex items-center justify-between gap-3 p-3 px-3.5 rounded-2xl bg-background/60 border border-amber-500/10 group hover:border-amber-500/30 transition-all">
                    <span className="text-xs font-medium text-stone-800 dark:text-stone-200 truncate flex-1">{ing}</span>
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7 rounded-xl text-stone-400 hover:text-[#F4A21A] hover:bg-amber-500/10 transition-all shrink-0"
                        onClick={() => handleShopSingle(ing)}
                        title={`Shop ${cleanName(ing)} on ${selectedPlatform.name}`}
                    >
                        <Search className="h-3.5 w-3.5" />
                    </Button>
                </div>
                ))}
            </div>
        </div>

        <div className="mt-auto space-y-4">
            <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-background/60 border border-amber-500/10">
              <Info className="h-4 w-4 text-[#F4A21A] shrink-0 mt-0.5" />
              <p className="text-[10px] text-stone-500 font-medium leading-relaxed">
                We'll copy all missing ingredients and open <strong>{selectedPlatform.name}</strong> — paste the list to search for the rest after the first item.
              </p>
            </div>
            
            <motion.div whileTap={{ scale: 0.97 }}>
              <Button 
                  className={cn(
                    "w-full font-semibold text-xs uppercase tracking-wider h-12 rounded-full shadow-md transition-all flex items-center justify-center gap-2 border-0",
                    isCopied ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20" : "bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-amber-500/25"
                  )} 
                  onClick={handleShopAll}
              >
                  <AnimatePresence mode="wait" initial={false}>
                    {isCopied ? (
                      <motion.span
                        key="copied"
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="h-4 w-4 text-white" /> List Copied!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="shop"
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                      >
                        <ShoppingCart className="h-4 w-4" /> Shop All Missing
                      </motion.span>
                    )}
                  </AnimatePresence>
              </Button>
            </motion.div>
        </div>
    </div>
  );
}
