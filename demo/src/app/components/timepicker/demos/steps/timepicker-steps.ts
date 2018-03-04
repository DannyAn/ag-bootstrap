import {Component} from '@angular/core';
import {NgbTimeStruct} from '@ag-bootstrap/ag-bootstrap';

@Component({
  selector: 'ngbd-timepicker-steps',
  templateUrl: './timepicker-steps.html'
})
export class NgbdTimepickerSteps {
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;
}
