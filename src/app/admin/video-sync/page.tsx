'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * This page has been decommissioned.
 * Redirecting to home.
 */
export default function VideoSyncPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>This feature is no longer available.</p>
    </div>
  );
}
