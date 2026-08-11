'use client';

import { useState, useMemo, useEffect } from 'react';
import { useFirestore, useCollection, useMemoFirebase } from '@/lib/firebase';
import { collectionGroup, query, limit } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StarRating } from '@/components/ui/star-rating';
import { Button } from '@/components/ui/button';
import { Loader2, MessageSquare } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { motion } from 'framer-motion';

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
}

const WHATSAPP_INVITE_LINK = 'https://chat.whatsapp.com/FUDnUoC8L986jTliBVNpDF';

function ReviewCard({ review }: { review: CommunityNote }) {
  const displayName = review.userName || 'Anonymous User';
  const fallbackInitial = displayName[0].toUpperCase();

  return (
    <Card className="hover:shadow-md transition-shadow duration-300 flex flex-col h-full glass-card overflow-hidden">
      <CardHeader className="flex-row items-start gap-4 p-fluid-card pb-0 border-0">
        <Avatar className="h-11 w-11 border-2 border-background shadow-sm">
          <AvatarImage src={review.userPhotoURL ?? undefined} alt={displayName} />
          <AvatarFallback className="font-bold text-primary bg-primary/10">{fallbackInitial}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-fluid-body truncate">{displayName}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium opacity-80">
            {review.rating && <StarRating rating={review.rating} readOnly size={12} />}
            {review.rating && <span>&bull;</span>}
            <p>
              {review.createdAt ? formatDistanceToNow(review.createdAt.toDate(), { addSuffix: true }) : ''}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 p-fluid-card flex-grow flex flex-col justify-between">
        <div className="p-4 rounded-xl bg-muted/30 border border-border/40">
          <h3 className="font-headline font-bold text-lg text-primary mb-2 line-clamp-1">{review.recipeName}</h3>
          <blockquote className="text-fluid-body italic leading-relaxed opacity-80 line-clamp-3">"{review.note}"</blockquote>
        </div>
        <Button asChild variant="outline" className="w-full h-11 rounded-full font-medium border-primary/20 hover:bg-primary/5 text-primary">
          <Link href={`/recipes/${review.recipeId}`}>View Recipe</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function CommunityPage() {
  const firestore = useFirestore();
  const [activeFilter, setActiveFilter] = useState('Most Recent');
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

    return validNotes.sort((a, b) => {
      const dateA = a.createdAt?.toDate()?.getTime() || 0;
      const dateB = b.createdAt?.toDate()?.getTime() || 0;
      return dateB - dateA;
    });
  }, [notes]);

  if (!mounted) return null;

  return (
    <div className="content-container py-8 md:py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="font-headline text-fluid-h1 font-medium tracking-tight">CookMitra Community</h1>
        <p className="mt-4 text-fluid-subtitle text-muted-foreground max-w-2xl mx-auto opacity-80">
          Connect with other food lovers, share tips, and discuss recipes.
        </p>
      </div>

      <Card className="mb-12 glass-card border-primary/20 shadow-lg overflow-hidden">
        <CardContent className="p-fluid-card">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="h-16 w-16 md:h-20 md:w-20 bg-green-500/10 rounded-full flex items-center justify-center">
                <WhatsAppIcon className="h-8 w-8 md:h-10 md:w-10 text-[#25D366]" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-fluid-h2 font-medium font-headline">Join the CookMitra Community</h2>
              <p className="text-fluid-body text-muted-foreground mt-2 mb-6">
                Share recipes, cooking tips, ask questions, and connect with other cooks in real-time.
              </p>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#1EBE57] text-white w-full sm:w-auto h-12 rounded-full px-10 shadow-lg shadow-green-500/20 font-bold">
                <Link href={WHATSAPP_INVITE_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Join WhatsApp Community
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-center gap-3 mb-10">
        <Button variant={activeFilter === 'Most Recent' ? 'default' : 'outline'} className="rounded-full px-8 h-11 text-xs font-bold uppercase tracking-widest" onClick={() => setActiveFilter('Most Recent')}>Most Recent</Button>
        <Button variant={activeFilter === 'Highest Rated' ? 'default' : 'outline'} className="rounded-full px-8 h-11 text-xs font-bold uppercase tracking-widest" onClick={() => setActiveFilter('Highest Rated')} disabled>Highest Rated</Button>
      </div>

      {isLoading && (
        <div className="flex justify-center py-24">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      )}
      
      {!isLoading && processedNotes.length > 0 && (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-fluid-grid">
            {processedNotes.map((note, idx) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: (idx % 12) * 0.08, ease: "easeOut" }}
              >
                <ReviewCard review={note} />
              </motion.div>
            ))}
        </div>
      )}

      {!isLoading && processedNotes.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="text-center py-20 border-dashed border-2 bg-card/40 backdrop-blur-md border-purple-500/20 rounded-[3rem] max-w-3xl mx-auto shadow-xl">
            <CardHeader className="p-8 pb-4">
              <div className="mx-auto bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 rounded-2xl p-6 w-24 h-24 flex items-center justify-center mb-6 shadow-sm">
                <MessageSquare className="h-12 w-12 stroke-[1.75]" />
              </div>
              <CardTitle className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">No Community Reviews Yet</CardTitle>
              <CardDescription className="text-sm sm:text-base font-medium text-stone-700 dark:text-stone-300 mt-3 max-w-md mx-auto leading-relaxed">
                Be the first to share your cooking experience, rating, or notes on any of our 934+ recipes!
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

