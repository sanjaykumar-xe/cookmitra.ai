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
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-6 w-full"
    >
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <MapIcon className="h-6 w-6 text-[#F4A21A]" />
          <h2 className="font-headline text-fluid-h2 font-medium tracking-tight text-stone-900 dark:text-stone-100">
            Explore Recipes by Region
          </h2>
        </div>
        <p className="font-sans text-fluid-subtitle text-stone-600 dark:text-stone-300 font-medium">
          Discover authentic dishes from every corner of India.
        </p>
      </div>

      <Card className="p-6 md:p-8 bg-card/80 backdrop-blur-sm border-stone-200/80 dark:border-stone-800/80 shadow-md rounded-3xl overflow-hidden">
        <IndiaRegionMap />
      </Card>
    </motion.section>
  );
}
