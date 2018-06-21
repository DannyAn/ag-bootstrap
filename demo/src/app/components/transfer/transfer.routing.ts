import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdTransfer } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdTransfer },
    { path: ':tab', component: NgbdTransfer }
  ])],
  exports: [RouterModule]
})
export class NgbdTransferRoutingModule {
}
