'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  size?: number;
  fillColor?: string;
  emptyColor?: string;
  onRatingChange?: (rating: number) => void;
  readOnly?: boolean;
}

export function StarRating({
  rating,
  totalStars = 5,
  size = 20,
  fillColor = 'text-primary',
  emptyColor = 'text-muted-foreground/50',
  onRatingChange,
  readOnly = false,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index: number) => {
    if (readOnly) return;
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    if (readOnly) return;
    setHoverRating(0);
  };

  const handleClick = (index: number) => {
    if (readOnly || !onRatingChange) return;
    onRatingChange(index);
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }, (_, i) => {
        const starValue = i + 1;
        return (
          <Star
            key={starValue}
            size={size}
            className={cn(
              'transition-colors',
              starValue <= (hoverRating || rating) ? fillColor : emptyColor,
              !readOnly && 'cursor-pointer'
            )}
            onMouseEnter={() => handleMouseEnter(starValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starValue)}
            fill={starValue <= (hoverRating || rating) ? 'currentColor' : 'none'}
          />
        );
      })}
    </div>
  );
}
