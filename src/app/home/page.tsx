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
import { RegionalCuisineExplorer } from '@/components/home/regional-cuisine-explorer';

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
            color: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
            hoverBorder: 'hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:shadow-amber-500/10 hover:bg-amber-500/5',
            hoverIconBg: 'group-hover:bg-amber-500 group-hover:text-white',
            hoverTitle: 'group-hover:text-amber-600 dark:group-hover:text-amber-400'
        },
        {
            title: t('home.plan.title'),
            desc: t('home.plan.desc'),
            icon: <CalendarDays className="h-6 w-6 text-current" />,
            href: '/healthy-meal-planner',
            color: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
            hoverBorder: 'hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-blue-500/10 hover:bg-blue-500/5',
            hoverIconBg: 'group-hover:bg-blue-500 group-hover:text-white',
            hoverTitle: 'group-hover:text-blue-600 dark:group-hover:text-blue-400'
        },
        {
            title: t('home.healing.title'),
            desc: t('home.healing.desc'),
            icon: <HeartPulse className="h-6 w-6 text-current" />,
            href: '/healing-foods',
            color: 'bg-pink-500/10 text-pink-600 dark:bg-pink-500/20 dark:text-pink-400',
            hoverBorder: 'hover:border-pink-500/50 dark:hover:border-pink-500/50 hover:shadow-pink-500/10 hover:bg-pink-500/5',
            hoverIconBg: 'group-hover:bg-pink-500 group-hover:text-white',
            hoverTitle: 'group-hover:text-pink-600 dark:group-hover:text-pink-400'
        },
        {
            title: t('home.encyclopedia.title'),
            desc: t('home.encyclopedia.desc'),
            icon: <BookOpen className="h-6 w-6 text-current" />,
            href: '/encyclopedia',
            color: 'bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400',
            hoverBorder: 'hover:border-teal-500/50 dark:hover:border-teal-500/50 hover:shadow-teal-500/10 hover:bg-teal-500/5',
            hoverIconBg: 'group-hover:bg-teal-500 group-hover:text-white',
            hoverTitle: 'group-hover:text-teal-600 dark:group-hover:text-teal-400'
        },
        {
            title: t('home.chat.title'),
            desc: t('home.chat.desc'),
            icon: <MessageSquare className="h-6 w-6 text-current" />,
            href: '/ai-chat',
            color: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
            hoverBorder: 'hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:shadow-amber-500/10 hover:bg-amber-500/5',
            hoverIconBg: 'group-hover:bg-amber-500 group-hover:text-white',
            hoverTitle: 'group-hover:text-amber-600 dark:group-hover:text-amber-400'
        },
        {
            title: t('home.saved.title'),
            desc: t('home.saved.desc'),
            icon: <Library className="h-6 w-6 text-current" />,
            href: '/my-recipes',
            color: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400',
            hoverBorder: 'hover:border-purple-500/50 dark:hover:border-purple-500/50 hover:shadow-purple-500/10 hover:bg-purple-500/5',
            hoverIconBg: 'group-hover:bg-purple-500 group-hover:text-white',
            hoverTitle: 'group-hover:text-purple-600 dark:group-hover:text-purple-400'
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
                            className="font-headline text-fluid-h1 font-medium tracking-tight text-stone-900 dark:text-stone-100"
                        />
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            className="text-fluid-subtitle text-stone-600 dark:text-stone-300 font-medium"
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
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } }
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
                                    <Card className={`h-full bg-card/80 backdrop-blur-sm border-stone-200/80 dark:border-stone-800/80 ${action.hoverBorder} transition-all duration-300 relative group overflow-hidden shadow-sm hover:shadow-lg`}>
                                        <motion.div
                                            variants={{
                                                rest: { y: 0 },
                                                hover: { y: -4 }
                                            }}
                                            transition={interactionSpring}
                                            className="p-5 md:p-6 h-full flex flex-col xl:flex-row xl:items-center xl:gap-4"
                                        >
                                            <motion.div 
                                                variants={{
                                                    rest: { scale: 1, rotate: 0 },
                                                    hover: { scale: 1.1, rotate: 4 }
                                                }}
                                                transition={interactionSpring}
                                                className={`h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl mb-4 xl:mb-0 ${action.color} ${action.hoverIconBg} transition-colors duration-300 shadow-sm`}
                                            >
                                                {action.icon}
                                            </motion.div>
                                            <div className="flex flex-col">
                                                <CardTitle className={`text-xl font-headline font-medium text-stone-900 dark:text-stone-100 ${action.hoverTitle} transition-colors`}>{action.title}</CardTitle>
                                                <CardDescription className="text-sm font-medium leading-relaxed mt-1 text-stone-600 dark:text-stone-300">{action.desc}</CardDescription>
                                            </div>
                                        </motion.div>
                                    </Card>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Quick Dinner Tonight Shortcut Card */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                    <Link href="/recipes?maxTime=30&difficulty=easy">
                        <motion.div
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                        >
                            <Card className="bg-card/80 backdrop-blur-sm border-emerald-500/30 dark:border-emerald-800/40 hover:border-emerald-500/60 hover:shadow-emerald-500/10 hover:bg-emerald-500/5 transition-all duration-300 relative group overflow-hidden shadow-sm hover:shadow-md p-5 md:p-6 rounded-3xl">
                                <motion.div
                                    variants={{
                                        rest: { y: 0 },
                                        hover: { y: -2 }
                                    }}
                                    transition={interactionSpring}
                                    className="flex items-center justify-between gap-4"
                                >
                                    <div className="flex items-center gap-4">
                                        <motion.div 
                                            variants={{
                                                rest: { scale: 1, rotate: 0 },
                                                hover: { scale: 1.1, rotate: 4 }
                                            }}
                                            transition={interactionSpring}
                                            className="h-12 w-12 shrink-0 flex items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shadow-sm"
                                        >
                                            <Clock className="h-6 w-6 text-current" strokeWidth={1.75} />
                                        </motion.div>
                                        <div className="flex flex-col">
                                            <CardTitle className="text-xl font-headline font-medium text-stone-900 dark:text-stone-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                                Quick Dinner Tonight
                                            </CardTitle>
                                            <CardDescription className="text-sm font-medium leading-relaxed mt-0.5 text-stone-600 dark:text-stone-300">
                                                Ready in under 30 minutes
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <motion.div
                                        variants={{
                                            rest: { x: 0, opacity: 0.5 },
                                            hover: { x: 4, opacity: 1 }
                                        }}
                                        transition={interactionSpring}
                                    >
                                        <ChevronRight className="h-5 w-5 text-stone-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                                    </motion.div>
                                </motion.div>
                            </Card>
                        </motion.div>
                    </Link>
                </motion.div>
            </motion.div>

            <RegionalCuisineExplorer />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <motion.h2 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-headline text-fluid-h2 font-medium tracking-tight text-stone-900 dark:text-stone-100"
                    >
                        {t('home.recentSaved')}
                    </motion.h2>
                    {savedRecipes && savedRecipes.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Button variant="ghost" asChild className="group text-fluid-body rounded-full hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400">
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
                        <Loader2 className="h-8 w-8 animate-spin text-[#F4A21A]" />
                    </div>
                ) : savedRecipes && savedRecipes.length > 0 ? (
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } }
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
                                            <Card className="hover:border-amber-500/40 transition-all duration-300 bg-card/80 backdrop-blur-sm border-stone-200/80 dark:border-stone-800/80 group overflow-hidden shadow-sm hover:shadow-md">
                                                <motion.div
                                                    variants={{
                                                        rest: { y: 0 },
                                                        hover: { y: -3 }
                                                    }}
                                                    transition={interactionSpring}
                                                    className="p-fluid-card flex items-center gap-4"
                                                >
                                                    <div className="h-12 w-12 shrink-0 flex items-center justify-center bg-amber-500/10 dark:bg-amber-500/20 rounded-2xl group-hover:bg-[#F4A21A] transition-colors duration-300 group-hover:text-white">
                                                        <ChefHat className="h-6 w-6 text-[#F4A21A] group-hover:text-white transition-colors" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="font-headline font-medium text-lg leading-tight text-stone-900 dark:text-stone-100 group-hover:text-[#F4A21A] transition-colors truncate">{displayName}</h3>
                                                        <div className="flex items-center gap-3 text-xs font-semibold text-stone-500 dark:text-stone-400 mt-1.5">
                                                            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {displayTime}m</span>
                                                            <span className="flex items-center gap-1"><BarChart2 className="h-3.5 w-3.5" /> {displayLevel}</span>
                                                            <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold"><RupeeIcon className="h-3.5 w-3.5" /> {displayCost}</span>
                                                        </div>
                                                    </div>
                                                    <motion.div
                                                        variants={{
                                                            rest: { x: 0, opacity: 0.4 },
                                                            hover: { x: 4, opacity: 1 }
                                                        }}
                                                        transition={interactionSpring}
                                                    >
                                                        <ChevronRight className="h-5 w-5 text-stone-400 group-hover:text-[#F4A21A] transition-colors" />
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
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Card className="border-dashed py-12 md:py-16 bg-stone-50/50 dark:bg-stone-900/30 border-2 border-stone-300/80 dark:border-stone-800 rounded-3xl">
                            <CardContent className="flex flex-col items-center text-center space-y-4">
                                <div className="bg-amber-500/10 text-[#F4A21A] rounded-2xl p-4">
                                    <Library className="h-8 w-8" />
                                </div>
                                <div className="space-y-1">
                                    <p className="font-headline text-xl font-medium text-stone-900 dark:text-stone-100">{t('home.noSaved')}</p>
                                    <p className="text-sm text-stone-600 dark:text-stone-300">{t('home.generate.desc')}</p>
                                </div>
                                <Button asChild size="lg" className="rounded-full px-8 h-12 text-base font-medium bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-lg shadow-amber-500/20">
                                    <Link href="/ai-recipes">{t('home.generate.title')}</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
                <Link href="/recipes">
                    <motion.div
                        whileHover="hover"
                        initial="rest"
                        animate="rest"
                        className="block h-full"
                    >
                        <Card className="bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border-amber-500/25 hover:border-amber-500/50 transition-all duration-500 group relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-xl">
                            <div 
                                className="absolute -bottom-16 -right-16 w-[180px] h-[180px] md:w-[280px] md:h-[280px] border-2 border-amber-500/20 rounded-full pointer-events-none flex items-center justify-center transition-transform duration-700 group-hover:scale-110" 
                                aria-hidden="true"
                            >
                                <ChefHat className="w-20 h-20 md:w-32 md:h-32 text-[#F4A21A] opacity-25" strokeWidth={1.25} />
                            </div>
                            
                            <div className="relative z-10 max-w-4xl space-y-4 md:space-y-6">
                                <h2 className="font-headline text-fluid-h2 font-medium tracking-tight text-stone-900 dark:text-stone-100">{t('nav.recipes')}</h2>
                                <p className="text-fluid-body text-stone-700 dark:text-stone-300 font-medium leading-relaxed max-w-2xl">{t('home.exploreLibrary')}</p>
                                <motion.div
                                    variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
                                    transition={interactionSpring}
                                    className="w-fit"
                                >
                                    <Button className="rounded-full px-9 h-13 text-base bg-[#F4A21A] hover:bg-[#E09015] text-white font-medium shadow-lg shadow-amber-500/20 pointer-events-none">
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
