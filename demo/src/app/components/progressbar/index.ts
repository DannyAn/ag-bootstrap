export * from './progressbar.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdProgressbar } from './progressbar.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdProgressbarRoutingModule } from './progressbar.routing';

@NgModule({
  imports: [CommonModule, NgbdSharedModule, NgbdComponentsSharedModule, NgbdProgressbarRoutingModule],
  exports: [NgbdProgressbar],
  declarations: [NgbdProgressbar, ...DEMO_DIRECTIVES]
})
export class NgbdProgressbarModule { }
