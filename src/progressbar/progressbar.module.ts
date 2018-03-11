import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgbProgressbar} from './progressbar';
import {NgbProgressbarConfig} from './progressbar-config';

export {NgbProgressbar} from './progressbar';
export {NgbProgressbarConfig} from './progressbar-config';

@NgModule({declarations: [NgbProgressbar], exports: [NgbProgressbar], imports: [CommonModule]})
export class NgbProgressbarModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NgbProgressbarModule, providers: [NgbProgressbarConfig]};
  }
}
