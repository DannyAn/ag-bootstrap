export * from './radio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbdRadio } from './radio.component';
import {DEMO_DIRECTIVES} from './demos';
import {NgbdSharedModule} from '../../shared';
import {NgbdComponentsSharedModule} from '../shared';
import { NgbdRadioRoutingModule } from './radio.routing';

@NgModule({
  imports     : [ CommonModule, FormsModule,NgbdSharedModule, NgbdComponentsSharedModule,NgbdRadioRoutingModule],
  exports: [ NgbdRadio ],
  declarations: [ NgbdRadio, ...DEMO_DIRECTIVES]
})
export class NgbdRadioModule {

}
