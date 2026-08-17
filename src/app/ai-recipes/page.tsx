'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import RecipeGenerator from "@/components/recipe/recipe-generator";
import { Loader2, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function AiRecipesPage() {
  const { user, isUserLoading } = useUser();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const { scrollY } = useScroll();
  const titleOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const titleY = useTransform(scrollY, [0, 200], [0, -40]);
  const [isTitleHidden, setIsTitleHidden] = useState(false);

  useMotionValueEvent(titleOpacity, "change", (latest) => {
    if (latest === 0 && !isTitleHidden) setIsTitleHidden(true);
    else if (latest > 0 && isTitleHidden) setIsTitleHidden(false);
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isUserLoading) {
      if (!user) {
        router.push('/login');
      } else if (user.providerData.some(p => p.providerId === 'password') && !user.emailVerified) {
        router.push('/verify-email');
      }
    }
  }, [user, isUserLoading, router, mounted]);

  if (!mounted || isUserLoading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-[#F4A21A]" />
      </div>
    );
  }
  
  return (
    <div className="content-container pt-8 pb-24 md:pt-12 md:pb-32 px-4">
      <motion.div 
          style={{ opacity: titleOpacity, y: titleY, visibility: isTitleHidden ? 'hidden' : 'visible', pointerEvents: isTitleHidden ? 'none' : 'auto' }}
          className="text-center mb-10 space-y-3 animate-in fade-in slide-in-from-top-4 duration-700 will-change-[opacity,transform]"
      >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 dark:text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="h-4 w-4 text-[#F4A21A]" />
              AI-Crafted Culinary Studio
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl font-semibold text-stone-900 dark:text-stone-100 tracking-tight">
              AI Recipe Generator
          </h1>
          <p className="text-stone-500 text-base sm:text-lg max-w-xl mx-auto font-normal">
              Turn whatever&apos;s in your kitchen into a complete, AI-crafted recipe.
          </p>
      </motion.div>
      <RecipeGenerator />
    </div>
  );
}
