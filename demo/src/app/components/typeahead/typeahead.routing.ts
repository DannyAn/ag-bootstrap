import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdTypeahead } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdTypeahead },
    { path: ':tab', component: NgbdTypeahead }
  ])],
  exports: [RouterModule]
})
export class NgbdTypeaheadRoutingModule {
}
