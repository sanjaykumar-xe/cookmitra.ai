'use client';

import Link from 'next/link';
import { Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

interface FooterProps {
  onViewTutorial?: () => void;
}

/**
 * Clean, compact site-wide footer.
 * Balanced single-tier layout with prominent brand logo,
 * essential links, and regional attribution without unnecessary clutter.
 */
export function Footer({ onViewTutorial }: FooterProps) {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t bg-card/60 backdrop-blur-md w-full transition-colors mt-auto">
      <div className="container mx-auto px-4 md:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          
          {/* Left: Prominently Sized Brand Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="inline-flex items-center group" aria-label="CookMitra AI Home">
              {/* Light Mode: Official Horizontal Logo Lockup (tightly cropped) */}
              <img
                src="/images/cookmitra-horizontal-logo.png"
                alt="CookMitra AI"
                width={150}
                height={42}
                className="h-10 sm:h-11 w-auto object-contain dark:hidden transition-transform group-hover:scale-102"
              />

              {/* Dark Mode: Standalone App Icon + Dark-mode Aware High Contrast Text */}
              <div className="hidden dark:flex items-center space-x-2.5">
                <img
                  src="/images/app-icon-transparent.png"
                  alt="CookMitra"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain shrink-0 transition-transform group-hover:scale-105"
                />
                <span className="font-sans text-2xl font-bold tracking-tight text-foreground flex items-center">
                  CookMitra<span className="text-lg font-medium text-foreground/80 ml-1.5">AI</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Essential Quick Links */}
          <nav className="flex items-center justify-center gap-6 sm:gap-8 text-sm font-medium text-muted-foreground flex-wrap" aria-label="Footer Navigation">
            <Link href="/pricing" className="hover:text-primary transition-colors">
              {t('footer.pricing')}
            </Link>
            <Link href="/faq" className="hover:text-primary transition-colors">
              {t('footer.faqs')}
            </Link>
            {onViewTutorial && (
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  onViewTutorial();
                }}
                className="hover:text-primary transition-colors focus:outline-none cursor-pointer"
              >
                {t('footer.tour')}
              </button>
            )}
            <Link href="/recipes" className="hover:text-primary transition-colors">
              {t('footer.recipes')}
            </Link>
            <Link href="/community" className="hover:text-primary transition-colors">
              {t('footer.community')}
            </Link>
          </nav>

          {/* Right: Attribution, Copyright & Back to top */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0 flex-wrap justify-center md:justify-end">
            <div className="flex items-center gap-1.5 font-medium text-foreground/80">
              <span>{t('footer.madeWith')}</span>
              <Heart className="h-3.5 w-3.5 text-red-500 fill-current" />
              <span>{t('footer.inIndia')}</span>
            </div>
            <span>•</span>
            <span>© {currentYear} CookMitra AI</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer focus:outline-none"
              aria-label="Scroll to top of page"
            >
              <span>{t('footer.top')}</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
