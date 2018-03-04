import {NgbdDatepickerAdapter} from './adapter/datepicker-adapter';
import {NgbdDatepickerBasic} from './basic/datepicker-basic';
import {NgbdDatepickerConfig} from './config/datepicker-config';
import {NgbdDatepickerI18n} from './i18n/datepicker-i18n';
import {NgbdDatepickerDisabled} from './disabled/datepicker-disabled';
import {NgbdDatepickerPopup} from './popup/datepicker-popup';
import {NgbdDatepickerCustomday} from './customday/datepicker-customday';
import {NgbdDatepickerMultiple} from './multiple/datepicker-multiple';
import {NgbdDatepickerCalendars, NgbdIslamicCivil, NgbdIslamicUmalqura} from './calendars/datepicker-calendars';
import {NgbdDatepickerRange} from './range/datepicker-range';

export const DEMO_DIRECTIVES = [
  NgbdDatepickerBasic, NgbdDatepickerPopup, NgbdDatepickerDisabled, NgbdDatepickerI18n,
  NgbdDatepickerCustomday, NgbdDatepickerConfig, NgbdDatepickerMultiple, NgbdDatepickerCalendars,
  NgbdDatepickerRange, NgbdIslamicCivil, NgbdIslamicUmalqura, NgbdDatepickerAdapter
];

export const DEMO_SNIPPETS = {
  'basic': {
    'code': require('!!prismjs-loader?lang=typescript!./basic/datepicker-basic'),
    'markup': require('!!prismjs-loader?lang=markup!./basic/datepicker-basic.html')
  },
  'popup': {
    'code': require('!!prismjs-loader?lang=typescript!./popup/datepicker-popup'),
    'markup': require('!!prismjs-loader?lang=markup!./popup/datepicker-popup.html')
  },
  'disabled': {
    'code': require('!!prismjs-loader?lang=typescript!./disabled/datepicker-disabled'),
    'markup': require('!!prismjs-loader?lang=markup!./disabled/datepicker-disabled.html')
  },
  'i18n': {
    'code': require('!!prismjs-loader?lang=typescript!./i18n/datepicker-i18n'),
    'markup': require('!!prismjs-loader?lang=markup!./i18n/datepicker-i18n.html')
  },
  'customday': {
    'code': require('!!prismjs-loader?lang=typescript!./customday/datepicker-customday'),
    'markup': require('!!prismjs-loader?lang=markup!./customday/datepicker-customday.html')
  },
  'multiple': {
    'code': require('!!prismjs-loader?lang=typescript!./multiple/datepicker-multiple'),
    'markup': require('!!prismjs-loader?lang=markup!./multiple/datepicker-multiple.html')
  },
  'range': {
    'code': require('!!prismjs-loader?lang=typescript!./range/datepicker-range'),
    'markup': require('!!prismjs-loader?lang=markup!./range/datepicker-range.html')
  },
  'calendars': {
    'code': require('!!prismjs-loader?lang=typescript!./calendars/datepicker-calendars'),
    'markup': require('!!prismjs-loader?lang=markup!./calendars/datepicker-calendars.html')
  },
  'adapter': {
    'code': require('!!prismjs-loader?lang=typescript!./adapter/datepicker-adapter'),
    'markup': require('!!prismjs-loader?lang=markup!./adapter/datepicker-adapter.html')
  },
  'config': {
    'code': require('!!prismjs-loader?lang=typescript!./config/datepicker-config'),
    'markup': require('!!prismjs-loader?lang=markup!./config/datepicker-config.html')
  }
};
