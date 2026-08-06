'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { translations, type TranslationKey, type SupportedLanguage } from '@/lib/translations';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  mounted: boolean;
  t: (key: TranslationKey, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('cookmitra_language') as SupportedLanguage;
    if (saved && ['en', 'ta', 'hi'].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem('cookmitra_language', lang);
    
    // Update HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  const t = useMemo(() => {
    return (key: TranslationKey, params?: Record<string, string | number>): string => {
      // ALWAYS use English for server-side or first-pass client render
      const dict = !mounted ? translations.en : translations[language];
      let value = dict[key] || translations.en[key] || key;

      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          value = value.replace(`{{${k}}}`, String(v));
        });
      }

      return value;
    };
  }, [language, mounted]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, mounted, t }}>
      <div className={mounted ? `lang-${language}` : 'lang-en'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
