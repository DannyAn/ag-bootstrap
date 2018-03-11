import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgbRating} from './rating';
import {NgbRatingConfig} from './rating-config';

export {NgbRating} from './rating';
export {NgbRatingConfig} from './rating-config';

@NgModule({declarations: [NgbRating], exports: [NgbRating], imports: [CommonModule]})
export class NgbRatingModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NgbRatingModule, providers: [NgbRatingConfig]};
  }
}
