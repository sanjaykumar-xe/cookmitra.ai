'use client';

import {
  collection,
  addDoc,
  serverTimestamp,
  type Firestore,
  DocumentReference,
  doc,
  deleteDoc,
  runTransaction,
} from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import type { User } from 'firebase/auth';

/**
 * Saves a recipe to the user's personal subcollection.
 * Uses the flat ground-truth schema properties.
 */
export async function saveRecipe(
  firestore: Firestore,
  userId: string,
  recipe: any
): Promise<DocumentReference> {
  const recipesRef = collection(firestore, `users/${userId}/recipes`);
  
  // Strictly enforce the flat ground-truth property names when saving
  const recipeData = {
    id: recipe.id || doc(recipesRef).id,
    name: recipe.name || recipe.dishName || "Untitled Recipe",
    description: recipe.description || "",
    type: recipe.type || "Vegetarian",
    time: recipe.time || recipe.cookingTime || 0,
    servings: recipe.servings || 2,
    difficulty: recipe.difficulty || "Medium",
    cost: recipe.cost || recipe.estimatedCost || 0,
    ingredients: recipe.ingredients || [],
    steps: recipe.steps || recipe.instructions || [],
    tags: recipe.tags || [],
    userId: userId,
    savedAt: serverTimestamp(),
  };

  try {
    const docRef = await addDoc(recipesRef, recipeData);
    return docRef;
  } catch (serverError) {
    const permissionError = new FirestorePermissionError({
        path: recipesRef.path,
        operation: 'create',
        requestResourceData: recipeData,
    });
    errorEmitter.emit('permission-error', permissionError);
    throw serverError;
  }
}

export async function deleteRecipe(
  firestore: Firestore,
  userId: string,
  recipeId: string
): Promise<void> {
  const recipeRef = doc(firestore, `users/${userId}/recipes`, recipeId);
  try {
    await deleteDoc(recipeRef);
  } catch (serverError) {
     const permissionError = new FirestorePermissionError({
      path: recipeRef.path,
      operation: 'delete',
    });
    errorEmitter.emit('permission-error', permissionError);
    throw serverError;
  }
}

export async function submitReview(
  firestore: Firestore,
  recipeId: string,
  recipeName: string,
  user: User,
  rating: number,
  note: string
) {
  const recipeRef = doc(firestore, 'recipes', recipeId);
  const ratingRef = doc(firestore, 'recipes', recipeId, 'ratings', user.uid);
  const noteRef = doc(firestore, 'recipes', recipeId, 'notes', user.uid);

  try {
    await runTransaction(firestore, async (transaction) => {
      const recipeDoc = await transaction.get(recipeRef);
      const userRatingDoc = await transaction.get(ratingRef);
      const userNoteDoc = await transaction.get(noteRef);

      const oldRating = userRatingDoc.exists() ? userRatingDoc.data().rating : 0;

      let newRatingCount = recipeDoc.exists() ? recipeDoc.data().ratingCount || 0 : 0;
      let newAverageRating = recipeDoc.exists() ? recipeDoc.data().averageRating || 0 : 0;

      if (userRatingDoc.exists()) {
        newAverageRating = (newAverageRating * newRatingCount - oldRating + rating) / newRatingCount;
      } else {
        newRatingCount += 1;
        newAverageRating = (newAverageRating * (newRatingCount - 1) + rating) / newRatingCount;
      }
      
      if (recipeDoc.exists()) {
          transaction.update(recipeRef, {
            ratingCount: newRatingCount,
            averageRating: newAverageRating,
          });
      } else {
          transaction.set(recipeRef, {
            ratingCount: newRatingCount,
            averageRating: newAverageRating,
            name: recipeName // Fallback to store name if root doc doesn't exist
          });
      }

      transaction.set(ratingRef, { rating, updatedAt: serverTimestamp() });
      
      if (note.trim()) {
        transaction.set(noteRef, {
          userId: user.uid,
          userName: user.displayName,
          userPhotoURL: user.photoURL,
          note: note,
          createdAt: serverTimestamp(),
          rating: rating,
          recipeId: recipeId,
          recipeName: recipeName,
        }, { merge: true });
      } else if (userNoteDoc.exists()) {
        // Only attempt to delete if a note actually exists to avoid rule conflicts
        transaction.delete(noteRef);
      }
    });
  } catch (serverError) {
    const permissionError = new FirestorePermissionError({
      path: recipeRef.path,
      operation: 'write',
      requestResourceData: { rating, note },
    });
    errorEmitter.emit('permission-error', permissionError);
    throw serverError;
  }
}

export async function deleteReview(
  firestore: Firestore,
  recipeId: string,
  userId: string,
  reviewId: string,
  oldRating: number
) {
  const recipeRef = doc(firestore, 'recipes', recipeId);
  const ratingRef = doc(firestore, 'recipes', recipeId, 'ratings', userId);
  const noteRef = doc(firestore, 'recipes', recipeId, 'notes', reviewId);

  try {
    await runTransaction(firestore, async (transaction) => {
      const recipeDoc = await transaction.get(recipeRef);
      if (!recipeDoc.exists()) return;

      const data = recipeDoc.data();
      let newRatingCount = data.ratingCount || 0;
      let newAverageRating = data.averageRating || 0;

      if (newRatingCount > 1) {
        newAverageRating = (newAverageRating * newRatingCount - oldRating) / (newRatingCount - 1);
        newRatingCount -= 1;
      } else {
        newAverageRating = 0;
        newRatingCount = 0;
      }

      transaction.update(recipeRef, {
        ratingCount: newRatingCount,
        averageRating: newAverageRating,
      });

      transaction.delete(ratingRef);
      transaction.delete(noteRef);
    });
  } catch (serverError) {
    const permissionError = new FirestorePermissionError({
      path: recipeRef.path,
      operation: 'write',
    });
    errorEmitter.emit('permission-error', permissionError);
    throw serverError;
  }
}
