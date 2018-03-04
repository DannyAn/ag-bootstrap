import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-table-edit',
  templateUrl: './table-edit.html',
  styles  : []
})
export class NgbdTableEdit implements OnInit {
  editRow = null;
  tempEditObject = {};
  data = [
    {
      key    : 0,
      name   : 'Edward King 0',
      age    : 32,
      address: 'London, Park Lane no. 0',
    }
  ];

  edit(data) {
    this.tempEditObject[ data.key ] = { ...data };
    this.editRow = data.key;
  }

  save(data) {
    Object.assign(data, this.tempEditObject[ data.key ]);
    this.editRow = null;
  }

  cancel(data) {
    this.tempEditObject[ data.key ] = {};
    this.editRow = null;
  }

  ngOnInit() {
    this.data.forEach(item => {
      this.tempEditObject[ item.key ] = {};
    });
  }
}

