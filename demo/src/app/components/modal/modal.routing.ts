import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdModal } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdModal },
    { path: ':tab', component: NgbdModal }
  ])],
  exports: [RouterModule]
})
export class NgbdModalRoutingModule {
}
