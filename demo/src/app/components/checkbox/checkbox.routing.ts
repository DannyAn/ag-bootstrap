import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdCheckbox } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdCheckbox },
    { path: ':tab', component: NgbdCheckbox }
  ])],
  exports: [RouterModule]
})
export class NgbdCheckboxRoutingModule {
}
