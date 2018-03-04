import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-dropdown-button',
  templateUrl: './nzdropdown-button.html',
  styles  : [
      `
      nz-dropdown-button, nz-dropdown {
        float: left;
        margin: 2px;
      }

      nz-dropdown::after {
        content: '';
        clear: both;
      }
    `
  ]
})
export class NgbdDropDownButton {
  log(e) {
    console.log('click dropdown button');
  }
}
