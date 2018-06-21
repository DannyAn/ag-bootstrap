import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdRadio } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdRadio },
    { path: ':tab', component: NgbdRadio }
  ])],
  exports: [RouterModule]
})
export class NgbdRadioRoutingModule {
}
