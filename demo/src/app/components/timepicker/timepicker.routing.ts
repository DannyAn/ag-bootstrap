import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdTimepicker } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdTimepicker },
    { path: ':tab', component: NgbdTimepicker }
  ])],
  exports: [RouterModule]
})
export class NgbdTimePickerRoutingModule {
}
