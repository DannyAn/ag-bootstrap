import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgbModal} from './modal';
import {NgbModalBackdrop} from './modal-backdrop';
import {NgbModalStack} from './modal-stack';
import {NgbModalWindow} from './modal-window';

export {NgbModal, NgbModalOptions} from './modal';
export {ModalDismissReasons} from './modal-dismiss-reasons';
export {NgbActiveModal, NgbModalRef} from './modal-ref';

@NgModule({
  declarations: [NgbModalBackdrop, NgbModalWindow],
  entryComponents: [NgbModalBackdrop, NgbModalWindow],
  providers: [NgbModal]
})
export class NgbModalModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbModalModule, providers: [NgbModal, NgbModalStack]}; }
}
