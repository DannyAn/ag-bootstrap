import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {NGB_CAROUSEL_DIRECTIVES, NgbSlideEvent} from './carousel';
import {NgbCarouselConfig} from './carousel-config';

export {NgbCarousel, NgbSlide, NgbSlideEvent} from './carousel';
export {NgbCarouselConfig} from './carousel-config';

@NgModule({declarations: NGB_CAROUSEL_DIRECTIVES, exports: NGB_CAROUSEL_DIRECTIVES, imports: [CommonModule]})
export class NgbCarouselModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NgbCarouselModule, providers: [NgbCarouselConfig]};
  }
}
