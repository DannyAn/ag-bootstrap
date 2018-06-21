import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdDatepicker } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdDatepicker },
    { path: ':tab', component: NgbdDatepicker }
  ])],
  exports: [RouterModule]
})
export class NgbdDatepickerRoutingModule {
}
