import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-table-paging',
  templateUrl: './table-paging.html',
  styles  : []
})
export class NgbdTablePaging implements OnInit {
  _dataSet = [];

  ngOnInit() {
    for (let i = 0; i < 46; i++) {
      this._dataSet.push({
        key    : i,
        name   : `Edward King ${i}`,
        age    : 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
  }
}

