import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdMenu } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdMenu },
    { path: ':tab', component: NgbdMenu }
  ])],
  exports: [RouterModule]
})
export class NgbdMenuRoutingModule {
}
