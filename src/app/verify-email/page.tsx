'use client';

import { useEffect, useState } from 'react';
import { useUser, useAuth } from '@/lib/firebase';
import { sendEmailVerification } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Mail, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function VerifyEmailPage() {
  const { user, isUserLoading } = useUser();
  const [mounted, setMounted] = useState(false);
  const auth = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isUserLoading) {
      if (!user) {
        router.push('/login');
      } else if (user.emailVerified) {
        router.push('/home');
      }
    }
  }, [user, isUserLoading, router, mounted]);

  useEffect(() => {
    if (!mounted || !user) return;
    const interval = setInterval(async () => {
        await user.reload();
        if (user.emailVerified) {
            router.push('/home');
        }
    }, 5000);
    return () => clearInterval(interval);
  }, [user, router, mounted]);

  const handleResend = async () => {
    if (!user) return;
    setIsSending(true);
    try {
      await sendEmailVerification(user);
      toast({
        title: 'Verification email sent',
      });
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/login');
  };

  if (!mounted || isUserLoading || !user || user.emailVerified) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="font-headline text-2xl">Verify Your Email Address</CardTitle>
          <CardDescription>
            A verification link has been sent to <strong>{user.email}</strong>. Please check your inbox (and spam folder) to continue.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={handleResend} disabled={isSending} className="w-full">
            {isSending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Resend Verification Email
          </Button>
          <Button onClick={handleLogout} variant="outline" className="w-full">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Back to Sign In</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
