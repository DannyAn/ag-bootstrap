import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdPagination } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdPagination },
    { path: ':tab', component: NgbdPagination }
  ])],
  exports: [RouterModule]
})
export class NgbdPaginationRoutingModule {
}
