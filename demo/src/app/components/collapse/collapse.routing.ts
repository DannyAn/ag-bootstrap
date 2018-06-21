import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdCollapse } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdCollapse },
    { path: ':tab', component: NgbdCollapse }
  ])],
  exports: [RouterModule]
})
export class NgbdCollapseRoutingModule {
}
