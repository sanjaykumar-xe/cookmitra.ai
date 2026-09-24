# CookMitra AI — Project Expo Day Checklist & Demo Playbook

[![Expo Stall Ops](https://img.shields.io/badge/Status-Expo_Ready-00C853?style=flat-square)](#)
[![Deployment](https://img.shields.io/badge/Port-9002_Live-F4A21A?style=flat-square)](#)

> **Quick Summary**: Keep this checklist handy on your phone or printed on paper at your expo stall to ensure smooth setup, high-impact demos, and contingency handling.

---

## 1. Pre-Expo Technical Setup (Do This 30 Mins Before Judges Arrive)

- [ ] **Laptop Power & Display Settings**:
  - Connect charger (set Windows Power Mode to *"Best Performance"*).
  - Set screen sleep to *"Never"* so the display doesn't dim during discussions.
  - Set browser zoom to 100% or 110% for clear readability from 3–4 feet away.
- [ ] **Local Server Health**:
  - Verify Next.js dev server is running on port 9002 (`http://localhost:9002/`).
  - Open terminal and confirm `npx tsc --noEmit` returns exit code 0.
- [ ] **Internet & Network Backup**:
  - Primary: College Wi-Fi / Stall Ethernet.
  - Secondary (Crucial!): Keep your Mobile 4G/5G Hotspot saved and ready to connect in 5 seconds if college Wi-Fi drops.
- [ ] **Browser Tabs Prepared**:
  - Tab 1: `http://localhost:9002/` (Main Landing Page)
  - Tab 2: `http://localhost:9002/recipes` (Regional Explorer & Map)
  - Tab 3: `http://localhost:9002/ai-chat` (Chef Momo Live Assistant)
  - Tab 4: `http://localhost:9002/healthy-meal-planner` (7-Day Meal Schedule)
  - Tab 5: `http://localhost:9002/healing-foods` (Ayurvedic Health Guide)
  - Tab 6: GitHub Repo or VS Code editor open with [`PROJECT_EXPLANATION.md`](./PROJECT_EXPLANATION.md).

---

## 2. Tested & Verified Demo Prompts for Judges

When judges ask to test live features, use these tested sample queries:

### For Recipe Generator (`/ai-recipes`):
- **Ingredients Input**: `Onion, Tomato, Paneer, Ginger, Green Chilli, Garam Masala`
- **Budget**: `₹150`
- **Max Cook Time**: `<30 minutes`
- **Dietary**: `Veg`
- **Region**: `North Indian` / `Punjabi`
- *Expected Result*: Generates authentic *Paneer Bhurji* or *Kadai Paneer* with complete steps, missing items, and preparation times.

### For Chef Momo Live Chat (`/ai-chat` or Floating Widget):
- **Prompt 1 (Culinary Chemistry)**: *"I'm making Biryani and my rice became a bit sticky. How do I fix it right now?"*
- **Prompt 2 (Ingredient Replacement)**: *"I don't have fresh cream for butter chicken, what kitchen substitute can I use?"*
- **Prompt 3 (Multilingual)**: Switch to Tamil/Hindi and ask: *"இன்றைக்கு என்ன சமைக்கலாம்?"* or *"पनीर टिक्का कैसे बनाएं?"*

### For Meal Planner (`/healthy-meal-planner`):
- **Inputs**: Age: `25-35`, Diet: `Vegetarian`, Goal: `Weight Management / High Protein`, Budget: `₹1200`.
- *Demo Trigger*: Click the **Swap Meal** button on any dish to show instant dynamic single-meal replacement, then click **Download PDF Shopping List**.

---

## 3. Expo Stall Physical Display Checklist

- [ ] **Stall Poster / Flex Banner**: 3x4 ft banner hung behind or in front of the table (using content from `PROJECT_EXPO_POSTER.md`).
- [ ] **Brochures / Handouts**: Printed copies of `PROJECT_ABSTRACT.md` for visiting judges to take away.
- [ ] **QR Code Signage**: Print a simple A4 paper with a QR code pointing to your GitHub repository:
  `https://github.com/sanjaykumar-xe/cookmitra.ai`

---

## 4. Emergency Troubleshooting (What If Something Fails?)

| Problem | Immediate 10-Second Fix |
| :--- | :--- |
| **Wi-Fi disconnects during live demo** | Switch immediately to phone hotspot. If completely offline, show the 934 static regional recipes (`/recipes`), Cook Mode with timers, and design system without server calls. |
| **Groq / Gemini API key hits rate limit** | Refresh the browser. The system has built-in automatic fallback between Gemini and Groq models. |
| **Accidental page reload takes too long** | The app runs Turbopack locally on port 9002; page caching makes reloads instant. |
| **Audio in Cook Mode doesn't speak** | Ensure laptop speaker is unmuted and volume is at 80%+. The Web Speech API requires permission on first click. |

---

*All systems nominal. Best of luck for your Project Expo presentation!*
