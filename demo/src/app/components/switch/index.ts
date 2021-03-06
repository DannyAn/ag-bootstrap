export * from './switch.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbdSwitch } from './switch.component';
import {DEMO_DIRECTIVES} from './demos';
import {NgbdSharedModule} from '../../shared';
import {NgbdComponentsSharedModule} from '../shared';
import { NgbdSwitchRoutingModule } from './switch.routing';

@NgModule({
  imports: [ CommonModule, FormsModule,NgbdSharedModule, NgbdComponentsSharedModule, NgbdSwitchRoutingModule],
  exports: [ NgbdSwitch ],
  declarations: [ NgbdSwitch, ...DEMO_DIRECTIVES]
})
export class NgbdSwitchModule {

}

