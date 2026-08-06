'use client';

import Link from 'next/link';
import { CookMitraLogo } from '@/components/icons/cook-mitra-logo';
import { Heart } from 'lucide-react';

interface FooterProps {
  onViewTutorial?: () => void;
}

/**
 * Footer component with 3-segment balanced layout.
 * Ensures perfect vertical centering between logo, links, and attribution.
 */
export function Footer({ onViewTutorial }: FooterProps) {
  return (
    <footer className="border-t bg-background w-full">
      <div className="container mx-auto py-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
          
          {/* Left Segment: Brand Identity */}
          <div className="flex-1 flex justify-center md:justify-start">
              <Link href="/" className="flex items-center space-x-3 group">
                  <CookMitraLogo width={22} height={22} />
                  <span className="font-headline text-2xl font-bold tracking-tight">
                      CookMitra<span className="text-xl font-normal text-muted-foreground ml-1.5">AI</span>
                  </span>
              </Link>
          </div>

          {/* Middle Segment: Quick Links */}
          <div className="flex-1 flex items-center justify-center gap-x-8 gap-y-2 flex-wrap">
              <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                FAQs
              </Link>
              {onViewTutorial && (
                 <button 
                    onClick={(e) => {
                        e.preventDefault();
                        onViewTutorial();
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                 >
                    View Tutorial
                 </button>
              )}
          </div>

          {/* Right Segment: Attribution */}
          <div className="flex-1 flex items-center justify-center md:justify-end">
              <div className="text-sm text-muted-foreground flex items-center gap-1.5 font-medium">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-500 fill-current" />
                  <span>in India</span>
              </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
