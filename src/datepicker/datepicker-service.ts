import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {filter} from 'rxjs/operator/filter';
import {Subject} from 'rxjs/Subject';

import {isInteger} from '../util/util';

import {buildMonths, checkDateInRange, checkMinBeforeMax, isChangedDate, isDateSelectable} from './datepicker-tools';
import {DatepickerViewModel, NgbMarkDisabled} from './datepicker-view-model';
import {NgbCalendar, NgbPeriod} from './ngb-calendar';
import {NgbDate} from './ngb-date';

@Injectable()
export class NgbDatepickerService {
  private _model$ = new Subject<DatepickerViewModel>();

  private _select$ = new Subject<NgbDate>();

  private _state: DatepickerViewModel = {
    disabled: false,
    displayMonths: 1,
    firstDayOfWeek: 1,
    focusVisible: false,
    months: [],
    navigation: 'select',
    selectedDate: null
  };

  get model$(): Observable<DatepickerViewModel> {
    return filter.call(this._model$.asObservable(), model => model.months.length > 0);
  }

  get select$(): Observable<NgbDate> {
    return filter.call(this._select$.asObservable(), date => date !== null);
  }

  set disabled(disabled: boolean) {
    if (this._state.disabled !== disabled) {
      this._nextState({disabled: disabled});
    }
  }

  set displayMonths(months: number) {
    if (isInteger(months) && months > 0 && this._state.displayMonths !== months) {
      this._nextState({displayMonths: months});
    }
  }

  set firstDayOfWeek(firstDayOfWeek: number) {
    if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
      this._nextState({firstDayOfWeek: firstDayOfWeek});
    }
  }

  set focusVisible(focusVisible: boolean) {
    if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
      this._nextState({focusVisible: focusVisible});
    }
  }

  set maxDate(date: NgbDate) {
    if (date === undefined || this._calendar.isValid(date) && isChangedDate(this._state.maxDate, date)) {
      this._nextState({maxDate: date});
    }
  }

  set markDisabled(markDisabled: NgbMarkDisabled) {
    if (this._state.markDisabled !== markDisabled) {
      this._nextState({markDisabled: markDisabled});
    }
  }

  set minDate(date: NgbDate) {
    if (date === undefined || this._calendar.isValid(date) && isChangedDate(this._state.minDate, date)) {
      this._nextState({minDate: date});
    }
  }

  set navigation(navigation: 'select'|'arrows'|'none') {
    if (this._state.navigation !== navigation) {
      this._nextState({navigation: navigation});
    }
  }

  constructor(private _calendar: NgbCalendar) {}

  focus(date: NgbDate) {
    if (!this._state.disabled && this._calendar.isValid(date) && isChangedDate(this._state.focusDate, date)) {
      this._nextState({focusDate: date});
    }
  }

  focusMove(period?: NgbPeriod, number?: number) {
    this.focus(this._calendar.getNext(this._state.focusDate, period, number));
  }

  focusSelect() {
    if (isDateSelectable(
            this._state.focusDate, this._state.minDate, this._state.maxDate, this._state.disabled,
            this._state.markDisabled)) {
      this.select(this._state.focusDate, {emitEvent: true});
    }
  }

  open(date: NgbDate) {
    if (!this._state.disabled && this._calendar.isValid(date)) {
      this._nextState({firstDate: date});
    }
  }

  select(date: NgbDate, options: {emitEvent?: boolean} = {}) {
    const validDate = this.toValidDate(date, null);
    if (!this._state.disabled) {
      if (isChangedDate(this._state.selectedDate, validDate)) {
        this._nextState({selectedDate: validDate});
      }

      if (options.emitEvent &&
          isDateSelectable(
              validDate, this._state.minDate, this._state.maxDate, this._state.disabled, this._state.markDisabled)) {
        this._select$.next(validDate);
      }
    }
  }

  toValidDate(date: {year: number, month: number, day?: number}, defaultValue?: NgbDate): NgbDate {
    const ngbDate = NgbDate.from(date);
    if (defaultValue === undefined) {
      defaultValue = this._calendar.getToday();
    }
    return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
  }

  private _nextState(patch: Partial<DatepickerViewModel>) {
    const newState = this._updateState(patch);
    this._patchContexts(newState);
    this._state = newState;
    this._model$.next(this._state);
  }

  private _patchContexts(state: DatepickerViewModel) {
    state.months.forEach(month => {
      month.weeks.forEach(week => {
        week.days.forEach(day => {
          // patch focus flag
          if (state.focusDate) {
            day.context.focused = state.focusDate.equals(day.date) && state.focusVisible;
          }

          // override context disabled
          if (state.disabled === true) {
            day.context.disabled = true;
          }

          // patch selection flag
          if (state.selectedDate !== undefined) {
            day.context.selected = state.selectedDate !== null && state.selectedDate.equals(day.date);
          }
        });
      });
    });
  }

  private _updateState(patch: Partial<DatepickerViewModel>): DatepickerViewModel {
    // patching fields
    const state = Object.assign({}, this._state, patch);

    let startDate = state.firstDate;

    // min/max dates changed
    if ('minDate' in patch || 'maxDate' in patch) {
      checkMinBeforeMax(state.minDate, state.maxDate);
      state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
      state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
      startDate = state.focusDate;
    }

    // disabled
    if ('disabled' in patch) {
      state.focusVisible = false;
    }

    // initial rebuild via 'select()'
    if ('selectedDate' in patch && this._state.months.length === 0) {
      startDate = state.selectedDate;
    }

    // focus date changed
    if ('focusDate' in patch) {
      state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
      startDate = state.focusDate;

      // nothing to rebuild if only focus changed and it is still visible
      if (state.months.length !== 0 && !state.focusDate.before(state.firstDate) &&
          !state.focusDate.after(state.lastDate)) {
        return state;
      }
    }

    // first date changed
    if ('firstDate' in patch) {
      state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
      startDate = state.firstDate;
    }

    // rebuilding months
    if (startDate) {
      const forceRebuild = 'firstDayOfWeek' in patch || 'markDisabled' in patch || 'minDate' in patch ||
          'maxDate' in patch || 'disabled' in patch;

      const months = buildMonths(
          this._calendar, state.months, startDate, state.minDate, state.maxDate, state.displayMonths,
          state.firstDayOfWeek, state.markDisabled, forceRebuild);

      // updating months and boundary dates
      state.months = months;
      state.firstDate = months.length > 0 ? months[0].firstDate : undefined;
      state.lastDate = months.length > 0 ? months[months.length - 1].lastDate : undefined;

      // reset selected date if 'markDisabled' returns true
      if ('selectedDate' in patch && state.selectedDate !== null) {
        if (!isDateSelectable(state.selectedDate, state.minDate, state.maxDate, state.disabled, state.markDisabled)) {
          state.selectedDate = null;
        }
      }

      // adjusting focus after months were built
      if ('firstDate' in patch) {
        if (state.focusDate === undefined || state.focusDate.before(state.firstDate) ||
            state.focusDate.after(state.lastDate)) {
          state.focusDate = startDate;
        }
      }
    }

    return state;
  }
}
