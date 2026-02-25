import { HijriDate } from "./types";

interface IslamicDate {
  year: number;
  month: number; // 1–12
  day: number; // 1–30
}

const overrides: Record<string, 29 | 30> = {};

let globalShift: number = -2;

const ISLAMIC_EPOCH: number = 1948439;

function gregorianToJD(y: number, m: number, d: number): number {
  if (m <= 2) {
    y -= 1;
    m += 12;
  }

  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);

  return (
    Math.floor(365.25 * (y + 4716)) +
    Math.floor(30.6001 * (m + 1)) +
    d +
    B -
    1524
  );
}

function islamicToJD(year: number, month: number, day: number): number {
  return (
    day +
    Math.ceil(29.5 * (month - 1)) +
    (year - 1) * 354 +
    Math.floor((3 + 11 * year) / 30) +
    ISLAMIC_EPOCH -
    1
  );
}

function isLeapYear(year: number): boolean {
  return (11 * year + 14) % 30 < 11;
}

function defaultMonthLength(year: number, month: number): 29 | 30 {
  if (month % 2 === 1) return 30;

  if (month !== 12) return 29;

  return isLeapYear(year) ? 30 : 29;
}

function getMonthLength(year: number, month: number): 29 | 30 {
  const key = `${year}-${month}`;
  return overrides[key] ?? defaultMonthLength(year, month);
}

function jdToIslamic(jd: number): IslamicDate {
  jd = Math.floor(jd) + 0.5;

  const days = jd - ISLAMIC_EPOCH;

  const year = Math.floor((30 * days + 10646) / 10631);

  const firstDayOfYear = islamicToJD(year, 1, 1);

  let month = Math.ceil((jd - firstDayOfYear + 1) / 29.5);

  if (month > 12) month = 12;

  let firstDayOfMonth = islamicToJD(year, month, 1);

  // 🔥 FIX: adjust month if overshoot
  if (jd < firstDayOfMonth) {
    month--;
    firstDayOfMonth = islamicToJD(year, month, 1);
  }

  const day = Math.floor(jd - firstDayOfMonth + 1);

  return { year, month, day };
}

export function getIslamicDate(
  gYear: number,
  gMonth: number,
  gDay: number,
): IslamicDate {
  let jd = gregorianToJD(gYear, gMonth, gDay);

  jd += globalShift;

  return jdToIslamic(jd);
}

export function setMonthLength(
  year: number,
  month: number,
  newLength: 29 | 30,
): void {
  const key = `${year}-${month}`;

  const oldLength = getMonthLength(year, month);

  overrides[key] = newLength;

  const diff = newLength - oldLength;

  globalShift += diff;
}

export function resetAdjustments(): void {
  Object.keys(overrides).forEach((k) => delete overrides[k]);
  globalShift = 0;
}

export function formatIslamic(date: IslamicDate): HijriDate {
  const names: string[] = [
    "Muharram",
    "Safar",
    "Rabi al-Awwal",
    "Rabi al-Thani",
    "Jumada al-Awwal",
    "Jumada al-Thani",
    "Rajab",
    "Sha'ban",
    "Ramadan",
    "Shawwal",
    "Dhul Qadah",
    "Dhul Hijjah",
  ];
  const payload = {
    day: date.day,
    month: date.month,
    year: date.year,
    monthName: names[date.month - 1],
  };
  return payload;

  // return `${date.day} ${names[date.month - 1]} ${date.year} AH`;
}
