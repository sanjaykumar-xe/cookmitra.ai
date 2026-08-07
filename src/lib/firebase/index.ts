'use client';

import { app, auth, firestore, firebaseConfig } from './config';
import type { FirebaseApp } from 'firebase/app';

export function initializeFirebase() {
  return {
    firebaseApp: app,
    auth,
    firestore,
  };
}

export function getSdks(firebaseApp: FirebaseApp = app) {
  return {
    firebaseApp,
    auth,
    firestore,
  };
}

export * from './config';
export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';

