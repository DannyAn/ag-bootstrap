import { Component, OnInit } from '@angular/core';
//import { NzMessageService } from '../../../index.showcase';

@Component({
  selector: 'ngbd-transfer-advanced',
  templateUrl: 'transfer-advanced.html',
})
export class NgbdTransferAdvanced implements OnInit {
  list: any[] = [];
  ngOnInit() {
    this.getData();
  }

  getData() {
    const ret = [];
    for (let i = 0; i < 20; i++) {
      ret.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction: Math.random() * 2 > 1 ? 'right' : ''
      });
    }
    this.list = ret;
  }

  reload(direction: string) {
    this.getData();
    //this.msg.success(`your clicked ${direction}!`);
  }

  select(ret: any) {
    console.log('nzSelectChange', ret);
  }

  change(ret: any) {
    console.log('nzChange', ret);
  }

 // constructor(public msg: NzMessageService) {}
}
