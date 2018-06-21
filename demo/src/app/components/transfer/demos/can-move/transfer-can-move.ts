import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { TransferItem } from '@ag-bootstrap/ag-bootstrap';
import { TransferCanMove } from '@ag-bootstrap/ag-bootstrap';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'ngbd-transfer-can-move',
  templateUrl: 'transfer-can-move.html',
})
export class NgbdTransferCanMove implements OnInit {
  list: TransferItem[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        disabled: i % 3 < 1,
      });
    }

    [2, 3].forEach(idx => this.list[idx].direction = 'right');
  }

  canMove(arg: TransferCanMove): Observable<TransferItem[]> {
    if (arg.direction === 'right' && arg.list.length > 0) { arg.list.splice(0, 1); }
    // or
    // if (arg.direction === 'right' && arg.list.length > 0) delete arg.list[0];
    return of(arg.list).pipe(delay(1000));
  }

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: {}): void {
    console.log('nzChange', ret);
  }
}
