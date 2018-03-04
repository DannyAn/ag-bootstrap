export * from './checkbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbdCheckbox } from './checkbox.component';
import {DEMO_DIRECTIVES} from './demos';
import {NgbdSharedModule} from '../../shared';
import {NgbdComponentsSharedModule} from '../shared';

@NgModule({
  imports: [ CommonModule, FormsModule,NgbdSharedModule, NgbdComponentsSharedModule],
  exports: [ NgbdCheckbox ],
  declarations: [ NgbdCheckbox, ...DEMO_DIRECTIVES]
})
export class NgbdCheckboxModule {

}
