import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Strips markdown syntax (asterisks, hashtags, bullets, links, code blocks)
 * and normalizes whitespace so Text-to-Speech (TTS) engines read text naturally
 * without pronouncing symbols like "asterisk asterisk" or "hash hash".
 */
export function cleanTextForSpeech(text: string): string {
  if (!text) return '';
  return text
    // Remove fenced code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove inline code backticks
    .replace(/`([^`]+)`/g, '$1')
    // Remove markdown links: [text](url) -> text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove bold and italic markers: ***text***, **text**, *text*, ___text___, __text__, _text_
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1')
    // Remove any remaining asterisks (bullet points, unclosed asterisks, etc.)
    .replace(/\*+/g, '')
    // Remove headers: #, ##, ### at line start
    .replace(/^#{1,6}\s+/gm, '')
    // Remove blockquotes: > at line start
    .replace(/^>\s+/gm, '')
    // Remove bullet dashes/pluses at line start
    .replace(/^[-+]\s+/gm, '')
    // Remove horizontal rules (e.g. ---, ***, ___)
    .replace(/^(?:[-*_]\s*){3,}$/gm, '')
    // Replace multiple newlines with period and space for natural breathing pause
    .replace(/\n{2,}/g, '. ')
    .replace(/\n/g, ' ')
    // Normalize spaces and clean punctuation
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,!?;:])/g, '$1')
    .replace(/\.{2,}/g, '.')
    .trim();
}

