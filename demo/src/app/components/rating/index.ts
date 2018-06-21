export * from './rating.component';

import { NgModule } from '@angular/core';

import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdRating } from './rating.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdRatingRoutingModule } from './rating.routing';

@NgModule({
  imports: [NgbdSharedModule, NgbdComponentsSharedModule, NgbdRatingRoutingModule],
  exports: [NgbdRating],
  declarations: [NgbdRating, ...DEMO_DIRECTIVES]
})
export class NgbdRatingModule { }
