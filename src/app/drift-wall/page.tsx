'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Sliders, RotateCcw } from 'lucide-react';
import DriftWall, { POPULAR_INDIAN_FOOD_TILES } from '@/components/ui/drift-wall';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export default function DriftWallPlayground() {
  const [columns, setColumns] = useState(5);
  const [speed, setSpeed] = useState(38);
  const [tilt, setTilt] = useState(15);
  const [turn, setTurn] = useState(-12);
  const [lift, setLift] = useState(64);
  const [dim, setDim] = useState(0.6);
  const [grayscale, setGrayscale] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [showControls, setShowControls] = useState(true);

  const resetDefaults = () => {
    setColumns(5);
    setSpeed(38);
    setTilt(15);
    setTurn(-12);
    setLift(64);
    setDim(0.6);
    setGrayscale(false);
    setDirection('up');
  };

  return (
    <div className="relative min-h-screen bg-stone-950 text-white flex flex-col overflow-hidden">
      {/* Top Bar */}
      <header className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-stone-950/90 to-transparent backdrop-blur-xs">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="sm" className="text-stone-300 hover:text-white hover:bg-stone-800/60 rounded-full">
            <Link href="/home" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Dashboard</span>
            </Link>
          </Button>
          <div>
            <h1 className="font-headline font-bold text-lg text-white flex items-center gap-2">
              <span>DriftWall Component Preview</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-[#F4A21A] border border-amber-500/30">
                Localhost Experiment
              </span>
            </h1>
            <p className="text-xs text-stone-400">
              Popular Indian Foods: Biryani, Dosa, Butter Chicken, Idli, Paneer Tikka & more
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowControls(!showControls)}
            className="rounded-full bg-stone-900 border-stone-700 text-stone-200 hover:bg-stone-800 text-xs"
          >
            <Sliders className="h-3.5 w-3.5 mr-1.5" />
            {showControls ? 'Hide Controls' : 'Show Controls'}
          </Button>
        </div>
      </header>

      {/* Main DriftWall Viewport */}
      <main className="flex-1 w-full h-screen relative">
        <DriftWall
          items={POPULAR_INDIAN_FOOD_TILES}
          columns={columns}
          tileWidth={220}
          tileHeight={144}
          gap={18}
          tilt={tilt}
          turn={turn}
          perspective={1100}
          depth={100}
          speed={speed}
          direction={direction}
          variance={0.45}
          parallax={0.65}
          lift={lift}
          fade={0.65}
          dim={dim}
          grayscale={grayscale}
          overlayColor="#060010"
          className="w-full h-full"
        />

        {/* Floating Controls HUD */}
        {showControls && (
          <div className="absolute bottom-6 right-6 z-40 w-80 bg-stone-900/90 border border-stone-800 backdrop-blur-md rounded-2xl p-4 shadow-2xl text-xs space-y-3.5">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2">
              <span className="font-bold text-stone-200 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-[#F4A21A]" />
                Live Tweaks
              </span>
              <button
                onClick={resetDefaults}
                className="text-stone-400 hover:text-white flex items-center gap-1 text-[11px]"
              >
                <RotateCcw className="h-3 w-3" /> Reset
              </button>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-stone-300">
                <span>Columns</span>
                <span className="text-[#F4A21A] font-mono">{columns}</span>
              </div>
              <Slider
                value={[columns]}
                min={3}
                max={8}
                step={1}
                onValueChange={([val]) => setColumns(val)}
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-stone-300">
                <span>Speed</span>
                <span className="text-[#F4A21A] font-mono">{speed} px/s</span>
              </div>
              <Slider
                value={[speed]}
                min={10}
                max={100}
                step={2}
                onValueChange={([val]) => setSpeed(val)}
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-stone-300">
                <span>Tilt (Pitch)</span>
                <span className="text-[#F4A21A] font-mono">{tilt}°</span>
              </div>
              <Slider
                value={[tilt]}
                min={0}
                max={35}
                step={1}
                onValueChange={([val]) => setTilt(val)}
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-stone-300">
                <span>Turn (Yaw)</span>
                <span className="text-[#F4A21A] font-mono">{turn}°</span>
              </div>
              <Slider
                value={[turn]}
                min={-35}
                max={35}
                step={1}
                onValueChange={([val]) => setTurn(val)}
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-stone-300">
                <span>3D Hover Lift</span>
                <span className="text-[#F4A21A] font-mono">{lift} px</span>
              </div>
              <Slider
                value={[lift]}
                min={20}
                max={120}
                step={4}
                onValueChange={([val]) => setLift(val)}
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={() => setDirection(d => d === 'up' ? 'down' : 'up')}
                className="px-3 py-1 bg-stone-800 hover:bg-stone-700 rounded-lg text-stone-200"
              >
                Dir: <span className="font-semibold text-[#F4A21A] capitalize">{direction}</span>
              </button>
              <button
                onClick={() => setGrayscale(g => !g)}
                className="px-3 py-1 bg-stone-800 hover:bg-stone-700 rounded-lg text-stone-200"
              >
                Grayscale: <span className="font-semibold text-[#F4A21A]">{grayscale ? 'On' : 'Off'}</span>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
