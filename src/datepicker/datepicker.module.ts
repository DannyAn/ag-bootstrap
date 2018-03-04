import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {NgbDatepicker, NgbDatepickerNavigateEvent} from './datepicker';
import {NgbDatepickerConfig} from './datepicker-config';
import {NgbDatepickerDayView} from './datepicker-day-view';
import {NgbDatepickerI18n, NgbDatepickerI18nDefault} from './datepicker-i18n';
import {NgbInputDatepicker} from './datepicker-input';
import {NgbDatepickerMonthView} from './datepicker-month-view';
import {NgbDatepickerNavigation} from './datepicker-navigation';
import {NgbDatepickerNavigationSelect} from './datepicker-navigation-select';
import {NgbCalendarIslamicCivil} from './hijri/ngb-calendar-islamic-civil';
import {NgbCalendarIslamicUmalqura} from './hijri/ngb-calendar-islamic-umalqura';
import {NgbCalendar, NgbCalendarGregorian} from './ngb-calendar';
import {NgbDateAdapter, NgbDateStructAdapter} from './ngb-date-adapter';
import {NgbDateISOParserFormatter, NgbDateParserFormatter} from './ngb-date-parser-formatter';

export {NgbDatepicker, NgbDatepickerNavigateEvent} from './datepicker';
export {NgbDatepickerConfig} from './datepicker-config';
export {NgbDatepickerDayView} from './datepicker-day-view';
export {NgbDatepickerI18n} from './datepicker-i18n';
export {NgbInputDatepicker} from './datepicker-input';
export {NgbDatepickerMonthView} from './datepicker-month-view';
export {NgbDatepickerNavigation} from './datepicker-navigation';
export {NgbDatepickerNavigationSelect} from './datepicker-navigation-select';
export {NgbCalendarIslamicCivil} from './hijri/ngb-calendar-islamic-civil';
export {NgbCalendarIslamicUmalqura} from './hijri/ngb-calendar-islamic-umalqura';
export {NgbCalendar} from './ngb-calendar';
export {NgbDateAdapter} from './ngb-date-adapter';
export {NgbDateParserFormatter} from './ngb-date-parser-formatter';
export {NgbDateStruct} from './ngb-date-struct';

@NgModule({
  declarations: [
    NgbDatepicker, NgbDatepickerMonthView, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerDayView,
    NgbInputDatepicker
  ],
  exports: [NgbDatepicker, NgbInputDatepicker],
  imports: [CommonModule, FormsModule],
  entryComponents: [NgbDatepicker]
})
export class NgbDatepickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgbDatepickerModule,
      providers: [
        {provide: NgbCalendar, useClass: NgbCalendarGregorian},
        {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nDefault},
        {provide: NgbDateParserFormatter, useClass: NgbDateISOParserFormatter},
        {provide: NgbDateAdapter, useClass: NgbDateStructAdapter}, NgbDatepickerConfig
      ]
    };
  }
}
