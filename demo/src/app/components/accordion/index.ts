export * from './accordion.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdAccordion } from './accordion.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdAccordionRoutingModule } from './accordion.routing';

@NgModule({
  imports: [CommonModule, NgbdSharedModule, NgbdComponentsSharedModule, NgbdAccordionRoutingModule],
  exports: [NgbdAccordion],
  declarations: [NgbdAccordion, ...DEMO_DIRECTIVES]
})
export class NgbdAccordionModule { }
