'use client';

import { SignupForm } from '@/components/auth/signup-form';
import { CookMitraLogo } from '@/components/icons/cook-mitra-logo';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function SignupPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

  return (
    <div className="flex min-h-screen overflow-hidden bg-background">
      {/* Left Panel: Visual (Hidden on Mobile) */}
      <div className="relative hidden w-1/2 md:block">
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#D85A30]/80 to-[#4A1B0C]/90" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Indian Spices and Food"
            fill
            className="object-cover"
            priority
            data-ai-hint="indian kitchen"
          />
        )}
        
        {/* Top Left Logo Lockup - Matched with Login Page */}
        <div className="absolute left-10 top-10 z-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <CookMitraLogo width={40} height={40} className="w-10 h-10" />
            <span className="font-headline text-[22px] font-bold text-[#FAEEDA] leading-none flex items-center">
              CookMitra<span className="ml-1 text-[16px] font-normal opacity-70 text-white/70">AI</span>
            </span>
          </Link>
        </div>

        {/* Bottom Content - Matched with Login Page Branding */}
        <div className="absolute top-[58%] left-12 right-12 z-20 space-y-2 -translate-y-1/2">
          <h2 className="font-headline text-[32px] leading-tight text-[#FAEEDA] lg:text-[32px]">
            Turn Your Ingredients Into Delicious Recipes
          </h2>
          <p className="text-[14px] font-normal text-[#F0C080]">
            AI-powered Indian cooking companion
          </p>
        </div>
      </div>

      {/* Right Panel: Form */}
      <div className="flex w-full flex-col justify-center px-6 pt-12 pb-24 md:w-1/2 lg:px-24 xl:px-32 relative">
        <div className="mx-auto w-full max-w-md">
          {/* Back to Landing Page - Direct Link to avoid Button styling regressions */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
            >
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-[13px] font-normal">Back</span>
            </Link>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <h1 className="font-headline text-[36px] font-semibold tracking-tight text-foreground">
              Create an Account
            </h1>
            <p className="text-muted-foreground text-lg">
              Join to save recipes and unlock features
            </p>
          </div>

          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <SignupForm />
          </div>

          <div className="mt-5 text-center text-sm md:text-left">
            <span className="text-muted-foreground font-medium">Already have an account?</span>{' '}
            <Link href="/login" className="font-bold text-primary hover:underline underline-offset-4">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
