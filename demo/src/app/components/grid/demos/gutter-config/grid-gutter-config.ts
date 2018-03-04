import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-grid-gutter-config',
  templateUrl: 'grid-gutter-config.html',
  styles  : [
    `
      .grid-config{
        background: #00A0E9;
        height: 120px;
        line-height: 120px;
        font-size: 13px;
      }
    `
  ]
})
export class NgbdGridGutterConfig {
  gutter = 16;
  count = 4;
  marksGutter = {
    8 : 8,
    16: 16,
    24: 24,
    32: 32,
    40: 40,
    48: 48
  };
  marksCount = {
    2 : 2,
    3 : 3,
    4 : 4,
    6 : 6,
    8 : 8,
    12: 12
  };

  generateArray(value) {
    return new Array(value);
  }
}
