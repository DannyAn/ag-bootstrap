export * from './dropdown.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbdDropDownExt } from './dropdown.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdDropDownExtRoutingModule } from './dropdown.routing';

@NgModule({
  imports: [CommonModule, FormsModule, NgbdSharedModule, NgbdComponentsSharedModule, NgbdDropDownExtRoutingModule],
  exports: [NgbdDropDownExt],
  declarations: [NgbdDropDownExt, ...DEMO_DIRECTIVES]
})
export class NgbdDropDownExtModule {

}
