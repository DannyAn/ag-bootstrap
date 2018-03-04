import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {regExpEscape, toString} from '../util/util';

@Component({
  selector: 'ngb-highlight',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ng-template ngFor [ngForOf]="parts" let-part let-isOdd="odd">` +
      `<span *ngIf="isOdd" class="{{highlightClass}}">{{part}}</span><ng-template [ngIf]="!isOdd">{{part}}</ng-template>` +
      `</ng-template>`,  // template needs to be formatted in a certain way so we don't add empty text nodes
  styles: [`
    .ngb-highlight {
      font-weight: bold;
    }
  `]
})
export class NgbHighlight implements OnChanges {
  parts: string[];

  @Input() highlightClass = 'ngb-highlight';
  @Input() result: string;
  @Input() term: string;

  ngOnChanges(changes: SimpleChanges) {
    const resultStr = toString(this.result);
    const resultLC = resultStr.toLowerCase();
    const termLC = toString(this.term).toLowerCase();
    let currentIdx = 0;

    if (termLC.length > 0) {
      this.parts = resultLC.split(new RegExp(`(${regExpEscape(termLC)})`)).map((part) => {
        const originalPart = resultStr.substr(currentIdx, part.length);
        currentIdx += part.length;
        return originalPart;
      });
    } else {
      this.parts = [resultStr];
    }
  }
}
