'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './scroll-float.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollFloatProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  scrub?: boolean | number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span';
  style?: React.CSSProperties;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1.2,
  ease = 'back.out(2)',
  scrollStart = 'top 85%',
  scrollEnd = 'bottom 60%',
  stagger = 0.045,
  scrub = false,
  as: Tag = 'h2',
  style
}) => {
  const containerRef = useRef<HTMLElement | null>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="char" key={index}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charElements = el.querySelectorAll('.char');
    if (!charElements.length) return;

    // Set initial state
    gsap.set(charElements, {
      opacity: 0,
      yPercent: 120,
      scaleY: 2.3,
      scaleX: 0.7,
      transformOrigin: '50% 0%',
      willChange: 'opacity, transform'
    });

    if (scrub === false) {
      // Use IntersectionObserver: 100% immune to dynamic layout shifts and async components
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(charElements, {
                duration: animationDuration,
                ease: ease,
                opacity: 1,
                yPercent: 0,
                scaleY: 1,
                scaleX: 1,
                stagger: stagger,
                overwrite: 'auto'
              });
            } else if (entry.boundingClientRect.top > window.innerHeight) {
              // Reset if user scrolls back up above the section
              gsap.to(charElements, {
                duration: 0.25,
                opacity: 0,
                yPercent: 120,
                scaleY: 2.3,
                scaleX: 0.7,
                overwrite: 'auto'
              });
            }
          });
        },
        {
          rootMargin: '0px 0px -15% 0px',
          threshold: 0.1
        }
      );

      observer.observe(el);

      return () => {
        observer.disconnect();
      };
    } else {
      const ctx = gsap.context(() => {
        const scroller = scrollContainerRef?.current || window;
        gsap.fromTo(
          charElements,
          {
            opacity: 0,
            yPercent: 120,
            scaleY: 2.3,
            scaleX: 0.7,
            transformOrigin: '50% 0%'
          },
          {
            duration: animationDuration,
            ease: ease,
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger: stagger,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: scrollStart,
              end: scrollEnd,
              scrub: typeof scrub === 'number' ? scrub : 1
            }
          }
        );
      }, el);

      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 400);

      return () => {
        clearTimeout(timer);
        ctx.revert();
      };
    }
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger, scrub]);

  return (
    <Tag
      ref={containerRef as any}
      className={`scroll-float ${containerClassName}`.trim()}
      style={style}
    >
      <span className={`scroll-float-text ${textClassName}`.trim()}>{splitText}</span>
    </Tag>
  );
};

export default ScrollFloat;
