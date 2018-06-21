import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdRating } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdRating },
    { path: ':tab', component: NgbdRating }
  ])],
  exports: [RouterModule]
})
export class NgbdRatingRoutingModule {
}
