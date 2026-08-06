'use client';
/**
 * @fileOverview Utility to generate and download an iCalendar (.ics) file for a meal plan.
 */
import type { GenerateHealthyMealPlanOutput } from '@/ai/schemas/healthy-meal-plan-schemas';

export const generateMealPlanICS = (plan: GenerateHealthyMealPlanOutput) => {
  /**
   * Calculates the date of the upcoming Monday.
   * If today is Monday, returns today.
   */
  const getNextMonday = () => {
    const d = new Date();
    const day = d.getDay(); // 0 (Sun) to 6 (Sat)
    const diff = (1 - day + 7) % 7;
    const nextMonday = new Date(d);
    nextMonday.setDate(d.getDate() + diff);
    nextMonday.setHours(0, 0, 0, 0);
    return nextMonday;
  };

  const formatDate = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}${m}${d}`;
  };

  const escapeICS = (str: string) => {
    if (!str) return '';
    return str
      .replace(/\\/g, '\\\\')
      .replace(/;/g, '\\;')
      .replace(/,/g, '\\,')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '');
  };

  // DTSTAMP must be in UTC: YYYYMMDDTHHMMSSZ
  const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  const startMonday = getNextMonday();

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CookMitra AI//Weekly Meal Plan//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
  ];

  plan.week.forEach((dayPlan, dayIndex) => {
    const currentDay = new Date(startMonday);
    currentDay.setDate(startMonday.getDate() + dayIndex);
    const dateStr = formatDate(currentDay);

    dayPlan.meals.forEach((meal, mealIndex) => {
      let startTime = '080000';
      let endTime = '083000';

      const typeLower = meal.type.toLowerCase();
      if (typeLower.includes('lunch')) {
        startTime = '130000';
        endTime = '133000';
      } else if (typeLower.includes('dinner')) {
        startTime = '200000';
        endTime = '203000';
      }

      const summary = `${meal.type}: ${meal.food} — CookMitra AI`;
      const description = `Nutrition: ${meal.calories} kcal, ${meal.protein}g protein, ${meal.carbs}g carbs, ${meal.fats}g fats\nBenefits: ${meal.benefits}`;

      lines.push('BEGIN:VEVENT');
      // Create a unique ID for each event
      lines.push(`UID:meal-${dayIndex}-${mealIndex}-${Date.now()}@cookmitra.ai`);
      lines.push(`DTSTAMP:${now}`);
      lines.push(`DTSTART:${dateStr}T${startTime}`);
      lines.push(`DTEND:${dateStr}T${endTime}`);
      lines.push(`SUMMARY:${escapeICS(summary)}`);
      lines.push(`DESCRIPTION:${escapeICS(description)}`);
      lines.push('END:VEVENT');
    });
  });

  lines.push('END:VCALENDAR');

  const content = lines.join('\r\n');
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'CookMitra-Meal-Plan.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
