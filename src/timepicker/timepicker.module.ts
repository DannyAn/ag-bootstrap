import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgbTimepicker} from './timepicker';
import {NgbTimepickerConfig} from './timepicker-config';

export {NgbTimeStruct} from './ngb-time-struct';
export {NgbTimepicker} from './timepicker';
export {NgbTimepickerConfig} from './timepicker-config';

@NgModule({declarations: [NgbTimepicker], exports: [NgbTimepicker], imports: [CommonModule]})
export class NgbTimepickerModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbTimepickerModule, providers: [NgbTimepickerConfig]}; }
}
