import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-menu-collapsed',
  templateUrl: './menu-collapsed.html',
  styles  : []
})
export class NgbdMenuCollapsed {
  isCollapsed = false;

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
}
