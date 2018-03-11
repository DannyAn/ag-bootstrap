import {TestBed} from '@angular/core/testing';
import {Subject} from 'rxjs/Subject';

import {NgbDatepickerKeyMapService} from './datepicker-keymap-service';
import {NgbDatepickerService} from './datepicker-service';
import {NgbCalendar, NgbCalendarGregorian} from './ngb-calendar';
import {NgbDate} from './ngb-date';

enum Key {
  Enter = 13,
  Space = 32,
  PageUp = 33,
  PageDown = 34,
  End = 35,
  Home = 36,
  ArrowLeft = 37,
  ArrowUp = 38,
  ArrowRight = 39,
  ArrowDown = 40
}

const event = (keyCode: number, shift = false) =>
    <any>({which: keyCode, shiftKey: shift, preventDefault: () => {}, stopPropagation: () => {}});

describe('ngb-datepicker-keymap-service', () => {
  let service: NgbDatepickerKeyMapService;
  let calendar: NgbCalendar;
  let mock: {focus, focusMove, focusSelect, model$};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NgbDatepickerKeyMapService, {provide: NgbCalendar, useClass: NgbCalendarGregorian}, {
          provide: NgbDatepickerService,
          useValue: {focus: () => {}, focusMove: () => {}, focusSelect: () => {}, model$: new Subject()}
        }
      ]
    });

    calendar = TestBed.get(NgbCalendar);
    service = TestBed.get(NgbDatepickerKeyMapService);
    mock = TestBed.get(NgbDatepickerService);

    spyOn(mock, 'focus');
    spyOn(mock, 'focusMove');
    spyOn(mock, 'focusSelect');
  });

  it('should be instantiated', () => {
    expect(service).toBeTruthy();
  });

  it('should move focus by 1 day or 1 week with "Arrow" keys', () => {
    service.processKey(event(Key.ArrowUp));
    expect(mock.focusMove).toHaveBeenCalledWith('d', -7);

    service.processKey(event(Key.ArrowDown));
    expect(mock.focusMove).toHaveBeenCalledWith('d', 7);

    service.processKey(event(Key.ArrowLeft));
    expect(mock.focusMove).toHaveBeenCalledWith('d', -1);

    service.processKey(event(Key.ArrowRight));
    expect(mock.focusMove).toHaveBeenCalledWith('d', 1);

    expect(mock.focusMove).toHaveBeenCalledTimes(4);
  });

  it('should move focus by 1 month or year "PgUp" and "PageDown"', () => {
    service.processKey(event(Key.PageUp));
    expect(mock.focusMove).toHaveBeenCalledWith('m', -1);

    service.processKey(event(Key.PageDown));
    expect(mock.focusMove).toHaveBeenCalledWith('m', 1);

    service.processKey(event(Key.PageUp, true));
    expect(mock.focusMove).toHaveBeenCalledWith('y', -1);

    service.processKey(event(Key.PageDown, true));
    expect(mock.focusMove).toHaveBeenCalledWith('y', 1);

    expect(mock.focusMove).toHaveBeenCalledTimes(4);
  });

  it('should select focused date with "Space" and "Enter"', () => {
    service.processKey(event(Key.Enter));
    service.processKey(event(Key.Space));
    expect(mock.focusSelect).toHaveBeenCalledTimes(2);
  });

  it('should move focus to the first and last days in the view with "Home" and "End"', () => {
    service.processKey(event(Key.Home));
    expect(mock.focus).toHaveBeenCalledWith(undefined);

    service.processKey(event(Key.End));
    expect(mock.focus).toHaveBeenCalledWith(undefined);

    mock.model$.next({firstDate: new NgbDate(2017, 1, 1), lastDate: new NgbDate(2017, 12, 1)});

    service.processKey(event(Key.Home));
    expect(mock.focus).toHaveBeenCalledWith(new NgbDate(2017, 1, 1));

    service.processKey(event(Key.End));
    expect(mock.focus).toHaveBeenCalledWith(new NgbDate(2017, 12, 1));

    expect(mock.focus).toHaveBeenCalledTimes(4);
  });

  it('should move focus to the "min" and "max" dates with "Home" and "End"', () => {
    service.processKey(event(Key.Home, true));
    expect(mock.focus).toHaveBeenCalledWith(undefined);

    service.processKey(event(Key.End, true));
    expect(mock.focus).toHaveBeenCalledWith(undefined);

    mock.model$.next({minDate: new NgbDate(2017, 1, 1), maxDate: new NgbDate(2017, 12, 1), months: []});

    service.processKey(event(Key.Home, true));
    expect(mock.focus).toHaveBeenCalledWith(new NgbDate(2017, 1, 1));

    service.processKey(event(Key.End, true));
    expect(mock.focus).toHaveBeenCalledWith(new NgbDate(2017, 12, 1));

    expect(mock.focus).toHaveBeenCalledTimes(4);
  });

  it('should prevent default and stop propagation of the known key', () => {
    let e = event(Key.ArrowUp);
    spyOn(e, 'preventDefault');
    spyOn(e, 'stopPropagation');

    service.processKey(e);
    expect(e.preventDefault).toHaveBeenCalled();
    expect(e.stopPropagation).toHaveBeenCalled();

    // unknown key
    e = event(23);
    spyOn(e, 'preventDefault');
    spyOn(e, 'stopPropagation');

    service.processKey(e);
    expect(e.preventDefault).not.toHaveBeenCalled();
    expect(e.stopPropagation).not.toHaveBeenCalled();
  });
});
