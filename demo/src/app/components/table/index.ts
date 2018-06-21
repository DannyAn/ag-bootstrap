export * from './table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbdTable } from './table.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdTableRoutingModule } from './table.routing';

@NgModule({
  imports: [CommonModule, FormsModule, NgbdSharedModule, NgbdComponentsSharedModule, NgbdTableRoutingModule],
  exports: [NgbdTable],
  declarations: [NgbdTable, ...DEMO_DIRECTIVES]
})
export class NgbdTableModule {

}
