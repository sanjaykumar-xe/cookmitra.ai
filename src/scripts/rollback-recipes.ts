/**
 * @fileOverview FINAL Rollback script to flatten Firestore recipes back into simple strings
 * and restore corrupted metadata for the 107 recipe collection.
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';

// Initialize Firebase
const firebaseApp = initializeApp({
    projectId: "cookmitra4-25997790-8cd72",
});
const db = getFirestore(firebaseApp);

/** Recovery Map for corrupted data identified in Turn 5-6 */
const RECOVERY_DATA: Record<string, any> = {
    "butter-chicken": {
        cookingTime: 35,
        servings: 4,
        difficulty: "Easy",
        estimatedCost: 280,
    },
    "chicken-biryani": {
        cookingTime: 45,
        servings: 4,
        difficulty: "Medium",
        estimatedCost: 350,
    }
};

async function rollback() {
    console.log(`🚀 Starting DEFINITIVE ROLLBACK to flat English schema...`);

    const recipesRef = collection(db, 'recipes');
    const snapshot = await getDocs(recipesRef);
    const total = snapshot.size;

    console.log(`Found ${total} recipes in collection.`);

    let successCount = 0;
    let failCount = 0;

    for (const recipeDoc of snapshot.docs) {
        const data = recipeDoc.data();
        const docId = recipeDoc.id;

        try {
            const flatPayload: any = {};

            // 1. Promote 'en' values if fields are currently objects
            if (data.title && typeof data.title === 'object' && 'en' in data.title) {
                flatPayload.title = data.title.en;
            }
            if (data.description && typeof data.description === 'object' && 'en' in data.description) {
                flatPayload.description = data.description.en;
            }
            if (data.ingredients && typeof data.ingredients === 'object' && 'en' in data.ingredients) {
                flatPayload.ingredients = data.ingredients.en;
            }
            if (data.instructions && typeof data.instructions === 'object' && 'en' in data.instructions) {
                flatPayload.instructions = data.instructions.en;
            }
            if (data.tags && typeof data.tags === 'object' && 'en' in data.tags) {
                flatPayload.tags = data.tags.en;
            }

            // 2. Fix metadata corruption (recover from 0 values)
            if (RECOVERY_DATA[docId]) {
                console.log(`⚠️  Injecting recovery metadata for ${docId}`);
                Object.assign(flatPayload, RECOVERY_DATA[docId]);
            } else {
                // For other recipes, if cookingTime is 0 but an old 'time' field exists, promote it
                if (!data.cookingTime && data.time) flatPayload.cookingTime = data.time;
                if (!data.estimatedCost && data.cost) flatPayload.estimatedCost = data.cost;
            }

            // 3. Ensure 'type' exists so filtering works correctly
            if (!data.type) {
                flatPayload.type = "Vegetarian"; // Default safe fallback for display
            }

            // Only update if there are changes to make
            if (Object.keys(flatPayload).length > 0) {
                await updateDoc(doc(db, 'recipes', docId), flatPayload);
                console.log(`✅ successfully flattened and recovered ${docId}`);
            } else {
                console.log(`Skipping already flat doc: ${docId}`);
            }
            
            successCount++;

        } catch (error: any) {
            console.error(`❌ Failed processing ${docId}:`, error.message);
            failCount++;
        }
    }

    console.log('\n--- Rollback Summary ---');
    console.log(`Total Docs Processed: ${total}`);
    console.log(`Successfully Updated: ${successCount}`);
    console.log(`Failed: ${failCount}`);
    console.log('------------------------------');
}

rollback().catch(console.error);
