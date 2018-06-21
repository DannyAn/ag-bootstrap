export * from './select.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbdSelect } from './select.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdSelectRoutingModule } from './select.routing';

@NgModule({
  imports: [CommonModule, FormsModule, HttpModule,
    JsonpModule, NgbdSharedModule, NgbdComponentsSharedModule, NgbdSelectRoutingModule],
  exports: [NgbdSelect],
  declarations: [NgbdSelect, ...DEMO_DIRECTIVES]
})
export class NgbdSelectModule {

}
