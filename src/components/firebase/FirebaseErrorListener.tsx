'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/lib/firebase/error-emitter';
import type { FirestorePermissionError } from '@/lib/firebase/errors';

export function FirebaseErrorListener() {

  useEffect(() => {
    const handleError = (error: FirestorePermissionError) => {
      console.error(error); // This will show the rich error in the dev console
    };

    errorEmitter.on('permission-error', handleError);

    return () => {
      errorEmitter.off('permission-error', handleError);
    };
  }, []);

  return null;
}
