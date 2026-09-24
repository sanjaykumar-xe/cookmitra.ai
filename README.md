# CookMitra AI — Autonomous Indian Culinary & Smart Kitchen Ecosystem (v3.0)

[![Next.js 15.5+](https://img.shields.io/badge/Next.js-15.5+-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React 19.2+](https://img.shields.io/badge/React-19.2+-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript 5+](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TailwindCSS 3.4+](https://img.shields.io/badge/TailwindCSS-3.4+-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Firebase 11.9+](https://img.shields.io/badge/Firebase-11.9+-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com)
[![Google Genkit 1.28+](https://img.shields.io/badge/Google_Genkit-1.28+-4285F4?style=flat-square&logo=google&logoColor=white)](https://firebase.google.com/docs/genkit)
[![Gemini 2.5 Flash](https://img.shields.io/badge/Gemini-2.5_Flash-8E75C2?style=flat-square&logo=googlegemini&logoColor=white)](https://deepmind.google/technologies/gemini/)
[![Groq LPU Inference](https://img.shields.io/badge/Groq-LPU_Inference-F55036?style=flat-square&logo=fastapi&logoColor=white)](https://groq.com)
[![Framer Motion 11+](https://img.shields.io/badge/Framer_Motion-11.0+-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License MIT](https://img.shields.io/badge/License-MIT-F4A21A?style=flat-square)](LICENSE)

> **CookMitra AI (v3.0)**: An intelligent culinary companion and smart kitchen ecosystem that transforms household ingredients into authentic regional Indian recipes, personalized 7-day nutritional meal plans, and real-time interactive chef guidance in seconds.

---

## 🏆 Project Expo Snapshot

CookMitra AI addresses India's daily kitchen dilemma: *"Aaj khane mein kya banayein?"* (What should we cook today?) by fusing **traditional Indian culinary heritage** with **ultra-low-latency Generative AI**.

| Metric | Specification | Significance |
| :--- | :--- | :--- |
| **Regional Recipe Library** | **934+ Curated Dishes** | Covers 28 Indian States & Union Territories with authenticated spice blends and dietary classifications |
| **Multilingual AI Interface** | **English · தமிழ் (Tamil) · हिन्दी (Hindi)** | Complete end-to-end native localization across all landing sections, navigation rails, and AI interactions |
| **AI Inference Speed** | **< 600 ms First Token** | Powered by Groq LPUs (`openai/gpt-oss-20b` & `openai/gpt-oss-120b`) with Google Genkit (`gemini-2.5-flash`) |
| **Grocery Integration** | **1-Click Missing Ingredients** | Direct automated purchase links to instant commerce platforms (Zepto, Blinkit, Swiggy Instamart) |
| **Hands-Free Cooking** | **Voice Cook Mode + Smart Timers** | Hands-free step-by-step guidance with built-in voice narration, countdown timers, and keyboard shortcuts |
| **Nutritional Guidance** | **Ayurvedic Healing Foods Engine** | Condition-specific dietary recommendations pairing traditional Ayurvedic wisdom with modern clinical nutrition |

---

## 🌟 Core System Modules

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                   COOKMITRA AI ECOSYSTEM                               │
│                   Next.js 15 App Router · React 19 · Tailwind CSS · TypeScript          │
└───────────────┬───────────────────────────┬───────────────────────────┬────────────────┘
                │                           │                           │
                ▼                           ▼                           ▼
     ┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
     │    Google Genkit    │     │   Groq Cloud LPU    │     │    Firebase v11     │
     │  (Gemini 2.5 Flash) │     │ (GPT OSS 120B & 20B)│     │  (Auth & Firestore) │
     └──────────┬──────────┘     └──────────┬──────────┘     └──────────┬──────────┘
                │                           │                           │
                ├─ AI Recipe Generator      ├─ Chef Momo Live Chat      ├─ User Profiles
                ├─ 7-Day Meal Planner       ├─ Real-Time Substitutions  ├─ Saved Recipe Books
                ├─ Ingredient Scanner       ├─ Rapid Single-Meal Swaps  ├─ Smart Pantry Sync
                └─ Healing Foods Reasoning  └─ Low-Latency Fallback     └─ Community Reviews
```

### 1. 📖 934+ Authentic Regional Recipe Explorer
- **Interactive SVG India Map**: Visual geographical filter allowing users to select any state (Tamil Nadu, Punjab, Kerala, Bengal, Gujarat, Kashmir, Northeast states, etc.) and explore native culinary traditions.
- **13 Standardized Categories**: Curries & Gravies, Snacks & Street Food, Desserts & Sweets, Protein Specialties, Rice & Biryanis, Breakfast & Tiffin, Soups, Beverages, and Breads.
- **Micro-Cost Estimator**: Accurate per-serving cost estimates calculated in Indian Rupees (₹) with preparation times and difficulty levels.

### 2. 🤖 Chef Momo AI — Conversational Kitchen Assistant
- **Dual-Model Resilience**: Utilizes Groq LPUs (`openai/gpt-oss-20b`) for sub-second conversational latency, with fallback to Google Genkit (`gemini-2.5-flash`).
- **Deep Context Awareness**: Answers cooking questions, suggests instant ingredient replacements (e.g. hung curd for sour cream), and adapts instructions for dietary restrictions.
- **Floating Global Widget & Dedicated Portal**: Accessible from any page via the floating assistant or on `/ai-chat`.

### 3. 🥫 Smart Pantry & Zero-Waste Engine
- **Inventory Tracking**: Log existing pantry supplies with categories and units.
- **Recipe Matching**: Matches pantry contents against database dishes to highlight 100% cookable meals with zero grocery runs.
- **Missing Ingredient Checklist**: Automatically flags missing items with approximate market prices and generates downloadable PDF shopping lists.

### 4. 📅 7-Day Personalized Meal Planner
- **Targeted Macro Optimization**: Generates balanced 7-day breakfast, lunch, snack, and dinner plans customized by age, activity level, dietary preference (Veg/Non-Veg), cuisine style, and household budget.
- **1-Click Meal Swapping**: Swap out individual meals dynamically with AI-generated alternatives matching the same calorie and protein profile.
- **Calendar & PDF Export**: Export meal schedules directly to Google Calendar/iCal or download high-resolution weekly meal charts with complete shopping lists.

### 5. 🌿 Healing Foods & Ayurvedic Nutritional Wisdom
- **Evidence-Based Guides**: Curated dietary guidelines for health conditions including Diabetes, Thyroid health, Hypertension, Gut health, PCOS, and Migraines.
- **Culinary Medicine**: Categorizes foods into *"Helpful"* and *"Foods to Avoid"* grounded in Ayurvedic balance and clinical nutritional science.

### 6. 🎙️ Hands-Free Interactive Cook Mode
- **Voice Guidance**: In-browser speech synthesis reads step instructions aloud while you cook.
- **Built-in Auto Timers**: Detects time durations in instructions (e.g. *"simmer for 8 minutes"*) and launches countdown timers with auditory alerts.
- **Keyboard Shortcuts**: Spacebar for next step, Arrow keys for navigation, `T` for timer, `Esc` to exit.

---

## 🛠 Technology Stack Architecture

### Frontend Layer
- **Framework**: Next.js 15.5+ (App Router architecture with Turbopack).
- **Core UI**: React 19.2+ (Server Components, Client Components, Server Actions).
- **Styling**: Tailwind CSS 3.4+ with custom HSL design tokens and smooth dark/light mode transitions.
- **Component Primitives**: Radix UI accessible primitives wrapped with ShadCN UI.
- **Visuals & Motion**: Framer Motion 11+, Lucide React icons, and Tabler Icons.
- **Typography**: Optimized Google Fonts (Inter & Outfit).

### Backend & AI Pipeline
- **Google Genkit**: Unified SDK orchestrating structured recipe, meal planning, and health flows.
- **Foundation Models**: Google Gemini 2.5 Flash for multi-constraint reasoning; Groq LPU (`openai/gpt-oss-20b` & `120b`) for ultra-low latency real-time streaming.
- **Cloud Database & Auth**: Google Firebase 11.9+ (Firebase Authentication with Email/Password & Guest Mode; Firestore for user profiles, saved recipes, and pantry sync).
- **Data Validation**: Strict runtime Zod schema parsing across all server actions.

---

## 📂 Project Structure

```
cookmitra.ai/
├── src/
│   ├── ai/                        # AI Flows & Model Configurations
│   │   ├── flows/                 # Genkit flows (recipe gen, meal planning, healing foods)
│   │   ├── schemas/               # Zod input/output schemas
│   │   └── genkit.ts              # Genkit client initialization
│   ├── app/                       # Next.js App Router (14 Core Routes)
│   │   ├── page.tsx               # High-converting landing page with 3D showcases
│   │   ├── home/                  # Post-login authenticated personalized dashboard
│   │   ├── recipes/               # 934+ recipe explorer with India region map
│   │   ├── ai-recipes/            # Custom AI recipe generator
│   │   ├── ai-chat/               # Chef Momo interactive conversational interface
│   │   ├── healthy-meal-planner/  # 7-day precision meal planner & PDF exporter
│   │   ├── healing-foods/         # Health condition dietary guide
│   │   ├── encyclopedia/          # Indian spices, herbs, and ingredients guide
│   │   ├── pantry/                # Smart household pantry inventory
│   │   ├── my-recipes/            # User saved recipe book
│   │   ├── ingredients/           # Ingredient database & price index
│   │   ├── pricing/               # Transparent pricing & tier specifications
│   │   ├── faq/                   # Platform help center & FAQs
│   │   └── settings/              # User preferences, appearance, & theme toggle
│   ├── components/                # Modular Reusable Component Library
│   │   ├── ai-chat/               # Chat bubbles, streaming indicators, inputs
│   │   ├── auth/                  # Login, registration, & account controls
│   │   ├── home/                  # Animated showcases, regional maps, brand tickers
│   │   ├── layout/                # Global header, icon sidebar rail, footer, language toggle
│   │   ├── meal-planner/          # Shopping list modal, calorie charts
│   │   ├── recipe/                # Recipe card, 3D flip card, cook mode, rating modal
│   │   └── ui/                    # Design system components (cards, buttons, dialogs, etc.)
│   ├── context/                   # LanguageContext (EN/TA/HI) & ThemeContext
│   └── lib/                       # Business Logic & Curated Datasets
│       ├── recipes/               # 35 Regional recipe datasets (934 authentic dishes)
│       ├── healing-foods/         # Health conditions & healing food databases
│       ├── firebase/              # Reactive Firebase Auth & Firestore client SDK
│       ├── ingredients-catalog.ts # Standardized ingredient price & unit catalog
│       └── translations.ts        # Comprehensive English, Tamil, and Hindi dictionary
├── public/                        # Static assets, branding, and local recipe photography
├── docs/                          # Comprehensive technical architecture & API specifications
├── package.json                   # Dependencies, scripts, and build metadata
└── README.md                      # Presentation documentation
```

---

## ⚡ Quick Start & Local Setup

### Prerequisites
- Node.js 18.x or 20.x
- npm or pnpm
- Valid API keys for Groq and Firebase

### 1. Clone & Install
```bash
git clone https://github.com/sanjaykumar-xe/cookmitra.ai.git
cd cookmitra.ai
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```bash
# AI Engine Credentials
GROQ_API_KEY=your_groq_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here

# Firebase Web App Credentials
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:9002](http://localhost:9002) in your browser.

### 4. Production Build & Typecheck
```bash
npm run typecheck    # Validate 100% strict TypeScript types
npm run build        # Build optimized production bundle
npm start            # Launch production server
```

---

---

## 📚 Project Expo Documentation Suite (`docs/`)

All evaluation documents, slide decks, posters, and technical dossiers are organized in the [`docs/`](./docs/README.md) directory:

| Document | Direct File Link | Target Use Case |
| :--- | :--- | :--- |
| **Academic & Expo Abstract** | [`docs/PROJECT_ABSTRACT.md`](./docs/PROJECT_ABSTRACT.md) | Official synopsis for evaluators, college brochures, and submission |
| **Complete Technical Dossier** | [`docs/PROJECT_EXPLANATION.md`](./docs/PROJECT_EXPLANATION.md) | Master presentation bible: architecture, code references & live demo script |
| **Stall Display Poster / Flex Banner** | [`docs/PROJECT_EXPO_POSTER.md`](./docs/PROJECT_EXPO_POSTER.md) | 3-column layout specification ready for 3x4 ft or A1/A0 flex banner printing |
| **Presentation Slide Deck (10 Slides)** | [`docs/PROJECT_SLIDES_OUTLINE.md`](./docs/PROJECT_SLIDES_OUTLINE.md) | 10-slide oral deck outline with bullet points, visuals, and speaker notes |
| **Viva Voce & Judge Q&A Master Sheet** | [`docs/PROJECT_EXPO_VIVA_QA.md`](./docs/PROJECT_EXPO_VIVA_QA.md) | 20+ comprehensive technical answers for evaluator viva and defense |
| **Expo Stall Checklist & Playbook** | [`docs/PROJECT_EXPO_CHECKLIST.md`](./docs/PROJECT_EXPO_CHECKLIST.md) | 30-minute pre-judge setup, tested demo prompts, and emergency contingencies |
| **Architecture & Framework Dossier** | [`docs/PROJECT_OVERVIEW.md`](./docs/PROJECT_OVERVIEW.md) | Full technical breakdown: Next.js 15, Firebase SDK v11, and Vercel deployment |
| **API & Models Specification** | [`docs/API_AND_MODELS.md`](./docs/API_AND_MODELS.md) | Dual AI engine specifications: Google Genkit Gemini 2.5 Flash & Groq LPUs |
| **Design System & Brand Guide** | [`docs/DESIGN.md`](./docs/DESIGN.md) | Color palettes, HSL tokens, dark/light mode standards, and component conventions |

---

## 📄 License & Attribution


Distributed under the **MIT License**. See `LICENSE` for more information.

Developed with ❤️ for Indian culinary heritage and modern AI innovation.
