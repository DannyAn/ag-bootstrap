import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgbCheckBox} from './checkbox';
import {NgbButtonLabel} from './label';
import {NgbRadio, NgbRadioGroup} from './radio';

export {NgbCheckBox} from './checkbox';
export {NgbButtonLabel} from './label';
export {NgbRadio, NgbRadioGroup} from './radio';


const NGB_BUTTON_DIRECTIVES = [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio];

@NgModule({declarations: NGB_BUTTON_DIRECTIVES, exports: NGB_BUTTON_DIRECTIVES})
export class NgbButtonsModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbButtonsModule, providers: []}; }
}
