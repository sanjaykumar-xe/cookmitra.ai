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
import DriftWall from '@/components/ui/drift-wall';
import TextLoop from '@/components/ui/text-loop';
import ScrollFloat from '@/components/ui/scroll-float';
import { useLanguage } from '@/context/language-context';

// Dynamic imports for heavy below-the-fold sections
const LibraryShowcase = dynamic(() => import('@/components/home/library-showcase').then(mod => mod.LibraryShowcase), {
    loading: () => <div className="h-96 w-full flex items-center justify-center bg-muted/5"><Loader2 className="animate-spin text-primary" /></div>
});

interface ServiceCardProps {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  benefit: string;
  index: number;
  iconTint?: string;
  href?: string;
}

function ServiceCard({ icon, title, description, benefit, index, iconTint = "bg-[#FFF4EC] text-[#D97706] dark:bg-amber-950/40 dark:text-amber-400", href = "/signup" }: ServiceCardProps) {
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

function PersonaCard({ title, icon, description, href = "/recipes" }: { title: string; icon: React.ReactElement; description: string; href?: string }) {
    return (
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }} className="h-full">
            <Link href={href} className="block h-full group focus:outline-none">
              <Card className="h-full p-6 text-center rounded-2xl bg-card border border-stone-200/90 dark:border-stone-800/90 hover:border-amber-500/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-start cursor-pointer">
                  <div className="bg-amber-500/10 text-amber-600 dark:text-amber-400 p-3.5 rounded-2xl mb-3.5 group-hover:scale-110 transition-transform duration-200">
                      {React.cloneElement(icon as React.ReactElement<any>, { className: "h-6 w-6" })}
                  </div>
                  <h3 className="font-headline text-lg font-bold mb-2 text-stone-900 dark:text-stone-100 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{description}</p>
              </Card>
            </Link>
        </motion.div>
    );
}

function ComparisonSection() {
    const { t } = useLanguage();
    const comparisonRows = [
        { label: t('landing.row1'), generic: false, blogs: false, cookmitra: true },
        { label: t('landing.row2'), generic: t('landing.limited'), blogs: t('landing.varies'), cookmitra: true },
        { label: t('landing.row3'), generic: false, blogs: false, cookmitra: true },
        { label: t('landing.row4'), generic: false, blogs: false, cookmitra: true },
        { label: t('landing.row5'), generic: false, blogs: false, cookmitra: true },
        { label: t('landing.row6'), generic: t('landing.rare'), blogs: false, cookmitra: true },
        { label: t('landing.row7'), generic: false, blogs: false, cookmitra: true },
        { label: t('landing.row8'), generic: false, blogs: false, cookmitra: true },
    ];

    const renderCell = (value: boolean | string, isCookmitra: boolean = false) => {
        if (typeof value === 'string') return <span className={cn("text-sm font-bold", isCookmitra ? "text-primary" : "text-muted-foreground")}>{value}</span>;
        return value ? <div className="flex justify-center"><Check className={cn("h-6 w-6", isCookmitra ? "text-primary" : "text-emerald-500")} strokeWidth={3} /></div> : <div className="flex justify-center"><X className="h-6 w-6 text-muted-foreground/40" strokeWidth={3} /></div>;
    };

    return (
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">
                    <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight">{t('landing.whyTitle')}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">{t('landing.whySubtitle')}</p>
                </div>
                <div className="overflow-x-auto pt-4 pb-4 custom-scrollbar">
                    <table className="w-full min-w-[700px] border-separate border-spacing-0 rounded-2xl shadow-sm border border-border/60">
                        <thead>
                            <tr className="bg-muted/40">
                                <th className="p-6 text-left border-b border-border/60"></th>
                                <th className="p-6 text-center border-b border-border/60 text-muted-foreground font-headline text-xl">{t('landing.genericApps')}</th>
                                <th className="p-6 text-center border-b border-border/60 text-muted-foreground font-headline text-xl">{t('landing.cookingBlogs')}</th>
                                <th className="pt-6 pb-5 px-6 text-center relative border-x border-t border-primary/30 bg-primary/10 rounded-t-[2rem]">
                                    <div className="flex flex-col items-center justify-center mb-1.5">
                                        <Badge className="bg-primary text-[#412402] font-black uppercase tracking-widest text-[10px] py-1 px-3 shadow-md whitespace-nowrap border-0">
                                            {t('landing.thatsUs')}
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
  const { t } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && user) { router.push('/home'); }
  }, [user, isUserLoading, router]);

  const words = [
    t('landing.heroWord1'), 
    t('landing.heroWord2'), 
    t('landing.heroWord3'), 
    t('landing.heroWord4'), 
    t('landing.heroWord5'), 
    t('landing.heroWord6')
  ];

  const services = [
    { icon: <ChefHat />, title: t('landing.service.generator.title'), description: t('landing.service.generator.desc'), benefit: t('landing.service.generator.benefit'), iconTint: "bg-[#FFF4EC] text-[#D97706] dark:bg-amber-950/40 dark:text-amber-400", href: user ? "/ai-recipes" : "/signup" },
    { icon: <UtensilsCrossed />, title: t('landing.service.mapping.title'), description: t('landing.service.mapping.desc'), benefit: t('landing.service.mapping.benefit'), iconTint: "bg-[#E6F7F3] text-[#0D9488] dark:bg-teal-950/40 dark:text-teal-400", href: user ? "/encyclopedia" : "/signup" },
    { icon: <ShoppingCart />, title: t('landing.service.grocery.title'), description: t('landing.service.grocery.desc'), benefit: t('landing.service.grocery.benefit'), iconTint: "bg-[#EEF2FF] text-[#6366F1] dark:bg-indigo-950/40 dark:text-indigo-400", href: user ? "/pantry" : "/signup" },
    { id: 'healing', icon: <HeartPulse />, title: t('landing.service.healing.title'), description: t('landing.service.healing.desc'), benefit: t('landing.service.healing.benefit'), iconTint: "bg-[#FDF2F8] text-[#EC4899] dark:bg-pink-950/40 dark:text-pink-400", href: user ? "/healing-foods" : "/signup" },
    { icon: <MessageSquare />, title: t('landing.service.momo.title'), description: t('landing.service.momo.desc'), benefit: t('landing.service.momo.benefit'), iconTint: "bg-[#FFF7ED] text-[#F97316] dark:bg-orange-950/40 dark:text-orange-400", href: user ? "/ai-chat" : "/signup" },
    { icon: <Library />, title: t('landing.service.library.title'), description: t('landing.service.library.desc'), benefit: t('landing.service.library.benefit'), iconTint: "bg-[#ECFDF5] text-[#0D9488] dark:bg-emerald-950/40 dark:text-emerald-400", href: user ? "/recipes" : "/signup" },
  ];

  const personas = [
    { title: t('landing.persona.students.title'), icon: <GraduationCap />, description: t('landing.persona.students.desc'), href: user ? "/home" : "/signup" },
    { title: t('landing.persona.families.title'), icon: <Users />, description: t('landing.persona.families.desc'), href: user ? "/healthy-meal-planner" : "/signup" },
    { title: t('landing.persona.professionals.title'), icon: <Briefcase />, description: t('landing.persona.professionals.desc'), href: user ? "/recipes" : "/signup" },
    { title: t('landing.persona.beginners.title'), icon: <ChefHat />, description: t('landing.persona.beginners.desc'), href: user ? "/recipes" : "/signup" },
    { title: t('landing.persona.homeCooks.title'), icon: <Heart />, description: t('landing.persona.homeCooks.desc'), href: user ? "/recipes" : "/signup" }
  ];

  return (
    <div className="bg-background overflow-x-hidden">
        {/* Hero Section with Interactive 3D DriftWall & Transparent Top Navbar Flow */}
        <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-zinc-950 p-0 m-0 pt-16 lg:pt-20">
          {/* Ambient gradient washes for text contrast */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-zinc-950 via-zinc-950/85 lg:via-zinc-950/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/70 via-transparent to-zinc-950/30 pointer-events-none" />

          {/* 3D DriftWall on right side of Hero - 5 columns, unified upward drift flush to right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] xl:w-[60%] h-full z-0 overflow-hidden pointer-events-auto flex items-center justify-end pr-0">
            {/* Soft edge dissolve layers */}
            <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-44 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-zinc-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent z-10 pointer-events-none" />

            <DriftWall
              columns={5}
              tileWidth={205}
              tileHeight={136}
              gap={16}
              tilt={14}
              turn={-10}
              perspective={1100}
              depth={75}
              speed={34}
              direction="up"
              alternate={true}
              variance={0.4}
              parallax={0.55}
              lift={56}
              fade={0.55}
              dim={0.9}
              overlayColor="#05010a"
              className="w-full h-full"
            />
          </div>

          <div className="w-full max-w-[1600px] mx-auto relative flex flex-col items-start justify-center text-left px-8 sm:px-12 md:px-16 lg:px-20 z-20 space-y-8 pointer-events-none py-12">
            <div className="space-y-6 max-w-2xl xl:max-w-3xl pointer-events-auto">
                <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-medium tracking-tight text-white drop-shadow-2xl leading-[1.08] flex flex-wrap justify-start text-left">
                    {words.map((word, i) => (
                        <motion.span key={i} initial={{ opacity: 0, y: 20, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }} className="inline-block mr-[0.25em] last:mr-0">{word}</motion.span>
                    ))}
                </h1>
                <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }} className="text-base sm:text-lg md:text-xl text-white/85 font-normal leading-relaxed drop-shadow-md text-left max-w-xl xl:max-w-2xl">
                  {t('landing.heroSubtitle')}
                </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto pointer-events-auto">
              {isUserLoading ? (
                  <Button disabled size="lg" className="h-14 px-10 rounded-full w-full sm:w-auto"><Loader2 className="mr-2 h-4 w-4 animate-spin" /></Button>
              ) : (
                  <Button size="lg" className="h-14 px-9 text-base font-medium rounded-full group shadow-2xl shadow-primary/40 btn-primary-gradient border-0 w-full sm:w-auto" asChild>
                      <Link href={user ? "/home" : "/signup"}>{t('landing.letsCook')} <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                  </Button>
              )}
              <Button size="lg" variant="outline" className="h-14 px-8 text-base font-medium rounded-full border-white/25 text-white bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-md w-full sm:w-auto transition-all" asChild>
                  <Link href={user ? "/recipes" : "/signup"}>Explore Recipes</Link>
              </Button>
              <Link href="/pricing" className="text-white/80 text-sm font-medium hover:text-primary transition-all underline-offset-8 hover:underline text-center sm:text-left py-2">{t('landing.viewPricing')}</Link>
            </motion.div>
          </div>
        </section>
        
        <LibraryShowcase />
        
        <section className="py-20 md:py-28 bg-background overflow-hidden" id="services">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16 space-y-3">
                    <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center text-stone-900 dark:text-stone-100">
                      {t('landing.servicesTitle')}
                    </h2>
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground text-center">
                      {t('landing.servicesSubtitle')}
                    </p>
                </div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
                    {services.map((service, i) => <ServiceCard key={i} index={i} {...service} />)}
                </motion.div>
            </div>
        </section>

        <ComparisonSection />

        <section className="py-20 md:py-28 bg-muted/20 relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16 space-y-4">
                    <h2 className="font-headline text-3xl md:text-5xl font-medium tracking-tight">{t('landing.builtTitle')}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">{t('landing.builtSubtitle')}</p>
                </div>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
                    {personas.map((persona, i) => <PersonaCard key={i} {...persona} />)}
                </motion.div>
            </div>
        </section>

        {/* Animated Brand Ticker (Option B - Above Final CTA) */}
        <section className="relative w-full overflow-hidden py-2 sm:py-4 border-y border-border/40 bg-muted/30">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none z-10" />
          <TextLoop
            text={t('landing.ticker')}
            shape="wave"
            speed={65}
            curviness={20}
            fontSize={20}
            fontWeight={800}
            letterSpacing={2}
            uppercase
            ribbon={true}
            ribbonColor="#F4A21A"
            color="#1c0d02"
            ribbonWidth={50}
            pauseOnHover={false}
            viewHeight={130}
            className="w-full"
          />
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
                          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-medium leading-tight tracking-tight">{t('landing.readyTitle')}</h2>
                          <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }} className="absolute -bottom-2 left-0 h-[2px] bg-primary rounded-full" />
                        </div>
                        <h3 className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed">{t('landing.readySubtitle')}</h3>
                    </div>
                    <div className="pt-4 relative z-10 flex flex-col items-center gap-3">
                        <Button size="lg" className="h-16 px-12 text-lg font-medium rounded-full shadow-2xl shadow-primary/30 transition-all btn-primary-gradient border-0 w-full sm:w-auto" asChild>
                            <Link href={user ? "/home" : "/signup"}>{t('landing.getStarted')}</Link>
                        </Button>
                        <p className="text-[12px] font-medium text-muted-foreground/60">{t('landing.freeToStart')}</p>
                    </div>
                </motion.div>
            </div>
        </section>
    </div>
  );
}
