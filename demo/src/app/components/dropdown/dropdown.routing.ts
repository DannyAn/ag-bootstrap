import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdDropdown } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdDropdown },
    { path: ':tab', component: NgbdDropdown }
  ])],
  exports: [RouterModule]
})
export class NgbdDropdownRoutingModule {
}
