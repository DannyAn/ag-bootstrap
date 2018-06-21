import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdAccordion } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdAccordion },
    { path: ':tab', component: NgbdAccordion }
  ])],
  exports: [RouterModule]
})
export class NgbdAccordionRoutingModule {
}
