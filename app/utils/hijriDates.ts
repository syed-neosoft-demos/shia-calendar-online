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

export interface HijriDate {
  year: number;
  month: number;
  day: number;
  monthName: string;
}

export function gregorianToHijri(date: Date): HijriDate {
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

export function formatHijriDate(hijriDate: HijriDate): string {
  return `${hijriDate.day} ${hijriDate.monthName} ${hijriDate.year}`;
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
