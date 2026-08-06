'use client';

import { doc, setDoc, getDoc, serverTimestamp, type Firestore, runTransaction } from "firebase/firestore";
import type { User } from "firebase/auth";
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

export async function addUserToFirestore(firestore: Firestore, user: User, name: string) {
    const userRef = doc(firestore, "users", user.uid);

    try {
        await runTransaction(firestore, async (transaction) => {
            const userDoc = await transaction.get(userRef);
            if (!userDoc.exists()) {
                const { email, photoURL } = user;
                const newUserData = {
                    id: user.uid,
                    name: name,
                    email,
                    photoURL,
                    createdAt: serverTimestamp(),
                    languagePreference: 'en',
                    regionPreference: 'North',
                };
                transaction.set(userRef, newUserData);
            }
        });
    } catch (error: any) {
        console.error("Error in addUserToFirestore transaction:", error);
         if (error.code !== 'unavailable') {
            const permissionError = new FirestorePermissionError({
                path: userRef.path,
                operation: 'write', // Generic operation for a transaction
            });
            errorEmitter.emit('permission-error', permissionError);
        }
        throw error;
    }
}
