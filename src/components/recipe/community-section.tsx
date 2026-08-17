'use client';
import { useState, useEffect, useMemo } from 'react';
import { useUser, useFirestore, useDoc, useCollection, useMemoFirebase } from '@/lib/firebase';
import { doc, collection, query, orderBy } from 'firebase/firestore';
import { StarRating } from '@/components/ui/star-rating';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, MessageSquare, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { submitReview, deleteReview } from '@/lib/firebase/firestore/recipes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface CommunitySectionProps {
  recipeId: string;
  recipeName: string;
}

type Note = {
  id: string;
  userId: string;
  userName: string;
  userPhotoURL: string | null;
  note: string;
  createdAt: { toDate: () => Date };
  rating?: number;
  recipeId: string;
  recipeName: string;
}

export function CommunitySection({ recipeId, recipeName }: CommunitySectionProps) {
  const { user } = useUser();
  const firestore = useFirestore();
  const { toast } = useToast();

  const [userRating, setUserRating] = useState(0);
  const [noteText, setNoteText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState<Note | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch recipe metadata (avg rating, count)
  const recipeMetaRef = useMemoFirebase(() => firestore ? doc(firestore, 'recipes', recipeId) : null, [firestore, recipeId]);
  const { data: recipeMeta } = useDoc<{averageRating: number, ratingCount: number}>(recipeMetaRef);

  // Fetch user's previous rating
  const userRatingRef = useMemoFirebase(() => (firestore && user) ? doc(firestore, `recipes/${recipeId}/ratings`, user.uid) : null, [firestore, user, recipeId]);
  const { data: previousRatingDoc } = useDoc<{rating: number}>(userRatingRef);
  
  // Fetch user's previous note to pre-fill the form
  const userNoteRef = useMemoFirebase(() => (firestore && user) ? doc(firestore, `recipes/${recipeId}/notes`, user.uid) : null, [firestore, user, recipeId]);
  const { data: previousNoteDoc } = useDoc<Note>(userNoteRef);

  // Fetch community notes
  const notesQuery = useMemoFirebase(() => firestore ? query(collection(firestore, `recipes/${recipeId}/notes`), orderBy('createdAt', 'desc')) : null, [firestore, recipeId]);
  const { data: notes, isLoading: areNotesLoading } = useCollection<Note>(notesQuery);

  const uniqueNotes = useMemo(() => {
      if (!notes) return [];
      const seen = new Set();
      return notes.filter(note => {
          if (seen.has(note.userId)) return false;
          seen.add(note.userId);
          return true;
      });
  }, [notes]);

  useEffect(() => {
    if (previousRatingDoc) {
      setUserRating(previousRatingDoc.rating);
    }
    if (previousNoteDoc) {
      setNoteText(previousNoteDoc.note);
    }
  }, [previousRatingDoc, previousNoteDoc]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !firestore) {
      toast({ variant: 'destructive', title: 'You must be logged in to leave a review.' });
      return;
    }
    if (userRating === 0) {
        toast({ variant: 'destructive', title: 'Please select a rating before submitting.' });
        return;
    }

    setIsSubmitting(true);
    try {
        await submitReview(firestore, recipeId, recipeName, user, userRating, noteText);
        toast({ title: previousRatingDoc ? 'Review updated!' : 'Review submitted!', description: 'Thank you for your feedback.' });
    } catch (error) {
        console.error(error);
        toast({ variant: 'destructive', title: 'Failed to save review', description: 'There was an error saving your review. Please try again.'});
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!reviewToDelete || !user || !firestore) return;

    if (typeof reviewToDelete.rating !== 'number') {
        toast({ variant: 'destructive', title: 'Cannot delete review without rating data.' });
        setReviewToDelete(null);
        return;
    }

    setIsDeleting(true);
    try {
        await deleteReview(firestore, recipeId, user.uid, reviewToDelete.id, reviewToDelete.rating);
        toast({ title: 'Your review was deleted.' });
        if (reviewToDelete.userId === user.uid) {
          setUserRating(0);
          setNoteText('');
        }
    } catch (error) {
        console.error(error);
        toast({ variant: 'destructive', title: 'Failed to delete review', description: 'There was an error. Please try again.' });
    } finally {
        setIsDeleting(false);
        setReviewToDelete(null);
    }
  };


  const averageRating = recipeMeta?.averageRating ?? 0;
  const ratingCount = recipeMeta?.ratingCount ?? 0;

  return (
    <div className="mt-16 space-y-10">
        {/* SECTION HEADER & AVERAGE RATING BANNER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-stone-200 dark:border-stone-800 pb-8">
            <div>
                <h2 className="font-headline text-3xl font-semibold text-stone-900 dark:text-stone-100">
                    Community Reviews & Ratings
                </h2>
                <p className="text-sm text-stone-500 mt-1">
                    See what home cooks think about {recipeName}
                </p>
            </div>

            <div className="flex items-center gap-4 bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 px-6 py-3 rounded-full shrink-0">
                <span className="font-headline text-3xl font-bold text-[#F4A21A]">
                    {averageRating.toFixed(1)}
                </span>
                <div className="flex flex-col">
                    <StarRating rating={averageRating} readOnly size={18} />
                    <span className="text-[11px] font-semibold text-stone-500 mt-0.5">
                        {ratingCount} {ratingCount === 1 ? 'review' : 'reviews'}
                    </span>
                </div>
            </div>
        </div>

        {/* REVIEW FORM & COMMUNITY NOTES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* REVIEW SUBMISSION FORM */}
            <div className="lg:col-span-5">
                {user ? (
                    <form onSubmit={handleSubmit} className="space-y-5 bg-card/80 backdrop-blur-sm p-6 sm:p-8 rounded-[2.5rem] border border-stone-200/80 dark:border-stone-800/80 shadow-xs">
                        <div className="space-y-2 text-center">
                            <h3 className="font-headline text-xl font-medium text-stone-900 dark:text-stone-100">Your Review</h3>
                            <div className="flex justify-center py-1">
                                <StarRating rating={userRating} onRatingChange={setUserRating} size={30} />
                            </div>
                            <p className="text-xs text-stone-400">Click stars to rate this recipe</p>
                        </div>
                        
                        <Textarea
                            placeholder="Share your experience or tips... (optional)"
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            rows={4}
                            className="bg-background border-stone-200 dark:border-stone-800 rounded-2xl text-sm p-4 focus:border-[#F4A21A] focus:ring-amber-500/20 resize-none"
                        />
                        
                        <Button 
                            type="submit" 
                            variant="secondary"
                            className="w-full rounded-full h-12 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-md shadow-amber-500/20 border-0 transition-all active:scale-[0.99]" 
                            disabled={isSubmitting}
                        >
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {previousRatingDoc ? 'Update Review' : 'Submit Review'}
                        </Button>
                    </form>
                ) : (
                    <div className="text-center p-8 border border-dashed border-stone-300 dark:border-stone-800 rounded-[2.5rem] bg-stone-50/50 dark:bg-stone-900/30">
                        <p className="text-stone-500 text-sm font-medium">Log in to share your review & tips!</p>
                    </div>
                )}
            </div>

            {/* COMMUNITY REVIEWS LIST STREAM */}
            <div className="lg:col-span-7 space-y-4">
                <h3 className="font-headline text-xl font-medium text-stone-900 dark:text-stone-100">Notes from the Community</h3>
                
                {areNotesLoading ? (
                    <div className="flex justify-center py-12"><Loader2 className="h-8 w-8 animate-spin text-[#F4A21A]" /></div>
                ) : uniqueNotes.length > 0 ? (
                    <div className="space-y-4">
                        {uniqueNotes.map(note => (
                            <div key={note.id} className="flex items-start gap-4 p-5 rounded-[2rem] bg-card/80 border border-stone-200/80 dark:border-stone-800/80 shadow-xs hover:border-amber-500/30 transition-all group">
                                <Avatar className="h-11 w-11 border-2 border-background shadow-xs shrink-0">
                                    <AvatarImage src={note.userPhotoURL ?? undefined} />
                                    <AvatarFallback className="bg-amber-500/10 text-[#F4A21A] font-bold">{note.userName?.[0].toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="font-semibold text-base leading-none mb-1.5 text-stone-900 dark:text-stone-100">{note.userName}</p>
                                             <div className="flex items-center gap-2 text-xs text-stone-400">
                                                 {note.rating && <StarRating rating={note.rating} readOnly size={14} />}
                                                 {note.rating && <span className="opacity-40">•</span>}
                                                 <p>
                                                   {note.createdAt ? formatDistanceToNow(note.createdAt.toDate(), { addSuffix: true }) : ''}
                                                 </p>
                                             </div>
                                        </div>
                                        {user && user.uid === note.userId && (
                                            <Button 
                                                variant="ghost" 
                                                size="icon" 
                                                className="h-8 w-8 text-stone-400 hover:text-rose-600 hover:bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    setReviewToDelete(note);
                                                }}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{note.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center p-10 rounded-[2.5rem] border border-dashed border-stone-200/80 dark:border-stone-800/80 bg-stone-50/50 dark:bg-stone-900/30 space-y-2">
                        <MessageSquare className="mx-auto h-8 w-8 text-amber-500/50" />
                        <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">No notes shared yet</p>
                        <p className="text-xs text-stone-400">Be the first to rate & share your cooking experience!</p>
                    </div>
                )}
            </div>
        </div>

        <AlertDialog open={!!reviewToDelete} onOpenChange={(open) => !open && setReviewToDelete(null)}>
            <AlertDialogContent className="rounded-3xl p-8">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl font-headline">Delete Review?</AlertDialogTitle>
                    <AlertDialogDescription className="text-base">
                        This action cannot be undone. This will permanently remove your feedback and rating for this recipe.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="mt-6 gap-3">
                    <AlertDialogCancel className="rounded-full h-12 px-6" onClick={() => setReviewToDelete(null)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="rounded-full h-12 px-6 bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={handleConfirmDelete} disabled={isDeleting}>
                        {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Delete Review
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>
  );
}
