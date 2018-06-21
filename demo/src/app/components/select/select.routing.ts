import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdSelect } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdSelect },
    { path: ':tab', component: NgbdSelect }
  ])],
  exports: [RouterModule]
})
export class NgbdSelectRoutingModule {
}
