import {ModuleWithProviders, NgModule} from '@angular/core';

import {Placement} from '../util/positioning';

import {NgbTooltip, NgbTooltipWindow} from './tooltip';
import {NgbTooltipConfig} from './tooltip-config';

export {Placement} from '../util/positioning';
export {NgbTooltip} from './tooltip';
export {NgbTooltipConfig} from './tooltip-config';

@NgModule({declarations: [NgbTooltip, NgbTooltipWindow], exports: [NgbTooltip], entryComponents: [NgbTooltipWindow]})
export class NgbTooltipModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbTooltipModule, providers: [NgbTooltipConfig]}; }
}
