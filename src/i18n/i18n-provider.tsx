'use client';

import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { type ReactNode } from 'react';

// Initialize i18next instance
import './client';

export function I18nProvider({ children }: { children: ReactNode }) {
  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  );
}
