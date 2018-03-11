import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from './dropdown';
import {NgbDropdownConfig} from './dropdown-config';

export {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from './dropdown';
export {NgbDropdownConfig} from './dropdown-config';

const NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu];

@NgModule({declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES})
export class NgbDropdownModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NgbDropdownModule, providers: [NgbDropdownConfig]};
  }
}
