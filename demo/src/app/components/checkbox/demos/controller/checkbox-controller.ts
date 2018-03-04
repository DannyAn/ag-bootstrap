import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-checkbox-controller',
  templateUrl: './checkbox-controller.html',
  styles  : []
})
export class NgbdCheckboxController{
  isCheckedButton = true;
  isDisabledButton = false;
  checkButton = () => {
    this.isCheckedButton = !this.isCheckedButton;
  };
  disableButton = () => {
    this.isDisabledButton = !this.isDisabledButton;
  };
}
