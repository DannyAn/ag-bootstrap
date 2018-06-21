export * from './menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbdMenu } from './menu.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdMenuRoutingModule } from './menu.routing';

@NgModule({
  imports: [CommonModule, FormsModule, NgbdSharedModule, NgbdComponentsSharedModule,NgbdMenuRoutingModule],
  exports: [NgbdMenu],
  declarations: [NgbdMenu, ...DEMO_DIRECTIVES]
})
export class NgbdMenuModule {

}
