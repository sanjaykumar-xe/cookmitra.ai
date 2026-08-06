'use client';
import { useState, useEffect, useMemo } from 'react';
import { useUser, useFirestore, useDoc, useCollection, useMemoFirebase } from '@/firebase';
import { doc, collection, query, orderBy } from 'firebase/firestore';
import { StarRating } from '@/components/ui/star-rating';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, MessageSquare, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { submitReview, deleteReview } from '@/firebase/firestore/recipes';
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
    <Card className="mt-12 rounded-[2rem] border-border/60 overflow-hidden">
        <CardHeader className="text-center p-8 md:p-12 pb-0">
            <CardTitle className="font-headline text-3xl">Community Ratings & Notes</CardTitle>
            <CardDescription className="text-base">See what others think about {recipeName}.</CardDescription>
        </CardHeader>
        <CardContent className="p-8 md:p-12 space-y-12">
            
            <div className="flex flex-col items-center text-center space-y-4">
                <p className="font-headline text-7xl font-bold text-primary">{averageRating.toFixed(1)}</p>
                <div className="scale-150 py-2">
                    <StarRating rating={averageRating} readOnly size={24} />
                </div>
                <p className="text-sm font-medium text-muted-foreground">({ratingCount} {ratingCount === 1 ? 'rating' : 'ratings'})</p>
            </div>

            <Separator className="max-w-4xl mx-auto opacity-50" />

            <div className="max-w-[600px] mx-auto w-full">
                {user ? (
                    <form onSubmit={handleSubmit} className="space-y-8 bg-muted/30 p-8 rounded-3xl border border-border/40">
                        <div className="space-y-4 text-center">
                            <h4 className="font-headline text-2xl font-medium">Your Review</h4>
                            <div className="flex justify-center py-2">
                                <StarRating rating={userRating} onRatingChange={setUserRating} size={32} />
                            </div>
                            <p className="text-[12px] font-medium text-muted-foreground">Rate this recipe</p>
                        </div>
                        
                        <Textarea
                            placeholder="Share your experience or tips... (optional)"
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            rows={4}
                            className="bg-background rounded-2xl text-base p-4"
                        />
                        
                        <Button type="submit" size="lg" className="w-full rounded-full h-14 text-lg font-bold" disabled={isSubmitting || userRating === 0}>
                            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {previousRatingDoc ? 'Update Review' : 'Submit Review'}
                        </Button>
                    </form>
                ) : (
                    <div className="text-center p-12 border-2 border-dashed border-border/60 rounded-3xl bg-muted/10">
                        <p className="text-muted-foreground font-medium">You must be logged in to leave a review.</p>
                    </div>
                )}
            </div>

            <div className="space-y-8 max-w-4xl mx-auto w-full">
                <div className="flex items-center gap-4">
                    <h3 className="font-headline text-2xl font-medium shrink-0">Notes from the Community</h3>
                    <Separator className="flex-1 opacity-50" />
                </div>
                
                {areNotesLoading ? (
                    <div className="flex justify-center py-12"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
                ) : uniqueNotes.length > 0 ? (
                    <div className="grid gap-6">
                        {uniqueNotes.map(note => (
                            <div key={note.id} className="flex items-start gap-4 p-6 rounded-2xl bg-muted/20 border border-border/40 transition-all hover:bg-muted/30 group">
                                <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                                    <AvatarImage src={note.userPhotoURL ?? undefined} />
                                    <AvatarFallback className="bg-primary/10 text-primary font-bold">{note.userName?.[0].toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="font-bold text-lg leading-none mb-2">{note.userName}</p>
                                             <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                                                 {note.rating && <StarRating rating={note.rating} readOnly size={14} />}
                                                 {note.rating && <span className="opacity-40">/</span>}
                                                 <p>
                                                   {note.createdAt ? formatDistanceToNow(note.createdAt.toDate(), { addSuffix: true }) : ''}
                                                 </p>
                                            </div>
                                        </div>
                                        {user && user.uid === note.userId && (
                                            <Button 
                                                variant="ghost" 
                                                size="icon" 
                                                className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity"
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
                                    <p className="mt-4 text-base leading-relaxed text-foreground/80">{note.note}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 text-muted-foreground bg-muted/5 rounded-3xl border border-dashed border-border/40">
                        <MessageSquare className="mx-auto h-12 w-12 mb-4 opacity-20" />
                        <p className="text-lg font-medium">No notes yet. Be the first to share your thoughts!</p>
                    </div>
                )}
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

        </CardContent>
    </Card>
  )
}
