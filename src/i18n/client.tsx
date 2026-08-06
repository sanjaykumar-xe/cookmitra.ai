'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getOptions } from './config';

// Import all translations directly
import en from './locales/en/translation.json';
import hi from './locales/hi/translation.json';
import ta from './locales/ta/translation.json';
import te from './locales/te/translation.json';
import kn from './locales/kn/translation.json';
import ml from './locales/ml/translation.json';
import mr from './locales/mr/translation.json';
import bn from './locales/bn/translation.json';
import gu from './locales/gu/translation.json';
import pa from './locales/pa/translation.json';

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  ta: { translation: ta },
  te: { translation: te },
  kn: { translation: kn },
  ml: { translation: ml },
  mr: { translation: mr },
  bn: { translation: bn },
  gu: { translation: gu },
  pa: { translation: pa },
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    ...getOptions(),
    resources,
    lng: undefined, // let browser language detector handle it
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'path', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

// The useTranslation hook should be imported from 'react-i18next' directly in components.
// This file is for initialization only.
