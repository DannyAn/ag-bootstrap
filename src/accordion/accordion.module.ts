import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgbAccordion, NgbPanel, NgbPanelChangeEvent, NgbPanelContent, NgbPanelTitle} from './accordion';
import {NgbAccordionConfig} from './accordion-config';

export {NgbAccordion, NgbPanel, NgbPanelChangeEvent, NgbPanelContent, NgbPanelTitle} from './accordion';
export {NgbAccordionConfig} from './accordion-config';

const NGB_ACCORDION_DIRECTIVES = [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent];

@NgModule({declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [CommonModule]})
export class NgbAccordionModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbAccordionModule, providers: [NgbAccordionConfig]}; }
}
