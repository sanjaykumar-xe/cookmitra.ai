# CookMitra AI — Project Expo Poster Specification & Layout Guide

[![Expo Stall Ready](https://img.shields.io/badge/Format-A0_/_A1_/_3x4ft_Flex-00C853?style=flat-square)](#)
[![Theme](https://img.shields.io/badge/Theme-Smart_Kitchen_&_AI_Healthcare-F4A21A?style=flat-square)](#)

> **Instructions for Printing**: This document contains the content and visual layout hierarchy to create your 3x4 ft (or A0/A1) flex banner or trifold poster for your Project Expo stall. Hand this directly to a designer or copy-paste it into Canva / PowerPoint / Figma.

---

## 🎨 Recommended Poster Color Scheme
- **Primary Header & Accents**: `#F4A21A` (Warm Saffron / Amber)
- **Background**: `#FFFFFF` (Crisp clean white for high contrast readability)
- **Secondary Cards / Containers**: `#F9FAFB` (Subtle off-white border with `#E5E7EB`)
- **Typography**: Bold Headings in **Inter** or **Montserrat**; Body text in **Open Sans** or **Roboto**.

---

## 🖼️ Poster Layout (3-Column Layout Structure)

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                             HEADER BANNER                                              │
│                                           COOKMITRA AI 🍳                                              │
│               Autonomous Multilingual Indian Culinary Companion & Smart Kitchen Ecosystem              │
│                           [Team / Student Names · Department · College / Institution]                  │
├───────────────────────────────┬────────────────────────────────────────┬───────────────────────────────┤
│           COLUMN 1            │                COLUMN 2                │           COLUMN 3            │
│       PROBLEM & VISION        │          SYSTEM ARCHITECTURE           │      KEY INNOVATIONS &        │
│                               │                                        │          PERFORMANCE          │
│ • The Everyday Dilemma        │ • Hybrid LPU-LLM Architecture          │ • 934+ Curated Indian Dishes  │
│   "Aaj khane mein kya banayein"│ • Google Genkit (Gemini 2.5 Flash)    │ • Zero-Waste Smart Pantry     │
│ • 20-30% Household Food Waste │ • Groq LPU (<600ms Sub-Second Token)   │ • 3-Language Indic System     │
│ • Limitations of Western Apps │ • Firebase Firestore & Auth            │ • 7-Day Precision Meal Plan   │
│                               │ • Serverless Edge Computing            │ • Ayurvedic Healing Foods     │
│       OBJECTIVES & GOALS      │                                        │ • Hands-Free Voice Cook Mode  │
│                               │        CORE SYSTEM FLOWCHART           │                               │
│ • Zero-waste kitchen engine   │   [Input: Kitchen Ingredients]         │        IMPACT & RESULTS       │
│ • Cultural Indian fidelity    │                ▼                       │                               │
│ • Sub-second AI assistance    │   [Genkit + Groq LPU Validation]       │ • 35% Food Waste Reduction    │
│ • Native multilingual access  │                ▼                       │ • 100% Zod Schema Compliance  │
│                               │   [Output: Recipes, Plan, Timers]      │ • Sub-Second Live Guidance    │
├───────────────────────────────┴────────────────────────────────────────┴───────────────────────────────┤
│                                             FOOTER STRIP                                               │
│    Tech Stack: Next.js 15 · React 19 · TypeScript · Tailwind CSS · Firebase · Google Genkit · Groq LPU  │
│           GitHub: github.com/sanjaykumar-xe/cookmitra.ai  |  Live Demo: http://localhost:9002         │
└────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Detailed Content by Poster Section

### 1. Header Banner
- **Project Title**: **CookMitra AI (v3.0)**
- **Subtitle**: *Autonomous Multilingual Indian Culinary Companion & Smart Kitchen Ecosystem*
- **Institution / Team**: [Department of Computer Science & Engineering · Institution Name]
- **Team Members / Guide**: [Your Name, Roll No. / Team Partner / Project Guide Name]

---

### 2. Left Column: Problem & Vision

#### The Problem
- **Domestic Food Waste**: Urban Indian households waste up to 30% of fresh vegetables and perishables due to lack of pantry visibility.
- **Decision Paralysis**: Over 35 minutes are spent every day deciding meals that balance conflicting family tastes, age groups, and dietary constraints.
- **Cultural Gap**: Global culinary apps fail to understand Indian regional spices, tempering (*tadka*), or native staple substitutions.
- **Language Barriers**: The majority of traditional Indian homemakers cannot comfortably utilize English-only digital tools.

#### Project Objectives
- Build an AI engine that converts arbitrary household ingredients into culturally authentic Indian dishes.
- Enable zero grocery runs by maximizing currently available kitchen stock.
- Guarantee sub-second, real-time AI cooking guidance without latency lags.
- Provide end-to-end interface and recipe generation in native Indic scripts (**English**, **தமிழ்**, **हिन्दी**).

---

### 3. Center Column: Architecture & System Flow

#### Hybrid Dual-Engine AI Architecture
- **Groq LPU Acceleration**: Language Processing Units running `openai/gpt-oss-20b` deliver first-token cooking advice in **<600 ms**.
- **Google Genkit Framework**: Employs `gemini-2.5-flash` with strict runtime Zod schemas, enforcing structured outputs for recipe ingredients, step times, and nutritional macros.
- **Modern Full-Stack Next.js 15**: Server Actions (`'use server'`) keep API credentials 100% protected on the edge runtime with zero client-side leakage.
- **Firebase Cloud Services**: Firebase Auth (Email & Guest Mode) paired with declarative Firestore rules (`firestore.rules`) isolating private user pantries.

---

### 4. Right Column: Innovations & Expo Highlights

#### Key Innovations
- 🍲 **934+ Curated Regional Recipes**: Covering all **28 Indian States & Union Territories** across 13 distinct course categories with an interactive visual India map.
- 🥑 **Zero-Waste Smart Pantry**: Highlights recipes that are 100% cookable immediately; calculates missing ingredient costs in Indian Rupees (₹) with 1-click links to Zepto, Blinkit, and Swiggy Instamart.
- 📅 **7-Day Dynamic Meal Planner**: Generates 28 weekly meals matching calorie and protein targets with 1-click single meal swapping and downloadable PDF shopping lists.
- 🌿 **Ayurvedic Healing Foods Matrix**: Evidence-based culinary medicine guidelines for Diabetes, Thyroid, Hypertension, PCOS, and Gut health.
- 🎙️ **Hands-Free Interactive Voice Cook Mode**: In-browser speech synthesis reads instructions aloud while regex parsers automatically trigger timers for detected cooking durations (e.g. *"simmer for 8 mins"*).
- 🌐 **True Indic Multilingual Support**: 100% localized navigation, search, and AI-generated recipe instructions in English, Tamil, and Hindi.

---

### 5. Results & Metrics (Callout Stat Boxes)

Put these in prominent visual stat boxes:
```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│     934+        │  │     <600ms      │  │      28           │  │      35%        │
│ Curated Recipes │  │ First-Token LPU │  │  Indian States    │  │ Domestic Waste  │
│ Across 13 Menus │  │  Inference Speed│  │   & Territories   │  │   Reduction     │
└─────────────────┘  └─────────────────┘  └─────────────────┘  └─────────────────┘
```
