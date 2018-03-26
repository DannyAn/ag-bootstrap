export * from './timeline.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbdTimeline } from './timeline.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';

@NgModule({
  imports: [CommonModule, FormsModule, HttpModule,
    JsonpModule, NgbdSharedModule, NgbdComponentsSharedModule],
  exports: [NgbdTimeline],
  declarations: [NgbdTimeline, ...DEMO_DIRECTIVES]
})
export class NgbdTimelineModule {

}
