import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdTooltip } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdTooltip },
    { path: ':tab', component: NgbdTooltip }
  ])],
  exports: [RouterModule]
})
export class NgbdTooltipRoutingModule {
}
