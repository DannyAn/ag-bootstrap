import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdProgressbar } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdProgressbar },
    { path: ':tab', component: NgbdProgressbar }
  ])],
  exports: [RouterModule]
})
export class NgbdProgressbarRoutingModule {
}
