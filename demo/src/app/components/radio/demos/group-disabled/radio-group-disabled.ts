import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngbd-radio-group-disabled',
  templateUrl: './radio-group-disabled.html',
  styles  : []
})
export class NgbdRadioGroupDisabled {
  radioValue = 'A';
  singleValue = false;
  isDisabled = true;
  toggleDisabled = () => {
    this.isDisabled = !this.isDisabled;
  };
}

