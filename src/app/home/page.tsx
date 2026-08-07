'use client';

import { useEffect, useState } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
    Sparkles, 
    CalendarDays, 
    MessageSquare, 
    Library, 
    ChevronRight, 
    Clock, 
    BarChart2, 
    Loader2, 
    ChefHat,
    HeartPulse,
    BookOpen
} from 'lucide-react';
import Link from 'next/link';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import TextType from '@/components/ui/text-type';
import { SurpriseRecipeDialog } from '@/components/home/surprise-recipe-dialog';
import { RupeeIcon } from '@/components/icons/rupee-icon';
import { useLanguage } from '@/context/language-context';

export default function DashboardPage() {
    const { user, isUserLoading } = useUser();
    const { t } = useLanguage();
    const [mounted, setMounted] = useState(false);
    const [typingDone, setTypingDone] = useState(false);
    const router = useRouter();
    const firestore = useFirestore();

    const { scrollY } = useScroll();
    const titleOpacity = useTransform(scrollY, [0, 150], [1, 0]);
    const titleY = useTransform(scrollY, [0, 150], [0, -20]);
    const [isTitleHidden, setIsTitleHidden] = useState(false);

    useMotionValueEvent(titleOpacity, "change", (latest) => {
        if (latest === 0 && !isTitleHidden) setIsTitleHidden(true);
        else if (latest > 0 && isTitleHidden) setIsTitleHidden(false);
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && !isUserLoading && !user) {
            router.push('/login');
        }
    }, [user, isUserLoading, router, mounted]);

    const savedRecipesQuery = useMemoFirebase(() => {
        if (!user || !firestore) return null;
        return query(
            collection(firestore, `users/${user.uid}/recipes`),
            orderBy('savedAt', 'desc'),
            limit(4)
        );
    }, [user, firestore]);

    const { data: savedRecipes, isLoading: recipesLoading } = useCollection(savedRecipesQuery);

    if (!mounted || isUserLoading || !user) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
        );
    }

    const firstName = user.displayName ? user.displayName.split(' ')[0] : '';

    const quickActions = [
        {
            title: t('home.generate.title'),
            desc: t('home.generate.desc'),
            icon: <Sparkles className="h-6 w-6 text-current" />,
            href: '/ai-recipes',
            color: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400'
        },
        {
            title: t('home.plan.title'),
            desc: t('home.plan.desc'),
            icon: <CalendarDays className="h-6 w-6 text-current" />,
            href: '/healthy-meal-planner',
            color: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400'
        },
        {
            title: t('home.healing.title'),
            desc: t('home.healing.desc'),
            icon: <HeartPulse className="h-6 w-6 text-current" />,
            href: '/healing-foods',
            color: 'bg-pink-500/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400'
        },
        {
            title: t('home.encyclopedia.title'),
            desc: t('home.encyclopedia.desc'),
            icon: <BookOpen className="h-6 w-6 text-current" />,
            href: '/encyclopedia',
            color: 'bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400'
        },
        {
            title: t('home.chat.title'),
            desc: t('home.chat.desc'),
            icon: <MessageSquare className="h-6 w-6 text-current" />,
            href: '/ai-chat',
            color: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400'
        },
        {
            title: t('home.saved.title'),
            desc: t('home.saved.desc'),
            icon: <Library className="h-6 w-6 text-current" />,
            href: '/my-recipes',
            color: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400'
        }
    ];

    const interactionSpring = { type: "spring", stiffness: 300, damping: 20 };

    return (
        <div className="content-container py-8 md:py-12 space-y-12 md:space-y-16 px-4">
            <motion.div 
                style={{ opacity: titleOpacity, y: titleY, visibility: isTitleHidden ? 'hidden' : 'visible', pointerEvents: isTitleHidden ? 'none' : 'auto' }}
                className="space-y-8 will-change-[opacity,transform] relative z-10"
            >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <TextType
                            as="h1"
                            text={`${t('home.welcome')}${firstName ? `, ${firstName}` : ''}`}
                            typingSpeed={60}
                            initialDelay={200}
                            loop={false}
                            showCursor={!typingDone}
                            onSentenceComplete={() => setTypingDone(true)}
                            hideCursorWhileTyping={false}
                            cursorCharacter="|"
                            className="font-headline text-fluid-h1 font-medium tracking-tight"
                        />
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            className="text-fluid-subtitle text-muted-foreground font-medium"
                        >
                            {t('home.subtitle')}
                        </motion.p>
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <SurpriseRecipeDialog />
                    </motion.div>
                </div>

                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-fluid-grid"
                >
                    {quickActions.map((action) => (
                        <motion.div 
                            key={action.href}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                        >
                            <Link href={action.href}>
                                <motion.div
                                    whileHover="hover"
                                    initial="rest"
                                    animate="rest"
                                    className="h-full"
                                >
                                    <Card className="h-full border-primary/5 hover:border-primary/50 transition-all duration-300 relative group overflow-hidden">
                                        <motion.div
                                            variants={{
                                                rest: { y: 0, boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
                                                hover: { y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }
                                            }}
                                            transition={interactionSpring}
                                            className="p-5 md:p-6 h-full flex flex-col xl:flex-row xl:items-center xl:gap-4"
                                        >
                                            <motion.div 
                                                variants={{
                                                    rest: { scale: 1, rotate: 0 },
                                                    hover: { scale: 1.05, rotate: 3 }
                                                }}
                                                transition={interactionSpring}
                                                className={`h-11 w-11 shrink-0 flex items-center justify-center rounded-xl mb-4 xl:mb-0 ${action.color} group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300`}
                                            >
                                                {action.icon}
                                            </motion.div>
                                            <div className="flex flex-col">
                                                <CardTitle className="text-xl font-headline font-medium group-hover:text-primary transition-colors">{action.title}</CardTitle>
                                                <CardDescription className="text-sm font-medium leading-relaxed mt-1">{action.desc}</CardDescription>
                                            </div>
                                        </motion.div>
                                    </Card>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="font-headline text-fluid-h2 font-medium tracking-tight"
                    >
                        {t('home.recentSaved')}
                    </motion.h2>
                    {savedRecipes && savedRecipes.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Button variant="ghost" asChild className="group text-fluid-body">
                                <Link href="/my-recipes">
                                    {t('home.viewAll')}
                                    <motion.span
                                        whileHover={{ x: 4 }}
                                        transition={interactionSpring}
                                        className="inline-block"
                                    >
                                        <ChevronRight className="ml-1 h-4 w-4 transition-transform" />
                                    </motion.span>
                                </Link>
                            </Button>
                        </motion.div>
                    )}
                </div>

                {recipesLoading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                ) : savedRecipes && savedRecipes.length > 0 ? (
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.6 } }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-fluid-grid"
                    >
                        {savedRecipes.map((recipe: any) => {
                            const displayName = recipe.name || recipe.dishName || "Untitled Recipe";
                            const rawTime = recipe.time || recipe.cookingTime || 0;
                            const displayTime = typeof rawTime === 'string' ? parseInt(rawTime) : rawTime;
                            const displayCost = recipe.cost || recipe.estimatedCost || 0;
                            const displayLevel = recipe.difficulty || 'Medium';

                            return (
                                <motion.div 
                                    key={recipe.id}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                                    }}
                                >
                                    <Link href={`/my-recipes/${recipe.id}`}>
                                        <motion.div
                                            whileHover="hover"
                                            initial="rest"
                                            animate="rest"
                                        >
                                            <Card className="hover:border-primary/50 transition-all duration-300 bg-card/60 group overflow-hidden">
                                                <motion.div
                                                    variants={{
                                                        rest: { y: 0, boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
                                                        hover: { y: -2, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }
                                                    }}
                                                    transition={interactionSpring}
                                                    className="p-fluid-card flex items-center gap-4"
                                                >
                                                    <div className="h-11 w-11 shrink-0 flex items-center justify-center bg-primary/10 rounded-xl group-hover:bg-primary transition-colors duration-300 group-hover:text-primary-foreground">
                                                        <ChefHat className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="font-bold text-base leading-tight group-hover:text-primary transition-colors truncate">{displayName}</h3>
                                                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-2 opacity-70">
                                                            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {displayTime}m</span>
                                                            <span className="flex items-center gap-1"><BarChart2 className="h-3 w-3" /> {displayLevel}</span>
                                                            <span className="flex items-center gap-1 text-primary"><RupeeIcon className="h-3 w-3" /> {displayCost}</span>
                                                        </div>
                                                    </div>
                                                    <motion.div
                                                        variants={{
                                                            rest: { x: 0, opacity: 0.3 },
                                                            hover: { x: 4, opacity: 1 }
                                                        }}
                                                        transition={interactionSpring}
                                                    >
                                                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                                    </motion.div>
                                                </motion.div>
                                            </Card>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Card className="border-dashed py-12 md:py-20 bg-card/10 border-2">
                            <CardContent className="flex flex-col items-center text-center space-y-4">
                                <div className="bg-muted rounded-full p-4 text-muted-foreground">
                                    <Library className="h-8 w-8 opacity-40" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-bold text-lg">{t('home.noSaved')}</p>
                                    <p className="text-sm text-muted-foreground">{t('home.generate.desc')}</p>
                                </div>
                                <Button asChild size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-lg shadow-primary/20">
                                    <Link href="/ai-recipes">{t('home.generate.title')}</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            >
                <Link href="/recipes">
                    <motion.div
                        whileHover="hover"
                        initial="rest"
                        animate="rest"
                        className="block h-full"
                    >
                        <Card className="bg-primary/5 border-primary/20 hover:bg-primary/10 transition-all duration-500 group relative overflow-hidden p-fluid-card rounded-[3rem]">
                            <div 
                                className="absolute -bottom-16 -right-16 w-[160px] h-[160px] md:w-[260px] md:h-[260px] border-2 border-primary/15 rounded-full pointer-events-none flex items-center justify-center transition-transform duration-700 group-hover:scale-110" 
                                aria-hidden="true"
                            >
                                <ChefHat className="w-16 h-16 md:w-28 md:h-28 text-primary opacity-20" strokeWidth={1} />
                            </div>
                            
                            <div className="relative z-10 max-w-4xl space-y-4 md:space-y-6">
                                <h2 className="font-headline text-fluid-h2 font-medium tracking-tight">{t('nav.recipes')}</h2>
                                <p className="text-fluid-body text-muted-foreground font-medium leading-relaxed opacity-90">{t('home.exploreLibrary')}</p>
                                <motion.div
                                    variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                                    transition={interactionSpring}
                                    className="w-fit"
                                >
                                    <Button className="rounded-full px-10 h-14 text-fluid-body shadow-xl shadow-primary/20 font-black uppercase tracking-widest pointer-events-none text-[#412402]">
                                        {t('home.openExplorer')}
                                        <motion.span
                                            variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                                            transition={interactionSpring}
                                            className="inline-block"
                                        >
                                            <ChevronRight className="ml-2 h-5 w-5" />
                                        </motion.span>
                                    </Button>
                                </motion.div>
                            </div>
                        </Card>
                    </motion.div>
                </Link>
            </motion.div>
        </div>
    );
}
