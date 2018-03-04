import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-transfer-basic',
  templateUrl: 'transfer-basic.html',
})
export class NgbdTransferBasic implements OnInit {
  list: any[] = [];
  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        disabled: i % 3 < 1,
      });
    }

    [ 2, 3 ].forEach(idx => this.list[idx].direction = 'right');
  }

  select(ret: any) {
    console.log('nzSelectChange', ret);
  }

  change(ret: any) {
    console.log('nzChange', ret);
  }
}
