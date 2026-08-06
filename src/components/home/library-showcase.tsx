'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useRef, useState } from 'react';
import { useInView, animate, useMotionValue, useTransform } from 'framer-motion';

function StatCounter({ value, suffix = "" }: { value: number | string; suffix?: string }) {
    const isString = typeof value === 'string';
    const numericValue = isString ? parseInt(value.replace(/[^0-9]/g, '')) : value;
    
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (inView) {
            animate(count, numericValue, { duration: 2, ease: "easeOut" });
        }
    }, [inView, count, numericValue]);

    return (
        <motion.span ref={ref} className="text-4xl md:text-6xl font-black text-primary tracking-tighter inline-block">
            <motion.span>{rounded}</motion.span>{suffix}
        </motion.span>
    );
}

export function LibraryShowcase() {
  const idliImg = PlaceHolderImages.find(p => p.id === 'idli-preview')?.imageUrl || "";
  const tandooriImg = PlaceHolderImages.find(p => p.id === 'tandoori-preview')?.imageUrl || "";
  const cakeImg = PlaceHolderImages.find(p => p.id === 'cake-preview')?.imageUrl || "";
  const shakeImg = PlaceHolderImages.find(p => p.id === 'shake-preview')?.imageUrl || "";

  const previews = [
    { name: "Soft Steamed Idli", region: "South Indian", img: idliImg, hint: "idli sambar" },
    { name: "Tandoori Chicken", region: "North Indian", img: tandooriImg, hint: "tandoori chicken" },
    { name: "Chocolate Truffle Cake", region: "Bakery", img: cakeImg, hint: "chocolate cake" },
    { name: "Mango Milkshake", region: "Drinks", img: shakeImg, hint: "mango milkshake" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-muted/30 border-b border-border/40 overflow-hidden relative z-0 -mt-px">
      <motion.div 
        className="container max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.h2 variants={itemVariants} className="font-headline text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            Recipes for Every Corner of India
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium opacity-80">
            From mountain valleys to coastal villages, our library covers the breadth of the subcontinent.
          </motion.p>
        </div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-20">
          <div className="text-center space-y-2 group">
            <StatCounter value="1000" suffix="+" />
            <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">Recipes</p>
          </div>
          <div className="text-center space-y-2 group">
            <StatCounter value={28} />
            <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">States & UTs Covered</p>
          </div>
          <div className="text-center space-y-2 group">
            <StatCounter value={8} />
            <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">Northeast India States</p>
          </div>
          <div className="text-center space-y-2 group">
            <StatCounter value={3} />
            <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">Categories</p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previews.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative h-[300px] rounded-3xl overflow-hidden border border-primary/10 shadow-xl bg-card"
            >
              <div className="absolute inset-0 overflow-hidden bg-muted/20">
                {item.img && (
                    <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={item.hint}
                    />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <Badge className="w-fit mb-2 bg-primary/20 backdrop-blur-md border-primary/30 text-primary-foreground text-[10px] font-black uppercase tracking-widest">{item.region}</Badge>
                <h4 className="text-lg font-bold text-white tracking-tight">{item.name}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-16 text-center">
            <Button asChild variant="ghost" className="group h-12 rounded-full px-8 text-primary hover:bg-primary/5 font-bold">
                <Link href="/recipes" className="flex items-center gap-2">
                    Browse All 1000+ Recipes
                    <ChevronRight className="h-4 w-4" />
                </Link>
            </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
