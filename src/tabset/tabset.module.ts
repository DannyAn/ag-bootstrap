import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgbTab, NgbTabChangeEvent, NgbTabContent, NgbTabset, NgbTabTitle} from './tabset';
import {NgbTabsetConfig} from './tabset-config';

export {NgbTab, NgbTabChangeEvent, NgbTabContent, NgbTabset, NgbTabTitle} from './tabset';
export {NgbTabsetConfig} from './tabset-config';

const NGB_TABSET_DIRECTIVES = [NgbTabset, NgbTab, NgbTabContent, NgbTabTitle];

@NgModule({declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [CommonModule]})
export class NgbTabsetModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NgbTabsetModule, providers: [NgbTabsetConfig]};
  }
}
