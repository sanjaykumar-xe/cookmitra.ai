'use client';

import { motion } from 'framer-motion';
import { IconSoup } from '@tabler/icons-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import type { Recipe } from '@/lib/recipes';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { 
    Clock, 
    Users, 
    Check, 
    ArrowLeft, 
    ArrowRight, 
    CheckCircle2, 
    AlarmClock, 
    Play, 
    Pause, 
    X, 
    Keyboard, 
    Volume2,
    VolumeX,
    Mic,
    MicOff,
    AlertCircle,
    Bookmark,
    RefreshCw,
    UtensilsCrossed,
    CookingPot
} from 'lucide-react';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/context/language-context';
import { StarRating } from '@/components/ui/star-rating';
import { useUser, useFirestore, useDoc, useMemoFirebase } from '@/lib/firebase';
import { doc } from 'firebase/firestore';
import { saveRecipe, submitReview } from '@/lib/firebase/firestore/recipes';
import { useToast } from '@/hooks/use-toast';

function HotSteamingMealIcon() {
  return (
    <div className="relative flex flex-col items-center justify-center mb-3">
      {/* Animated Rising Steam Lines */}
      <div className="relative w-16 h-6 mb-1 overflow-visible">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4, scaleY: 0.6 }}
            animate={{
              opacity: [0, 0.9, 0],
              y: [4, -12],
              scaleY: [0.6, 1.2, 0.8],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut",
            }}
            className="absolute w-1.5 h-5 rounded-full bg-gradient-to-t from-[#F4A21A] via-amber-400/50 to-transparent blur-[0.5px]"
            style={{ left: `${12 + i * 16}px` }}
          />
        ))}
      </div>

      {/* Styled Glassmorphic Cooking Pot Badge */}
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="bg-amber-500/10 h-20 w-20 rounded-[2rem] border border-amber-500/20 flex items-center justify-center shadow-md shadow-amber-500/10"
      >
        <CookingPot className="h-10 w-10 text-[#F4A21A]" />
      </motion.div>
    </div>
  );
}

// --- Utilities for Timers ---
const TIMER_DONE_SOUND_URL = 'https://cdn.freesound.org/previews/215/215658_4032334-lq.mp3';

function parseTimeMention(text: string): { seconds: number; label: string; isEstimate: boolean } | null {
  if (!text) return null;
  const whistleMatch = text.match(/(\d+)(?:-(\d+))?\s*whistles?/i);
  if (whistleMatch) {
    const count = parseInt(whistleMatch[2] || whistleMatch[1], 10);
    return { seconds: count * 4 * 60, label: `${count} whistles (est.)`, isEstimate: true };
  }
  const durationMatch = text.match(/(\d+)(?:-(\d+))?\s*(minute|min|hour|hr|second|sec)s?/i);
  if (durationMatch) {
    const unit = durationMatch[3].toLowerCase();
    const value = parseInt(durationMatch[2] || durationMatch[1], 10);
    let seconds = value;
    if (unit.startsWith('min')) seconds *= 60;
    if (unit.startsWith('h')) seconds *= 3600;
    return { seconds, label: `${value} ${unit}${value > 1 ? 's' : ''}`, isEstimate: false };
  }
  return null;
}

function formatDuration(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const parts = [];
  if (h > 0) parts.push(h.toString().padStart(2, '0'));
  parts.push(m.toString().padStart(2, '0'));
  parts.push(s.toString().padStart(2, '0'));
  return parts.join(':');
}

interface TimerState {
  remaining: number;
  duration: number;
  isActive: boolean;
  label: string;
  isComplete: boolean;
  stepIndex: number;
}

export function CookMode({ recipe, onExit }: { recipe: Recipe; onExit?: () => void }) {
    const { language } = useLanguage();
    const { user } = useUser();
    const firestore = useFirestore();
    const { toast } = useToast();
    
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
    const [mounted, setMounted] = useState(false);
    
    // Rating & Save States for completion screen
    const [userRating, setUserRating] = useState(0);
    const [isRated, setIsRated] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    // Refs for stable access in effects and callbacks
    const currentStepRef = useRef(currentStep);
    useEffect(() => {
        currentStepRef.current = currentStep;
    }, [currentStep]);

    // Voice & Hands-Free States
    const [isVoiceOn, setIsVoiceOn] = useState(true);
    const [isSpeakingStep, setIsSpeakingStep] = useState(false);
    const [isHandsFreeOn, setIsHandsFreeOn] = useState(false);
    const [hfError, setHfError] = useState<string | null>(null);
    
    // Core tracking refs to prevent stale closures
    const isHandsFreeOnRef = useRef(isHandsFreeOn);
    useEffect(() => {
        isHandsFreeOnRef.current = isHandsFreeOn;
    }, [isHandsFreeOn]);

    const lastNarratedStepRef = useRef<number>(-1);
    const isAudioUnlockedRef = useRef(false);
    const recognitionRef = useRef<any>(null);
    const isListeningRef = useRef(false);
    const isNarratingRef = useRef(false);
    const lastCommandTimeRef = useRef<number>(0);

    const steps = recipe?.steps || [];
    const stepCount = steps.length;
    
    const [timers, setTimers] = useState<Record<number, TimerState>>({});
    const timersRef = useRef<Record<number, TimerState>>({});
    timersRef.current = timers;

    // Check if recipe is already saved
    const savedRecipeRef = useMemoFirebase(() => (user && firestore && recipe?.id) ? doc(firestore, `users/${user.uid}/recipes`, recipe.id) : null, [user, firestore, recipe?.id]);
    const { data: savedData } = useDoc(savedRecipeRef);
    const isSaved = !!savedData;

    const startTimer = useCallback((stepIdx: number, seconds: number, label: string) => {
        setTimers(prev => ({ ...prev, [stepIdx]: { duration: seconds, remaining: seconds, isActive: true, label, isComplete: false, stepIndex: stepIdx } }));
    }, []);

    const handleGoToPrevious = useCallback(() => {
        setCurrentStep(prev => Math.max(prev - 1, 0));
    }, []);

    const handleMarkAndGoToNext = useCallback(() => {
        setCompletedSteps(prev => {
            const next = new Set(prev);
            next.add(currentStepRef.current);
            return next;
        });
        setCurrentStep(prev => Math.min(prev + 1, stepCount - 1));
    }, [stepCount]);

    const handleCookAgain = () => {
        setCompletedSteps(new Set());
        setCurrentStep(0);
        setIsRated(false);
        setUserRating(0);
    };

    const handleSave = async () => {
        if (!user || !firestore) {
            toast({ variant: 'destructive', title: 'Login required', description: 'Please sign in to save recipes to your favorites.' });
            return;
        }
        setIsSaving(true);
        try {
            await saveRecipe(firestore, user.uid, recipe);
            toast({ title: 'Recipe Saved!', description: `${recipe.name} has been added to your favorites.` });
        } catch (error) {
            toast({ variant: 'destructive', title: 'Error saving recipe', description: 'Please try again later.' });
        } finally {
            setIsSaving(false);
        }
    };

    const handleRate = async (rating: number) => {
        if (!user || !firestore) {
            toast({ variant: 'destructive', title: 'Login required', description: 'Please sign in to rate this recipe.' });
            return;
        }
        setUserRating(rating);
        try {
            await submitReview(firestore, recipe.id, recipe.name, user, rating, "");
            setIsRated(true);
        } catch (error) {
            toast({ variant: 'destructive', title: 'Rating failed', description: 'Could not save your rating. Please try again.' });
        }
    };

    const startRecognition = useCallback(() => {
        // ALWAYS check the absolute latest values from refs
        if (!isHandsFreeOnRef.current || isNarratingRef.current) {
            return;
        }

        if (recognitionRef.current) {
            if (isListeningRef.current) {
                return;
            }

            try {
                recognitionRef.current.start();
                isListeningRef.current = true;
                setHfError(null);
            } catch (e: any) {
                if (e.message.includes('already started')) {
                    isListeningRef.current = true;
                } else {
                    isListeningRef.current = false;
                }
            }
        }
    }, []);

    const stopRecognition = useCallback(() => {
        if (recognitionRef.current) {
            try {
                recognitionRef.current.stop();
            } catch (e) {}
            isListeningRef.current = false;
        }
    }, []);

    const stopSpeaking = useCallback(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
        isNarratingRef.current = false;
        setIsSpeakingStep(false);
    }, []);

    const speak = useCallback((text: string) => {
        if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
        
        window.speechSynthesis.cancel();
        isNarratingRef.current = true;
        
        if (recognitionRef.current && isListeningRef.current) {
            stopRecognition();
        }
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === 'ta' ? 'ta-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';
        
        const endNarration = () => {
            isNarratingRef.current = false;
            setIsSpeakingStep(false);
            if (isHandsFreeOnRef.current) {
                startRecognition();
            }
        };

        utterance.onstart = () => {
            setIsSpeakingStep(true);
        };
        utterance.onend = endNarration;
        utterance.onerror = (e) => {
            endNarration();
        };
        
        window.speechSynthesis.speak(utterance);
    }, [language, stopRecognition, startRecognition]);

    const toggleSpeakingStep = useCallback((text: string) => {
        if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
        if (isSpeakingStep) {
            stopSpeaking();
            toast({ title: "Muted", description: "Step narration stopped." });
        } else {
            speak(text);
        }
    }, [isSpeakingStep, speak, stopSpeaking, toast]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        
        if (!SpeechRecognition) {
            setHfError("Hands-free voice commands aren't supported in this browser.");
            return;
        }

        if (!recognitionRef.current) {
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = false;
            recognition.lang = language === 'ta' ? 'ta-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';

            recognition.onstart = () => {
                isListeningRef.current = true;
            };

            recognition.onresult = (event: any) => {
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    const resultObj = event.results[i];
                    
                    if (!resultObj.isFinal) continue;

                    const transcript = resultObj[0].transcript.toLowerCase().trim().replace(/[.?!]$/, "");
                    const confidence = resultObj[0].confidence;

                    if (confidence < 0.5) {
                        continue;
                    }

                    const now = Date.now();
                    if (now - lastCommandTimeRef.current < 1500) {
                        continue;
                    }

                    const timerRegex = /(?:set (?:a )?timer for|timer) (\w+|\d+) minutes?/;
                    const timerMatch = transcript.match(timerRegex);
                    if (timerMatch) {
                        const timeValue = timerMatch[1];
                        let minutes = parseInt(timeValue, 10);
                        
                        if (isNaN(minutes)) {
                            const wordMap: Record<string, number> = {
                                "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
                                "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
                                "fifteen": 15, "twenty": 20, "thirty": 30, "forty": 40,
                                "fifty": 50, "sixty": 60
                            };
                            minutes = wordMap[timeValue] || 0;
                        }

                        if (minutes > 0) {
                            startTimer(currentStepRef.current, minutes * 60, `${minutes} min`);
                            lastCommandTimeRef.current = now;
                            return; 
                        }
                    }

                    const words = transcript.split(/\s+/);
                    const matchWordOrPhrase = (synonyms: string[]) => {
                        return synonyms.some(s => {
                            if (s.includes(' ')) return transcript.includes(s);
                            return words.includes(s);
                        });
                    };

                    const prevSynonyms = ["previous", "go back", "back", "previous step"];
                    const nextSynonyms = ["next", "next step", "continue", "move on"];

                    if (matchWordOrPhrase(prevSynonyms)) {
                        handleGoToPrevious();
                        lastCommandTimeRef.current = now;
                        return;
                    }

                    if (matchWordOrPhrase(nextSynonyms)) {
                        handleMarkAndGoToNext();
                        lastCommandTimeRef.current = now;
                        return;
                    }
                }
            };

            recognition.onerror = (event: any) => {
                isListeningRef.current = false;
                if (event.error === 'not-allowed') {
                    setHfError("Microphone access denied. Please check permissions.");
                    setIsHandsFreeOn(false);
                } else if (event.error !== 'no-speech') {
                    if (isHandsFreeOnRef.current && !isNarratingRef.current) {
                        setTimeout(() => startRecognition(), 300);
                    }
                }
            };

            recognition.onend = () => {
                isListeningRef.current = false;
                if (isHandsFreeOnRef.current && !isNarratingRef.current) {
                    startRecognition();
                }
            };

            recognitionRef.current = recognition;
        }
    }, [language, startRecognition, stopRecognition, handleMarkAndGoToNext, handleGoToPrevious, startTimer]);

    useEffect(() => {
        setMounted(true);
        // Per user request: Hide site footer during focused Cook Mode tasks
        document.body.classList.add('hide-footer');
        
        if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
        return () => {
            if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel();
            }
            document.body.classList.remove('hide-footer');
            stopRecognition();
        };
    }, [stopRecognition]);

    useEffect(() => {
        if (!mounted) return;
        if (isHandsFreeOn) {
            startRecognition();
        } else {
            stopRecognition();
        }
    }, [isHandsFreeOn, mounted, startRecognition, stopRecognition]);

    useEffect(() => {
        if (!mounted) return;

        if (!isVoiceOn) {
            lastNarratedStepRef.current = currentStep;
            return;
        }

        if (lastNarratedStepRef.current !== currentStep) {
            const instruction = steps[currentStep];
            if (instruction) {
                speak(instruction);
            }
            lastNarratedStepRef.current = currentStep;
        }
    }, [currentStep, isVoiceOn, steps, mounted, speak]);

    useEffect(() => {
        const unlockAudio = () => {
            if (isAudioUnlockedRef.current) return;
            const utterance = new SpeechSynthesisUtterance("");
            window.speechSynthesis.speak(utterance);
            window.speechSynthesis.cancel();
            isAudioUnlockedRef.current = true;
            document.removeEventListener('click', unlockAudio);
            document.removeEventListener('keydown', unlockAudio);
        };
        document.addEventListener('click', unlockAudio);
        document.addEventListener('keydown', unlockAudio);
        return () => {
            document.removeEventListener('click', unlockAudio);
            document.removeEventListener('keydown', unlockAudio);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTimers = timersRef.current;
            const updated: Record<number, TimerState> = { ...currentTimers };
            let hasChanges = false;
            Object.entries(currentTimers).forEach(([idx, timer]) => {
                const stepIdx = parseInt(idx, 10);
                if (timer.isActive && timer.remaining > 0) {
                    updated[stepIdx] = { ...timer, remaining: timer.remaining - 1 };
                    hasChanges = true;
                    if (updated[stepIdx].remaining === 0) {
                        updated[stepIdx].isActive = false;
                        updated[stepIdx].isComplete = true;
                        handleTimerEnd(stepIdx, timer.label);
                    }
                }
            });
            if (hasChanges) setTimers(updated);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleTimerEnd = (stepIdx: number, label: string) => {
        try { new Audio(TIMER_DONE_SOUND_URL).play().catch(() => {}); } catch (e) {}
        if (typeof window !== 'undefined' && Notification.permission === 'granted' && document.visibilityState !== 'visible') {
            new Notification(`⏱ CookMitra Timer Done!`, { body: `Step ${stepIdx + 1}: ${label} for ${recipe.name} is finished.` });
        }
    };

    const progressPercent = stepCount > 0 ? Math.round((completedSteps.size / stepCount) * 100) : 0;
    const isComplete = stepCount > 0 && completedSteps.size === stepCount;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const activeElement = document.activeElement;
            const isInput = 
                activeElement?.tagName === 'INPUT' || 
                activeElement?.tagName === 'TEXTAREA' || 
                (activeElement as HTMLElement)?.isContentEditable;
                
            if (isInput) return;

            switch (e.code) {
                case 'Space':
                    e.preventDefault();
                    if (!isComplete) handleMarkAndGoToNext();
                    break;
                case 'ArrowLeft':
                    if (!isComplete) handleGoToPrevious();
                    break;
                case 'KeyT':
                    if (!isComplete) {
                      const currentText = steps[currentStep];
                      const mention = parseTimeMention(currentText);
                      if (mention) {
                          const activeTimer = timers[currentStep];
                          if (activeTimer) {
                              setTimers(prev => ({
                                  ...prev,
                                  [currentStep]: { ...activeTimer, isActive: !activeTimer.isActive }
                              }));
                          } else {
                              startTimer(currentStep, mention.seconds, mention.label);
                          }
                      }
                    }
                    break;
                case 'Escape':
                    onExit?.();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentStep, steps, timers, onExit, handleMarkAndGoToNext, handleGoToPrevious, startTimer, isComplete]);

    const renderTimer = (stepIdx: number, text: string) => {
        const mention = parseTimeMention(text);
        if (!mention) return null;
        const active = timers[stepIdx];
        if (active) {
            return (
                <div className={cn("mt-4 flex items-center gap-3 p-3 rounded-xl border transition-all", active.isComplete ? "bg-green-500/10 border-green-500/30" : "bg-primary/5 border-primary/20")}>
                    {active.isComplete ? (
                        <><CheckCircle2 className="h-5 w-5 text-green-500" /><span className="font-bold text-green-600 dark:text-green-400">Done!</span></>
                    ) : (
                        <><div className="font-mono text-xl font-bold text-primary tracking-tighter">{formatDuration(active.remaining)}</div>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setTimers(p => ({ ...p, [stepIdx]: { ...p[stepIdx], isActive: !p[stepIdx].isActive } }))}>
                            {active.isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button></>
                    )}
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full ml-auto opacity-50 hover:opacity-100" onClick={() => setTimers(p => { const n = { ...p }; delete n[stepIdx]; return n; })}>
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            );
        }
        return <Button variant="outline" size="sm" className="mt-4 h-9 rounded-full border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-all font-bold group" onClick={() => startTimer(stepIdx, mention.seconds, mention.label)}><AlarmClock className="mr-2 h-4 w-4" />Start {mention.label} timer</Button>;
    };

    if (isComplete && mounted) {
        return createPortal(
            <div className="fixed inset-0 bg-background z-[9999] flex flex-col items-center justify-center text-center p-6 pb-12 animate-in fade-in duration-500">
                <div className="space-y-3 mb-6 flex flex-col items-center">
                    <HotSteamingMealIcon />
                    <h2 className="font-headline text-4xl sm:text-5xl font-semibold text-stone-900 dark:text-stone-100 tracking-tight">Delicious!</h2>
                    <p className="text-stone-500 text-base font-medium">Your <span className="text-[#F4A21A] font-semibold">{recipe.name}</span> is Ready to Serve</p>
                </div>

                {/* Star Rating Section */}
                <div className="mb-8 space-y-3 bg-stone-50 dark:bg-stone-900/60 p-6 sm:p-8 rounded-[2.5rem] border border-stone-200 dark:border-stone-800 max-w-sm w-full">
                    <p className="font-bold uppercase tracking-wider text-[11px] text-stone-400">How did it turn out?</p>
                    <div className="flex justify-center py-1">
                        <StarRating 
                            rating={userRating} 
                            onRatingChange={handleRate} 
                            size={32} 
                        />
                    </div>
                    {isRated && <p className="text-[#F4A21A] text-xs font-semibold animate-in fade-in">Thanks for rating!</p>}
                </div>

                {/* Button Group */}
                <div className="flex flex-col gap-3.5 w-full max-w-sm">
                    <Button asChild size="lg" className="w-full rounded-full h-14 text-sm font-semibold uppercase tracking-wider bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-lg shadow-amber-500/25 border-0">
                        <Link href="/recipes">Return to Explorer</Link>
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <Button 
                            variant="outline" 
                            className="rounded-full h-12 font-semibold text-xs uppercase tracking-wider border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
                            onClick={handleSave}
                            disabled={isSaved || isSaving}
                        >
                            <Bookmark className={cn("h-4 w-4 mr-2", isSaved && "fill-[#F4A21A] text-[#F4A21A]")} />
                            {isSaved ? "Saved ✓" : "Save Recipe"}
                        </Button>
                        <Button 
                            variant="outline" 
                            className="rounded-full h-12 font-semibold text-xs uppercase tracking-wider border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
                            onClick={handleCookAgain}
                        >
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Cook Again
                        </Button>
                    </div>
                </div>
            </div>,
            document.body
        );
    }

    if (stepCount === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-6 pb-24">
                <div className="bg-stone-100 dark:bg-stone-800 rounded-full p-6 mb-4">
                    <X className="h-10 w-10 text-stone-400 opacity-40" />
                </div>
                <h3 className="font-headline text-2xl font-medium text-stone-900 dark:text-stone-100">No Steps Available</h3>
                <p className="text-stone-500 max-w-xs mx-auto mt-2 mb-8">This recipe doesn&apos;t have any step-by-step instructions yet.</p>
                <Button asChild variant="outline" className="rounded-full px-8 h-12 text-xs uppercase font-semibold"><Link href={`/recipes/${recipe.id}`}>Go Back</Link></Button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto pb-32">
            {/* TOP HEADER & PROGRESS CARD */}
            <Card className="mb-6 p-5 rounded-[2rem] border border-stone-200/80 dark:border-stone-800/80 bg-card/80 backdrop-blur-sm shadow-xs">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative">
                    <span className="font-bold uppercase tracking-wider text-[11px] text-stone-500 dark:text-stone-400">
                        Progress: Step {currentStep + 1} of {stepCount}
                    </span>
                    
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <Label htmlFor="voice-toggle" className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Voice</Label>
                            <Switch id="voice-toggle" checked={isVoiceOn} onCheckedChange={setIsVoiceOn} className="scale-75" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Label htmlFor="hf-toggle" className="text-[10px] font-bold uppercase tracking-wider text-stone-500">Hands-Free</Label>
                            <Switch id="hf-toggle" checked={isHandsFreeOn} onCheckedChange={setIsHandsFreeOn} className="scale-75" />
                        </div>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className={cn(
                              "h-8 w-8 rounded-full transition-colors",
                              isSpeakingStep ? "text-rose-500 hover:text-rose-600 bg-rose-500/10" : "text-stone-400 hover:text-[#F4A21A] hover:bg-amber-500/10"
                            )} 
                            onClick={() => toggleSpeakingStep(steps[currentStep])}
                            title={isSpeakingStep ? "Mute step narration" : "Read step aloud"}
                        >
                            {isSpeakingStep ? <VolumeX className="h-4 w-4 text-rose-500 animate-pulse" /> : <Volume2 className="h-4 w-4" />}
                        </Button>
                    </div>

                    <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                        <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-amber-500" /> {recipe.time} min</div>
                        <div className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-sky-500" /> {recipe.servings} Serves</div>
                    </div>

                    {hfError && (
                        <div className="absolute -bottom-6 left-0 flex items-center gap-1.5 text-[10px] font-medium text-rose-500 animate-in fade-in">
                            <AlertCircle className="h-3 w-3" />
                            {hfError}
                        </div>
                    )}
                </div>
                <div className="w-full h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden mt-3">
                    <div className="h-full bg-[#F4A21A] transition-all duration-700 ease-out shadow-xs" style={{ width: `${progressPercent}%` }} />
                </div>
            </Card>

            {/* ACTIVE STEP CARD */}
            <Card className="mb-8 border-2 border-[#F4A21A]/30 bg-card/80 backdrop-blur-sm shadow-md shadow-amber-500/10 rounded-[2.5rem] overflow-hidden">
                 <CardContent className="p-6 md:p-10">
                    <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 h-12 w-12 bg-[#F4A21A] text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-md shadow-amber-500/20">{currentStep + 1}</div>
                        <div className="flex-1">
                            <p className="text-xl md:text-2xl font-medium leading-relaxed text-stone-900 dark:text-stone-100">
                                {steps[currentStep]}
                            </p>
                            {renderTimer(currentStep, steps[currentStep])}
                        </div>
                    </div>
                 </CardContent>
            </Card>

            {/* ACTION BUTTON CONTROLS */}
            <div className="grid grid-cols-1 gap-3 mb-10">
                <Button size="lg" className="w-full font-semibold uppercase tracking-wider h-14 text-sm sm:text-base rounded-full bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-lg shadow-amber-500/25 border-0 transition-all active:scale-[0.99] flex items-center justify-center gap-2" onClick={handleMarkAndGoToNext}>
                    {completedSteps.has(currentStep) ? "Step Completed" : "Mark Step as Complete"}
                    <Check className="h-5 w-5" />
                </Button>
                <div className="grid grid-cols-2 gap-3">
                     <Button 
                        variant="outline" 
                        size="lg" 
                        className={cn("font-semibold text-xs uppercase tracking-wider h-12 rounded-full border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all", currentStep === 0 && "opacity-30 pointer-events-none")} 
                        onClick={handleGoToPrevious}
                     >
                        <ArrowLeft className="h-4 w-4 mr-2" /> Previous
                     </Button>
                     <Button 
                        variant="outline" 
                        size="lg" 
                        className={cn("font-semibold text-xs uppercase tracking-wider h-12 rounded-full border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all", currentStep === stepCount - 1 && "opacity-30 pointer-events-none")} 
                        onClick={() => setCurrentStep(prev => Math.min(prev + 1, stepCount - 1))}
                     >
                        Next <ArrowRight className="h-4 w-4 ml-2" />
                     </Button>
                </div>

                <div className="flex items-center justify-center gap-2 mt-2 text-[10px] font-semibold uppercase tracking-wider text-stone-400 select-none">
                    <Keyboard className="h-3.5 w-3.5" />
                    <span>Space: Next &bull; Left Arrow: Back &bull; T: Timer &bull; Esc: Exit</span>
                </div>
            </div>

            {/* FULL RECIPE GUIDE CHECKLIST */}
            <div className="space-y-4 pb-24">
                <h3 className="font-headline text-2xl font-medium tracking-tight text-stone-900 dark:text-stone-100">Full Recipe Guide</h3>
                <div className="space-y-3">
                    {steps.map((step, index) => (
                        <button 
                            key={index} 
                            onClick={() => setCurrentStep(index)} 
                            className={cn(
                                "w-full text-left p-4 rounded-2xl transition-all flex items-start gap-4 border group",
                                index === currentStep 
                                    ? "border-[#F4A21A] bg-amber-500/10 text-stone-900 dark:text-stone-100 font-semibold shadow-xs" 
                                    : completedSteps.has(index)
                                        ? "border-emerald-500/20 bg-emerald-500/5 text-stone-400 dark:text-stone-500"
                                        : "border-stone-200 dark:border-stone-800 bg-card/60 hover:bg-stone-100 dark:hover:bg-stone-800/60 text-stone-700 dark:text-stone-300"
                            )}
                        >
                            <div className={cn(
                                "h-6 w-6 rounded-full border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all",
                                completedSteps.has(index) ? "bg-emerald-500 border-emerald-500" : index === currentStep ? "border-[#F4A21A] bg-[#F4A21A] text-white" : "border-stone-300 dark:border-stone-700 group-hover:border-amber-500/50"
                            )}>
                                {completedSteps.has(index) ? <Check className="h-3.5 w-3.5 text-white" /> : <span className="text-[10px] font-bold">{index + 1}</span>}
                            </div>
                            <span className={cn(
                                "text-sm sm:text-base leading-relaxed transition-all", 
                                index === currentStep ? "text-stone-900 dark:text-stone-100 font-semibold" : "text-stone-700 dark:text-stone-300",
                                completedSteps.has(index) && "line-through text-stone-400 dark:text-stone-500"
                            )}>
                                {step}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
