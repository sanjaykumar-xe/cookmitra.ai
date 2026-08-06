'use client';

import { useUser } from '@/firebase';
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
    ArrowRight, 
    HeartPulse, 
    MessageSquare, 
    UtensilsCrossed, 
    Library,
    ChevronRight,
    Sparkles,
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
}

function ServiceCard({ icon, title, description, benefit, index }: ServiceCardProps) {
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
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  if (shouldReduceMotion) {
    return (
      <Card className="h-full p-6 text-center border-border hover:border-primary/45 transition-colors">
        <div className="bg-primary/10 text-primary p-2.5 rounded-xl w-fit mb-4 mx-auto">
          {React.cloneElement(icon as React.ReactElement, { className: "h-7 w-7" })}
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
          <Card className="h-full flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-card border-[#F0E8D8] dark:border-primary/15 shadow-sm">
            <div className="bg-primary/10 text-primary p-2.5 rounded-xl w-fit mb-4 shadow-inner">
              {React.cloneElement(icon as React.ReactElement, { className: "h-7 w-7" })}
            </div>
            <CardTitle className="font-headline text-xl font-bold tracking-tight">{title}</CardTitle>
          </Card>
        </div>
        <div className="flip-card-back h-full w-full">
          <Card className="h-full flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#FEF3DC] dark:bg-[#2D1F08] border-primary/20 shadow-xl">
            <div className="text-[#854F0B] dark:text-[#FAC775] mb-4">
              {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8" })}
            </div>
            <p className="text-[#854F0B] dark:text-[#FAC775] text-fluid-subtitle font-medium leading-relaxed px-4">{benefit}</p>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}

function PersonaCard({ title, description, icon }: { title: string, description: string, icon: React.ReactElement }) {
    return (
        <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] } } }} className="h-full">
            <Card className="h-full flex flex-col p-8 rounded-3xl bg-card border-primary/5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                <div className="bg-primary/10 text-primary p-3 rounded-2xl w-fit mb-6 shadow-inner">
                    {React.cloneElement(icon as React.ReactElement, { className: "h-7 w-7" })}
                </div>
                <CardTitle className="font-headline text-2xl font-bold tracking-tight mb-4">{title}</CardTitle>
                <p className="text-muted-foreground text-fluid-subtitle font-medium leading-relaxed">{description}</p>
            </Card>
        </motion.div>
    );
}

function ComparisonSection() {
    const comparisonRows = [
        { label: "Personalized to YOUR pantry", generic: false, blogs: false, cookmitra: true },
        { label: "Authentic Indian regional depth", generic: "Limited", blogs: "Varies", cookmitra: "Yes (1000+ recipes)" },
        { label: "Hands-free voice cooking guidance", generic: false, blogs: false, cookmitra: true },
        { label: "AI recipe generation from ingredients", generic: "Rare", blogs: false, cookmitra: true },
        { label: "Health-condition based food guidance", generic: false, blogs: false, cookmitra: true },
        { label: "Instant grocery links for missing items", generic: false, blogs: false, cookmitra: true },
    ];

    const renderCell = (value: boolean | string, isCookmitra: boolean = false) => {
        if (typeof value === 'string') return <span className={cn("text-sm font-bold", isCookmitra ? "text-primary" : "text-muted-foreground")}>{value}</span>;
        return value ? <div className="flex justify-center"><Check className={cn("h-6 w-6", isCookmitra ? "text-primary" : "text-green-500")} strokeWidth={3} /></div> : <div className="flex justify-center"><X className="h-6 w-6 text-muted-foreground/30" strokeWidth={3} /></div>;
    };

    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container max-w-6xl mx-auto px-6 pt-8">
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight">Why CookMitra?</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">Not just another recipe app.</p>
                </div>
                <div className="overflow-x-auto pt-8 pb-4 custom-scrollbar">
                    <table className="w-full min-w-[700px] border-separate border-spacing-0">
                        <thead>
                            <tr>
                                <th className="p-6 text-left border-b border-border/60"></th>
                                <th className="p-6 text-center border-b border-border/60 text-muted-foreground font-headline text-xl">Generic Recipe Apps</th>
                                <th className="p-6 text-center border-b border-border/60 text-muted-foreground font-headline text-xl">Cooking Blogs</th>
                                <th className="p-6 text-center relative border-x border-t border-primary/20 bg-primary/5 rounded-t-[2rem]">
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"><Badge className="bg-primary text-[#412402] font-black uppercase tracking-widest text-[10px] py-1 px-3 shadow-lg whitespace-nowrap">That's Us</Badge></div>
                                    <span className="font-headline text-2xl font-bold text-primary">CookMitra AI</span>
                                </th>
                            </tr>
                        </thead>
                        <motion.tbody initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }} variants={{ visible: { transition: { staggerChildren: 0.18 } } }}>
                            {comparisonRows.map((row, i) => (
                                <motion.tr key={i} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1.0] } } }} className="group">
                                    <td className={cn("p-6 text-left border-b border-border/60 font-bold text-base transition-colors group-hover:text-primary", i === comparisonRows.length - 1 && "border-b-0")}>{row.label}</td>
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
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  useEffect(() => {
    if (!isUserLoading && user) { router.push('/home'); }
  }, [user, isUserLoading, router]);

  const headline = "Turn Your Ingredients Into Delicious Recipes";
  const words = headline.split(" ");

  const services = [
    { icon: <Sparkles />, title: "AI Recommendation", description: "Advanced AI analyzes your ingredients instantly.", benefit: "Get recipe suggestions tailored to exactly what's in your pantry right now" },
    { icon: <UtensilsCrossed />, title: "Ingredient Mapping", description: "Smart mapping system for authentic taste.", benefit: "Understands ingredient relationships so your dish tastes authentically Indian" },
    { icon: <ShoppingCart />, title: "Grocery Integration", description: "One-click links to major retailers.", benefit: "Buy missing ingredients from Zepto, Swiggy, Blinkit etc... directly through the app" },
    { id: 'healing', icon: <HeartPulse />, title: "Healing Foods", description: "Food as medicine approach for specific conditions.", benefit: "Discover ingredients and meals tailored to support specific health conditions based on traditional wisdom" },
    { icon: <MessageSquare />, title: "Chef Momo AI", description: "Interactive real-time cooking guidance.", benefit: "Ask Chef Momo anything — substitutions, timers, tips — hands-free while you cook" },
    { icon: <Library />, title: "Curated Library", description: "Hundreds of authentic regional recipes.", benefit: "Hundreds of authentic regional Indian recipes, hand-curated and ready to cook" },
  ];

  const personas = [
    { title: "Students", icon: <GraduationCap />, description: "On a tight budget? Generate recipes from whatever's already in your fridge." },
    { title: "Families", icon: <Users />, description: "Feeding picky eaters? Plan a full week of meals everyone will actually eat." },
    { title: "Professionals", icon: <Briefcase />, description: "Short on time? Get quick recipes and hands-free voice guidance while you cook." },
    { title: "Beginners", icon: <ChefHat />, description: "New to the kitchen? Step-by-step Cook Mode walks you through every recipe." },
    { title: "Home Cooks", icon: <Heart />, description: "Want to explore? Discover 1000+ authentic recipes from every corner of India." }
  ];

  return (
    <div className="bg-background overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-zinc-950 p-0 m-0">
          <div className="absolute inset-0 z-10 bg-black/60" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.9) 100%)' }} />
          <motion.div initial={{ scale: 1 }} animate={{ scale: 1.08 }} transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="absolute inset-0 z-0">
            {heroImage && (
                <Image src={heroImage.imageUrl} alt={heroImage.description} fill sizes="100vw" className="object-cover object-center w-full h-full" priority={true} data-ai-hint={heroImage.imageHint} />
            )}
          </motion.div>
          <div className="container mx-auto relative flex flex-col items-center justify-center text-center px-6 z-20 space-y-8">
            <div className="space-y-6 max-w-4xl">
                <h1 className="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white drop-shadow-2xl leading-[1.1] flex flex-wrap justify-center">
                    {words.map((word, i) => (
                        <motion.span key={i} initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }} className="inline-block mr-[0.25em] last:mr-0">{word}</motion.span>
                    ))}
                </h1>
                <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }} className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-white/80 font-medium leading-relaxed px-4">
                  Stop wondering what to cook! Enter the ingredients you have, and let our AI suggest perfect Indian recipes with instant grocery links for anything you're missing.
                </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }} className="flex flex-col sm:flex-row items-center gap-5 pt-4 w-full sm:w-auto">
              {isUserLoading ? (
                  <Button disabled size="lg" className="h-14 px-10 rounded-full w-full sm:w-auto"><Loader2 className="mr-2 h-4 w-4 animate-spin" /></Button>
              ) : (
                  <Button size="lg" className="h-14 px-10 text-base font-medium rounded-full group shadow-2xl shadow-primary/40 btn-primary-gradient border-0 w-full sm:w-auto" asChild>
                      <Link href={user ? "/home" : "/signup"}>Let&apos;s Cook <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                  </Button>
              )}
              <Link href="/pricing" className="text-white text-sm font-medium hover:text-primary transition-all underline-offset-8 hover:underline">View Pricing</Link>
            </motion.div>
          </div>
        </section>

        <LibraryShowcase />
        
        <section className="py-16 md:py-32 bg-background overflow-hidden">
            <div className="container max-w-5xl mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                    <h2 className="font-headline text-3xl md:text-5xl font-medium tracking-tight">Our Services</h2>
                    <p className="text-muted-foreground text-xs font-medium uppercase tracking-[0.2em]">Elevate your kitchen with AI expertise</p>
                </div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }} variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {services.map((service, i) => <ServiceCard key={i} index={i} {...service} />)}
                </motion.div>
            </div>
        </section>

        <ComparisonSection />

        <section className="py-24 md:py-32 bg-muted/20 relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <h2 className="font-headline text-3xl md:text-5xl font-medium tracking-tight">Built for Every Kind of Cook</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">Wherever you are in your cooking journey, CookMitra meets you there.</p>
                </div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }} variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
                    {personas.map((persona, i) => <PersonaCard key={i} {...persona} />)}
                </motion.div>
            </div>
        </section>

        <section className="py-16 md:py-32 relative overflow-hidden">
            <div className="container max-w-5xl mx-auto px-4 md:px-8">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-primary/20 bg-card py-10 sm:py-16 text-center space-y-10 group backdrop-blur-md shadow-2xl shadow-primary/5"
                >
                    <div className="space-y-4 relative z-10 max-w-3xl mx-auto px-6">
                        <div className="relative inline-block">
                          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-tight">Ready to Transform Your Cooking?</h2>
                          <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }} className="absolute -bottom-2 left-0 h-[2px] bg-primary rounded-full" />
                        </div>
                        <h3 className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">Join thousands of home cooks who've discovered the joy of effortless meal planning.</h3>
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
