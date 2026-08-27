'use client';

import { useState, useMemo, useEffect } from 'react';
import { useFirestore, useCollection, useMemoFirebase } from '@/lib/firebase';
import { collectionGroup, query, limit } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StarRating } from '@/components/ui/star-rating';
import { Button } from '@/components/ui/button';
import { Loader2, MessageSquare, Sparkles, ChevronRight, Quote, Users } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type CommunityNote = {
  id: string;
  userId: string;
  userName: string | null;
  userPhotoURL: string | null;
  note: string;
  createdAt?: { toDate: () => Date };
  rating?: number;
  recipeId: string;
  recipeName: string;
};

const WHATSAPP_INVITE_LINK = 'https://chat.whatsapp.com/FUDnUoC8L986jTliBVNpDF';

const AVATAR_PALETTES = [
  { bg: 'bg-amber-500/15 dark:bg-amber-500/25', text: 'text-amber-700 dark:text-amber-300' },
  { bg: 'bg-orange-500/15 dark:bg-orange-500/25', text: 'text-orange-700 dark:text-orange-300' },
  { bg: 'bg-rose-500/15 dark:bg-rose-500/25', text: 'text-rose-700 dark:text-rose-300' },
  { bg: 'bg-emerald-500/15 dark:bg-emerald-500/25', text: 'text-emerald-700 dark:text-emerald-300' },
  { bg: 'bg-teal-500/15 dark:bg-teal-500/25', text: 'text-teal-700 dark:text-teal-300' },
  { bg: 'bg-indigo-500/15 dark:bg-indigo-500/25', text: 'text-indigo-700 dark:text-indigo-300' },
  { bg: 'bg-purple-500/15 dark:bg-purple-500/25', text: 'text-purple-700 dark:text-purple-300' },
  { bg: 'bg-amber-600/15 dark:bg-amber-600/25', text: 'text-amber-800 dark:text-amber-200' },
];

function getAvatarStyle(identifier: string) {
  let hash = 0;
  for (let i = 0; i < identifier.length; i++) {
    hash = identifier.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % AVATAR_PALETTES.length;
  return AVATAR_PALETTES[index];
}

function ReviewCard({ review }: { review: CommunityNote }) {
  const displayName = review.userName || 'Anonymous User';
  const fallbackInitial = displayName[0].toUpperCase();
  // Hash by review ID so individual cards get distinct background colors
  const avatarStyle = getAvatarStyle(review.id || review.userId || displayName);

  return (
    <Card className="hover:shadow-lg transition-all duration-300 flex flex-col h-full min-h-[280px] glass-card overflow-hidden border-primary/10 rounded-[2rem]">
      <CardHeader className="flex-row items-start gap-4 p-5 pb-0 border-0">
        <Avatar className="h-11 w-11 border-2 border-background shadow-sm shrink-0">
          <AvatarImage src={review.userPhotoURL ?? undefined} alt={displayName} />
          <AvatarFallback className={cn("font-bold text-sm", avatarStyle.bg, avatarStyle.text)}>
            {fallbackInitial}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm text-foreground truncate">{displayName}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium opacity-80 mt-0.5">
            {review.rating ? (
              <div className="flex items-center gap-1">
                <StarRating rating={review.rating} readOnly size={12} />
              </div>
            ) : null}
            {review.rating && <span>&bull;</span>}
            <p className="text-[11px]">
              {review.createdAt ? formatDistanceToNow(review.createdAt.toDate(), { addSuffix: true }) : ''}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-5 pt-3 flex-grow flex flex-col justify-between">
        <div className="p-4 rounded-2xl bg-muted/30 border border-border/40 min-h-[130px] flex flex-col justify-between relative overflow-hidden">
          <Quote className="absolute -top-1 -right-1 h-10 w-10 text-[#F4A21A]/15 stroke-[1.5] rotate-180 pointer-events-none" />
          <div className="space-y-2 relative z-10">
            <div className="pb-2 border-b border-border/40">
              <h3 className="font-headline font-bold text-base text-primary line-clamp-1">{review.recipeName}</h3>
            </div>
            <blockquote className="text-sm italic text-foreground/80 leading-relaxed text-left line-clamp-3 pt-0.5">
              &quot;{review.note}&quot;
            </blockquote>
          </div>
        </div>
        <Button asChild variant="outline" className="w-full h-10 rounded-full font-bold text-xs border-primary/20 hover:bg-primary/5 text-primary">
          <Link href={`/recipes/${review.recipeId}`}>
            View Recipe <ChevronRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function CommunityPage() {
  const firestore = useFirestore();
  const [activeFilter, setActiveFilter] = useState<'Most Recent' | 'Highest Rated'>('Most Recent');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const notesQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collectionGroup(firestore, 'notes'), limit(50));
  }, [firestore]);

  const { data: notes, isLoading } = useCollection<CommunityNote>(notesQuery);

  const processedNotes = useMemo(() => {
    if (!notes) return [];
    
    const validNotes = notes.filter(note => note && note.recipeId && note.recipeName && note.createdAt);

    return [...validNotes].sort((a, b) => {
      if (activeFilter === 'Highest Rated') {
        const ratingA = a.rating || 0;
        const ratingB = b.rating || 0;
        if (ratingB !== ratingA) {
          return ratingB - ratingA;
        }
      }
      const dateA = a.createdAt?.toDate()?.getTime() || 0;
      const dateB = b.createdAt?.toDate()?.getTime() || 0;
      return dateB - dateA;
    });
  }, [notes, activeFilter]);

  if (!mounted) return null;

  return (
    <div className="content-container py-8 md:py-12 px-4">
      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="font-headline text-fluid-h1 font-bold tracking-tight">CookMitra Community</h1>
        <p className="mt-3 text-fluid-subtitle text-muted-foreground max-w-2xl mx-auto opacity-80 font-medium">
          Connect with home cooks across India, share recipe feedback, and discover community-tested favorites.
        </p>
      </div>

      {/* WhatsApp Community Banner */}
      <Card className="mb-10 glass-card border-[#25D366]/20 shadow-lg overflow-hidden bg-stone-50/50 dark:bg-stone-900/40 rounded-[2.5rem]">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="shrink-0">
              <div className="h-16 w-16 md:h-20 md:w-20 bg-[#25D366] text-white rounded-3xl flex items-center justify-center shadow-xl shadow-green-500/25">
                <WhatsAppIcon className="h-9 w-9 md:h-11 md:w-11 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground">Join the CookMitra Community</h2>
              <p className="text-sm md:text-base text-muted-foreground mt-2 mb-5 font-medium leading-relaxed max-w-xl">
                Share recipes, cooking tips, ask culinary questions, and connect with fellow home cooks in real-time on WhatsApp.
              </p>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1EBE57] text-white w-full sm:w-auto h-12 rounded-full px-8 shadow-lg shadow-green-500/20 font-bold border-0">
                <Link href={WHATSAPP_INVITE_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2.5 h-5 w-5 fill-white text-white" />
                  Join WhatsApp Community
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Early Community Framing Banner */}
      <div className="max-w-4xl mx-auto mb-10 p-5 md:p-6 rounded-3xl bg-[#F4A21A]/10 border border-[#F4A21A]/20 sm:flex sm:items-center sm:justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4 text-left">
          <div className="bg-[#F4A21A]/20 p-3 rounded-2xl text-[#F4A21A] shrink-0">
            <Users className="h-6 w-6" />
          </div>
          <div className="space-y-0.5">
            <p className="font-bold text-base text-foreground">Early CookMitra Community</p>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Be among the first to share your recipe reviews, notes, and cooking tips!
            </p>
          </div>
        </div>
        <Button asChild size="sm" className="mt-4 sm:mt-0 rounded-full px-6 h-10 text-xs font-bold bg-[#F4A21A] hover:bg-[#E09015] text-white shrink-0 border-0 shadow-sm">
          <Link href="/recipes">Review a Recipe</Link>
        </Button>
      </div>

      {/* Sorting Tabs Pill Toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-full bg-muted/50 border border-border/50 shadow-inner gap-1">
          <button
            onClick={() => setActiveFilter('Most Recent')}
            className={cn(
              "rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all",
              activeFilter === 'Most Recent'
                ? "bg-[#F4A21A] text-white shadow-md"
                : "text-muted-foreground hover:text-foreground hover:bg-background/50 font-bold"
            )}
          >
            Most Recent
          </button>
          <button
            onClick={() => setActiveFilter('Highest Rated')}
            className={cn(
              "rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-widest transition-all",
              activeFilter === 'Highest Rated'
                ? "bg-[#F4A21A] text-white shadow-md"
                : "text-muted-foreground hover:text-foreground hover:bg-background/50 font-bold"
            )}
          >
            Highest Rated
          </button>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center py-24">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      )}
      
      {/* Reviews Grid */}
      {!isLoading && processedNotes.length > 0 && (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-fluid-grid">
            {processedNotes.map((note, idx) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (idx % 12) * 0.06, ease: "easeOut" }}
              >
                <ReviewCard review={note} />
              </motion.div>
            ))}
        </div>
      )}

      {/* Empty State */}
      {!isLoading && processedNotes.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="text-center py-20 border-dashed border-2 bg-card/40 backdrop-blur-md border-[#F4A21A]/30 dark:border-amber-500/20 rounded-[3rem] max-w-3xl mx-auto shadow-xl">
            <CardHeader className="p-8 pb-4">
              <div className="mx-auto bg-[#F4A21A]/10 text-[#F4A21A] dark:bg-amber-500/20 dark:text-amber-400 rounded-2xl p-6 w-24 h-24 flex items-center justify-center mb-6 shadow-sm">
                <MessageSquare className="h-12 w-12 stroke-[1.75]" />
              </div>
              <CardTitle className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">No Community Reviews Yet</CardTitle>
              <CardDescription className="text-sm sm:text-base font-medium text-stone-700 dark:text-stone-300 mt-3 max-w-md mx-auto leading-relaxed">
                Be the first to share your cooking experience, rating, or notes on any of our recipes!
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4 pb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild className="rounded-full px-8 h-12 text-sm font-bold shadow-md bg-[#F4A21A] hover:bg-[#E09015] text-white transition-all border-0">
                <Link href="/recipes">Explore & Review Recipes</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
