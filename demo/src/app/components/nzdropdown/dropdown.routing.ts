import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdDropDownExt } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdDropDownExt },
    { path: ':tab', component: NgbdDropDownExt }
  ])],
  exports: [RouterModule]
})
export class NgbdDropDownExtRoutingModule {
}
