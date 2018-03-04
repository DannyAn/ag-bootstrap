import {ModuleWithProviders, NgModule} from '@angular/core';

import {Placement} from '../util/positioning';

import {NgbPopover, NgbPopoverWindow} from './popover';
import {NgbPopoverConfig} from './popover-config';

export {Placement} from '../util/positioning';
export {NgbPopover} from './popover';
export {NgbPopoverConfig} from './popover-config';

@NgModule({declarations: [NgbPopover, NgbPopoverWindow], exports: [NgbPopover], entryComponents: [NgbPopoverWindow]})
export class NgbPopoverModule {
  static forRoot(): ModuleWithProviders { return {ngModule: NgbPopoverModule, providers: [NgbPopoverConfig]}; }
}
