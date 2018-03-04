import { Component } from '@angular/core';
@Component({
  selector: 'ngbd-menu-expand',
  templateUrl: './menu-expand.html',
  styles  : []
})
export class NgbdMenuExpand {
  isOpenOne = true;
  isOpenTwo = false;
  isOpenThree = false;

  openChange(value) {
    if (value === 'one') {
      this.isOpenTwo = false;
      this.isOpenThree = false;
    } else if (value === 'two') {
      this.isOpenOne = false;
      this.isOpenThree = false;
    } else if (value === 'three') {
      this.isOpenOne = false;
      this.isOpenTwo = false;
    }

  }
}
