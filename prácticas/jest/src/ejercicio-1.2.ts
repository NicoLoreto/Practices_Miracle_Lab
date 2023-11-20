export function isLeapYear(year: number): boolean {
  if (year <= 0) return false;

  if (year % 100 === 0 && year % 400 != 0) {
    return false;
  }

  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

isLeapYear(2000);
