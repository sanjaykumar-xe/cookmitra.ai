'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, RefreshCw, Play, Pause, Eye } from 'lucide-react';
import Carousel, { DEFAULT_CAROUSEL_ITEMS } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

export default function CarouselPlayground() {
  const [baseWidth, setBaseWidth] = useState(360);
  const [autoplay, setAutoplay] = useState(true);
  const [autoplayDelay, setAutoplayDelay] = useState(3000);
  const [pauseOnHover, setPauseOnHover] = useState(true);
  const [loop, setLoop] = useState(true);
  const [round, setRound] = useState(false);

  return (
    <div className="min-h-screen bg-stone-950 text-white flex flex-col overflow-x-hidden">
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm" className="text-stone-300 hover:text-white rounded-full">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Link>
          </Button>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#F4A21A]" />
            <h1 className="font-headline text-lg font-bold">React Bits Carousel Playground</h1>
          </div>
        </div>
        <div className="text-xs text-stone-400">
          Interactive 3D Card Carousel
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Carousel Preview Area */}
        <div className="flex-1 flex flex-col items-center justify-center min-h-[500px] w-full">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold font-headline mb-2">3D Perspective Carousel</h2>
            <p className="text-xs text-stone-400">Drag or swipe horizontally to rotate cards in 3D space</p>
          </div>

          <div className="relative flex items-center justify-center py-6">
            <Carousel
              items={DEFAULT_CAROUSEL_ITEMS}
              baseWidth={baseWidth}
              autoplay={autoplay}
              autoplayDelay={autoplayDelay}
              pauseOnHover={pauseOnHover}
              loop={loop}
              round={round}
            />
          </div>
        </div>

        {/* Controls Sidebar */}
        <Card className="w-full lg:w-80 p-6 bg-stone-900/80 border-stone-800 text-stone-100 rounded-3xl space-y-6">
          <h3 className="font-bold text-sm uppercase tracking-wider text-[#F4A21A] flex items-center gap-2">
            <span>Configuration</span>
          </h3>

          <div className="space-y-4 text-xs">
            {/* baseWidth Slider */}
            <div className="space-y-2">
              <div className="flex justify-between font-medium">
                <span>Base Width</span>
                <span className="text-[#F4A21A]">{baseWidth}px</span>
              </div>
              <Slider
                value={[baseWidth]}
                min={260}
                max={480}
                step={10}
                onValueChange={([val]) => setBaseWidth(val)}
              />
            </div>

            {/* autoplayDelay Slider */}
            <div className="space-y-2">
              <div className="flex justify-between font-medium">
                <span>Autoplay Delay</span>
                <span className="text-[#F4A21A]">{autoplayDelay}ms</span>
              </div>
              <Slider
                value={[autoplayDelay]}
                min={1500}
                max={6000}
                step={500}
                onValueChange={([val]) => setAutoplayDelay(val)}
              />
            </div>

            {/* Switches */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="autoplay" className="cursor-pointer">Autoplay</Label>
                <Switch id="autoplay" checked={autoplay} onCheckedChange={setAutoplay} />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="loop" className="cursor-pointer">Infinite Loop</Label>
                <Switch id="loop" checked={loop} onCheckedChange={setLoop} />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="pauseOnHover" className="cursor-pointer">Pause on Hover</Label>
                <Switch id="pauseOnHover" checked={pauseOnHover} onCheckedChange={setPauseOnHover} />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="round" className="cursor-pointer">Round Variant (1:1)</Label>
                <Switch id="round" checked={round} onCheckedChange={setRound} />
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="w-full mt-4 rounded-full border-stone-700 hover:bg-stone-800 text-stone-200"
              onClick={() => {
                setBaseWidth(360);
                setAutoplay(true);
                setAutoplayDelay(3000);
                setPauseOnHover(true);
                setLoop(true);
                setRound(false);
              }}
            >
              <RefreshCw className="h-3.5 w-3.5 mr-2" />
              Reset Defaults
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
