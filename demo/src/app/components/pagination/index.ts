export * from './pagination.component';

import {NgModule} from '@angular/core';

import {NgbdSharedModule} from '../../shared';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdPagination} from './pagination.component';
import {DEMO_DIRECTIVES} from './demos';
import { NgbdPaginationRoutingModule } from './pagination.routing';

@NgModule({
  imports: [NgbdSharedModule, NgbdComponentsSharedModule, NgbdPaginationRoutingModule],
  exports: [NgbdPagination],
  declarations: [NgbdPagination, ...DEMO_DIRECTIVES]
})
export class NgbdPaginationModule {}
