import { Component } from '@angular/core';

@Component({
  selector: 'ngbd-checkbox-group',
  templateUrl: './checkbox-group.html',
  styles  : []
})
export class NgbdCheckboxGroup {
  checkOptionsOne = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  checkOptionsTwo = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear', checked: true },
    { label: 'Orange', value: 'Orange' },
  ];
  checkOptionsThree = [
    { label: 'Apple', value: 'Apple', disabled: true, checked: true },
    { label: 'Pear', value: 'Pear', disabled: true },
    { label: 'Orange', value: 'Orange' },
  ];

  _log(value) {
    console.log(value);
  }
}
