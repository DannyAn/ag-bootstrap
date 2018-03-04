import {Injectable} from '@angular/core';

import {toString} from '../util/util';

import {NgbDatepickerService} from './datepicker-service';
import {NgbCalendar} from './ngb-calendar';
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

@Injectable()
export class NgbDatepickerKeyMapService {
  private _minDate: NgbDate;
  private _maxDate: NgbDate;
  private _firstViewDate: NgbDate;
  private _lastViewDate: NgbDate;

  constructor(private _service: NgbDatepickerService, private _calendar: NgbCalendar) {
    _service.model$.subscribe(model => {
      this._minDate = model.minDate;
      this._maxDate = model.maxDate;
      this._firstViewDate = model.firstDate;
      this._lastViewDate = model.lastDate;
    });
  }

  processKey(event: KeyboardEvent) {
    if (Key[toString(event.which)]) {
      switch (event.which) {
        case Key.PageUp:
          this._service.focusMove(event.shiftKey ? 'y' : 'm', -1);
          break;
        case Key.PageDown:
          this._service.focusMove(event.shiftKey ? 'y' : 'm', 1);
          break;
        case Key.End:
          this._service.focus(event.shiftKey ? this._maxDate : this._lastViewDate);
          break;
        case Key.Home:
          this._service.focus(event.shiftKey ? this._minDate : this._firstViewDate);
          break;
        case Key.ArrowLeft:
          this._service.focusMove('d', -1);
          break;
        case Key.ArrowUp:
          this._service.focusMove('d', -this._calendar.getDaysPerWeek());
          break;
        case Key.ArrowRight:
          this._service.focusMove('d', 1);
          break;
        case Key.ArrowDown:
          this._service.focusMove('d', this._calendar.getDaysPerWeek());
          break;
        case Key.Enter:
        case Key.Space:
          this._service.focusSelect();
          break;
        default:
          return;
      }

      event.preventDefault();
      event.stopPropagation();
    }
  }
}
