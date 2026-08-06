'use client';

import { CookMitraLogo } from '@/components/icons/cook-mitra-logo';
import { ChutkiIcon } from '@/components/icons/chutki-icon';

/**
 * Verification Page
 * Renders both the official Tabler flame logo and the flat Chef Momo mascot
 * at large sizes for final design confirmation.
 */
export default function VerifyLogoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 p-20 space-y-20">
      
      {/* Brand Logo Verification */}
      <div className="flex flex-col items-center">
        <div className="border border-zinc-200 shadow-sm p-16 bg-white rounded-2xl mb-8">
            <CookMitraLogo width="200" height="200" />
        </div>
        <div className="text-center space-y-4">
            <h1 className="font-mono text-xl font-bold text-zinc-900 tracking-tight uppercase">
            Official Brand Logo
            </h1>
            <div className="space-y-1 text-zinc-500 font-mono text-xs">
            <p>Size: 200 x 200 px</p>
            <p>Source: Tabler ti-flame Verbatim Path</p>
            <p>Color: #F4A21A (Brand Orange)</p>
            </div>
        </div>
      </div>

      {/* Mascot Icon Verification */}
      <div className="flex flex-col items-center">
        <div className="border border-zinc-200 shadow-sm p-16 bg-white rounded-2xl mb-8">
            <ChutkiIcon width="128" height="128" />
        </div>
        <div className="text-center space-y-4">
            <h1 className="font-mono text-xl font-bold text-zinc-900 tracking-tight uppercase">
            Chef Momo Mascot (Flat)
            </h1>
            <div className="space-y-1 text-zinc-500 font-mono text-xs">
            <p>Size: 128 x 128 px</p>
            <p>Style: Flat Vector (3-Color)</p>
            <p>Crust: #FAC775 | Cheese: #EF9F27 | Pepperoni: #A32D2D</p>
            </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-zinc-100 rounded-xl max-w-2xl text-[10px] font-mono text-zinc-500 leading-relaxed">
        <p className="mb-2 uppercase font-black opacity-50">Global Identity Standards</p>
        <p>1. Terminology: Always use "Login" (not Sign In).</p>
        <p>2. Typography: Use medium weights for names/labels to avoid visual clutter.</p>
        <p>3. Colors: Brand Orange #F4A21A is restricted to interactive elements and the primary flame logo.</p>
      </div>
    </div>
  );
}
