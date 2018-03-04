import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-table-fixed-header',
  templateUrl: './table-fixed-header.html',
  styles  : []
})
export class NgbdTableFixedHeader implements OnInit {
  data = [];

  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.data.push({
        name   : `Edward King ${i}`,
        age    : 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
  }
}

