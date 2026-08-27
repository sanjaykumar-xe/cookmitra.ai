'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@/lib/firebase';
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
        <Loader2 className="h-12 w-12 animate-spin text-[#F4A21A]" />
      </div>
    );
  }

  return (
    <div className="content-container py-8 md:py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="mb-8">
          <h1 className="font-headline text-fluid-h1 font-bold tracking-tight text-stone-900 dark:text-stone-100 flex items-center gap-3">
            <SettingsIcon className="h-8 w-8 text-[#F4A21A]" /> Settings
          </h1>
          <p className="mt-3 text-fluid-subtitle text-muted-foreground font-medium opacity-80">
            Manage your account and app preferences.
          </p>
        </div>

        <Card className="hover:shadow-md transition-shadow rounded-[2rem] border-primary/10">
          <CardHeader>
            <CardTitle className="font-headline font-bold text-xl">Appearance</CardTitle>
            <CardDescription className="text-muted-foreground text-sm font-medium opacity-80">
              Choose how CookMitra looks on your device.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ThemeSelector />
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow rounded-[2rem] border-primary/10">
          <CardHeader>
            <CardTitle className="font-headline font-bold text-xl">Account Information</CardTitle>
            <CardDescription className="text-muted-foreground text-sm font-medium opacity-80">
              Your verified login details.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/80">Email Address</span>
              <p className="font-bold text-foreground text-base">{user.email}</p>
            </div>
            <div className="flex flex-col space-y-1 pt-4 border-t border-border/40">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/80">Member Since</span>
              <p className="font-bold text-foreground text-base">
                {user.metadata.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ThemeSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <RadioGroup value={theme} onValueChange={setTheme} className="grid sm:grid-cols-3 gap-4">
      <Label className="rounded-2xl border-2 border-muted bg-popover p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-[#F4A21A] transition-all cursor-pointer active:scale-95 group font-bold">
        <RadioGroupItem value="light" id="light" className="sr-only" />
        <Sun className="h-6 w-6 group-hover:rotate-12 transition-transform text-[#F4A21A]" />
        Light
      </Label>
      <Label className="rounded-2xl border-2 border-muted bg-popover p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-[#F4A21A] transition-all cursor-pointer active:scale-95 group font-bold">
        <RadioGroupItem value="dark" id="dark" className="sr-only" />
        <Moon className="h-6 w-6 group-hover:-rotate-12 transition-transform text-indigo-400" />
        Dark
      </Label>
      <Label className="rounded-2xl border-2 border-muted bg-popover p-4 flex flex-col items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-[#F4A21A] transition-all cursor-pointer active:scale-95 group font-bold">
        <RadioGroupItem value="system" id="system" className="sr-only" />
        <Laptop className="h-6 w-6 group-hover:scale-110 transition-transform text-slate-500" />
        System
      </Label>
    </RadioGroup>
  );
}
