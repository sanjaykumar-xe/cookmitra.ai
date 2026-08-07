'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { CookMitraLogo } from "@/components/icons/cook-mitra-logo";
import {
  Search as SearchIcon,
  X,
  ChefHat,
  ShoppingBasket,
  HeartPulse,
  ChevronRight
} from "lucide-react";
import { ThemeToggle } from "../theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/language-context";
import { recipes } from '@/lib/recipes';
import { ingredientCatalog } from '@/lib/ingredients-catalog';
import { CURATED_CONDITIONS } from '@/lib/healing-foods/conditions';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { HeaderAuthActions } from './header-auth-actions';
import { useUser } from '@/lib/firebase';

/**
 * Header component.
 * Focused on brand identity, global search, and utility controls.
 */
export function Header() {
  const { user } = useUser();
  const { t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  
  const authRoutes = ['/login', '/signup', '/forgot-password', '/verify-email'];
  const isLandingPage = pathname === '/';
  const isAuthPage = pathname ? authRoutes.includes(pathname) : false;
  
  const homeHref = user ? "/home" : "/";

  // Search States
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<{
    recipes: typeof recipes,
    ingredients: typeof ingredientCatalog,
    conditions: typeof CURATED_CONDITIONS
  } | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Search Logic
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults(null);
      setIsOpen(false);
      return;
    }

    const q = query.toLowerCase().trim();

    const matchedRecipes = recipes.filter(r => 
      r.name.toLowerCase().includes(q) || 
      r.description.toLowerCase().includes(q)
    ).slice(0, 5);

    const matchedIngredients = ingredientCatalog.filter(i => 
      i.name.toLowerCase().includes(q)
    ).slice(0, 5);

    const matchedConditions = CURATED_CONDITIONS.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.summary.toLowerCase().includes(q)
    ).slice(0, 5);

    setResults({
      recipes: matchedRecipes,
      ingredients: matchedIngredients,
      conditions: matchedConditions
    });
    setIsOpen(true);
  }, [query]);

  // Click Outside Handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleResultClick = useCallback((href: string) => {
    setIsOpen(false);
    setQuery("");
    router.push(href);
  }, [router]);

  const hasResults = results && (results.recipes.length > 0 || results.ingredients.length > 0 || results.conditions.length > 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        
        {/* Left Side: Brand Identity */}
        <div className="flex items-center">
            <Link href={homeHref} className="flex items-center space-x-3 group shrink-0">
                <CookMitraLogo width={22} height={22} />
                <span className="font-headline text-2xl font-bold tracking-tight hidden xs:inline-block">
                    CookMitra<span className="text-xl font-normal text-muted-foreground ml-1.5">AI</span>
                </span>
            </Link>
        </div>

        {/* Center: Global Search Bar */}
        {!isLandingPage && !isAuthPage && (
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative" ref={searchRef}>
              <div className="relative w-full">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground transition-opacity" />
                <Input 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => query.length >= 2 && setIsOpen(true)}
                    placeholder="Search recipes, ingredients, conditions..." 
                    className="pl-11 pr-10 h-10 bg-background border-border/80 shadow-sm focus-visible:ring-primary/20 rounded-full text-sm placeholder:text-muted-foreground/60 transition-all hover:bg-muted/10"
                />
                {query && (
                  <button 
                    onClick={() => setQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>

              {/* Results Dropdown */}
              {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-primary/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-[100]">
                  <ScrollArea className="max-h-[70vh]">
                    <div className="p-2 space-y-4">
                      {!hasResults ? (
                        <div className="py-8 text-center space-y-2">
                           <div className="bg-muted w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                              <SearchIcon className="h-4 w-4 text-muted-foreground opacity-40" />
                           </div>
                           <p className="text-sm font-medium text-muted-foreground">No results found for &ldquo;{query}&rdquo;</p>
                        </div>
                      ) : (
                        <>
                          {/* Recipes Group */}
                          {results.recipes.length > 0 && (
                            <section>
                              <h4 className="px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">Recipes</h4>
                              <div className="space-y-1">
                                {results.recipes.map(recipe => (
                                  <button 
                                    key={recipe.id}
                                    onClick={() => handleResultClick(`/recipes/${recipe.id}`)}
                                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-colors flex items-center gap-3 group"
                                  >
                                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                      <ChefHat className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-bold truncate group-hover:text-primary transition-colors">{recipe.name}</p>
                                      <p className="text-[10px] text-muted-foreground truncate">{recipe.description}</p>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-all" />
                                  </button>
                                ))}
                              </div>
                            </section>
                          )}

                          {/* Ingredients Group */}
                          {results.ingredients.length > 0 && (
                            <section>
                              <h4 className="px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">Ingredients</h4>
                              <div className="space-y-1">
                                {results.ingredients.map(ing => (
                                  <button 
                                    key={ing.id}
                                    onClick={() => handleResultClick(`/ingredients`)}
                                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-colors flex items-center gap-3 group"
                                  >
                                    <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                      <ShoppingBasket className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-bold truncate group-hover:text-primary transition-colors">{ing.name}</p>
                                      <p className="text-[10px] text-muted-foreground">{ing.category} &bull; ₹{ing.price} per {ing.unit}</p>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-all" />
                                  </button>
                                ))}
                              </div>
                            </section>
                          )}

                          {/* Conditions Group */}
                          {results.conditions.length > 0 && (
                            <section>
                              <h4 className="px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">Health Conditions</h4>
                              <div className="space-y-1">
                                {results.conditions.map(cond => (
                                  <button 
                                    key={cond.id}
                                    onClick={() => handleResultClick(`/healing-foods`)}
                                    className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-primary/5 transition-colors flex items-center gap-3 group"
                                  >
                                    <div className="h-8 w-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                      <HeartPulse className="h-4 w-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-bold truncate group-hover:text-primary transition-colors">{cond.name}</p>
                                      <p className="text-[10px] text-muted-foreground truncate">{cond.summary}</p>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-all" />
                                  </button>
                                ))}
                              </div>
                            </section>
                          )}
                        </>
                      )}
                    </div>
                  </ScrollArea>
                  {hasResults && (
                    <div className="p-3 bg-muted/30 border-t flex justify-center">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60">Press ESC to close search</p>
                    </div>
                  )}
                </div>
              )}
          </div>
        )}

        {/* Right Side: Utility Controls */}
        <div className="flex items-center justify-end gap-2 md:gap-4">
          <div className="flex items-center gap-1 md:gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          
          <div className="flex items-center justify-end min-w-[40px] md:min-w-[48px]">
            <HeaderAuthActions isLandingPage={isLandingPage} />
          </div>
        </div>
      </div>
    </header>
  );
}
