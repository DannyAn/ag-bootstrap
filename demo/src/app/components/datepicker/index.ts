export * from './datepicker.component';

import { NgModule } from '@angular/core';
import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdDatepicker } from './datepicker.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdDatepickerRoutingModule } from './datepicker.routing';

@NgModule({
  imports: [NgbdSharedModule, NgbdComponentsSharedModule, NgbdDatepickerRoutingModule],
  exports: [NgbdDatepicker],
  declarations: [NgbdDatepicker, ...DEMO_DIRECTIVES],
})
export class NgbdDatepickerModule { }
