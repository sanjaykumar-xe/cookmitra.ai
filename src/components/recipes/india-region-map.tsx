'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
// @ts-ignore
import india from '@svg-maps/india';
import { cn } from '@/lib/utils';
import { recipes } from '@/lib/recipes';
import { useRouter } from 'next/navigation';
import { MapPin, ArrowRight, ChefHat } from 'lucide-react';
import { getRecipeImageUrl } from '@/lib/recipe-image-helper';

export type StateInfo = {
  name: string;
  slug: string;
  tag: string;
};

export type StateRecipeData = {
  count: number;
  topRecipe: {
    id: string;
    name: string;
    imageUrl?: string;
  } | null;
};

export const STATE_CONFIGS: Record<string, StateInfo> = {
  "Tamil Nadu": { name: "Tamil Nadu", slug: "tamil-nadu", tag: "Tamil Nadu" },
  "Kerala": { name: "Kerala", slug: "kerala", tag: "Kerala" },
  "Karnataka": { name: "Karnataka", slug: "karnataka", tag: "Karnataka" },
  "Andhra Pradesh": { name: "Andhra Pradesh", slug: "andhra-pradesh", tag: "Andhra Pradesh" },
  "Telangana": { name: "Telangana", slug: "telangana", tag: "Telangana" },
  "Punjab": { name: "Punjab", slug: "punjab", tag: "Punjabi" },
  "West Bengal": { name: "West Bengal", slug: "west-bengal", tag: "West Bengal" },
  "Gujarat": { name: "Gujarat", slug: "gujarat", tag: "Gujarat" },
  "Maharashtra": { name: "Maharashtra", slug: "maharashtra", tag: "Maharashtra" },
  "Rajasthan": { name: "Rajasthan", slug: "rajasthan", tag: "Rajasthani" },
  "Goa": { name: "Goa", slug: "goa", tag: "Goan" },
  "Jammu and Kashmir": { name: "Jammu & Kashmir", slug: "jammu-and-kashmir", tag: "Jammu and Kashmir" },
  "Delhi": { name: "Delhi", slug: "delhi", tag: "Delhi" },
  "Uttar Pradesh": { name: "Uttar Pradesh", slug: "uttar-pradesh", tag: "Uttar Pradesh" },
  "Haryana": { name: "Haryana", slug: "haryana", tag: "Haryana" },
  "Himachal Pradesh": { name: "Himachal Pradesh", slug: "himachal-pradesh", tag: "Himachal Pradesh" },
  "Uttarakhand": { name: "Uttarakhand", slug: "uttarakhand", tag: "Uttarakhand" },
  "Madhya Pradesh": { name: "Madhya Pradesh", slug: "madhya-pradesh", tag: "Madhya Pradesh" },
  "Bihar": { name: "Bihar", slug: "bihar", tag: "Bihar" },
  "Chhattisgarh": { name: "Chhattisgarh", slug: "chhattisgarh", tag: "Chhattisgarh" },
  "Odisha": { name: "Odisha", slug: "odisha", tag: "Odisha" },
  "Jharkhand": { name: "Jharkhand", slug: "jharkhand", tag: "Jharkhand" },
  "Assam": { name: "Assam", slug: "assam", tag: "Assam" },
  "Arunachal Pradesh": { name: "Arunachal Pradesh", slug: "arunachal-pradesh", tag: "Arunachal Pradesh" },
  "Manipur": { name: "Manipur", slug: "manipur", tag: "Manipur" },
  "Meghalaya": { name: "Meghalaya", slug: "meghalaya", tag: "Meghalaya" },
  "Mizoram": { name: "Mizoram", slug: "mizoram", tag: "Mizoram" },
  "Nagaland": { name: "Nagaland", slug: "nagaland", tag: "Nagaland" },
  "Sikkim": { name: "Sikkim", slug: "sikkim", tag: "Sikkim" },
  "Tripura": { name: "Tripura", slug: "tripura", tag: "Tripura" },
  "Puducherry": { name: "Puducherry", slug: "puducherry", tag: "Puducherry" },
  "Chandigarh": { name: "Chandigarh", slug: "chandigarh", tag: "Chandigarh" },
  "Ladakh": { name: "Ladakh", slug: "ladakh", tag: "Ladakh" }
};

// Helper lookup from slug -> StateInfo
export const SLUG_TO_STATE_MAP: Record<string, StateInfo> = Object.values(STATE_CONFIGS).reduce((acc, item) => {
  acc[item.slug] = item;
  return acc;
}, {} as Record<string, StateInfo>);

interface IndiaRegionMapProps {
  onSelectStateSlug?: (slug: string) => void;
  selectedStateSlug?: string | null;
}

export function IndiaRegionMap({ onSelectStateSlug, selectedStateSlug }: IndiaRegionMapProps) {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [isTouch, setIsTouch] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  // Check window size & touch input
  useEffect(() => {
    const checkViewport = () => {
      setIsMobileViewport(window.innerWidth < 400);
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Precompute recipe counts AND top recipe by popularity per state slug ONCE on mount
  const stateDataMap = useMemo(() => {
    const map: Record<string, StateRecipeData> = {};
    Object.values(STATE_CONFIGS).forEach(cfg => {
      const matchingRecipes = recipes.filter(r =>
        r.tags?.some(t =>
          t.toLowerCase() === cfg.tag.toLowerCase() ||
          t.toLowerCase() === cfg.name.toLowerCase() ||
          t.toLowerCase() === cfg.slug.toLowerCase()
        )
      );

      const count = matchingRecipes.length;
      let topRecipe: StateRecipeData['topRecipe'] = null;

      if (count > 0) {
        const sorted = [...matchingRecipes].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
        const top = sorted[0];
        if (top) {
          topRecipe = {
            id: top.id,
            name: top.name,
            imageUrl: getRecipeImageUrl(top)
          };
        }
      }

      map[cfg.slug] = { count, topRecipe };
    });
    return map;
  }, []);

  const handleStateNavigate = (slug: string) => {
    if (onSelectStateSlug) {
      onSelectStateSlug(slug);
    } else {
      router.push(`/recipes?state=${encodeURIComponent(slug)}`);
    }
  };

  const handlePathHover = (locationName: string, event: React.MouseEvent) => {
    if (isTouch || isMobileViewport) return;
    const cfg = STATE_CONFIGS[locationName] || { name: locationName, slug: locationName.toLowerCase().replace(/\s+/g, '-'), tag: locationName };
    setActiveSlug(cfg.slug);

    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setTooltipPos({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top - 12
      });
    }
  };

  const handlePathMouseLeave = () => {
    if (isTouch || isMobileViewport) return;
    setActiveSlug(null);
    setTooltipPos(null);
  };

  const handlePathClick = (locationName: string) => {
    const cfg = STATE_CONFIGS[locationName] || { name: locationName, slug: locationName.toLowerCase().replace(/\s+/g, '-'), tag: locationName };
    
    if (isTouch) {
      if (activeSlug === cfg.slug) {
        handleStateNavigate(cfg.slug);
      } else {
        setActiveSlug(cfg.slug);
      }
    } else {
      handleStateNavigate(cfg.slug);
    }
  };

  // Sort states alphabetically for mobile scrollable pill bar
  const statePills = useMemo(() => {
    return Object.values(STATE_CONFIGS).sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  // Small screen (<400px) fallback: Horizontally scrollable state pills
  if (isMobileViewport) {
    return (
      <div className="w-full py-3 space-y-3">
        <p className="text-xs text-muted-foreground text-center font-sans font-medium">
          Select a state to explore regional dishes:
        </p>
        <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 px-2 no-scrollbar scroll-smooth">
          {statePills.map(cfg => {
            const data = stateDataMap[cfg.slug] || { count: 0, topRecipe: null };
            const isSelected = selectedStateSlug === cfg.slug;
            return (
              <button
                key={cfg.slug}
                onClick={() => handleStateNavigate(cfg.slug)}
                className={cn(
                  "shrink-0 px-4 py-2 rounded-full text-xs font-sans font-semibold border transition-all flex items-center gap-1.5 shadow-xs",
                  isSelected
                    ? "bg-[#F4A21A] text-white border-[#F4A21A] shadow-md shadow-amber-500/20"
                    : "border-[#F4A21A]/40 text-[#F4A21A] hover:bg-[#F4A21A]/10 bg-card/60"
                )}
              >
                <MapPin className="h-3.5 w-3.5" />
                <span>{cfg.name}</span>
                <span className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded-full font-bold",
                  isSelected ? "bg-white/20 text-white" : "bg-[#F4A21A]/15 text-[#F4A21A]"
                )}>
                  {data.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop & Tablet (≥400px) Interactive SVG Map
  return (
    <div ref={wrapperRef} className="india-map-wrapper w-full max-w-xl mx-auto relative select-none">
      <svg
        viewBox={india.viewBox}
        className="india-svg-map w-full h-auto drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={india.label}
      >
        {india.locations.map((location: any) => {
          const cfg = STATE_CONFIGS[location.name] || { name: location.name, slug: location.name.toLowerCase().replace(/\s+/g, '-'), tag: location.name };
          const isHovered = activeSlug === cfg.slug;
          const isSelected = selectedStateSlug === cfg.slug;

          return (
            <path
              key={location.id}
              id={location.id}
              d={location.path}
              className={cn(
                "transition-all duration-200 cursor-pointer stroke-stone-300 dark:stroke-stone-700 stroke-[0.75]",
                isSelected
                  ? "fill-[#F4A21A] stroke-amber-600 stroke-[1.5]"
                  : isHovered
                  ? "fill-[#F4A21A]/80 stroke-amber-500 stroke-[1.25]"
                  : "fill-stone-100 dark:fill-stone-800/80 hover:fill-[#F4A21A]/80"
              )}
              onMouseEnter={(e) => handlePathHover(location.name, e)}
              onMouseMove={(e) => handlePathHover(location.name, e)}
              onMouseLeave={handlePathMouseLeave}
              onClick={() => handlePathClick(location.name)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleStateNavigate(cfg.slug);
                }
              }}
            >
              <title>{location.name}</title>
            </path>
          );
        })}
      </svg>

      {/* Floating Tooltip Card */}
      {activeSlug && tooltipPos && (
        <div
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
            transform: 'translate(-50%, -100%)'
          }}
          className={cn(
            "absolute z-30 font-sans text-white p-3 rounded-2xl shadow-xl border border-amber-500/40 backdrop-blur-md min-w-[140px] text-center animate-in fade-in zoom-in-95 duration-150 bg-stone-900/95",
            isTouch ? "pointer-events-auto" : "pointer-events-none"
          )}
        >
          <div className="space-y-1">
            <p className="font-sans font-semibold text-sm leading-tight text-amber-400 flex items-center justify-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-[#F4A21A]" />
              {SLUG_TO_STATE_MAP[activeSlug]?.name || activeSlug}
            </p>
            <p className="font-sans text-xs text-stone-300 font-medium">
              {stateDataMap[activeSlug]?.count || 0} {(stateDataMap[activeSlug]?.count || 0) === 1 ? 'recipe' : 'recipes'}
            </p>
          </div>

          {/* Touch device explicit navigate button */}
          {isTouch && (
            <button
              onClick={() => handleStateNavigate(activeSlug)}
              className="mt-2.5 w-full bg-[#F4A21A] hover:bg-[#E09015] text-white text-[11px] font-bold py-1.5 px-3 rounded-xl flex items-center justify-center gap-1 transition-colors shadow-sm pointer-events-auto"
            >
              <span>View Recipes</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}