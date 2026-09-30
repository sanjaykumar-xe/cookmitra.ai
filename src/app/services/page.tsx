'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChefHat, 
  UtensilsCrossed, 
  ShoppingCart, 
  HeartPulse, 
  MessageSquare, 
  Library,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { cn } from '@/lib/utils';
import { useLanguage } from '@/context/language-context';
import { useUser } from '@/lib/firebase';

interface ServiceCardProps {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  benefit: string;
  iconTint: string;
  index: number;
  href: string;
}

function ServiceCard({ icon, title, description, benefit, iconTint, index, href }: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none)').matches);
  }, []);

  const handleFlip = () => {
    if (isTouchDevice) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) setIsFlipped(false);
  };

  const entranceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.45, delay: index * 0.06, ease: "easeOut" }
    }
  };

  if (shouldReduceMotion) {
    return (
      <Link href={href} className="block h-full focus:outline-none rounded-3xl">
        <Card className="h-full p-7 flex flex-col justify-between rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs hover:shadow-lg transition-all">
          <div>
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-5", iconTint)}>
              {React.cloneElement(icon, { className: "h-6 w-6 stroke-[1.75]" })}
            </div>
            <CardTitle className="font-headline text-[1.65rem] font-bold tracking-tight mb-2 text-stone-900 dark:text-stone-100">
              {title}
            </CardTitle>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
              {description}
            </p>
          </div>
          <p className="text-xs sm:text-[13px] text-amber-900 dark:text-amber-200 font-medium">{benefit}</p>
        </Card>
      </Link>
    );
  }

  return (
    <motion.div
      variants={entranceVariants}
      className="flip-card-container h-[290px] sm:h-[310px] w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleFlip}
    >
      <div className={cn("flip-card-inner h-full w-full", isFlipped && "is-flipped")}>
        {/* Front Face */}
        <div className="flip-card-front h-full w-full">
          <Card className="h-full p-7 flex flex-col justify-between rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-xs hover:shadow-md transition-all cursor-pointer">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", iconTint)}>
                  {React.cloneElement(icon, { className: "h-6 w-6 stroke-[1.75]" })}
                </div>
                <span className="text-[11px] font-semibold text-stone-400 dark:text-stone-500 bg-stone-100 dark:bg-stone-800/80 px-2.5 py-1 rounded-full flex items-center gap-1">
                  Hover to flip ↻
                </span>
              </div>
              <CardTitle className="font-headline text-[1.65rem] font-bold tracking-tight mb-2 text-stone-900 dark:text-stone-100">
                {title}
              </CardTitle>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-normal line-clamp-3">
                {description}
              </p>
            </div>
            <div className="mt-auto w-full p-3 px-4 rounded-2xl bg-[#FFF9F2] dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-500/20 text-left flex items-center justify-between">
              <span className="text-xs font-medium text-amber-900 dark:text-amber-200/90 truncate">
                {benefit}
              </span>
              <span className="text-xs text-amber-700 dark:text-amber-400 font-bold ml-2 shrink-0">Flip →</span>
            </div>
          </Card>
        </div>

        {/* Back Face */}
        <div className="flip-card-back h-full w-full">
          <Link href={href} className="block h-full w-full focus:outline-none rounded-3xl">
            <Card className="h-full p-7 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#FFF9F2] via-white to-amber-50/70 dark:from-stone-900 dark:via-stone-900 dark:to-amber-950/30 border-2 border-amber-300 dark:border-amber-500/40 shadow-xl cursor-pointer hover:border-amber-400 transition-colors">
              <div className="flex items-center justify-between">
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", iconTint)}>
                  {React.cloneElement(icon, { className: "h-5 w-5 stroke-[1.75]" })}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 px-3 py-1 rounded-full border border-amber-200/60 dark:border-amber-500/20">
                  Key Benefit
                </span>
              </div>
              <div className="my-auto py-2">
                <p className="text-sm sm:text-[15px] font-medium text-[#8C4A15] dark:text-amber-200 leading-relaxed text-left">
                  {benefit}
                </p>
              </div>
              <div className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors">
                <span>Explore Feature</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const { t } = useLanguage();
  const { user } = useUser();

  const services = [
    { 
      icon: <ChefHat />, 
      title: t('landing.service.generator.title'), 
      description: t('landing.service.generator.desc'), 
      benefit: t('landing.service.generator.benefit'), 
      iconTint: "bg-[#FFF4EC] text-[#D97706] dark:bg-amber-950/40 dark:text-amber-400",
      href: user ? "/ai-recipes" : "/signup"
    },
    { 
      icon: <UtensilsCrossed />, 
      title: t('landing.service.mapping.title'), 
      description: t('landing.service.mapping.desc'), 
      benefit: t('landing.service.mapping.benefit'), 
      iconTint: "bg-[#E6F7F3] text-[#0D9488] dark:bg-teal-950/40 dark:text-teal-400",
      href: user ? "/encyclopedia" : "/signup"
    },
    { 
      icon: <ShoppingCart />, 
      title: t('landing.service.grocery.title'), 
      description: t('landing.service.grocery.desc'), 
      benefit: t('landing.service.grocery.benefit'), 
      iconTint: "bg-[#EEF2FF] text-[#6366F1] dark:bg-indigo-950/40 dark:text-indigo-400",
      href: user ? "/pantry" : "/signup"
    },
    { 
      icon: <HeartPulse />, 
      title: t('landing.service.healing.title'), 
      description: t('landing.service.healing.desc'), 
      benefit: t('landing.service.healing.benefit'), 
      iconTint: "bg-[#FDF2F8] text-[#EC4899] dark:bg-pink-950/40 dark:text-pink-400",
      href: user ? "/healing-foods" : "/signup"
    },
    { 
      icon: <MessageSquare />, 
      title: t('landing.service.momo.title'), 
      description: t('landing.service.momo.desc'), 
      benefit: t('landing.service.momo.benefit'), 
      iconTint: "bg-[#FFF7ED] text-[#F97316] dark:bg-orange-950/40 dark:text-orange-400",
      href: user ? "/ai-chat" : "/signup"
    },
    { 
      icon: <Library />, 
      title: t('landing.service.library.title'), 
      description: t('landing.service.library.desc'), 
      benefit: t('landing.service.library.benefit'), 
      iconTint: "bg-[#ECFDF5] text-[#0D9488] dark:bg-emerald-950/40 dark:text-emerald-400",
      href: user ? "/recipes" : "/signup"
    },
  ];

  return (
    <div className="flex-1 bg-background">
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16 space-y-3">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center text-stone-900 dark:text-stone-100">
              {t('landing.servicesTitle')}
            </h1>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 text-center">
              {t('landing.servicesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {services.map((service, i) => (
              <ServiceCard key={i} index={i} {...service} />
            ))}
          </div>

          {/* Quick CTA */}
          <div className="mt-16 sm:mt-20 text-center bg-stone-50 dark:bg-stone-900/60 border border-stone-200/80 dark:border-stone-800 rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto shadow-xs">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-3">
              {t('landing.readyTitle')}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-lg mx-auto mb-6">
              {t('landing.readySubtitle')}
            </p>
            <Button size="lg" className="h-13 px-8 text-base font-medium rounded-full btn-primary-gradient border-0 shadow-lg" asChild>
              <Link href={user ? "/home" : "/signup"}>
                {t('landing.letsCook')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
