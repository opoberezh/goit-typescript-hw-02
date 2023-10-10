/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  MOMDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
  SUNDAY = 7,
}


function isWeekend(weekDays: Days): boolean {
  return weekDays === Days.SATURDAY || weekDays === Days.SUNDAY; 
}
const day = Days.SATURDAY;
const result = isWeekend(day);
console.log(result);
