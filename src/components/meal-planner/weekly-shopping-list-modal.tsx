'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import type { GenerateHealthyMealPlanOutput } from '@/ai/schemas/healthy-meal-plan-schemas';
import type { PantryItem } from '@/lib/firebase/firestore/pantry';
import {
  GROCERY_CATEGORIES,
  CATEGORY_METADATA,
  aggregateAndMergeIngredients,
  type GroceryCategory,
  type MergedGroceryItem
} from '@/lib/grocery-categories';

interface WeeklyShoppingListModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plan: GenerateHealthyMealPlanOutput | null;
  pantryItems?: PantryItem[] | null;
}

export function WeeklyShoppingListModal({
  open,
  onOpenChange,
  plan,
  pantryItems
}: WeeklyShoppingListModalProps) {
  const { toast } = useToast();
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  // Compute aggregated list fresh whenever plan or pantryItems change
  const aggregatedData = useMemo(() => {
    if (!plan) {
      return {
        'Produce': [],
        'Dairy': [],
        'Grains & Lentils': [],
        'Spices & Condiments': [],
        'Other': []
      } as Record<GroceryCategory, MergedGroceryItem[]>;
    }
    return aggregateAndMergeIngredients(plan, pantryItems);
  }, [plan, pantryItems]);

  // Non-empty categories
  const activeCategories = useMemo(() => {
    return GROCERY_CATEGORIES.filter(cat => aggregatedData[cat] && aggregatedData[cat].length > 0);
  }, [aggregatedData]);

  // Recalculate local checkbox state fresh every time modal opens or data recalculates
  useEffect(() => {
    if (open) {
      const initialChecked: Record<string, boolean> = {};
      activeCategories.forEach(cat => {
        aggregatedData[cat].forEach(item => {
          initialChecked[item.id] = item.inPantry;
        });
      });
      setCheckedState(initialChecked);
      setCopied(false);
    }
  }, [open, aggregatedData, activeCategories]);

  const toggleCheck = (itemId: string) => {
    setCheckedState(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleCopyList = async () => {
    if (!plan) return;

    let textBuffer = `YOUR WEEKLY SHOPPING LIST\n\n`;

    activeCategories.forEach(cat => {
      const items = aggregatedData[cat];
      if (items.length > 0) {
        textBuffer += `${cat.toUpperCase()}\n`;
        items.forEach(item => {
          const qtyText = item.quantity ? ` (${item.quantity})` : '';
          const pantrySuffix = item.inPantry ? ' [In pantry]' : '';
          textBuffer += `- ${item.displayName}${qtyText}${pantrySuffix}\n`;
        });
        textBuffer += `\n`;
      }
    });

    try {
      await navigator.clipboard.writeText(textBuffer.trim());
      setCopied(true);
      toast({
        title: "List copied!",
        description: "Weekly shopping list copied to clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Copy failed",
        description: "Could not copy list to clipboard.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-card border-primary/20 shadow-2xl">
        <DialogHeader className="space-y-2 text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#F4A21A]/10 text-[#F4A21A] w-fit">
              <ShoppingCart className="h-6 w-6" strokeWidth={1.75} />
            </div>
            <div>
              <DialogTitle className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Your Weekly Shopping List
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm font-sans text-muted-foreground font-medium">
                Ingredients aggregated from your 7-day meal plan and cross-checked with My Pantry.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="py-4">
          {activeCategories.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <p className="text-sm font-medium text-muted-foreground">No ingredients found in this meal plan.</p>
            </div>
          ) : (
            <Accordion
              type="multiple"
              defaultValue={activeCategories}
              className="space-y-3"
            >
              {activeCategories.map(cat => {
                const meta = CATEGORY_METADATA[cat];
                const IconComponent = meta.icon;
                const items = aggregatedData[cat];

                return (
                  <AccordionItem
                    key={cat}
                    value={cat}
                    className="border border-border/60 rounded-2xl px-4 py-1 bg-card/40 overflow-hidden shadow-xs"
                  >
                    <AccordionTrigger className="hover:no-underline py-3">
                      <div className="flex items-center gap-3">
                        <div className={cn("p-2 rounded-xl w-fit transition-colors", meta.badgeStyle)}>
                          <IconComponent className="h-4 w-4" strokeWidth={1.75} />
                        </div>
                        <span className="font-headline text-base font-bold text-foreground">
                          {cat}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                          {items.length} {items.length === 1 ? 'item' : 'items'}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-3 space-y-2">
                      {items.map(item => {
                        const isChecked = !!checkedState[item.id];
                        return (
                          <div
                            key={item.id}
                            className={cn(
                              "flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer border border-transparent",
                              isChecked
                                ? "opacity-60 bg-muted/40"
                                : "bg-muted/20 hover:bg-muted/40 hover:border-primary/10"
                            )}
                            onClick={() => toggleCheck(item.id)}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <Checkbox
                                checked={isChecked}
                                onCheckedChange={() => toggleCheck(item.id)}
                                onClick={e => e.stopPropagation()}
                              />
                              <div className="min-w-0">
                                <span className={cn(
                                  "text-sm font-sans font-medium text-foreground leading-snug block truncate",
                                  isChecked && "line-through text-muted-foreground"
                                )}>
                                  {item.displayName}
                                </span>
                                {item.quantity && (
                                  <span className="text-[11px] font-sans text-muted-foreground/80 font-normal">
                                    {item.quantity}
                                  </span>
                                )}
                              </div>
                            </div>

                            {item.inPantry && (
                              <span className="shrink-0 ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                                In pantry
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          )}
        </div>

        <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-4">
          <p className="text-[11px] text-muted-foreground font-medium">
            Items pre-checked are available in your pantry.
          </p>
          <Button
            onClick={handleCopyList}
            disabled={activeCategories.length === 0}
            className="bg-[#F4A21A] hover:bg-[#F4A21A]/90 text-white font-bold rounded-full px-6 h-11 text-xs uppercase tracking-wider shadow-md transition-all shrink-0"
          >
            {copied ? (
              <><Check className="mr-2 h-4 w-4" strokeWidth={1.75} /> Copied!</>
            ) : (
              <><Copy className="mr-2 h-4 w-4" strokeWidth={1.75} /> Copy List</>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
