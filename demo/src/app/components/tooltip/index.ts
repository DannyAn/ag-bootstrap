export * from './tooltip.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdTooltip } from './tooltip.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdTooltipRoutingModule } from './tooltip.routing';

@NgModule({
  imports: [CommonModule, NgbdSharedModule, NgbdComponentsSharedModule, NgbdTooltipRoutingModule],
  exports: [NgbdTooltip],
  declarations: [NgbdTooltip, ...DEMO_DIRECTIVES]
})
export class NgbdTooltipModule { }
