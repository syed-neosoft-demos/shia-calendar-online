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

const globalShift: number = -2;

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
