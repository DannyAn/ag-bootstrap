export * from './transfer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbdTransfer } from './transfer.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdTransferRoutingModule } from './transfer.routing';

@NgModule({
  imports: [CommonModule, FormsModule, NgbdSharedModule, NgbdComponentsSharedModule, NgbdTransferRoutingModule],
  exports: [NgbdTransfer],
  declarations: [NgbdTransfer, ...DEMO_DIRECTIVES]
})
export class NgbdTransferModule {

}
