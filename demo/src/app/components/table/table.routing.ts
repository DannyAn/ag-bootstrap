import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdTable } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdTable },
    { path: ':tab', component: NgbdTable }
  ])],
  exports: [RouterModule]
})
export class NgbdTableRoutingModule {
}
