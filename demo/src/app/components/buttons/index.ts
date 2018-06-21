export * from './buttons.component';

import { NgModule } from '@angular/core';

import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdButtons } from './buttons.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdButtonsRoutingModule } from './buttons.routing';

@NgModule({
  imports: [NgbdSharedModule, NgbdComponentsSharedModule, NgbdButtonsRoutingModule],
  exports: [NgbdButtons],
  declarations: [NgbdButtons, ...DEMO_DIRECTIVES]
})
export class NgbdButtonsModule { }
