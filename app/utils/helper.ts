export function getDayOfYear(date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 1); // Jan 1
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay) + 1;
}
