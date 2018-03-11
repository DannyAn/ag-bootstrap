import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {createGenericTestComponent, isBrowser} from '../test/common';

import {NgbDatepickerDayView} from './datepicker-day-view';
import {NgbDatepickerMonthView} from './datepicker-month-view';
import {MonthViewModel} from './datepicker-view-model';
import {NgbDatepickerModule} from './datepicker.module';
import {NgbDate} from './ngb-date';

const createTestComponent = (html: string) =>
    createGenericTestComponent(html, TestComponent) as ComponentFixture<TestComponent>;

function getWeekdays(element: HTMLElement): HTMLElement[] {
  return <HTMLElement[]>Array.from(element.querySelectorAll('.ngb-dp-weekday'));
}

function getWeekNumbers(element: HTMLElement): HTMLElement[] {
  return <HTMLElement[]>Array.from(element.querySelectorAll('.ngb-dp-week-number'));
}

function getDates(element: HTMLElement): HTMLElement[] {
  return <HTMLElement[]>Array.from(element.querySelectorAll('.ngb-dp-day'));
}

function expectWeekdays(element: HTMLElement, weekdays: string[]) {
  const result = getWeekdays(element).map(td => td.innerText.trim());
  expect(result).toEqual(weekdays);
}

function expectWeekNumbers(element: HTMLElement, weeknumbers: string[]) {
  const result = getWeekNumbers(element).map(td => td.innerText.trim());
  expect(result).toEqual(weeknumbers);
}

function expectDates(element: HTMLElement, dates: string[]) {
  const result = getDates(element).map(td => td.innerText.trim());
  expect(result).toEqual(dates);
}

describe('ngb-datepicker-month-view', () => {
  beforeEach(() => {
    TestBed.overrideModule(NgbDatepickerModule, {set: {exports: [NgbDatepickerMonthView, NgbDatepickerDayView]}});
    TestBed.configureTestingModule({declarations: [TestComponent], imports: [NgbDatepickerModule.forRoot()]});
  });

  it('should show/hide weekdays', () => {
    const fixture = createTestComponent(
        '<ngb-datepicker-month-view [month]="month" [showWeekdays]="showWeekdays"></ngb-datepicker-month-view>');

    expectWeekdays(fixture.nativeElement, ['Mo']);

    fixture.componentInstance.showWeekdays = false;
    fixture.detectChanges();
    expectWeekdays(fixture.nativeElement, []);
  });

  it('should show/hide week numbers', () => {
    const fixture = createTestComponent(
        '<ngb-datepicker-month-view [month]="month" [showWeekNumbers]="showWeekNumbers"></ngb-datepicker-month-view>');

    expectWeekNumbers(fixture.nativeElement, ['2']);

    fixture.componentInstance.showWeekNumbers = false;
    fixture.detectChanges();
    expectWeekNumbers(fixture.nativeElement, []);
  });

  it('should use custom template to display dates', () => {
    const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngb-datepicker-month-view [month]="month" [dayTemplate]="tpl"></ngb-datepicker-month-view>
      `);
    expectDates(fixture.nativeElement, ['22', '23']);
  });

  it('should send date selection events', () => {
    const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngb-datepicker-month-view [month]="month" [dayTemplate]="tpl" (select)="onClick($event)"></ngb-datepicker-month-view>
      `);

    spyOn(fixture.componentInstance, 'onClick');

    const dates = getDates(fixture.nativeElement);
    dates[0].click();

    expect(fixture.componentInstance.onClick).toHaveBeenCalledWith(new NgbDate(2016, 7, 22));
  });

  it('should not send date selection events for disabled dates', () => {
    const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngb-datepicker-month-view [month]="month" [dayTemplate]="tpl" (select)="onClick($event)"></ngb-datepicker-month-view>
      `);

    fixture.componentInstance.month.weeks[0].days[0].context.disabled = true;
    fixture.detectChanges();

    spyOn(fixture.componentInstance, 'onClick');

    const dates = getDates(fixture.nativeElement);
    dates[0].click();

    expect(fixture.componentInstance.onClick).not.toHaveBeenCalled();
  });

  if (!isBrowser('ie9')) {
    it('should set cursor to pointer', () => {
      const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngb-datepicker-month-view [month]="month" [dayTemplate]="tpl" (change)="onClick($event)"></ngb-datepicker-month-view>
      `);

      const dates = getDates(fixture.nativeElement);
      expect(window.getComputedStyle(dates[0]).getPropertyValue('cursor')).toBe('pointer');
    });
  }

  if (!isBrowser('ie9')) {
    it('should set default cursor for disabled dates', () => {
      const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngb-datepicker-month-view [month]="month" [dayTemplate]="tpl" (change)="onClick($event)"></ngb-datepicker-month-view>
      `);

      const newMonth = Object.assign({}, fixture.componentInstance.month);
      newMonth.weeks[0].days[0].context.disabled = true;
      fixture.componentInstance.month = newMonth;
      fixture.detectChanges();

      const dates = getDates(fixture.nativeElement);
      expect(window.getComputedStyle(dates[0]).getPropertyValue('cursor')).toBe('default');
    });

    it('should set default cursor for other months days', () => {
      const fixture = createTestComponent(
          '<ngb-datepicker-month-view [month]="month" [outsideDays]="outsideDays"></ngb-datepicker-month-view>');

      const dates = getDates(fixture.nativeElement);
      expect(window.getComputedStyle(dates[1]).getPropertyValue('cursor')).toBe('pointer');

      fixture.componentInstance.outsideDays = 'collapsed';
      fixture.detectChanges();
      expect(window.getComputedStyle(dates[1]).getPropertyValue('cursor')).toBe('default');

      fixture.componentInstance.outsideDays = 'hidden';
      fixture.detectChanges();
      expect(window.getComputedStyle(dates[1]).getPropertyValue('cursor')).toBe('default');
    });
  }

  it('should apply proper visibility to other months days', () => {
    const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngb-datepicker-month-view [month]="month" [outsideDays]="outsideDays" [dayTemplate]="tpl"></ngb-datepicker-month-view>
    `);

    let dates = getDates(fixture.nativeElement);
    expect(dates[0]).not.toHaveCssClass('hidden');
    expect(dates[1]).not.toHaveCssClass('hidden');
    expectDates(fixture.nativeElement, ['22', '23']);

    fixture.componentInstance.outsideDays = 'collapsed';
    fixture.detectChanges();
    expect(dates[0]).not.toHaveCssClass('hidden');
    expect(dates[1]).toHaveCssClass('hidden');
    expectDates(fixture.nativeElement, ['22', '']);

    fixture.componentInstance.outsideDays = 'hidden';
    fixture.detectChanges();
    expect(dates[0]).not.toHaveCssClass('hidden');
    expect(dates[1]).toHaveCssClass('hidden');
    expectDates(fixture.nativeElement, ['22', '']);
  });

  it('should collapse weeks outside of current month', () => {
    const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngb-datepicker-month-view [month]="monthCollapsedWeeks" [outsideDays]="outsideDays" [dayTemplate]="tpl">
        </ngb-datepicker-month-view>
    `);

    expectDates(fixture.nativeElement, ['4', '1', '2', '3', '4', '1', '2', '3']);

    fixture.componentInstance.outsideDays = 'collapsed';
    fixture.detectChanges();
    expectDates(fixture.nativeElement, ['', '1', '2', '3', '4', '']);

    fixture.componentInstance.outsideDays = 'hidden';
    fixture.detectChanges();
    expectDates(fixture.nativeElement, ['', '1', '2', '3', '4', '', '', '']);
  });

  it('should collapse weeks regardless of "showWeekNumbers" value', () => {
    const fixture = createTestComponent(`
        <ng-template #tpl let-date="date">{{ date.day }}</ng-template>
        <ngb-datepicker-month-view [month]="monthCollapsedWeeks" outsideDays="collapsed" [dayTemplate]="tpl">
        </ngb-datepicker-month-view>
    `);

    expectDates(fixture.nativeElement, ['', '1', '2', '3', '4', '']);

    fixture.componentInstance.showWeekNumbers = true;
    fixture.detectChanges();
    expectDates(fixture.nativeElement, ['', '1', '2', '3', '4', '']);
  });
});

@Component({selector: 'test-cmp', template: ''})
class TestComponent {
  month: MonthViewModel = {
    firstDate: new NgbDate(2016, 7, 22),
    lastDate: new NgbDate(2016, 7, 23),
    year: 2016,
    number: 7,
    weekdays: [1],
    weeks: [{
      number: 2,
      days:
          [
            {
              date: new NgbDate(2016, 7, 22),
              context: {
                currentMonth: 7,
                date: {year: 2016, month: 7, day: 22},
                disabled: false,
                focused: false,
                selected: false
              }
            },
            {
              date: new NgbDate(2016, 8, 23),
              context: {
                currentMonth: 7,
                date: {year: 2016, month: 8, day: 23},
                disabled: false,
                focused: false,
                selected: false
              }
            }
          ]
    }]
  };

  monthCollapsedWeeks: MonthViewModel = {
    firstDate: new NgbDate(2016, 8, 1),
    lastDate: new NgbDate(2016, 8, 31),
    year: 2016,
    number: 8,
    weekdays: [1, 2],
    weeks:
        [
          // month: 7, 8
          {
            number: 2,
            days:
                [
                  {
                    date: new NgbDate(2016, 7, 4),
                    context: {
                      currentMonth: 8,
                      date: {year: 2016, month: 7, day: 4},
                      disabled: false,
                      focused: false,
                      selected: false
                    }
                  },
                  {
                    date: new NgbDate(2016, 8, 1),
                    context: {
                      currentMonth: 8,
                      date: {year: 2016, month: 8, day: 1},
                      disabled: false,
                      focused: false,
                      selected: false
                    }
                  }
                ]
          },
          // month: 8, 8
          {
            number: 3,
            days:
                [
                  {
                    date: new NgbDate(2016, 8, 2),
                    context: {
                      currentMonth: 8,
                      date: {year: 2016, month: 8, day: 2},
                      disabled: false,
                      focused: false,
                      selected: false
                    }
                  },
                  {
                    date: new NgbDate(2016, 8, 3),
                    context: {
                      currentMonth: 8,
                      date: {year: 2016, month: 8, day: 3},
                      disabled: false,
                      focused: false,
                      selected: false
                    }
                  }
                ]
          },
          // month: 8, 9
          {
            number: 3,
            days:
                [
                  {
                    date: new NgbDate(2016, 8, 4),
                    context: {
                      currentMonth: 8,
                      date: {year: 2016, month: 8, day: 4},
                      disabled: false,
                      focused: false,
                      selected: false
                    }
                  },
                  {
                    date: new NgbDate(2016, 9, 1),
                    context: {
                      currentMonth: 8,
                      date: {year: 2016, month: 9, day: 1},
                      disabled: false,
                      focused: false,
                      selected: false
                    }
                  }
                ]
          },
          // month: 9, 9 -> to collapse
          {
            number: 4,
            days:
                [
                  {
                    date: new NgbDate(2016, 9, 2),
                    context: {
                      currentMonth: 8,
                      date: {year: 2016, month: 9, day: 2},
                      disabled: false,
                      focused: false,
                      selected: false
                    }
                  },
                  {
                    date: new NgbDate(2016, 9, 3),
                    context: {
                      currentMonth: 8,
                      date: {year: 2016, month: 9, day: 3},
                      disabled: false,
                      focused: false,
                      selected: false
                    }
                  }
                ]
          }
        ]
  };

  showWeekdays = true;
  showWeekNumbers = true;
  outsideDays = 'visible';

  onClick = () => {};
}
