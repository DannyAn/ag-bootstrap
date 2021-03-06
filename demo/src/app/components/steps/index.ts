export * from './steps.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { NgbdSteps } from './steps.component';
import { DEMO_DIRECTIVES } from './demos';
import { NgbdSharedModule } from '../../shared';
import { NgbdComponentsSharedModule } from '../shared';
import { NgbdStepsRoutingModule } from './steps.routing';

@NgModule({
  imports: [CommonModule, FormsModule, HttpModule,
    JsonpModule, NgbdSharedModule, NgbdComponentsSharedModule, NgbdStepsRoutingModule],
  exports: [NgbdSteps],
  declarations: [NgbdSteps, ...DEMO_DIRECTIVES]
})
export class NgbdStepsModule {

}
