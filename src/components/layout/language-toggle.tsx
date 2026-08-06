'use client';

import * as React from "react";
import { Languages, Check } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'hi', name: 'हिन्दी' },
] as const;

export function LanguageToggle() {
  const { language, setLanguage, mounted } = useLanguage();

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="h-9 px-2 hover:bg-transparent hover:opacity-70 text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Languages className="h-[18px] w-[18px] mr-2" />
          <span className="text-xs font-bold uppercase tracking-widest">
            {mounted ? currentLang.code : 'EN'}
          </span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 rounded-xl">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code} 
            onClick={() => setLanguage(lang.code)}
            className="font-medium cursor-pointer flex items-center justify-between"
          >
            {lang.name}
            {language === lang.code && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
