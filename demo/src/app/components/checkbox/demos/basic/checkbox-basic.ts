import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-checkbox-basic',
  templateUrl: './checkbox-basic.html',
  styles  : []
})
export class NgbdCheckboxBasic {
  _checked = true;

  _console(value) {
    console.log(value);
  }
}

