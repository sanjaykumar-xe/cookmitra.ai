'use client';

import React, { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';

import './text-loop.css';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const VIEW_W = 1200;
const EDGE_PAD = 6;

export type TextLoopShape = 'wave' | 'circle' | 'infinity' | 'arch' | 'line';

export interface TextLoopProps {
  text?: string;
  shape?: TextLoopShape;
  path?: string;
  speed?: number;
  direction?: 'forward' | 'reverse';
  separator?: string;
  curviness?: number;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  uppercase?: boolean;
  color?: string;
  ribbon?: boolean;
  ribbonColor?: string;
  ribbonWidth?: number;
  pauseOnHover?: boolean;
  viewHeight?: number;
  className?: string;
  style?: React.CSSProperties;
}

const buildPath = (shape: TextLoopShape, curviness: number, ribbonWidth: number, viewH: number): string => {
  const CX = VIEW_W / 2;
  const CY = viewH / 2;
  const c = Math.max(0, curviness);
  const room = Math.max(20, CY - Math.max(0, ribbonWidth) / 2 - EDGE_PAD);

  switch (shape) {
    case 'circle': {
      const r = Math.min(90 + c * 0.95, room);
      return `M ${CX - r} ${CY} A ${r} ${r} 0 1 1 ${CX + r} ${CY} A ${r} ${r} 0 1 1 ${CX - r} ${CY} Z`;
    }
    case 'infinity': {
      const r = 150 + c * 1.4;
      const h = Math.min(60 + c * 0.95, room);
      return [
        `M ${CX} ${CY}`,
        `C ${CX + r * 0.55} ${CY - h} ${CX + r} ${CY - h} ${CX + r} ${CY}`,
        `C ${CX + r} ${CY + h} ${CX + r * 0.55} ${CY + h} ${CX} ${CY}`,
        `C ${CX - r * 0.55} ${CY - h} ${CX - r} ${CY - h} ${CX - r} ${CY}`,
        `C ${CX - r} ${CY + h} ${CX - r * 0.55} ${CY + h} ${CX} ${CY}`,
        'Z'
      ].join(' ');
    }
    case 'arch': {
      const rise = Math.min(120 + c * 1.1, room * 2);
      return `M 120 ${CY + rise / 2} Q ${CX} ${CY - rise * 1.5} ${VIEW_W - 120} ${CY + rise / 2}`;
    }
    case 'line':
      return `M -320 ${CY} L ${VIEW_W + 320} ${CY}`;
    case 'wave':
    default: {
      const a = Math.min(c * 2.2, room * 2);
      return `M -320 ${CY} Q -160 ${CY - a} 0 ${CY} T 320 ${CY} T 640 ${CY} T 960 ${CY} T 1280 ${CY} T ${VIEW_W + 320} ${CY}`;
    }
  }
};

export default function TextLoop({
  text = 'React ✦ Bits',
  shape = 'wave',
  path,
  speed = 90,
  direction = 'forward',
  separator = '✦',
  curviness = 90,
  fontSize = 46,
  fontWeight = 800,
  letterSpacing = 2,
  uppercase = true,
  color = '#ffffff',
  ribbon = true,
  ribbonColor = '#5227FF',
  ribbonWidth = 86,
  pauseOnHover = false,
  viewHeight,
  className = '',
  style = {}
}: TextLoopProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const measureRef = useRef<SVGTextElement>(null);
  const headRef = useRef<SVGTextPathElement>(null);
  const tailRef = useRef<SVGTextPathElement>(null);

  const [metrics, setMetrics] = useState({ length: 0, unitWidth: 0, reps: 1 });

  const rawId = useId();
  const pathId = `text-loop-${rawId.replace(/:/g, '')}`;

  const viewH = viewHeight ?? (shape === 'circle' || shape === 'infinity' ? 520 : 280);
  const isOpenShape = shape === 'wave' || shape === 'line' || shape === 'arch';

  const d = useMemo(() => path || buildPath(shape, curviness, ribbonWidth, viewH), [path, shape, curviness, ribbonWidth, viewH]);

  const unit = useMemo(() => {
    const raw = uppercase ? String(text).toUpperCase() : String(text);
    const base = raw.replace(/\s+/g, '\u00A0');
    const gap = separator ? `\u00A0\u00A0${separator}\u00A0\u00A0` : '\u00A0\u00A0\u00A0';
    return `${base}${gap}`;
  }, [text, separator, uppercase]);

  const textStyle = useMemo(
    () => ({ fontSize: `${fontSize}px`, fontWeight, letterSpacing: `${letterSpacing}px`, whiteSpace: 'pre' as const }),
    [fontSize, fontWeight, letterSpacing]
  );

  useIsomorphicLayoutEffect(() => {
    const pathEl = pathRef.current;
    const measureEl = measureRef.current;
    if (!pathEl || !measureEl) return undefined;

    let cancelled = false;

    const measure = () => {
      if (cancelled) return;
      let length = 0;
      let unitWidth = 0;
      try {
        length = pathEl.getTotalLength();
        unitWidth = measureEl.getComputedTextLength();
      } catch {
        return;
      }
      if (!length || !unitWidth) return;

      const reps = isOpenShape
        ? Math.max(3, Math.ceil(length / unitWidth) + 2)
        : Math.max(1, Math.round(length / unitWidth));

      setMetrics(prev =>
        prev.length === length && prev.unitWidth === unitWidth && prev.reps === reps
          ? prev
          : { length, unitWidth, reps }
      );
    };

    measure();
    if (typeof document !== 'undefined' && (document as any).fonts?.ready) {
      (document as any).fonts.ready.then(measure).catch(() => {});
    }

    return () => {
      cancelled = true;
    };
  }, [d, unit, fontSize, fontWeight, letterSpacing, isOpenShape]);

  useEffect(() => {
    const { length, unitWidth } = metrics;
    const head = headRef.current;
    if (!head || !length || !unitWidth) return undefined;

    const tail = tailRef.current;

    const apply = (offset: number) => {
      head.setAttribute('startOffset', String(offset));
      if (!isOpenShape && tail) {
        const partner = offset >= 0 ? offset - length : offset + length;
        tail.setAttribute('startOffset', String(partner));
      }
    };

    apply(0);

    const prefersReduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || speed <= 0) return undefined;

    const loopDistance = isOpenShape ? unitWidth : length;
    const state = { offset: 0 };
    const tween = gsap.to(state, {
      offset: direction === 'reverse' ? loopDistance : -loopDistance,
      duration: loopDistance / speed,
      ease: 'none',
      repeat: -1,
      onUpdate: () => apply(state.offset)
    });

    const root = rootRef.current;
    const pause = () => tween.pause();
    const resume = () => tween.resume();

    if (pauseOnHover && root) {
      root.addEventListener('pointerenter', pause);
      root.addEventListener('pointerleave', resume);
    }

    return () => {
      tween.kill();
      if (pauseOnHover && root) {
        root.removeEventListener('pointerenter', pause);
        root.removeEventListener('pointerleave', resume);
      }
    };
  }, [metrics, speed, direction, pauseOnHover, isOpenShape]);

  const loopText = unit.repeat(metrics.reps);

  return (
    <div ref={rootRef} className={`text-loop ${className}`.trim()} style={style}>
      <svg
        className="text-loop-svg"
        viewBox={`0 0 ${VIEW_W} ${viewH}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={text}
        xmlSpace="preserve"
      >
        <path
          ref={pathRef}
          id={pathId}
          d={d}
          fill="none"
          stroke={ribbon ? ribbonColor : 'none'}
          strokeWidth={ribbon ? ribbonWidth : 0}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <text ref={measureRef} className="text-loop-measure" style={textStyle} aria-hidden="true" xmlSpace="preserve">
          {unit}
        </text>

        <text
          className="text-loop-text"
          style={textStyle}
          fill={color}
          dominantBaseline="central"
          aria-hidden="true"
          xmlSpace="preserve"
        >
          <textPath ref={headRef} href={`#${pathId}`} startOffset={0} xmlSpace="preserve">
            {loopText}
          </textPath>
        </text>

        {!isOpenShape && (
          <text
            className="text-loop-text"
            style={textStyle}
            fill={color}
            dominantBaseline="central"
            aria-hidden="true"
            xmlSpace="preserve"
          >
            <textPath ref={tailRef} href={`#${pathId}`} startOffset={0} xmlSpace="preserve">
              {loopText}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
}
