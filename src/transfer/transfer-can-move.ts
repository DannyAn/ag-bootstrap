import {Injectable} from '@angular/core';

import {TransferItem} from './transfer-item';

@Injectable()
export class TransferCanMove {
  direction: string;
  list: TransferItem[];
};