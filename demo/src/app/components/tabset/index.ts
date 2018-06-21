export * from './tabset.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdTabs } from './tabset.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdTabsRoutingModule } from './tabset.routing';

@NgModule({
  imports: [CommonModule, NgbdSharedModule, NgbdComponentsSharedModule, NgbdTabsRoutingModule],
  exports: [NgbdTabs],
  declarations: [NgbdTabs, ...DEMO_DIRECTIVES]
})
export class NgbdTabsModule { }
