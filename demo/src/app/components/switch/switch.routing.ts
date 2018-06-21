import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdSwitch } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdSwitch },
    { path: ':tab', component: NgbdSwitch }
  ])],
  exports: [RouterModule]
})
export class NgbdSwitchRoutingModule {
}
