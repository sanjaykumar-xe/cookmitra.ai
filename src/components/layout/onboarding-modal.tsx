'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles, CalendarDays, ChefHat, CookingPot, HeartPulse } from 'lucide-react';
import { CookMitraLogo } from '@/components/icons/cook-mitra-logo';
import Carousel, { CarouselItemData } from '@/components/ui/carousel';
import { useLanguage } from '@/context/language-context';

const tourItems: CarouselItemData[] = [
  {
    id: 1,
    title: "AI Recipe Engine",
    description: "Enter ingredients you have in your kitchen, snap a photo, or use voice — CookMitra crafts complete authentic Indian recipes in seconds.",
    icon: <ChefHat className="h-5 w-5 text-[#F4A21A]" />
  },
  {
    id: 2,
    title: "Weekly Meal Planning",
    description: "Personalized 7-day meal plans with smart macros, estimated grocery costs, and automated shopping list export.",
    icon: <CalendarDays className="h-5 w-5 text-[#F4A21A]" />
  },
  {
    id: 3,
    title: "Chef Momo AI Assistant",
    description: "Your interactive culinary companion — ask about spice substitutions, techniques, and troubleshooting mid-cook hands-free.",
    icon: <CookMitraLogo width={22} height={22} />
  },
  {
    id: 4,
    title: "Guided Cook Mode",
    description: "Hands-free step-by-step guidance with built-in voice timers so nothing ever burns and no step is forgotten.",
    icon: <CookingPot className="h-5 w-5 text-[#F4A21A]" />
  },
  {
    id: 5,
    title: "Healing Foods",
    description: "Food as medicine tailored to specific wellness conditions, combining authentic traditional wisdom with nutritional science.",
    icon: <HeartPulse className="h-5 w-5 text-[#F4A21A]" />
  }
];

interface OnboardingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OnboardingModal({ open, onOpenChange }: OnboardingModalProps) {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < tourItems.length - 1) {
      setActiveStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookmitra_onboarding_seen', 'true');
    }
    onOpenChange(false);
    setTimeout(() => setActiveStep(0), 300);
  };

  const handleSkip = () => {
    handleComplete();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden rounded-[2.5rem] border-primary/20 bg-background/95 backdrop-blur-xl shadow-2xl">
        <DialogHeader className="p-6 pb-2 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-[#F4A21A] border border-amber-500/20 w-fit mx-auto mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t('tour.badge')}</span>
          </div>
          <DialogTitle className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {t('tour.welcome')}
          </DialogTitle>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
            {t('tour.subtitle')}
          </p>
        </DialogHeader>

        <div className="px-6 py-2 flex flex-col items-center justify-center">
          <Carousel
            items={tourItems}
            baseWidth={380}
            autoplay={true}
            autoplayDelay={3500}
            pauseOnHover={true}
            loop={true}
            currentIndex={activeStep}
            onIndexChange={setActiveStep}
            className="w-full"
          />
        </div>

        {/* Navigation Controls */}
        <div className="p-6 pt-2 flex w-full gap-3 items-center">
          <Button 
            variant="ghost" 
            className="flex-1 rounded-full h-12 text-muted-foreground font-bold hover:bg-transparent hover:text-primary transition-colors text-sm cursor-pointer"
            onClick={handleSkip}
          >
            {t('tour.skip')}
          </Button>
          <Button 
            className="flex-[2] rounded-full h-12 bg-[#F4A21A] hover:bg-[#E09015] text-white font-bold shadow-xl shadow-amber-500/20 active:scale-95 text-sm border-0 cursor-pointer"
            onClick={handleNext}
          >
            {activeStep === tourItems.length - 1 ? t('tour.getStarted') : t('tour.next')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
