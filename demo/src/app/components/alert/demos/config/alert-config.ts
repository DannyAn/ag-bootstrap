import {Component, Input} from '@angular/core';
import {NgbAlertConfig} from '@ag-bootstrap/ag-bootstrap';

@Component({
  selector: 'ngbd-alert-config',
  templateUrl: './alert-config.html',
  // add NgbAlertConfig  to the component providers
  providers: [NgbAlertConfig]
})
export class NgbdAlertConfig {
  @Input() public alerts: Array<string> = [];

  constructor(alertConfig: NgbAlertConfig) {
    // customize default values of alerts used by this component tree
    alertConfig.type = 'success';
    alertConfig.dismissible = false;
  }
}
