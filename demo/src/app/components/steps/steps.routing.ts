import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdSteps } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdSteps },
    { path: ':tab', component: NgbdSteps }
  ])],
  exports: [RouterModule]
})
export class NgbdStepsRoutingModule {
}
