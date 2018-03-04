import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-table-size',
  templateUrl: './table-size.html',
  styles  : [
      `
      .components-table-demo-control-bar {
        margin-bottom: 10px;
      }

      .components-table-demo-control-bar ::ng-deep .ant-form-item {
        margin-right: 16px;
        margin-bottom: 8px;
      }
    `
  ]
})
export class NgbdTableSize implements OnInit {
  _dataSet = [];
  _bordered = true;
  _loading = false;
  _pagination = true;
  _header = true;
  _title = true;
  _footer = true;
  _fixHeader = false;
  _size = 'small';

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this._dataSet.push({
        key        : i,
        name       : 'John Brown',
        age        : `${i}2`,
        address    : `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
      });
    }
  }
}

