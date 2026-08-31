# CookMitra.ai 🍳

**CookMitra.ai** is a state-of-the-art, AI-powered Indian culinary companion and regional recipe explorer designed to turn everyday cooking into a delightful, personalized experience. Featuring a rich database of 955+ authentic regional recipes across 28 Indian states, a multilingual AI cooking assistant (**Chef Momo**), and personalized meal planning tools, CookMitra.ai bridges traditional culinary wisdom with cutting-edge artificial intelligence.

---

## 🌟 Key Features

### 1. 📖 955+ Authentic Indian Regional Recipe Explorer
- **28 State Cuisines & Union Territories:** Explore traditional recipes from Tamil Nadu, Kerala, Andhra Pradesh, Telangana, Karnataka, Maharashtra, Gujarat, Rajasthan, Punjab, Delhi, Uttar Pradesh, Bihar, Odisha, West Bengal, Assam, Meghalaya, Sikkim, Jammu & Kashmir, and more.
- **Smart Multi-Field Search:** Search by dish name, ingredients, description, or culinary tags with instant substring matching (e.g. search *"biryani"* to instantly filter all regional biryani dishes).
- **Interactive India Region Map:** Visual geographic breakdown allowing users to filter recipes by region and state.
- **13 Standardized Menu Categories:**
  - 🍲 **Curries & Gravies** (464 recipes)
  - 🥙 **Snacks & Street Food** (152 recipes)
  - 🍨 **Desserts & Sweets** (91 recipes)
  - 🍗 **Dry & Stir-Fried** (46 recipes)
  - 🥩 **Protein Specialties** (42 recipes)
  - 🍚 **Rice & Biryani** (35 recipes)
  - 🥞 **Breakfast & Tiffin** (29 recipes)
  - 🥗 **Sides & Accompaniments** (20 recipes)
  - 🍢 **Starters & Appetizers** (20 recipes)
  - 🫓 **Breads** (14 recipes)
  - 🍲 **Soups** (17 recipes)
  - 🥤 **Beverages** (14 recipes)
  - 🥗 **Salads** (11 recipes)

### 2. 🤖 Multilingual AI Cooking Assistant ("Chef Momo")
- Powered by high-speed Groq AI inference (`openai/gpt-oss-20b` engine).
- Responds fluently in the user's active UI language selection: **English**, **Tamil (தமிழ்)**, and **Hindi (हिंदी)**.
- Provides real-time cooking guidance, ingredient substitutions, and culinary advice.

### 3. 🌿 Healing Foods & Health Guides
- Curated nutritional guidelines for wellness and specific health conditions (e.g., diabetes-friendly, heart-healthy, weight management).
- Ingredient insights pairing traditional Ayurvedic wisdom with modern nutrition.

### 4. 📅 AI Recipe & Meal Plan Generator
- Custom recipe generation based on available kitchen ingredients, serving sizes, and budget constraints.
- Step-by-step interactive Cook Mode with automatic timer detection and progress tracking.

### 5. 🎨 State-of-the-Art Aesthetic UI
- Built with glassmorphism, dynamic dark/light mode toggle, 3D card flip previews, and responsive layouts.

---

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router with Turbopack) & React 19
- **Styling:** Tailwind CSS & Shadcn UI
- **Animations:** Framer Motion
- **Icons:** Lucide React & Tabler Icons
- **State Management & i18n:** React Context (`LanguageContext` for EN, TA, HI)
- **AI Infrastructure:**
  - **Chef Momo Chat:** Groq SDK (`openai/gpt-oss-20b`) for ultra-low latency conversational AI.
  - **Genkit Flows:** Google Genkit (`gemini-2.5-flash`) for structured recipe & meal plan generation.
- **Backend & Authentication:** Firebase (Firestore & Firebase Auth)
- **Hosting & Deployment:** Vercel

---

## 📂 Codebase Structure

```
.
├── src/
│   ├── ai/                      # Genkit AI flows & Groq model configurations
│   ├── app/                     # Next.js App Router pages (recipes, ai-chat, healing-foods, etc.)
│   ├── components/              # UI & Feature components
│   │   ├── ai-chat/             # Chef Momo chat interface & actions
│   │   ├── home/                # Homepage hero, showcases, & features
│   │   ├── layout/              # Header, footer, & language toggle
│   │   ├── recipe/              # Recipe cards, details modal, & 3D flip card
│   │   └── recipes/             # India region map & filter controls
│   ├── context/                 # LanguageContext (EN / TA / HI) & ThemeProvider
│   ├── lib/                     # Datasets, utilities, & helpers
│   │   ├── recipes/             # 35 regional recipe data files (955 recipes)
│   │   ├── healing-foods/       # Health conditions & healing food guides
│   │   ├── recipe-image-helper.ts # Dynamic image candidate resolution
│   │   └── translations.ts      # English, Tamil, and Hindi dictionary
│   └── scripts/                 # Maintenance scripts
├── public/
│   └── recipe-images/           # Cleaned static local recipe image assets
├── next.config.ts               # Next.js image domain & build configuration
├── package.json                 # Dependencies & build scripts
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sanjaykumar-xe/cookmitra.ai.git
   cd cookmitra.ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   GROQ_API_KEY=your_groq_api_key
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:9002](http://localhost:9002) in your browser.

5. **Build for Production:**
   ```bash
   npm run build
   npm start
   ```

---

Made with ❤️ in India.
