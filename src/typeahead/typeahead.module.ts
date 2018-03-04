import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgbHighlight} from './highlight';
import {NgbTypeahead, NgbTypeaheadSelectItemEvent} from './typeahead';
import {NgbTypeaheadConfig} from './typeahead-config';
import {NgbTypeaheadWindow} from './typeahead-window';

export {NgbHighlight} from './highlight';
export {NgbTypeahead, NgbTypeaheadSelectItemEvent} from './typeahead';
export {NgbTypeaheadConfig} from './typeahead-config';
export {NgbTypeaheadWindow} from './typeahead-window';

@NgModule({
  declarations: [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow],
  exports: [NgbTypeahead, NgbHighlight],
  imports: [CommonModule],
  entryComponents: [NgbTypeaheadWindow]
})
export class NgbTypeaheadModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbTypeaheadModule, providers: [NgbTypeaheadConfig]}; }
}
