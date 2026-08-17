import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * CookMitraLogo - The official brand logo featuring Chef Momo character icon.
 */
export const CookMitraLogo = ({
  width = 48,
  height = 48,
  className,
  ...props
}: {
  width?: number | string;
  height?: number | string;
  className?: string;
  [key: string]: any;
}) => {
  const sizeNum = typeof width === 'number' ? width : 48;
  return (
    <img
      src="/chef-momo-logo.png"
      alt="CookMitra Chef Momo Logo"
      width={sizeNum}
      height={sizeNum}
      className={cn("object-contain rounded-full shrink-0 inline-block shadow-sm transition-transform group-hover:scale-105", className)}
      style={{ width: typeof width === 'number' ? `${width}px` : width, height: typeof height === 'number' ? `${height}px` : height }}
      {...props}
    />
  );
};
