export * from './popover.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdPopover } from './popover.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdPopoverRoutingModule } from './popover.routing';

@NgModule({
  imports: [CommonModule, NgbdSharedModule, NgbdComponentsSharedModule,NgbdPopoverRoutingModule],
  exports: [NgbdPopover],
  declarations: [NgbdPopover, ...DEMO_DIRECTIVES]
})
export class NgbdPopoverModule { }
