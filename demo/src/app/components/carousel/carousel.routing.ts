import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbdCarousel } from '.';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NgbdCarousel },
    { path: ':tab', component: NgbdCarousel }
  ])],
  exports: [RouterModule]
})
export class NgbdCarouselRoutingModule {
}
