# **App Name**: CookMitra

## Core Features:

- Ingredient-Based Recipe Generation: Generate Indian recipes based on user-provided ingredients, budget, cooking time, dietary preferences, and region using the Gemini Flash model and Firebase Genkit. The generated output includes the dish name, ingredients list with quantities, step-by-step instructions, estimated cost in INR, missing ingredients, cooking time, and difficulty.
- Smart Filters: Allow users to filter recipes based on budget (₹50-₹500 slider), cooking time (<15, <30, <60 minutes), dietary preference (Veg/Non-Veg), and region (North, South, etc.).
- Multilingual Support: Offer support for multiple Indian languages including English, Hindi, Tamil, Telugu, and Malayalam, allowing users to view recipes and interact with the app in their preferred language. User language preference is stored in Firestore.
- Missing Ingredient Suggestions with Buy Links: Identify missing ingredients required for a recipe and provide external purchase links to online retailers (Amazon, BigBasket, Blinkit) for users to easily buy those ingredients. These links act as a tool to augment user experience by quickly allowing them to shop for missing ingredients.
- Recipe Saving and History: Allow authenticated users to save generated recipes to Firestore and view their recipe history.
- User Authentication: Enable user authentication using Firebase Auth with Google and Email/Password login options. Store user data (uid, name, email, language, region, createdAt) in Firestore.
- Firestore Security Rules: Implement user-scoped access to Firestore data, ensuring users can only access their own recipes and data.
- Basic Analytics: Track recipe generation events and other key metrics to understand user behavior and improve the application.
- AI Timeout Fallback Handling: Implement error handling to gracefully manage AI request timeouts and provide a fallback mechanism to ensure a smooth user experience.
- Cache Last Recipe: Cache the last generated recipe per user session to improve performance and reduce AI request load.
- PWA Support: Implement Progressive Web App (PWA) features to enable offline access, installability, and improved performance.

## Style Guidelines:

- Primary color: Saffron (#FF9933), representing warmth and Indian culinary traditions.
- Background color: Light beige (#F5F5DC), providing a soft and inviting backdrop.
- Accent color: Terracotta (#E2725B), complementing the saffron with an earthy tone for calls to action and highlights.
- Body text: 'PT Sans', a modern sans-serif for readable and accessible content.
- Headline text: 'Playfair', a stylish serif for a refined aesthetic.
- Use clear and intuitive icons related to Indian cuisine, ingredients, and cooking processes.
- Implement smooth loading animations and subtle transitions to enhance the user experience.