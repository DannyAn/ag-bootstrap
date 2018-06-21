export * from './timeline.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbdTimeline } from './timeline.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdTimelineRoutingModule } from './timeline.routing';

@NgModule({
  imports: [CommonModule, FormsModule, HttpModule,
    JsonpModule, NgbdSharedModule, NgbdComponentsSharedModule, NgbdTimelineRoutingModule],
  exports: [NgbdTimeline],
  declarations: [NgbdTimeline, ...DEMO_DIRECTIVES]
})
export class NgbdTimelineModule {

}
