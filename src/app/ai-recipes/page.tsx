'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import RecipeGenerator from "@/components/recipe/recipe-generator";
import { Loader2 } from 'lucide-react';
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
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }
  
  return (
    <div className="content-container pt-8 pb-24 md:pt-12 md:pb-32 px-4">
      <motion.div 
          style={{ opacity: titleOpacity, y: titleY, visibility: isTitleHidden ? 'hidden' : 'visible', pointerEvents: isTitleHidden ? 'none' : 'auto' }}
          className="text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-700 will-change-[opacity,transform]"
      >
          <h1 className="font-headline text-fluid-h1 font-medium text-foreground tracking-tight">
              AI Recipe Generator
          </h1>
          <p className="mt-4 text-fluid-subtitle font-medium text-muted-foreground max-w-2xl mx-auto opacity-80">
              Turn whatever&apos;s in your kitchen into a complete, AI-crafted recipe.
          </p>
      </motion.div>
      <RecipeGenerator />
    </div>
  );
}
