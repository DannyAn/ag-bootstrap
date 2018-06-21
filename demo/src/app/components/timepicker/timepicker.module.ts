export * from './timepicker.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdTimepicker } from './timepicker.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdTimePickerRoutingModule } from './timepicker.routing';

@NgModule({
  imports: [CommonModule, NgbdSharedModule, NgbdComponentsSharedModule, NgbdTimePickerRoutingModule],
  exports: [NgbdTimepicker],
  declarations: [NgbdTimepicker, ...DEMO_DIRECTIVES]
})
export class NgbdTimepickerModule { }
