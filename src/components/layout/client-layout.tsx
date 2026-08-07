'use client';

import { usePathname } from 'next/navigation';
import { useUser } from '@/lib/firebase';
import { IconSidebar } from './icon-sidebar';
import { Header } from './header';
import { Footer } from './footer';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

/**
 * Heavy components loaded dynamically to improve initial TTI and TBT.
 */
const FloatingChat = dynamic(() => import('./floating-chat').then(mod => mod.FloatingChat), { 
    ssr: false 
});
const OnboardingModal = dynamic(() => import('./onboarding-modal').then(mod => mod.OnboardingModal), { 
    ssr: false 
});

/**
 * ClientLayout handles conditional rendering of global components 
 * based on the current route and authentication state.
 */
export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user } = useUser();
  const [mounted, setMounted] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect if the app is being rendered inside an iframe (like the chat overlay)
    if (typeof window !== 'undefined') {
        setIsIframe(window.self !== window.top);
    }
  }, []);

  useEffect(() => {
    if (mounted && user) {
      const seen = localStorage.getItem('cookmitra_onboarding_seen');
      if (!seen && !['/login', '/signup', '/forgot-password', '/verify-email'].includes(pathname || '') && pathname !== '/') {
        setIsOnboardingOpen(true);
      }
    }
  }, [mounted, user, pathname]);

  // Auth routes where layout should be minimal
  const authRoutes = [
    '/login',
    '/signup',
    '/forgot-password',
    '/verify-email'
  ];

  // Pages where the footer should be hidden to reduce distraction
  const noFooterRoutes = [
    ...authRoutes,
    '/ai-recipes',
    '/ai-chat',
    '/healthy-meal-planner',
    '/settings'
  ];

  const normalizedPath = pathname || '';
  const isLandingPage = normalizedPath === '/';
  const isAuthPage = authRoutes.includes(normalizedPath);
  
  /**
   * Hydration-safe logic: 
   * We MUST NOT render different structural tags (like div vs main) between server and client.
   * Instead, we keep the main wrapper stable and only toggle visibility of shell elements 
   * based on the 'mounted' state.
   */
  const showSidebar = mounted && !isLandingPage && !isAuthPage && !isIframe;
  const showHeader = mounted && !isIframe && !isAuthPage;
  const showFooter = mounted && !noFooterRoutes.includes(normalizedPath) && !isIframe;

  return (
    <div className="relative flex min-h-screen w-full overflow-x-hidden">
      {/* Sidebar Rail - Only shown post-mount and on non-auth/non-landing pages */}
      {showSidebar && (
        <div className="flex-none">
          <IconSidebar />
        </div>
      )}

      <div className={cn(
        "flex-1 flex flex-col min-h-screen w-full transition-all duration-300", 
        showSidebar && "pl-16"
      )}>
        {/* Header - Hidden on auth pages and in iframes */}
        {showHeader && <Header />}
        
        <main className="flex-1 w-full">
          {children}
        </main>
        
        {/* Footer is hidden on task-focused pages and in iframes */}
        {showFooter && (
          <Footer onViewTutorial={() => setIsOnboardingOpen(true)} />
        )}
      </div>
      
      {/* Floating components are client-side only */}
      {!isLandingPage && !!user && !isIframe && mounted && <FloatingChat />}
      
      {mounted && (
        <OnboardingModal 
          open={isOnboardingOpen} 
          onOpenChange={setIsOnboardingOpen} 
        />
      )}
    </div>
  );
}
