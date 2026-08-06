'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Soup, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

const STATUS_PHRASES = [
  "Chopping ingredients...",
  "Simmering flavors...",
  "Balancing the spices...",
  "Adding the final touch...",
  "Almost ready...",
];

const DEFAULT_INGREDIENTS = ["Onion", "Tomato", "Spices", "Rice"];

interface RecipeDnaLoaderProps {
  ingredients?: string[];
}

export function RecipeDnaLoader({ ingredients = [] }: RecipeDnaLoaderProps) {
  const [statusIndex, setStatusIndex] = useState(0);
  
  // Determine which ingredients to show (cycling through input if fewer than 5)
  const baseIngredients = ingredients.length > 0 ? ingredients : DEFAULT_INGREDIENTS;
  const displayIngredients = Array.from({ length: 5 }, (_, i) => baseIngredients[i % baseIngredients.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % STATUS_PHRASES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[600px] w-full relative overflow-hidden bg-card/60 backdrop-blur-md rounded-[2rem] border border-primary/20 shadow-2xl">
      {/* Top Progress Shimmer */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-muted overflow-hidden">
        <motion.div 
            className="h-full bg-primary"
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{ position: 'absolute', width: '100%' }}
        />
      </div>

      {/* Background Steam/Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-1/2 left-1/2 h-2 w-2 rounded-full bg-primary/40"
            initial={{ y: 50, x: (i - 4) * 40, opacity: 0 }}
            animate={{ 
              y: -200, 
              x: (i - 4) * 50 + Math.sin(i) * 30, 
              opacity: [0, 0.8, 0],
              scale: [1, 2, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">
        {/* Central Animation Area */}
        <div className="relative w-64 h-64 mb-12 flex items-center justify-center">
          
          {/* Main Pot */}
          <motion.div
            animate={{ 
                y: [0, -8, 0],
                rotate: [-1, 1, -1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20"
          >
            <div className="bg-primary/10 p-10 rounded-full border border-primary/30 shadow-2xl backdrop-blur-xl group">
               <Soup className="h-28 w-24 text-primary" />
               
               {/* Internal Bubbles */}
               {[...Array(3)].map((_, i) => (
                   <motion.div 
                        key={i}
                        className="absolute bottom-12 left-1/2 w-2 h-2 bg-primary/40 rounded-full"
                        animate={{ 
                            y: [-5, -25],
                            x: [0, (i - 1) * 10],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.2, 0.8]
                        }}
                        transition={{ 
                            duration: 1.5, 
                            repeat: Infinity, 
                            delay: i * 0.5 
                        }}
                   />
               ))}
            </div>
          </motion.div>

          {/* Flying Ingredient Chips */}
          {displayIngredients.map((ing, i) => {
              // Calculate randomized start positions
              const startX = i % 2 === 0 ? -300 : 300;
              const startY = i < 2 ? -250 : 250;

              return (
                <motion.div
                  key={`${ing}-${i}`}
                  className="absolute z-30 pointer-events-none"
                  initial={{ x: startX, y: startY, opacity: 0, scale: 0.5 }}
                  animate={{ 
                    x: 0, 
                    y: 0, 
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.1, 0.3],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.7,
                    ease: "circIn"
                  }}
                >
                  <div className="bg-background/90 backdrop-blur-md border border-primary/40 px-4 py-1.5 rounded-full shadow-xl text-[11px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                    <Circle className="h-1.5 w-1.5 fill-current" />
                    <span className="truncate max-w-[80px]">{ing.toUpperCase()}</span>
                  </div>
                </motion.div>
              );
          })}

          {/* Steam Pillars */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[40%] w-full flex justify-center gap-8 opacity-40">
             {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="h-12 w-1.5 bg-gradient-to-t from-primary/60 to-transparent rounded-full"
                    animate={{ 
                        y: [0, -50], 
                        opacity: [0, 1, 0],
                        scaleX: [1, 2.5, 1],
                        filter: ["blur(0px)", "blur(4px)", "blur(8px)"]
                    }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.6,
                        ease: "easeOut"
                    }}
                />
             ))}
          </div>

          {/* Pulsing Flame below pot */}
          <motion.div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-orange-500 z-10"
            animate={{ 
                scale: [0.95, 1.25, 0.95],
                opacity: [0.4, 1, 0.4],
                filter: ["drop-shadow(0 0 0px #F4A21A)", "drop-shadow(0 0 15px #F4A21A)", "drop-shadow(0 0 0px #F4A21A)"]
            }}
            transition={{ 
                duration: 1.2, 
                repeat: Infinity, 
                ease: "easeInOut"
            }}
          >
            <Flame className="h-12 w-12 fill-current" />
          </motion.div>
        </div>

        {/* Text Area */}
        <div className="text-center space-y-6">
            <div className="h-10 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.h3
                        key={STATUS_PHRASES[statusIndex]}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="font-headline text-3xl font-medium text-primary tracking-tight"
                    >
                        {STATUS_PHRASES[statusIndex]}
                    </motion.h3>
                </AnimatePresence>
            </div>
            
            <div className="space-y-2">
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    className="text-lg text-muted-foreground font-medium max-w-xs mx-auto leading-relaxed"
                >
                    Our AI chef is crafting the perfect recipe just for you.
                </motion.p>
                <div className="flex justify-center gap-1">
                    {[0, 1, 2].map((dot) => (
                        <motion.div
                            key={dot}
                            className="h-1.5 w-1.5 rounded-full bg-primary/60"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: dot * 0.2 }}
                        />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}