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
  return defaultMonthLength(year, month);
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

function gregorianToHijri(date: Date): HijriDate {
  const gYear = date.getFullYear();
  const gMonth = date.getMonth() + 1;
  const gDay = date.getDate();

  let julianDay: number;

  if (gMonth <= 2) {
    const adjustedYear = gYear - 1;
    const adjustedMonth = gMonth + 12;
    julianDay =
      Math.floor(365.25 * (adjustedYear + 4716)) +
      Math.floor(30.6001 * (adjustedMonth + 1)) +
      gDay -
      1524.5;
  } else {
    julianDay =
      Math.floor(365.25 * (gYear + 4716)) +
      Math.floor(30.6001 * (gMonth + 1)) +
      gDay -
      1524.5;
  }

  const l = julianDay - 1948440 + 10632;
  const n = Math.floor((l - 1) / 10631);
  const l2 = l - 10631 * n + 354;
  const j =
    Math.floor((10985 - l2) / 5316) * Math.floor((50 * l2) / 17719) +
    Math.floor(l2 / 5670) * Math.floor((43 * l2) / 15238);
  const l3 =
    l2 -
    Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
    Math.floor(j / 16) * Math.floor((15238 * j) / 43) +
    29;
  const hMonth = Math.floor((24 * l3) / 709);
  const hDay = l3 - Math.floor((709 * hMonth) / 24);
  const hYear = 30 * n + j - 30;

  return {
    year: hYear,
    month: hMonth,
    day: hDay,
    monthName: HIJRI_MONTHS[hMonth - 1],
  };
}

export function getHijriMonthRange(
  gregorianYear: number,
  gregorianMonth: number,
): { start: HijriDate; end: HijriDate } {
  const firstDay = new Date(gregorianYear, gregorianMonth, 1);
  const lastDay = new Date(gregorianYear, gregorianMonth + 1, 0);

  return {
    start: gregorianToHijri(firstDay),
    end: gregorianToHijri(lastDay),
  };
}
