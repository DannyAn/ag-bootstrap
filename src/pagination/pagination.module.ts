import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgbPagination} from './pagination';
import {NgbPaginationConfig} from './pagination-config';

export {NgbPagination} from './pagination';
export {NgbPaginationConfig} from './pagination-config';

@NgModule({declarations: [NgbPagination], exports: [NgbPagination], imports: [CommonModule]})
export class NgbPaginationModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbPaginationModule, providers: [NgbPaginationConfig]}; }
}
