export * from './carousel.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdCarousel } from './carousel.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdCarouselRoutingModule } from './carousel.routing';

@NgModule({
  imports: [CommonModule, NgbdSharedModule, NgbdComponentsSharedModule, NgbdCarouselRoutingModule],
  exports: [NgbdCarousel],
  declarations: [NgbdCarousel, ...DEMO_DIRECTIVES]
})
export class NgbdCarouselModule { }
