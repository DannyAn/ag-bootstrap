import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdAlert } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdAlert },
    { path: ':tab', component: NgbdAlert }
  ])],
  exports: [RouterModule]
})
export class NgbdAlertRoutingModule {
}
