'use client';

import { motion } from 'framer-motion';
import { IndiaRegionMap } from '@/components/recipes/india-region-map';
import { Card } from '@/components/ui/card';
import { MapIcon } from 'lucide-react';

export function RegionalCuisineExplorer() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-4 w-full"
    >
      <div className="text-center space-y-1 max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-2">
          <MapIcon className="h-5 w-5 text-[#F4A21A]" />
          <h2 className="font-headline text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            Explore Recipes by Region
          </h2>
        </div>
        <p className="font-sans text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-medium">
          Discover authentic dishes from every corner of India. Click any state to explore.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <Card className="w-full max-w-[540px] p-4 sm:p-6 bg-card/90 backdrop-blur-sm border border-stone-200/80 dark:border-stone-800/80 shadow-xs rounded-2xl relative">
          <IndiaRegionMap />
        </Card>
      </div>
    </motion.section>
  );
}
