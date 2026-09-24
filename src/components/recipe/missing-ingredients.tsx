"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { IconDownload } from "@tabler/icons-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { generateShoppingListPDF } from "@/lib/pdf-export";
import { useLanguage } from "@/context/language-context";

interface MissingIngredientsProps {
  missingIngredients: string[];
  userIngredients: string[];
  recipeName?: string;
}

export function MissingIngredients({
  missingIngredients,
  recipeName,
}: MissingIngredientsProps) {
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleDownloadList = () => {
    if (missingIngredients.length === 0) return;

    try {
      generateShoppingListPDF(recipeName || "Recipe", missingIngredients);
      toast({
        title: t('recipe.pdfDownloaded'),
        description: t('recipe.pdfSaved', { count: missingIngredients.length }),
      });
    } catch (err) {
      console.error("Failed to generate shopping list PDF", err);
      toast({
        title: t('recipe.pdfFailed'),
        description: t('recipe.pdfFailedDesc'),
        variant: "destructive",
      });
    }
  };

  if (missingIngredients.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-green-500/20 bg-green-500/5 p-8 text-center">
        <Check className="h-8 w-8 text-green-500 mx-auto mb-3" />
        <p className="font-bold text-green-700 dark:text-green-400">{t('recipe.allReady')}</p>
        <p className="text-xs text-muted-foreground mt-1">{t('recipe.allReadyDesc')}</p>
      </div>
    );
  }

  return (
    <div className="rounded-[2.5rem] border border-amber-500/20 bg-amber-500/5 p-6 h-full flex flex-col gap-5 overflow-hidden shadow-xs">
        <div className="space-y-4">
            <div className="flex items-center justify-between gap-2">
                <h3 className="font-headline text-xl font-medium text-stone-900 dark:text-stone-100">{t('recipe.missing')}</h3>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-500/15 text-[#F4A21A] border border-amber-500/25">
                    {missingIngredients.length === 1 ? t('recipe.missingCount', { count: 1 }) : t('recipe.missingCountPlural', { count: missingIngredients.length })}
                </span>
            </div>

            <div className="space-y-1.5">
                {missingIngredients.map((ing, index) => (
                <div key={index} className="flex items-center gap-2.5 p-3 px-3.5 rounded-2xl bg-background/60 border border-amber-500/10 group hover:border-amber-500/30 transition-all">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F4A21A] shrink-0" />
                    <span className="text-xs font-medium text-stone-800 dark:text-stone-200 truncate flex-1">{ing}</span>
                </div>
                ))}
            </div>
        </div>

        <div className="mt-auto pt-2">
            <motion.div whileTap={{ scale: 0.97 }}>
              <Button 
                  className="w-full font-semibold text-xs uppercase tracking-wider h-12 rounded-full shadow-md transition-all flex items-center justify-center gap-2 border-0 bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-amber-500/25 cursor-pointer"
                  onClick={handleDownloadList}
              >
                  <IconDownload className="h-4 w-4" strokeWidth={1.75} />
                  <span>{t('recipe.getList')}</span>
              </Button>
            </motion.div>
        </div>
    </div>
  );
}
