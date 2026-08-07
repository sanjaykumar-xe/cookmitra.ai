
'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const ChatInterface = dynamic(() => import('@/components/ai-chat/chat-interface'), { 
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-full"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
});

export default function AiChatPage() {
  const { user, isUserLoading } = useUser();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [isIframe, setIsIframe] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
        setIsIframe(window.self !== window.top);
    }
  }, []);

  useEffect(() => {
    if (mounted && !isIframe && !isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router, isIframe, mounted]);

  if (!mounted || (!isIframe && (isUserLoading || !user))) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  // Optimized layout for when the chat is rendered inside the floating overlay
  if (isIframe) {
    return (
      <div className="h-screen bg-background">
        <ChatInterface />
      </div>
    )
  }

  return (
    <div className="container max-w-7xl mx-auto pt-4 pb-16 h-[calc(100vh-8rem)]">
        <ChatInterface />
    </div>
  );
}
