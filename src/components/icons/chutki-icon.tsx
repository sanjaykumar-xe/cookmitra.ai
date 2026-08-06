import * as React from 'react';

/**
 * ChutkiIcon - The Chef Momo AI mascot.
 * Flat, clean 2D design using solid color blocks.
 * Palette: #FAC775 (Crust), #EF9F27 (Cheese), #A32D2D (Pepperoni), #854F0B (Stroke).
 */
export const ChutkiIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        {/* Outer Golden Crust with Brown Stroke */}
        <circle 
            cx="32" 
            cy="32" 
            r="28" 
            fill="#FAC775" 
            stroke="#854F0B" 
            strokeWidth="2"
        />
        
        {/* Flat Orange-Amber Cheese Layer */}
        <circle 
            cx="32" 
            cy="32" 
            r="22" 
            fill="#EF9F27" 
        />

        {/* 5 Flat Dark Red-Brown Pepperoni Toppings */}
        <circle cx="22" cy="24" r="3.5" fill="#A32D2D" />
        <circle cx="40" cy="22" r="3.5" fill="#A32D2D" />
        <circle cx="34" cy="36" r="3.5" fill="#A32D2D" />
        <circle cx="20" cy="38" r="3.5" fill="#A32D2D" />
        <circle cx="44" cy="38" r="3.5" fill="#A32D2D" />
    </svg>
);
