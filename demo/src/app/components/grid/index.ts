export * from './grid.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbdGrid } from './grid.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';

@NgModule({
  imports: [CommonModule, FormsModule, NgbdSharedModule, NgbdComponentsSharedModule],
  exports: [NgbdGrid],
  declarations: [NgbdGrid, ...DEMO_DIRECTIVES]
})
export class NgbdGridModule {

}
