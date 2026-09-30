"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart, ExternalLink, Copy } from "lucide-react";
import { IconDownload } from "@tabler/icons-react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { generateShoppingListPDF } from "@/lib/pdf-export";
import { useLanguage } from "@/context/language-context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface GroceryPlatform {
  id: string;
  name: string;
  btnBg: string;
  url: (q: string) => string;
}

export const GROCERY_PLATFORMS: GroceryPlatform[] = [
  {
    id: "zepto",
    name: "Zepto",
    btnBg: "bg-purple-600 hover:bg-purple-700 text-white",
    url: (q: string) => `https://www.zeptonow.com/search?query=${encodeURIComponent(q)}`,
  },
  {
    id: "blinkit",
    name: "Blinkit",
    btnBg: "bg-yellow-500 hover:bg-yellow-600 text-black",
    url: (q: string) => `https://blinkit.com/s/?q=${encodeURIComponent(q)}`,
  },
  {
    id: "swiggy",
    name: "Swiggy Instamart",
    btnBg: "bg-orange-600 hover:bg-orange-700 text-white",
    url: (q: string) => `https://www.swiggy.com/instamart/search?custom_back=true&query=${encodeURIComponent(q)}`,
  },
  {
    id: "amazon",
    name: "Amazon Fresh",
    btnBg: "bg-sky-600 hover:bg-sky-700 text-white",
    url: (q: string) => `https://www.amazon.in/s?k=${encodeURIComponent(q)}&i=nowstore`,
  },
  {
    id: "flipkart",
    name: "Flipkart Minutes",
    btnBg: "bg-blue-600 hover:bg-blue-700 text-white",
    url: (q: string) => `https://www.flipkart.com/search?q=${encodeURIComponent(q)}`,
  },
  {
    id: "google",
    name: "Google Shopping",
    btnBg: "bg-stone-700 hover:bg-stone-800 text-white",
    url: (q: string) => `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(q)}`,
  },
];

export function cleanIngredientForSearch(name: string): string {
  return name
    .replace(/\s*\([^)]*\)/g, "")
    .replace(/^[\d\s\/\-.]+(g|kg|ml|l|tbsp|tsp|cup|cups|pieces|pcs|pinch|cloves|inch)?\s+/i, "")
    .trim();
}

interface MissingIngredientsProps {
  missingIngredients: string[];
  userIngredients?: string[];
  recipeName?: string;
}

export function MissingIngredients({
  missingIngredients,
  recipeName,
}: MissingIngredientsProps) {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [selectedPlatformId, setSelectedPlatformId] = useState("zepto");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("cookmitra_preferred_grocery_platform");
      if (saved && GROCERY_PLATFORMS.some((p) => p.id === saved)) {
        setSelectedPlatformId(saved);
      }
    }
  }, []);

  const handlePlatformChange = (val: string) => {
    setSelectedPlatformId(val);
    if (typeof window !== "undefined") {
      localStorage.setItem("cookmitra_preferred_grocery_platform", val);
    }
  };

  const selectedPlatform =
    GROCERY_PLATFORMS.find((p) => p.id === selectedPlatformId) || GROCERY_PLATFORMS[0];

  const handleShopSingle = (ing: string) => {
    const cleaned = cleanIngredientForSearch(ing);
    const url = selectedPlatform.url(cleaned);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleShopAll = async () => {
    if (missingIngredients.length === 0) return;

    const listText = `${recipeName ? `${recipeName} - ` : ""}Missing Ingredients:\n${missingIngredients
      .map((ing) => `• ${ing}`)
      .join("\n")}`;

    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(listText);
      }
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);

      toast({
        title: `${selectedPlatform.name} Search Opened`,
        description: t("recipe.copiedToClipboard", { platform: selectedPlatform.name }),
      });
    } catch (err) {
      console.error("Clipboard copy failed", err);
    }

    const firstCleaned = cleanIngredientForSearch(missingIngredients[0]);
    const url = selectedPlatform.url(firstCleaned);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownloadList = () => {
    if (missingIngredients.length === 0) return;

    try {
      generateShoppingListPDF(recipeName || "Recipe", missingIngredients);
      toast({
        title: t("recipe.pdfDownloaded"),
        description: t("recipe.pdfSaved", { count: missingIngredients.length }),
      });
    } catch (err) {
      console.error("Failed to generate shopping list PDF", err);
      toast({
        title: t("recipe.pdfFailed"),
        description: t("recipe.pdfFailedDesc"),
        variant: "destructive",
      });
    }
  };

  if (missingIngredients.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-green-500/20 bg-green-500/5 p-8 text-center">
        <Check className="h-8 w-8 text-green-500 mx-auto mb-3" />
        <p className="font-bold text-green-700 dark:text-green-400">{t("recipe.allReady")}</p>
        <p className="text-xs text-muted-foreground mt-1">{t("recipe.allReadyDesc")}</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-amber-500/25 bg-amber-500/5 dark:bg-amber-950/10 p-6 h-full flex flex-col gap-4 overflow-hidden shadow-xs">
      {/* Header & Platform Selector */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <h3 className="font-headline text-xl font-bold text-stone-900 dark:text-stone-100">
              {t("recipe.missing")}
            </h3>
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-[#F4A21A] border border-amber-500/25">
              {missingIngredients.length === 1
                ? t("recipe.missingCount", { count: 1 })
                : t("recipe.missingCountPlural", { count: missingIngredients.length })}
            </span>
          </div>

          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground whitespace-nowrap">
              {t("recipe.shopOn")}
            </span>
            <Select value={selectedPlatformId} onValueChange={handlePlatformChange}>
              <SelectTrigger className="h-8 min-w-[120px] text-xs font-semibold bg-background border-amber-500/30 rounded-full focus:ring-1 focus:ring-amber-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="rounded-2xl border-stone-200 dark:border-stone-800">
                {GROCERY_PLATFORMS.map((platform) => (
                  <SelectItem key={platform.id} value={platform.id} className="text-xs font-medium cursor-pointer">
                    <span className="font-bold">{platform.name}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Missing items list with 1-click buy action */}
        <div className="space-y-1.5 max-h-[260px] overflow-y-auto pr-1">
          {missingIngredients.map((ing, index) => {
            const cleanName = cleanIngredientForSearch(ing);
            return (
              <div
                key={index}
                className="flex items-center justify-between gap-2.5 p-2.5 px-3 rounded-2xl bg-background/80 border border-amber-500/15 hover:border-amber-500/40 transition-all group"
              >
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F4A21A] shrink-0" />
                  <span className="text-xs font-semibold text-stone-800 dark:text-stone-200 truncate">
                    {ing}
                  </span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShopSingle(ing)}
                  className="h-7 px-2.5 rounded-full text-[11px] font-bold border-amber-500/30 hover:bg-amber-500/15 text-stone-700 dark:text-stone-300 hover:text-[#F4A21A] transition-all shrink-0 flex items-center gap-1 cursor-pointer"
                  title={`Search "${cleanName}" on ${selectedPlatform.name}`}
                >
                  <span>{selectedPlatform.name}</span>
                  <ExternalLink className="h-3 w-3 opacity-70 group-hover:opacity-100" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Information Helper */}
      <div className="text-[11px] text-muted-foreground bg-amber-500/10 rounded-2xl p-2.5 px-3 flex items-start gap-2 border border-amber-500/15">
        <ShoppingCart className="h-3.5 w-3.5 text-[#F4A21A] shrink-0 mt-0.5" />
        <p className="leading-tight">
          {t("recipe.fastDeliveryNotice", { platform: selectedPlatform.name })}
        </p>
      </div>

      {/* Action Buttons: 1-Click Platform Buy + PDF Export */}
      <div className="mt-auto pt-1 space-y-2">
        <motion.div whileTap={{ scale: 0.98 }}>
          <Button
            className={cn(
              "w-full font-bold text-xs uppercase tracking-wider h-11 rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border-0",
              selectedPlatform.id === "zepto"
                ? "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/25"
                : selectedPlatform.btnBg
            )}
            onClick={handleShopAll}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isCopied ? (
                <motion.span
                  key="copied"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex items-center gap-2"
                >
                  <Check className="h-4 w-4" />
                  <span>List Copied! Opening {selectedPlatform.name}...</span>
                </motion.span>
              ) : (
                <motion.span
                  key="shop"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex items-center gap-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>{t("recipe.shopAll", { platform: selectedPlatform.name })}</span>
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>

        <motion.div whileTap={{ scale: 0.98 }}>
          <Button
            variant="outline"
            className="w-full font-semibold text-xs h-10 rounded-full border-amber-500/30 hover:bg-amber-500/10 text-stone-700 dark:text-stone-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
            onClick={handleDownloadList}
          >
            <IconDownload className="h-4 w-4 text-[#F4A21A]" strokeWidth={1.75} />
            <span>{t("recipe.downloadPdf")}</span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
