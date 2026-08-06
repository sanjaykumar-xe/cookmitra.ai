
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: string;
  targetId: string;
  title: string;
  content: string;
}

const TOUR_STEPS: Step[] = [
  {
    id: 'search',
    targetId: 'tour-search',
    title: 'Smart Search',
    content: 'Search any recipe, ingredient, or health condition to find exactly what you need.',
  },
  {
    id: 'chat',
    targetId: 'tour-chat',
    title: 'Chef Momo AI',
    content: 'Get real-time cooking guidance, substitutions, and tips from your personal AI assistant.',
  },
  {
    id: 'healing',
    targetId: 'tour-healing',
    title: 'Healing Foods',
    content: 'Discover foods that support specific health conditions, powered by nutritional wisdom and AI.',
  },
  {
    id: 'generate',
    targetId: 'tour-generate',
    title: 'AI Recipe Engine',
    content: 'Turn whatever is in your pantry into a complete, delicious recipe in seconds.',
  },
];

export function InteractiveTour({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    updateSpotlight();
    window.addEventListener('resize', updateSpotlight);
    return () => window.removeEventListener('resize', updateSpotlight);
  }, [currentStep]);

  const updateSpotlight = () => {
    const target = document.getElementById(TOUR_STEPS[currentStep].targetId);
    if (target) {
      setTargetRect(target.getBoundingClientRect());
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleFinish();
    }
  };

  const handleFinish = () => {
    localStorage.setItem('cookmitra_onboarding_seen', 'true');
    onComplete();
  };

  if (!mounted || !targetRect) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* SVG Overlay with Spotlight Hole */}
      <svg className="absolute inset-0 w-full h-full pointer-events-auto" onClick={handleFinish}>
        <defs>
          <mask id="spotlight-mask">
            <rect width="100%" height="100%" fill="white" />
            <rect
              x={targetRect.left - 8}
              y={targetRect.top - 8}
              width={targetRect.width + 16}
              height={targetRect.height + 16}
              rx="16"
              fill="black"
            />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="rgba(0,0,0,0.6)"
          mask="url(#spotlight-mask)"
          className="backdrop-blur-[2px]"
        />
      </svg>

      {/* Pulsing Highlight Border */}
      <motion.div
        layoutId="spotlight-border"
        className="absolute border-2 border-primary rounded-2xl shadow-[0_0_30px_rgba(244,162,26,0.4)] pointer-events-none"
        initial={false}
        animate={{
          top: targetRect.top - 8,
          left: targetRect.left - 8,
          width: targetRect.width + 16,
          height: targetRect.height + 16,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="absolute inset-0 animate-pulse bg-primary/5 rounded-2xl" />
      </motion.div>

      {/* Tooltip Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          className="fixed z-[110] pointer-events-auto w-[calc(100vw-2rem)] max-w-[320px]"
          style={{
            top: targetRect.bottom + 24 > window.innerHeight - 200 ? 'auto' : targetRect.bottom + 24,
            bottom: targetRect.bottom + 24 > window.innerHeight - 200 ? window.innerHeight - targetRect.top + 24 : 'auto',
            left: Math.min(Math.max(16, targetRect.left + (targetRect.width / 2) - 160), window.innerWidth - 336),
          }}
        >
          <Card className="shadow-2xl border-primary/20 bg-background/95 backdrop-blur-xl rounded-[2rem] overflow-hidden ring-1 ring-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Step {currentStep + 1} of {TOUR_STEPS.length}
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full opacity-50 hover:opacity-100" onClick={handleFinish}>
                  <X className="h-3 w-3" />
                </Button>
              </div>
              <div className="space-y-1">
                <h4 className="font-headline text-xl font-bold tracking-tight">{TOUR_STEPS[currentStep].title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium opacity-90">
                  {TOUR_STEPS[currentStep].content}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <Button variant="ghost" className="text-xs font-bold text-muted-foreground hover:text-primary p-0 h-auto" onClick={handleFinish}>
                  Skip Tour
                </Button>
                <Button size="sm" className="rounded-full h-9 px-5 btn-primary-gradient shadow-lg" onClick={handleNext}>
                  {currentStep === TOUR_STEPS.length - 1 ? 'Got it!' : 'Next'}
                  {currentStep < TOUR_STEPS.length - 1 && <ChevronRight className="ml-1 h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
