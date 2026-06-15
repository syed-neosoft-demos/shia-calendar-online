import { HijriDate, IslamicDate } from "@/app/utils/types";

export const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const HIJRI_MONTHS = [
  "Muharram",
  "Safar",
  "Rabi al-Awwal",
  "Rabi al-Thani",
  "Jumada al-Awwal",
  "Jumada al-Thani",
  "Rajab",
  "Shaban",
  "Ramadan",
  "Shawwal",
  "Dhul Qadah",
  "Dhul Hijjah",
];

const globalShift: number = -1;

const ISLAMIC_CALENDAR = "en-u-ca-islamic-umalqura";
const ISLAMIC_FORMATTER = new Intl.DateTimeFormat(ISLAMIC_CALENDAR, {
  day: "numeric",
  month: "numeric",
  timeZone: "UTC",
  year: "numeric",
});

function getDatePart(
  parts: Intl.DateTimeFormatPart[],
  type: Intl.DateTimeFormatPartTypes,
): number {
  const value = parts.find((part) => part.type === type)?.value;
  if (!value) {
    throw new Error(`Missing Islamic date part: ${type}`);
  }
  return Number(value.replace(/\D/g, ""));
}

export function getIslamicDate(
  gYear: number,
  gMonth: number,
  gDay: number,
): IslamicDate {
  const date = new Date(Date.UTC(gYear, gMonth - 1, gDay));
  date.setUTCDate(date.getUTCDate() + globalShift);

  const parts = ISLAMIC_FORMATTER.formatToParts(date);

  return {
    day: getDatePart(parts, "day"),
    month: getDatePart(parts, "month"),
    year: getDatePart(parts, "year"),
  };
}

export function formatIslamic(date: IslamicDate): HijriDate {
  const names = HIJRI_MONTHS;
  const payload = {
    day: date.day,
    month: date.month,
    year: date.year,
    monthName: names[date.month - 1],
  };
  return payload;

  // return `${date.day} ${names[date.month - 1]} ${date.year} AH`;
}

export function getHijriMonthSlug(monthName: string): string {
  return monthName.trim().toLowerCase().replace(/\s+/g, "-");
}

export function getHijriDateKey(
  date: Pick<HijriDate, "day" | "monthName"> | null | undefined,
): string {
  if (!date?.day || !date.monthName) return "";
  return `${date.day}-${getHijriMonthSlug(date.monthName)}`;
}
