# CookMitra AI — Complete API & Models Specification

*Document Version: 1.0*  
*Last Updated: September 2026*  
*Target Environment: Next.js 15 App Router on Vercel with Google Genkit, Groq Cloud & Firebase SDK v11*

---

## 1. Executive Summary & Architecture Overview

CookMitra AI leverages a **hybrid, dual-provider AI pipeline** paired with **Google Cloud Firebase** and **modern Web Standard Device APIs** to provide real-time, low-latency, resilient culinary experiences:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                    COOKMITRA AI UI                                     │
│               (Next.js 15 App Router · React 19 · Tailwind CSS · TypeScript)            │
└────────────────┬───────────────────────────┬───────────────────────────┬───────────────┘
                 │                           │                           │
                 ▼                           ▼                           ▼
      ┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
      │    Google Genkit    │     │   Groq Cloud SDK    │     │  Firebase SDK v11   │
      │  (Gemini 2.5 Flash) │     │ (GPT OSS 120B & 20B)│     │  (Auth & Firestore) │
      └──────────┬──────────┘     └──────────┬──────────┘     └──────────┬──────────┘
                 │                           │                           │
                 ├─ Recipe Generation        ├─ Chef Momo Chat           ├─ User Profiles
                 ├─ Recipe Refinement        ├─ Single-Meal Swapping     ├─ Saved Recipes
                 ├─ 7-Day Meal Planning      └─ High-Speed Fallback      ├─ Pantry Inventory
                 ├─ Healing Foods Flow                                   ├─ Community Reviews
                 └─ Missing Ingredients Tool                             └─ Recipe Star Ratings
```

---

## 2. Comprehensive AI Models Inventory

| Model ID | Provider / Engine | Primary Role | Invocations / Location | Output Format | Rate Limit Tier |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`googleai/gemini-2.5-flash`** | Google Genkit (`@genkit-ai/google-genai`) | Multi-constraint recipe generation, meal planning, dietary analysis, ingredient shopping | `src/ai/genkit.ts`<br>`src/ai/flows/*.ts` | Strict Zod JSON Schema | Free / Developer (15 RPM / 1M TPM) |
| **`openai/gpt-oss-120b`** | Groq Cloud SDK (`groq-sdk`) | High-intelligence fallback for recipe generation; single-meal swapping in meal planner | `src/ai/flows/generate-indian-recipe.ts`<br>`src/app/actions.ts` | JSON Object (`response_format: { type: 'json_object' }`) | Free / Dev Tier (1,000 RPM / 250,000 TPM) |
| **`openai/gpt-oss-20b`** | Groq Cloud SDK (`groq-sdk`) | Conversational AI culinary assistant (**Chef Momo**) | `src/app/ai-chat/actions.ts` | Markdown text with multilingual Indic support | Free / Dev Tier (1,000 RPM / 250,000 TPM) |

---

## 3. Deep Dive: Model Usage by Feature & File

### 3.1 AI Recipe Generator
- **Primary Model**: `googleai/gemini-2.5-flash`
- **Fallback Model**: `openai/gpt-oss-120b` (Groq SDK)
- **File**: [`src/ai/flows/generate-indian-recipe.ts`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/ai/flows/generate-indian-recipe.ts)
- **User-Facing UI**: [`src/app/ai-recipes/page.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/app/ai-recipes/page.tsx)
- **Input Parameters**:
  ```typescript
  interface GenerateIndianRecipeInput {
    ingredients: string;        // e.g. "Paneer, Capsicum, Onion"
    budget: number;             // in INR (₹50 to ₹1000+)
    cookingTime: number;        // in minutes (10 to 90)
    dietaryPreference: string;  // "Vegetarian" | "Non-Vegetarian" | "Vegan"
    region: string;             // "South Indian" | "North Indian" | etc.
    numberOfPersons: number;    // Servings scale (1 to 10)
  }
  ```
- **Output Schema**: Validated via `GenerateIndianRecipeOutputSchema` ([`src/ai/schemas/recipe-schemas.ts`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/ai/schemas/recipe-schemas.ts)):
  - `name`: string
  - `description`: string
  - `time`: number (minutes)
  - `cost`: number (INR)
  - `servings`: number
  - `difficulty`: `"Easy" | "Medium" | "Hard"`
  - `ingredients`: `Array<{ name: string; qty: string; category: string }>`
  - `steps`: `string[]`
  - `missingIngredients`: `string[]`
  - `reheatingInstructions`: `string[]`
  - `storageInstructions`: `string[]`
- **Resilience Mechanism**:
  If Gemini 2.5 Flash encounters rate limits (HTTP 429), timeouts, or network errors, `generateIndianRecipe` intercepts the exception in line 16 and automatically routes the prompt to Groq using `openai/gpt-oss-120b` with structured JSON mode.

---

### 3.2 Conversational Recipe Refinement
- **Model**: `googleai/gemini-2.5-flash`
- **File**: [`src/ai/flows/refine-indian-recipe.ts`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/ai/flows/refine-indian-recipe.ts)
- **User-Facing UI**: [`src/app/ai-recipes/page.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/app/ai-recipes/page.tsx)
- **Mechanism**:
  Takes the existing generated recipe JSON along with a user's natural language modification (e.g., *"make it less spicy"*, *"replace cream with cashew paste"*, *"scale for 6 people"*). It keeps unaffected steps and ingredients intact while updating nutritional metrics, costs, and steps.

---

### 3.3 Healthy Weekly Meal Planner
- **Primary Generator Model**: `googleai/gemini-2.5-flash`
- **Single-Meal Swapping Model**: `openai/gpt-oss-120b` (Groq SDK)
- **Files**:
  - Full Week Generator: [`src/ai/flows/generate-healthy-meal-plan.ts`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/ai/flows/generate-healthy-meal-plan.ts)
  - Single Meal Swapper: [`src/app/actions.ts`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/app/actions.ts) (`swapSingleMealAction`)
- **User-Facing UI**: [`src/app/healthy-meal-planner/page.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/app/healthy-meal-planner/page.tsx)
- **Rules & Constraints**:
  - Generates exactly 7 days (Monday through Sunday).
  - Every day has exactly 4 meal slots: `Breakfast` (25% calories), `Lunch` (40% calories), `Snacks` (10–15% light tea-time item), `Dinner` (25% calories).
  - Calculates specific macros (Calories, Protein in grams, Carbs in grams, Fats in grams) for every dish.
  - Scales ingredient quantities automatically based on household size ($1$ to $8+$ people).
- **Single-Meal Swapping (`swapSingleMealAction`)**:
  Allows users to click a "Swap" button on any meal card. It calls Groq's `openai/gpt-oss-120b` to generate an authentic, culturally aligned replacement meal in under 800ms without regenerating the entire 7-day schedule.

---

### 3.4 Healing Foods & Therapeutic Nutrition
- **Model**: `googleai/gemini-2.5-flash`
- **File**: [`src/ai/flows/generate-healing-foods-flow.ts`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/ai/flows/generate-healing-foods-flow.ts)
- **Action Wrapper**: [`src/app/actions.ts`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/app/actions.ts) (`generateHealingFoodsAction`)
- **User-Facing UI**: [`src/app/healing-foods/page.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/app/healing-foods/page.tsx)
- **Capabilities**:
  - Analyzes any medical or lifestyle condition (e.g., *Type 2 Diabetes*, *PCOS*, *Hypertension*, *Acid Reflux*, *Iron-Deficiency Anemia*).
  - Strict 4:4 Parity: Synthesizes exactly 4 therapeutic Indian foods to consume and 4 foods to limit or avoid.
  - Maps conditions into standardized `healthTags` (`diabetes-friendly`, `pcos-friendly`, `heart-healthy`, etc.) which link directly into the 935-recipe database to recommend matching dishes.

---

### 3.5 Missing Ingredients & Retailer Product Link Tool
- **Model**: `googleai/gemini-2.5-flash`
- **File**: [`src/ai/flows/suggest-missing-ingredients.ts`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/ai/flows/suggest-missing-ingredients.ts)
- **Tool Definition (`getRetailerProductLink`)**:
  A Genkit tool that computes direct product search URLs across major Indian quick-commerce and grocery platforms:
  - **Zepto**: `https://www.zepto.com/search?q={ingredient}`
  - **Pluckk**: `https://www.pluckk.com/search?q={ingredient}`
  - **Foodstories**: `https://www.foodstories.com/search?q={ingredient}`
  - **JioMart**: `https://www.jiomart.com/search?q={ingredient}`
- **Execution**: The AI automatically executes the tool for every detected missing ingredient and populates deep links directly into the recipe view.

---

### 3.6 Chef Momo AI Culinary Chat
- **Model**: `openai/gpt-oss-20b` (Groq SDK)
- **File**: [`src/app/ai-chat/actions.ts`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/app/ai-chat/actions.ts)
- **User-Facing UI**: [`src/app/ai-chat/page.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/app/ai-chat/page.tsx) and floating widget [`src/components/layout/floating-chat.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/components/layout/floating-chat.tsx)
- **Key Engineering Highlights**:
  1. **Sub-Second Latency**: Delivers near-instant conversational responses via Groq's LPU inference engine.
  2. **Multilingual Script Support**: Generates natural text in Tamil (`தமிழ்`), Hindi (`हिन्दी`), or English depending on user selection.
  3. **Strict Scope & Off-Topic Boundary**: Enforces strict culinary guardrails. General knowledge, coding, politics, homework, or entertainment queries are politely declined and warmly redirected back to food and cooking.
  4. **Conversational Meta-Questions**: Handles benign queries about Chef Momo's identity, memory, and role warmly without triggering rejection.
  5. **Empathetic Comfort Food Protocol**: Detects health complaints (e.g., *"I have a cold/fever/headache"*) and responds with warmth, advises consulting a doctor, and suggests one mild nourishing comfort food (such as light moong dal khichdi or warm turmeric milk).

---

## 4. Backend & Cloud APIs (Firebase SDK v11)

CookMitra AI uses **Firebase SDK `11.9.1`** with both client-side reactive hooks and server-side utilities.

### 4.1 Firebase Authentication (`firebase/auth`)
- **Files**: [`src/lib/firebase/auth.ts`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/lib/firebase/auth.ts), [`src/lib/firebase/provider.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/lib/firebase/provider.tsx)
- **Methods Implemented**:
  - `signInAnonymously`: Allows instant trial sessions without signup friction.
  - `signInWithEmailAndPassword` & `createUserWithEmailAndPassword`: Standard email authentication.
  - `sendPasswordResetEmail`: Password recovery.
  - `sendEmailVerification`: New account security validation.
  - `updateProfile`: Display name and avatar synchronization.

### 4.2 Firebase Cloud Firestore (`firebase/firestore`)
- **Files**: [`src/lib/firebase/firestore/`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/lib/firebase/firestore/)
- **Custom Reactive Hooks**:
  - `useDoc(docRef)`: Reactive real-time document subscription.
  - `useCollection(queryRef)`: Reactive real-time query listener.
  - `useMemoFirebase(...)`: Memoizes Firestore query references to prevent re-render thrashing.
- **Collections & Data Architecture**:
  | Collection Path | Purpose | Key Fields |
  | :--- | :--- | :--- |
  | `users/{userId}` | User profile & preferences | `displayName`, `email`, `dietPreference`, `cuisinePreference`, `language` |
  | `users/{userId}/recipes/{recipeId}` | Saved cookbook / bookmarks | `name`, `time`, `cost`, `imageUrl`, `savedAt`, `originalId` |
  | `users/{userId}/pantry/{itemId}` | Custom inventory tracker | `name`, `category`, `quantity`, `updatedAt` |
  | `users/{userId}/mealPlans/{planId}` | 7-day meal plan history | `weekPlan`, `macros`, `goals`, `createdAt` |
  | `recipes/{recipeId}/notes` | Community culinary reviews | `userId`, `userName`, `comment`, `rating`, `timestamp` |
  | `recipes/{recipeId}/ratings` | Star rating aggregates | `rating` (1–5), `userId`, `updatedAt` |

---

## 5. Web Standard Browser APIs (Hardware & Device Integration)

CookMitra AI integrates native browser device APIs for physical kitchen usability:

### 5.1 Web Speech Recognition API (`webkitSpeechRecognition` / `SpeechRecognition`)
- **Files**:
  - [`src/components/recipe/cook-mode.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/components/recipe/cook-mode.tsx)
  - [`src/components/recipe/recipe-generator-form.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/components/recipe/recipe-generator-form.tsx)
  - [`src/components/ai-chat/chat-interface.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/components/ai-chat/chat-interface.tsx)
- **Hands-Free Cook Mode Commands**:
  - *"Next"* $\rightarrow$ Advances to the next cooking step.
  - *"Previous"* / *"Back"* $\rightarrow$ Returns to the previous step.
  - *"Repeat"* $\rightarrow$ Re-reads the current instruction aloud.
  - *"Timer"* / *"Start Timer"* $\rightarrow$ Opens the step timer modal.
- **Multilingual Recognition**: Supports `en-IN`, `ta-IN`, and `hi-IN` language codes.

### 5.2 Web Speech Synthesis API (`window.speechSynthesis`)
- **Files**:
  - [`src/components/recipe/cook-mode.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/components/recipe/cook-mode.tsx)
  - [`src/components/ai-chat/chat-interface.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/components/ai-chat/chat-interface.tsx)
- **Functionality**:
  - Instantiates `SpeechSynthesisUtterance` to read steps aloud.
  - Auto-selects the optimal system voice based on the active language (`en`, `ta`, `hi`).

### 5.3 Screen Wake Lock API (`navigator.wakeLock`)
- **File**: [`src/components/recipe/cook-mode.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/components/recipe/cook-mode.tsx)
- **Functionality**:
  Requests a screen wake lock (`navigator.wakeLock.request('screen')`) when Cook Mode opens to prevent mobile displays from going to sleep while the user is cooking. Automatically releases lock when exiting Cook Mode.

---

## 6. Document Generation APIs

### `jsPDF` & `jspdf-autotable`
- **Files**: [`src/lib/pdf-export.ts`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/lib/pdf-export.ts), [`src/components/meal-planner/weekly-shopping-list-modal.tsx`](file:///c:/Users/24ad105.RITDC/Desktop/project/src/components/meal-planner/weekly-shopping-list-modal.tsx)
- **Features**:
  - Generates client-side, multi-page grocery shopping lists categorized by aisle (Produce, Dairy, Grains & Lentils, Spices).
  - Formats complete 7-day meal plans with macro totals and daily schedules into printable PDF tables.

---

## 7. Environment Variables Reference

| Variable Name | Required By | Description | Example / Notes |
| :--- | :--- | :--- | :--- |
| **`GEMINI_API_KEY`** | Google Genkit (`@genkit-ai/google-genai`) | API key for Gemini 2.5 Flash flows | Acquired from Google AI Studio |
| **`GROQ_API_KEY`** | Groq SDK (`groq-sdk`) | API key for `gpt-oss-120b` and `gpt-oss-20b` | Acquired from Groq Cloud Console |
| **`NEXT_PUBLIC_FIREBASE_API_KEY`** | Firebase Client SDK | Web API key for client authentication | From Firebase project settings |
| **`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`** | Firebase Client SDK | Domain for auth redirects | `{project-id}.firebaseapp.com` |
| **`NEXT_PUBLIC_FIREBASE_PROJECT_ID`** | Firebase Client SDK | Firestore database project ID | e.g. `cookmitra-ai` |
| **`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`** | Firebase Client SDK | Cloud Storage bucket URI | `{project-id}.firebasestorage.app` |
| **`NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`** | Firebase Client SDK | Cloud messaging identifier | 12-digit numeric sender ID |
| **`NEXT_PUBLIC_FIREBASE_APP_ID`** | Firebase Client SDK | Firebase application ID | `1:xxx:web:yyy` |

---

## 8. Resilience & Failure Mitigation Summary

```
┌───────────────────────────────┐
│ User Request (Recipe / Meal)  │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│    Gemini 2.5 Flash (Genkit)  │
└───────────────┬───────────────┘
                │
         [Success?]
        /          \
      YES           NO (429 Rate Limit / Timeout / Error)
      /              \
     ▼                ▼
[Deliver UI]   ┌────────────────────────────────┐
               │ Fallback: Groq openai/gpt-oss  │
               │   (120B / 250K TPM Capacity)   │
               └──────────────┬─────────────────┘
                              │
                        [Success?]
                       /          \
                     YES           NO
                     /              \
                    ▼                ▼
              [Deliver UI]   ┌────────────────────────────────┐
                             │ Fallback: Static Curated Meal  │
                             │  (Hardcoded offline fallback)  │
                             └────────────────────────────────┘
```

1. **AI Rate Limiting (HTTP 429)**:
   - Primary calls to Gemini 2.5 Flash are wrapped in `try/catch`.
   - On error, control routes to Groq's high-capacity `openai/gpt-oss-120b` endpoint.
   - If offline or unconfigured, local deterministic fallback meals are synthesized.
2. **Offline Recipe Catalog**:
   - The master database of **935 curated recipes and 4,252 ingredients** is pre-compiled as static TypeScript modules, allowing full searching, filtering, and detail inspection with **zero API calls and zero network latency**.
