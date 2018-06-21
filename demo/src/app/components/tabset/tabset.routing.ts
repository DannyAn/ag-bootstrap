import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdTabs } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdTabs },
    { path: ':tab', component: NgbdTabs }
  ])],
  exports: [RouterModule]
})
export class NgbdTabsRoutingModule {
}
