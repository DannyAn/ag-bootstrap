import {isDefined} from '../util/util';

import {DayViewModel, MonthViewModel, NgbMarkDisabled} from './datepicker-view-model';
import {NgbCalendar} from './ngb-calendar';
import {NgbDate} from './ngb-date';

export function isChangedDate(prev: NgbDate, next: NgbDate) {
  return !dateComparator(prev, next);
}

export function dateComparator(prev: NgbDate, next: NgbDate) {
  return (!prev && !next) || (!!prev && !!next && prev.equals(next));
}

export function checkMinBeforeMax(minDate: NgbDate, maxDate: NgbDate) {
  if (maxDate && minDate && maxDate.before(minDate)) {
    throw new Error(`'maxDate' ${maxDate} should be greater than 'minDate' ${minDate}`);
  }
}

export function checkDateInRange(date: NgbDate, minDate: NgbDate, maxDate: NgbDate): NgbDate {
  if (date && minDate && date.before(minDate)) {
    return NgbDate.from(minDate);
  }
  if (date && maxDate && date.after(maxDate)) {
    return NgbDate.from(maxDate);
  }

  return date;
}

export function isDateSelectable(
    date: NgbDate, minDate: NgbDate, maxDate: NgbDate, isDisabled: boolean, markDisabled?: NgbMarkDisabled) {
  // clang-format off
  return !(
    !isDefined(date) ||
    isDisabled ||
    (markDisabled && markDisabled(date, {year: date.year, month: date.month})) ||
    (minDate && date.before(minDate)) ||
    (maxDate && date.after(maxDate))
  );
  // clang-format on
}

export function buildMonths(
    calendar: NgbCalendar, months: MonthViewModel[], date: NgbDate, minDate: NgbDate, maxDate: NgbDate,
    displayMonths: number, firstDayOfWeek: number, markDisabled: NgbMarkDisabled, force: boolean): MonthViewModel[] {
  const newMonths = [];
  for (let i = 0; i < displayMonths; i++) {
    const newDate = calendar.getNext(date, 'm', i);
    const index = months.findIndex(month => month.firstDate.equals(newDate));

    if (force || index === -1) {
      newMonths.push(buildMonth(calendar, newDate, minDate, maxDate, firstDayOfWeek, markDisabled));
    } else {
      newMonths.push(months[index]);
    }
  }

  return newMonths;
}

export function buildMonth(
    calendar: NgbCalendar, date: NgbDate, minDate: NgbDate, maxDate: NgbDate, firstDayOfWeek: number,
    markDisabled: NgbMarkDisabled): MonthViewModel {
  const month:
      MonthViewModel = {firstDate: null, lastDate: null, number: date.month, year: date.year, weeks: [], weekdays: []};

  date = getFirstViewDate(calendar, date, firstDayOfWeek);

  // month has weeks
  for (let week = 0; week < calendar.getWeeksPerMonth(); week++) {
    const days: DayViewModel[] = [];

    // week has days
    for (let day = 0; day < calendar.getDaysPerWeek(); day++) {
      if (week === 0) {
        month.weekdays.push(calendar.getWeekday(date));
      }

      const newDate = new NgbDate(date.year, date.month, date.day);
      const nextDate = calendar.getNext(newDate);

      // marking date as disabled
      let disabled = !!((minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate)));
      if (!disabled && markDisabled) {
        disabled = markDisabled(newDate, {month: month.number, year: month.year});
      }

      // saving first date of the month
      if (month.firstDate === null && newDate.month === month.number) {
        month.firstDate = newDate;
      }

      // saving last date of the month
      if (newDate.month === month.number && nextDate.month !== month.number) {
        month.lastDate = newDate;
      }

      days.push({
        date: newDate,
        context: {
          date: {year: newDate.year, month: newDate.month, day: newDate.day},
          currentMonth: month.number,
          disabled: disabled,
          focused: false,
          selected: false
        }
      });

      date = nextDate;
    }

    month.weeks.push(
        {number: calendar.getWeekNumber(days.map(day => NgbDate.from(day.date)), firstDayOfWeek), days: days});
  }

  return month;
}

export function getFirstViewDate(calendar: NgbCalendar, date: NgbDate, firstDayOfWeek: number): NgbDate {
  const currentMonth = date.month;
  let today = new NgbDate(date.year, date.month, date.day);
  let yesterday = calendar.getPrev(today);

  const firstDayOfCurrentMonthIsAlsoFirstDayOfWeek =
      () => { return today.month !== yesterday.month && firstDayOfWeek === calendar.getWeekday(today); };

  const reachedTheFirstDayOfTheLastWeekOfPreviousMonth =
      () => { return today.month !== currentMonth && firstDayOfWeek === calendar.getWeekday(today); };

  // going back in time
  while (!reachedTheFirstDayOfTheLastWeekOfPreviousMonth() && !firstDayOfCurrentMonthIsAlsoFirstDayOfWeek()) {
    today = new NgbDate(yesterday.year, yesterday.month, yesterday.day);
    yesterday = calendar.getPrev(yesterday);
  }

  return today;
}
