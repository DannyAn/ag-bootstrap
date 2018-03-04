
import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-buttons-basic',
  templateUrl: './buttons-basic.html'
})
export class NgbdButtonsBasic{
  model = {
    left: true,
    middle: false,
    right: false
  };

  _checked = true;

  _console(value) {
    console.log(value);
  }
}
