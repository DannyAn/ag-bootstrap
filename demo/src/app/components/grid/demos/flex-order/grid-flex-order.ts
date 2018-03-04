import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-grid-flex-order',
  templateUrl: 'grid-flex-order.html',
  styles  : []
})
export class NgbdGridFlexOrder implements OnInit {
  orderList = [ 1, 2, 3, 4 ];

  ngOnInit() {
    setTimeout(_ => {
      this.orderList = [ ...this.orderList.reverse() ];
    }, 10000)
  }
}
