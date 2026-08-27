'use client';

import { useUser } from '@/lib/firebase';
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { 
    ArrowRight, 
    HeartPulse, 
    MessageSquare, 
    UtensilsCrossed, 
    Library,
    ShoppingCart,
    Loader2,
    Check,
    X,
    GraduationCap,
    Users,
    Briefcase,
    Heart,
    ChefHat
} from "lucide-react";
import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import dynamic from 'next/dynamic';

// Dynamic imports for heavy below-the-fold sections
const LibraryShowcase = dynamic(() => import('@/components/home/library-showcase').then(mod => mod.LibraryShowcase), {
    loading: () => <div className="h-96 w-full flex items-center justify-center bg-muted/5"><Loader2 className="animate-spin text-primary" /></div>
});

interface ServiceCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  benefit: string;
  index: number;
  iconTint?: string;
}

function ServiceCard({ icon, title, description, benefit, index, iconTint = "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400" }: ServiceCardProps) {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  if (shouldReduceMotion) {
    return (
      <Card className="h-full p-6 text-center border-border hover:border-primary/45 transition-colors">
        <div className={cn("p-2.5 rounded-xl w-fit mb-4 mx-auto", iconTint)}>
          {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "h-7 w-7" })}
        </div>
        <CardTitle className="font-headline text-xl font-bold tracking-tight mb-3">{title}</CardTitle>
        <p className="text-muted-foreground text-fluid-subtitle leading-relaxed">{benefit}</p>
      </Card>
    );
  }

  return (
    <motion.div
      variants={entranceVariants}
      className="flip-card-container h-[220px] w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleFlip}
    >
      <div className={cn("flip-card-inner h-full w-full", isFlipped && "is-flipped")}>
        <div className="flip-card-front h-full w-full">
          <Card className="h-full p-6 flex flex-col items-center justify-center text-center border-border hover:border-primary/45 transition-all shadow-xs group cursor-pointer bg-card/60 backdrop-blur-xs">
            <div className="flex flex-col items-center">
              <div className={cn("p-3 rounded-2xl w-fit mb-3 transition-transform group-hover:scale-110 duration-300", iconTint)}>
                {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "h-7 w-7" })}
              </div>
              <CardTitle className="font-headline text-lg font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">{title}</CardTitle>
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>
            </div>
          </Card>
        </div>
        <div className="flip-card-back h-full w-full">
          <Card className="h-full p-6 flex flex-col items-center justify-center text-center border-primary/40 bg-gradient-to-br from-primary/10 via-card to-card shadow-md">
            <p className="text-xs sm:text-sm font-medium text-foreground/90 leading-relaxed max-w-[240px] mx-auto">
              {benefit}
            </p>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}

function PersonaCard({ title, icon, description }: { title: string; icon: React.ReactElement; description: string }) {
    return (
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
            <Card className="h-full p-6 text-center border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg glass-card flex flex-col items-center justify-start group">
                <div className="bg-primary/10 text-primary p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(icon, { className: "h-7 w-7" })}
                </div>
                <h3 className="font-headline text-lg font-bold mb-2 text-foreground">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </Card>
        </motion.div>
    )
}

function ComparisonSection() {
    const comparisonRows = [
        { label: "Generates recipes strictly from what's in your pantry", generic: false, blogs: false, cookmitra: true },
        { label: "Authentic regional Indian cuisines (Tamil, Bengali, etc.)", generic: "Limited", blogs: "Varies", cookmitra: true },
        { label: "Estimated costs & single-click missing ingredient links", generic: false, blogs: false, cookmitra: true },
        { label: "Hands-free voice Cook Mode with built-in timers", generic: false, blogs: false, cookmitra: true },
        { label: "Personalized 7-day meal planning with budget caps", generic: false, blogs: false, cookmitra: true },
        { label: "Recipe generation from pantry ingredients", generic: "Rare", blogs: false, cookmitra: true },
        { label: "Health-condition based food guidance", generic: false, blogs: false, cookmitra: true },
        { label: "Instant grocery links for missing items", generic: false, blogs: false, cookmitra: true },
    ];

    const renderCell = (value: boolean | string, isCookmitra: boolean = false) => {
        if (typeof value === 'string') return <span className={cn("text-sm font-bold", isCookmitra ? "text-primary" : "text-muted-foreground")}>{value}</span>;
        return value ? <div className="flex justify-center"><Check className={cn("h-6 w-6", isCookmitra ? "text-primary" : "text-emerald-500")} strokeWidth={3} /></div> : <div className="flex justify-center"><X className="h-6 w-6 text-muted-foreground/40" strokeWidth={3} /></div>;
    };

    return (
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">
                    <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight">Why CookMitra?</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">Not just another recipe app.</p>
                </div>
                <div className="overflow-x-auto pt-4 pb-4 custom-scrollbar">
                    <table className="w-full min-w-[700px] border-separate border-spacing-0 rounded-2xl shadow-sm border border-border/60">
                        <thead>
                            <tr className="bg-muted/40">
                                <th className="p-6 text-left border-b border-border/60"></th>
                                <th className="p-6 text-center border-b border-border/60 text-muted-foreground font-headline text-xl">Generic Recipe Apps</th>
                                <th className="p-6 text-center border-b border-border/60 text-muted-foreground font-headline text-xl">Cooking Blogs</th>
                                <th className="pt-6 pb-5 px-6 text-center relative border-x border-t border-primary/30 bg-primary/10 rounded-t-[2rem]">
                                    <div className="flex flex-col items-center justify-center mb-1.5">
                                        <Badge className="bg-primary text-[#412402] font-black uppercase tracking-widest text-[10px] py-1 px-3 shadow-md whitespace-nowrap border-0">
                                            That&apos;s Us
                                        </Badge>
                                    </div>
                                    <span className="font-headline text-2xl font-bold text-primary block">CookMitra</span>
                                </th>
                            </tr>
                        </thead>
                        <motion.tbody initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
                            {comparisonRows.map((row, i) => (
                                <motion.tr key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="group">
                                    <td className={cn("p-6 text-left border-b border-border/60 font-semibold text-base text-foreground transition-colors group-hover:text-primary", i === comparisonRows.length - 1 && "border-b-0")}>{row.label}</td>
                                    <td className={cn("p-6 text-center border-b border-border/60", i === comparisonRows.length - 1 && "border-b-0")}>{renderCell(row.generic)}</td>
                                    <td className={cn("p-6 text-center border-b border-border/60", i === comparisonRows.length - 1 && "border-b-0")}>{renderCell(row.blogs)}</td>
                                    <td className={cn("p-6 text-center border-x bg-primary/5 border-primary/20", i === comparisonRows.length - 1 ? "border-b rounded-b-[2rem]" : "border-b border-primary/10")}>{renderCell(row.cookmitra, true)}</td>
                                </motion.tr>
                            ))}
                        </motion.tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && user) { router.push('/home'); }
  }, [user, isUserLoading, router]);

  const words = ["Turn", "Your", "Ingredients", "Into", "Delicious", "Recipes"];

  const services = [
    { icon: <ChefHat />, title: "Recipe Generator", description: "Advanced algorithm analyzes your ingredients instantly.", benefit: "Get recipe suggestions tailored to exactly what's in your pantry right now", iconTint: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400" },
    { icon: <UtensilsCrossed />, title: "Ingredient Mapping", description: "Smart mapping system for authentic taste.", benefit: "Understands ingredient relationships so your dish tastes authentically Indian", iconTint: "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400" },
    { icon: <ShoppingCart />, title: "Grocery Integration", description: "One-click links to major retailers.", benefit: "Buy missing ingredients from Zepto, Swiggy, Blinkit etc... directly through the app", iconTint: "bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400" },
    { id: 'healing', icon: <HeartPulse />, title: "Healing Foods", description: "Food as medicine approach for specific conditions.", benefit: "Discover ingredients and meals tailored to support specific health conditions based on traditional wisdom", iconTint: "bg-pink-500/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400" },
    { icon: <MessageSquare />, title: "Chef Momo", description: "Interactive real-time cooking guidance.", benefit: "Ask Chef Momo anything — substitutions, timers, tips — hands-free while you cook", iconTint: "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400" },
    { icon: <Library />, title: "Curated Library", description: "Hundreds of authentic regional recipes.", benefit: "Hundreds of authentic regional Indian recipes, hand-curated and ready to cook", iconTint: "bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400" },
  ];

  const personas = [
    { title: "Students", icon: <GraduationCap />, description: "On a tight budget? Generate recipes from whatever's already in your fridge." },
    { title: "Families", icon: <Users />, description: "Feeding picky eaters? Plan a full week of meals everyone will actually eat." },
    { title: "Professionals", icon: <Briefcase />, description: "Short on time? Get quick recipes and hands-free voice guidance while you cook." },
    { title: "Beginners", icon: <ChefHat />, description: "New to the kitchen? Step-by-step Cook Mode walks you through every recipe." },
    { title: "Home Cooks", icon: <Heart />, description: "Want to explore? Discover 934 authentic recipes from every corner of India." }
  ];

  return (
    <div className="bg-background overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative w-full h-[85vh] max-h-[750px] min-h-[550px] flex items-center justify-start overflow-hidden bg-zinc-950 p-0 m-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-stone-950/90 via-stone-950/65 to-transparent" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-950/40 via-transparent to-stone-950/30" />
          <motion.div initial={{ scale: 1 }} animate={{ scale: 1.05 }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image 
              src="/chef_momo_hero_bg.jpg" 
              alt="Indian Culinary Spices & Ingredients" 
              fill 
              sizes="100vw" 
              className="object-cover object-left md:object-center w-full h-full" 
              priority={true} 
            />
          </motion.div>
          <div className="container max-w-7xl mx-auto relative flex flex-col items-start justify-center text-left px-6 md:px-12 z-20 space-y-8">
            <div className="space-y-6 max-w-2xl">
                <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white drop-shadow-2xl leading-[1.15] flex flex-wrap justify-start text-left">
                    {words.map((word, i) => (
                        <motion.span key={i} initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }} className="inline-block mr-[0.25em] last:mr-0">{word}</motion.span>
                    ))}
                </h1>
                <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }} className="text-base sm:text-lg md:text-xl text-white/90 font-medium leading-relaxed drop-shadow-md text-left">
                  Stop wondering what to cook! Enter the ingredients you have, and let our AI suggest perfect Indian recipes with instant grocery links for anything you&apos;re missing.
                </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-2 w-full sm:w-auto">
              {isUserLoading ? (
                  <Button disabled size="lg" className="h-14 px-10 rounded-full w-full sm:w-auto"><Loader2 className="mr-2 h-4 w-4 animate-spin" /></Button>
              ) : (
                  <Button size="lg" className="h-14 px-10 text-base font-medium rounded-full group shadow-2xl shadow-primary/40 btn-primary-gradient border-0 w-full sm:w-auto" asChild>
                      <Link href={user ? "/home" : "/signup"}>Let&apos;s Cook <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                  </Button>
              )}
              <Link href="/pricing" className="text-white text-sm font-medium hover:text-primary transition-all underline-offset-8 hover:underline text-center sm:text-left">View Pricing</Link>
            </motion.div>
          </div>
        </section>

        <LibraryShowcase />
        
        <section className="py-16 md:py-24 bg-background overflow-hidden">
            <div className="container max-w-5xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                    <h2 className="font-headline text-3xl md:text-5xl font-medium tracking-tight">Our Services</h2>
                    <p className="text-muted-foreground text-xs font-medium uppercase tracking-[0.2em]">Elevate your kitchen with AI expertise</p>
                </div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {services.map((service, i) => <ServiceCard key={i} index={i} {...service} />)}
                </motion.div>
            </div>
        </section>

        <ComparisonSection />

        <section className="py-20 md:py-28 bg-muted/20 relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <h2 className="font-headline text-3xl md:text-5xl font-medium tracking-tight">Built for Every Kind of Cook</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">Wherever you are in your cooking journey, CookMitra meets you there.</p>
                </div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
                    {personas.map((persona, i) => <PersonaCard key={i} {...persona} />)}
                </motion.div>
            </div>
        </section>

        <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="container max-w-5xl mx-auto px-4 md:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-primary/20 bg-card py-10 sm:py-16 text-center space-y-10 group backdrop-blur-md shadow-2xl shadow-primary/5"
                >
                    <div className="space-y-4 relative z-10 max-w-3xl mx-auto px-6">
                        <div className="relative inline-block">
                          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-tight">Ready to Transform Your Cooking?</h2>
                          <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }} className="absolute -bottom-2 left-0 h-[2px] bg-primary rounded-full" />
                        </div>
                        <h3 className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">Join thousands of home cooks who&apos;ve discovered the joy of effortless meal planning.</h3>
                    </div>
                    <div className="pt-4 relative z-10 flex flex-col items-center gap-3">
                        <Button size="lg" className="h-16 px-12 text-lg font-medium rounded-full shadow-2xl shadow-primary/30 transition-all btn-primary-gradient border-0 w-full sm:w-auto" asChild>
                            <Link href={user ? "/home" : "/signup"}>Get Started</Link>
                        </Button>
                        <p className="text-[12px] font-medium text-muted-foreground/60">Free to start · No card needed</p>
                    </div>
                </motion.div>
            </div>
        </section>
    </div>
  );
}
