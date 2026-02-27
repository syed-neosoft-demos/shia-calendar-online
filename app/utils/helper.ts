import events from "../utils/events";
import { formatIslamic, getIslamicDate } from "./date";
import { CalendarEvent, HijriDate } from "./types";

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

export const generateCalendarDays = (year: number, month: number) => {
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const days: Array<{
    gregorian: number | null;
    date: Date | null;
    hijri: number;
    hijriDate: HijriDate | null;
  }> = [];

  for (let i = 0; i < firstDay; i++) {
    days.push({ gregorian: null, hijri: 0, hijriDate: null, date: null });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const hijri = formatIslamic(getIslamicDate(year, month + 1, day as number));
    days.push({ gregorian: day, hijri: hijri.day, hijriDate: hijri, date });
  }

  return days;
};

export const isToday = (date: Date | null) => {
  if (!date) return false;
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const getEventsForDate = (date: string): CalendarEvent[] => {
  if (!date) return [];
  return events.filter(
    (event) => event.event_date === date.toLocaleLowerCase(),
  );
};

export const isSelected = (date: Date | null, selectedDate: Date | null) => {
  if (!date || !selectedDate) return false;
  return (
    date.getDate() === selectedDate.getDate() &&
    date.getMonth() === selectedDate.getMonth() &&
    date.getFullYear() === selectedDate.getFullYear()
  );
};
