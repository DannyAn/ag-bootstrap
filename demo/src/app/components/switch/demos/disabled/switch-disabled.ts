import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-switch-disabled',
  templateUrl: './switch-disabled.html',
  styles  : []
})
export class NgbdSwitchDisabled {
  switchValue = false;
  isDisabled = true;
  toggleDisabled = () => {
    this.isDisabled = !this.isDisabled;
  }
}
