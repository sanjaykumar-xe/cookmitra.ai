import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { firestore } from "./config";
import type { User } from "firebase/auth";

export async function addUserToFirestore(user: User) {
    const userRef = doc(firestore, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
        const { displayName, email, photoURL } = user;
        try {
            await setDoc(userRef, {
                name: displayName,
                email,
                photoURL,
                createdAt: serverTimestamp(),
                language: 'English', // default language
                region: 'Any', // default region
            });
        } catch (error) {
            console.error("Error creating user document:", error);
        }
    }
}
