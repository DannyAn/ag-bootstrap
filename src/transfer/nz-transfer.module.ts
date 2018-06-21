import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NzButtonModule} from '../button/nz-button.module';
import {NzCheckboxModule} from '../checkbox/nz-checkbox.module';
import {NzInputModule} from '../input/nz-input.module';
import {NzLocaleModule} from '../locale/index';

import {NzTransferListComponent} from './nz-transfer-list.component';
import {NzTransferSearchComponent} from './nz-transfer-search.component';
import {NzTransferComponent} from './nz-transfer.component';
import {TransferCanMove} from './transfer-can-move';
import {TransferItem} from './transfer-item';

export {TransferCanMove} from './transfer-can-move';
export {TransferItem} from './transfer-item';

@NgModule({
  imports: [
    //CommonModule, FormsModule, BrowserAnimationsModule, NzCheckboxModule, NzButtonModule, NzInputModule, NzLocaleModule
    CommonModule, FormsModule, NzCheckboxModule, NzButtonModule, NzInputModule, NzLocaleModule
  ],
  declarations: [NzTransferComponent, NzTransferListComponent, NzTransferSearchComponent],
  exports: [NzTransferComponent]
})
export class NzTransferModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NzTransferModule, providers: [TransferItem, TransferCanMove]};
  }
}
