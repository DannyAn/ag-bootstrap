import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdButtons } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdButtons },
    { path: ':tab', component: NgbdButtons }
  ])],
  exports: [RouterModule]
})
export class NgbdButtonsRoutingModule {
}
