export * from './dropdown.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdDropdown } from './dropdown.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdDropdownRoutingModule } from './dropdown.routing';

@NgModule({
  imports: [CommonModule, NgbdSharedModule, NgbdComponentsSharedModule,NgbdDropdownRoutingModule],
  exports: [NgbdDropdown],
  declarations: [NgbdDropdown, ...DEMO_DIRECTIVES]
})
export class NgbdDropdownModule { }
