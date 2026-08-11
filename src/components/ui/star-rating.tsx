'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
        const isFilled = starValue <= (hoverRating || rating);
        return (
          <motion.div
            key={starValue}
            whileHover={!readOnly ? { scale: 1.3, rotate: 6 } : {}}
            whileTap={!readOnly ? { scale: 0.85 } : {}}
            transition={{ type: "spring", stiffness: 450, damping: 15 }}
            className="inline-block"
          >
            <Star
              size={size}
              className={cn(
                'transition-colors duration-200',
                isFilled ? fillColor : emptyColor,
                !readOnly && 'cursor-pointer'
              )}
              onMouseEnter={() => handleMouseEnter(starValue)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(starValue)}
              fill={isFilled ? 'currentColor' : 'none'}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
