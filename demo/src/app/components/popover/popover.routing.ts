import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdPopover } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdPopover },
    { path: ':tab', component: NgbdPopover }
  ])],
  exports: [RouterModule]
})
export class NgbdPopoverRoutingModule {
}
