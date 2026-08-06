
'use client';
/**
 * @fileOverview Firestore services for managing the user's persistent pantry inventory.
 */

import { 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  updateDoc, 
  serverTimestamp, 
  type Firestore 
} from 'firebase/firestore';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

export type PantryItem = {
  id: string;
  name: string;
  quantity: string;
  category: string;
  addedAt?: any;
};

/**
 * Adds a new ingredient to the user's pantry.
 */
export async function addPantryItem(firestore: Firestore, userId: string, item: Omit<PantryItem, 'id' | 'addedAt'>) {
  const colRef = collection(firestore, `users/${userId}/pantry`);
  const data = { 
    ...item, 
    name: item.name.trim(),
    addedAt: serverTimestamp() 
  };
  try {
    return await addDoc(colRef, data);
  } catch (e) {
    errorEmitter.emit('permission-error', new FirestorePermissionError({
      path: colRef.path,
      operation: 'create',
      requestResourceData: data
    }));
    throw e;
  }
}

/**
 * Removes an ingredient from the user's pantry.
 */
export async function deletePantryItem(firestore: Firestore, userId: string, itemId: string) {
  const docRef = doc(firestore, `users/${userId}/pantry`, itemId);
  try {
    await deleteDoc(docRef);
  } catch (e) {
    errorEmitter.emit('permission-error', new FirestorePermissionError({
      path: docRef.path,
      operation: 'delete'
    }));
    throw e;
  }
}

/**
 * Updates an existing pantry item (e.g., quantity or category).
 */
export async function updatePantryItem(firestore: Firestore, userId: string, itemId: string, data: Partial<PantryItem>) {
  const docRef = doc(firestore, `users/${userId}/pantry`, itemId);
  try {
    await updateDoc(docRef, data);
  } catch (e) {
    errorEmitter.emit('permission-error', new FirestorePermissionError({
      path: docRef.path,
      operation: 'update',
      requestResourceData: data
    }));
    throw e;
  }
}
