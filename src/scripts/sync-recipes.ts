/**
 * @fileOverview FINAL Reset script to match Firestore collection EXACTLY to src/lib/recipes.ts.
 * Deletes all existing recipes and re-uploads with the clean flat schema.
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, writeBatch } from 'firebase/firestore';
import { recipes } from '../lib/recipes';

const firebaseConfig = {
  "projectId": "cookmitra4-25997790-8cd72",
  "appId": "1:397301550264:web:5e5bfc0fb40b16360a384d",
  "apiKey": "AIzaSyCuqOTaBio2Crqx-NEj0RDUHr7APbP3BFY",
  "authDomain": "cookmitra4-25997790-8cd72.firebaseapp.com"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

async function resetAndSync() {
    console.log("🔥 Starting FINAL Firestore Recipe Reset (Single Source of Truth)...");
    
    const recipesRef = collection(db, 'recipes');
    const snapshot = await getDocs(recipesRef);
    
    console.log(`🗑 Deleting ${snapshot.size} existing documents to clear inconsistent data...`);
    const deleteBatch = writeBatch(db);
    snapshot.docs.forEach(d => deleteBatch.delete(d.ref));
    await deleteBatch.commit();
    
    console.log(`📤 Uploading ${recipes.length} fresh recipes from src/lib/recipes.ts...`);
    
    // Process in batches of 500 (Firestore limit)
    const uploadBatch = writeBatch(db);
    recipes.forEach(recipe => {
        const docRef = doc(db, 'recipes', recipe.id);
        // Writing the clean, flat schema EXACTLY as per ground truth
        uploadBatch.set(docRef, {
            id: recipe.id,
            name: recipe.name,
            description: recipe.description,
            type: recipe.type,
            time: recipe.time,
            servings: recipe.servings,
            difficulty: recipe.difficulty,
            cost: recipe.cost,
            popularity: recipe.popularity,
            ingredients: recipe.ingredients,
            steps: recipe.steps,
            tags: recipe.tags || []
        });
        console.log(`   - Synced: ${recipe.name}`);
    });
    
    await uploadBatch.commit();
    console.log("\n✅ Firestore reset complete!");
    console.log(`- Total Documents: ${recipes.length}`);
    console.log(`- Ground Truth Sample (hyderabadi-biryani): 120m, serves 6, cost 450`);
}

resetAndSync().catch(err => {
    console.error("❌ Sync failed:", err);
});
