'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  Settings,
  Home,
  Utensils,
  Plus,
  MessageSquare,
  Calendar,
  HeartPulse,
  ShoppingBasket,
  Bookmark,
  Users,
} from 'lucide-react';
import { IconBook } from '@tabler/icons-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CookMitraLogo } from '@/components/icons/cook-mitra-logo';
import { useUser } from '@/lib/firebase';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/context/language-context';

const iconClasses = "h-5 w-5 transition-colors duration-200";

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const EncyclopediaNavIcon = ({ className, ...props }: React.ComponentProps<typeof IconBook>) => (
  <IconBook className={className} size={20} stroke={1.75} strokeWidth={1.75} {...props} />
);

function getMainNavLinks(homeHref: string, t: (key: any) => string): NavItem[] {
  return [
    { href: homeHref, label: t('nav.home'), icon: Home },
    { href: "/recipes", label: t('nav.recipes'), icon: Utensils },
    { href: "/ai-recipes", label: t('nav.aiRecipes'), icon: Plus },
    { href: "/ai-chat", label: t('nav.aiChat'), icon: MessageSquare },
    { href: "/healthy-meal-planner", label: t('nav.mealPlanner'), icon: Calendar },
    { href: "/healing-foods", label: t('nav.healingFoods'), icon: HeartPulse },
    { href: "/encyclopedia", label: t('nav.encyclopedia'), icon: EncyclopediaNavIcon },
    { href: "/pantry", label: t('nav.smartPantry'), icon: ShoppingBasket },
    { href: "/my-recipes", label: t('nav.saved'), icon: Bookmark },
    { href: "/community", label: t('nav.community'), icon: Users },
  ];
}

const TooltipLink = ({ 
  href, 
  tooltip, 
  children, 
  ...props 
}: { 
  href: string; 
  tooltip: string; 
  children: React.ReactNode; 
  [key: string]: any;
}) => {
  const pathname = usePathname();
  const isActive = href === "/home" || href === "/" 
    ? pathname === "/home" || pathname === "/" 
    : pathname.startsWith(href);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link 
          href={href} 
          {...props} 
          className={cn(
            "group p-2.5 rounded-2xl transition-all duration-200 active:scale-95 flex items-center justify-center", 
            isActive 
              ? "bg-[#FFF6ED] dark:bg-[#2A1D15] text-[#F2860A] border border-[#F2860A]/30 shadow-xs" 
              : "text-stone-700 dark:text-stone-300 hover:text-[#F2860A] hover:bg-muted/60"
          )}
        >
          <div className={cn("transition-colors flex items-center justify-center", isActive ? "text-[#F2860A]" : "text-stone-700 dark:text-stone-300 group-hover:text-[#F2860A]")}>
            {children}
          </div>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="animate-in fade-in slide-in-from-left-2 duration-200 font-medium text-xs hidden md:block">
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const NavLink = ({ 
  href, 
  children, 
  icon: Icon, 
  ...props 
}: { 
  href: string; 
  children: React.ReactNode; 
  icon: React.ElementType; 
  [key: string]: any;
}) => {
  const pathname = usePathname();
  const isActive = href === "/home" || href === "/" 
    ? pathname === "/home" || pathname === "/" 
    : pathname.startsWith(href);

  return (
    <Link 
      href={href} 
      {...props}
      className={cn(
        "flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all active:scale-[0.98]", 
        isActive 
          ? "bg-[#FFF6ED] dark:bg-[#2A1D15] text-[#F2860A] font-semibold border border-[#F2860A]/20" 
          : "text-muted-foreground hover:text-foreground hover:bg-muted"
      )}
    >
      <Icon className={cn("h-5 w-5 transition-transform group-hover:scale-110", isActive ? "text-[#F2860A]" : "text-muted-foreground")} />
      <span>{children}</span>
    </Link>
  );
};

/**
 * Compact Icon Rail Sidebar (64px / w-16).
 * Navigation sequence:
 * 1. Home (Home)
 * 2. Recipes (Utensils)
 * 3. AI Recipes (Plus)
 * 4. Chef Momo AI (MessageSquare)
 * 5. Meal Planner (Calendar)
 * 6. Healing Foods (HeartPulse)
 * 7. Encyclopedia (IconBook)
 * 8. Smart Pantry (ShoppingBasket)
 * 9. Saved Recipes (Bookmark)
 * 10. Community (Users)
 * Bottom:
 * 11. Settings (Settings)
 */
export function MobileNavDrawer() {
  const { user } = useUser();
  const { t } = useLanguage();
  const homeHref = user ? "/home" : "/";
  const mainNavLinks = getMainNavLinks(homeHref, t);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden h-10 w-10 -ml-1 mr-1 rounded-xl hover:bg-muted text-stone-700 dark:text-stone-300 transition-transform active:scale-95 shrink-0" aria-label="Open Navigation Menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0 bg-card/95 backdrop-blur-xl flex flex-col border-r-primary/10">
        <SheetHeader className="p-6 pb-2">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetClose asChild>
            <Link href={homeHref} className="flex items-center gap-3 font-medium hover:opacity-80 transition-opacity">
              <CookMitraLogo width={34} height={34} className="w-8 h-8" />
              <span className="font-sans text-xl font-bold text-foreground flex items-center">
                CookMitra
                <span className="text-base font-medium text-foreground/80 ml-1">AI</span>
              </span>
            </Link>
          </SheetClose>
        </SheetHeader>
        <ScrollArea className="flex-grow">
          <nav className="flex flex-col gap-1 p-4">
            <div className="flex flex-col gap-1">
              {mainNavLinks.map(link => (
                <SheetClose asChild key={link.href}>
                  <NavLink href={link.href} icon={link.icon}>
                    {link.label}
                  </NavLink>
                </SheetClose>
              ))}
            </div>
            
            <Separator className="my-3 opacity-50" />
            
            <div className="flex flex-col gap-1">
              <SheetClose asChild>
                <NavLink href="/settings" icon={Settings}>
                  {t('nav.settings')}
                </NavLink>
              </SheetClose>
            </div>
          </nav>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export function IconSidebar() {
  const { user } = useUser();
  const { t } = useLanguage();
  const homeHref = user ? "/home" : "/";
  const mainNavLinks = getMainNavLinks(homeHref, t);

  return (
    <aside className="hidden md:flex fixed top-0 left-0 h-full w-16 bg-background flex-col items-center justify-between py-3 border-r z-30 animate-in fade-in slide-in-from-left duration-300">
      <div className="flex flex-col items-center gap-y-2.5 w-full">
        {/* Drawer Trigger (mobile + desktop menu access) */}
        <Sheet>
          <Tooltip>
            <TooltipTrigger asChild>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="group h-10 w-10 rounded-xl hover:bg-muted transition-transform active:scale-95" aria-label="Open Navigation Menu">
                  <Menu className="h-5 w-5 text-stone-700 dark:text-stone-300 group-hover:text-foreground" />
                </Button>
              </SheetTrigger>
            </TooltipTrigger>
            <TooltipContent side="right" className="text-xs font-medium hidden md:block">
              <p>Menu</p>
            </TooltipContent>
          </Tooltip>
          <SheetContent side="left" className="w-[280px] p-0 bg-card/95 backdrop-blur-xl flex flex-col border-r-primary/10">
            <SheetHeader className="p-6 pb-2">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetClose asChild>
                <Link href={homeHref} className="flex items-center gap-3 font-medium hover:opacity-80 transition-opacity">
                  <CookMitraLogo width={34} height={34} className="w-8 h-8" />
                  <span className="font-sans text-xl font-bold text-foreground flex items-center">
                    CookMitra
                    <span className="text-base font-medium text-foreground/80 ml-1">AI</span>
                  </span>
                </Link>
              </SheetClose>
            </SheetHeader>
            <ScrollArea className="flex-grow">
              <nav className="flex flex-col gap-1 p-4">
                <div className="flex flex-col gap-1">
                  {mainNavLinks.map(link => (
                    <SheetClose asChild key={link.href}>
                      <NavLink href={link.href} icon={link.icon}>
                        {link.label}
                      </NavLink>
                    </SheetClose>
                  ))}
                </div>
                
                <Separator className="my-3 opacity-50" />
                
                <div className="flex flex-col gap-1">
                  <SheetClose asChild>
                    <NavLink href="/settings" icon={Settings}>
                      {t('nav.settings')}
                    </NavLink>
                  </SheetClose>
                </div>
              </nav>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        {/* Divider line under hamburger menu */}
        <div className="w-8 h-px bg-border/80 my-0.5" />

        {/* Desktop-only vertical rail icons in exact visual sequence */}
        <div className="hidden md:flex flex-col items-center gap-y-1.5 overflow-y-auto max-h-[calc(100vh-130px)] no-scrollbar py-1">
          {mainNavLinks.map(link => {
            const Icon = link.icon;
            return (
              <TooltipLink key={link.href} href={link.href} tooltip={link.label}>
                <Icon className={iconClasses} />
              </TooltipLink>
            );
          })}
        </div>
      </div>

      {/* Desktop bottom icon: Settings */}
      <div className="hidden md:flex flex-col items-center pb-1">
        <TooltipLink href="/settings" tooltip={t('nav.settings')}>
          <Settings className={iconClasses} />
        </TooltipLink>
      </div>
    </aside>
  );
}
