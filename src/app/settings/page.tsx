'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Loader2, Settings as SettingsIcon, Sun, Moon, Laptop } from 'lucide-react';

export default function SettingsPage() {
  const { user, isUserLoading } = useUser();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router, mounted]);

  if (!mounted || isUserLoading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="bg-background animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="container mx-auto pt-8 pb-24 md:pt-12 md:pb-32 px-4">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="mb-8">
              <h1 className="font-headline text-4xl font-bold flex items-center gap-3">
                <SettingsIcon className="h-8 w-8 text-primary animate-spin-slow" /> Settings
              </h1>
              <p className="text-muted-foreground mt-2">Manage your account and app preferences.</p>
            </div>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>Choose how CookMitra looks on your device.</CardDescription>
              </CardHeader>
              <CardContent>
                <ThemeSelector />
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Your verified login details.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="flex flex-col space-y-1">
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest text-[10px]">Email Address</span>
                    <p className="font-medium">{user.email}</p>
                 </div>
                 <div className="flex flex-col space-y-1 pt-4 border-t">
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest text-[10px]">Member Since</span>
                    <p className="font-medium">{user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}</p>
                 </div>
              </CardContent>
            </Card>
          </div>
        </div>
    </div>
  );
}

function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <RadioGroup value={theme} onValueChange={setTheme} className="grid sm:grid-cols-3 gap-4">
      <Label className="rounded-md border-2 border-muted bg-popover p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary transition-all cursor-pointer active:scale-95 group">
        <RadioGroupItem value="light" id="light" className="sr-only" />
        <Sun className="h-6 w-6 group-hover:rotate-12 transition-transform" />
        Light
      </Label>
      <Label className="rounded-md border-2 border-muted bg-popover p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary transition-all cursor-pointer active:scale-95 group">
        <RadioGroupItem value="dark" id="dark" className="sr-only" />
        <Moon className="h-6 w-6 group-hover:-rotate-12 transition-transform" />
        Dark
      </Label>
      <Label className="rounded-md border-2 border-muted bg-popover p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary transition-all cursor-pointer active:scale-95 group">
        <RadioGroupItem value="system" id="system" className="sr-only" />
        <Laptop className="h-6 w-6 group-hover:scale-110 transition-transform" />
        System
      </Label>
    </RadioGroup>
  );
}
