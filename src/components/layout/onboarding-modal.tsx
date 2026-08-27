'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles, CalendarDays, ChefHat, CookingPot } from 'lucide-react';
import { CookMitraLogo } from '@/components/icons/cook-mitra-logo';
import { cn } from '@/lib/utils';

const slides = [
  {
    icon: (
      <div className="relative">
        <ChefHat className="h-14 w-14 text-[#F4A21A]" />
        <Sparkles className="h-6 w-6 text-[#F4A21A] absolute -top-1 -right-2 animate-pulse" />
      </div>
    ),
    badgeBg: "bg-[#F4A21A]/15 border-[#F4A21A]/20 dark:bg-amber-500/25",
    headline: "Generate Recipes From Your Pantry",
    description: "Type in what you have, snap a photo, or use your voice — CookMitra AI turns it into a complete recipe in seconds."
  },
  {
    icon: <CalendarDays className="h-14 w-14 text-blue-600 dark:text-blue-400" />,
    badgeBg: "bg-blue-500/15 border-blue-500/20 dark:bg-blue-500/25",
    headline: "Plan Your Whole Week",
    description: "Get a personalized 7-day meal plan with nutrition info, estimated costs, and a shopping list — all generated for you."
  },
  {
    icon: (
      <div className="relative">
        <CookMitraLogo width={64} height={64} className="w-16 h-16 drop-shadow-md" />
        <Sparkles className="h-5 w-5 text-[#F4A21A] absolute -top-1 -right-1 animate-pulse" />
      </div>
    ),
    badgeBg: "bg-rose-500/15 border-rose-500/20 dark:bg-rose-500/25",
    headline: "Ask Chef Momo Anything",
    description: "Stuck mid-recipe? Chef Momo is your AI cooking assistant, ready to answer questions and help you troubleshoot in real time."
  },
  {
    icon: <CookingPot className="h-14 w-14 text-emerald-600 dark:text-emerald-400" />,
    badgeBg: "bg-emerald-500/15 border-emerald-500/20 dark:bg-emerald-500/25",
    headline: "Cook Along, Step by Step",
    description: "Cook Mode keeps you on track with built-in timers for every step — so nothing burns and nothing's forgotten."
  }
];

interface OnboardingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OnboardingModal({ open, onOpenChange }: OnboardingModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookmitra_onboarding_seen', 'true');
    }
    onOpenChange(false);
    // Reset for next manual trigger
    setTimeout(() => setCurrentSlide(0), 300);
  };

  const handleSkip = () => {
    handleComplete();
  };

  const activeSlide = slides[currentSlide];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-[2.5rem] border-primary/20 bg-background shadow-2xl">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="sr-only">CookMitra AI Tutorial</DialogTitle>
        </DialogHeader>
        <div className="p-8 md:p-10 flex flex-col items-center text-center space-y-6">
          {/* Feature Icon Badge with Feature-Specific Tint */}
          <div className={cn(
            "p-7 rounded-[2rem] border animate-in zoom-in-95 duration-300 shadow-sm flex items-center justify-center min-w-[100px] min-h-[100px]",
            activeSlide.badgeBg
          )}>
            {activeSlide.icon}
          </div>
          
          {/* Title & Description */}
          <div className="space-y-3 max-w-sm">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              {activeSlide.headline}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {activeSlide.description}
            </p>
          </div>

          {/* Step Indicator & Dots */}
          <div className="flex flex-col items-center space-y-2 pt-2">
            <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground/70">
              Step {currentSlide + 1} of {slides.length}
            </span>
            <div className="flex gap-2 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    currentSlide === i 
                      ? "w-8 h-2.5 bg-[#F4A21A] shadow-md shadow-amber-500/30" 
                      : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex w-full gap-3 items-center pt-2">
            <Button 
              variant="ghost" 
              className="flex-1 rounded-full h-12 text-muted-foreground font-bold hover:bg-transparent hover:text-primary transition-colors text-sm"
              onClick={handleSkip}
            >
              Skip
            </Button>
            <Button 
              className="flex-[2] rounded-full h-12 bg-[#F4A21A] hover:bg-[#E09015] text-white font-bold shadow-xl shadow-amber-500/20 active:scale-95 text-sm border-0"
              onClick={handleNext}
            >
              {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
