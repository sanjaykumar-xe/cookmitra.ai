'use client';

import Link from "next/link";
import { Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthButton } from "@/components/auth/auth-button";
import { useUser } from "@/lib/firebase";
import { useLanguage } from "@/context/language-context";

export function HeaderAuthActions({ isLandingPage }: { isLandingPage: boolean }) {
  const { user } = useUser();
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-4 h-9">
      {user && !isLandingPage ? (
        <>
          <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex h-9 w-9 p-0 hover:bg-transparent hover:opacity-70 text-muted-foreground">
              <Link href="/my-recipes" aria-label="My Recipes">
                  <Bookmark className="h-5 w-5" />
              </Link>
          </Button>
          <AuthButton />
        </>
      ) : (
        <>
          <Button variant="ghost" asChild className={`p-0 h-auto font-medium ${isLandingPage ? "text-white" : "text-foreground"} hover:text-primary hover:bg-transparent no-underline`}>
              <Link href="/login">{t('nav.login')}</Link>
          </Button>
          <Button size="sm" asChild className="rounded-full px-5 h-9 font-bold bg-primary text-[#412402] hover:bg-primary/90 shadow-md border-0 transition-all active:scale-95">
              <Link href="/signup">{t('nav.signup')}</Link>
          </Button>
        </>
      )}
    </div>
  );
}