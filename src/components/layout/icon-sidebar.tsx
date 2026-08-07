'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  Plus,
  Settings,
  Home,
  Utensils,
  HeartPulse,
  MessageSquare,
  ShoppingBasket,
  Users,
  Library,
  BookOpen,
  CalendarDays,
  LifeBuoy,
} from 'lucide-react';
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

const iconClasses = "h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-200";

const TooltipLink = ({ href, tooltip, children, ...props }: { href: string, tooltip: string, children: React.ReactNode, [key: string]: any }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link 
          href={href} 
          {...props} 
          className={cn(
            "group p-3 rounded-lg hover:bg-muted transition-all active:scale-95 relative", 
            isActive ? "bg-muted/80 shadow-sm" : ""
          )}
        >
          {isActive && (
            <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 h-8 w-[3px] bg-primary rounded-r-full shadow-[0_0_8px_rgba(245,166,35,0.6)]" />
          )}
          <div className={cn(isActive && "active-icon-glow [&>svg]:text-primary")}>
            {children}
          </div>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="animate-in fade-in slide-in-from-left-2 duration-300">
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  )
};

const NavLink = ({ href, children, icon: Icon, ...props }: { href: string, children: React.ReactNode, icon: React.ElementType, [key: string]: any }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link 
      href={href} 
      {...props}
      className={cn("flex items-center gap-4 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all active:scale-[0.98]", isActive && "bg-muted text-foreground font-medium")}
    >
      <Icon className={cn("h-5 w-5 transition-transform group-hover:scale-110", isActive && "text-primary")} />
      <span className="font-medium">{children}</span>
    </Link>
  )
}

/**
 * Persistent Icon Rail Sidebar.
 * Handles primary navigation via icons on the rail and detailed navigation via a drawer.
 */
export function IconSidebar() {
  const { user } = useUser();

  const homeHref = user ? "/home" : "/";

  // Navigation order synchronized with user request: Core actions -> Planning/Health -> Reference -> Community
  const mainNavLinks = [
      { href: homeHref, label: 'Home', icon: Home },
      { href: "/recipes", label: 'Recipes Explorer', icon: Utensils },
      { href: "/ai-recipes", label: 'Generate a Recipe', icon: Plus },
      { href: "/ai-chat", label: 'Chef Momo AI', icon: MessageSquare },
      { href: "/healthy-meal-planner", label: 'Plan My Week', icon: CalendarDays },
      { href: "/healing-foods", label: 'Healing Foods', icon: HeartPulse },
      { href: "/pantry", label: "My Pantry", icon: ShoppingBasket },
      { href: "/encyclopedia", label: 'Encyclopedia', icon: BookOpen },
      { href: "/community", label: 'Community', icon: Users },
      { href: "/my-recipes", label: 'Saved Recipes', icon: Library },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-16 bg-background flex flex-col items-center justify-between py-3 border-r z-[60] animate-in fade-in slide-in-from-left duration-500">
      <div className="flex flex-col items-center gap-y-4">
        <Sheet>
          <Tooltip>
              <TooltipTrigger asChild>
                  <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="group h-12 w-12 hover:bg-muted transition-transform active:scale-95">
                           <Menu className="h-6 w-6 text-muted-foreground group-hover:text-foreground" />
                           <span className="sr-only">Open Menu</span>
                      </Button>
                  </SheetTrigger>
              </TooltipTrigger>
              <TooltipContent side="right">
                  <p>Open Menu</p>
              </TooltipContent>
          </Tooltip>
          <SheetContent side="left" className="w-[280px] p-0 bg-card/95 backdrop-blur-xl flex flex-col border-r-primary/10">
            <SheetHeader className="p-6 pb-2">
              <SheetTitle className="sr-only">Menu</SheetTitle>
               <SheetClose asChild>
                  <Link
                  href={homeHref}
                  className="flex items-center gap-2 font-medium hover:opacity-80 transition-opacity"
                  >
                  <CookMitraLogo className="h-6 w-6 text-primary" />
                  <span className="font-headline text-xl font-medium">
                      CookMitra
                      <span className="text-base font-normal text-muted-foreground ml-1">
                      AI
                      </span>
                  </span>
                  </Link>
               </SheetClose>
            </SheetHeader>
            <ScrollArea className="flex-grow">
              <nav className="flex flex-col gap-1 p-4">
                  <div className="flex flex-col gap-1">
                      {mainNavLinks.map(link => {
                          const isRestricted = ["/ai-recipes", "/healthy-meal-planner", "/pantry", "/ai-chat", "/my-recipes", "/encyclopedia", "/healing-foods"].includes(link.href);
                          if (!user && isRestricted) return null;
                          return (
                              <SheetClose asChild key={link.href}><NavLink href={link.href} icon={link.icon}>{link.label}</NavLink></SheetClose>
                          );
                      })}
                  </div>
                  
                  <Separator className="my-4 opacity-50" />
                  
                  <div className="flex flex-col gap-1">
                     <SheetClose asChild><NavLink href="/pricing" icon={Plus}>Pricing</NavLink></SheetClose>
                     <SheetClose asChild><NavLink href="/faq" icon={LifeBuoy}>FAQs</NavLink></SheetClose>
                     <SheetClose asChild><NavLink href="/settings" icon={Settings}>Settings</NavLink></SheetClose>
                  </div>
              </nav>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        <div className="w-8 h-px bg-border my-2" />

        {/* Desktop-only vertical rail icons in sequential order */}
        <div className="hidden md:flex flex-col items-center gap-y-4">
          <TooltipLink href={homeHref} tooltip="Home">
              <Home className={iconClasses} />
          </TooltipLink>
          <TooltipLink href="/recipes" tooltip="Recipes Explorer">
              <Utensils className={iconClasses} />
          </TooltipLink>
          <TooltipLink href="/ai-recipes" tooltip="Generate a Recipe">
              <Plus className={iconClasses} />
          </TooltipLink>
          <TooltipLink href="/ai-chat" tooltip="Chef Momo AI">
              <MessageSquare className={iconClasses} />
          </TooltipLink>
          <TooltipLink href="/healthy-meal-planner" tooltip="Plan My Week">
              <CalendarDays className={iconClasses} />
          </TooltipLink>
          <TooltipLink href="/healing-foods" tooltip="Healing Foods">
              <HeartPulse className={iconClasses} />
          </TooltipLink>
          <TooltipLink href="/pantry" tooltip="My Pantry">
              <ShoppingBasket className={iconClasses} />
          </TooltipLink>
          <TooltipLink href="/encyclopedia" tooltip="Encyclopedia">
              <BookOpen className={iconClasses} />
          </TooltipLink>
          <TooltipLink href="/community" tooltip="Community">
              <Users className={iconClasses} />
          </TooltipLink>
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-4">
           <TooltipLink href="/settings" tooltip="Settings">
              <Settings className={iconClasses} />
          </TooltipLink>
      </div>
    </aside>
  );
}
