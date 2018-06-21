import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdTimeline } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdTimeline },
    { path: ':tab', component: NgbdTimeline }
  ])],
  exports: [RouterModule]
})
export class NgbdTimelineRoutingModule {
}
