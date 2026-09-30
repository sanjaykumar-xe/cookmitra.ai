'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useUser } from '@/lib/firebase';
import { IconSidebar } from './icon-sidebar';
import { Header } from './header';
import { Footer } from './footer';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

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
  const router = useRouter();
  const { user, isUserLoading } = useUser();
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

  // Public routes accessible without logging in
  const publicRoutes = [
    '/',
    '/login',
    '/signup',
    '/forgot-password',
    '/verify-email',
    '/pricing',
    '/faq',
    '/services'
  ];

  // Auth routes where layout should be minimal
  const authRoutes = [
    '/login',
    '/signup',
    '/forgot-password',
    '/verify-email'
  ];

  const normalizedPath = pathname || '';
  const isLandingPage = normalizedPath === '/';
  const isAuthPage = authRoutes.includes(normalizedPath);
  const isPublicRoute = publicRoutes.includes(normalizedPath);

  // Global Auth Guard: Redirect unauthenticated users trying to access inner app features
  useEffect(() => {
    if (mounted && !isUserLoading && !user && !isPublicRoute) {
      router.push('/login');
    }
  }, [mounted, isUserLoading, user, isPublicRoute, router]);

  useEffect(() => {
    if (mounted && user) {
      const seen = localStorage.getItem('cookmitra_onboarding_seen');
      if (!seen && !['/login', '/signup', '/forgot-password', '/verify-email'].includes(pathname || '') && pathname !== '/') {
        setIsOnboardingOpen(true);
      }
    }
  }, [mounted, user, pathname]);

  const showSidebar = mounted && !isLandingPage && !isAuthPage && !isIframe && (!!user || !isPublicRoute);
  const showHeader = mounted && !isIframe && !isAuthPage;
  const showFooter = mounted && !isIframe;

  // Prevent flash of protected content while redirecting to login
  if (mounted && !isUserLoading && !user && !isPublicRoute) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm font-medium text-muted-foreground">Redirecting to sign in...</p>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full overflow-x-hidden">
      {/* Sidebar Rail - Only shown post-mount and on desktop (>= md) */}
      {showSidebar && (
        <div className="hidden md:block flex-none">
          <IconSidebar />
        </div>
      )}

      <div className={cn(
        "flex-1 flex flex-col min-h-screen w-full transition-all duration-300", 
        showSidebar && "md:pl-16"
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
