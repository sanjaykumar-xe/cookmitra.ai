
/**
 * @fileOverview Migration script to restructure Firestore recipes into multi-language objects.
 * SAFE VERSION: Only updates translatable fields and preserves all other metadata.
 * Includes a recovery map for known corrupted recipes.
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { genkit, z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

// Initialize Firebase
const firebaseApp = initializeApp({
    projectId: process.env.FIREBASE_PROJECT_ID || "cookmitra4-25997790-8cd72",
});
const db = getFirestore(firebaseApp);

// Initialize Genkit for translations
const ai = genkit({
    plugins: [googleAI()],
    model: 'googleai/gemini-1.5-flash',
});

const TranslationSchema = z.object({
    title: z.string(),
    description: z.string(),
    ingredients: z.array(z.string()),
    instructions: z.array(z.string()),
    tags: z.array(z.string()),
});

const MultiLangResponseSchema = z.object({
    ta: TranslationSchema,
    hi: TranslationSchema,
});

/** Recovery Map for corrupted data */
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

async function migrate() {
    const isDryRun = process.argv.includes('--dry-run');
    console.log(`🚀 Starting SAFE migration... ${isDryRun ? '(DRY RUN)' : ''}`);

    const recipesRef = collection(db, 'recipes');
    const snapshot = await getDocs(recipesRef);
    const total = snapshot.size;

    console.log(`Found ${total} recipes in collection.`);

    let successCount = 0;
    let failCount = 0;
    let skipCount = 0;

    for (const recipeDoc of snapshot.docs) {
        const count = successCount + failCount + skipCount + 1;
        const data = recipeDoc.data();
        const docId = recipeDoc.id;

        // Recovery Logic: If this is one of the corrupted recipes, we force a migration/fix pass
        const isCorrupted = !!RECOVERY_DATA[docId];
        
        // Skip check: title is already an object AND has translations
        const isAlreadyMigrated = data.title && typeof data.title === 'object' && ('ta' in data.title || 'hi' in data.title);
        
        if (isAlreadyMigrated && !isCorrupted) {
            console.log(`[${count}/${total}] Skipping already migrated: ${docId}`);
            skipCount++;
            continue;
        }

        console.log(`[${count}/${total}] Processing: ${data.name || data.title?.en || docId}`);

        try {
            // Prepare inputs for translation, handling both original and corrupted states
            const originalName = data.name || (typeof data.title === 'string' ? data.title : data.title?.en) || "Untitled";
            const originalDesc = data.description?.en || data.description || "";
            const originalIngs = data.ingredients?.en || data.ingredients || data.ingredientsList || [];
            const originalInst = data.instructions?.en || data.instructions || [];
            const originalTags = data.tags?.en || data.tags || [];

            const recipeToTranslate = {
                name: originalName,
                description: originalDesc,
                ingredients: originalIngs,
                instructions: originalInst,
                tags: originalTags
            };

            const prompt = `Translate the following Indian recipe content into Tamil (ta) and Hindi (hi). 
            Return ONLY a valid JSON object matching this schema:
            {
              "ta": { "title": "...", "description": "...", "ingredients": ["...", "..."], "instructions": ["...", "..."], "tags": ["...", "..."] },
              "hi": { "title": "...", "description": "...", "ingredients": ["...", "..."], "instructions": ["...", "..."], "tags": ["...", "..."] }
            }
            Use natural, culinary-accurate terms. 
            
            Recipe Data:
            ${JSON.stringify(recipeToTranslate, null, 2)}`;

            const { output } = await ai.generate({
                prompt,
                output: { schema: MultiLangResponseSchema }
            });

            if (!output) throw new Error("AI failed to return a valid translation object.");

            // SURGICAL UPDATE: Only modify translatable fields
            // We also include recovery fields if this document was previously corrupted
            const updatePayload: any = {
                title: {
                    en: originalName,
                    ta: output.ta.title,
                    hi: output.hi.title
                },
                description: {
                    en: originalDesc,
                    ta: output.ta.description,
                    hi: output.hi.description
                },
                ingredients: {
                    en: Array.isArray(originalIngs) ? originalIngs.map((i: any) => typeof i === 'string' ? i : (i.name || '')) : [],
                    ta: output.ta.ingredients,
                    hi: output.hi.ingredients
                },
                instructions: {
                    en: originalInst,
                    ta: output.ta.instructions,
                    hi: output.hi.instructions
                },
                tags: {
                    en: originalTags,
                    ta: output.ta.tags,
                    hi: output.hi.tags
                }
            };

            // If we have recovery data for this specific recipe, inject it back
            if (RECOVERY_DATA[docId]) {
                console.log(`⚠️  Applying recovery metadata for ${docId}`);
                Object.assign(updatePayload, RECOVERY_DATA[docId]);
            }

            if (isDryRun) {
                console.log(`[DRY RUN] Would surgically update ${docId}`);
            } else {
                await updateDoc(doc(db, 'recipes', docId), updatePayload);
                console.log(`✅ surgically updated ${docId}`);
            }
            successCount++;

            // Rate limiting for Free Tier (Gemini)
            await new Promise(resolve => setTimeout(resolve, 3500));

        } catch (error: any) {
            console.error(`❌ Failed processing ${docId}:`, error.message);
            failCount++;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    console.log('\n--- Safe Migration Summary ---');
    console.log(`Total Docs Checked: ${total}`);
    console.log(`Successfully Updated: ${successCount}`);
    console.log(`Skipped: ${skipCount}`);
    console.log(`Failed: ${failCount}`);
    console.log('------------------------------');
}

migrate().catch(console.error);
