import {TestBed} from '@angular/core/testing';
import {Subscription} from 'rxjs/Subscription';

import {NgbDatepickerService} from './datepicker-service';
import {DatepickerViewModel} from './datepicker-view-model';
import {NgbCalendar, NgbCalendarGregorian} from './ngb-calendar';
import {NgbDate} from './ngb-date';
import {NgbDateStruct} from './ngb-date-struct';

describe('ngb-datepicker-service', () => {
  let service: NgbDatepickerService;
  let calendar: NgbCalendar;
  let model: DatepickerViewModel;
  let mock: {onNext};
  let selectDate: NgbDateStruct;
  let mockSelect: {onNext};

  let subscriptions: Subscription[];

  const getDay = (n: number) => model.months[0].weeks[0].days[n];
  const getDayCtx = (n: number) => getDay(n).context;

  beforeEach(() => {
    TestBed.configureTestingModule(
        {providers: [NgbDatepickerService, {provide: NgbCalendar, useClass: NgbCalendarGregorian}]});

    calendar = TestBed.get(NgbCalendar);
    service = TestBed.get(NgbDatepickerService);
    subscriptions = [];
    model = undefined;
    selectDate = null;

    mock = {onNext: () => {}};
    spyOn(mock, 'onNext');

    mockSelect = {onNext: () => {}};
    spyOn(mockSelect, 'onNext');

    // subscribing
    subscriptions.push(
        service.model$.subscribe(mock.onNext), service.model$.subscribe(m => model = m),
        service.select$.subscribe(mockSelect.onNext), service.select$.subscribe(d => selectDate = d));
  });

  afterEach(() => {
    subscriptions.forEach(s => s.unsubscribe());
  });

  it(`should be possible to instantiate`, () => {
    expect(service).toBeTruthy();
  });

  it(`should not return anything upon subscription`, () => {
    expect(model).toBeUndefined();
    expect(mock.onNext).not.toHaveBeenCalled();
  });

  describe(`min/max dates`, () => {
    it(`should emit only undefined and valid 'minDate' values`, () => {
      // valid
      const minDate = new NgbDate(2017, 5, 1);
      service.minDate = minDate;
      service.focus(new NgbDate(2017, 5, 1));
      expect(model.minDate).toEqual(minDate);

      // undefined
      service.minDate = undefined;
      expect(model.minDate).toBeUndefined();

      // null -> ignore
      service.minDate = null;
      expect(model.minDate).toBeUndefined();

      // invalid -> ignore
      service.minDate = new NgbDate(-2, 0, null);
      expect(model.minDate).toBeUndefined();

      expect(mock.onNext).toHaveBeenCalledTimes(2);
    });

    it(`should emit only undefined and valid 'maxDate' values`, () => {
      // valid
      const maxDate = new NgbDate(2017, 5, 1);
      service.maxDate = maxDate;
      service.focus(new NgbDate(2017, 5, 1));
      expect(model.maxDate).toEqual(maxDate);

      // undefined
      service.maxDate = undefined;
      expect(model.maxDate).toBeUndefined();

      // null -> ignore
      service.maxDate = null;
      expect(model.maxDate).toBeUndefined();

      // invalid -> ignore
      service.maxDate = new NgbDate(-2, 0, null);
      expect(model.maxDate).toBeUndefined();

      expect(mock.onNext).toHaveBeenCalledTimes(2);
    });

    it(`should not emit the same 'minDate' value twice`, () => {
      service.minDate = new NgbDate(2017, 5, 1);
      service.focus(new NgbDate(2015, 5, 1));

      service.minDate = new NgbDate(2017, 5, 1);

      expect(mock.onNext).toHaveBeenCalledTimes(1);
    });

    it(`should not emit the same 'maxDate' value twice`, () => {
      service.maxDate = new NgbDate(2017, 5, 1);
      service.focus(new NgbDate(2015, 5, 1));

      service.maxDate = new NgbDate(2017, 5, 1);

      expect(mock.onNext).toHaveBeenCalledTimes(1);
    });

    it(`should throw if 'min' date is after 'max' date`, () => {
      const minDate = new NgbDate(2017, 5, 1);
      service.focus(new NgbDate(2015, 5, 1));

      expect(() => {
        service.minDate = minDate;
        service.maxDate = new NgbDate(2017, 4, 1);
      }).toThrowError();
    });

    it(`should align 'date' with 'maxDate'`, () => {
      service.maxDate = new NgbDate(2017, 5, 1);
      service.focus(new NgbDate(2017, 5, 5));
      expect(model.focusDate).toEqual(new NgbDate(2017, 5, 1));
    });

    it(`should align 'date' with 'minDate'`, () => {
      service.minDate = new NgbDate(2017, 5, 10);
      service.focus(new NgbDate(2017, 5, 5));
      expect(model.focusDate).toEqual(new NgbDate(2017, 5, 10));
    });

    it(`should mark dates outside 'min/maxDates' as disabled`, () => {
      // MAY 2017
      service.focus(new NgbDate(2017, 5, 1));
      expect(model.minDate).toBeUndefined();
      expect(model.maxDate).toBeUndefined();
      expect(getDayCtx(0).disabled).toBe(false);  // 1 MAY
      expect(getDayCtx(5).disabled).toBe(false);  // 6 MAY

      service.minDate = new NgbDate(2017, 5, 2);
      service.maxDate = new NgbDate(2017, 5, 5);
      expect(getDayCtx(0).disabled).toBe(true);  // 1 MAY
      expect(getDayCtx(5).disabled).toBe(true);  // 6 MAY
    });

    it(`should rebuild month when 'min/maxDates' change and visible`, () => {
      // MAY 2017
      service.focus(new NgbDate(2017, 5, 5));
      expect(model.months.length).toBe(1);
      expect(model.minDate).toBeUndefined();
      expect(model.maxDate).toBeUndefined();

      const month = model.months[0];
      const date = month.weeks[0].days[0].date;

      // MIN -> 5 MAY, 2017
      service.minDate = new NgbDate(2017, 5, 5);
      expect(model.months.length).toBe(1);
      expect(model.months[0]).not.toBe(month);
      expect(getDayCtx(0).disabled).toBe(true);
      expect(getDay(0).date).not.toBe(date);

      // MAX -> 10 MAY, 2017
      service.maxDate = new NgbDate(2017, 5, 10);
      expect(model.months.length).toBe(1);
      expect(model.months[0]).not.toBe(month);
      expect(model.months[0].weeks[4].days[0].context.disabled).toBe(true);
      expect(model.months[0].weeks[0].days[0].date).not.toBe(date);
    });
  });

  describe(`firstDayOfWeek`, () => {
    it(`should emit only positive numeric 'firstDayOfWeek' values`, () => {
      // valid
      service.firstDayOfWeek = 2;
      service.focus(new NgbDate(2015, 5, 1));
      expect(model.firstDayOfWeek).toEqual(2);

      // -1 -> ignore
      service.firstDayOfWeek = -1;
      expect(model.firstDayOfWeek).toEqual(2);

      // null -> ignore
      service.firstDayOfWeek = null;
      expect(model.firstDayOfWeek).toEqual(2);

      // undefined -> ignore
      service.firstDayOfWeek = null;
      expect(model.firstDayOfWeek).toEqual(2);

      expect(mock.onNext).toHaveBeenCalledTimes(1);
    });

    it(`should not emit the same 'firstDayOfWeek' value twice`, () => {
      service.firstDayOfWeek = 2;
      service.focus(new NgbDate(2015, 5, 1));

      service.firstDayOfWeek = 2;

      expect(mock.onNext).toHaveBeenCalledTimes(1);
    });

    it(`should generate a month with firstDayOfWeek=1 by default`, () => {
      service.focus(new NgbDate(2017, 5, 5));
      expect(model.months.length).toBe(1);
      expect(model.months[0].weekdays[0]).toBe(1);
    });

    it(`should generate weeks starting with 'firstDayOfWeek'`, () => {
      service.firstDayOfWeek = 2;
      service.focus(new NgbDate(2017, 5, 5));
      expect(model.months.length).toBe(1);
      expect(model.months[0].weekdays[0]).toBe(2);

      service.firstDayOfWeek = 4;
      expect(model.months.length).toBe(1);
      expect(model.months[0].weekdays[0]).toBe(4);
    });

    it(`should rebuild months when 'firstDayOfWeek' changes`, () => {
      service.focus(new NgbDate(2017, 5, 5));
      expect(model.months.length).toBe(1);
      expect(model.firstDayOfWeek).toBe(1);

      const month = model.months[0];
      const date = month.weeks[0].days[0].date;

      service.firstDayOfWeek = 3;
      expect(model.months.length).toBe(1);
      expect(model.months[0]).not.toBe(month);
      expect(getDay(0).date).not.toBe(date);
    });
  });

  describe(`displayMonths`, () => {
    it(`should emit only positive numeric 'displayMonths' values`, () => {
      // valid
      service.displayMonths = 2;
      service.focus(new NgbDate(2017, 5, 1));
      expect(model.displayMonths).toEqual(2);

      // -1 -> ignore
      service.displayMonths = -1;
      expect(model.displayMonths).toEqual(2);

      // null -> ignore
      service.displayMonths = null;
      expect(model.displayMonths).toEqual(2);

      // undefined -> ignore
      service.displayMonths = null;
      expect(model.displayMonths).toEqual(2);

      expect(mock.onNext).toHaveBeenCalledTimes(1);
    });

    it(`should not emit the same 'displayMonths' value twice`, () => {
      service.displayMonths = 2;
      service.focus(new NgbDate(2017, 5, 1));

      service.displayMonths = 2;

      expect(mock.onNext).toHaveBeenCalledTimes(1);
    });

    it(`should generate 'displayMonths' number of months`, () => {
      service.displayMonths = 2;
      service.focus(new NgbDate(2017, 5, 5));
      expect(model.months.length).toBe(2);

      service.displayMonths = 4;
      expect(model.months.length).toBe(4);
    });

    it(`should reuse existing months when 'displayMonths' changes`, () => {
      service.focus(new NgbDate(2017, 5, 5));

      // 1 month
      expect(model.months.length).toBe(1);
      const month = model.months[0];
      const date = month.weeks[0].days[0].date;
      expect(date).toEqual(new NgbDate(2017, 5, 1));

      // 2 months
      service.displayMonths = 2;
      expect(model.months.length).toBe(2);
      expect(model.months[0]).toBe(month);
      expect(getDay(0).date).toBe(date);

      // back to 1 month
      service.displayMonths = 1;
      expect(model.months.length).toBe(1);
      expect(model.months[0]).toBe(month);
      expect(getDay(0).date).toBe(date);
    });
  });

  describe(`disabled`, () => {
    it(`should emit 'disabled' values`, () => {
      service.focus(new NgbDate(2017, 5, 1));
      expect(model.disabled).toEqual(false);

      service.disabled = true;
      expect(model.disabled).toEqual(true);
    });

    it(`should not emit the same 'disabled' value twice`, () => {
      service.focus(new NgbDate(2017, 5, 1));  // 1
      service.disabled = true;                 // 2

      service.disabled = true;  // ignored

      expect(mock.onNext).toHaveBeenCalledTimes(2);
    });

    it(`should not allow focusing when disabled`, () => {
      const today = new NgbDate(2017, 5, 2);
      service.focus(today);     // 1
      service.disabled = true;  // 2

      // focus
      service.focus(new NgbDate(2017, 5, 1));  // nope
      expect(model.focusDate).toEqual(today);

      // focusMove
      service.focusMove('d', 1);  // nope
      expect(model.focusDate).toEqual(today);

      expect(mock.onNext).toHaveBeenCalledTimes(2);
    });

    it(`should not allow selecting when disabled`, () => {
      const today = new NgbDate(2017, 5, 2);
      service.focus(today);     // 1
      service.disabled = true;  // 2

      // select
      service.select(new NgbDate(2017, 5, 2));  // nope
      expect(model.selectedDate).toBeNull();

      // focus select
      service.focusSelect();  // nope
      expect(model.selectedDate).toBeNull();

      expect(mock.onNext).toHaveBeenCalledTimes(2);
    });

    it(`should not allow opening when disabled`, () => {
      service.focus(new NgbDate(2017, 5, 2));  // 1
      service.disabled = true;                 // 2

      // open
      service.open(new NgbDate(2016, 5, 1));  // nope
      expect(model.firstDate).toEqual(new NgbDate(2017, 5, 1));

      expect(mock.onNext).toHaveBeenCalledTimes(2);
    });

    it(`should turn focus off when disabled`, () => {
      service.focus(new NgbDate(2017, 5, 2));
      service.focusVisible = true;
      expect(model.focusVisible).toBeTruthy();

      service.disabled = true;
      expect(model.focusVisible).toBeFalsy();
    });

    it(`should not turn focus on when disabled`, () => {
      service.focus(new NgbDate(2017, 5, 2));
      service.disabled = true;
      expect(model.focusVisible).toBeFalsy();

      service.focusVisible = true;
      expect(model.focusVisible).toBeFalsy();
    });
  });

  describe(`focusVisible`, () => {
    it(`should set focus visible or not`, () => {
      service.focus(new NgbDate(2017, 5, 1));
      expect(model.focusVisible).toEqual(false);

      service.focusVisible = true;
      expect(model.focusVisible).toEqual(true);
    });

    it(`should not emit the same 'focusVisible' value twice`, () => {
      service.focusVisible = true;
      service.focus(new NgbDate(2017, 5, 1));

      service.focusVisible = true;  // ignored

      expect(mock.onNext).toHaveBeenCalledTimes(1);
    });
  });

  describe(`navigation`, () => {
    it(`should emit navigation values`, () => {
      // default = 'selected'
      service.focus(new NgbDate(2015, 5, 1));
      expect(model.navigation).toEqual('select');

      service.navigation = 'none';
      expect(model.navigation).toEqual('none');

      service.navigation = 'arrows';
      expect(model.navigation).toEqual('arrows');
    });

    it(`should not emit the same 'navigation' value twice`, () => {
      service.focus(new NgbDate(2017, 5, 1));

      service.navigation = 'select';  // ignored
      expect(mock.onNext).toHaveBeenCalledTimes(1);
    });
  });

  describe(`markDisabled`, () => {
    it(`should mark dates as disabled by passing 'markDisabled'`, () => {
      // marking 5th day of each month as disabled
      service.markDisabled = (date) => date && date.day === 5;

      // MAY 2017
      service.focus(new NgbDate(2017, 5, 1));

      const day = getDay(4);  // 5th day;
      expect(day.date).toEqual(new NgbDate(2017, 5, 5));
      expect(day.context.disabled).toBe(true);
    });

    it(`should rebuild months when 'markDisabled changes'`, () => {
      // MAY 2017
      service.markDisabled = (_) => true;
      service.focus(new NgbDate(2017, 5, 1));

      const month = model.months[0];
      const date = month.weeks[0].days[0].date;

      service.markDisabled = (_) => true;
      expect(model.months[0]).not.toBe(month);
      expect(getDay(0).date).not.toBe(date);
    });
  });

  describe(`focus handling`, () => {
    it(`should generate 1 month on 'focus()' by default`, () => {
      expect(model).toBeUndefined();

      service.focus(new NgbDate(2017, 5, 5));
      expect(model.months).toBeTruthy();
      expect(model.months.length).toBe(1);
    });

    it(`should emit new date on 'focus()'`, () => {
      const today = new NgbDate(2017, 5, 2);
      service.focus(today);
      expect(model.focusDate).toEqual(today);

      expect(mock.onNext).toHaveBeenCalledTimes(1);
    });

    it(`should ignore invalid 'focus()' values`, () => {
      service.focus(null);
      service.focus(undefined);
      service.focus(new NgbDate(-2, 0, null));

      expect(mock.onNext).not.toHaveBeenCalled();
    });

    it(`should not emit the same date twice on 'focus()'`, () => {
      service.focus(new NgbDate(2017, 5, 2));
      service.focus(new NgbDate(2017, 5, 2));

      expect(mock.onNext).toHaveBeenCalledTimes(1);
    });

    it(`should update months when focused date updates`, () => {
      service.focus(new NgbDate(2017, 5, 5));

      expect(model.months.length).toBe(1);
      expect(model.months[0].firstDate).toEqual(new NgbDate(2017, 5, 1));

      // next month
      service.focus(new NgbDate(2017, 6, 10));

      expect(model.months.length).toBe(1);
      expect(model.months[0].firstDate).toEqual(new NgbDate(2017, 6, 1));

      // next year
      service.focus(new NgbDate(2018, 6, 10));

      expect(model.months.length).toBe(1);
      expect(model.months[0].firstDate).toEqual(new NgbDate(2018, 6, 1));

      expect(mock.onNext).toHaveBeenCalledTimes(3);
    });

    it(`should move focus with 'focusMove()'`, () => {
      const date = new NgbDate(2017, 5, 5);

      // days
      service.focus(date);
      service.focusMove('d', 1);
      expect(model.focusDate).toEqual(new NgbDate(2017, 5, 6));

      service.focus(date);
      service.focusMove('d', -1);
      expect(model.focusDate).toEqual(new NgbDate(2017, 5, 4));

      // months
      service.focus(date);
      service.focusMove('m', 1);
      expect(model.focusDate).toEqual(new NgbDate(2017, 6, 1));

      service.focus(date);
      service.focusMove('m', -1);
      expect(model.focusDate).toEqual(new NgbDate(2017, 4, 1));

      // years
      service.focus(date);
      service.focusMove('y', 1);
      expect(model.focusDate).toEqual(new NgbDate(2018, 1, 1));

      service.focus(date);
      service.focusMove('y', -1);
      expect(model.focusDate).toEqual(new NgbDate(2016, 1, 1));
    });

    it(`should move focus when 'minDate' changes`, () => {
      service.focus(new NgbDate(2017, 5, 5));
      service.maxDate = new NgbDate(2017, 5, 1);
      expect(model.focusDate).toEqual(new NgbDate(2017, 5, 1));
    });

    it(`should move focus when 'maxDate' changes`, () => {
      service.focus(new NgbDate(2017, 5, 5));
      service.minDate = new NgbDate(2017, 5, 10);
      expect(model.focusDate).toEqual(new NgbDate(2017, 5, 10));
    });

    it(`should not rebuild a single month if newly focused date is visible`, () => {
      service.focus(new NgbDate(2017, 5, 5));

      expect(model.months.length).toBe(1);
      const month = model.months[0];
      const date = month.weeks[0].days[0].date;
      expect(date).toEqual(new NgbDate(2017, 5, 1));

      service.focus(new NgbDate(2017, 5, 10));
      expect(model.months[0]).toBe(month);
      expect(getDay(0).date).toBe(date);
    });

    it(`should not rebuild multiple months if newly focused date is visible`, () => {
      service.displayMonths = 2;
      service.focus(new NgbDate(2017, 5, 5));

      expect(model.months.length).toBe(2);
      const months = model.months;
      expect(months[0].firstDate).toEqual(new NgbDate(2017, 5, 1));
      expect(months[1].lastDate).toEqual(new NgbDate(2017, 6, 30));

      service.focus(new NgbDate(2017, 6, 10));
      expect(model.months.length).toBe(2);
      expect(model.months[0]).toBe(months[0]);
      expect(model.months[1]).toBe(months[1]);
    });
  });

  describe(`view change handling`, () => {
    it(`should open month and set up focus correctly`, () => {
      service.open(new NgbDate(2017, 5, 5));
      expect(model.months.length).toBe(1);
      expect(model.firstDate).toEqual(new NgbDate(2017, 5, 1));
      expect(model.focusDate).toEqual(new NgbDate(2017, 5, 5));
    });

    it(`should open month and move the focus with it`, () => {
      service.focus(new NgbDate(2017, 5, 5));
      expect(model.months.length).toBe(1);
      expect(model.focusDate).toEqual(new NgbDate(2017, 5, 5));

      // same month, same focus
      service.open(new NgbDate(2017, 5, 1));
      expect(model.focusDate).toEqual(new NgbDate(2017, 5, 5));

      // different month, moving focus along
      service.open(new NgbDate(2017, 10, 10));
      expect(model.focusDate).toEqual(new NgbDate(2017, 10, 10));
    });

    it(`should open multiple months and move focus with them`, () => {
      // MAY-JUN
      service.displayMonths = 2;
      service.focus(new NgbDate(2017, 5, 5));
      expect(model.months.length).toBe(2);
      expect(model.firstDate).toEqual(new NgbDate(2017, 5, 1));
      expect(model.focusDate).toEqual(new NgbDate(2017, 5, 5));

      // moving view to JUL-AUG
      service.open(new NgbDate(2017, 7, 10));
      expect(model.firstDate).toEqual(new NgbDate(2017, 7, 1));
      expect(model.focusDate).toEqual(new NgbDate(2017, 7, 10));

      // moving view to MAY-JUN
      service.open(new NgbDate(2017, 5, 10));
      expect(model.firstDate).toEqual(new NgbDate(2017, 5, 1));
      expect(model.focusDate).toEqual(new NgbDate(2017, 5, 10));
    });

    it(`should open multiple months and do not touch focus if it is visible`, () => {
      // MAY-JUN
      service.displayMonths = 2;
      service.focus(new NgbDate(2017, 5, 5));
      expect(model.months.length).toBe(2);
      expect(model.firstDate).toEqual(new NgbDate(2017, 5, 1));
      expect(model.focusDate).toEqual(new NgbDate(2017, 5, 5));

      // moving focus to JUN
      service.focus(new NgbDate(2017, 6, 5));
      expect(model.focusDate).toEqual(new NgbDate(2017, 6, 5));

      // moving view to JUN-JUL
      service.open(new NgbDate(2017, 6, 10));
      expect(model.firstDate).toEqual(new NgbDate(2017, 6, 1));
      expect(model.focusDate).toEqual(new NgbDate(2017, 6, 5));

      // moving view to MAY-JUN
      service.open(new NgbDate(2017, 5, 10));
      expect(model.firstDate).toEqual(new NgbDate(2017, 5, 1));
      expect(model.focusDate).toEqual(new NgbDate(2017, 6, 5));
    });

    it(`should reuse existing months when opening`, () => {
      service.focus(new NgbDate(2017, 5, 5));
      expect(model.months.length).toBe(1);
      const month = model.months[0];
      const date = month.weeks[0].days[0].date;
      expect(date).toEqual(new NgbDate(2017, 5, 1));

      service.open(new NgbDate(2017, 5, 10));
      expect(model.months.length).toBe(1);
      expect(model.months[0]).toBe(month);
      expect(getDay(0).date).toBe(date);
    });
  });

  describe(`selection handling`, () => {
    it(`should generate months for initial selection`, () => {
      const date = new NgbDate(2017, 5, 5);
      service.select(date);
      expect(model.months.length).toBe(1);
      expect(model.selectedDate).toEqual(date);
    });

    it(`should select currently focused date with 'focusSelect()'`, () => {
      const date = new NgbDate(2017, 5, 5);
      service.focus(date);
      expect(model.selectedDate).toBeNull();
      expect(selectDate).toBeNull();

      service.focusSelect();
      expect(model.selectedDate).toEqual(date);
      expect(selectDate).toEqual(date);

      expect(mockSelect.onNext).toHaveBeenCalledTimes(1);
    });

    it(`should not select disabled dates with 'focusSelect()'`, () => {
      // marking 5th day of each month as disabled
      service.markDisabled = (date) => date && date.day === 5;

      // focusing MAY, 5
      const date = new NgbDate(2017, 5, 5);
      service.focus(date);
      expect(model.focusDate).toEqual(date);
      expect(model.selectedDate).toBeNull();
      expect(selectDate).toBeNull();

      service.focusSelect();
      expect(model.selectedDate).toBeNull();
      expect(selectDate).toBeNull();

      expect(mockSelect.onNext).not.toHaveBeenCalled();
    });

    it(`should not emit selection event by default`, () => {
      const date = new NgbDate(2017, 5, 5);
      service.select(date);
      expect(mockSelect.onNext).not.toHaveBeenCalled();
    });

    it(`should not emit selection event for null values`, () => {
      const date = new NgbDate(2017, 5, 5);
      service.select(null, {emitEvent: true});

      expect(mockSelect.onNext).not.toHaveBeenCalled();
    });

    it(`should emit date selection event'`, () => {
      const date = new NgbDate(2017, 5, 5);
      service.focus(date);
      expect(model.selectedDate).toBeNull();
      expect(selectDate).toBeNull();

      service.select(date, {emitEvent: true});
      expect(model.selectedDate).toEqual(date);
      expect(selectDate).toEqual(date);

      expect(mockSelect.onNext).toHaveBeenCalledTimes(1);
    });

    it(`should emit date selection event for non-visible dates'`, () => {
      const date = new NgbDate(2017, 5, 5);
      service.focus(date);
      expect(model.selectedDate).toBeNull();
      expect(selectDate).toBeNull();

      let invisibleDate = new NgbDate(2016, 5, 5);
      service.select(invisibleDate, {emitEvent: true});
      expect(model.selectedDate).toEqual(invisibleDate);
      expect(selectDate).toEqual(invisibleDate);

      expect(mockSelect.onNext).toHaveBeenCalledTimes(1);
    });

    it(`should not emit date selection event for disabled dates'`, () => {
      // marking 5th day of each month as disabled
      service.markDisabled = (date) => date && date.day === 5;

      // focusing MAY, 5
      const date = new NgbDate(2017, 5, 5);
      service.focus(date);
      expect(model.selectedDate).toBeNull();
      expect(selectDate).toBeNull();

      service.select(date, {emitEvent: true});
      expect(model.selectedDate).toBeNull();
      expect(selectDate).toBeNull();

      expect(mockSelect.onNext).not.toHaveBeenCalled();
    });

    it(`should emit date selection event when focusing on the same date twice`, () => {
      const date = new NgbDate(2017, 5, 5);
      service.focus(date);

      service.focusSelect();
      service.focusSelect();

      expect(mockSelect.onNext).toHaveBeenCalledTimes(2);
    });

    it(`should emit date selection event when selecting the same date twice`, () => {
      const date = new NgbDate(2017, 5, 5);
      service.focus(date);

      service.select(date, {emitEvent: true});
      service.select(date, {emitEvent: true});

      expect(mockSelect.onNext).toHaveBeenCalledTimes(2);
    });
  });

  describe(`template context`, () => {
    it(`should generate 'date' for day template`, () => {
      service.focus(new NgbDate(2017, 5, 1));
      expect(getDayCtx(0).date).toEqual({year: 2017, month: 5, day: 1});
      expect(getDayCtx(1).date).toEqual({year: 2017, month: 5, day: 2});

      service.focus(new NgbDate(2017, 10, 1));
      expect(getDayCtx(0).date).toEqual({year: 2017, month: 9, day: 25});
      expect(getDayCtx(1).date).toEqual({year: 2017, month: 9, day: 26});
    });

    it(`should generate 'currentMonth' for day template`, () => {
      service.focus(new NgbDate(2017, 5, 1));
      expect(getDayCtx(0).currentMonth).toBe(5);

      service.focus(new NgbDate(2017, 10, 1));
      expect(getDayCtx(0).currentMonth).toBe(10);
    });

    it(`should update 'focused' flag for day template`, () => {
      // off
      service.focus(new NgbDate(2017, 5, 1));
      expect(getDayCtx(0).focused).toBeFalsy();
      expect(getDayCtx(1).focused).toBeFalsy();

      // on
      service.focusVisible = true;
      expect(getDayCtx(0).focused).toBeTruthy();
      expect(getDayCtx(1).focused).toBeFalsy();

      // move
      service.focusMove('d', 1);
      expect(getDayCtx(0).focused).toBeFalsy();
      expect(getDayCtx(1).focused).toBeTruthy();

      // off
      service.focusVisible = false;
      expect(getDayCtx(0).focused).toBeFalsy();
      expect(getDayCtx(1).focused).toBeFalsy();
    });

    it(`should update 'selected' flag for day template`, () => {
      // off
      service.focus(new NgbDate(2017, 5, 1));
      expect(getDayCtx(0).selected).toBeFalsy();
      expect(getDayCtx(1).selected).toBeFalsy();

      // select
      service.focusSelect();
      expect(getDayCtx(0).selected).toBeTruthy();
      expect(getDayCtx(1).selected).toBeFalsy();

      // move
      service.select(new NgbDate(2017, 5, 2));
      expect(getDayCtx(0).selected).toBeFalsy();
      expect(getDayCtx(1).selected).toBeTruthy();

      // off
      service.select(null);
      expect(getDayCtx(0).selected).toBeFalsy();
      expect(getDayCtx(1).selected).toBeFalsy();
    });

    it(`should update 'disabled' flag for day template`, () => {
      // off
      service.focus(new NgbDate(2017, 5, 1));
      expect(getDayCtx(0).disabled).toBeFalsy();
      expect(getDayCtx(1).disabled).toBeFalsy();

      // marking 2nd day of each month as disabled
      service.markDisabled = (date) => date && date.day === 2;
      expect(getDayCtx(0).disabled).toBeFalsy();
      expect(getDayCtx(1).disabled).toBeTruthy();

      // global disabled on
      service.disabled = true;
      expect(getDayCtx(0).disabled).toBeTruthy();
      expect(getDayCtx(1).disabled).toBeTruthy();

      // global disabled on
      service.disabled = false;
      expect(getDayCtx(0).disabled).toBeFalsy();
      expect(getDayCtx(1).disabled).toBeTruthy();
    });
  });

  describe('toValidDate()', () => {
    it('should convert a valid NgbDate', () => {
      expect(service.toValidDate(new NgbDate(2016, 10, 5))).toEqual(new NgbDate(2016, 10, 5));
      expect(service.toValidDate({year: 2016, month: 10, day: 5})).toEqual(new NgbDate(2016, 10, 5));
    });

    it('should return today for an invalid NgbDate', () => {
      const today = calendar.getToday();
      expect(service.toValidDate(null)).toEqual(today);
      expect(service.toValidDate(<any>{})).toEqual(today);
      expect(service.toValidDate(undefined)).toEqual(today);
      expect(service.toValidDate(<any>new Date())).toEqual(today);
      expect(service.toValidDate(new NgbDate(275760, 9, 14))).toEqual(today);
    });

    it('should return today if default value is undefined', () => {
      expect(service.toValidDate(null, undefined)).toEqual(calendar.getToday());
    });

    it('should return default value for an invalid NgbDate if provided', () => {
      expect(service.toValidDate(null, new NgbDate(1066, 6, 6))).toEqual(new NgbDate(1066, 6, 6));
      expect(service.toValidDate(null, null)).toEqual(null);
    });
  });
});
