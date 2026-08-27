import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { FirebaseClientProvider } from '@/lib/firebase/client-provider';
import { ClientLayout } from '@/components/layout/client-layout';
import { LanguageProvider } from '@/context/language-context';
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata: Metadata = {
  title: {
    default: "CookMitra AI — AI-Powered Indian Recipes & Meal Planning",
    template: "%s | CookMitra AI"
  },
  description: "Generate recipes from your pantry, plan healthy weekly meals, and get real-time cooking guidance from Chef Momo — all powered by AI.",
  openGraph: {
    title: "CookMitra AI",
    description: "AI-Powered Indian Recipes & Meal Planning",
    images: [{ url: "/og-banner.png", width: 1200, height: 630, alt: "CookMitra AI" }],
    type: "website",
    siteName: "CookMitra AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "CookMitra AI",
    description: "AI-Powered Indian Recipes & Meal Planning",
    images: ["/og-banner.png"],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/chef-momo-logo.png',
    shortcut: '/chef-momo-logo.png',
    apple: '/chef-momo-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/chef-momo-logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/chef-momo-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/chef-momo-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;800;900&family=Noto+Sans+Tamil:wght@400;700&family=Noto+Sans+Devanagari:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <FirebaseClientProvider>
            <LanguageProvider>
              <TooltipProvider delayDuration={100}>
                <ClientLayout>
                  {children}
                </ClientLayout>
              </TooltipProvider>
              <Toaster />
            </LanguageProvider>
          </FirebaseClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
