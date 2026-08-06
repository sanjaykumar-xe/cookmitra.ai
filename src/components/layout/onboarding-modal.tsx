'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, MessageSquare, ChefHat } from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    icon: <Sparkles className="h-16 w-16 text-primary" />,
    headline: "Generate Recipes From Your Pantry",
    description: "Type in what you have, snap a photo, or use your voice — CookMitra AI turns it into a complete recipe in seconds."
  },
  {
    icon: <Calendar className="h-16 w-16 text-primary" />,
    headline: "Plan Your Whole Week",
    description: "Get a personalized 7-day meal plan with nutrition info, estimated costs, and a shopping list — all generated for you."
  },
  {
    icon: <MessageSquare className="h-16 w-16 text-primary" />,
    headline: "Ask Chef Momo Anything",
    description: "Stuck mid-recipe? Chef Momo is your AI cooking assistant, ready to answer questions and help you troubleshoot in real time."
  },
  {
    icon: <ChefHat className="h-16 w-16 text-primary" />,
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-[2rem] border-primary/20 bg-background shadow-2xl">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="sr-only">CookMitra AI Tutorial</DialogTitle>
        </DialogHeader>
        <div className="p-8 md:p-12 flex flex-col items-center text-center space-y-8">
            <div className="bg-primary/10 p-8 rounded-[2.5rem] animate-in zoom-in-95 duration-500">
                {slides[currentSlide].icon}
            </div>
            
            <div className="space-y-4">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground">
                    {slides[currentSlide].headline}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mx-auto">
                    {slides[currentSlide].description}
                </p>
            </div>

            <div className="flex gap-2 pb-4">
                {slides.map((_, i) => (
                    <div 
                        key={i} 
                        className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            currentSlide === i ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                        )}
                    />
                ))}
            </div>

            <div className="flex w-full gap-4 items-center">
                <Button 
                    variant="ghost" 
                    className="flex-1 rounded-full h-12 text-muted-foreground font-bold hover:bg-transparent hover:text-primary transition-colors"
                    onClick={handleSkip}
                >
                    Skip
                </Button>
                <Button 
                    className="flex-[2] rounded-full h-12 btn-primary-gradient font-bold shadow-xl shadow-primary/20 active:scale-95"
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
