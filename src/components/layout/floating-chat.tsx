'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { X } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { ChutkiIcon } from '../icons/chutki-icon';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

export function FloatingChat() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (pathname === '/ai-chat' || !isClient) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {isOpen ? (
        <div
          className={cn(
            'transition-all duration-500 ease-in-out origin-bottom-right',
            'animate-in fade-in-0 slide-in-from-bottom-10 zoom-in-95'
          )}
        >
          <Card className="w-[calc(100vw-2.5rem)] sm:w-[380px] h-[70vh] max-h-[600px] shadow-2xl flex flex-col overflow-hidden bg-card/90 backdrop-blur-lg rounded-2xl border-primary/40">
            <CardHeader className="flex flex-row items-center justify-between p-3 border-b bg-background/80">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full flex items-center justify-center overflow-hidden border border-amber-500/20 shadow-xs">
                  <Image src="/chef-momo-logo.png" alt="Chef Momo" width={32} height={32} className="h-full w-full object-cover rounded-full" />
                </div>
                <h3 className="font-headline text-lg font-bold">{t('chat.title')}</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 hover:rotate-90 transition-transform duration-300"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <iframe
                src="/ai-chat"
                className="w-full h-full border-0"
                title="Chef Momo AI Assistant"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="h-[60px] w-[60px] rounded-full bg-transparent p-0 shadow-none border-0 ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 transition-all duration-300 hover:scale-110 hover:rotate-6 flex items-center justify-center overflow-visible"
                onClick={() => setIsOpen(true)}
                aria-label={t('home.chat.title')}
              >
                <div className="relative h-full w-full flex items-center justify-center">
                    <Image src="/chef-momo-logo.png" alt="Chef Momo" width={56} height={56} className="h-[54px] w-[54px] rounded-full drop-shadow-2xl object-cover border-2 border-amber-500/30" priority />
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left" className="animate-in fade-in slide-in-from-right-2 hidden md:block">
              <p>{t('home.chat.title')}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
}
